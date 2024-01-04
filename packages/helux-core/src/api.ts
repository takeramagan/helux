import { limuUtils, produce } from 'limu';
import { EVENT_NAME, LIMU_VER, RECORD_LOADING, VER } from './consts/user';
import { getAtom, isAtom, isDerivedAtom } from './factory/common/atom';
import { addMiddleware } from './factory/common/middleware';
import { addPlugin } from './factory/common/plugin';
import { emit, on } from './factory/common/userBus';
import { action } from './factory/createAction';
import { defineDeriveFnItem, defineDeriveTask, derive, deriveDict } from './factory/createDerived';
import { mutate, mutateDict, runMutate, runMutateTask } from './factory/createMutate';
import { atom, atomx, share, sharex } from './factory/createShared';
import { sync, syncer } from './factory/createSync';
import { watch } from './factory/createWatch';
import { currentDraftRoot } from './factory/creator/current';
import { flush, reactiveDesc } from './factory/creator/reactive';
import { init } from './factory/root';
import { getDeriveLoading, runDerive, runDeriveTask } from './helpers/fnRunner';
import { getRawState, getSnap } from './helpers/state';
import {
  getActionLoading,
  getMutateLoading,
  storeSrv,
  useActionLoading,
  useAtom,
  useAtomX,
  useDerived,
  useGlobalForceUpdate,
  useGlobalId,
  useLocalForceUpdate,
  useMutable,
  useMutateLoading,
  useOnEvent,
  useReactive,
  useReactiveX,
  useService,
  useWatch,
} from './hooks';
import { block, dynamicBlock, signal } from './signal';

const { shallowCompare, isDiff } = limuUtils;
const createShared = share; // for compatible wit v2 helux
const $ = signal; // signal api alias

const cst = {
  EVENT_NAME,
  RECORD_LOADING,
  VER,
  LIMU_VER,
};

// user can copy this file content to build a lib that can support another react like framework
export {
  atom,
  atomx,
  share,
  sharex,
  createShared,
  // derive api
  derive,
  deriveDict,
  defineDeriveTask,
  defineDeriveFnItem,
  runDerive,
  runDeriveTask,
  // watch api
  watch,
  // hooks api
  useAtom,
  useAtomX,
  useReactive,
  useReactiveX,
  useDerived,
  useWatch,
  useGlobalId,
  useService,
  useOnEvent,
  useMutable,
  useMutateLoading,
  useActionLoading,
  useLocalForceUpdate,
  useGlobalForceUpdate,
  // action api
  action,
  // signal api
  $,
  signal,
  block,
  dynamicBlock,
  // mutate api
  mutate,
  mutateDict,
  runMutate,
  runMutateTask,
  // sync api
  sync,
  syncer,
  // emit api
  emit,
  on,
  // init api
  init,
  // util api
  reactiveDesc,
  flush,
  currentDraftRoot,
  isAtom,
  isDerivedAtom,
  isDiff,
  shallowCompare,
  storeSrv,
  produce,
  getMutateLoading,
  getActionLoading,
  getDeriveLoading,
  getRawState,
  getSnap,
  getAtom,
  addMiddleware,
  addPlugin,
  cst,
};
