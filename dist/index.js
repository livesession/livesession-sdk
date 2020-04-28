Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("./snippet");
const api_1 = require("./api");
let developerMode = false;
const isLoaded = () => window.__ls;
const safeCall = (name) => {
    return (...args) => {
        if (!isLoaded()) {
            if (process.env.NODE_ENV === "production") {
                throw new Error("LiveSession is not loaded. Call init() before calling other API functions");
            }
            else {
                console.warn("Skipping method, if you want to test it - enable devMode first");
                return;
            }
        }
        if (!api_1.default[name]) {
            throw new Error(`method "${name}" doesn't exist`);
        }
        return api_1.default[name](...args);
    };
};
const _init = (trackID, options, sdkOptions) => {
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
        }
        else {
            throw new Error("Disable devMode before you run build script");
        }
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