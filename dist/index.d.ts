declare global {
    interface Window {
        __ls: any;
    }
}
declare const _default: {
    init: (trackID: string, options?: object | null | undefined, sdkOptions?: {
        devMode: boolean;
    }) => void;
    getSessionURL: (...args: object[]) => string | void;
    identify: (...args: object[]) => string | void;
    invalidateSession: (...args: object[]) => string | void;
    newPageView: (...args: object[]) => string | void;
    setOptions: (...args: object[]) => string | void;
    setCustomParams: (...args: object[]) => string | void;
    off: (...args: object[]) => string | void;
    optOut: (...args: object[]) => string | void;
    debug: (...args: object[]) => string | void;
};
export default _default;
