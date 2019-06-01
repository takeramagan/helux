import React, { Component, Fragment } from 'react';
import {
  MODULE_DEFAULT, CC_FRAGMENT_PREFIX, CURSOR_KEY, CCSYNC_KEY,
  MODULE_GLOBAL, STATE_FOR_ALL_CC_INSTANCES_OF_ONE_MODULE
} from '../support/constant';
import ccContext from '../cc-context';
import * as util from '../support/util';
import getFeatureStrAndStpMapping from '../core/base/get-feature-str-and-stpmapping';
import * as ev from '../core/event';
import * as ccRef from '../core/ref';
import * as base from '../core/base';
import extractStateByCcsync from '../core/state/extract-state-by-ccsync';

const { ccClassKey_ccClassContext_, fragmentFeature_classKey_, computed, store } = ccContext;

/**
 * 根据connect参数动态的把CcFragment划为某个ccClassKey的实例，同时计算出stateToPropMapping值
 * @param connectSpec 形如: {foo:'*', bar:['b1', 'b2']}
 */
function getFragmentClassKeyAndStpMapping(connectSpec) {
  if (!util.isObjectNotNull(connectSpec)) {//代表没有connect到store任何模块的CcFragment
    return { ccClassKey: `${CC_FRAGMENT_PREFIX}_0`, stateToPropMapping: null };
  }

  const {featureStr, stateToPropMapping}  = getFeatureStrAndStpMapping(connectSpec);
  let ccClassKey = fragmentFeature_classKey_[featureStr];
  if (ccClassKey) {
    return { ccClassKey, stateToPropMapping };
  } else {
    const oldFragmentNameCount = ccContext.fragmentNameCount;
    const fragmentNameCount = oldFragmentNameCount + 1;
    ccContext.fragmentNameCount = fragmentNameCount;
    ccClassKey = `${CC_FRAGMENT_PREFIX}_${fragmentNameCount}`;
    fragmentFeature_classKey_[featureStr] = ccClassKey;
    return { ccClassKey, stateToPropMapping };
  }
}

const cursorKey = CURSOR_KEY;
const ccSyncKey = CCSYNC_KEY;

export default class CcFragment extends Component {
  constructor(props, context) {
    super(props, context);

    let { ccKey, connect: connectSpec = {}, state={}, onUrlChanged } = props;
    const { ccClassKey, stateToPropMapping } = getFragmentClassKeyAndStpMapping(connectSpec);

    let ccUniqueKey = '', isCcUniqueKeyAutoGenerated = false;
    if (ccKey) {// for CcFragment, if user supply ccKey to props, ccUniqueKey will equal ccKey
      ccUniqueKey = ccKey;
    } else {
      const { ccKey: ck, ccUniqueKey: cuk, isCcUniqueKeyAutoGenerated: ag } = base.computeCcUniqueKey(false, ccClassKey, ccKey, true);
      ccUniqueKey = cuk;
      isCcUniqueKeyAutoGenerated = ag;
      ccKey = ck;
    }

    base.buildCcClassContext(ccClassKey, MODULE_DEFAULT, [], [], [], [], stateToPropMapping, true);
    ccRef.setRef(this, false, ccClassKey, ccKey, ccUniqueKey, {}, true);

    // for CcFragment, just put ccClassKey to module's cc class keys
    const { moduleName_ccClassKeys_ } = ccContext;
    const ccClassKeys = util.safeGetArrayFromObject(moduleName_ccClassKeys_, MODULE_DEFAULT);
    if (!ccClassKeys.includes(ccClassKey)) ccClassKeys.push(ccClassKey);

    const ctx = ccClassKey_ccClassContext_[ccClassKey];
    const connectedComputed = ctx.connectedComputed || {};
    const connectedState = ctx.connectedState || {};
    
    // only bind reactForceUpdateRef for CcFragment
    const reactForceUpdateRef = this.forceUpdate.bind(this);
    const ccState = {
      module: MODULE_DEFAULT, ccClassKey, ccKey, ccUniqueKey, isCcUniqueKeyAutoGenerated, 
      stateToPropMapping, renderCount: 0, initTime: Date.now()
    };

    if(onUrlChanged)onUrlChanged = onUrlChanged.bind(this);
    this.cc = {
      onUrlChanged,
      ccState,
      reactForceUpdate: (state, cb) => {
        ccState.renderCount += 1;
        reactForceUpdateRef(state, cb);
      },
    };

    // hook implement fo CcFragment
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
    }
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
          if(e.currentTarget && e.type){
            this.__fragmentParams.sync(e, { [cursorKey]: cursor });
          }else{
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
    }

