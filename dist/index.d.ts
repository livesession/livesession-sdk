declare global {
    interface Window {
        __ls: any;
    }
}
declare const _default: {
    init: (trackID: string, options?: object | null | undefined, sdkOptions?: {
        devMode: boolean;
    }) => void;
    getSessionURL: (args?: void | undefined) => any;
    identify: (args?: object | undefined) => any;
    invalidateSession: (args?: null | undefined) => any;
    newPageView: (args?: object | undefined) => any;
    setOptions: (args?: object | undefined) => any;
    setCustomParams: (args?: object | undefined) => any;
    off: (args?: null | undefined) => any;
    optOut: (args?: null | undefined) => any;
    debug: (args?: null | undefined) => any;
    track: (eventName: string, properties?: object | undefined) => void;
};
export default _default;
