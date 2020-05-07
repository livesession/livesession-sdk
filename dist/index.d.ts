declare global {
    interface Window {
        __ls: any;
    }
}
declare const _default: {
    init: (trackID: string, options?: object | undefined, sdkOptions?: {
        devMode: boolean;
    }) => void;
    getSessionURL: (args?: void | object | undefined) => any;
    identify: (args?: void | object | undefined) => any;
    invalidateSession: (args?: void | object | undefined) => any;
    newPageView: (args?: void | object | undefined) => any;
    setOptions: (args?: void | object | undefined) => any;
    setCustomParams: (args?: void | object | undefined) => any;
    off: (args?: void | object | undefined) => any;
    optOut: (args?: void | object | undefined) => any;
    debug: (args?: void | object | undefined) => any;
};
export default _default;
