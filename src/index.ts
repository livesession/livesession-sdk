import snippet from "./snippet";
import api from "./api";

declare global {
  interface Window {
    __ls: any;
  }
}

const prod = process.env.NODE_ENV === "production";

const sdkOptionsDefaults = {
  devMode: false,
};

const isLoaded = () => window.__ls;

const safeCall = (name: string) => {
  return (...args: object[]) => {
    if (!isLoaded()) {
      throw new Error("LiveSession is not loaded. Call init() before calling other API functions");
    }
    if (!api[name]) {
      throw new Error(`method "${name}" doesn't exist`);
    }
    if (sdkOptionsDefaults.devMode) {
      return console.warn(`Skipping method: ${name}, devMode enabled`);
    }

    return api[name](...args);
  };
};

const _init = (trackID: string, options?: object, sdkOptions = sdkOptionsDefaults) => {
  if (sdkOptions.devMode) {
    sdkOptionsDefaults.devMode = true;
    if (prod) {
      throw new Error("Disable devMode before running build script");
    }
  }
  if (isLoaded()) {
    console.warn("LiveSession already inited (skipping init() call)");
    return;
  }
  if (!trackID) {
    throw new Error(`trackID is required`);
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
