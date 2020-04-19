const SDK_VERSION = "1.1.0"
const _apiCall = (name, ...args) => {
    return window.__ls(fn, ...args)
}
const api = () => {
    init: (trackID, options) =>  _apiCall("init", trackID, options)
    getSessionURL: (clb) => _apiCall("getSessionURL", clb)
    identify: (data) => _apiCall("identify", data)
    invalidateSession: () => _apiCall("invalidateSession")
    newPageView: (options) => _apiCall("newPageView", options)
    setOptions: (options) => _apiCall("setOptions", options)
    setCustomParams: (data) => _apiCall("setCustomParams", data)
    off: () => _apiCall("off")
    optOut: (value) => _apiCall("optOut", value)
    debug: (value) => _apiCall("debug", value)
}

export default api
export default SDK_VERSION