Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("./snippet");
const api_1 = require("./api");
const sdkOptionsDefaults = {
    devMode: false,
};
let opts = sdkOptionsDefaults;
const isLoaded = () => window.__ls;
const safeCall = (name) => {
    return (...args) => {
        if (!isLoaded()) {
            throw new Error("LiveSession is not loaded. Call init() before calling other API functions");
        }
        if (!api_1.default[name]) {
            throw new Error(`method "${name}" doesn't exist`);
        }
        if (opts.devMode) {
            return console.warn(`Skipping method: ${name}, devMode enabled`);
        }
        return api_1.default[name](...args);
    };
};
const _init = (trackID, options, sdkOptions = sdkOptionsDefaults) => {
    opts = Object.assign(Object.assign({}, sdkOptionsDefaults), sdkOptions);
    if (isLoaded()) {
        console.warn("LiveSession already inited (skipping init() call)");
        return;
    }
    if (!trackID) {
        throw new Error(`trackID is required`);
    }
    snippet_1.default();
    return api_1.default.init(trackID, options);
};
exports.default = {
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
//# sourceMappingURL=index.js.map