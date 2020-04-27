declare global {
    interface Window {
        __ls: any;
    }
}
interface sdkOptions {
    devMode: boolean;
}
declare const _default: {
    init: (trackID: string, options?: object, sdkOptions?: sdkOptions) => any;
    getSessionURL: (...args: object[]) => any;
    identify: (...args: object[]) => any;
    invalidateSession: (...args: object[]) => any;
    newPageView: (...args: object[]) => any;
    setOptions: (...args: object[]) => any;
    setCustomParams: (...args: object[]) => any;
    off: (...args: object[]) => any;
    optOut: (...args: object[]) => any;
    debug: (...args: object[]) => any;
};
export default _default;
