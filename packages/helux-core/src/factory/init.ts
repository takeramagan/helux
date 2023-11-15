import { GLOBAL_REF } from 'helux-utils';
import { buildHeluxApi } from '../apiFactory';
import { createRoot, getRootData, HeluxRoot, setRootData } from './root';

export function initHeluxContext(options: {
  heluxCtxKey: string | symbol;
  reactLib: any;
  standalone?: boolean;
  transfer?: (existedRoot: any, newRoot: any) => any;
}) {
  const { inited } = getRootData();
  if (inited) return; // only can be call one time!

  const { heluxCtxKey, standalone, transfer, reactLib } = options;
  const existedRoot: HeluxRoot = GLOBAL_REF[heluxCtxKey];
  const done = (key: string | symbol) => {
    const ROOT = createRoot();
    setRootData({ ROOT, inited: true });
    GLOBAL_REF[key] = ROOT;
    return buildHeluxApi(reactLib);
  };

  if (!existedRoot) {
    return done(heluxCtxKey);
  }

  // found another version, but want to own dependency helux context
  if (standalone) {
    return done(`${String(heluxCtxKey)}_${Date.now()}`);
  }

  // now current helux will reuse existed helux context,
  // multi helux lib will share one hulex context,
  // no matter the helux in app1 and app2 is the same module or not,
  // it is ok that app1 can use a shared state exported from app2 by useShared directly,

  //try transfer legacy root by user custom transfer fn
  if (transfer) {
    const ROOT = createRoot(); // may a lower version root
    setRootData({ ROOT, inited: true });
    transfer(existedRoot, ROOT);
  }
  return buildHeluxApi(reactLib);
}
