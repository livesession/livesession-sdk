"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const snippet = (wnd = window, doc = document, type = "script", cdn = ("https:" === window.location.protocol ? "https://" : "http://") + "cdn.livesession.io/track.js") => {
    return ((w, d, t, u) => {
        if (w.__ls) {
            throw new Error("LiveSession script already added");
        }
        const f = (w.__ls = function () {
            f.push ? f.push.apply(f, arguments) : f.store.push(arguments);
        });
        if (!w.__ls)
            w.__ls = f;
        f.store = [];
        f.v = api_1.SDK_VERSION;
        const ls = d.createElement(t);
        ls.async = true;
        ls.src = u;
        ls.charset = "utf-8";
        ls.crossOrigin = "anonymous";
        const h = d.getElementsByTagName("head")[0];
        h.appendChild(ls);
    })(wnd, doc, type, cdn);
};
exports.default = snippet;
//# sourceMappingURL=snippet.js.map