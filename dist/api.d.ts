declare global {
    interface Window {
        __ls: any;
    }
}
interface apiConfig {
    init?: Function;
    getSessionURL?: Function;
    identify?: Function;
    invalidateSession?: Function;
    newPageView?: Function;
    setOptions?: Function;
    setCustomParams?: Function;
    off?: Function;
    optOut?: Function;
    debug?: Function;
}
declare const api: apiConfig;
export declare const SDK_VERSION = "1.1.0";
export default api;
