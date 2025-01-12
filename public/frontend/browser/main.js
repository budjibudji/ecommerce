import {
    $ as ge,
    $a as Be,
    A as Je,
    Aa as Jt,
    Ab as as,
    B as ui,
    Ba as p,
    Bb as xt,
    C as wt,
    Ca as m,
    Cb as ls,
    D as No,
    Da as qn,
    Db as cs,
    E as St,
    Ea as Xn,
    Eb as ie,
    F as Ye,
    Fa as tt,
    Fb as us,
    G as di,
    Ga as Yo,
    Gb as nn,
    H as ko,
    Ha as Yt,
    Hb as ds,
    I as Fo,
    Ia as Ko,
    Ib as hs,
    J as Vo,
    Ja as yi,
    Jb as rn,
    K as ue,
    Ka as V,
    Kb as Kn,
    L as Lo,
    La as pt,
    Lb as oe,
    M as Z,
    Ma as W,
    Mb as te,
    N as L,
    Na as ye,
    Nb as ps,
    O as je,
    Oa as Qo,
    Ob as fs,
    P as w,
    Pa as P,
    Pb as At,
    Q as ut,
    Qa as Zn,
    Qb as q,
    R as jo,
    Ra as Jn,
    Rb as ms,
    S as D,
    Sa as bi,
    Sb as on,
    T as hi,
    Ta as Kt,
    Tb as gs,
    U as _,
    Ua as Qt,
    Ub as Qn,
    V as b,
    Va as en,
    W as pi,
    Wa as g,
    X as Uo,
    Xa as Ci,
    Y as Ke,
    Ya as u,
    Z as $o,
    Za as c,
    _ as dt,
    _a as A,
    a as v,
    aa as ht,
    ab as E,
    b as j,
    ba as Ue,
    bb as k,
    c as Ao,
    ca as $e,
    cb as ze,
    d as oi,
    da as Te,
    db as es,
    e as Io,
    ea as Bo,
    eb as ts,
    f as Do,
    fa as Gn,
    fb as ns,
    g as si,
    ga as zo,
    gb as d,
    h as ai,
    ha as Hn,
    hb as K,
    i as li,
    ia as xe,
    ib as ee,
    j as Re,
    ja as ve,
    jb as $,
    k as me,
    ka as fi,
    kb as B,
    l as Ze,
    la as Go,
    lb as z,
    m as X,
    ma as Qe,
    mb as Ge,
    n as C,
    na as Ho,
    nb as re,
    o as qt,
    oa as mi,
    ob as He,
    p as Ro,
    pa as Wo,
    pb as nt,
    q as To,
    qa as et,
    qb as rs,
    r as O,
    ra as qo,
    rb as Et,
    s as zn,
    sa as gi,
    sb as Yn,
    t as ce,
    ta as vi,
    tb as is,
    u as Xt,
    ua as Wn,
    ub as Mt,
    v as Oo,
    va as Xo,
    vb as os,
    w as ci,
    wa as Zt,
    wb as ss,
    x as Po,
    xa as H,
    xb as ft,
    y as Le,
    ya as Zo,
    yb as tn,
    z as _t,
    za as Jo,
    zb as rt,
} from "./chunk-GDTLNTW6.js";
var an = class {},
    nr = class {},
    Oe = class n {
        headers;
        normalizedNames = new Map();
        lazyInit;
        lazyUpdate = null;
        constructor(t) {
            t
                ? typeof t == "string"
                    ? (this.lazyInit = () => {
                          (this.headers = new Map()),
                              t
                                  .split(
                                      `
`
                                  )
                                  .forEach((e) => {
                                      let r = e.indexOf(":");
                                      if (r > 0) {
                                          let i = e.slice(0, r),
                                              o = e.slice(r + 1).trim();
                                          this.addHeaderEntry(i, o);
                                      }
                                  });
                      })
                    : typeof Headers < "u" && t instanceof Headers
                    ? ((this.headers = new Map()),
                      t.forEach((e, r) => {
                          this.addHeaderEntry(r, e);
                      }))
                    : (this.lazyInit = () => {
                          (this.headers = new Map()),
                              Object.entries(t).forEach(([e, r]) => {
                                  this.setHeaderEntries(e, r);
                              });
                      })
                : (this.headers = new Map());
        }
        has(t) {
            return this.init(), this.headers.has(t.toLowerCase());
        }
        get(t) {
            this.init();
            let e = this.headers.get(t.toLowerCase());
            return e && e.length > 0 ? e[0] : null;
        }
        keys() {
            return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(t) {
            return this.init(), this.headers.get(t.toLowerCase()) || null;
        }
        append(t, e) {
            return this.clone({ name: t, value: e, op: "a" });
        }
        set(t, e) {
            return this.clone({ name: t, value: e, op: "s" });
        }
        delete(t, e) {
            return this.clone({ name: t, value: e, op: "d" });
        }
        maybeSetNormalizedName(t, e) {
            this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
        }
        init() {
            this.lazyInit &&
                (this.lazyInit instanceof n
                    ? this.copyFrom(this.lazyInit)
                    : this.lazyInit(),
                (this.lazyInit = null),
                this.lazyUpdate &&
                    (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
                    (this.lazyUpdate = null)));
        }
        copyFrom(t) {
            t.init(),
                Array.from(t.headers.keys()).forEach((e) => {
                    this.headers.set(e, t.headers.get(e)),
                        this.normalizedNames.set(e, t.normalizedNames.get(e));
                });
        }
        clone(t) {
            let e = new n();
            return (
                (e.lazyInit =
                    this.lazyInit && this.lazyInit instanceof n
                        ? this.lazyInit
                        : this),
                (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
                e
            );
        }
        applyUpdate(t) {
            let e = t.name.toLowerCase();
            switch (t.op) {
                case "a":
                case "s":
                    let r = t.value;
                    if ((typeof r == "string" && (r = [r]), r.length === 0))
                        return;
                    this.maybeSetNormalizedName(t.name, e);
                    let i = (t.op === "a" ? this.headers.get(e) : void 0) || [];
                    i.push(...r), this.headers.set(e, i);
                    break;
                case "d":
                    let o = t.value;
                    if (!o)
                        this.headers.delete(e), this.normalizedNames.delete(e);
                    else {
                        let s = this.headers.get(e);
                        if (!s) return;
                        (s = s.filter((l) => o.indexOf(l) === -1)),
                            s.length === 0
                                ? (this.headers.delete(e),
                                  this.normalizedNames.delete(e))
                                : this.headers.set(e, s);
                    }
                    break;
            }
        }
        addHeaderEntry(t, e) {
            let r = t.toLowerCase();
            this.maybeSetNormalizedName(t, r),
                this.headers.has(r)
                    ? this.headers.get(r).push(e)
                    : this.headers.set(r, [e]);
        }
        setHeaderEntries(t, e) {
            let r = (Array.isArray(e) ? e : [e]).map((o) => o.toString()),
                i = t.toLowerCase();
            this.headers.set(i, r), this.maybeSetNormalizedName(t, i);
        }
        forEach(t) {
            this.init(),
                Array.from(this.normalizedNames.keys()).forEach((e) =>
                    t(this.normalizedNames.get(e), this.headers.get(e))
                );
        }
    };
var wi = class {
    encodeKey(t) {
        return vs(t);
    }
    encodeValue(t) {
        return vs(t);
    }
    decodeKey(t) {
        return decodeURIComponent(t);
    }
    decodeValue(t) {
        return decodeURIComponent(t);
    }
};
function Cl(n, t) {
    let e = new Map();
    return (
        n.length > 0 &&
            n
                .replace(/^\?/, "")
                .split("&")
                .forEach((i) => {
                    let o = i.indexOf("="),
                        [s, l] =
                            o == -1
                                ? [t.decodeKey(i), ""]
                                : [
                                      t.decodeKey(i.slice(0, o)),
                                      t.decodeValue(i.slice(o + 1)),
                                  ],
                        a = e.get(s) || [];
                    a.push(l), e.set(s, a);
                }),
        e
    );
}
var _l = /%(\d[a-f0-9])/gi,
    wl = {
        40: "@",
        "3A": ":",
        24: "$",
        "2C": ",",
        "3B": ";",
        "3D": "=",
        "3F": "?",
        "2F": "/",
    };
function vs(n) {
    return encodeURIComponent(n).replace(_l, (t, e) => wl[e] ?? t);
}
function er(n) {
    return `${n}`;
}
var ot = class n {
    map;
    encoder;
    updates = null;
    cloneFrom = null;
    constructor(t = {}) {
        if (((this.encoder = t.encoder || new wi()), t.fromString)) {
            if (t.fromObject)
                throw new Error(
                    "Cannot specify both fromString and fromObject."
                );
            this.map = Cl(t.fromString, this.encoder);
        } else
            t.fromObject
                ? ((this.map = new Map()),
                  Object.keys(t.fromObject).forEach((e) => {
                      let r = t.fromObject[e],
                          i = Array.isArray(r) ? r.map(er) : [er(r)];
                      this.map.set(e, i);
                  }))
                : (this.map = null);
    }
    has(t) {
        return this.init(), this.map.has(t);
    }
    get(t) {
        this.init();
        let e = this.map.get(t);
        return e ? e[0] : null;
    }
    getAll(t) {
        return this.init(), this.map.get(t) || null;
    }
    keys() {
        return this.init(), Array.from(this.map.keys());
    }
    append(t, e) {
        return this.clone({ param: t, value: e, op: "a" });
    }
    appendAll(t) {
        let e = [];
        return (
            Object.keys(t).forEach((r) => {
                let i = t[r];
                Array.isArray(i)
                    ? i.forEach((o) => {
                          e.push({ param: r, value: o, op: "a" });
                      })
                    : e.push({ param: r, value: i, op: "a" });
            }),
            this.clone(e)
        );
    }
    set(t, e) {
        return this.clone({ param: t, value: e, op: "s" });
    }
    delete(t, e) {
        return this.clone({ param: t, value: e, op: "d" });
    }
    toString() {
        return (
            this.init(),
            this.keys()
                .map((t) => {
                    let e = this.encoder.encodeKey(t);
                    return this.map
                        .get(t)
                        .map((r) => e + "=" + this.encoder.encodeValue(r))
                        .join("&");
                })
                .filter((t) => t !== "")
                .join("&")
        );
    }
    clone(t) {
        let e = new n({ encoder: this.encoder });
        return (
            (e.cloneFrom = this.cloneFrom || this),
            (e.updates = (this.updates || []).concat(t)),
            e
        );
    }
    init() {
        this.map === null && (this.map = new Map()),
            this.cloneFrom !== null &&
                (this.cloneFrom.init(),
                this.cloneFrom
                    .keys()
                    .forEach((t) => this.map.set(t, this.cloneFrom.map.get(t))),
                this.updates.forEach((t) => {
                    switch (t.op) {
                        case "a":
                        case "s":
                            let e =
                                (t.op === "a"
                                    ? this.map.get(t.param)
                                    : void 0) || [];
                            e.push(er(t.value)), this.map.set(t.param, e);
                            break;
                        case "d":
                            if (t.value !== void 0) {
                                let r = this.map.get(t.param) || [],
                                    i = r.indexOf(er(t.value));
                                i !== -1 && r.splice(i, 1),
                                    r.length > 0
                                        ? this.map.set(t.param, r)
                                        : this.map.delete(t.param);
                            } else {
                                this.map.delete(t.param);
                                break;
                            }
                    }
                }),
                (this.cloneFrom = this.updates = null));
    }
};
var Si = class {
    map = new Map();
    set(t, e) {
        return this.map.set(t, e), this;
    }
    get(t) {
        return (
            this.map.has(t) || this.map.set(t, t.defaultValue()),
            this.map.get(t)
        );
    }
    delete(t) {
        return this.map.delete(t), this;
    }
    has(t) {
        return this.map.has(t);
    }
    keys() {
        return this.map.keys();
    }
};
function Sl(n) {
    switch (n) {
        case "DELETE":
        case "GET":
        case "HEAD":
        case "OPTIONS":
        case "JSONP":
            return !1;
        default:
            return !0;
    }
}
function ys(n) {
    return typeof ArrayBuffer < "u" && n instanceof ArrayBuffer;
}
function bs(n) {
    return typeof Blob < "u" && n instanceof Blob;
}
function Cs(n) {
    return typeof FormData < "u" && n instanceof FormData;
}
function El(n) {
    return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
var sn = class n {
        url;
        body = null;
        headers;
        context;
        reportProgress = !1;
        withCredentials = !1;
        responseType = "json";
        method;
        params;
        urlWithParams;
        transferCache;
        constructor(t, e, r, i) {
            (this.url = e), (this.method = t.toUpperCase());
            let o;
            if (
                (Sl(this.method) || i
                    ? ((this.body = r !== void 0 ? r : null), (o = i))
                    : (o = r),
                o &&
                    ((this.reportProgress = !!o.reportProgress),
                    (this.withCredentials = !!o.withCredentials),
                    o.responseType && (this.responseType = o.responseType),
                    o.headers && (this.headers = o.headers),
                    o.context && (this.context = o.context),
                    o.params && (this.params = o.params),
                    (this.transferCache = o.transferCache)),
                (this.headers ??= new Oe()),
                (this.context ??= new Si()),
                !this.params)
            )
                (this.params = new ot()), (this.urlWithParams = e);
            else {
                let s = this.params.toString();
                if (s.length === 0) this.urlWithParams = e;
                else {
                    let l = e.indexOf("?"),
                        a = l === -1 ? "?" : l < e.length - 1 ? "&" : "";
                    this.urlWithParams = e + a + s;
                }
            }
        }
        serializeBody() {
            return this.body === null
                ? null
                : typeof this.body == "string" ||
                  ys(this.body) ||
                  bs(this.body) ||
                  Cs(this.body) ||
                  El(this.body)
                ? this.body
                : this.body instanceof ot
                ? this.body.toString()
                : typeof this.body == "object" ||
                  typeof this.body == "boolean" ||
                  Array.isArray(this.body)
                ? JSON.stringify(this.body)
                : this.body.toString();
        }
        detectContentTypeHeader() {
            return this.body === null || Cs(this.body)
                ? null
                : bs(this.body)
                ? this.body.type || null
                : ys(this.body)
                ? null
                : typeof this.body == "string"
                ? "text/plain"
                : this.body instanceof ot
                ? "application/x-www-form-urlencoded;charset=UTF-8"
                : typeof this.body == "object" ||
                  typeof this.body == "number" ||
                  typeof this.body == "boolean"
                ? "application/json"
                : null;
        }
        clone(t = {}) {
            let e = t.method || this.method,
                r = t.url || this.url,
                i = t.responseType || this.responseType,
                o = t.transferCache ?? this.transferCache,
                s = t.body !== void 0 ? t.body : this.body,
                l = t.withCredentials ?? this.withCredentials,
                a = t.reportProgress ?? this.reportProgress,
                h = t.headers || this.headers,
                f = t.params || this.params,
                y = t.context ?? this.context;
            return (
                t.setHeaders !== void 0 &&
                    (h = Object.keys(t.setHeaders).reduce(
                        (S, T) => S.set(T, t.setHeaders[T]),
                        h
                    )),
                t.setParams &&
                    (f = Object.keys(t.setParams).reduce(
                        (S, T) => S.set(T, t.setParams[T]),
                        f
                    )),
                new n(e, r, s, {
                    params: f,
                    headers: h,
                    context: y,
                    reportProgress: a,
                    responseType: i,
                    withCredentials: l,
                    transferCache: o,
                })
            );
        }
    },
    st = (function (n) {
        return (
            (n[(n.Sent = 0)] = "Sent"),
            (n[(n.UploadProgress = 1)] = "UploadProgress"),
            (n[(n.ResponseHeader = 2)] = "ResponseHeader"),
            (n[(n.DownloadProgress = 3)] = "DownloadProgress"),
            (n[(n.Response = 4)] = "Response"),
            (n[(n.User = 5)] = "User"),
            n
        );
    })(st || {}),
    ln = class {
        headers;
        status;
        statusText;
        url;
        ok;
        type;
        constructor(t, e = 200, r = "OK") {
            (this.headers = t.headers || new Oe()),
                (this.status = t.status !== void 0 ? t.status : e),
                (this.statusText = t.statusText || r),
                (this.url = t.url || null),
                (this.ok = this.status >= 200 && this.status < 300);
        }
    },
    rr = class n extends ln {
        constructor(t = {}) {
            super(t);
        }
        type = st.ResponseHeader;
        clone(t = {}) {
            return new n({
                headers: t.headers || this.headers,
                status: t.status !== void 0 ? t.status : this.status,
                statusText: t.statusText || this.statusText,
                url: t.url || this.url || void 0,
            });
        }
    },
    mt = class n extends ln {
        body;
        constructor(t = {}) {
            super(t), (this.body = t.body !== void 0 ? t.body : null);
        }
        type = st.Response;
        clone(t = {}) {
            return new n({
                body: t.body !== void 0 ? t.body : this.body,
                headers: t.headers || this.headers,
                status: t.status !== void 0 ? t.status : this.status,
                statusText: t.statusText || this.statusText,
                url: t.url || this.url || void 0,
            });
        }
    },
    it = class extends ln {
        name = "HttpErrorResponse";
        message;
        error;
        ok = !1;
        constructor(t) {
            super(t, 0, "Unknown Error"),
                this.status >= 200 && this.status < 300
                    ? (this.message = `Http failure during parsing for ${
                          t.url || "(unknown url)"
                      }`)
                    : (this.message = `Http failure response for ${
                          t.url || "(unknown url)"
                      }: ${t.status} ${t.statusText}`),
                (this.error = t.error || null);
        }
    },
    Ts = 200,
    Ml = 204;
function _i(n, t) {
    return {
        body: t,
        headers: n.headers,
        context: n.context,
        observe: n.observe,
        params: n.params,
        reportProgress: n.reportProgress,
        responseType: n.responseType,
        withCredentials: n.withCredentials,
        transferCache: n.transferCache,
    };
}
var We = (() => {
        class n {
            handler;
            constructor(e) {
                this.handler = e;
            }
            request(e, r, i = {}) {
                let o;
                if (e instanceof sn) o = e;
                else {
                    let a;
                    i.headers instanceof Oe
                        ? (a = i.headers)
                        : (a = new Oe(i.headers));
                    let h;
                    i.params &&
                        (i.params instanceof ot
                            ? (h = i.params)
                            : (h = new ot({ fromObject: i.params }))),
                        (o = new sn(e, r, i.body !== void 0 ? i.body : null, {
                            headers: a,
                            context: i.context,
                            params: h,
                            reportProgress: i.reportProgress,
                            responseType: i.responseType || "json",
                            withCredentials: i.withCredentials,
                            transferCache: i.transferCache,
                        }));
                }
                let s = C(o).pipe(Je((a) => this.handler.handle(a)));
                if (e instanceof sn || i.observe === "events") return s;
                let l = s.pipe(Le((a) => a instanceof mt));
                switch (i.observe || "body") {
                    case "body":
                        switch (o.responseType) {
                            case "arraybuffer":
                                return l.pipe(
                                    O((a) => {
                                        if (
                                            a.body !== null &&
                                            !(a.body instanceof ArrayBuffer)
                                        )
                                            throw new Error(
                                                "Response is not an ArrayBuffer."
                                            );
                                        return a.body;
                                    })
                                );
                            case "blob":
                                return l.pipe(
                                    O((a) => {
                                        if (
                                            a.body !== null &&
                                            !(a.body instanceof Blob)
                                        )
                                            throw new Error(
                                                "Response is not a Blob."
                                            );
                                        return a.body;
                                    })
                                );
                            case "text":
                                return l.pipe(
                                    O((a) => {
                                        if (
                                            a.body !== null &&
                                            typeof a.body != "string"
                                        )
                                            throw new Error(
                                                "Response is not a string."
                                            );
                                        return a.body;
                                    })
                                );
                            case "json":
                            default:
                                return l.pipe(O((a) => a.body));
                        }
                    case "response":
                        return l;
                    default:
                        throw new Error(
                            `Unreachable: unhandled observe type ${i.observe}}`
                        );
                }
            }
            delete(e, r = {}) {
                return this.request("DELETE", e, r);
            }
            get(e, r = {}) {
                return this.request("GET", e, r);
            }
            head(e, r = {}) {
                return this.request("HEAD", e, r);
            }
            jsonp(e, r) {
                return this.request("JSONP", e, {
                    params: new ot().append(r, "JSONP_CALLBACK"),
                    observe: "body",
                    responseType: "json",
                });
            }
            options(e, r = {}) {
                return this.request("OPTIONS", e, r);
            }
            patch(e, r, i = {}) {
                return this.request("PATCH", e, _i(i, r));
            }
            post(e, r, i = {}) {
                return this.request("POST", e, _i(i, r));
            }
            put(e, r, i = {}) {
                return this.request("PUT", e, _i(i, r));
            }
            static ɵfac = function (r) {
                return new (r || n)(_(an));
            };
            static ɵprov = w({ token: n, factory: n.ɵfac });
        }
        return n;
    })(),
    xl = /^\)\]\}',?\n/,
    Al = "X-Request-URL";
function _s(n) {
    if (n.url) return n.url;
    let t = Al.toLocaleLowerCase();
    return n.headers.get(t);
}
var Il = (() => {
        class n {
            fetchImpl =
                b(Ei, { optional: !0 })?.fetch ??
                ((...e) => globalThis.fetch(...e));
            ngZone = b(ve);
            handle(e) {
                return new si((r) => {
                    let i = new AbortController();
                    return (
                        this.doRequest(e, i.signal, r).then(Mi, (o) =>
                            r.error(new it({ error: o }))
                        ),
                        () => i.abort()
                    );
                });
            }
            doRequest(e, r, i) {
                return oi(this, null, function* () {
                    let o = this.createRequestInit(e),
                        s;
                    try {
                        let T = this.ngZone.runOutsideAngular(() =>
                            this.fetchImpl(e.urlWithParams, v({ signal: r }, o))
                        );
                        Dl(T), i.next({ type: st.Sent }), (s = yield T);
                    } catch (T) {
                        i.error(
                            new it({
                                error: T,
                                status: T.status ?? 0,
                                statusText: T.statusText,
                                url: e.urlWithParams,
                                headers: T.headers,
                            })
                        );
                        return;
                    }
                    let l = new Oe(s.headers),
                        a = s.statusText,
                        h = _s(s) ?? e.urlWithParams,
                        f = s.status,
                        y = null;
                    if (
                        (e.reportProgress &&
                            i.next(
                                new rr({
                                    headers: l,
                                    status: f,
                                    statusText: a,
                                    url: h,
                                })
                            ),
                        s.body)
                    ) {
                        let T = s.headers.get("content-length"),
                            N = [],
                            I = s.body.getReader(),
                            x = 0,
                            Q,
                            De,
                            U = typeof Zone < "u" && Zone.current;
                        yield this.ngZone.runOutsideAngular(() =>
                            oi(this, null, function* () {
                                for (;;) {
                                    let { done: Ve, value: Wt } =
                                        yield I.read();
                                    if (Ve) break;
                                    if (
                                        (N.push(Wt),
                                        (x += Wt.length),
                                        e.reportProgress)
                                    ) {
                                        De =
                                            e.responseType === "text"
                                                ? (De ?? "") +
                                                  (Q ??=
                                                      new TextDecoder()).decode(
                                                      Wt,
                                                      { stream: !0 }
                                                  )
                                                : void 0;
                                        let xo = () =>
                                            i.next({
                                                type: st.DownloadProgress,
                                                total: T ? +T : void 0,
                                                loaded: x,
                                                partialText: De,
                                            });
                                        U ? U.run(xo) : xo();
                                    }
                                }
                            })
                        );
                        let Fe = this.concatChunks(N, x);
                        try {
                            let Ve = s.headers.get("Content-Type") ?? "";
                            y = this.parseBody(e, Fe, Ve);
                        } catch (Ve) {
                            i.error(
                                new it({
                                    error: Ve,
                                    headers: new Oe(s.headers),
                                    status: s.status,
                                    statusText: s.statusText,
                                    url: _s(s) ?? e.urlWithParams,
                                })
                            );
                            return;
                        }
                    }
                    f === 0 && (f = y ? Ts : 0),
                        f >= 200 && f < 300
                            ? (i.next(
                                  new mt({
                                      body: y,
                                      headers: l,
                                      status: f,
                                      statusText: a,
                                      url: h,
                                  })
                              ),
                              i.complete())
                            : i.error(
                                  new it({
                                      error: y,
                                      headers: l,
                                      status: f,
                                      statusText: a,
                                      url: h,
                                  })
                              );
                });
            }
            parseBody(e, r, i) {
                switch (e.responseType) {
                    case "json":
                        let o = new TextDecoder().decode(r).replace(xl, "");
                        return o === "" ? null : JSON.parse(o);
                    case "text":
                        return new TextDecoder().decode(r);
                    case "blob":
                        return new Blob([r], { type: i });
                    case "arraybuffer":
                        return r.buffer;
                }
            }
            createRequestInit(e) {
                let r = {},
                    i = e.withCredentials ? "include" : void 0;
                if (
                    (e.headers.forEach((o, s) => (r[o] = s.join(","))),
                    e.headers.has("Accept") ||
                        (r.Accept = "application/json, text/plain, */*"),
                    !e.headers.has("Content-Type"))
                ) {
                    let o = e.detectContentTypeHeader();
                    o !== null && (r["Content-Type"] = o);
                }
                return {
                    body: e.serializeBody(),
                    method: e.method,
                    headers: r,
                    credentials: i,
                };
            }
            concatChunks(e, r) {
                let i = new Uint8Array(r),
                    o = 0;
                for (let s of e) i.set(s, o), (o += s.length);
                return i;
            }
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵprov = w({ token: n, factory: n.ɵfac });
        }
        return n;
    })(),
    Ei = class {};
function Mi() {}
function Dl(n) {
    n.then(Mi, Mi);
}
function Rl(n, t) {
    return t(n);
}
function Tl(n, t, e) {
    return (r, i) => ge(e, () => t(r, (o) => n(o, i)));
}
var xi = new D(""),
    Os = new D(""),
    Ol = new D("", { providedIn: "root", factory: () => !0 });
var ws = (() => {
    class n extends an {
        backend;
        injector;
        chain = null;
        pendingTasks = b(Hn);
        contributeToStability = b(Ol);
        constructor(e, r) {
            super(), (this.backend = e), (this.injector = r);
        }
        handle(e) {
            if (this.chain === null) {
                let r = Array.from(
                    new Set([
                        ...this.injector.get(xi),
                        ...this.injector.get(Os, []),
                    ])
                );
                this.chain = r.reduceRight(
                    (i, o) => Tl(i, o, this.injector),
                    Rl
                );
            }
            if (this.contributeToStability) {
                let r = this.pendingTasks.add();
                return this.chain(e, (i) => this.backend.handle(i)).pipe(
                    St(() => this.pendingTasks.remove(r))
                );
            } else return this.chain(e, (r) => this.backend.handle(r));
        }
        static ɵfac = function (r) {
            return new (r || n)(_(nr), _(dt));
        };
        static ɵprov = w({ token: n, factory: n.ɵfac });
    }
    return n;
})();
var Pl = /^\)\]\}',?\n/;
function Nl(n) {
    return "responseURL" in n && n.responseURL
        ? n.responseURL
        : /^X-Request-URL:/m.test(n.getAllResponseHeaders())
        ? n.getResponseHeader("X-Request-URL")
        : null;
}
var Ss = (() => {
        class n {
            xhrFactory;
            constructor(e) {
                this.xhrFactory = e;
            }
            handle(e) {
                if (e.method === "JSONP") throw new L(-2800, !1);
                let r = this.xhrFactory;
                return (r.ɵloadImpl ? X(r.ɵloadImpl()) : C(null)).pipe(
                    ue(
                        () =>
                            new si((o) => {
                                let s = r.build();
                                if (
                                    (s.open(e.method, e.urlWithParams),
                                    e.withCredentials &&
                                        (s.withCredentials = !0),
                                    e.headers.forEach((I, x) =>
                                        s.setRequestHeader(I, x.join(","))
                                    ),
                                    e.headers.has("Accept") ||
                                        s.setRequestHeader(
                                            "Accept",
                                            "application/json, text/plain, */*"
                                        ),
                                    !e.headers.has("Content-Type"))
                                ) {
                                    let I = e.detectContentTypeHeader();
                                    I !== null &&
                                        s.setRequestHeader("Content-Type", I);
                                }
                                if (e.responseType) {
                                    let I = e.responseType.toLowerCase();
                                    s.responseType = I !== "json" ? I : "text";
                                }
                                let l = e.serializeBody(),
                                    a = null,
                                    h = () => {
                                        if (a !== null) return a;
                                        let I = s.statusText || "OK",
                                            x = new Oe(
                                                s.getAllResponseHeaders()
                                            ),
                                            Q = Nl(s) || e.url;
                                        return (
                                            (a = new rr({
                                                headers: x,
                                                status: s.status,
                                                statusText: I,
                                                url: Q,
                                            })),
                                            a
                                        );
                                    },
                                    f = () => {
                                        let {
                                                headers: I,
                                                status: x,
                                                statusText: Q,
                                                url: De,
                                            } = h(),
                                            U = null;
                                        x !== Ml &&
                                            (U =
                                                typeof s.response > "u"
                                                    ? s.responseText
                                                    : s.response),
                                            x === 0 && (x = U ? Ts : 0);
                                        let Fe = x >= 200 && x < 300;
                                        if (
                                            e.responseType === "json" &&
                                            typeof U == "string"
                                        ) {
                                            let Ve = U;
                                            U = U.replace(Pl, "");
                                            try {
                                                U =
                                                    U !== ""
                                                        ? JSON.parse(U)
                                                        : null;
                                            } catch (Wt) {
                                                (U = Ve),
                                                    Fe &&
                                                        ((Fe = !1),
                                                        (U = {
                                                            error: Wt,
                                                            text: U,
                                                        }));
                                            }
                                        }
                                        Fe
                                            ? (o.next(
                                                  new mt({
                                                      body: U,
                                                      headers: I,
                                                      status: x,
                                                      statusText: Q,
                                                      url: De || void 0,
                                                  })
                                              ),
                                              o.complete())
                                            : o.error(
                                                  new it({
                                                      error: U,
                                                      headers: I,
                                                      status: x,
                                                      statusText: Q,
                                                      url: De || void 0,
                                                  })
                                              );
                                    },
                                    y = (I) => {
                                        let { url: x } = h(),
                                            Q = new it({
                                                error: I,
                                                status: s.status || 0,
                                                statusText:
                                                    s.statusText ||
                                                    "Unknown Error",
                                                url: x || void 0,
                                            });
                                        o.error(Q);
                                    },
                                    S = !1,
                                    T = (I) => {
                                        S || (o.next(h()), (S = !0));
                                        let x = {
                                            type: st.DownloadProgress,
                                            loaded: I.loaded,
                                        };
                                        I.lengthComputable &&
                                            (x.total = I.total),
                                            e.responseType === "text" &&
                                                s.responseText &&
                                                (x.partialText =
                                                    s.responseText),
                                            o.next(x);
                                    },
                                    N = (I) => {
                                        let x = {
                                            type: st.UploadProgress,
                                            loaded: I.loaded,
                                        };
                                        I.lengthComputable &&
                                            (x.total = I.total),
                                            o.next(x);
                                    };
                                return (
                                    s.addEventListener("load", f),
                                    s.addEventListener("error", y),
                                    s.addEventListener("timeout", y),
                                    s.addEventListener("abort", y),
                                    e.reportProgress &&
                                        (s.addEventListener("progress", T),
                                        l !== null &&
                                            s.upload &&
                                            s.upload.addEventListener(
                                                "progress",
                                                N
                                            )),
                                    s.send(l),
                                    o.next({ type: st.Sent }),
                                    () => {
                                        s.removeEventListener("error", y),
                                            s.removeEventListener("abort", y),
                                            s.removeEventListener("load", f),
                                            s.removeEventListener("timeout", y),
                                            e.reportProgress &&
                                                (s.removeEventListener(
                                                    "progress",
                                                    T
                                                ),
                                                l !== null &&
                                                    s.upload &&
                                                    s.upload.removeEventListener(
                                                        "progress",
                                                        N
                                                    )),
                                            s.readyState !== s.DONE &&
                                                s.abort();
                                    }
                                );
                            })
                    )
                );
            }
            static ɵfac = function (r) {
                return new (r || n)(_(Qn));
            };
            static ɵprov = w({ token: n, factory: n.ɵfac });
        }
        return n;
    })(),
    Ps = new D(""),
    kl = "XSRF-TOKEN",
    Fl = new D("", { providedIn: "root", factory: () => kl }),
    Vl = "X-XSRF-TOKEN",
    Ll = new D("", { providedIn: "root", factory: () => Vl }),
    ir = class {},
    jl = (() => {
        class n {
            doc;
            platform;
            cookieName;
            lastCookieString = "";
            lastToken = null;
            parseCount = 0;
            constructor(e, r, i) {
                (this.doc = e), (this.platform = r), (this.cookieName = i);
            }
            getToken() {
                if (this.platform === "server") return null;
                let e = this.doc.cookie || "";
                return (
                    e !== this.lastCookieString &&
                        (this.parseCount++,
                        (this.lastToken = Kn(e, this.cookieName)),
                        (this.lastCookieString = e)),
                    this.lastToken
                );
            }
            static ɵfac = function (r) {
                return new (r || n)(_(ie), _(et), _(Fl));
            };
            static ɵprov = w({ token: n, factory: n.ɵfac });
        }
        return n;
    })();
