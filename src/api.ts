declare global {
  interface Window {
    __ls: any;
  }
}

const apiCall = (name: string, ...args: (object | boolean | string | void)[]) => {
  return window.__ls(name, ...args);
};

const api = {
  init: (trackID: string, options: object[]) => apiCall("init", trackID, options),
  getSessionURL: (callback: void) => apiCall("getSessionURL", callback),
  identify: (data: object) => apiCall("identify", data),
  invalidateSession: () => apiCall("invalidateSession"),
  newPageView: (options: object) => apiCall("newPageView", options),
  setOptions: (options: object) => apiCall("setOptions", options),
  setCustomParams: (data: object) => apiCall("setCustomParams", data),
  off: () => apiCall("off"),
  optOut: () => apiCall("optOut", true),
  debug: () => apiCall("debug", true),
};

export const SDK_VERSION = "1.1.0";
export default api;
