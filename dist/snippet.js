"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultScriptURL = void 0;
const api_1 = require("./api");
exports.defaultScriptURL = "https://cdn.labs.livesession.io/track.js";
const snippet = (wnd = window, doc = document, type = "script", scriptURL = exports.defaultScriptURL) => {
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
    })(wnd, doc, type, scriptURL);
};
exports.default = snippet;