function Ul(n, t) {
    let e = n.url.toLowerCase();
    if (
        !b(Ps) ||
        n.method === "GET" ||
        n.method === "HEAD" ||
        e.startsWith("http://") ||
        e.startsWith("https://")
    )
        return t(n);
    let r = b(ir).getToken(),
        i = b(Ll);
    return (
        r != null &&
            !n.headers.has(i) &&
            (n = n.clone({ headers: n.headers.set(i, r) })),
        t(n)
    );
}
var Ns = (function (n) {
    return (
        (n[(n.Interceptors = 0)] = "Interceptors"),
        (n[(n.LegacyInterceptors = 1)] = "LegacyInterceptors"),
        (n[(n.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
        (n[(n.NoXsrfProtection = 3)] = "NoXsrfProtection"),
        (n[(n.JsonpSupport = 4)] = "JsonpSupport"),
        (n[(n.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
        (n[(n.Fetch = 6)] = "Fetch"),
        n
    );
})(Ns || {});
function $l(n, t) {
    return { ɵkind: n, ɵproviders: t };
}
function ks(...n) {
    let t = [
        We,
        Ss,
        ws,
        { provide: an, useExisting: ws },
        { provide: nr, useFactory: () => b(Il, { optional: !0 }) ?? b(Ss) },
        { provide: xi, useValue: Ul, multi: !0 },
        { provide: Ps, useValue: !0 },
        { provide: ir, useClass: jl },
    ];
    for (let e of n) t.push(...e.ɵproviders);
    return Ke(t);
}
function Fs(n) {
    return $l(
        Ns.Interceptors,
        n.map((t) => ({ provide: xi, useValue: t, multi: !0 }))
    );
}
var Bl = new D(""),
    Es = "b",
    Ms = "h",
    xs = "s",
    As = "st",
    Is = "u",
    Ds = "rt",
    tr = new D(""),
    zl = ["GET", "HEAD"];
function Gl(n, t) {
    let T = b(tr),
        { isCacheActive: e } = T,
        r = Ao(T, ["isCacheActive"]),
        { transferCache: i, method: o } = n;
    if (
        !e ||
        i === !1 ||
        (o === "POST" && !r.includePostRequests && !i) ||
        (o !== "POST" && !zl.includes(o)) ||
        (!r.includeRequestsWithAuthHeaders && Hl(n)) ||
        r.filter?.(n) === !1
    )
        return t(n);
    let s = b(vi),
        l = b(Bl, { optional: !0 }),
        a = on(b(et));
    if (l && !a) throw new L(2803, !1);
    let h = a && l ? Zl(n.url, l) : n.url,
        f = ql(n, h),
        y = s.get(f, null),
        S = r.includeHeaders;
    if (
        (typeof i == "object" && i.includeHeaders && (S = i.includeHeaders), y)
    ) {
        let { [Es]: N, [Ds]: I, [Ms]: x, [xs]: Q, [As]: De, [Is]: U } = y,
            Fe = N;
        switch (I) {
            case "arraybuffer":
                Fe = new TextEncoder().encode(N).buffer;
                break;
            case "blob":
                Fe = new Blob([N]);
                break;
        }
        let Ve = new Oe(x);
        return C(
            new mt({ body: Fe, headers: Ve, status: Q, statusText: De, url: U })
        );
    }
    return t(n).pipe(
        Z((N) => {
            N instanceof mt &&
                a &&
                s.set(f, {
                    [Es]: N.body,
                    [Ms]: Wl(N.headers, S),
                    [xs]: N.status,
                    [As]: N.statusText,
                    [Is]: h,
                    [Ds]: n.responseType,
                });
        })
    );
}
function Hl(n) {
    return (
        n.headers.has("authorization") || n.headers.has("proxy-authorization")
    );
}
function Wl(n, t) {
    if (!t) return {};
    let e = {};
    for (let r of t) {
        let i = n.getAll(r);
        i !== null && (e[r] = i);
    }
    return e;
}
function Rs(n) {
    return [...n.keys()]
        .sort()
        .map((t) => `${t}=${n.getAll(t)}`)
        .join("&");
}
function ql(n, t) {
    let { params: e, method: r, responseType: i } = n,
        o = Rs(e),
        s = n.serializeBody();
    s instanceof URLSearchParams
        ? (s = Rs(s))
        : typeof s != "string" && (s = "");
    let l = [r, i, t, s, o].join("|"),
        a = Xl(l);
    return a;
}
function Xl(n) {
    let t = 0;
    for (let e of n) t = (Math.imul(31, t) + e.charCodeAt(0)) << 0;
    return (t += 2147483648), t.toString();
}
function Vs(n) {
    return [
        {
            provide: tr,
            useFactory: () => (
                Wn("NgHttpTransferCache"), v({ isCacheActive: !0 }, n)
            ),
        },
        { provide: Os, useValue: Gl, multi: !0, deps: [vi, tr] },
        {
            provide: Kt,
            multi: !0,
            useFactory: () => {
                let t = b(Qt),
                    e = b(tr);
                return () => {
                    t.whenStable().then(() => {
                        e.isCacheActive = !1;
                    });
                };
            },
        },
    ];
}
function Zl(n, t) {
    let e = new URL(n, "resolve://").origin,
        r = t[e];
    return r ? n.replace(e, r) : n;
}
var Ii = class extends cs {
        supportsDOMEvents = !0;
    },
    Di = class n extends Ii {
        static makeCurrent() {
            ls(new n());
        }
        onAndCancel(t, e, r) {
            return (
                t.addEventListener(e, r),
                () => {
                    t.removeEventListener(e, r);
                }
            );
        }
        dispatchEvent(t, e) {
            t.dispatchEvent(e);
        }
        remove(t) {
            t.remove();
        }
        createElement(t, e) {
            return (e = e || this.getDefaultDocument()), e.createElement(t);
        }
        createHtmlDocument() {
            return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
            return document;
        }
        isElementNode(t) {
            return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
            return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, e) {
            return e === "window"
                ? window
                : e === "document"
                ? t
                : e === "body"
                ? t.body
                : null;
        }
        getBaseHref(t) {
            let e = Yl();
            return e == null ? null : Kl(e);
        }
        resetBaseElement() {
            cn = null;
        }
        getUserAgent() {
            return window.navigator.userAgent;
        }
        getCookie(t) {
            return Kn(document.cookie, t);
        }
    },
    cn = null;
function Yl() {
    return (
        (cn = cn || document.querySelector("base")),
        cn ? cn.getAttribute("href") : null
    );
}
function Kl(n) {
    return new URL(n, document.baseURI).pathname;
}
var Ql = (() => {
        class n {
            build() {
                return new XMLHttpRequest();
            }
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵprov = w({ token: n, factory: n.ɵfac });
        }
        return n;
    })(),
    Ri = new D(""),
    zs = (() => {
        class n {
            _zone;
            _plugins;
            _eventNameToPlugin = new Map();
            constructor(e, r) {
                (this._zone = r),
                    e.forEach((i) => {
                        i.manager = this;
                    }),
                    (this._plugins = e.slice().reverse());
            }
            addEventListener(e, r, i) {
                return this._findPluginFor(r).addEventListener(e, r, i);
            }
            getZone() {
                return this._zone;
            }
            _findPluginFor(e) {
                let r = this._eventNameToPlugin.get(e);
                if (r) return r;
                if (((r = this._plugins.find((o) => o.supports(e))), !r))
                    throw new L(5101, !1);
                return this._eventNameToPlugin.set(e, r), r;
            }
            static ɵfac = function (r) {
                return new (r || n)(_(Ri), _(ve));
            };
            static ɵprov = w({ token: n, factory: n.ɵfac });
        }
        return n;
    })(),
    ar = class {
        _doc;
        constructor(t) {
            this._doc = t;
        }
        manager;
    },
    sr = "ng-app-id";
function Ls(n) {
    for (let t of n) t.remove();
}
function js(n, t) {
    let e = t.createElement("style");
    return (e.textContent = n), e;
}
function ec(n, t, e, r) {
    let i = n.head?.querySelectorAll(`style[${sr}="${t}"],link[${sr}="${t}"]`);
    if (i)
        for (let o of i)
            o.removeAttribute(sr),
                o instanceof HTMLLinkElement
                    ? r.set(o.href.slice(o.href.lastIndexOf("/") + 1), {
                          usage: 0,
                          elements: [o],
                      })
                    : o.textContent &&
                      e.set(o.textContent, { usage: 0, elements: [o] });
}
function Ti(n, t) {
    let e = t.createElement("link");
    return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", n), e;
}
var Gs = (() => {
        class n {
            doc;
            appId;
            nonce;
            inline = new Map();
            external = new Map();
            hosts = new Set();
            isServer;
            constructor(e, r, i, o = {}) {
                (this.doc = e),
                    (this.appId = r),
                    (this.nonce = i),
                    (this.isServer = on(o)),
                    ec(e, r, this.inline, this.external),
                    this.hosts.add(e.head);
            }
            addStyles(e, r) {
                for (let i of e) this.addUsage(i, this.inline, js);
                r?.forEach((i) => this.addUsage(i, this.external, Ti));
            }
            removeStyles(e, r) {
                for (let i of e) this.removeUsage(i, this.inline);
                r?.forEach((i) => this.removeUsage(i, this.external));
            }
            addUsage(e, r, i) {
                let o = r.get(e);
                o
                    ? o.usage++
                    : r.set(e, {
                          usage: 1,
                          elements: [...this.hosts].map((s) =>
                              this.addElement(s, i(e, this.doc))
                          ),
                      });
            }
            removeUsage(e, r) {
                let i = r.get(e);
                i && (i.usage--, i.usage <= 0 && (Ls(i.elements), r.delete(e)));
            }
            ngOnDestroy() {
                for (let [, { elements: e }] of [
                    ...this.inline,
                    ...this.external,
                ])
                    Ls(e);
                this.hosts.clear();
            }
            addHost(e) {
                this.hosts.add(e);
                for (let [r, { elements: i }] of this.inline)
                    i.push(this.addElement(e, js(r, this.doc)));
                for (let [r, { elements: i }] of this.external)
                    i.push(this.addElement(e, Ti(r, this.doc)));
            }
            removeHost(e) {
                this.hosts.delete(e);
            }
            addElement(e, r) {
                return (
                    this.nonce && r.setAttribute("nonce", this.nonce),
                    this.isServer && r.setAttribute(sr, this.appId),
                    e.appendChild(r)
                );
            }
            static ɵfac = function (r) {
                return new (r || n)(_(ie), _(mi), _(gi, 8), _(et));
            };
            static ɵprov = w({ token: n, factory: n.ɵfac });
        }
        return n;
    })(),
    Ai = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
        math: "http://www.w3.org/1998/Math/MathML",
    },
    Ni = /%COMP%/g,
    Hs = "%COMP%",
    tc = `_nghost-${Hs}`,
    nc = `_ngcontent-${Hs}`,
    rc = !0,
    ic = new D("", { providedIn: "root", factory: () => rc });
function oc(n) {
    return nc.replace(Ni, n);
}
function sc(n) {
    return tc.replace(Ni, n);
}
function Ws(n, t) {
    return t.map((e) => e.replace(Ni, n));
}
var lr = (() => {
        class n {
            eventManager;
            sharedStylesHost;
            appId;
            removeStylesOnCompDestroy;
            doc;
            platformId;
            ngZone;
            nonce;
            rendererByCompId = new Map();
            defaultRenderer;
            platformIsServer;
            constructor(e, r, i, o, s, l, a, h = null) {
                (this.eventManager = e),
                    (this.sharedStylesHost = r),
                    (this.appId = i),
                    (this.removeStylesOnCompDestroy = o),
                    (this.doc = s),
                    (this.platformId = l),
                    (this.ngZone = a),
                    (this.nonce = h),
                    (this.platformIsServer = on(l)),
                    (this.defaultRenderer = new un(
                        e,
                        s,
                        a,
                        this.platformIsServer
                    ));
            }
            createRenderer(e, r) {
                if (!e || !r) return this.defaultRenderer;
                this.platformIsServer &&
                    r.encapsulation === Zt.ShadowDom &&
                    (r = j(v({}, r), { encapsulation: Zt.Emulated }));
                let i = this.getOrCreateRenderer(e, r);
                return (
                    i instanceof cr
                        ? i.applyToHost(e)
                        : i instanceof dn && i.applyStyles(),
                    i
                );
            }
            getOrCreateRenderer(e, r) {
                let i = this.rendererByCompId,
                    o = i.get(r.id);
                if (!o) {
                    let s = this.doc,
                        l = this.ngZone,
                        a = this.eventManager,
                        h = this.sharedStylesHost,
                        f = this.removeStylesOnCompDestroy,
                        y = this.platformIsServer;
                    switch (r.encapsulation) {
                        case Zt.Emulated:
                            o = new cr(a, h, r, this.appId, f, s, l, y);
                            break;
                        case Zt.ShadowDom:
                            return new Oi(a, h, e, r, s, l, this.nonce, y);
                        default:
                            o = new dn(a, h, r, f, s, l, y);
                            break;
                    }
                    i.set(r.id, o);
                }
                return o;
            }
            ngOnDestroy() {
                this.rendererByCompId.clear();
            }
            static ɵfac = function (r) {
                return new (r || n)(
                    _(zs),
                    _(Gs),
                    _(mi),
                    _(ic),
                    _(ie),
                    _(et),
                    _(ve),
                    _(gi)
                );
            };
            static ɵprov = w({ token: n, factory: n.ɵfac });
        }
        return n;
    })(),
    un = class {
        eventManager;
        doc;
        ngZone;
        platformIsServer;
        data = Object.create(null);
        throwOnSyntheticProps = !0;
        constructor(t, e, r, i) {
            (this.eventManager = t),
                (this.doc = e),
                (this.ngZone = r),
                (this.platformIsServer = i);
        }
        destroy() {}
        destroyNode = null;
        createElement(t, e) {
            return e
                ? this.doc.createElementNS(Ai[e] || e, t)
                : this.doc.createElement(t);
        }
        createComment(t) {
            return this.doc.createComment(t);
        }
        createText(t) {
            return this.doc.createTextNode(t);
        }
        appendChild(t, e) {
            (Us(t) ? t.content : t).appendChild(e);
        }
        insertBefore(t, e, r) {
            t && (Us(t) ? t.content : t).insertBefore(e, r);
        }
        removeChild(t, e) {
            e.remove();
        }
        selectRootElement(t, e) {
            let r = typeof t == "string" ? this.doc.querySelector(t) : t;
            if (!r) throw new L(-5104, !1);
            return e || (r.textContent = ""), r;
        }
        parentNode(t) {
            return t.parentNode;
        }
        nextSibling(t) {
            return t.nextSibling;
        }
        setAttribute(t, e, r, i) {
            if (i) {
                e = i + ":" + e;
                let o = Ai[i];
                o ? t.setAttributeNS(o, e, r) : t.setAttribute(e, r);
            } else t.setAttribute(e, r);
        }
        removeAttribute(t, e, r) {
            if (r) {
                let i = Ai[r];
                i ? t.removeAttributeNS(i, e) : t.removeAttribute(`${r}:${e}`);
            } else t.removeAttribute(e);
        }
        addClass(t, e) {
            t.classList.add(e);
        }
        removeClass(t, e) {
            t.classList.remove(e);
        }
        setStyle(t, e, r, i) {
            i & (Jt.DashCase | Jt.Important)
                ? t.style.setProperty(e, r, i & Jt.Important ? "important" : "")
                : (t.style[e] = r);
        }
        removeStyle(t, e, r) {
            r & Jt.DashCase ? t.style.removeProperty(e) : (t.style[e] = "");
        }
        setProperty(t, e, r) {
            t != null && (t[e] = r);
        }
        setValue(t, e) {
            t.nodeValue = e;
        }
        listen(t, e, r) {
            if (
                typeof t == "string" &&
                ((t = xt().getGlobalEventTarget(this.doc, t)), !t)
            )
                throw new Error(`Unsupported event target ${t} for event ${e}`);
            return this.eventManager.addEventListener(
                t,
                e,
                this.decoratePreventDefault(r)
            );
        }
        decoratePreventDefault(t) {
            return (e) => {
                if (e === "__ngUnwrap__") return t;
                (this.platformIsServer
                    ? this.ngZone.runGuarded(() => t(e))
                    : t(e)) === !1 && e.preventDefault();
            };
        }
    };
function Us(n) {
    return n.tagName === "TEMPLATE" && n.content !== void 0;
}
var Oi = class extends un {
        sharedStylesHost;
        hostEl;
        shadowRoot;
        constructor(t, e, r, i, o, s, l, a) {
            super(t, o, s, a),
                (this.sharedStylesHost = e),
                (this.hostEl = r),
                (this.shadowRoot = r.attachShadow({ mode: "open" })),
                this.sharedStylesHost.addHost(this.shadowRoot);
            let h = Ws(i.id, i.styles);
            for (let y of h) {
                let S = document.createElement("style");
                l && S.setAttribute("nonce", l),
                    (S.textContent = y),
                    this.shadowRoot.appendChild(S);
            }
            let f = i.getExternalStyles?.();
            if (f)
                for (let y of f) {
                    let S = Ti(y, o);
                    l && S.setAttribute("nonce", l),
                        this.shadowRoot.appendChild(S);
                }
        }
        nodeOrShadowRoot(t) {
            return t === this.hostEl ? this.shadowRoot : t;
        }
        appendChild(t, e) {
            return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, r) {
            return super.insertBefore(this.nodeOrShadowRoot(t), e, r);
        }
        removeChild(t, e) {
            return super.removeChild(null, e);
        }
        parentNode(t) {
            return this.nodeOrShadowRoot(
                super.parentNode(this.nodeOrShadowRoot(t))
            );
        }
        destroy() {
            this.sharedStylesHost.removeHost(this.shadowRoot);
        }
    },
    dn = class extends un {
        sharedStylesHost;
        removeStylesOnCompDestroy;
        styles;
        styleUrls;
        constructor(t, e, r, i, o, s, l, a) {
            super(t, o, s, l),
                (this.sharedStylesHost = e),
                (this.removeStylesOnCompDestroy = i),
                (this.styles = a ? Ws(a, r.styles) : r.styles),
                (this.styleUrls = r.getExternalStyles?.(a));
        }
        applyStyles() {
            this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
        }
        destroy() {
            this.removeStylesOnCompDestroy &&
                this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
        }
    },
    cr = class extends dn {
        contentAttr;
        hostAttr;
        constructor(t, e, r, i, o, s, l, a) {
            let h = i + "-" + r.id;
            super(t, e, r, o, s, l, a, h),
                (this.contentAttr = oc(h)),
                (this.hostAttr = sc(h));
        }
        applyToHost(t) {
            this.applyStyles(), this.setAttribute(t, this.hostAttr, "");
        }
        createElement(t, e) {
            let r = super.createElement(t, e);
            return super.setAttribute(r, this.contentAttr, ""), r;
        }
    },
    ac = (() => {
        class n extends ar {
            constructor(e) {
                super(e);
            }
            supports(e) {
                return !0;
            }
            addEventListener(e, r, i) {
                return (
                    e.addEventListener(r, i, !1),
                    () => this.removeEventListener(e, r, i)
                );
            }
            removeEventListener(e, r, i) {
                return e.removeEventListener(r, i);
            }
            static ɵfac = function (r) {
                return new (r || n)(_(ie));
            };
            static ɵprov = w({ token: n, factory: n.ɵfac });
        }
        return n;
    })(),
    $s = ["alt", "control", "meta", "shift"],
    lc = {
        "\b": "Backspace",
        "	": "Tab",
        "\x7F": "Delete",
        "\x1B": "Escape",
        Del: "Delete",
        Esc: "Escape",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Up: "ArrowUp",
        Down: "ArrowDown",
        Menu: "ContextMenu",
        Scroll: "ScrollLock",
        Win: "OS",
    },
    cc = {
        alt: (n) => n.altKey,
        control: (n) => n.ctrlKey,
        meta: (n) => n.metaKey,
        shift: (n) => n.shiftKey,
    },
    uc = (() => {
        class n extends ar {
            constructor(e) {
                super(e);
            }
            supports(e) {
                return n.parseEventName(e) != null;
            }
            addEventListener(e, r, i) {
                let o = n.parseEventName(r),
                    s = n.eventCallback(o.fullKey, i, this.manager.getZone());
                return this.manager
                    .getZone()
                    .runOutsideAngular(() =>
                        xt().onAndCancel(e, o.domEventName, s)
                    );
            }
            static parseEventName(e) {
                let r = e.toLowerCase().split("."),
                    i = r.shift();
                if (r.length === 0 || !(i === "keydown" || i === "keyup"))
                    return null;
                let o = n._normalizeKey(r.pop()),
                    s = "",
                    l = r.indexOf("code");
                if (
                    (l > -1 && (r.splice(l, 1), (s = "code.")),
                    $s.forEach((h) => {
                        let f = r.indexOf(h);
                        f > -1 && (r.splice(f, 1), (s += h + "."));
                    }),
                    (s += o),
                    r.length != 0 || o.length === 0)
                )
                    return null;
                let a = {};
                return (a.domEventName = i), (a.fullKey = s), a;
            }
            static matchEventFullKeyCode(e, r) {
                let i = lc[e.key] || e.key,
                    o = "";
                return (
                    r.indexOf("code.") > -1 && ((i = e.code), (o = "code.")),
                    i == null || !i
                        ? !1
                        : ((i = i.toLowerCase()),
                          i === " " ? (i = "space") : i === "." && (i = "dot"),
                          $s.forEach((s) => {
                              if (s !== i) {
                                  let l = cc[s];
                                  l(e) && (o += s + ".");
                              }
                          }),
                          (o += i),
                          o === r)
                );
            }
            static eventCallback(e, r, i) {
                return (o) => {
                    n.matchEventFullKeyCode(o, e) && i.runGuarded(() => r(o));
                };
            }
            static _normalizeKey(e) {
                return e === "esc" ? "escape" : e;
            }
            static ɵfac = function (r) {
                return new (r || n)(_(ie));
            };
            static ɵprov = w({ token: n, factory: n.ɵfac });
        }
        return n;
    })();
function qs(n, t) {
    return os(v({ rootComponent: n }, dc(t)));
}
function dc(n) {
    return {
        appProviders: [...gc, ...(n?.providers ?? [])],
        platformProviders: mc,
    };
}
function hc() {
    Di.makeCurrent();
}
function pc() {
    return new fi();
}
function fc() {
    return Ho(document), document;
}
var mc = [
    { provide: et, useValue: ms },
    { provide: Wo, useValue: hc, multi: !0 },
    { provide: ie, useFactory: fc, deps: [] },
];
var gc = [
    { provide: $o, useValue: "root" },
    { provide: fi, useFactory: pc, deps: [] },
    { provide: Ri, useClass: ac, multi: !0, deps: [ie, ve, et] },
    { provide: Ri, useClass: uc, multi: !0, deps: [ie] },
    lr,
    Gs,
    zs,
    { provide: Xn, useExisting: lr },
    { provide: Qn, useClass: Ql, deps: [] },
    [],
];
var Xs = (() => {
    class n {
        _doc;
        constructor(e) {
            this._doc = e;
        }
        getTitle() {
            return this._doc.title;
        }
        setTitle(e) {
            this._doc.title = e || "";
        }
        static ɵfac = function (r) {
            return new (r || n)(_(ie));
        };
        static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
})();
var Pi = (function (n) {
    return (
        (n[(n.NoHttpTransferCache = 0)] = "NoHttpTransferCache"),
        (n[(n.HttpTransferCacheOptions = 1)] = "HttpTransferCacheOptions"),
        (n[(n.I18nSupport = 2)] = "I18nSupport"),
        (n[(n.EventReplay = 3)] = "EventReplay"),
        (n[(n.IncrementalHydration = 4)] = "IncrementalHydration"),
        n
    );
})(Pi || {});
function Zs(...n) {
    let t = [],
        e = new Set(),
        r = e.has(Pi.HttpTransferCacheOptions);
    for (let { ɵproviders: i, ɵkind: o } of n) e.add(o), i.length && t.push(i);
    return Ke([[], ss(), e.has(Pi.NoHttpTransferCache) || r ? [] : Vs({}), t]);
}
var M = "primary",
    xn = Symbol("RouteTitle"),
    ji = class {
        params;
        constructor(t) {
            this.params = t || {};
        }
        has(t) {
            return Object.prototype.hasOwnProperty.call(this.params, t);
        }
        get(t) {
            if (this.has(t)) {
                let e = this.params[t];
                return Array.isArray(e) ? e[0] : e;
            }
            return null;
        }
        getAll(t) {
            if (this.has(t)) {
                let e = this.params[t];
                return Array.isArray(e) ? e : [e];
            }
            return [];
        }
        get keys() {
            return Object.keys(this.params);
        }
    };
function Pt(n) {
    return new ji(n);
}
function yc(n, t, e) {
    let r = e.path.split("/");
    if (
        r.length > n.length ||
        (e.pathMatch === "full" && (t.hasChildren() || r.length < n.length))
    )
        return null;
    let i = {};
    for (let o = 0; o < r.length; o++) {
        let s = r[o],
            l = n[o];
        if (s[0] === ":") i[s.substring(1)] = l;
        else if (s !== l.path) return null;
    }
    return { consumed: n.slice(0, r.length), posParams: i };
}
function bc(n, t) {
    if (n.length !== t.length) return !1;
    for (let e = 0; e < n.length; ++e) if (!Ne(n[e], t[e])) return !1;
    return !0;
}
function Ne(n, t) {
    let e = n ? Ui(n) : void 0,
        r = t ? Ui(t) : void 0;
    if (!e || !r || e.length != r.length) return !1;
    let i;
    for (let o = 0; o < e.length; o++)
        if (((i = e[o]), !sa(n[i], t[i]))) return !1;
    return !0;
}
function Ui(n) {
    return [...Object.keys(n), ...Object.getOwnPropertySymbols(n)];
}
function sa(n, t) {
    if (Array.isArray(n) && Array.isArray(t)) {
        if (n.length !== t.length) return !1;
        let e = [...n].sort(),
            r = [...t].sort();
        return e.every((i, o) => r[o] === i);
    } else return n === t;
}
function aa(n) {
    return n.length > 0 ? n[n.length - 1] : null;
}
function lt(n) {
    return Ro(n) ? n : Jn(n) ? X(Promise.resolve(n)) : C(n);
}
var Cc = { exact: ca, subset: ua },
    la = { exact: _c, subset: wc, ignored: () => !0 };
function Js(n, t, e) {
    return (
        Cc[e.paths](n.root, t.root, e.matrixParams) &&
        la[e.queryParams](n.queryParams, t.queryParams) &&
        !(e.fragment === "exact" && n.fragment !== t.fragment)
    );
}
function _c(n, t) {
    return Ne(n, t);
}
function ca(n, t, e) {
    if (
        !vt(n.segments, t.segments) ||
        !hr(n.segments, t.segments, e) ||
        n.numberOfChildren !== t.numberOfChildren
    )
        return !1;
    for (let r in t.children)
        if (!n.children[r] || !ca(n.children[r], t.children[r], e)) return !1;
    return !0;
}
function wc(n, t) {
    return (
        Object.keys(t).length <= Object.keys(n).length &&
        Object.keys(t).every((e) => sa(n[e], t[e]))
    );
}
function ua(n, t, e) {
    return da(n, t, t.segments, e);
}
function da(n, t, e, r) {
    if (n.segments.length > e.length) {
        let i = n.segments.slice(0, e.length);
        return !(!vt(i, e) || t.hasChildren() || !hr(i, e, r));
    } else if (n.segments.length === e.length) {
        if (!vt(n.segments, e) || !hr(n.segments, e, r)) return !1;
        for (let i in t.children)
            if (!n.children[i] || !ua(n.children[i], t.children[i], r))
                return !1;
        return !0;
    } else {
        let i = e.slice(0, n.segments.length),
            o = e.slice(n.segments.length);
        return !vt(n.segments, i) || !hr(n.segments, i, r) || !n.children[M]
            ? !1
            : da(n.children[M], t, o, r);
    }
}
function hr(n, t, e) {
    return t.every((r, i) => la[e](n[i].parameters, r.parameters));
}
var Xe = class {
        root;
        queryParams;
        fragment;
        _queryParamMap;
        constructor(t = new F([], {}), e = {}, r = null) {
            (this.root = t), (this.queryParams = e), (this.fragment = r);
        }
        get queryParamMap() {
            return (
                (this._queryParamMap ??= Pt(this.queryParams)),
                this._queryParamMap
            );
        }
        toString() {
            return Mc.serialize(this);
        }
    },
    F = class {
        segments;
        children;
        parent = null;
        constructor(t, e) {
            (this.segments = t),
                (this.children = e),
                Object.values(e).forEach((r) => (r.parent = this));
        }
        hasChildren() {
            return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
            return Object.keys(this.children).length;
        }
        toString() {
            return pr(this);
        }
    },
    gt = class {
        path;
        parameters;
        _parameterMap;
        constructor(t, e) {
            (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
            return (
                (this._parameterMap ??= Pt(this.parameters)), this._parameterMap
            );
        }
        toString() {
            return pa(this);
        }
    };
function Sc(n, t) {
    return vt(n, t) && n.every((e, r) => Ne(e.parameters, t[r].parameters));
}
function vt(n, t) {
    return n.length !== t.length ? !1 : n.every((e, r) => e.path === t[r].path);
}
function Ec(n, t) {
    let e = [];
    return (
        Object.entries(n.children).forEach(([r, i]) => {
            r === M && (e = e.concat(t(i, r)));
        }),
        Object.entries(n.children).forEach(([r, i]) => {
            r !== M && (e = e.concat(t(i, r)));
        }),
        e
    );
}
var An = (() => {
        class n {
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵprov = w({
                token: n,
                factory: () => new Nt(),
                providedIn: "root",
            });
        }
        return n;
    })(),
    Nt = class {
        parse(t) {
            let e = new Bi(t);
            return new Xe(
                e.parseRootSegment(),
                e.parseQueryParams(),
                e.parseFragment()
            );
        }
        serialize(t) {
            let e = `/${hn(t.root, !0)}`,
                r = Ic(t.queryParams),
                i = typeof t.fragment == "string" ? `#${xc(t.fragment)}` : "";
            return `${e}${r}${i}`;
        }
    },
    Mc = new Nt();
function pr(n) {
    return n.segments.map((t) => pa(t)).join("/");
}
function hn(n, t) {
    if (!n.hasChildren()) return pr(n);
    if (t) {
        let e = n.children[M] ? hn(n.children[M], !1) : "",
            r = [];
        return (
            Object.entries(n.children).forEach(([i, o]) => {
                i !== M && r.push(`${i}:${hn(o, !1)}`);
            }),
            r.length > 0 ? `${e}(${r.join("//")})` : e
        );
    } else {
        let e = Ec(n, (r, i) =>
            i === M ? [hn(n.children[M], !1)] : [`${i}:${hn(r, !1)}`]
        );
        return Object.keys(n.children).length === 1 && n.children[M] != null
            ? `${pr(n)}/${e[0]}`
            : `${pr(n)}/(${e.join("//")})`;
    }
}
function ha(n) {
    return encodeURIComponent(n)
        .replace(/%40/g, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",");
}
function ur(n) {
    return ha(n).replace(/%3B/gi, ";");
}
function xc(n) {
    return encodeURI(n);
}
function $i(n) {
    return ha(n)
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/%26/gi, "&");
}
function fr(n) {
    return decodeURIComponent(n);
}
function Ys(n) {
    return fr(n.replace(/\+/g, "%20"));
}
function pa(n) {
    return `${$i(n.path)}${Ac(n.parameters)}`;
}
function Ac(n) {
    return Object.entries(n)
        .map(([t, e]) => `;${$i(t)}=${$i(e)}`)
        .join("");
}
function Ic(n) {
    let t = Object.entries(n)
        .map(([e, r]) =>
            Array.isArray(r)
                ? r.map((i) => `${ur(e)}=${ur(i)}`).join("&")
                : `${ur(e)}=${ur(r)}`
        )
        .filter((e) => e);
    return t.length ? `?${t.join("&")}` : "";
}
var Dc = /^[^\/()?;#]+/;
function ki(n) {
    let t = n.match(Dc);
    return t ? t[0] : "";
}
var Rc = /^[^\/()?;=#]+/;
function Tc(n) {
    let t = n.match(Rc);
    return t ? t[0] : "";
}
var Oc = /^[^=?&#]+/;
function Pc(n) {
    let t = n.match(Oc);
    return t ? t[0] : "";
}
var Nc = /^[^&#]+/;
function kc(n) {
    let t = n.match(Nc);
    return t ? t[0] : "";
}
var Bi = class {
    url;
    remaining;
    constructor(t) {
        (this.url = t), (this.remaining = t);
    }
    parseRootSegment() {
        return (
            this.consumeOptional("/"),
            this.remaining === "" ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
                ? new F([], {})
                : new F([], this.parseChildren())
        );
    }
    parseQueryParams() {
        let t = {};
        if (this.consumeOptional("?"))
            do this.parseQueryParam(t);
            while (this.consumeOptional("&"));
        return t;
    }
    parseFragment() {
        return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
    }
    parseChildren() {
        if (this.remaining === "") return {};
        this.consumeOptional("/");
        let t = [];
        for (
            this.peekStartsWith("(") || t.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

        )
            this.capture("/"), t.push(this.parseSegment());
        let e = {};
        this.peekStartsWith("/(") &&
            (this.capture("/"), (e = this.parseParens(!0)));
        let r = {};
        return (
            this.peekStartsWith("(") && (r = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) && (r[M] = new F(t, e)),
            r
        );
    }
    parseSegment() {
        let t = ki(this.remaining);
        if (t === "" && this.peekStartsWith(";")) throw new L(4009, !1);
        return this.capture(t), new gt(fr(t), this.parseMatrixParams());
    }
    parseMatrixParams() {
        let t = {};
        for (; this.consumeOptional(";"); ) this.parseParam(t);
        return t;
    }
    parseParam(t) {
        let e = Tc(this.remaining);
        if (!e) return;
        this.capture(e);
        let r = "";
        if (this.consumeOptional("=")) {
            let i = ki(this.remaining);
            i && ((r = i), this.capture(r));
        }
        t[fr(e)] = fr(r);
    }
    parseQueryParam(t) {
        let e = Pc(this.remaining);
        if (!e) return;
        this.capture(e);
        let r = "";
        if (this.consumeOptional("=")) {
            let s = kc(this.remaining);
            s && ((r = s), this.capture(r));
        }
        let i = Ys(e),
            o = Ys(r);
        if (t.hasOwnProperty(i)) {
            let s = t[i];
            Array.isArray(s) || ((s = [s]), (t[i] = s)), s.push(o);
        } else t[i] = o;
    }
    parseParens(t) {
        let e = {};
        for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

        ) {
            let r = ki(this.remaining),
                i = this.remaining[r.length];
            if (i !== "/" && i !== ")" && i !== ";") throw new L(4010, !1);
            let o;
            r.indexOf(":") > -1
                ? ((o = r.slice(0, r.indexOf(":"))),
                  this.capture(o),
                  this.capture(":"))
                : t && (o = M);
            let s = this.parseChildren();
            (e[o] = Object.keys(s).length === 1 ? s[M] : new F([], s)),
                this.consumeOptional("//");
        }
        return e;
    }
    peekStartsWith(t) {
        return this.remaining.startsWith(t);
    }
    consumeOptional(t) {
        return this.peekStartsWith(t)
            ? ((this.remaining = this.remaining.substring(t.length)), !0)
            : !1;
    }
    capture(t) {
        if (!this.consumeOptional(t)) throw new L(4011, !1);
    }
};
function fa(n) {
    return n.segments.length > 0 ? new F([], { [M]: n }) : n;
}
function ma(n) {
    let t = {};
    for (let [r, i] of Object.entries(n.children)) {
        let o = ma(i);
        if (r === M && o.segments.length === 0 && o.hasChildren())
            for (let [s, l] of Object.entries(o.children)) t[s] = l;
        else (o.segments.length > 0 || o.hasChildren()) && (t[r] = o);
    }
    let e = new F(n.segments, t);
    return Fc(e);
}
function Fc(n) {
    if (n.numberOfChildren === 1 && n.children[M]) {
        let t = n.children[M];
        return new F(n.segments.concat(t.segments), t.children);
    }
    return n;
}
function yt(n) {
    return n instanceof Xe;
}
function Vc(n, t, e = null, r = null) {
    let i = ga(n);
    return va(i, t, e, r);
}
function ga(n) {
    let t;
    function e(o) {
        let s = {};
        for (let a of o.children) {
            let h = e(a);
            s[a.outlet] = h;
        }
        let l = new F(o.url, s);
        return o === n && (t = l), l;
    }
    let r = e(n.root),
        i = fa(r);
    return t ?? i;
}
function va(n, t, e, r) {
    let i = n;
    for (; i.parent; ) i = i.parent;
    if (t.length === 0) return Fi(i, i, i, e, r);
    let o = Lc(t);
    if (o.toRoot()) return Fi(i, i, new F([], {}), e, r);
    let s = jc(o, i, n),
        l = s.processChildren
            ? mn(s.segmentGroup, s.index, o.commands)
            : ba(s.segmentGroup, s.index, o.commands);
    return Fi(i, s.segmentGroup, l, e, r);
}
function mr(n) {
    return typeof n == "object" && n != null && !n.outlets && !n.segmentPath;
}
function yn(n) {
    return typeof n == "object" && n != null && n.outlets;
}
function Fi(n, t, e, r, i) {
    let o = {};
    r &&
        Object.entries(r).forEach(([a, h]) => {
            o[a] = Array.isArray(h) ? h.map((f) => `${f}`) : `${h}`;
        });
    let s;
    n === t ? (s = e) : (s = ya(n, t, e));
    let l = fa(ma(s));
    return new Xe(l, o, i);
}
function ya(n, t, e) {
    let r = {};
    return (
        Object.entries(n.children).forEach(([i, o]) => {
            o === t ? (r[i] = e) : (r[i] = ya(o, t, e));
        }),
        new F(n.segments, r)
    );
}
var gr = class {
    isAbsolute;
    numberOfDoubleDots;
    commands;
    constructor(t, e, r) {
        if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = e),
            (this.commands = r),
            t && r.length > 0 && mr(r[0]))
        )
            throw new L(4003, !1);
        let i = r.find(yn);
        if (i && i !== aa(r)) throw new L(4004, !1);
    }
    toRoot() {
        return (
            this.isAbsolute &&
            this.commands.length === 1 &&
            this.commands[0] == "/"
        );
    }
};
function Lc(n) {
    if (typeof n[0] == "string" && n.length === 1 && n[0] === "/")
        return new gr(!0, 0, n);
    let t = 0,
        e = !1,
        r = n.reduce((i, o, s) => {
            if (typeof o == "object" && o != null) {
                if (o.outlets) {
                    let l = {};
                    return (
                        Object.entries(o.outlets).forEach(([a, h]) => {
                            l[a] = typeof h == "string" ? h.split("/") : h;
                        }),
                        [...i, { outlets: l }]
                    );
                }
                if (o.segmentPath) return [...i, o.segmentPath];
            }
            return typeof o != "string"
                ? [...i, o]
                : s === 0
                ? (o.split("/").forEach((l, a) => {
                      (a == 0 && l === ".") ||
                          (a == 0 && l === ""
                              ? (e = !0)
                              : l === ".."
                              ? t++
                              : l != "" && i.push(l));
                  }),
                  i)
                : [...i, o];
        }, []);
    return new gr(e, t, r);
}
var Rt = class {
    segmentGroup;
    processChildren;
    index;
    constructor(t, e, r) {
        (this.segmentGroup = t), (this.processChildren = e), (this.index = r);
    }
};
function jc(n, t, e) {
    if (n.isAbsolute) return new Rt(t, !0, 0);
    if (!e) return new Rt(t, !1, NaN);
    if (e.parent === null) return new Rt(e, !0, 0);
    let r = mr(n.commands[0]) ? 0 : 1,
        i = e.segments.length - 1 + r;
    return Uc(e, i, n.numberOfDoubleDots);
}
function Uc(n, t, e) {
    let r = n,
        i = t,
        o = e;
    for (; o > i; ) {
        if (((o -= i), (r = r.parent), !r)) throw new L(4005, !1);
        i = r.segments.length;
    }
    return new Rt(r, !1, i - o);
}
function $c(n) {
    return yn(n[0]) ? n[0].outlets : { [M]: n };
}
function ba(n, t, e) {
    if (((n ??= new F([], {})), n.segments.length === 0 && n.hasChildren()))
        return mn(n, t, e);
    let r = Bc(n, t, e),
        i = e.slice(r.commandIndex);
    if (r.match && r.pathIndex < n.segments.length) {
        let o = new F(n.segments.slice(0, r.pathIndex), {});
        return (
            (o.children[M] = new F(n.segments.slice(r.pathIndex), n.children)),
            mn(o, 0, i)
        );
    } else
        return r.match && i.length === 0
            ? new F(n.segments, {})
            : r.match && !n.hasChildren()
            ? zi(n, t, e)
            : r.match
            ? mn(n, 0, i)
            : zi(n, t, e);
}
function mn(n, t, e) {
    if (e.length === 0) return new F(n.segments, {});
    {
        let r = $c(e),
            i = {};
        if (
            Object.keys(r).some((o) => o !== M) &&
            n.children[M] &&
            n.numberOfChildren === 1 &&
            n.children[M].segments.length === 0
        ) {
            let o = mn(n.children[M], t, e);
            return new F(n.segments, o.children);
        }
        return (
            Object.entries(r).forEach(([o, s]) => {
                typeof s == "string" && (s = [s]),
                    s !== null && (i[o] = ba(n.children[o], t, s));
            }),
            Object.entries(n.children).forEach(([o, s]) => {
                r[o] === void 0 && (i[o] = s);
            }),
            new F(n.segments, i)
        );
    }
}
function Bc(n, t, e) {
    let r = 0,
        i = t,
        o = { match: !1, pathIndex: 0, commandIndex: 0 };
    for (; i < n.segments.length; ) {
        if (r >= e.length) return o;
        let s = n.segments[i],
            l = e[r];
        if (yn(l)) break;
        let a = `${l}`,
            h = r < e.length - 1 ? e[r + 1] : null;
        if (i > 0 && a === void 0) break;
        if (a && h && typeof h == "object" && h.outlets === void 0) {
            if (!Qs(a, h, s)) return o;
            r += 2;
        } else {
            if (!Qs(a, {}, s)) return o;
            r++;
        }
        i++;
    }
    return { match: !0, pathIndex: i, commandIndex: r };
}
function zi(n, t, e) {
    let r = n.segments.slice(0, t),
        i = 0;
    for (; i < e.length; ) {
        let o = e[i];
        if (yn(o)) {
            let a = zc(o.outlets);
            return new F(r, a);
        }
        if (i === 0 && mr(e[0])) {
            let a = n.segments[t];
            r.push(new gt(a.path, Ks(e[0]))), i++;
            continue;
        }
        let s = yn(o) ? o.outlets[M] : `${o}`,
            l = i < e.length - 1 ? e[i + 1] : null;
        s && l && mr(l)
            ? (r.push(new gt(s, Ks(l))), (i += 2))
            : (r.push(new gt(s, {})), i++);
    }
    return new F(r, {});
}
function zc(n) {
    let t = {};
    return (
        Object.entries(n).forEach(([e, r]) => {
            typeof r == "string" && (r = [r]),
                r !== null && (t[e] = zi(new F([], {}), 0, r));
        }),
        t
    );
}
function Ks(n) {
    let t = {};
    return Object.entries(n).forEach(([e, r]) => (t[e] = `${r}`)), t;
}
function Qs(n, t, e) {
    return n == e.path && Ne(t, e.parameters);
}
var gn = "imperative",
    J = (function (n) {
        return (
            (n[(n.NavigationStart = 0)] = "NavigationStart"),
            (n[(n.NavigationEnd = 1)] = "NavigationEnd"),
            (n[(n.NavigationCancel = 2)] = "NavigationCancel"),
            (n[(n.NavigationError = 3)] = "NavigationError"),
            (n[(n.RoutesRecognized = 4)] = "RoutesRecognized"),
            (n[(n.ResolveStart = 5)] = "ResolveStart"),
            (n[(n.ResolveEnd = 6)] = "ResolveEnd"),
            (n[(n.GuardsCheckStart = 7)] = "GuardsCheckStart"),
            (n[(n.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
            (n[(n.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
            (n[(n.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
            (n[(n.ChildActivationStart = 11)] = "ChildActivationStart"),
            (n[(n.ChildActivationEnd = 12)] = "ChildActivationEnd"),
            (n[(n.ActivationStart = 13)] = "ActivationStart"),
            (n[(n.ActivationEnd = 14)] = "ActivationEnd"),
            (n[(n.Scroll = 15)] = "Scroll"),
            (n[(n.NavigationSkipped = 16)] = "NavigationSkipped"),
            n
        );
    })(J || {}),
    be = class {
        id;
        url;
        constructor(t, e) {
            (this.id = t), (this.url = e);
        }
    },
    kt = class extends be {
        type = J.NavigationStart;
        navigationTrigger;
        restoredState;
        constructor(t, e, r = "imperative", i = null) {
            super(t, e), (this.navigationTrigger = r), (this.restoredState = i);
        }
        toString() {
            return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
    },
    Ie = class extends be {
        urlAfterRedirects;
        type = J.NavigationEnd;
        constructor(t, e, r) {
            super(t, e), (this.urlAfterRedirects = r);
        }
        toString() {
            return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
    },
    he = (function (n) {
        return (
            (n[(n.Redirect = 0)] = "Redirect"),
            (n[(n.SupersededByNewNavigation = 1)] =
                "SupersededByNewNavigation"),
            (n[(n.NoDataFromResolver = 2)] = "NoDataFromResolver"),
            (n[(n.GuardRejected = 3)] = "GuardRejected"),
            n
        );
    })(he || {}),
    vr = (function (n) {
        return (
            (n[(n.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
            (n[(n.IgnoredByUrlHandlingStrategy = 1)] =
                "IgnoredByUrlHandlingStrategy"),
            n
        );
    })(vr || {}),
    qe = class extends be {
        reason;
        code;
        type = J.NavigationCancel;
        constructor(t, e, r, i) {
            super(t, e), (this.reason = r), (this.code = i);
        }
        toString() {
            return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
    },
    at = class extends be {
        reason;
        code;
        type = J.NavigationSkipped;
        constructor(t, e, r, i) {
            super(t, e), (this.reason = r), (this.code = i);
        }
    },
    bn = class extends be {
        error;
        target;
        type = J.NavigationError;
        constructor(t, e, r, i) {
            super(t, e), (this.error = r), (this.target = i);
        }
        toString() {
            return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
    },
    yr = class extends be {
        urlAfterRedirects;
        state;
        type = J.RoutesRecognized;
        constructor(t, e, r, i) {
            super(t, e), (this.urlAfterRedirects = r), (this.state = i);
        }
        toString() {
            return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
    },
    Gi = class extends be {
        urlAfterRedirects;
        state;
        type = J.GuardsCheckStart;
        constructor(t, e, r, i) {
            super(t, e), (this.urlAfterRedirects = r), (this.state = i);
        }
        toString() {
            return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
    },
    Hi = class extends be {
        urlAfterRedirects;
        state;
        shouldActivate;
        type = J.GuardsCheckEnd;
        constructor(t, e, r, i, o) {
            super(t, e),
                (this.urlAfterRedirects = r),
                (this.state = i),
                (this.shouldActivate = o);
        }
        toString() {
            return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
    },
    Wi = class extends be {
        urlAfterRedirects;
        state;
        type = J.ResolveStart;
        constructor(t, e, r, i) {
            super(t, e), (this.urlAfterRedirects = r), (this.state = i);
        }
        toString() {
            return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
    },
    qi = class extends be {
        urlAfterRedirects;
        state;
        type = J.ResolveEnd;
        constructor(t, e, r, i) {
            super(t, e), (this.urlAfterRedirects = r), (this.state = i);
        }
        toString() {
            return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
    },
    Xi = class {
        route;
        type = J.RouteConfigLoadStart;
        constructor(t) {
            this.route = t;
        }
        toString() {
            return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
    },
    Zi = class {
        route;
        type = J.RouteConfigLoadEnd;
        constructor(t) {
            this.route = t;
        }
        toString() {
            return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
    },
    Ji = class {
        snapshot;
        type = J.ChildActivationStart;
        constructor(t) {
            this.snapshot = t;
        }
        toString() {
            return `ChildActivationStart(path: '${
                (this.snapshot.routeConfig && this.snapshot.routeConfig.path) ||
                ""
            }')`;
        }
    },
    Yi = class {
        snapshot;
        type = J.ChildActivationEnd;
        constructor(t) {
            this.snapshot = t;
        }
        toString() {
            return `ChildActivationEnd(path: '${
                (this.snapshot.routeConfig && this.snapshot.routeConfig.path) ||
                ""
            }')`;
        }
    },
    Ki = class {
        snapshot;
        type = J.ActivationStart;
        constructor(t) {
            this.snapshot = t;
        }
        toString() {
            return `ActivationStart(path: '${
                (this.snapshot.routeConfig && this.snapshot.routeConfig.path) ||
                ""
            }')`;
        }
    },
    Qi = class {
        snapshot;
        type = J.ActivationEnd;
        constructor(t) {
            this.snapshot = t;
        }
        toString() {
            return `ActivationEnd(path: '${
                (this.snapshot.routeConfig && this.snapshot.routeConfig.path) ||
                ""
            }')`;
        }
    },
    br = class {
        routerEvent;
        position;
        anchor;
        type = J.Scroll;
        constructor(t, e, r) {
            (this.routerEvent = t), (this.position = e), (this.anchor = r);
        }
        toString() {
            let t = this.position
                ? `${this.position[0]}, ${this.position[1]}`
                : null;
            return `Scroll(anchor: '${this.anchor}', position: '${t}')`;
        }
    },
    Cn = class {},
    Ft = class {
        url;
        navigationBehaviorOptions;
        constructor(t, e) {
            (this.url = t), (this.navigationBehaviorOptions = e);
        }
    };
function Gc(n, t) {
    return (
        n.providers &&
            !n._injector &&
            (n._injector = yi(n.providers, t, `Route: ${n.path}`)),
        n._injector ?? t
    );
}
function Ae(n) {
    return n.outlet || M;
}
function Hc(n, t) {
    let e = n.filter((r) => Ae(r) === t);
    return e.push(...n.filter((r) => Ae(r) !== t)), e;
}
function In(n) {
    if (!n) return null;
    if (n.routeConfig?._injector) return n.routeConfig._injector;
    for (let t = n.parent; t; t = t.parent) {
        let e = t.routeConfig;
        if (e?._loadedInjector) return e._loadedInjector;
        if (e?._injector) return e._injector;
    }
    return null;
}
var eo = class {
        rootInjector;
        outlet = null;
        route = null;
        children;
        attachRef = null;
        get injector() {
            return In(this.route?.snapshot) ?? this.rootInjector;
        }
        constructor(t) {
            (this.rootInjector = t),
                (this.children = new Dn(this.rootInjector));
        }
    },
    Dn = (() => {
        class n {
            rootInjector;
            contexts = new Map();
            constructor(e) {
                this.rootInjector = e;
            }
            onChildOutletCreated(e, r) {
                let i = this.getOrCreateContext(e);
                (i.outlet = r), this.contexts.set(e, i);
            }
            onChildOutletDestroyed(e) {
                let r = this.getContext(e);
                r && ((r.outlet = null), (r.attachRef = null));
            }
            onOutletDeactivated() {
                let e = this.contexts;
                return (this.contexts = new Map()), e;
            }
            onOutletReAttached(e) {
                this.contexts = e;
            }
            getOrCreateContext(e) {
                let r = this.getContext(e);
                return (
                    r ||
                        ((r = new eo(this.rootInjector)),
                        this.contexts.set(e, r)),
                    r
                );
            }
            getContext(e) {
                return this.contexts.get(e) || null;
            }
            static ɵfac = function (r) {
                return new (r || n)(_(dt));
            };
            static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
        }
        return n;
    })(),
    Cr = class {
        _root;
        constructor(t) {
            this._root = t;
        }
        get root() {
            return this._root.value;
        }
        parent(t) {
            let e = this.pathFromRoot(t);
            return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
            let e = to(t, this._root);
            return e ? e.children.map((r) => r.value) : [];
        }
        firstChild(t) {
            let e = to(t, this._root);
            return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
            let e = no(t, this._root);
            return e.length < 2
                ? []
                : e[e.length - 2].children
                      .map((i) => i.value)
                      .filter((i) => i !== t);
        }
        pathFromRoot(t) {
            return no(t, this._root).map((e) => e.value);
        }
    };
function to(n, t) {
    if (n === t.value) return t;
    for (let e of t.children) {
        let r = to(n, e);
        if (r) return r;
    }
    return null;
}
function no(n, t) {
    if (n === t.value) return [t];
    for (let e of t.children) {
        let r = no(n, e);
        if (r.length) return r.unshift(t), r;
    }
    return [];
}
var de = class {
    value;
    children;
    constructor(t, e) {
        (this.value = t), (this.children = e);
    }
    toString() {
        return `TreeNode(${this.value})`;
    }
};
function Dt(n) {
    let t = {};
    return n && n.children.forEach((e) => (t[e.value.outlet] = e)), t;
}
var _r = class extends Cr {
    snapshot;
    constructor(t, e) {
        super(t), (this.snapshot = e), ho(this, t);
    }
    toString() {
        return this.snapshot.toString();
    }
};
function Ca(n) {
    let t = Wc(n),
        e = new me([new gt("", {})]),
        r = new me({}),
        i = new me({}),
        o = new me({}),
        s = new me(""),
        l = new Ce(e, r, o, s, i, M, n, t.root);
    return (l.snapshot = t.root), new _r(new de(l, []), t);
}
function Wc(n) {
    let t = {},
        e = {},
        r = {},
        i = "",
        o = new Tt([], t, r, i, e, M, n, null, {});
    return new Sr("", new de(o, []));
}
var Ce = class {
    urlSubject;
    paramsSubject;
    queryParamsSubject;
    fragmentSubject;
    dataSubject;
    outlet;
    component;
    snapshot;
    _futureSnapshot;
    _routerState;
    _paramMap;
    _queryParamMap;
    title;
    url;
    params;
    queryParams;
    fragment;
    data;
    constructor(t, e, r, i, o, s, l, a) {
        (this.urlSubject = t),
            (this.paramsSubject = e),
            (this.queryParamsSubject = r),
            (this.fragmentSubject = i),
            (this.dataSubject = o),
            (this.outlet = s),
            (this.component = l),
            (this._futureSnapshot = a),
            (this.title = this.dataSubject?.pipe(O((h) => h[xn])) ?? C(void 0)),
            (this.url = t),
            (this.params = e),
            (this.queryParams = r),
            (this.fragment = i),
            (this.data = o);
    }
    get routeConfig() {
        return this._futureSnapshot.routeConfig;
    }
    get root() {
        return this._routerState.root;
    }
    get parent() {
        return this._routerState.parent(this);
    }
    get firstChild() {
        return this._routerState.firstChild(this);
    }
    get children() {
        return this._routerState.children(this);
    }
    get pathFromRoot() {
        return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
        return (
            (this._paramMap ??= this.params.pipe(O((t) => Pt(t)))),
            this._paramMap
        );
    }
    get queryParamMap() {
        return (
            (this._queryParamMap ??= this.queryParams.pipe(O((t) => Pt(t)))),
            this._queryParamMap
        );
    }
    toString() {
        return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
    }
};
function wr(n, t, e = "emptyOnly") {
    let r,
        { routeConfig: i } = n;
    return (
        t !== null &&
        (e === "always" ||
            i?.path === "" ||
            (!t.component && !t.routeConfig?.loadComponent))
            ? (r = {
                  params: v(v({}, t.params), n.params),
                  data: v(v({}, t.data), n.data),
                  resolve: v(
                      v(v(v({}, n.data), t.data), i?.data),
                      n._resolvedData
                  ),
              })
            : (r = {
                  params: v({}, n.params),
                  data: v({}, n.data),
                  resolve: v(v({}, n.data), n._resolvedData ?? {}),
              }),
        i && wa(i) && (r.resolve[xn] = i.title),
        r
    );
}
var Tt = class {
        url;
        params;
        queryParams;
        fragment;
        data;
        outlet;
        component;
        routeConfig;
        _resolve;
        _resolvedData;
        _routerState;
        _paramMap;
        _queryParamMap;
        get title() {
            return this.data?.[xn];
        }
        constructor(t, e, r, i, o, s, l, a, h) {
            (this.url = t),
                (this.params = e),
                (this.queryParams = r),
                (this.fragment = i),
                (this.data = o),
                (this.outlet = s),
                (this.component = l),
                (this.routeConfig = a),
                (this._resolve = h);
        }
        get root() {
            return this._routerState.root;
        }
        get parent() {
            return this._routerState.parent(this);
        }
        get firstChild() {
            return this._routerState.firstChild(this);
        }
        get children() {
            return this._routerState.children(this);
        }
        get pathFromRoot() {
            return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
            return (this._paramMap ??= Pt(this.params)), this._paramMap;
        }
        get queryParamMap() {
            return (
                (this._queryParamMap ??= Pt(this.queryParams)),
                this._queryParamMap
            );
        }
        toString() {
            let t = this.url.map((r) => r.toString()).join("/"),
                e = this.routeConfig ? this.routeConfig.path : "";
            return `Route(url:'${t}', path:'${e}')`;
        }
    },
    Sr = class extends Cr {
        url;
        constructor(t, e) {
            super(e), (this.url = t), ho(this, e);
        }
        toString() {
            return _a(this._root);
        }
    };
function ho(n, t) {
    (t.value._routerState = n), t.children.forEach((e) => ho(n, e));
}
function _a(n) {
    let t =
        n.children.length > 0 ? ` { ${n.children.map(_a).join(", ")} } ` : "";
    return `${n.value}${t}`;
}
function Vi(n) {
    if (n.snapshot) {
        let t = n.snapshot,
            e = n._futureSnapshot;
        (n.snapshot = e),
            Ne(t.queryParams, e.queryParams) ||
                n.queryParamsSubject.next(e.queryParams),
            t.fragment !== e.fragment && n.fragmentSubject.next(e.fragment),
            Ne(t.params, e.params) || n.paramsSubject.next(e.params),
            bc(t.url, e.url) || n.urlSubject.next(e.url),
            Ne(t.data, e.data) || n.dataSubject.next(e.data);
    } else
        (n.snapshot = n._futureSnapshot),
            n.dataSubject.next(n._futureSnapshot.data);
}
function ro(n, t) {
    let e = Ne(n.params, t.params) && Sc(n.url, t.url),
        r = !n.parent != !t.parent;
    return e && !r && (!n.parent || ro(n.parent, t.parent));
}
function wa(n) {
    return typeof n.title == "string" || n.title === null;
}
var qc = new D(""),
    bt = (() => {
        class n {
            activated = null;
            get activatedComponentRef() {
                return this.activated;
            }
            _activatedRoute = null;
            name = M;
            activateEvents = new xe();
            deactivateEvents = new xe();
            attachEvents = new xe();
            detachEvents = new xe();
            routerOutletData = Go(void 0);
            parentContexts = b(Dn);
            location = b(Yo);
            changeDetector = b(Mt);
            inputBinder = b(Ar, { optional: !0 });
            supportsBindingToComponentInputs = !0;
            ngOnChanges(e) {
                if (e.name) {
                    let { firstChange: r, previousValue: i } = e.name;
                    if (r) return;
                    this.isTrackedInParentContexts(i) &&
                        (this.deactivate(),
                        this.parentContexts.onChildOutletDestroyed(i)),
                        this.initializeOutletWithName();
                }
            }
            ngOnDestroy() {
                this.isTrackedInParentContexts(this.name) &&
                    this.parentContexts.onChildOutletDestroyed(this.name),
                    this.inputBinder?.unsubscribeFromRouteData(this);
            }
            isTrackedInParentContexts(e) {
                return this.parentContexts.getContext(e)?.outlet === this;
            }
            ngOnInit() {
                this.initializeOutletWithName();
            }
            initializeOutletWithName() {
                if (
                    (this.parentContexts.onChildOutletCreated(this.name, this),
                    this.activated)
                )
                    return;
                let e = this.parentContexts.getContext(this.name);
                e?.route &&
                    (e.attachRef
                        ? this.attach(e.attachRef, e.route)
                        : this.activateWith(e.route, e.injector));
            }
            get isActivated() {
                return !!this.activated;
            }
            get component() {
                if (!this.activated) throw new L(4012, !1);
                return this.activated.instance;
            }
            get activatedRoute() {
                if (!this.activated) throw new L(4012, !1);
                return this._activatedRoute;
            }
            get activatedRouteData() {
                return this._activatedRoute
                    ? this._activatedRoute.snapshot.data
                    : {};
            }
            detach() {
                if (!this.activated) throw new L(4012, !1);
                this.location.detach();
                let e = this.activated;
                return (
                    (this.activated = null),
                    (this._activatedRoute = null),
                    this.detachEvents.emit(e.instance),
                    e
                );
            }
            attach(e, r) {
                (this.activated = e),
                    (this._activatedRoute = r),
                    this.location.insert(e.hostView),
                    this.inputBinder?.bindActivatedRouteToOutletComponent(this),
                    this.attachEvents.emit(e.instance);
            }
            deactivate() {
                if (this.activated) {
                    let e = this.component;
                    this.activated.destroy(),
                        (this.activated = null),
                        (this._activatedRoute = null),
                        this.deactivateEvents.emit(e);
                }
            }
            activateWith(e, r) {
                if (this.isActivated) throw new L(4013, !1);
                this._activatedRoute = e;
                let i = this.location,
                    s = e.snapshot.component,
                    l = this.parentContexts.getOrCreateContext(
                        this.name
                    ).children,
                    a = new io(e, l, i.injector, this.routerOutletData);
                (this.activated = i.createComponent(s, {
                    index: i.length,
                    injector: a,
                    environmentInjector: r,
                })),
                    this.changeDetector.markForCheck(),
                    this.inputBinder?.bindActivatedRouteToOutletComponent(this),
                    this.activateEvents.emit(this.activated.instance);
            }
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵdir = W({
                type: n,
                selectors: [["router-outlet"]],
                inputs: {
                    name: "name",
                    routerOutletData: [1, "routerOutletData"],
                },
                outputs: {
                    activateEvents: "activate",
                    deactivateEvents: "deactivate",
                    attachEvents: "attach",
                    detachEvents: "detach",
                },
                exportAs: ["outlet"],
                features: [ht],
            });
        }
        return n;
    })(),
    io = class n {
        route;
        childContexts;
        parent;
        outletData;
        __ngOutletInjector(t) {
            return new n(this.route, this.childContexts, t, this.outletData);
        }
        constructor(t, e, r, i) {
            (this.route = t),
                (this.childContexts = e),
                (this.parent = r),
                (this.outletData = i);
        }
        get(t, e) {
            return t === Ce
                ? this.route
                : t === Dn
                ? this.childContexts
                : t === qc
                ? this.outletData
                : this.parent.get(t, e);
        }
    },
    Ar = new D(""),
    ea = (() => {
        class n {
            outletDataSubscriptions = new Map();
            bindActivatedRouteToOutletComponent(e) {
                this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e);
            }
            unsubscribeFromRouteData(e) {
                this.outletDataSubscriptions.get(e)?.unsubscribe(),
                    this.outletDataSubscriptions.delete(e);
            }
            subscribeToRouteData(e) {
                let { activatedRoute: r } = e,
                    i = zn([r.queryParams, r.params, r.data])
                        .pipe(
                            ue(
                                ([o, s, l], a) => (
                                    (l = v(v(v({}, o), s), l)),
                                    a === 0 ? C(l) : Promise.resolve(l)
                                )
                            )
                        )
                        .subscribe((o) => {
                            if (
                                !e.isActivated ||
                                !e.activatedComponentRef ||
                                e.activatedRoute !== r ||
                                r.component === null
                            ) {
                                this.unsubscribeFromRouteData(e);
                                return;
                            }
                            let s = as(r.component);
                            if (!s) {
                                this.unsubscribeFromRouteData(e);
                                return;
                            }
                            for (let { templateName: l } of s.inputs)
                                e.activatedComponentRef.setInput(l, o[l]);
                        });
                this.outletDataSubscriptions.set(e, i);
            }
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵprov = w({ token: n, factory: n.ɵfac });
        }
        return n;
    })();
function Xc(n, t, e) {
    let r = _n(n, t._root, e ? e._root : void 0);
    return new _r(r, t);
}
function _n(n, t, e) {
    if (e && n.shouldReuseRoute(t.value, e.value.snapshot)) {
        let r = e.value;
        r._futureSnapshot = t.value;
        let i = Zc(n, t, e);
        return new de(r, i);
    } else {
        if (n.shouldAttach(t.value)) {
            let o = n.retrieve(t.value);
            if (o !== null) {
                let s = o.route;
                return (
                    (s.value._futureSnapshot = t.value),
                    (s.children = t.children.map((l) => _n(n, l))),
                    s
                );
            }
        }
        let r = Jc(t.value),
            i = t.children.map((o) => _n(n, o));
        return new de(r, i);
    }
}
function Zc(n, t, e) {
    return t.children.map((r) => {
        for (let i of e.children)
            if (n.shouldReuseRoute(r.value, i.value.snapshot))
                return _n(n, r, i);
        return _n(n, r);
    });
}
function Jc(n) {
    return new Ce(
        new me(n.url),
        new me(n.params),
        new me(n.queryParams),
        new me(n.fragment),
        new me(n.data),
        n.outlet,
        n.component,
        n
    );
}
var wn = class {
        redirectTo;
        navigationBehaviorOptions;
        constructor(t, e) {
            (this.redirectTo = t), (this.navigationBehaviorOptions = e);
        }
    },
    Sa = "ngNavigationCancelingError";
function Er(n, t) {
    let { redirectTo: e, navigationBehaviorOptions: r } = yt(t)
            ? { redirectTo: t, navigationBehaviorOptions: void 0 }
            : t,
        i = Ea(!1, he.Redirect);
    return (i.url = e), (i.navigationBehaviorOptions = r), i;
}
function Ea(n, t) {
    let e = new Error(`NavigationCancelingError: ${n || ""}`);
    return (e[Sa] = !0), (e.cancellationCode = t), e;
}
function Yc(n) {
    return Ma(n) && yt(n.url);
}
function Ma(n) {
    return !!n && n[Sa];
}
var Kc = (n, t, e, r) =>
        O(
            (i) => (
                new oo(
                    t,
                    i.targetRouterState,
                    i.currentRouterState,
                    e,
                    r
                ).activate(n),
                i
            )
        ),
    oo = class {
        routeReuseStrategy;
        futureState;
        currState;
        forwardEvent;
        inputBindingEnabled;
        constructor(t, e, r, i, o) {
            (this.routeReuseStrategy = t),
                (this.futureState = e),
                (this.currState = r),
                (this.forwardEvent = i),
                (this.inputBindingEnabled = o);
        }
        activate(t) {
            let e = this.futureState._root,
                r = this.currState ? this.currState._root : null;
            this.deactivateChildRoutes(e, r, t),
                Vi(this.futureState.root),
                this.activateChildRoutes(e, r, t);
        }
        deactivateChildRoutes(t, e, r) {
            let i = Dt(e);
            t.children.forEach((o) => {
                let s = o.value.outlet;
                this.deactivateRoutes(o, i[s], r), delete i[s];
            }),
                Object.values(i).forEach((o) => {
                    this.deactivateRouteAndItsChildren(o, r);
                });
        }
        deactivateRoutes(t, e, r) {
            let i = t.value,
                o = e ? e.value : null;
            if (i === o)
                if (i.component) {
                    let s = r.getContext(i.outlet);
                    s && this.deactivateChildRoutes(t, e, s.children);
                } else this.deactivateChildRoutes(t, e, r);
            else o && this.deactivateRouteAndItsChildren(e, r);
        }
        deactivateRouteAndItsChildren(t, e) {
            t.value.component &&
            this.routeReuseStrategy.shouldDetach(t.value.snapshot)
                ? this.detachAndStoreRouteSubtree(t, e)
                : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
            let r = e.getContext(t.value.outlet),
                i = r && t.value.component ? r.children : e,
                o = Dt(t);
            for (let s of Object.values(o))
                this.deactivateRouteAndItsChildren(s, i);
            if (r && r.outlet) {
                let s = r.outlet.detach(),
                    l = r.children.onOutletDeactivated();
                this.routeReuseStrategy.store(t.value.snapshot, {
                    componentRef: s,
                    route: t,
                    contexts: l,
                });
            }
        }
        deactivateRouteAndOutlet(t, e) {
            let r = e.getContext(t.value.outlet),
                i = r && t.value.component ? r.children : e,
                o = Dt(t);
            for (let s of Object.values(o))
                this.deactivateRouteAndItsChildren(s, i);
            r &&
                (r.outlet &&
                    (r.outlet.deactivate(), r.children.onOutletDeactivated()),
                (r.attachRef = null),
                (r.route = null));
        }
        activateChildRoutes(t, e, r) {
            let i = Dt(e);
            t.children.forEach((o) => {
                this.activateRoutes(o, i[o.value.outlet], r),
                    this.forwardEvent(new Qi(o.value.snapshot));
            }),
                t.children.length &&
                    this.forwardEvent(new Yi(t.value.snapshot));
        }
        activateRoutes(t, e, r) {
            let i = t.value,
                o = e ? e.value : null;
            if ((Vi(i), i === o))
                if (i.component) {
                    let s = r.getOrCreateContext(i.outlet);
                    this.activateChildRoutes(t, e, s.children);
                } else this.activateChildRoutes(t, e, r);
            else if (i.component) {
                let s = r.getOrCreateContext(i.outlet);
                if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
                    let l = this.routeReuseStrategy.retrieve(i.snapshot);
                    this.routeReuseStrategy.store(i.snapshot, null),
                        s.children.onOutletReAttached(l.contexts),
                        (s.attachRef = l.componentRef),
                        (s.route = l.route.value),
                        s.outlet &&
                            s.outlet.attach(l.componentRef, l.route.value),
                        Vi(l.route.value),
                        this.activateChildRoutes(t, null, s.children);
                } else
                    (s.attachRef = null),
                        (s.route = i),
                        s.outlet && s.outlet.activateWith(i, s.injector),
                        this.activateChildRoutes(t, null, s.children);
            } else this.activateChildRoutes(t, null, r);
        }
    },
    Mr = class {
        path;
        route;
        constructor(t) {
            (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
    },
    Ot = class {
        component;
        route;
        constructor(t, e) {
            (this.component = t), (this.route = e);
        }
    };
function Qc(n, t, e) {
    let r = n._root,
        i = t ? t._root : null;
    return pn(r, i, e, [r.value]);
}
function eu(n) {
    let t = n.routeConfig ? n.routeConfig.canActivateChild : null;
    return !t || t.length === 0 ? null : { node: n, guards: t };
}
function Lt(n, t) {
    let e = Symbol(),
        r = t.get(n, e);
    return r === e ? (typeof n == "function" && !jo(n) ? n : t.get(n)) : r;
}
function pn(
    n,
    t,
    e,
    r,
    i = { canDeactivateChecks: [], canActivateChecks: [] }
) {
    let o = Dt(t);
    return (
        n.children.forEach((s) => {
            tu(s, o[s.value.outlet], e, r.concat([s.value]), i),
                delete o[s.value.outlet];
        }),
        Object.entries(o).forEach(([s, l]) => vn(l, e.getContext(s), i)),
        i
    );
}
function tu(
    n,
    t,
    e,
    r,
    i = { canDeactivateChecks: [], canActivateChecks: [] }
) {
    let o = n.value,
        s = t ? t.value : null,
        l = e ? e.getContext(n.value.outlet) : null;
    if (s && o.routeConfig === s.routeConfig) {
        let a = nu(s, o, o.routeConfig.runGuardsAndResolvers);
        a
            ? i.canActivateChecks.push(new Mr(r))
            : ((o.data = s.data), (o._resolvedData = s._resolvedData)),
            o.component
                ? pn(n, t, l ? l.children : null, r, i)
                : pn(n, t, e, r, i),
            a &&
                l &&
                l.outlet &&
                l.outlet.isActivated &&
                i.canDeactivateChecks.push(new Ot(l.outlet.component, s));
    } else
        s && vn(t, l, i),
            i.canActivateChecks.push(new Mr(r)),
            o.component
                ? pn(n, null, l ? l.children : null, r, i)
                : pn(n, null, e, r, i);
    return i;
}
function nu(n, t, e) {
    if (typeof e == "function") return e(n, t);
    switch (e) {
        case "pathParamsChange":
            return !vt(n.url, t.url);
        case "pathParamsOrQueryParamsChange":
            return !vt(n.url, t.url) || !Ne(n.queryParams, t.queryParams);
        case "always":
            return !0;
        case "paramsOrQueryParamsChange":
            return !ro(n, t) || !Ne(n.queryParams, t.queryParams);
        case "paramsChange":
        default:
            return !ro(n, t);
    }
}
function vn(n, t, e) {
    let r = Dt(n),
        i = n.value;
    Object.entries(r).forEach(([o, s]) => {
        i.component
            ? t
                ? vn(s, t.children.getContext(o), e)
                : vn(s, null, e)
            : vn(s, t, e);
    }),
        i.component
            ? t && t.outlet && t.outlet.isActivated
                ? e.canDeactivateChecks.push(new Ot(t.outlet.component, i))
                : e.canDeactivateChecks.push(new Ot(null, i))
            : e.canDeactivateChecks.push(new Ot(null, i));
}
function Rn(n) {
    return typeof n == "function";
}
function ru(n) {
    return typeof n == "boolean";
}
function iu(n) {
    return n && Rn(n.canLoad);
}
function ou(n) {
    return n && Rn(n.canActivate);
}
function su(n) {
    return n && Rn(n.canActivateChild);
}
function au(n) {
    return n && Rn(n.canDeactivate);
}
function lu(n) {
    return n && Rn(n.canMatch);
}
function xa(n) {
    return n instanceof To || n?.name === "EmptyError";
}
var dr = Symbol("INITIAL_VALUE");
function Vt() {
    return ue((n) =>
        zn(n.map((t) => t.pipe(wt(1), Vo(dr)))).pipe(
            O((t) => {
                for (let e of t)
                    if (e !== !0) {
                        if (e === dr) return dr;
                        if (e === !1 || cu(e)) return e;
                    }
                return !0;
            }),
            Le((t) => t !== dr),
            wt(1)
        )
    );
}
function cu(n) {
    return yt(n) || n instanceof wn;
}
function uu(n, t) {
    return ce((e) => {
        let {
            targetSnapshot: r,
            currentSnapshot: i,
            guards: { canActivateChecks: o, canDeactivateChecks: s },
        } = e;
        return s.length === 0 && o.length === 0
            ? C(j(v({}, e), { guardsResult: !0 }))
            : du(s, r, i, n).pipe(
                  ce((l) => (l && ru(l) ? hu(r, o, n, t) : C(l))),
                  O((l) => j(v({}, e), { guardsResult: l }))
              );
    });
}
function du(n, t, e, r) {
    return X(n).pipe(
        ce((i) => vu(i.component, i.route, e, t, r)),
        Ye((i) => i !== !0, !0)
    );
}
function hu(n, t, e, r) {
    return X(t).pipe(
        Je((i) =>
            Oo(
                fu(i.route.parent, r),
                pu(i.route, r),
                gu(n, i.path, e),
                mu(n, i.route, e)
            )
        ),
        Ye((i) => i !== !0, !0)
    );
}
function pu(n, t) {
    return n !== null && t && t(new Ki(n)), C(!0);
}
function fu(n, t) {
    return n !== null && t && t(new Ji(n)), C(!0);
}
function mu(n, t, e) {
    let r = t.routeConfig ? t.routeConfig.canActivate : null;
    if (!r || r.length === 0) return C(!0);
    let i = r.map((o) =>
        ci(() => {
            let s = In(t) ?? e,
                l = Lt(o, s),
                a = ou(l) ? l.canActivate(t, n) : ge(s, () => l(t, n));
            return lt(a).pipe(Ye());
        })
    );
    return C(i).pipe(Vt());
}
function gu(n, t, e) {
    let r = t[t.length - 1],
        o = t
            .slice(0, t.length - 1)
            .reverse()
            .map((s) => eu(s))
            .filter((s) => s !== null)
            .map((s) =>
                ci(() => {
                    let l = s.guards.map((a) => {
                        let h = In(s.node) ?? e,
                            f = Lt(a, h),
                            y = su(f)
                                ? f.canActivateChild(r, n)
                                : ge(h, () => f(r, n));
                        return lt(y).pipe(Ye());
                    });
                    return C(l).pipe(Vt());
                })
            );
    return C(o).pipe(Vt());
}
function vu(n, t, e, r, i) {
    let o = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
    if (!o || o.length === 0) return C(!0);
    let s = o.map((l) => {
        let a = In(t) ?? i,
            h = Lt(l, a),
            f = au(h)
                ? h.canDeactivate(n, t, e, r)
                : ge(a, () => h(n, t, e, r));
        return lt(f).pipe(Ye());
    });
    return C(s).pipe(Vt());
}
function yu(n, t, e, r) {
    let i = t.canLoad;
    if (i === void 0 || i.length === 0) return C(!0);
    let o = i.map((s) => {
        let l = Lt(s, n),
            a = iu(l) ? l.canLoad(t, e) : ge(n, () => l(t, e));
        return lt(a);
    });
    return C(o).pipe(Vt(), Aa(r));
}
function Aa(n) {
    return Do(
        Z((t) => {
            if (typeof t != "boolean") throw Er(n, t);
        }),
        O((t) => t === !0)
    );
}
function bu(n, t, e, r) {
    let i = t.canMatch;
    if (!i || i.length === 0) return C(!0);
    let o = i.map((s) => {
        let l = Lt(s, n),
            a = lu(l) ? l.canMatch(t, e) : ge(n, () => l(t, e));
        return lt(a);
    });
    return C(o).pipe(Vt(), Aa(r));
}
var Sn = class {
        segmentGroup;
        constructor(t) {
            this.segmentGroup = t || null;
        }
    },
    En = class extends Error {
        urlTree;
        constructor(t) {
            super(), (this.urlTree = t);
        }
    };
function It(n) {
    return qt(new Sn(n));
}
function Cu(n) {
    return qt(new L(4e3, !1));
}
function _u(n) {
    return qt(Ea(!1, he.GuardRejected));
}
var so = class {
        urlSerializer;
        urlTree;
        constructor(t, e) {
            (this.urlSerializer = t), (this.urlTree = e);
        }
        lineralizeSegments(t, e) {
            let r = [],
                i = e.root;
            for (;;) {
                if (((r = r.concat(i.segments)), i.numberOfChildren === 0))
                    return C(r);
                if (i.numberOfChildren > 1 || !i.children[M])
                    return Cu(`${t.redirectTo}`);
                i = i.children[M];
            }
        }
        applyRedirectCommands(t, e, r, i, o) {
            if (typeof e != "string") {
                let l = e,
                    {
                        queryParams: a,
                        fragment: h,
                        routeConfig: f,
                        url: y,
                        outlet: S,
                        params: T,
                        data: N,
                        title: I,
                    } = i,
                    x = ge(o, () =>
                        l({
                            params: T,
                            data: N,
                            queryParams: a,
                            fragment: h,
                            routeConfig: f,
                            url: y,
                            outlet: S,
                            title: I,
                        })
                    );
                if (x instanceof Xe) throw new En(x);
                e = x;
            }
            let s = this.applyRedirectCreateUrlTree(
                e,
                this.urlSerializer.parse(e),
                t,
                r
            );
            if (e[0] === "/") throw new En(s);
            return s;
        }
        applyRedirectCreateUrlTree(t, e, r, i) {
            let o = this.createSegmentGroup(t, e.root, r, i);
            return new Xe(
                o,
                this.createQueryParams(e.queryParams, this.urlTree.queryParams),
                e.fragment
            );
        }
        createQueryParams(t, e) {
            let r = {};
            return (
                Object.entries(t).forEach(([i, o]) => {
                    if (typeof o == "string" && o[0] === ":") {
                        let l = o.substring(1);
                        r[i] = e[l];
                    } else r[i] = o;
                }),
                r
            );
        }
        createSegmentGroup(t, e, r, i) {
            let o = this.createSegments(t, e.segments, r, i),
                s = {};
            return (
                Object.entries(e.children).forEach(([l, a]) => {
                    s[l] = this.createSegmentGroup(t, a, r, i);
                }),
                new F(o, s)
            );
        }
        createSegments(t, e, r, i) {
            return e.map((o) =>
                o.path[0] === ":"
                    ? this.findPosParam(t, o, i)
                    : this.findOrReturn(o, r)
            );
        }
        findPosParam(t, e, r) {
            let i = r[e.path.substring(1)];
            if (!i) throw new L(4001, !1);
            return i;
        }
        findOrReturn(t, e) {
            let r = 0;
            for (let i of e) {
                if (i.path === t.path) return e.splice(r), i;
                r++;
            }
            return t;
        }
    },
    ao = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
    };
function wu(n, t, e, r, i) {
    let o = Ia(n, t, e);
    return o.matched
        ? ((r = Gc(t, r)),
          bu(r, t, e, i).pipe(O((s) => (s === !0 ? o : v({}, ao)))))
        : C(o);
}
function Ia(n, t, e) {
    if (t.path === "**") return Su(e);
    if (t.path === "")
        return t.pathMatch === "full" && (n.hasChildren() || e.length > 0)
            ? v({}, ao)
            : {
                  matched: !0,
                  consumedSegments: [],
                  remainingSegments: e,
                  parameters: {},
                  positionalParamSegments: {},
              };
    let i = (t.matcher || yc)(e, n, t);
    if (!i) return v({}, ao);
    let o = {};
    Object.entries(i.posParams ?? {}).forEach(([l, a]) => {
        o[l] = a.path;
    });
    let s =
        i.consumed.length > 0
            ? v(v({}, o), i.consumed[i.consumed.length - 1].parameters)
            : o;
    return {
        matched: !0,
        consumedSegments: i.consumed,
        remainingSegments: e.slice(i.consumed.length),
        parameters: s,
        positionalParamSegments: i.posParams ?? {},
    };
}
function Su(n) {
    return {
        matched: !0,
        parameters: n.length > 0 ? aa(n).parameters : {},
        consumedSegments: n,
        remainingSegments: [],
        positionalParamSegments: {},
    };
}
function ta(n, t, e, r) {
    return e.length > 0 && xu(n, e, r)
        ? {
              segmentGroup: new F(t, Mu(r, new F(e, n.children))),
              slicedSegments: [],
          }
        : e.length === 0 && Au(n, e, r)
        ? {
              segmentGroup: new F(n.segments, Eu(n, e, r, n.children)),
              slicedSegments: e,
          }
        : { segmentGroup: new F(n.segments, n.children), slicedSegments: e };
}
function Eu(n, t, e, r) {
    let i = {};
    for (let o of e)
        if (Ir(n, t, o) && !r[Ae(o)]) {
            let s = new F([], {});
            i[Ae(o)] = s;
        }
    return v(v({}, r), i);
}
function Mu(n, t) {
    let e = {};
    e[M] = t;
    for (let r of n)
        if (r.path === "" && Ae(r) !== M) {
            let i = new F([], {});
            e[Ae(r)] = i;
        }
    return e;
}
function xu(n, t, e) {
    return e.some((r) => Ir(n, t, r) && Ae(r) !== M);
}
function Au(n, t, e) {
    return e.some((r) => Ir(n, t, r));
}
function Ir(n, t, e) {
    return (n.hasChildren() || t.length > 0) && e.pathMatch === "full"
        ? !1
        : e.path === "";
}
function Iu(n, t, e) {
    return t.length === 0 && !n.children[e];
}
var lo = class {};
function Du(n, t, e, r, i, o, s = "emptyOnly") {
    return new co(n, t, e, r, i, s, o).recognize();
}
var Ru = 31,
    co = class {
        injector;
        configLoader;
        rootComponentType;
        config;
        urlTree;
        paramsInheritanceStrategy;
        urlSerializer;
        applyRedirects;
        absoluteRedirectCount = 0;
        allowRedirects = !0;
        constructor(t, e, r, i, o, s, l) {
            (this.injector = t),
                (this.configLoader = e),
                (this.rootComponentType = r),
                (this.config = i),
                (this.urlTree = o),
                (this.paramsInheritanceStrategy = s),
                (this.urlSerializer = l),
                (this.applyRedirects = new so(
                    this.urlSerializer,
                    this.urlTree
                ));
        }
        noMatchError(t) {
            return new L(4002, `'${t.segmentGroup}'`);
        }
        recognize() {
            let t = ta(this.urlTree.root, [], [], this.config).segmentGroup;
            return this.match(t).pipe(
                O(({ children: e, rootSnapshot: r }) => {
                    let i = new de(r, e),
                        o = new Sr("", i),
                        s = Vc(
                            r,
                            [],
                            this.urlTree.queryParams,
                            this.urlTree.fragment
                        );
                    return (
                        (s.queryParams = this.urlTree.queryParams),
                        (o.url = this.urlSerializer.serialize(s)),
                        { state: o, tree: s }
                    );
                })
            );
        }
        match(t) {
            let e = new Tt(
                [],
                Object.freeze({}),
                Object.freeze(v({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                Object.freeze({}),
                M,
                this.rootComponentType,
                null,
                {}
            );
            return this.processSegmentGroup(
                this.injector,
                this.config,
                t,
                M,
                e
            ).pipe(
                O((r) => ({ children: r, rootSnapshot: e })),
                _t((r) => {
                    if (r instanceof En)
                        return (
                            (this.urlTree = r.urlTree),
                            this.match(r.urlTree.root)
                        );
                    throw r instanceof Sn ? this.noMatchError(r) : r;
                })
            );
        }
        processSegmentGroup(t, e, r, i, o) {
            return r.segments.length === 0 && r.hasChildren()
                ? this.processChildren(t, e, r, o)
                : this.processSegment(t, e, r, r.segments, i, !0, o).pipe(
                      O((s) => (s instanceof de ? [s] : []))
                  );
        }
        processChildren(t, e, r, i) {
            let o = [];
            for (let s of Object.keys(r.children))
                s === "primary" ? o.unshift(s) : o.push(s);
            return X(o).pipe(
                Je((s) => {
                    let l = r.children[s],
                        a = Hc(e, s);
                    return this.processSegmentGroup(t, a, l, s, i);
                }),
                Fo((s, l) => (s.push(...l), s)),
                ui(null),
                ko(),
                ce((s) => {
                    if (s === null) return It(r);
                    let l = Da(s);
                    return Tu(l), C(l);
                })
            );
        }
        processSegment(t, e, r, i, o, s, l) {
            return X(e).pipe(
                Je((a) =>
                    this.processSegmentAgainstRoute(
                        a._injector ?? t,
                        e,
                        a,
                        r,
                        i,
                        o,
                        s,
                        l
                    ).pipe(
                        _t((h) => {
                            if (h instanceof Sn) return C(null);
                            throw h;
                        })
                    )
                ),
                Ye((a) => !!a),
                _t((a) => {
                    if (xa(a)) return Iu(r, i, o) ? C(new lo()) : It(r);
                    throw a;
                })
            );
        }
        processSegmentAgainstRoute(t, e, r, i, o, s, l, a) {
            return Ae(r) !== s && (s === M || !Ir(i, o, r))
                ? It(i)
                : r.redirectTo === void 0
                ? this.matchSegmentAgainstRoute(t, i, r, o, s, a)
                : this.allowRedirects && l
                ? this.expandSegmentAgainstRouteUsingRedirect(
                      t,
                      i,
                      e,
                      r,
                      o,
                      s,
                      a
                  )
                : It(i);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, r, i, o, s, l) {
            let {
                matched: a,
                parameters: h,
                consumedSegments: f,
                positionalParamSegments: y,
                remainingSegments: S,
            } = Ia(e, i, o);
            if (!a) return It(e);
            typeof i.redirectTo == "string" &&
                i.redirectTo[0] === "/" &&
                (this.absoluteRedirectCount++,
                this.absoluteRedirectCount > Ru && (this.allowRedirects = !1));
            let T = new Tt(
                    o,
                    h,
                    Object.freeze(v({}, this.urlTree.queryParams)),
                    this.urlTree.fragment,
                    na(i),
                    Ae(i),
                    i.component ?? i._loadedComponent ?? null,
                    i,
                    ra(i)
                ),
                N = wr(T, l, this.paramsInheritanceStrategy);
            (T.params = Object.freeze(N.params)),
                (T.data = Object.freeze(N.data));
            let I = this.applyRedirects.applyRedirectCommands(
                f,
                i.redirectTo,
                y,
                T,
                t
            );
            return this.applyRedirects
                .lineralizeSegments(i, I)
                .pipe(
                    ce((x) =>
                        this.processSegment(t, r, e, x.concat(S), s, !1, l)
                    )
                );
        }
        matchSegmentAgainstRoute(t, e, r, i, o, s) {
            let l = wu(e, r, i, t, this.urlSerializer);
            return (
                r.path === "**" && (e.children = {}),
                l.pipe(
                    ue((a) =>
                        a.matched
                            ? ((t = r._injector ?? t),
                              this.getChildConfig(t, r, i).pipe(
                                  ue(({ routes: h }) => {
                                      let f = r._loadedInjector ?? t,
                                          {
                                              parameters: y,
                                              consumedSegments: S,
                                              remainingSegments: T,
                                          } = a,
                                          N = new Tt(
                                              S,
                                              y,
                                              Object.freeze(
                                                  v(
                                                      {},
                                                      this.urlTree.queryParams
                                                  )
                                              ),
                                              this.urlTree.fragment,
                                              na(r),
                                              Ae(r),
                                              r.component ??
                                                  r._loadedComponent ??
                                                  null,
                                              r,
                                              ra(r)
                                          ),
                                          I = wr(
                                              N,
                                              s,
                                              this.paramsInheritanceStrategy
                                          );
                                      (N.params = Object.freeze(I.params)),
                                          (N.data = Object.freeze(I.data));
                                      let {
                                          segmentGroup: x,
                                          slicedSegments: Q,
                                      } = ta(e, S, T, h);
                                      if (Q.length === 0 && x.hasChildren())
                                          return this.processChildren(
                                              f,
                                              h,
                                              x,
                                              N
                                          ).pipe(O((U) => new de(N, U)));
                                      if (h.length === 0 && Q.length === 0)
                                          return C(new de(N, []));
                                      let De = Ae(r) === o;
                                      return this.processSegment(
                                          f,
                                          h,
                                          x,
                                          Q,
                                          De ? M : o,
                                          !0,
                                          N
                                      ).pipe(
                                          O(
                                              (U) =>
                                                  new de(
                                                      N,
                                                      U instanceof de ? [U] : []
                                                  )
                                          )
                                      );
                                  })
                              ))
                            : It(e)
                    )
                )
            );
        }
        getChildConfig(t, e, r) {
            return e.children
                ? C({ routes: e.children, injector: t })
                : e.loadChildren
                ? e._loadedRoutes !== void 0
                    ? C({
                          routes: e._loadedRoutes,
                          injector: e._loadedInjector,
                      })
                    : yu(t, e, r, this.urlSerializer).pipe(
                          ce((i) =>
                              i
                                  ? this.configLoader.loadChildren(t, e).pipe(
                                        Z((o) => {
                                            (e._loadedRoutes = o.routes),
                                                (e._loadedInjector =
                                                    o.injector);
                                        })
                                    )
                                  : _u(e)
                          )
                      )
                : C({ routes: [], injector: t });
        }
    };
function Tu(n) {
    n.sort((t, e) =>
        t.value.outlet === M
            ? -1
            : e.value.outlet === M
            ? 1
            : t.value.outlet.localeCompare(e.value.outlet)
    );
}
function Ou(n) {
    let t = n.value.routeConfig;
    return t && t.path === "";
}
function Da(n) {
    let t = [],
        e = new Set();
    for (let r of n) {
        if (!Ou(r)) {
            t.push(r);
            continue;
        }
        let i = t.find((o) => r.value.routeConfig === o.value.routeConfig);
        i !== void 0 ? (i.children.push(...r.children), e.add(i)) : t.push(r);
    }
    for (let r of e) {
        let i = Da(r.children);
        t.push(new de(r.value, i));
    }
    return t.filter((r) => !e.has(r));
}
function na(n) {
    return n.data || {};
}
function ra(n) {
    return n.resolve || {};
}
function Pu(n, t, e, r, i, o) {
    return ce((s) =>
        Du(n, t, e, r, s.extractedUrl, i, o).pipe(
            O(({ state: l, tree: a }) =>
                j(v({}, s), { targetSnapshot: l, urlAfterRedirects: a })
            )
        )
    );
}
function Nu(n, t) {
    return ce((e) => {
        let {
            targetSnapshot: r,
            guards: { canActivateChecks: i },
        } = e;
        if (!i.length) return C(e);
        let o = new Set(i.map((a) => a.route)),
            s = new Set();
        for (let a of o) if (!s.has(a)) for (let h of Ra(a)) s.add(h);
        let l = 0;
        return X(s).pipe(
            Je((a) =>
                o.has(a)
                    ? ku(a, r, n, t)
                    : ((a.data = wr(a, a.parent, n).resolve), C(void 0))
            ),
            Z(() => l++),
            di(1),
            ce((a) => (l === s.size ? C(e) : Ze))
        );
    });
}
function Ra(n) {
    let t = n.children.map((e) => Ra(e)).flat();
    return [n, ...t];
}
function ku(n, t, e, r) {
    let i = n.routeConfig,
        o = n._resolve;
    return (
        i?.title !== void 0 && !wa(i) && (o[xn] = i.title),
        Fu(o, n, t, r).pipe(
            O(
                (s) => (
                    (n._resolvedData = s),
                    (n.data = wr(n, n.parent, e).resolve),
                    null
                )
            )
        )
    );
}
function Fu(n, t, e, r) {
    let i = Ui(n);
    if (i.length === 0) return C({});
    let o = {};
    return X(i).pipe(
        ce((s) =>
            Vu(n[s], t, e, r).pipe(
                Ye(),
                Z((l) => {
                    if (l instanceof wn) throw Er(new Nt(), l);
                    o[s] = l;
                })
            )
        ),
        di(1),
        No(o),
        _t((s) => (xa(s) ? Ze : qt(s)))
    );
}
function Vu(n, t, e, r) {
    let i = In(t) ?? r,
        o = Lt(n, i),
        s = o.resolve ? o.resolve(t, e) : ge(i, () => o(t, e));
    return lt(s);
}
function Li(n) {
    return ue((t) => {
        let e = n(t);
        return e ? X(e).pipe(O(() => t)) : C(t);
    });
}
var Ta = (() => {
        class n {
            buildTitle(e) {
                let r,
                    i = e.root;
                for (; i !== void 0; )
                    (r = this.getResolvedTitleForRoute(i) ?? r),
                        (i = i.children.find((o) => o.outlet === M));
                return r;
            }
            getResolvedTitleForRoute(e) {
                return e.data[xn];
            }
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵprov = w({
                token: n,
                factory: () => b(Lu),
                providedIn: "root",
            });
        }
        return n;
    })(),
    Lu = (() => {
        class n extends Ta {
            title;
            constructor(e) {
                super(), (this.title = e);
            }
            updateTitle(e) {
                let r = this.buildTitle(e);
                r !== void 0 && this.title.setTitle(r);
            }
            static ɵfac = function (r) {
                return new (r || n)(_(Xs));
            };
            static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
        }
        return n;
    })(),
    Tn = new D("", { providedIn: "root", factory: () => ({}) }),
    ju = (() => {
        class n {
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵcmp = V({
                type: n,
                selectors: [["ng-component"]],
                decls: 1,
                vars: 0,
                template: function (r, i) {
                    r & 1 && A(0, "router-outlet");
                },
                dependencies: [bt],
                encapsulation: 2,
            });
        }
        return n;
    })();
function po(n) {
    let t = n.children && n.children.map(po),
        e = t ? j(v({}, n), { children: t }) : v({}, n);
    return (
        !e.component &&
            !e.loadComponent &&
            (t || e.loadChildren) &&
            e.outlet &&
            e.outlet !== M &&
            (e.component = ju),
        e
    );
}
var Mn = new D(""),
    fo = (() => {
        class n {
            componentLoaders = new WeakMap();
            childrenLoaders = new WeakMap();
            onLoadStartListener;
            onLoadEndListener;
            compiler = b(Yn);
            loadComponent(e) {
                if (this.componentLoaders.get(e))
                    return this.componentLoaders.get(e);
                if (e._loadedComponent) return C(e._loadedComponent);
                this.onLoadStartListener && this.onLoadStartListener(e);
                let r = lt(e.loadComponent()).pipe(
                        O(Oa),
                        Z((o) => {
                            this.onLoadEndListener && this.onLoadEndListener(e),
                                (e._loadedComponent = o);
                        }),
                        St(() => {
                            this.componentLoaders.delete(e);
                        })
                    ),
                    i = new li(r, () => new Re()).pipe(ai());
                return this.componentLoaders.set(e, i), i;
            }
            loadChildren(e, r) {
                if (this.childrenLoaders.get(r))
                    return this.childrenLoaders.get(r);
                if (r._loadedRoutes)
                    return C({
                        routes: r._loadedRoutes,
                        injector: r._loadedInjector,
                    });
                this.onLoadStartListener && this.onLoadStartListener(r);
                let o = Uu(r, this.compiler, e, this.onLoadEndListener).pipe(
                        St(() => {
                            this.childrenLoaders.delete(r);
                        })
                    ),
                    s = new li(o, () => new Re()).pipe(ai());
                return this.childrenLoaders.set(r, s), s;
            }
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
        }
        return n;
    })();
function Uu(n, t, e, r) {
    return lt(n.loadChildren()).pipe(
        O(Oa),
        ce((i) =>
            i instanceof Ko || Array.isArray(i)
                ? C(i)
                : X(t.compileModuleAsync(i))
        ),
        O((i) => {
            r && r(n);
            let o,
                s,
                l = !1;
            return (
                Array.isArray(i)
                    ? ((s = i), (l = !0))
                    : ((o = i.create(e).injector),
                      (s = o.get(Mn, [], { optional: !0, self: !0 }).flat())),
                { routes: s.map(po), injector: o }
            );
        })
    );
}
function $u(n) {
    return n && typeof n == "object" && "default" in n;
}
function Oa(n) {
    return $u(n) ? n.default : n;
}
var mo = (() => {
        class n {
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵprov = w({
                token: n,
                factory: () => b(Bu),
                providedIn: "root",
            });
        }
        return n;
    })(),
    Bu = (() => {
        class n {
            shouldProcessUrl(e) {
                return !0;
            }
            extract(e) {
                return e;
            }
            merge(e, r) {
                return e;
            }
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
        }
        return n;
    })(),
    Pa = new D(""),
    Na = new D("");
function zu(n, t, e) {
    let r = n.get(Na),
        i = n.get(ie);
    return n.get(ve).runOutsideAngular(() => {
        if (!i.startViewTransition || r.skipNextTransition)
            return (
                (r.skipNextTransition = !1), new Promise((h) => setTimeout(h))
            );
        let o,
            s = new Promise((h) => {
                o = h;
            }),
            l = i.startViewTransition(() => (o(), Gu(n))),
            { onViewTransitionCreated: a } = r;
        return a && ge(n, () => a({ transition: l, from: t, to: e })), s;
    });
}
function Gu(n) {
    return new Promise((t) => {
        Xo({ read: () => setTimeout(t) }, { injector: n });
    });
}
var ka = new D(""),
    go = (() => {
        class n {
            currentNavigation = null;
            currentTransition = null;
            lastSuccessfulNavigation = null;
            events = new Re();
            transitionAbortSubject = new Re();
            configLoader = b(fo);
            environmentInjector = b(dt);
            urlSerializer = b(An);
            rootContexts = b(Dn);
            location = b(rn);
            inputBindingEnabled = b(Ar, { optional: !0 }) !== null;
            titleStrategy = b(Ta);
            options = b(Tn, { optional: !0 }) || {};
            paramsInheritanceStrategy =
                this.options.paramsInheritanceStrategy || "emptyOnly";
            urlHandlingStrategy = b(mo);
            createViewTransition = b(Pa, { optional: !0 });
            navigationErrorHandler = b(ka, { optional: !0 });
            navigationId = 0;
            get hasRequestedNavigation() {
                return this.navigationId !== 0;
            }
            transitions;
            afterPreactivation = () => C(void 0);
            rootComponentType = null;
            constructor() {
                let e = (i) => this.events.next(new Xi(i)),
                    r = (i) => this.events.next(new Zi(i));
                (this.configLoader.onLoadEndListener = r),
                    (this.configLoader.onLoadStartListener = e);
            }
            complete() {
                this.transitions?.complete();
            }
            handleNavigationRequest(e) {
                let r = ++this.navigationId;
                this.transitions?.next(
                    j(v(v({}, this.transitions.value), e), { id: r })
                );
            }
            setupNavigations(e, r, i) {
                return (
                    (this.transitions = new me({
                        id: 0,
                        currentUrlTree: r,
                        currentRawUrl: r,
                        extractedUrl: this.urlHandlingStrategy.extract(r),
                        urlAfterRedirects: this.urlHandlingStrategy.extract(r),
                        rawUrl: r,
                        extras: {},
                        resolve: () => {},
                        reject: () => {},
                        promise: Promise.resolve(!0),
                        source: gn,
                        restoredState: null,
                        currentSnapshot: i.snapshot,
                        targetSnapshot: null,
                        currentRouterState: i,
                        targetRouterState: null,
                        guards: {
                            canActivateChecks: [],
                            canDeactivateChecks: [],
                        },
                        guardsResult: null,
                    })),
                    this.transitions.pipe(
                        Le((o) => o.id !== 0),
                        O((o) =>
                            j(v({}, o), {
                                extractedUrl: this.urlHandlingStrategy.extract(
                                    o.rawUrl
                                ),
                            })
                        ),
                        ue((o) => {
                            let s = !1,
                                l = !1;
                            return C(o).pipe(
                                ue((a) => {
                                    if (this.navigationId > o.id)
                                        return (
                                            this.cancelNavigationTransition(
                                                o,
                                                "",
                                                he.SupersededByNewNavigation
                                            ),
                                            Ze
                                        );
                                    (this.currentTransition = o),
                                        (this.currentNavigation = {
                                            id: a.id,
                                            initialUrl: a.rawUrl,
                                            extractedUrl: a.extractedUrl,
                                            targetBrowserUrl:
                                                typeof a.extras.browserUrl ==
                                                "string"
                                                    ? this.urlSerializer.parse(
                                                          a.extras.browserUrl
                                                      )
                                                    : a.extras.browserUrl,
                                            trigger: a.source,
                                            extras: a.extras,
                                            previousNavigation: this
                                                .lastSuccessfulNavigation
                                                ? j(
                                                      v(
                                                          {},
                                                          this
                                                              .lastSuccessfulNavigation
                                                      ),
                                                      {
                                                          previousNavigation:
                                                              null,
                                                      }
                                                  )
                                                : null,
                                        });
                                    let h =
                                            !e.navigated ||
                                            this.isUpdatingInternalState() ||
                                            this.isUpdatedBrowserUrl(),
                                        f =
                                            a.extras.onSameUrlNavigation ??
                                            e.onSameUrlNavigation;
                                    if (!h && f !== "reload") {
                                        let y = "";
                                        return (
                                            this.events.next(
                                                new at(
                                                    a.id,
                                                    this.urlSerializer.serialize(
                                                        a.rawUrl
                                                    ),
                                                    y,
                                                    vr.IgnoredSameUrlNavigation
                                                )
                                            ),
                                            a.resolve(!1),
                                            Ze
                                        );
                                    }
                                    if (
                                        this.urlHandlingStrategy.shouldProcessUrl(
                                            a.rawUrl
                                        )
                                    )
                                        return C(a).pipe(
                                            ue((y) => {
                                                let S =
                                                    this.transitions?.getValue();
                                                return (
                                                    this.events.next(
                                                        new kt(
                                                            y.id,
                                                            this.urlSerializer.serialize(
                                                                y.extractedUrl
                                                            ),
                                                            y.source,
                                                            y.restoredState
                                                        )
                                                    ),
                                                    S !==
                                                    this.transitions?.getValue()
                                                        ? Ze
                                                        : Promise.resolve(y)
                                                );
                                            }),
                                            Pu(
                                                this.environmentInjector,
                                                this.configLoader,
                                                this.rootComponentType,
                                                e.config,
                                                this.urlSerializer,
                                                this.paramsInheritanceStrategy
                                            ),
                                            Z((y) => {
                                                (o.targetSnapshot =
                                                    y.targetSnapshot),
                                                    (o.urlAfterRedirects =
                                                        y.urlAfterRedirects),
                                                    (this.currentNavigation = j(
                                                        v(
                                                            {},
                                                            this
                                                                .currentNavigation
                                                        ),
                                                        {
                                                            finalUrl:
                                                                y.urlAfterRedirects,
                                                        }
                                                    ));
                                                let S = new yr(
                                                    y.id,
                                                    this.urlSerializer.serialize(
                                                        y.extractedUrl
                                                    ),
                                                    this.urlSerializer.serialize(
                                                        y.urlAfterRedirects
                                                    ),
                                                    y.targetSnapshot
                                                );
                                                this.events.next(S);
                                            })
                                        );
                                    if (
                                        h &&
                                        this.urlHandlingStrategy.shouldProcessUrl(
                                            a.currentRawUrl
                                        )
                                    ) {
                                        let {
                                                id: y,
                                                extractedUrl: S,
                                                source: T,
                                                restoredState: N,
                                                extras: I,
                                            } = a,
                                            x = new kt(
                                                y,
                                                this.urlSerializer.serialize(S),
                                                T,
                                                N
                                            );
                                        this.events.next(x);
                                        let Q = Ca(
                                            this.rootComponentType
                                        ).snapshot;
                                        return (
                                            (this.currentTransition = o =
                                                j(v({}, a), {
                                                    targetSnapshot: Q,
                                                    urlAfterRedirects: S,
                                                    extras: j(v({}, I), {
                                                        skipLocationChange: !1,
                                                        replaceUrl: !1,
                                                    }),
                                                })),
                                            (this.currentNavigation.finalUrl =
                                                S),
                                            C(o)
                                        );
                                    } else {
                                        let y = "";
                                        return (
                                            this.events.next(
                                                new at(
                                                    a.id,
                                                    this.urlSerializer.serialize(
                                                        a.extractedUrl
                                                    ),
                                                    y,
                                                    vr.IgnoredByUrlHandlingStrategy
                                                )
                                            ),
                                            a.resolve(!1),
                                            Ze
                                        );
                                    }
                                }),
                                Z((a) => {
                                    let h = new Gi(
                                        a.id,
                                        this.urlSerializer.serialize(
                                            a.extractedUrl
                                        ),
                                        this.urlSerializer.serialize(
                                            a.urlAfterRedirects
                                        ),
                                        a.targetSnapshot
                                    );
                                    this.events.next(h);
                                }),
                                O(
                                    (a) => (
                                        (this.currentTransition = o =
                                            j(v({}, a), {
                                                guards: Qc(
                                                    a.targetSnapshot,
                                                    a.currentSnapshot,
                                                    this.rootContexts
                                                ),
                                            })),
                                        o
                                    )
                                ),
                                uu(this.environmentInjector, (a) =>
                                    this.events.next(a)
                                ),
                                Z((a) => {
                                    if (
                                        ((o.guardsResult = a.guardsResult),
                                        a.guardsResult &&
                                            typeof a.guardsResult != "boolean")
                                    )
                                        throw Er(
                                            this.urlSerializer,
                                            a.guardsResult
                                        );
                                    let h = new Hi(
                                        a.id,
                                        this.urlSerializer.serialize(
                                            a.extractedUrl
                                        ),
                                        this.urlSerializer.serialize(
                                            a.urlAfterRedirects
                                        ),
                                        a.targetSnapshot,
                                        !!a.guardsResult
                                    );
                                    this.events.next(h);
                                }),
                                Le((a) =>
                                    a.guardsResult
                                        ? !0
                                        : (this.cancelNavigationTransition(
                                              a,
                                              "",
                                              he.GuardRejected
                                          ),
                                          !1)
                                ),
                                Li((a) => {
                                    if (a.guards.canActivateChecks.length)
                                        return C(a).pipe(
                                            Z((h) => {
                                                let f = new Wi(
                                                    h.id,
                                                    this.urlSerializer.serialize(
                                                        h.extractedUrl
                                                    ),
                                                    this.urlSerializer.serialize(
                                                        h.urlAfterRedirects
                                                    ),
                                                    h.targetSnapshot
                                                );
                                                this.events.next(f);
                                            }),
                                            ue((h) => {
                                                let f = !1;
                                                return C(h).pipe(
                                                    Nu(
                                                        this
                                                            .paramsInheritanceStrategy,
                                                        this.environmentInjector
                                                    ),
                                                    Z({
                                                        next: () => (f = !0),
                                                        complete: () => {
                                                            f ||
                                                                this.cancelNavigationTransition(
                                                                    h,
                                                                    "",
                                                                    he.NoDataFromResolver
                                                                );
                                                        },
                                                    })
                                                );
                                            }),
                                            Z((h) => {
                                                let f = new qi(
                                                    h.id,
                                                    this.urlSerializer.serialize(
                                                        h.extractedUrl
                                                    ),
                                                    this.urlSerializer.serialize(
                                                        h.urlAfterRedirects
                                                    ),
                                                    h.targetSnapshot
                                                );
                                                this.events.next(f);
                                            })
                                        );
                                }),
                                Li((a) => {
                                    let h = (f) => {
                                        let y = [];
                                        f.routeConfig?.loadComponent &&
                                            !f.routeConfig._loadedComponent &&
                                            y.push(
                                                this.configLoader
                                                    .loadComponent(
                                                        f.routeConfig
                                                    )
                                                    .pipe(
                                                        Z((S) => {
                                                            f.component = S;
                                                        }),
                                                        O(() => {})
                                                    )
                                            );
                                        for (let S of f.children)
                                            y.push(...h(S));
                                        return y;
                                    };
                                    return zn(h(a.targetSnapshot.root)).pipe(
                                        ui(null),
                                        wt(1)
                                    );
                                }),
                                Li(() => this.afterPreactivation()),
                                ue(() => {
                                    let {
                                            currentSnapshot: a,
                                            targetSnapshot: h,
                                        } = o,
                                        f = this.createViewTransition?.(
                                            this.environmentInjector,
                                            a.root,
                                            h.root
                                        );
                                    return f ? X(f).pipe(O(() => o)) : C(o);
                                }),
                                O((a) => {
                                    let h = Xc(
                                        e.routeReuseStrategy,
                                        a.targetSnapshot,
                                        a.currentRouterState
                                    );
                                    return (
                                        (this.currentTransition = o =
                                            j(v({}, a), {
                                                targetRouterState: h,
                                            })),
                                        (this.currentNavigation.targetRouterState =
                                            h),
                                        o
                                    );
                                }),
                                Z(() => {
                                    this.events.next(new Cn());
                                }),
                                Kc(
                                    this.rootContexts,
                                    e.routeReuseStrategy,
                                    (a) => this.events.next(a),
                                    this.inputBindingEnabled
                                ),
                                wt(1),
                                Z({
                                    next: (a) => {
                                        (s = !0),
                                            (this.lastSuccessfulNavigation =
                                                this.currentNavigation),
                                            this.events.next(
                                                new Ie(
                                                    a.id,
                                                    this.urlSerializer.serialize(
                                                        a.extractedUrl
                                                    ),
                                                    this.urlSerializer.serialize(
                                                        a.urlAfterRedirects
                                                    )
                                                )
                                            ),
                                            this.titleStrategy?.updateTitle(
                                                a.targetRouterState.snapshot
                                            ),
                                            a.resolve(!0);
                                    },
                                    complete: () => {
                                        s = !0;
                                    },
                                }),
                                Lo(
                                    this.transitionAbortSubject.pipe(
                                        Z((a) => {
                                            throw a;
                                        })
                                    )
                                ),
                                St(() => {
                                    !s &&
                                        !l &&
                                        this.cancelNavigationTransition(
                                            o,
                                            "",
                                            he.SupersededByNewNavigation
                                        ),
                                        this.currentTransition?.id === o.id &&
                                            ((this.currentNavigation = null),
                                            (this.currentTransition = null));
                                }),
                                _t((a) => {
                                    if (((l = !0), Ma(a)))
                                        this.events.next(
                                            new qe(
                                                o.id,
                                                this.urlSerializer.serialize(
                                                    o.extractedUrl
                                                ),
                                                a.message,
                                                a.cancellationCode
                                            )
                                        ),
                                            Yc(a)
                                                ? this.events.next(
                                                      new Ft(
                                                          a.url,
                                                          a.navigationBehaviorOptions
                                                      )
                                                  )
                                                : o.resolve(!1);
                                    else {
                                        let h = new bn(
                                            o.id,
                                            this.urlSerializer.serialize(
                                                o.extractedUrl
                                            ),
                                            a,
                                            o.targetSnapshot ?? void 0
                                        );
                                        try {
                                            let f = ge(
                                                this.environmentInjector,
                                                () =>
                                                    this.navigationErrorHandler?.(
                                                        h
                                                    )
                                            );
                                            if (f instanceof wn) {
                                                let {
                                                    message: y,
                                                    cancellationCode: S,
                                                } = Er(this.urlSerializer, f);
                                                this.events.next(
                                                    new qe(
                                                        o.id,
                                                        this.urlSerializer.serialize(
                                                            o.extractedUrl
                                                        ),
                                                        y,
                                                        S
                                                    )
                                                ),
                                                    this.events.next(
                                                        new Ft(
                                                            f.redirectTo,
                                                            f.navigationBehaviorOptions
                                                        )
                                                    );
                                            } else
                                                throw (this.events.next(h), a);
                                        } catch (f) {
                                            this.options
                                                .resolveNavigationPromiseOnError
                                                ? o.resolve(!1)
                                                : o.reject(f);
                                        }
                                    }
                                    return Ze;
                                })
                            );
                        })
                    )
                );
            }
            cancelNavigationTransition(e, r, i) {
                let o = new qe(
                    e.id,
                    this.urlSerializer.serialize(e.extractedUrl),
                    r,
                    i
                );
                this.events.next(o), e.resolve(!1);
            }
            isUpdatingInternalState() {
                return (
                    this.currentTransition?.extractedUrl.toString() !==
                    this.currentTransition?.currentUrlTree.toString()
                );
            }
            isUpdatedBrowserUrl() {
                let e = this.urlHandlingStrategy.extract(
                        this.urlSerializer.parse(this.location.path(!0))
                    ),
                    r =
                        this.currentNavigation?.targetBrowserUrl ??
                        this.currentNavigation?.extractedUrl;
                return (
                    e.toString() !== r?.toString() &&
                    !this.currentNavigation?.extras.skipLocationChange
                );
            }
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
        }
        return n;
    })();
function Hu(n) {
    return n !== gn;
}
var Wu = (() => {
        class n {
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵprov = w({
                token: n,
                factory: () => b(qu),
                providedIn: "root",
            });
        }
        return n;
    })(),
    uo = class {
        shouldDetach(t) {
            return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
            return !1;
        }
        retrieve(t) {
            return null;
        }
        shouldReuseRoute(t, e) {
            return t.routeConfig === e.routeConfig;
        }
    },
    qu = (() => {
        class n extends uo {
            static ɵfac = (() => {
                let e;
                return function (i) {
                    return (e || (e = Te(n)))(i || n);
                };
            })();
            static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
        }
        return n;
    })(),
    Fa = (() => {
        class n {
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵprov = w({
                token: n,
                factory: () => b(Xu),
                providedIn: "root",
            });
        }
        return n;
    })(),
    Xu = (() => {
        class n extends Fa {
            location = b(rn);
            urlSerializer = b(An);
            options = b(Tn, { optional: !0 }) || {};
            canceledNavigationResolution =
                this.options.canceledNavigationResolution || "replace";
            urlHandlingStrategy = b(mo);
            urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
            currentUrlTree = new Xe();
            getCurrentUrlTree() {
                return this.currentUrlTree;
            }
            rawUrlTree = this.currentUrlTree;
            getRawUrlTree() {
                return this.rawUrlTree;
            }
            currentPageId = 0;
            lastSuccessfulId = -1;
            restoredState() {
                return this.location.getState();
            }
            get browserPageId() {
                return this.canceledNavigationResolution !== "computed"
                    ? this.currentPageId
                    : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
            }
            routerState = Ca(null);
            getRouterState() {
                return this.routerState;
            }
            stateMemento = this.createStateMemento();
            createStateMemento() {
                return {
                    rawUrlTree: this.rawUrlTree,
                    currentUrlTree: this.currentUrlTree,
                    routerState: this.routerState,
                };
            }
            registerNonRouterCurrentEntryChangeListener(e) {
                return this.location.subscribe((r) => {
                    r.type === "popstate" && e(r.url, r.state);
                });
            }
            handleRouterEvent(e, r) {
                if (e instanceof kt)
                    this.stateMemento = this.createStateMemento();
                else if (e instanceof at) this.rawUrlTree = r.initialUrl;
                else if (e instanceof yr) {
                    if (
                        this.urlUpdateStrategy === "eager" &&
                        !r.extras.skipLocationChange
                    ) {
                        let i = this.urlHandlingStrategy.merge(
                            r.finalUrl,
                            r.initialUrl
                        );
                        this.setBrowserUrl(r.targetBrowserUrl ?? i, r);
                    }
                } else
                    e instanceof Cn
                        ? ((this.currentUrlTree = r.finalUrl),
                          (this.rawUrlTree = this.urlHandlingStrategy.merge(
                              r.finalUrl,
                              r.initialUrl
                          )),
                          (this.routerState = r.targetRouterState),
                          this.urlUpdateStrategy === "deferred" &&
                              !r.extras.skipLocationChange &&
                              this.setBrowserUrl(
                                  r.targetBrowserUrl ?? this.rawUrlTree,
                                  r
                              ))
                        : e instanceof qe &&
                          (e.code === he.GuardRejected ||
                              e.code === he.NoDataFromResolver)
                        ? this.restoreHistory(r)
                        : e instanceof bn
                        ? this.restoreHistory(r, !0)
                        : e instanceof Ie &&
                          ((this.lastSuccessfulId = e.id),
                          (this.currentPageId = this.browserPageId));
            }
            setBrowserUrl(e, r) {
                let i = e instanceof Xe ? this.urlSerializer.serialize(e) : e;
                if (
                    this.location.isCurrentPathEqualTo(i) ||
                    r.extras.replaceUrl
                ) {
                    let o = this.browserPageId,
                        s = v(
                            v({}, r.extras.state),
                            this.generateNgRouterState(r.id, o)
                        );
                    this.location.replaceState(i, "", s);
                } else {
                    let o = v(
                        v({}, r.extras.state),
                        this.generateNgRouterState(r.id, this.browserPageId + 1)
                    );
                    this.location.go(i, "", o);
                }
            }
            restoreHistory(e, r = !1) {
                if (this.canceledNavigationResolution === "computed") {
                    let i = this.browserPageId,
                        o = this.currentPageId - i;
                    o !== 0
                        ? this.location.historyGo(o)
                        : this.currentUrlTree === e.finalUrl &&
                          o === 0 &&
                          (this.resetState(e), this.resetUrlToCurrentUrlTree());
                } else
                    this.canceledNavigationResolution === "replace" &&
                        (r && this.resetState(e),
                        this.resetUrlToCurrentUrlTree());
            }
            resetState(e) {
                (this.routerState = this.stateMemento.routerState),
                    (this.currentUrlTree = this.stateMemento.currentUrlTree),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                        this.currentUrlTree,
                        e.finalUrl ?? this.rawUrlTree
                    ));
            }
            resetUrlToCurrentUrlTree() {
                this.location.replaceState(
                    this.urlSerializer.serialize(this.rawUrlTree),
                    "",
                    this.generateNgRouterState(
                        this.lastSuccessfulId,
                        this.currentPageId
                    )
                );
            }
            generateNgRouterState(e, r) {
                return this.canceledNavigationResolution === "computed"
                    ? { navigationId: e, ɵrouterPageId: r }
                    : { navigationId: e };
            }
            static ɵfac = (() => {
                let e;
                return function (i) {
                    return (e || (e = Te(n)))(i || n);
                };
            })();
            static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
        }
        return n;
    })(),
    fn = (function (n) {
        return (
            (n[(n.COMPLETE = 0)] = "COMPLETE"),
            (n[(n.FAILED = 1)] = "FAILED"),
            (n[(n.REDIRECTING = 2)] = "REDIRECTING"),
            n
        );
    })(fn || {});
function Va(n, t) {
    n.events
        .pipe(
            Le(
                (e) =>
                    e instanceof Ie ||
                    e instanceof qe ||
                    e instanceof bn ||
                    e instanceof at
            ),
            O((e) =>
                e instanceof Ie || e instanceof at
                    ? fn.COMPLETE
                    : (
                          e instanceof qe
                              ? e.code === he.Redirect ||
                                e.code === he.SupersededByNewNavigation
                              : !1
                      )
                    ? fn.REDIRECTING
                    : fn.FAILED
            ),
            Le((e) => e !== fn.REDIRECTING),
            wt(1)
        )
        .subscribe(() => {
            t();
        });
}
var Zu = {
        paths: "exact",
        fragment: "ignored",
        matrixParams: "ignored",
        queryParams: "exact",
    },
    Ju = {
        paths: "subset",
        fragment: "ignored",
        matrixParams: "ignored",
        queryParams: "subset",
    },
    R = (() => {
        class n {
            get currentUrlTree() {
                return this.stateManager.getCurrentUrlTree();
            }
            get rawUrlTree() {
                return this.stateManager.getRawUrlTree();
            }
            disposed = !1;
            nonRouterCurrentEntryChangeSubscription;
            console = b(Zn);
            stateManager = b(Fa);
            options = b(Tn, { optional: !0 }) || {};
            pendingTasks = b(Hn);
            urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
            navigationTransitions = b(go);
            urlSerializer = b(An);
            location = b(rn);
            urlHandlingStrategy = b(mo);
            _events = new Re();
            get events() {
                return this._events;
            }
            get routerState() {
                return this.stateManager.getRouterState();
            }
            navigated = !1;
            routeReuseStrategy = b(Wu);
            onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
            config = b(Mn, { optional: !0 })?.flat() ?? [];
            componentInputBindingEnabled = !!b(Ar, { optional: !0 });
            constructor() {
                this.resetConfig(this.config),
                    this.navigationTransitions
                        .setupNavigations(
                            this,
                            this.currentUrlTree,
                            this.routerState
                        )
                        .subscribe({
                            error: (e) => {
                                this.console.warn(e);
                            },
                        }),
                    this.subscribeToNavigationEvents();
            }
            eventsSubscription = new Io();
            subscribeToNavigationEvents() {
                let e = this.navigationTransitions.events.subscribe((r) => {
                    try {
                        let i = this.navigationTransitions.currentTransition,
                            o = this.navigationTransitions.currentNavigation;
                        if (i !== null && o !== null) {
                            if (
                                (this.stateManager.handleRouterEvent(r, o),
                                r instanceof qe &&
                                    r.code !== he.Redirect &&
                                    r.code !== he.SupersededByNewNavigation)
                            )
                                this.navigated = !0;
                            else if (r instanceof Ie) this.navigated = !0;
                            else if (r instanceof Ft) {
                                let s = r.navigationBehaviorOptions,
                                    l = this.urlHandlingStrategy.merge(
                                        r.url,
                                        i.currentRawUrl
                                    ),
                                    a = v(
                                        {
                                            browserUrl: i.extras.browserUrl,
                                            info: i.extras.info,
                                            skipLocationChange:
                                                i.extras.skipLocationChange,
                                            replaceUrl:
                                                i.extras.replaceUrl ||
                                                this.urlUpdateStrategy ===
                                                    "eager" ||
                                                Hu(i.source),
                                        },
                                        s
                                    );
                                this.scheduleNavigation(l, gn, null, a, {
                                    resolve: i.resolve,
                                    reject: i.reject,
                                    promise: i.promise,
                                });
                            }
                        }
                        Ku(r) && this._events.next(r);
                    } catch (i) {
                        this.navigationTransitions.transitionAbortSubject.next(
                            i
                        );
                    }
                });
                this.eventsSubscription.add(e);
            }
            resetRootComponentType(e) {
                (this.routerState.root.component = e),
                    (this.navigationTransitions.rootComponentType = e);
            }
            initialNavigation() {
                this.setUpLocationChangeListener(),
                    this.navigationTransitions.hasRequestedNavigation ||
                        this.navigateToSyncWithBrowser(
                            this.location.path(!0),
                            gn,
                            this.stateManager.restoredState()
                        );
            }
            setUpLocationChangeListener() {
                this.nonRouterCurrentEntryChangeSubscription ??=
                    this.stateManager.registerNonRouterCurrentEntryChangeListener(
                        (e, r) => {
                            setTimeout(() => {
                                this.navigateToSyncWithBrowser(
                                    e,
                                    "popstate",
                                    r
                                );
                            }, 0);
                        }
                    );
            }
            navigateToSyncWithBrowser(e, r, i) {
                let o = { replaceUrl: !0 },
                    s = i?.navigationId ? i : null;
                if (i) {
                    let a = v({}, i);
                    delete a.navigationId,
                        delete a.ɵrouterPageId,
                        Object.keys(a).length !== 0 && (o.state = a);
                }
                let l = this.parseUrl(e);
                this.scheduleNavigation(l, r, s, o);
            }
            get url() {
                return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
                return this.navigationTransitions.currentNavigation;
            }
            get lastSuccessfulNavigation() {
                return this.navigationTransitions.lastSuccessfulNavigation;
            }
            resetConfig(e) {
                (this.config = e.map(po)), (this.navigated = !1);
            }
            ngOnDestroy() {
                this.dispose();
            }
            dispose() {
                this.navigationTransitions.complete(),
                    this.nonRouterCurrentEntryChangeSubscription &&
                        (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
                        (this.nonRouterCurrentEntryChangeSubscription =
                            void 0)),
                    (this.disposed = !0),
                    this.eventsSubscription.unsubscribe();
            }
            createUrlTree(e, r = {}) {
                let {
                        relativeTo: i,
                        queryParams: o,
                        fragment: s,
                        queryParamsHandling: l,
                        preserveFragment: a,
                    } = r,
                    h = a ? this.currentUrlTree.fragment : s,
                    f = null;
                switch (l ?? this.options.defaultQueryParamsHandling) {
                    case "merge":
                        f = v(v({}, this.currentUrlTree.queryParams), o);
                        break;
                    case "preserve":
                        f = this.currentUrlTree.queryParams;
                        break;
                    default:
                        f = o || null;
                }
                f !== null && (f = this.removeEmptyProps(f));
                let y;
                try {
                    let S = i ? i.snapshot : this.routerState.snapshot.root;
                    y = ga(S);
                } catch {
                    (typeof e[0] != "string" || e[0][0] !== "/") && (e = []),
                        (y = this.currentUrlTree.root);
                }
                return va(y, e, f, h ?? null);
            }
            navigateByUrl(e, r = { skipLocationChange: !1 }) {
                let i = yt(e) ? e : this.parseUrl(e),
                    o = this.urlHandlingStrategy.merge(i, this.rawUrlTree);
                return this.scheduleNavigation(o, gn, null, r);
            }
            navigate(e, r = { skipLocationChange: !1 }) {
                return Yu(e), this.navigateByUrl(this.createUrlTree(e, r), r);
            }
            serializeUrl(e) {
                return this.urlSerializer.serialize(e);
            }
            parseUrl(e) {
                try {
                    return this.urlSerializer.parse(e);
                } catch {
                    return this.urlSerializer.parse("/");
                }
            }
            isActive(e, r) {
                let i;
                if (
                    (r === !0
                        ? (i = v({}, Zu))
                        : r === !1
                        ? (i = v({}, Ju))
                        : (i = r),
                    yt(e))
                )
                    return Js(this.currentUrlTree, e, i);
                let o = this.parseUrl(e);
                return Js(this.currentUrlTree, o, i);
            }
            removeEmptyProps(e) {
                return Object.entries(e).reduce(
                    (r, [i, o]) => (o != null && (r[i] = o), r),
                    {}
                );
            }
            scheduleNavigation(e, r, i, o, s) {
                if (this.disposed) return Promise.resolve(!1);
                let l, a, h;
                s
                    ? ((l = s.resolve), (a = s.reject), (h = s.promise))
                    : (h = new Promise((y, S) => {
                          (l = y), (a = S);
                      }));
                let f = this.pendingTasks.add();
                return (
                    Va(this, () => {
                        queueMicrotask(() => this.pendingTasks.remove(f));
                    }),
                    this.navigationTransitions.handleNavigationRequest({
                        source: r,
                        restoredState: i,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.currentUrlTree,
                        rawUrl: e,
                        extras: o,
                        resolve: l,
                        reject: a,
                        promise: h,
                        currentSnapshot: this.routerState.snapshot,
                        currentRouterState: this.routerState,
                    }),
                    h.catch((y) => Promise.reject(y))
                );
            }
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
        }
        return n;
    })();
function Yu(n) {
    for (let t = 0; t < n.length; t++) if (n[t] == null) throw new L(4008, !1);
}
function Ku(n) {
    return !(n instanceof Cn) && !(n instanceof Ft);
}
var ke = (() => {
        class n {
            router;
            route;
            tabIndexAttribute;
            renderer;
            el;
            locationStrategy;
            href = null;
            target;
            queryParams;
            fragment;
            queryParamsHandling;
            state;
            info;
            relativeTo;
            isAnchorElement;
            subscription;
            onChanges = new Re();
            constructor(e, r, i, o, s, l) {
                (this.router = e),
                    (this.route = r),
                    (this.tabIndexAttribute = i),
                    (this.renderer = o),
                    (this.el = s),
                    (this.locationStrategy = l);
                let a = s.nativeElement.tagName?.toLowerCase();
                (this.isAnchorElement = a === "a" || a === "area"),
                    this.isAnchorElement
                        ? (this.subscription = e.events.subscribe((h) => {
                              h instanceof Ie && this.updateHref();
                          }))
                        : this.setTabIndexIfNotOnNativeEl("0");
            }
            preserveFragment = !1;
            skipLocationChange = !1;
            replaceUrl = !1;
            setTabIndexIfNotOnNativeEl(e) {
                this.tabIndexAttribute != null ||
                    this.isAnchorElement ||
                    this.applyAttributeValue("tabindex", e);
            }
            ngOnChanges(e) {
                this.isAnchorElement && this.updateHref(),
                    this.onChanges.next(this);
            }
            routerLinkInput = null;
            set routerLink(e) {
                e == null
                    ? ((this.routerLinkInput = null),
                      this.setTabIndexIfNotOnNativeEl(null))
                    : (yt(e)
                          ? (this.routerLinkInput = e)
                          : (this.routerLinkInput = Array.isArray(e) ? e : [e]),
                      this.setTabIndexIfNotOnNativeEl("0"));
            }
            onClick(e, r, i, o, s) {
                let l = this.urlTree;
                if (
                    l === null ||
                    (this.isAnchorElement &&
                        (e !== 0 ||
                            r ||
                            i ||
                            o ||
                            s ||
                            (typeof this.target == "string" &&
                                this.target != "_self")))
                )
                    return !0;
                let a = {
                    skipLocationChange: this.skipLocationChange,
                    replaceUrl: this.replaceUrl,
                    state: this.state,
                    info: this.info,
                };
                return this.router.navigateByUrl(l, a), !this.isAnchorElement;
            }
            ngOnDestroy() {
                this.subscription?.unsubscribe();
            }
            updateHref() {
                let e = this.urlTree;
                this.href =
                    e !== null && this.locationStrategy
                        ? this.locationStrategy?.prepareExternalUrl(
                              this.router.serializeUrl(e)
                          )
                        : null;
                let r =
                    this.href === null
                        ? null
                        : Zo(
                              this.href,
                              this.el.nativeElement.tagName.toLowerCase(),
                              "href"
                          );
                this.applyAttributeValue("href", r);
            }
            applyAttributeValue(e, r) {
                let i = this.renderer,
                    o = this.el.nativeElement;
                r !== null ? i.setAttribute(o, e, r) : i.removeAttribute(o, e);
            }
            get urlTree() {
                return this.routerLinkInput === null
                    ? null
                    : yt(this.routerLinkInput)
                    ? this.routerLinkInput
                    : this.router.createUrlTree(this.routerLinkInput, {
                          relativeTo:
                              this.relativeTo !== void 0
                                  ? this.relativeTo
                                  : this.route,
                          queryParams: this.queryParams,
                          fragment: this.fragment,
                          queryParamsHandling: this.queryParamsHandling,
                          preserveFragment: this.preserveFragment,
                      });
            }
            static ɵfac = function (r) {
                return new (r || n)(
                    m(R),
                    m(Ce),
                    Bo("tabindex"),
                    m(tt),
                    m(Qe),
                    m(nn)
                );
            };
            static ɵdir = W({
                type: n,
                selectors: [["", "routerLink", ""]],
                hostVars: 1,
                hostBindings: function (r, i) {
                    r & 1 &&
                        E("click", function (s) {
                            return i.onClick(
                                s.button,
                                s.ctrlKey,
                                s.shiftKey,
                                s.altKey,
                                s.metaKey
                            );
                        }),
                        r & 2 && en("target", i.target);
                },
                inputs: {
                    target: "target",
                    queryParams: "queryParams",
                    fragment: "fragment",
                    queryParamsHandling: "queryParamsHandling",
                    state: "state",
                    info: "info",
                    relativeTo: "relativeTo",
                    preserveFragment: [
                        2,
                        "preserveFragment",
                        "preserveFragment",
                        ft,
                    ],
                    skipLocationChange: [
                        2,
                        "skipLocationChange",
                        "skipLocationChange",
                        ft,
                    ],
                    replaceUrl: [2, "replaceUrl", "replaceUrl", ft],
                    routerLink: "routerLink",
                },
                features: [Qo, ht],
            });
        }
        return n;
    })(),
    Dr = (() => {
        class n {
            router;
            element;
            renderer;
            cdr;
            link;
            links;
            classes = [];
            routerEventsSubscription;
            linkInputChangesSubscription;
            _isActive = !1;
            get isActive() {
                return this._isActive;
            }
            routerLinkActiveOptions = { exact: !1 };
            ariaCurrentWhenActive;
            isActiveChange = new xe();
            constructor(e, r, i, o, s) {
                (this.router = e),
                    (this.element = r),
                    (this.renderer = i),
                    (this.cdr = o),
                    (this.link = s),
                    (this.routerEventsSubscription = e.events.subscribe((l) => {
                        l instanceof Ie && this.update();
                    }));
            }
            ngAfterContentInit() {
                C(this.links.changes, C(null))
                    .pipe(Xt())
                    .subscribe((e) => {
                        this.update(), this.subscribeToEachLinkOnChanges();
                    });
            }
            subscribeToEachLinkOnChanges() {
                this.linkInputChangesSubscription?.unsubscribe();
                let e = [...this.links.toArray(), this.link]
                    .filter((r) => !!r)
                    .map((r) => r.onChanges);
                this.linkInputChangesSubscription = X(e)
                    .pipe(Xt())
                    .subscribe((r) => {
                        this._isActive !== this.isLinkActive(this.router)(r) &&
                            this.update();
                    });
            }
            set routerLinkActive(e) {
                let r = Array.isArray(e) ? e : e.split(" ");
                this.classes = r.filter((i) => !!i);
            }
            ngOnChanges(e) {
                this.update();
            }
            ngOnDestroy() {
                this.routerEventsSubscription.unsubscribe(),
                    this.linkInputChangesSubscription?.unsubscribe();
            }
            update() {
                !this.links ||
                    !this.router.navigated ||
                    queueMicrotask(() => {
                        let e = this.hasActiveLinks();
                        this.classes.forEach((r) => {
                            e
                                ? this.renderer.addClass(
                                      this.element.nativeElement,
                                      r
                                  )
                                : this.renderer.removeClass(
                                      this.element.nativeElement,
                                      r
                                  );
                        }),
                            e && this.ariaCurrentWhenActive !== void 0
                                ? this.renderer.setAttribute(
                                      this.element.nativeElement,
                                      "aria-current",
                                      this.ariaCurrentWhenActive.toString()
                                  )
                                : this.renderer.removeAttribute(
                                      this.element.nativeElement,
                                      "aria-current"
                                  ),
                            this._isActive !== e &&
                                ((this._isActive = e),
                                this.cdr.markForCheck(),
                                this.isActiveChange.emit(e));
                    });
            }
            isLinkActive(e) {
                let r = Qu(this.routerLinkActiveOptions)
                    ? this.routerLinkActiveOptions
                    : this.routerLinkActiveOptions.exact || !1;
                return (i) => {
                    let o = i.urlTree;
                    return o ? e.isActive(o, r) : !1;
                };
            }
            hasActiveLinks() {
                let e = this.isLinkActive(this.router);
                return (this.link && e(this.link)) || this.links.some(e);
            }
            static ɵfac = function (r) {
                return new (r || n)(m(R), m(Qe), m(tt), m(Mt), m(ke, 8));
            };
            static ɵdir = W({
                type: n,
                selectors: [["", "routerLinkActive", ""]],
                contentQueries: function (r, i, o) {
                    if ((r & 1 && es(o, ke, 5), r & 2)) {
                        let s;
                        ts((s = ns())) && (i.links = s);
                    }
                },
                inputs: {
                    routerLinkActiveOptions: "routerLinkActiveOptions",
                    ariaCurrentWhenActive: "ariaCurrentWhenActive",
                    routerLinkActive: "routerLinkActive",
                },
                outputs: { isActiveChange: "isActiveChange" },
                exportAs: ["routerLinkActive"],
                features: [ht],
            });
        }
        return n;
    })();
function Qu(n) {
    return !!n.paths;
}
var xr = class {};
var ed = (() => {
        class n {
            router;
            injector;
            preloadingStrategy;
            loader;
            subscription;
            constructor(e, r, i, o, s) {
                (this.router = e),
                    (this.injector = i),
                    (this.preloadingStrategy = o),
                    (this.loader = s);
            }
            setUpPreloading() {
                this.subscription = this.router.events
                    .pipe(
                        Le((e) => e instanceof Ie),
                        Je(() => this.preload())
                    )
                    .subscribe(() => {});
            }
            preload() {
                return this.processRoutes(this.injector, this.router.config);
            }
            ngOnDestroy() {
                this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(e, r) {
                let i = [];
                for (let o of r) {
                    o.providers &&
                        !o._injector &&
                        (o._injector = yi(o.providers, e, `Route: ${o.path}`));
                    let s = o._injector ?? e,
                        l = o._loadedInjector ?? s;
                    ((o.loadChildren &&
                        !o._loadedRoutes &&
                        o.canLoad === void 0) ||
                        (o.loadComponent && !o._loadedComponent)) &&
                        i.push(this.preloadConfig(s, o)),
                        (o.children || o._loadedRoutes) &&
                            i.push(
                                this.processRoutes(
                                    l,
                                    o.children ?? o._loadedRoutes
                                )
                            );
                }
                return X(i).pipe(Xt());
            }
            preloadConfig(e, r) {
                return this.preloadingStrategy.preload(r, () => {
                    let i;
                    r.loadChildren && r.canLoad === void 0
                        ? (i = this.loader.loadChildren(e, r))
                        : (i = C(null));
                    let o = i.pipe(
                        ce((s) =>
                            s === null
                                ? C(void 0)
                                : ((r._loadedRoutes = s.routes),
                                  (r._loadedInjector = s.injector),
                                  this.processRoutes(s.injector ?? e, s.routes))
                        )
                    );
                    if (r.loadComponent && !r._loadedComponent) {
                        let s = this.loader.loadComponent(r);
                        return X([o, s]).pipe(Xt());
                    } else return o;
                });
            }
            static ɵfac = function (r) {
                return new (r || n)(_(R), _(Yn), _(dt), _(xr), _(fo));
            };
            static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
        }
        return n;
    })(),
    La = new D(""),
    td = (() => {
        class n {
            urlSerializer;
            transitions;
            viewportScroller;
            zone;
            options;
            routerEventsSubscription;
            scrollEventsSubscription;
            lastId = 0;
            lastSource = "imperative";
            restoredId = 0;
            store = {};
            constructor(e, r, i, o, s = {}) {
                (this.urlSerializer = e),
                    (this.transitions = r),
                    (this.viewportScroller = i),
                    (this.zone = o),
                    (this.options = s),
                    (s.scrollPositionRestoration ||= "disabled"),
                    (s.anchorScrolling ||= "disabled");
            }
            init() {
                this.options.scrollPositionRestoration !== "disabled" &&
                    this.viewportScroller.setHistoryScrollRestoration("manual"),
                    (this.routerEventsSubscription = this.createScrollEvents()),
                    (this.scrollEventsSubscription =
                        this.consumeScrollEvents());
            }
            createScrollEvents() {
                return this.transitions.events.subscribe((e) => {
                    e instanceof kt
                        ? ((this.store[this.lastId] =
                              this.viewportScroller.getScrollPosition()),
                          (this.lastSource = e.navigationTrigger),
                          (this.restoredId = e.restoredState
                              ? e.restoredState.navigationId
                              : 0))
                        : e instanceof Ie
                        ? ((this.lastId = e.id),
                          this.scheduleScrollEvent(
                              e,
                              this.urlSerializer.parse(e.urlAfterRedirects)
                                  .fragment
                          ))
                        : e instanceof at &&
                          e.code === vr.IgnoredSameUrlNavigation &&
                          ((this.lastSource = void 0),
                          (this.restoredId = 0),
                          this.scheduleScrollEvent(
                              e,
                              this.urlSerializer.parse(e.url).fragment
                          ));
                });
            }
            consumeScrollEvents() {
                return this.transitions.events.subscribe((e) => {
                    e instanceof br &&
                        (e.position
                            ? this.options.scrollPositionRestoration === "top"
                                ? this.viewportScroller.scrollToPosition([0, 0])
                                : this.options.scrollPositionRestoration ===
                                      "enabled" &&
                                  this.viewportScroller.scrollToPosition(
                                      e.position
                                  )
                            : e.anchor &&
                              this.options.anchorScrolling === "enabled"
                            ? this.viewportScroller.scrollToAnchor(e.anchor)
                            : this.options.scrollPositionRestoration !==
                                  "disabled" &&
                              this.viewportScroller.scrollToPosition([0, 0]));
                });
            }
            scheduleScrollEvent(e, r) {
                this.zone.runOutsideAngular(() => {
                    setTimeout(() => {
                        this.zone.run(() => {
                            this.transitions.events.next(
                                new br(
                                    e,
                                    this.lastSource === "popstate"
                                        ? this.store[this.restoredId]
                                        : null,
                                    r
                                )
                            );
                        });
                    }, 0);
                });
            }
            ngOnDestroy() {
                this.routerEventsSubscription?.unsubscribe(),
                    this.scrollEventsSubscription?.unsubscribe();
            }
            static ɵfac = function (r) {
                qn();
            };
            static ɵprov = w({ token: n, factory: n.ɵfac });
        }
        return n;
    })();
function ja(n, ...t) {
    return Ke([
        { provide: Mn, multi: !0, useValue: n },
        [],
        { provide: Ce, useFactory: Ua, deps: [R] },
        { provide: Kt, multi: !0, useFactory: $a },
        t.map((e) => e.ɵproviders),
    ]);
}
function Ua(n) {
    return n.routerState.root;
}
function On(n, t) {
    return { ɵkind: n, ɵproviders: t };
}
function $a() {
    let n = b(Gn);
    return (t) => {
        let e = n.get(Qt);
        if (t !== e.components[0]) return;
        let r = n.get(R),
            i = n.get(Ba);
        n.get(vo) === 1 && r.initialNavigation(),
            n.get(za, null, hi.Optional)?.setUpPreloading(),
            n.get(La, null, hi.Optional)?.init(),
            r.resetRootComponentType(e.componentTypes[0]),
            i.closed || (i.next(), i.complete(), i.unsubscribe());
    };
}
var Ba = new D("", { factory: () => new Re() }),
    vo = new D("", { providedIn: "root", factory: () => 1 });
function nd() {
    return On(2, [
        { provide: vo, useValue: 0 },
        {
            provide: bi,
            multi: !0,
            deps: [Gn],
            useFactory: (t) => {
                let e = t.get(us, Promise.resolve());
                return () =>
                    e.then(
                        () =>
                            new Promise((r) => {
                                let i = t.get(R),
                                    o = t.get(Ba);
                                Va(i, () => {
                                    r(!0);
                                }),
                                    (t.get(go).afterPreactivation = () => (
                                        r(!0), o.closed ? C(void 0) : o
                                    )),
                                    i.initialNavigation();
                            })
                    );
            },
        },
    ]);
}
function rd() {
    return On(3, [
        {
            provide: bi,
            multi: !0,
            useFactory: () => {
                let t = b(R);
                return () => {
                    t.setUpLocationChangeListener();
                };
            },
        },
        { provide: vo, useValue: 2 },
    ]);
}
var za = new D("");
function id(n) {
    return On(0, [
        { provide: za, useExisting: ed },
        { provide: xr, useExisting: n },
    ]);
}
function od() {
    return On(8, [ea, { provide: Ar, useExisting: ea }]);
}
function sd(n) {
    let t = [
        { provide: Pa, useValue: zu },
        {
            provide: Na,
            useValue: v({ skipNextTransition: !!n?.skipInitialTransition }, n),
        },
    ];
    return On(9, t);
}
var ia = new D("ROUTER_FORROOT_GUARD"),
    ad = [
        rn,
        { provide: An, useClass: Nt },
        R,
        Dn,
        { provide: Ce, useFactory: Ua, deps: [R] },
        fo,
        [],
    ],
    _e = (() => {
        class n {
            constructor(e) {}
            static forRoot(e, r) {
                return {
                    ngModule: n,
                    providers: [
                        ad,
                        [],
                        { provide: Mn, multi: !0, useValue: e },
                        {
                            provide: ia,
                            useFactory: dd,
                            deps: [[R, new pi(), new Uo()]],
                        },
                        r?.errorHandler
                            ? { provide: ka, useValue: r.errorHandler }
                            : [],
                        { provide: Tn, useValue: r || {} },
                        r?.useHash ? cd() : ud(),
                        ld(),
                        r?.preloadingStrategy
                            ? id(r.preloadingStrategy).ɵproviders
                            : [],
                        r?.initialNavigation ? hd(r) : [],
                        r?.bindToComponentInputs ? od().ɵproviders : [],
                        r?.enableViewTransitions ? sd().ɵproviders : [],
                        pd(),
                    ],
                };
            }
            static forChild(e) {
                return {
                    ngModule: n,
                    providers: [{ provide: Mn, multi: !0, useValue: e }],
                };
            }
            static ɵfac = function (r) {
                return new (r || n)(_(ia, 8));
            };
            static ɵmod = pt({ type: n });
            static ɵinj = ut({});
        }
        return n;
    })();
function ld() {
    return {
        provide: La,
        useFactory: () => {
            let n = b(gs),
                t = b(ve),
                e = b(Tn),
                r = b(go),
                i = b(An);
            return (
                e.scrollOffset && n.setOffset(e.scrollOffset),
                new td(i, r, n, t, e)
            );
        },
    };
}
function cd() {
    return { provide: nn, useClass: hs };
}
function ud() {
    return { provide: nn, useClass: ds };
}
function dd(n) {
    return "guarded";
}
function hd(n) {
    return [
        n.initialNavigation === "disabled" ? rd().ɵproviders : [],
        n.initialNavigation === "enabledBlocking" ? nd().ɵproviders : [],
    ];
}
var oa = new D("");
function pd() {
    return [
        { provide: oa, useFactory: $a },
        { provide: Kt, multi: !0, useExisting: oa },
    ];
}
var Qa = (() => {
        class n {
            _renderer;
            _elementRef;
            onChange = (e) => {};
            onTouched = () => {};
            constructor(e, r) {
                (this._renderer = e), (this._elementRef = r);
            }
            setProperty(e, r) {
                this._renderer.setProperty(
                    this._elementRef.nativeElement,
                    e,
                    r
                );
            }
            registerOnTouched(e) {
                this.onTouched = e;
            }
            registerOnChange(e) {
                this.onChange = e;
            }
            setDisabledState(e) {
                this.setProperty("disabled", e);
            }
            static ɵfac = function (r) {
                return new (r || n)(m(tt), m(Qe));
            };
            static ɵdir = W({ type: n });
        }
        return n;
    })(),
    Vr = (() => {
        class n extends Qa {
            static ɵfac = (() => {
                let e;
                return function (i) {
                    return (e || (e = Te(n)))(i || n);
                };
            })();
            static ɵdir = W({ type: n, features: [ye] });
        }
        return n;
    })(),
    jn = new D("");
var fd = { provide: jn, useExisting: je(() => ae), multi: !0 };
function md() {
    let n = xt() ? xt().getUserAgent() : "";
    return /android (\d+)/.test(n.toLowerCase());
}
var gd = new D(""),
    ae = (() => {
        class n extends Qa {
            _compositionMode;
            _composing = !1;
            constructor(e, r, i) {
                super(e, r),
                    (this._compositionMode = i),
                    this._compositionMode == null &&
                        (this._compositionMode = !md());
            }
            writeValue(e) {
                let r = e ?? "";
                this.setProperty("value", r);
            }
            _handleInput(e) {
                (!this._compositionMode ||
                    (this._compositionMode && !this._composing)) &&
                    this.onChange(e);
            }
            _compositionStart() {
                this._composing = !0;
            }
            _compositionEnd(e) {
                (this._composing = !1),
                    this._compositionMode && this.onChange(e);
            }
            static ɵfac = function (r) {
                return new (r || n)(m(tt), m(Qe), m(gd, 8));
            };
            static ɵdir = W({
                type: n,
                selectors: [
                    ["input", "formControlName", "", 3, "type", "checkbox"],
                    ["textarea", "formControlName", ""],
                    ["input", "formControl", "", 3, "type", "checkbox"],
                    ["textarea", "formControl", ""],
                    ["input", "ngModel", "", 3, "type", "checkbox"],
                    ["textarea", "ngModel", ""],
                    ["", "ngDefaultControl", ""],
                ],
                hostBindings: function (r, i) {
                    r & 1 &&
                        E("input", function (s) {
                            return i._handleInput(s.target.value);
                        })("blur", function () {
                            return i.onTouched();
                        })("compositionstart", function () {
                            return i._compositionStart();
                        })("compositionend", function (s) {
                            return i._compositionEnd(s.target.value);
                        });
                },
                standalone: !1,
                features: [Ge([fd]), ye],
            });
        }
        return n;
    })();
function yo(n) {
    return (
        n == null ||
        ((typeof n == "string" || Array.isArray(n)) && n.length === 0)
    );
}
var Lr = new D(""),
    el = new D("");
function vd(n) {
    return (t) => {
        if (yo(t.value) || yo(n)) return null;
        let e = parseFloat(t.value);
        return !isNaN(e) && e < n ? { min: { min: n, actual: t.value } } : null;
    };
}
function yd(n) {
    return yo(n.value) ? { required: !0 } : null;
}
function Ga(n) {
    return null;
}
function tl(n) {
    return n != null;
}
function nl(n) {
    return Jn(n) ? X(n) : n;
}
function rl(n) {
    let t = {};
    return (
        n.forEach((e) => {
            t = e != null ? v(v({}, t), e) : t;
        }),
        Object.keys(t).length === 0 ? null : t
    );
}
function il(n, t) {
    return t.map((e) => e(n));
}
function bd(n) {
    return !n.validate;
}
function ol(n) {
    return n.map((t) => (bd(t) ? t : (e) => t.validate(e)));
}
function Cd(n) {
    if (!n) return null;
    let t = n.filter(tl);
    return t.length == 0
        ? null
        : function (e) {
              return rl(il(e, t));
          };
}
function Co(n) {
    return n != null ? Cd(ol(n)) : null;
}
function _d(n) {
    if (!n) return null;
    let t = n.filter(tl);
    return t.length == 0
        ? null
        : function (e) {
              let r = il(e, t).map(nl);
              return Po(r).pipe(O(rl));
          };
}
function _o(n) {
    return n != null ? _d(ol(n)) : null;
}
function Ha(n, t) {
    return n === null ? [t] : Array.isArray(n) ? [...n, t] : [n, t];
}
function wd(n) {
    return n._rawValidators;
}
function Sd(n) {
    return n._rawAsyncValidators;
}
function bo(n) {
    return n ? (Array.isArray(n) ? n : [n]) : [];
}
function Tr(n, t) {
    return Array.isArray(n) ? n.includes(t) : n === t;
}
function Wa(n, t) {
    let e = bo(t);
    return (
        bo(n).forEach((i) => {
            Tr(e, i) || e.push(i);
        }),
        e
    );
}
function qa(n, t) {
    return bo(t).filter((e) => !Tr(n, e));
}
var Or = class {
        get value() {
            return this.control ? this.control.value : null;
        }
        get valid() {
            return this.control ? this.control.valid : null;
        }
        get invalid() {
            return this.control ? this.control.invalid : null;
        }
        get pending() {
            return this.control ? this.control.pending : null;
        }
        get disabled() {
            return this.control ? this.control.disabled : null;
        }
        get enabled() {
            return this.control ? this.control.enabled : null;
        }
        get errors() {
            return this.control ? this.control.errors : null;
        }
        get pristine() {
            return this.control ? this.control.pristine : null;
        }
        get dirty() {
            return this.control ? this.control.dirty : null;
        }
        get touched() {
            return this.control ? this.control.touched : null;
        }
        get status() {
            return this.control ? this.control.status : null;
        }
        get untouched() {
            return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
            return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
            return this.control ? this.control.valueChanges : null;
        }
        get path() {
            return null;
        }
        _composedValidatorFn;
        _composedAsyncValidatorFn;
        _rawValidators = [];
        _rawAsyncValidators = [];
        _setValidators(t) {
            (this._rawValidators = t || []),
                (this._composedValidatorFn = Co(this._rawValidators));
        }
        _setAsyncValidators(t) {
            (this._rawAsyncValidators = t || []),
                (this._composedAsyncValidatorFn = _o(this._rawAsyncValidators));
        }
        get validator() {
            return this._composedValidatorFn || null;
        }
        get asyncValidator() {
            return this._composedAsyncValidatorFn || null;
        }
        _onDestroyCallbacks = [];
        _registerOnDestroy(t) {
            this._onDestroyCallbacks.push(t);
        }
        _invokeOnDestroyCallbacks() {
            this._onDestroyCallbacks.forEach((t) => t()),
                (this._onDestroyCallbacks = []);
        }
        reset(t = void 0) {
            this.control && this.control.reset(t);
        }
        hasError(t, e) {
            return this.control ? this.control.hasError(t, e) : !1;
        }
        getError(t, e) {
            return this.control ? this.control.getError(t, e) : null;
        }
    },
    $t = class extends Or {
        name;
        get formDirective() {
            return null;
        }
        get path() {
            return null;
        }
    },
    Ln = class extends Or {
        _parent = null;
        name = null;
        valueAccessor = null;
    },
    Pr = class {
        _cd;
        constructor(t) {
            this._cd = t;
        }
        get isTouched() {
            return (
                this._cd?.control?._touched?.(), !!this._cd?.control?.touched
            );
        }
        get isUntouched() {
            return !!this._cd?.control?.untouched;
        }
        get isPristine() {
            return (
                this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine
            );
        }
        get isDirty() {
            return !!this._cd?.control?.dirty;
        }
        get isValid() {
            return this._cd?.control?._status?.(), !!this._cd?.control?.valid;
        }
        get isInvalid() {
            return !!this._cd?.control?.invalid;
        }
        get isPending() {
            return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
            return this._cd?._submitted?.(), !!this._cd?.submitted;
        }
    },
    Ed = {
        "[class.ng-untouched]": "isUntouched",
        "[class.ng-touched]": "isTouched",
        "[class.ng-pristine]": "isPristine",
        "[class.ng-dirty]": "isDirty",
        "[class.ng-valid]": "isValid",
        "[class.ng-invalid]": "isInvalid",
        "[class.ng-pending]": "isPending",
    },
    rf = j(v({}, Ed), { "[class.ng-submitted]": "isSubmitted" }),
    we = (() => {
        class n extends Pr {
            constructor(e) {
                super(e);
            }
            static ɵfac = function (r) {
                return new (r || n)(m(Ln, 2));
            };
            static ɵdir = W({
                type: n,
                selectors: [
                    ["", "formControlName", ""],
                    ["", "ngModel", ""],
                    ["", "formControl", ""],
                ],
                hostVars: 14,
                hostBindings: function (r, i) {
                    r & 2 &&
                        Ci("ng-untouched", i.isUntouched)(
                            "ng-touched",
                            i.isTouched
                        )("ng-pristine", i.isPristine)("ng-dirty", i.isDirty)(
                            "ng-valid",
                            i.isValid
                        )("ng-invalid", i.isInvalid)("ng-pending", i.isPending);
                },
                standalone: !1,
                features: [ye],
            });
        }
        return n;
    })(),
    Se = (() => {
        class n extends Pr {
            constructor(e) {
                super(e);
            }
            static ɵfac = function (r) {
                return new (r || n)(m($t, 10));
            };
            static ɵdir = W({
                type: n,
                selectors: [
                    ["", "formGroupName", ""],
                    ["", "formArrayName", ""],
                    ["", "ngModelGroup", ""],
                    ["", "formGroup", ""],
                    ["form", 3, "ngNoForm", ""],
                    ["", "ngForm", ""],
                ],
                hostVars: 16,
                hostBindings: function (r, i) {
                    r & 2 &&
                        Ci("ng-untouched", i.isUntouched)(
                            "ng-touched",
                            i.isTouched
                        )("ng-pristine", i.isPristine)("ng-dirty", i.isDirty)(
                            "ng-valid",
                            i.isValid
                        )("ng-invalid", i.isInvalid)("ng-pending", i.isPending)(
                            "ng-submitted",
                            i.isSubmitted
                        );
                },
                standalone: !1,
                features: [ye],
            });
        }
        return n;
    })();
var Pn = "VALID",
    Rr = "INVALID",
    jt = "PENDING",
    Nn = "DISABLED",
    Bt = class {},
    Nr = class extends Bt {
        value;
        source;
        constructor(t, e) {
            super(), (this.value = t), (this.source = e);
        }
    },
    Fn = class extends Bt {
        pristine;
        source;
        constructor(t, e) {
            super(), (this.pristine = t), (this.source = e);
        }
    },
    Vn = class extends Bt {
        touched;
        source;
        constructor(t, e) {
            super(), (this.touched = t), (this.source = e);
        }
    },
    Ut = class extends Bt {
        status;
        source;
        constructor(t, e) {
            super(), (this.status = t), (this.source = e);
        }
    };
function sl(n) {
    return (jr(n) ? n.validators : n) || null;
}
function Md(n) {
    return Array.isArray(n) ? Co(n) : n || null;
}
function al(n, t) {
    return (jr(t) ? t.asyncValidators : n) || null;
}
function xd(n) {
    return Array.isArray(n) ? _o(n) : n || null;
}
function jr(n) {
    return n != null && !Array.isArray(n) && typeof n == "object";
}
function Ad(n, t, e) {
    let r = n.controls;
    if (!(t ? Object.keys(r) : r).length) throw new L(1e3, "");
    if (!r[e]) throw new L(1001, "");
}
function Id(n, t, e) {
    n._forEachChild((r, i) => {
        if (e[i] === void 0) throw new L(1002, "");
    });
}
var kr = class {
        _pendingDirty = !1;
        _hasOwnPendingAsyncValidator = null;
        _pendingTouched = !1;
        _onCollectionChange = () => {};
        _updateOn;
        _parent = null;
        _asyncValidationSubscription;
        _composedValidatorFn;
        _composedAsyncValidatorFn;
        _rawValidators;
        _rawAsyncValidators;
        value;
        constructor(t, e) {
            this._assignValidators(t), this._assignAsyncValidators(e);
        }
        get validator() {
            return this._composedValidatorFn;
        }
        set validator(t) {
            this._rawValidators = this._composedValidatorFn = t;
        }
        get asyncValidator() {
            return this._composedAsyncValidatorFn;
        }
        set asyncValidator(t) {
            this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
        }
        get parent() {
            return this._parent;
        }
        get status() {
            return rt(this.statusReactive);
        }
        set status(t) {
            rt(() => this.statusReactive.set(t));
        }
        _status = tn(() => this.statusReactive());
        statusReactive = Yt(void 0);
        get valid() {
            return this.status === Pn;
        }
        get invalid() {
            return this.status === Rr;
        }
        get pending() {
            return this.status == jt;
        }
        get disabled() {
            return this.status === Nn;
        }
        get enabled() {
            return this.status !== Nn;
        }
        errors;
        get pristine() {
            return rt(this.pristineReactive);
        }
        set pristine(t) {
            rt(() => this.pristineReactive.set(t));
        }
        _pristine = tn(() => this.pristineReactive());
        pristineReactive = Yt(!0);
        get dirty() {
            return !this.pristine;
        }
        get touched() {
            return rt(this.touchedReactive);
        }
        set touched(t) {
            rt(() => this.touchedReactive.set(t));
        }
        _touched = tn(() => this.touchedReactive());
        touchedReactive = Yt(!1);
        get untouched() {
            return !this.touched;
        }
        _events = new Re();
        events = this._events.asObservable();
        valueChanges;
        statusChanges;
        get updateOn() {
            return this._updateOn
                ? this._updateOn
                : this.parent
                ? this.parent.updateOn
                : "change";
        }
        setValidators(t) {
            this._assignValidators(t);
        }
        setAsyncValidators(t) {
            this._assignAsyncValidators(t);
        }
        addValidators(t) {
            this.setValidators(Wa(t, this._rawValidators));
        }
        addAsyncValidators(t) {
            this.setAsyncValidators(Wa(t, this._rawAsyncValidators));
        }
        removeValidators(t) {
            this.setValidators(qa(t, this._rawValidators));
        }
        removeAsyncValidators(t) {
            this.setAsyncValidators(qa(t, this._rawAsyncValidators));
        }
        hasValidator(t) {
            return Tr(this._rawValidators, t);
        }
        hasAsyncValidator(t) {
            return Tr(this._rawAsyncValidators, t);
        }
        clearValidators() {
            this.validator = null;
        }
        clearAsyncValidators() {
            this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
            let e = this.touched === !1;
            this.touched = !0;
            let r = t.sourceControl ?? this;
            this._parent &&
                !t.onlySelf &&
                this._parent.markAsTouched(j(v({}, t), { sourceControl: r })),
                e && t.emitEvent !== !1 && this._events.next(new Vn(!0, r));
        }
        markAllAsTouched(t = {}) {
            this.markAsTouched({
                onlySelf: !0,
                emitEvent: t.emitEvent,
                sourceControl: this,
            }),
                this._forEachChild((e) => e.markAllAsTouched(t));
        }
        markAsUntouched(t = {}) {
            let e = this.touched === !0;
            (this.touched = !1), (this._pendingTouched = !1);
            let r = t.sourceControl ?? this;
            this._forEachChild((i) => {
                i.markAsUntouched({
                    onlySelf: !0,
                    emitEvent: t.emitEvent,
                    sourceControl: r,
                });
            }),
                this._parent &&
                    !t.onlySelf &&
                    this._parent._updateTouched(t, r),
                e && t.emitEvent !== !1 && this._events.next(new Vn(!1, r));
        }
        markAsDirty(t = {}) {
            let e = this.pristine === !0;
            this.pristine = !1;
            let r = t.sourceControl ?? this;
            this._parent &&
                !t.onlySelf &&
                this._parent.markAsDirty(j(v({}, t), { sourceControl: r })),
                e && t.emitEvent !== !1 && this._events.next(new Fn(!1, r));
        }
        markAsPristine(t = {}) {
            let e = this.pristine === !1;
            (this.pristine = !0), (this._pendingDirty = !1);
            let r = t.sourceControl ?? this;
            this._forEachChild((i) => {
                i.markAsPristine({ onlySelf: !0, emitEvent: t.emitEvent });
            }),
                this._parent &&
                    !t.onlySelf &&
                    this._parent._updatePristine(t, r),
                e && t.emitEvent !== !1 && this._events.next(new Fn(!0, r));
        }
        markAsPending(t = {}) {
            this.status = jt;
            let e = t.sourceControl ?? this;
            t.emitEvent !== !1 &&
                (this._events.next(new Ut(this.status, e)),
                this.statusChanges.emit(this.status)),
                this._parent &&
                    !t.onlySelf &&
                    this._parent.markAsPending(
                        j(v({}, t), { sourceControl: e })
                    );
        }
        disable(t = {}) {
            let e = this._parentMarkedDirty(t.onlySelf);
            (this.status = Nn),
                (this.errors = null),
                this._forEachChild((i) => {
                    i.disable(j(v({}, t), { onlySelf: !0 }));
                }),
                this._updateValue();
            let r = t.sourceControl ?? this;
            t.emitEvent !== !1 &&
                (this._events.next(new Nr(this.value, r)),
                this._events.next(new Ut(this.status, r)),
                this.valueChanges.emit(this.value),
                this.statusChanges.emit(this.status)),
                this._updateAncestors(
                    j(v({}, t), { skipPristineCheck: e }),
                    this
                ),
                this._onDisabledChange.forEach((i) => i(!0));
        }
        enable(t = {}) {
            let e = this._parentMarkedDirty(t.onlySelf);
            (this.status = Pn),
                this._forEachChild((r) => {
                    r.enable(j(v({}, t), { onlySelf: !0 }));
                }),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: t.emitEvent,
                }),
                this._updateAncestors(
                    j(v({}, t), { skipPristineCheck: e }),
                    this
                ),
                this._onDisabledChange.forEach((r) => r(!1));
        }
        _updateAncestors(t, e) {
            this._parent &&
                !t.onlySelf &&
                (this._parent.updateValueAndValidity(t),
                t.skipPristineCheck || this._parent._updatePristine({}, e),
                this._parent._updateTouched({}, e));
        }
        setParent(t) {
            this._parent = t;
        }
        getRawValue() {
            return this.value;
        }
        updateValueAndValidity(t = {}) {
            if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
                let r = this._cancelExistingSubscription();
                (this.errors = this._runValidator()),
                    (this.status = this._calculateStatus()),
                    (this.status === Pn || this.status === jt) &&
                        this._runAsyncValidator(r, t.emitEvent);
            }
            let e = t.sourceControl ?? this;
            t.emitEvent !== !1 &&
                (this._events.next(new Nr(this.value, e)),
                this._events.next(new Ut(this.status, e)),
                this.valueChanges.emit(this.value),
                this.statusChanges.emit(this.status)),
                this._parent &&
                    !t.onlySelf &&
                    this._parent.updateValueAndValidity(
                        j(v({}, t), { sourceControl: e })
                    );
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
            this._forEachChild((e) => e._updateTreeValidity(t)),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: t.emitEvent,
                });
        }
        _setInitialStatus() {
            this.status = this._allControlsDisabled() ? Nn : Pn;
        }
        _runValidator() {
            return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t, e) {
            if (this.asyncValidator) {
                (this.status = jt),
                    (this._hasOwnPendingAsyncValidator = {
                        emitEvent: e !== !1,
                    });
                let r = nl(this.asyncValidator(this));
                this._asyncValidationSubscription = r.subscribe((i) => {
                    (this._hasOwnPendingAsyncValidator = null),
                        this.setErrors(i, {
                            emitEvent: e,
                            shouldHaveEmitted: t,
                        });
                });
            }
        }
        _cancelExistingSubscription() {
            if (this._asyncValidationSubscription) {
                this._asyncValidationSubscription.unsubscribe();
                let t = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
                return (this._hasOwnPendingAsyncValidator = null), t;
            }
            return !1;
        }
        setErrors(t, e = {}) {
            (this.errors = t),
                this._updateControlsErrors(
                    e.emitEvent !== !1,
                    this,
                    e.shouldHaveEmitted
                );
        }
        get(t) {
            let e = t;
            return e == null ||
                (Array.isArray(e) || (e = e.split(".")), e.length === 0)
                ? null
                : e.reduce((r, i) => r && r._find(i), this);
        }
        getError(t, e) {
            let r = e ? this.get(e) : this;
            return r && r.errors ? r.errors[t] : null;
        }
        hasError(t, e) {
            return !!this.getError(t, e);
        }
        get root() {
            let t = this;
            for (; t._parent; ) t = t._parent;
            return t;
        }
        _updateControlsErrors(t, e, r) {
            (this.status = this._calculateStatus()),
                t && this.statusChanges.emit(this.status),
                (t || r) && this._events.next(new Ut(this.status, e)),
                this._parent && this._parent._updateControlsErrors(t, e, r);
        }
        _initObservables() {
            (this.valueChanges = new xe()), (this.statusChanges = new xe());
        }
        _calculateStatus() {
            return this._allControlsDisabled()
                ? Nn
                : this.errors
                ? Rr
                : this._hasOwnPendingAsyncValidator ||
                  this._anyControlsHaveStatus(jt)
                ? jt
                : this._anyControlsHaveStatus(Rr)
                ? Rr
                : Pn;
        }
        _anyControlsHaveStatus(t) {
            return this._anyControls((e) => e.status === t);
        }
        _anyControlsDirty() {
            return this._anyControls((t) => t.dirty);
        }
        _anyControlsTouched() {
            return this._anyControls((t) => t.touched);
        }
        _updatePristine(t, e) {
            let r = !this._anyControlsDirty(),
                i = this.pristine !== r;
            (this.pristine = r),
                this._parent &&
                    !t.onlySelf &&
                    this._parent._updatePristine(t, e),
                i && this._events.next(new Fn(this.pristine, e));
        }
        _updateTouched(t = {}, e) {
            (this.touched = this._anyControlsTouched()),
                this._events.next(new Vn(this.touched, e)),
                this._parent &&
                    !t.onlySelf &&
                    this._parent._updateTouched(t, e);
        }
        _onDisabledChange = [];
        _registerOnCollectionChange(t) {
            this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
            jr(t) && t.updateOn != null && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
            let e = this._parent && this._parent.dirty;
            return !t && !!e && !this._parent._anyControlsDirty();
        }
        _find(t) {
            return null;
        }
        _assignValidators(t) {
            (this._rawValidators = Array.isArray(t) ? t.slice() : t),
                (this._composedValidatorFn = Md(this._rawValidators));
        }
        _assignAsyncValidators(t) {
            (this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t),
                (this._composedAsyncValidatorFn = xd(this._rawAsyncValidators));
        }
    },
    Fr = class extends kr {
        constructor(t, e, r) {
            super(sl(e), al(r, e)),
                (this.controls = t),
                this._initObservables(),
                this._setUpdateStrategy(e),
                this._setUpControls(),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !!this.asyncValidator,
                });
        }
        controls;
        registerControl(t, e) {
            return this.controls[t]
                ? this.controls[t]
                : ((this.controls[t] = e),
                  e.setParent(this),
                  e._registerOnCollectionChange(this._onCollectionChange),
                  e);
        }
        addControl(t, e, r = {}) {
            this.registerControl(t, e),
                this.updateValueAndValidity({ emitEvent: r.emitEvent }),
                this._onCollectionChange();
        }
        removeControl(t, e = {}) {
            this.controls[t] &&
                this.controls[t]._registerOnCollectionChange(() => {}),
                delete this.controls[t],
                this.updateValueAndValidity({ emitEvent: e.emitEvent }),
                this._onCollectionChange();
        }
        setControl(t, e, r = {}) {
            this.controls[t] &&
                this.controls[t]._registerOnCollectionChange(() => {}),
                delete this.controls[t],
                e && this.registerControl(t, e),
                this.updateValueAndValidity({ emitEvent: r.emitEvent }),
                this._onCollectionChange();
        }
        contains(t) {
            return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, e = {}) {
            Id(this, !0, t),
                Object.keys(t).forEach((r) => {
                    Ad(this, !0, r),
                        this.controls[r].setValue(t[r], {
                            onlySelf: !0,
                            emitEvent: e.emitEvent,
                        });
                }),
                this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
            t != null &&
                (Object.keys(t).forEach((r) => {
                    let i = this.controls[r];
                    i &&
                        i.patchValue(t[r], {
                            onlySelf: !0,
                            emitEvent: e.emitEvent,
                        });
                }),
                this.updateValueAndValidity(e));
        }
        reset(t = {}, e = {}) {
            this._forEachChild((r, i) => {
                r.reset(t ? t[i] : null, {
                    onlySelf: !0,
                    emitEvent: e.emitEvent,
                });
            }),
                this._updatePristine(e, this),
                this._updateTouched(e, this),
                this.updateValueAndValidity(e);
        }
        getRawValue() {
            return this._reduceChildren(
                {},
                (t, e, r) => ((t[r] = e.getRawValue()), t)
            );
        }
        _syncPendingControls() {
            let t = this._reduceChildren(!1, (e, r) =>
                r._syncPendingControls() ? !0 : e
            );
            return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _forEachChild(t) {
            Object.keys(this.controls).forEach((e) => {
                let r = this.controls[e];
                r && t(r, e);
            });
        }
        _setUpControls() {
            this._forEachChild((t) => {
                t.setParent(this),
                    t._registerOnCollectionChange(this._onCollectionChange);
            });
        }
        _updateValue() {
            this.value = this._reduceValue();
        }
        _anyControls(t) {
            for (let [e, r] of Object.entries(this.controls))
                if (this.contains(e) && t(r)) return !0;
            return !1;
        }
        _reduceValue() {
            let t = {};
            return this._reduceChildren(
                t,
                (e, r, i) => (
                    (r.enabled || this.disabled) && (e[i] = r.value), e
                )
            );
        }
        _reduceChildren(t, e) {
            let r = t;
            return (
                this._forEachChild((i, o) => {
                    r = e(r, i, o);
                }),
                r
            );
        }
        _allControlsDisabled() {
            for (let t of Object.keys(this.controls))
                if (this.controls[t].enabled) return !1;
            return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(t) {
            return this.controls.hasOwnProperty(t) ? this.controls[t] : null;
        }
    };
var wo = new D("CallSetDisabledState", {
        providedIn: "root",
        factory: () => So,
    }),
    So = "always";
function Dd(n, t) {
    return [...t.path, n];
}
function ll(n, t, e = So) {
    cl(n, t),
        t.valueAccessor.writeValue(n.value),
        (n.disabled || e === "always") &&
            t.valueAccessor.setDisabledState?.(n.disabled),
        Td(n, t),
        Pd(n, t),
        Od(n, t),
        Rd(n, t);
}
function Xa(n, t) {
    n.forEach((e) => {
        e.registerOnValidatorChange && e.registerOnValidatorChange(t);
    });
}
function Rd(n, t) {
    if (t.valueAccessor.setDisabledState) {
        let e = (r) => {
            t.valueAccessor.setDisabledState(r);
        };
        n.registerOnDisabledChange(e),
            t._registerOnDestroy(() => {
                n._unregisterOnDisabledChange(e);
            });
    }
}
function cl(n, t) {
    let e = wd(n);
    t.validator !== null
        ? n.setValidators(Ha(e, t.validator))
        : typeof e == "function" && n.setValidators([e]);
    let r = Sd(n);
    t.asyncValidator !== null
        ? n.setAsyncValidators(Ha(r, t.asyncValidator))
        : typeof r == "function" && n.setAsyncValidators([r]);
    let i = () => n.updateValueAndValidity();
    Xa(t._rawValidators, i), Xa(t._rawAsyncValidators, i);
}
function Td(n, t) {
    t.valueAccessor.registerOnChange((e) => {
        (n._pendingValue = e),
            (n._pendingChange = !0),
            (n._pendingDirty = !0),
            n.updateOn === "change" && ul(n, t);
    });
}
function Od(n, t) {
    t.valueAccessor.registerOnTouched(() => {
        (n._pendingTouched = !0),
            n.updateOn === "blur" && n._pendingChange && ul(n, t),
            n.updateOn !== "submit" && n.markAsTouched();
    });
}
function ul(n, t) {
    n._pendingDirty && n.markAsDirty(),
        n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
        t.viewToModelUpdate(n._pendingValue),
        (n._pendingChange = !1);
}
function Pd(n, t) {
    let e = (r, i) => {
        t.valueAccessor.writeValue(r), i && t.viewToModelUpdate(r);
    };
    n.registerOnChange(e),
        t._registerOnDestroy(() => {
            n._unregisterOnChange(e);
        });
}
function Nd(n, t) {
    n == null, cl(n, t);
}
function kd(n, t) {
    if (!n.hasOwnProperty("model")) return !1;
    let e = n.model;
    return e.isFirstChange() ? !0 : !Object.is(t, e.currentValue);
}
function Fd(n) {
    return Object.getPrototypeOf(n.constructor) === Vr;
}
function Vd(n, t) {
    n._syncPendingControls(),
        t.forEach((e) => {
            let r = e.control;
            r.updateOn === "submit" &&
                r._pendingChange &&
                (e.viewToModelUpdate(r._pendingValue), (r._pendingChange = !1));
        });
}
function Ld(n, t) {
    if (!t) return null;
    Array.isArray(t);
    let e, r, i;
    return (
        t.forEach((o) => {
            o.constructor === ae ? (e = o) : Fd(o) ? (r = o) : (i = o);
        }),
        i || r || e || null
    );
}
var jd = { provide: $t, useExisting: je(() => pe) },
    kn = Promise.resolve(),
    pe = (() => {
        class n extends $t {
            callSetDisabledState;
            get submitted() {
                return rt(this.submittedReactive);
            }
            _submitted = tn(() => this.submittedReactive());
            submittedReactive = Yt(!1);
            _directives = new Set();
            form;
            ngSubmit = new xe();
            options;
            constructor(e, r, i) {
                super(),
                    (this.callSetDisabledState = i),
                    (this.form = new Fr({}, Co(e), _o(r)));
            }
            ngAfterViewInit() {
                this._setUpdateStrategy();
            }
            get formDirective() {
                return this;
            }
            get control() {
                return this.form;
            }
            get path() {
                return [];
            }
            get controls() {
                return this.form.controls;
            }
            addControl(e) {
                kn.then(() => {
                    let r = this._findContainer(e.path);
                    (e.control = r.registerControl(e.name, e.control)),
                        ll(e.control, e, this.callSetDisabledState),
                        e.control.updateValueAndValidity({ emitEvent: !1 }),
                        this._directives.add(e);
                });
            }
            getControl(e) {
                return this.form.get(e.path);
            }
            removeControl(e) {
                kn.then(() => {
                    let r = this._findContainer(e.path);
                    r && r.removeControl(e.name), this._directives.delete(e);
                });
            }
            addFormGroup(e) {
                kn.then(() => {
                    let r = this._findContainer(e.path),
                        i = new Fr({});
                    Nd(i, e),
                        r.registerControl(e.name, i),
                        i.updateValueAndValidity({ emitEvent: !1 });
                });
            }
            removeFormGroup(e) {
                kn.then(() => {
                    let r = this._findContainer(e.path);
                    r && r.removeControl(e.name);
                });
            }
            getFormGroup(e) {
                return this.form.get(e.path);
            }
            updateModel(e, r) {
                kn.then(() => {
                    this.form.get(e.path).setValue(r);
                });
            }
            setValue(e) {
                this.control.setValue(e);
            }
            onSubmit(e) {
                return (
                    this.submittedReactive.set(!0),
                    Vd(this.form, this._directives),
                    this.ngSubmit.emit(e),
                    e?.target?.method === "dialog"
                );
            }
            onReset() {
                this.resetForm();
            }
            resetForm(e = void 0) {
                this.form.reset(e), this.submittedReactive.set(!1);
            }
            _setUpdateStrategy() {
                this.options &&
                    this.options.updateOn != null &&
                    (this.form._updateOn = this.options.updateOn);
            }
            _findContainer(e) {
                return e.pop(), e.length ? this.form.get(e) : this.form;
            }
            static ɵfac = function (r) {
                return new (r || n)(m(Lr, 10), m(el, 10), m(wo, 8));
            };
            static ɵdir = W({
                type: n,
                selectors: [
                    ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
                    ["ng-form"],
                    ["", "ngForm", ""],
                ],
                hostBindings: function (r, i) {
                    r & 1 &&
                        E("submit", function (s) {
                            return i.onSubmit(s);
                        })("reset", function () {
                            return i.onReset();
                        });
                },
                inputs: { options: [0, "ngFormOptions", "options"] },
                outputs: { ngSubmit: "ngSubmit" },
                exportAs: ["ngForm"],
                standalone: !1,
                features: [Ge([jd]), ye],
            });
        }
        return n;
    })();
function Za(n, t) {
    let e = n.indexOf(t);
    e > -1 && n.splice(e, 1);
}
function Ja(n) {
    return (
        typeof n == "object" &&
        n !== null &&
        Object.keys(n).length === 2 &&
        "value" in n &&
        "disabled" in n
    );
}
var Ud = class extends kr {
    defaultValue = null;
    _onChange = [];
    _pendingValue;
    _pendingChange = !1;
    constructor(t = null, e, r) {
        super(sl(e), al(r, e)),
            this._applyFormState(t),
            this._setUpdateStrategy(e),
            this._initObservables(),
            this.updateValueAndValidity({
                onlySelf: !0,
                emitEvent: !!this.asyncValidator,
            }),
            jr(e) &&
                (e.nonNullable || e.initialValueIsDefault) &&
                (Ja(t)
                    ? (this.defaultValue = t.value)
                    : (this.defaultValue = t));
    }
    setValue(t, e = {}) {
        (this.value = this._pendingValue = t),
            this._onChange.length &&
                e.emitModelToViewChange !== !1 &&
                this._onChange.forEach((r) =>
                    r(this.value, e.emitViewToModelChange !== !1)
                ),
            this.updateValueAndValidity(e);
    }
    patchValue(t, e = {}) {
        this.setValue(t, e);
    }
    reset(t = this.defaultValue, e = {}) {
        this._applyFormState(t),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
    }
    _updateValue() {}
    _anyControls(t) {
        return !1;
    }
    _allControlsDisabled() {
        return this.disabled;
    }
    registerOnChange(t) {
        this._onChange.push(t);
    }
    _unregisterOnChange(t) {
        Za(this._onChange, t);
    }
    registerOnDisabledChange(t) {
        this._onDisabledChange.push(t);
    }
    _unregisterOnDisabledChange(t) {
        Za(this._onDisabledChange, t);
    }
    _forEachChild(t) {}
    _syncPendingControls() {
        return this.updateOn === "submit" &&
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            this._pendingChange)
            ? (this.setValue(this._pendingValue, {
                  onlySelf: !0,
                  emitModelToViewChange: !1,
              }),
              !0)
            : !1;
    }
    _applyFormState(t) {
        Ja(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                  ? this.disable({ onlySelf: !0, emitEvent: !1 })
                  : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
    }
};
var $d = { provide: Ln, useExisting: je(() => fe) },
    Ya = Promise.resolve(),
    fe = (() => {
        class n extends Ln {
            _changeDetectorRef;
            callSetDisabledState;
            control = new Ud();
            static ngAcceptInputType_isDisabled;
            _registered = !1;
            viewModel;
            name = "";
            isDisabled;
            model;
            options;
            update = new xe();
            constructor(e, r, i, o, s, l) {
                super(),
                    (this._changeDetectorRef = s),
                    (this.callSetDisabledState = l),
                    (this._parent = e),
                    this._setValidators(r),
                    this._setAsyncValidators(i),
                    (this.valueAccessor = Ld(this, o));
            }
            ngOnChanges(e) {
                if (
                    (this._checkForErrors(), !this._registered || "name" in e)
                ) {
                    if (
                        this._registered &&
                        (this._checkName(), this.formDirective)
                    ) {
                        let r = e.name.previousValue;
                        this.formDirective.removeControl({
                            name: r,
                            path: this._getPath(r),
                        });
                    }
                    this._setUpControl();
                }
                "isDisabled" in e && this._updateDisabled(e),
                    kd(e, this.viewModel) &&
                        (this._updateValue(this.model),
                        (this.viewModel = this.model));
            }
            ngOnDestroy() {
                this.formDirective && this.formDirective.removeControl(this);
            }
            get path() {
                return this._getPath(this.name);
            }
            get formDirective() {
                return this._parent ? this._parent.formDirective : null;
            }
            viewToModelUpdate(e) {
                (this.viewModel = e), this.update.emit(e);
            }
            _setUpControl() {
                this._setUpdateStrategy(),
                    this._isStandalone()
                        ? this._setUpStandalone()
                        : this.formDirective.addControl(this),
                    (this._registered = !0);
            }
            _setUpdateStrategy() {
                this.options &&
                    this.options.updateOn != null &&
                    (this.control._updateOn = this.options.updateOn);
            }
            _isStandalone() {
                return (
                    !this._parent || !!(this.options && this.options.standalone)
                );
            }
            _setUpStandalone() {
                ll(this.control, this, this.callSetDisabledState),
                    this.control.updateValueAndValidity({ emitEvent: !1 });
            }
            _checkForErrors() {
                this._isStandalone() || this._checkParentType(),
                    this._checkName();
            }
            _checkParentType() {}
            _checkName() {
                this.options &&
                    this.options.name &&
                    (this.name = this.options.name),
                    !this._isStandalone() && this.name;
            }
            _updateValue(e) {
                Ya.then(() => {
                    this.control.setValue(e, { emitViewToModelChange: !1 }),
                        this._changeDetectorRef?.markForCheck();
                });
            }
            _updateDisabled(e) {
                let r = e.isDisabled.currentValue,
                    i = r !== 0 && ft(r);
                Ya.then(() => {
                    i && !this.control.disabled
                        ? this.control.disable()
                        : !i && this.control.disabled && this.control.enable(),
                        this._changeDetectorRef?.markForCheck();
                });
            }
            _getPath(e) {
                return this._parent ? Dd(e, this._parent) : [e];
            }
            static ɵfac = function (r) {
                return new (r || n)(
                    m($t, 9),
                    m(Lr, 10),
                    m(el, 10),
                    m(jn, 10),
                    m(Mt, 8),
                    m(wo, 8)
                );
            };
            static ɵdir = W({
                type: n,
                selectors: [
                    [
                        "",
                        "ngModel",
                        "",
                        3,
                        "formControlName",
                        "",
                        3,
                        "formControl",
                        "",
                    ],
                ],
                inputs: {
                    name: "name",
                    isDisabled: [0, "disabled", "isDisabled"],
                    model: [0, "ngModel", "model"],
                    options: [0, "ngModelOptions", "options"],
                },
                outputs: { update: "ngModelChange" },
                exportAs: ["ngModel"],
                standalone: !1,
                features: [Ge([$d]), ye, ht],
            });
        }
        return n;
    })(),
    Ee = (() => {
        class n {
            static ɵfac = function (r) {
                return new (r || n)();
            };
            static ɵdir = W({
                type: n,
                selectors: [
                    ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""],
                ],
                hostAttrs: ["novalidate", ""],
                standalone: !1,
            });
        }
        return n;
    })(),
    Bd = { provide: jn, useExisting: je(() => Un), multi: !0 },
    Un = (() => {
        class n extends Vr {
            writeValue(e) {
                let r = e ?? "";
                this.setProperty("value", r);
            }
            registerOnChange(e) {
                this.onChange = (r) => {
                    e(r == "" ? null : parseFloat(r));
                };
            }
            static ɵfac = (() => {
                let e;
                return function (i) {
                    return (e || (e = Te(n)))(i || n);
                };
            })();
            static ɵdir = W({
                type: n,
                selectors: [
                    ["input", "type", "number", "formControlName", ""],
                    ["input", "type", "number", "formControl", ""],
                    ["input", "type", "number", "ngModel", ""],
                ],
                hostBindings: function (r, i) {
                    r & 1 &&
                        E("input", function (s) {
                            return i.onChange(s.target.value);
                        })("blur", function () {
                            return i.onTouched();
                        });
                },
                standalone: !1,
                features: [Ge([Bd]), ye],
            });
        }
        return n;
    })();
var zd = { provide: jn, useExisting: je(() => zt), multi: !0 };
function dl(n, t) {
    return n == null
        ? `${t}`
        : (t && typeof t == "object" && (t = "Object"),
          `${n}: ${t}`.slice(0, 50));
}
function Gd(n) {
    return n.split(":")[0];
}
var zt = (() => {
        class n extends Vr {
            value;
            _optionMap = new Map();
            _idCounter = 0;
            set compareWith(e) {
                this._compareWith = e;
            }
            _compareWith = Object.is;
            writeValue(e) {
                this.value = e;
                let r = this._getOptionId(e),
                    i = dl(r, e);
                this.setProperty("value", i);
            }
            registerOnChange(e) {
                this.onChange = (r) => {
                    (this.value = this._getOptionValue(r)), e(this.value);
                };
            }
            _registerOption() {
                return (this._idCounter++).toString();
            }
            _getOptionId(e) {
                for (let r of this._optionMap.keys())
                    if (this._compareWith(this._optionMap.get(r), e)) return r;
                return null;
            }
            _getOptionValue(e) {
                let r = Gd(e);
                return this._optionMap.has(r) ? this._optionMap.get(r) : e;
            }
            static ɵfac = (() => {
                let e;
                return function (i) {
                    return (e || (e = Te(n)))(i || n);
                };
            })();
            static ɵdir = W({
                type: n,
                selectors: [
                    ["select", "formControlName", "", 3, "multiple", ""],
                    ["select", "formControl", "", 3, "multiple", ""],
                    ["select", "ngModel", "", 3, "multiple", ""],
                ],
                hostBindings: function (r, i) {
                    r & 1 &&
                        E("change", function (s) {
                            return i.onChange(s.target.value);
                        })("blur", function () {
                            return i.onTouched();
                        });
                },
                inputs: { compareWith: "compareWith" },
                standalone: !1,
                features: [Ge([zd]), ye],
            });
        }
        return n;
    })(),
    Ur = (() => {
        class n {
            _element;
            _renderer;
            _select;
            id;
            constructor(e, r, i) {
                (this._element = e),
                    (this._renderer = r),
                    (this._select = i),
                    this._select && (this.id = this._select._registerOption());
            }
            set ngValue(e) {
                this._select != null &&
                    (this._select._optionMap.set(this.id, e),
                    this._setElementValue(dl(this.id, e)),
                    this._select.writeValue(this._select.value));
            }
            set value(e) {
                this._setElementValue(e),
                    this._select && this._select.writeValue(this._select.value);
            }
            _setElementValue(e) {
                this._renderer.setProperty(
                    this._element.nativeElement,
                    "value",
                    e
                );
            }
            ngOnDestroy() {
                this._select &&
                    (this._select._optionMap.delete(this.id),
                    this._select.writeValue(this._select.value));
            }
            static ɵfac = function (r) {
                return new (r || n)(m(Qe), m(tt), m(zt, 9));
            };
            static ɵdir = W({
                type: n,
                selectors: [["option"]],
                inputs: { ngValue: "ngValue", value: "value" },
                standalone: !1,
            });
        }
        return n;
    })(),
    Hd = { provide: jn, useExisting: je(() => hl), multi: !0 };
function Ka(n, t) {
    return n == null
        ? `${t}`
        : (typeof t == "string" && (t = `'${t}'`),
          t && typeof t == "object" && (t = "Object"),
          `${n}: ${t}`.slice(0, 50));
}
function Wd(n) {
    return n.split(":")[0];
}
var hl = (() => {
        class n extends Vr {
            value;
            _optionMap = new Map();
            _idCounter = 0;
            set compareWith(e) {
                this._compareWith = e;
            }
            _compareWith = Object.is;
            writeValue(e) {
                this.value = e;
                let r;
                if (Array.isArray(e)) {
                    let i = e.map((o) => this._getOptionId(o));
                    r = (o, s) => {
                        o._setSelected(i.indexOf(s.toString()) > -1);
                    };
                } else
                    r = (i, o) => {
                        i._setSelected(!1);
                    };
                this._optionMap.forEach(r);
            }
            registerOnChange(e) {
                this.onChange = (r) => {
                    let i = [],
                        o = r.selectedOptions;
                    if (o !== void 0) {
                        let s = o;
                        for (let l = 0; l < s.length; l++) {
                            let a = s[l],
                                h = this._getOptionValue(a.value);
                            i.push(h);
                        }
                    } else {
                        let s = r.options;
                        for (let l = 0; l < s.length; l++) {
                            let a = s[l];
                            if (a.selected) {
                                let h = this._getOptionValue(a.value);
                                i.push(h);
                            }
                        }
                    }
                    (this.value = i), e(i);
                };
            }
            _registerOption(e) {
                let r = (this._idCounter++).toString();
                return this._optionMap.set(r, e), r;
            }
            _getOptionId(e) {
                for (let r of this._optionMap.keys())
                    if (this._compareWith(this._optionMap.get(r)._value, e))
                        return r;
                return null;
            }
            _getOptionValue(e) {
                let r = Wd(e);
                return this._optionMap.has(r)
                    ? this._optionMap.get(r)._value
                    : e;
            }
            static ɵfac = (() => {
                let e;
                return function (i) {
                    return (e || (e = Te(n)))(i || n);
                };
            })();
            static ɵdir = W({
                type: n,
                selectors: [
                    ["select", "multiple", "", "formControlName", ""],
                    ["select", "multiple", "", "formControl", ""],
                    ["select", "multiple", "", "ngModel", ""],
                ],
                hostBindings: function (r, i) {
                    r & 1 &&
                        E("change", function (s) {
                            return i.onChange(s.target);
                        })("blur", function () {
                            return i.onTouched();
                        });
                },
                inputs: { compareWith: "compareWith" },
                standalone: !1,
                features: [Ge([Hd]), ye],
            });
        }
        return n;
    })(),
    $r = (() => {
        class n {
            _element;
            _renderer;
            _select;
            id;
            _value;
            constructor(e, r, i) {
                (this._element = e),
                    (this._renderer = r),
                    (this._select = i),
                    this._select &&
                        (this.id = this._select._registerOption(this));
            }
            set ngValue(e) {
                this._select != null &&
                    ((this._value = e),
                    this._setElementValue(Ka(this.id, e)),
                    this._select.writeValue(this._select.value));
            }
            set value(e) {
                this._select
                    ? ((this._value = e),
                      this._setElementValue(Ka(this.id, e)),
                      this._select.writeValue(this._select.value))
                    : this._setElementValue(e);
            }
            _setElementValue(e) {
                this._renderer.setProperty(
                    this._element.nativeElement,
                    "value",
                    e
                );
            }
            _setSelected(e) {
                this._renderer.setProperty(
                    this._element.nativeElement,
                    "selected",
                    e
                );
            }
            ngOnDestroy() {
                this._select &&
                    (this._select._optionMap.delete(this.id),
                    this._select.writeValue(this._select.value));
            }
            static ɵfac = function (r) {
                return new (r || n)(m(Qe), m(tt), m(hl, 9));
            };
            static ɵdir = W({
                type: n,
                selectors: [["option"]],
                inputs: { ngValue: "ngValue", value: "value" },
                standalone: !1,
            });
        }
        return n;
    })();
function qd(n) {
    return typeof n == "number" ? n : parseFloat(n);
}
var pl = (() => {
    class n {
        _validator = Ga;
        _onChange;
        _enabled;
        ngOnChanges(e) {
            if (this.inputName in e) {
                let r = this.normalizeInput(e[this.inputName].currentValue);
                (this._enabled = this.enabled(r)),
                    (this._validator = this._enabled
                        ? this.createValidator(r)
                        : Ga),
                    this._onChange && this._onChange();
            }
        }
        validate(e) {
            return this._validator(e);
        }
        registerOnValidatorChange(e) {
            this._onChange = e;
        }
        enabled(e) {
            return e != null;
        }
        static ɵfac = function (r) {
            return new (r || n)();
        };
        static ɵdir = W({ type: n, features: [ht] });
    }
    return n;
})();
var Xd = { provide: Lr, useExisting: je(() => $n), multi: !0 },
    $n = (() => {
        class n extends pl {
            min;
            inputName = "min";
            normalizeInput = (e) => qd(e);
            createValidator = (e) => vd(e);
            static ɵfac = (() => {
                let e;
                return function (i) {
                    return (e || (e = Te(n)))(i || n);
                };
            })();
            static ɵdir = W({
                type: n,
                selectors: [
                    [
                        "input",
                        "type",
                        "number",
                        "min",
                        "",
                        "formControlName",
                        "",
                    ],
                    ["input", "type", "number", "min", "", "formControl", ""],
                    ["input", "type", "number", "min", "", "ngModel", ""],
                ],
                hostVars: 1,
                hostBindings: function (r, i) {
                    r & 2 && en("min", i._enabled ? i.min : null);
                },
                inputs: { min: "min" },
                standalone: !1,
                features: [Ge([Xd]), ye],
            });
        }
        return n;
    })(),
    Zd = { provide: Lr, useExisting: je(() => Bn), multi: !0 };
var Bn = (() => {
    class n extends pl {
        required;
        inputName = "required";
        normalizeInput = ft;
        createValidator = (e) => yd;
        enabled(e) {
            return e;
        }
        static ɵfac = (() => {
            let e;
            return function (i) {
                return (e || (e = Te(n)))(i || n);
            };
        })();
        static ɵdir = W({
            type: n,
            selectors: [
                [
                    "",
                    "required",
                    "",
                    "formControlName",
                    "",
                    3,
                    "type",
                    "checkbox",
                ],
                ["", "required", "", "formControl", "", 3, "type", "checkbox"],
                ["", "required", "", "ngModel", "", 3, "type", "checkbox"],
            ],
            hostVars: 1,
            hostBindings: function (r, i) {
                r & 2 && en("required", i._enabled ? "" : null);
            },
            inputs: { required: "required" },
            standalone: !1,
            features: [Ge([Zd]), ye],
        });
    }
    return n;
})();
var Jd = (() => {
    class n {
        static ɵfac = function (r) {
            return new (r || n)();
        };
        static ɵmod = pt({ type: n });
        static ɵinj = ut({});
    }
    return n;
})();
var Y = (() => {
    class n {
        static withConfig(e) {
            return {
                ngModule: n,
                providers: [
                    { provide: wo, useValue: e.callSetDisabledState ?? So },
                ],
            };
        }
        static ɵfac = function (r) {
            return new (r || n)();
        };
        static ɵmod = pt({ type: n });
        static ɵinj = ut({ imports: [Jd] });
    }
    return n;
})();
var Ht = class n {
    constructor(t) {
        this.http = t;
    }
    apiAdminUrl = "http://localhost:8000/api/admin/login";
    apiCustomerUrl = "http://localhost:8000/api/customer/login";
    loginadmin(t, e) {
        let r = { email: t, password: e };
        return this.http.post(this.apiAdminUrl, r);
    }
    login(t, e) {
        let r = { email: t, password: e };
        return this.http.post(this.apiCustomerUrl, r);
    }
    static ɵfac = function (e) {
        return new (e || n)(_(We));
    };
    static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
};
var Br = class n {
    constructor(t, e) {
        this.authService = t;
        this.router = e;
    }
    email = "";
    password = "";
    onLogin() {
        this.authService.login(this.email, this.password).subscribe(
            (t) => {
                localStorage.setItem("token", t.token),
                    this.router.navigate(["/"]);
            },
            (t) => {
                console.error("Login failed", t), alert("Login failed");
            }
        );
    }
    static ɵfac = function (e) {
        return new (e || n)(m(Ht), m(R));
    };
    static ɵcmp = V({
        type: n,
        selectors: [["app-login-customer"]],
        decls: 15,
        vars: 2,
        consts: [
            [
                1,
                "flex",
                "justify-center",
                "items-center",
                "h-screen",
                "bg-gray-100",
            ],
            [1, "bg-white", "p-8", "rounded-lg", "shadow-lg", "w-96"],
            [
                1,
                "text-3xl",
                "font-bold",
                "text-center",
                "text-gray-800",
                "mb-6",
            ],
            [3, "ngSubmit"],
            [1, "mb-4"],
            ["for", "email", 1, "block", "text-gray-700"],
            [
                "type",
                "email",
                "id",
                "email",
                "name",
                "email",
                "required",
                "",
                1,
                "w-full",
                "p-3",
                "border",
                "border-gray-300",
                "rounded-lg",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [1, "mb-6"],
            ["for", "password", 1, "block", "text-gray-700"],
            [
                "type",
                "password",
                "id",
                "password",
                "name",
                "password",
                "required",
                "",
                1,
                "w-full",
                "p-3",
                "border",
                "border-gray-300",
                "rounded-lg",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [
                "type",
                "submit",
                1,
                "w-full",
                "p-3",
                "bg-green-700",
                "text-white",
                "font-bold",
                "rounded-lg",
                "hover:bg-green-800",
                "transition",
                "duration-300",
            ],
        ],
        template: function (e, r) {
            e & 1 &&
                (u(0, "div", 0)(1, "div", 1)(2, "h2", 2),
                d(3, "Customer Login"),
                c(),
                u(4, "form", 3),
                E("ngSubmit", function () {
                    return r.onLogin();
                }),
                u(5, "div", 4)(6, "label", 5),
                d(7, "Email Address"),
                c(),
                u(8, "input", 6),
                z("ngModelChange", function (o) {
                    return B(r.email, o) || (r.email = o), o;
                }),
                c()(),
                u(9, "div", 7)(10, "label", 8),
                d(11, "Password"),
                c(),
                u(12, "input", 9),
                z("ngModelChange", function (o) {
                    return B(r.password, o) || (r.password = o), o;
                }),
                c()(),
                u(13, "button", 10),
                d(14, " Login "),
                c()()()()),
                e & 2 &&
                    (p(8),
                    $("ngModel", r.email),
                    p(4),
                    $("ngModel", r.password));
        },
        dependencies: [Y, Ee, ae, we, Se, Bn, fe, pe],
        encapsulation: 2,
    });
};
var zr = class n {
    constructor(t) {
        this.router = t;
    }
    canActivate(t, e) {
        return localStorage.getItem("token")
            ? (this.router.navigate(["/"]), !1)
            : !0;
    }
    static ɵfac = function (e) {
        return new (e || n)(_(R));
    };
    static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
};
var Gr = class n {
    constructor(t) {
        this.router = t;
    }
    canActivate(t, e) {
        return localStorage.getItem("admin_token")
            ? (this.router.navigate(["/admin/products"]), !1)
            : !0;
    }
    static ɵfac = function (e) {
        return new (e || n)(_(R));
    };
    static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
};
var ct = class n {
    constructor(t) {
        this.http = t;
    }
    apiUrl = "http://localhost:8000/api/products";
    getProducts() {
        return this.http.get(`${this.apiUrl}`);
    }
    getProduct(t) {
        return this.http.get(`${this.apiUrl}/${t}`);
    }
    createProduct(t) {
        return this.http.post(`${this.apiUrl}`, t);
    }
    updateProduct(t = "", e) {
        return this.http.post(`${this.apiUrl}/${t}?_method=PUT`, e);
    }
    deleteProduct(t) {
        return this.http.delete(`${this.apiUrl}/${t}`);
    }
    static ɵfac = function (e) {
        return new (e || n)(_(We));
    };
    static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
};
var Yd = (n) => ["/admin/products/edit", n];
function Kd(n, t) {
    if ((n & 1 && A(0, "img", 12), n & 2)) {
        let e = k().$implicit;
        ze("alt", e.name),
            g("src", "http://localhost:8000/storage/" + e.image, H);
    }
}
function Qd(n, t) {
    if (n & 1) {
        let e = Be();
        u(0, "tr")(1, "td", 8),
            d(2),
            c(),
            u(3, "td", 8),
            d(4),
            nt(5, "slice"),
            c(),
            u(6, "td", 8),
            d(7),
            c(),
            u(8, "td", 8),
            P(9, Kd, 1, 2, "img", 9),
            c(),
            u(10, "td", 8),
            d(11),
            c(),
            u(12, "td", 8)(13, "a", 10),
            d(14, "Edit"),
            c(),
            u(15, "button", 11),
            E("click", function () {
                let i = Ue(e).$implicit,
                    o = k();
                return $e(o.deleteProduct(i.id));
            }),
            d(16, "Delete"),
            c()()();
    }
    if (n & 2) {
        let e = t.$implicit;
        p(2),
            K(e.name),
            p(2),
            ee("", Et(5, 6, e.description, 0, 50), "..."),
            p(3),
            K(e.price),
            p(2),
            g("ngIf", e.image),
            p(2),
            K(e.stock),
            p(2),
            g("routerLink", He(10, Yd, e.id));
    }
}
var Hr = class n {
    constructor(t) {
        this.productService = t;
    }
    products = [];
    ngOnInit() {
        this.productService.getProducts().subscribe((t) => {
            this.products = t;
        });
    }
    deleteProduct(t) {
        confirm("Are you sure you want to delete this product?") &&
            this.productService.deleteProduct(t).subscribe(() => {
                this.products = this.products.filter((e) => e.id !== t);
            });
    }
    static ɵfac = function (e) {
        return new (e || n)(m(ct));
    };
    static ɵcmp = V({
        type: n,
        selectors: [["app-products-list"]],
        decls: 23,
        vars: 1,
        consts: [
            [1, "container", "mx-auto", "px-4", "py-8"],
            [1, "flex", "justify-between", "items-center", "mb-6"],
            [1, "text-2xl", "font-bold", "text-green-700"],
            [
                "href",
                "/admin/products/create",
                1,
                "bg-green-700",
                "text-white",
                "px-4",
                "py-2",
                "rounded-md",
                "hover:bg-green-600",
            ],
            [
                1,
                "min-w-full",
                "bg-white",
                "shadow-md",
                "rounded-lg",
                "overflow-hidden",
            ],
            [1, "bg-green-700", "text-white"],
            [1, "py-2", "px-4", "text-left"],
            [4, "ngFor", "ngForOf"],
            [1, "border-t", "px-4", "py-2"],
            [
                "class",
                "w-16 h-16 object-cover rounded",
                3,
                "src",
                "alt",
                4,
                "ngIf",
            ],
            [1, "text-green-700", "hover:text-green-500", 3, "routerLink"],
            [1, "text-red-600", "hover:text-red-400", "ml-4", 3, "click"],
            [1, "w-16", "h-16", "object-cover", "rounded", 3, "src", "alt"],
        ],
        template: function (e, r) {
            e & 1 &&
                (u(0, "div", 0)(1, "div", 1)(2, "h1", 2),
                d(3, "Product List"),
                c(),
                u(4, "a", 3),
                d(5, "Create Product"),
                c()(),
                u(6, "table", 4)(7, "thead", 5)(8, "tr")(9, "th", 6),
                d(10, "Name"),
                c(),
                u(11, "th", 6),
                d(12, "Description"),
                c(),
                u(13, "th", 6),
                d(14, "Price"),
                c(),
                u(15, "th", 6),
                d(16, "Image"),
                c(),
                u(17, "th", 6),
                d(18, "Stock"),
                c(),
                u(19, "th", 6),
                d(20, "Actions"),
                c()()(),
                u(21, "tbody"),
                P(22, Qd, 17, 12, "tr", 7),
                c()()()),
                e & 2 && (p(22), g("ngForOf", r.products));
        },
        dependencies: [Y, _e, ke, q, oe, te, At],
        encapsulation: 2,
    });
};
var ne = class n {
    constructor(t) {
        this.http = t;
    }
    apiUrl = "http://localhost:8000/api/categories";
    getCategories() {
        return this.http.get(`${this.apiUrl}`);
    }
    getCategoryById(t) {
        return this.http.get(`${this.apiUrl}/${t}`);
    }
    createCategory(t) {
        return this.http.post(`${this.apiUrl}`, t);
    }
    updateCategory(t, e) {
        return this.http.post(`${this.apiUrl}/${t}?_method=PUT`, e);
    }
    deleteCategory(t) {
        return this.http.delete(`${this.apiUrl}/${t}`);
    }
    static ɵfac = function (e) {
        return new (e || n)(_(We));
    };
    static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
};
function eh(n, t) {
    if ((n & 1 && (u(0, "option", 21), d(1), c()), n & 2)) {
        let e = t.$implicit;
        g("value", e.id), p(), K(e.name);
    }
}
function th(n, t) {
    if (
        (n & 1 &&
            (u(0, "div", 22)(1, "p", 23),
            d(2, "Preview:"),
            c(),
            A(3, "img", 24),
            c()),
        n & 2)
    ) {
        let e = k();
        p(3), g("src", e.imagePreview, H);
    }
}
var Wr = class n {
    constructor(t, e, r) {
        this.productService = t;
        this.categoryService = e;
        this.router = r;
    }
    product = {
        name: "",
        description: "",
        price: 0,
        category_id: "",
        stock: 0,
        image: null,
    };
    categories = [];
    imagePreview = null;
    ngOnInit() {
        this.categoryService.getCategories().subscribe((t) => {
            this.categories = t;
        });
    }
    onImageChange(t) {
        let e = t.target.files[0];
        if (e) {
            this.product.image = e;
            let r = new FileReader();
            (r.onload = () => {
                this.imagePreview = r.result;
            }),
                r.readAsDataURL(e);
        }
    }
    onSubmit() {
        let t = new FormData();
        t.append("name", this.product.name),
            t.append("description", this.product.description),
            t.append("price", this.product.price.toString()),
            t.append("category_id", this.product.category_id.toString()),
            t.append("stock", this.product.stock.toString()),
            this.product.image && t.append("image", this.product.image),
            this.productService.createProduct(t).subscribe(
                () => {
                    alert("Product created successfully"),
                        this.router.navigate(["/admin/products"]);
                },
                (e) => {
                    console.error("Error creating product:", e),
                        alert("Failed to create product");
                }
            );
    }
    static ɵfac = function (e) {
        return new (e || n)(m(ct), m(ne), m(R));
    };
    static ɵcmp = V({
        type: n,
        selectors: [["app-product-create"]],
        decls: 35,
        vars: 7,
        consts: [
            [1, "container", "mx-auto", "px-4", "py-8"],
            [1, "text-2xl", "font-bold", "text-green-700", "mb-6"],
            [1, "bg-white", "p-6", "shadow-md", "rounded-lg", 3, "submit"],
            [1, "mb-4"],
            [
                "for",
                "name",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "name",
                "name",
                "name",
                1,
                "w-full",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "p-2",
                "mt-1",
                "focus:outline-none",
                "focus:border-green-500",
                "transition",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [
                "for",
                "description",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "description",
                "name",
                "description",
                1,
                "w-full",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "p-2",
                "mt-1",
                "focus:outline-none",
                "focus:border-green-500",
                "transition",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [
                "for",
                "price",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "price",
                "type",
                "number",
                "name",
                "price",
                1,
                "w-full",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "p-2",
                "mt-1",
                "focus:outline-none",
                "focus:border-green-500",
                "transition",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [
                "for",
                "stock",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "stock",
                "type",
                "number",
                "name",
                "stock",
                "min",
                "0",
                1,
                "w-full",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "p-2",
                "mt-1",
                "focus:outline-none",
                "focus:border-green-500",
                "transition",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [
                "for",
                "category",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "category",
                "name",
                "category",
                1,
                "w-full",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "p-2",
                "mt-1",
                "focus:outline-none",
                "focus:border-green-500",
                "transition",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [3, "value", 4, "ngFor", "ngForOf"],
            [
                "for",
                "image",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [1, "relative"],
            [
                "id",
                "image",
                "type",
                "file",
                "name",
                "image",
                1,
                "absolute",
                "inset-0",
                "opacity-0",
                "cursor-pointer",
                3,
                "change",
            ],
            [
                "type",
                "button",
                1,
                "w-full",
                "py-2",
                "px-4",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "bg-white",
                "text-gray-700",
                "hover:bg-gray-100",
                "focus:outline-none",
            ],
            ["class", "mt-2", 4, "ngIf"],
            [
                "type",
                "submit",
                1,
                "bg-green-700",
                "text-white",
                "px-4",
                "py-2",
                "rounded-md",
                "hover:bg-green-600",
                "transition",
            ],
            [3, "value"],
            [1, "mt-2"],
            [1, "text-sm", "text-gray-600"],
            [
                "alt",
                "Image Preview",
                1,
                "w-32",
                "h-32",
                "object-cover",
                "rounded-md",
                "mt-2",
                3,
                "src",
            ],
        ],
        template: function (e, r) {
            e & 1 &&
                (u(0, "div", 0)(1, "h1", 1),
                d(2, "Create New Product"),
                c(),
                u(3, "form", 2),
                E("submit", function () {
                    return r.onSubmit();
                }),
                u(4, "div", 3)(5, "label", 4),
                d(6, "Product Name"),
                c(),
                u(7, "input", 5),
                z("ngModelChange", function (o) {
                    return B(r.product.name, o) || (r.product.name = o), o;
                }),
                c()(),
                u(8, "div", 3)(9, "label", 6),
                d(10, "Description"),
                c(),
                u(11, "textarea", 7),
                z("ngModelChange", function (o) {
                    return (
                        B(r.product.description, o) ||
                            (r.product.description = o),
                        o
                    );
                }),
                c()(),
                u(12, "div", 3)(13, "label", 8),
                d(14, "Price"),
                c(),
                u(15, "input", 9),
                z("ngModelChange", function (o) {
                    return B(r.product.price, o) || (r.product.price = o), o;
                }),
                c()(),
                u(16, "div", 3)(17, "label", 10),
                d(18, "Stock"),
                c(),
                u(19, "input", 11),
                z("ngModelChange", function (o) {
                    return B(r.product.stock, o) || (r.product.stock = o), o;
                }),
                c()(),
                u(20, "div", 3)(21, "label", 12),
                d(22, "Category"),
                c(),
                u(23, "select", 13),
                z("ngModelChange", function (o) {
                    return (
                        B(r.product.category_id, o) ||
                            (r.product.category_id = o),
                        o
                    );
                }),
                P(24, eh, 2, 2, "option", 14),
                c()(),
                u(25, "div", 3)(26, "label", 15),
                d(27, "Product Image"),
                c(),
                u(28, "div", 16)(29, "input", 17),
                E("change", function (o) {
                    return r.onImageChange(o);
                }),
                c(),
                u(30, "button", 18),
                d(31, " Choose Image "),
                c()(),
                P(32, th, 4, 1, "div", 19),
                c(),
                u(33, "button", 20),
                d(34, " Save Product "),
                c()()()),
                e & 2 &&
                    (p(7),
                    $("ngModel", r.product.name),
                    p(4),
                    $("ngModel", r.product.description),
                    p(4),
                    $("ngModel", r.product.price),
                    p(4),
                    $("ngModel", r.product.stock),
                    p(4),
                    $("ngModel", r.product.category_id),
                    p(),
                    g("ngForOf", r.categories),
                    p(8),
                    g("ngIf", r.imagePreview));
        },
        dependencies: [
            Y,
            Ee,
            Ur,
            $r,
            ae,
            Un,
            zt,
            we,
            Se,
            $n,
            fe,
            pe,
            q,
            oe,
            te,
        ],
        encapsulation: 2,
    });
};
function nh(n, t) {
    if ((n & 1 && (u(0, "option", 21), d(1), c()), n & 2)) {
        let e = t.$implicit;
        g("value", e.id), p(), K(e.name);
    }
}
function rh(n, t) {
    if (
        (n & 1 &&
            (u(0, "div", 22)(1, "p", 23),
            d(2, "Preview:"),
            c(),
            A(3, "img", 24),
            c()),
        n & 2)
    ) {
        let e = k();
        p(3), g("src", e.imagePreview, H);
    }
}
var qr = class n {
    constructor(t, e, r, i) {
        this.productService = t;
        this.categoryService = e;
        this.router = r;
        this.route = i;
    }
    product = {
        name: "",
        description: "",
        price: 0,
        category_id: "",
        stock: 0,
        image: null,
    };
    categories = [];
    imagePreview = null;
    ngOnInit() {
        let t = this.route.snapshot.paramMap.get("id");
        t &&
            this.productService.getProduct(Number(t)).subscribe(
                (e) => {
                    (this.product = e),
                        e.image &&
                            fetch(`http://localhost:8000/storage/${e.image}`)
                                .then((r) => r.blob())
                                .then((r) => {
                                    let i = new File([r], "image", {
                                        type: r.type,
                                    });
                                    (this.product.image = i),
                                        (this.imagePreview =
                                            URL.createObjectURL(i));
                                })
                                .catch((r) => {
                                    console.error("Error fetching image:", r);
                                });
                },
                (e) => {
                    console.error("Error fetching product details", e);
                }
            ),
            this.categoryService.getCategories().subscribe((e) => {
                this.categories = e;
            });
    }
    onImageChange(t) {
        let e = t.target.files[0];
        if (e) {
            this.product.image = e;
            let r = new FileReader();
            (r.onload = () => {
                this.imagePreview = r.result;
            }),
                r.readAsDataURL(e);
        }
    }
    onSubmit() {
        let t = new FormData();
        t.append("name", this.product.name),
            t.append("description", this.product.description),
            t.append("price", this.product.price.toString()),
            t.append("category_id", this.product.category_id.toString()),
            t.append("stock", this.product.stock.toString()),
            this.product.image && t.append("image", this.product.image),
            this.productService
                .updateProduct(this.route.snapshot.paramMap.get("id"), t)
                .subscribe(
                    () => {
                        alert("Product created successfully"),
                            this.router.navigate(["/admin/products"]);
                    },
                    (e) => {
                        console.error("Error creating product:", e),
                            alert("Failed to create product");
                    }
                );
    }
    static ɵfac = function (e) {
        return new (e || n)(m(ct), m(ne), m(R), m(Ce));
    };
    static ɵcmp = V({
        type: n,
        selectors: [["app-product-edit"]],
        decls: 35,
        vars: 7,
        consts: [
            [1, "container", "mx-auto", "px-4", "py-8"],
            [1, "text-2xl", "font-bold", "text-green-700", "mb-6"],
            [1, "bg-white", "p-6", "shadow-md", "rounded-lg", 3, "submit"],
            [1, "mb-4"],
            [
                "for",
                "name",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "name",
                "name",
                "name",
                1,
                "w-full",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "p-2",
                "mt-1",
                "focus:outline-none",
                "focus:border-green-500",
                "transition",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [
                "for",
                "description",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "description",
                "name",
                "description",
                1,
                "w-full",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "p-2",
                "mt-1",
                "focus:outline-none",
                "focus:border-green-500",
                "transition",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [
                "for",
                "price",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "price",
                "type",
                "number",
                "name",
                "price",
                1,
                "w-full",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "p-2",
                "mt-1",
                "focus:outline-none",
                "focus:border-green-500",
                "transition",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [
                "for",
                "stock",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "stock",
                "type",
                "number",
                "name",
                "stock",
                "min",
                "0",
                1,
                "w-full",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "p-2",
                "mt-1",
                "focus:outline-none",
                "focus:border-green-500",
                "transition",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [
                "for",
                "category",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "category",
                "name",
                "category",
                1,
                "w-full",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "p-2",
                "mt-1",
                "focus:outline-none",
                "focus:border-green-500",
                "transition",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [3, "value", 4, "ngFor", "ngForOf"],
            [
                "for",
                "image",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [1, "relative"],
            [
                "id",
                "image",
                "type",
                "file",
                "name",
                "image",
                1,
                "absolute",
                "inset-0",
                "opacity-0",
                "cursor-pointer",
                3,
                "change",
            ],
            [
                "type",
                "button",
                1,
                "w-full",
                "py-2",
                "px-4",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "bg-white",
                "text-gray-700",
                "hover:bg-gray-100",
                "focus:outline-none",
            ],
            ["class", "mt-2", 4, "ngIf"],
            [
                "type",
                "submit",
                1,
                "bg-green-700",
                "text-white",
                "px-4",
                "py-2",
                "rounded-md",
                "hover:bg-green-600",
                "transition",
            ],
            [3, "value"],
            [1, "mt-2"],
            [1, "text-sm", "text-gray-600"],
            [
                "alt",
                "Image Preview",
                1,
                "w-32",
                "h-32",
                "object-cover",
                "rounded-md",
                "mt-2",
                3,
                "src",
            ],
        ],
        template: function (e, r) {
            e & 1 &&
                (u(0, "div", 0)(1, "h1", 1),
                d(2, "Edit Product"),
                c(),
                u(3, "form", 2),
                E("submit", function () {
                    return r.onSubmit();
                }),
                u(4, "div", 3)(5, "label", 4),
                d(6, "Product Name"),
                c(),
                u(7, "input", 5),
                z("ngModelChange", function (o) {
                    return B(r.product.name, o) || (r.product.name = o), o;
                }),
                c()(),
                u(8, "div", 3)(9, "label", 6),
                d(10, "Description"),
                c(),
                u(11, "textarea", 7),
                z("ngModelChange", function (o) {
                    return (
                        B(r.product.description, o) ||
                            (r.product.description = o),
                        o
                    );
                }),
                c()(),
                u(12, "div", 3)(13, "label", 8),
                d(14, "Price"),
                c(),
                u(15, "input", 9),
                z("ngModelChange", function (o) {
                    return B(r.product.price, o) || (r.product.price = o), o;
                }),
                c()(),
                u(16, "div", 3)(17, "label", 10),
                d(18, "Stock"),
                c(),
                u(19, "input", 11),
                z("ngModelChange", function (o) {
                    return B(r.product.stock, o) || (r.product.stock = o), o;
                }),
                c()(),
                u(20, "div", 3)(21, "label", 12),
                d(22, "Category"),
                c(),
                u(23, "select", 13),
                z("ngModelChange", function (o) {
                    return (
                        B(r.product.category_id, o) ||
                            (r.product.category_id = o),
                        o
                    );
                }),
                P(24, nh, 2, 2, "option", 14),
                c()(),
                u(25, "div", 3)(26, "label", 15),
                d(27, "Product Image"),
                c(),
                u(28, "div", 16)(29, "input", 17),
                E("change", function (o) {
                    return r.onImageChange(o);
                }),
                c(),
                u(30, "button", 18),
                d(31, " Choose Image "),
                c()(),
                P(32, rh, 4, 1, "div", 19),
                c(),
                u(33, "button", 20),
                d(34, " Save Product "),
                c()()()),
                e & 2 &&
                    (p(7),
                    $("ngModel", r.product.name),
                    p(4),
                    $("ngModel", r.product.description),
                    p(4),
                    $("ngModel", r.product.price),
                    p(4),
                    $("ngModel", r.product.stock),
                    p(4),
                    $("ngModel", r.product.category_id),
                    p(),
                    g("ngForOf", r.categories),
                    p(8),
                    g("ngIf", r.imagePreview));
        },
        dependencies: [
            Y,
            Ee,
            Ur,
            $r,
            ae,
            Un,
            zt,
            we,
            Se,
            $n,
            fe,
            pe,
            q,
            oe,
            te,
        ],
        encapsulation: 2,
    });
};
var Xr = class n {
    constructor(t) {
        this.router = t;
    }
    canActivate(t, e) {
        return localStorage.getItem("admin_token")
            ? !0
            : (this.router.navigate(["/login-admin"]), !1);
    }
    static ɵfac = function (e) {
        return new (e || n)(_(R));
    };
    static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
};
var ih = (n) => ["/admin/categories/edit", n];
function oh(n, t) {
    if ((n & 1 && A(0, "img", 12), n & 2)) {
        let e = k().$implicit;
        ze("alt", e.name),
            g("src", "http://localhost:8000/storage/" + e.cover_photo, H);
    }
}
function sh(n, t) {
    if ((n & 1 && A(0, "img", 12), n & 2)) {
        let e = k().$implicit;
        ze("alt", e.name),
            g("src", "http://localhost:8000/storage/" + e.image, H);
    }
}
function ah(n, t) {
    if (n & 1) {
        let e = Be();
        u(0, "tr")(1, "td", 8),
            d(2),
            c(),
            u(3, "td", 8),
            d(4),
            nt(5, "slice"),
            c(),
            u(6, "td", 8),
            P(7, oh, 1, 2, "img", 9),
            c(),
            u(8, "td", 8),
            P(9, sh, 1, 2, "img", 9),
            c(),
            u(10, "td", 8)(11, "a", 10),
            d(12, "Edit"),
            c(),
            u(13, "button", 11),
            E("click", function () {
                let i = Ue(e).$implicit,
                    o = k();
                return $e(o.deleteCategory(i.id));
            }),
            d(14, "Delete"),
            c()()();
    }
    if (n & 2) {
        let e = t.$implicit;
        p(2),
            K(e.name),
            p(2),
            ee(" ", Et(5, 5, e.description, 0, 50), "... "),
            p(3),
            g("ngIf", e.cover_photo),
            p(2),
            g("ngIf", e.image),
            p(2),
            g("routerLink", He(9, ih, e.id));
    }
}
var Zr = class n {
    constructor(t) {
        this.caregorieService = t;
    }
    categories = [];
    ngOnInit() {
        this.caregorieService.getCategories().subscribe((t) => {
            this.categories = t;
        });
    }
    deleteCategory(t) {
        confirm("Are you sure you want to delete this category?") &&
            this.caregorieService.deleteCategory(t).subscribe(() => {
                this.categories = this.categories.filter((e) => e.id !== t);
            });
    }
    static ɵfac = function (e) {
        return new (e || n)(m(ne));
    };
    static ɵcmp = V({
        type: n,
        selectors: [["app-categories-list"]],
        decls: 21,
        vars: 1,
        consts: [
            [1, "container", "mx-auto", "px-4", "py-8"],
            [1, "flex", "justify-between", "items-center", "mb-6"],
            [1, "text-2xl", "font-bold", "text-green-700"],
            [
                "href",
                "/admin/categories/create",
                1,
                "bg-green-700",
                "text-white",
                "px-4",
                "py-2",
                "rounded-md",
                "hover:bg-green-600",
            ],
            [
                1,
                "min-w-full",
                "bg-white",
                "shadow-md",
                "rounded-lg",
                "overflow-hidden",
            ],
            [1, "bg-green-700", "text-white"],
            [1, "py-2", "px-4", "text-left"],
            [4, "ngFor", "ngForOf"],
            [1, "border-t", "px-4", "py-2"],
            [
                "class",
                "w-16 h-16 object-cover rounded",
                3,
                "src",
                "alt",
                4,
                "ngIf",
            ],
            [1, "text-green-700", "hover:text-green-500", 3, "routerLink"],
            [1, "text-red-600", "hover:text-red-400", "ml-4", 3, "click"],
            [1, "w-16", "h-16", "object-cover", "rounded", 3, "src", "alt"],
        ],
        template: function (e, r) {
            e & 1 &&
                (u(0, "div", 0)(1, "div", 1)(2, "h1", 2),
                d(3, "Category List"),
                c(),
                u(4, "a", 3),
                d(5, "Create Category"),
                c()(),
                u(6, "table", 4)(7, "thead", 5)(8, "tr")(9, "th", 6),
                d(10, "Name"),
                c(),
                u(11, "th", 6),
                d(12, "Description"),
                c(),
                u(13, "th", 6),
                d(14, "Cover"),
                c(),
                u(15, "th", 6),
                d(16, "Image"),
                c(),
                u(17, "th", 6),
                d(18, "Actions"),
                c()()(),
                u(19, "tbody"),
                P(20, ah, 15, 11, "tr", 7),
                c()()()),
                e & 2 && (p(20), g("ngForOf", r.categories));
        },
        dependencies: [Y, _e, ke, q, oe, te, At],
        encapsulation: 2,
    });
};
function lh(n, t) {
    if (
        (n & 1 &&
            (u(0, "div", 16)(1, "p", 17),
            d(2, "Preview:"),
            c(),
            A(3, "img", 18),
            c()),
        n & 2)
    ) {
        let e = k();
        p(3), g("src", e.imageCoverPreview, H);
    }
}
function ch(n, t) {
    if (
        (n & 1 &&
            (u(0, "div", 16)(1, "p", 17),
            d(2, "Preview:"),
            c(),
            A(3, "img", 18),
            c()),
        n & 2)
    ) {
        let e = k();
        p(3), g("src", e.imagePreview, H);
    }
}
var Jr = class n {
    constructor(t, e) {
        this.categoryService = t;
        this.router = e;
    }
    category = { name: "", image: null, cover_photo: null, description: "" };
    categories = [];
    imagePreview = null;
    imageCoverPreview = null;
    ngOnInit() {}
    onImageChange(t) {
        let e = t.target.files[0];
        if (e) {
            this.category.image = e;
            let r = new FileReader();
            (r.onload = () => {
                this.imagePreview = r.result;
            }),
                r.readAsDataURL(e);
        }
    }
    onCoverImageChange(t) {
        let e = t.target.files[0];
        if (e) {
            this.category.cover_photo = e;
            let r = new FileReader();
            (r.onload = () => {
                this.imageCoverPreview = r.result;
            }),
                r.readAsDataURL(e);
        }
    }
    onSubmit() {
        let t = new FormData();
        t.append("name", this.category.name),
            t.append("description", this.category.description),
            this.category.image && t.append("image", this.category.image),
            this.category.cover_photo &&
                t.append("cover_photo", this.category.cover_photo),
            this.categoryService.createCategory(t).subscribe(
                () => {
                    alert("category created successfully"),
                        this.router.navigate(["/admin/categories"]);
                },
                (e) => {
                    console.error("Error creating category:", e),
                        alert("Failed to create category");
                }
            );
    }
    static ɵfac = function (e) {
        return new (e || n)(m(ne), m(R));
    };
    static ɵcmp = V({
        type: n,
        selectors: [["app-category-create"]],
        decls: 30,
        vars: 4,
        consts: [
            [1, "container", "mx-auto", "px-4", "py-8"],
            [1, "text-2xl", "font-bold", "text-green-700", "mb-6"],
            [1, "bg-white", "p-6", "shadow-md", "rounded-lg", 3, "submit"],
            [1, "mb-4"],
            [
                "for",
                "name",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "name",
                "name",
                "name",
                1,
                "w-full",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "p-2",
                "mt-1",
                "focus:outline-none",
                "focus:border-green-500",
                "transition",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [
                "for",
                "description",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "description",
                "name",
                "description",
                1,
                "w-full",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "p-2",
                "mt-1",
                "focus:outline-none",
                "focus:border-green-500",
                "transition",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [
                "for",
                "cover_photo",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [1, "relative"],
            [
                "id",
                "cover_photo",
                "type",
                "file",
                "name",
                "cover_image",
                1,
                "absolute",
                "inset-0",
                "opacity-0",
                "cursor-pointer",
                3,
                "change",
            ],
            [
                "type",
                "button",
                1,
                "w-full",
                "py-2",
                "px-4",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "bg-white",
                "text-gray-700",
                "hover:bg-gray-100",
                "focus:outline-none",
            ],
            ["class", "mt-2", 4, "ngIf"],
            [
                "for",
                "image",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "image",
                "type",
                "file",
                "name",
                "image",
                1,
                "absolute",
                "inset-0",
                "opacity-0",
                "cursor-pointer",
                3,
                "change",
            ],
            [
                "type",
                "submit",
                1,
                "bg-green-700",
                "text-white",
                "px-4",
                "py-2",
                "rounded-md",
                "hover:bg-green-600",
                "transition",
            ],
            [1, "mt-2"],
            [1, "text-sm", "text-gray-600"],
            [
                "alt",
                "Image Preview",
                1,
                "w-32",
                "h-32",
                "object-cover",
                "rounded-md",
                "mt-2",
                3,
                "src",
            ],
        ],
        template: function (e, r) {
            e & 1 &&
                (u(0, "div", 0)(1, "h1", 1),
                d(2, "Create New Category"),
                c(),
                u(3, "form", 2),
                E("submit", function () {
                    return r.onSubmit();
                }),
                u(4, "div", 3)(5, "label", 4),
                d(6, "Category Name"),
                c(),
                u(7, "input", 5),
                z("ngModelChange", function (o) {
                    return B(r.category.name, o) || (r.category.name = o), o;
                }),
                c()(),
                u(8, "div", 3)(9, "label", 6),
                d(10, "Description"),
                c(),
                u(11, "textarea", 7),
                z("ngModelChange", function (o) {
                    return (
                        B(r.category.description, o) ||
                            (r.category.description = o),
                        o
                    );
                }),
                c()(),
                u(12, "div", 3)(13, "label", 8),
                d(14, "Category Cover"),
                c(),
                u(15, "div", 9)(16, "input", 10),
                E("change", function (o) {
                    return r.onCoverImageChange(o);
                }),
                c(),
                u(17, "button", 11),
                d(18, " Choose Cover "),
                c()(),
                P(19, lh, 4, 1, "div", 12),
                c(),
                u(20, "div", 3)(21, "label", 13),
                d(22, "Category Image"),
                c(),
                u(23, "div", 9)(24, "input", 14),
                E("change", function (o) {
                    return r.onImageChange(o);
                }),
                c(),
                u(25, "button", 11),
                d(26, " Choose Image "),
                c()(),
                P(27, ch, 4, 1, "div", 12),
                c(),
                u(28, "button", 15),
                d(29, " Save Category "),
                c()()()),
                e & 2 &&
                    (p(7),
                    $("ngModel", r.category.name),
                    p(4),
                    $("ngModel", r.category.description),
                    p(8),
                    g("ngIf", r.imageCoverPreview),
                    p(8),
                    g("ngIf", r.imagePreview));
        },
        dependencies: [Y, Ee, ae, we, Se, fe, pe, q, te],
        encapsulation: 2,
    });
};
function uh(n, t) {
    if (
        (n & 1 &&
            (u(0, "div", 16)(1, "p", 17),
            d(2, "Preview:"),
            c(),
            A(3, "img", 18),
            c()),
        n & 2)
    ) {
        let e = k();
        p(3), g("src", e.imageCoverPreview, H);
    }
}
function dh(n, t) {
    if (
        (n & 1 &&
            (u(0, "div", 16)(1, "p", 17),
            d(2, "Preview:"),
            c(),
            A(3, "img", 18),
            c()),
        n & 2)
    ) {
        let e = k();
        p(3), g("src", e.imagePreview, H);
    }
}
var Yr = class n {
    constructor(t, e, r) {
        this.categoryService = t;
        this.router = e;
        this.route = r;
    }
    category = { name: "", image: null, cover_photo: null, description: "" };
    categories = [];
    imagePreview = null;
    imageCoverPreview = null;
    ngOnInit() {
        let t = this.route.snapshot.paramMap.get("id");
        t &&
            this.categoryService.getCategoryById(Number(t)).subscribe(
                (e) => {
                    (this.category = e),
                        e.cover_photo &&
                            fetch(
                                `http://localhost:8000/storage/${e.cover_photo}`
                            )
                                .then((r) => r.blob())
                                .then((r) => {
                                    let i = new File([r], "image", {
                                        type: r.type,
                                    });
                                    (this.category.cover_photo = i),
                                        (this.imageCoverPreview =
                                            URL.createObjectURL(i));
                                })
                                .catch((r) => {
                                    console.error("Error fetching image:", r);
                                }),
                        e.image &&
                            fetch(`http://localhost:8000/storage/${e.image}`)
                                .then((r) => r.blob())
                                .then((r) => {
                                    let i = new File([r], "image", {
                                        type: r.type,
                                    });
                                    (this.category.image = i),
                                        (this.imagePreview =
                                            URL.createObjectURL(i));
                                })
                                .catch((r) => {
                                    console.error("Error fetching image:", r);
                                });
                },
                (e) => {
                    console.error("Error fetching product details", e);
                }
            ),
            this.categoryService.getCategories().subscribe((e) => {
                this.categories = e;
            });
    }
    onCoverImageChange(t) {
        let e = t.target.files[0];
        if (e) {
            this.category.cover_photo = e;
            let r = new FileReader();
            (r.onload = () => {
                this.imageCoverPreview = r.result;
            }),
                r.readAsDataURL(e);
        }
    }
    onImageChange(t) {
        let e = t.target.files[0];
        if (e) {
            this.category.image = e;
            let r = new FileReader();
            (r.onload = () => {
                this.imagePreview = r.result;
            }),
                r.readAsDataURL(e);
        }
    }
    onSubmit() {
        let t = new FormData();
        t.append("name", this.category.name),
            t.append("description", this.category.description),
            this.category.cover_photo &&
                t.append("cover_photo", this.category.cover_photo),
            this.category.image && t.append("image", this.category.image),
            this.categoryService
                .updateCategory(this.route.snapshot.paramMap.get("id"), t)
                .subscribe(
                    () => {
                        alert("category editd successfully"),
                            this.router.navigate(["/admin/categories"]);
                    },
                    (e) => {
                        console.error("Error creating category:", e),
                            alert("Failed to edit category");
                    }
                );
    }
    static ɵfac = function (e) {
        return new (e || n)(m(ne), m(R), m(Ce));
    };
    static ɵcmp = V({
        type: n,
        selectors: [["app-category-edit"]],
        decls: 30,
        vars: 4,
        consts: [
            [1, "container", "mx-auto", "px-4", "py-8"],
            [1, "text-2xl", "font-bold", "text-green-700", "mb-6"],
            [1, "bg-white", "p-6", "shadow-md", "rounded-lg", 3, "submit"],
            [1, "mb-4"],
            [
                "for",
                "name",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "name",
                "name",
                "name",
                1,
                "w-full",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "p-2",
                "mt-1",
                "focus:outline-none",
                "focus:border-green-500",
                "transition",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [
                "for",
                "description",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "description",
                "name",
                "description",
                1,
                "w-full",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "p-2",
                "mt-1",
                "focus:outline-none",
                "focus:border-green-500",
                "transition",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [
                "for",
                "cover_photo",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [1, "relative"],
            [
                "id",
                "cover_photo",
                "type",
                "file",
                "name",
                "cover_image",
                1,
                "absolute",
                "inset-0",
                "opacity-0",
                "cursor-pointer",
                3,
                "change",
            ],
            [
                "type",
                "button",
                1,
                "w-full",
                "py-2",
                "px-4",
                "border-2",
                "border-gray-300",
                "rounded-md",
                "bg-white",
                "text-gray-700",
                "hover:bg-gray-100",
                "focus:outline-none",
            ],
            ["class", "mt-2", 4, "ngIf"],
            [
                "for",
                "image",
                1,
                "block",
                "text-sm",
                "font-semibold",
                "text-gray-700",
            ],
            [
                "id",
                "image",
                "type",
                "file",
                "name",
                "image",
                1,
                "absolute",
                "inset-0",
                "opacity-0",
                "cursor-pointer",
                3,
                "change",
            ],
            [
                "type",
                "submit",
                1,
                "bg-green-700",
                "text-white",
                "px-4",
                "py-2",
                "rounded-md",
                "hover:bg-green-600",
                "transition",
            ],
            [1, "mt-2"],
            [1, "text-sm", "text-gray-600"],
            [
                "alt",
                "Image Preview",
                1,
                "w-32",
                "h-32",
                "object-cover",
                "rounded-md",
                "mt-2",
                3,
                "src",
            ],
        ],
        template: function (e, r) {
            e & 1 &&
                (u(0, "div", 0)(1, "h1", 1),
                d(2, "Edit Category"),
                c(),
                u(3, "form", 2),
                E("submit", function () {
                    return r.onSubmit();
                }),
                u(4, "div", 3)(5, "label", 4),
                d(6, "Category Name"),
                c(),
                u(7, "input", 5),
                z("ngModelChange", function (o) {
                    return B(r.category.name, o) || (r.category.name = o), o;
                }),
                c()(),
                u(8, "div", 3)(9, "label", 6),
                d(10, "Description"),
                c(),
                u(11, "textarea", 7),
                z("ngModelChange", function (o) {
                    return (
                        B(r.category.description, o) ||
                            (r.category.description = o),
                        o
                    );
                }),
                c()(),
                u(12, "div", 3)(13, "label", 8),
                d(14, "Category Cover"),
                c(),
                u(15, "div", 9)(16, "input", 10),
                E("change", function (o) {
                    return r.onCoverImageChange(o);
                }),
                c(),
                u(17, "button", 11),
                d(18, " Choose Cover "),
                c()(),
                P(19, uh, 4, 1, "div", 12),
                c(),
                u(20, "div", 3)(21, "label", 13),
                d(22, "Category Image"),
                c(),
                u(23, "div", 9)(24, "input", 14),
                E("change", function (o) {
                    return r.onImageChange(o);
                }),
                c(),
                u(25, "button", 11),
                d(26, " Choose Image "),
                c()(),
                P(27, dh, 4, 1, "div", 12),
                c(),
                u(28, "button", 15),
                d(29, " Save Category "),
                c()()()),
                e & 2 &&
                    (p(7),
                    $("ngModel", r.category.name),
                    p(4),
                    $("ngModel", r.category.description),
                    p(8),
                    g("ngIf", r.imageCoverPreview),
                    p(8),
                    g("ngIf", r.imagePreview));
        },
        dependencies: [Y, Ee, ae, we, Se, fe, pe, q, te],
        encapsulation: 2,
    });
};
var Kr = class n {
    constructor(t) {
        this.http = t;
    }
    apiUrl = "http://localhost:8000/api/purchases";
    getPurchases() {
        return this.http.get(`${this.apiUrl}`);
    }
    static ɵfac = function (e) {
        return new (e || n)(_(We));
    };
    static ɵprov = w({ token: n, factory: n.ɵfac, providedIn: "root" });
};
function ph(n, t) {
    if (
        (n & 1 &&
            (u(0, "div", 8)(1, "div", 9),
            A(2, "img", 10),
            u(3, "div", 11)(4, "h4", 12),
            d(5),
            c(),
            u(6, "p", 13),
            d(7),
            c(),
            u(8, "p", 14)(9, "strong"),
            d(10, "Price:"),
            c(),
            d(11),
            c(),
            u(12, "p", 13)(13, "strong"),
            d(14, "Quantity:"),
            c(),
            d(15),
            c()()(),
            u(16, "div", 15)(17, "p"),
            d(18),
            c()()()),
        n & 2)
    ) {
        let e = t.$implicit,
            r = k(2);
        p(2),
            g("src", "http://localhost:8000/storage/" + e.product.image, H),
            p(3),
            K(e.product.name),
            p(2),
            K(e.product.description),
            p(4),
            ee(" ", e.product.price, " DH"),
            p(4),
            ee(" ", e.quantity, ""),
            p(3),
            ee(
                "Total: ",
                r.calculateTotalPrice(e.product.price, e.quantity),
                " DH"
            );
    }
}
function fh(n, t) {
    if (
        (n & 1 &&
            (u(0, "div", 3)(1, "h2", 4),
            d(2),
            c(),
            u(3, "p")(4, "strong"),
            d(5, "Address:"),
            c(),
            d(6),
            c(),
            u(7, "p")(8, "strong"),
            d(9, "Phone Number:"),
            c(),
            d(10),
            c(),
            u(11, "p")(12, "strong"),
            d(13, "Order Date:"),
            c(),
            d(14),
            nt(15, "date"),
            c(),
            u(16, "p")(17, "strong"),
            d(18, "Total:"),
            c(),
            d(19),
            c(),
            u(20, "p")(21, "strong"),
            d(22, "Client:"),
            c(),
            d(23),
            c(),
            u(24, "div", 5)(25, "h3", 6),
            d(26, "Products:"),
            c(),
            P(27, ph, 19, 6, "div", 7),
            c()()),
        n & 2)
    ) {
        let e = t.$implicit,
            r = k();
        p(2),
            ee("Order ID: ", e.id, ""),
            p(4),
            ee(" ", e.address, ""),
            p(4),
            ee(" ", e.phone_number, ""),
            p(4),
            ee(" ", rs(15, 7, e.created_at), ""),
            p(5),
            ee(" ", r.total(e.purchases), " DH"),
            p(4),
            ee(" ", e.user.name, ""),
            p(4),
            g("ngForOf", e.purchases);
    }
}
var Qr = class n {
    constructor(t) {
        this.purchasesService = t;
    }
    purchases = [];
    ngOnInit() {
        this.purchasesService.getPurchases().subscribe((t) => {
            this.purchases = t;
        });
    }
    total(t) {
        return parseFloat(
            t.reduce((e, r) => e + parseFloat(r.price) * r.quantity, 0)
        ).toFixed(2);
    }
    calculateTotalPrice(t, e) {
        return (parseFloat(t) * e).toFixed(2);
    }
    static ɵfac = function (e) {
        return new (e || n)(m(Kr));
    };
    static ɵcmp = V({
        type: n,
        selectors: [["app-purchases-list"]],
        decls: 4,
        vars: 1,
        consts: [
            [1, "container", "mx-auto", "p-6"],
            [1, "text-3xl", "font-semibold", "text-gray-800", "mb-6"],
            [
                "class",
                "bg-white p-6 rounded-lg shadow-lg mb-6",
                4,
                "ngFor",
                "ngForOf",
            ],
            [1, "bg-white", "p-6", "rounded-lg", "shadow-lg", "mb-6"],
            [1, "text-xl", "font-semibold", "text-green-700"],
            [1, "mt-6"],
            [1, "text-lg", "font-medium", "text-gray-800"],
            ["class", "bg-gray-100 p-4 rounded-lg mb-4", 4, "ngFor", "ngForOf"],
            [1, "bg-gray-100", "p-4", "rounded-lg", "mb-4"],
            [1, "flex"],
            [
                "alt",
                "Product Image",
                1,
                "w-20",
                "h-20",
                "object-cover",
                "rounded-lg",
                "mr-4",
                3,
                "src",
            ],
            [1, "flex-1"],
            [1, "text-md", "font-semibold"],
            [1, "text-sm", "text-gray-600"],
            [1, "text-sm", "text-green-700", "mt-2"],
            [
                1,
                "mt-2",
                "text-right",
                "text-lg",
                "font-semibold",
                "text-green-700",
            ],
        ],
        template: function (e, r) {
            e & 1 &&
                (u(0, "div", 0)(1, "h1", 1),
                d(2, "Purchase List"),
                c(),
                P(3, fh, 28, 9, "div", 2),
                c()),
                e & 2 && (p(3), g("ngForOf", r.purchases));
        },
        dependencies: [Y, _e, q, oe, fs],
        encapsulation: 2,
    });
};
var ei = class n {
    constructor(t) {
        this.router = t;
    }
    logout() {
        localStorage.removeItem("admin_token"),
            this.router.navigate(["/login-admin"]);
    }
    static ɵfac = function (e) {
        return new (e || n)(m(R));
    };
    static ɵcmp = V({
        type: n,
        selectors: [["app-layout"]],
        decls: 19,
        vars: 0,
        consts: [
            [1, "flex", "h-screen", "bg-gray-100"],
            [1, "w-64", "bg-gray-800", "text-white", "p-4", "flex", "flex-col"],
            [
                1,
                "text-2xl",
                "font-bold",
                "text-center",
                "text-green-700",
                "mb-6",
            ],
            [1, "space-y-4"],
            [
                "routerLink",
                "/admin/products",
                "routerLinkActive",
                "text-green-400",
            ],
            [
                "routerLink",
                "/admin/categories",
                "routerLinkActive",
                "text-green-400",
            ],
            [
                "routerLink",
                "/admin/purchases",
                "routerLinkActive",
                "text-green-400",
            ],
            [1, "mt-auto"],
            [
                1,
                "w-full",
                "bg-red-500",
                "hover:bg-red-600",
                "text-white",
                "py-2",
                "px-4",
                "rounded",
                "focus:outline-none",
                "focus:ring-2",
                "focus:ring-red-600",
                3,
                "click",
            ],
            [1, "flex-1", "p-6", "overflow-y-auto"],
        ],
        template: function (e, r) {
            e & 1 &&
                (u(0, "div", 0)(1, "div", 1)(2, "h1", 2),
                d(3, "Admin Panel"),
                c(),
                u(4, "ul", 3)(5, "li")(6, "a", 4),
                d(7, "Products"),
                c()(),
                u(8, "li")(9, "a", 5),
                d(10, "Categories"),
                c()(),
                u(11, "li")(12, "a", 6),
                d(13, "Purchases"),
                c()()(),
                u(14, "div", 7)(15, "button", 8),
                E("click", function () {
                    return r.logout();
                }),
                d(16, "Logout"),
                c()()(),
                u(17, "div", 9),
                A(18, "router-outlet"),
                c()());
        },
        dependencies: [_e, bt, ke, Dr],
        styles: [
            "a[_ngcontent-%COMP%]{display:block;padding:10px;font-size:1.2rem;color:#ddd;text-decoration:none}a[_ngcontent-%COMP%]:hover{background-color:#2d3748;border-radius:4px}a.text-green-400[_ngcontent-%COMP%]{color:#48bb78}",
        ],
    });
};
var ti = class n {
    constructor(t, e) {
        this.authService = t;
        this.router = e;
    }
    email = "";
    password = "";
    onLogin() {
        this.authService.loginadmin(this.email, this.password).subscribe(
            (t) => {
                localStorage.setItem("admin_token", t.token),
                    this.router.navigate(["/admin/products"]);
            },
            (t) => {
                console.error("Login failed", t), alert("Login failed");
            }
        );
    }
    static ɵfac = function (e) {
        return new (e || n)(m(Ht), m(R));
    };
    static ɵcmp = V({
        type: n,
        selectors: [["app-login-admin"]],
        decls: 15,
        vars: 2,
        consts: [
            [
                1,
                "flex",
                "justify-center",
                "items-center",
                "h-screen",
                "bg-gray-100",
            ],
            [1, "bg-white", "p-8", "rounded-lg", "shadow-lg", "w-96"],
            [
                1,
                "text-3xl",
                "font-bold",
                "text-center",
                "text-gray-800",
                "mb-6",
            ],
            [3, "ngSubmit"],
            [1, "mb-4"],
            ["for", "email", 1, "block", "text-gray-700"],
            [
                "type",
                "email",
                "id",
                "email",
                "name",
                "email",
                "required",
                "",
                1,
                "w-full",
                "p-3",
                "border",
                "border-gray-300",
                "rounded-lg",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [1, "mb-6"],
            ["for", "password", 1, "block", "text-gray-700"],
            [
                "type",
                "password",
                "id",
                "password",
                "name",
                "password",
                "required",
                "",
                1,
                "w-full",
                "p-3",
                "border",
                "border-gray-300",
                "rounded-lg",
                3,
                "ngModelChange",
                "ngModel",
            ],
            [
                "type",
                "submit",
                1,
                "w-full",
                "p-3",
                "bg-green-700",
                "text-white",
                "font-bold",
                "rounded-lg",
                "hover:bg-green-800",
                "transition",
                "duration-300",
            ],
        ],
        template: function (e, r) {
            e & 1 &&
                (u(0, "div", 0)(1, "div", 1)(2, "h2", 2),
                d(3, "Admin Login"),
                c(),
                u(4, "form", 3),
                E("ngSubmit", function () {
                    return r.onLogin();
                }),
                u(5, "div", 4)(6, "label", 5),
                d(7, "Email Address"),
                c(),
                u(8, "input", 6),
                z("ngModelChange", function (o) {
                    return B(r.email, o) || (r.email = o), o;
                }),
                c()(),
                u(9, "div", 7)(10, "label", 8),
                d(11, "Password"),
                c(),
                u(12, "input", 9),
                z("ngModelChange", function (o) {
                    return B(r.password, o) || (r.password = o), o;
                }),
                c()(),
                u(13, "button", 10),
                d(14, " Login "),
                c()()()()),
                e & 2 &&
                    (p(8),
                    $("ngModel", r.email),
                    p(4),
                    $("ngModel", r.password));
        },
        dependencies: [Y, Ee, ae, we, Se, Bn, fe, pe],
        encapsulation: 2,
    });
};
var le = () => ({ exact: !0 }),
    mh = (n) => ["/category", n];
function gh(n, t) {
    if ((n & 1 && A(0, "img", 48), n & 2)) {
        let e = k().$implicit;
        ze("alt", e.name),
            g("src", "http://localhost:8000/storage/" + e.image, H);
    }
}
function vh(n, t) {
    if (
        (n & 1 &&
            (u(0, "li", 44)(1, "a", 45),
            P(2, gh, 1, 2, "img", 46),
            u(3, "span", 47),
            d(4),
            c()()()),
        n & 2)
    ) {
        let e = t.$implicit;
        p(),
            g("routerLink", He(3, mh, e.id)),
            p(),
            g("ngIf", e.image),
            p(2),
            K(e.name);
    }
}
function yh(n, t) {
    if (
        (n & 1 &&
            (u(0, "div", 41)(1, "ul", 42), P(2, vh, 5, 5, "li", 43), c()()),
        n & 2)
    ) {
        let e = k();
        p(2), g("ngForOf", e.categories);
    }
}
function bh(n, t) {
    if (n & 1) {
        let e = Be();
        u(0, "li", 51)(1, "a", 52),
            E("click", function () {
                Ue(e);
                let i = k(2);
                return $e(i.logout());
            }),
            d(2, "Logout"),
            c()();
    }
}
function Ch(n, t) {
    n & 1 && (u(0, "li", 51)(1, "a", 53), d(2, "Login"), c()());
}
function _h(n, t) {
    n & 1 && (u(0, "li", 51)(1, "a", 54), d(2, "Inscription"), c()());
}
function wh(n, t) {
    if (
        (n & 1 &&
            (u(0, "div", 49)(1, "ul", 42),
            P(2, bh, 3, 0, "li", 50)(3, Ch, 3, 0, "li", 50)(
                4,
                _h,
                3,
                0,
                "li",
                50
            ),
            c()()),
        n & 2)
    ) {
        let e = k();
        p(2),
            g("ngIf", e.isLoggedIn),
            p(),
            g("ngIf", !e.isLoggedIn),
            p(),
            g("ngIf", !e.isLoggedIn);
    }
}
function Sh(n, t) {
    n & 1 && (u(0, "li")(1, "a", 66), d(2, "Login"), c()()),
        n & 2 && (p(), g("routerLinkActiveOptions", re(1, le)));
}
function Eh(n, t) {
    n & 1 && (u(0, "li")(1, "a", 67), d(2, "Inscription"), c()()),
        n & 2 && (p(), g("routerLinkActiveOptions", re(1, le)));
}
function Mh(n, t) {
    if (n & 1) {
        let e = Be();
        u(0, "li", 68),
            E("click", function () {
                Ue(e);
                let i = k(2);
                return $e(i.logout());
            }),
            u(1, "span", 69),
            d(2, "Logout"),
            c()();
    }
}
function xh(n, t) {
    if (
        (n & 1 &&
            (u(0, "div", 55)(1, "ul", 56)(2, "a", 57),
            d(3, "Acceuil"),
            c(),
            u(4, "a", 58),
            d(5, "Top Vente"),
            c(),
            u(6, "a", 59),
            d(7, "Promo"),
            c(),
            u(8, "a", 60),
            d(9, "Nouvel arrivage"),
            c(),
            u(10, "a", 61),
            d(11, "About"),
            c(),
            u(12, "li")(13, "a", 62),
            d(14, "Wishlist"),
            c()(),
            u(15, "li")(16, "a", 63),
            d(17, "Cart"),
            c()(),
            P(18, Sh, 3, 2, "li", 64)(19, Eh, 3, 2, "li", 64)(
                20,
                Mh,
                3,
                0,
                "li",
                65
            ),
            c()()),
        n & 2)
    ) {
        let e = k();
        p(2),
            g("routerLinkActiveOptions", re(10, le)),
            p(2),
            g("routerLinkActiveOptions", re(11, le)),
            p(2),
            g("routerLinkActiveOptions", re(12, le)),
            p(2),
            g("routerLinkActiveOptions", re(13, le)),
            p(2),
            g("routerLinkActiveOptions", re(14, le)),
            p(3),
            g("routerLinkActiveOptions", re(15, le)),
            p(3),
            g("routerLinkActiveOptions", re(16, le)),
            p(2),
            g("ngIf", !e.isLoggedIn),
            p(),
            g("ngIf", !e.isLoggedIn),
            p(),
            g("ngIf", e.isLoggedIn);
    }
}
var ni = class n {
    constructor(t, e) {
        this.categoryService = t;
        this.router = e;
    }
    isDropdownOpen = !1;
    isMobileMenuOpen = !1;
    isProfileDropdownOpen = !1;
    categories = [];
    ngOnInit() {
        this.categoryService.getCategories().subscribe((t) => {
            this.categories = t;
        });
    }
    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
    onClickOutside(t) {
        let e = document.getElementById("categories-dropdown"),
            r = document.getElementById("categories-button");
        e &&
            r &&
            !e.contains(t.target) &&
            !r.contains(t.target) &&
            (this.isDropdownOpen = !1);
    }
    get isLoggedIn() {
        return !!localStorage.getItem("token");
    }
    toggleProfileDropdown() {
        this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
    }
    toggleMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
    logout() {
        localStorage.removeItem("token"),
            this.router.navigate(["/login-customer"]);
    }
    static ɵfac = function (e) {
        return new (e || n)(m(ne), m(R));
    };
    static ɵcmp = V({
        type: n,
        selectors: [["app-layout"]],
        hostBindings: function (e, r) {
            e & 1 &&
                E(
                    "click",
                    function (o) {
                        return r.onClickOutside(o);
                    },
                    !1,
                    Jo
                );
        },
        decls: 53,
        vars: 13,
        consts: [
            [1, "min-h-screen", "flex", "flex-col", "bg-white"],
            [1, "bg-green-700", "text-white"],
            [
                1,
                "container",
                "mx-auto",
                "flex",
                "justify-between",
                "items-center",
                "px-6",
                "py-2",
            ],
            [1, "flex", "items-center", "space-x-2"],
            [1, "fas", "fa-envelope", "text-white"],
            [
                "href",
                "mailto:contact@example.com",
                1,
                "text-white",
                "font-extrabold",
                "hover:text-gray-200",
            ],
            [1, "flex", "items-center", "space-x-4"],
            [
                "href",
                "https://facebook.com",
                "target",
                "_blank",
                1,
                "bg-white",
                "text-green-700",
                "rounded-full",
                "flex",
                "items-center",
                "justify-center",
                "p-4",
                "h-2",
                "w-4",
                "hover:bg-gray-200",
            ],
            [1, "fab", "fa-facebook-f"],
            [
                "href",
                "https://instagram.com",
                "target",
                "_blank",
                1,
                "bg-white",
                "text-green-700",
                "rounded-full",
                "flex",
                "items-center",
                "justify-center",
                "p-4",
                "h-2",
                "w-4",
                "hover:bg-gray-200",
            ],
            [1, "fab", "fa-instagram"],
            [1, "bg-white", "w-full", "py-2", "border-b", "border-gray-200"],
            [
                1,
                "container",
                "mx-auto",
                "flex",
                "items-center",
                "justify-start",
                "px-6",
            ],
            [
                "src",
                "frontend/browser/assets/images/logo.png",
                "alt",
                "Logo",
                1,
                "h-12",
                "w-auto",
            ],
            [1, "bg-white", "sticky", "top-0", "z-50", "relative"],
            [
                1,
                "container",
                "mx-auto",
                "px-4",
                "py-4",
                "flex",
                "items-center",
                "justify-between",
                "bg-white",
                "z-50",
            ],
            [1, "relative"],
            [
                "id",
                "categories-button",
                1,
                "text-black",
                "font-bold",
                "flex",
                "items-center",
                "space-x-2",
                3,
                "click",
            ],
            [1, "fas", "fa-stream", "text-lg"],
            [
                "id",
                "categories-dropdown",
                "class",
                "absolute bg-white text-black shadow-md w-48 mt-2 rounded-md overflow-hidden z-50",
                4,
                "ngIf",
            ],
            [1, "flex", "space-x-6", "text-black", "hidden", "lg:flex"],
            [
                "routerLink",
                "/",
                "routerLinkActive",
                "text-green-700 font-bold",
                1,
                "hover:text-gray-500",
                3,
                "routerLinkActiveOptions",
            ],
            [
                "routerLink",
                "/top-vente",
                "routerLinkActive",
                "text-green-700 font-bold",
                1,
                "hover:text-gray-500",
                3,
                "routerLinkActiveOptions",
            ],
            [
                "routerLink",
                "/promo",
                "routerLinkActive",
                "text-green-700 font-bold",
                1,
                "hover:text-gray-500",
                3,
                "routerLinkActiveOptions",
            ],
            [
                "routerLink",
                "/new-arriving",
                "routerLinkActive",
                "text-green-700 font-bold",
                1,
                "hover:text-gray-500",
                3,
                "routerLinkActiveOptions",
            ],
            [
                "routerLink",
                "/about",
                "routerLinkActive",
                "text-green-700 font-bold",
                1,
                "hover:text-gray-500",
                3,
                "routerLinkActiveOptions",
            ],
            [1, "flex", "items-center", "space-x-6", "hidden", "lg:flex"],
            [1, "flex", "items-center", "text-black", "font-bold", 3, "click"],
            [1, "fas", "fa-user-circle", "text-xl"],
            [
                "class",
                "absolute right-0 bg-white text-black shadow-md rounded-md mt-2 z-50",
                4,
                "ngIf",
            ],
            ["routerLink", "/wishlist", 1, "text-black", "hover:text-gray-500"],
            [1, "fas", "fa-heart", "text-xl"],
            ["routerLink", "/cart", 1, "text-black", "hover:text-gray-500"],
            [1, "fas", "fa-shopping-cart", "text-xl"],
            [1, "lg:hidden"],
            [1, "text-black", 3, "click"],
            [1, "fas", "fa-bars", "text-xl"],
            [
                "class",
                " container mx-auto lg:hidden bg-white text-black px-4 py-4  z-50 absolute top-12 ",
                4,
                "ngIf",
            ],
            [1, "flex-1"],
            [1, "bg-black", "text-white", "py-6"],
            [1, "container", "mx-auto", "text-center"],
            [
                "id",
                "categories-dropdown",
                1,
                "absolute",
                "bg-white",
                "text-black",
                "shadow-md",
                "w-48",
                "mt-2",
                "rounded-md",
                "overflow-hidden",
                "z-50",
            ],
            [1, "py-2"],
            [
                "class",
                "px-4 py-2 hover:bg-gray-100 flex items-center space-x-3",
                4,
                "ngFor",
                "ngForOf",
            ],
            [
                1,
                "px-4",
                "py-2",
                "hover:bg-gray-100",
                "flex",
                "items-center",
                "space-x-3",
            ],
            [1, "w-full", "flex", "items-center", "space-x-3", 3, "routerLink"],
            ["class", "h-6 w-6 rounded-full", 3, "src", "alt", 4, "ngIf"],
            [1, "font-bold"],
            [1, "h-6", "w-6", "rounded-full", 3, "src", "alt"],
            [
                1,
                "absolute",
                "right-0",
                "bg-white",
                "text-black",
                "shadow-md",
                "rounded-md",
                "mt-2",
                "z-50",
            ],
            ["class", "px-4 py-2 hover:bg-gray-100", 4, "ngIf"],
            [1, "px-4", "py-2", "hover:bg-gray-100"],
            [1, "font-bold", "w-full", "cursor-pointer", "block", 3, "click"],
            [
                "routerLink",
                "/login-customer",
                1,
                "font-bold",
                "w-full",
                "block",
            ],
            ["routerLink", "/register", 1, "font-bold", "w-full", "block"],
            [
                1,
                "container",
                "mx-auto",
                "lg:hidden",
                "bg-white",
                "text-black",
                "px-4",
                "py-4",
                "z-50",
                "absolute",
                "top-12",
            ],
            [1, "space-y-4"],
            [
                "routerLink",
                "/",
                "routerLinkActive",
                "text-green-700 font-bold",
                1,
                "block",
                "font-bold",
                3,
                "routerLinkActiveOptions",
            ],
            [
                "routerLink",
                "/top-vente",
                "routerLinkActive",
                "text-green-700 font-bold",
                1,
                "block",
                "font-bold",
                3,
                "routerLinkActiveOptions",
            ],
            [
                "routerLink",
                "/promo",
                "routerLinkActive",
                "text-green-700 font-bold",
                1,
                "block",
                "font-bold",
                3,
                "routerLinkActiveOptions",
            ],
            [
                "routerLink",
                "/new-arriving",
                "routerLinkActive",
                "text-green-700 font-bold",
                1,
                "block",
                "font-bold",
                3,
                "routerLinkActiveOptions",
            ],
            [
                "routerLink",
                "/about",
                "routerLinkActive",
                "text-green-700 font-bold",
                1,
                "block",
                "font-bold",
                3,
                "routerLinkActiveOptions",
            ],
            [
                "routerLink",
                "/wishlist",
                "routerLinkActive",
                "text-green-700 font-bold",
                1,
                "block",
                "font-bold",
                3,
                "routerLinkActiveOptions",
            ],
            [
                "routerLink",
                "/cart",
                "routerLinkActive",
                "text-green-700 font-bold",
                1,
                "block",
                "font-bold",
                3,
                "routerLinkActiveOptions",
            ],
            [4, "ngIf"],
            ["class", "px-4 py-2 hover:bg-gray-100", 3, "click", 4, "ngIf"],
            [
                "routerLink",
                "/login-customer",
                "routerLinkActive",
                "text-green-700 font-bold",
                1,
                "block",
                "font-bold",
                3,
                "routerLinkActiveOptions",
            ],
            [
                "routerLink",
                "/register",
                "routerLinkActive",
                "text-green-700 font-bold",
                1,
                "block",
                "font-bold",
                3,
                "routerLinkActiveOptions",
            ],
            [1, "px-4", "py-2", "hover:bg-gray-100", 3, "click"],
            [1, "font-bold", "cursor-pointer"],
        ],
        template: function (e, r) {
            e & 1 &&
                (u(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3),
                A(4, "i", 4),
                u(5, "a", 5),
                d(6, "contact@example.com"),
                c()(),
                u(7, "div", 6)(8, "a", 7),
                A(9, "i", 8),
                c(),
                u(10, "a", 9),
                A(11, "i", 10),
                c()()(),
                u(12, "section", 11)(13, "div", 12),
                A(14, "img", 13),
                c()()(),
                u(15, "div", 14)(16, "div", 15)(17, "div", 16)(
                    18,
                    "button",
                    17
                ),
                E("click", function () {
                    return r.toggleDropdown();
                }),
                A(19, "i", 18),
                u(20, "span"),
                d(21, "Categories"),
                c()(),
                P(22, yh, 3, 1, "div", 19),
                c(),
                u(23, "div", 20)(24, "a", 21),
                d(25, "Acceuil"),
                c(),
                u(26, "a", 22),
                d(27, "Top Vente"),
                c(),
                u(28, "a", 23),
                d(29, "Promo"),
                c(),
                u(30, "a", 24),
                d(31, "Nouvel arrivage"),
                c(),
                u(32, "a", 25),
                d(33, "About"),
                c()(),
                u(34, "div", 26)(35, "div", 16)(36, "button", 27),
                E("click", function () {
                    return r.toggleProfileDropdown();
                }),
                A(37, "i", 28),
                c(),
                P(38, wh, 5, 3, "div", 29),
                c(),
                u(39, "a", 30),
                A(40, "i", 31),
                c(),
                u(41, "a", 32),
                A(42, "i", 33),
                c()(),
                u(43, "div", 34)(44, "button", 35),
                E("click", function () {
                    return r.toggleMenu();
                }),
                A(45, "i", 36),
                c()()(),
                P(46, xh, 21, 17, "div", 37),
                c(),
                u(47, "main", 38),
                A(48, "router-outlet"),
                c(),
                u(49, "footer", 39)(50, "div", 40)(51, "p"),
                d(52, "\xA9 2025 My Angular App. All Rights Reserved."),
                c()()()()),
                e & 2 &&
                    (p(22),
                    g("ngIf", r.isDropdownOpen),
                    p(2),
                    g("routerLinkActiveOptions", re(8, le)),
                    p(2),
                    g("routerLinkActiveOptions", re(9, le)),
                    p(2),
                    g("routerLinkActiveOptions", re(10, le)),
                    p(2),
                    g("routerLinkActiveOptions", re(11, le)),
                    p(2),
                    g("routerLinkActiveOptions", re(12, le)),
                    p(6),
                    g("ngIf", r.isProfileDropdownOpen),
                    p(8),
                    g("ngIf", r.isMobileMenuOpen));
        },
        dependencies: [_e, bt, ke, Dr, q, oe, te],
        encapsulation: 2,
    });
};
var Ah = (n) => ({ transform: n }),
    Ih = (n) => ({ backgroundImage: n });
function Dh(n, t) {
    if ((n & 1 && A(0, "img", 12), n & 2)) {
        let e = k().$implicit;
        ze("alt", e.name),
            g("src", "http://localhost:8000/storage/" + e.image, H);
    }
}
function Rh(n, t) {
    if (n & 1) {
        let e = Be();
        u(0, "div", 5),
            A(1, "div", 6),
            u(2, "div", 7)(3, "h2", 8),
            d(4),
            c(),
            P(5, Dh, 1, 2, "img", 9),
            u(6, "p", 10),
            d(7),
            nt(8, "slice"),
            c(),
            u(9, "button", 11),
            E("click", function () {
                let i = Ue(e).$implicit,
                    o = k();
                return $e(o.goToCategory(i.id));
            }),
            d(10, " Discover "),
            c()()();
    }
    if (n & 2) {
        let e = t.$implicit,
            r = k();
        g("ngStyle", He(8, Ih, "url(" + r.getImageUrl(e.cover_photo) + ")")),
            p(4),
            K(e.name),
            p(),
            g("ngIf", e.image),
            p(2),
            ee("", Et(8, 4, e.description, 0, 150), "...");
    }
}
var ri = class n {
    constructor(t, e) {
        this.categoryService = t;
        this.router = e;
    }
    categories = [];
    currentIndex = 0;
    ngOnInit() {
        this.loadCategories();
    }
    loadCategories() {
        this.categoryService.getCategories().subscribe(
            (t) => {
                (this.categories = t), this.startAutoScroll();
            },
            (t) => {
                console.error("Error loading categories:", t);
            }
        );
    }
    startAutoScroll() {
        setInterval(() => {
            this.categories.length > 0 &&
                (this.currentIndex =
                    (this.currentIndex + 1) % this.categories.length);
        }, 5e3);
    }
    goToCategory(t) {
        this.router.navigate(["/category", t]);
    }
    getImageUrl(t) {
        return t
            ? `http://localhost:8000/storage/${t}`
            : "http://localhost:8000/storage/default-image.jpg";
    }
    static ɵfac = function (e) {
        return new (e || n)(m(ne), m(R));
    };
    static ɵcmp = V({
        type: n,
        selectors: [["app-home"]],
        decls: 7,
        vars: 4,
        consts: [
            [1, "relative", "w-full", "h-[400px]", "overflow-hidden"],
            [
                1,
                "h-full",
                "flex",
                "transition-transform",
                "duration-500",
                3,
                "ngStyle",
            ],
            [
                "class",
                "flex-none w-full h-full bg-cover bg-center relative",
                3,
                "ngStyle",
                4,
                "ngFor",
                "ngForOf",
            ],
            [
                1,
                "absolute",
                "left-2",
                "top-1/2",
                "transform",
                "-translate-y-1/2",
                "bg-green-800",
                "text-white",
                "p-4",
                "rounded-full",
                "shadow-lg",
                "hover:bg-green-700",
                "transition-all",
                3,
                "click",
            ],
            [
                1,
                "absolute",
                "right-2",
                "top-1/2",
                "transform",
                "-translate-y-1/2",
                "bg-green-800",
                "text-white",
                "p-4",
                "rounded-full",
                "shadow-lg",
                "hover:bg-green-700",
                "transition-all",
                3,
                "click",
            ],
            [
                1,
                "flex-none",
                "w-full",
                "h-full",
                "bg-cover",
                "bg-center",
                "relative",
                3,
                "ngStyle",
            ],
            [1, "absolute", "inset-0", "bg-black", "opacity-50"],
            [
                1,
                "absolute",
                "inset-0",
                "flex",
                "flex-col",
                "justify-center",
                "items-center",
                "text-white",
                "p-8",
                "pr-12",
            ],
            [1, "text-4xl", "font-bold", "mb-4", "text-center"],
            [
                "class",
                "w-36 h-36 object-cover mb-4 border-2 border-white hover:border-green-700 transition-all",
                3,
                "src",
                "alt",
                4,
                "ngIf",
            ],
            [1, "text-lg", "mb-6", "text-center", "max-w-[800px]"],
            [
                1,
                "bg-green-700",
                "hover:bg-green-800",
                "text-white",
                "py-2",
                "px-6",
                "rounded-lg",
                3,
                "click",
            ],
            [
                1,
                "w-36",
                "h-36",
                "object-cover",
                "mb-4",
                "border-2",
                "border-white",
                "hover:border-green-700",
                "transition-all",
                3,
                "src",
                "alt",
            ],
        ],
        template: function (e, r) {
            e & 1 &&
                (u(0, "div", 0)(1, "div", 1),
                P(2, Rh, 11, 10, "div", 2),
                c(),
                u(3, "button", 3),
                E("click", function () {
                    return (r.currentIndex =
                        (r.currentIndex - 1 + r.categories.length) %
                        r.categories.length);
                }),
                d(4, " < "),
                c(),
                u(5, "button", 4),
                E("click", function () {
                    return (r.currentIndex =
                        (r.currentIndex + 1) % r.categories.length);
                }),
                d(6, " > "),
                c()()),
                e & 2 &&
                    (p(),
                    g(
                        "ngStyle",
                        He(2, Ah, "translateX(-" + r.currentIndex * 100 + "%)")
                    ),
                    p(),
                    g("ngForOf", r.categories));
        },
        dependencies: [q, oe, te, ps, At, _e],
        styles: [
            ".slider-wrapper[_ngcontent-%COMP%]{transition:transform .5s ease}",
        ],
    });
};
var ml = [
    { path: "", component: ni, children: [{ path: "", component: ri }] },
    {
        path: "admin",
        component: ei,
        canActivate: [Xr],
        children: [
            { path: "purchases", component: Qr },
            { path: "categories/create", component: Jr },
            { path: "categories/edit/:id", component: Yr },
            { path: "categories", component: Zr },
            { path: "products", component: Hr },
            { path: "products/create", component: Wr },
            { path: "products/edit/:id", component: qr },
        ],
    },
    { path: "login-customer", component: Br, canActivate: [zr] },
    { path: "login-admin", component: ti, canActivate: [Gr] },
];
var Th = "@",
    Oh = (() => {
        class n {
            doc;
            delegate;
            zone;
            animationType;
            moduleImpl;
            _rendererFactoryPromise = null;
            scheduler = b(zo, { optional: !0 });
            loadingSchedulerFn = b(Ph, { optional: !0 });
            _engine;
            constructor(e, r, i, o, s) {
                (this.doc = e),
                    (this.delegate = r),
                    (this.zone = i),
                    (this.animationType = o),
                    (this.moduleImpl = s);
            }
            ngOnDestroy() {
                this._engine?.flush();
            }
            loadImpl() {
                let e = () =>
                        this.moduleImpl ??
                        import("./chunk-G5SEW5JL.js").then((i) => i),
                    r;
                return (
                    this.loadingSchedulerFn
                        ? (r = this.loadingSchedulerFn(e))
                        : (r = e()),
                    r
                        .catch((i) => {
                            throw new L(5300, !1);
                        })
                        .then(
                            ({
                                ɵcreateEngine: i,
                                ɵAnimationRendererFactory: o,
                            }) => {
                                this._engine = i(this.animationType, this.doc);
                                let s = new o(
                                    this.delegate,
                                    this._engine,
                                    this.zone
                                );
                                return (this.delegate = s), s;
                            }
                        )
                );
            }
            createRenderer(e, r) {
                let i = this.delegate.createRenderer(e, r);
                if (i.ɵtype === 0) return i;
                typeof i.throwOnSyntheticProps == "boolean" &&
                    (i.throwOnSyntheticProps = !1);
                let o = new Mo(i);
                return (
                    r?.data?.animation &&
                        !this._rendererFactoryPromise &&
                        (this._rendererFactoryPromise = this.loadImpl()),
                    this._rendererFactoryPromise
                        ?.then((s) => {
                            let l = s.createRenderer(e, r);
                            o.use(l), this.scheduler?.notify(11);
                        })
                        .catch((s) => {
                            o.use(i);
                        }),
                    o
                );
            }
            begin() {
                this.delegate.begin?.();
            }
            end() {
                this.delegate.end?.();
            }
            whenRenderingDone() {
                return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
            }
            static ɵfac = function (r) {
                qn();
            };
            static ɵprov = w({ token: n, factory: n.ɵfac });
        }
        return n;
    })(),
    Mo = class {
        delegate;
        replay = [];
        ɵtype = 1;
        constructor(t) {
            this.delegate = t;
        }
        use(t) {
            if (((this.delegate = t), this.replay !== null)) {
                for (let e of this.replay) e(t);
                this.replay = null;
            }
        }
        get data() {
            return this.delegate.data;
        }
        destroy() {
            (this.replay = null), this.delegate.destroy();
        }
        createElement(t, e) {
            return this.delegate.createElement(t, e);
        }
        createComment(t) {
            return this.delegate.createComment(t);
        }
        createText(t) {
            return this.delegate.createText(t);
        }
        get destroyNode() {
            return this.delegate.destroyNode;
        }
        appendChild(t, e) {
            this.delegate.appendChild(t, e);
        }
        insertBefore(t, e, r, i) {
            this.delegate.insertBefore(t, e, r, i);
        }
        removeChild(t, e, r) {
            this.delegate.removeChild(t, e, r);
        }
        selectRootElement(t, e) {
            return this.delegate.selectRootElement(t, e);
        }
        parentNode(t) {
            return this.delegate.parentNode(t);
        }
        nextSibling(t) {
            return this.delegate.nextSibling(t);
        }
        setAttribute(t, e, r, i) {
            this.delegate.setAttribute(t, e, r, i);
        }
        removeAttribute(t, e, r) {
            this.delegate.removeAttribute(t, e, r);
        }
        addClass(t, e) {
            this.delegate.addClass(t, e);
        }
        removeClass(t, e) {
            this.delegate.removeClass(t, e);
        }
        setStyle(t, e, r, i) {
            this.delegate.setStyle(t, e, r, i);
        }
        removeStyle(t, e, r) {
            this.delegate.removeStyle(t, e, r);
        }
        setProperty(t, e, r) {
            this.shouldReplay(e) &&
                this.replay.push((i) => i.setProperty(t, e, r)),
                this.delegate.setProperty(t, e, r);
        }
        setValue(t, e) {
            this.delegate.setValue(t, e);
        }
        listen(t, e, r) {
            return (
                this.shouldReplay(e) &&
                    this.replay.push((i) => i.listen(t, e, r)),
                this.delegate.listen(t, e, r)
            );
        }
        shouldReplay(t) {
            return this.replay !== null && t.startsWith(Th);
        }
    },
    Ph = new D("");
function gl(n = "animations") {
    return (
        Wn("NgAsyncAnimations"),
        Ke([
            {
                provide: Xn,
                useFactory: (t, e, r) => new Oh(t, e, r, n),
                deps: [ie, lr, ve],
            },
            {
                provide: qo,
                useValue: n === "noop" ? "NoopAnimations" : "BrowserAnimations",
            },
        ])
    );
}
var vl = (n, t) => {
    let e = window.location.pathname,
        r = e.includes("login")
            ? ""
            : localStorage.getItem(
                  e.includes("/admin") ? "admin_token" : "token"
              );
    return (
        r && (n = n.clone({ setHeaders: { Authorization: `Bearer ${r}` } })),
        t(n)
    );
};
var yl = {
    providers: [is({ eventCoalescing: !0 }), ja(ml), Zs(), gl(), ks(Fs([vl]))],
};
var ii = class n {
    title = "frontend";
    static ɵfac = function (e) {
        return new (e || n)();
    };
    static ɵcmp = V({
        type: n,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [[1, "app-container"]],
        template: function (e, r) {
            e & 1 && (u(0, "div", 0), A(1, "router-outlet"), c());
        },
        dependencies: [bt],
        encapsulation: 2,
    });
};
qs(ii, yl).catch((n) => console.error(n));
