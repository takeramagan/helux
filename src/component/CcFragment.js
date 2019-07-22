import React from 'react';
import {
  MODULE_DEFAULT, CC_FRAGMENT_PREFIX, CURSOR_KEY, CCSYNC_KEY,
  MODULE_GLOBAL, EFFECT_AVAILABLE, EFFECT_STOPPED, 
  SET_STATE, FORCE_UPDATE, SET_MODULE_STATE, 
} from '../support/constant';
import ccContext from '../cc-context';
import * as util from '../support/util';
import getFeatureStrAndStpMapping from '../core/base/get-feature-str-and-stpmapping';
import * as ev from '../core/event';
import * as ccRef from '../core/ref';
import * as base from '../core/base';
import extractStateByCcsync from '../core/state/extract-state-by-ccsync';
import changeRefState from '../core/state/change-ref-state';
// import watchKeyForRef from '../core/watch/watch-key-for-ref';
import getWatchSpec from '../core/watch/get-watch-spec';
import computeValueForRef from '../core/computed/compute-value-for-ref';
import getComputedSpec from '../core/computed/get-computed-spec';
import buildFragmentRefCc from '../core/base/build-fragment-ref-cc';

const {
  ccClassKey_ccClassContext_, fragmentFeature_classKey_,
  store: { getState, getPrevState },
  moduleName_stateKeys_,
  reducer: { _reducerModule_fnNames_ },
  computed: { _computedValue },
} = ccContext;
const okeys = util.okeys;

let idSeq = 0;
function getEId() {
  idSeq++;
  return Symbol(`__autoGen_${idSeq}__`);
}

