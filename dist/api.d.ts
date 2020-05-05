declare global {
    interface Window {
        __ls: any;
    }
}
interface ApiInt {
    [k: string]: any;
}
declare const api: ApiInt;
export declare const SDK_VERSION = "1.1.0";
export default api;
