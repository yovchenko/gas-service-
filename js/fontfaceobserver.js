! function () {
    "use strict";

    function t(t) {
        c.push(t), 1 == c.length && r()
    }

    function e() {
        for (; c.length;) c[0](), c.shift()
    }

    function n(t) {
        this.a = l, this.b = void 0, this.f = [];
        var e = this;
        try {
            t(function (t) {
                i(e, t)
            }, function (t) {
                s(e, t)
            })
        } catch (t) {
            s(e, t)
        }
    }

    function o(t) {
        return new n(function (e) {
            e(t)
        })
    }

    function i(t, e) {
        if (t.a == l) {
            if (e == t) throw new TypeError;
            var n = !1;
            try {
                var o = e && e.then;
                if (null != e && "object" == typeof e && "function" == typeof o) return void o.call(e, function (e) {
                    n || i(t, e), n = !0
                }, function (e) {
                    n || s(t, e), n = !0
                })
            } catch (e) {
                return void(n || s(t, e))
            }
            t.a = 0, t.b = e, a(t)
        }
    }

    function s(t, e) {
        if (t.a == l) {
            if (e == t) throw new TypeError;
            t.a = 1, t.b = e, a(t)
        }
    }

    function a(e) {
        t(function () {
            if (e.a != l)
                for (; e.f.length;) {
                    var t = (i = e.f.shift())[0],
                        n = i[1],
                        o = i[2],
                        i = i[3];
                    try {
                        0 == e.a ? o("function" == typeof t ? t.call(void 0, e.b) : e.b) : 1 == e.a && ("function" == typeof n ? o(n.call(void 0, e.b)) : i(e.b))
                    } catch (t) {
                        i(t)
                    }
                }
        })
    }
    var r, c = [];
    r = function () {
        setTimeout(e)
    };
    var l = 2;
    n.prototype.g = function (t) {
        return this.c(void 0, t)
    }, n.prototype.c = function (t, e) {
        var o = this;
        return new n(function (n, i) {
            o.f.push([t, e, n, i]), a(o)
        })
    }, window.Promise || (window.Promise = n, window.Promise.resolve = o, window.Promise.reject = function (t) {
        return new n(function (e, n) {
            n(t)
        })
    }, window.Promise.race = function (t) {
        return new n(function (e, n) {
            for (var i = 0; i < t.length; i += 1) o(t[i]).c(e, n)
        })
    }, window.Promise.all = function (t) {
        return new n(function (e, n) {
            var i = 0,
                s = [];
            0 == t.length && e(s);
            for (var a = 0; a < t.length; a += 1) o(t[a]).c(function (n) {
                return function (o) {
                    s[n] = o, (i += 1) == t.length && e(s)
                }
            }(a), n)
        })
    }, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype.catch = n.prototype.g)
}(),
function () {
    function t(t, e) {
        document.addEventListener ? t.addEventListener("scroll", e, !1) : t.attachEvent("scroll", e)
    }

    function e(t) {
        document.body ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function e() {
            document.removeEventListener("DOMContentLoaded", e), t()
        }) : document.attachEvent("onreadystatechange", function e() {
            "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", e), t())
        })
    }

    function n(t) {
        this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(t)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c)
    }

    function o(t, e) {
        t.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + e + ";"
    }

    function i(t) {
        var e = t.a.offsetWidth,
            n = e + 100;
        return t.f.style.width = n + "px", t.c.scrollLeft = n, t.b.scrollLeft = t.b.scrollWidth + 100, t.g !== e && (t.g = e, !0)
    }

    function s(e, n) {
        function o() {
            var t = s;
            i(t) && t.a.parentNode && n(t.g)
        }
        var s = e;
        t(e.b, o), t(e.c, o), i(e)
    }

    function a(t, e) {
        var n = e || {};
        this.family = t, this.style = n.style || "normal", this.weight = n.weight || "normal", this.stretch = n.stretch || "normal"
    }

    function r() {
        if (null === u)
            if (c() && /Apple/.test(window.navigator.vendor)) {
                var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                u = !!t && 603 > parseInt(t[1], 10)
            } else u = !1;
        return u
    }

    function c() {
        return null === p && (p = !!document.fonts), p
    }

    function l() {
        if (null === h) {
            var t = document.createElement("div");
            try {
                t.style.font = "condensed 100px sans-serif"
            } catch (t) {}
            h = "" !== t.style.font
        }
        return h
    }

    function d(t, e) {
        return [t.style, t.weight, l() ? t.stretch : "", "100px", e].join(" ")
    }
    var f = null,
        u = null,
        h = null,
        p = null;
    a.prototype.load = function (t, i) {
        var a = this,
            l = t || "BESbswy",
            u = 0,
            h = i || 3e3,
            p = (new Date).getTime();
        return new Promise(function (t, i) {
            if (c() && !r()) {
                var m = new Promise(function (t, e) {
                        function n() {
                            (new Date).getTime() - p >= h ? e() : document.fonts.load(d(a, '"' + a.family + '"'), l).then(function (e) {
                                1 <= e.length ? t() : setTimeout(n, 25)
                            }, function () {
                                e()
                            })
                        }
                        n()
                    }),
                    w = new Promise(function (t, e) {
                        u = setTimeout(e, h)
                    });
                Promise.race([w, m]).then(function () {
                    clearTimeout(u), t(a)
                }, function () {
                    i(a)
                })
            } else e(function () {
                function e() {
                    var e;
                    (e = -1 != v && -1 != y || -1 != v && -1 != g || -1 != y && -1 != g) && ((e = v != y && v != g && y != g) || (null === f && (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), f = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))), e = f && (v == b && y == b && g == b || v == x && y == x && g == x || v == E && y == E && g == E)), e = !e), e && (T.parentNode && T.parentNode.removeChild(T), clearTimeout(u), t(a))
                }

                function r() {
                    if ((new Date).getTime() - p >= h) T.parentNode && T.parentNode.removeChild(T), i(a);
                    else {
                        var t = document.hidden;
                        !0 !== t && void 0 !== t || (v = c.a.offsetWidth, y = m.a.offsetWidth, g = w.a.offsetWidth, e()), u = setTimeout(r, 50)
                    }
                }
                var c = new n(l),
                    m = new n(l),
                    w = new n(l),
                    v = -1,
                    y = -1,
                    g = -1,
                    b = -1,
                    x = -1,
                    E = -1,
                    T = document.createElement("div");
                T.dir = "ltr", o(c, d(a, "sans-serif")), o(m, d(a, "serif")), o(w, d(a, "monospace")), T.appendChild(c.a), T.appendChild(m.a), T.appendChild(w.a), document.body.appendChild(T), b = c.a.offsetWidth, x = m.a.offsetWidth, E = w.a.offsetWidth, r(), s(c, function (t) {
                    v = t, e()
                }), o(c, d(a, '"' + a.family + '",sans-serif')), s(m, function (t) {
                    y = t, e()
                }), o(m, d(a, '"' + a.family + '",serif')), s(w, function (t) {
                    g = t, e()
                }), o(w, d(a, '"' + a.family + '",monospace'))
            })
        })
    }, "object" == typeof module ? module.exports = a : (window.FontFaceObserver = a, window.FontFaceObserver.prototype.load = a.prototype.load)
}();
