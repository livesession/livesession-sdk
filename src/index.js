import snippet from "./snippet";
import api from "./api";

const isLoaded = () => window.__ls;

const safeCall = (name) => {
  return (...args) => {
    if (!isLoaded()) {
      throw Error("LiveSession is not loaded. Call init() before calling other API functions");
    }
    if (!api[name]) {
      throw Error(`method "${name}" doesn't exist`);
    }
    return api[name](...args);
  };
};

const _init = (trackID, options) => {
  if (isLoaded()) {
    console.warn("LiveSession already inited (skipping init() call)");
    return;
  }
  if (!trackID) {
    throw Error(`trackID is required`);
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
