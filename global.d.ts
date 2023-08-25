import type { Agtk, cc, jsb } from '../dd-framework/lib/pgmmv';
import type CoreApi from '../dd-framework/src/plugins/core/api';

/**
 * Global namespace.
 */
declare global {
  /**
   * Agtk namespace.
   */
  const Agtk: Agtk;

  /**
   * Cocos namespace.
   */
  const cc: cc;

  /**
   * Cocos JSB namespace.
   */
  const jsb: jsb;

  /**
   * Dank Developer framework namespace.
   */
  const dd: {
    core: typeof CoreApi;
  };
}
