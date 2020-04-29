declare global {
    interface Window {
        __ls: any;
    }
}
interface apiInt {
    [k: string]: (...args: any) => void;
}
declare const api: apiInt;
export declare const SDK_VERSION = "1.1.0";
export default api;
