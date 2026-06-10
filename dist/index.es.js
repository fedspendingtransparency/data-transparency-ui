import e, { Children as t, cloneElement as n, createElement as r, isValidElement as i, useCallback as a, useEffect as o, useId as s, useRef as c, useState as l } from "react";
import u, { oneOf as d, oneOfType as f, shape as p } from "prop-types";
import m from "accounting";
import { debounce as h, range as g, startCase as _, throttle as v, union as y, uniqueId as b } from "lodash-es";
import { Fragment as x, jsx as S, jsxs as C } from "react/jsx-runtime";
import w from "react-dom";
//#region \0rolldown/runtime.js
var T = Object.create, E = Object.defineProperty, D = Object.getOwnPropertyDescriptor, O = Object.getOwnPropertyNames, k = Object.getPrototypeOf, A = Object.prototype.hasOwnProperty, j = (e, t) => () => (e && (t = e(e = 0)), t), M = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), N = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = O(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !A.call(e, s) && s !== n && E(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = D(t, s)) || r.enumerable
	});
	return e;
}, P = (e, t, n) => (n = e == null ? {} : T(k(e)), N(t || !e || !e.__esModule ? E(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), F = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
//#endregion
//#region node_modules/vite-plugin-node-polyfills/shims/process/dist/index.js
function I(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function L() {
	throw Error("setTimeout has not been defined");
}
function R() {
	throw Error("clearTimeout has not been defined");
}
function z(e) {
	if (H === setTimeout) return setTimeout(e, 0);
	if ((H === L || !H) && setTimeout) return H = setTimeout, setTimeout(e, 0);
	try {
		return H(e, 0);
	} catch {
		try {
			return H.call(null, e, 0);
		} catch {
			return H.call(this, e, 0);
		}
	}
}
function ee(e) {
	if (U === clearTimeout) return clearTimeout(e);
	if ((U === R || !U) && clearTimeout) return U = clearTimeout, clearTimeout(e);
	try {
		return U(e);
	} catch {
		try {
			return U.call(null, e);
		} catch {
			return U.call(this, e);
		}
	}
}
function te() {
	!G || !ae || (G = !1, ae.length ? W = ae.concat(W) : oe = -1, W.length && ne());
}
function ne() {
	if (!G) {
		var e = z(te);
		G = !0;
		for (var t = W.length; t;) {
			for (ae = W, W = []; ++oe < t;) ae && ae[oe].run();
			oe = -1, t = W.length;
		}
		ae = null, G = !1, ee(e);
	}
}
function re(e, t) {
	this.fun = e, this.array = t;
}
function B() {}
var ie, V, H, U, W, G, ae, oe, se, K, ce = j((() => {
	ie = { exports: {} }, V = ie.exports = {}, (function() {
		try {
			H = typeof setTimeout == "function" ? setTimeout : L;
		} catch {
			H = L;
		}
		try {
			U = typeof clearTimeout == "function" ? clearTimeout : R;
		} catch {
			U = R;
		}
	})(), W = [], G = !1, oe = -1, V.nextTick = function(e) {
		var t = Array(arguments.length - 1);
		if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
		W.push(new re(e, t)), W.length === 1 && !G && z(ne);
	}, re.prototype.run = function() {
		this.fun.apply(null, this.array);
	}, V.title = "browser", V.browser = !0, V.env = {}, V.argv = [], V.version = "", V.versions = {}, V.on = B, V.addListener = B, V.once = B, V.off = B, V.removeListener = B, V.removeAllListeners = B, V.emit = B, V.prependListener = B, V.prependOnceListener = B, V.listeners = function(e) {
		return [];
	}, V.binding = function(e) {
		throw Error("process.binding is not supported");
	}, V.cwd = function() {
		return "/";
	}, V.chdir = function(e) {
		throw Error("process.chdir is not supported");
	}, V.umask = function() {
		return 0;
	}, se = ie.exports, K = /*@__PURE__*/ I(se);
})), le = /* @__PURE__ */ M(((e) => {
	var t = F("react").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	e.c = function(e) {
		return t.H.useMemoCache(e);
	};
})), ue = /* @__PURE__ */ M(((e) => {
	ce(), K.env.NODE_ENV !== "production" && (function() {
		var t = F("react").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
		e.c = function(e) {
			var n = t.H;
			return n === null && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), n.useMemoCache(e);
		};
	})();
})), q = (/* @__PURE__ */ M(((e, t) => {
	ce(), K.env.NODE_ENV === "production" ? t.exports = le() : t.exports = ue();
})))(), de = {
	symbol: "$",
	precision: 0,
	format: {
		pos: "%s%v",
		neg: "-%s%v",
		zero: "%s%v"
	}
}, fe = {
	TRILLION: 0xe8d4a51000,
	BILLION: 1e9,
	MILLION: 1e6,
	THOUSAND: 1e3
}, pe = {
	TRILLION: "T",
	BILLION: "B",
	MILLION: "M",
	THOUSAND: "k"
}, me = {
	TRILLION: "trillion",
	BILLION: "billion",
	MILLION: "million",
	THOUSAND: "thousand"
}, he = (e) => m.formatMoney(e, de), ge = (e, t) => {
	let n = Object.assign({}, de, { precision: t });
	return m.formatMoney(e, n);
}, _e = (e) => {
	let t = Math.abs(e), n = 1, r = "", i = "";
	return t >= fe.TRILLION ? (n = fe.TRILLION, r = pe.TRILLION, i = me.TRILLION) : t >= fe.BILLION ? (n = fe.BILLION, r = pe.BILLION, i = me.BILLION) : t >= fe.MILLION ? (n = fe.MILLION, r = pe.MILLION, i = me.MILLION) : t >= fe.THOUSAND && (n = fe.THOUSAND, r = pe.THOUSAND, i = me.THOUSAND), {
		unit: n,
		unitLabel: r,
		longLabel: i
	};
}, ve = (e) => {
	let t = Object.assign({}, de, { symbol: "" });
	return m.formatMoney(e, t);
}, ye = (e, t) => {
	let n = Object.assign({}, de, {
		symbol: "",
		precision: t
	});
	return m.formatMoney(e, n);
}, be = (e, t, n) => {
	let r = (e - 1) * t + 1, i = e * t;
	return e === Math.ceil(n / t) && (i = n), {
		start: r,
		end: i
	};
};
//#endregion
//#region node_modules/@fortawesome/fontawesome-svg-core/index.mjs
ce();
function xe(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Se(e) {
	if (Array.isArray(e)) return e;
}
function Ce(e) {
	if (Array.isArray(e)) return xe(e);
}
function we(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function Te(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ie(r.key), r);
	}
}
function Ee(e, t, n) {
	return t && Te(e.prototype, t), n && Te(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function De(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = Re(e)) || t && e && typeof e.length == "number") {
			n && (e = n);
			var r = 0, i = function() {};
			return {
				s: i,
				n: function() {
					return r >= e.length ? { done: !0 } : {
						done: !1,
						value: e[r++]
					};
				},
				e: function(e) {
					throw e;
				},
				f: i
			};
		}
		throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var a, o = !0, s = !1;
	return {
		s: function() {
			n = n.call(e);
		},
		n: function() {
			var e = n.next();
			return o = e.done, e;
		},
		e: function(e) {
			s = !0, a = e;
		},
		f: function() {
			try {
				o || n.return == null || n.return();
			} finally {
				if (s) throw a;
			}
		}
	};
}
function J(e, t, n) {
	return (t = Ie(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Oe(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ke(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function Ae() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function je() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Me(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Y(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Me(Object(n), !0).forEach(function(t) {
			J(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Me(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ne(e, t) {
	return Se(e) || ke(e, t) || Re(e, t) || Ae();
}
function Pe(e) {
	return Ce(e) || Oe(e) || Re(e) || je();
}
function Fe(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Ie(e) {
	var t = Fe(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Le(e) {
	"@babel/helpers - typeof";
	return Le = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Le(e);
}
function Re(e, t) {
	if (e) {
		if (typeof e == "string") return xe(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xe(e, t) : void 0;
	}
}
var ze = function() {}, Be = {}, Ve = {}, He = null, Ue = {
	mark: ze,
	measure: ze
};
try {
	typeof window < "u" && (Be = window), typeof document < "u" && (Ve = document), typeof MutationObserver < "u" && (He = MutationObserver), typeof performance < "u" && (Ue = performance);
} catch {}
var We = (Be.navigator || {}).userAgent, Ge = We === void 0 ? "" : We, Ke = Be, X = Ve, qe = He, Je = Ue;
Ke.document;
var Ye = !!X.documentElement && !!X.head && typeof X.addEventListener == "function" && typeof X.createElement == "function", Xe = ~Ge.indexOf("MSIE") || ~Ge.indexOf("Trident/"), Ze, Qe = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, $e = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i, et = {
	classic: {
		fa: "solid",
		fas: "solid",
		"fa-solid": "solid",
		far: "regular",
		"fa-regular": "regular",
		fal: "light",
		"fa-light": "light",
		fat: "thin",
		"fa-thin": "thin",
		fab: "brands",
		"fa-brands": "brands"
	},
	duotone: {
		fa: "solid",
		fad: "solid",
		"fa-solid": "solid",
		"fa-duotone": "solid",
		fadr: "regular",
		"fa-regular": "regular",
		fadl: "light",
		"fa-light": "light",
		fadt: "thin",
		"fa-thin": "thin"
	},
	sharp: {
		fa: "solid",
		fass: "solid",
		"fa-solid": "solid",
		fasr: "regular",
		"fa-regular": "regular",
		fasl: "light",
		"fa-light": "light",
		fast: "thin",
		"fa-thin": "thin"
	},
	"sharp-duotone": {
		fa: "solid",
		fasds: "solid",
		"fa-solid": "solid",
		fasdr: "regular",
		"fa-regular": "regular",
		fasdl: "light",
		"fa-light": "light",
		fasdt: "thin",
		"fa-thin": "thin"
	},
	slab: {
		"fa-regular": "regular",
		faslr: "regular"
	},
	"slab-press": {
		"fa-regular": "regular",
		faslpr: "regular"
	},
	thumbprint: {
		"fa-light": "light",
		fatl: "light"
	},
	whiteboard: {
		"fa-semibold": "semibold",
		fawsb: "semibold"
	},
	notdog: {
		"fa-solid": "solid",
		fans: "solid"
	},
	"notdog-duo": {
		"fa-solid": "solid",
		fands: "solid"
	},
	etch: {
		"fa-solid": "solid",
		faes: "solid"
	},
	graphite: {
		"fa-thin": "thin",
		fagt: "thin"
	},
	jelly: {
		"fa-regular": "regular",
		fajr: "regular"
	},
	"jelly-fill": {
		"fa-regular": "regular",
		fajfr: "regular"
	},
	"jelly-duo": {
		"fa-regular": "regular",
		fajdr: "regular"
	},
	chisel: {
		"fa-regular": "regular",
		facr: "regular"
	},
	utility: {
		"fa-semibold": "semibold",
		fausb: "semibold"
	},
	"utility-duo": {
		"fa-semibold": "semibold",
		faudsb: "semibold"
	},
	"utility-fill": {
		"fa-semibold": "semibold",
		faufsb: "semibold"
	}
}, tt = {
	GROUP: "duotone-group",
	SWAP_OPACITY: "swap-opacity",
	PRIMARY: "primary",
	SECONDARY: "secondary"
}, nt = [
	"fa-classic",
	"fa-duotone",
	"fa-sharp",
	"fa-sharp-duotone",
	"fa-thumbprint",
	"fa-whiteboard",
	"fa-notdog",
	"fa-notdog-duo",
	"fa-chisel",
	"fa-etch",
	"fa-graphite",
	"fa-jelly",
	"fa-jelly-fill",
	"fa-jelly-duo",
	"fa-slab",
	"fa-slab-press",
	"fa-utility",
	"fa-utility-duo",
	"fa-utility-fill"
], Z = "classic", rt = "duotone", it = "sharp", at = "sharp-duotone", ot = "chisel", st = "etch", ct = "graphite", lt = "jelly", ut = "jelly-duo", dt = "jelly-fill", ft = "notdog", pt = "notdog-duo", mt = "slab", ht = "slab-press", gt = "thumbprint", _t = "utility", vt = "utility-duo", yt = "utility-fill", bt = "whiteboard", xt = "Classic", St = "Duotone", Ct = "Sharp", wt = "Sharp Duotone", Tt = "Chisel", Et = "Etch", Dt = "Graphite", Ot = "Jelly", kt = "Jelly Duo", At = "Jelly Fill", jt = "Notdog", Mt = "Notdog Duo", Nt = "Slab", Pt = "Slab Press", Ft = "Thumbprint", It = "Utility", Lt = "Utility Duo", Rt = "Utility Fill", zt = "Whiteboard", Bt = [
	Z,
	rt,
	it,
	at,
	ot,
	st,
	ct,
	lt,
	ut,
	dt,
	ft,
	pt,
	mt,
	ht,
	gt,
	_t,
	vt,
	yt,
	bt
];
Ze = {}, J(J(J(J(J(J(J(J(J(J(Ze, Z, xt), rt, St), it, Ct), at, wt), ot, Tt), st, Et), ct, Dt), lt, Ot), ut, kt), dt, At), J(J(J(J(J(J(J(J(J(Ze, ft, jt), pt, Mt), mt, Nt), ht, Pt), gt, Ft), _t, It), vt, Lt), yt, Rt), bt, zt);
var Vt = {
	classic: {
		900: "fas",
		400: "far",
		normal: "far",
		300: "fal",
		100: "fat"
	},
	duotone: {
		900: "fad",
		400: "fadr",
		300: "fadl",
		100: "fadt"
	},
	sharp: {
		900: "fass",
		400: "fasr",
		300: "fasl",
		100: "fast"
	},
	"sharp-duotone": {
		900: "fasds",
		400: "fasdr",
		300: "fasdl",
		100: "fasdt"
	},
	slab: { 400: "faslr" },
	"slab-press": { 400: "faslpr" },
	whiteboard: { 600: "fawsb" },
	thumbprint: { 300: "fatl" },
	notdog: { 900: "fans" },
	"notdog-duo": { 900: "fands" },
	etch: { 900: "faes" },
	graphite: { 100: "fagt" },
	chisel: { 400: "facr" },
	jelly: { 400: "fajr" },
	"jelly-fill": { 400: "fajfr" },
	"jelly-duo": { 400: "fajdr" },
	utility: { 600: "fausb" },
	"utility-duo": { 600: "faudsb" },
	"utility-fill": { 600: "faufsb" }
}, Ht = {
	"Font Awesome 7 Free": {
		900: "fas",
		400: "far"
	},
	"Font Awesome 7 Pro": {
		900: "fas",
		400: "far",
		normal: "far",
		300: "fal",
		100: "fat"
	},
	"Font Awesome 7 Brands": {
		400: "fab",
		normal: "fab"
	},
	"Font Awesome 7 Duotone": {
		900: "fad",
		400: "fadr",
		normal: "fadr",
		300: "fadl",
		100: "fadt"
	},
	"Font Awesome 7 Sharp": {
		900: "fass",
		400: "fasr",
		normal: "fasr",
		300: "fasl",
		100: "fast"
	},
	"Font Awesome 7 Sharp Duotone": {
		900: "fasds",
		400: "fasdr",
		normal: "fasdr",
		300: "fasdl",
		100: "fasdt"
	},
	"Font Awesome 7 Jelly": {
		400: "fajr",
		normal: "fajr"
	},
	"Font Awesome 7 Jelly Fill": {
		400: "fajfr",
		normal: "fajfr"
	},
	"Font Awesome 7 Jelly Duo": {
		400: "fajdr",
		normal: "fajdr"
	},
	"Font Awesome 7 Slab": {
		400: "faslr",
		normal: "faslr"
	},
	"Font Awesome 7 Slab Press": {
		400: "faslpr",
		normal: "faslpr"
	},
	"Font Awesome 7 Thumbprint": {
		300: "fatl",
		normal: "fatl"
	},
	"Font Awesome 7 Notdog": {
		900: "fans",
		normal: "fans"
	},
	"Font Awesome 7 Notdog Duo": {
		900: "fands",
		normal: "fands"
	},
	"Font Awesome 7 Etch": {
		900: "faes",
		normal: "faes"
	},
	"Font Awesome 7 Graphite": {
		100: "fagt",
		normal: "fagt"
	},
	"Font Awesome 7 Chisel": {
		400: "facr",
		normal: "facr"
	},
	"Font Awesome 7 Whiteboard": {
		600: "fawsb",
		normal: "fawsb"
	},
	"Font Awesome 7 Utility": {
		600: "fausb",
		normal: "fausb"
	},
	"Font Awesome 7 Utility Duo": {
		600: "faudsb",
		normal: "faudsb"
	},
	"Font Awesome 7 Utility Fill": {
		600: "faufsb",
		normal: "faufsb"
	}
}, Ut = new Map([
	["classic", {
		defaultShortPrefixId: "fas",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin",
			"brands"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["duotone", {
		defaultShortPrefixId: "fad",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["sharp", {
		defaultShortPrefixId: "fass",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["sharp-duotone", {
		defaultShortPrefixId: "fasds",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["chisel", {
		defaultShortPrefixId: "facr",
		defaultStyleId: "regular",
		styleIds: ["regular"],
		futureStyleIds: [],
		defaultFontWeight: 400
	}],
	["etch", {
		defaultShortPrefixId: "faes",
		defaultStyleId: "solid",
		styleIds: ["solid"],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["graphite", {
		defaultShortPrefixId: "fagt",
		defaultStyleId: "thin",
		styleIds: ["thin"],
		futureStyleIds: [],
		defaultFontWeight: 100
	}],
	["jelly", {
		defaultShortPrefixId: "fajr",
		defaultStyleId: "regular",
		styleIds: ["regular"],
		futureStyleIds: [],
		defaultFontWeight: 400
	}],
	["jelly-duo", {
		defaultShortPrefixId: "fajdr",
		defaultStyleId: "regular",
		styleIds: ["regular"],
		futureStyleIds: [],
		defaultFontWeight: 400
	}],
	["jelly-fill", {
		defaultShortPrefixId: "fajfr",
		defaultStyleId: "regular",
		styleIds: ["regular"],
		futureStyleIds: [],
		defaultFontWeight: 400
	}],
	["notdog", {
		defaultShortPrefixId: "fans",
		defaultStyleId: "solid",
		styleIds: ["solid"],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["notdog-duo", {
		defaultShortPrefixId: "fands",
		defaultStyleId: "solid",
		styleIds: ["solid"],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["slab", {
		defaultShortPrefixId: "faslr",
		defaultStyleId: "regular",
		styleIds: ["regular"],
		futureStyleIds: [],
		defaultFontWeight: 400
	}],
	["slab-press", {
		defaultShortPrefixId: "faslpr",
		defaultStyleId: "regular",
		styleIds: ["regular"],
		futureStyleIds: [],
		defaultFontWeight: 400
	}],
	["thumbprint", {
		defaultShortPrefixId: "fatl",
		defaultStyleId: "light",
		styleIds: ["light"],
		futureStyleIds: [],
		defaultFontWeight: 300
	}],
	["utility", {
		defaultShortPrefixId: "fausb",
		defaultStyleId: "semibold",
		styleIds: ["semibold"],
		futureStyleIds: [],
		defaultFontWeight: 600
	}],
	["utility-duo", {
		defaultShortPrefixId: "faudsb",
		defaultStyleId: "semibold",
		styleIds: ["semibold"],
		futureStyleIds: [],
		defaultFontWeight: 600
	}],
	["utility-fill", {
		defaultShortPrefixId: "faufsb",
		defaultStyleId: "semibold",
		styleIds: ["semibold"],
		futureStyleIds: [],
		defaultFontWeight: 600
	}],
	["whiteboard", {
		defaultShortPrefixId: "fawsb",
		defaultStyleId: "semibold",
		styleIds: ["semibold"],
		futureStyleIds: [],
		defaultFontWeight: 600
	}]
]), Wt = {
	chisel: { regular: "facr" },
	classic: {
		brands: "fab",
		light: "fal",
		regular: "far",
		solid: "fas",
		thin: "fat"
	},
	duotone: {
		light: "fadl",
		regular: "fadr",
		solid: "fad",
		thin: "fadt"
	},
	etch: { solid: "faes" },
	graphite: { thin: "fagt" },
	jelly: { regular: "fajr" },
	"jelly-duo": { regular: "fajdr" },
	"jelly-fill": { regular: "fajfr" },
	notdog: { solid: "fans" },
	"notdog-duo": { solid: "fands" },
	sharp: {
		light: "fasl",
		regular: "fasr",
		solid: "fass",
		thin: "fast"
	},
	"sharp-duotone": {
		light: "fasdl",
		regular: "fasdr",
		solid: "fasds",
		thin: "fasdt"
	},
	slab: { regular: "faslr" },
	"slab-press": { regular: "faslpr" },
	thumbprint: { light: "fatl" },
	utility: { semibold: "fausb" },
	"utility-duo": { semibold: "faudsb" },
	"utility-fill": { semibold: "faufsb" },
	whiteboard: { semibold: "fawsb" }
}, Gt = [
	"fak",
	"fa-kit",
	"fakd",
	"fa-kit-duotone"
], Kt = {
	kit: {
		fak: "kit",
		"fa-kit": "kit"
	},
	"kit-duotone": {
		fakd: "kit-duotone",
		"fa-kit-duotone": "kit-duotone"
	}
}, qt = ["kit"];
J(J({}, "kit", "Kit"), "kit-duotone", "Kit Duotone");
var Jt = {
	kit: { "fa-kit": "fak" },
	"kit-duotone": { "fa-kit-duotone": "fakd" }
}, Yt = {
	"Font Awesome Kit": {
		400: "fak",
		normal: "fak"
	},
	"Font Awesome Kit Duotone": {
		400: "fakd",
		normal: "fakd"
	}
}, Xt = {
	kit: { fak: "fa-kit" },
	"kit-duotone": { fakd: "fa-kit-duotone" }
}, Zt = {
	kit: { kit: "fak" },
	"kit-duotone": { "kit-duotone": "fakd" }
}, Qt, $t = {
	GROUP: "duotone-group",
	SWAP_OPACITY: "swap-opacity",
	PRIMARY: "primary",
	SECONDARY: "secondary"
}, en = [
	"fa-classic",
	"fa-duotone",
	"fa-sharp",
	"fa-sharp-duotone",
	"fa-thumbprint",
	"fa-whiteboard",
	"fa-notdog",
	"fa-notdog-duo",
	"fa-chisel",
	"fa-etch",
	"fa-graphite",
	"fa-jelly",
	"fa-jelly-fill",
	"fa-jelly-duo",
	"fa-slab",
	"fa-slab-press",
	"fa-utility",
	"fa-utility-duo",
	"fa-utility-fill"
];
Qt = {}, J(J(J(J(J(J(J(J(J(J(Qt, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), J(J(J(J(J(J(J(J(J(Qt, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), J(J({}, "kit", "Kit"), "kit-duotone", "Kit Duotone");
var tn = {
	classic: {
		"fa-brands": "fab",
		"fa-duotone": "fad",
		"fa-light": "fal",
		"fa-regular": "far",
		"fa-solid": "fas",
		"fa-thin": "fat"
	},
	duotone: {
		"fa-regular": "fadr",
		"fa-light": "fadl",
		"fa-thin": "fadt"
	},
	sharp: {
		"fa-solid": "fass",
		"fa-regular": "fasr",
		"fa-light": "fasl",
		"fa-thin": "fast"
	},
	"sharp-duotone": {
		"fa-solid": "fasds",
		"fa-regular": "fasdr",
		"fa-light": "fasdl",
		"fa-thin": "fasdt"
	},
	slab: { "fa-regular": "faslr" },
	"slab-press": { "fa-regular": "faslpr" },
	whiteboard: { "fa-semibold": "fawsb" },
	thumbprint: { "fa-light": "fatl" },
	notdog: { "fa-solid": "fans" },
	"notdog-duo": { "fa-solid": "fands" },
	etch: { "fa-solid": "faes" },
	graphite: { "fa-thin": "fagt" },
	jelly: { "fa-regular": "fajr" },
	"jelly-fill": { "fa-regular": "fajfr" },
	"jelly-duo": { "fa-regular": "fajdr" },
	chisel: { "fa-regular": "facr" },
	utility: { "fa-semibold": "fausb" },
	"utility-duo": { "fa-semibold": "faudsb" },
	"utility-fill": { "fa-semibold": "faufsb" }
}, nn = {
	classic: [
		"fas",
		"far",
		"fal",
		"fat",
		"fad"
	],
	duotone: [
		"fadr",
		"fadl",
		"fadt"
	],
	sharp: [
		"fass",
		"fasr",
		"fasl",
		"fast"
	],
	"sharp-duotone": [
		"fasds",
		"fasdr",
		"fasdl",
		"fasdt"
	],
	slab: ["faslr"],
	"slab-press": ["faslpr"],
	whiteboard: ["fawsb"],
	thumbprint: ["fatl"],
	notdog: ["fans"],
	"notdog-duo": ["fands"],
	etch: ["faes"],
	graphite: ["fagt"],
	jelly: ["fajr"],
	"jelly-fill": ["fajfr"],
	"jelly-duo": ["fajdr"],
	chisel: ["facr"],
	utility: ["fausb"],
	"utility-duo": ["faudsb"],
	"utility-fill": ["faufsb"]
}, rn = {
	classic: {
		fab: "fa-brands",
		fad: "fa-duotone",
		fal: "fa-light",
		far: "fa-regular",
		fas: "fa-solid",
		fat: "fa-thin"
	},
	duotone: {
		fadr: "fa-regular",
		fadl: "fa-light",
		fadt: "fa-thin"
	},
	sharp: {
		fass: "fa-solid",
		fasr: "fa-regular",
		fasl: "fa-light",
		fast: "fa-thin"
	},
	"sharp-duotone": {
		fasds: "fa-solid",
		fasdr: "fa-regular",
		fasdl: "fa-light",
		fasdt: "fa-thin"
	},
	slab: { faslr: "fa-regular" },
	"slab-press": { faslpr: "fa-regular" },
	whiteboard: { fawsb: "fa-semibold" },
	thumbprint: { fatl: "fa-light" },
	notdog: { fans: "fa-solid" },
	"notdog-duo": { fands: "fa-solid" },
	etch: { faes: "fa-solid" },
	graphite: { fagt: "fa-thin" },
	jelly: { fajr: "fa-regular" },
	"jelly-fill": { fajfr: "fa-regular" },
	"jelly-duo": { fajdr: "fa-regular" },
	chisel: { facr: "fa-regular" },
	utility: { fausb: "fa-semibold" },
	"utility-duo": { faudsb: "fa-semibold" },
	"utility-fill": { faufsb: "fa-semibold" }
}, an = (/* @__PURE__ */ "fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb".split(".")).concat(en, [
	"fa-solid",
	"fa-regular",
	"fa-light",
	"fa-thin",
	"fa-duotone",
	"fa-brands",
	"fa-semibold"
]), on = [
	"solid",
	"regular",
	"light",
	"thin",
	"duotone",
	"brands",
	"semibold"
], sn = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10
], cn = sn.concat([
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20
]), ln = [].concat(Pe(Object.keys(nn)), on, [
	"aw",
	"fw",
	"pull-left",
	"pull-right"
], [
	"2xs",
	"xs",
	"sm",
	"lg",
	"xl",
	"2xl",
	"beat",
	"border",
	"fade",
	"beat-fade",
	"bounce",
	"flip-both",
	"flip-horizontal",
	"flip-vertical",
	"flip",
	"inverse",
	"layers",
	"layers-bottom-left",
	"layers-bottom-right",
	"layers-counter",
	"layers-text",
	"layers-top-left",
	"layers-top-right",
	"li",
	"pull-end",
	"pull-start",
	"pulse",
	"rotate-180",
	"rotate-270",
	"rotate-90",
	"rotate-by",
	"shake",
	"spin-pulse",
	"spin-reverse",
	"spin",
	"stack-1x",
	"stack-2x",
	"stack",
	"ul",
	"width-auto",
	"width-fixed",
	$t.GROUP,
	$t.SWAP_OPACITY,
	$t.PRIMARY,
	$t.SECONDARY
], sn.map(function(e) {
	return `${e}x`;
}), cn.map(function(e) {
	return `w-${e}`;
})), un = {
	"Font Awesome 5 Free": {
		900: "fas",
		400: "far"
	},
	"Font Awesome 5 Pro": {
		900: "fas",
		400: "far",
		normal: "far",
		300: "fal"
	},
	"Font Awesome 5 Brands": {
		400: "fab",
		normal: "fab"
	},
	"Font Awesome 5 Duotone": { 900: "fad" }
}, dn = "___FONT_AWESOME___", fn = 16, pn = "fa", mn = "svg-inline--fa", hn = "data-fa-i2svg", gn = "data-fa-pseudo-element", _n = "data-fa-pseudo-element-pending", vn = "data-prefix", yn = "data-icon", bn = "fontawesome-i2svg", xn = "async", Sn = [
	"HTML",
	"HEAD",
	"STYLE",
	"SCRIPT"
], Cn = [
	"::before",
	"::after",
	":before",
	":after"
], wn = function() {
	try {
		return K.env.NODE_ENV === "production";
	} catch {
		return !1;
	}
}();
function Tn(e) {
	return new Proxy(e, { get: function(e, t) {
		return t in e ? e[t] : e[Z];
	} });
}
var En = Y({}, et);
En[Z] = Y(Y(Y(Y({}, { "fa-duotone": "duotone" }), et[Z]), Kt.kit), Kt["kit-duotone"]);
var Dn = Tn(En), On = Y({}, Wt);
On[Z] = Y(Y(Y(Y({}, { duotone: "fad" }), On[Z]), Zt.kit), Zt["kit-duotone"]);
var kn = Tn(On), An = Y({}, rn);
An[Z] = Y(Y({}, An[Z]), Xt.kit);
var jn = Tn(An), Mn = Y({}, tn);
Mn[Z] = Y(Y({}, Mn[Z]), Jt.kit), Tn(Mn);
var Nn = Qe, Pn = "fa-layers-text", Fn = $e;
Tn(Y({}, Vt));
var In = [
	"class",
	"data-prefix",
	"data-icon",
	"data-fa-transform",
	"data-fa-mask"
], Ln = tt, Rn = [].concat(Pe(qt), Pe(ln)), zn = Ke.FontAwesomeConfig || {};
function Bn(e) {
	var t = X.querySelector("script[" + e + "]");
	if (t) return t.getAttribute(e);
}
function Vn(e) {
	return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
X && typeof X.querySelector == "function" && [
	["data-family-prefix", "familyPrefix"],
	["data-css-prefix", "cssPrefix"],
	["data-family-default", "familyDefault"],
	["data-style-default", "styleDefault"],
	["data-replacement-class", "replacementClass"],
	["data-auto-replace-svg", "autoReplaceSvg"],
	["data-auto-add-css", "autoAddCss"],
	["data-search-pseudo-elements", "searchPseudoElements"],
	["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"],
	["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"],
	["data-observe-mutations", "observeMutations"],
	["data-mutate-approach", "mutateApproach"],
	["data-keep-original-source", "keepOriginalSource"],
	["data-measure-performance", "measurePerformance"],
	["data-show-missing-icons", "showMissingIcons"]
].forEach(function(e) {
	var t = Ne(e, 2), n = t[0], r = t[1], i = Vn(Bn(n));
	i != null && (zn[r] = i);
});
var Hn = {
	styleDefault: "solid",
	familyDefault: Z,
	cssPrefix: pn,
	replacementClass: mn,
	autoReplaceSvg: !0,
	autoAddCss: !0,
	searchPseudoElements: !1,
	searchPseudoElementsWarnings: !0,
	searchPseudoElementsFullScan: !1,
	observeMutations: !0,
	mutateApproach: "async",
	keepOriginalSource: !0,
	measurePerformance: !1,
	showMissingIcons: !0
};
zn.familyPrefix && (zn.cssPrefix = zn.familyPrefix);
var Un = Y(Y({}, Hn), zn);
Un.autoReplaceSvg || (Un.observeMutations = !1);
var Q = {};
Object.keys(Hn).forEach(function(e) {
	Object.defineProperty(Q, e, {
		enumerable: !0,
		set: function(t) {
			Un[e] = t, Wn.forEach(function(e) {
				return e(Q);
			});
		},
		get: function() {
			return Un[e];
		}
	});
}), Object.defineProperty(Q, "familyPrefix", {
	enumerable: !0,
	set: function(e) {
		Un.cssPrefix = e, Wn.forEach(function(e) {
			return e(Q);
		});
	},
	get: function() {
		return Un.cssPrefix;
	}
}), Ke.FontAwesomeConfig = Q;
var Wn = [];
function Gn(e) {
	return Wn.push(e), function() {
		Wn.splice(Wn.indexOf(e), 1);
	};
}
var Kn = fn, qn = {
	size: 16,
	x: 0,
	y: 0,
	rotate: 0,
	flipX: !1,
	flipY: !1
};
function Jn(e) {
	if (!(!e || !Ye)) {
		var t = X.createElement("style");
		t.setAttribute("type", "text/css"), t.innerHTML = e;
		for (var n = X.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
			var a = n[i], o = (a.tagName || "").toUpperCase();
			["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
		}
		return X.head.insertBefore(t, r), e;
	}
}
var Yn = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Xn() {
	for (var e = 12, t = ""; e-- > 0;) t += Yn[Math.random() * 62 | 0];
	return t;
}
function Zn(e) {
	for (var t = [], n = (e || []).length >>> 0; n--;) t[n] = e[n];
	return t;
}
function Qn(e) {
	return e.classList ? Zn(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(e) {
		return e;
	});
}
function $n(e) {
	return `${e}`.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function er(e) {
	return Object.keys(e || {}).reduce(function(t, n) {
		return t + `${n}="${$n(e[n])}" `;
	}, "").trim();
}
function tr(e) {
	return Object.keys(e || {}).reduce(function(t, n) {
		return t + `${n}: ${e[n].trim()};`;
	}, "");
}
function nr(e) {
	return e.size !== qn.size || e.x !== qn.x || e.y !== qn.y || e.rotate !== qn.rotate || e.flipX || e.flipY;
}
function rr(e) {
	var t = e.transform, n = e.containerWidth, r = e.iconWidth;
	return {
		outer: { transform: `translate(${n / 2} 256)` },
		inner: { transform: `${`translate(${t.x * 32}, ${t.y * 32}) `} ${`scale(${t.size / 16 * (t.flipX ? -1 : 1)}, ${t.size / 16 * (t.flipY ? -1 : 1)}) `} ${`rotate(${t.rotate} 0 0)`}` },
		path: { transform: `translate(${r / 2 * -1} -256)` }
	};
}
function ir(e) {
	var t = e.transform, n = e.width, r = n === void 0 ? fn : n, i = e.height, a = i === void 0 ? fn : i, o = e.startCentered, s = o === void 0 ? !1 : o, c = "";
	return s && Xe ? c += `translate(${t.x / Kn - r / 2}em, ${t.y / Kn - a / 2}em) ` : s ? c += `translate(calc(-50% + ${t.x / Kn}em), calc(-50% + ${t.y / Kn}em)) ` : c += `translate(${t.x / Kn}em, ${t.y / Kn}em) `, c += `scale(${t.size / Kn * (t.flipX ? -1 : 1)}, ${t.size / Kn * (t.flipY ? -1 : 1)}) `, c += `rotate(${t.rotate}deg) `, c;
}
var ar = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
function or() {
	var e = pn, t = mn, n = Q.cssPrefix, r = Q.replacementClass, i = ar;
	if (n !== e || r !== t) {
		var a = RegExp(`\\.${e}\\-`, "g"), o = RegExp(`\\--${e}\\-`, "g"), s = RegExp(`\\.${t}`, "g");
		i = i.replace(a, `.${n}-`).replace(o, `--${n}-`).replace(s, `.${r}`);
	}
	return i;
}
var sr = !1;
function cr() {
	Q.autoAddCss && !sr && (Jn(or()), sr = !0);
}
var lr = {
	mixout: function() {
		return { dom: {
			css: or,
			insertCss: cr
		} };
	},
	hooks: function() {
		return {
			beforeDOMElementCreation: function() {
				cr();
			},
			beforeI2svg: function() {
				cr();
			}
		};
	}
}, ur = Ke || {};
ur[dn] || (ur[dn] = {}), ur[dn].styles || (ur[dn].styles = {}), ur[dn].hooks || (ur[dn].hooks = {}), ur[dn].shims || (ur[dn].shims = []);
var dr = ur[dn], fr = [], pr = function() {
	X.removeEventListener("DOMContentLoaded", pr), mr = 1, fr.map(function(e) {
		return e();
	});
}, mr = !1;
Ye && (mr = (X.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(X.readyState), mr || X.addEventListener("DOMContentLoaded", pr));
function hr(e) {
	Ye && (mr ? setTimeout(e, 0) : fr.push(e));
}
function gr(e) {
	var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, i = e.children, a = i === void 0 ? [] : i;
	return typeof e == "string" ? $n(e) : `<${t} ${er(r)}>${a.map(gr).join("")}</${t}>`;
}
function _r(e, t, n) {
	if (e && e[t] && e[t][n]) return {
		prefix: t,
		iconName: n,
		icon: e[t][n]
	};
}
var vr = function(e, t) {
	return function(n, r, i, a) {
		return e.call(t, n, r, i, a);
	};
}, yr = function(e, t, n, r) {
	var i = Object.keys(e), a = i.length, o = r === void 0 ? t : vr(t, r), s, c, l;
	for (n === void 0 ? (s = 1, l = e[i[0]]) : (s = 0, l = n); s < a; s++) c = i[s], l = o(l, e[c], c, e);
	return l;
};
function br(e) {
	return Pe(e).length === 1 ? e.codePointAt(0).toString(16) : null;
}
function xr(e) {
	return Object.keys(e).reduce(function(t, n) {
		var r = e[n];
		return r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
	}, {});
}
function Sr(e, t) {
	var n = (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}).skipHooks, r = n === void 0 ? !1 : n, i = xr(t);
	typeof dr.hooks.addPack == "function" && !r ? dr.hooks.addPack(e, xr(t)) : dr.styles[e] = Y(Y({}, dr.styles[e] || {}), i), e === "fas" && Sr("fa", t);
}
var Cr = dr.styles, wr = dr.shims, Tr = Object.keys(jn), Er = Tr.reduce(function(e, t) {
	return e[t] = Object.keys(jn[t]), e;
}, {}), Dr = null, Or = {}, kr = {}, Ar = {}, jr = {}, Mr = {};
function Nr(e) {
	return ~Rn.indexOf(e);
}
function Pr(e, t) {
	var n = t.split("-"), r = n[0], i = n.slice(1).join("-");
	return r === e && i !== "" && !Nr(i) ? i : null;
}
var Fr = function() {
	var e = function(e) {
		return yr(Cr, function(t, n, r) {
			return t[r] = yr(n, e, {}), t;
		}, {});
	};
	Or = e(function(e, t, n) {
		return t[3] && (e[t[3]] = n), t[2] && t[2].filter(function(e) {
			return typeof e == "number";
		}).forEach(function(t) {
			e[t.toString(16)] = n;
		}), e;
	}), kr = e(function(e, t, n) {
		return e[n] = n, t[2] && t[2].filter(function(e) {
			return typeof e == "string";
		}).forEach(function(t) {
			e[t] = n;
		}), e;
	}), Mr = e(function(e, t, n) {
		var r = t[2];
		return e[n] = n, r.forEach(function(t) {
			e[t] = n;
		}), e;
	});
	var t = "far" in Cr || Q.autoFetchSvg, n = yr(wr, function(e, n) {
		var r = n[0], i = n[1], a = n[2];
		return i === "far" && !t && (i = "fas"), typeof r == "string" && (e.names[r] = {
			prefix: i,
			iconName: a
		}), typeof r == "number" && (e.unicodes[r.toString(16)] = {
			prefix: i,
			iconName: a
		}), e;
	}, {
		names: {},
		unicodes: {}
	});
	Ar = n.names, jr = n.unicodes, Dr = Wr(Q.styleDefault, { family: Q.familyDefault });
};
Gn(function(e) {
	Dr = Wr(e.styleDefault, { family: Q.familyDefault });
}), Fr();
function Ir(e, t) {
	return (Or[e] || {})[t];
}
function Lr(e, t) {
	return (kr[e] || {})[t];
}
function Rr(e, t) {
	return (Mr[e] || {})[t];
}
function zr(e) {
	return Ar[e] || {
		prefix: null,
		iconName: null
	};
}
function Br(e) {
	var t = jr[e], n = Ir("fas", e);
	return t || (n ? {
		prefix: "fas",
		iconName: n
	} : null) || {
		prefix: null,
		iconName: null
	};
}
function Vr() {
	return Dr;
}
var Hr = function() {
	return {
		prefix: null,
		iconName: null,
		rest: []
	};
};
function Ur(e) {
	var t = Z, n = Tr.reduce(function(e, t) {
		return e[t] = `${Q.cssPrefix}-${t}`, e;
	}, {});
	return Bt.forEach(function(r) {
		(e.includes(n[r]) || e.some(function(e) {
			return Er[r].includes(e);
		})) && (t = r);
	}), t;
}
function Wr(e) {
	var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).family, n = t === void 0 ? Z : t, r = Dn[n][e];
	if (n === rt && !e) return "fad";
	var i = kn[n][e] || kn[n][r], a = e in dr.styles ? e : null;
	return i || a || null;
}
function Gr(e) {
	var t = [], n = null;
	return e.forEach(function(e) {
		var r = Pr(Q.cssPrefix, e);
		r ? n = r : e && t.push(e);
	}), {
		iconName: n,
		rest: t
	};
}
function Kr(e) {
	return e.sort().filter(function(e, t, n) {
		return n.indexOf(e) === t;
	});
}
var qr = an.concat(Gt);
function Jr(e) {
	var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).skipLookups, n = t === void 0 ? !1 : t, r = null, i = Kr(e.filter(function(e) {
		return qr.includes(e);
	})), a = Kr(e.filter(function(e) {
		return !qr.includes(e);
	})), o = Ne(i.filter(function(e) {
		return r = e, !nt.includes(e);
	}), 1)[0], s = o === void 0 ? null : o, c = Ur(i), l = Y(Y({}, Gr(a)), {}, { prefix: Wr(s, { family: c }) });
	return Y(Y(Y({}, l), Qr({
		values: e,
		family: c,
		styles: Cr,
		config: Q,
		canonical: l,
		givenPrefix: r
	})), Yr(n, r, l));
}
function Yr(e, t, n) {
	var r = n.prefix, i = n.iconName;
	if (e || !r || !i) return {
		prefix: r,
		iconName: i
	};
	var a = t === "fa" ? zr(i) : {}, o = Rr(r, i);
	return i = a.iconName || o || i, r = a.prefix || r, r === "far" && !Cr.far && Cr.fas && !Q.autoFetchSvg && (r = "fas"), {
		prefix: r,
		iconName: i
	};
}
var Xr = Bt.filter(function(e) {
	return e !== Z || e !== rt;
}), Zr = Object.keys(rn).filter(function(e) {
	return e !== Z;
}).map(function(e) {
	return Object.keys(rn[e]);
}).flat();
function Qr(e) {
	var t = e.values, n = e.family, r = e.canonical, i = e.givenPrefix, a = i === void 0 ? "" : i, o = e.styles, s = o === void 0 ? {} : o, c = e.config, l = c === void 0 ? {} : c, u = n === rt, d = t.includes("fa-duotone") || t.includes("fad"), f = l.familyDefault === "duotone", p = r.prefix === "fad" || r.prefix === "fa-duotone";
	return !u && (d || f || p) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Xr.includes(n) && (Object.keys(s).find(function(e) {
		return Zr.includes(e);
	}) || l.autoFetchSvg) && (r.prefix = Ut.get(n).defaultShortPrefixId, r.iconName = Rr(r.prefix, r.iconName) || r.iconName), (r.prefix === "fa" || a === "fa") && (r.prefix = Vr() || "fas"), r;
}
var $r = /*#__PURE__*/ function() {
	function e() {
		we(this, e), this.definitions = {};
	}
	return Ee(e, [
		{
			key: "add",
			value: function() {
				var e = this, t = [...arguments].reduce(this._pullDefinitions, {});
				Object.keys(t).forEach(function(n) {
					e.definitions[n] = Y(Y({}, e.definitions[n] || {}), t[n]), Sr(n, t[n]);
					var r = jn[Z][n];
					r && Sr(r, t[n]), Fr();
				});
			}
		},
		{
			key: "reset",
			value: function() {
				this.definitions = {};
			}
		},
		{
			key: "_pullDefinitions",
			value: function(e, t) {
				var n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
				return Object.keys(n).map(function(t) {
					var r = n[t], i = r.prefix, a = r.iconName, o = r.icon, s = o[2];
					e[i] || (e[i] = {}), s.length > 0 && s.forEach(function(t) {
						typeof t == "string" && (e[i][t] = o);
					}), e[i][a] = o;
				}), e;
			}
		}
	]);
}(), ei = [], ti = {}, ni = {}, ri = Object.keys(ni);
function ii(e, t) {
	var n = t.mixoutsTo;
	return ei = e, ti = {}, Object.keys(ni).forEach(function(e) {
		ri.indexOf(e) === -1 && delete ni[e];
	}), ei.forEach(function(e) {
		var t = e.mixout ? e.mixout() : {};
		if (Object.keys(t).forEach(function(e) {
			typeof t[e] == "function" && (n[e] = t[e]), Le(t[e]) === "object" && Object.keys(t[e]).forEach(function(r) {
				n[e] || (n[e] = {}), n[e][r] = t[e][r];
			});
		}), e.hooks) {
			var r = e.hooks();
			Object.keys(r).forEach(function(e) {
				ti[e] || (ti[e] = []), ti[e].push(r[e]);
			});
		}
		e.provides && e.provides(ni);
	}), n;
}
function ai(e, t) {
	var n = [...arguments].slice(2);
	return (ti[e] || []).forEach(function(e) {
		t = e.apply(null, [t].concat(n));
	}), t;
}
function oi(e) {
	var t = [...arguments].slice(1);
	(ti[e] || []).forEach(function(e) {
		e.apply(null, t);
	});
}
function si() {
	var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
	return ni[e] ? ni[e].apply(null, t) : void 0;
}
function ci(e) {
	e.prefix === "fa" && (e.prefix = "fas");
	var t = e.iconName, n = e.prefix || Vr();
	if (t) return t = Rr(n, t) || t, _r(li.definitions, n, t) || _r(dr.styles, n, t);
}
var li = new $r(), ui = {
	noAuto: function() {
		Q.autoReplaceSvg = !1, Q.observeMutations = !1, oi("noAuto");
	},
	config: Q,
	dom: {
		i2svg: function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			return Ye ? (oi("beforeI2svg", e), si("pseudoElements2svg", e), si("i2svg", e)) : Promise.reject(/* @__PURE__ */ Error("Operation requires a DOM of some kind."));
		},
		watch: function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot;
			Q.autoReplaceSvg === !1 && (Q.autoReplaceSvg = !0), Q.observeMutations = !0, hr(function() {
				di({ autoReplaceSvgRoot: t }), oi("watch", e);
			});
		}
	},
	parse: { icon: function(e) {
		if (e === null) return null;
		if (Le(e) === "object" && e.prefix && e.iconName) return {
			prefix: e.prefix,
			iconName: Rr(e.prefix, e.iconName) || e.iconName
		};
		if (Array.isArray(e) && e.length === 2) {
			var t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Wr(e[0]);
			return {
				prefix: n,
				iconName: Rr(n, t) || t
			};
		}
		if (typeof e == "string" && (e.indexOf(`${Q.cssPrefix}-`) > -1 || e.match(Nn))) {
			var r = Jr(e.split(" "), { skipLookups: !0 });
			return {
				prefix: r.prefix || Vr(),
				iconName: Rr(r.prefix, r.iconName) || r.iconName
			};
		}
		if (typeof e == "string") {
			var i = Vr();
			return {
				prefix: i,
				iconName: Rr(i, e) || e
			};
		}
	} },
	library: li,
	findIconDefinition: ci,
	toHtml: gr
}, di = function() {
	var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).autoReplaceSvgRoot, t = e === void 0 ? X : e;
	(Object.keys(dr.styles).length > 0 || Q.autoFetchSvg) && Ye && Q.autoReplaceSvg && ui.dom.i2svg({ node: t });
};
function fi(e, t) {
	return Object.defineProperty(e, "abstract", { get: t }), Object.defineProperty(e, "html", { get: function() {
		return e.abstract.map(function(e) {
			return gr(e);
		});
	} }), Object.defineProperty(e, "node", { get: function() {
		if (Ye) {
			var t = X.createElement("div");
			return t.innerHTML = e.html, t.children;
		}
	} }), e;
}
function pi(e) {
	var t = e.children, n = e.main, r = e.mask, i = e.attributes, a = e.styles, o = e.transform;
	if (nr(o) && n.found && !r.found) {
		var s = {
			x: n.width / n.height / 2,
			y: .5
		};
		i.style = tr(Y(Y({}, a), {}, { "transform-origin": `${s.x + o.x / 16}em ${s.y + o.y / 16}em` }));
	}
	return [{
		tag: "svg",
		attributes: i,
		children: t
	}];
}
function mi(e) {
	var t = e.prefix, n = e.iconName, r = e.children, i = e.attributes, a = e.symbol, o = a === !0 ? `${t}-${Q.cssPrefix}-${n}` : a;
	return [{
		tag: "svg",
		attributes: { style: "display: none;" },
		children: [{
			tag: "symbol",
			attributes: Y(Y({}, i), {}, { id: o }),
			children: r
		}]
	}];
}
function hi(e) {
	return [
		"aria-label",
		"aria-labelledby",
		"title",
		"role"
	].some(function(t) {
		return t in e;
	});
}
function gi(e) {
	var t = e.icons, n = t.main, r = t.mask, i = e.prefix, a = e.iconName, o = e.transform, s = e.symbol, c = e.maskId, l = e.extra, u = e.watchable, d = u === void 0 ? !1 : u, f = r.found ? r : n, p = f.width, m = f.height, h = [Q.replacementClass, a ? `${Q.cssPrefix}-${a}` : ""].filter(function(e) {
		return l.classes.indexOf(e) === -1;
	}).filter(function(e) {
		return e !== "" || !!e;
	}).concat(l.classes).join(" "), g = {
		children: [],
		attributes: Y(Y({}, l.attributes), {}, {
			"data-prefix": i,
			"data-icon": a,
			class: h,
			role: l.attributes.role || "img",
			viewBox: `0 0 ${p} ${m}`
		})
	};
	!hi(l.attributes) && !l.attributes["aria-hidden"] && (g.attributes["aria-hidden"] = "true"), d && (g.attributes[hn] = "");
	var _ = Y(Y({}, g), {}, {
		prefix: i,
		iconName: a,
		main: n,
		mask: r,
		maskId: c,
		transform: o,
		symbol: s,
		styles: Y({}, l.styles)
	}), v = r.found && n.found ? si("generateAbstractMask", _) || {
		children: [],
		attributes: {}
	} : si("generateAbstractIcon", _) || {
		children: [],
		attributes: {}
	}, y = v.children, b = v.attributes;
	return _.children = y, _.attributes = b, s ? mi(_) : pi(_);
}
function _i(e) {
	var t = e.content, n = e.width, r = e.height, i = e.transform, a = e.extra, o = e.watchable, s = o === void 0 ? !1 : o, c = Y(Y({}, a.attributes), {}, { class: a.classes.join(" ") });
	s && (c[hn] = "");
	var l = Y({}, a.styles);
	nr(i) && (l.transform = ir({
		transform: i,
		startCentered: !0,
		width: n,
		height: r
	}), l["-webkit-transform"] = l.transform);
	var u = tr(l);
	u.length > 0 && (c.style = u);
	var d = [];
	return d.push({
		tag: "span",
		attributes: c,
		children: [t]
	}), d;
}
function vi(e) {
	var t = e.content, n = e.extra, r = Y(Y({}, n.attributes), {}, { class: n.classes.join(" ") }), i = tr(n.styles);
	i.length > 0 && (r.style = i);
	var a = [];
	return a.push({
		tag: "span",
		attributes: r,
		children: [t]
	}), a;
}
var yi = dr.styles;
function bi(e) {
	var t = e[0], n = e[1], r = Ne(e.slice(4), 1)[0], i = null;
	return i = Array.isArray(r) ? {
		tag: "g",
		attributes: { class: `${Q.cssPrefix}-${Ln.GROUP}` },
		children: [{
			tag: "path",
			attributes: {
				class: `${Q.cssPrefix}-${Ln.SECONDARY}`,
				fill: "currentColor",
				d: r[0]
			}
		}, {
			tag: "path",
			attributes: {
				class: `${Q.cssPrefix}-${Ln.PRIMARY}`,
				fill: "currentColor",
				d: r[1]
			}
		}]
	} : {
		tag: "path",
		attributes: {
			fill: "currentColor",
			d: r
		}
	}, {
		found: !0,
		width: t,
		height: n,
		icon: i
	};
}
var xi = {
	found: !1,
	width: 512,
	height: 512
};
function Si(e, t) {
	!wn && !Q.showMissingIcons && e && console.error(`Icon with name "${e}" and prefix "${t}" is missing.`);
}
function Ci(e, t) {
	var n = t;
	return t === "fa" && Q.styleDefault !== null && (t = Vr()), new Promise(function(r, i) {
		if (n === "fa") {
			var a = zr(e) || {};
			e = a.iconName || e, t = a.prefix || t;
		}
		if (e && t && yi[t] && yi[t][e]) {
			var o = yi[t][e];
			return r(bi(o));
		}
		Si(e, t), r(Y(Y({}, xi), {}, { icon: Q.showMissingIcons && e && si("missingIconAbstract") || {} }));
	});
}
var wi = function() {}, Ti = Q.measurePerformance && Je && Je.mark && Je.measure ? Je : {
	mark: wi,
	measure: wi
}, Ei = "FA \"7.2.0\"", Di = function(e) {
	return Ti.mark(`${Ei} ${e} begins`), function() {
		return Oi(e);
	};
}, Oi = function(e) {
	Ti.mark(`${Ei} ${e} ends`), Ti.measure(`${Ei} ${e}`, `${Ei} ${e} begins`, `${Ei} ${e} ends`);
}, ki = {
	begin: Di,
	end: Oi
}, Ai = function() {};
function ji(e) {
	return typeof (e.getAttribute ? e.getAttribute(hn) : null) == "string";
}
function Mi(e) {
	var t = e.getAttribute ? e.getAttribute(vn) : null, n = e.getAttribute ? e.getAttribute(yn) : null;
	return t && n;
}
function Ni(e) {
	return e && e.classList && e.classList.contains && e.classList.contains(Q.replacementClass);
}
function Pi() {
	return Q.autoReplaceSvg === !0 ? zi.replace : zi[Q.autoReplaceSvg] || zi.replace;
}
function Fi(e) {
	return X.createElementNS("http://www.w3.org/2000/svg", e);
}
function Ii(e) {
	return X.createElement(e);
}
function Li(e) {
	var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).ceFn, n = t === void 0 ? e.tag === "svg" ? Fi : Ii : t;
	if (typeof e == "string") return X.createTextNode(e);
	var r = n(e.tag);
	return Object.keys(e.attributes || []).forEach(function(t) {
		r.setAttribute(t, e.attributes[t]);
	}), (e.children || []).forEach(function(e) {
		r.appendChild(Li(e, { ceFn: n }));
	}), r;
}
function Ri(e) {
	var t = ` ${e.outerHTML} `;
	return t = `${t}Font Awesome fontawesome.com `, t;
}
var zi = {
	replace: function(e) {
		var t = e[0];
		if (t.parentNode) if (e[1].forEach(function(e) {
			t.parentNode.insertBefore(Li(e), t);
		}), t.getAttribute(hn) === null && Q.keepOriginalSource) {
			var n = X.createComment(Ri(t));
			t.parentNode.replaceChild(n, t);
		} else t.remove();
	},
	nest: function(e) {
		var t = e[0], n = e[1];
		if (~Qn(t).indexOf(Q.replacementClass)) return zi.replace(e);
		var r = RegExp(`${Q.cssPrefix}-.*`);
		if (delete n[0].attributes.id, n[0].attributes.class) {
			var i = n[0].attributes.class.split(" ").reduce(function(e, t) {
				return t === Q.replacementClass || t.match(r) ? e.toSvg.push(t) : e.toNode.push(t), e;
			}, {
				toNode: [],
				toSvg: []
			});
			n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
		}
		var a = n.map(function(e) {
			return gr(e);
		}).join("\n");
		t.setAttribute(hn, ""), t.innerHTML = a;
	}
};
function Bi(e) {
	e();
}
function Vi(e, t) {
	var n = typeof t == "function" ? t : Ai;
	if (e.length === 0) n();
	else {
		var r = Bi;
		Q.mutateApproach === xn && (r = Ke.requestAnimationFrame || Bi), r(function() {
			var t = Pi(), r = ki.begin("mutate");
			e.map(t), r(), n();
		});
	}
}
var Hi = !1;
function Ui() {
	Hi = !0;
}
function Wi() {
	Hi = !1;
}
var Gi = null;
function Ki(e) {
	if (qe && Q.observeMutations) {
		var t = e.treeCallback, n = t === void 0 ? Ai : t, r = e.nodeCallback, i = r === void 0 ? Ai : r, a = e.pseudoElementsCallback, o = a === void 0 ? Ai : a, s = e.observeMutationsRoot, c = s === void 0 ? X : s;
		Gi = new qe(function(e) {
			if (!Hi) {
				var t = Vr();
				Zn(e).forEach(function(e) {
					if (e.type === "childList" && e.addedNodes.length > 0 && !ji(e.addedNodes[0]) && (Q.searchPseudoElements && o(e.target), n(e.target)), e.type === "attributes" && e.target.parentNode && Q.searchPseudoElements && o([e.target], !0), e.type === "attributes" && ji(e.target) && ~In.indexOf(e.attributeName)) if (e.attributeName === "class" && Mi(e.target)) {
						var r = Jr(Qn(e.target)), a = r.prefix, s = r.iconName;
						e.target.setAttribute(vn, a || t), s && e.target.setAttribute(yn, s);
					} else Ni(e.target) && i(e.target);
				});
			}
		}), Ye && Gi.observe(c, {
			childList: !0,
			attributes: !0,
			characterData: !0,
			subtree: !0
		});
	}
}
function qi() {
	Gi && Gi.disconnect();
}
function Ji(e) {
	var t = e.getAttribute("style"), n = [];
	return t && (n = t.split(";").reduce(function(e, t) {
		var n = t.split(":"), r = n[0], i = n.slice(1);
		return r && i.length > 0 && (e[r] = i.join(":").trim()), e;
	}, {})), n;
}
function Yi(e) {
	var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText === void 0 ? "" : e.innerText.trim(), i = Jr(Qn(e));
	return i.prefix ||= Vr(), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix ? i : (i.prefix && r.length > 0 && (i.iconName = Lr(i.prefix, e.innerText) || Ir(i.prefix, br(e.innerText))), !i.iconName && Q.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data), i);
}
function Xi(e) {
	return Zn(e.attributes).reduce(function(e, t) {
		return e.name !== "class" && e.name !== "style" && (e[t.name] = t.value), e;
	}, {});
}
function Zi() {
	return {
		iconName: null,
		prefix: null,
		transform: qn,
		symbol: !1,
		mask: {
			iconName: null,
			prefix: null,
			rest: []
		},
		maskId: null,
		extra: {
			classes: [],
			styles: {},
			attributes: {}
		}
	};
}
function Qi(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 }, n = Yi(e), r = n.iconName, i = n.prefix, a = n.rest, o = Xi(e), s = ai("parseNodeAttributes", {}, e);
	return Y({
		iconName: r,
		prefix: i,
		transform: qn,
		mask: {
			iconName: null,
			prefix: null,
			rest: []
		},
		maskId: null,
		symbol: !1,
		extra: {
			classes: a,
			styles: t.styleParser ? Ji(e) : [],
			attributes: o
		}
	}, s);
}
var $i = dr.styles;
function ea(e) {
	var t = Q.autoReplaceSvg === "nest" ? Qi(e, { styleParser: !1 }) : Qi(e);
	return ~t.extra.classes.indexOf(Pn) ? si("generateLayersText", e, t) : si("generateSvgReplacementMutation", e, t);
}
function ta() {
	return [].concat(Pe(Gt), Pe(an));
}
function na(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	if (!Ye) return Promise.resolve();
	var n = X.documentElement.classList, r = function(e) {
		return n.add(`${bn}-${e}`);
	}, i = function(e) {
		return n.remove(`${bn}-${e}`);
	}, a = Q.autoFetchSvg ? ta() : nt.concat(Object.keys($i));
	a.includes("fa") || a.push("fa");
	var o = [`.${Pn}:not([${hn}])`].concat(a.map(function(e) {
		return `.${e}:not([${hn}])`;
	})).join(", ");
	if (o.length === 0) return Promise.resolve();
	var s = [];
	try {
		s = Zn(e.querySelectorAll(o));
	} catch {}
	if (s.length > 0) r("pending"), i("complete");
	else return Promise.resolve();
	var c = ki.begin("onTree"), l = s.reduce(function(e, t) {
		try {
			var n = ea(t);
			n && e.push(n);
		} catch (e) {
			wn || e.name === "MissingIcon" && console.error(e);
		}
		return e;
	}, []);
	return new Promise(function(e, n) {
		Promise.all(l).then(function(n) {
			Vi(n, function() {
				r("active"), r("complete"), i("pending"), typeof t == "function" && t(), c(), e();
			});
		}).catch(function(e) {
			c(), n(e);
		});
	});
}
function ra(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	ea(e).then(function(e) {
		e && Vi([e], t);
	});
}
function ia(e) {
	return function(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : ci(t || {}), i = n.mask;
		return i &&= (i || {}).icon ? i : ci(i || {}), e(r, Y(Y({}, n), {}, { mask: i }));
	};
}
var aa = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.transform, r = n === void 0 ? qn : n, i = t.symbol, a = i === void 0 ? !1 : i, o = t.mask, s = o === void 0 ? null : o, c = t.maskId, l = c === void 0 ? null : c, u = t.classes, d = u === void 0 ? [] : u, f = t.attributes, p = f === void 0 ? {} : f, m = t.styles, h = m === void 0 ? {} : m;
	if (e) {
		var g = e.prefix, _ = e.iconName, v = e.icon;
		return fi(Y({ type: "icon" }, e), function() {
			return oi("beforeDOMElementCreation", {
				iconDefinition: e,
				params: t
			}), gi({
				icons: {
					main: bi(v),
					mask: s ? bi(s.icon) : {
						found: !1,
						width: null,
						height: null,
						icon: {}
					}
				},
				prefix: g,
				iconName: _,
				transform: Y(Y({}, qn), r),
				symbol: a,
				maskId: l,
				extra: {
					attributes: p,
					styles: h,
					classes: d
				}
			});
		});
	}
}, oa = {
	mixout: function() {
		return { icon: ia(aa) };
	},
	hooks: function() {
		return { mutationObserverCallbacks: function(e) {
			return e.treeCallback = na, e.nodeCallback = ra, e;
		} };
	},
	provides: function(e) {
		e.i2svg = function(e) {
			var t = e.node, n = t === void 0 ? X : t, r = e.callback;
			return na(n, r === void 0 ? function() {} : r);
		}, e.generateSvgReplacementMutation = function(e, t) {
			var n = t.iconName, r = t.prefix, i = t.transform, a = t.symbol, o = t.mask, s = t.maskId, c = t.extra;
			return new Promise(function(t, l) {
				Promise.all([Ci(n, r), o.iconName ? Ci(o.iconName, o.prefix) : Promise.resolve({
					found: !1,
					width: 512,
					height: 512,
					icon: {}
				})]).then(function(o) {
					var l = Ne(o, 2), u = l[0], d = l[1];
					t([e, gi({
						icons: {
							main: u,
							mask: d
						},
						prefix: r,
						iconName: n,
						transform: i,
						symbol: a,
						maskId: s,
						extra: c,
						watchable: !0
					})]);
				}).catch(l);
			});
		}, e.generateAbstractIcon = function(e) {
			var t = e.children, n = e.attributes, r = e.main, i = e.transform, a = e.styles, o = tr(a);
			o.length > 0 && (n.style = o);
			var s;
			return nr(i) && (s = si("generateAbstractTransformGrouping", {
				main: r,
				transform: i,
				containerWidth: r.width,
				iconWidth: r.width
			})), t.push(s || r.icon), {
				children: t,
				attributes: n
			};
		};
	}
}, sa = { mixout: function() {
	return { layer: function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.classes, r = n === void 0 ? [] : n;
		return fi({ type: "layer" }, function() {
			oi("beforeDOMElementCreation", {
				assembler: e,
				params: t
			});
			var n = [];
			return e(function(e) {
				Array.isArray(e) ? e.map(function(e) {
					n = n.concat(e.abstract);
				}) : n = n.concat(e.abstract);
			}), [{
				tag: "span",
				attributes: { class: [`${Q.cssPrefix}-layers`].concat(Pe(r)).join(" ") },
				children: n
			}];
		});
	} };
} }, ca = { mixout: function() {
	return { counter: function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.title, r = n === void 0 ? null : n, i = t.classes, a = i === void 0 ? [] : i, o = t.attributes, s = o === void 0 ? {} : o, c = t.styles, l = c === void 0 ? {} : c;
		return fi({
			type: "counter",
			content: e
		}, function() {
			return oi("beforeDOMElementCreation", {
				content: e,
				params: t
			}), vi({
				content: e.toString(),
				title: r,
				extra: {
					attributes: s,
					styles: l,
					classes: [`${Q.cssPrefix}-layers-counter`].concat(Pe(a))
				}
			});
		});
	} };
} }, la = {
	mixout: function() {
		return { text: function(e) {
			var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.transform, r = n === void 0 ? qn : n, i = t.classes, a = i === void 0 ? [] : i, o = t.attributes, s = o === void 0 ? {} : o, c = t.styles, l = c === void 0 ? {} : c;
			return fi({
				type: "text",
				content: e
			}, function() {
				return oi("beforeDOMElementCreation", {
					content: e,
					params: t
				}), _i({
					content: e,
					transform: Y(Y({}, qn), r),
					extra: {
						attributes: s,
						styles: l,
						classes: [`${Q.cssPrefix}-layers-text`].concat(Pe(a))
					}
				});
			});
		} };
	},
	provides: function(e) {
		e.generateLayersText = function(e, t) {
			var n = t.transform, r = t.extra, i = null, a = null;
			if (Xe) {
				var o = parseInt(getComputedStyle(e).fontSize, 10), s = e.getBoundingClientRect();
				i = s.width / o, a = s.height / o;
			}
			return Promise.resolve([e, _i({
				content: e.innerHTML,
				width: i,
				height: a,
				transform: n,
				extra: r,
				watchable: !0
			})]);
		};
	}
}, ua = /* @__PURE__ */ RegExp("\"", "ug"), da = [1105920, 1112319], fa = Y(Y(Y(Y({}, { FontAwesome: {
	normal: "fas",
	400: "fas"
} }), Ht), un), Yt), pa = Object.keys(fa).reduce(function(e, t) {
	return e[t.toLowerCase()] = fa[t], e;
}, {}), ma = Object.keys(pa).reduce(function(e, t) {
	var n = pa[t];
	return e[t] = n[900] || Pe(Object.entries(n))[0][1], e;
}, {});
function ha(e) {
	return br(Pe(e.replace(ua, ""))[0] || "");
}
function ga(e) {
	var t = e.getPropertyValue("font-feature-settings").includes("ss01"), n = e.getPropertyValue("content").replace(ua, ""), r = n.codePointAt(0), i = r >= da[0] && r <= da[1], a = n.length === 2 ? n[0] === n[1] : !1;
	return i || a || t;
}
function _a(e, t) {
	var n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
	return (pa[n] || {})[i] || ma[n];
}
function va(e, t) {
	var n = `${_n}${t.replace(":", "-")}`;
	return new Promise(function(r, i) {
		if (e.getAttribute(n) !== null) return r();
		var a = Zn(e.children).filter(function(e) {
			return e.getAttribute(gn) === t;
		})[0], o = Ke.getComputedStyle(e, t), s = o.getPropertyValue("font-family"), c = s.match(Fn), l = o.getPropertyValue("font-weight"), u = o.getPropertyValue("content");
		if (a && !c) return e.removeChild(a), r();
		if (c && u !== "none" && u !== "") {
			var d = o.getPropertyValue("content"), f = _a(s, l), p = ha(d), m = c[0].startsWith("FontAwesome"), h = ga(o), g = Ir(f, p), _ = g;
			if (m) {
				var v = Br(p);
				v.iconName && v.prefix && (g = v.iconName, f = v.prefix);
			}
			if (g && !h && (!a || a.getAttribute(vn) !== f || a.getAttribute(yn) !== _)) {
				e.setAttribute(n, _), a && e.removeChild(a);
				var y = Zi(), b = y.extra;
				b.attributes[gn] = t, Ci(g, f).then(function(i) {
					var a = gi(Y(Y({}, y), {}, {
						icons: {
							main: i,
							mask: Hr()
						},
						prefix: f,
						iconName: _,
						extra: b,
						watchable: !0
					})), o = X.createElementNS("http://www.w3.org/2000/svg", "svg");
					t === "::before" ? e.insertBefore(o, e.firstChild) : e.appendChild(o), o.outerHTML = a.map(function(e) {
						return gr(e);
					}).join("\n"), e.removeAttribute(n), r();
				}).catch(i);
			} else r();
		} else r();
	});
}
function ya(e) {
	return Promise.all([va(e, "::before"), va(e, "::after")]);
}
function ba(e) {
	return e.parentNode !== document.head && !~Sn.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(gn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
var xa = function(e) {
	return !!e && Cn.some(function(t) {
		return e.includes(t);
	});
}, Sa = function(e) {
	if (!e) return [];
	var t = /* @__PURE__ */ new Set(), n = e.split(/,(?![^()]*\))/).map(function(e) {
		return e.trim();
	});
	n = n.flatMap(function(e) {
		return e.includes("(") ? e : e.split(",").map(function(e) {
			return e.trim();
		});
	});
	var r = De(n), i;
	try {
		for (r.s(); !(i = r.n()).done;) {
			var a = i.value;
			if (xa(a)) {
				var o = Cn.reduce(function(e, t) {
					return e.replace(t, "");
				}, a);
				o !== "" && o !== "*" && t.add(o);
			}
		}
	} catch (e) {
		r.e(e);
	} finally {
		r.f();
	}
	return t;
};
function Ca(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
	if (Ye) {
		var n;
		if (t) n = e;
		else if (Q.searchPseudoElementsFullScan) n = e.querySelectorAll("*");
		else {
			var r = /* @__PURE__ */ new Set(), i = De(document.styleSheets), a;
			try {
				for (i.s(); !(a = i.n()).done;) {
					var o = a.value;
					try {
						var s = De(o.cssRules), c;
						try {
							for (s.s(); !(c = s.n()).done;) {
								var l = c.value, u = De(Sa(l.selectorText)), d;
								try {
									for (u.s(); !(d = u.n()).done;) {
										var f = d.value;
										r.add(f);
									}
								} catch (e) {
									u.e(e);
								} finally {
									u.f();
								}
							}
						} catch (e) {
							s.e(e);
						} finally {
							s.f();
						}
					} catch (e) {
						Q.searchPseudoElementsWarnings && console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`);
					}
				}
			} catch (e) {
				i.e(e);
			} finally {
				i.f();
			}
			if (!r.size) return;
			var p = Array.from(r).join(", ");
			try {
				n = e.querySelectorAll(p);
			} catch {}
		}
		return new Promise(function(e, t) {
			var r = Zn(n).filter(ba).map(ya), i = ki.begin("searchPseudoElements");
			Ui(), Promise.all(r).then(function() {
				i(), Wi(), e();
			}).catch(function() {
				i(), Wi(), t();
			});
		});
	}
}
var wa = {
	hooks: function() {
		return { mutationObserverCallbacks: function(e) {
			return e.pseudoElementsCallback = Ca, e;
		} };
	},
	provides: function(e) {
		e.pseudoElements2svg = function(e) {
			var t = e.node, n = t === void 0 ? X : t;
			Q.searchPseudoElements && Ca(n);
		};
	}
}, Ta = !1, Ea = {
	mixout: function() {
		return { dom: { unwatch: function() {
			Ui(), Ta = !0;
		} } };
	},
	hooks: function() {
		return {
			bootstrap: function() {
				Ki(ai("mutationObserverCallbacks", {}));
			},
			noAuto: function() {
				qi();
			},
			watch: function(e) {
				var t = e.observeMutationsRoot;
				Ta ? Wi() : Ki(ai("mutationObserverCallbacks", { observeMutationsRoot: t }));
			}
		};
	}
}, Da = function(e) {
	return e.toLowerCase().split(" ").reduce(function(e, t) {
		var n = t.toLowerCase().split("-"), r = n[0], i = n.slice(1).join("-");
		if (r && i === "h") return e.flipX = !0, e;
		if (r && i === "v") return e.flipY = !0, e;
		if (i = parseFloat(i), isNaN(i)) return e;
		switch (r) {
			case "grow":
				e.size += i;
				break;
			case "shrink":
				e.size -= i;
				break;
			case "left":
				e.x -= i;
				break;
			case "right":
				e.x += i;
				break;
			case "up":
				e.y -= i;
				break;
			case "down":
				e.y += i;
				break;
			case "rotate":
				e.rotate += i;
				break;
		}
		return e;
	}, {
		size: 16,
		x: 0,
		y: 0,
		flipX: !1,
		flipY: !1,
		rotate: 0
	});
}, Oa = {
	mixout: function() {
		return { parse: { transform: function(e) {
			return Da(e);
		} } };
	},
	hooks: function() {
		return { parseNodeAttributes: function(e, t) {
			var n = t.getAttribute("data-fa-transform");
			return n && (e.transform = Da(n)), e;
		} };
	},
	provides: function(e) {
		e.generateAbstractTransformGrouping = function(e) {
			var t = e.main, n = e.transform, r = e.containerWidth, i = e.iconWidth, a = {
				outer: { transform: `translate(${r / 2} 256)` },
				inner: { transform: `${`translate(${n.x * 32}, ${n.y * 32}) `} ${`scale(${n.size / 16 * (n.flipX ? -1 : 1)}, ${n.size / 16 * (n.flipY ? -1 : 1)}) `} ${`rotate(${n.rotate} 0 0)`}` },
				path: { transform: `translate(${i / 2 * -1} -256)` }
			};
			return {
				tag: "g",
				attributes: Y({}, a.outer),
				children: [{
					tag: "g",
					attributes: Y({}, a.inner),
					children: [{
						tag: t.icon.tag,
						children: t.icon.children,
						attributes: Y(Y({}, t.icon.attributes), a.path)
					}]
				}]
			};
		};
	}
}, ka = {
	x: 0,
	y: 0,
	width: "100%",
	height: "100%"
};
function Aa(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function ja(e) {
	return e.tag === "g" ? e.children : [e];
}
ii([
	lr,
	oa,
	sa,
	ca,
	la,
	wa,
	Ea,
	Oa,
	{
		hooks: function() {
			return { parseNodeAttributes: function(e, t) {
				var n = t.getAttribute("data-fa-mask"), r = n ? Jr(n.split(" ").map(function(e) {
					return e.trim();
				})) : Hr();
				return r.prefix ||= Vr(), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
			} };
		},
		provides: function(e) {
			e.generateAbstractMask = function(e) {
				var t = e.children, n = e.attributes, r = e.main, i = e.mask, a = e.maskId, o = e.transform, s = r.width, c = r.icon, l = i.width, u = i.icon, d = rr({
					transform: o,
					containerWidth: l,
					iconWidth: s
				}), f = {
					tag: "rect",
					attributes: Y(Y({}, ka), {}, { fill: "white" })
				}, p = c.children ? { children: c.children.map(Aa) } : {}, m = {
					tag: "g",
					attributes: Y({}, d.inner),
					children: [Aa(Y({
						tag: c.tag,
						attributes: Y(Y({}, c.attributes), d.path)
					}, p))]
				}, h = {
					tag: "g",
					attributes: Y({}, d.outer),
					children: [m]
				}, g = `mask-${a || Xn()}`, _ = `clip-${a || Xn()}`, v = {
					tag: "mask",
					attributes: Y(Y({}, ka), {}, {
						id: g,
						maskUnits: "userSpaceOnUse",
						maskContentUnits: "userSpaceOnUse"
					}),
					children: [f, h]
				}, y = {
					tag: "defs",
					children: [{
						tag: "clipPath",
						attributes: { id: _ },
						children: ja(u)
					}, v]
				};
				return t.push(y, {
					tag: "rect",
					attributes: Y({
						fill: "currentColor",
						"clip-path": `url(#${_})`,
						mask: `url(#${g})`
					}, ka)
				}), {
					children: t,
					attributes: n
				};
			};
		}
	},
	{ provides: function(e) {
		var t = !1;
		Ke.matchMedia && (t = Ke.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
			var e = [], n = { fill: "currentColor" }, r = {
				attributeType: "XML",
				repeatCount: "indefinite",
				dur: "2s"
			};
			e.push({
				tag: "path",
				attributes: Y(Y({}, n), {}, { d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z" })
			});
			var i = Y(Y({}, r), {}, { attributeName: "opacity" }), a = {
				tag: "circle",
				attributes: Y(Y({}, n), {}, {
					cx: "256",
					cy: "364",
					r: "28"
				}),
				children: []
			};
			return t || a.children.push({
				tag: "animate",
				attributes: Y(Y({}, r), {}, {
					attributeName: "r",
					values: "28;14;28;28;14;28;"
				})
			}, {
				tag: "animate",
				attributes: Y(Y({}, i), {}, { values: "1;0;1;1;0;1;" })
			}), e.push(a), e.push({
				tag: "path",
				attributes: Y(Y({}, n), {}, {
					opacity: "1",
					d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
				}),
				children: t ? [] : [{
					tag: "animate",
					attributes: Y(Y({}, i), {}, { values: "1;0;0;0;0;1;" })
				}]
			}), t || e.push({
				tag: "path",
				attributes: Y(Y({}, n), {}, {
					opacity: "0",
					d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
				}),
				children: [{
					tag: "animate",
					attributes: Y(Y({}, i), {}, { values: "0;0;1;1;0;0;" })
				}]
			}), {
				tag: "g",
				attributes: { class: "missing" },
				children: e
			};
		};
	} },
	{ hooks: function() {
		return { parseNodeAttributes: function(e, t) {
			var n = t.getAttribute("data-fa-symbol");
			return e.symbol = n === null ? !1 : n === "" ? !0 : n, e;
		} };
	} }
], { mixoutsTo: ui }), ui.noAuto;
var Ma = ui.config;
ui.library, ui.dom;
var Na = ui.parse;
ui.findIconDefinition, ui.toHtml;
var Pa = ui.icon;
//#endregion
//#region node_modules/@fortawesome/react-fontawesome/dist/index.js
ui.layer, ui.text, ui.counter, ce();
function Fa(e) {
	return e -= 0, e === e;
}
function Ia(e) {
	return Fa(e) ? e : (e = e.replace(/[_-]+(.)?/g, (e, t) => t ? t.toUpperCase() : ""), e.charAt(0).toLowerCase() + e.slice(1));
}
function La(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
var Ra = /* @__PURE__ */ new Map(), za = 1e3;
function Ba(e) {
	if (Ra.has(e)) return Ra.get(e);
	let t = {}, n = 0, r = e.length;
	for (; n < r;) {
		let i = e.indexOf(";", n), a = i === -1 ? r : i, o = e.slice(n, a).trim();
		if (o) {
			let e = o.indexOf(":");
			if (e > 0) {
				let n = o.slice(0, e).trim(), r = o.slice(e + 1).trim();
				if (n && r) {
					let e = Ia(n);
					t[e.startsWith("webkit") ? La(e) : e] = r;
				}
			}
		}
		n = a + 1;
	}
	if (Ra.size === za) {
		let e = Ra.keys().next().value;
		e && Ra.delete(e);
	}
	return Ra.set(e, t), t;
}
function Va(e, t, n = {}) {
	if (typeof t == "string") return t;
	let r = (t.children || []).map((t) => Va(e, t)), i = t.attributes || {}, a = {};
	for (let [e, t] of Object.entries(i)) switch (!0) {
		case e === "class":
			a.className = t;
			break;
		case e === "style":
			a.style = Ba(String(t));
			break;
		case e.startsWith("aria-"):
		case e.startsWith("data-"):
			a[e.toLowerCase()] = t;
			break;
		default: a[Ia(e)] = t;
	}
	let { style: o, role: s, "aria-label": c, ...l } = n;
	return o && (a.style = a.style ? {
		...a.style,
		...o
	} : o), s && (a.role = s), c && (a["aria-label"] = c, a["aria-hidden"] = "false"), e(t.tag, {
		...a,
		...l
	}, ...r);
}
var Ha = Va.bind(null, e.createElement), Ua = (e, t) => {
	let n = s();
	return e || (t ? n : void 0);
}, Wa = class {
	constructor(e = "react-fontawesome") {
		this.enabled = !1;
		let t = !1;
		try {
			t = K !== void 0 && K.env.NODE_ENV === "development";
		} catch {}
		this.scope = e, this.enabled = t;
	}
	log(...e) {
		this.enabled && console.log(`[${this.scope}]`, ...e);
	}
	warn(...e) {
		this.enabled && console.warn(`[${this.scope}]`, ...e);
	}
	error(...e) {
		this.enabled && console.error(`[${this.scope}]`, ...e);
	}
};
K !== void 0 && K.env?.FA_VERSION;
var Ga = "searchPseudoElementsFullScan" in Ma ? "7.0.0" : "6.0.0", Ka = Number.parseInt(Ga) >= 7, qa = "fa", Ja = {
	beat: "fa-beat",
	fade: "fa-fade",
	beatFade: "fa-beat-fade",
	bounce: "fa-bounce",
	shake: "fa-shake",
	spin: "fa-spin",
	spinPulse: "fa-spin-pulse",
	spinReverse: "fa-spin-reverse",
	pulse: "fa-pulse"
}, Ya = {
	left: "fa-pull-left",
	right: "fa-pull-right"
}, Xa = {
	90: "fa-rotate-90",
	180: "fa-rotate-180",
	270: "fa-rotate-270"
}, Za = {
	"2xs": "fa-2xs",
	xs: "fa-xs",
	sm: "fa-sm",
	lg: "fa-lg",
	xl: "fa-xl",
	"2xl": "fa-2xl",
	"1x": "fa-1x",
	"2x": "fa-2x",
	"3x": "fa-3x",
	"4x": "fa-4x",
	"5x": "fa-5x",
	"6x": "fa-6x",
	"7x": "fa-7x",
	"8x": "fa-8x",
	"9x": "fa-9x",
	"10x": "fa-10x"
}, Qa = {
	border: "fa-border",
	fixedWidth: "fa-fw",
	flip: "fa-flip",
	flipHorizontal: "fa-flip-horizontal",
	flipVertical: "fa-flip-vertical",
	inverse: "fa-inverse",
	rotateBy: "fa-rotate-by",
	swapOpacity: "fa-swap-opacity",
	widthAuto: "fa-width-auto"
}, $a = { default: "fa-layers" };
function eo(e) {
	let t = Ma.cssPrefix || Ma.familyPrefix || qa;
	return t === qa ? e : e.replace(new RegExp(String.raw`(?<=^|\s)${qa}-`, "g"), `${t}-`);
}
function to(e) {
	let { beat: t, fade: n, beatFade: r, bounce: i, shake: a, spin: o, spinPulse: s, spinReverse: c, pulse: l, fixedWidth: u, inverse: d, border: f, flip: p, size: m, rotation: h, pull: g, swapOpacity: _, rotateBy: v, widthAuto: y, className: b } = e, x = [];
	return b && x.push(...b.split(" ")), t && x.push(Ja.beat), n && x.push(Ja.fade), r && x.push(Ja.beatFade), i && x.push(Ja.bounce), a && x.push(Ja.shake), o && x.push(Ja.spin), c && x.push(Ja.spinReverse), s && x.push(Ja.spinPulse), l && x.push(Ja.pulse), u && x.push(Qa.fixedWidth), d && x.push(Qa.inverse), f && x.push(Qa.border), p === !0 && x.push(Qa.flip), (p === "horizontal" || p === "both") && x.push(Qa.flipHorizontal), (p === "vertical" || p === "both") && x.push(Qa.flipVertical), m != null && x.push(Za[m]), h != null && h !== 0 && x.push(Xa[h]), g != null && x.push(Ya[g]), _ && x.push(Qa.swapOpacity), Ka ? (v && x.push(Qa.rotateBy), y && x.push(Qa.widthAuto), (Ma.cssPrefix || Ma.familyPrefix || qa) === qa ? x : x.map(eo)) : x;
}
var no = (e) => typeof e == "object" && "icon" in e && !!e.icon;
function ro(e) {
	if (e) return no(e) ? e : Na.icon(e);
}
function io(e) {
	return Object.keys(e);
}
var ao = new Wa("FontAwesomeIcon"), oo = {
	border: !1,
	className: "",
	mask: void 0,
	maskId: void 0,
	fixedWidth: !1,
	inverse: !1,
	flip: !1,
	icon: void 0,
	listItem: !1,
	pull: void 0,
	pulse: !1,
	rotation: void 0,
	rotateBy: !1,
	size: void 0,
	spin: !1,
	spinPulse: !1,
	spinReverse: !1,
	beat: !1,
	fade: !1,
	beatFade: !1,
	bounce: !1,
	shake: !1,
	symbol: !1,
	title: "",
	titleId: void 0,
	transform: void 0,
	swapOpacity: !1,
	widthAuto: !1
}, so = new Set(Object.keys(oo)), $ = e.forwardRef((e, t) => {
	let n = {
		...oo,
		...e
	}, { icon: r, mask: i, symbol: a, title: o, titleId: s, maskId: c, transform: l } = n, u = Ua(c, !!i), d = Ua(s, !!o), f = ro(r);
	if (!f) return ao.error("Icon lookup is undefined", r), null;
	let p = to(n), m = typeof l == "string" ? Na.transform(l) : l, h = ro(i), g = Pa(f, {
		...p.length > 0 && { classes: p },
		...m && { transform: m },
		...h && { mask: h },
		symbol: a,
		title: o,
		titleId: d,
		maskId: u
	});
	if (!g) return ao.error("Could not find icon", f), null;
	let { abstract: _ } = g, v = { ref: t };
	for (let e of io(n)) so.has(e) || (v[e] = n[e]);
	return Ha(_[0], v);
});
$.displayName = "FontAwesomeIcon", `${$a.default}${Qa.fixedWidth}`;
//#endregion
//#region components/pagination/Pager.jsx
var co = {
	changePage: u.func.isRequired,
	totalItems: u.number.isRequired,
	currentPage: u.number.isRequired,
	pageSize: u.number.isRequired,
	hideLast: u.bool
}, lo = class extends e.Component {
	getPager() {
		let { totalItems: e, currentPage: t, pageSize: n, changePage: r, hideLast: i } = this.props, a = Math.ceil(e / n), o, s, c = /* @__PURE__ */ S("li", {
			className: "pager__ellipsis",
			children: "..."
		}), l = /* @__PURE__ */ S("li", {
			className: "pager__ellipsis",
			children: "..."
		}), u = /* @__PURE__ */ S("li", {
			className: "pager__item",
			children: /* @__PURE__ */ S("button", {
				className: "pager__button",
				type: "button",
				onClick: () => r(1),
				children: 1
			})
		}), d = /* @__PURE__ */ S("li", {
			className: `pager__item ${i ? "hideLast" : ""}`,
			children: /* @__PURE__ */ S("button", {
				className: "pager__button",
				type: "button",
				onClick: () => r(a),
				children: ye(a, 0)
			})
		});
		a < 5 ? (o = 1, s = a, c = "", l = "", u = "", d = "") : (o = t - 1, s = t + 1, t < 4 ? (c = "", u = "", t === 1 ? (o = t, s = t + 2) : t === 3 && (o = 1, s = 4)) : t > a - 3 && (l = "", d = "", t === a ? (o = t - 2, s = t) : t === a - 2 && (o = t - 1, s = a)));
		let f = (t - 1) * n, p = Math.min(f + (n - 1), e - 1), m = g(o, s + 1);
		return {
			totalPages: a,
			startPage: o,
			endPage: s,
			startIndex: f,
			endIndex: p,
			pages: m,
			prevEllipses: c,
			nextEllipses: l,
			firstButton: u,
			lastButton: d
		};
	}
	generatePageButtons(e) {
		let { currentPage: t } = this.props;
		return e.map((e, n) => /* @__PURE__ */ S("li", {
			className: "pager__item",
			children: /* @__PURE__ */ S("button", {
				className: `pager__button ${t === e ? "pager__button_active" : ""}`,
				type: "button",
				onClick: () => this.props.changePage(e),
				children: ye(e, 0)
			})
		}, n));
	}
	render() {
		let { currentPage: e, changePage: t } = this.props, n = this.getPager(), r = this.generatePageButtons(n.pages, n.totalPages);
		return /* @__PURE__ */ C("ul", {
			className: "pager",
			children: [
				/* @__PURE__ */ S("li", {
					className: "pager__item",
					children: /* @__PURE__ */ S("button", {
						className: `pager__button ${e === 1 ? "pager__button_disabled" : ""}`,
						type: "button",
						disabled: e === 1,
						onClick: () => t(e - 1),
						title: "Previous page",
						children: /* @__PURE__ */ S($, { icon: "angle-left" })
					})
				}),
				n.firstButton,
				n.prevEllipses,
				r,
				n.nextEllipses,
				n.lastButton,
				/* @__PURE__ */ S("li", {
					className: "pager__item",
					children: /* @__PURE__ */ S("button", {
						className: `pager__button ${e === n.totalPages ? "pager__button_disabled" : ""}`,
						type: "button",
						disabled: e === n.totalPages,
						onClick: () => t(e + 1),
						title: "Next page",
						children: /* @__PURE__ */ S($, { icon: "angle-right" })
					})
				})
			]
		});
	}
};
lo.propTypes = co;
//#endregion
//#region components/pagination/LimitSelector.jsx
var uo = {
	changeLimit: u.func.isRequired,
	pageSize: u.number,
	limitList: u.arrayOf(u.number),
	label: u.string
}, fo = (e) => {
	let t = (0, q.c)(15), { changeLimit: n, pageSize: r, limitList: i, label: a } = e, o = r === void 0 ? 10 : r, s;
	t[0] === i ? s = t[1] : (s = i === void 0 ? [
		10,
		25,
		50,
		100
	] : i, t[0] = i, t[1] = s);
	let c = s, l;
	t[2] === n ? l = t[3] : (l = (e) => {
		e.preventDefault(), n(parseInt(e.target.value, 10));
	}, t[2] = n, t[3] = l);
	let u = l, d = a || "Rows per page: ", f;
	t[4] === c ? f = t[5] : (f = c.map(po), t[4] = c, t[5] = f);
	let p = f, m;
	t[6] === d ? m = t[7] : (m = /* @__PURE__ */ S("label", { children: d }), t[6] = d, t[7] = m);
	let h;
	t[8] !== u || t[9] !== p || t[10] !== o ? (h = /* @__PURE__ */ S("select", {
		onChange: u,
		value: o,
		className: "usa-dt-pagination__limit-selector",
		"aria-label": "limit-dropdown",
		children: p
	}), t[8] = u, t[9] = p, t[10] = o, t[11] = h) : h = t[11];
	let g;
	return t[12] !== m || t[13] !== h ? (g = /* @__PURE__ */ C("div", {
		className: "usa-dt-pagination__limit-selector__wrapper",
		children: [m, h]
	}), t[12] = m, t[13] = h, t[14] = g) : g = t[14], g;
};
fo.propTypes = uo;
function po(e) {
	return /* @__PURE__ */ S("option", {
		value: e,
		children: e
	}, `limit-${e}`);
}
//#endregion
//#region components/pagination/GoToPage.jsx
var mo = {
	changePage: u.func.isRequired,
	totalPages: u.number,
	id: u.string
}, ho = (e) => {
	let t = (0, q.c)(24), { changePage: n, totalPages: r, id: i } = e, a = r === void 0 ? 1 : r, o = i === void 0 ? "usa-dt-pagination-go-to" : i, [s, c] = l(""), u = a > 1 ? `1-${a}` : "1", d;
	t[0] !== s || t[1] !== a ? (d = () => !(s === "" || parseInt(s, 10) < 1 || parseInt(s, 10) > a), t[0] = s, t[1] = a, t[2] = d) : d = t[2];
	let f = d, p;
	t[3] !== n || t[4] !== s || t[5] !== f ? (p = (e) => {
		e.preventDefault(), f() && n(parseInt(s, 10));
	}, t[3] = n, t[4] = s, t[5] = f, t[6] = p) : p = t[6];
	let m = p, h;
	t[7] === Symbol.for("react.memo_cache_sentinel") ? (h = (e) => {
		c(e.target.value);
	}, t[7] = h) : h = t[7];
	let g = h, _ = `${o}-go-to`, v;
	t[8] === _ ? v = t[9] : (v = /* @__PURE__ */ S("label", {
		htmlFor: _,
		children: "Go to page"
	}), t[8] = _, t[9] = v);
	let y = `${o}-go-to`, b = `Enter a number between 1 and ${a}`, x;
	t[10] !== m || t[11] !== s || t[12] !== u || t[13] !== y || t[14] !== b || t[15] !== a ? (x = /* @__PURE__ */ S("input", {
		type: "number",
		id: y,
		title: b,
		min: "1",
		max: a,
		placeholder: u,
		value: s,
		onChange: g,
		onSubmit: m
	}), t[10] = m, t[11] = s, t[12] = u, t[13] = y, t[14] = b, t[15] = a, t[16] = x) : x = t[16];
	let w = !f(), T;
	t[17] !== m || t[18] !== w ? (T = /* @__PURE__ */ S("button", {
		type: "submit",
		onClick: m,
		disabled: w,
		children: "Go"
	}), t[17] = m, t[18] = w, t[19] = T) : T = t[19];
	let E;
	return t[20] !== x || t[21] !== T || t[22] !== v ? (E = /* @__PURE__ */ C("form", {
		className: "usa-dt-pagination__go-to",
		children: [
			v,
			x,
			T
		]
	}), t[20] = x, t[21] = T, t[22] = v, t[23] = E) : E = t[23], E;
};
ho.propTypes = mo;
//#endregion
//#region components/pagination/Pagination.jsx
var go = {
	changePage: u.func.isRequired,
	totalItems: u.number.isRequired,
	currentPage: u.number,
	pageSize: u.number,
	resultsText: u.oneOfType([u.bool, u.element]),
	limitSelector: u.bool,
	changeLimit: u.func,
	goToPage: u.bool,
	id: u.string,
	hideLast: u.bool
}, _o = (t) => {
	let n = (0, q.c)(29), { changePage: r, totalItems: i, currentPage: a, pageSize: o, resultsText: s, limitSelector: c, changeLimit: l, goToPage: u, id: d, hideLast: f } = t, p = a === void 0 ? 1 : a, m = o === void 0 ? 10 : o, h = s === void 0 ? !1 : s, g = c === void 0 ? !1 : c, _ = l === void 0 ? vo : l, v = u === void 0 ? !1 : u, y = f === void 0 ? !1 : f, b = Math.ceil(i / m), x;
	n[0] !== p || n[1] !== m || n[2] !== h || n[3] !== i ? (x = () => {
		if (e.isValidElement(h)) return h;
		if (h) {
			let e = be(p, m, i);
			return /* @__PURE__ */ S("div", {
				className: "usa-dt-pagination__totals",
				children: `${ye(e.start, 0)}-${ye(e.end, 0)} of ${ye(i, 0)} results`
			});
		}
		return null;
	}, n[0] = p, n[1] = m, n[2] = h, n[3] = i, n[4] = x) : x = n[4];
	let w = x, T;
	n[5] !== _ || n[6] !== g || n[7] !== m ? (T = g ? /* @__PURE__ */ S(fo, {
		changeLimit: _,
		pageSize: m
	}) : null, n[5] = _, n[6] = g, n[7] = m, n[8] = T) : T = n[8];
	let E = T, D;
	n[9] !== r || n[10] !== v || n[11] !== d || n[12] !== b ? (D = v ? /* @__PURE__ */ S(ho, {
		changePage: r,
		totalPages: b,
		id: d
	}) : null, n[9] = r, n[10] = v, n[11] = d, n[12] = b, n[13] = D) : D = n[13];
	let O = D;
	if (!g && b <= 1) return null;
	let k;
	n[14] === w ? k = n[15] : (k = w(), n[14] = w, n[15] = k);
	let A;
	n[16] !== r || n[17] !== p || n[18] !== y || n[19] !== m || n[20] !== i ? (A = /* @__PURE__ */ S(lo, {
		changePage: r,
		totalItems: i,
		currentPage: p,
		pageSize: m,
		hideLast: y
	}), n[16] = r, n[17] = p, n[18] = y, n[19] = m, n[20] = i, n[21] = A) : A = n[21];
	let j;
	n[22] !== O || n[23] !== E || n[24] !== A ? (j = /* @__PURE__ */ C("div", {
		className: "usa-dt-pagination__wrapper",
		children: [
			E,
			A,
			O
		]
	}), n[22] = O, n[23] = E, n[24] = A, n[25] = j) : j = n[25];
	let M;
	return n[26] !== k || n[27] !== j ? (M = /* @__PURE__ */ C("div", {
		className: "usa-dt-pagination",
		children: [k, j]
	}), n[26] = k, n[27] = j, n[28] = M) : M = n[28], M;
};
_o.propTypes = go;
function vo() {}
//#endregion
//#region components/Picker.jsx
var yo = "usa-dt-picker__button-icon--svg", bo = {
	sortFn: u.func,
	icon: u.node,
	selectedOption: u.oneOfType([u.node, u.string]),
	className: u.string,
	id: u.string,
	options: u.arrayOf(u.shape({
		name: u.oneOfType([u.string, u.node]),
		value: u.any,
		onClick: u.func,
		classNames: u.string
	})),
	dropdownDirection: u.oneOf(["left", "right"]),
	isFixedWidth: u.bool,
	children: u.node,
	backgroundColor: u.string,
	notEnabled: u.bool,
	buttonClassNames: u.string,
	pickerListClassNames: u.string
}, xo = (e, t, n) => e.name === n ? -1 : t.name === n ? 1 : e.name < t.name ? -1 : +(e.name > t.name), So = (e) => {
	let t = (0, q.c)(67), { className: n, id: r, options: i, selectedOption: a, icon: s, sortFn: u, isFixedWidth: d, children: f, dropdownDirection: p, backgroundColor: m, notEnabled: h, buttonClassNames: g, pickerListClassNames: _ } = e, v = n === void 0 ? "" : n, y = r === void 0 ? "" : r, w = s === void 0 ? null : s, T = u === void 0 ? xo : u, E = d === void 0 ? !1 : d, D = p === void 0 ? "right" : p, O = m === void 0 ? "#1a4480" : m, k = g === void 0 ? "" : g, A = _ === void 0 ? "" : _, j = c(null), M = c(null), [N, P] = l(!1), F;
	t[0] === Symbol.for("react.memo_cache_sentinel") ? (F = {
		top: 0,
		width: 0,
		left: 0,
		right: 0
	}, t[0] = F) : F = t[0];
	let [I, L] = l(F), R;
	t[1] !== N || t[2] !== h ? (R = (e) => {
		e.preventDefault(), h || P(!N);
	}, t[1] = N, t[2] = h, t[3] = R) : R = t[3];
	let z = R, ee;
	t[4] !== a || t[5] !== T ? (ee = (e, t) => T(e, t, a), t[4] = a, t[5] = T, t[6] = ee) : ee = t[6];
	let te = ee, ne;
	t[7] === Symbol.for("react.memo_cache_sentinel") ? (ne = () => {
		M.current && j.current && L({
			top: M.current.offsetHeight,
			width: M.current.offsetWidth,
			left: M.current.offsetLeft,
			right: j.current.offsetWidth - (M.current.offsetWidth + M.current.offsetLeft)
		});
	}, t[7] = ne) : ne = t[7];
	let re = ne, B;
	t[8] !== I.width || t[9] !== E ? (B = () => {
		I.width !== 0 && E && M.current && M.current.offsetWidth !== I.width && re();
	}, t[8] = I.width, t[9] = E, t[10] = B) : B = t[10], o(B);
	let ie;
	t[11] !== N || t[12] !== y ? (ie = () => {
		let e = (e) => {
			N && j.current && !j.current.contains(e.target) && e.target.id !== `${y}-${yo}` && e.target.parentNode.id !== `${y}-${yo}` && P(!1);
		};
		return re(), document.addEventListener("click", e), () => {
			document.removeEventListener("click", e);
		};
	}, t[11] = N, t[12] = y, t[13] = ie) : ie = t[13];
	let V;
	t[14] === N ? V = t[15] : (V = [N], t[14] = N, t[15] = V), o(ie, V);
	let H;
	t[16] === Symbol.for("react.memo_cache_sentinel") ? (H = (e) => (t) => {
		e(t), P(!1);
	}, t[16] = H) : H = t[16];
	let U = H, W;
	t[17] !== I.left || t[18] !== I.right || t[19] !== I.top || t[20] !== I.width || t[21] !== D || t[22] !== E ? (W = () => {
		let e = {
			top: `${I.top}px`,
			left: `${I.left}px`
		};
		return E && D === "right" ? {
			...e,
			width: `${I.width}px`
		} : E && D === "left" ? {
			top: e.top,
			right: `${I.right}`,
			width: `${I.width}px`
		} : D === "left" ? {
			top: e.top,
			right: `${I.right}px`
		} : e;
	}, t[17] = I.left, t[18] = I.right, t[19] = I.top, t[20] = I.width, t[21] = D, t[22] = E, t[23] = W) : W = t[23];
	let G = W, ae = `usa-dt-picker ${v}`, oe;
	t[24] === O ? oe = t[25] : (oe = { backgroundColor: O }, t[24] = O, t[25] = oe);
	let se, K;
	t[26] === O ? (se = t[27], K = t[28]) : (se = { backgroundColor: O }, K = { backgroundColor: O }, t[26] = O, t[27] = se, t[28] = K);
	let ce = `usa-dt-picker__button ${k}`, le;
	t[29] === w ? le = t[30] : (le = w && /* @__PURE__ */ S("div", {
		className: "usa-dt-picker__icon",
		children: w
	}), t[29] = w, t[30] = le);
	let ue;
	t[31] !== O || t[32] !== f || t[33] !== N || t[34] !== y || t[35] !== a ? (ue = f || /* @__PURE__ */ C(x, { children: [/* @__PURE__ */ S("span", {
		className: "usa-dt-picker__button-text",
		style: { backgroundColor: O },
		children: a
	}), /* @__PURE__ */ C("span", {
		className: "usa-dt-picker__button-icon",
		children: [!N && /* @__PURE__ */ S($, {
			id: `${y}-${yo}`,
			icon: "chevron-down",
			alt: "Toggle menu",
			color: "#555"
		}), N && /* @__PURE__ */ S($, {
			id: `${y}-${yo}`,
			icon: "chevron-up",
			alt: "Toggle menu",
			color: "#555"
		})]
	})] }), t[31] = O, t[32] = f, t[33] = N, t[34] = y, t[35] = a, t[36] = ue) : ue = t[36];
	let de;
	t[37] !== K || t[38] !== ce || t[39] !== le || t[40] !== ue || t[41] !== z ? (de = /* @__PURE__ */ C("button", {
		style: K,
		ref: M,
		type: "button",
		"aria-label": "Dropdown Toggle Button",
		className: ce,
		onClick: z,
		children: [le, ue]
	}), t[37] = K, t[38] = ce, t[39] = le, t[40] = ue, t[41] = z, t[42] = de) : de = t[42];
	let fe = `usa-dt-picker__list ${A} ${N ? "" : "hide"}`, pe;
	t[43] === G ? pe = t[44] : (pe = G(), t[43] = G, t[44] = pe);
	let me;
	if (t[45] !== N || t[46] !== te || t[47] !== i || t[48] !== a) {
		let e;
		t[50] === Symbol.for("react.memo_cache_sentinel") ? (e = (e) => ({
			...e,
			onClick: U(e.onClick)
		}), t[50] = e) : e = t[50];
		let n;
		t[51] !== N || t[52] !== a ? (n = (e) => /* @__PURE__ */ S("li", {
			className: `usa-dt-picker__list-item ${e?.classNames ? e.classNames : ""}`,
			children: /* @__PURE__ */ S("button", {
				className: `usa-dt-picker__item ${e.name === a ? "active" : ""}`,
				type: "button",
				value: `${e.value || e.name}`,
				onClick: (t) => {
					t.preventDefault(), e.onClick(e.value);
				},
				onKeyDown: (t) => {
					e.name === "reddit" && t.key === "Tab" && P(!N);
				},
				children: e.component ? e.component : e.name
			})
		}, b()), t[51] = N, t[52] = a, t[53] = n) : n = t[53], me = i.sort(te).map(e).map(n), t[45] = N, t[46] = te, t[47] = i, t[48] = a, t[49] = me;
	} else me = t[49];
	let he;
	t[54] !== fe || t[55] !== pe || t[56] !== me ? (he = /* @__PURE__ */ S("ul", {
		className: fe,
		style: pe,
		children: me
	}), t[54] = fe, t[55] = pe, t[56] = me, t[57] = he) : he = t[57];
	let ge;
	t[58] !== se || t[59] !== de || t[60] !== he ? (ge = /* @__PURE__ */ C("div", {
		className: "usa-dt-picker__dropdown-container",
		style: se,
		children: [de, he]
	}), t[58] = se, t[59] = de, t[60] = he, t[61] = ge) : ge = t[61];
	let _e;
	return t[62] !== y || t[63] !== ae || t[64] !== oe || t[65] !== ge ? (_e = /* @__PURE__ */ S("div", {
		id: y,
		className: ae,
		ref: j,
		style: oe,
		children: ge
	}), t[62] = y, t[63] = ae, t[64] = oe, t[65] = ge, t[66] = _e) : _e = t[66], _e;
};
So.propTypes = bo;
//#endregion
//#region components/quarterPicker/QuarterButton.jsx
var Co = {
	disabled: u.bool,
	active: u.bool,
	showPeriods: u.bool,
	quarter: u.string,
	handleSelection: u.func,
	handleHover: u.func,
	handleBlur: u.func,
	toggleTooltip: u.func,
	title: u.string
}, wo = (e) => {
	let t = (0, q.c)(21), { disabled: n, active: r, quarter: i, handleSelection: a, toggleTooltip: o, title: s, handleHover: c, handleBlur: l, showPeriods: u } = e, d = s === void 0 ? "" : s, f = u === void 0 ? !1 : u, p = d || `Q ${i}`, m;
	t[0] !== n || t[1] !== c || t[2] !== i || t[3] !== f || t[4] !== o ? (m = () => {
		n ? o(i) : c(i, f ? "period" : "quarter");
	}, t[0] = n, t[1] = c, t[2] = i, t[3] = f, t[4] = o, t[5] = m) : m = t[5];
	let h = m, g;
	t[6] !== l || t[7] !== f || t[8] !== o ? (g = () => {
		o(0), l(f ? "period" : "quarter");
	}, t[6] = l, t[7] = f, t[8] = o, t[9] = g) : g = t[9];
	let _ = g, v;
	t[10] !== n || t[11] !== a || t[12] !== i ? (v = (e) => {
		e.preventDefault(), n || a(i);
	}, t[10] = n, t[11] = a, t[12] = i, t[13] = v) : v = t[13];
	let y = v, b = n ? "usa-dt-quarter-picker__quarter_disabled " : "";
	i === "1" ? b += "usa-dt-quarter-picker__quarter_first" : i === "4" ? b += "usa-dt-quarter-picker__quarter_last" : d.includes("-") && (b += "usa-dt-quarter-picker__quarter_double"), !n && r && (b += " usa-dt-quarter-picker__quarter_active");
	let x = `usa-dt-quarter-picker__quarter ${b}`, C;
	return t[14] !== n || t[15] !== y || t[16] !== h || t[17] !== _ || t[18] !== p || t[19] !== x ? (C = /* @__PURE__ */ S("button", {
		className: x,
		onMouseDown: y,
		onClick: y,
		onMouseOver: h,
		onMouseEnter: h,
		onFocus: h,
		onMouseLeave: _,
		onBlur: _,
		"aria-disabled": n,
		children: p
	}), t[14] = n, t[15] = y, t[16] = h, t[17] = _, t[18] = p, t[19] = x, t[20] = C) : C = t[20], C;
};
wo.propTypes = Co;
//#endregion
//#region components/quarterPicker/QuarterPicker.jsx
var To = (e) => {
	let t = (0, q.c)(7), n;
	t[0] === e ? n = t[1] : (n = e === void 0 ? [] : e, t[0] = e, t[1] = n);
	let [r, i] = l(n), a;
	t[2] === r ? a = t[3] : (a = (e) => {
		let t = parseInt(e, 10);
		i(r.map(Ao).filter((e) => e <= t).map(jo).concat([e]));
	}, t[2] = r, t[3] = a);
	let o = a, s;
	return t[4] !== o || t[5] !== r ? (s = [r, o], t[4] = o, t[5] = r, t[6] = s) : s = t[6], s;
}, Eo = [
	[{
		title: "1 - 2",
		id: "2",
		className: "double-period"
	}, {
		title: "3",
		id: "3"
	}],
	[
		{
			title: "4",
			id: "4"
		},
		{
			title: "5",
			id: "5"
		},
		{
			title: "6",
			id: "6"
		}
	],
	[
		{
			title: "7",
			id: "7"
		},
		{
			title: "8",
			id: "8"
		},
		{
			title: "9",
			id: "9"
		}
	],
	[
		{
			title: "10",
			id: "10"
		},
		{
			title: "11",
			id: "11"
		},
		{
			title: "12",
			id: "12"
		}
	]
], Do = (e, t) => t.some((t) => parseInt(t, 10) >= parseInt(e, 10)), Oo = {
	handleSelection: u.func,
	selectedQuarters: u.arrayOf(u.string),
	disabledQuarters: u.arrayOf(u.string),
	selectedPeriods: u.arrayOf(u.string),
	disabledPeriods: u.arrayOf(u.string),
	periodsPerQuarter: u.arrayOf(u.arrayOf(u.shape({
		title: u.string,
		id: u.string
	}))),
	showPeriods: u.bool,
	isCumulative: u.bool
}, ko = (e) => {
	let t = (0, q.c)(25), { handleSelection: n, disabledQuarters: r, disabledPeriods: i, periodsPerQuarter: a, selectedQuarters: o, selectedPeriods: s, showPeriods: c, isCumulative: u } = e, d;
	t[0] === r ? d = t[1] : (d = r === void 0 ? [] : r, t[0] = r, t[1] = d);
	let f = d, p;
	t[2] === i ? p = t[3] : (p = i === void 0 ? [] : i, t[2] = i, t[3] = p);
	let m = p, h = a === void 0 ? Eo : a, g;
	t[4] === o ? g = t[5] : (g = o === void 0 ? [] : o, t[4] = o, t[5] = g);
	let _ = g, v;
	t[6] === s ? v = t[7] : (v = s === void 0 ? [] : s, t[6] = s, t[7] = v);
	let y = v, x = c === void 0 ? !1 : c, w = u === void 0 ? !1 : u, [T, E] = l(""), [D, O] = l(""), k;
	t[8] === Symbol.for("react.memo_cache_sentinel") ? (k = (e, t) => {
		(t === void 0 ? "quarter" : t) === "quarter" ? O(e) : E(e);
	}, t[8] = k) : k = t[8];
	let A = k, j;
	t[9] === Symbol.for("react.memo_cache_sentinel") ? (j = (e) => {
		(e === void 0 ? "quarter" : e) === "quarter" ? O("") : E("");
	}, t[9] = j) : j = t[9];
	let M = j, N;
	t[10] !== m || t[11] !== f || t[12] !== n || t[13] !== w || t[14] !== T || t[15] !== h || t[16] !== D || t[17] !== y || t[18] !== _ || t[19] !== x ? (N = () => [
		,
		,
		,
		,
	].fill(0).map((e, t) => {
		let r = t + 1, i = `${r}`;
		if (x) {
			let e = h[t];
			return /* @__PURE__ */ C("li", {
				className: "usa-dt-quarter-picker__list-item usa-dt-quarter-picker__period-list-container",
				children: [/* @__PURE__ */ S("p", {
					className: e.every((e) => m.includes(e.id)) ? "disabled" : "",
					children: `Q${r}`
				}), /* @__PURE__ */ S("ul", {
					className: "usa-dt-quarter-picker__period-list",
					children: e.map((e) => /* @__PURE__ */ S("li", {
						className: Object.keys(e).includes("className") ? `${e.className} usa-dt-quarter-picker__list-item` : "usa-dt-quarter-picker__list-item",
						children: /* @__PURE__ */ S(wo, {
							showPeriods: x,
							quarter: e.id,
							title: e.title,
							disabled: m.includes(e.id),
							active: Do(e.id, y) || parseInt(T, 10) >= parseInt(e.id, 10),
							handleHover: A,
							handleBlur: M,
							handleSelection: n,
							toggleTooltip: Mo
						})
					}, b()))
				})]
			}, b());
		}
		return /* @__PURE__ */ S("li", {
			className: "usa-dt-quarter-picker__list-item",
			children: /* @__PURE__ */ S(wo, {
				quarter: i,
				disabled: f.includes(i),
				active: w ? Do(i, _) || parseInt(D, 10) >= r : _.includes(i) || D === i,
				handleSelection: n,
				handleHover: A,
				handleBlur: M,
				toggleTooltip: No
			})
		}, b());
	}), t[10] = m, t[11] = f, t[12] = n, t[13] = w, t[14] = T, t[15] = h, t[16] = D, t[17] = y, t[18] = _, t[19] = x, t[20] = N) : N = t[20];
	let P = N, F;
	t[21] === P ? F = t[22] : (F = P(), t[21] = P, t[22] = F);
	let I;
	return t[23] === F ? I = t[24] : (I = /* @__PURE__ */ S("div", {
		className: "usa-dt-quarter-picker",
		children: /* @__PURE__ */ S("ul", {
			className: "usa-dt-quarter-picker__list",
			children: F
		})
	}), t[23] = F, t[24] = I), I;
};
ko.propTypes = Oo;
function Ao(e) {
	return parseInt(e, 10);
}
function jo(e) {
	return `${e}`;
}
function Mo() {}
function No() {}
//#endregion
//#region helpers/searchBarHelper.js
var Po = (e, t, n) => e && t === e ? !1 : !(t && e.length < n), Fo = (e, t) => !!(t && !e.target.value), Io = {
	onSearch: u.func,
	minChars: u.number,
	isDisabled: u.bool,
	throttleOnChange: u.number,
	inputTitle: u.string,
	placeholder: u.string
}, Lo = (e) => {
	let t = (0, q.c)(33), { onSearch: n, minChars: r, isDisabled: i, throttleOnChange: a, inputTitle: o, placeholder: s } = e, c = r === void 0 ? 2 : r, u = i === void 0 ? !1 : i, d = a === void 0 ? 500 : a, f = o === void 0 ? "Search Input" : o, p = s === void 0 ? "" : s, [m, h] = l(""), [g, _] = l(""), y;
	t[0] === n ? y = t[1] : (y = () => {
		h(""), n(""), _("");
	}, t[0] = n, t[1] = y);
	let b = y, x;
	t[2] !== b || t[3] !== g ? (x = (e) => Fo(e, g) ? b() : h(e.target.value), t[2] = b, t[3] = g, t[4] = x) : x = t[4];
	let w;
	t[5] !== x || t[6] !== d ? (w = v(x, d), t[5] = x, t[6] = d, t[7] = w) : w = t[7];
	let T = w, E;
	t[8] !== n || t[9] !== m ? (E = () => {
		let e = m.trim();
		n(e), h(e), _(e);
	}, t[8] = n, t[9] = m, t[10] = E) : E = t[10];
	let D = E, O;
	t[11] !== c || t[12] !== D || t[13] !== b || t[14] !== g || t[15] !== m ? (O = (e) => (e.preventDefault(), Po(m, g, c) ? D() : b()), t[11] = c, t[12] = D, t[13] = b, t[14] = g, t[15] = m, t[16] = O) : O = t[16];
	let k = O, A = "search";
	(m && g === m || g && m.length < c) && (A = "times");
	let j;
	t[17] !== f || t[18] !== u || t[19] !== T || t[20] !== p || t[21] !== m ? (j = /* @__PURE__ */ S("input", {
		className: "usa-dt-search-bar__input",
		"aria-label": "Search Input",
		title: f,
		value: m,
		type: "text",
		disabled: u,
		onChange: T,
		placeholder: p
	}), t[17] = f, t[18] = u, t[19] = T, t[20] = p, t[21] = m, t[22] = j) : j = t[22];
	let M = m.length < c && !g || u, N = A === "search" ? "Submit Search Button" : "Remove Input Value Button", P;
	t[23] === A ? P = t[24] : (P = /* @__PURE__ */ S($, { icon: A }), t[23] = A, t[24] = P);
	let F;
	t[25] !== k || t[26] !== M || t[27] !== N || t[28] !== P ? (F = /* @__PURE__ */ S("button", {
		disabled: M,
		"aria-label": "Search Button",
		title: N,
		onClick: k,
		className: "usa-dt-search-bar__button",
		children: P
	}), t[25] = k, t[26] = M, t[27] = N, t[28] = P, t[29] = F) : F = t[29];
	let I;
	return t[30] !== j || t[31] !== F ? (I = /* @__PURE__ */ C("form", {
		className: "usa-dt-search-bar",
		children: [j, F]
	}), t[30] = j, t[31] = F, t[32] = I) : I = t[32], I;
};
Lo.propTypes = Io;
//#endregion
//#region components/messages/GenericMessage.jsx
var Ro = {
	title: u.string.isRequired,
	description: u.string,
	icon: u.object,
	className: u.string
}, zo = (e) => {
	let t = (0, q.c)(11), { icon: n, title: r, description: i, className: a } = e, o = `usda-message${a && ` usda-message_${a}`}`, s;
	t[0] === n ? s = t[1] : (s = n && /* @__PURE__ */ S("div", {
		className: "usda-message__icon",
		children: n
	}), t[0] = n, t[1] = s);
	let c;
	t[2] === r ? c = t[3] : (c = /* @__PURE__ */ S("div", {
		className: "usda-message__title",
		children: r
	}), t[2] = r, t[3] = c);
	let l;
	t[4] === i ? l = t[5] : (l = i && /* @__PURE__ */ S("div", {
		className: "usda-message__description",
		children: i
	}), t[4] = i, t[5] = l);
	let u;
	return t[6] !== o || t[7] !== s || t[8] !== c || t[9] !== l ? (u = /* @__PURE__ */ C("div", {
		className: o,
		children: [
			s,
			c,
			l
		]
	}), t[6] = o, t[7] = s, t[8] = c, t[9] = l, t[10] = u) : u = t[10], u;
};
zo.propTypes = Ro;
//#endregion
//#region components/messages/ErrorMessage.jsx
var Bo = { description: u.string }, Vo = (e) => {
	let t = (0, q.c)(3), { description: n } = e, r = n === void 0 ? "Something went wrong while gathering your data." : n, i;
	t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = /* @__PURE__ */ S($, { icon: "exclamation-triangle" }), t[0] = i) : i = t[0];
	let a = i, o;
	return t[1] === r ? o = t[2] : (o = /* @__PURE__ */ S(zo, {
		description: r,
		title: "An error occurred",
		icon: a,
		className: "error"
	}), t[1] = r, t[2] = o), o;
};
Vo.propTypes = Bo;
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
function Ho() {
	return Ho = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ho.apply(null, arguments);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function Uo(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function Wo(e, t) {
	return Wo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Wo(e, t);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function Go(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Wo(e, t);
}
//#endregion
//#region node_modules/dom-helpers/esm/hasClass.js
function Ko(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/dom-helpers/esm/addClass.js
function qo(e, t) {
	e.classList ? e.classList.add(t) : Ko(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
//#endregion
//#region node_modules/dom-helpers/esm/removeClass.js
function Jo(e, t) {
	return e.replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function Yo(e, t) {
	e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Jo(e.className, t) : e.setAttribute("class", Jo(e.className && e.className.baseVal || "", t));
}
//#endregion
//#region node_modules/react-transition-group/esm/config.js
var Xo = { disabled: !1 };
//#endregion
//#region node_modules/react-transition-group/esm/utils/PropTypes.js
ce();
var Zo = K.env.NODE_ENV === "production" ? null : u.oneOfType([u.number, u.shape({
	enter: u.number,
	exit: u.number,
	appear: u.number
}).isRequired]), Qo = K.env.NODE_ENV === "production" ? null : u.oneOfType([
	u.string,
	u.shape({
		enter: u.string,
		exit: u.string,
		active: u.string
	}),
	u.shape({
		enter: u.string,
		enterDone: u.string,
		enterActive: u.string,
		exit: u.string,
		exitDone: u.string,
		exitActive: u.string
	})
]), $o = e.createContext(null), es = function(e) {
	return e.scrollTop;
};
//#endregion
//#region node_modules/react-transition-group/esm/Transition.js
ce();
var ts = "unmounted", ns = "exited", rs = "entering", is = "entered", as = "exiting", os = /*#__PURE__*/ function(t) {
	Go(n, t);
	function n(e, n) {
		var r = t.call(this, e, n) || this, i = n, a = i && !i.isMounting ? e.enter : e.appear, o;
		return r.appearStatus = null, e.in ? a ? (o = ns, r.appearStatus = rs) : o = is : o = e.unmountOnExit || e.mountOnEnter ? ts : ns, r.state = { status: o }, r.nextCallback = null, r;
	}
	n.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: ns } : null;
	};
	var r = n.prototype;
	return r.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, r.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = rs) : (n === "entering" || n === "entered") && (t = as);
		}
		this.updateStatus(!1, t);
	}, r.componentWillUnmount = function() {
		this.cancelNextCallback();
	}, r.getTimeouts = function() {
		var e = this.props.timeout, t = n = r = e, n, r;
		return e != null && typeof e != "number" && (t = e.exit, n = e.enter, r = e.appear === void 0 ? n : e.appear), {
			exit: t,
			enter: n,
			appear: r
		};
	}, r.updateStatus = function(e, t) {
		if (e === void 0 && (e = !1), t !== null) if (this.cancelNextCallback(), t === "entering") {
			if (this.props.unmountOnExit || this.props.mountOnEnter) {
				var n = this.props.nodeRef ? this.props.nodeRef.current : w.findDOMNode(this);
				n && es(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: ts });
	}, r.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [w.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || Xo.disabled) {
			this.safeSetState({ status: is }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: rs }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: is }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, r.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : w.findDOMNode(this);
		if (!t || Xo.disabled) {
			this.safeSetState({ status: ns }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: as }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: ns }, function() {
					e.props.onExited(r);
				});
			});
		});
	}, r.cancelNextCallback = function() {
		this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
	}, r.safeSetState = function(e, t) {
		t = this.setNextCallback(t), this.setState(e, t);
	}, r.setNextCallback = function(e) {
		var t = this, n = !0;
		return this.nextCallback = function(r) {
			n && (n = !1, t.nextCallback = null, e(r));
		}, this.nextCallback.cancel = function() {
			n = !1;
		}, this.nextCallback;
	}, r.onTransitionEnd = function(e, t) {
		this.setNextCallback(t);
		var n = this.props.nodeRef ? this.props.nodeRef.current : w.findDOMNode(this), r = e == null && !this.props.addEndListener;
		if (!n || r) {
			setTimeout(this.nextCallback, 0);
			return;
		}
		if (this.props.addEndListener) {
			var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback], a = i[0], o = i[1];
			this.props.addEndListener(a, o);
		}
		e != null && setTimeout(this.nextCallback, e);
	}, r.render = function() {
		var t = this.state.status;
		if (t === "unmounted") return null;
		var n = this.props, r = n.children;
		n.in, n.mountOnEnter, n.unmountOnExit, n.appear, n.enter, n.exit, n.timeout, n.addEndListener, n.onEnter, n.onEntering, n.onEntered, n.onExit, n.onExiting, n.onExited, n.nodeRef;
		var i = Uo(n, [
			"children",
			"in",
			"mountOnEnter",
			"unmountOnExit",
			"appear",
			"enter",
			"exit",
			"timeout",
			"addEndListener",
			"onEnter",
			"onEntering",
			"onEntered",
			"onExit",
			"onExiting",
			"onExited",
			"nodeRef"
		]);
		return /*#__PURE__*/ e.createElement($o.Provider, { value: null }, typeof r == "function" ? r(t, i) : e.cloneElement(e.Children.only(r), i));
	}, n;
}(e.Component);
os.contextType = $o, os.propTypes = K.env.NODE_ENV === "production" ? {} : {
	nodeRef: u.shape({ current: typeof Element > "u" ? u.any : function(e, t, n, r, i, a) {
		var o = e[t];
		return u.instanceOf(o && "ownerDocument" in o ? o.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, a);
	} }),
	children: u.oneOfType([u.func.isRequired, u.element.isRequired]).isRequired,
	in: u.bool,
	mountOnEnter: u.bool,
	unmountOnExit: u.bool,
	appear: u.bool,
	enter: u.bool,
	exit: u.bool,
	timeout: function(e) {
		var t = Zo;
		e.addEndListener || (t = t.isRequired);
		var n = [...arguments].slice(1);
		return t.apply(void 0, [e].concat(n));
	},
	addEndListener: u.func,
	onEnter: u.func,
	onEntering: u.func,
	onEntered: u.func,
	onExit: u.func,
	onExiting: u.func,
	onExited: u.func
};
function ss() {}
//#endregion
//#region node_modules/react-transition-group/esm/CSSTransition.js
os.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: ss,
	onEntering: ss,
	onEntered: ss,
	onExit: ss,
	onExiting: ss,
	onExited: ss
}, os.UNMOUNTED = ts, os.EXITED = ns, os.ENTERING = rs, os.ENTERED = is, os.EXITING = as, ce();
var cs = function(e, t) {
	return e && t && t.split(" ").forEach(function(t) {
		return qo(e, t);
	});
}, ls = function(e, t) {
	return e && t && t.split(" ").forEach(function(t) {
		return Yo(e, t);
	});
}, us = /*#__PURE__*/ function(t) {
	Go(n, t);
	function n() {
		var e, n = [...arguments];
		return e = t.call.apply(t, [this].concat(n)) || this, e.appliedClasses = {
			appear: {},
			enter: {},
			exit: {}
		}, e.onEnter = function(t, n) {
			var r = e.resolveArguments(t, n), i = r[0], a = r[1];
			e.removeClasses(i, "exit"), e.addClass(i, a ? "appear" : "enter", "base"), e.props.onEnter && e.props.onEnter(t, n);
		}, e.onEntering = function(t, n) {
			var r = e.resolveArguments(t, n), i = r[0], a = r[1] ? "appear" : "enter";
			e.addClass(i, a, "active"), e.props.onEntering && e.props.onEntering(t, n);
		}, e.onEntered = function(t, n) {
			var r = e.resolveArguments(t, n), i = r[0], a = r[1] ? "appear" : "enter";
			e.removeClasses(i, a), e.addClass(i, a, "done"), e.props.onEntered && e.props.onEntered(t, n);
		}, e.onExit = function(t) {
			var n = e.resolveArguments(t)[0];
			e.removeClasses(n, "appear"), e.removeClasses(n, "enter"), e.addClass(n, "exit", "base"), e.props.onExit && e.props.onExit(t);
		}, e.onExiting = function(t) {
			var n = e.resolveArguments(t)[0];
			e.addClass(n, "exit", "active"), e.props.onExiting && e.props.onExiting(t);
		}, e.onExited = function(t) {
			var n = e.resolveArguments(t)[0];
			e.removeClasses(n, "exit"), e.addClass(n, "exit", "done"), e.props.onExited && e.props.onExited(t);
		}, e.resolveArguments = function(t, n) {
			return e.props.nodeRef ? [e.props.nodeRef.current, t] : [t, n];
		}, e.getClassNames = function(t) {
			var n = e.props.classNames, r = typeof n == "string", i = r && n ? n + "-" : "", a = r ? "" + i + t : n[t];
			return {
				baseClassName: a,
				activeClassName: r ? a + "-active" : n[t + "Active"],
				doneClassName: r ? a + "-done" : n[t + "Done"]
			};
		}, e;
	}
	var r = n.prototype;
	return r.addClass = function(e, t, n) {
		var r = this.getClassNames(t)[n + "ClassName"], i = this.getClassNames("enter").doneClassName;
		t === "appear" && n === "done" && i && (r += " " + i), n === "active" && e && es(e), r && (this.appliedClasses[t][n] = r, cs(e, r));
	}, r.removeClasses = function(e, t) {
		var n = this.appliedClasses[t], r = n.base, i = n.active, a = n.done;
		this.appliedClasses[t] = {}, r && ls(e, r), i && ls(e, i), a && ls(e, a);
	}, r.render = function() {
		var t = this.props;
		t.classNames;
		var n = Uo(t, ["classNames"]);
		return /*#__PURE__*/ e.createElement(os, Ho({}, n, {
			onEnter: this.onEnter,
			onEntered: this.onEntered,
			onEntering: this.onEntering,
			onExit: this.onExit,
			onExiting: this.onExiting,
			onExited: this.onExited
		}));
	}, n;
}(e.Component);
us.defaultProps = { classNames: "" }, us.propTypes = K.env.NODE_ENV === "production" ? {} : Ho({}, os.propTypes, {
	classNames: Qo,
	onEnter: u.func,
	onEntering: u.func,
	onEntered: u.func,
	onExit: u.func,
	onExiting: u.func,
	onExited: u.func
});
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function ds(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
//#endregion
//#region node_modules/react-transition-group/esm/utils/ChildMapping.js
function fs(e, n) {
	var r = function(e) {
		return n && i(e) ? n(e) : e;
	}, a = Object.create(null);
	return e && t.map(e, function(e) {
		return e;
	}).forEach(function(e) {
		a[e.key] = r(e);
	}), a;
}
function ps(e, t) {
	e ||= {}, t ||= {};
	function n(n) {
		return n in t ? t[n] : e[n];
	}
	var r = Object.create(null), i = [];
	for (var a in e) a in t ? i.length && (r[a] = i, i = []) : i.push(a);
	var o, s = {};
	for (var c in t) {
		if (r[c]) for (o = 0; o < r[c].length; o++) {
			var l = r[c][o];
			s[r[c][o]] = n(l);
		}
		s[c] = n(c);
	}
	for (o = 0; o < i.length; o++) s[i[o]] = n(i[o]);
	return s;
}
function ms(e, t, n) {
	return n[t] == null ? e.props[t] : n[t];
}
function hs(e, t) {
	return fs(e.children, function(r) {
		return n(r, {
			onExited: t.bind(null, r),
			in: !0,
			appear: ms(r, "appear", e),
			enter: ms(r, "enter", e),
			exit: ms(r, "exit", e)
		});
	});
}
function gs(e, t, r) {
	var a = fs(e.children), o = ps(t, a);
	return Object.keys(o).forEach(function(s) {
		var c = o[s];
		if (i(c)) {
			var l = s in t, u = s in a, d = t[s], f = i(d) && !d.props.in;
			u && (!l || f) ? o[s] = n(c, {
				onExited: r.bind(null, c),
				in: !0,
				exit: ms(c, "exit", e),
				enter: ms(c, "enter", e)
			}) : !u && l && !f ? o[s] = n(c, { in: !1 }) : u && l && i(d) && (o[s] = n(c, {
				onExited: r.bind(null, c),
				in: d.props.in,
				exit: ms(c, "exit", e),
				enter: ms(c, "enter", e)
			}));
		}
	}), o;
}
//#endregion
//#region node_modules/react-transition-group/esm/TransitionGroup.js
ce();
var _s = Object.values || function(e) {
	return Object.keys(e).map(function(t) {
		return e[t];
	});
}, vs = {
	component: "div",
	childFactory: function(e) {
		return e;
	}
}, ys = /*#__PURE__*/ function(t) {
	Go(n, t);
	function n(e, n) {
		var r = t.call(this, e, n) || this;
		return r.state = {
			contextValue: { isMounting: !0 },
			handleExited: r.handleExited.bind(ds(r)),
			firstRender: !0
		}, r;
	}
	var r = n.prototype;
	return r.componentDidMount = function() {
		this.mounted = !0, this.setState({ contextValue: { isMounting: !1 } });
	}, r.componentWillUnmount = function() {
		this.mounted = !1;
	}, n.getDerivedStateFromProps = function(e, t) {
		var n = t.children, r = t.handleExited;
		return {
			children: t.firstRender ? hs(e, r) : gs(e, n, r),
			firstRender: !1
		};
	}, r.handleExited = function(e, t) {
		var n = fs(this.props.children);
		e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
			var n = Ho({}, t.children);
			return delete n[e.key], { children: n };
		}));
	}, r.render = function() {
		var t = this.props, n = t.component, r = t.childFactory, i = Uo(t, ["component", "childFactory"]), a = this.state.contextValue, o = _s(this.state.children).map(r);
		return delete i.appear, delete i.enter, delete i.exit, n === null ? /*#__PURE__*/ e.createElement($o.Provider, { value: a }, o) : /*#__PURE__*/ e.createElement($o.Provider, { value: a }, /*#__PURE__*/ e.createElement(n, i, o));
	}, n;
}(e.Component);
ys.propTypes = K.env.NODE_ENV === "production" ? {} : {
	component: u.any,
	children: u.node,
	appear: u.bool,
	enter: u.bool,
	exit: u.bool,
	childFactory: u.func
}, ys.defaultProps = vs;
//#endregion
//#region components/messages/LoadingMessage.jsx
var bs = (e) => {
	let t = (0, q.c)(4), { loadingText: n } = e, r = n === void 0 ? "Gathering your data..." : n, i;
	t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
		exit: 225,
		enter: 195
	}, t[0] = i) : i = t[0];
	let a;
	t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = /* @__PURE__ */ S("div", {
		className: "usda-loading-animation",
		children: /* @__PURE__ */ C("svg", {
			className: "usda-loading-bars",
			xmlns: "http://www.w3.org/2000/svg",
			version: "1.1",
			width: "50",
			height: "50",
			style: { opacity: 0 },
			children: [
				/* @__PURE__ */ S("rect", {
					className: "bar-one",
					x: "0",
					y: "0",
					height: "50",
					width: "10"
				}),
				/* @__PURE__ */ S("rect", {
					className: "bar-two",
					x: "13",
					y: "0",
					height: "50",
					width: "10"
				}),
				/* @__PURE__ */ S("rect", {
					className: "bar-three",
					x: "26",
					y: "0",
					height: "50",
					width: "10"
				}),
				/* @__PURE__ */ S("rect", {
					className: "bar-four",
					x: "39",
					y: "0",
					height: "50",
					width: "10"
				})
			]
		})
	}), t[1] = a) : a = t[1];
	let o;
	return t[2] === r ? o = t[3] : (o = /* @__PURE__ */ S(ys, {
		className: "usda-message usda-message_loading",
		children: /* @__PURE__ */ S(us, {
			classNames: "usda-loading-animation__container",
			timeout: i,
			exit: !0,
			children: /* @__PURE__ */ C("div", {
				className: "usda-loading-animation__container",
				children: [a, /* @__PURE__ */ S("div", {
					className: "loading-message",
					children: r
				})]
			})
		})
	}), t[2] = r, t[3] = o), o;
};
bs.propTypes = { loadingText: u.string };
//#endregion
//#region components/messages/NoResultsMessage.jsx
var xs = () => {
	let e = (0, q.c)(1), t;
	return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = /* @__PURE__ */ S(zo, {
		title: "No Results",
		description: "No available data to display.",
		className: "no-results"
	}), e[0] = t) : t = e[0], t;
}, Ss = {
	data: u.object,
	columns: u.array,
	oddClass: u.string,
	divider: u.string
}, Cs = (e) => {
	let t = (0, q.c)(25), { data: n, columns: r, oddClass: i, divider: a } = e, [o, s] = l(n.expanded || !1), c = o ? "chevron-down" : "chevron-right", u;
	if (t[0] !== r || t[1] !== n || t[2] !== a || t[3] !== o || t[4] !== c || t[5] !== i) {
		let e = r.map(ws), l;
		t[7] === o ? l = t[8] : (l = () => {
			s(!o);
		}, t[7] = o, t[8] = l);
		let d = l, f;
		t[9] !== r || t[10] !== a ? (f = () => r.map((e, t) => t === 0 ? /* @__PURE__ */ S("td", {
			className: "usda-table__cell usda-table__cell_child",
			children: /* @__PURE__ */ S("div", {
				className: "usda-table__child-cell-content",
				children: a
			})
		}, b()) : /* @__PURE__ */ S("td", {
			className: "usda-table__cell usda-table__cell_child",
			children: /* @__PURE__ */ S("div", {
				className: "usda-table__child-cell-content",
				children: "\xA0"
			})
		}, b())), t[9] = r, t[10] = a, t[11] = f) : f = t[11];
		let p = f, m = `usda-table__child-row usda-table__child-row_divider${i}`, h;
		t[12] === p ? h = t[13] : (h = p(), t[12] = p, t[13] = h);
		let g;
		t[14] !== m || t[15] !== h ? (g = /* @__PURE__ */ S("tr", {
			className: m,
			children: h
		}), t[14] = m, t[15] = h, t[16] = g) : g = t[16];
		let _ = g, v;
		t[17] === a ? v = t[18] : (v = (e, t) => e ? t && a && e.title === "name" ? a : e.displayName : null, t[17] = a, t[18] = v);
		let y = v, w = o ? "usda-table__row_is-expanded" : "", T;
		t[19] !== r || t[20] !== n || t[21] !== y || t[22] !== c || t[23] !== d ? (T = (e, t) => e === "name" && n.children ? /* @__PURE__ */ S("td", {
			className: "usda-table__cell",
			"data-label": y(r[t]),
			children: /* @__PURE__ */ C("div", {
				className: "usda-table__expandable-cell-content",
				children: [/* @__PURE__ */ S("button", {
					className: "usda-table__expand-button",
					"aria-label": "Expand Table Row Button",
					onClick: d,
					children: /* @__PURE__ */ S($, { icon: c })
				}), n.name]
			})
		}, b()) : /* @__PURE__ */ S("td", {
			className: `usda-table__cell${e === "name" ? " usda-table__cell_name" : ""}${r[t].right ? " usda-table__cell_right" : ""}`,
			"data-label": y(r[t]),
			children: n[e]
		}, b()), t[19] = r, t[20] = n, t[21] = y, t[22] = c, t[23] = d, t[24] = T) : T = t[24], u = /* @__PURE__ */ C(x, { children: [/* @__PURE__ */ S("tr", {
			className: `usda-table__row${i} usda-table__row_expandable ${w}`,
			children: e.map(T)
		}), n.children && o ? /* @__PURE__ */ C(x, { children: [a && _, n.children.map((t, a) => /* @__PURE__ */ S("tr", {
			className: `usda-table__child-row${a === n.children.length - 1 ? " usda-table__child-row_last" : ""}${i}`,
			children: e.map((e, n) => /* @__PURE__ */ S("td", {
				className: `usda-table__cell ${r[n].right ? " usda-table__cell_right" : ""} usda-table__cell_child`,
				"data-label": y(r[n], !0),
				children: /* @__PURE__ */ S("div", {
					className: "usda-table__child-cell-content",
					children: t[e]
				})
			}, b()))
		}, b()))] }) : null] }), t[0] = r, t[1] = n, t[2] = a, t[3] = o, t[4] = c, t[5] = i, t[6] = u;
	} else u = t[6];
	return u;
};
Cs.propTypes = Ss;
function ws(e) {
	let { title: t } = e;
	return t;
}
//#endregion
//#region components/table/TableHeader.jsx
var Ts = (e) => {
	let t = (0, q.c)(15), { clickedSort: n, displayName: r, currentSort: i, title: a } = e, o = i?.field === a && i?.direction === "asc" ? " table-header__icon_active" : "", s = i?.field === a && i?.direction === "desc" ? " table-header__icon_active" : "", c = `table-header__icon${o}`, l = `Sort table by ascending ${r}`, u = `Sort table by ascending ${r}`, d;
	t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = /* @__PURE__ */ S($, {
		size: "2x",
		icon: "caret-up"
	}), t[0] = d) : d = t[0];
	let f;
	t[1] !== n || t[2] !== c || t[3] !== l || t[4] !== u ? (f = /* @__PURE__ */ S("button", {
		type: "button",
		onClick: n,
		className: c,
		value: "asc",
		title: l,
		"aria-label": u,
		children: d
	}), t[1] = n, t[2] = c, t[3] = l, t[4] = u, t[5] = f) : f = t[5];
	let p = `table-header__icon${s}`, m = `Sort table by descending ${r}`, h = `Sort table by descending ${r}`, g;
	t[6] === Symbol.for("react.memo_cache_sentinel") ? (g = /* @__PURE__ */ S($, {
		size: "2x",
		icon: "caret-down"
	}), t[6] = g) : g = t[6];
	let _;
	t[7] !== n || t[8] !== p || t[9] !== m || t[10] !== h ? (_ = /* @__PURE__ */ S("button", {
		type: "button",
		onClick: n,
		className: p,
		value: "desc",
		title: m,
		"aria-label": h,
		children: g
	}), t[7] = n, t[8] = p, t[9] = m, t[10] = h, t[11] = _) : _ = t[11];
	let v;
	return t[12] !== _ || t[13] !== f ? (v = /* @__PURE__ */ C("div", {
		className: "table-header__sort",
		children: [f, _]
	}), t[12] = _, t[13] = f, t[14] = v) : v = t[14], v;
};
Ts.propTypes = {
	title: u.string.isRequired,
	displayName: u.oneOfType([u.string, u.element]).isRequired,
	currentSort: p({
		direction: d(["asc", "desc"]),
		field: u.string
	}).isRequired,
	clickedSort: u.func.isRequired
};
var Es = {
	title: u.string.isRequired,
	displayName: u.oneOfType([u.string, u.element]).isRequired,
	currentSort: p({
		direction: d(["asc", "desc"]),
		field: u.string
	}),
	updateSort: u.func,
	right: u.bool,
	columnSpan: u.string,
	rowSpan: u.string,
	subColumnNames: u.arrayOf(u.oneOfType([u.string, u.object])),
	className: u.string,
	icon: u.element,
	bodyHeader: u.bool,
	stickyFirstColumn: u.bool,
	columnWidth: u.number,
	highlightedColumns: u.object,
	index: u.number,
	isMobile: u.bool,
	isStacked: u.bool
}, Ds = ({ title: e, className: t = "", displayName: n = "", currentSort: r, updateSort: i, right: a, columnSpan: o = "1", rowSpan: s, subColumnNames: c = [], icon: l = /* @__PURE__ */ S(x, {}), bodyHeader: u = !1, stickyFirstColumn: d = !1, columnWidth: f, highlightedColumns: p, index: m, isMobile: h = !1, isStacked: g = !1 }) => {
	let _ = (t, n = e) => {
		i(n, t.target.value);
	}, v = () => s === "0" ? null : c.length ? "1" : "2";
	return g && h ? /* @__PURE__ */ S("div", {
		className: `${t} table-header${u ? " table-header_body-header" : ""} 
            ${d && m === 0 ? " stickyColumn" : ""} ${p ? `table-header__subaward-color-${p.highlightedColumns}` : ""}`,
		style: {
			minWidth: f,
			display: "table-column"
		},
		colSpan: f ? "" : o,
		rowSpan: v(),
		children: /* @__PURE__ */ S("div", {
			className: `table-header__content${a ? " table-header__content_right" : ""}`,
			children: /* @__PURE__ */ C("div", {
				className: "table-header__label",
				children: [
					n,
					l && l,
					i && !c.length && n && /* @__PURE__ */ S(Ts, {
						clickedSort: _,
						currentSort: r,
						title: e,
						displayName: n
					})
				]
			})
		})
	}) : /* @__PURE__ */ S("th", {
		className: `${t} table-header${u ? " table-header_body-header" : ""} 
            ${d && m === 0 ? " stickyColumn" : ""} ${p ? `table-header__subaward-color-${p.highlightedColumns}` : ""}`,
		style: { minWidth: f },
		colSpan: f ? "" : o,
		rowSpan: v(),
		scope: "col",
		children: /* @__PURE__ */ S("div", {
			className: `table-header__content${a ? " table-header__content_right" : ""}`,
			children: /* @__PURE__ */ C("div", {
				className: "table-header__label",
				children: [
					n,
					l && l,
					i && !c.length && n && /* @__PURE__ */ S(Ts, {
						clickedSort: _,
						currentSort: r,
						title: e,
						displayName: n
					})
				]
			})
		})
	});
};
Ds.propTypes = Es;
var Os = {
	prefix: "fas",
	iconName: "file-arrow-down",
	icon: [
		384,
		512,
		["file-download"],
		"f56d",
		"M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM175 441c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-86.1c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 86.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64z"
	]
}, ks = {
	prefix: "fas",
	iconName: "envelope",
	icon: [
		512,
		512,
		[
			128386,
			9993,
			61443
		],
		"f0e0",
		"M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
	]
}, As = {
	prefix: "fas",
	iconName: "link",
	icon: [
		576,
		512,
		[128279, "chain"],
		"f0c1",
		"M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"
	]
}, js = {
	prefix: "fas",
	iconName: "spinner",
	icon: [
		512,
		512,
		[],
		"f110",
		"M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z"
	]
}, Ms = {
	prefix: "fas",
	iconName: "circle-check",
	icon: [
		512,
		512,
		[61533, "check-circle"],
		"f058",
		"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"
	]
}, Ns = {
	prefix: "fas",
	iconName: "angles-right",
	icon: [
		448,
		512,
		[187, "angle-double-right"],
		"f101",
		"M439.1 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L371.2 256 233.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L179.2 256 41.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
	]
}, Ps = {
	row: u.array,
	columns: u.array,
	iValue: u.number,
	atMaxLevel: u.bool
}, Fs = (e) => {
	let t = (0, q.c)(10), [n, r] = l(!1), i;
	t[0] === n ? i = t[1] : (i = (e) => {
		e.stopPropagation(), r(!n);
	}, t[0] = n, t[1] = i);
	let a = i, o;
	t[2] === e.atMaxLevel ? o = t[3] : (o = e.atMaxLevel ? null : /* @__PURE__ */ C("div", {
		className: "usda-table__cell usda-table__cell_right button-type__text-left-icon-light",
		children: [
			"View next level",
			" ",
			/* @__PURE__ */ S($, { icon: Ns })
		]
	}), t[2] = e.atMaxLevel, t[3] = o);
	let s = o, c;
	return t[4] !== a || t[5] !== e.columns || t[6] !== e.row || t[7] !== e.stickyFirstColumn || t[8] !== n ? (c = e.columns.length >= 6 ? /* @__PURE__ */ C("div", {
		className: `collapsible-row-div ${n ? "row-opened" : ""}`,
		children: [n && /* @__PURE__ */ S("div", {
			className: "collapsible-row--content",
			children: /* @__PURE__ */ S("div", {
				className: "collapsible-row--content-wrapper",
				children: e.row.map((t, n) => {
					if (n >= 6) return e.columns[n]?.bodyHeader ? /* @__PURE__ */ S(Ds, {
						className: "table-header_body-header",
						stickyFirstColumn: e.stickyFirstColumn,
						index: n,
						...t
					}, b()) : /* @__PURE__ */ C("div", {
						className: `usda-table__cell${e.columns[n]?.right ? " usda-table__cell_right" : ""}
                                                ${n === 0 && e.stickyFirstColumn ? " stickyColumn" : ""} `,
						children: [e.columns[n] && /* @__PURE__ */ S("div", {
							className: "usda-table__cell-heading-container",
							children: /* @__PURE__ */ S("div", {
								className: "usda-table__cell-heading",
								children: e.columns[n].displayName
							})
						}), /* @__PURE__ */ S("div", {
							className: "usda-table__cell-text",
							children: t
						})]
					}, b());
				})
			})
		}), /* @__PURE__ */ S("div", {
			className: "mobile-gradient__wrapper",
			children: /* @__PURE__ */ C("span", {
				className: "collapsible-row-button",
				role: "button",
				tabIndex: 0,
				onClick: (e) => {
					a(e);
				},
				onKeyUp: (e) => {
					e.key === "Enter" && a(e);
				},
				children: [n ? "Collapse additional details" : "View additional details", n ? /* @__PURE__ */ S($, {
					className: "chevron",
					icon: "chevron-up"
				}) : /* @__PURE__ */ S($, {
					className: "chevron",
					icon: "chevron-down"
				})]
			})
		})]
	}) : null, t[4] = a, t[5] = e.columns, t[6] = e.row, t[7] = e.stickyFirstColumn, t[8] = n, t[9] = c) : c = t[9], c || s;
};
Fs.propTypes = Ps;
//#endregion
//#region components/table/TableData.jsx
var Is = {
	columns: u.arrayOf(u.object).isRequired,
	rows: u.arrayOf(f([u.array, u.object])).isRequired,
	rowHeight: u.number,
	expandable: u.bool,
	divider: u.string,
	onClickHandler: u.func,
	isMobile: u.bool,
	atMaxLevel: u.bool,
	stickyFirstColumn: u.bool,
	highlightedColumns: u.object,
	isStacked: u.bool,
	newMobileView: u.bool
}, Ls = (e) => {
	let t = (0, q.c)(55), { columns: n, rows: r, rowHeight: i, expandable: a, divider: s, onClickHandler: c, isMobile: u, atMaxLevel: d, stickyFirstColumn: f, highlightedColumns: p, isStacked: m, newMobileView: h } = e, g = f === void 0 ? !1 : f, _ = h === void 0 ? !1 : h, [v, y] = l(), w = Rs, T;
	t[0] !== d || t[1] !== u || t[2] !== c ? (T = (e, t) => {
		d || (u && y(t), c && c(e));
	}, t[0] = d, t[1] = u, t[2] = c, t[3] = T) : T = t[3];
	let E = T, D;
	t[4] === Symbol.for("react.memo_cache_sentinel") ? (D = () => {
		w();
	}, t[4] = D) : D = t[4];
	let O;
	if (t[5] === v ? O = t[6] : (O = [v], t[5] = v, t[6] = O), o(D, O), m && u && _ && !a) {
		let e;
		if (t[7] !== d || t[8] !== n || t[9] !== p || t[10] !== u || t[11] !== m || t[12] !== E || t[13] !== i || t[14] !== v || t[15] !== r || t[16] !== g) {
			let a;
			t[18] !== d || t[19] !== n || t[20] !== p || t[21] !== u || t[22] !== m || t[23] !== E || t[24] !== i || t[25] !== v || t[26] !== g ? (a = (e, t) => /* @__PURE__ */ C("div", {
				role: "button",
				tabIndex: 0,
				onClick: () => E(e, t),
				onKeyUp: (n) => {
					n.key === "Enter" && (n.preventDefault(), E(e, t));
				},
				className: `usda-table__row-item usda-table__row ${v === t ? "selected-row" : ""} ${p ? `special-hover-color-${p.highlightedColumns}` : ""}`,
				style: {
					height: i,
					display: "table-row"
				},
				children: [e.map((e, t) => {
					if (t < 6) return n[t]?.bodyHeader ? /* @__PURE__ */ S(Ds, {
						className: "table-header_body-header",
						stickyFirstColumn: g,
						index: t,
						...e
					}, b()) : /* @__PURE__ */ C("div", {
						className: `usda-table__cell${n[t]?.right ? " usda-table__cell_right" : ""}
                                 ${t === 0 && g ? " stickyColumn" : ""}  ${t === 0 && g ? " stickyColumn" : ""}
                                 ${t === 0 ? "usda-mobile__header" : ""}`,
						children: [n[t] && /* @__PURE__ */ S("div", {
							className: "usda-table__cell-heading-container",
							children: u && /* @__PURE__ */ S("div", {
								className: "usda-table__cell-heading",
								children: n[t].displayName
							})
						}), /* @__PURE__ */ S("div", {
							className: "usda-table__cell-text",
							children: e.type === "a" && t === 0 && m && u ? /* @__PURE__ */ C("a", {
								target: e.props.target,
								rel: e.props.rel,
								href: e.props.href,
								onClick: e.props.onClick,
								children: [
									e.props.children,
									" ",
									/* @__PURE__ */ S($, { icon: "arrow-right" })
								]
							}) : e
						})]
					}, b());
				}), /* @__PURE__ */ S("div", { children: /* @__PURE__ */ S(Fs, {
					row: e,
					columns: n,
					iValue: t,
					atMaxLevel: d
				}) })]
			}, b()), t[18] = d, t[19] = n, t[20] = p, t[21] = u, t[22] = m, t[23] = E, t[24] = i, t[25] = v, t[26] = g, t[27] = a) : a = t[27], e = r.map(a), t[7] = d, t[8] = n, t[9] = p, t[10] = u, t[11] = m, t[12] = E, t[13] = i, t[14] = v, t[15] = r, t[16] = g, t[17] = e;
		} else e = t[17];
		let a;
		return t[28] === e ? a = t[29] : (a = /* @__PURE__ */ S("div", {
			className: "mobile-table-rows",
			children: e
		}), t[28] = e, t[29] = a), a;
	}
	let k;
	if (t[30] !== n || t[31] !== s || t[32] !== a || t[33] !== p || t[34] !== u || t[35] !== m || t[36] !== E || t[37] !== i || t[38] !== v || t[39] !== r || t[40] !== g) {
		let e;
		t[42] !== n || t[43] !== s || t[44] !== a || t[45] !== p || t[46] !== u || t[47] !== m || t[48] !== E || t[49] !== i || t[50] !== v || t[51] !== g ? (e = (e, t) => {
			let r = t % 2 == 0 ? "" : " usda-table__row_odd";
			return a ? /* @__PURE__ */ S(Cs, {
				data: e,
				oddClass: r,
				columns: n,
				divider: s
			}, b()) : /* @__PURE__ */ S("tr", {
				tabIndex: 0,
				onClick: () => E(e, t),
				onKeyUp: (n) => {
					n.key === "Enter" && (n.preventDefault(), E(e, t));
				},
				className: `usda-table__row-item usda-table__row${r} ${v === t ? "selected-row" : ""} ${p ? `special-hover-color-${p.highlightedColumns}` : ""}`,
				style: { height: i },
				children: e.map((e, t) => n[t]?.bodyHeader ? /* @__PURE__ */ S(Ds, {
					className: "table-header_body-header",
					stickyFirstColumn: g,
					index: t,
					...e
				}, b()) : /* @__PURE__ */ C("td", {
					className: `usda-table__cell${n[t]?.right ? " usda-table__cell_right" : ""}
                                ${t === 0 && g ? " stickyColumn" : ""} `,
					children: [n[t] && /* @__PURE__ */ S("div", {
						className: "usda-table__cell-heading-container",
						children: u && /* @__PURE__ */ S("div", {
							className: "usda-table__cell-heading",
							children: n[t].displayName
						})
					}), /* @__PURE__ */ S("div", { children: e.type === "a" && t === 0 && m && u ? /* @__PURE__ */ C("a", {
						target: e.props.target,
						rel: e.props.rel,
						href: e.props.href,
						onClick: e.props.onClick,
						children: [
							e.props.children,
							" ",
							/* @__PURE__ */ S($, { icon: "arrow-right" })
						]
					}) : e })]
				}, b()))
			}, b());
		}, t[42] = n, t[43] = s, t[44] = a, t[45] = p, t[46] = u, t[47] = m, t[48] = E, t[49] = i, t[50] = v, t[51] = g, t[52] = e) : e = t[52], k = r.map(e), t[30] = n, t[31] = s, t[32] = a, t[33] = p, t[34] = u, t[35] = m, t[36] = E, t[37] = i, t[38] = v, t[39] = r, t[40] = g, t[41] = k;
	} else k = t[41];
	let A;
	return t[53] === k ? A = t[54] : (A = /* @__PURE__ */ S(x, { children: k }), t[53] = k, t[54] = A), A;
};
Ls.propTypes = Is;
function Rs() {
	let e = document.querySelector(".selected-row");
	e && e.focus();
}
//#endregion
//#region components/table/Table.jsx
var zs = {
	columns: u.arrayOf(u.object).isRequired,
	rows: u.arrayOf(f([u.array, u.object])),
	rowHeight: u.number,
	headerRowHeight: u.number,
	currentSort: p({
		direction: d(["asc", "desc"]),
		field: u.string
	}),
	classNames: u.string,
	updateSort: u.func,
	expandable: u.bool,
	divider: u.string,
	loading: u.bool,
	error: u.bool,
	message: u.oneOfType([u.string, u.object]),
	isStacked: u.bool,
	screenReaderCaption: u.string,
	onClickHandler: u.func,
	isMobile: u.bool,
	stickyFirstColumn: u.bool,
	highlightedColumns: u.object,
	atMaxLevel: u.bool,
	newMobileView: u.bool
}, Bs = (e) => {
	let t = (0, q.c)(65), { columns: n, rows: r, rowHeight: i, headerRowHeight: a, currentSort: o, classNames: s, updateSort: c, expandable: l, divider: u, loading: d, error: f, message: p, isStacked: m, screenReaderCaption: h, onClickHandler: g, isMobile: _, stickyFirstColumn: v, highlightedColumns: w, atMaxLevel: T, newMobileView: E } = e, D = s === void 0 ? "" : s, O = m === void 0 ? !1 : m, k = v === void 0 ? !1 : v, A = T === void 0 ? !1 : T, j = E === void 0 ? !1 : E, M = O ? "usa-dt-table__stacked" : "", N, P;
	if (t[0] !== A || t[1] !== n || t[2] !== o || t[3] !== u || t[4] !== f || t[5] !== l || t[6] !== w || t[7] !== _ || t[8] !== O || t[9] !== d || t[10] !== p || t[11] !== j || t[12] !== g || t[13] !== i || t[14] !== r || t[15] !== k || t[16] !== c) {
		let e;
		t[19] === c ? e = t[20] : (e = (e) => ({
			name: e.displayName + " (ascending)",
			value: e.title,
			onClick: () => {
				c(e.title, "asc");
			}
		}), t[19] = c, t[20] = e);
		let a = n.map(e), s;
		t[21] === c ? s = t[22] : (s = (e) => ({
			name: e.displayName + " (descending)",
			value: e.title,
			onClick: () => {
				c(e.title, "desc");
			}
		}), t[21] = c, t[22] = s);
		let m = n.map(s);
		if (d) {
			let e;
			t[23] === Symbol.for("react.memo_cache_sentinel") ? (e = /* @__PURE__ */ S(bs, {}), t[23] = e) : e = t[23];
			let r;
			t[24] === n.length ? r = t[25] : (r = /* @__PURE__ */ S("tr", { children: /* @__PURE__ */ S("td", {
				className: "usda-table__message-cell",
				colSpan: n.length,
				children: e
			}) }), t[24] = n.length, t[25] = r), N = r;
		} else if (f) {
			let e;
			t[26] === p ? e = t[27] : (e = /* @__PURE__ */ S(Vo, { description: p }), t[26] = p, t[27] = e);
			let r;
			t[28] !== n.length || t[29] !== e ? (r = /* @__PURE__ */ S("tr", { children: /* @__PURE__ */ S("td", {
				className: "usda-table__message-cell",
				colSpan: n.length,
				children: e
			}) }), t[28] = n.length, t[29] = e, t[30] = r) : r = t[30], N = r;
		} else if (!r || r.length === 0) {
			let e;
			t[31] === p ? e = t[32] : (e = /* @__PURE__ */ S(xs, { description: p }), t[31] = p, t[32] = e);
			let r;
			t[33] !== n.length || t[34] !== e ? (r = /* @__PURE__ */ S("tr", { children: /* @__PURE__ */ S("td", {
				className: "usda-table__message-cell",
				colSpan: n.length,
				children: e
			}) }), t[33] = n.length, t[34] = e, t[35] = r) : r = t[35], N = r;
		} else {
			let e;
			t[36] !== A || t[37] !== n || t[38] !== u || t[39] !== l || t[40] !== w || t[41] !== _ || t[42] !== O || t[43] !== j || t[44] !== g || t[45] !== i || t[46] !== r || t[47] !== k ? (e = /* @__PURE__ */ S(Ls, {
				columns: n,
				rows: r,
				rowHeight: i,
				expandable: l,
				divider: u,
				onClickHandler: g,
				isMobile: _,
				stickyFirstColumn: k,
				highlightedColumns: w,
				isStacked: O,
				atMaxLevel: A,
				newMobileView: j
			}), t[36] = A, t[37] = n, t[38] = u, t[39] = l, t[40] = w, t[41] = _, t[42] = O, t[43] = j, t[44] = g, t[45] = i, t[46] = r, t[47] = k, t[48] = e) : e = t[48], N = e;
		}
		P = O && c && /* @__PURE__ */ C("div", {
			className: "usa-dt-table__stacked-picker",
			children: [/* @__PURE__ */ S("label", {
				htmlFor: "stackedTableSort",
				children: "Sort By"
			}), /* @__PURE__ */ S(So, {
				id: "stackedTableSort",
				selectedOption: o.field,
				options: y(a, m)
			})]
		}), t[0] = A, t[1] = n, t[2] = o, t[3] = u, t[4] = f, t[5] = l, t[6] = w, t[7] = _, t[8] = O, t[9] = d, t[10] = p, t[11] = j, t[12] = g, t[13] = i, t[14] = r, t[15] = k, t[16] = c, t[17] = N, t[18] = P;
	} else N = t[17], P = t[18];
	let F;
	t[49] !== N || t[50] !== D || t[51] !== n || t[52] !== o || t[53] !== a || t[54] !== w || t[55] !== _ || t[56] !== O || t[57] !== h || t[58] !== M || t[59] !== k || t[60] !== c ? (F = O && _ ? /* @__PURE__ */ C("div", {
		className: `usda-table ${M} ${D}`,
		children: [
			h && /* @__PURE__ */ S("caption", {
				className: "usa-dt-sr-only",
				children: h
			}),
			w && /* @__PURE__ */ C("colgroup", { children: [/* @__PURE__ */ S("col", { span: w.standardColumns }), /* @__PURE__ */ S("col", {
				span: w.highlightedColumns,
				className: "usda-table__body-special-color"
			})] }),
			/* @__PURE__ */ C("div", {
				className: "usda-table__head",
				children: [/* @__PURE__ */ S("div", {
					className: "usda-table__row",
					style: { height: a },
					children: n.map((e, t) => /* @__PURE__ */ S(Ds, {
						currentSort: o,
						updateSort: c,
						stickyFirstColumn: k,
						highlightedColumns: w,
						index: t,
						isMobile: _,
						isStacked: O,
						...e
					}, b()))
				}), /* @__PURE__ */ S("div", {
					className: "usda-table__row",
					children: n.filter(Vs).reduce(Hs, []).map((e, t) => /* @__PURE__ */ S(Ds, {
						className: e?.title ? "nested-header" : "empty",
						currentSort: o,
						updateSort: c,
						stickyFirstColumn: k,
						index: t,
						isMobile: _,
						isStacked: O,
						...e
					}, b()))
				})]
			}),
			/* @__PURE__ */ S("div", {
				className: "usda-table__body",
				children: N
			})
		]
	}) : /* @__PURE__ */ C("table", {
		className: `usda-table ${M} ${D}`,
		children: [
			h && /* @__PURE__ */ S("caption", {
				className: "usa-dt-sr-only",
				children: h
			}),
			w && /* @__PURE__ */ C("colgroup", { children: [/* @__PURE__ */ S("col", { span: w.standardColumns }), /* @__PURE__ */ S("col", {
				span: w.highlightedColumns,
				className: "usda-table__body-special-color"
			})] }),
			/* @__PURE__ */ C("thead", {
				className: "usda-table__head",
				children: [/* @__PURE__ */ S("tr", {
					className: "usda-table__row",
					style: { height: a },
					children: n.map((e, t) => /* @__PURE__ */ S(Ds, {
						currentSort: o,
						updateSort: c,
						stickyFirstColumn: k,
						highlightedColumns: w,
						index: t,
						...e
					}, b()))
				}), /* @__PURE__ */ S("tr", {
					className: "usda-table__row",
					children: n.filter(Us).reduce(Ws, []).map((e, t) => /* @__PURE__ */ S(Ds, {
						className: e?.title ? "nested-header" : "empty",
						currentSort: o,
						updateSort: c,
						stickyFirstColumn: k,
						index: t,
						...e
					}, b()))
				})]
			}),
			/* @__PURE__ */ S("tbody", {
				className: "usda-table__body",
				children: N
			})
		]
	}), t[49] = N, t[50] = D, t[51] = n, t[52] = o, t[53] = a, t[54] = w, t[55] = _, t[56] = O, t[57] = h, t[58] = M, t[59] = k, t[60] = c, t[61] = F) : F = t[61];
	let I;
	return t[62] !== P || t[63] !== F ? (I = /* @__PURE__ */ C(x, { children: [P, F] }), t[62] = P, t[63] = F, t[64] = I) : I = t[64], I;
};
Bs.propTypes = zs;
function Vs(e) {
	return e?.subColumnNames?.length;
}
function Hs(e, t) {
	return t?.subColumnNames?.length ? e.concat(t.subColumnNames) : e.concat([{
		...t,
		displayName: "",
		className: "empty-subheader"
	}]);
}
function Us(e) {
	return e?.subColumnNames?.length;
}
function Ws(e, t) {
	return t?.subColumnNames?.length ? e.concat(t.subColumnNames) : e.concat([{
		...t,
		displayName: "",
		className: "empty-subheader"
	}]);
}
//#endregion
//#region styles/components/infoTooltip/_tooltipWrapper.scss
var Gs = /* @__PURE__ */ P((/* @__PURE__ */ M(((e, t) => {
	(function() {
		var e = {}.hasOwnProperty;
		function n() {
			for (var t = [], r = 0; r < arguments.length; r++) {
				var i = arguments[r];
				if (i) {
					var a = typeof i;
					if (a === "string" || a === "number") t.push(i);
					else if (Array.isArray(i)) {
						if (i.length) {
							var o = n.apply(null, i);
							o && t.push(o);
						}
					} else if (a === "object") {
						if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
							t.push(i.toString());
							continue;
						}
						for (var s in i) e.call(i, s) && i[s] && t.push(s);
					}
				}
			}
			return t.join(" ");
		}
		t !== void 0 && t.exports ? (n.default = n, t.exports = n) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
			return n;
		}) : window.classNames = n;
	})();
})))(), 1), Ks = {
	className: u.string,
	children: u.element,
	tooltipComponent: u.element,
	tooltipPosition: u.string,
	wide: u.bool,
	icon: u.string,
	width: u.number,
	controlledProps: u.shape({
		isControlled: u.bool,
		showTooltip: u.func,
		closeTooltip: u.func,
		isVisible: u.bool
	}),
	offsetAdjustments: u.shape({
		top: u.number,
		right: u.number,
		left: u.number
	}),
	styles: u.object,
	onMouseMoveTooltip: u.func,
	onMouseLeaveTooltip: u.func
}, qs = 375, Js = ({ className: e = null, children: t = null, tooltipComponent: n = null, tooltipPosition: r = "right", wide: i = !1, icon: a = "", width: s = qs, controlledProps: u = {
	isControlled: !1,
	showTooltip: () => {},
	closeTooltip: () => {},
	isVisible: !1
}, offsetAdjustments: d = {
	top: -15,
	right: 0,
	left: 0
}, styles: f = {}, onMouseMoveTooltip: p, onMouseLeaveTooltip: m }) => {
	let [h, g] = l(!1), [_, y] = l(!1), x = c(), w = c(""), T = c({}), E = { info: /* @__PURE__ */ S($, {
		className: "tooltip__icon",
		icon: "info-circle"
	}) }, D = b("dtui-tt_"), O = () => {
		p ? p() : u.isControlled ? u.showTooltip() : _ || y(!0);
	}, k = () => {
		m ? m() : _ && y(!1);
	}, A = () => {
		let e = window.innerWidth, { offsetLeft: t, clientWidth: n } = x.current;
		return {
			right: e - t - n,
			left: t,
			total: e
		};
	}, j = () => {
		let { right: e, left: t, total: n } = A(), a = e > t ? e : t;
		return n < 425 ? n - 10 : r === "bottom" ? s : i ? a > 800 ? 700 : a - 5 : s;
	}, M = (e, t) => e ? {
		top: `${x.current.clientHeight + x.current.offsetTop + 8}px`,
		widthVar: t,
		left: `${x.current.clientWidth / 2 - 8}px`
	} : {
		...T.current,
		widthVar: t
	}, N = () => {
		if (Object.keys(f).includes("transform") && x.current) r === "bottom" && (w.current = "bottom"), T.current = { width: j() };
		else if (x.current) {
			let e = j(), { left: t, total: n, right: i } = A(), a = x.current.offsetTop + d.top, o = n < 700;
			if (r === "bottom" || o) w.current = "bottom", T.current = { ...M(o, e) };
			else if (r === "right" && i < e) {
				let n = t - e + x.current.clientWidth;
				w.current = "smart-bottom-left", T.current = {
					top: x.current.offsetTop + 16 + x.current.clientHeight,
					left: n + 20,
					width: e
				};
			} else if (r === "left" && t < e) w.current = "smart-bottom-right", T.current = {
				top: x.current.offsetTop + 16 + x.current.clientHeight,
				left: t - 20,
				width: e
			};
			else if (r === "left") {
				let n = t - e;
				w.current = "right", T.current = {
					top: a,
					left: n - 5,
					width: e
				};
			} else {
				let n = t + x.current.clientWidth;
				w.current = "left", T.current = {
					top: a,
					left: n + 5,
					width: e
				};
			}
		}
	}, P = () => {
		u.isControlled ? u.showTooltip() : h || g(!0);
	}, F = () => {
		u.isControlled ? u.closeTooltip() : h && g(!1);
	}, I = u.isControlled && u.isVisible || h || _, L = null;
	return I && (L = /* @__PURE__ */ S("div", {
		className: "tooltip-spacer",
		style: T.current,
		children: /* @__PURE__ */ S("div", {
			className: "tooltip",
			id: "tooltip",
			role: "tooltip",
			onMouseEnter: O,
			onMouseMove: O,
			onMouseLeave: k,
			children: /* @__PURE__ */ C("div", {
				className: "tooltip__interior",
				children: [/* @__PURE__ */ S("div", { className: `tooltip-pointer ${w.current}` }), /* @__PURE__ */ S("div", {
					className: "tooltip__content",
					children: /* @__PURE__ */ S("div", {
						className: "tooltip__message",
						children: n
					})
				})]
			})
		})
	})), o(() => (window.addEventListener("scroll", v(N, 500)), window.addEventListener("resize", v(N, 100)), u.isControlled || document?.getElementById(D)?.addEventListener("mousemove", v(N, 500)), () => {
		window.removeEventListener("scroll", N), window.removeEventListener("resize", N), u.isControlled || document?.getElementById(D)?.addEventListener("mousemove", N);
	}), []), o(() => {
		N();
	}, [x.current]), /* @__PURE__ */ S("div", {
		id: D,
		className: (0, Gs.default)({
			"tooltip-wrapper": !0,
			[e]: e !== null
		}),
		style: f,
		children: /* @__PURE__ */ C("div", {
			ref: (e) => {
				x.current = e;
			},
			children: [/* @__PURE__ */ C("div", {
				role: "presentation",
				tabIndex: "0",
				className: "tooltip__hover-wrapper",
				onBlur: F,
				onFocus: P,
				onKeyPress: P,
				onMouseEnter: P,
				onMouseLeave: F,
				onClick: P,
				children: [t, a && E[a]]
			}), L]
		})
	});
};
Js.propTypes = Ks;
//#endregion
//#region components/infoTooltip/TooltipComponent.jsx
var Ys = {
	title: u.string.isRequired,
	children: u.node.isRequired,
	className: u.string,
	textAlign: u.shape({
		title: u.oneOf(["center", "left"]),
		text: u.oneOf(["center", "left"])
	})
}, Xs = (e) => {
	let t = (0, q.c)(19), { children: n, title: r, className: i, textAlign: a } = e, o = i === void 0 ? null : i, s;
	t[0] === a ? s = t[1] : (s = a === void 0 ? {
		title: "left",
		text: "left"
	} : a, t[0] = a, t[1] = s);
	let c = s, l = o !== null, u;
	t[2] !== o || t[3] !== l ? (u = (0, Gs.default)({ [o]: l }), t[2] = o, t[3] = l, t[4] = u) : u = t[4];
	let d;
	t[5] === c.title ? d = t[6] : (d = (0, Gs.default)("tooltip__title", c.title), t[5] = c.title, t[6] = d);
	let f;
	t[7] !== d || t[8] !== r ? (f = /* @__PURE__ */ S("h1", {
		className: d,
		children: r
	}), t[7] = d, t[8] = r, t[9] = f) : f = t[9];
	let p;
	t[10] === c.text ? p = t[11] : (p = (0, Gs.default)("tooltip__text", c.text), t[10] = c.text, t[11] = p);
	let m;
	t[12] !== n || t[13] !== p ? (m = /* @__PURE__ */ S("div", {
		className: p,
		children: n
	}), t[12] = n, t[13] = p, t[14] = m) : m = t[14];
	let h;
	return t[15] !== u || t[16] !== f || t[17] !== m ? (h = /* @__PURE__ */ C("div", {
		className: u,
		children: [f, m]
	}), t[15] = u, t[16] = f, t[17] = m, t[18] = h) : h = t[18], h;
};
Xs.propTypes = Ys;
//#endregion
//#region helpers/keyboardEventsHelper.js
var Zs = (e, t = [], n = [13, 32]) => (r) => {
	n.includes(r.keyCode) && e(...t);
}, Qs = {
	label: u.string.isRequired,
	internal: u.string,
	labelContent: u.element,
	active: u.bool,
	enabled: u.bool,
	switchTab: u.func,
	className: u.string,
	tooltip: u.object,
	count: u.number,
	tablessStyle: u.bool
}, $s = (e) => {
	let t = c(null), n = () => {
		e.enabled && (t?.current && t.current?.scrollIntoView && t.current?.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center"
		}), e.switchTab(e.internal));
	}, r = Zs(n);
	return /* @__PURE__ */ S("div", {
		className: `usa-dt-tab__wrapper${e.enabled ? "" : " disabled"}${e.tablessStyle ? " tabless-tab" : ""}${e.active ? " active" : ""}`,
		children: /* @__PURE__ */ S("div", {
			className: `usa-dt-tab${e.active ? " active" : ""} ${e.className || ""}${e.enabled ? "" : " disabled"}`,
			ref: t,
			onClick: n,
			onKeyDown: r,
			role: "tab",
			title: `Show ${e.label}`,
			"aria-label": `Show ${e.label}`,
			tabIndex: 0,
			disabled: !e.enabled,
			children: /* @__PURE__ */ S("div", {
				className: "usa-dt-tab__content",
				children: /* @__PURE__ */ C("div", {
					className: "usa-dt-tab__label",
					children: [
						/* @__PURE__ */ S("div", {
							className: "usa-dt-tab__label-text",
							children: e.label
						}),
						e.count >= 0 && /* @__PURE__ */ S("div", {
							"aria-label": `Count of ${ve(e.count)} for ${e.label}`,
							className: `count${e.active ? " active" : ""}`,
							children: ve(e.count)
						}),
						e.tooltip && /* @__PURE__ */ S(Js, {
							tooltipComponent: /* @__PURE__ */ S(Xs, {
								title: e.label,
								children: e.tooltip
							}),
							icon: "info"
						})
					]
				})
			})
		})
	});
};
$s.propTypes = Qs;
//#endregion
//#region components/tabs/Tabs.jsx
var ec = {
	types: u.arrayOf(u.shape({
		label: u.string.isRequired,
		internal: u.string.isRequired,
		count: u.number,
		disabled: u.bool,
		tooltip: u.element
	})).isRequired,
	active: u.string.isRequired,
	switchTab: u.func.isRequired,
	tabsClassName: u.string,
	tablessStyle: u.bool
}, tc = (e) => {
	let t = (0, q.c)(18), { types: n, active: i, switchTab: a, tabsClassName: o, tablessStyle: s } = e, c;
	if (t[0] !== i || t[1] !== a || t[2] !== s || t[3] !== o || t[4] !== n) {
		let e;
		t[6] !== i || t[7] !== a || t[8] !== s || t[9] !== o ? (e = (e) => /* @__PURE__ */ r($s, {
			...e,
			active: i === e.internal,
			switchTab: a,
			key: `table-type-item-${e.internal}`,
			enabled: !e.disabled,
			className: o,
			tooltip: e.tooltip,
			tablessStyle: s
		}), t[6] = i, t[7] = a, t[8] = s, t[9] = o, t[10] = e) : e = t[10], c = n.map(e), t[0] = i, t[1] = a, t[2] = s, t[3] = o, t[4] = n, t[5] = c;
	} else c = t[5];
	let l = c, u = `usa-dt-tab-list${s ? " tabless-tabs" : ""}`, d;
	t[11] === s ? d = t[12] : (d = !s && /* @__PURE__ */ S("div", { className: "usa-dt-tab-list__border-pre-filler" }), t[11] = s, t[12] = d);
	let f;
	t[13] === Symbol.for("react.memo_cache_sentinel") ? (f = /* @__PURE__ */ S("div", { className: "usa-dt-tab-list__border-post-filler" }), t[13] = f) : f = t[13];
	let p;
	return t[14] !== u || t[15] !== d || t[16] !== l ? (p = /* @__PURE__ */ C("div", {
		className: u,
		role: "tablist",
		children: [
			d,
			l,
			f
		]
	}), t[14] = u, t[15] = d, t[16] = l, t[17] = p) : p = t[17], p;
};
tc.propTypes = ec;
//#endregion
//#region components/messages/ComingSoon.jsx
var nc = (e) => {
	let t = (0, q.c)(2), { className: n } = e, r = `coming soon ${n}`, i;
	return t[0] === r ? i = t[1] : (i = /* @__PURE__ */ S(zo, {
		className: r,
		title: "Coming Soon",
		description: "This feature is currently under development."
	}), t[0] = r, t[1] = i), i;
}, rc = (e, t, n) => {
	if (e !== 0 && !e) return null;
	let r = t ? he(e) : ve(e);
	if (Math.abs(e) > fe.MILLION) {
		let i = _e(e);
		r = `${t ? ge(e / i.unit, 2) : ye(e / i.unit, 2)} ${n ? _(i.longLabel) : i.unitLabel}`;
	}
	return r;
}, ic = {
	2: "two",
	3: "three",
	4: "four"
}, ac = { boxes: u.arrayOf(u.shape({
	type: u.string.isRequired,
	title: u.oneOfType([u.string, u.element]),
	amount: u.oneOfType([u.number, u.string]),
	isMonetary: u.bool,
	isString: u.bool,
	subtitle: u.string,
	subtitleBottom: u.string,
	isLoading: u.bool
})) }, oc = (e) => {
	let t = (0, q.c)(11), { boxes: n } = e, [r, i] = l(window.innerWidth > 1200), a;
	t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = v(() => i(window.innerWidth > 1200)), t[0] = a) : a = t[0];
	let s = a, c, u;
	t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = () => (s(), window.addEventListener("resize", s), () => window.removeEventListener("resize", s)), u = [], t[1] = c, t[2] = u) : (c = t[1], u = t[2]), o(c, u);
	let d = `usa-dt-information-boxes ${ic[n.length]}-boxes`, f;
	if (t[3] !== n || t[4] !== r) {
		let e;
		t[6] === r ? e = t[7] : (e = (e) => /* @__PURE__ */ S("div", {
			className: "usa-dt-information-box",
			children: /* @__PURE__ */ S("div", {
				className: "usa-dt-information-box__divider",
				children: /* @__PURE__ */ C("div", {
					className: `usa-dt-information-box__content${e.subtitle ? " with-subtitle" : ""}`,
					children: [
						/* @__PURE__ */ S("div", {
							className: "usa-dt-information-box__title",
							children: e.title
						}),
						e.subtitle && /* @__PURE__ */ S("div", {
							className: "usa-dt-information-box__subtitle",
							children: e.subtitle
						}),
						/* @__PURE__ */ C("div", {
							className: `usa-dt-information-box__amount${e.isLoading ? " loading" : ""}`,
							children: [
								e.isLoading && /* @__PURE__ */ S("div", { className: "dot-pulse" }),
								!e.isLoading && e.isString ? e.amount : "",
								!e.isLoading && !e.isString && rc(e.amount, e.isMonetary, r)
							]
						}),
						e.subtitleBottom && /* @__PURE__ */ S("div", {
							className: "usa-dt-information-box__subtitle-bottom",
							children: e.subtitleBottom
						})
					]
				})
			})
		}, e.type), t[6] = r, t[7] = e), f = n.map(e), t[3] = n, t[4] = r, t[5] = f;
	} else f = t[5];
	let p;
	return t[8] !== d || t[9] !== f ? (p = /* @__PURE__ */ S("div", {
		className: d,
		children: f
	}), t[8] = d, t[9] = f, t[10] = p) : p = t[10], p;
};
oc.propTypes = ac;
//#endregion
//#region components/SectionHeader.jsx
function sc(t) {
	let n = (0, q.c)(26), { icon: r, title: i, overLine: a, description: o, titleTooltip: s, descTooltip: c } = t, l;
	n[0] === r ? l = n[1] : (l = r && e.cloneElement(r, { className: "usda-section-title__title-icon" }), n[0] = r, n[1] = l);
	let u;
	n[2] === a ? u = n[3] : (u = a && /* @__PURE__ */ S("strong", {
		className: "usda-section-title__overline",
		children: a
	}), n[2] = a, n[3] = u);
	let d;
	n[4] === i ? d = n[5] : (d = /* @__PURE__ */ S("h3", { children: i }), n[4] = i, n[5] = d);
	let f;
	n[6] !== a || n[7] !== s.component || n[8] !== s.props ? (f = s.component && /* @__PURE__ */ S(Js, {
		tooltipComponent: s.component,
		icon: "info",
		className: `${a ? "has-overline" : ""}`,
		...s.props
	}), n[6] = a, n[7] = s.component, n[8] = s.props, n[9] = f) : f = n[9];
	let p;
	n[10] !== d || n[11] !== f ? (p = /* @__PURE__ */ C("div", {
		className: "usda-section-title__title",
		children: [d, f]
	}), n[10] = d, n[11] = f, n[12] = p) : p = n[12];
	let m;
	n[13] !== u || n[14] !== p ? (m = /* @__PURE__ */ C("div", {
		className: "usda-section-title__header",
		children: [u, p]
	}), n[13] = u, n[14] = p, n[15] = m) : m = n[15];
	let h;
	n[16] === o ? h = n[17] : (h = o && e.cloneElement(o, { className: "usda-section-title__desc has-overline" }), n[16] = o, n[17] = h);
	let g;
	n[18] !== c.component || n[19] !== c.props ? (g = c.component && /* @__PURE__ */ S(Js, {
		tooltipComponent: c.component,
		icon: "info",
		tooltipPosition: "left",
		...c.props
	}), n[18] = c.component, n[19] = c.props, n[20] = g) : g = n[20];
	let _;
	return n[21] !== l || n[22] !== m || n[23] !== h || n[24] !== g ? (_ = /* @__PURE__ */ C("div", {
		className: "usda-section-title__sectionHeader",
		children: [
			l,
			m,
			h,
			g
		]
	}), n[21] = l, n[22] = m, n[23] = h, n[24] = g, n[25] = _) : _ = n[25], _;
}
sc.propTypes = {
	icon: u.element,
	title: u.string.isRequired,
	overLine: u.string,
	description: u.element,
	titleTooltip: u.shape({
		component: u.oneOfType([u.element, u.bool]),
		props: u.object
	}),
	descTooltip: u.shape({
		component: u.oneOfType([u.element, u.bool]),
		props: u.object
	})
};
//#endregion
//#region components/SectionWrapper.jsx
var cc = {
	isControlled: !1,
	toggleExpand: () => {},
	isExpanded: !1
}, lc = (e) => {
	let t = (0, q.c)(33), { title: n, icon: r, children: i, id: a, classNames: o, isCollapsible: s, isComingSoon: c, controlledProps: u, defaultExpandedState: d, overLine: f, titleTooltip: p, descTooltip: m, description: h } = e, g = a === void 0 ? "" : a, _ = o === void 0 ? "" : o, v = s === void 0 ? !1 : s, y = c === void 0 ? !1 : c, b = u === void 0 ? cc : u, x = d === void 0 ? !0 : d, w = f === void 0 ? "" : f, T;
	t[0] === p ? T = t[1] : (T = p === void 0 ? {
		tooltip: null,
		tooltipProps: {}
	} : p, t[0] = p, t[1] = T);
	let E = T, D;
	t[2] === m ? D = t[3] : (D = m === void 0 ? {
		component: null,
		props: {}
	} : m, t[2] = m, t[3] = D);
	let O = D, [k, A] = l(x), j;
	t[4] !== b || t[5] !== k ? (j = () => {
		b.isControlled ? b.toggleExpand() : A(!k);
	}, t[4] = b, t[5] = k, t[6] = j) : j = t[6];
	let M = j, N = k || b.isControlled && b.isExpanded || !v, P = `usda-section__container${_ ? ` ${_}` : ""}`, F;
	t[7] !== O || t[8] !== h || t[9] !== r || t[10] !== w || t[11] !== n || t[12] !== E ? (F = /* @__PURE__ */ S(sc, {
		icon: r,
		title: n,
		overLine: w,
		description: h,
		titleTooltip: E,
		descTooltip: O
	}), t[7] = O, t[8] = h, t[9] = r, t[10] = w, t[11] = n, t[12] = E, t[13] = F) : F = t[13];
	let I;
	t[14] !== b.isControlled || t[15] !== b.isExpanded || t[16] !== v || t[17] !== k || t[18] !== M ? (I = v && /* @__PURE__ */ S($, {
		"aria-label": "usda-section-title__expand-icon",
		tabIndex: 0,
		onKeyDown: Zs(M),
		className: "usda-section-title__expand-icon",
		onClick: M,
		size: "2x",
		icon: k || b.isControlled && b.isExpanded ? "chevron-up" : "chevron-down"
	}), t[14] = b.isControlled, t[15] = b.isExpanded, t[16] = v, t[17] = k, t[18] = M, t[19] = I) : I = t[19];
	let L;
	t[20] !== F || t[21] !== I ? (L = /* @__PURE__ */ C("div", {
		className: "usda-section-title__container",
		children: [F, I]
	}), t[20] = F, t[21] = I, t[22] = L) : L = t[22];
	let R;
	t[23] === Symbol.for("react.memo_cache_sentinel") ? (R = /* @__PURE__ */ S("hr", {}), t[23] = R) : R = t[23];
	let z;
	t[24] !== y || t[25] !== N ? (z = y && N && /* @__PURE__ */ S(nc, {}), t[24] = y, t[25] = N, t[26] = z) : z = t[26];
	let ee = N && !y && i, te;
	return t[27] !== g || t[28] !== P || t[29] !== L || t[30] !== z || t[31] !== ee ? (te = /* @__PURE__ */ C("section", {
		id: g,
		className: P,
		children: [
			L,
			R,
			z,
			ee
		]
	}), t[27] = g, t[28] = P, t[29] = L, t[30] = z, t[31] = ee, t[32] = te) : te = t[32], te;
};
lc.propTypes = {
	icon: u.element.isRequired,
	children: u.element.isRequired,
	title: u.string.isRequired,
	defaultExpandedState: u.bool,
	overLine: u.string,
	controlledProps: u.shape({
		isControlled: u.bool.isRequired,
		toggleExpand: u.func.isRequired,
		isExpanded: u.bool.isRequired
	}),
	description: u.element,
	titleTooltip: u.shape({
		component: u.element,
		props: u.object
	}),
	descTooltip: u.shape({
		component: u.element,
		props: u.object
	}),
	isCollapsible: u.bool,
	isComingSoon: u.bool,
	classNames: u.string,
	id: u.string
};
//#endregion
//#region components/Carousel.jsx
var uc = { items: u.arrayOf(u.element) }, dc = ({ items: e }) => {
	let [t, r] = l(1), [i, a] = l(!1), s = c(null), u = c(0), d = c(b()), f = c(null), p = c(null), m = (e) => r(e), h = () => m(t);
	o(() => (window.addEventListener("resize", h), () => window.removeEventListener("resize", h)), []);
	let g = () => {
		let t = p.current.offsetWidth, n = Math.round(u.current * -1 / t) + 1;
		return n > e.length ? 1 : n < 1 ? e.length : n;
	};
	o(() => {
		i || m(g());
	}, [i]), o(() => {
		if (f.current && p.current) {
			let e = p.current.offsetWidth, n = (t - 1) * e * -1;
			u.current = n, f.current.style.transform = `translate(${n}px, 0px)`;
		}
	});
	let _ = () => a(!0), v = () => {
		s.current = null, a(!1);
	}, y = () => v(), x = (e) => {
		let t = e - s.current;
		s.current = e, u.current += t, f.current.style.transform = `translate(${u.current}px, 0px)`;
	}, w = (e) => {
		if (!i || !e.touches || !e.touches.length || !f) return;
		let t = e.touches[0];
		s.current === null ? s.current = t.pageX : x(t.pageX);
	}, T = (e) => {
		e.preventDefault(), a(!0);
	}, E = () => {
		i && v();
	}, D = (e) => {
		i && (s.current === null ? s.current = e.pageX : x(e.pageX));
	}, O = (e) => {
		e.preventDefault(), m(parseInt(e.target.value, 10));
	};
	return /* @__PURE__ */ C("div", {
		className: "usa-dt-carousel",
		"aria-describedby": `${d.current}-instructions`,
		children: [
			/* @__PURE__ */ C("div", {
				id: `${d.current}-instructions`,
				className: "usa-dt-carousel__instructions",
				"aria-live": "polite",
				children: [
					"An image carousel containing ",
					`${e.length} item${e.length === 1 ? "" : "s"}`,
					", with item ",
					t,
					" shown."
				]
			}),
			/* @__PURE__ */ S("div", {
				className: "usa-dt-carousel-content",
				children: /* @__PURE__ */ S("div", {
					className: "usa-dt-carousel-item",
					onTouchStart: _,
					onTouchMove: w,
					onTouchEnd: y,
					onTouchCancel: y,
					onMouseDown: T,
					onMouseUp: E,
					onMouseLeave: E,
					onMouseMove: D,
					role: "presentation",
					ref: p,
					children: /* @__PURE__ */ S("div", {
						className: `usa-dt-carousel-item__list ${i ? "usa-dt-carousel-item__list_dragging" : ""}`,
						"aria-live": "polite",
						ref: f,
						children: e.map((e, r) => /* @__PURE__ */ S("div", {
							className: "usa-dt-carousel-item__list-item",
							"aria-hidden": t !== r + 1,
							tabIndex: -1,
							children: n(e, { className: "usa-dt-carousel-item__item" })
						}, `${r}-the-list-item`))
					})
				})
			}),
			/* @__PURE__ */ S("div", {
				className: "usa-dt-carousel-pager",
				children: /* @__PURE__ */ S("div", {
					className: "usa-dt-carousel-pager__list",
					role: "menu",
					"aria-label": "Pagination controls for carousel items",
					children: e.map((e, n) => /* @__PURE__ */ S("button", {
						className: `usa-dt-carousel-pager__dot-button ${n + 1 === t ? "usa-dt-carousel-pager__dot-button_active" : ""}`,
						value: n + 1,
						onClick: O,
						"aria-label": `Skip to carousel item ${n + 1}`,
						"aria-checked": n + 1 === t,
						role: "menuitemradio",
						children: /* @__PURE__ */ S("div", { className: "usa-dt-carousel-pager__dot-decorator" })
					}, `${n}-list-item`))
				})
			})
		]
	});
};
dc.propTypes = uc;
//#endregion
//#region helpers/inPageNavHelper.js
var fc = (e, t) => {
	let n = !1, r = !1, i = [...e?.childNodes], a = i[0]?.getBoundingClientRect(), o = i[i.length - 1]?.getBoundingClientRect();
	return (a.left < 0 || e.scrollLeft > 0) && (n = !0), (o.right > e.clientWidth + t || o.right > e.scrollWidth) && (r = !0), {
		left: n,
		right: r
	};
}, pc = (e) => {
	let t = [];
	return e.childNodes.forEach((e) => {
		let n = e.getBoundingClientRect();
		t.push({
			name: e.innerHTML,
			originalLeftOffset: n.left,
			width: n.width
		});
	}), t;
}, mc = (e) => {
	e.current.querySelector("ul").scrollTo({
		left: "0",
		behavior: "smooth"
	});
}, hc = {
	sections: u.array,
	activeSection: u.string,
	jumpToSection: u.func,
	detectActiveSection: u.oneOfType([u.bool, u.func]),
	pageName: u.string
}, gc = (e) => {
	let { sections: t, jumpToSection: n, pageName: r, detectActiveSection: i } = e, [s, u] = l(e.activeSection), [d, f] = l(window.innerWidth), [p, m] = l(null), [h, g] = l([]), [_, y] = l(!1), [b, x] = l(!1), [w, T] = l(32), [E, D] = l(window.innerWidth < 992), O = c(null), [k, A] = l([]), j = () => {
		let e = O?.current?.querySelector("ul"), { left: t, right: n } = fc(e, w);
		y(t), x(n);
	}, M = a((e) => {
		e.stopPropagation(), j();
	}), N = a((e) => {
		e.stopPropagation();
		let t = O.current.querySelector("ul"), n = [...t.childNodes], r = {
			name: "",
			index: 0
		};
		n.find((e, n) => {
			let i = e.getBoundingClientRect();
			if (i.left > 0 && i.right < t.clientWidth) return r.name = e.querySelector("a").innerHTML, r.index = n, n;
		});
		let i = r.index;
		if (i + 2 < h.length) {
			let e = t.scrollLeft - t.clientWidth + 20 + h[i + 1].width + h[i + 2].width;
			t.scrollTo({
				left: e,
				behavior: "smooth"
			});
		} else mc(O);
	}), P = a((e) => {
		if (e.stopPropagation(), h) {
			let e = O.current.querySelector("ul"), t = [...e.childNodes], n = {
				name: "",
				index: 0
			};
			t.find((t, r) => {
				let i = t.getBoundingClientRect(), a = e.clientWidth;
				if (i.right > a && i.left > w / 2) return n.name = t.querySelector("a").innerHTML, n.index = r, r;
			});
			let r = n.index;
			if (r - 2 >= 0) {
				let t = h[r - 2]?.originalLeftOffset;
				if (t) {
					let n = t + w / 2;
					e.scrollTo({
						left: n,
						behavior: "smooth"
					});
				}
			} else mc(O);
		}
	}), F = a(() => {
		let e = O.current.querySelector("ul"), t = pc(e);
		m(e), g(t);
	}), I = a((e, t) => {
		e.key === "Enter" && (t === "left" && N(e), t === "right" && P(e));
	}), L = () => {
		let e = window.innerWidth;
		d !== e && f(e), D(d < 992), 992 < d && d <= 1200 && T(52), 1200 < d && d <= 1640 && T(72), 1640 < d && T(192), j();
	};
	o(() => (F(), L(), window.addEventListener("resize", () => L()), () => window.removeEventListener("resize", () => L())), []), o(() => (j(), p?.addEventListener("scrollend", (e) => M(e)), () => p?.removeEventListener("scrollend", (e) => M(e))), [p]);
	let R = v(() => {
		A(t.map((e) => {
			let t = e.section, n = document.getElementById(`${r}-${t}`);
			if (!n) return null;
			let i = document.querySelector(".usda-page-header")?.offsetHeight || 0, a = n.offsetTop - i;
			return {
				section: t,
				top: a,
				bottom: n.offsetHeight + a - i
			};
		}));
	}, 100), z = v(() => {
		let e = window.pageYOffset || document.documentElement.scrollTop, t = e + window.innerHeight, n = s, r = !1, i = [], a = e + 30, o = t - 30;
		if (k.forEach((e, t) => {
			if (e.top <= o && e.bottom >= a) {
				let n = e.bottom - e.top, s = (Math.min(e.bottom, o) - Math.max(a, e.top)) / n;
				i.push({
					section: e.section,
					amount: s
				}), t === k.length - 1 && (r = !0);
			} else t === k.length - 1 && e.top <= a && (r = !0, i.push({
				section: e.section,
				amount: 1
			}));
		}), i.length > 0 && (n = i[0].section, i[0].amount < .15 && i.length > 1 && (n = i[1].section)), r && i.length > 1) {
			let e = i[i.length - 1];
			i[i.length - 2].amount < .5 && e.amount === 1 && (n = e.section);
		}
		n !== s && u(n);
	}, 100);
	return o(() => {
		i && k.length === 0 && R();
		let e = () => {
			R(), i && z();
		};
		return window.addEventListener("scroll", e), window.addEventListener("resize", R), () => {
			window.removeEventListener("scroll", e), window.removeEventListener("resize", R);
		};
	}, [
		i,
		R,
		z,
		k.length
	]), /* @__PURE__ */ S("div", {
		className: "usda-in-page-nav__container",
		children: /* @__PURE__ */ C("nav", {
			ref: O,
			className: `usda-in-page-nav__wrapper ${_ && !E ? "left-fade-effect" : ""} ${b ? "right-fade-effect" : ""} `,
			children: [
				_ && !E && /* @__PURE__ */ S("div", {
					"aria-label": "In-page navigation left paginator",
					title: "In-page navigation left paginator",
					className: "usda-in-page-nav__paginator left",
					tabIndex: "0",
					role: "button",
					onKeyDown: (e) => I(e, "left"),
					onClick: (e) => N(e),
					children: /* @__PURE__ */ S($, {
						icon: "chevron-left",
						alt: "Back"
					})
				}),
				/* @__PURE__ */ S("ul", { children: t.map((e) => /* @__PURE__ */ S("li", {
					className: `usda-in-page-nav__element ${e.section === s ? "active" : ""}`,
					children: /* @__PURE__ */ S("a", {
						role: "button",
						tabIndex: "0",
						onKeyDown: (t) => t.key === "Enter" ? n(e.section) : "",
						onClick: () => n(e.section),
						children: e.label
					}, `in-page-nav-link-${e.label}`)
				}, `in-page-nav-li-${e.label}`)) }),
				b && !E && /* @__PURE__ */ S("div", {
					"aria-label": "In-page navigation right paginator",
					title: "In-page navigation right paginator",
					className: "usda-in-page-nav__paginator right",
					tabIndex: "0",
					role: "button",
					onKeyDown: (e) => I(e, "right"),
					onClick: (e) => P(e),
					children: /* @__PURE__ */ S($, {
						icon: "chevron-right",
						alt: "Forward"
					})
				})
			]
		})
	});
};
gc.propTypes = hc;
//#endregion
//#region components/PageHeader.jsx
var _c = (t) => {
	let n = (0, q.c)(39), { title: r, overLine: i, toolBar: a, backgroundColor: o, pageName: s, sections: c, activeSection: l, jumpToSection: u, inPageNav: d } = t, f = i === void 0 ? "" : i, p;
	n[0] === a ? p = n[1] : (p = a === void 0 ? [] : a, n[0] = a, n[1] = p);
	let m = p, h = o === void 0 ? "#1a4480" : o, g = d === void 0 ? !1 : d, _;
	n[2] === m ? _ = n[3] : (_ = () => {
		let t = m?.find(vc);
		return t ? e.cloneElement(t) : null;
	}, n[2] = m, n[3] = _);
	let v = _, y;
	n[4] === m ? y = n[5] : (y = () => {
		let t = m?.find(yc);
		return t ? e.cloneElement(t) : null;
	}, n[4] = m, n[5] = y);
	let b = y, x;
	n[6] === h ? x = n[7] : (x = { backgroundColor: h }, n[6] = h, n[7] = x);
	let w;
	n[8] === f ? w = n[9] : (w = f && /* @__PURE__ */ S("strong", {
		className: "usda-page-header__overline",
		children: f
	}), n[8] = f, n[9] = w);
	let T;
	n[10] === r ? T = n[11] : (T = /* @__PURE__ */ S("div", {
		className: "usda-page-header__title",
		children: /* @__PURE__ */ S("h1", { children: r })
	}), n[10] = r, n[11] = T);
	let E;
	n[12] !== T || n[13] !== w ? (E = /* @__PURE__ */ C("div", {
		className: "usda-page-header__header",
		children: [w, T]
	}), n[12] = T, n[13] = w, n[14] = E) : E = n[14];
	let D;
	n[15] === v ? D = n[16] : (D = v(), n[15] = v, n[16] = D);
	let O;
	n[17] === b ? O = n[18] : (O = b(), n[17] = b, n[18] = O);
	let k;
	n[19] !== E || n[20] !== D || n[21] !== O ? (k = /* @__PURE__ */ C("div", {
		className: "usda-page-header__mobile-top",
		children: [
			E,
			D,
			O
		]
	}), n[19] = E, n[20] = D, n[21] = O, n[22] = k) : k = n[22];
	let A;
	n[23] === Symbol.for("react.memo_cache_sentinel") ? (A = /* @__PURE__ */ S("hr", {}), n[23] = A) : A = n[23];
	let j;
	n[24] === m ? j = n[25] : (j = m?.length > 0 && /* @__PURE__ */ S("div", {
		className: "usda-page-header__toolbar",
		children: m.map(bc)
	}), n[24] = m, n[25] = j);
	let M;
	n[26] !== k || n[27] !== j ? (M = /* @__PURE__ */ C("div", {
		className: "usda-page-header__container",
		children: [
			k,
			A,
			j
		]
	}), n[26] = k, n[27] = j, n[28] = M) : M = n[28];
	let N;
	n[29] !== l || n[30] !== g || n[31] !== u || n[32] !== s || n[33] !== c ? (N = g && /* @__PURE__ */ S(gc, {
		detectActiveSection: !0,
		pageName: s,
		sections: c,
		activeSection: l,
		jumpToSection: u
	}), n[29] = l, n[30] = g, n[31] = u, n[32] = s, n[33] = c, n[34] = N) : N = n[34];
	let P;
	return n[35] !== M || n[36] !== N || n[37] !== x ? (P = /* @__PURE__ */ C("section", {
		className: "usda-page-header usda-page-header--sticky",
		style: x,
		children: [M, N]
	}), n[35] = M, n[36] = N, n[37] = x, n[38] = P) : P = n[38], P;
};
_c.propTypes = {
	stickyBreakPoint: u.number,
	overLine: u.string,
	title: u.string.isRequired,
	toolBar: u.arrayOf(u.element),
	pageName: u.string,
	sections: u.array,
	activeSection: u.string,
	jumpToSection: u.func
};
function vc(e) {
	return e?.type.displayName === "Share Icon";
}
function yc(e) {
	return e?.type.displayName === "ATDButton";
}
function bc(t) {
	let n = `${t.props?.className} ${t.props?.classNames}`, r = `${t.props?.classNames}`;
	return n ? e.cloneElement(t, { className: `${n} toolbar__item` }) : r ? e.cloneElement(t, { classNames: `${r} toolbar__item` }) : e.cloneElement(t, {
		className: "toolbar__item",
		classNames: "toolbar__item"
	});
}
//#endregion
//#region components/DownloadIconButton.jsx
var xc = {
	onClick: u.func.isRequired,
	downloadInFlight: u.bool,
	tooltipComponent: u.element,
	isEnabled: u.bool,
	tooltipPosition: u.string
}, Sc = (e) => {
	let t = (0, q.c)(44), { onClick: n, downloadInFlight: r, tooltipComponent: i, tooltipPosition: a, isEnabled: o, backgroundColor: s } = e, c = i === void 0 ? null : i, l = a === void 0 ? "left" : a, u = o === void 0 ? !0 : o, d = s === void 0 ? "#1a4480" : s, f;
	t[0] !== r || t[1] !== u || t[2] !== n ? (f = (e) => {
		e.preventDefault(), !r && u && n();
	}, t[0] = r, t[1] = u, t[2] = n, t[3] = f) : f = t[3];
	let p = f, m = r || !u ? " disabled" : "", h = r ? "Preparing Download..." : "Download", g = r ? js : Os;
	if (c) {
		let e = `usda-download-btn${m}`, n = r || !u, i;
		t[4] === d ? i = t[5] : (i = { backgroundColor: d }, t[4] = d, t[5] = i);
		let a = u ? 0 : -1, o;
		t[6] !== r || t[7] !== g ? (o = /* @__PURE__ */ S($, {
			icon: g,
			spin: r,
			color: "#dfe1e2"
		}), t[6] = r, t[7] = g, t[8] = o) : o = t[8];
		let s;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (s = { color: "#dfe1e2" }, t[9] = s) : s = t[9];
		let f;
		t[10] === h ? f = t[11] : (f = /* @__PURE__ */ S("span", {
			style: s,
			children: h
		}), t[10] = h, t[11] = f);
		let _;
		t[12] !== h || t[13] !== p || t[14] !== o || t[15] !== f || t[16] !== n || t[17] !== i || t[18] !== a ? (_ = /* @__PURE__ */ C("button", {
			type: "button",
			role: "presentation",
			className: "usda-button",
			title: h,
			disabled: n,
			onClick: p,
			style: i,
			tabIndex: a,
			children: [o, f]
		}), t[12] = h, t[13] = p, t[14] = o, t[15] = f, t[16] = n, t[17] = i, t[18] = a, t[19] = _) : _ = t[19];
		let v;
		return t[20] !== _ || t[21] !== e || t[22] !== c || t[23] !== l ? (v = /* @__PURE__ */ S(Js, {
			className: e,
			tooltipPosition: l,
			tooltipComponent: c,
			children: _
		}), t[20] = _, t[21] = e, t[22] = c, t[23] = l, t[24] = v) : v = t[24], v;
	}
	let _ = `usda-download-btn${m}`, v;
	t[25] === d ? v = t[26] : (v = { backgroundColor: d }, t[25] = d, t[26] = v);
	let y = u ? 0 : -1, b = !u, x;
	t[27] !== r || t[28] !== g ? (x = /* @__PURE__ */ S($, {
		icon: g,
		spin: r
	}), t[27] = r, t[28] = g, t[29] = x) : x = t[29];
	let w;
	t[30] === h ? w = t[31] : (w = /* @__PURE__ */ S("span", { children: h }), t[30] = h, t[31] = w);
	let T;
	t[32] !== h || t[33] !== r || t[34] !== p || t[35] !== x || t[36] !== w || t[37] !== v || t[38] !== y || t[39] !== b ? (T = /* @__PURE__ */ C("button", {
		type: "button",
		className: "usda-button",
		title: h,
		"aria-label": h,
		disabled: r,
		onClick: p,
		style: v,
		tabIndex: y,
		"aria-hidden": b,
		children: [x, w]
	}), t[32] = h, t[33] = r, t[34] = p, t[35] = x, t[36] = w, t[37] = v, t[38] = y, t[39] = b, t[40] = T) : T = t[40];
	let E;
	return t[41] !== T || t[42] !== _ ? (E = /* @__PURE__ */ S("div", {
		className: _,
		children: T
	}), t[41] = T, t[42] = _, t[43] = E) : E = t[43], E;
};
Sc.displayName = "Download Icon Button", Sc.propTypes = xc;
var Cc = {
	prefix: "far",
	iconName: "calendar-days",
	icon: [
		448,
		512,
		["calendar-alt"],
		"f073",
		"M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zM384 432c8.8 0 16-7.2 16-16l0-64-88 0 0 80 72 0zm16-128l0-80-88 0 0 80 88 0zm-136 0l0-80-80 0 0 80 80 0zm-128 0l0-80-88 0 0 80 88 0zM48 352l0 64c0 8.8 7.2 16 16 16l72 0 0-80-88 0zm136 0l0 80 80 0 0-80-80 0zM120 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0z"
	]
}, wc = 2008, Tc = (e = wc, t) => [...Array(t - e)].reduce((t, n, r) => (t.push(e + r + 1), t), [e]).sort((e, t) => t - e), Ec = (e, t) => Number.isInteger(e) ? t - e : parseInt(t, 10) - parseInt(e, 10), Dc = (e) => {
	let t = (0, q.c)(21), { backgroundColor: n, latestFy: r, selectedFy: i, earliestFy: a, options: o, handleFyChange: s, sortFn: c } = e, l = i === void 0 ? 2020 : i, u = a === void 0 ? 2017 : a, d;
	t[0] === o ? d = t[1] : (d = o === void 0 ? [] : o, t[0] = o, t[1] = d);
	let f = d, p = s === void 0 ? Oc : s, m = c === void 0 ? Ec : c, h;
	t[2] !== u || t[3] !== p || t[4] !== r || t[5] !== f ? (h = () => f.length ? f.map((e) => ({
		...e,
		onClick: p
	})) : r ? Tc(u, r).map((e) => ({
		name: `FY ${e}`,
		value: `${e}`,
		onClick: p
	})) : [{
		name: "Loading fiscal years...",
		value: null,
		onClick: kc
	}], t[2] = u, t[3] = p, t[4] = r, t[5] = f, t[6] = h) : h = t[6];
	let g = h, _;
	t[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = /* @__PURE__ */ S($, {
		icon: Cc,
		size: "xs",
		alt: "FY Loading ..."
	}), t[7] = _) : _ = t[7];
	let v;
	t[8] !== f || t[9] !== l ? (v = f.length ? f.find((e) => e.value === l || e.value === parseInt(l, 10)).name || "--" : `FY ${l}`, t[8] = f, t[9] = l, t[10] = v) : v = t[10];
	let y;
	t[11] === g ? y = t[12] : (y = g(), t[11] = g, t[12] = y);
	let b;
	t[13] !== n || t[14] !== m || t[15] !== y || t[16] !== v ? (b = /* @__PURE__ */ S(So, {
		backgroundColor: n,
		className: "usda-fy-picker",
		icon: _,
		selectedOption: v,
		sortFn: m,
		options: y
	}), t[13] = n, t[14] = m, t[15] = y, t[16] = v, t[17] = b) : b = t[17];
	let x;
	t[18] === Symbol.for("react.memo_cache_sentinel") ? (x = /* @__PURE__ */ S("span", { children: "Fiscal Year" }), t[18] = x) : x = t[18];
	let w;
	return t[19] === b ? w = t[20] : (w = /* @__PURE__ */ C("div", {
		className: "usda-fy-picker__container",
		children: [b, x]
	}), t[19] = b, t[20] = w), w;
};
Dc.displayName = "Fiscal Year Picker", Dc.propTypes = {
	backgroundColor: u.string,
	selectedFy: u.oneOfType([u.number, u.string]),
	earliestFy: u.number,
	latestFy: u.number,
	options: u.arrayOf(u.shape({
		name: u.oneOfType([u.string, u.number]),
		value: u.oneOfType([u.string, u.number])
	})),
	handleFyChange: u.func,
	sortFn: u.func
};
function Oc() {}
function kc() {}
//#endregion
//#region node_modules/@fortawesome/free-brands-svg-icons/index.mjs
var Ac = {
	prefix: "fab",
	iconName: "linkedin",
	icon: [
		448,
		512,
		[],
		"f08c",
		"M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"
	]
}, jc = {
	prefix: "fab",
	iconName: "square-reddit",
	icon: [
		448,
		512,
		["reddit-square"],
		"f1a2",
		"M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32zM305.9 166.4c20.6 0 37.3-16.7 37.3-37.3s-16.7-37.3-37.3-37.3c-18 0-33.1 12.8-36.6 29.8-30.2 3.2-53.8 28.8-53.8 59.9l0 .2c-32.8 1.4-62.8 10.7-86.6 25.5-8.8-6.8-19.9-10.9-32-10.9-28.9 0-52.3 23.4-52.3 52.3 0 21 12.3 39 30.1 47.4 1.7 60.7 67.9 109.6 149.3 109.6s147.6-48.9 149.3-109.7c17.7-8.4 29.9-26.4 29.9-47.3 0-28.9-23.4-52.3-52.3-52.3-12 0-23 4-31.9 10.8-24-14.9-54.3-24.2-87.5-25.4l0-.1c0-22.2 16.5-40.7 37.9-43.7 3.9 16.5 18.7 28.7 36.3 28.7l.2-.2zM155 248.1c14.6 0 25.8 15.4 25 34.4s-11.8 25.9-26.5 25.9-27.5-7.7-26.6-26.7 13.5-33.5 28.1-33.5l0-.1zm166.4 33.5c.9 19-12 26.7-26.6 26.7s-25.6-6.9-26.5-25.9 10.3-34.4 25-34.4 27.3 14.6 28.1 33.5l0 .1zm-42.1 49.6c-9 21.5-30.3 36.7-55.1 36.7s-46.1-15.1-55.1-36.7c-1.1-2.6 .7-5.4 3.4-5.7 16.1-1.6 33.5-2.5 51.7-2.5s35.6 .9 51.7 2.5c2.7 .3 4.5 3.1 3.4 5.7z"
	]
}, Mc = {
	prefix: "fab",
	iconName: "square-facebook",
	icon: [
		448,
		512,
		["facebook-square"],
		"f082",
		"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"
	]
}, Nc = (e) => {
	let t = (0, q.c)(7), { icon: n, title: r } = e, i;
	t[0] === n ? i = t[1] : (i = /* @__PURE__ */ S($, {
		icon: n,
		color: "#555",
		size: "sm"
	}), t[0] = n, t[1] = i);
	let a;
	t[2] === r ? a = t[3] : (a = /* @__PURE__ */ S("span", { children: r }), t[2] = r, t[3] = a);
	let o;
	return t[4] !== i || t[5] !== a ? (o = /* @__PURE__ */ C(x, { children: [i, a] }), t[4] = i, t[5] = a, t[6] = o) : o = t[6], o;
}, Pc = [
	{
		component: /* @__PURE__ */ S(Nc, {
			icon: As,
			title: "Copy link"
		}),
		name: "copy"
	},
	{
		component: /* @__PURE__ */ S(Nc, {
			icon: ks,
			title: "Email"
		}),
		name: "email"
	},
	{
		component: /* @__PURE__ */ S((e) => {
			let t = (0, q.c)(3), { title: n } = e, r;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = /* @__PURE__ */ S("svg", {
				className: "share-dropdown__twitter-logo",
				width: "1200",
				height: "1227",
				viewBox: "0 0 1200 1227",
				fill: "none",
				style: {
					width: "14px",
					height: "14px"
				},
				children: /* @__PURE__ */ S("path", {
					d: "M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z",
					fill: "#5b616b"
				})
			}), t[0] = r) : r = t[0];
			let i;
			return t[1] === n ? i = t[2] : (i = /* @__PURE__ */ C(x, { children: [r, /* @__PURE__ */ S("span", { children: n })] }), t[1] = n, t[2] = i), i;
		}, { title: "X (Twitter)" }),
		name: "twitter"
	},
	{
		component: /* @__PURE__ */ S(Nc, {
			icon: Mc,
			title: "Facebook"
		}),
		name: "facebook"
	},
	{
		component: /* @__PURE__ */ S(Nc, {
			icon: Ac,
			title: "LinkedIn"
		}),
		name: "linkedin"
	},
	{
		component: /* @__PURE__ */ S(Nc, {
			icon: jc,
			title: "Reddit"
		}),
		name: "reddit"
	}
], Fc = {
	url: u.string.isRequired,
	classNames: u.string,
	onShareOptionClick: u.func.isRequired,
	includedDropdownOptions: u.arrayOf(u.string),
	colors: u.object,
	dropdownDirection: u.string,
	downloadInFlight: u.bool,
	isEnabled: u.bool,
	noShareText: u.bool,
	keepText: u.bool,
	pickerButtonClassNames: u.string,
	pickerListClassNames: u.string
}, Ic = (e) => {
	let t = (0, q.c)(46), { includedDropdownOptions: n, classNames: r, url: i, onShareOptionClick: a, colors: s, dropdownDirection: c, downloadInFlight: u, isEnabled: d, noShareText: f, keepText: p, pickerButtonClassNames: m, pickerListClassNames: g } = e, _;
	t[0] === n ? _ = t[1] : (_ = n === void 0 ? [] : n, t[0] = n, t[1] = _);
	let v = _, y = r === void 0 ? "" : r, b = i === void 0 ? "" : i, x = a === void 0 ? Lc : a, w;
	t[2] === s ? w = t[3] : (w = s === void 0 ? {
		color: "#dfe1e2",
		backgroundColor: "#1a4480",
		confirmationBackgroundColor: "#f1f1f1"
	} : s, t[2] = s, t[3] = w);
	let T = w, E = c === void 0 ? "left" : c, D = d === void 0 ? !0 : d, O = p === void 0 ? !1 : p, k = m === void 0 ? "" : m, A = g === void 0 ? "" : g, [j, M] = l(!1), N;
	t[4] === Symbol.for("react.memo_cache_sentinel") ? (N = h(() => M(!1), 1750), t[4] = N) : N = t[4];
	let P = N, F = u || !D ? " disabled" : "", I;
	t[5] !== x || t[6] !== b ? (I = () => {
		Array.from(document.querySelectorAll(".js-dtui-url-for-share-icon")).forEach((e) => {
			if (e.value.includes(b)) return e.select();
		}), document.execCommand("copy"), M(!0), x("copy");
	}, t[5] = x, t[6] = b, t[7] = I) : I = t[7];
	let L = I, R;
	if (t[8] !== L || t[9] !== v || t[10] !== x) {
		let e;
		t[12] === v ? e = t[13] : (e = (e) => {
			let { name: t } = e;
			return v.length ? v.includes(t) : !0;
		}, t[12] = v, t[13] = e);
		let n;
		t[14] !== L || t[15] !== x ? (n = (e) => e.name === "copy" ? {
			...e,
			onClick: L
		} : {
			...e,
			onClick: () => x(e.name)
		}, t[14] = L, t[15] = x, t[16] = n) : n = t[16], R = Pc.filter(e).map(n), t[8] = L, t[9] = v, t[10] = x, t[11] = R;
	} else R = t[11];
	let z = R, ee, te;
	t[17] === j ? (ee = t[18], te = t[19]) : (ee = () => (j && P(), P.cancel), te = [j], t[17] = j, t[18] = ee, t[19] = te), o(ee, te);
	let ne = `${y ? `usda-share-icon${F} ${y}` : `usda-share-icon${F}`}`, re;
	t[20] === Symbol.for("react.memo_cache_sentinel") ? (re = {
		position: "absolute",
		right: "9999px",
		opacity: 0
	}, t[20] = re) : re = t[20];
	let B;
	t[21] === b ? B = t[22] : (B = /* @__PURE__ */ S("input", {
		"aria-label": "Share Input Link",
		type: "text",
		className: "js-dtui-url-for-share-icon text",
		style: re,
		value: b,
		readOnly: !0
	}), t[21] = b, t[22] = B);
	let ie = u || !D, V;
	t[23] === T.color ? V = t[24] : (V = /* @__PURE__ */ S($, {
		icon: "share-alt",
		size: "lg",
		color: T.color
	}), t[23] = T.color, t[24] = V);
	let H;
	t[25] !== T.backgroundColor || t[26] !== E || t[27] !== k || t[28] !== A || t[29] !== z || t[30] !== ie || t[31] !== V ? (H = /* @__PURE__ */ S(So, {
		buttonClassNames: k,
		pickerListClassNames: A,
		dropdownDirection: E,
		options: z,
		selectedOption: "copy",
		backgroundColor: T.backgroundColor,
		notEnabled: ie,
		sortFn: Rc,
		children: V
	}), t[25] = T.backgroundColor, t[26] = E, t[27] = k, t[28] = A, t[29] = z, t[30] = ie, t[31] = V, t[32] = H) : H = t[32];
	let U;
	t[33] !== O || t[34] !== f ? (U = !f && /* @__PURE__ */ S("span", {
		className: `usda-share-icon__share-text ${O ? "keep-text" : ""}`,
		children: "Share"
	}), t[33] = O, t[34] = f, t[35] = U) : U = t[35];
	let W;
	t[36] !== T.confirmationBackgroundColor || t[37] !== O || t[38] !== j ? (W = j && /* @__PURE__ */ C("div", {
		className: `copy-confirmation ${O ? "keep-text" : ""}`,
		style: { backgroundColor: T.confirmationBackgroundColor },
		children: [
			/* @__PURE__ */ S($, { icon: Ms }),
			" ",
			"Copied!"
		]
	}), t[36] = T.confirmationBackgroundColor, t[37] = O, t[38] = j, t[39] = W) : W = t[39];
	let G;
	return t[40] !== ne || t[41] !== B || t[42] !== H || t[43] !== U || t[44] !== W ? (G = /* @__PURE__ */ C("div", {
		className: ne,
		children: [
			B,
			H,
			U,
			W
		]
	}), t[40] = ne, t[41] = B, t[42] = H, t[43] = U, t[44] = W, t[45] = G) : G = t[45], G;
};
Ic.propTypes = Fc, Ic.displayName = "Share Icon";
function Lc() {}
function Rc() {
	return 1;
}
//#endregion
//#region helpers/pageHeaderHelper.js
var zc = (e, t = 0) => {
	let [n, r] = l(0), [i, a] = l(!1);
	return [
		i,
		n,
		a,
		v(() => {
			let e = window.scrollY || document.documentElement.scrollTop;
			t && e >= t && !i || !t && e >= n && !i ? a(!0) : (e <= t || e <= n) && a(!1);
		}, 100),
		v(() => {
			r(e.current ? e.current.offsetTop : 0);
		}, 100)
	];
}, Bc = (e) => e.map((e) => e && e.trim()).filter((e) => e).join(" ");
//#endregion
//#region components/flexGrid/FlexGridContainer.jsx
function Vc(e) {
	let t = (0, q.c)(10), n, r, i;
	t[0] === e ? (n = t[1], r = t[2], i = t[3]) : ({children: n, className: r, ...i} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i);
	let a;
	t[4] === r ? a = t[5] : (a = Bc(["usa-dt-flex-grid__container", r]), t[4] = r, t[5] = a);
	let o;
	return t[6] !== n || t[7] !== i || t[8] !== a ? (o = /* @__PURE__ */ S("div", {
		className: a,
		...i,
		children: n
	}), t[6] = n, t[7] = i, t[8] = a, t[9] = o) : o = t[9], o;
}
Vc.propTypes = {
	children: u.node.isRequired,
	className: u.string
};
//#endregion
//#region components/flexGrid/FlexGridRow.jsx
var Hc = (e) => {
	let t = (0, q.c)(14), n, r, i, a, o;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5]) : ({children: n, className: r, hasGutter: o, gutterSize: i, ...a} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o);
	let s = o !== void 0 && o ? "usa-dt-flex-grid__gutter" : "", c;
	t[6] !== r || t[7] !== s || t[8] !== i ? (c = Bc([
		"usa-dt-flex-grid__row",
		s,
		(0, Gs.default)({
			"usa-dt-flex-grid__gutter-sm": i === "sm",
			"usa-dt-flex-grid__gutter-lg": i === "lg"
		}),
		r
	]), t[6] = r, t[7] = s, t[8] = i, t[9] = c) : c = t[9];
	let l;
	return t[10] !== n || t[11] !== a || t[12] !== c ? (l = /* @__PURE__ */ S("div", {
		className: c,
		...a,
		children: n
	}), t[10] = n, t[11] = a, t[12] = c, t[13] = l) : l = t[13], l;
};
Hc.propTypes = {
	children: u.node.isRequired,
	className: u.string,
	hasGutter: u.bool,
	gutterSize: u.oneOf(["sm", "lg"])
};
//#endregion
//#region components/flexGrid/FlexGridCol.jsx
function Uc(e) {
	let t = (0, q.c)(20), n, r, i, a, o, s, c, l;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6], c = t[7], l = t[8]) : ({children: n, className: r, desktopxl: a, desktop: i, mobile: o, tablet: c, width: l, ...s} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s, t[7] = c, t[8] = l);
	let u = Wc, d;
	t[9] !== r || t[10] !== i || t[11] !== a || t[12] !== o || t[13] !== c || t[14] !== l ? (d = Bc([...[
		[null, l],
		["desktopxl", a],
		["desktop", i],
		["tablet", c],
		["mobile", o]
	].map(u), r]), t[9] = r, t[10] = i, t[11] = a, t[12] = o, t[13] = c, t[14] = l, t[15] = d) : d = t[15];
	let f = d || "usa-dt-flex-grid__col", p;
	return t[16] !== n || t[17] !== s || t[18] !== f ? (p = /* @__PURE__ */ S("div", {
		className: f,
		...s,
		children: n
	}), t[16] = n, t[17] = s, t[18] = f, t[19] = p) : p = t[19], p;
}
function Wc(e) {
	let [t, n] = e;
	return n === void 0 ? "" : n.span !== void 0 && n.offset !== void 0 ? Bc([`${t ? `${t}:` : ""}usa-dt-flex-grid__col-${n.span}`, `${t ? `${t}:` : ""}usa-dt-flex-grid__offset-${n.offset}`]) : n.order === void 0 ? `${t ? `${t}:` : ""}usa-dt-flex-grid__col-${n}` : Bc([`${t ? `${t}:` : ""}usa-dt-flex-grid__col-${n.span}`, `${t ? `${t}:` : ""}usa-dt-flex-grid__order-${n.order}`]);
}
Uc.propTypes = {
	children: u.node,
	className: u.string,
	desktopxl: u.oneOfType([
		u.number,
		u.oneOf(["auto", "fill"]),
		u.shape({
			span: u.oneOfType([u.number, u.oneOf(["auto", "fill"])]),
			offset: u.oneOfType([u.number, u.string]),
			order: u.oneOfType([u.number, u.oneOf(["first", "last"])])
		})
	]),
	desktop: u.oneOfType([
		u.number,
		u.oneOf(["auto", "fill"]),
		u.shape({
			span: u.oneOfType([u.number, u.oneOf(["auto", "fill"])]),
			offset: u.oneOfType([u.number, u.string]),
			order: u.oneOfType([u.number, u.oneOf(["first", "last"])])
		})
	]),
	tablet: u.oneOfType([
		u.number,
		u.oneOf(["auto", "fill"]),
		u.shape({
			span: u.oneOfType([u.number, u.oneOf(["auto", "fill"])]),
			offset: u.oneOfType([u.number, u.string]),
			order: u.oneOfType([u.number, u.oneOf(["first", "last"])])
		})
	]),
	mobile: u.oneOfType([
		u.number,
		u.oneOf(["auto", "fill"]),
		u.shape({
			span: u.oneOfType([u.number, u.oneOf(["auto", "fill"])]),
			offset: u.oneOfType([u.number, u.string]),
			order: u.oneOfType([u.number, u.oneOf(["first", "last"])])
		})
	]),
	width: u.oneOfType([
		u.number,
		u.oneOf(["auto", "fill"]),
		u.shape({
			span: u.oneOfType([u.number, u.oneOf(["auto", "fill"])]),
			offset: u.oneOfType([u.number, u.string]),
			order: u.oneOfType([u.number, u.oneOf(["first", "last"])])
		})
	])
};
//#endregion
//#region components/cards/CardContainer.jsx
var Gc = {
	variant: u.string,
	size: u.string,
	fill: u.string,
	height: u.oneOfType([u.string, u.number]),
	onClick: u.func,
	onKeyUp: u.func,
	className: u.oneOfType([u.string, u.object])
}, Kc = (e) => {
	let t = (0, q.c)(12), { variant: n, size: r, children: i, fill: a, height: o, className: s, onClick: c, onKeyUp: l } = e, u = n === void 0 ? "" : n, d = r === void 0 ? "md" : r, f = `card-column ${s === void 0 ? "" : s}`, p = `${u} ${d} card-container`, m = `${a}`, h = `${o}`, g;
	t[0] !== m || t[1] !== h ? (g = {
		backgroundColor: m,
		height: h
	}, t[0] = m, t[1] = h, t[2] = g) : g = t[2];
	let _;
	t[3] !== i || t[4] !== p || t[5] !== g ? (_ = /* @__PURE__ */ S("div", {
		className: p,
		style: g,
		children: i
	}), t[3] = i, t[4] = p, t[5] = g, t[6] = _) : _ = t[6];
	let v;
	return t[7] !== c || t[8] !== l || t[9] !== f || t[10] !== _ ? (v = /* @__PURE__ */ S("div", {
		className: f,
		onClick: c,
		role: "presentation",
		tabIndex: "0",
		onKeyUp: l,
		children: _
	}), t[7] = c, t[8] = l, t[9] = f, t[10] = _, t[11] = v) : v = t[11], v;
};
Kc.propTypes = Gc;
//#endregion
//#region components/cards/CardBody.jsx
var qc = {
	overline: u.string,
	headline: u.oneOfType([u.string, u.object]),
	subhead: u.string,
	text: u.oneOfType([u.string, u.object]),
	variant: u.string,
	children: u.oneOfType([
		u.string,
		u.object,
		u.node
	]),
	imageContainerHeight: u.string,
	customClassName: u.string,
	onClick: u.func
}, Jc = (e) => {
	let t = (0, q.c)(19), { overline: n, headline: r, onClick: i, subhead: a, text: o, variant: s, children: c, imageContainerHeight: l, customClassName: u } = e, d = `card__body ${s === void 0 ? "" : s} ${u === void 0 ? "" : u}`, f = l ? `calc(100% - ${l} - 12px)` : "", p;
	t[0] === f ? p = t[1] : (p = { height: f }, t[0] = f, t[1] = p);
	let m;
	t[2] === n ? m = t[3] : (m = n && /* @__PURE__ */ S("div", {
		className: "overline",
		children: n
	}), t[2] = n, t[3] = m);
	let h;
	t[4] !== r || t[5] !== i ? (h = r && /* @__PURE__ */ S("div", { children: /* @__PURE__ */ S("div", {
		className: "headline",
		onClick: i,
		children: r
	}) }), t[4] = r, t[5] = i, t[6] = h) : h = t[6];
	let g;
	t[7] === a ? g = t[8] : (g = a && /* @__PURE__ */ S("div", {
		className: "subhead",
		children: a
	}), t[7] = a, t[8] = g);
	let _;
	t[9] === o ? _ = t[10] : (_ = o && /* @__PURE__ */ S("div", {
		className: "text",
		children: o
	}), t[9] = o, t[10] = _);
	let v;
	return t[11] !== c || t[12] !== d || t[13] !== p || t[14] !== m || t[15] !== h || t[16] !== g || t[17] !== _ ? (v = /* @__PURE__ */ C("div", {
		className: d,
		style: p,
		children: [
			m,
			h,
			g,
			_,
			c
		]
	}), t[11] = c, t[12] = d, t[13] = p, t[14] = m, t[15] = h, t[16] = g, t[17] = _, t[18] = v) : v = t[18], v;
};
Jc.propTypes = qc;
//#endregion
//#region components/cards/CardHero.jsx
var Yc = {
	img: u.string,
	fill: u.string,
	variant: u.string,
	imageContainerHeight: u.string,
	thumbnail: u.bool,
	children: u.element,
	onClick: u.func
}, Xc = (e) => {
	let t = (0, q.c)(12), { img: n, fill: r, variant: i, imageContainerHeight: a, thumbnail: o, children: s, onClick: c } = e, l = `card__hero ${i}`, u = `${r}`, d = `${a}`, f;
	t[0] !== u || t[1] !== d ? (f = {
		backgroundColor: u,
		height: d
	}, t[0] = u, t[1] = d, t[2] = f) : f = t[2];
	let p;
	t[3] !== s || t[4] !== n || t[5] !== o ? (p = o ? /* @__PURE__ */ S(x, { children: s }) : /* @__PURE__ */ S("img", {
		src: `${n}`,
		role: "presentation",
		alt: ""
	}), t[3] = s, t[4] = n, t[5] = o, t[6] = p) : p = t[6];
	let m;
	return t[7] !== c || t[8] !== l || t[9] !== f || t[10] !== p ? (m = /* @__PURE__ */ S("div", { children: /* @__PURE__ */ S("div", {
		className: l,
		onClick: c,
		style: f,
		children: p
	}) }), t[7] = c, t[8] = l, t[9] = f, t[10] = p, t[11] = m) : m = t[11], m;
};
Xc.propTypes = Yc;
//#endregion
//#region components/Button.jsx
var Zc = {
	buttonSize: u.oneOf([
		"large",
		"medium",
		"small",
		"lg",
		"md",
		"sm"
	]).isRequired,
	backgroundColor: u.oneOf(["light", "dark"]).isRequired,
	buttonType: u.oneOf([
		"primary",
		"primaryIcon",
		"secondary",
		"secondaryIcon",
		"tertiary",
		"tertiaryIcon",
		"text",
		"stacked",
		"icon",
		"inline",
		"intext"
	]).isRequired,
	copy: u.string.isRequired,
	image: u.element,
	textAlignment: u.oneOf(["left", "center"]),
	imageAlignment: u.oneOf(["left", "right"]),
	additionalClassnames: u.string,
	onClick: u.func,
	onKeyUp: u.func,
	buttonTitle: u.string.isRequired,
	disabled: u.bool,
	maxWidth: u.string,
	to: u.string
}, Qc = (e) => {
	let t = (0, q.c)(63), n = "";
	if (e.buttonSize === "large" || e.buttonSize === "lg" ? n = " button__lg " : e.buttonSize === "medium" || e.buttonSize === "md" ? n = " button__md " : (e.buttonSize === "small" || e.buttonSize === "sm") && (n = " button__sm "), e.buttonType === "primary" ? n += " button-type__primary-light " : e.buttonType === "secondary" ? e.backgroundColor === "light" ? n += " button-type__secondary-light " : e.backgroundColor === "dark" && (n += " button-type__secondary-dark ") : e.buttonType === "primaryIcon" ? e.backgroundColor === "light" && e.imageAlignment === "left" && (n += " button-type__primary-left-icon-light ") : e.buttonType === "secondaryIcon" ? e.backgroundColor === "light" ? e.imageAlignment === "left" && (n += " button-type__secondary-left-icon-light ") : e.backgroundColor === "dark" && e.imageAlignment === "left" && (n += " button-type__secondary-left-icon-dark ") : e.buttonType === "tertiary" ? n += " button-type__tertiary-light " : e.buttonType === "tertiaryIcon" ? e.imageAlignment === "left" && e.backgroundColor === "light" && (n += " button-type__tertiary-left-icon-light ") : e.buttonType === "text" ? e.backgroundColor === "light" ? e.imageAlignment === "left" ? n += " button-type__text-left-icon-light " : e.imageAlignment === "right" ? n += " button-type__text-right-icon-light " : n += " button-type__text-light " : e.backgroundColor === "dark" && (e.imageAlignment === "left" ? n += " button-type__text-left-icon-dark " : e.imageAlignment === "right" ? n += " button-type__text-right-icon-dark " : n += " button-type__text-dark ") : e.buttonType === "stacked" ? e.backgroundColor === "light" ? n += " button-type__stacked-icon-light " : e.backgroundColor === "dark" && (n += " button-type__stacked-icon-dark ") : e.buttonType === "icon" ? e.backgroundColor === "light" ? n += " button-type__icon-light " : e.backgroundColor === "dark" && (n += " button-type__icon-dark ") : e.buttonType === "inline" ? e.imageAlignment === "right" && (n += " button-type__inline-right-icon-light ") : e.buttonType === "intext" && (n += " button-type__intext-light "), e.textAlignment === "left" ? n += " button-text__left-align " : e.textAlignment === "center" && (n += " button-text__center-align "), e.additionalClassnames && (n += " ", n += e.additionalClassnames), n.includes("button-type__intext-light")) {
		let r;
		t[0] === e.maxWidth ? r = t[1] : (r = { maxWidth: e.maxWidth }, t[0] = e.maxWidth, t[1] = r);
		let i;
		return t[2] !== n || t[3] !== e.buttonTitle || t[4] !== e.copy || t[5] !== e.disabled || t[6] !== e.onClick || t[7] !== e.onKeyUp || t[8] !== e.to || t[9] !== r ? (i = /* @__PURE__ */ S("a", {
			"aria-label": e.buttonTitle,
			className: n,
			tabIndex: "0",
			onKeyUp: e.onKeyUp,
			onClick: e.onClick,
			disabled: e.disabled,
			style: r,
			target: "_blank",
			rel: "noopener noreferrer",
			href: e.to,
			children: e.copy
		}), t[2] = n, t[3] = e.buttonTitle, t[4] = e.copy, t[5] = e.disabled, t[6] = e.onClick, t[7] = e.onKeyUp, t[8] = e.to, t[9] = r, t[10] = i) : i = t[10], i;
	}
	if (n.includes("left-icon")) {
		let r;
		t[11] === e.maxWidth ? r = t[12] : (r = { maxWidth: e.maxWidth }, t[11] = e.maxWidth, t[12] = r);
		let i;
		return t[13] !== n || t[14] !== e.buttonTitle || t[15] !== e.copy || t[16] !== e.disabled || t[17] !== e.image || t[18] !== e.onClick || t[19] !== r ? (i = /* @__PURE__ */ C("button", {
			type: "button",
			"aria-label": e.buttonTitle,
			className: n,
			tabIndex: "0",
			onClick: e.onClick,
			disabled: e.disabled,
			style: r,
			children: [e.image, e.copy]
		}), t[13] = n, t[14] = e.buttonTitle, t[15] = e.copy, t[16] = e.disabled, t[17] = e.image, t[18] = e.onClick, t[19] = r, t[20] = i) : i = t[20], i;
	}
	if (n.includes("right-icon")) {
		let r;
		t[21] === e.maxWidth ? r = t[22] : (r = { maxWidth: e.maxWidth }, t[21] = e.maxWidth, t[22] = r);
		let i;
		return t[23] !== n || t[24] !== e.buttonTitle || t[25] !== e.copy || t[26] !== e.disabled || t[27] !== e.image || t[28] !== e.onClick || t[29] !== r ? (i = /* @__PURE__ */ C("button", {
			type: "button",
			"aria-label": e.buttonTitle,
			className: n,
			tabIndex: "0",
			onClick: e.onClick,
			disabled: e.disabled,
			style: r,
			children: [e.copy, e.image]
		}), t[23] = n, t[24] = e.buttonTitle, t[25] = e.copy, t[26] = e.disabled, t[27] = e.image, t[28] = e.onClick, t[29] = r, t[30] = i) : i = t[30], i;
	}
	if (n.includes("stacked-icon")) {
		let r;
		t[31] === e.maxWidth ? r = t[32] : (r = { maxWidth: e.maxWidth }, t[31] = e.maxWidth, t[32] = r);
		let i;
		t[33] === e.image ? i = t[34] : (i = /* @__PURE__ */ S("div", {
			className: "stacked-button__only-image",
			children: e.image
		}), t[33] = e.image, t[34] = i);
		let a;
		t[35] === e.copy ? a = t[36] : (a = /* @__PURE__ */ S("div", {
			className: "stacked-button__only-text",
			children: e.copy
		}), t[35] = e.copy, t[36] = a);
		let o;
		return t[37] !== n || t[38] !== e.buttonTitle || t[39] !== e.disabled || t[40] !== e.onClick || t[41] !== r || t[42] !== i || t[43] !== a ? (o = /* @__PURE__ */ C("button", {
			type: "button",
			"aria-label": e.buttonTitle,
			className: n,
			tabIndex: "0",
			onClick: e.onClick,
			disabled: e.disabled,
			style: r,
			children: [i, a]
		}), t[37] = n, t[38] = e.buttonTitle, t[39] = e.disabled, t[40] = e.onClick, t[41] = r, t[42] = i, t[43] = a, t[44] = o) : o = t[44], o;
	}
	if (n.includes("icon-light") || n.includes("icon-dark")) {
		let r;
		t[45] === e.maxWidth ? r = t[46] : (r = { maxWidth: e.maxWidth }, t[45] = e.maxWidth, t[46] = r);
		let i;
		return t[47] !== n || t[48] !== e.buttonTitle || t[49] !== e.disabled || t[50] !== e.image || t[51] !== e.onClick || t[52] !== r ? (i = /* @__PURE__ */ S("button", {
			type: "button",
			"aria-label": e.buttonTitle,
			className: n,
			tabIndex: "0",
			onClick: e.onClick,
			disabled: e.disabled,
			style: r,
			children: e.image
		}), t[47] = n, t[48] = e.buttonTitle, t[49] = e.disabled, t[50] = e.image, t[51] = e.onClick, t[52] = r, t[53] = i) : i = t[53], i;
	}
	let r;
	t[54] === e.maxWidth ? r = t[55] : (r = { maxWidth: e.maxWidth }, t[54] = e.maxWidth, t[55] = r);
	let i;
	return t[56] !== n || t[57] !== e.buttonTitle || t[58] !== e.copy || t[59] !== e.disabled || t[60] !== e.onClick || t[61] !== r ? (i = /* @__PURE__ */ S("button", {
		type: "button",
		"aria-label": e.buttonTitle,
		className: n,
		tabIndex: "0",
		onClick: e.onClick,
		disabled: e.disabled,
		style: r,
		children: e.copy
	}), t[56] = n, t[57] = e.buttonTitle, t[58] = e.copy, t[59] = e.disabled, t[60] = e.onClick, t[61] = r, t[62] = i) : i = t[62], i;
};
Qc.propTypes = Zc;
//#endregion
//#region components/cards/CardButton.jsx
var $c = {
	link: u.string,
	govLink: u.bool,
	onlyPerformAction: u.bool,
	action: u.func,
	text: u.oneOfType([u.string, u.object]),
	variant: u.string,
	customClassName: u.string,
	children: u.oneOfType([u.string, u.object]),
	disabled: u.bool
}, el = (e) => {
	let t = (0, q.c)(29), { link: n, govLink: r, onlyPerformAction: i, action: a, text: o, variant: s, customClassName: c, children: l, backgroundColor: u, buttonSize: d, textAlignment: f, disabled: p } = e, m = i === void 0 ? "false" : i, h = s === void 0 ? "secondary" : s, g = c === void 0 ? "" : c, _ = p === void 0 ? !1 : p, v;
	t[0] === Symbol.for("react.memo_cache_sentinel") ? (v = {
		primary: "primary",
		secondary: "secondary",
		text: "text"
	}, t[0] = v) : v = t[0];
	let y = v, b;
	t[1] === Symbol.for("react.memo_cache_sentinel") ? (b = {
		primary: "card__button--primary",
		secondary: "card__button--secondary ",
		text: "card__button--borderless"
	}, t[1] = b) : b = t[1];
	let x = b, C;
	t[2] === a ? C = t[3] : (C = (e) => {
		e.key === "Enter" && a();
	}, t[2] = a, t[3] = C);
	let w = C, T;
	t[4] !== a || t[5] !== n ? (T = () => {
		window.location.href = n, a();
	}, t[4] = a, t[5] = n, t[6] = T) : T = t[6];
	let E = T;
	if (m === !0) {
		let e;
		t[7] === w ? e = t[8] : (e = (e) => w(e), t[7] = w, t[8] = e);
		let n = o || l, r = o || l, i = y[h] === void 0 ? "secondary" : y[h], s;
		return t[9] !== a || t[10] !== g || t[11] !== _ || t[12] !== n || t[13] !== r || t[14] !== i || t[15] !== e ? (s = /* @__PURE__ */ S("div", {
			className: "card__button",
			children: /* @__PURE__ */ S(Qc, {
				additionalClassnames: g,
				onKeyUp: e,
				onClick: a,
				copy: n,
				buttonTitle: r,
				buttonSize: "md",
				buttonType: i,
				backgroundColor: "light",
				textAlignment: "center",
				disabled: _
			})
		}), t[9] = a, t[10] = g, t[11] = _, t[12] = n, t[13] = r, t[14] = i, t[15] = e, t[16] = s) : s = t[16], s;
	}
	let D;
	return t[17] !== u || t[18] !== d || t[19] !== l || t[20] !== g || t[21] !== _ || t[22] !== r || t[23] !== w || t[24] !== E || t[25] !== o || t[26] !== f || t[27] !== h ? (D = /* @__PURE__ */ S("div", {
		className: "card__button",
		children: r ? /* @__PURE__ */ S("div", {
			className: `card__button--secondary ${x[h]}`,
			children: /* @__PURE__ */ S(Qc, {
				"aria-label": `${o}`,
				tabIndex: "0",
				additionalClassnames: g,
				onClick: E,
				onKeyUp: (e) => w(e),
				copy: o || l,
				buttonTitle: o || l,
				buttonSize: d,
				textAlignment: f,
				buttonType: y[h] === void 0 ? "secondary" : y[h],
				backgroundColor: u,
				disabled: _
			})
		}) : /* @__PURE__ */ S("div", {
			className: `${x[h]}`,
			children: /* @__PURE__ */ S(Qc, {
				"aria-label": `${o}`,
				tabIndex: "0",
				additionalClassnames: g,
				onClick: E,
				onKeyUp: (e) => w(e),
				copy: o || l,
				buttonTitle: o || l,
				buttonSize: d,
				textAlignment: f,
				buttonType: y[h] === void 0 ? "secondary" : y[h],
				backgroundColor: u,
				disabled: _
			})
		})
	}), t[17] = u, t[18] = d, t[19] = l, t[20] = g, t[21] = _, t[22] = r, t[23] = w, t[24] = E, t[25] = o, t[26] = f, t[27] = h, t[28] = D) : D = t[28], D;
};
el.propTypes = $c;
//#endregion
//#region components/NewPicker.jsx
var tl = {
	size: u.oneOf([
		"sm",
		"md",
		"lg",
		"small",
		"medium",
		"large"
	]),
	label: u.string,
	leftIcon: u.oneOfType([
		u.string,
		u.element,
		u.object
	]),
	sortFn: u.func,
	selectedOption: u.oneOfType([u.node, u.string]),
	classname: u.string,
	dropdownClassname: u.string,
	buttonClassname: u.string,
	minTextWidth: u.string,
	id: u.string,
	options: u.arrayOf(u.shape({
		name: u.oneOfType([
			u.string,
			u.node,
			u.number
		]),
		value: u.any,
		onClick: u.func,
		classNames: u.string
	})),
	children: u.node,
	enabled: u.bool,
	parentWidth: u.number,
	infoSection: u.bool,
	infoSectionContent: u.string
}, nl = (e, t, n) => e.name === n ? -1 : t.name === n ? 1 : e.name < t.name ? -1 : +(e.name > t.name), rl = ({ size: e, label: t = "", children: n, leftIcon: r, enabled: i, id: a = "", options: s, selectedOption: u, dropdownClassname: d = "", buttonClassname: f = "", minTextWidth: p = "", classname: m = "", sortFn: h = nl, parentWidth: g, infoSection: _ = !1, infoSectionContent: v = "" }) => {
	let y = c(null), x = c(null), [w, T] = l(!1), [E, D] = l(i || !1), O = "usa-dt-picker__button-icon--svg", k = _ ? "310px" : "initial", A = (e) => {
		e.preventDefault(), T(!w);
	}, j = (e) => {
		e.key === "Escape" && w && T(!w);
	}, M = (e, t) => h(e, t, u), N = (e) => (t) => {
		e(t), T(!1);
	}, P = "";
	return e === "sm" || e === "small" ? P = "-sm" : e === "md" || e === "medium" ? P = "-md" : (e === "lg" || e === "large") && (P = "-lg"), o(() => {
		let e = (e) => {
			w && y.current && !y.current.contains(e.target) && e.target.id !== `${a}-${O}` && e.target.parentNode.id !== `${a}-${O}` && T(!1);
		};
		return document.addEventListener("click", e), () => {
			document.removeEventListener("click", e);
		};
	}, [w, a]), o(() => {
		D(i);
	}, [i]), /* @__PURE__ */ C("div", {
		className: `filter__dropdown-container ${m}`,
		ref: y,
		children: [t !== "" && /* @__PURE__ */ S("span", {
			className: `filter__dropdown-label${P}`,
			children: t
		}), /* @__PURE__ */ C("div", {
			className: "filter__dropdown-button-list-container",
			children: [/* @__PURE__ */ C("button", {
				className: `filter__dropdown-button${P} ${E ? "enabled" : "not-enabled"} ${f}`,
				ref: x,
				"aria-label": "Filter Dropdown Button",
				onClick: A,
				onKeyUp: j,
				style: { maxWidth: `${g}px` },
				type: "button",
				children: [
					r && /* @__PURE__ */ S("span", {
						className: "filter__dropdown-left-icon",
						children: /* @__PURE__ */ S($, {
							icon: r,
							alt: "page title bar button icon"
						})
					}),
					n || /* @__PURE__ */ S("span", {
						className: `filter__dropdown-button-text ${p}`,
						children: u
					}),
					/* @__PURE__ */ C("span", {
						className: "filter__dropdown-chevron",
						children: [!w && /* @__PURE__ */ S($, {
							icon: "chevron-down",
							alt: "Toggle menu"
						}), w && /* @__PURE__ */ S($, {
							icon: "chevron-up",
							alt: "Toggle menu"
						})]
					})
				]
			}), w && /* @__PURE__ */ S("div", {
				className: "filter__dropdown__list-info-wrapper",
				style: { maxWidth: `${g}px` },
				children: /* @__PURE__ */ C("ul", {
					className: `filter__dropdown-list${P} ${w ? "" : "hide"} ${E ? "enabled" : "not-enabled"} ${d}`,
					style: {
						maxWidth: `${g}px`,
						height: k
					},
					children: [s?.sort(M).map((e) => ({
						...e,
						onClick: N(e.onClick)
					})).map((e) => /* @__PURE__ */ S("li", {
						className: `filter__dropdown-list-item ${e?.classNames ? e.classNames : ""} ${e.name?.trim() === u?.trim() ? "active" : ""}`,
						children: /* @__PURE__ */ S("button", {
							style: {
								display: "block",
								width: "100%"
							},
							tabIndex: 0,
							onClick: (t) => {
								t.preventDefault(), e.onClick(e.value);
							},
							onKeyUp: (t) => {
								t.preventDefault(), t.key === "Enter" && e.onClick(e.value);
							},
							className: "filter__dropdown-item",
							type: "button",
							children: e.component ? e.component : e.name
						})
					}, b())), _ && /* @__PURE__ */ S("li", { children: /* @__PURE__ */ C("div", {
						className: "filter__dropdown-explainer",
						style: { width: `${g}px` },
						children: [/* @__PURE__ */ S("div", { className: "filter__dropdownSeparator" }), /* @__PURE__ */ S("div", {
							className: "filter__dropdown-content",
							children: v
						})]
					}) })]
				})
			})]
		})]
	});
};
rl.propTypes = tl;
//#endregion
export { Qc as Button, Jc as CardBody, el as CardButton, Kc as CardContainer, Xc as CardHero, dc as Carousel, nc as ComingSoon, Sc as DownloadIconButton, Vo as ErrorMessage, Dc as FiscalYearPicker, Uc as FlexGridCol, Vc as FlexGridContainer, Hc as FlexGridRow, zo as GenericMessage, oc as InformationBoxes, bs as LoadingMessage, rl as NewPicker, xs as NoResultsMessage, _c as PageHeader, _o as Pagination, So as Picker, ko as QuarterPicker, Lo as SearchBar, sc as SectionHeader, lc as SectionWrapper, Ic as ShareIcon, Bs as Table, tc as Tabs, Xs as TooltipComponent, Js as TooltipWrapper, To as useCumulativeQuarterPicker, zc as useDynamicStickyClass };
