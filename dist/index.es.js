import e, { Children as t, cloneElement as n, createElement as r, isValidElement as i, useCallback as a, useEffect as o, useId as s, useRef as c, useState as l } from "react";
import u, { oneOf as d, oneOfType as f, shape as p } from "prop-types";
import m from "accounting";
import { debounce as h, range as g, startCase as _, throttle as v, union as y, uniqueId as b } from "lodash-es";
import { Fragment as x, jsx as S, jsxs as C } from "react/jsx-runtime";
import w from "react-dom";
//#region \0rolldown/runtime.js
var T = Object.create, E = Object.defineProperty, D = Object.getOwnPropertyDescriptor, O = Object.getOwnPropertyNames, k = Object.getPrototypeOf, ee = Object.prototype.hasOwnProperty, A = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), j = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = O(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ee.call(e, s) && s !== n && E(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = D(t, s)) || r.enumerable
	});
	return e;
}, M = (e, t, n) => (n = e == null ? {} : T(k(e)), j(t || !e || !e.__esModule || !ee.call(e, "default") ? E(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), N = {
	symbol: "$",
	precision: 0,
	format: {
		pos: "%s%v",
		neg: "-%s%v",
		zero: "%s%v"
	}
}, P = {
	TRILLION: 0xe8d4a51000,
	BILLION: 1e9,
	MILLION: 1e6,
	THOUSAND: 1e3
}, te = {
	TRILLION: "T",
	BILLION: "B",
	MILLION: "M",
	THOUSAND: "k"
}, F = {
	TRILLION: "trillion",
	BILLION: "billion",
	MILLION: "million",
	THOUSAND: "thousand"
}, ne = (e) => m.formatMoney(e, N), re = (e, t) => {
	let n = Object.assign({}, N, { precision: t });
	return m.formatMoney(e, n);
}, ie = (e) => {
	let t = Math.abs(e), n = 1, r = "", i = "";
	return t >= P.TRILLION ? (n = P.TRILLION, r = te.TRILLION, i = F.TRILLION) : t >= P.BILLION ? (n = P.BILLION, r = te.BILLION, i = F.BILLION) : t >= P.MILLION ? (n = P.MILLION, r = te.MILLION, i = F.MILLION) : t >= P.THOUSAND && (n = P.THOUSAND, r = te.THOUSAND, i = F.THOUSAND), {
		unit: n,
		unitLabel: r,
		longLabel: i
	};
}, ae = (e) => {
	let t = Object.assign({}, N, { symbol: "" });
	return m.formatMoney(e, t);
}, oe = (e, t) => {
	let n = Object.assign({}, N, {
		symbol: "",
		precision: t
	});
	return m.formatMoney(e, n);
}, se = (e, t, n) => {
	let r = (e - 1) * t + 1, i = e * t;
	return e === Math.ceil(n / t) && (i = n), {
		start: r,
		end: i
	};
};
//#endregion
//#region node_modules/@fortawesome/fontawesome-svg-core/index.mjs
function ce(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function le(e) {
	if (Array.isArray(e)) return e;
}
function ue(e) {
	if (Array.isArray(e)) return ce(e);
}
function de(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function fe(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Se(r.key), r);
	}
}
function pe(e, t, n) {
	return t && fe(e.prototype, t), n && fe(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function me(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = we(e)) || t && e && typeof e.length == "number") {
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
function I(e, t, n) {
	return (t = Se(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function he(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ge(e, t) {
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
function _e() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ve() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ye(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function L(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ye(Object(n), !0).forEach(function(t) {
			I(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function be(e, t) {
	return le(e) || ge(e, t) || we(e, t) || _e();
}
function R(e) {
	return ue(e) || he(e) || we(e) || ve();
}
function xe(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Se(e) {
	var t = xe(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ce(e) {
	"@babel/helpers - typeof";
	return Ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Ce(e);
}
function we(e, t) {
	if (e) {
		if (typeof e == "string") return ce(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ce(e, t) : void 0;
	}
}
var Te = function() {}, Ee = {}, De = {}, Oe = null, ke = {
	mark: Te,
	measure: Te
};
try {
	typeof window < "u" && (Ee = window), typeof document < "u" && (De = document), typeof MutationObserver < "u" && (Oe = MutationObserver), typeof performance < "u" && (ke = performance);
} catch {}
var Ae = (Ee.navigator || {}).userAgent, je = Ae === void 0 ? "" : Ae, Me = Ee, z = De, Ne = Oe, Pe = ke;
Me.document;
var B = !!z.documentElement && !!z.head && typeof z.addEventListener == "function" && typeof z.createElement == "function", Fe = ~je.indexOf("MSIE") || ~je.indexOf("Trident/"), Ie, Le = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/, Re = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i, ze = {
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
	"slab-duo": {
		"fa-regular": "regular",
		fasldr: "regular"
	},
	"slab-press-duo": {
		"fa-regular": "regular",
		faslpdr: "regular"
	},
	thumbprint: {
		"fa-light": "light",
		fatl: "light"
	},
	vellum: {
		"fa-solid": "solid",
		favs: "solid"
	},
	pixel: {
		"fa-regular": "regular",
		fapr: "regular"
	},
	mosaic: {
		"fa-solid": "solid",
		fams: "solid"
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
}, Be = {
	GROUP: "duotone-group",
	SWAP_OPACITY: "swap-opacity",
	PRIMARY: "primary",
	SECONDARY: "secondary"
}, Ve = [
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
	"fa-slab-press-duo",
	"fa-slab-duo",
	"fa-mosaic",
	"fa-pixel",
	"fa-vellum",
	"fa-utility",
	"fa-utility-duo",
	"fa-utility-fill"
], V = "classic", He = "duotone", Ue = "sharp", We = "sharp-duotone", Ge = "chisel", Ke = "etch", qe = "graphite", Je = "jelly", Ye = "jelly-duo", Xe = "jelly-fill", Ze = "mosaic", Qe = "notdog", $e = "notdog-duo", et = "pixel", tt = "slab", nt = "slab-duo", rt = "slab-press", it = "slab-press-duo", at = "thumbprint", ot = "utility", st = "utility-duo", ct = "utility-fill", lt = "vellum", ut = "whiteboard", dt = "Classic", ft = "Duotone", pt = "Sharp", mt = "Sharp Duotone", ht = "Chisel", gt = "Etch", _t = "Graphite", vt = "Jelly", yt = "Jelly Duo", bt = "Jelly Fill", xt = "Mosaic", St = "Notdog", Ct = "Notdog Duo", wt = "Pixel", Tt = "Slab", Et = "Slab Duo", Dt = "Slab Press", Ot = "Slab Press Duo", kt = "Thumbprint", At = "Utility", jt = "Utility Duo", Mt = "Utility Fill", Nt = "Vellum", Pt = "Whiteboard", Ft = [
	V,
	He,
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
	ot,
	st,
	ct,
	lt,
	ut
];
Ie = {}, I(I(I(I(I(I(I(I(I(I(Ie, V, dt), He, ft), Ue, pt), We, mt), Ge, ht), Ke, gt), qe, _t), Je, vt), Ye, yt), Xe, bt), I(I(I(I(I(I(I(I(I(I(Ie, Ze, xt), Qe, St), $e, Ct), et, wt), tt, Tt), nt, Et), rt, Dt), it, Ot), at, kt), ot, At), I(I(I(I(Ie, st, jt), ct, Mt), lt, Nt), ut, Pt);
var It = {
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
	"slab-duo": { 400: "fasldr" },
	"slab-press-duo": { 400: "faslpdr" },
	vellum: { 900: "favs" },
	mosaic: { 900: "fams" },
	pixel: { 400: "fapr" },
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
}, Lt = {
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
	"Font Awesome 7 Slab Duo": {
		400: "fasldr",
		normal: "fasldr"
	},
	"Font Awesome 7 Slab Press Duo": {
		400: "faslpdr",
		normal: "faslpdr"
	},
	"Font Awesome 7 Pixel": {
		400: "fapr",
		normal: "fapr"
	},
	"Font Awesome 7 Mosaic": {
		900: "fams",
		normal: "fams"
	},
	"Font Awesome 7 Vellum": {
		900: "favs",
		normal: "favs"
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
}, Rt = /* @__PURE__ */ new Map([
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
	["mosaic", {
		defaultShortPrefixId: "fams",
		defaultStyleId: "solid",
		styleIds: ["solid"],
		futureStyleIds: [],
		defaultFontWeight: 900
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
	["pixel", {
		defaultShortPrefixId: "fapr",
		defaultStyleId: "regular",
		styleIds: ["regular"],
		futureStyleIds: [],
		defaultFontWeight: 400
	}],
	["slab", {
		defaultShortPrefixId: "faslr",
		defaultStyleId: "regular",
		styleIds: ["regular"],
		futureStyleIds: [],
		defaultFontWeight: 400
	}],
	["slab-duo", {
		defaultShortPrefixId: "fasldr",
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
	["slab-press-duo", {
		defaultShortPrefixId: "faslpdr",
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
	["vellum", {
		defaultShortPrefixId: "favs",
		defaultStyleId: "solid",
		styleIds: ["solid"],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["whiteboard", {
		defaultShortPrefixId: "fawsb",
		defaultStyleId: "semibold",
		styleIds: ["semibold"],
		futureStyleIds: [],
		defaultFontWeight: 600
	}]
]), zt = {
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
	mosaic: { solid: "fams" },
	notdog: { solid: "fans" },
	"notdog-duo": { solid: "fands" },
	pixel: { regular: "fapr" },
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
	"slab-duo": { regular: "fasldr" },
	"slab-press": { regular: "faslpr" },
	"slab-press-duo": { regular: "faslpdr" },
	thumbprint: { light: "fatl" },
	utility: { semibold: "fausb" },
	"utility-duo": { semibold: "faudsb" },
	"utility-fill": { semibold: "faufsb" },
	vellum: { solid: "favs" },
	whiteboard: { semibold: "fawsb" }
}, Bt = [
	"fak",
	"fa-kit",
	"fakd",
	"fa-kit-duotone"
], Vt = {
	kit: {
		fak: "kit",
		"fa-kit": "kit"
	},
	"kit-duotone": {
		fakd: "kit-duotone",
		"fa-kit-duotone": "kit-duotone"
	}
}, Ht = ["kit"];
I(I({}, "kit", "Kit"), "kit-duotone", "Kit Duotone");
var Ut = {
	kit: { "fa-kit": "fak" },
	"kit-duotone": { "fa-kit-duotone": "fakd" }
}, Wt = {
	"Font Awesome Kit": {
		400: "fak",
		normal: "fak"
	},
	"Font Awesome Kit Duotone": {
		400: "fakd",
		normal: "fakd"
	}
}, Gt = {
	kit: { fak: "fa-kit" },
	"kit-duotone": { fakd: "fa-kit-duotone" }
}, Kt = {
	kit: { kit: "fak" },
	"kit-duotone": { "kit-duotone": "fakd" }
}, qt, Jt = {
	GROUP: "duotone-group",
	SWAP_OPACITY: "swap-opacity",
	PRIMARY: "primary",
	SECONDARY: "secondary"
}, Yt = [
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
	"fa-slab-press-duo",
	"fa-slab-duo",
	"fa-mosaic",
	"fa-pixel",
	"fa-vellum",
	"fa-utility",
	"fa-utility-duo",
	"fa-utility-fill"
];
qt = {}, I(I(I(I(I(I(I(I(I(I(qt, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), I(I(I(I(I(I(I(I(I(I(qt, "mosaic", "Mosaic"), "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "pixel", "Pixel"), "slab", "Slab"), "slab-duo", "Slab Duo"), "slab-press", "Slab Press"), "slab-press-duo", "Slab Press Duo"), "thumbprint", "Thumbprint"), "utility", "Utility"), I(I(I(I(qt, "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "vellum", "Vellum"), "whiteboard", "Whiteboard"), I(I({}, "kit", "Kit"), "kit-duotone", "Kit Duotone");
var Xt = {
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
	"slab-duo": { "fa-regular": "fasldr" },
	"slab-press-duo": { "fa-regular": "faslpdr" },
	pixel: { "fa-regular": "fapr" },
	mosaic: { "fa-solid": "fams" },
	vellum: { "fa-solid": "favs" },
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
}, Zt = {
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
	"slab-duo": ["fasldr"],
	"slab-press-duo": ["faslpdr"],
	pixel: ["fapr"],
	mosaic: ["fams"],
	vellum: ["favs"],
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
}, Qt = {
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
	"slab-duo": { fasldr: "fa-regular" },
	"slab-press-duo": { faslpdr: "fa-regular" },
	pixel: { fapr: "fa-regular" },
	mosaic: { fams: "fa-solid" },
	vellum: { favs: "fa-solid" },
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
}, $t = (/* @__PURE__ */ "fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb".split(".")).concat(Yt, [
	"fa-solid",
	"fa-regular",
	"fa-light",
	"fa-thin",
	"fa-duotone",
	"fa-brands",
	"fa-semibold"
]), en = [
	"solid",
	"regular",
	"light",
	"thin",
	"duotone",
	"brands",
	"semibold"
], tn = [
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
], nn = tn.concat([
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
]), rn = [].concat(R(Object.keys(Zt)), en, [
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
	"beat-fade",
	"border",
	"bounce",
	"buzz",
	"canvas-square",
	"canvas-roomy",
	"fade",
	"flip-360",
	"flip-both",
	"flip-horizontal",
	"flip-vertical",
	"flip",
	"float",
	"inverse",
	"jello",
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
	"spin-snap",
	"spin-snap-4",
	"spin-snap-8",
	"stack-1x",
	"stack-2x",
	"stack",
	"swing",
	"ul",
	"wag",
	"width-auto",
	"width-fixed",
	Jt.GROUP,
	Jt.SWAP_OPACITY,
	Jt.PRIMARY,
	Jt.SECONDARY
], tn.map(function(e) {
	return `${e}x`;
}), nn.map(function(e) {
	return `w-${e}`;
})), an = {
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
}, H = "___FONT_AWESOME___", on = 16, sn = "fa", cn = "svg-inline--fa", ln = "data-fa-i2svg", un = "data-fa-pseudo-element", dn = "data-fa-pseudo-element-pending", fn = "data-prefix", pn = "data-icon", mn = "fontawesome-i2svg", hn = "async", gn = [
	"HTML",
	"HEAD",
	"STYLE",
	"SCRIPT"
], _n = [
	"::before",
	"::after",
	":before",
	":after"
], vn = function() {
	try {
		return process.env.NODE_ENV === "production";
	} catch {
		return !1;
	}
}();
function yn(e) {
	return new Proxy(e, { get: function(e, t) {
		return t in e ? e[t] : e[V];
	} });
}
var bn = L({}, ze);
bn[V] = L(L(L(L({}, { "fa-duotone": "duotone" }), ze[V]), Vt.kit), Vt["kit-duotone"]);
var xn = yn(bn), Sn = L({}, zt);
Sn[V] = L(L(L(L({}, { duotone: "fad" }), Sn[V]), Kt.kit), Kt["kit-duotone"]);
var Cn = yn(Sn), wn = L({}, Qt);
wn[V] = L(L({}, wn[V]), Gt.kit);
var Tn = yn(wn), En = L({}, Xt);
En[V] = L(L({}, En[V]), Ut.kit), yn(En);
var Dn = Le, On = "fa-layers-text", kn = Re;
yn(L({}, It));
var An = [
	"class",
	"data-prefix",
	"data-icon",
	"data-fa-transform",
	"data-fa-mask"
], jn = Be, Mn = [].concat(R(Ht), R(rn)), Nn = Me.FontAwesomeConfig || {};
function Pn(e) {
	var t = z.querySelector("script[" + e + "]");
	if (t) return t.getAttribute(e);
}
function Fn(e) {
	return e === "" ? !0 : e === "false" ? !1 : e === "true" || e;
}
z && typeof z.querySelector == "function" && [
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
	var t = be(e, 2), n = t[0], r = t[1], i = Fn(Pn(n));
	i != null && (Nn[r] = i);
});
var In = {
	styleDefault: "solid",
	familyDefault: V,
	cssPrefix: sn,
	replacementClass: cn,
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
Nn.familyPrefix && (Nn.cssPrefix = Nn.familyPrefix);
var Ln = L(L({}, In), Nn);
Ln.autoReplaceSvg || (Ln.observeMutations = !1);
var U = {};
Object.keys(In).forEach(function(e) {
	Object.defineProperty(U, e, {
		enumerable: !0,
		set: function(t) {
			Ln[e] = t, Rn.forEach(function(e) {
				return e(U);
			});
		},
		get: function() {
			return Ln[e];
		}
	});
}), Object.defineProperty(U, "familyPrefix", {
	enumerable: !0,
	set: function(e) {
		Ln.cssPrefix = e, Rn.forEach(function(e) {
			return e(U);
		});
	},
	get: function() {
		return Ln.cssPrefix;
	}
}), Me.FontAwesomeConfig = U;
var Rn = [];
function zn(e) {
	return Rn.push(e), function() {
		Rn.splice(Rn.indexOf(e), 1);
	};
}
var W = on, G = {
	size: 16,
	x: 0,
	y: 0,
	rotate: 0,
	flipX: !1,
	flipY: !1
};
function Bn(e) {
	if (e && B) {
		var t = z.createElement("style");
		t.setAttribute("type", "text/css"), t.innerHTML = e;
		for (var n = z.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
			var a = n[i], o = (a.tagName || "").toUpperCase();
			["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
		}
		return z.head.insertBefore(t, r), e;
	}
}
var Vn = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Hn() {
	for (var e = 12, t = ""; e-- > 0;) t += Vn[Math.random() * 62 | 0];
	return t;
}
function Un(e) {
	for (var t = [], n = (e || []).length >>> 0; n--;) t[n] = e[n];
	return t;
}
function Wn(e) {
	return e.classList ? Un(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(e) {
		return e;
	});
}
function Gn(e) {
	return `${e}`.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Kn(e) {
	return Object.keys(e || {}).reduce(function(t, n) {
		return t + `${n}="${Gn(e[n])}" `;
	}, "").trim();
}
function qn(e) {
	return Object.keys(e || {}).reduce(function(t, n) {
		return t + `${n}: ${e[n].trim()};`;
	}, "");
}
function Jn(e) {
	return e.size !== G.size || e.x !== G.x || e.y !== G.y || e.rotate !== G.rotate || e.flipX || e.flipY;
}
function Yn(e) {
	var t = e.transform, n = e.containerWidth, r = e.iconWidth;
	return {
		outer: { transform: `translate(${n / 2} 256)` },
		inner: { transform: `${`translate(${t.x * 32}, ${t.y * 32}) `} ${`scale(${t.size / 16 * (t.flipX ? -1 : 1)}, ${t.size / 16 * (t.flipY ? -1 : 1)}) `} ${`rotate(${t.rotate} 0 0)`}` },
		path: { transform: `translate(${r / 2 * -1} -256)` }
	};
}
function Xn(e) {
	var t = e.transform, n = e.width, r = n === void 0 ? on : n, i = e.height, a = i === void 0 ? on : i, o = e.startCentered, s = o !== void 0 && o, c = "";
	return c += s && Fe ? `translate(${t.x / W - r / 2}em, ${t.y / W - a / 2}em) ` : s ? `translate(calc(-50% + ${t.x / W}em), calc(-50% + ${t.y / W}em)) ` : `translate(${t.x / W}em, ${t.y / W}em) `, c += `scale(${t.size / W * (t.flipX ? -1 : 1)}, ${t.size / W * (t.flipY ? -1 : 1)}) `, c += `rotate(${t.rotate}deg) `, c;
}
var Zn = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';\n  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';\n  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';\n  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';\n  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-canvas-square {\n  padding-block: 0.125em;\n  margin-block-end: -0.125em;\n}\n\n.fa-canvas-roomy {\n  padding-block: 0.25em;\n  padding-inline: 0.125em;\n  margin-block-end: -0.25em;\n  box-sizing: content-box;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1.5s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-flip-360 {\n  animation-name: fa-flip-360;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 0.75s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n.fa-spin-snap {\n  animation-name: fa-spin-snap;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 3s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-snap-4 {\n  animation-name: fa-spin-snap-4;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2.4s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-snap-8 {\n  animation-name: fa-spin-snap-8;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 4s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-buzz {\n  animation-name: fa-buzz;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 0.6s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-wag {\n  animation-name: fa-wag;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 0.9s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-out);\n  transform-origin: bottom center;\n}\n\n.fa-float {\n  animation-name: fa-float;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 3s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n  will-change: transform;\n}\n\n.fa-swing {\n  animation-name: fa-swing;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1.2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-out);\n  transform-origin: top center;\n}\n\n.fa-jello {\n  animation-name: fa-jello;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 0.9s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-out);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-flip-360,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse,\n  .fa-buzz,\n  .fa-float,\n  .fa-jello,\n  .fa-spin-snap,\n  .fa-spin-snap-4,\n  .fa-spin-snap-8,\n  .fa-swing,\n  .fa-wag {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0% {\n    transform: scale(1);\n  }\n  25% {\n    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));\n  }\n  45% {\n    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));\n  }\n  65% {\n    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));\n  }\n  90% {\n    transform: scale(1);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n    animation-timing-function: var(--fa-animation-timing);\n  }\n  14% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));\n    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);\n  }\n  32% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));\n    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);\n  }\n  52% {\n    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));\n    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\n  }\n  70% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);\n    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);\n  }\n  85% {\n    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));\n    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);\n  }\n  40% {\n    opacity: var(--fa-fade-opacity, 0.4);\n    transform: scale(0.98);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes fa-beat-fade {\n  0% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);\n  }\n  25% {\n    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);\n    transform: scale(var(--fa-beat-fade-scale, 1.28));\n    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  }\n  45% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.25));\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  65% {\n    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);\n    transform: scale(var(--fa-beat-fade-scale, 1.28));\n    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  }\n  100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n}\n@keyframes fa-flip {\n  0% {\n    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);\n    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);\n  }\n  8% {\n    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);\n    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);\n  }\n  35% {\n    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));\n    animation-timing-function: linear;\n  }\n  65% {\n    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));\n    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);\n  }\n  92% {\n    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));\n    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);\n  }\n  100% {\n    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));\n  }\n}\n@keyframes fa-flip-360 {\n  0% {\n    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);\n    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);\n  }\n  8% {\n    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);\n    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);\n  }\n  50% {\n    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));\n    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);\n  }\n  80% {\n    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));\n    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);\n  }\n  100% {\n    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(0deg);\n    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);\n  }\n  8% {\n    transform: rotate(35deg) translateX(1px);\n    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);\n  }\n  20% {\n    transform: rotate(-22deg) translateX(-1px);\n    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);\n  }\n  35% {\n    transform: rotate(15deg) translateX(1px);\n    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);\n  }\n  50% {\n    transform: rotate(-9deg);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  }\n  65% {\n    transform: rotate(5deg);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  }\n  78% {\n    transform: rotate(-3deg);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  }\n  90% {\n    transform: rotate(1deg);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin-snap {\n  0% {\n    transform: rotate(0deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  12% {\n    transform: rotate(60deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  16.67% {\n    transform: rotate(60deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  28.67% {\n    transform: rotate(120deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  33.33% {\n    transform: rotate(120deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  45.33% {\n    transform: rotate(180deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: rotate(180deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  62% {\n    transform: rotate(240deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  66.67% {\n    transform: rotate(240deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  78.67% {\n    transform: rotate(300deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  83.33% {\n    transform: rotate(300deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  95.33% {\n    transform: rotate(360deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin-snap-4 {\n  0% {\n    transform: rotate(0deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  15% {\n    transform: rotate(90deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  25% {\n    transform: rotate(90deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  40% {\n    transform: rotate(180deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: rotate(180deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  65% {\n    transform: rotate(270deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  75% {\n    transform: rotate(270deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  90% {\n    transform: rotate(360deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin-snap-8 {\n  0% {\n    transform: rotate(0deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  9% {\n    transform: rotate(45deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  12.5% {\n    transform: rotate(45deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  21.5% {\n    transform: rotate(90deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  25% {\n    transform: rotate(90deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  34% {\n    transform: rotate(135deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  37.5% {\n    transform: rotate(135deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  46.5% {\n    transform: rotate(180deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: rotate(180deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  59% {\n    transform: rotate(225deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  62.5% {\n    transform: rotate(225deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  71.5% {\n    transform: rotate(270deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  75% {\n    transform: rotate(270deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  84% {\n    transform: rotate(315deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  87.5% {\n    transform: rotate(315deg);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n  96.5% {\n    transform: rotate(360deg);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fa-buzz {\n  0% {\n    transform: translateX(0) rotate(0deg);\n    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);\n  }\n  5% {\n    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);\n  }\n  10% {\n    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);\n  }\n  15% {\n    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);\n  }\n  20% {\n    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);\n  }\n  25% {\n    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);\n  }\n  30% {\n    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);\n  }\n  35% {\n    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);\n  }\n  40% {\n    transform: translateX(0) rotate(0deg);\n  }\n  100% {\n    transform: translateX(0) rotate(0deg);\n  }\n}\n@keyframes fa-wag {\n  0% {\n    transform: rotate(0deg);\n    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);\n  }\n  12% {\n    transform: rotate(var(--fa-wag-angle, 12deg));\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  24% {\n    transform: rotate(2deg);\n    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);\n  }\n  36% {\n    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  48% {\n    transform: rotate(1deg);\n    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);\n  }\n  58% {\n    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  68% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-float {\n  0% {\n    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));\n    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);\n  }\n  15% {\n    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);\n    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);\n  }\n  35% {\n    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));\n    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);\n  }\n  50% {\n    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);\n    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);\n  }\n  70% {\n    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);\n    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);\n  }\n  90% {\n    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));\n    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);\n  }\n  100% {\n    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));\n  }\n}\n@keyframes fa-swing {\n  0% {\n    transform: rotate(0deg);\n    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);\n  }\n  8% {\n    transform: rotate(var(--fa-swing-angle, 22deg));\n    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);\n  }\n  18% {\n    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));\n    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);\n  }\n  28% {\n    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));\n    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);\n  }\n  38% {\n    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));\n    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  }\n  48% {\n    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));\n    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  }\n  56% {\n    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));\n    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  }\n  64% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-jello {\n  0% {\n    transform: scale(1, 1);\n    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);\n  }\n  12% {\n    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));\n    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);\n  }\n  24% {\n    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));\n    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);\n  }\n  36% {\n    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));\n    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  }\n  48% {\n    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));\n    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);\n  }\n  58% {\n    transform: scale(1.02, 0.98);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  68% {\n    transform: scale(1, 1);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
function Qn() {
	var e = sn, t = cn, n = U.cssPrefix, r = U.replacementClass, i = Zn;
	if (n !== e || r !== t) {
		var a = RegExp(`\\.${e}\\-`, "g"), o = RegExp(`\\--${e}\\-`, "g"), s = RegExp(`\\.${t}`, "g");
		i = i.replace(a, `.${n}-`).replace(o, `--${n}-`).replace(s, `.${r}`);
	}
	return i;
}
var $n = !1;
function er() {
	U.autoAddCss && !$n && (Bn(Qn()), $n = !0);
}
var tr = {
	mixout: function() {
		return { dom: {
			css: Qn,
			insertCss: er
		} };
	},
	hooks: function() {
		return {
			beforeDOMElementCreation: function() {
				er();
			},
			beforeI2svg: function() {
				er();
			}
		};
	}
}, K = Me || {};
K[H] || (K[H] = {}), K[H].styles || (K[H].styles = {}), K[H].hooks || (K[H].hooks = {}), K[H].shims || (K[H].shims = []);
var q = K[H], nr = [], rr = function() {
	z.removeEventListener("DOMContentLoaded", rr), ir = 1, nr.map(function(e) {
		return e();
	});
}, ir = !1;
B && (ir = (z.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(z.readyState), ir || z.addEventListener("DOMContentLoaded", rr));
function ar(e) {
	B && (ir ? setTimeout(e, 0) : nr.push(e));
}
function or(e) {
	var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, i = e.children, a = i === void 0 ? [] : i;
	return typeof e == "string" ? Gn(e) : `<${t} ${Kn(r)}>${a.map(or).join("")}</${t}>`;
}
function sr(e, t, n) {
	if (e && e[t] && e[t][n]) return {
		prefix: t,
		iconName: n,
		icon: e[t][n]
	};
}
var cr = function(e, t) {
	return function(n, r, i, a) {
		return e.call(t, n, r, i, a);
	};
}, lr = function(e, t, n, r) {
	var i = Object.keys(e), a = i.length, o = r === void 0 ? t : cr(t, r), s, c, l;
	for (n === void 0 ? (s = 1, l = e[i[0]]) : (s = 0, l = n); s < a; s++) c = i[s], l = o(l, e[c], c, e);
	return l;
};
function ur(e) {
	return R(e).length === 1 ? e.codePointAt(0).toString(16) : null;
}
function dr(e) {
	return Object.keys(e).reduce(function(t, n) {
		var r = e[n];
		return r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
	}, {});
}
function fr(e, t) {
	var n = (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}).skipHooks, r = n !== void 0 && n, i = dr(t);
	typeof q.hooks.addPack == "function" && !r ? q.hooks.addPack(e, dr(t)) : q.styles[e] = L(L({}, q.styles[e] || {}), i), e === "fas" && fr("fa", t);
}
var pr = q.styles, mr = q.shims, hr = Object.keys(Tn), gr = hr.reduce(function(e, t) {
	return e[t] = Object.keys(Tn[t]), e;
}, {}), _r = null, vr = {}, yr = {}, br = {}, xr = {}, Sr = {};
function Cr(e) {
	return ~Mn.indexOf(e);
}
function wr(e, t) {
	var n = t.split("-"), r = n[0], i = n.slice(1).join("-");
	return r === e && i !== "" && !Cr(i) ? i : null;
}
var Tr = function() {
	var e = function(e) {
		return lr(pr, function(t, n, r) {
			return t[r] = lr(n, e, {}), t;
		}, {});
	};
	vr = e(function(e, t, n) {
		return t[3] && (e[t[3]] = n), t[2] && t[2].filter(function(e) {
			return typeof e == "number";
		}).forEach(function(t) {
			e[t.toString(16)] = n;
		}), e;
	}), yr = e(function(e, t, n) {
		return e[n] = n, t[2] && t[2].filter(function(e) {
			return typeof e == "string";
		}).forEach(function(t) {
			e[t] = n;
		}), e;
	}), Sr = e(function(e, t, n) {
		var r = t[2];
		return e[n] = n, r.forEach(function(t) {
			e[t] = n;
		}), e;
	});
	var t = "far" in pr || U.autoFetchSvg, n = lr(mr, function(e, n) {
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
	br = n.names, xr = n.unicodes, _r = Nr(U.styleDefault, { family: U.familyDefault });
};
zn(function(e) {
	_r = Nr(e.styleDefault, { family: U.familyDefault });
}), Tr();
function Er(e, t) {
	return (vr[e] || {})[t];
}
function Dr(e, t) {
	return (yr[e] || {})[t];
}
function Or(e, t) {
	return (Sr[e] || {})[t];
}
function kr(e) {
	return br[e] || {
		prefix: null,
		iconName: null
	};
}
function Ar(e) {
	var t = xr[e], n = Er("fas", e);
	return t || (n ? {
		prefix: "fas",
		iconName: n
	} : null) || {
		prefix: null,
		iconName: null
	};
}
function J() {
	return _r;
}
var jr = function() {
	return {
		prefix: null,
		iconName: null,
		rest: []
	};
};
function Mr(e) {
	var t = V, n = hr.reduce(function(e, t) {
		return e[t] = `${U.cssPrefix}-${t}`, e;
	}, {});
	return Ft.forEach(function(r) {
		(e.includes(n[r]) || e.some(function(e) {
			return gr[r].includes(e);
		})) && (t = r);
	}), t;
}
function Nr(e) {
	var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).family, n = t === void 0 ? V : t, r = xn[n][e];
	if (n === He && !e) return "fad";
	var i = Cn[n][e] || Cn[n][r], a = e in q.styles ? e : null;
	return i || a || null;
}
function Pr(e) {
	var t = [], n = null;
	return e.forEach(function(e) {
		var r = wr(U.cssPrefix, e);
		r ? n = r : e && t.push(e);
	}), {
		iconName: n,
		rest: t
	};
}
function Fr(e) {
	return e.sort().filter(function(e, t, n) {
		return n.indexOf(e) === t;
	});
}
var Ir = $t.concat(Bt);
function Lr(e) {
	var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).skipLookups, n = t !== void 0 && t, r = null, i = Fr(e.filter(function(e) {
		return Ir.includes(e);
	})), a = Fr(e.filter(function(e) {
		return !Ir.includes(e);
	})), o = be(i.filter(function(e) {
		return r = e, !Ve.includes(e);
	}), 1)[0], s = o === void 0 ? null : o, c = Mr(i), l = L(L({}, Pr(a)), {}, { prefix: Nr(s, { family: c }) });
	return L(L(L({}, l), Vr({
		values: e,
		family: c,
		styles: pr,
		config: U,
		canonical: l,
		givenPrefix: r
	})), Rr(n, r, l));
}
function Rr(e, t, n) {
	var r = n.prefix, i = n.iconName;
	if (e || !r || !i) return {
		prefix: r,
		iconName: i
	};
	var a = t === "fa" ? kr(i) : {}, o = Or(r, i);
	return i = a.iconName || o || i, r = a.prefix || r, r === "far" && !pr.far && pr.fas && !U.autoFetchSvg && (r = "fas"), {
		prefix: r,
		iconName: i
	};
}
var zr = Ft.filter(function(e) {
	return e !== V || e !== He;
}), Br = Object.keys(Qt).filter(function(e) {
	return e !== V;
}).map(function(e) {
	return Object.keys(Qt[e]);
}).flat();
function Vr(e) {
	var t = e.values, n = e.family, r = e.canonical, i = e.givenPrefix, a = i === void 0 ? "" : i, o = e.styles, s = o === void 0 ? {} : o, c = e.config, l = c === void 0 ? {} : c, u = n === He, d = t.includes("fa-duotone") || t.includes("fad"), f = l.familyDefault === "duotone", p = r.prefix === "fad" || r.prefix === "fa-duotone";
	return !u && (d || f || p) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && zr.includes(n) && (Object.keys(s).find(function(e) {
		return Br.includes(e);
	}) || l.autoFetchSvg) && (r.prefix = Rt.get(n).defaultShortPrefixId, r.iconName = Or(r.prefix, r.iconName) || r.iconName), (r.prefix === "fa" || a === "fa") && (r.prefix = J() || "fas"), r;
}
var Hr = /*#__PURE__*/ function() {
	function e() {
		de(this, e), this.definitions = {};
	}
	return pe(e, [
		{
			key: "add",
			value: function() {
				var e = this, t = [...arguments].reduce(this._pullDefinitions, {});
				Object.keys(t).forEach(function(n) {
					e.definitions[n] = L(L({}, e.definitions[n] || {}), t[n]), fr(n, t[n]);
					var r = Tn[V][n];
					r && fr(r, t[n]), Tr();
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
}(), Ur = [], Wr = {}, Gr = {}, Kr = Object.keys(Gr);
function qr(e, t) {
	var n = t.mixoutsTo;
	return Ur = e, Wr = {}, Object.keys(Gr).forEach(function(e) {
		Kr.indexOf(e) === -1 && delete Gr[e];
	}), Ur.forEach(function(e) {
		var t = e.mixout ? e.mixout() : {};
		if (Object.keys(t).forEach(function(e) {
			typeof t[e] == "function" && (n[e] = t[e]), Ce(t[e]) === "object" && Object.keys(t[e]).forEach(function(r) {
				n[e] || (n[e] = {}), n[e][r] = t[e][r];
			});
		}), e.hooks) {
			var r = e.hooks();
			Object.keys(r).forEach(function(e) {
				Wr[e] || (Wr[e] = []), Wr[e].push(r[e]);
			});
		}
		e.provides && e.provides(Gr);
	}), n;
}
function Jr(e, t) {
	var n = [...arguments].slice(2);
	return (Wr[e] || []).forEach(function(e) {
		t = e.apply(null, [t].concat(n));
	}), t;
}
function Yr(e) {
	var t = [...arguments].slice(1);
	(Wr[e] || []).forEach(function(e) {
		e.apply(null, t);
	});
}
function Xr() {
	var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
	return Gr[e] ? Gr[e].apply(null, t) : void 0;
}
function Zr(e) {
	e.prefix === "fa" && (e.prefix = "fas");
	var t = e.iconName, n = e.prefix || J();
	if (t) return t = Or(n, t) || t, sr(Qr.definitions, n, t) || sr(q.styles, n, t);
}
var Qr = new Hr(), Y = {
	noAuto: function() {
		U.autoReplaceSvg = !1, U.observeMutations = !1, Yr("noAuto");
	},
	config: U,
	dom: {
		i2svg: function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			return B ? (Yr("beforeI2svg", e), Xr("pseudoElements2svg", e), Xr("i2svg", e)) : Promise.reject(/* @__PURE__ */ Error("Operation requires a DOM of some kind."));
		},
		watch: function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot;
			U.autoReplaceSvg === !1 && (U.autoReplaceSvg = !0), U.observeMutations = !0, ar(function() {
				$r({ autoReplaceSvgRoot: t }), Yr("watch", e);
			});
		}
	},
	parse: { icon: function(e) {
		if (e === null) return null;
		if (Ce(e) === "object" && e.prefix && e.iconName) return {
			prefix: e.prefix,
			iconName: Or(e.prefix, e.iconName) || e.iconName
		};
		if (Array.isArray(e) && e.length === 2) {
			var t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Nr(e[0]);
			return {
				prefix: n,
				iconName: Or(n, t) || t
			};
		}
		if (typeof e == "string" && (e.indexOf(`${U.cssPrefix}-`) > -1 || e.match(Dn))) {
			var r = Lr(e.split(" "), { skipLookups: !0 });
			return {
				prefix: r.prefix || J(),
				iconName: Or(r.prefix, r.iconName) || r.iconName
			};
		}
		if (typeof e == "string") {
			var i = J();
			return {
				prefix: i,
				iconName: Or(i, e) || e
			};
		}
	} },
	library: Qr,
	findIconDefinition: Zr,
	toHtml: or
}, $r = function() {
	var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).autoReplaceSvgRoot, t = e === void 0 ? z : e;
	(Object.keys(q.styles).length > 0 || U.autoFetchSvg) && B && U.autoReplaceSvg && Y.dom.i2svg({ node: t });
};
function ei(e, t) {
	return Object.defineProperty(e, "abstract", { get: t }), Object.defineProperty(e, "html", { get: function() {
		return e.abstract.map(function(e) {
			return or(e);
		});
	} }), Object.defineProperty(e, "node", { get: function() {
		if (B) {
			var t = z.createElement("div");
			return t.innerHTML = e.html, t.children;
		}
	} }), e;
}
function ti(e) {
	var t = e.children, n = e.main, r = e.mask, i = e.attributes, a = e.styles, o = e.transform;
	if (Jn(o) && n.found && !r.found) {
		var s = {
			x: n.width / n.height / 2,
			y: .5
		};
		i.style = qn(L(L({}, a), {}, { "transform-origin": `${s.x + o.x / 16}em ${s.y + o.y / 16}em` }));
	}
	return [{
		tag: "svg",
		attributes: i,
		children: t
	}];
}
function ni(e) {
	var t = e.prefix, n = e.iconName, r = e.children, i = e.attributes, a = e.symbol, o = a === !0 ? `${t}-${U.cssPrefix}-${n}` : a;
	return [{
		tag: "svg",
		attributes: { style: "display: none;" },
		children: [{
			tag: "symbol",
			attributes: L(L({}, i), {}, { id: o }),
			children: r
		}]
	}];
}
function ri(e) {
	return [
		"aria-label",
		"aria-labelledby",
		"title",
		"role"
	].some(function(t) {
		return t in e;
	});
}
function ii(e) {
	var t = e.icons, n = t.main, r = t.mask, i = e.prefix, a = e.iconName, o = e.transform, s = e.symbol, c = e.maskId, l = e.extra, u = e.watchable, d = u !== void 0 && u, f = r.found ? r : n, p = f.width, m = f.height, h = [U.replacementClass, a ? `${U.cssPrefix}-${a}` : ""].filter(function(e) {
		return l.classes.indexOf(e) === -1;
	}).filter(function(e) {
		return e !== "" || !!e;
	}).concat(l.classes).join(" "), g = {
		children: [],
		attributes: L(L({}, l.attributes), {}, {
			"data-prefix": i,
			"data-icon": a,
			class: h,
			role: l.attributes.role || "img",
			viewBox: `0 0 ${p} ${m}`
		})
	};
	!ri(l.attributes) && !l.attributes["aria-hidden"] && (g.attributes["aria-hidden"] = "true"), d && (g.attributes[ln] = "");
	var _ = L(L({}, g), {}, {
		prefix: i,
		iconName: a,
		main: n,
		mask: r,
		maskId: c,
		transform: o,
		symbol: s,
		styles: L({}, l.styles)
	}), v = r.found && n.found ? Xr("generateAbstractMask", _) || {
		children: [],
		attributes: {}
	} : Xr("generateAbstractIcon", _) || {
		children: [],
		attributes: {}
	}, y = v.children, b = v.attributes;
	return _.children = y, _.attributes = b, s ? ni(_) : ti(_);
}
function ai(e) {
	var t = e.content, n = e.width, r = e.height, i = e.transform, a = e.extra, o = e.watchable, s = o !== void 0 && o, c = L(L({}, a.attributes), {}, { class: a.classes.join(" ") });
	s && (c[ln] = "");
	var l = L({}, a.styles);
	Jn(i) && (l.transform = Xn({
		transform: i,
		startCentered: !0,
		width: n,
		height: r
	}), l["-webkit-transform"] = l.transform);
	var u = qn(l);
	u.length > 0 && (c.style = u);
	var d = [];
	return d.push({
		tag: "span",
		attributes: c,
		children: [t]
	}), d;
}
function oi(e) {
	var t = e.content, n = e.extra, r = L(L({}, n.attributes), {}, { class: n.classes.join(" ") }), i = qn(n.styles);
	i.length > 0 && (r.style = i);
	var a = [];
	return a.push({
		tag: "span",
		attributes: r,
		children: [t]
	}), a;
}
var si = q.styles;
function ci(e) {
	var t = e[0], n = e[1], r = be(e.slice(4), 1)[0], i = null;
	return i = Array.isArray(r) ? {
		tag: "g",
		attributes: { class: `${U.cssPrefix}-${jn.GROUP}` },
		children: [{
			tag: "path",
			attributes: {
				class: `${U.cssPrefix}-${jn.SECONDARY}`,
				fill: "currentColor",
				d: r[0]
			}
		}, {
			tag: "path",
			attributes: {
				class: `${U.cssPrefix}-${jn.PRIMARY}`,
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
var li = {
	found: !1,
	width: 512,
	height: 512
};
function ui(e, t) {
	!vn && !U.showMissingIcons && e && console.error(`Icon with name "${e}" and prefix "${t}" is missing.`);
}
function di(e, t) {
	var n = t;
	return t === "fa" && U.styleDefault !== null && (t = J()), new Promise(function(r, i) {
		if (n === "fa") {
			var a = kr(e) || {};
			e = a.iconName || e, t = a.prefix || t;
		}
		if (e && t && si[t] && si[t][e]) {
			var o = si[t][e];
			return r(ci(o));
		}
		ui(e, t), r(L(L({}, li), {}, { icon: U.showMissingIcons && e && Xr("missingIconAbstract") || {} }));
	});
}
var fi = function() {}, pi = U.measurePerformance && Pe && Pe.mark && Pe.measure ? Pe : {
	mark: fi,
	measure: fi
}, mi = "FA \"7.3.1\"", hi = function(e) {
	return pi.mark(`${mi} ${e} begins`), function() {
		return gi(e);
	};
}, gi = function(e) {
	pi.mark(`${mi} ${e} ends`), pi.measure(`${mi} ${e}`, `${mi} ${e} begins`, `${mi} ${e} ends`);
}, _i = {
	begin: hi,
	end: gi
}, vi = function() {};
function yi(e) {
	return typeof (e.getAttribute ? e.getAttribute(ln) : null) == "string";
}
function bi(e) {
	var t = e.getAttribute ? e.getAttribute(fn) : null, n = e.getAttribute ? e.getAttribute(pn) : null;
	return t && n;
}
function xi(e) {
	return e && e.classList && e.classList.contains && e.classList.contains(U.replacementClass);
}
function Si() {
	return U.autoReplaceSvg === !0 ? Di.replace : Di[U.autoReplaceSvg] || Di.replace;
}
function Ci(e) {
	return z.createElementNS("http://www.w3.org/2000/svg", e);
}
function wi(e) {
	return z.createElement(e);
}
function Ti(e) {
	var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).ceFn, n = t === void 0 ? e.tag === "svg" ? Ci : wi : t;
	if (typeof e == "string") return z.createTextNode(e);
	var r = n(e.tag);
	return Object.keys(e.attributes || []).forEach(function(t) {
		r.setAttribute(t, e.attributes[t]);
	}), (e.children || []).forEach(function(e) {
		r.appendChild(Ti(e, { ceFn: n }));
	}), r;
}
function Ei(e) {
	var t = ` ${e.outerHTML} `;
	return t = `${t}Font Awesome fontawesome.com `, t;
}
var Di = {
	replace: function(e) {
		var t = e[0];
		if (t.parentNode) {
			if (e[1].forEach(function(e) {
				t.parentNode.insertBefore(Ti(e), t);
			}), t.getAttribute(ln) === null && U.keepOriginalSource) {
				var n = z.createComment(Ei(t));
				t.parentNode.replaceChild(n, t);
			} else t.remove();
		}
	},
	nest: function(e) {
		var t = e[0], n = e[1];
		if (~Wn(t).indexOf(U.replacementClass)) return Di.replace(e);
		var r = RegExp(`${U.cssPrefix}-.*`);
		if (delete n[0].attributes.id, n[0].attributes.class) {
			var i = n[0].attributes.class.split(" ").reduce(function(e, t) {
				return t === U.replacementClass || t.match(r) ? e.toSvg.push(t) : e.toNode.push(t), e;
			}, {
				toNode: [],
				toSvg: []
			});
			n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
		}
		var a = n.map(function(e) {
			return or(e);
		}).join("\n");
		t.setAttribute(ln, ""), t.innerHTML = a;
	}
};
function Oi(e) {
	e();
}
function ki(e, t) {
	var n = typeof t == "function" ? t : vi;
	if (e.length === 0) n();
	else {
		var r = Oi;
		U.mutateApproach === hn && (r = Me.requestAnimationFrame || Oi), r(function() {
			var t = Si(), r = _i.begin("mutate");
			e.map(t), r(), n();
		});
	}
}
var Ai = !1;
function ji() {
	Ai = !0;
}
function Mi() {
	Ai = !1;
}
var Ni = null;
function Pi(e) {
	if (Ne && U.observeMutations) {
		var t = e.treeCallback, n = t === void 0 ? vi : t, r = e.nodeCallback, i = r === void 0 ? vi : r, a = e.pseudoElementsCallback, o = a === void 0 ? vi : a, s = e.observeMutationsRoot, c = s === void 0 ? z : s;
		Ni = new Ne(function(e) {
			if (!Ai) {
				var t = J();
				Un(e).forEach(function(e) {
					if (e.type === "childList" && e.addedNodes.length > 0 && !yi(e.addedNodes[0]) && (U.searchPseudoElements && o(e.target), n(e.target)), e.type === "attributes" && e.target.parentNode && U.searchPseudoElements && o([e.target], !0), e.type === "attributes" && yi(e.target) && ~An.indexOf(e.attributeName)) {
						if (e.attributeName === "class" && bi(e.target)) {
							var r = Lr(Wn(e.target)), a = r.prefix, s = r.iconName;
							e.target.setAttribute(fn, a || t), s && e.target.setAttribute(pn, s);
						} else xi(e.target) && i(e.target);
					}
				});
			}
		}), B && Ni.observe(c, {
			childList: !0,
			attributes: !0,
			characterData: !0,
			subtree: !0
		});
	}
}
function Fi() {
	Ni && Ni.disconnect();
}
function Ii(e) {
	var t = e.getAttribute("style"), n = [];
	return t && (n = t.split(";").reduce(function(e, t) {
		var n = t.split(":"), r = n[0], i = n.slice(1);
		return r && i.length > 0 && (e[r] = i.join(":").trim()), e;
	}, {})), n;
}
function Li(e) {
	var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText === void 0 ? "" : e.innerText.trim(), i = Lr(Wn(e));
	return i.prefix ||= J(), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = Dr(i.prefix, e.innerText) || Er(i.prefix, ur(e.innerText))), !i.iconName && U.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function Ri(e) {
	return Un(e.attributes).reduce(function(e, t) {
		return e.name !== "class" && e.name !== "style" && (e[t.name] = t.value), e;
	}, {});
}
function zi() {
	return {
		iconName: null,
		prefix: null,
		transform: G,
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
function Bi(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 }, n = Li(e), r = n.iconName, i = n.prefix, a = n.rest, o = Ri(e), s = Jr("parseNodeAttributes", {}, e);
	return L({
		iconName: r,
		prefix: i,
		transform: G,
		mask: {
			iconName: null,
			prefix: null,
			rest: []
		},
		maskId: null,
		symbol: !1,
		extra: {
			classes: a,
			styles: t.styleParser ? Ii(e) : [],
			attributes: o
		}
	}, s);
}
var Vi = q.styles;
function Hi(e) {
	var t = U.autoReplaceSvg === "nest" ? Bi(e, { styleParser: !1 }) : Bi(e);
	return ~t.extra.classes.indexOf(On) ? Xr("generateLayersText", e, t) : Xr("generateSvgReplacementMutation", e, t);
}
function Ui() {
	return [].concat(R(Bt), R($t));
}
function Wi(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	if (!B) return Promise.resolve();
	var n = z.documentElement.classList, r = function(e) {
		return n.add(`${mn}-${e}`);
	}, i = function(e) {
		return n.remove(`${mn}-${e}`);
	}, a = U.autoFetchSvg ? Ui() : Ve.concat(Object.keys(Vi));
	a.includes("fa") || a.push("fa");
	var o = [`.${On}:not([${ln}])`].concat(a.map(function(e) {
		return `.${e}:not([${ln}])`;
	})).join(", ");
	if (o.length === 0) return Promise.resolve();
	var s = [];
	try {
		s = Un(e.querySelectorAll(o));
	} catch {}
	if (s.length > 0) r("pending"), i("complete");
	else return Promise.resolve();
	var c = _i.begin("onTree"), l = s.reduce(function(e, t) {
		try {
			var n = Hi(t);
			n && e.push(n);
		} catch (e) {
			vn || e.name === "MissingIcon" && console.error(e);
		}
		return e;
	}, []);
	return new Promise(function(e, n) {
		Promise.all(l).then(function(n) {
			ki(n, function() {
				r("active"), r("complete"), i("pending"), typeof t == "function" && t(), c(), e();
			});
		}).catch(function(e) {
			c(), n(e);
		});
	});
}
function Gi(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	Hi(e).then(function(e) {
		e && ki([e], t);
	});
}
function Ki(e) {
	return function(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : Zr(t || {}), i = n.mask;
		return i &&= (i || {}).icon ? i : Zr(i || {}), e(r, L(L({}, n), {}, { mask: i }));
	};
}
var qi = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.transform, r = n === void 0 ? G : n, i = t.symbol, a = i !== void 0 && i, o = t.mask, s = o === void 0 ? null : o, c = t.maskId, l = c === void 0 ? null : c, u = t.classes, d = u === void 0 ? [] : u, f = t.attributes, p = f === void 0 ? {} : f, m = t.styles, h = m === void 0 ? {} : m;
	if (e) {
		var g = e.prefix, _ = e.iconName, v = e.icon;
		return ei(L({ type: "icon" }, e), function() {
			return Yr("beforeDOMElementCreation", {
				iconDefinition: e,
				params: t
			}), ii({
				icons: {
					main: ci(v),
					mask: s ? ci(s.icon) : {
						found: !1,
						width: null,
						height: null,
						icon: {}
					}
				},
				prefix: g,
				iconName: _,
				transform: L(L({}, G), r),
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
}, Ji = {
	mixout: function() {
		return { icon: Ki(qi) };
	},
	hooks: function() {
		return { mutationObserverCallbacks: function(e) {
			return e.treeCallback = Wi, e.nodeCallback = Gi, e;
		} };
	},
	provides: function(e) {
		e.i2svg = function(e) {
			var t = e.node, n = t === void 0 ? z : t, r = e.callback;
			return Wi(n, r === void 0 ? function() {} : r);
		}, e.generateSvgReplacementMutation = function(e, t) {
			var n = t.iconName, r = t.prefix, i = t.transform, a = t.symbol, o = t.mask, s = t.maskId, c = t.extra;
			return new Promise(function(t, l) {
				Promise.all([di(n, r), o.iconName ? di(o.iconName, o.prefix) : Promise.resolve({
					found: !1,
					width: 512,
					height: 512,
					icon: {}
				})]).then(function(o) {
					var l = be(o, 2), u = l[0], d = l[1];
					t([e, ii({
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
			var t = e.children, n = e.attributes, r = e.main, i = e.transform, a = e.styles, o = qn(a);
			o.length > 0 && (n.style = o);
			var s;
			return Jn(i) && (s = Xr("generateAbstractTransformGrouping", {
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
}, Yi = { mixout: function() {
	return { layer: function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.classes, r = n === void 0 ? [] : n;
		return ei({ type: "layer" }, function() {
			Yr("beforeDOMElementCreation", {
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
				attributes: { class: [`${U.cssPrefix}-layers`].concat(R(r)).join(" ") },
				children: n
			}];
		});
	} };
} }, Xi = { mixout: function() {
	return { counter: function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.title, r = n === void 0 ? null : n, i = t.classes, a = i === void 0 ? [] : i, o = t.attributes, s = o === void 0 ? {} : o, c = t.styles, l = c === void 0 ? {} : c;
		return ei({
			type: "counter",
			content: e
		}, function() {
			return Yr("beforeDOMElementCreation", {
				content: e,
				params: t
			}), oi({
				content: e.toString(),
				title: r,
				extra: {
					attributes: s,
					styles: l,
					classes: [`${U.cssPrefix}-layers-counter`].concat(R(a))
				}
			});
		});
	} };
} }, Zi = {
	mixout: function() {
		return { text: function(e) {
			var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.transform, r = n === void 0 ? G : n, i = t.classes, a = i === void 0 ? [] : i, o = t.attributes, s = o === void 0 ? {} : o, c = t.styles, l = c === void 0 ? {} : c;
			return ei({
				type: "text",
				content: e
			}, function() {
				return Yr("beforeDOMElementCreation", {
					content: e,
					params: t
				}), ai({
					content: e,
					transform: L(L({}, G), r),
					extra: {
						attributes: s,
						styles: l,
						classes: [`${U.cssPrefix}-layers-text`].concat(R(a))
					}
				});
			});
		} };
	},
	provides: function(e) {
		e.generateLayersText = function(e, t) {
			var n = t.transform, r = t.extra, i = null, a = null;
			if (Fe) {
				var o = parseInt(getComputedStyle(e).fontSize, 10), s = e.getBoundingClientRect();
				i = s.width / o, a = s.height / o;
			}
			return Promise.resolve([e, ai({
				content: e.innerHTML,
				width: i,
				height: a,
				transform: n,
				extra: r,
				watchable: !0
			})]);
		};
	}
}, Qi = /* @__PURE__ */ RegExp("\"", "ug"), $i = [1105920, 1112319], ea = L(L(L(L({}, { FontAwesome: {
	normal: "fas",
	400: "fas"
} }), Lt), an), Wt), ta = Object.keys(ea).reduce(function(e, t) {
	return e[t.toLowerCase()] = ea[t], e;
}, {}), na = Object.keys(ta).reduce(function(e, t) {
	var n = ta[t];
	return e[t] = n[900] || R(Object.entries(n))[0][1], e;
}, {});
function ra(e) {
	return ur(R(e.replace(Qi, ""))[0] || "");
}
function ia(e) {
	var t = e.getPropertyValue("font-feature-settings").includes("ss01"), n = e.getPropertyValue("content").replace(Qi, ""), r = n.codePointAt(0), i = r >= $i[0] && r <= $i[1], a = n.length === 2 && n[0] === n[1];
	return i || a || t;
}
function aa(e, t) {
	var n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
	return (ta[n] || {})[i] || na[n];
}
function oa(e, t) {
	var n = `${dn}${t.replace(":", "-")}`;
	return new Promise(function(r, i) {
		if (e.getAttribute(n) !== null) return r();
		var a = Un(e.children).filter(function(e) {
			return e.getAttribute(un) === t;
		})[0], o = Me.getComputedStyle(e, t), s = o.getPropertyValue("font-family"), c = s.match(kn), l = o.getPropertyValue("font-weight"), u = o.getPropertyValue("content");
		if (a && !c) return e.removeChild(a), r();
		if (c && u !== "none" && u !== "") {
			var d = o.getPropertyValue("content"), f = aa(s, l), p = ra(d), m = c[0].startsWith("FontAwesome"), h = ia(o), g = Er(f, p), _ = g;
			if (m) {
				var v = Ar(p);
				v.iconName && v.prefix && (g = v.iconName, f = v.prefix);
			}
			if (g && !h && (!a || a.getAttribute(fn) !== f || a.getAttribute(pn) !== _)) {
				e.setAttribute(n, _), a && e.removeChild(a);
				var y = zi(), b = y.extra;
				b.attributes[un] = t, di(g, f).then(function(i) {
					var a = ii(L(L({}, y), {}, {
						icons: {
							main: i,
							mask: jr()
						},
						prefix: f,
						iconName: _,
						extra: b,
						watchable: !0
					})), o = z.createElementNS("http://www.w3.org/2000/svg", "svg");
					t === "::before" ? e.insertBefore(o, e.firstChild) : e.appendChild(o), o.outerHTML = a.map(function(e) {
						return or(e);
					}).join("\n"), e.removeAttribute(n), r();
				}).catch(i);
			} else r();
		} else r();
	});
}
function sa(e) {
	return Promise.all([oa(e, "::before"), oa(e, "::after")]);
}
function ca(e) {
	return e.parentNode !== document.head && !~gn.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(un) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
var la = function(e) {
	return !!e && _n.some(function(t) {
		return e.includes(t);
	});
}, ua = function(e) {
	if (!e) return [];
	var t = /* @__PURE__ */ new Set(), n = e.split(/,(?![^()]*\))/).map(function(e) {
		return e.trim();
	});
	n = n.flatMap(function(e) {
		return e.includes("(") ? e : e.split(",").map(function(e) {
			return e.trim();
		});
	});
	var r = me(n), i;
	try {
		for (r.s(); !(i = r.n()).done;) {
			var a = i.value;
			if (la(a)) {
				var o = _n.reduce(function(e, t) {
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
function da(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
	if (B) {
		var n;
		if (t) n = e;
		else if (U.searchPseudoElementsFullScan) n = e.querySelectorAll("*");
		else {
			var r = /* @__PURE__ */ new Set(), i = me(document.styleSheets), a;
			try {
				for (i.s(); !(a = i.n()).done;) {
					var o = a.value;
					try {
						var s = me(o.cssRules), c;
						try {
							for (s.s(); !(c = s.n()).done;) {
								var l = c.value, u = me(ua(l.selectorText)), d;
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
						U.searchPseudoElementsWarnings && console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
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
			var r = Un(n).filter(ca).map(sa), i = _i.begin("searchPseudoElements");
			ji(), Promise.all(r).then(function() {
				i(), Mi(), e();
			}).catch(function() {
				i(), Mi(), t();
			});
		});
	}
}
var fa = {
	hooks: function() {
		return { mutationObserverCallbacks: function(e) {
			return e.pseudoElementsCallback = da, e;
		} };
	},
	provides: function(e) {
		e.pseudoElements2svg = function(e) {
			var t = e.node, n = t === void 0 ? z : t;
			U.searchPseudoElements && da(n);
		};
	}
}, pa = !1, ma = {
	mixout: function() {
		return { dom: { unwatch: function() {
			ji(), pa = !0;
		} } };
	},
	hooks: function() {
		return {
			bootstrap: function() {
				Pi(Jr("mutationObserverCallbacks", {}));
			},
			noAuto: function() {
				Fi();
			},
			watch: function(e) {
				var t = e.observeMutationsRoot;
				pa ? Mi() : Pi(Jr("mutationObserverCallbacks", { observeMutationsRoot: t }));
			}
		};
	}
}, ha = function(e) {
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
			case "rotate": e.rotate += i;
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
}, ga = {
	mixout: function() {
		return { parse: { transform: function(e) {
			return ha(e);
		} } };
	},
	hooks: function() {
		return { parseNodeAttributes: function(e, t) {
			var n = t.getAttribute("data-fa-transform");
			return n && (e.transform = ha(n)), e;
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
				attributes: L({}, a.outer),
				children: [{
					tag: "g",
					attributes: L({}, a.inner),
					children: [{
						tag: t.icon.tag,
						children: t.icon.children,
						attributes: L(L({}, t.icon.attributes), a.path)
					}]
				}]
			};
		};
	}
}, _a = {
	x: 0,
	y: 0,
	width: "100%",
	height: "100%"
};
function va(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function ya(e) {
	return e.tag === "g" ? e.children : [e];
}
qr([
	tr,
	Ji,
	Yi,
	Xi,
	Zi,
	fa,
	ma,
	ga,
	{
		hooks: function() {
			return { parseNodeAttributes: function(e, t) {
				var n = t.getAttribute("data-fa-mask"), r = n ? Lr(n.split(" ").map(function(e) {
					return e.trim();
				})) : jr();
				return r.prefix ||= J(), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
			} };
		},
		provides: function(e) {
			e.generateAbstractMask = function(e) {
				var t = e.children, n = e.attributes, r = e.main, i = e.mask, a = e.maskId, o = e.transform, s = r.width, c = r.icon, l = i.width, u = i.icon, d = Yn({
					transform: o,
					containerWidth: l,
					iconWidth: s
				}), f = {
					tag: "rect",
					attributes: L(L({}, _a), {}, { fill: "white" })
				}, p = c.children ? { children: c.children.map(va) } : {}, m = {
					tag: "g",
					attributes: L({}, d.inner),
					children: [va(L({
						tag: c.tag,
						attributes: L(L({}, c.attributes), d.path)
					}, p))]
				}, h = {
					tag: "g",
					attributes: L({}, d.outer),
					children: [m]
				}, g = `mask-${a || Hn()}`, _ = `clip-${a || Hn()}`, v = {
					tag: "mask",
					attributes: L(L({}, _a), {}, {
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
						children: ya(u)
					}, v]
				};
				return t.push(y, {
					tag: "rect",
					attributes: L({
						fill: "currentColor",
						"clip-path": `url(#${_})`,
						mask: `url(#${g})`
					}, _a)
				}), {
					children: t,
					attributes: n
				};
			};
		}
	},
	{ provides: function(e) {
		var t = !1;
		Me.matchMedia && (t = Me.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
			var e = [], n = { fill: "currentColor" }, r = {
				attributeType: "XML",
				repeatCount: "indefinite",
				dur: "2s"
			};
			e.push({
				tag: "path",
				attributes: L(L({}, n), {}, { d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z" })
			});
			var i = L(L({}, r), {}, { attributeName: "opacity" }), a = {
				tag: "circle",
				attributes: L(L({}, n), {}, {
					cx: "256",
					cy: "364",
					r: "28"
				}),
				children: []
			};
			return t || a.children.push({
				tag: "animate",
				attributes: L(L({}, r), {}, {
					attributeName: "r",
					values: "28;14;28;28;14;28;"
				})
			}, {
				tag: "animate",
				attributes: L(L({}, i), {}, { values: "1;0;1;1;0;1;" })
			}), e.push(a), e.push({
				tag: "path",
				attributes: L(L({}, n), {}, {
					opacity: "1",
					d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
				}),
				children: t ? [] : [{
					tag: "animate",
					attributes: L(L({}, i), {}, { values: "1;0;0;0;0;1;" })
				}]
			}), t || e.push({
				tag: "path",
				attributes: L(L({}, n), {}, {
					opacity: "0",
					d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
				}),
				children: [{
					tag: "animate",
					attributes: L(L({}, i), {}, { values: "0;0;1;1;0;0;" })
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
			return e.symbol = n === null ? !1 : n === "" || n, e;
		} };
	} }
], { mixoutsTo: Y }), Y.noAuto;
var ba = Y.config;
Y.library, Y.dom;
var xa = Y.parse;
Y.findIconDefinition, Y.toHtml;
var Sa = Y.icon;
Y.layer, Y.text, Y.counter;
//#endregion
//#region node_modules/@fortawesome/react-fontawesome/dist/index.js
function Ca(e) {
	return e -= 0, e === e;
}
function wa(e) {
	return Ca(e) ? e : (e = e.replace(/[_-]+(.)?/g, (e, t) => t ? t.toUpperCase() : ""), e.charAt(0).toLowerCase() + e.slice(1));
}
var Ta = (t, n) => e.createElement("stop", {
	key: `${n}-${t.offset}`,
	offset: t.offset,
	stopColor: t.color,
	...t.opacity !== void 0 && { stopOpacity: t.opacity }
});
function Ea(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
var Da = /* @__PURE__ */ new Map(), Oa = 1e3;
function ka(e) {
	if (Da.has(e)) return Da.get(e);
	let t = {}, n = 0, r = e.length;
	for (; n < r;) {
		let i = e.indexOf(";", n), a = i === -1 ? r : i, o = e.slice(n, a).trim();
		if (o) {
			let e = o.indexOf(":");
			if (e > 0) {
				let n = o.slice(0, e).trim(), r = o.slice(e + 1).trim();
				if (n && r) {
					let e = wa(n);
					t[e.startsWith("webkit") ? Ea(e) : e] = r;
				}
			}
		}
		n = a + 1;
	}
	if (Da.size === Oa) {
		let e = Da.keys().next().value;
		e && Da.delete(e);
	}
	return Da.set(e, t), t;
}
function Aa(e, t, n = {}) {
	if (typeof t == "string") return t;
	let r = (t.children || []).map((t) => {
		let r = t;
		return ("fill" in n || n.gradientFill) && t.tag === "path" && "fill" in t.attributes && (r = {
			...t,
			attributes: {
				...t.attributes,
				fill: void 0
			}
		}), Aa(e, r);
	}), i = t.attributes || {}, a = {};
	for (let [e, t] of Object.entries(i)) switch (!0) {
		case e === "class":
			a.className = t;
			break;
		case e === "style":
			a.style = ka(String(t));
			break;
		case e.startsWith("aria-"):
		case e.startsWith("data-"):
			a[e.toLowerCase()] = t;
			break;
		default: a[wa(e)] = t;
	}
	let { style: o, role: s, "aria-label": c, gradientFill: l, ...u } = n;
	if (o && (a.style = a.style ? {
		...a.style,
		...o
	} : o), s && (a.role = s), c && (a["aria-label"] = c, a["aria-hidden"] = "false"), l) {
		a.fill = `url(#${l.id})`;
		let { type: t, stops: n = [], ...i } = l;
		r.unshift(e(t === "linear" ? "linearGradient" : "radialGradient", {
			...i,
			id: l.id
		}, n.map(Ta)));
	}
	return e(t.tag, {
		...a,
		...u
	}, ...r);
}
var ja = Aa.bind(null, e.createElement), Ma = (e, t) => {
	let n = s();
	return e || (t ? n : void 0);
}, Na = class {
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
var Pa = "searchPseudoElementsFullScan" in ba && typeof ba.searchPseudoElementsFullScan == "boolean" ? "7.0.0" : "6.0.0", Fa = Number.parseInt(Pa) >= 7, Ia = () => Fa, La = "fa", X = {
	beat: "fa-beat",
	fade: "fa-fade",
	beatFade: "fa-beat-fade",
	bounce: "fa-bounce",
	shake: "fa-shake",
	spin: "fa-spin",
	spinPulse: "fa-spin-pulse",
	spinReverse: "fa-spin-reverse",
	pulse: "fa-pulse",
	flip360: "fa-flip-360",
	buzz: "fa-buzz",
	float: "fa-float",
	jello: "fa-jello",
	spinSnap: "fa-spin-snap",
	spinSnap4: "fa-spin-snap-4",
	spinSnap8: "fa-spin-snap-8",
	swing: "fa-swing",
	wag: "fa-wag"
}, Ra = {
	left: "fa-pull-left",
	right: "fa-pull-right"
}, za = {
	90: "fa-rotate-90",
	180: "fa-rotate-180",
	270: "fa-rotate-270"
}, Ba = {
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
}, Z = {
	border: "fa-border",
	fixedWidth: "fa-fw",
	flip: "fa-flip",
	flipHorizontal: "fa-flip-horizontal",
	flipVertical: "fa-flip-vertical",
	inverse: "fa-inverse",
	rotateBy: "fa-rotate-by",
	swapOpacity: "fa-swap-opacity",
	widthAuto: "fa-width-auto",
	canvasSquare: "fa-canvas-square",
	canvasRoomy: "fa-canvas-roomy"
}, Va = { default: "fa-layers" };
function Ha(e) {
	let t = ba.cssPrefix || ba.familyPrefix || La;
	return t === La ? e : e.replace(new RegExp(String.raw`(?<=^|\s)${La}-`, "g"), `${t}-`);
}
function Ua(e) {
	let { beat: t, fade: n, beatFade: r, bounce: i, shake: a, spin: o, spinPulse: s, spinReverse: c, pulse: l, fixedWidth: u, inverse: d, border: f, flip: p, size: m, rotation: h, pull: g, swapOpacity: _, rotateBy: v, widthAuto: y, canvasSquare: b, canvasRoomy: x, flip360: S, buzz: C, float: w, jello: T, spinSnap: E, spinSnap4: D, spinSnap8: O, swing: k, wag: ee, className: A } = e, j = [];
	return A && j.push(...A.split(" ")), t && j.push(X.beat), n && j.push(X.fade), r && j.push(X.beatFade), i && j.push(X.bounce), a && j.push(X.shake), o && j.push(X.spin), c && j.push(X.spinReverse), s && j.push(X.spinPulse), l && j.push(X.pulse), u && j.push(Z.fixedWidth), d && j.push(Z.inverse), f && j.push(Z.border), p === !0 && j.push(Z.flip), (p === "horizontal" || p === "both") && j.push(Z.flipHorizontal), (p === "vertical" || p === "both") && j.push(Z.flipVertical), m != null && j.push(Ba[m]), h != null && h !== 0 && j.push(za[h]), g != null && j.push(Ra[g]), _ && j.push(Z.swapOpacity), Ia() ? (v && j.push(Z.rotateBy), y && j.push(Z.widthAuto), b && j.push(Z.canvasSquare), x && j.push(Z.canvasRoomy), S && j.push(X.flip360), C && j.push(X.buzz), w && j.push(X.float), T && j.push(X.jello), E && j.push(X.spinSnap), D && j.push(X.spinSnap4), O && j.push(X.spinSnap8), k && j.push(X.swing), ee && j.push(X.wag), (ba.cssPrefix || ba.familyPrefix || La) === La ? j : j.map(Ha)) : j;
}
var Wa = (e) => typeof e == "object" && "icon" in e && !!e.icon;
function Ga(e) {
	if (e) return Wa(e) ? e : xa.icon(e);
}
function Ka(e) {
	return Object.keys(e);
}
var qa = new Na("FontAwesomeIcon"), Ja = {
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
	widthAuto: !1,
	canvasSquare: !1,
	canvasRoomy: !1,
	flip360: !1,
	buzz: !1,
	float: !1,
	jello: !1,
	spinSnap: !1,
	spinSnap4: !1,
	spinSnap8: !1,
	swing: !1,
	wag: !1
}, Ya = new Set(Object.keys(Ja)), Q = e.forwardRef((e, t) => {
	let n = {
		...Ja,
		...e
	}, { icon: r, mask: i, symbol: a, title: o, titleId: s, maskId: c, transform: l } = n, u = Ma(c, !!i), d = Ma(s, !!o), f = Ga(r);
	if (!f) return qa.error("Icon lookup is undefined", r), null;
	let p = Ua(n), m = typeof l == "string" ? xa.transform(l) : l, h = Ga(i), g = Sa(f, {
		...p.length > 0 && { classes: p },
		...m && { transform: m },
		...h && { mask: h },
		symbol: a,
		title: o,
		titleId: d,
		maskId: u
	});
	if (!g) return qa.error("Could not find icon", f), null;
	let { abstract: _ } = g, v = { ref: t };
	for (let e of Ka(n)) Ya.has(e) || (v[e] = n[e]);
	return ja(_[0], v);
});
Q.displayName = "FontAwesomeIcon", `${Va.default}${Z.fixedWidth}`;
//#endregion
//#region components/pagination/Pager.jsx
var Xa = {
	changePage: u.func.isRequired,
	totalItems: u.number.isRequired,
	currentPage: u.number.isRequired,
	pageSize: u.number.isRequired,
	hideLast: u.bool
}, Za = class extends e.Component {
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
				children: oe(a, 0)
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
				children: oe(e, 0)
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
						children: /* @__PURE__ */ S(Q, { icon: "angle-left" })
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
						children: /* @__PURE__ */ S(Q, { icon: "angle-right" })
					})
				})
			]
		});
	}
};
Za.propTypes = Xa;
//#endregion
//#region components/pagination/LimitSelector.jsx
var Qa = {
	changeLimit: u.func.isRequired,
	pageSize: u.number,
	limitList: u.arrayOf(u.number),
	label: u.string
}, $a = ({ changeLimit: e, pageSize: t = 10, limitList: n = [
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
$a.propTypes = Qa;
//#endregion
//#region components/pagination/GoToPage.jsx
var eo = {
	changePage: u.func.isRequired,
	totalPages: u.number,
	id: u.string
}, to = ({ changePage: e, totalPages: t = 1, id: n = "usa-dt-pagination-go-to" }) => {
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
to.propTypes = eo;
//#endregion
//#region components/pagination/Pagination.jsx
var no = {
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
}, ro = ({ changePage: t, totalItems: n, currentPage: r = 1, pageSize: i = 10, resultsText: a = !1, limitSelector: o = !1, changeLimit: s = () => {}, goToPage: c = !1, id: l, hideLast: u = !1 }) => {
	let d = Math.ceil(n / i), f = () => {
		if (e.isValidElement(a)) return a;
		if (a) {
			let e = se(r, i, n), t = oe(e.start, 0), a = oe(e.end, 0), o = oe(n, 0);
			return /* @__PURE__ */ S("div", {
				className: "usa-dt-pagination__totals",
				children: `${t}-${a} of ${o} results`
			});
		}
		return null;
	}, p = o ? /* @__PURE__ */ S($a, {
		changeLimit: s,
		pageSize: i
	}) : null, m = c ? /* @__PURE__ */ S(to, {
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
				/* @__PURE__ */ S(Za, {
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
ro.propTypes = no;
//#endregion
//#region components/Picker.jsx
var io = "usa-dt-picker__button-icon--svg", ao = {
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
}, oo = (e, t, n) => e.name === n ? -1 : t.name === n ? 1 : e.name < t.name ? -1 : +(e.name > t.name), so = ({ className: e = "", id: t = "", options: n, selectedOption: r, icon: i = null, sortFn: a = oo, isFixedWidth: s = !1, children: u, dropdownDirection: d = "right", backgroundColor: f = "#1a4480", notEnabled: p, buttonClassNames: m = "", pickerListClassNames: h = "" }) => {
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
			v && g.current && !g.current.contains(e.target) && e.target.id !== `${t}-${io}` && e.target.parentNode.id !== `${t}-${io}` && y(!1);
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
					children: [!v && /* @__PURE__ */ S(Q, {
						id: `${t}-${io}`,
						icon: "chevron-down",
						alt: "Toggle menu",
						color: "#555"
					}), v && /* @__PURE__ */ S(Q, {
						id: `${t}-${io}`,
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
so.propTypes = ao;
//#endregion
//#region components/quarterPicker/QuarterButton.jsx
var co = {
	disabled: u.bool,
	active: u.bool,
	showPeriods: u.bool,
	quarter: u.string,
	handleSelection: u.func,
	handleHover: u.func,
	handleBlur: u.func,
	toggleTooltip: u.func,
	title: u.string
}, lo = ({ disabled: e, active: t, quarter: n, handleSelection: r, toggleTooltip: i, title: a = "", handleHover: o, handleBlur: s, showPeriods: c = !1 }) => {
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
lo.propTypes = co;
//#endregion
//#region components/quarterPicker/QuarterPicker.jsx
var uo = (e = []) => {
	let [t, n] = l(e);
	return [t, (e) => {
		let r = parseInt(e, 10), i = t.map((e) => parseInt(e, 10)).filter((e) => e <= r).map((e) => `${e}`);
		n(i.concat([e]));
	}];
}, fo = [
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
], po = (e, t) => t.some((t) => parseInt(t, 10) >= parseInt(e, 10)), mo = {
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
}, ho = ({ handleSelection: e, disabledQuarters: t = [], disabledPeriods: n = [], periodsPerQuarter: r = fo, selectedQuarters: i = [], selectedPeriods: a = [], showPeriods: o = !1, isCumulative: s = !1 }) => {
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
					let t = r[u], i = t.every((e) => n.includes(e.id));
					return /* @__PURE__ */ C("li", {
						className: "usa-dt-quarter-picker__list-item usa-dt-quarter-picker__period-list-container",
						children: [/* @__PURE__ */ S("p", {
							className: i ? "disabled" : "",
							children: `Q${f}`
						}), /* @__PURE__ */ S("ul", {
							className: "usa-dt-quarter-picker__period-list",
							children: t.map((t) => /* @__PURE__ */ S("li", {
								className: Object.keys(t).includes("className") ? `${t.className} usa-dt-quarter-picker__list-item` : "usa-dt-quarter-picker__list-item",
								children: /* @__PURE__ */ S(lo, {
									showPeriods: o,
									quarter: t.id,
									title: t.title,
									disabled: n.includes(t.id),
									active: po(t.id, a) || parseInt(c, 10) >= parseInt(t.id, 10),
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
					children: /* @__PURE__ */ S(lo, {
						quarter: h,
						disabled: t.includes(h),
						active: s ? po(h, i) || parseInt(d, 10) >= f : i.includes(h) || d === h,
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
ho.propTypes = mo;
//#endregion
//#region helpers/searchBarHelper.js
var go = (e, t, n) => !(e && t === e || t && e.length < n), _o = (e, t) => !(!t || e.target.value), vo = {
	onSearch: u.func,
	minChars: u.number,
	isDisabled: u.bool,
	throttleOnChange: u.number,
	inputTitle: u.string,
	placeholder: u.string
}, yo = ({ onSearch: e, minChars: t = 2, isDisabled: n = !1, throttleOnChange: r = 500, inputTitle: i = "Search Input", placeholder: a = "" }) => {
	let [o, s] = l(""), [c, u] = l(""), d = () => {
		s(""), e(""), u("");
	}, f = v((e) => _o(e, c) ? d() : s(e.target.value), r), p = () => {
		let t = o.trim();
		e(t), s(t), u(t);
	}, m = (e) => (e.preventDefault(), go(o, c, t) ? p() : d()), h = "search";
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
			children: /* @__PURE__ */ S(Q, { icon: h })
		})]
	});
};
yo.propTypes = vo;
//#endregion
//#region components/messages/GenericMessage.jsx
var bo = {
	title: u.string.isRequired,
	description: u.string,
	icon: u.object,
	className: u.string
}, xo = ({ icon: e, title: t, description: n, className: r }) => /* @__PURE__ */ C("div", {
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
xo.propTypes = bo;
//#endregion
//#region components/messages/ErrorMessage.jsx
var So = { description: u.string }, Co = ({ description: e = "Something went wrong while gathering your data." }) => /* @__PURE__ */ S(xo, {
	description: e,
	title: "An error occurred",
	icon: /* @__PURE__ */ S(Q, { icon: "exclamation-triangle" }),
	className: "error"
});
Co.propTypes = So;
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
function wo() {
	return wo = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, wo.apply(null, arguments);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function To(e, t) {
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
function Eo(e, t) {
	return Eo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, Eo(e, t);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function Do(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Eo(e, t);
}
//#endregion
//#region node_modules/dom-helpers/esm/hasClass.js
function Oo(e, t) {
	return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
//#endregion
//#region node_modules/dom-helpers/esm/addClass.js
function ko(e, t) {
	e.classList ? e.classList.add(t) : Oo(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
//#endregion
//#region node_modules/dom-helpers/esm/removeClass.js
function Ao(e, t) {
	return e.replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function jo(e, t) {
	e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Ao(e.className, t) : e.setAttribute("class", Ao(e.className && e.className.baseVal || "", t));
}
//#endregion
//#region node_modules/react-transition-group/esm/config.js
var Mo = { disabled: !1 }, No = process.env.NODE_ENV === "production" ? null : u.oneOfType([u.number, u.shape({
	enter: u.number,
	exit: u.number,
	appear: u.number
}).isRequired]), Po = process.env.NODE_ENV === "production" ? null : u.oneOfType([
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
]), Fo = e.createContext(null), Io = function(e) {
	return e.scrollTop;
}, Lo = "unmounted", Ro = "exited", zo = "entering", Bo = "entered", Vo = "exiting", $ = /*#__PURE__*/ function(t) {
	Do(n, t);
	function n(e, n) {
		var r = t.call(this, e, n) || this, i = n, a = i && !i.isMounting ? e.enter : e.appear, o;
		return r.appearStatus = null, e.in ? a ? (o = Ro, r.appearStatus = zo) : o = Bo : o = e.unmountOnExit || e.mountOnEnter ? Lo : Ro, r.state = { status: o }, r.nextCallback = null, r;
	}
	n.getDerivedStateFromProps = function(e, t) {
		return e.in && t.status === "unmounted" ? { status: Ro } : null;
	};
	var r = n.prototype;
	return r.componentDidMount = function() {
		this.updateStatus(!0, this.appearStatus);
	}, r.componentDidUpdate = function(e) {
		var t = null;
		if (e !== this.props) {
			var n = this.state.status;
			this.props.in ? n !== "entering" && n !== "entered" && (t = zo) : (n === "entering" || n === "entered") && (t = Vo);
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
		if (e === void 0 && (e = !1), t !== null) {
			if (this.cancelNextCallback(), t === "entering") {
				if (this.props.unmountOnExit || this.props.mountOnEnter) {
					var n = this.props.nodeRef ? this.props.nodeRef.current : w.findDOMNode(this);
					n && Io(n);
				}
				this.performEnter(e);
			} else this.performExit();
		} else this.props.unmountOnExit && this.state.status === "exited" && this.setState({ status: Lo });
	}, r.performEnter = function(e) {
		var t = this, n = this.props.enter, r = this.context ? this.context.isMounting : e, i = this.props.nodeRef ? [r] : [w.findDOMNode(this), r], a = i[0], o = i[1], s = this.getTimeouts(), c = r ? s.appear : s.enter;
		!e && !n || Mo.disabled ? this.safeSetState({ status: Bo }, function() {
			t.props.onEntered(a);
		}) : (this.props.onEnter(a, o), this.safeSetState({ status: zo }, function() {
			t.props.onEntering(a, o), t.onTransitionEnd(c, function() {
				t.safeSetState({ status: Bo }, function() {
					t.props.onEntered(a, o);
				});
			});
		}));
	}, r.performExit = function() {
		var e = this, t = this.props.exit, n = this.getTimeouts(), r = this.props.nodeRef ? void 0 : w.findDOMNode(this);
		!t || Mo.disabled ? this.safeSetState({ status: Ro }, function() {
			e.props.onExited(r);
		}) : (this.props.onExit(r), this.safeSetState({ status: Vo }, function() {
			e.props.onExiting(r), e.onTransitionEnd(n.exit, function() {
				e.safeSetState({ status: Ro }, function() {
					e.props.onExited(r);
				});
			});
		}));
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
		if (!n || r) setTimeout(this.nextCallback, 0);
		else {
			if (this.props.addEndListener) {
				var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback], a = i[0], o = i[1];
				this.props.addEndListener(a, o);
			}
			e != null && setTimeout(this.nextCallback, e);
		}
	}, r.render = function() {
		var t = this.state.status;
		if (t === "unmounted") return null;
		var n = this.props, r = n.children;
		n.in, n.mountOnEnter, n.unmountOnExit, n.appear, n.enter, n.exit, n.timeout, n.addEndListener, n.onEnter, n.onEntering, n.onEntered, n.onExit, n.onExiting, n.onExited, n.nodeRef;
		var i = To(n, [
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
		return /*#__PURE__*/ e.createElement(Fo.Provider, { value: null }, typeof r == "function" ? r(t, i) : e.cloneElement(e.Children.only(r), i));
	}, n;
}(e.Component);
$.contextType = Fo, $.propTypes = process.env.NODE_ENV === "production" ? {} : {
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
		var t = No;
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
function Ho() {}
$.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: Ho,
	onEntering: Ho,
	onEntered: Ho,
	onExit: Ho,
	onExiting: Ho,
	onExited: Ho
}, $.UNMOUNTED = Lo, $.EXITED = Ro, $.ENTERING = zo, $.ENTERED = Bo, $.EXITING = Vo;
//#endregion
//#region node_modules/react-transition-group/esm/CSSTransition.js
var Uo = function(e, t) {
	return e && t && t.split(" ").forEach(function(t) {
		return ko(e, t);
	});
}, Wo = function(e, t) {
	return e && t && t.split(" ").forEach(function(t) {
		return jo(e, t);
	});
}, Go = /*#__PURE__*/ function(t) {
	Do(n, t);
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
		t === "appear" && n === "done" && i && (r += " " + i), n === "active" && e && Io(e), r && (this.appliedClasses[t][n] = r, Uo(e, r));
	}, r.removeClasses = function(e, t) {
		var n = this.appliedClasses[t], r = n.base, i = n.active, a = n.done;
		this.appliedClasses[t] = {}, r && Wo(e, r), i && Wo(e, i), a && Wo(e, a);
	}, r.render = function() {
		var t = this.props;
		t.classNames;
		var n = To(t, ["classNames"]);
		return /*#__PURE__*/ e.createElement($, wo({}, n, {
			onEnter: this.onEnter,
			onEntered: this.onEntered,
			onEntering: this.onEntering,
			onExit: this.onExit,
			onExiting: this.onExiting,
			onExited: this.onExited
		}));
	}, n;
}(e.Component);
Go.defaultProps = { classNames: "" }, Go.propTypes = process.env.NODE_ENV === "production" ? {} : wo({}, $.propTypes, {
	classNames: Po,
	onEnter: u.func,
	onEntering: u.func,
	onEntered: u.func,
	onExit: u.func,
	onExiting: u.func,
	onExited: u.func
});
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function Ko(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
//#endregion
//#region node_modules/react-transition-group/esm/utils/ChildMapping.js
function qo(e, n) {
	var r = function(e) {
		return n && i(e) ? n(e) : e;
	}, a = Object.create(null);
	return e && t.map(e, function(e) {
		return e;
	}).forEach(function(e) {
		a[e.key] = r(e);
	}), a;
}
function Jo(e, t) {
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
function Yo(e, t, n) {
	return n[t] == null ? e.props[t] : n[t];
}
function Xo(e, t) {
	return qo(e.children, function(r) {
		return n(r, {
			onExited: t.bind(null, r),
			in: !0,
			appear: Yo(r, "appear", e),
			enter: Yo(r, "enter", e),
			exit: Yo(r, "exit", e)
		});
	});
}
function Zo(e, t, r) {
	var a = qo(e.children), o = Jo(t, a);
	return Object.keys(o).forEach(function(s) {
		var c = o[s];
		if (i(c)) {
			var l = s in t, u = s in a, d = t[s], f = i(d) && !d.props.in;
			u && (!l || f) ? o[s] = n(c, {
				onExited: r.bind(null, c),
				in: !0,
				exit: Yo(c, "exit", e),
				enter: Yo(c, "enter", e)
			}) : !u && l && !f ? o[s] = n(c, { in: !1 }) : u && l && i(d) && (o[s] = n(c, {
				onExited: r.bind(null, c),
				in: d.props.in,
				exit: Yo(c, "exit", e),
				enter: Yo(c, "enter", e)
			}));
		}
	}), o;
}
//#endregion
//#region node_modules/react-transition-group/esm/TransitionGroup.js
var Qo = Object.values || function(e) {
	return Object.keys(e).map(function(t) {
		return e[t];
	});
}, $o = {
	component: "div",
	childFactory: function(e) {
		return e;
	}
}, es = /*#__PURE__*/ function(t) {
	Do(n, t);
	function n(e, n) {
		var r = t.call(this, e, n) || this;
		return r.state = {
			contextValue: { isMounting: !0 },
			handleExited: r.handleExited.bind(Ko(r)),
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
			children: t.firstRender ? Xo(e, r) : Zo(e, n, r),
			firstRender: !1
		};
	}, r.handleExited = function(e, t) {
		var n = qo(this.props.children);
		e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
			var n = wo({}, t.children);
			return delete n[e.key], { children: n };
		}));
	}, r.render = function() {
		var t = this.props, n = t.component, r = t.childFactory, i = To(t, ["component", "childFactory"]), a = this.state.contextValue, o = Qo(this.state.children).map(r);
		return delete i.appear, delete i.enter, delete i.exit, n === null ? /*#__PURE__*/ e.createElement(Fo.Provider, { value: a }, o) : /*#__PURE__*/ e.createElement(Fo.Provider, { value: a }, /*#__PURE__*/ e.createElement(n, i, o));
	}, n;
}(e.Component);
es.propTypes = process.env.NODE_ENV === "production" ? {} : {
	component: u.any,
	children: u.node,
	appear: u.bool,
	enter: u.bool,
	exit: u.bool,
	childFactory: u.func
}, es.defaultProps = $o;
//#endregion
//#region components/messages/LoadingMessage.jsx
var ts = ({ loadingText: e = "Gathering your data..." }) => /* @__PURE__ */ S(es, {
	className: "usda-message usda-message_loading",
	children: /* @__PURE__ */ S(Go, {
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
ts.propTypes = { loadingText: u.string };
//#endregion
//#region components/messages/NoResultsMessage.jsx
var ns = () => /* @__PURE__ */ S(xo, {
	title: "No Results",
	description: "No available data to display.",
	className: "no-results"
}), rs = {
	data: u.object,
	columns: u.array,
	oddClass: u.string,
	divider: u.string
}, is = ({ data: e, columns: t, oddClass: n, divider: r }) => {
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
					children: /* @__PURE__ */ S(Q, { icon: o })
				}), e.name]
			})
		}, b()) : /* @__PURE__ */ S("td", {
			className: `usda-table__cell${n === "name" ? " usda-table__cell_name" : ""}${t[r].right ? " usda-table__cell_right" : ""}`,
			"data-label": d(t[r]),
			children: e[n]
		}, b()))
	}), e.children && i ? /* @__PURE__ */ C(x, { children: [r && u, e.children.map((r, i) => {
		let a = i === e.children.length - 1 ? " usda-table__child-row_last" : "";
		return /* @__PURE__ */ S("tr", {
			className: `usda-table__child-row${a}${n}`,
			children: s.map((e, n) => /* @__PURE__ */ S("td", {
				className: `usda-table__cell ${t[n].right ? " usda-table__cell_right" : ""} usda-table__cell_child`,
				"data-label": d(t[n], !0),
				children: /* @__PURE__ */ S("div", {
					className: "usda-table__child-cell-content",
					children: r[e]
				})
			}, b()))
		}, b());
	})] }) : null] });
};
is.propTypes = rs;
//#endregion
//#region components/table/TableHeader.jsx
var as = ({ clickedSort: e, displayName: t, currentSort: n, title: r }) => {
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
			children: /* @__PURE__ */ S(Q, {
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
			children: /* @__PURE__ */ S(Q, {
				size: "2x",
				icon: "caret-down"
			})
		})]
	});
};
as.propTypes = {
	title: u.string.isRequired,
	displayName: u.oneOfType([u.string, u.element]).isRequired,
	currentSort: p({
		direction: d(["asc", "desc"]),
		field: u.string
	}).isRequired,
	clickedSort: u.func.isRequired
};
var os = {
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
}, ss = ({ title: e, className: t = "", displayName: n = "", currentSort: r, updateSort: i, right: a, columnSpan: o = "1", rowSpan: s, subColumnNames: c = [], icon: l = /* @__PURE__ */ S(x, {}), bodyHeader: u = !1, stickyFirstColumn: d = !1, columnWidth: f, highlightedColumns: p, index: m, isMobile: h = !1, isStacked: g = !1 }) => {
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
					i && !c.length && n && /* @__PURE__ */ S(as, {
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
					i && !c.length && n && /* @__PURE__ */ S(as, {
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
ss.propTypes = os;
var cs = {
	prefix: "fas",
	iconName: "file-arrow-down",
	icon: [
		384,
		512,
		["file-download"],
		"f56d",
		"M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM175 441c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-86.1c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 86.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64z"
	]
}, ls = {
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
}, us = {
	prefix: "fas",
	iconName: "link",
	icon: [
		576,
		512,
		[128279, "chain"],
		"f0c1",
		"M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"
	]
}, ds = {
	prefix: "fas",
	iconName: "spinner",
	icon: [
		512,
		512,
		[],
		"f110",
		"M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z"
	]
}, fs = {
	prefix: "fas",
	iconName: "circle-check",
	icon: [
		512,
		512,
		[61533, "check-circle"],
		"f058",
		"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"
	]
}, ps = {
	prefix: "fas",
	iconName: "angles-right",
	icon: [
		448,
		512,
		[187, "angle-double-right"],
		"f101",
		"M439.1 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L371.2 256 233.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L179.2 256 41.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
	]
}, ms = {
	row: u.array,
	columns: u.array,
	iValue: u.number,
	atMaxLevel: u.bool
}, hs = (e) => {
	let [t, n] = l(!1), r = (e) => {
		e.stopPropagation(), n(!t);
	}, i = e.atMaxLevel ? null : /* @__PURE__ */ C("div", {
		className: "usda-table__cell usda-table__cell_right button-type__text-left-icon-light",
		children: [
			"View next level",
			" ",
			/* @__PURE__ */ S(Q, { icon: ps })
		]
	});
	return (e.columns.length >= 6 ? /* @__PURE__ */ C("div", {
		className: `collapsible-row-div ${t ? "row-opened" : ""}`,
		children: [t && /* @__PURE__ */ S("div", {
			className: "collapsible-row--content",
			children: /* @__PURE__ */ S("div", {
				className: "collapsible-row--content-wrapper",
				children: e.row.map((t, n) => {
					if (n >= 6) return e.columns[n]?.bodyHeader ? /* @__PURE__ */ S(ss, {
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
				children: [t ? "Collapse additional details" : "View additional details", t ? /* @__PURE__ */ S(Q, {
					className: "chevron",
					icon: "chevron-up"
				}) : /* @__PURE__ */ S(Q, {
					className: "chevron",
					icon: "chevron-down"
				})]
			})
		})]
	}) : null) || i;
};
hs.propTypes = ms;
//#endregion
//#region components/table/TableData.jsx
var gs = {
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
}, _s = ({ columns: e, rows: t, rowHeight: n, expandable: r, divider: i, onClickHandler: a, isMobile: s, atMaxLevel: c, stickyFirstColumn: u = !1, highlightedColumns: d, isStacked: f, newMobileView: p = !1 }) => {
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
				if (n < 6) return e[n]?.bodyHeader ? /* @__PURE__ */ S(ss, {
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
								/* @__PURE__ */ S(Q, { icon: "arrow-right" })
							]
						}) : t
					})]
				}, b());
			}), /* @__PURE__ */ S("div", { children: /* @__PURE__ */ S(hs, {
				row: t,
				columns: e,
				iValue: r,
				atMaxLevel: c
			}) })]
		}, b()))
	}) : /* @__PURE__ */ S(x, { children: t.map((t, a) => {
		let o = a % 2 == 0 ? "" : " usda-table__row_odd";
		return r ? /* @__PURE__ */ S(is, {
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
			children: t.map((t, n) => e[n]?.bodyHeader ? /* @__PURE__ */ S(ss, {
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
						/* @__PURE__ */ S(Q, { icon: "arrow-right" })
					]
				}) : t })]
			}, b()))
		}, b());
	}) });
};
_s.propTypes = gs;
//#endregion
//#region components/table/Table.jsx
var vs = {
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
}, ys = ({ columns: e, rows: t, rowHeight: n, headerRowHeight: r, currentSort: i, classNames: a = "", updateSort: o, expandable: s, divider: c, loading: l, error: u, message: d, isStacked: f = !1, screenReaderCaption: p, onClickHandler: m, isMobile: h, stickyFirstColumn: g = !1, highlightedColumns: _, atMaxLevel: v = !1, newMobileView: w = !1 }) => {
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
		children: /* @__PURE__ */ S(ts, {})
	}) }) : u ? /* @__PURE__ */ S("tr", { children: /* @__PURE__ */ S("td", {
		className: "usda-table__message-cell",
		colSpan: e.length,
		children: /* @__PURE__ */ S(Co, { description: d })
	}) }) : !t || t.length === 0 ? /* @__PURE__ */ S("tr", { children: /* @__PURE__ */ S("td", {
		className: "usda-table__message-cell",
		colSpan: e.length,
		children: /* @__PURE__ */ S(ns, { description: d })
	}) }) : /* @__PURE__ */ S(_s, {
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
		}), /* @__PURE__ */ S(so, {
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
					children: e.map((e, t) => /* @__PURE__ */ S(ss, {
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
					}]), []).map((e, t) => /* @__PURE__ */ S(ss, {
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
					children: e.map((e, t) => /* @__PURE__ */ S(ss, {
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
					}]), []).map((e, t) => /* @__PURE__ */ S(ss, {
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
ys.propTypes = vs;
//#endregion
//#region styles/components/infoTooltip/_tooltipWrapper.scss
var bs = /* @__PURE__ */ M((/* @__PURE__ */ A(((e, t) => {
	(function() {
		var e = {}.hasOwnProperty;
		function n() {
			for (var e = "", t = 0; t < arguments.length; t++) {
				var n = arguments[t];
				n && (e = i(e, r(n)));
			}
			return e;
		}
		function r(t) {
			if (typeof t == "string" || typeof t == "number") return t;
			if (typeof t != "object") return "";
			if (Array.isArray(t)) return n.apply(null, t);
			if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
			var r = "";
			for (var a in t) e.call(t, a) && t[a] && (r = i(r, a));
			return r;
		}
		function i(e, t) {
			return t ? e ? e + " " + t : e + t : e;
		}
		t !== void 0 && t.exports ? (n.default = n, t.exports = n) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
			return n;
		}) : window.classNames = n;
	})();
})))(), 1), xs = {
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
}, Ss = 375, Cs = ({ className: e = null, children: t = null, tooltipComponent: n = null, tooltipPosition: r = "right", wide: i = !1, icon: a = "", width: s = Ss, controlledProps: u = {
	isControlled: !1,
	showTooltip: () => {},
	closeTooltip: () => {},
	isVisible: !1
}, offsetAdjustments: d = {
	top: -15,
	right: 0,
	left: 0
}, styles: f = {}, onMouseMoveTooltip: p, onMouseLeaveTooltip: m }) => {
	let [h, g] = l(!1), [_, y] = l(!1), x = c(), w = c(""), T = c({}), E = { info: /* @__PURE__ */ S(Q, {
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
	}, A = () => {
		let { right: e, left: t, total: n } = ee(), a = e > t ? e : t;
		return n < 425 ? n - 10 : r === "bottom" ? s : i ? a > 800 ? 700 : a - 5 : s;
	}, j = (e, t) => e ? {
		top: `${x.current.clientHeight + x.current.offsetTop + 8}px`,
		widthVar: t,
		left: `${x.current.clientWidth / 2 - 8}px`
	} : {
		...T.current,
		widthVar: t
	}, M = () => {
		if (Object.keys(f).includes("transform") && x.current) r === "bottom" && (w.current = "bottom"), T.current = { width: A() };
		else if (x.current) {
			let e = A(), { left: t, total: n, right: i } = ee(), a = x.current.offsetTop + d.top, o = n < 700;
			if (r === "bottom" || o) w.current = "bottom", T.current = { ...j(o, e) };
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
	}, N = () => {
		u.isControlled ? u.showTooltip() : h || g(!0);
	}, P = () => {
		u.isControlled ? u.closeTooltip() : h && g(!1);
	}, te = u.isControlled && u.isVisible || h || _, F = null;
	return te && (F = /* @__PURE__ */ S("div", {
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
	})), o(() => (window.addEventListener("scroll", v(M, 500)), window.addEventListener("resize", v(M, 100)), u.isControlled || document?.getElementById(D)?.addEventListener("mousemove", v(M, 500)), () => {
		window.removeEventListener("scroll", M), window.removeEventListener("resize", M), u.isControlled || document?.getElementById(D)?.addEventListener("mousemove", M);
	}), []), o(() => {
		M();
	}, [x.current]), /* @__PURE__ */ S("div", {
		id: D,
		className: (0, bs.default)({
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
				onBlur: P,
				onFocus: N,
				onKeyPress: N,
				onMouseEnter: N,
				onMouseLeave: P,
				onClick: N,
				children: [t, a && E[a]]
			}), F]
		})
	});
};
Cs.propTypes = xs;
//#endregion
//#region components/infoTooltip/TooltipComponent.jsx
var ws = {
	title: u.string.isRequired,
	children: u.node.isRequired,
	className: u.string,
	textAlign: u.shape({
		title: u.oneOf(["center", "left"]),
		text: u.oneOf(["center", "left"])
	})
}, Ts = ({ children: e, title: t, className: n = null, textAlign: r = {
	title: "left",
	text: "left"
} }) => /* @__PURE__ */ C("div", {
	className: (0, bs.default)({ [n]: n !== null }),
	children: [/* @__PURE__ */ S("h1", {
		className: (0, bs.default)("tooltip__title", r.title),
		children: t
	}), /* @__PURE__ */ S("div", {
		className: (0, bs.default)("tooltip__text", r.text),
		children: e
	})]
});
Ts.propTypes = ws;
//#endregion
//#region helpers/keyboardEventsHelper.js
var Es = (e, t = [], n = [13, 32]) => (r) => {
	n.includes(r.keyCode) && e(...t);
}, Ds = {
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
}, Os = (e) => {
	let t = c(null), n = () => {
		e.enabled && (t?.current && t.current?.scrollIntoView && t.current?.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center"
		}), e.switchTab(e.internal));
	}, r = Es(n);
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
							"aria-label": `Count of ${ae(e.count)} for ${e.label}`,
							className: `count${e.active ? " active" : ""}`,
							children: ae(e.count)
						}),
						e.tooltip && /* @__PURE__ */ S(Cs, {
							tooltipComponent: /* @__PURE__ */ S(Ts, {
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
Os.propTypes = Ds;
//#endregion
//#region components/tabs/Tabs.jsx
var ks = {
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
}, As = ({ types: e, active: t, switchTab: n, tabsClassName: i, tablessStyle: a }) => {
	let o = e.map((e) => /* @__PURE__ */ r(Os, {
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
As.propTypes = ks;
//#endregion
//#region components/messages/ComingSoon.jsx
var js = ({ className: e }) => /* @__PURE__ */ S(xo, {
	className: `coming soon ${e}`,
	title: "Coming Soon",
	description: "This feature is currently under development."
}), Ms = (e, t, n) => {
	if (e !== 0 && !e) return null;
	let r = t ? ne(e) : ae(e);
	if (Math.abs(e) > P.MILLION) {
		let i = ie(e);
		r = `${t ? re(e / i.unit, 2) : oe(e / i.unit, 2)} ${n ? _(i.longLabel) : i.unitLabel}`;
	}
	return r;
}, Ns = {
	2: "two",
	3: "three",
	4: "four"
}, Ps = { boxes: u.arrayOf(u.shape({
	type: u.string.isRequired,
	title: u.oneOfType([u.string, u.element]),
	amount: u.oneOfType([u.number, u.string]),
	isMonetary: u.bool,
	isString: u.bool,
	subtitle: u.string,
	subtitleBottom: u.string,
	isLoading: u.bool
})) }, Fs = ({ boxes: e }) => {
	let [t, n] = l(window.innerWidth > 1200), r = v(() => n(window.innerWidth > 1200));
	return o(() => (r(), window.addEventListener("resize", r), () => window.removeEventListener("resize", r)), []), /* @__PURE__ */ S("div", {
		className: `usa-dt-information-boxes ${Ns[e.length]}-boxes`,
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
								!e.isLoading && !e.isString && Ms(e.amount, e.isMonetary, t)
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
Fs.propTypes = Ps;
//#endregion
//#region components/SectionHeader.jsx
function Is({ icon: t, title: n, overLine: r, description: i, titleTooltip: a, descTooltip: o }) {
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
					children: [/* @__PURE__ */ S("h3", { children: n }), a.component && /* @__PURE__ */ S(Cs, {
						tooltipComponent: a.component,
						icon: "info",
						className: `${r ? "has-overline" : ""}`,
						...a.props
					})]
				})]
			}),
			i && e.cloneElement(i, { className: "usda-section-title__desc has-overline" }),
			o.component && /* @__PURE__ */ S(Cs, {
				tooltipComponent: o.component,
				icon: "info",
				tooltipPosition: "left",
				...o.props
			})
		]
	});
}
Is.propTypes = {
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
var Ls = {
	isControlled: !1,
	toggleExpand: () => {},
	isExpanded: !1
}, Rs = ({ title: e, icon: t, children: n, id: r = "", classNames: i = "", isCollapsible: a = !1, isComingSoon: o = !1, controlledProps: s = Ls, defaultExpandedState: c = !0, overLine: u = "", titleTooltip: d = {
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
				children: [/* @__PURE__ */ S(Is, {
					icon: t,
					title: e,
					overLine: u,
					description: p,
					titleTooltip: d,
					descTooltip: f
				}), a && /* @__PURE__ */ S(Q, {
					"aria-label": "usda-section-title__expand-icon",
					tabIndex: 0,
					onKeyDown: Es(g),
					className: "usda-section-title__expand-icon",
					onClick: g,
					size: "2x",
					icon: m || s.isControlled && s.isExpanded ? "chevron-up" : "chevron-down"
				})]
			}),
			/* @__PURE__ */ S("hr", {}),
			o && _ && /* @__PURE__ */ S(js, {}),
			_ && !o && n
		]
	});
};
Rs.propTypes = {
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
var zs = { items: u.arrayOf(u.element) }, Bs = ({ items: e }) => {
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
Bs.propTypes = zs;
//#endregion
//#region helpers/inPageNavHelper.js
var Vs = (e, t) => {
	let n = !1, r = !1, i = [...e?.childNodes], a = i[0]?.getBoundingClientRect(), o = i[i.length - 1]?.getBoundingClientRect();
	return (a.left < 0 || e.scrollLeft > 0) && (n = !0), (o.right > e.clientWidth + t || o.right > e.scrollWidth) && (r = !0), {
		left: n,
		right: r
	};
}, Hs = (e) => {
	let t = [];
	return e.childNodes.forEach((e) => {
		let n = e.getBoundingClientRect();
		t.push({
			name: e.innerHTML,
			originalLeftOffset: n.left,
			width: n.width
		});
	}), t;
}, Us = (e) => {
	e.current.querySelector("ul").scrollTo({
		left: "0",
		behavior: "smooth"
	});
}, Ws = {
	sections: u.array,
	activeSection: u.string,
	jumpToSection: u.func,
	detectActiveSection: u.oneOfType([u.bool, u.func]),
	pageName: u.string
}, Gs = (e) => {
	let { sections: t, jumpToSection: n, pageName: r, detectActiveSection: i } = e, [s, u] = l(e.activeSection), [d, f] = l(window.innerWidth), [p, m] = l(null), [h, g] = l([]), [_, y] = l(!1), [b, x] = l(!1), [w, T] = l(32), [E, D] = l(window.innerWidth < 992), O = c(null), [k, ee] = l([]), A = () => {
		let e = O?.current?.querySelector("ul"), { left: t, right: n } = Vs(e, w);
		y(t), x(n);
	}, j = a((e) => {
		e.stopPropagation(), A();
	}), M = a((e) => {
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
		} else Us(O);
	}), N = a((e) => {
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
			} else Us(O);
		}
	}), P = a(() => {
		let e = O.current.querySelector("ul"), t = Hs(e);
		m(e), g(t);
	}), te = a((e, t) => {
		e.key === "Enter" && (t === "left" && M(e), t === "right" && N(e));
	}), F = () => {
		let e = window.innerWidth;
		d !== e && f(e), D(d < 992), 992 < d && d <= 1200 && T(52), 1200 < d && d <= 1640 && T(72), 1640 < d && T(192), A();
	};
	o(() => (P(), F(), window.addEventListener("resize", () => F()), () => window.removeEventListener("resize", () => F())), []), o(() => (A(), p?.addEventListener("scrollend", (e) => j(e)), () => p?.removeEventListener("scrollend", (e) => j(e))), [p]);
	let ne = v(() => {
		let e = t.map((e) => {
			let t = e.section, n = document.getElementById(`${r}-${t}`);
			if (!n) return null;
			let i = document.querySelector(".usda-page-header")?.offsetHeight || 0, a = n.offsetTop - i;
			return {
				section: t,
				top: a,
				bottom: n.offsetHeight + a - i
			};
		});
		ee(e);
	}, 100), re = v(() => {
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
		i && k.length === 0 && ne();
		let e = () => {
			ne(), i && re();
		};
		return window.addEventListener("scroll", e), window.addEventListener("resize", ne), () => {
			window.removeEventListener("scroll", e), window.removeEventListener("resize", ne);
		};
	}, [
		i,
		ne,
		re,
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
					onKeyDown: (e) => te(e, "left"),
					onClick: (e) => M(e),
					children: /* @__PURE__ */ S(Q, {
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
					onKeyDown: (e) => te(e, "right"),
					onClick: (e) => N(e),
					children: /* @__PURE__ */ S(Q, {
						icon: "chevron-right",
						alt: "Forward"
					})
				})
			]
		})
	});
};
Gs.propTypes = Ws;
//#endregion
//#region components/PageHeader.jsx
var Ks = ({ title: t, overLine: n = "", toolBar: r = [], backgroundColor: i = "#1a4480", pageName: a, sections: o, activeSection: s, jumpToSection: c, inPageNav: l = !1 }) => /* @__PURE__ */ C("section", {
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
	}), l && /* @__PURE__ */ S(Gs, {
		detectActiveSection: !0,
		pageName: a,
		sections: o,
		activeSection: s,
		jumpToSection: c
	})]
});
Ks.propTypes = {
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
var qs = {
	onClick: u.func.isRequired,
	downloadInFlight: u.bool,
	tooltipComponent: u.element,
	isEnabled: u.bool,
	tooltipPosition: u.string
}, Js = ({ onClick: e, downloadInFlight: t, tooltipComponent: n = null, tooltipPosition: r = "left", isEnabled: i = !0, backgroundColor: a = "#1a4480" }) => {
	let o = (n) => {
		n.preventDefault(), !t && i && e();
	}, s = t || !i ? " disabled" : "", c = t ? "Preparing Download..." : "Download", l = t ? ds : cs;
	return n ? /* @__PURE__ */ S(Cs, {
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
			children: [/* @__PURE__ */ S(Q, {
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
			children: [/* @__PURE__ */ S(Q, {
				icon: l,
				spin: t
			}), /* @__PURE__ */ S("span", { children: c })]
		})
	});
};
Js.displayName = "Download Icon Button", Js.propTypes = qs;
var Ys = {
	prefix: "far",
	iconName: "calendar-days",
	icon: [
		448,
		512,
		["calendar-alt"],
		"f073",
		"M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zM384 432c8.8 0 16-7.2 16-16l0-64-88 0 0 80 72 0zm16-128l0-80-88 0 0 80 88 0zm-136 0l0-80-80 0 0 80 80 0zm-128 0l0-80-88 0 0 80 88 0zM48 352l0 64c0 8.8 7.2 16 16 16l72 0 0-80-88 0zm136 0l0 80 80 0 0-80-80 0zM120 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0z"
	]
}, Xs = 2008, Zs = (e = Xs, t) => [...Array(t - e)].reduce((t, n, r) => (t.push(e + r + 1), t), [e]).sort((e, t) => t - e), Qs = (e, t) => Number.isInteger(e) ? t - e : parseInt(t, 10) - parseInt(e, 10), $s = ({ backgroundColor: e, latestFy: t, selectedFy: n = 2020, earliestFy: r = 2017, options: i = [], handleFyChange: a = () => {}, sortFn: o = Qs }) => /* @__PURE__ */ C("div", {
	className: "usda-fy-picker__container",
	children: [/* @__PURE__ */ S(so, {
		backgroundColor: e,
		className: "usda-fy-picker",
		icon: /* @__PURE__ */ S(Q, {
			icon: Ys,
			size: "xs",
			alt: "FY Loading ..."
		}),
		selectedOption: i.length ? i.find((e) => e?.value === n || e.value === parseInt(n, 10))?.name || "--" : `FY ${n}`,
		sortFn: o,
		options: i.length ? i.map((e) => ({
			...e,
			onClick: a
		})) : t ? Zs(r, t).map((e) => ({
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
$s.displayName = "Fiscal Year Picker", $s.propTypes = {
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
var ec = {
	prefix: "fab",
	iconName: "linkedin",
	icon: [
		448,
		512,
		[],
		"f08c",
		"M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"
	]
}, tc = {
	prefix: "fab",
	iconName: "square-reddit",
	icon: [
		448,
		512,
		["reddit-square"],
		"f1a2",
		"M64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32zM305.9 166.4c20.6 0 37.3-16.7 37.3-37.3s-16.7-37.3-37.3-37.3c-18 0-33.1 12.8-36.6 29.8-30.2 3.2-53.8 28.8-53.8 59.9l0 .2c-32.8 1.4-62.8 10.7-86.6 25.5-8.8-6.8-19.9-10.9-32-10.9-28.9 0-52.3 23.4-52.3 52.3 0 21 12.3 39 30.1 47.4 1.7 60.7 67.9 109.6 149.3 109.6s147.6-48.9 149.3-109.7c17.7-8.4 29.9-26.4 29.9-47.3 0-28.9-23.4-52.3-52.3-52.3-12 0-23 4-31.9 10.8-24-14.9-54.3-24.2-87.5-25.4l0-.1c0-22.2 16.5-40.7 37.9-43.7 3.9 16.5 18.7 28.7 36.3 28.7l.2-.2zM155 248.1c14.6 0 25.8 15.4 25 34.4s-11.8 25.9-26.5 25.9-27.5-7.7-26.6-26.7 13.5-33.5 28.1-33.5l0-.1zm166.4 33.5c.9 19-12 26.7-26.6 26.7s-25.6-6.9-26.5-25.9 10.3-34.4 25-34.4 27.3 14.6 28.1 33.5l0 .1zm-42.1 49.6c-9 21.5-30.3 36.7-55.1 36.7s-46.1-15.1-55.1-36.7c-1.1-2.6 .7-5.4 3.4-5.7 16.1-1.6 33.5-2.5 51.7-2.5s35.6 .9 51.7 2.5c2.7 .3 4.5 3.1 3.4 5.7z"
	]
}, nc = {
	prefix: "fab",
	iconName: "square-facebook",
	icon: [
		448,
		512,
		["facebook-square"],
		"f082",
		"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l98.2 0 0-145.8-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 145.8 129 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"
	]
}, rc = ({ icon: e, title: t }) => /* @__PURE__ */ C(x, { children: [/* @__PURE__ */ S(Q, {
	icon: e,
	color: "#555",
	size: "sm"
}), /* @__PURE__ */ S("span", { children: t })] }), ic = [
	{
		component: /* @__PURE__ */ S(rc, {
			icon: us,
			title: "Copy link"
		}),
		name: "copy"
	},
	{
		component: /* @__PURE__ */ S(rc, {
			icon: ls,
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
		component: /* @__PURE__ */ S(rc, {
			icon: nc,
			title: "Facebook"
		}),
		name: "facebook"
	},
	{
		component: /* @__PURE__ */ S(rc, {
			icon: ec,
			title: "LinkedIn"
		}),
		name: "linkedin"
	},
	{
		component: /* @__PURE__ */ S(rc, {
			icon: tc,
			title: "Reddit"
		}),
		name: "reddit"
	}
], ac = {
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
}, oc = ({ includedDropdownOptions: e = [], classNames: t = "", url: n = "", onShareOptionClick: r = () => {}, colors: i = {
	color: "#dfe1e2",
	backgroundColor: "#1a4480",
	confirmationBackgroundColor: "#f1f1f1"
}, dropdownDirection: a = "left", downloadInFlight: s, isEnabled: c = !0, noShareText: u, keepText: d = !1, pickerButtonClassNames: f = "", pickerListClassNames: p = "" }) => {
	let [m, g] = l(!1), _ = h(() => g(!1), 1750), v = s || !c ? " disabled" : "", y = () => {
		Array.from(document.querySelectorAll(".js-dtui-url-for-share-icon")).forEach((e) => {
			if (e.value.includes(n)) return e.select();
		}), document.execCommand("copy"), g(!0), r("copy");
	}, b = ic.filter(({ name: t }) => !e.length || e.includes(t)).map((e) => e.name === "copy" ? {
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
			/* @__PURE__ */ S(so, {
				buttonClassNames: f,
				pickerListClassNames: p,
				dropdownDirection: a,
				options: b,
				selectedOption: "copy",
				backgroundColor: i.backgroundColor,
				notEnabled: s || !c,
				sortFn: () => 1,
				children: /* @__PURE__ */ S(Q, {
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
					/* @__PURE__ */ S(Q, { icon: fs }),
					" ",
					"Copied!"
				]
			})
		]
	});
};
oc.propTypes = ac, oc.displayName = "Share Icon";
//#endregion
//#region helpers/pageHeaderHelper.js
var sc = (e, t = 0) => {
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
			let t = e.current ? e.current.offsetTop : 0;
			r(t);
		}, 100)
	];
}, cc = (e) => e.map((e) => e && e.trim()).filter((e) => e).join(" ");
//#endregion
//#region components/flexGrid/FlexGridContainer.jsx
function lc({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ S("div", {
		className: cc(["usa-dt-flex-grid__container", t]),
		...n,
		children: e
	});
}
lc.propTypes = {
	children: u.node.isRequired,
	className: u.string
};
//#endregion
//#region components/flexGrid/FlexGridRow.jsx
var uc = ({ children: e, className: t, hasGutter: n = !1, gutterSize: r, ...i }) => {
	let a = n ? "usa-dt-flex-grid__gutter" : "", o = (0, bs.default)({
		"usa-dt-flex-grid__gutter-sm": r === "sm",
		"usa-dt-flex-grid__gutter-lg": r === "lg"
	});
	return /* @__PURE__ */ S("div", {
		className: cc([
			"usa-dt-flex-grid__row",
			a,
			o,
			t
		]),
		...i,
		children: e
	});
};
uc.propTypes = {
	children: u.node.isRequired,
	className: u.string,
	hasGutter: u.bool,
	gutterSize: u.oneOf(["sm", "lg"])
};
//#endregion
//#region components/flexGrid/FlexGridCol.jsx
var dc = ({ children: e, className: t, desktopxl: n, desktop: r, mobile: i, tablet: a, width: o, ...s }) => {
	let c = cc([...[
		[null, o],
		["desktopxl", n],
		["desktop", r],
		["tablet", a],
		["mobile", i]
	].map(([e, t]) => t === void 0 ? "" : t.span !== void 0 && t.offset !== void 0 ? cc([`${e ? `${e}:` : ""}usa-dt-flex-grid__col-${t.span}`, `${e ? `${e}:` : ""}usa-dt-flex-grid__offset-${t.offset}`]) : t.order === void 0 ? `${e ? `${e}:` : ""}usa-dt-flex-grid__col-${t}` : cc([`${e ? `${e}:` : ""}usa-dt-flex-grid__col-${t.span}`, `${e ? `${e}:` : ""}usa-dt-flex-grid__order-${t.order}`])), t]);
	return /* @__PURE__ */ S("div", {
		className: c || "usa-dt-flex-grid__col",
		...s,
		children: e
	});
};
dc.propTypes = {
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
var fc = {
	variant: u.string,
	size: u.string,
	fill: u.string,
	height: u.oneOfType([u.string, u.number]),
	onClick: u.func,
	onKeyUp: u.func,
	className: u.oneOfType([u.string, u.object])
}, pc = ({ variant: e = "", size: t = "md", children: n, fill: r, height: i, className: a = "", onClick: o, onKeyUp: s }) => /* @__PURE__ */ S("div", {
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
pc.propTypes = fc;
//#endregion
//#region components/cards/CardBody.jsx
var mc = {
	overline: u.string,
	headline: u.oneOfType([
		u.string,
		u.object,
		u.node
	]),
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
}, hc = ({ overline: e, headline: t, onClick: n, subhead: r, text: i, variant: a = "", children: o, imageContainerHeight: s, customClassName: c = "" }) => /* @__PURE__ */ C("div", {
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
hc.propTypes = mc;
//#endregion
//#region components/cards/CardHero.jsx
var gc = {
	img: u.string,
	fill: u.string,
	variant: u.string,
	imageContainerHeight: u.string,
	thumbnail: u.bool,
	children: u.element,
	onClick: u.func
}, _c = ({ img: e, fill: t, variant: n, imageContainerHeight: r, thumbnail: i, children: a, onClick: o }) => /* @__PURE__ */ S("div", { children: /* @__PURE__ */ S("div", {
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
_c.propTypes = gc;
//#endregion
//#region components/Button.jsx
var vc = {
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
}, yc = (e) => {
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
yc.propTypes = vc;
//#endregion
//#region components/cards/CardButton.jsx
var bc = {
	link: u.string,
	govLink: u.bool,
	onlyPerformAction: u.bool,
	action: u.func,
	text: u.oneOfType([u.string, u.object]),
	variant: u.string,
	customClassName: u.string,
	children: u.oneOfType([u.string, u.object]),
	disabled: u.bool
}, xc = ({ link: e, govLink: t, onlyPerformAction: n = "false", action: r, text: i, variant: a = "secondary", customClassName: o = "", children: s, backgroundColor: c, buttonSize: l, textAlignment: u, disabled: d = !1 }) => {
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
		children: /* @__PURE__ */ S(yc, {
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
			children: /* @__PURE__ */ S(yc, {
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
			children: /* @__PURE__ */ S(yc, {
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
xc.propTypes = bc;
//#endregion
//#region components/NewPicker.jsx
var Sc = {
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
}, Cc = (e, t, n) => e.name === n ? -1 : t.name === n ? 1 : e.name < t.name ? -1 : +(e.name > t.name), wc = ({ size: e, label: t = "", children: n, leftIcon: r, enabled: i, id: a = "", options: s, selectedOption: u, dropdownClassname: d = "", buttonClassname: f = "", minTextWidth: p = "", classname: m = "", sortFn: h = Cc, parentWidth: g, infoSection: _ = !1, infoSectionContent: v = "" }) => {
	let y = c(null), x = c(null), [w, T] = l(!1), [E, D] = l(i || !1), O = "usa-dt-picker__button-icon--svg", k = _ ? "310px" : "initial", ee = (e) => {
		e.preventDefault(), T(!w);
	}, A = (e) => {
		e.key === "Escape" && w && T(!w);
	}, j = (e, t) => h(e, t, u), M = (e) => (t) => {
		e(t), T(!1);
	}, N = "";
	return e === "sm" || e === "small" ? N = "-sm" : e === "md" || e === "medium" ? N = "-md" : (e === "lg" || e === "large") && (N = "-lg"), o(() => {
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
			className: `filter__dropdown-label${N}`,
			children: t
		}), /* @__PURE__ */ C("div", {
			className: "filter__dropdown-button-list-container",
			children: [/* @__PURE__ */ C("button", {
				className: `filter__dropdown-button${N} ${E ? "enabled" : "not-enabled"} ${f}`,
				ref: x,
				"aria-label": "Filter Dropdown Button",
				onClick: ee,
				onKeyUp: A,
				style: { maxWidth: `${g}px` },
				type: "button",
				children: [
					r && /* @__PURE__ */ S("span", {
						className: "filter__dropdown-left-icon",
						children: /* @__PURE__ */ S(Q, {
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
						children: [!w && /* @__PURE__ */ S(Q, {
							icon: "chevron-down",
							alt: "Toggle menu"
						}), w && /* @__PURE__ */ S(Q, {
							icon: "chevron-up",
							alt: "Toggle menu"
						})]
					})
				]
			}), w && /* @__PURE__ */ S("div", {
				className: "filter__dropdown__list-info-wrapper",
				style: { maxWidth: `${g}px` },
				children: /* @__PURE__ */ C("ul", {
					className: `filter__dropdown-list${N} ${w ? "" : "hide"} ${E ? "enabled" : "not-enabled"} ${d}`,
					style: {
						maxWidth: `${g}px`,
						height: k
					},
					children: [s?.sort(j).map((e) => ({
						...e,
						onClick: M(e.onClick)
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
wc.propTypes = Sc;
//#endregion
export { yc as Button, hc as CardBody, xc as CardButton, pc as CardContainer, _c as CardHero, Bs as Carousel, js as ComingSoon, Js as DownloadIconButton, Co as ErrorMessage, $s as FiscalYearPicker, dc as FlexGridCol, lc as FlexGridContainer, uc as FlexGridRow, xo as GenericMessage, Fs as InformationBoxes, ts as LoadingMessage, wc as NewPicker, ns as NoResultsMessage, Ks as PageHeader, ro as Pagination, so as Picker, ho as QuarterPicker, yo as SearchBar, Is as SectionHeader, Rs as SectionWrapper, oc as ShareIcon, ys as Table, As as Tabs, Ts as TooltipComponent, Cs as TooltipWrapper, uo as useCumulativeQuarterPicker, sc as useDynamicStickyClass };
