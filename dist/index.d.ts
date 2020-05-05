declare global {
    interface Window {
        __ls: any;
    }
}
interface apiFunctions {
    [k: string]: any;
}
declare const functions: apiFunctions;
export default functions;
