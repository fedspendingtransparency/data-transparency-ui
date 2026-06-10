import e, { Children as t, cloneElement as n, createElement as r, isValidElement as i, useCallback as a, useEffect as o, useId as s, useRef as c, useState as l } from "react";
import u, { oneOf as d, oneOfType as f, shape as p } from "prop-types";
import m from "accounting";
import { debounce as h, range as g, startCase as _, throttle as v, union as y, uniqueId as b } from "lodash-es";
import { Fragment as x, jsx as S, jsxs as C } from "react/jsx-runtime";
import w from "react-dom";
//#region \0rolldown/runtime.js
var T = Object.create, E = Object.defineProperty, D = Object.getOwnPropertyDescriptor, O = Object.getOwnPropertyNames, k = Object.getPrototypeOf, ee = Object.prototype.hasOwnProperty, te = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ne = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = O(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ee.call(e, s) && s !== n && E(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = D(t, s)) || r.enumerable
	});
	return e;
}, A = (e, t, n) => (n = e == null ? {} : T(k(e)), ne(t || !e || !e.__esModule ? E(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), j = {
	symbol: "$",
	precision: 0,
	format: {
		pos: "%s%v",
		neg: "-%s%v",
		zero: "%s%v"
	}
}, M = {
	TRILLION: 0xe8d4a51000,
	BILLION: 1e9,
	MILLION: 1e6,
	THOUSAND: 1e3
}, re = {
	TRILLION: "T",
	BILLION: "B",
	MILLION: "M",
	THOUSAND: "k"
}, N = {
	TRILLION: "trillion",
	BILLION: "billion",
	MILLION: "million",
	THOUSAND: "thousand"
}, ie = (e) => m.formatMoney(e, j), ae = (e, t) => {
	let n = Object.assign({}, j, { precision: t });
	return m.formatMoney(e, n);
}, oe = (e) => {
	let t = Math.abs(e), n = 1, r = "", i = "";
	return t >= M.TRILLION ? (n = M.TRILLION, r = re.TRILLION, i = N.TRILLION) : t >= M.BILLION ? (n = M.BILLION, r = re.BILLION, i = N.BILLION) : t >= M.MILLION ? (n = M.MILLION, r = re.MILLION, i = N.MILLION) : t >= M.THOUSAND && (n = M.THOUSAND, r = re.THOUSAND, i = N.THOUSAND), {
		unit: n,
		unitLabel: r,
		longLabel: i
	};
}, se = (e) => {
	let t = Object.assign({}, j, { symbol: "" });
	return m.formatMoney(e, t);
}, ce = (e, t) => {
	let n = Object.assign({}, j, {
		symbol: "",
		precision: t
	});
	return m.formatMoney(e, n);
}, le = (e, t, n) => {
	let r = (e - 1) * t + 1, i = e * t;
	return e === Math.ceil(n / t) && (i = n), {
		start: r,
		end: i
	};
};
//#endregion
//#region node_modules/@fortawesome/fontawesome-svg-core/index.mjs
function ue(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function de(e) {
	if (Array.isArray(e)) return e;
}
function fe(e) {
	if (Array.isArray(e)) return ue(e);
}
function pe(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function me(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, we(r.key), r);
	}
}
function he(e, t, n) {
	return t && me(e.prototype, t), n && me(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ge(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = Ee(e)) || t && e && typeof e.length == "number") {
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
function P(e, t, n) {
	return (t = we(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function _e(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ve(e, t) {
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
function ye() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function be() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function xe(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function F(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? xe(Object(n), !0).forEach(function(t) {
			P(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xe(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Se(e, t) {
	return de(e) || ve(e, t) || Ee(e, t) || ye();
}
function I(e) {
	return fe(e) || _e(e) || Ee(e) || be();
}
function Ce(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function we(e) {
	var t = Ce(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Te(e) {
	"@babel/helpers - typeof";
	return Te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Te(e);
}
function Ee(e, t) {
	if (e) {
		if (typeof e == "string") return ue(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ue(e, t) : void 0;
	}
}
var De = function() {}, Oe = {}, ke = {}, Ae = null, je = {
	mark: De,
	measure: De
};
try {
	typeof window < "u" && (Oe = window), typeof document < "u" && (ke = document), typeof MutationObserver < "u" && (Ae = MutationObserver), typeof performance < "u" && (je = performance);
} catch {}
var Me = (Oe.navigator || {}).userAgent, Ne = Me === void 0 ? "" : Me, L = Oe, R = ke, Pe = Ae, Fe = je;
L.document;
var z = !!R.documentElement && !!R.head && typeof R.addEventListener == "function" && typeof R.createElement == "function", Ie = ~Ne.indexOf("MSIE") || ~Ne.indexOf("Trident/"), Le, Re = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, ze = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i, Be = {
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
}, Ve = {
	GROUP: "duotone-group",
	SWAP_OPACITY: "swap-opacity",
	PRIMARY: "primary",
	SECONDARY: "secondary"
}, He = [
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
], B = "classic", Ue = "duotone", We = "sharp", Ge = "sharp-duotone", Ke = "chisel", qe = "etch", Je = "graphite", Ye = "jelly", Xe = "jelly-duo", Ze = "jelly-fill", Qe = "notdog", $e = "notdog-duo", et = "slab", tt = "slab-press", nt = "thumbprint", rt = "utility", it = "utility-duo", at = "utility-fill", ot = "whiteboard", st = "Classic", ct = "Duotone", lt = "Sharp", ut = "Sharp Duotone", dt = "Chisel", ft = "Etch", pt = "Graphite", mt = "Jelly", ht = "Jelly Duo", gt = "Jelly Fill", _t = "Notdog", vt = "Notdog Duo", yt = "Slab", bt = "Slab Press", xt = "Thumbprint", St = "Utility", Ct = "Utility Duo", wt = "Utility Fill", Tt = "Whiteboard", Et = [
	B,
	Ue,
	We,
	Ge,
	Ke,
	qe,
	Je,
	Ye,
	Xe,
	Ze,
	Qe,
	$e,
	et,
	tt,
	nt,
	rt,
	it,
	at,
	ot
];
Le = {}, P(P(P(P(P(P(P(P(P(P(Le, B, st), Ue, ct), We, lt), Ge, ut), Ke, dt), qe, ft), Je, pt), Ye, mt), Xe, ht), Ze, gt), P(P(P(P(P(P(P(P(P(Le, Qe, _t), $e, vt), et, yt), tt, bt), nt, xt), rt, St), it, Ct), at, wt), ot, Tt);
var Dt = {
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
}, Ot = {
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
}, kt = new Map([
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
]), At = {
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
}, jt = [
	"fak",
	"fa-kit",
	"fakd",
	"fa-kit-duotone"
], Mt = {
	kit: {
		fak: "kit",
		"fa-kit": "kit"
	},
	"kit-duotone": {
		fakd: "kit-duotone",
		"fa-kit-duotone": "kit-duotone"
	}
}, Nt = ["kit"];
P(P({}, "kit", "Kit"), "kit-duotone", "Kit Duotone");
var Pt = {
	kit: { "fa-kit": "fak" },
	"kit-duotone": { "fa-kit-duotone": "fakd" }
}, Ft = {
	"Font Awesome Kit": {
		400: "fak",
		normal: "fak"
	},
	"Font Awesome Kit Duotone": {
		400: "fakd",
		normal: "fakd"
	}
}, It = {
	kit: { fak: "fa-kit" },
	"kit-duotone": { fakd: "fa-kit-duotone" }
}, Lt = {
	kit: { kit: "fak" },
	"kit-duotone": { "kit-duotone": "fakd" }
}, Rt, zt = {
	GROUP: "duotone-group",
	SWAP_OPACITY: "swap-opacity",
	PRIMARY: "primary",
	SECONDARY: "secondary"
}, Bt = [
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
Rt = {}, P(P(P(P(P(P(P(P(P(P(Rt, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), P(P(P(P(P(P(P(P(P(Rt, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), P(P({}, "kit", "Kit"), "kit-duotone", "Kit Duotone");
var Vt = {
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
}, Ht = {
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
}, Ut = {
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
}, Wt = (/* @__PURE__ */ "fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb".split(".")).concat(Bt, [
	"fa-solid",
	"fa-regular",
	"fa-light",
	"fa-thin",
	"fa-duotone",
	"fa-brands",
	"fa-semibold"
]), Gt = [
	"solid",
	"regular",
	"light",
	"thin",
	"duotone",
	"brands",
	"semibold"
], Kt = [
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
], qt = Kt.concat([
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
]), Jt = [].concat(I(Object.keys(Ht)), Gt, [
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
	zt.GROUP,
	zt.SWAP_OPACITY,
	zt.PRIMARY,
	zt.SECONDARY
], Kt.map(function(e) {
	return `${e}x`;
}), qt.map(function(e) {
	return `w-${e}`;
})), Yt = {
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
}, V = "___FONT_AWESOME___", Xt = 16, Zt = "fa", Qt = "svg-inline--fa", $t = "data-fa-i2svg", en = "data-fa-pseudo-element", tn = "data-fa-pseudo-element-pending", nn = "data-prefix", rn = "data-icon", an = "fontawesome-i2svg", on = "async", sn = [
	"HTML",
	"HEAD",
	"STYLE",
	"SCRIPT"
], cn = [
	"::before",
	"::after",
	":before",
	":after"
], ln = function() {
	try {
		return process.env.NODE_ENV === "production";
	} catch {
		return !1;
	}
}();
function un(e) {
	return new Proxy(e, { get: function(e, t) {
		return t in e ? e[t] : e[B];
	} });
}
var dn = F({}, Be);
dn[B] = F(F(F(F({}, { "fa-duotone": "duotone" }), Be[B]), Mt.kit), Mt["kit-duotone"]);
var fn = un(dn), pn = F({}, At);
pn[B] = F(F(F(F({}, { duotone: "fad" }), pn[B]), Lt.kit), Lt["kit-duotone"]);
var mn = un(pn), hn = F({}, Ut);
hn[B] = F(F({}, hn[B]), It.kit);
var gn = un(hn), _n = F({}, Vt);
_n[B] = F(F({}, _n[B]), Pt.kit), un(_n);
var vn = Re, yn = "fa-layers-text", bn = ze;
un(F({}, Dt));
var xn = [
	"class",
	"data-prefix",
	"data-icon",
	"data-fa-transform",
	"data-fa-mask"
], Sn = Ve, Cn = [].concat(I(Nt), I(Jt)), wn = L.FontAwesomeConfig || {};
function Tn(e) {
	var t = R.querySelector("script[" + e + "]");
	if (t) return t.getAttribute(e);
}
function En(e) {
	return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
R && typeof R.querySelector == "function" && [
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
	var t = Se(e, 2), n = t[0], r = t[1], i = En(Tn(n));
	i != null && (wn[r] = i);
});
var Dn = {
	styleDefault: "solid",
	familyDefault: B,
	cssPrefix: Zt,
	replacementClass: Qt,
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
wn.familyPrefix && (wn.cssPrefix = wn.familyPrefix);
var On = F(F({}, Dn), wn);
On.autoReplaceSvg || (On.observeMutations = !1);
var H = {};
Object.keys(Dn).forEach(function(e) {
	Object.defineProperty(H, e, {
		enumerable: !0,
		set: function(t) {
			On[e] = t, kn.forEach(function(e) {
				return e(H);
			});
		},
		get: function() {
			return On[e];
		}
	});
}), Object.defineProperty(H, "familyPrefix", {
	enumerable: !0,
	set: function(e) {
		On.cssPrefix = e, kn.forEach(function(e) {
			return e(H);
		});
	},
	get: function() {
		return On.cssPrefix;
	}
}), L.FontAwesomeConfig = H;
var kn = [];
function An(e) {
	return kn.push(e), function() {
		kn.splice(kn.indexOf(e), 1);
	};
}
var U = Xt, W = {
	size: 16,
	x: 0,
	y: 0,
	rotate: 0,
	flipX: !1,
	flipY: !1
};
function jn(e) {
	if (!(!e || !z)) {
		var t = R.createElement("style");
		t.setAttribute("type", "text/css"), t.innerHTML = e;
		for (var n = R.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
			var a = n[i], o = (a.tagName || "").toUpperCase();
			["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
		}
		return R.head.insertBefore(t, r), e;
	}
}
var Mn = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Nn() {
	for (var e = 12, t = ""; e-- > 0;) t += Mn[Math.random() * 62 | 0];
	return t;
}
function Pn(e) {
	for (var t = [], n = (e || []).length >>> 0; n--;) t[n] = e[n];
	return t;
}
function Fn(e) {
	return e.classList ? Pn(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(e) {
		return e;
	});
}
function In(e) {
	return `${e}`.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ln(e) {
	return Object.keys(e || {}).reduce(function(t, n) {
		return t + `${n}="${In(e[n])}" `;
	}, "").trim();
}
function Rn(e) {
	return Object.keys(e || {}).reduce(function(t, n) {
		return t + `${n}: ${e[n].trim()};`;
	}, "");
}
function zn(e) {
	return e.size !== W.size || e.x !== W.x || e.y !== W.y || e.rotate !== W.rotate || e.flipX || e.flipY;
}
function Bn(e) {
	var t = e.transform, n = e.containerWidth, r = e.iconWidth;
	return {
		outer: { transform: `translate(${n / 2} 256)` },
		inner: { transform: `${`translate(${t.x * 32}, ${t.y * 32}) `} ${`scale(${t.size / 16 * (t.flipX ? -1 : 1)}, ${t.size / 16 * (t.flipY ? -1 : 1)}) `} ${`rotate(${t.rotate} 0 0)`}` },
		path: { transform: `translate(${r / 2 * -1} -256)` }
	};
}
function Vn(e) {
	var t = e.transform, n = e.width, r = n === void 0 ? Xt : n, i = e.height, a = i === void 0 ? Xt : i, o = e.startCentered, s = o === void 0 ? !1 : o, c = "";
	return s && Ie ? c += `translate(${t.x / U - r / 2}em, ${t.y / U - a / 2}em) ` : s ? c += `translate(calc(-50% + ${t.x / U}em), calc(-50% + ${t.y / U}em)) ` : c += `translate(${t.x / U}em, ${t.y / U}em) `, c += `scale(${t.size / U * (t.flipX ? -1 : 1)}, ${t.size / U * (t.flipY ? -1 : 1)}) `, c += `rotate(${t.rotate}deg) `, c;
}
var Hn = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
function Un() {
	var e = Zt, t = Qt, n = H.cssPrefix, r = H.replacementClass, i = Hn;
	if (n !== e || r !== t) {
		var a = RegExp(`\\.${e}\\-`, "g"), o = RegExp(`\\--${e}\\-`, "g"), s = RegExp(`\\.${t}`, "g");
		i = i.replace(a, `.${n}-`).replace(o, `--${n}-`).replace(s, `.${r}`);
	}
	return i;
}
var Wn = !1;
function Gn() {
	H.autoAddCss && !Wn && (jn(Un()), Wn = !0);
}
var Kn = {
	mixout: function() {
		return { dom: {
			css: Un,
			insertCss: Gn
		} };
	},
	hooks: function() {
		return {
			beforeDOMElementCreation: function() {
				Gn();
			},
			beforeI2svg: function() {
				Gn();
			}
		};
	}
}, G = L || {};
G[V] || (G[V] = {}), G[V].styles || (G[V].styles = {}), G[V].hooks || (G[V].hooks = {}), G[V].shims || (G[V].shims = []);
var K = G[V], qn = [], Jn = function() {
	R.removeEventListener("DOMContentLoaded", Jn), Yn = 1, qn.map(function(e) {
		return e();
	});
}, Yn = !1;
z && (Yn = (R.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(R.readyState), Yn || R.addEventListener("DOMContentLoaded", Jn));
function Xn(e) {
	z && (Yn ? setTimeout(e, 0) : qn.push(e));
}
function Zn(e) {
	var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, i = e.children, a = i === void 0 ? [] : i;
	return typeof e == "string" ? In(e) : `<${t} ${Ln(r)}>${a.map(Zn).join("")}</${t}>`;
}
function Qn(e, t, n) {
	if (e && e[t] && e[t][n]) return {
		prefix: t,
		iconName: n,
		icon: e[t][n]
	};
}
var $n = function(e, t) {
	return function(n, r, i, a) {
		return e.call(t, n, r, i, a);
	};
}, er = function(e, t, n, r) {
	var i = Object.keys(e), a = i.length, o = r === void 0 ? t : $n(t, r), s, c, l;
	for (n === void 0 ? (s = 1, l = e[i[0]]) : (s = 0, l = n); s < a; s++) c = i[s], l = o(l, e[c], c, e);
	return l;
};
function tr(e) {
	return I(e).length === 1 ? e.codePointAt(0).toString(16) : null;
}
function nr(e) {
	return Object.keys(e).reduce(function(t, n) {
		var r = e[n];
		return r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
	}, {});
}
function rr(e, t) {
	var n = (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}).skipHooks, r = n === void 0 ? !1 : n, i = nr(t);
	typeof K.hooks.addPack == "function" && !r ? K.hooks.addPack(e, nr(t)) : K.styles[e] = F(F({}, K.styles[e] || {}), i), e === "fas" && rr("fa", t);
}
var ir = K.styles, ar = K.shims, or = Object.keys(gn), sr = or.reduce(function(e, t) {
	return e[t] = Object.keys(gn[t]), e;
}, {}), cr = null, lr = {}, ur = {}, dr = {}, fr = {}, pr = {};
function mr(e) {
	return ~Cn.indexOf(e);
}
function hr(e, t) {
	var n = t.split("-"), r = n[0], i = n.slice(1).join("-");
	return r === e && i !== "" && !mr(i) ? i : null;
}
var gr = function() {
	var e = function(e) {
		return er(ir, function(t, n, r) {
			return t[r] = er(n, e, {}), t;
		}, {});
	};
	lr = e(function(e, t, n) {
		return t[3] && (e[t[3]] = n), t[2] && t[2].filter(function(e) {
			return typeof e == "number";
		}).forEach(function(t) {
			e[t.toString(16)] = n;
		}), e;
	}), ur = e(function(e, t, n) {
		return e[n] = n, t[2] && t[2].filter(function(e) {
			return typeof e == "string";
		}).forEach(function(t) {
			e[t] = n;
		}), e;
	}), pr = e(function(e, t, n) {
		var r = t[2];
		return e[n] = n, r.forEach(function(t) {
			e[t] = n;
		}), e;
	});
	var t = "far" in ir || H.autoFetchSvg, n = er(ar, function(e, n) {
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
	dr = n.names, fr = n.unicodes, cr = wr(H.styleDefault, { family: H.familyDefault });
};
An(function(e) {
	cr = wr(e.styleDefault, { family: H.familyDefault });
}), gr();
function _r(e, t) {
	return (lr[e] || {})[t];
}
function vr(e, t) {
	return (ur[e] || {})[t];
}
function yr(e, t) {
	return (pr[e] || {})[t];
}
function br(e) {
	return dr[e] || {
		prefix: null,
		iconName: null
	};
}
function xr(e) {
	var t = fr[e], n = _r("fas", e);
	return t || (n ? {
		prefix: "fas",
		iconName: n
	} : null) || {
		prefix: null,
		iconName: null
	};
}
function q() {
	return cr;
}
var Sr = function() {
	return {
		prefix: null,
		iconName: null,
		rest: []
	};
};
function Cr(e) {
	var t = B, n = or.reduce(function(e, t) {
		return e[t] = `${H.cssPrefix}-${t}`, e;
	}, {});
	return Et.forEach(function(r) {
		(e.includes(n[r]) || e.some(function(e) {
			return sr[r].includes(e);
		})) && (t = r);
	}), t;
}
function wr(e) {
	var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).family, n = t === void 0 ? B : t, r = fn[n][e];
	if (n === Ue && !e) return "fad";
	var i = mn[n][e] || mn[n][r], a = e in K.styles ? e : null;
	return i || a || null;
}
function Tr(e) {
	var t = [], n = null;
	return e.forEach(function(e) {
		var r = hr(H.cssPrefix, e);
		r ? n = r : e && t.push(e);
	}), {
		iconName: n,
		rest: t
	};
}
function Er(e) {
	return e.sort().filter(function(e, t, n) {
		return n.indexOf(e) === t;
	});
}
var Dr = Wt.concat(jt);
function Or(e) {
	var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).skipLookups, n = t === void 0 ? !1 : t, r = null, i = Er(e.filter(function(e) {
		return Dr.includes(e);
	})), a = Er(e.filter(function(e) {
		return !Dr.includes(e);
	})), o = Se(i.filter(function(e) {
		return r = e, !He.includes(e);
	}), 1)[0], s = o === void 0 ? null : o, c = Cr(i), l = F(F({}, Tr(a)), {}, { prefix: wr(s, { family: c }) });
	return F(F(F({}, l), Mr({
		values: e,
		family: c,
		styles: ir,
		config: H,
		canonical: l,
		givenPrefix: r
	})), kr(n, r, l));
}
function kr(e, t, n) {
	var r = n.prefix, i = n.iconName;
	if (e || !r || !i) return {
		prefix: r,
		iconName: i
	};
	var a = t === "fa" ? br(i) : {}, o = yr(r, i);
	return i = a.iconName || o || i, r = a.prefix || r, r === "far" && !ir.far && ir.fas && !H.autoFetchSvg && (r = "fas"), {
		prefix: r,
		iconName: i
	};
}
var Ar = Et.filter(function(e) {
	return e !== B || e !== Ue;
}), jr = Object.keys(Ut).filter(function(e) {
	return e !== B;
}).map(function(e) {
	return Object.keys(Ut[e]);
}).flat();
function Mr(e) {
	var t = e.values, n = e.family, r = e.canonical, i = e.givenPrefix, a = i === void 0 ? "" : i, o = e.styles, s = o === void 0 ? {} : o, c = e.config, l = c === void 0 ? {} : c, u = n === Ue, d = t.includes("fa-duotone") || t.includes("fad"), f = l.familyDefault === "duotone", p = r.prefix === "fad" || r.prefix === "fa-duotone";
	return !u && (d || f || p) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Ar.includes(n) && (Object.keys(s).find(function(e) {
		return jr.includes(e);
	}) || l.autoFetchSvg) && (r.prefix = kt.get(n).defaultShortPrefixId, r.iconName = yr(r.prefix, r.iconName) || r.iconName), (r.prefix === "fa" || a === "fa") && (r.prefix = q() || "fas"), r;
}
var Nr = /*#__PURE__*/ function() {
	function e() {
		pe(this, e), this.definitions = {};
	}
	return he(e, [
		{
			key: "add",
			value: function() {
				var e = this, t = [...arguments].reduce(this._pullDefinitions, {});
				Object.keys(t).forEach(function(n) {
					e.definitions[n] = F(F({}, e.definitions[n] || {}), t[n]), rr(n, t[n]);
					var r = gn[B][n];
					r && rr(r, t[n]), gr();
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
}(), Pr = [], Fr = {}, Ir = {}, Lr = Object.keys(Ir);
function Rr(e, t) {
	var n = t.mixoutsTo;
	return Pr = e, Fr = {}, Object.keys(Ir).forEach(function(e) {
		Lr.indexOf(e) === -1 && delete Ir[e];
	}), Pr.forEach(function(e) {
		var t = e.mixout ? e.mixout() : {};
		if (Object.keys(t).forEach(function(e) {
			typeof t[e] == "function" && (n[e] = t[e]), Te(t[e]) === "object" && Object.keys(t[e]).forEach(function(r) {
				n[e] || (n[e] = {}), n[e][r] = t[e][r];
			});
		}), e.hooks) {
			var r = e.hooks();
			Object.keys(r).forEach(function(e) {
				Fr[e] || (Fr[e] = []), Fr[e].push(r[e]);
			});
		}
		e.provides && e.provides(Ir);
	}), n;
}
function zr(e, t) {
	var n = [...arguments].slice(2);
	return (Fr[e] || []).forEach(function(e) {
		t = e.apply(null, [t].concat(n));
	}), t;
}
function Br(e) {
	var t = [...arguments].slice(1);
	(Fr[e] || []).forEach(function(e) {
		e.apply(null, t);
	});
}
function Vr() {
	var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
	return Ir[e] ? Ir[e].apply(null, t) : void 0;
}
function Hr(e) {
	e.prefix === "fa" && (e.prefix = "fas");
	var t = e.iconName, n = e.prefix || q();
	if (t) return t = yr(n, t) || t, Qn(Ur.definitions, n, t) || Qn(K.styles, n, t);
}
var Ur = new Nr(), J = {
	noAuto: function() {
		H.autoReplaceSvg = !1, H.observeMutations = !1, Br("noAuto");
	},
	config: H,
	dom: {
		i2svg: function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			return z ? (Br("beforeI2svg", e), Vr("pseudoElements2svg", e), Vr("i2svg", e)) : Promise.reject(/* @__PURE__ */ Error("Operation requires a DOM of some kind."));
		},
		watch: function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot;
			H.autoReplaceSvg === !1 && (H.autoReplaceSvg = !0), H.observeMutations = !0, Xn(function() {
				Wr({ autoReplaceSvgRoot: t }), Br("watch", e);
			});
		}
	},
	parse: { icon: function(e) {
		if (e === null) return null;
		if (Te(e) === "object" && e.prefix && e.iconName) return {
			prefix: e.prefix,
			iconName: yr(e.prefix, e.iconName) || e.iconName
		};
		if (Array.isArray(e) && e.length === 2) {
			var t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = wr(e[0]);
			return {
				prefix: n,
				iconName: yr(n, t) || t
			};
		}
		if (typeof e == "string" && (e.indexOf(`${H.cssPrefix}-`) > -1 || e.match(vn))) {
			var r = Or(e.split(" "), { skipLookups: !0 });
			return {
				prefix: r.prefix || q(),
				iconName: yr(r.prefix, r.iconName) || r.iconName
			};
		}
		if (typeof e == "string") {
			var i = q();
			return {
				prefix: i,
				iconName: yr(i, e) || e
			};
		}
	} },
	library: Ur,
	findIconDefinition: Hr,
	toHtml: Zn
}, Wr = function() {
	var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).autoReplaceSvgRoot, t = e === void 0 ? R : e;
	(Object.keys(K.styles).length > 0 || H.autoFetchSvg) && z && H.autoReplaceSvg && J.dom.i2svg({ node: t });
};
function Gr(e, t) {
	return Object.defineProperty(e, "abstract", { get: t }), Object.defineProperty(e, "html", { get: function() {
		return e.abstract.map(function(e) {
			return Zn(e);
		});
	} }), Object.defineProperty(e, "node", { get: function() {
		if (z) {
			var t = R.createElement("div");
			return t.innerHTML = e.html, t.children;
		}
	} }), e;
}
function Kr(e) {
	var t = e.children, n = e.main, r = e.mask, i = e.attributes, a = e.styles, o = e.transform;
	if (zn(o) && n.found && !r.found) {
		var s = {
			x: n.width / n.height / 2,
			y: .5
		};
		i.style = Rn(F(F({}, a), {}, { "transform-origin": `${s.x + o.x / 16}em ${s.y + o.y / 16}em` }));
	}
	return [{
		tag: "svg",
		attributes: i,
		children: t
	}];
}
function qr(e) {
	var t = e.prefix, n = e.iconName, r = e.children, i = e.attributes, a = e.symbol, o = a === !0 ? `${t}-${H.cssPrefix}-${n}` : a;
	return [{
		tag: "svg",
		attributes: { style: "display: none;" },
		children: [{
			tag: "symbol",
			attributes: F(F({}, i), {}, { id: o }),
			children: r
		}]
	}];
}
function Jr(e) {
	return [
		"aria-label",
		"aria-labelledby",
		"title",
		"role"
	].some(function(t) {
		return t in e;
	});
}
function Yr(e) {
	var t = e.icons, n = t.main, r = t.mask, i = e.prefix, a = e.iconName, o = e.transform, s = e.symbol, c = e.maskId, l = e.extra, u = e.watchable, d = u === void 0 ? !1 : u, f = r.found ? r : n, p = f.width, m = f.height, h = [H.replacementClass, a ? `${H.cssPrefix}-${a}` : ""].filter(function(e) {
		return l.classes.indexOf(e) === -1;
	}).filter(function(e) {
		return e !== "" || !!e;
	}).concat(l.classes).join(" "), g = {
		children: [],
		attributes: F(F({}, l.attributes), {}, {
			"data-prefix": i,
			"data-icon": a,
			class: h,
			role: l.attributes.role || "img",
			viewBox: `0 0 ${p} ${m}`
		})
	};
	!Jr(l.attributes) && !l.attributes["aria-hidden"] && (g.attributes["aria-hidden"] = "true"), d && (g.attributes[$t] = "");
	var _ = F(F({}, g), {}, {
		prefix: i,
		iconName: a,
		main: n,
		mask: r,
		maskId: c,
		transform: o,
		symbol: s,
		styles: F({}, l.styles)
	}), v = r.found && n.found ? Vr("generateAbstractMask", _) || {
		children: [],
		attributes: {}
	} : Vr("generateAbstractIcon", _) || {
		children: [],
		attributes: {}
	}, y = v.children, b = v.attributes;
	return _.children = y, _.attributes = b, s ? qr(_) : Kr(_);
}
function Xr(e) {
	var t = e.content, n = e.width, r = e.height, i = e.transform, a = e.extra, o = e.watchable, s = o === void 0 ? !1 : o, c = F(F({}, a.attributes), {}, { class: a.classes.join(" ") });
	s && (c[$t] = "");
	var l = F({}, a.styles);
	zn(i) && (l.transform = Vn({
		transform: i,
		startCentered: !0,
		width: n,
		height: r
	}), l["-webkit-transform"] = l.transform);
	var u = Rn(l);
	u.length > 0 && (c.style = u);
	var d = [];
	return d.push({
		tag: "span",
		attributes: c,
		children: [t]
	}), d;
}
function Zr(e) {
	var t = e.content, n = e.extra, r = F(F({}, n.attributes), {}, { class: n.classes.join(" ") }), i = Rn(n.styles);
	i.length > 0 && (r.style = i);
	var a = [];
	return a.push({
		tag: "span",
		attributes: r,
		children: [t]
	}), a;
}
var Qr = K.styles;
function $r(e) {
	var t = e[0], n = e[1], r = Se(e.slice(4), 1)[0], i = null;
	return i = Array.isArray(r) ? {
		tag: "g",
		attributes: { class: `${H.cssPrefix}-${Sn.GROUP}` },
		children: [{
			tag: "path",
			attributes: {
				class: `${H.cssPrefix}-${Sn.SECONDARY}`,
				fill: "currentColor",
				d: r[0]
			}
		}, {
			tag: "path",
			attributes: {
				class: `${H.cssPrefix}-${Sn.PRIMARY}`,
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
var ei = {
	found: !1,
	width: 512,
	height: 512
};
function ti(e, t) {
	!ln && !H.showMissingIcons && e && console.error(`Icon with name "${e}" and prefix "${t}" is missing.`);
}
function ni(e, t) {
	var n = t;
	return t === "fa" && H.styleDefault !== null && (t = q()), new Promise(function(r, i) {
		if (n === "fa") {
			var a = br(e) || {};
			e = a.iconName || e, t = a.prefix || t;
		}
		if (e && t && Qr[t] && Qr[t][e]) {
			var o = Qr[t][e];
			return r($r(o));
		}
		ti(e, t), r(F(F({}, ei), {}, { icon: H.showMissingIcons && e && Vr("missingIconAbstract") || {} }));
	});
}
var ri = function() {}, ii = H.measurePerformance && Fe && Fe.mark && Fe.measure ? Fe : {
	mark: ri,
	measure: ri
}, ai = "FA \"7.2.0\"", oi = function(e) {
	return ii.mark(`${ai} ${e} begins`), function() {
		return si(e);
	};
}, si = function(e) {
	ii.mark(`${ai} ${e} ends`), ii.measure(`${ai} ${e}`, `${ai} ${e} begins`, `${ai} ${e} ends`);
}, ci = {
	begin: oi,
	end: si
}, li = function() {};
function ui(e) {
	return typeof (e.getAttribute ? e.getAttribute($t) : null) == "string";
}
function di(e) {
	var t = e.getAttribute ? e.getAttribute(nn) : null, n = e.getAttribute ? e.getAttribute(rn) : null;
	return t && n;
}
function fi(e) {
	return e && e.classList && e.classList.contains && e.classList.contains(H.replacementClass);
}
function pi() {
	return H.autoReplaceSvg === !0 ? vi.replace : vi[H.autoReplaceSvg] || vi.replace;
}
function mi(e) {
	return R.createElementNS("http://www.w3.org/2000/svg", e);
}
function hi(e) {
	return R.createElement(e);
}
function gi(e) {
	var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).ceFn, n = t === void 0 ? e.tag === "svg" ? mi : hi : t;
	if (typeof e == "string") return R.createTextNode(e);
	var r = n(e.tag);
	return Object.keys(e.attributes || []).forEach(function(t) {
		r.setAttribute(t, e.attributes[t]);
	}), (e.children || []).forEach(function(e) {
		r.appendChild(gi(e, { ceFn: n }));
	}), r;
}
function _i(e) {
	var t = ` ${e.outerHTML} `;
	return t = `${t}Font Awesome fontawesome.com `, t;
}
var vi = {
	replace: function(e) {
		var t = e[0];
		if (t.parentNode) if (e[1].forEach(function(e) {
			t.parentNode.insertBefore(gi(e), t);
		}), t.getAttribute($t) === null && H.keepOriginalSource) {
			var n = R.createComment(_i(t));
			t.parentNode.replaceChild(n, t);
		} else t.remove();
	},
	nest: function(e) {
		var t = e[0], n = e[1];
		if (~Fn(t).indexOf(H.replacementClass)) return vi.replace(e);
		var r = RegExp(`${H.cssPrefix}-.*`);
		if (delete n[0].attributes.id, n[0].attributes.class) {
			var i = n[0].attributes.class.split(" ").reduce(function(e, t) {
				return t === H.replacementClass || t.match(r) ? e.toSvg.push(t) : e.toNode.push(t), e;
			}, {
				toNode: [],
				toSvg: []
			});
			n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
		}
		var a = n.map(function(e) {
			return Zn(e);
		}).join("\n");
		t.setAttribute($t, ""), t.innerHTML = a;
	}
};
function yi(e) {
	e();
}
function bi(e, t) {
	var n = typeof t == "function" ? t : li;
	if (e.length === 0) n();
	else {
		var r = yi;
		H.mutateApproach === on && (r = L.requestAnimationFrame || yi), r(function() {
			var t = pi(), r = ci.begin("mutate");
			e.map(t), r(), n();
		});
	}
}
var xi = !1;
function Si() {
	xi = !0;
}
function Ci() {
	xi = !1;
}
var wi = null;
function Ti(e) {
	if (Pe && H.observeMutations) {
		var t = e.treeCallback, n = t === void 0 ? li : t, r = e.nodeCallback, i = r === void 0 ? li : r, a = e.pseudoElementsCallback, o = a === void 0 ? li : a, s = e.observeMutationsRoot, c = s === void 0 ? R : s;
		wi = new Pe(function(e) {
			if (!xi) {
				var t = q();
				Pn(e).forEach(function(e) {
					if (e.type === "childList" && e.addedNodes.length > 0 && !ui(e.addedNodes[0]) && (H.searchPseudoElements && o(e.target), n(e.target)), e.type === "attributes" && e.target.parentNode && H.searchPseudoElements && o([e.target], !0), e.type === "attributes" && ui(e.target) && ~xn.indexOf(e.attributeName)) if (e.attributeName === "class" && di(e.target)) {
						var r = Or(Fn(e.target)), a = r.prefix, s = r.iconName;
						e.target.setAttribute(nn, a || t), s && e.target.setAttribute(rn, s);
					} else fi(e.target) && i(e.target);
				});
			}
		}), z && wi.observe(c, {
			childList: !0,
			attributes: !0,
			characterData: !0,
			subtree: !0
		});
	}
}
function Ei() {
	wi && wi.disconnect();
}
function Di(e) {
	var t = e.getAttribute("style"), n = [];
	return t && (n = t.split(";").reduce(function(e, t) {
		var n = t.split(":"), r = n[0], i = n.slice(1);
		return r && i.length > 0 && (e[r] = i.join(":").trim()), e;
	}, {})), n;
}
function Oi(e) {
	var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText === void 0 ? "" : e.innerText.trim(), i = Or(Fn(e));
	return i.prefix ||= q(), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix ? i : (i.prefix && r.length > 0 && (i.iconName = vr(i.prefix, e.innerText) || _r(i.prefix, tr(e.innerText))), !i.iconName && H.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data), i);
}
function ki(e) {
	return Pn(e.attributes).reduce(function(e, t) {
		return e.name !== "class" && e.name !== "style" && (e[t.name] = t.value), e;
	}, {});
}
function Ai() {
	return {
		iconName: null,
		prefix: null,
		transform: W,
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
function ji(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 }, n = Oi(e), r = n.iconName, i = n.prefix, a = n.rest, o = ki(e), s = zr("parseNodeAttributes", {}, e);
	return F({
		iconName: r,
		prefix: i,
		transform: W,
		mask: {
			iconName: null,
			prefix: null,
			rest: []
		},
		maskId: null,
		symbol: !1,
		extra: {
			classes: a,
			styles: t.styleParser ? Di(e) : [],
			attributes: o
		}
	}, s);
}
var Mi = K.styles;
function Ni(e) {
	var t = H.autoReplaceSvg === "nest" ? ji(e, { styleParser: !1 }) : ji(e);
	return ~t.extra.classes.indexOf(yn) ? Vr("generateLayersText", e, t) : Vr("generateSvgReplacementMutation", e, t);
}
function Pi() {
	return [].concat(I(jt), I(Wt));
}
function Fi(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	if (!z) return Promise.resolve();
	var n = R.documentElement.classList, r = function(e) {
		return n.add(`${an}-${e}`);
	}, i = function(e) {
		return n.remove(`${an}-${e}`);
	}, a = H.autoFetchSvg ? Pi() : He.concat(Object.keys(Mi));
	a.includes("fa") || a.push("fa");
	var o = [`.${yn}:not([${$t}])`].concat(a.map(function(e) {
		return `.${e}:not([${$t}])`;
	})).join(", ");
	if (o.length === 0) return Promise.resolve();
	var s = [];
	try {
		s = Pn(e.querySelectorAll(o));
	} catch {}
	if (s.length > 0) r("pending"), i("complete");
	else return Promise.resolve();
	var c = ci.begin("onTree"), l = s.reduce(function(e, t) {
		try {
			var n = Ni(t);
			n && e.push(n);
		} catch (e) {
			ln || e.name === "MissingIcon" && console.error(e);
		}
		return e;
	}, []);
	return new Promise(function(e, n) {
		Promise.all(l).then(function(n) {
			bi(n, function() {
				r("active"), r("complete"), i("pending"), typeof t == "function" && t(), c(), e();
			});
		}).catch(function(e) {
			c(), n(e);
		});
	});
}
function Ii(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	Ni(e).then(function(e) {
		e && bi([e], t);
	});
}
function Li(e) {
	return function(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : Hr(t || {}), i = n.mask;
		return i &&= (i || {}).icon ? i : Hr(i || {}), e(r, F(F({}, n), {}, { mask: i }));
	};
}
var Ri = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.transform, r = n === void 0 ? W : n, i = t.symbol, a = i === void 0 ? !1 : i, o = t.mask, s = o === void 0 ? null : o, c = t.maskId, l = c === void 0 ? null : c, u = t.classes, d = u === void 0 ? [] : u, f = t.attributes, p = f === void 0 ? {} : f, m = t.styles, h = m === void 0 ? {} : m;
	if (e) {
		var g = e.prefix, _ = e.iconName, v = e.icon;
		return Gr(F({ type: "icon" }, e), function() {
			return Br("beforeDOMElementCreation", {
				iconDefinition: e,
				params: t
			}), Yr({
				icons: {
					main: $r(v),
					mask: s ? $r(s.icon) : {
						found: !1,
						width: null,
						height: null,
						icon: {}
					}
				},
				prefix: g,
				iconName: _,
				transform: F(F({}, W), r),
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
}, zi = {
	mixout: function() {
		return { icon: Li(Ri) };
	},
	hooks: function() {
		return { mutationObserverCallbacks: function(e) {
			return e.treeCallback = Fi, e.nodeCallback = Ii, e;
		} };
	},
	provides: function(e) {
		e.i2svg = function(e) {
			var t = e.node, n = t === void 0 ? R : t, r = e.callback;
			return Fi(n, r === void 0 ? function() {} : r);
		}, e.generateSvgReplacementMutation = function(e, t) {
			var n = t.iconName, r = t.prefix, i = t.transform, a = t.symbol, o = t.mask, s = t.maskId, c = t.extra;
			return new Promise(function(t, l) {
				Promise.all([ni(n, r), o.iconName ? ni(o.iconName, o.prefix) : Promise.resolve({
					found: !1,
					width: 512,
					height: 512,
					icon: {}
				})]).then(function(o) {
					var l = Se(o, 2), u = l[0], d = l[1];
					t([e, Yr({
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
			var t = e.children, n = e.attributes, r = e.main, i = e.transform, a = e.styles, o = Rn(a);
			o.length > 0 && (n.style = o);
			var s;
			return zn(i) && (s = Vr("generateAbstractTransformGrouping", {
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
}, Bi = { mixout: function() {
	return { layer: function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.classes, r = n === void 0 ? [] : n;
		return Gr({ type: "layer" }, function() {
			Br("beforeDOMElementCreation", {
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
				attributes: { class: [`${H.cssPrefix}-layers`].concat(I(r)).join(" ") },
				children: n
			}];
		});
	} };
} }, Vi = { mixout: function() {
	return { counter: function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.title, r = n === void 0 ? null : n, i = t.classes, a = i === void 0 ? [] : i, o = t.attributes, s = o === void 0 ? {} : o, c = t.styles, l = c === void 0 ? {} : c;
		return Gr({
			type: "counter",
			content: e
		}, function() {
			return Br("beforeDOMElementCreation", {
				content: e,
				params: t
			}), Zr({
				content: e.toString(),
				title: r,
				extra: {
					attributes: s,
					styles: l,
					classes: [`${H.cssPrefix}-layers-counter`].concat(I(a))
				}
			});
		});
	} };
} }, Hi = {
	mixout: function() {
		return { text: function(e) {
			var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.transform, r = n === void 0 ? W : n, i = t.classes, a = i === void 0 ? [] : i, o = t.attributes, s = o === void 0 ? {} : o, c = t.styles, l = c === void 0 ? {} : c;
			return Gr({
				type: "text",
				content: e
			}, function() {
				return Br("beforeDOMElementCreation", {
					content: e,
					params: t
				}), Xr({
					content: e,
					transform: F(F({}, W), r),
					extra: {
						attributes: s,
						styles: l,
						classes: [`${H.cssPrefix}-layers-text`].concat(I(a))
					}
				});
			});
		} };
	},
	provides: function(e) {
		e.generateLayersText = function(e, t) {
			var n = t.transform, r = t.extra, i = null, a = null;
			if (Ie) {
				var o = parseInt(getComputedStyle(e).fontSize, 10), s = e.getBoundingClientRect();
				i = s.width / o, a = s.height / o;
			}
			return Promise.resolve([e, Xr({
				content: e.innerHTML,
				width: i,
				height: a,
				transform: n,
				extra: r,
				watchable: !0
			})]);
		};
	}
}, Ui = /* @__PURE__ */ RegExp("\"", "ug"), Wi = [1105920, 1112319], Gi = F(F(F(F({}, { FontAwesome: {
	normal: "fas",
	400: "fas"
} }), Ot), Yt), Ft), Ki = Object.keys(Gi).reduce(function(e, t) {
	return e[t.toLowerCase()] = Gi[t], e;
}, {}), qi = Object.keys(Ki).reduce(function(e, t) {
	var n = Ki[t];
	return e[t] = n[900] || I(Object.entries(n))[0][1], e;
}, {});
function Ji(e) {
	return tr(I(e.replace(Ui, ""))[0] || "");
}
function Yi(e) {
	var t = e.getPropertyValue("font-feature-settings").includes("ss01"), n = e.getPropertyValue("content").replace(Ui, ""), r = n.codePointAt(0), i = r >= Wi[0] && r <= Wi[1], a = n.length === 2 ? n[0] === n[1] : !1;
	return i || a || t;
}
function Xi(e, t) {
	var n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
	return (Ki[n] || {})[i] || qi[n];
}
function Zi(e, t) {
	var n = `${tn}${t.replace(":", "-")}`;
	return new Promise(function(r, i) {
		if (e.getAttribute(n) !== null) return r();
		var a = Pn(e.children).filter(function(e) {
			return e.getAttribute(en) === t;
		})[0], o = L.getComputedStyle(e, t), s = o.getPropertyValue("font-family"), c = s.match(bn), l = o.getPropertyValue("font-weight"), u = o.getPropertyValue("content");
		if (a && !c) return e.removeChild(a), r();
		if (c && u !== "none" && u !== "") {
			var d = o.getPropertyValue("content"), f = Xi(s, l), p = Ji(d), m = c[0].startsWith("FontAwesome"), h = Yi(o), g = _r(f, p), _ = g;
			if (m) {
				var v = xr(p);
				v.iconName && v.prefix && (g = v.iconName, f = v.prefix);
			}
			if (g && !h && (!a || a.getAttribute(nn) !== f || a.getAttribute(rn) !== _)) {
				e.setAttribute(n, _), a && e.removeChild(a);
				var y = Ai(), b = y.extra;
				b.attributes[en] = t, ni(g, f).then(function(i) {
					var a = Yr(F(F({}, y), {}, {
						icons: {
							main: i,
							mask: Sr()
						},
						prefix: f,
						iconName: _,
						extra: b,
						watchable: !0
					})), o = R.createElementNS("http://www.w3.org/2000/svg", "svg");
					t === "::before" ? e.insertBefore(o, e.firstChild) : e.appendChild(o), o.outerHTML = a.map(function(e) {
						return Zn(e);
					}).join("\n"), e.removeAttribute(n), r();
				}).catch(i);
			} else r();
		} else r();
	});
}
function Qi(e) {
	return Promise.all([Zi(e, "::before"), Zi(e, "::after")]);
}
function $i(e) {
	return e.parentNode !== document.head && !~sn.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(en) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
var ea = function(e) {
	return !!e && cn.some(function(t) {
		return e.includes(t);
	});
}, ta = function(e) {
	if (!e) return [];
	var t = /* @__PURE__ */ new Set(), n = e.split(/,(?![^()]*\))/).map(function(e) {
		return e.trim();
	});
	n = n.flatMap(function(e) {
		return e.includes("(") ? e : e.split(",").map(function(e) {
			return e.trim();
		});
	});
	var r = ge(n), i;
	try {
		for (r.s(); !(i = r.n()).done;) {
			var a = i.value;
			if (ea(a)) {
				var o = cn.reduce(function(e, t) {
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
function na(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
	if (z) {
		var n;
		if (t) n = e;
		else if (H.searchPseudoElementsFullScan) n = e.querySelectorAll("*");
		else {
			var r = /* @__PURE__ */ new Set(), i = ge(document.styleSheets), a;
			try {
				for (i.s(); !(a = i.n()).done;) {
					var o = a.value;
					try {
						var s = ge(o.cssRules), c;
						try {
							for (s.s(); !(c = s.n()).done;) {
								var l = c.value, u = ge(ta(l.selectorText)), d;
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
						H.searchPseudoElementsWarnings && console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
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
			var r = Pn(n).filter($i).map(Qi), i = ci.begin("searchPseudoElements");
			Si(), Promise.all(r).then(function() {
				i(), Ci(), e();
			}).catch(function() {
				i(), Ci(), t();
			});
		});
	}
}
var ra = {
	hooks: function() {
		return { mutationObserverCallbacks: function(e) {
			return e.pseudoElementsCallback = na, e;
		} };
	},
	provides: function(e) {
		e.pseudoElements2svg = function(e) {
			var t = e.node, n = t === void 0 ? R : t;
			H.searchPseudoElements && na(n);
		};
	}
}, ia = !1, aa = {
	mixout: function() {
		return { dom: { unwatch: function() {
			Si(), ia = !0;
		} } };
	},
	hooks: function() {
		return {
			bootstrap: function() {
				Ti(zr("mutationObserverCallbacks", {}));
			},
			noAuto: function() {
				Ei();
			},
			watch: function(e) {
				var t = e.observeMutationsRoot;
				ia ? Ci() : Ti(zr("mutationObserverCallbacks", { observeMutationsRoot: t }));
			}
		};
	}
}, oa = function(e) {
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
}, sa = {
	mixout: function() {
		return { parse: { transform: function(e) {
			return oa(e);
		} } };
	},
	hooks: function() {
		return { parseNodeAttributes: function(e, t) {
			var n = t.getAttribute("data-fa-transform");
			return n && (e.transform = oa(n)), e;
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
				attributes: F({}, a.outer),
				children: [{
					tag: "g",
					attributes: F({}, a.inner),
					children: [{
						tag: t.icon.tag,
						children: t.icon.children,
						attributes: F(F({}, t.icon.attributes), a.path)
					}]
				}]
			};
		};
	}
}, ca = {
	x: 0,
	y: 0,
	width: "100%",
	height: "100%"
};
function la(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function ua(e) {
	return e.tag === "g" ? e.children : [e];
}
Rr([
	Kn,
	zi,
	Bi,
	Vi,
	Hi,
	ra,
	aa,
	sa,
	{
		hooks: function() {
			return { parseNodeAttributes: function(e, t) {
				var n = t.getAttribute("data-fa-mask"), r = n ? Or(n.split(" ").map(function(e) {
					return e.trim();
				})) : Sr();
				return r.prefix ||= q(), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
			} };
		},
		provides: function(e) {
			e.generateAbstractMask = function(e) {
				var t = e.children, n = e.attributes, r = e.main, i = e.mask, a = e.maskId, o = e.transform, s = r.width, c = r.icon, l = i.width, u = i.icon, d = Bn({
					transform: o,
					containerWidth: l,
					iconWidth: s
				}), f = {
					tag: "rect",
					attributes: F(F({}, ca), {}, { fill: "white" })
				}, p = c.children ? { children: c.children.map(la) } : {}, m = {
					tag: "g",
					attributes: F({}, d.inner),
					children: [la(F({
						tag: c.tag,
						attributes: F(F({}, c.attributes), d.path)
					}, p))]
				}, h = {
					tag: "g",
					attributes: F({}, d.outer),
					children: [m]
				}, g = `mask-${a || Nn()}`, _ = `clip-${a || Nn()}`, v = {
					tag: "mask",
					attributes: F(F({}, ca), {}, {
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
						children: ua(u)
					}, v]
				};
				return t.push(y, {
					tag: "rect",
					attributes: F({
						fill: "currentColor",
						"clip-path": `url(#${_})`,
						mask: `url(#${g})`
					}, ca)
				}), {
					children: t,
					attributes: n
				};
			};
		}
	},
	{ provides: function(e) {
		var t = !1;
		L.matchMedia && (t = L.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
			var e = [], n = { fill: "currentColor" }, r = {
				attributeType: "XML",
				repeatCount: "indefinite",
				dur: "2s"
			};
			e.push({
				tag: "path",
				attributes: F(F({}, n), {}, { d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z" })
			});
			var i = F(F({}, r), {}, { attributeName: "opacity" }), a = {
				tag: "circle",
				attributes: F(F({}, n), {}, {
					cx: "256",
					cy: "364",
					r: "28"
				}),
				children: []
			};
			return t || a.children.push({
				tag: "animate",
				attributes: F(F({}, r), {}, {
					attributeName: "r",
					values: "28;14;28;28;14;28;"
				})
			}, {
				tag: "animate",
				attributes: F(F({}, i), {}, { values: "1;0;1;1;0;1;" })
			}), e.push(a), e.push({
				tag: "path",
				attributes: F(F({}, n), {}, {
					opacity: "1",
					d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
				}),
				children: t ? [] : [{
					tag: "animate",
					attributes: F(F({}, i), {}, { values: "1;0;0;0;0;1;" })
				}]
			}), t || e.push({
				tag: "path",
				attributes: F(F({}, n), {}, {
					opacity: "0",
					d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
				}),
				children: [{
					tag: "animate",
					attributes: F(F({}, i), {}, { values: "0;0;1;1;0;0;" })
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
], { mixoutsTo: J }), J.noAuto;
var da = J.config;
J.library, J.dom;
var fa = J.parse;
J.findIconDefinition, J.toHtml;
var pa = J.icon;
J.layer, J.text, J.counter;
//#endregion
//#region node_modules/@fortawesome/react-fontawesome/dist/index.js
function ma(e) {
	return e -= 0, e === e;
}
function ha(e) {
	return ma(e) ? e : (e = e.replace(/[_-]+(.)?/g, (e, t) => t ? t.toUpperCase() : ""), e.charAt(0).toLowerCase() + e.slice(1));
}
function ga(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
var _a = /* @__PURE__ */ new Map(), va = 1e3;
function ya(e) {
	if (_a.has(e)) return _a.get(e);
	let t = {}, n = 0, r = e.length;
	for (; n < r;) {
		let i = e.indexOf(";", n), a = i === -1 ? r : i, o = e.slice(n, a).trim();
		if (o) {
			let e = o.indexOf(":");
			if (e > 0) {
				let n = o.slice(0, e).trim(), r = o.slice(e + 1).trim();
				if (n && r) {
					let e = ha(n);
					t[e.startsWith("webkit") ? ga(e) : e] = r;
				}
			}
		}
		n = a + 1;
	}
	if (_a.size === va) {
		let e = _a.keys().next().value;
		e && _a.delete(e);
	}
	return _a.set(e, t), t;
}
function ba(e, t, n = {}) {
	if (typeof t == "string") return t;
	let r = (t.children || []).map((t) => ba(e, t)), i = t.attributes || {}, a = {};
	for (let [e, t] of Object.entries(i)) switch (!0) {
		case e === "class":
			a.className = t;
			break;
		case e === "style":
			a.style = ya(String(t));
			break;
		case e.startsWith("aria-"):
		case e.startsWith("data-"):
			a[e.toLowerCase()] = t;
			break;
		default: a[ha(e)] = t;
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
var xa = ba.bind(null, e.createElement), Sa = (e, t) => {
	let n = s();
	return e || (t ? n : void 0);
}, Ca = class {
	constructor(e = "react-fontawesome") {
		this.enabled = !1;
		let t = !1;
		try {
			t = typeof process < "u" && process.env.NODE_ENV === "development";
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
typeof process < "u" && process.env?.FA_VERSION;
var wa = "searchPseudoElementsFullScan" in da ? "7.0.0" : "6.0.0", Ta = Number.parseInt(wa) >= 7, Ea = "fa", Y = {
	beat: "fa-beat",
	fade: "fa-fade",
	beatFade: "fa-beat-fade",
	bounce: "fa-bounce",
	shake: "fa-shake",
	spin: "fa-spin",
	spinPulse: "fa-spin-pulse",
	spinReverse: "fa-spin-reverse",
	pulse: "fa-pulse"
}, Da = {
	left: "fa-pull-left",
	right: "fa-pull-right"
}, Oa = {
	90: "fa-rotate-90",
	180: "fa-rotate-180",
	270: "fa-rotate-270"
}, ka = {
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
}, X = {
	border: "fa-border",
	fixedWidth: "fa-fw",
	flip: "fa-flip",
	flipHorizontal: "fa-flip-horizontal",
	flipVertical: "fa-flip-vertical",
	inverse: "fa-inverse",
	rotateBy: "fa-rotate-by",
	swapOpacity: "fa-swap-opacity",
	widthAuto: "fa-width-auto"
}, Aa = { default: "fa-layers" };
function ja(e) {
	let t = da.cssPrefix || da.familyPrefix || Ea;
	return t === Ea ? e : e.replace(new RegExp(String.raw`(?<=^|\s)${Ea}-`, "g"), `${t}-`);
}
function Ma(e) {
	let { beat: t, fade: n, beatFade: r, bounce: i, shake: a, spin: o, spinPulse: s, spinReverse: c, pulse: l, fixedWidth: u, inverse: d, border: f, flip: p, size: m, rotation: h, pull: g, swapOpacity: _, rotateBy: v, widthAuto: y, className: b } = e, x = [];
	return b && x.push(...b.split(" ")), t && x.push(Y.beat), n && x.push(Y.fade), r && x.push(Y.beatFade), i && x.push(Y.bounce), a && x.push(Y.shake), o && x.push(Y.spin), c && x.push(Y.spinReverse), s && x.push(Y.spinPulse), l && x.push(Y.pulse), u && x.push(X.fixedWidth), d && x.push(X.inverse), f && x.push(X.border), p === !0 && x.push(X.flip), (p === "horizontal" || p === "both") && x.push(X.flipHorizontal), (p === "vertical" || p === "both") && x.push(X.flipVertical), m != null && x.push(ka[m]), h != null && h !== 0 && x.push(Oa[h]), g != null && x.push(Da[g]), _ && x.push(X.swapOpacity), Ta ? (v && x.push(X.rotateBy), y && x.push(X.widthAuto), (da.cssPrefix || da.familyPrefix || Ea) === Ea ? x : x.map(ja)) : x;
}
var Na = (e) => typeof e == "object" && "icon" in e && !!e.icon;
function Pa(e) {
	if (e) return Na(e) ? e : fa.icon(e);
}
function Fa(e) {
	return Object.keys(e);
}
var Ia = new Ca("FontAwesomeIcon"), La = {
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
}, Ra = new Set(Object.keys(La)), Z = e.forwardRef((e, t) => {
	let n = {
		...La,
		...e
	}, { icon: r, mask: i, symbol: a, title: o, titleId: s, maskId: c, transform: l } = n, u = Sa(c, !!i), d = Sa(s, !!o), f = Pa(r);
	if (!f) return Ia.error("Icon lookup is undefined", r), null;
	let p = Ma(n), m = typeof l == "string" ? fa.transform(l) : l, h = Pa(i), g = pa(f, {
		...p.length > 0 && { classes: p },
		...m && { transform: m },
		...h && { mask: h },
		symbol: a,
		title: o,
		titleId: d,
		maskId: u
	});
	if (!g) return Ia.error("Could not find icon", f), null;
	let { abstract: _ } = g, v = { ref: t };
	for (let e of Fa(n)) Ra.has(e) || (v[e] = n[e]);
	return xa(_[0], v);
});
Z.displayName = "FontAwesomeIcon", `${Aa.default}${X.fixedWidth}`;
//#endregion
//#region components/pagination/Pager.jsx
var za = {
	changePage: u.func.isRequired,
	totalItems: u.number.isRequired,
	currentPage: u.number.isRequired,
	pageSize: u.number.isRequired,
	hideLast: u.bool
}, Ba = class extends e.Component {
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
				children: ce(a, 0)
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
				children: ce(e, 0)
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
						children: /* @__PURE__ */ S(Z, { icon: "angle-left" })
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
						children: /* @__PURE__ */ S(Z, { icon: "angle-right" })
					})
				})
			]
		});
	}
};
Ba.propTypes = za;
//#endregion
//#region components/pagination/LimitSelector.jsx
var Va = {
	changeLimit: u.func.isRequired,
	pageSize: u.number,
	limitList: u.arrayOf(u.number),
	label: u.string
}, Ha = ({ changeLimit: e, pageSize: t = 10, limitList: n = [
	10,
	25,
	50,
	100
], label: r }) => {
	let i = (t) => {
		t.preventDefault(), e(parseInt(t.target.value, 10));
	}, a = r || "Rows per page: ", o = n.map((e) => /* @__PURE__ */ S("option", {
		value: e,
		children: e
	}, `limit-${e}`));
	return /* @__PURE__ */ C("div", {
		className: "usa-dt-pagination__limit-selector__wrapper",
		children: [/* @__PURE__ */ S("label", { children: a }), /* @__PURE__ */ S("select", {
			onChange: i,
			value: t,
			className: "usa-dt-pagination__limit-selector",
			"aria-label": "limit-dropdown",
			children: o
		})]
	});
};
Ha.propTypes = Va;
//#endregion
//#region components/pagination/GoToPage.jsx
var Ua = {
	changePage: u.func.isRequired,
	totalPages: u.number,
	id: u.string
}, Wa = ({ changePage: e, totalPages: t = 1, id: n = "usa-dt-pagination-go-to" }) => {
	let [r, i] = l(""), a = t > 1 ? `1-${t}` : "1", o = () => !(r === "" || parseInt(r, 10) < 1 || parseInt(r, 10) > t), s = (t) => {
		t.preventDefault(), o() && e(parseInt(r, 10));
	};
	return /* @__PURE__ */ C("form", {
		className: "usa-dt-pagination__go-to",
		children: [
			/* @__PURE__ */ S("label", {
				htmlFor: `${n}-go-to`,
				children: "Go to page"
			}),
			/* @__PURE__ */ S("input", {
				type: "number",
				id: `${n}-go-to`,
				title: `Enter a number between 1 and ${t}`,
				min: "1",
				max: t,
				placeholder: a,
				value: r,
				onChange: (e) => {
					i(e.target.value);
				},
				onSubmit: s
			}),
			/* @__PURE__ */ S("button", {
				type: "submit",
				onClick: s,
				disabled: !o(),
				children: "Go"
			})
		]
	});
};
Wa.propTypes = Ua;
//#endregion
//#region components/pagination/Pagination.jsx
var Ga = {
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
}, Ka = ({ changePage: t, totalItems: n, currentPage: r = 1, pageSize: i = 10, resultsText: a = !1, limitSelector: o = !1, changeLimit: s = () => {}, goToPage: c = !1, id: l, hideLast: u = !1 }) => {
	let d = Math.ceil(n / i), f = () => {
		if (e.isValidElement(a)) return a;
		if (a) {
			let e = le(r, i, n);
			return /* @__PURE__ */ S("div", {
				className: "usa-dt-pagination__totals",
				children: `${ce(e.start, 0)}-${ce(e.end, 0)} of ${ce(n, 0)} results`
			});
		}
		return null;
	}, p = o ? /* @__PURE__ */ S(Ha, {
		changeLimit: s,
		pageSize: i
	}) : null, m = c ? /* @__PURE__ */ S(Wa, {
		changePage: t,
		totalPages: d,
		id: l
	}) : null;
	return !o && d <= 1 ? null : /* @__PURE__ */ C("div", {
		className: "usa-dt-pagination",
		children: [f(), /* @__PURE__ */ C("div", {
			className: "usa-dt-pagination__wrapper",
			children: [
				p,
				/* @__PURE__ */ S(Ba, {
					changePage: t,
					totalItems: n,
					currentPage: r,
					pageSize: i,
					hideLast: u
				}),
				m
			]
		})]
	});
};
Ka.propTypes = Ga;
//#endregion
//#region components/Picker.jsx
var qa = "usa-dt-picker__button-icon--svg", Ja = {
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
}, Ya = (e, t, n) => e.name === n ? -1 : t.name === n ? 1 : e.name < t.name ? -1 : +(e.name > t.name), Xa = ({ className: e = "", id: t = "", options: n, selectedOption: r, icon: i = null, sortFn: a = Ya, isFixedWidth: s = !1, children: u, dropdownDirection: d = "right", backgroundColor: f = "#1a4480", notEnabled: p, buttonClassNames: m = "", pickerListClassNames: h = "" }) => {
	let g = c(null), _ = c(null), [v, y] = l(!1), [w, T] = l({
		top: 0,
		width: 0,
		left: 0,
		right: 0
	}), E = (e) => {
		e.preventDefault(), p || y(!v);
	}, D = (e, t) => a(e, t, r), O = () => {
		_.current && g.current && T({
			top: _.current.offsetHeight,
			width: _.current.offsetWidth,
			left: _.current.offsetLeft,
			right: g.current.offsetWidth - (_.current.offsetWidth + _.current.offsetLeft)
		});
	};
	o(() => {
		w.width !== 0 && s && _.current && _.current.offsetWidth !== w.width && O();
	}), o(() => {
		let e = (e) => {
			v && g.current && !g.current.contains(e.target) && e.target.id !== `${t}-${qa}` && e.target.parentNode.id !== `${t}-${qa}` && y(!1);
		};
		return O(), document.addEventListener("click", e), () => {
			document.removeEventListener("click", e);
		};
	}, [v]);
	let k = (e) => (t) => {
		e(t), y(!1);
	};
	return /* @__PURE__ */ S("div", {
		id: t,
		className: `usa-dt-picker ${e}`,
		ref: g,
		style: { backgroundColor: f },
		children: /* @__PURE__ */ C("div", {
			className: "usa-dt-picker__dropdown-container",
			style: { backgroundColor: f },
			children: [/* @__PURE__ */ C("button", {
				style: { backgroundColor: f },
				ref: _,
				type: "button",
				"aria-label": "Dropdown Toggle Button",
				className: `usa-dt-picker__button ${m}`,
				onClick: E,
				children: [i && /* @__PURE__ */ S("div", {
					className: "usa-dt-picker__icon",
					children: i
				}), u || /* @__PURE__ */ C(x, { children: [/* @__PURE__ */ S("span", {
					className: "usa-dt-picker__button-text",
					style: { backgroundColor: f },
					children: r
				}), /* @__PURE__ */ C("span", {
					className: "usa-dt-picker__button-icon",
					children: [!v && /* @__PURE__ */ S(Z, {
						id: `${t}-${qa}`,
						icon: "chevron-down",
						alt: "Toggle menu",
						color: "#555"
					}), v && /* @__PURE__ */ S(Z, {
						id: `${t}-${qa}`,
						icon: "chevron-up",
						alt: "Toggle menu",
						color: "#555"
					})]
				})] })]
			}), /* @__PURE__ */ S("ul", {
				className: `usa-dt-picker__list ${h} ${v ? "" : "hide"}`,
				style: (() => {
					let e = {
						top: `${w.top}px`,
						left: `${w.left}px`
					};
					return s && d === "right" ? {
						...e,
						width: `${w.width}px`
					} : s && d === "left" ? {
						top: e.top,
						right: `${w.right}`,
						width: `${w.width}px`
					} : d === "left" ? {
						top: e.top,
						right: `${w.right}px`
					} : e;
				})(),
				children: n.sort(D).map((e) => ({
					...e,
					onClick: k(e.onClick)
				})).map((e) => /* @__PURE__ */ S("li", {
					className: `usa-dt-picker__list-item ${e?.classNames ? e.classNames : ""}`,
					children: /* @__PURE__ */ S("button", {
						className: `usa-dt-picker__item ${e.name === r ? "active" : ""}`,
						type: "button",
						value: `${e.value || e.name}`,
						onClick: (t) => {
							t.preventDefault(), e.onClick(e.value);
						},
						onKeyDown: (t) => {
							e.name === "reddit" && t.key === "Tab" && y(!v);
						},
						children: e.component ? e.component : e.name
					})
				}, b()))
			})]
		})
	});
};
Xa.propTypes = Ja;
//#endregion
//#region components/quarterPicker/QuarterButton.jsx
var Za = {
	disabled: u.bool,
	active: u.bool,
	showPeriods: u.bool,
	quarter: u.string,
	handleSelection: u.func,
	handleHover: u.func,
	handleBlur: u.func,
	toggleTooltip: u.func,
	title: u.string
}, Qa = ({ disabled: e, active: t, quarter: n, handleSelection: r, toggleTooltip: i, title: a = "", handleHover: o, handleBlur: s, showPeriods: c = !1 }) => {
	let l = a || `Q ${n}`, u = () => {
		e ? i(n) : o(n, c ? "period" : "quarter");
	}, d = () => {
		i(0), s(c ? "period" : "quarter");
	}, f = (t) => {
		t.preventDefault(), e || r(n);
	}, p = e ? "usa-dt-quarter-picker__quarter_disabled " : "";
	return n === "1" ? p += "usa-dt-quarter-picker__quarter_first" : n === "4" ? p += "usa-dt-quarter-picker__quarter_last" : a.includes("-") && (p += "usa-dt-quarter-picker__quarter_double"), !e && t && (p += " usa-dt-quarter-picker__quarter_active"), /* @__PURE__ */ S("button", {
		className: `usa-dt-quarter-picker__quarter ${p}`,
		onMouseDown: f,
		onClick: f,
		onMouseOver: u,
		onMouseEnter: u,
		onFocus: u,
		onMouseLeave: d,
		onBlur: d,
		"aria-disabled": e,
		children: l
	});
};
Qa.propTypes = Za;
//#endregion
//#region components/quarterPicker/QuarterPicker.jsx
var $a = (e = []) => {
	let [t, n] = l(e);
	return [t, (e) => {
		let r = parseInt(e, 10);
		n(t.map((e) => parseInt(e, 10)).filter((e) => e <= r).map((e) => `${e}`).concat([e]));
	}];
}, eo = [
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
], to = (e, t) => t.some((t) => parseInt(t, 10) >= parseInt(e, 10)), no = {
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
}, ro = ({ handleSelection: e, disabledQuarters: t = [], disabledPeriods: n = [], periodsPerQuarter: r = eo, selectedQuarters: i = [], selectedPeriods: a = [], showPeriods: o = !1, isCumulative: s = !1 }) => {
	let [c, u] = l(""), [d, f] = l(""), p = (e, t = "quarter") => {
		t === "quarter" ? f(e) : u(e);
	}, m = (e = "quarter") => {
		e === "quarter" ? f("") : u("");
	};
	return /* @__PURE__ */ S("div", {
		className: "usa-dt-quarter-picker",
		children: /* @__PURE__ */ S("ul", {
			className: "usa-dt-quarter-picker__list",
			children: [
				,
				,
				,
				,
			].fill(0).map((l, u) => {
				let f = u + 1, h = `${f}`;
				if (o) {
					let t = r[u];
					return /* @__PURE__ */ C("li", {
						className: "usa-dt-quarter-picker__list-item usa-dt-quarter-picker__period-list-container",
						children: [/* @__PURE__ */ S("p", {
							className: t.every((e) => n.includes(e.id)) ? "disabled" : "",
							children: `Q${f}`
						}), /* @__PURE__ */ S("ul", {
							className: "usa-dt-quarter-picker__period-list",
							children: t.map((t) => /* @__PURE__ */ S("li", {
								className: Object.keys(t).includes("className") ? `${t.className} usa-dt-quarter-picker__list-item` : "usa-dt-quarter-picker__list-item",
								children: /* @__PURE__ */ S(Qa, {
									showPeriods: o,
									quarter: t.id,
									title: t.title,
									disabled: n.includes(t.id),
									active: to(t.id, a) || parseInt(c, 10) >= parseInt(t.id, 10),
									handleHover: p,
									handleBlur: m,
									handleSelection: e,
									toggleTooltip: () => {}
								})
							}, b()))
						})]
					}, b());
				}
				return /* @__PURE__ */ S("li", {
					className: "usa-dt-quarter-picker__list-item",
					children: /* @__PURE__ */ S(Qa, {
						quarter: h,
						disabled: t.includes(h),
						active: s ? to(h, i) || parseInt(d, 10) >= f : i.includes(h) || d === h,
						handleSelection: e,
						handleHover: p,
						handleBlur: m,
						toggleTooltip: () => {}
					})
				}, b());
			})
		})
	});
};
ro.propTypes = no;
//#endregion
//#region helpers/searchBarHelper.js
var io = (e, t, n) => e && t === e ? !1 : !(t && e.length < n), ao = (e, t) => !!(t && !e.target.value), oo = {
	onSearch: u.func,
	minChars: u.number,
	isDisabled: u.bool,
	throttleOnChange: u.number,
	inputTitle: u.string,
	placeholder: u.string
}, so = ({ onSearch: e, minChars: t = 2, isDisabled: n = !1, throttleOnChange: r = 500, inputTitle: i = "Search Input", placeholder: a = "" }) => {
	let [o, s] = l(""), [c, u] = l(""), d = () => {
		s(""), e(""), u("");
	}, f = v((e) => ao(e, c) ? d() : s(e.target.value), r), p = () => {
		let t = o.trim();
		e(t), s(t), u(t);
	}, m = (e) => (e.preventDefault(), io(o, c, t) ? p() : d()), h = "search";
	return (o && c === o || c && o.length < t) && (h = "times"), /* @__PURE__ */ C("form", {
		className: "usa-dt-search-bar",
		children: [/* @__PURE__ */ S("input", {
			className: "usa-dt-search-bar__input",
			"aria-label": "Search Input",
			title: i,
			value: o,
			type: "text",
			disabled: n,
			onChange: f,
			placeholder: a
		}), /* @__PURE__ */ S("button", {
			disabled: o.length < t && !c || n,
			"aria-label": "Search Button",
			title: h === "search" ? "Submit Search Button" : "Remove Input Value Button",
			onClick: m,
			className: "usa-dt-search-bar__button",
			children: /* @__PURE__ */ S(Z, { icon: h })
		})]
	});
};
so.propTypes = oo;
//#endregion
//#region components/messages/GenericMessage.jsx
var co = {
	title: u.string.isRequired,
	description: u.string,
	icon: u.object,
	className: u.string
}, lo = ({ icon: e, title: t, description: n, className: r }) => /* @__PURE__ */ C("div", {
	className: `usda-message${r && ` usda-message_${r}`}`,
	children: [
		e && /* @__PURE__ */ S("div", {
			className: "usda-message__icon",
			children: e
		}),
		/* @__PURE__ */ S("div", {
			className: "usda-message__title",
			children: t
		}),
		n && /* @__PURE__ */ S("div", {
			className: "usda-message__description",
			children: n
		})
	]
});
lo.propTypes = co;
//#endregion
//#region components/messages/ErrorMessage.jsx
var uo = { description: u.string }, fo = ({ description: e = "Something went wrong while gathering your data." }) => /* @__PURE__ */ S(lo, {
	description: e,
	title: "An error occurred",
	icon: /* @__PURE__ */ S(Z, { icon: "exclamation-triangle" }),
	className: "error"
});
fo.propTypes = uo;
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
function po() {
	return po = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, po.apply(null, arguments);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function mo(e, t) {
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
function ho(e, t) {
	return ho = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, ho(e, t);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function go(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ho(e, t);
}
//#endregion
//#region node_modules/dom-helpers/esm/hasClass.js
function _o(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/dom-helpers/esm/addClass.js
function vo(e, t) {
	e.classList ? e.classList.add(t) : _o(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
//#endregion
//#region node_modules/dom-helpers/esm/removeClass.js
function yo(e, t) {
	return e.replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function bo(e, t) {
	e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = yo(e.className, t) : e.setAttribute("class", yo(e.className && e.className.baseVal || "", t));
}
//#endregion
//#region node_modules/react-transition-group/esm/config.js
var xo = { disabled: !1 }, So = process.env.NODE_ENV === "production" ? null : u.oneOfType([u.number, u.shape({
	enter: u.number,
	exit: u.number,
	appear: u.number
}).isRequired]), Co = process.env.NODE_ENV === "production" ? null : u.oneOfType([
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
]), wo = e.createContext(null), To = function(e) {
	return e.scrollTop;
}, Eo = "unmounted", Do = "exited", Oo = "entering", ko = "entered", Ao = "exiting", Q = /*#__PURE__*/ function(t) {
	go(n, t);
	function n(e, n) {
		var r = t.call(this, e, n) || this, i = n, a = i && !i.isMounting ? e.enter : e.appear, o;
		return r.appearStatus = null, e.in ? a ? (o = Do, r.appearStatus = Oo) : o = ko : o = e.unmountOnExit || e.mountOnEnter ? Eo : Do, r.state = { status: o }, r.nextCallback = null, r;
	}
	n.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: Do } : null;
	};
	var r = n.prototype;
	return r.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, r.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = Oo) : (n === "entering" || n === "entered") && (t = Ao);
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
				n && To(n);
			}
			this.performEnter(e);
		} else this.performExit();
		else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: Eo });
	}, r.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [w.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		if (!e && !n || xo.disabled) {
			this.safeSetState({ status: ko }, function() {
				t.props.onEntered(a);
			});
			return;
		}
		this.props.onEnter(a, o), this.safeSetState({ status: Oo }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: ko }, function() {
					t.props.onEntered(a, o);
				});
			});
		});
	}, r.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : w.findDOMNode(this);
		if (!t || xo.disabled) {
			this.safeSetState({ status: Do }, function() {
				e.props.onExited(r);
			});
			return;
		}
		this.props.onExit(r), this.safeSetState({ status: Ao }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: Do }, function() {
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
		var i = mo(n, [
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
		return /*#__PURE__*/ e.createElement(wo.Provider, { value: null }, typeof r == "function" ? r(t, i) : e.cloneElement(e.Children.only(r), i));
	}, n;
}(e.Component);
Q.contextType = wo, Q.propTypes = process.env.NODE_ENV === "production" ? {} : {
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
		var t = So;
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
function jo() {}
Q.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: jo,
	onEntering: jo,
	onEntered: jo,
	onExit: jo,
	onExiting: jo,
	onExited: jo
}, Q.UNMOUNTED = Eo, Q.EXITED = Do, Q.ENTERING = Oo, Q.ENTERED = ko, Q.EXITING = Ao;
//#endregion
//#region node_modules/react-transition-group/esm/CSSTransition.js
var Mo = function(e, t) {
	return e && t && t.split(" ").forEach(function(t) {
		return vo(e, t);
	});
}, No = function(e, t) {
	return e && t && t.split(" ").forEach(function(t) {
		return bo(e, t);
	});
}, Po = /*#__PURE__*/ function(t) {
	go(n, t);
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
		t === "appear" && n === "done" && i && (r += " " + i), n === "active" && e && To(e), r && (this.appliedClasses[t][n] = r, Mo(e, r));
	}, r.removeClasses = function(e, t) {
		var n = this.appliedClasses[t], r = n.base, i = n.active, a = n.done;
		this.appliedClasses[t] = {}, r && No(e, r), i && No(e, i), a && No(e, a);
	}, r.render = function() {
		var t = this.props;
		t.classNames;
		var n = mo(t, ["classNames"]);
		return /*#__PURE__*/ e.createElement(Q, po({}, n, {
			onEnter: this.onEnter,
			onEntered: this.onEntered,
			onEntering: this.onEntering,
			onExit: this.onExit,
			onExiting: this.onExiting,
			onExited: this.onExited
		}));
	}, n;
}(e.Component);
Po.defaultProps = { classNames: "" }, Po.propTypes = process.env.NODE_ENV === "production" ? {} : po({}, Q.propTypes, {
	classNames: Co,
	onEnter: u.func,
	onEntering: u.func,
	onEntered: u.func,
	onExit: u.func,
	onExiting: u.func,
	onExited: u.func
});
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function Fo(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
//#endregion
//#region node_modules/react-transition-group/esm/utils/ChildMapping.js
function Io(e, n) {
	var r = function(e) {
		return n && i(e) ? n(e) : e;
	}, a = Object.create(null);
	return e && t.map(e, function(e) {
		return e;
	}).forEach(function(e) {
		a[e.key] = r(e);
	}), a;
}
function Lo(e, t) {
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
function Ro(e, t, n) {
	return n[t] == null ? e.props[t] : n[t];
}
function zo(e, t) {
	return Io(e.children, function(r) {
		return n(r, {
			onExited: t.bind(null, r),
			in: !0,
			appear: Ro(r, "appear", e),
			enter: Ro(r, "enter", e),
			exit: Ro(r, "exit", e)
		});
	});
}
function Bo(e, t, r) {
	var a = Io(e.children), o = Lo(t, a);
	return Object.keys(o).forEach(function(s) {
		var c = o[s];
		if (i(c)) {
			var l = s in t, u = s in a, d = t[s], f = i(d) && !d.props.in;
			u && (!l || f) ? o[s] = n(c, {
				onExited: r.bind(null, c),
				in: !0,
				exit: Ro(c, "exit", e),
				enter: Ro(c, "enter", e)
			}) : !u && l && !f ? o[s] = n(c, { in: !1 }) : u && l && i(d) && (o[s] = n(c, {
				onExited: r.bind(null, c),
				in: d.props.in,
				exit: Ro(c, "exit", e),
				enter: Ro(c, "enter", e)
			}));
		}
	}), o;
}
//#endregion
//#region node_modules/react-transition-group/esm/TransitionGroup.js
var Vo = Object.values || function(e) {
	return Object.keys(e).map(function(t) {
		return e[t];
	});
}, Ho = {
	component: "div",
	childFactory: function(e) {
		return e;
	}
}, Uo = /*#__PURE__*/ function(t) {
	go(n, t);
	function n(e, n) {
		var r = t.call(this, e, n) || this;
		return r.state = {
			contextValue: { isMounting: !0 },
			handleExited: r.handleExited.bind(Fo(r)),
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
			children: t.firstRender ? zo(e, r) : Bo(e, n, r),
			firstRender: !1
		};
	}, r.handleExited = function(e, t) {
		var n = Io(this.props.children);
		e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
			var n = po({}, t.children);
			return delete n[e.key], { children: n };
		}));
	}, r.render = function() {
		var t = this.props, n = t.component, r = t.childFactory, i = mo(t, ["component", "childFactory"]), a = this.state.contextValue, o = Vo(this.state.children).map(r);
		return delete i.appear, delete i.enter, delete i.exit, n === null ? /*#__PURE__*/ e.createElement(wo.Provider, { value: a }, o) : /*#__PURE__*/ e.createElement(wo.Provider, { value: a }, /*#__PURE__*/ e.createElement(n, i, o));
	}, n;
}(e.Component);
Uo.propTypes = process.env.NODE_ENV === "production" ? {} : {
	component: u.any,
	children: u.node,
	appear: u.bool,
	enter: u.bool,
	exit: u.bool,
	childFactory: u.func
}, Uo.defaultProps = Ho;
//#endregion
//#region components/messages/LoadingMessage.jsx
var Wo = ({ loadingText: e = "Gathering your data..." }) => /* @__PURE__ */ S(Uo, {
	className: "usda-message usda-message_loading",
	children: /* @__PURE__ */ S(Po, {
		classNames: "usda-loading-animation__container",
		timeout: {
			exit: 225,
			enter: 195
		},
		exit: !0,
		children: /* @__PURE__ */ C("div", {
			className: "usda-loading-animation__container",
			children: [/* @__PURE__ */ S("div", {
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
			}), /* @__PURE__ */ S("div", {
				className: "loading-message",
				children: e
			})]
		})
	})
});
Wo.propTypes = { loadingText: u.string };
//#endregion
//#region components/messages/NoResultsMessage.jsx
var Go = () => /* @__PURE__ */ S(lo, {
	title: "No Results",
	description: "No available data to display.",
	className: "no-results"
}), Ko = {
	data: u.object,
	columns: u.array,
	oddClass: u.string,
	divider: u.string
}, qo = ({ data: e, columns: t, oddClass: n, divider: r }) => {
	let [i, a] = l(e.expanded || !1), o = i ? "chevron-down" : "chevron-right", s = t.map(({ title: e }) => e), c = () => {
		a(!i);
	}, u = /* @__PURE__ */ S("tr", {
		className: `usda-table__child-row usda-table__child-row_divider${n}`,
		children: t.map((e, t) => t === 0 ? /* @__PURE__ */ S("td", {
			className: "usda-table__cell usda-table__cell_child",
			children: /* @__PURE__ */ S("div", {
				className: "usda-table__child-cell-content",
				children: r
			})
		}, b()) : /* @__PURE__ */ S("td", {
			className: "usda-table__cell usda-table__cell_child",
			children: /* @__PURE__ */ S("div", {
				className: "usda-table__child-cell-content",
				children: "\xA0"
			})
		}, b()))
	}), d = (e, t) => e ? t && r && e.title === "name" ? r : e.displayName : null;
	return /* @__PURE__ */ C(x, { children: [/* @__PURE__ */ S("tr", {
		className: `usda-table__row${n} usda-table__row_expandable ${i ? "usda-table__row_is-expanded" : ""}`,
		children: s.map((n, r) => n === "name" && e.children ? /* @__PURE__ */ S("td", {
			className: "usda-table__cell",
			"data-label": d(t[r]),
			children: /* @__PURE__ */ C("div", {
				className: "usda-table__expandable-cell-content",
				children: [/* @__PURE__ */ S("button", {
					className: "usda-table__expand-button",
					"aria-label": "Expand Table Row Button",
					onClick: c,
					children: /* @__PURE__ */ S(Z, { icon: o })
				}), e.name]
			})
		}, b()) : /* @__PURE__ */ S("td", {
			className: `usda-table__cell${n === "name" ? " usda-table__cell_name" : ""}${t[r].right ? " usda-table__cell_right" : ""}`,
			"data-label": d(t[r]),
			children: e[n]
		}, b()))
	}), e.children && i ? /* @__PURE__ */ C(x, { children: [r && u, e.children.map((r, i) => /* @__PURE__ */ S("tr", {
		className: `usda-table__child-row${i === e.children.length - 1 ? " usda-table__child-row_last" : ""}${n}`,
		children: s.map((e, n) => /* @__PURE__ */ S("td", {
			className: `usda-table__cell ${t[n].right ? " usda-table__cell_right" : ""} usda-table__cell_child`,
			"data-label": d(t[n], !0),
			children: /* @__PURE__ */ S("div", {
				className: "usda-table__child-cell-content",
				children: r[e]
			})
		}, b()))
	}, b()))] }) : null] });
};
qo.propTypes = Ko;
//#endregion
//#region components/table/TableHeader.jsx
var Jo = ({ clickedSort: e, displayName: t, currentSort: n, title: r }) => {
	let i = n?.field === r && n?.direction === "asc" ? " table-header__icon_active" : "", a = n?.field === r && n?.direction === "desc" ? " table-header__icon_active" : "";
	return /* @__PURE__ */ C("div", {
		className: "table-header__sort",
		children: [/* @__PURE__ */ S("button", {
			type: "button",
			onClick: e,
			className: `table-header__icon${i}`,
			value: "asc",
			title: `Sort table by ascending ${t}`,
			"aria-label": `Sort table by ascending ${t}`,
			children: /* @__PURE__ */ S(Z, {
				size: "2x",
				icon: "caret-up"
			})
		}), /* @__PURE__ */ S("button", {
			type: "button",
			onClick: e,
			className: `table-header__icon${a}`,
			value: "desc",
			title: `Sort table by descending ${t}`,
			"aria-label": `Sort table by descending ${t}`,
			children: /* @__PURE__ */ S(Z, {
				size: "2x",
				icon: "caret-down"
			})
		})]
	});
};
Jo.propTypes = {
	title: u.string.isRequired,
	displayName: u.oneOfType([u.string, u.element]).isRequired,
	currentSort: p({
		direction: d(["asc", "desc"]),
		field: u.string
	}).isRequired,
	clickedSort: u.func.isRequired
};
var Yo = {
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
}, $ = ({ title: e, className: t = "", displayName: n = "", currentSort: r, updateSort: i, right: a, columnSpan: o = "1", rowSpan: s, subColumnNames: c = [], icon: l = /* @__PURE__ */ S(x, {}), bodyHeader: u = !1, stickyFirstColumn: d = !1, columnWidth: f, highlightedColumns: p, index: m, isMobile: h = !1, isStacked: g = !1 }) => {
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
					i && !c.length && n && /* @__PURE__ */ S(Jo, {
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
					i && !c.length && n && /* @__PURE__ */ S(Jo, {
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
$.propTypes = Yo;
var Xo = {
	prefix: "fas",
	iconName: "file-arrow-down",
	icon: [
		384,
		512,
		["file-download"],
		"f56d",
		"M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM175 441c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-86.1c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 86.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64z"
	]
}, Zo = {
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
}, Qo = {
	prefix: "fas",
	iconName: "link",
	icon: [
		576,
		512,
		[128279, "chain"],
		"f0c1",
		"M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"
	]
}, $o = {
	prefix: "fas",
	iconName: "spinner",
	icon: [
		512,
		512,
		[],
		"f110",
		"M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z"
	]
}, es = {
	prefix: "fas",
	iconName: "circle-check",
	icon: [
		512,
		512,
		[61533, "check-circle"],
		"f058",
		"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"
	]
}, ts = {
	prefix: "fas",
	iconName: "angles-right",
	icon: [
		448,
		512,
		[187, "angle-double-right"],
		"f101",
		"M439.1 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L371.2 256 233.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L179.2 256 41.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
	]
}, ns = {
	row: u.array,
	columns: u.array,
	iValue: u.number,
	atMaxLevel: u.bool
}, rs = (e) => {
	let [t, n] = l(!1), r = (e) => {
		e.stopPropagation(), n(!t);
	}, i = e.atMaxLevel ? null : /* @__PURE__ */ C("div", {
		className: "usda-table__cell usda-table__cell_right button-type__text-left-icon-light",
		children: [
			"View next level",
			" ",
			/* @__PURE__ */ S(Z, { icon: ts })
		]
	});
	return (e.columns.length >= 6 ? /* @__PURE__ */ C("div", {
		className: `collapsible-row-div ${t ? "row-opened" : ""}`,
		children: [t && /* @__PURE__ */ S("div", {
			className: "collapsible-row--content",
			children: /* @__PURE__ */ S("div", {
				className: "collapsible-row--content-wrapper",
				children: e.row.map((t, n) => {
					if (n >= 6) return e.columns[n]?.bodyHeader ? /* @__PURE__ */ S($, {
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
					r(e);
				},
				onKeyUp: (e) => {
					e.key === "Enter" && r(e);
				},
				children: [t ? "Collapse additional details" : "View additional details", t ? /* @__PURE__ */ S(Z, {
					className: "chevron",
					icon: "chevron-up"
				}) : /* @__PURE__ */ S(Z, {
					className: "chevron",
					icon: "chevron-down"
				})]
			})
		})]
	}) : null) || i;
};
rs.propTypes = ns;
//#endregion
//#region components/table/TableData.jsx
var is = {
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
}, as = ({ columns: e, rows: t, rowHeight: n, expandable: r, divider: i, onClickHandler: a, isMobile: s, atMaxLevel: c, stickyFirstColumn: u = !1, highlightedColumns: d, isStacked: f, newMobileView: p = !1 }) => {
	let [m, h] = l(), g = () => {
		let e = document.querySelector(".selected-row");
		e && e.focus();
	}, _ = (e, t) => {
		c || (s && h(t), a && a(e));
	};
	return o(() => {
		g();
	}, [m]), f && s && p && !r ? /* @__PURE__ */ S("div", {
		className: "mobile-table-rows",
		children: t.map((t, r) => /* @__PURE__ */ C("div", {
			role: "button",
			tabIndex: 0,
			onClick: () => _(t, r),
			onKeyUp: (e) => {
				e.key === "Enter" && (e.preventDefault(), _(t, r));
			},
			className: `usda-table__row-item usda-table__row ${m === r ? "selected-row" : ""} ${d ? `special-hover-color-${d.highlightedColumns}` : ""}`,
			style: {
				height: n,
				display: "table-row"
			},
			children: [t.map((t, n) => {
				if (n < 6) return e[n]?.bodyHeader ? /* @__PURE__ */ S($, {
					className: "table-header_body-header",
					stickyFirstColumn: u,
					index: n,
					...t
				}, b()) : /* @__PURE__ */ C("div", {
					className: `usda-table__cell${e[n]?.right ? " usda-table__cell_right" : ""}
                                 ${n === 0 && u ? " stickyColumn" : ""}  ${n === 0 && u ? " stickyColumn" : ""}
                                 ${n === 0 ? "usda-mobile__header" : ""}`,
					children: [e[n] && /* @__PURE__ */ S("div", {
						className: "usda-table__cell-heading-container",
						children: s && /* @__PURE__ */ S("div", {
							className: "usda-table__cell-heading",
							children: e[n].displayName
						})
					}), /* @__PURE__ */ S("div", {
						className: "usda-table__cell-text",
						children: t.type === "a" && n === 0 && f && s ? /* @__PURE__ */ C("a", {
							target: t.props.target,
							rel: t.props.rel,
							href: t.props.href,
							onClick: t.props.onClick,
							children: [
								t.props.children,
								" ",
								/* @__PURE__ */ S(Z, { icon: "arrow-right" })
							]
						}) : t
					})]
				}, b());
			}), /* @__PURE__ */ S("div", { children: /* @__PURE__ */ S(rs, {
				row: t,
				columns: e,
				iValue: r,
				atMaxLevel: c
			}) })]
		}, b()))
	}) : /* @__PURE__ */ S(x, { children: t.map((t, a) => {
		let o = a % 2 == 0 ? "" : " usda-table__row_odd";
		return r ? /* @__PURE__ */ S(qo, {
			data: t,
			oddClass: o,
			columns: e,
			divider: i
		}, b()) : /* @__PURE__ */ S("tr", {
			tabIndex: 0,
			onClick: () => _(t, a),
			onKeyUp: (e) => {
				e.key === "Enter" && (e.preventDefault(), _(t, a));
			},
			className: `usda-table__row-item usda-table__row${o} ${m === a ? "selected-row" : ""} ${d ? `special-hover-color-${d.highlightedColumns}` : ""}`,
			style: { height: n },
			children: t.map((t, n) => e[n]?.bodyHeader ? /* @__PURE__ */ S($, {
				className: "table-header_body-header",
				stickyFirstColumn: u,
				index: n,
				...t
			}, b()) : /* @__PURE__ */ C("td", {
				className: `usda-table__cell${e[n]?.right ? " usda-table__cell_right" : ""}
                                ${n === 0 && u ? " stickyColumn" : ""} `,
				children: [e[n] && /* @__PURE__ */ S("div", {
					className: "usda-table__cell-heading-container",
					children: s && /* @__PURE__ */ S("div", {
						className: "usda-table__cell-heading",
						children: e[n].displayName
					})
				}), /* @__PURE__ */ S("div", { children: t.type === "a" && n === 0 && f && s ? /* @__PURE__ */ C("a", {
					target: t.props.target,
					rel: t.props.rel,
					href: t.props.href,
					onClick: t.props.onClick,
					children: [
						t.props.children,
						" ",
						/* @__PURE__ */ S(Z, { icon: "arrow-right" })
					]
				}) : t })]
			}, b()))
		}, b());
	}) });
};
as.propTypes = is;
//#endregion
//#region components/table/Table.jsx
var os = {
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
}, ss = ({ columns: e, rows: t, rowHeight: n, headerRowHeight: r, currentSort: i, classNames: a = "", updateSort: o, expandable: s, divider: c, loading: l, error: u, message: d, isStacked: f = !1, screenReaderCaption: p, onClickHandler: m, isMobile: h, stickyFirstColumn: g = !1, highlightedColumns: _, atMaxLevel: v = !1, newMobileView: w = !1 }) => {
	let T = f ? "usa-dt-table__stacked" : "", E = e.map((e) => ({
		name: e.displayName + " (ascending)",
		value: e.title,
		onClick: () => {
			o(e.title, "asc");
		}
	})), D = e.map((e) => ({
		name: e.displayName + " (descending)",
		value: e.title,
		onClick: () => {
			o(e.title, "desc");
		}
	})), O;
	return O = l ? /* @__PURE__ */ S("tr", { children: /* @__PURE__ */ S("td", {
		className: "usda-table__message-cell",
		colSpan: e.length,
		children: /* @__PURE__ */ S(Wo, {})
	}) }) : u ? /* @__PURE__ */ S("tr", { children: /* @__PURE__ */ S("td", {
		className: "usda-table__message-cell",
		colSpan: e.length,
		children: /* @__PURE__ */ S(fo, { description: d })
	}) }) : !t || t.length === 0 ? /* @__PURE__ */ S("tr", { children: /* @__PURE__ */ S("td", {
		className: "usda-table__message-cell",
		colSpan: e.length,
		children: /* @__PURE__ */ S(Go, { description: d })
	}) }) : /* @__PURE__ */ S(as, {
		columns: e,
		rows: t,
		rowHeight: n,
		expandable: s,
		divider: c,
		onClickHandler: m,
		isMobile: h,
		stickyFirstColumn: g,
		highlightedColumns: _,
		isStacked: f,
		atMaxLevel: v,
		newMobileView: w
	}), /* @__PURE__ */ C(x, { children: [f && o && /* @__PURE__ */ C("div", {
		className: "usa-dt-table__stacked-picker",
		children: [/* @__PURE__ */ S("label", {
			htmlFor: "stackedTableSort",
			children: "Sort By"
		}), /* @__PURE__ */ S(Xa, {
			id: "stackedTableSort",
			selectedOption: i.field,
			options: y(E, D)
		})]
	}), f && h ? /* @__PURE__ */ C("div", {
		className: `usda-table ${T} ${a}`,
		children: [
			p && /* @__PURE__ */ S("caption", {
				className: "usa-dt-sr-only",
				children: p
			}),
			_ && /* @__PURE__ */ C("colgroup", { children: [/* @__PURE__ */ S("col", { span: _.standardColumns }), /* @__PURE__ */ S("col", {
				span: _.highlightedColumns,
				className: "usda-table__body-special-color"
			})] }),
			/* @__PURE__ */ C("div", {
				className: "usda-table__head",
				children: [/* @__PURE__ */ S("div", {
					className: "usda-table__row",
					style: { height: r },
					children: e.map((e, t) => /* @__PURE__ */ S($, {
						currentSort: i,
						updateSort: o,
						stickyFirstColumn: g,
						highlightedColumns: _,
						index: t,
						isMobile: h,
						isStacked: f,
						...e
					}, b()))
				}), /* @__PURE__ */ S("div", {
					className: "usda-table__row",
					children: e.filter((e) => e?.subColumnNames?.length).reduce((e, t) => t?.subColumnNames?.length ? e.concat(t.subColumnNames) : e.concat([{
						...t,
						displayName: "",
						className: "empty-subheader"
					}]), []).map((e, t) => /* @__PURE__ */ S($, {
						className: e?.title ? "nested-header" : "empty",
						currentSort: i,
						updateSort: o,
						stickyFirstColumn: g,
						index: t,
						isMobile: h,
						isStacked: f,
						...e
					}, b()))
				})]
			}),
			/* @__PURE__ */ S("div", {
				className: "usda-table__body",
				children: O
			})
		]
	}) : /* @__PURE__ */ C("table", {
		className: `usda-table ${T} ${a}`,
		children: [
			p && /* @__PURE__ */ S("caption", {
				className: "usa-dt-sr-only",
				children: p
			}),
			_ && /* @__PURE__ */ C("colgroup", { children: [/* @__PURE__ */ S("col", { span: _.standardColumns }), /* @__PURE__ */ S("col", {
				span: _.highlightedColumns,
				className: "usda-table__body-special-color"
			})] }),
			/* @__PURE__ */ C("thead", {
				className: "usda-table__head",
				children: [/* @__PURE__ */ S("tr", {
					className: "usda-table__row",
					style: { height: r },
					children: e.map((e, t) => /* @__PURE__ */ S($, {
						currentSort: i,
						updateSort: o,
						stickyFirstColumn: g,
						highlightedColumns: _,
						index: t,
						...e
					}, b()))
				}), /* @__PURE__ */ S("tr", {
					className: "usda-table__row",
					children: e.filter((e) => e?.subColumnNames?.length).reduce((e, t) => t?.subColumnNames?.length ? e.concat(t.subColumnNames) : e.concat([{
						...t,
						displayName: "",
						className: "empty-subheader"
					}]), []).map((e, t) => /* @__PURE__ */ S($, {
						className: e?.title ? "nested-header" : "empty",
						currentSort: i,
						updateSort: o,
						stickyFirstColumn: g,
						index: t,
						...e
					}, b()))
				})]
			}),
			/* @__PURE__ */ S("tbody", {
				className: "usda-table__body",
				children: O
			})
		]
	})] });
};
ss.propTypes = os;
//#endregion
//#region styles/components/infoTooltip/_tooltipWrapper.scss
var cs = /* @__PURE__ */ A((/* @__PURE__ */ te(((e, t) => {
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
})))(), 1), ls = {
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
}, us = 375, ds = ({ className: e = null, children: t = null, tooltipComponent: n = null, tooltipPosition: r = "right", wide: i = !1, icon: a = "", width: s = us, controlledProps: u = {
	isControlled: !1,
	showTooltip: () => {},
	closeTooltip: () => {},
	isVisible: !1
}, offsetAdjustments: d = {
	top: -15,
	right: 0,
	left: 0
}, styles: f = {}, onMouseMoveTooltip: p, onMouseLeaveTooltip: m }) => {
	let [h, g] = l(!1), [_, y] = l(!1), x = c(), w = c(""), T = c({}), E = { info: /* @__PURE__ */ S(Z, {
		className: "tooltip__icon",
		icon: "info-circle"
	}) }, D = b("dtui-tt_"), O = () => {
		p ? p() : u.isControlled ? u.showTooltip() : _ || y(!0);
	}, k = () => {
		m ? m() : _ && y(!1);
	}, ee = () => {
		let e = window.innerWidth, { offsetLeft: t, clientWidth: n } = x.current;
		return {
			right: e - t - n,
			left: t,
			total: e
		};
	}, te = () => {
		let { right: e, left: t, total: n } = ee(), a = e > t ? e : t;
		return n < 425 ? n - 10 : r === "bottom" ? s : i ? a > 800 ? 700 : a - 5 : s;
	}, ne = (e, t) => e ? {
		top: `${x.current.clientHeight + x.current.offsetTop + 8}px`,
		widthVar: t,
		left: `${x.current.clientWidth / 2 - 8}px`
	} : {
		...T.current,
		widthVar: t
	}, A = () => {
		if (Object.keys(f).includes("transform") && x.current) r === "bottom" && (w.current = "bottom"), T.current = { width: te() };
		else if (x.current) {
			let e = te(), { left: t, total: n, right: i } = ee(), a = x.current.offsetTop + d.top, o = n < 700;
			if (r === "bottom" || o) w.current = "bottom", T.current = { ...ne(o, e) };
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
	}, j = () => {
		u.isControlled ? u.showTooltip() : h || g(!0);
	}, M = () => {
		u.isControlled ? u.closeTooltip() : h && g(!1);
	}, re = u.isControlled && u.isVisible || h || _, N = null;
	return re && (N = /* @__PURE__ */ S("div", {
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
	})), o(() => (window.addEventListener("scroll", v(A, 500)), window.addEventListener("resize", v(A, 100)), u.isControlled || document?.getElementById(D)?.addEventListener("mousemove", v(A, 500)), () => {
		window.removeEventListener("scroll", A), window.removeEventListener("resize", A), u.isControlled || document?.getElementById(D)?.addEventListener("mousemove", A);
	}), []), o(() => {
		A();
	}, [x.current]), /* @__PURE__ */ S("div", {
		id: D,
		className: (0, cs.default)({
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
				onBlur: M,
				onFocus: j,
				onKeyPress: j,
				onMouseEnter: j,
				onMouseLeave: M,
				onClick: j,
				children: [t, a && E[a]]
			}), N]
		})
	});
};
ds.propTypes = ls;
//#endregion
//#region components/infoTooltip/TooltipComponent.jsx
var fs = {
	title: u.string.isRequired,
	children: u.node.isRequired,
	className: u.string,
	textAlign: u.shape({
		title: u.oneOf(["center", "left"]),
		text: u.oneOf(["center", "left"])
	})
}, ps = ({ children: e, title: t, className: n = null, textAlign: r = {
	title: "left",
	text: "left"
} }) => /* @__PURE__ */ C("div", {
	className: (0, cs.default)({ [n]: n !== null }),
	children: [/* @__PURE__ */ S("h1", {
		className: (0, cs.default)("tooltip__title", r.title),
		children: t
	}), /* @__PURE__ */ S("div", {
		className: (0, cs.default)("tooltip__text", r.text),
		children: e
	})]
});
ps.propTypes = fs;
//#endregion
//#region helpers/keyboardEventsHelper.js
var ms = (e, t = [], n = [13, 32]) => (r) => {
	n.includes(r.keyCode) && e(...t);
}, hs = {
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
}, gs = (e) => {
	let t = c(null), n = () => {
		e.enabled && (t?.current && t.current?.scrollIntoView && t.current?.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center"
		}), e.switchTab(e.internal));
	}, r = ms(n);
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
							"aria-label": `Count of ${se(e.count)} for ${e.label}`,
							className: `count${e.active ? " active" : ""}`,
							children: se(e.count)
						}),
						e.tooltip && /* @__PURE__ */ S(ds, {
							tooltipComponent: /* @__PURE__ */ S(ps, {
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
gs.propTypes = hs;
//#endregion
//#region components/tabs/Tabs.jsx
var _s = {
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
}, vs = ({ types: e, active: t, switchTab: n, tabsClassName: i, tablessStyle: a }) => {
	let o = e.map((e) => /* @__PURE__ */ r(gs, {
		...e,
		active: t === e.internal,
		switchTab: n,
		key: `table-type-item-${e.internal}`,
		enabled: !e.disabled,
		className: i,
		tooltip: e.tooltip,
		tablessStyle: a
	}));
	return /* @__PURE__ */ C("div", {
		className: `usa-dt-tab-list${a ? " tabless-tabs" : ""}`,
		role: "tablist",
		children: [
			!a && /* @__PURE__ */ S("div", { className: "usa-dt-tab-list__border-pre-filler" }),
			o,
			/* @__PURE__ */ S("div", { className: "usa-dt-tab-list__border-post-filler" })
		]
	});
};
vs.propTypes = _s;
//#endregion
//#region components/messages/ComingSoon.jsx
var ys = ({ className: e }) => /* @__PURE__ */ S(lo, {
	className: `coming soon ${e}`,
	title: "Coming Soon",
	description: "This feature is currently under development."
}), bs = (e, t, n) => {
	if (e !== 0 && !e) return null;
	let r = t ? ie(e) : se(e);
	if (Math.abs(e) > M.MILLION) {
		let i = oe(e);
		r = `${t ? ae(e / i.unit, 2) : ce(e / i.unit, 2)} ${n ? _(i.longLabel) : i.unitLabel}`;
	}
	return r;
}, xs = {
	2: "two",
	3: "three",
	4: "four"
}, Ss = { boxes: u.arrayOf(u.shape({
	type: u.string.isRequired,
	title: u.oneOfType([u.string, u.element]),
	amount: u.oneOfType([u.number, u.string]),
	isMonetary: u.bool,
	isString: u.bool,
	subtitle: u.string,
	subtitleBottom: u.string,
	isLoading: u.bool
})) }, Cs = ({ boxes: e }) => {
	let [t, n] = l(window.innerWidth > 1200), r = v(() => n(window.innerWidth > 1200));
	return o(() => (r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r)), []), /* @__PURE__ */ S("div", {
		className: `usa-dt-information-boxes ${xs[e.length]}-boxes`,
		children: e.map((e) => /* @__PURE__ */ S("div", {
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
								!e.isLoading && !e.isString && bs(e.amount, e.isMonetary, t)
							]
						}),
						e.subtitleBottom && /* @__PURE__ */ S("div", {
							className: "usa-dt-information-box__subtitle-bottom",
							children: e.subtitleBottom
						})
					]
				})
			})
		}, e.type))
	});
};
Cs.propTypes = Ss;
//#endregion
//#region components/SectionHeader.jsx
function ws({ icon: t, title: n, overLine: r, description: i, titleTooltip: a, descTooltip: o }) {
	return /* @__PURE__ */ C("div", {
		className: "usda-section-title__sectionHeader",
		children: [
			t && e.cloneElement(t, { className: "usda-section-title__title-icon" }),
			/* @__PURE__ */ C("div", {
				className: "usda-section-title__header",
				children: [r && /* @__PURE__ */ S("strong", {
					className: "usda-section-title__overline",
					children: r
				}), /* @__PURE__ */ C("div", {
					className: "usda-section-title__title",
					children: [/* @__PURE__ */ S("h3", { children: n }), a.component && /* @__PURE__ */ S(ds, {
						tooltipComponent: a.component,
						icon: "info",
						className: `${r ? "has-overline" : ""}`,
						...a.props
					})]
				})]
			}),
			i && e.cloneElement(i, { className: "usda-section-title__desc has-overline" }),
			o.component && /* @__PURE__ */ S(ds, {
				tooltipComponent: o.component,
				icon: "info",
				tooltipPosition: "left",
				...o.props
			})
		]
	});
}
ws.propTypes = {
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
var Ts = {
	isControlled: !1,
	toggleExpand: () => {},
	isExpanded: !1
}, Es = ({ title: e, icon: t, children: n, id: r = "", classNames: i = "", isCollapsible: a = !1, isComingSoon: o = !1, controlledProps: s = Ts, defaultExpandedState: c = !0, overLine: u = "", titleTooltip: d = {
	tooltip: null,
	tooltipProps: {}
}, descTooltip: f = {
	component: null,
	props: {}
}, description: p }) => {
	let [m, h] = l(c), g = () => {
		s.isControlled ? s.toggleExpand() : h(!m);
	}, _ = m || s.isControlled && s.isExpanded || !a;
	return /* @__PURE__ */ C("section", {
		id: r,
		className: `usda-section__container${i ? ` ${i}` : ""}`,
		children: [
			/* @__PURE__ */ C("div", {
				className: "usda-section-title__container",
				children: [/* @__PURE__ */ S(ws, {
					icon: t,
					title: e,
					overLine: u,
					description: p,
					titleTooltip: d,
					descTooltip: f
				}), a && /* @__PURE__ */ S(Z, {
					"aria-label": "usda-section-title__expand-icon",
					tabIndex: 0,
					onKeyDown: ms(g),
					className: "usda-section-title__expand-icon",
					onClick: g,
					size: "2x",
					icon: m || s.isControlled && s.isExpanded ? "chevron-up" : "chevron-down"
				})]
			}),
			/* @__PURE__ */ S("hr", {}),
			o && _ && /* @__PURE__ */ S(ys, {}),
			_ && !o && n
		]
	});
};
Es.propTypes = {
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
var Ds = { items: u.arrayOf(u.element) }, Os = ({ items: e }) => {
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
Os.propTypes = Ds;
//#endregion
//#region helpers/inPageNavHelper.js
var ks = (e, t) => {
	let n = !1, r = !1, i = [...e?.childNodes], a = i[0]?.getBoundingClientRect(), o = i[i.length - 1]?.getBoundingClientRect();
	return (a.left < 0 || e.scrollLeft > 0) && (n = !0), (o.right > e.clientWidth + t || o.right > e.scrollWidth) && (r = !0), {
		left: n,
		right: r
	};
}, As = (e) => {
	let t = [];
	return e.childNodes.forEach((e) => {
		let n = e.getBoundingClientRect();
		t.push({
			name: e.innerHTML,
			originalLeftOffset: n.left,
			width: n.width
		});
	}), t;
}, js = (e) => {
	e.current.querySelector("ul").scrollTo({
		left: "0",
		behavior: "smooth"
	});
}, Ms = {
	sections: u.array,
	activeSection: u.string,
	jumpToSection: u.func,
	detectActiveSection: u.oneOfType([u.bool, u.func]),
	pageName: u.string
}, Ns = (e) => {
	let { sections: t, jumpToSection: n, pageName: r, detectActiveSection: i } = e, [s, u] = l(e.activeSection), [d, f] = l(window.innerWidth), [p, m] = l(null), [h, g] = l([]), [_, y] = l(!1), [b, x] = l(!1), [w, T] = l(32), [E, D] = l(window.innerWidth < 992), O = c(null), [k, ee] = l([]), te = () => {
		let e = O?.current?.querySelector("ul"), { left: t, right: n } = ks(e, w);
		y(t), x(n);
	}, ne = a((e) => {
		e.stopPropagation(), te();
	}), A = a((e) => {
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
		} else js(O);
	}), j = a((e) => {
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
			} else js(O);
		}
	}), M = a(() => {
		let e = O.current.querySelector("ul"), t = As(e);
		m(e), g(t);
	}), re = a((e, t) => {
		e.key === "Enter" && (t === "left" && A(e), t === "right" && j(e));
	}), N = () => {
		let e = window.innerWidth;
		d !== e && f(e), D(d < 992), 992 < d && d <= 1200 && T(52), 1200 < d && d <= 1640 && T(72), 1640 < d && T(192), te();
	};
	o(() => (M(), N(), window.addEventListener("resize", () => N()), () => window.removeEventListener("resize", () => N())), []), o(() => (te(), p?.addEventListener("scrollend", (e) => ne(e)), () => p?.removeEventListener("scrollend", (e) => ne(e))), [p]);
	let ie = v(() => {
		ee(t.map((e) => {
			let t = e.section, n = document.getElementById(`${r}-${t}`);
			if (!n) return null;
			let i = document.querySelector(".usda-page-header")?.offsetHeight || 0, a = n.offsetTop - i;
			return {
				section: t,
				top: a,
				bottom: n.offsetHeight + a - i
			};
		}));
	}, 100), ae = v(() => {
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
		i && k.length === 0 && ie();
		let e = () => {
			ie(), i && ae();
		};
		return window.addEventListener("scroll", e), window.addEventListener("resize", ie), () => {
			window.removeEventListener("scroll", e), window.removeEventListener("resize", ie);
		};
	}, [
		i,
		ie,
		ae,
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
					onKeyDown: (e) => re(e, "left"),
					onClick: (e) => A(e),
					children: /* @__PURE__ */ S(Z, {
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
					onKeyDown: (e) => re(e, "right"),
					onClick: (e) => j(e),
					children: /* @__PURE__ */ S(Z, {
						icon: "chevron-right",
						alt: "Forward"
					})
				})
			]
		})
	});
};
Ns.propTypes = Ms;
//#endregion
//#region components/PageHeader.jsx
var Ps = ({ title: t, overLine: n = "", toolBar: r = [], backgroundColor: i = "#1a4480", pageName: a, sections: o, activeSection: s, jumpToSection: c, inPageNav: l = !1 }) => /* @__PURE__ */ C("section", {
	className: "usda-page-header usda-page-header--sticky",
	style: { backgroundColor: i },
	children: [/* @__PURE__ */ C("div", {
		className: "usda-page-header__container",
		children: [
			/* @__PURE__ */ C("div", {
				className: "usda-page-header__mobile-top",
				children: [
					/* @__PURE__ */ C("div", {
						className: "usda-page-header__header",
						children: [n && /* @__PURE__ */ S("strong", {
							className: "usda-page-header__overline",
							children: n
						}), /* @__PURE__ */ S("div", {
							className: "usda-page-header__title",
							children: /* @__PURE__ */ S("h1", { children: t })
						})]
					}),
					(() => {
						let t = r?.find((e) => e?.type.displayName === "Share Icon");
						return t ? e.cloneElement(t) : null;
					})(),
					(() => {
						let t = r?.find((e) => e?.type.displayName === "ATDButton");
						return t ? e.cloneElement(t) : null;
					})()
				]
			}),
			/* @__PURE__ */ S("hr", {}),
			r?.length > 0 && /* @__PURE__ */ S("div", {
				className: "usda-page-header__toolbar",
				children: r.map((t) => {
					let n = `${t.props?.className} ${t.props?.classNames}`, r = `${t.props?.classNames}`;
					return n ? e.cloneElement(t, { className: `${n} toolbar__item` }) : r ? e.cloneElement(t, { classNames: `${r} toolbar__item` }) : e.cloneElement(t, {
						className: "toolbar__item",
						classNames: "toolbar__item"
					});
				})
			})
		]
	}), l && /* @__PURE__ */ S(Ns, {
		detectActiveSection: !0,
		pageName: a,
		sections: o,
		activeSection: s,
		jumpToSection: c
	})]
});
Ps.propTypes = {
	stickyBreakPoint: u.number,
	overLine: u.string,
	title: u.string.isRequired,
	toolBar: u.arrayOf(u.element),
	pageName: u.string,
	sections: u.array,
	activeSection: u.string,
	jumpToSection: u.func
};
//#endregion
//#region components/DownloadIconButton.jsx
var Fs = {
	onClick: u.func.isRequired,
	downloadInFlight: u.bool,
	tooltipComponent: u.element,
	isEnabled: u.bool,
	tooltipPosition: u.string
}, Is = ({ onClick: e, downloadInFlight: t, tooltipComponent: n = null, tooltipPosition: r = "left", isEnabled: i = !0, backgroundColor: a = "#1a4480" }) => {
	let o = (n) => {
		n.preventDefault(), !t && i && e();
	}, s = t || !i ? " disabled" : "", c = t ? "Preparing Download..." : "Download", l = t ? $o : Xo;
	return n ? /* @__PURE__ */ S(ds, {
		className: `usda-download-btn${s}`,
		tooltipPosition: r,
		tooltipComponent: n,
		children: /* @__PURE__ */ C("button", {
			type: "button",
			role: "presentation",
			className: "usda-button",
			title: c,
			disabled: t || !i,
			onClick: o,
			style: { backgroundColor: a },
			tabIndex: i ? 0 : -1,
			children: [/* @__PURE__ */ S(Z, {
				icon: l,
				spin: t,
				color: "#dfe1e2"
			}), /* @__PURE__ */ S("span", {
				style: { color: "#dfe1e2" },
				children: c
			})]
		})
	}) : /* @__PURE__ */ S("div", {
		className: `usda-download-btn${s}`,
		children: /* @__PURE__ */ C("button", {
			type: "button",
			className: "usda-button",
			title: c,
			"aria-label": c,
			disabled: t,
			onClick: o,
			style: { backgroundColor: a },
			tabIndex: i ? 0 : -1,
			"aria-hidden": !i,
			children: [/* @__PURE__ */ S(Z, {
				icon: l,
				spin: t
			}), /* @__PURE__ */ S("span", { children: c })]
		})
	});
};
Is.displayName = "Download Icon Button", Is.propTypes = Fs;
var Ls = {
	prefix: "far",
	iconName: "calendar-days",
	icon: [
		448,
		512,
		["calendar-alt"],
		"f073",
		"M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zM384 432c8.8 0 16-7.2 16-16l0-64-88 0 0 80 72 0zm16-128l0-80-88 0 0 80 88 0zm-136 0l0-80-80 0 0 80 80 0zm-128 0l0-80-88 0 0 80 88 0zM48 352l0 64c0 8.8 7.2 16 16 16l72 0 0-80-88 0zm136 0l0 80 80 0 0-80-80 0zM120 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0z"
	]
}, Rs = 2008, zs = (e = Rs, t) => [...Array(t - e)].reduce((t, n, r) => (t.push(e + r + 1), t), [e]).sort((e, t) => t - e), Bs = (e, t) => Number.isInteger(e) ? t - e : parseInt(t, 10) - parseInt(e, 10), Vs = ({ backgroundColor: e, latestFy: t, selectedFy: n = 2020, earliestFy: r = 2017, options: i = [], handleFyChange: a = () => {}, sortFn: o = Bs }) => /* @__PURE__ */ C("div", {
	className: "usda-fy-picker__container",
	children: [/* @__PURE__ */ S(Xa, {
		backgroundColor: e,
		className: "usda-fy-picker",
		icon: /* @__PURE__ */ S(Z, {
			icon: Ls,
			size: "xs",
			alt: "FY Loading ..."
		}),
		selectedOption: i.length ? i.find((e) => e.value === n || e.value === parseInt(n, 10)).name || "--" : `FY ${n}`,
		sortFn: o,
		options: i.length ? i.map((e) => ({
			...e,
			onClick: a
		})) : t ? zs(r, t).map((e) => ({
			name: `FY ${e}`,
			value: `${e}`,
			onClick: a
		})) : [{
			name: "Loading fiscal years...",
			value: null,
			onClick: () => {}
		}]
	}), /* @__PURE__ */ S("span", { children: "Fiscal Year" })]
});
Vs.displayName = "Fiscal Year Picker", Vs.propTypes = {
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
//#endregion
//#region node_modules/@fortawesome/free-brands-svg-icons/index.mjs
var Hs = {
	prefix: "fab",
	iconName: "linkedin",
	icon: [
		448,
		512,
		[],
		"f08c",
		"M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"
	]
}, Us = {
	prefix: "fab",
	iconName: "square-reddit",
	icon: [
		448,
		512,
		["reddit-square"],
		"f1a2",
		"M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32zM305.9 166.4c20.6 0 37.3-16.7 37.3-37.3s-16.7-37.3-37.3-37.3c-18 0-33.1 12.8-36.6 29.8-30.2 3.2-53.8 28.8-53.8 59.9l0 .2c-32.8 1.4-62.8 10.7-86.6 25.5-8.8-6.8-19.9-10.9-32-10.9-28.9 0-52.3 23.4-52.3 52.3 0 21 12.3 39 30.1 47.4 1.7 60.7 67.9 109.6 149.3 109.6s147.6-48.9 149.3-109.7c17.7-8.4 29.9-26.4 29.9-47.3 0-28.9-23.4-52.3-52.3-52.3-12 0-23 4-31.9 10.8-24-14.9-54.3-24.2-87.5-25.4l0-.1c0-22.2 16.5-40.7 37.9-43.7 3.9 16.5 18.7 28.7 36.3 28.7l.2-.2zM155 248.1c14.6 0 25.8 15.4 25 34.4s-11.8 25.9-26.5 25.9-27.5-7.7-26.6-26.7 13.5-33.5 28.1-33.5l0-.1zm166.4 33.5c.9 19-12 26.7-26.6 26.7s-25.6-6.9-26.5-25.9 10.3-34.4 25-34.4 27.3 14.6 28.1 33.5l0 .1zm-42.1 49.6c-9 21.5-30.3 36.7-55.1 36.7s-46.1-15.1-55.1-36.7c-1.1-2.6 .7-5.4 3.4-5.7 16.1-1.6 33.5-2.5 51.7-2.5s35.6 .9 51.7 2.5c2.7 .3 4.5 3.1 3.4 5.7z"
	]
}, Ws = {
	prefix: "fab",
	iconName: "square-facebook",
	icon: [
		448,
		512,
		["facebook-square"],
		"f082",
		"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"
	]
}, Gs = ({ icon: e, title: t }) => /* @__PURE__ */ C(x, { children: [/* @__PURE__ */ S(Z, {
	icon: e,
	color: "#555",
	size: "sm"
}), /* @__PURE__ */ S("span", { children: t })] }), Ks = [
	{
		component: /* @__PURE__ */ S(Gs, {
			icon: Qo,
			title: "Copy link"
		}),
		name: "copy"
	},
	{
		component: /* @__PURE__ */ S(Gs, {
			icon: Zo,
			title: "Email"
		}),
		name: "email"
	},
	{
		component: /* @__PURE__ */ S(({ title: e }) => /* @__PURE__ */ C(x, { children: [/* @__PURE__ */ S("svg", {
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
		}), /* @__PURE__ */ S("span", { children: e })] }), { title: "X (Twitter)" }),
		name: "twitter"
	},
	{
		component: /* @__PURE__ */ S(Gs, {
			icon: Ws,
			title: "Facebook"
		}),
		name: "facebook"
	},
	{
		component: /* @__PURE__ */ S(Gs, {
			icon: Hs,
			title: "LinkedIn"
		}),
		name: "linkedin"
	},
	{
		component: /* @__PURE__ */ S(Gs, {
			icon: Us,
			title: "Reddit"
		}),
		name: "reddit"
	}
], qs = {
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
}, Js = ({ includedDropdownOptions: e = [], classNames: t = "", url: n = "", onShareOptionClick: r = () => {}, colors: i = {
	color: "#dfe1e2",
	backgroundColor: "#1a4480",
	confirmationBackgroundColor: "#f1f1f1"
}, dropdownDirection: a = "left", downloadInFlight: s, isEnabled: c = !0, noShareText: u, keepText: d = !1, pickerButtonClassNames: f = "", pickerListClassNames: p = "" }) => {
	let [m, g] = l(!1), _ = h(() => g(!1), 1750), v = s || !c ? " disabled" : "", y = () => {
		Array.from(document.querySelectorAll(".js-dtui-url-for-share-icon")).forEach((e) => {
			if (e.value.includes(n)) return e.select();
		}), document.execCommand("copy"), g(!0), r("copy");
	}, b = Ks.filter(({ name: t }) => e.length ? e.includes(t) : !0).map((e) => e.name === "copy" ? {
		...e,
		onClick: y
	} : {
		...e,
		onClick: () => r(e.name)
	});
	return o(() => (m && _(), _.cancel), [m]), /* @__PURE__ */ C("div", {
		className: `${t ? `usda-share-icon${v} ${t}` : `usda-share-icon${v}`}`,
		children: [
			/* @__PURE__ */ S("input", {
				"aria-label": "Share Input Link",
				type: "text",
				className: "js-dtui-url-for-share-icon text",
				style: {
					position: "absolute",
					right: "9999px",
					opacity: 0
				},
				value: n,
				readOnly: !0
			}),
			/* @__PURE__ */ S(Xa, {
				buttonClassNames: f,
				pickerListClassNames: p,
				dropdownDirection: a,
				options: b,
				selectedOption: "copy",
				backgroundColor: i.backgroundColor,
				notEnabled: s || !c,
				sortFn: () => 1,
				children: /* @__PURE__ */ S(Z, {
					icon: "share-alt",
					size: "lg",
					color: i.color
				})
			}),
			!u && /* @__PURE__ */ S("span", {
				className: `usda-share-icon__share-text ${d ? "keep-text" : ""}`,
				children: "Share"
			}),
			m && /* @__PURE__ */ C("div", {
				className: `copy-confirmation ${d ? "keep-text" : ""}`,
				style: { backgroundColor: i.confirmationBackgroundColor },
				children: [
					/* @__PURE__ */ S(Z, { icon: es }),
					" ",
					"Copied!"
				]
			})
		]
	});
};
Js.propTypes = qs, Js.displayName = "Share Icon";
//#endregion
//#region helpers/pageHeaderHelper.js
var Ys = (e, t = 0) => {
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
}, Xs = (e) => e.map((e) => e && e.trim()).filter((e) => e).join(" ");
//#endregion
//#region components/flexGrid/FlexGridContainer.jsx
function Zs({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ S("div", {
		className: Xs(["usa-dt-flex-grid__container", t]),
		...n,
		children: e
	});
}
Zs.propTypes = {
	children: u.node.isRequired,
	className: u.string
};
//#endregion
//#region components/flexGrid/FlexGridRow.jsx
var Qs = ({ children: e, className: t, hasGutter: n = !1, gutterSize: r, ...i }) => /* @__PURE__ */ S("div", {
	className: Xs([
		"usa-dt-flex-grid__row",
		n ? "usa-dt-flex-grid__gutter" : "",
		(0, cs.default)({
			"usa-dt-flex-grid__gutter-sm": r === "sm",
			"usa-dt-flex-grid__gutter-lg": r === "lg"
		}),
		t
	]),
	...i,
	children: e
});
Qs.propTypes = {
	children: u.node.isRequired,
	className: u.string,
	hasGutter: u.bool,
	gutterSize: u.oneOf(["sm", "lg"])
};
//#endregion
//#region components/flexGrid/FlexGridCol.jsx
function $s({ children: e, className: t, desktopxl: n, desktop: r, mobile: i, tablet: a, width: o, ...s }) {
	return /* @__PURE__ */ S("div", {
		className: Xs([...[
			[null, o],
			["desktopxl", n],
			["desktop", r],
			["tablet", a],
			["mobile", i]
		].map(([e, t]) => t === void 0 ? "" : t.span !== void 0 && t.offset !== void 0 ? Xs([`${e ? `${e}:` : ""}usa-dt-flex-grid__col-${t.span}`, `${e ? `${e}:` : ""}usa-dt-flex-grid__offset-${t.offset}`]) : t.order === void 0 ? `${e ? `${e}:` : ""}usa-dt-flex-grid__col-${t}` : Xs([`${e ? `${e}:` : ""}usa-dt-flex-grid__col-${t.span}`, `${e ? `${e}:` : ""}usa-dt-flex-grid__order-${t.order}`])), t]) || "usa-dt-flex-grid__col",
		...s,
		children: e
	});
}
$s.propTypes = {
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
var ec = {
	variant: u.string,
	size: u.string,
	fill: u.string,
	height: u.oneOfType([u.string, u.number]),
	onClick: u.func,
	onKeyUp: u.func,
	className: u.oneOfType([u.string, u.object])
}, tc = ({ variant: e = "", size: t = "md", children: n, fill: r, height: i, className: a = "", onClick: o, onKeyUp: s }) => /* @__PURE__ */ S("div", {
	className: `card-column ${a}`,
	onClick: o,
	role: "presentation",
	tabIndex: "0",
	onKeyUp: s,
	children: /* @__PURE__ */ S("div", {
		className: `${e} ${t} card-container`,
		style: {
			backgroundColor: `${r}`,
			height: `${i}`
		},
		children: n
	})
});
tc.propTypes = ec;
//#endregion
//#region components/cards/CardBody.jsx
var nc = {
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
}, rc = ({ overline: e, headline: t, onClick: n, subhead: r, text: i, variant: a = "", children: o, imageContainerHeight: s, customClassName: c = "" }) => /* @__PURE__ */ C("div", {
	className: `card__body ${a} ${c}`,
	style: { height: s ? `calc(100% - ${s} - 12px)` : "" },
	children: [
		e && /* @__PURE__ */ S("div", {
			className: "overline",
			children: e
		}),
		t && /* @__PURE__ */ S("div", { children: /* @__PURE__ */ S("div", {
			className: "headline",
			onClick: n,
			children: t
		}) }),
		r && /* @__PURE__ */ S("div", {
			className: "subhead",
			children: r
		}),
		i && /* @__PURE__ */ S("div", {
			className: "text",
			children: i
		}),
		o
	]
});
rc.propTypes = nc;
//#endregion
//#region components/cards/CardHero.jsx
var ic = {
	img: u.string,
	fill: u.string,
	variant: u.string,
	imageContainerHeight: u.string,
	thumbnail: u.bool,
	children: u.element,
	onClick: u.func
}, ac = ({ img: e, fill: t, variant: n, imageContainerHeight: r, thumbnail: i, children: a, onClick: o }) => /* @__PURE__ */ S("div", { children: /* @__PURE__ */ S("div", {
	className: `card__hero ${n}`,
	onClick: o,
	style: {
		backgroundColor: `${t}`,
		height: `${r}`
	},
	children: i ? /* @__PURE__ */ S(x, { children: a }) : /* @__PURE__ */ S("img", {
		src: `${e}`,
		role: "presentation",
		alt: ""
	})
}) });
ac.propTypes = ic;
//#endregion
//#region components/Button.jsx
var oc = {
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
}, sc = (e) => {
	let t = "";
	return e.buttonSize === "large" || e.buttonSize === "lg" ? t += " button__lg " : e.buttonSize === "medium" || e.buttonSize === "md" ? t += " button__md " : (e.buttonSize === "small" || e.buttonSize === "sm") && (t += " button__sm "), e.buttonType === "primary" ? t += " button-type__primary-light " : e.buttonType === "secondary" ? e.backgroundColor === "light" ? t += " button-type__secondary-light " : e.backgroundColor === "dark" && (t += " button-type__secondary-dark ") : e.buttonType === "primaryIcon" ? e.backgroundColor === "light" && e.imageAlignment === "left" && (t += " button-type__primary-left-icon-light ") : e.buttonType === "secondaryIcon" ? e.backgroundColor === "light" ? e.imageAlignment === "left" && (t += " button-type__secondary-left-icon-light ") : e.backgroundColor === "dark" && e.imageAlignment === "left" && (t += " button-type__secondary-left-icon-dark ") : e.buttonType === "tertiary" ? t += " button-type__tertiary-light " : e.buttonType === "tertiaryIcon" ? e.imageAlignment === "left" && e.backgroundColor === "light" && (t += " button-type__tertiary-left-icon-light ") : e.buttonType === "text" ? e.backgroundColor === "light" ? e.imageAlignment === "left" ? t += " button-type__text-left-icon-light " : e.imageAlignment === "right" ? t += " button-type__text-right-icon-light " : t += " button-type__text-light " : e.backgroundColor === "dark" && (e.imageAlignment === "left" ? t += " button-type__text-left-icon-dark " : e.imageAlignment === "right" ? t += " button-type__text-right-icon-dark " : t += " button-type__text-dark ") : e.buttonType === "stacked" ? e.backgroundColor === "light" ? t += " button-type__stacked-icon-light " : e.backgroundColor === "dark" && (t += " button-type__stacked-icon-dark ") : e.buttonType === "icon" ? e.backgroundColor === "light" ? t += " button-type__icon-light " : e.backgroundColor === "dark" && (t += " button-type__icon-dark ") : e.buttonType === "inline" ? e.imageAlignment === "right" && (t += " button-type__inline-right-icon-light ") : e.buttonType === "intext" && (t += " button-type__intext-light "), e.textAlignment === "left" ? t += " button-text__left-align " : e.textAlignment === "center" && (t += " button-text__center-align "), e.additionalClassnames && (t += " ", t += e.additionalClassnames), t.includes("button-type__intext-light") ? /* @__PURE__ */ S("a", {
		"aria-label": e.buttonTitle,
		className: t,
		tabIndex: "0",
		onKeyUp: e.onKeyUp,
		onClick: e.onClick,
		disabled: e.disabled,
		style: { maxWidth: e.maxWidth },
		target: "_blank",
		rel: "noopener noreferrer",
		href: e.to,
		children: e.copy
	}) : t.includes("left-icon") ? /* @__PURE__ */ C("button", {
		type: "button",
		"aria-label": e.buttonTitle,
		className: t,
		tabIndex: "0",
		onClick: e.onClick,
		disabled: e.disabled,
		style: { maxWidth: e.maxWidth },
		children: [e.image, e.copy]
	}) : t.includes("right-icon") ? /* @__PURE__ */ C("button", {
		type: "button",
		"aria-label": e.buttonTitle,
		className: t,
		tabIndex: "0",
		onClick: e.onClick,
		disabled: e.disabled,
		style: { maxWidth: e.maxWidth },
		children: [e.copy, e.image]
	}) : t.includes("stacked-icon") ? /* @__PURE__ */ C("button", {
		type: "button",
		"aria-label": e.buttonTitle,
		className: t,
		tabIndex: "0",
		onClick: e.onClick,
		disabled: e.disabled,
		style: { maxWidth: e.maxWidth },
		children: [/* @__PURE__ */ S("div", {
			className: "stacked-button__only-image",
			children: e.image
		}), /* @__PURE__ */ S("div", {
			className: "stacked-button__only-text",
			children: e.copy
		})]
	}) : t.includes("icon-light") || t.includes("icon-dark") ? /* @__PURE__ */ S("button", {
		type: "button",
		"aria-label": e.buttonTitle,
		className: t,
		tabIndex: "0",
		onClick: e.onClick,
		disabled: e.disabled,
		style: { maxWidth: e.maxWidth },
		children: e.image
	}) : /* @__PURE__ */ S("button", {
		type: "button",
		"aria-label": e.buttonTitle,
		className: t,
		tabIndex: "0",
		onClick: e.onClick,
		disabled: e.disabled,
		style: { maxWidth: e.maxWidth },
		children: e.copy
	});
};
sc.propTypes = oc;
//#endregion
//#region components/cards/CardButton.jsx
var cc = {
	link: u.string,
	govLink: u.bool,
	onlyPerformAction: u.bool,
	action: u.func,
	text: u.oneOfType([u.string, u.object]),
	variant: u.string,
	customClassName: u.string,
	children: u.oneOfType([u.string, u.object]),
	disabled: u.bool
}, lc = ({ link: e, govLink: t, onlyPerformAction: n = "false", action: r, text: i, variant: a = "secondary", customClassName: o = "", children: s, backgroundColor: c, buttonSize: l, textAlignment: u, disabled: d = !1 }) => {
	let f = {
		primary: "primary",
		secondary: "secondary",
		text: "text"
	}, p = {
		primary: "card__button--primary",
		secondary: "card__button--secondary ",
		text: "card__button--borderless"
	}, m = (e) => {
		e.key === "Enter" && r();
	}, h = () => {
		window.location.href = e, r();
	};
	return n === !0 ? /* @__PURE__ */ S("div", {
		className: "card__button",
		children: /* @__PURE__ */ S(sc, {
			additionalClassnames: o,
			onKeyUp: (e) => m(e),
			onClick: r,
			copy: i || s,
			buttonTitle: i || s,
			buttonSize: "md",
			buttonType: f[a] === void 0 ? "secondary" : f[a],
			backgroundColor: "light",
			textAlignment: "center",
			disabled: d
		})
	}) : /* @__PURE__ */ S("div", {
		className: "card__button",
		children: t ? /* @__PURE__ */ S("div", {
			className: `card__button--secondary ${p[a]}`,
			children: /* @__PURE__ */ S(sc, {
				"aria-label": `${i}`,
				tabIndex: "0",
				additionalClassnames: o,
				onClick: h,
				onKeyUp: (e) => m(e),
				copy: i || s,
				buttonTitle: i || s,
				buttonSize: l,
				textAlignment: u,
				buttonType: f[a] === void 0 ? "secondary" : f[a],
				backgroundColor: c,
				disabled: d
			})
		}) : /* @__PURE__ */ S("div", {
			className: `${p[a]}`,
			children: /* @__PURE__ */ S(sc, {
				"aria-label": `${i}`,
				tabIndex: "0",
				additionalClassnames: o,
				onClick: h,
				onKeyUp: (e) => m(e),
				copy: i || s,
				buttonTitle: i || s,
				buttonSize: l,
				textAlignment: u,
				buttonType: f[a] === void 0 ? "secondary" : f[a],
				backgroundColor: c,
				disabled: d
			})
		})
	});
};
lc.propTypes = cc;
//#endregion
//#region components/NewPicker.jsx
var uc = {
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
}, dc = (e, t, n) => e.name === n ? -1 : t.name === n ? 1 : e.name < t.name ? -1 : +(e.name > t.name), fc = ({ size: e, label: t = "", children: n, leftIcon: r, enabled: i, id: a = "", options: s, selectedOption: u, dropdownClassname: d = "", buttonClassname: f = "", minTextWidth: p = "", classname: m = "", sortFn: h = dc, parentWidth: g, infoSection: _ = !1, infoSectionContent: v = "" }) => {
	let y = c(null), x = c(null), [w, T] = l(!1), [E, D] = l(i || !1), O = "usa-dt-picker__button-icon--svg", k = _ ? "310px" : "initial", ee = (e) => {
		e.preventDefault(), T(!w);
	}, te = (e) => {
		e.key === "Escape" && w && T(!w);
	}, ne = (e, t) => h(e, t, u), A = (e) => (t) => {
		e(t), T(!1);
	}, j = "";
	return e === "sm" || e === "small" ? j = "-sm" : e === "md" || e === "medium" ? j = "-md" : (e === "lg" || e === "large") && (j = "-lg"), o(() => {
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
			className: `filter__dropdown-label${j}`,
			children: t
		}), /* @__PURE__ */ C("div", {
			className: "filter__dropdown-button-list-container",
			children: [/* @__PURE__ */ C("button", {
				className: `filter__dropdown-button${j} ${E ? "enabled" : "not-enabled"} ${f}`,
				ref: x,
				"aria-label": "Filter Dropdown Button",
				onClick: ee,
				onKeyUp: te,
				style: { maxWidth: `${g}px` },
				type: "button",
				children: [
					r && /* @__PURE__ */ S("span", {
						className: "filter__dropdown-left-icon",
						children: /* @__PURE__ */ S(Z, {
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
						children: [!w && /* @__PURE__ */ S(Z, {
							icon: "chevron-down",
							alt: "Toggle menu"
						}), w && /* @__PURE__ */ S(Z, {
							icon: "chevron-up",
							alt: "Toggle menu"
						})]
					})
				]
			}), w && /* @__PURE__ */ S("div", {
				className: "filter__dropdown__list-info-wrapper",
				style: { maxWidth: `${g}px` },
				children: /* @__PURE__ */ C("ul", {
					className: `filter__dropdown-list${j} ${w ? "" : "hide"} ${E ? "enabled" : "not-enabled"} ${d}`,
					style: {
						maxWidth: `${g}px`,
						height: k
					},
					children: [s?.sort(ne).map((e) => ({
						...e,
						onClick: A(e.onClick)
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
fc.propTypes = uc;
//#endregion
export { sc as Button, rc as CardBody, lc as CardButton, tc as CardContainer, ac as CardHero, Os as Carousel, ys as ComingSoon, Is as DownloadIconButton, fo as ErrorMessage, Vs as FiscalYearPicker, $s as FlexGridCol, Zs as FlexGridContainer, Qs as FlexGridRow, lo as GenericMessage, Cs as InformationBoxes, Wo as LoadingMessage, fc as NewPicker, Go as NoResultsMessage, Ps as PageHeader, Ka as Pagination, Xa as Picker, ro as QuarterPicker, so as SearchBar, ws as SectionHeader, Es as SectionWrapper, Js as ShareIcon, ss as Table, vs as Tabs, ps as TooltipComponent, ds as TooltipWrapper, $a as useCumulativeQuarterPicker, Ys as useDynamicStickyClass };
