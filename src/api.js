export const SDK_VERSION = "1.1.0";

const apiCall = (name, ...args) => {
  return window.__ls(name, ...args);
};

const api = {
  init: (trackID, options) => apiCall("init", trackID, options),
  getSessionURL: (clb) => apiCall("getSessionURL", clb),
  identify: (data) => apiCall("identify", data),
  invalidateSession: () => apiCall("invalidateSession"),
  newPageView: (options) => apiCall("newPageView", options),
  setOptions: (options) => apiCall("setOptions", options),
  setCustomParams: (data) => apiCall("setCustomParams", data),
  off: () => apiCall("off"),
  optOut: (value) => apiCall("optOut", value),
  debug: (value) => apiCall("debug", value),
};

export default api;