    const dispatcher = ccRef.getDispatcherRef();
    this.state = state;
    const __fragmentParams = {
      connectedComputed,
      connectedState,
      hook,
      emit: (event, ...args) => {
        ev.findEventHandlersToPerform(event, { identity: null }, ...args);
      },
      emitIdentity: (event, identity, ...args)=>{
        ev.findEventHandlersToPerform(event, { identity }, ...args);
      },
      on: (event, handler)=>{
        ev.bindEventHandlerToCcContext(MODULE_DEFAULT, ccClassKey, ccUniqueKey, event, null, handler);
      },
      onIdentity: (event, identity, handler)=>{
        ev.bindEventHandlerToCcContext(MODULE_DEFAULT, ccClassKey, ccUniqueKey, event,  identity, handler);
      },
      dispatch: dispatcher.__$$getDispatchHandler(STATE_FOR_ALL_CC_INSTANCES_OF_ONE_MODULE, MODULE_DEFAULT, null, null, null, -1, ccKey),
      effect: dispatcher.__$$getEffectHandler(ccKey),
      xeffect: dispatcher.__$$getXEffectHandler(ccKey),
      //seat1, seat2仅仅用于占位
      sync: (e, cursor, seat1, seat2)=>{
        if(typeof e === 'string'){
          const syncFn = __fragmentParams.sync.bind(null, {[ccSyncKey]:e}, cursor);//此时的e是ccsync, cursor是bindedInt
          return syncFn;
        } else {
          if(cursor!==null && typeof cursor === 'object' && cursor[cursorKey]!==undefined){// syncLocalHookState 同步本地的hook状态
            const _cursor = cursor[cursorKey];
            __hookMeta.stateArr[_cursor] = e.currentTarget.value;
            this.cc.reactForceUpdate();
          }else{
            let ccint='', ccsync='', value='',mockE = e;
            if(typeof e === 'object' && e[ccSyncKey]!==undefined){
              ccint = cursor;
              ccsync = e[ccSyncKey];
              value = seat1; //这个值由函数注入
              mockE = { currentTarget: { value, dataset: { ccsync, ccint } } };
            }else{
              const currentTarget = e.currentTarget;
              value = currentTarget.value;
              const dataset = currentTarget.dataset;
              ccint = dataset.ccint;
              ccsync = dataset.ccsync;
            }
            if(e.stopPropagation)e.stopPropagation();

            if (!ccsync) {
              return util.justWarning(`data-ccsync attr no found, you must define it while using syncLocal`);
            }
          
            if(ccsync.includes('/')){// syncModuleState 同步模块的state状态
              dispatcher.$$sync(mockE, STATE_FOR_ALL_CC_INSTANCES_OF_ONE_MODULE);
            }else{// syncLocalState 同步本地的state状态
              const { state } = extractStateByCcsync(ccsync, value, ccint, this.state);
              __fragmentParams.setState(state);
            }
          }
        }
      },
      setModuleState: (module, state, lazyMs) => {
        dispatcher.$$changeState(state, {
          ccKey, module, stateFor: STATE_FOR_ALL_CC_INSTANCES_OF_ONE_MODULE,
          broadcastTriggeredBy: null, lazyMs
        });
      },
      setGlobalState: (state, lazyMs) => {
        dispatcher.$$changeState(state, {
          ccKey, MODULE_GLOBAL, stateFor: STATE_FOR_ALL_CC_INSTANCES_OF_ONE_MODULE, broadcastTriggeredBy: null, lazyMs
        });
      },
      state: this.state,
      props,
      setState: (state)=>{
        this.setState(state, ()=> this.cc.reactForceUpdate());
      }
    };
    this.__fragmentParams = __fragmentParams;
  }
  componentDidMount() {
    const { effectCbArr, effectCbReturnArr } = this.__hookMeta;
    this.__hookMeta.isCcFragmentMounted = true;
    effectCbArr.forEach(cb => {
      const cbReturn = cb();
      if (typeof cbReturn === 'function') {
        effectCbReturnArr.push(cbReturn);
      } else {
        effectCbReturnArr.push(null);
      }
    });
  }
  componentDidUpdate() {
    const { effectCbArr, effectCbReturnArr, effectSeeResult } = this.__hookMeta;
    effectCbArr.forEach((cb, idx) => {
      const shouldEffectExecute = effectSeeResult[idx];
      if (shouldEffectExecute) {
        const cbReturn = cb();
        if (typeof cbReturn === 'function') {
          effectCbReturnArr[idx] = cbReturn;
        }
      }
    });
  }
  shouldComponentUpdate() {
    return false;
  }
  componentWillUnmount() {
    this.__hookMeta.effectCbReturnArr.forEach(cb => {
      if (cb) cb();
    });

    const { ccUniqueKey, ccClassKey } = this.cc.ccState;
    ev.offEventHandlersByCcUniqueKey(ccUniqueKey);
    ccRef.unsetRef(ccClassKey, ccUniqueKey);
    if (super.componentWillUnmount) super.componentWillUnmount();
  }
  render() {
    const { children, render } = this.props
    const view = render || children;
    if (typeof view === 'function') {
      this.__fragmentParams.state = this.state;//注意这里，一定要每次都取最新的
      return view(this.__fragmentParams) || React.createElement(Fragment);
    } else {
      if(React.isValidElement(view)){
        util.justWarning(`you are trying to specify a react dom to be CcFragment's children, it will never been rendered again no matter how your state changed!!!`);
      }
      return view;
    }
  }

}