function getOutProps(props){
  return props.props || props;//把最外层的props传递给用户
}
export default class CcFragment extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.__beforeMount = this.__beforeMount.bind(this);

    buildFragmentRefCc(this, props);
    const cc = this.cc;
    const { ccKey, ccUniqueKey, ccClassKey, ccState, refConnectedComputed, refComputed } = cc;
    const fragmentModule = ccState.module;

    // hook implement for CcFragment
    const __hookMeta = {
      isCcFragmentMounted: false,
      useStateCount: 0,
      useStateCursor: 0,
      stateArr: [],
      useEffectCount: 0,
      useEffectCursor: 0,
      effectCbArr: [],
      effectSeeAoa: [],// shouldEffectExecute array of array
      effectSeeResult: [],// collect every effect fn's shouldExecute result
      effectCbReturnArr: [],
    };
    this.__hookMeta = __hookMeta;
    const hook = {
      useState: initialState => {
        let cursor = __hookMeta.useStateCursor;
        const stateArr = __hookMeta.stateArr;
        __hookMeta.useStateCursor++;
        if (__hookMeta.isCcFragmentMounted === false) {//render CcFragment before componentDidMount
          __hookMeta.useStateCount++;
          stateArr[cursor] = initialState;
        } else {
          cursor = cursor % __hookMeta.useStateCount;
        }

        const setter = e => {
          if (e.currentTarget && e.type) {
            __sync({ [CURSOR_KEY]: cursor }, e);
          } else {
            stateArr[cursor] = e;
            this.cc.reactForceUpdate();
          }
        }
        return [stateArr[cursor], setter];
      },
      useEffect: (cb, shouldEffectExecute) => {
        let cursor = __hookMeta.useEffectCursor;
        __hookMeta.useEffectCursor++;
        if (__hookMeta.isCcFragmentMounted === false) {
          __hookMeta.effectCbArr.push(cb);
          __hookMeta.effectSeeAoa.push(shouldEffectExecute);
          __hookMeta.useEffectCount++;
        } else {
          // if code running jump into this block, CcFragment already mounted, and now compute result for didUpdate
          cursor = cursor % __hookMeta.useEffectCount;
          if (Array.isArray(shouldEffectExecute)) {
            const len = shouldEffectExecute.length;
            if (len == 0) {
              __hookMeta.effectSeeResult[cursor] = false;// effect fn will been executed only in didMount
            } else {// compare prevSee and curSee
              let effectSeeResult = false;
              const prevSeeArr = __hookMeta.effectSeeAoa[cursor];
              if (!prevSeeArr) {
                effectSeeResult = true;
              } else {
                for (let i = 0; i < len; i++) {
                  if (shouldEffectExecute[i] !== prevSeeArr[i]) {
                    effectSeeResult = true;
                    break;
                  }
                }
              }
              __hookMeta.effectSeeAoa[cursor] = shouldEffectExecute;
              __hookMeta.effectSeeResult[cursor] = effectSeeResult;
              if (effectSeeResult) __hookMeta.effectCbArr[cursor] = cb;
            }
          } else {
            __hookMeta.effectSeeResult[cursor] = true;// effect fn will always been executed in didMount and didUpdate
            __hookMeta.effectSeeAoa[cursor] = shouldEffectExecute;
            __hookMeta.effectCbArr[cursor] = cb;
          }
        }
      }
    };

    const dispatcher = ccRef.getDispatcherRef();

    const __sync = (spec, e) => {
      if (spec[CURSOR_KEY] !== undefined) {//来自hook生成的setter调用
        const _cursor = spec[CURSOR_KEY];
        __hookMeta.stateArr[_cursor] = e.currentTarget.value;
        this.cc.reactForceUpdate();
        return;
      }

      const mockE = base.buildMockEvent(spec, e);
      if (!mockE) return;//参数无效

      const currentTarget = mockE.currentTarget;
      const dataset = currentTarget.dataset;

      if (e && e.stopPropagation) e.stopPropagation();

      const ccsync = dataset.ccsync;
      if (ccsync.startsWith('/')) {
        dataset.ccsync = `${ccState.module}${ccsync}`;//附加上默认模块值
      }

      if (ccsync.includes('/')) {// syncModuleState 同步模块的state状态
        dispatcher.$$sync(mockE);
      } else {// syncLocalState 同步本地的state状态
        const { state } = extractStateByCcsync(dataset.ccsync, currentTarget.value, dataset.ccint, this.state, mockE.isToggleBool);
        __fragmentParams.setState(state);
      }
    };

    const effectItems = [];// {fn:function, status:0, eId:'', immediate:true}
    const eid_effectReturnCb_ = {};// fn

    this.__staticEffectMeta = {
      effectItems,
      eid_effectReturnCb_,
    };

    /** build __fragmentParams */
    const ctx = ccClassKey_ccClassContext_[ccClassKey];
    let isWatchDefined = false;
    let isComputedDefined = false;
    const connectedComputed = ctx.connectedComputed || {};
    const connectedState = ctx.connectedState || {};

    const moduleState = getState(fragmentModule);
    const outProps = getOutProps(props);
    const moduleComputed = _computedValue[fragmentModule] || {};

    const __fragmentParams = {
      module: fragmentModule,
      isCcFragment: true,
      refComputed,
      refConnectedComputed,
      connectedComputed,
      moduleComputed,
      connectedState,
      moduleState,
      // 新增defineEffect相关的支持
      defineEffect: (fn, stateKeys, eId, immediate = true) => {
        if (typeof fn !== 'function') throw new Error('type of defineEffect first param must be function');
        if (stateKeys !== null && stateKeys !== undefined) {
          if (!Array.isArray(stateKeys)) throw new Error('type of defineEffect second param must be one of them(array, null, undefined)');
        }

        const _fn = fn.bind(this, this.__fragmentParams);
        const _eId = eId || getEId();
        const effectItem = { fn: _fn, stateKeys, status: EFFECT_AVAILABLE, eId: _eId, immediate };
        effectItems.push(effectItem);
      },
      stopEffect: (eId) => {
        const target = effectItems.find(v => v.eId === eId);
        if (target) target.status = EFFECT_STOPPED;
      },
      resumeEffect: (eId) => {
        const target = effectItems.find(v => v.eId === eId);
        if (target) target.status = EFFECT_AVAILABLE;
      },
      removeEffect: (eId) => {
        const targetIdx = effectItems.findIndex(v => v.eId === eId);
        if (targetIdx >= 0) effectItems.splice(targetIdx, 1);
      },
      stopAllEffect: () => {
        effectItems.forEach(v => v.status = EFFECT_STOPPED);
      },
      resumeAllEffect: () => {
        effectItems.forEach(v => v.status = EFFECT_AVAILABLE);
      },
      removeAllEffect: () => {
        effectItems.length = 0;
      },
      defineWatch: (watch, immediateOpt) => {
        if (isWatchDefined) throw new Error('defineWatch can only been called one time');
        const watchSpec = getWatchSpec(watch, this.__fragmentParams, ccState.module);
        cc.watch = watch;
        cc.watchSpec = watchSpec;
      },
      defineComputed: (computed) => {
        if (isComputedDefined) throw new Error('defineComputed can only been called one time');
        const computedSpec = getComputedSpec(computed, this.__fragmentParams, ccState.module);
        cc.computed = computed;
        cc.computedSpec = computedSpec;
      },
      settings: {},
      reducer: {},
      lazyReducer: {},
      // ------ end ------

      //对布尔值自动取反
      syncBool: (e, delay = -1, idt = '') => {
        if (typeof e === 'string') return __sync.bind(null, { [CCSYNC_KEY]: e, type: 'bool', delay, idt });
        __sync({ type: 'bool' }, e);
      },
      //if <Input onChange={(value:string, value2:string)=>void} />
      // <Input onChange={ctx.sync} /> not work!!!
      // <Input onChange={ctx.sync('foo/f1')} /> ok
      // only <input data-ccsync="foo/f1" onChange={ctx.sync} /> ok
      // only <input onChange={ctx.sync('foo/f1')} /> ok
      sync: (e, val, delay = -1, idt = '') => {
        if (typeof e === 'string') return __sync.bind(null, { [CCSYNC_KEY]: e, type: 'val', val, delay, idt });
        __sync({ type: 'val' }, e);//allow <input data-ccsync="foo/f1" onChange={ctx.sync} />
      },

      //因为val可以是任意类型值，所以不再需要提供setInt
      set: (ccsync, val, delay, idt) => {
        __sync({ [CCSYNC_KEY]: ccsync, type: 'val', val, delay, idt });
      },
      //对布尔值自动取反
      setBool: (ccsync, delay = -1, idt = '') => {
        __sync({ [CCSYNC_KEY]: ccsync, type: 'bool', delay, idt });
      },

      // <Input onChange={ctx.syncInt} /> not work!!!
      // <Input onChange={ctx.syncInt('foo/bar')} /> ok
      // <input onChange={ctx.syncInt('foo/bar')} /> ok
      // <input data-ccsync="foo/f1" onChange={ctx.syncInt('foo/fq')} /> ok
      syncInt: (e, delay = -1, idt = '') => {
        if (typeof e === 'string') return __sync.bind(null, { [CCSYNC_KEY]: e, type: 'int', delay, idt });
        __sync({ type: 'int' }, e);//<input data-ccsync="foo/f1" onChange={ctx.syncInt} />
      },

      onUrlChanged: (cb) => {
        this.cc.onUrlChanged = cb.bind(this);
      },
      hook,
      emit: (event, ...args) => {
        ev.findEventHandlersToPerform(event, { identity: null }, ...args);
      },
      emitIdentity: (event, identity, ...args) => {
        ev.findEventHandlersToPerform(event, { identity }, ...args);
      },
      on: (event, handler) => {
        ev.bindEventHandlerToCcContext(ccState.module, ccClassKey, ccUniqueKey, event, null, handler);
      },
      onIdentity: (event, identity, handler) => {
        ev.bindEventHandlerToCcContext(ccState.module, ccClassKey, ccUniqueKey, event, identity, handler);
      },
      dispatch: (paramObj, payloadWhenFirstParamIsString, userInputDelay, userInputIdentity) => {
        const stateModule = ccState.module;
        const d = dispatcher.__$$getDispatchHandler(this, this.state, false, ccKey, ccUniqueKey, ccClassKey, stateModule, stateModule, null, null, -1)
        return d(paramObj, payloadWhenFirstParamIsString, userInputDelay, userInputIdentity);
      },
      lazyDispatch: (paramObj, payloadWhenFirstParamIsString, userInputDelay, userInputIdentity) => {
        const stateModule = ccState.module;
        const d = dispatcher.__$$getDispatchHandler(this, this.state, true, ccKey, ccUniqueKey, ccClassKey, stateModule, stateModule, null, null, -1)
        return d(paramObj, payloadWhenFirstParamIsString, userInputDelay, userInputIdentity);
      },

      invoke: dispatcher.__$$getInvokeHandler(this, fragmentModule, ccKey, ccUniqueKey, ccClassKey),
      lazyInvoke: dispatcher.__$$getInvokeHandler(this, fragmentModule, ccKey, ccUniqueKey, ccClassKey, { isLazy: true }),

      setModuleState: (module, state, delay, identity) => {
        let _module = module, _state = state, _delay = delay, _identity = identity;
        if (typeof module === 'object') {
          _module = ccState.module;
          _state = module;
          _delay = state;
          _identity = delay;
        }
        changeRefState(_state, {
          calledBy: SET_MODULE_STATE, ccKey, ccUniqueKey, module: _module, delay: _delay, identity: _identity
        }, this);
      },
      setGlobalState: (state, delay, identity) => {
        this.__fragmentParams.setModuleState(MODULE_GLOBAL, state, delay, identity);
      },
      state: mergedState,
      prevState: mergedState,
      props: outProps,
      prevProps: outProps,
      fragmentProps: props,
      setState: (state, cb, delay, identity) => {
        changeRefState(state, {
          calledBy: SET_STATE, ccKey, ccUniqueKey, module: fragmentModule, cb, delay, identity
        }, this);
      },
      forceUpdate: (cb, delay, identity) => {
        changeRefState(this.state, {
          calledBy: FORCE_UPDATE, ccKey, ccUniqueKey, module: fragmentModule, cb, delay, identity
        }, this);
      },
      changeState: (state, option)=> {
        changeRefState(state, option, this);
      }
    };
    this.__fragmentParams = __fragmentParams;

    this.__beforeMount();
  }

  __beforeMount() {
    const { setup, bindCtxToMethod } = this.props;
    const ctx = this.__fragmentParams;

    const reducer = ctx.reducer;
    const lazyReducer = ctx.lazyReducer;
    const thisCc = this.cc;
    const thisState = this.state;
    const { connect, module } = thisCc.ccState;
    const dispatch = this.__fragmentParams.dispatch;
    const lazyDispatch = this.__fragmentParams.lazyDispatch;
    const connectModules = okeys(connect);

    const allModules = connectModules.slice();
    if (!allModules.includes(module)) allModules.push(module);

    //向实例的reducer里绑定方法，key:{module} value:{reducerFn}
    //为了性能考虑，只绑定所属的模块和已连接的模块的reducer方法
    allModules.forEach(m => {
      const refReducerFnObj = util.safeGetObjectFromObject(reducer, m);
      const refLazyReducerFnObj = util.safeGetObjectFromObject(lazyReducer, m);
      const fnNames = _reducerModule_fnNames_[m] || [];
      fnNames.forEach(fnName => {
        refReducerFnObj[fnName] = (payload, delay, idt) => dispatch(`${m}/${fnName}`, payload, delay, idt);
        refLazyReducerFnObj[fnName] = (payload, delay, idt) => lazyDispatch(`${m}/${fnName}`, payload, delay, idt);
      });
    });

    //先调用setup，setup可能会定义computed,watch，同时也可能调用ctx.reducer,所以setup放在fill reducer之后，分析computedSpec之前
    if (setup) {
      if (typeof setup !== 'function') throw new Error('type of setup must be function');
      const settingsObj = setup(this.__fragmentParams) || {};
      if (!util.isPlainJsonObject(settingsObj)) throw new Error('type of setup return result must be an plain json object');
      const globalBindCtx = ccContext.bindCtxToMethod;

      //优先读自己的，再读全局的
      if (bindCtxToMethod === true || (globalBindCtx === true && bindCtxToMethod !== false)) {
        okeys(settingsObj).forEach(name => {
          const settingValue = settingsObj[name];
          if (typeof settingValue === 'function') settingsObj[name] = settingValue.bind(this, ctx);
        });
      }
      ctx.settings = settingsObj;
    }

    const computedSpec = thisCc.computedSpec;
    //触发计算computed
    if (computedSpec) {
      const refComputed = thisCc.refComputed, refConnectedComputed = thisCc.refConnectedComputed;
      //这里操作的是moduleState
      computeValueForRef(module, computedSpec, refComputed, refConnectedComputed, thisState, thisState, this.__fragmentParams);
      connectModules.forEach(m => {
        const mState = getState(m);
        computeValueForRef(m, computedSpec, refComputed, refConnectedComputed, mState, mState, this.__fragmentParams);
      });
    }
  }

  executeHookEffect(callByDidMount) {
    const ctx = this.__fragmentParams;
    const { effectCbArr, effectCbReturnArr } = this.__hookMeta;
    if (callByDidMount) {
      this.__hookMeta.isCcFragmentMounted = true;
      effectCbArr.forEach(cb => {
        const cbReturn = cb(ctx);
        if (typeof cbReturn === 'function') {
          effectCbReturnArr.push(cbReturn);
        } else {
          effectCbReturnArr.push(null);
        }
      });
    } else {
      const { effectSeeResult } = this.__hookMeta;
      effectCbArr.forEach((cb, idx) => {
        const shouldEffectExecute = effectSeeResult[idx];
        if (shouldEffectExecute) {
          const cbReturn = cb(ctx);
          if (typeof cbReturn === 'function') {
            effectCbReturnArr[idx] = cbReturn;
          }
        }
      });
    }
  }
  executeSetupEffect(callByDidMount) {
    const { effectItems, eid_effectReturnCb_ } = this.__staticEffectMeta;
    const ctx = this.__fragmentParams;

    if (callByDidMount) {
      effectItems.forEach(item => {
        if (item.immediate === false) return;
        const cb = item.fn(ctx);
        if (cb) eid_effectReturnCb_[item.eId] = cb;
      });
    } else {//callByDidUpdate
      const prevState = ctx.prevState;
      const curState = this.state;
      const toBeExecutedFns = [];
      effectItems.forEach(item => {
        const { status, stateKeys, fn, eId } = item;
        if (status === EFFECT_STOPPED) return;
        if (stateKeys) {
          const keysLen = stateKeys.length;
          if (keysLen === 0) return;
          let shouldEffectExecute = false;
          for (let i = 0; i < keysLen; i++) {
            const key = stateKeys[i];
            let targetCurState, targetPrevState, targetKey;
            if (key.includes('/')) {
              const [module, unmoduledKey] = key.split('/');
              const prevState = getPrevState(module);
              if (!prevState) {
                util.justWarning(`key[${key}] is invalid, its module[${module}] has not been declared in store!`);
                continue;
              }
              if (!moduleName_stateKeys_[module].includes(unmoduledKey)) {
                util.justWarning(`key[${key}] is invalid, its unmoduledKey[${unmoduledKey}] has not been declared in state!`);
                continue;
              }
              targetCurState = getState(module);
              targetPrevState = prevState;
              targetKey = unmoduledKey;
            } else {
              targetCurState = curState;
              targetPrevState = prevState;
              targetKey = key;
            }

            if (targetPrevState[targetKey] !== targetCurState[targetKey]) {
              shouldEffectExecute = true;
              break;
            }
          }
          if (shouldEffectExecute) {
            toBeExecutedFns.push({fn, eId});
          }
        } else {
          toBeExecutedFns.push({fn, eId});
        }
      });

      toBeExecutedFns.forEach(item=>{
        const {fn, eId} = item;
        const cb = fn(ctx);
        if (cb) eid_effectReturnCb_[eId] = cb;
      });
    }
  }
  componentDidMount() {
    this.executeSetupEffect(true);
    this.executeHookEffect(true);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState;
  }
  componentWillUpdate(nextProps, nextState) {
    //注意这里，一定要每次都取最新的
    this.__fragmentParams.props = getOutProps(nextProps);
    this.__fragmentParams.state = nextState;
  }
  componentDidUpdate(prevProps, prevState) {
    this.executeSetupEffect();
    this.executeHookEffect();
    //!!! 将最新的state，props记录为prevState，prevProps，方便下一轮渲染用
    this.__fragmentParams.prevState = this.state;
    this.__fragmentParams.prevProps = this.__fragmentParams.props;
  }
  componentWillUnmount() {
    const ctx = this.__fragmentParams;
    this.__hookMeta.effectCbReturnArr.forEach(cb => {
      if (typeof cb === 'function') cb(ctx);
    });
    const eid_effectReturnCb_ = this.__staticEffectMeta.eid_effectReturnCb_;
    Object.getOwnPropertySymbols(eid_effectReturnCb_).forEach(symbolKey => {
      const cb = eid_effectReturnCb_[symbolKey];
      if (typeof cb === 'function') cb(ctx);
    });
    okeys(eid_effectReturnCb_).forEach(eId => {
      const cb = eid_effectReturnCb_[eId];
      if (typeof cb === 'function') cb(ctx);
    });

    const { ccUniqueKey, ccClassKey } = this.cc.ccState;
    ev.offEventHandlersByCcUniqueKey(ccUniqueKey);
    ccRef.unsetRef(ccClassKey, ccUniqueKey);
    if (super.componentWillUnmount) super.componentWillUnmount();

    this.__$$isUnmounted = true;
  }
  render() {
    const { children, render } = this.props
    const view = render || children;
    if (typeof view === 'function') {
      // return view(this.__fragmentParams) || React.createElement(Fragment);
      return view(this.__fragmentParams) || React.createElement('span', {style:{display:'none'}});
    } else {
      if (React.isValidElement(view)) {
        util.justWarning(`you are trying to specify a react dom to be CcFragment's children, it will never been rendered again no matter how your state changed!!!`);
      }
      return view;
    }
  }

}