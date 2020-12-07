declare global {
    interface Window {
        __ls: any;
    }
}
declare const _default: {
    init: (trackID: string, options?: object | null | undefined, sdkOptions?: {
        devMode: boolean;
    }) => void;
    getSessionURL: (args: void) => any;
    identify: (args: object) => any;
    invalidateSession: (args: null) => any;
    newPageView: (args: object) => any;
    setOptions: (args: object) => any;
    setCustomParams: (args: object) => any;
    off: (args: null) => any;
    optOut: (args: null) => any;
    debug: (args: null) => any;
    track: (eventName: string, properties?: object | undefined) => void;
};
export default _default;
