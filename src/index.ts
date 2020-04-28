import snippet from "./snippet";
import api from "./api";

declare global {
  interface Window {
    __ls: any;
  }
}

interface sdkOptions {
  devMode?: boolean;
}
let developerMode = false;
const isLoaded = () => window.__ls;

const safeCall = (name: string) => {
  return (...args: object[]) => {
    if (!isLoaded()) {
      if (process.env.NODE_ENV === "production") {
        throw new Error("LiveSession is not loaded. Call init() before calling other API functions");
      } else {
        console.warn("Skipping method, if you want to test it - enable devMode first");
        return;
      }
    }
    if (!api[name]) {
      throw new Error(`method "${name}" doesn't exist`);
    }
    return api[name](...args);
  };
};

const _init = (trackID: string, options?: object, sdkOptions?: sdkOptions) => {
  if (sdkOptions === undefined && process.env.NODE_ENV !== "production") {
    return null;
  }
  if (isLoaded()) {
    console.warn("LiveSession already inited (skipping init() call)");
    return;
  }
  if (!trackID) {
    throw new Error(`trackID is required`);
  }

  if (sdkOptions !== undefined) {
    if (sdkOptions.devMode && process.env.NODE_ENV !== "production") {
      developerMode = true;
    } else {
      throw new Error("Disable devMode before you run build script");
    }
  }
  snippet();
  return api.init(trackID, options);
};

export default {
  init: _init,
  getSessionURL: safeCall("getSessionURL"),
  identify: safeCall("identify"),
  invalidateSession: safeCall("invalidateSession"),
  newPageView: safeCall("newPageView"),
  setOptions: safeCall("setOptions"),
  setCustomParams: safeCall("setCustomParams"),
  off: safeCall("off"),
  optOut: safeCall("optOut"),
  debug: safeCall("debug"),
};
