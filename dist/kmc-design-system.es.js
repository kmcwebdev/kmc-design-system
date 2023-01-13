import * as d from "react";
import Z, { Fragment as H, useState as $ } from "react";
import { Transition as K, Dialog as le, Switch as wr } from "@headlessui/react";
import Er, { components as Be } from "react-select";
import Me from "react-hot-toast";
var z = {}, Rr = {
  get exports() {
    return z;
  },
  set exports(r) {
    z = r;
  }
}, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function Cr() {
  if (Ie)
    return M;
  Ie = 1;
  var r = Z, a = Symbol.for("react.element"), s = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, f = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(c, w, u) {
    var R, p = {}, F = null, W = null;
    u !== void 0 && (F = "" + u), w.key !== void 0 && (F = "" + w.key), w.ref !== void 0 && (W = w.ref);
    for (R in w)
      o.call(w, R) && !b.hasOwnProperty(R) && (p[R] = w[R]);
    if (c && c.defaultProps)
      for (R in w = c.defaultProps, w)
        p[R] === void 0 && (p[R] = w[R]);
    return { $$typeof: a, type: c, key: F, ref: W, props: p, _owner: f.current };
  }
  return M.Fragment = s, M.jsx = g, M.jsxs = g, M;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Nr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Z, a = Symbol.for("react.element"), s = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), c = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ce = Symbol.iterator, Le = "@@iterator";
    function ze(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ce && e[ce] || e[Le];
      return typeof t == "function" ? t : null;
    }
    var P = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          i[l - 1] = arguments[l];
        We("error", e, i);
      }
    }
    function We(e, t, i) {
      {
        var l = P.ReactDebugCurrentFrame, h = l.getStackAddendum();
        h !== "" && (t += "%s", i = i.concat([h]));
        var x = i.map(function(m) {
          return String(m);
        });
        x.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, x);
      }
    }
    var Ve = !1, Ye = !1, Ue = !1, qe = !1, Je = !1, de;
    de = Symbol.for("react.module.reference");
    function Xe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === b || Je || e === f || e === u || e === R || qe || e === W || Ve || Ye || Ue || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === p || e.$$typeof === g || e.$$typeof === c || e.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function Ge(e, t, i) {
      var l = e.displayName;
      if (l)
        return l;
      var h = t.displayName || t.name || "";
      return h !== "" ? i + "(" + h + ")" : i;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case s:
          return "Portal";
        case b:
          return "Profiler";
        case f:
          return "StrictMode";
        case u:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var t = e;
            return ue(t) + ".Consumer";
          case g:
            var i = e;
            return ue(i._context) + ".Provider";
          case w:
            return Ge(e, e.render, "ForwardRef");
          case p:
            var l = e.displayName || null;
            return l !== null ? l : S(e.type) || "Memo";
          case F: {
            var h = e, x = h._payload, m = h._init;
            try {
              return S(m(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, A = 0, fe, ve, me, pe, ge, he, be;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function He() {
      {
        if (A === 0) {
          fe = console.log, ve = console.info, me = console.warn, pe = console.error, ge = console.group, he = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Ke() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: fe
            }),
            info: j({}, e, {
              value: ve
            }),
            warn: j({}, e, {
              value: me
            }),
            error: j({}, e, {
              value: pe
            }),
            group: j({}, e, {
              value: ge
            }),
            groupCollapsed: j({}, e, {
              value: he
            }),
            groupEnd: j({}, e, {
              value: be
            })
          });
        }
        A < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = P.ReactCurrentDispatcher, ee;
    function V(e, t, i) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (h) {
            var l = h.stack.trim().match(/\n( *(at )?)/);
            ee = l && l[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var re = !1, Y;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Ze();
    }
    function ye(e, t) {
      if (!e || re)
        return "";
      {
        var i = Y.get(e);
        if (i !== void 0)
          return i;
      }
      var l;
      re = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = Q.current, Q.current = null, He();
      try {
        if (t) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (O) {
              l = O;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (O) {
              l = O;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            l = O;
          }
          e();
        }
      } catch (O) {
        if (O && l && typeof O.stack == "string") {
          for (var v = O.stack.split(`
`), k = l.stack.split(`
`), C = v.length - 1, N = k.length - 1; C >= 1 && N >= 0 && v[C] !== k[N]; )
            N--;
          for (; C >= 1 && N >= 0; C--, N--)
            if (v[C] !== k[N]) {
              if (C !== 1 || N !== 1)
                do
                  if (C--, N--, N < 0 || v[C] !== k[N]) {
                    var T = `
` + v[C].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, T), T;
                  }
                while (C >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = x, Ke(), Error.prepareStackTrace = h;
      }
      var D = e ? e.displayName || e.name : "", Pe = D ? V(D) : "";
      return typeof e == "function" && Y.set(e, Pe), Pe;
    }
    function Qe(e, t, i) {
      return ye(e, !1);
    }
    function er(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function U(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, er(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case u:
          return V("Suspense");
        case R:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            return Qe(e.render);
          case p:
            return U(e.type, t, i);
          case F: {
            var l = e, h = l._payload, x = l._init;
            try {
              return U(x(h), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, we = {}, Ee = P.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var t = e._owner, i = U(e.type, e._source, t ? t.type : null);
        Ee.setExtraStackFrame(i);
      } else
        Ee.setExtraStackFrame(null);
    }
    function rr(e, t, i, l, h) {
      {
        var x = Function.call.bind(q);
        for (var m in e)
          if (x(e, m)) {
            var v = void 0;
            try {
              if (typeof e[m] != "function") {
                var k = Error((l || "React class") + ": " + i + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              v = e[m](t, m, l, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              v = C;
            }
            v && !(v instanceof Error) && (J(h), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", i, m, typeof v), J(null)), v instanceof Error && !(v.message in we) && (we[v.message] = !0, J(h), _("Failed %s type: %s", i, v.message), J(null));
          }
      }
    }
    var tr = Array.isArray;
    function te(e) {
      return tr(e);
    }
    function ar(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function nr(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function Ce(e) {
      if (nr(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), Re(e);
    }
    var B = P.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, _e, ae;
    ae = {};
    function or(e) {
      if (q.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function sr(e) {
      if (q.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lr(e, t) {
      if (typeof e.ref == "string" && B.current && t && B.current.stateNode !== t) {
        var i = S(B.current.type);
        ae[i] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(B.current.type), e.ref), ae[i] = !0);
      }
    }
    function cr(e, t) {
      {
        var i = function() {
          Ne || (Ne = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function dr(e, t) {
      {
        var i = function() {
          _e || (_e = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var ur = function(e, t, i, l, h, x, m) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: i,
        props: m,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function fr(e, t, i, l, h) {
      {
        var x, m = {}, v = null, k = null;
        i !== void 0 && (Ce(i), v = "" + i), sr(t) && (Ce(t.key), v = "" + t.key), or(t) && (k = t.ref, lr(t, h));
        for (x in t)
          q.call(t, x) && !ir.hasOwnProperty(x) && (m[x] = t[x]);
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (x in C)
            m[x] === void 0 && (m[x] = C[x]);
        }
        if (v || k) {
          var N = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && cr(m, N), k && dr(m, N);
        }
        return ur(e, v, k, h, l, B.current, m);
      }
    }
    var ne = P.ReactCurrentOwner, ke = P.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var t = e._owner, i = U(e.type, e._source, t ? t.type : null);
        ke.setExtraStackFrame(i);
      } else
        ke.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Fe() {
      {
        if (ne.current) {
          var e = S(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function vr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + t + ":" + i + ".";
        }
        return "";
      }
    }
    var Te = {};
    function mr(e) {
      {
        var t = Fe();
        if (!t) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (t = `

Check the top-level render call using <` + i + ">.");
        }
        return t;
      }
    }
    function Se(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = mr(t);
        if (Te[i])
          return;
        Te[i] = !0;
        var l = "";
        e && e._owner && e._owner !== ne.current && (l = " It was passed a child from " + S(e._owner.type) + "."), I(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, l), I(null);
      }
    }
    function Oe(e, t) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var i = 0; i < e.length; i++) {
            var l = e[i];
            oe(l) && Se(l, t);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = ze(e);
          if (typeof h == "function" && h !== e.entries)
            for (var x = h.call(e), m; !(m = x.next()).done; )
              oe(m.value) && Se(m.value, t);
        }
      }
    }
    function pr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var i;
        if (typeof t == "function")
          i = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === p))
          i = t.propTypes;
        else
          return;
        if (i) {
          var l = S(t);
          rr(i, e.props, "prop", l, e);
        } else if (t.PropTypes !== void 0 && !ie) {
          ie = !0;
          var h = S(t);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gr(e) {
      {
        for (var t = Object.keys(e.props), i = 0; i < t.length; i++) {
          var l = t[i];
          if (l !== "children" && l !== "key") {
            I(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    function je(e, t, i, l, h, x) {
      {
        var m = Xe(e);
        if (!m) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = vr(h);
          k ? v += k : v += Fe();
          var C;
          e === null ? C = "null" : te(e) ? C = "array" : e !== void 0 && e.$$typeof === a ? (C = "<" + (S(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, v);
        }
        var N = fr(e, t, i, h, x);
        if (N == null)
          return N;
        if (m) {
          var T = t.children;
          if (T !== void 0)
            if (l)
              if (te(T)) {
                for (var D = 0; D < T.length; D++)
                  Oe(T[D], e);
                Object.freeze && Object.freeze(T);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(T, e);
        }
        return e === o ? gr(N) : pr(N), N;
      }
    }
    function hr(e, t, i) {
      return je(e, t, i, !0);
    }
    function br(e, t, i) {
      return je(e, t, i, !1);
    }
    var xr = br, yr = hr;
    L.Fragment = o, L.jsx = xr, L.jsxs = yr;
  }()), L;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = Cr() : r.exports = Nr();
})(Rr);
const _r = z.Fragment, n = z.jsx, E = z.jsxs, y = (...r) => r.filter(Boolean).join(" "), $e = ({
  children: r,
  variant: a = "primary",
  size: s = "base",
  outlined: o = !1,
  ...f
}) => /* @__PURE__ */ n(
  "button",
  {
    ...f,
    "data-testid": "button",
    className: y(
      "rounded outline-none shadow-sm-3 hover:shadow-sm-4 focus:shadow-sm-4 active:shadow-sm-1 transition-all duration-150 font-bold whitespace-nowrap px-6 self-end disabled:opacity-50",
      kr[`${o ? "outlined" : "filled"}-${a}`],
      s === "base" ? "py-3" : "py-2",
      f.className && f.className
    ),
    children: r
  }
), kr = {
  "filled-primary": "bg-interactive-primary-neutral hover:bg-interactive-primary-hovered active:bg-interactive-primary-pressed text-white",
  "filled-secondary": "bg-interactive-secondary-neutral hover:bg-interactive-secondary-hovered active:bg-interactive-secondary-pressed text-main-body hover:text-main-text active:text-main-heading",
  "filled-success": "bg-interactive-success-neutral hover:bg-interactive-success-hovered active:bg-interactive-success-pressed text-white",
  "filled-warning": "bg-interactive-warning-neutral hover:bg-interactive-warning-hovered active:bg-interactive-warning-pressed text-white",
  "filled-danger": "bg-interactive-danger-neutral hover:bg-interactive-danger-hovered active:bg-interactive-danger-pressed text-white",
  "filled-info": "bg-interactive-info-neutral hover:bg-interactive-info-hovered active:bg-interactive-info-pressed text-white",
  "outlined-primary": "border border-interactive-primary-neutral text-interactive-primary-neutral hover:text-interactive-primary-hovered active:text-interactive-primary-pressed hover:bg-surface-primary-hovered",
  "outlined-secondary": "border border-gray-800 text-gray-800 hover:bg-surface-secondary-hovered",
  "outlined-success": "border border-interactive-success-neutral text-interactive-success-neutral hover:text-interactive-success-hovered active:text-interactive-success-pressed hover:bg-surface-success-hovered",
  "outlined-warning": "border border-interactive-warning-neutral text-interactive-warning-neutral hover:text-interactive-warning-hovered active:text-interactive-warning-pressed hover:bg-surface-warning-hovered",
  "outlined-danger": "border border-interactive-danger-neutral text-interactive-danger-neutral hover:text-interactive-danger-hovered active:text-interactive-danger-pressed hover:bg-surface-danger-hovered",
  "outlined-info": "border border-interactive-info-neutral text-interactive-info-neutral hover:text-interactive-info-hovered active:text-interactive-info-pressed hover:bg-surface-info-hovered"
};
function Fr({
  title: r,
  titleId: a,
  ...s
}, o) {
  return /* @__PURE__ */ d.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: o,
    "aria-labelledby": a
  }, s), r ? /* @__PURE__ */ d.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ d.createElement("path", {
    fillRule: "evenodd",
    d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
    clipRule: "evenodd"
  }));
}
const Tr = d.forwardRef(Fr), Sr = Tr;
function Or({
  title: r,
  titleId: a,
  ...s
}, o) {
  return /* @__PURE__ */ d.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: o,
    "aria-labelledby": a
  }, s), r ? /* @__PURE__ */ d.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ d.createElement("path", {
    fillRule: "evenodd",
    d: "M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z",
    clipRule: "evenodd"
  }));
}
const jr = d.forwardRef(Or), Pr = jr;
function Ir({
  title: r,
  titleId: a,
  ...s
}, o) {
  return /* @__PURE__ */ d.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: o,
    "aria-labelledby": a
  }, s), r ? /* @__PURE__ */ d.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ d.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}
const Dr = d.forwardRef(Ir), $r = Dr;
function Ar({
  title: r,
  titleId: a,
  ...s
}, o) {
  return /* @__PURE__ */ d.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: o,
    "aria-labelledby": a
  }, s), r ? /* @__PURE__ */ d.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ d.createElement("path", {
    fillRule: "evenodd",
    d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}
const Br = d.forwardRef(Ar), Mr = Br;
function Lr({
  title: r,
  titleId: a,
  ...s
}, o) {
  return /* @__PURE__ */ d.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: o,
    "aria-labelledby": a
  }, s), r ? /* @__PURE__ */ d.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ d.createElement("path", {
    d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
  }));
}
const zr = d.forwardRef(Lr), Ae = zr, Wr = ({ open: r, closeDialog: a, children: s, width: o = "md" }) => /* @__PURE__ */ n(K, { appear: !0, show: r, as: H, children: /* @__PURE__ */ E(le, { as: "div", className: "relative z-10", onClose: a, children: [
  /* @__PURE__ */ n(
    K.Child,
    {
      as: H,
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
      children: /* @__PURE__ */ n("div", { className: "fixed inset-0 bg-black bg-opacity-25" })
    }
  ),
  /* @__PURE__ */ n("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ n("div", { className: "flex min-h-full items-center justify-center p-4 text-center", children: /* @__PURE__ */ n(
    K.Child,
    {
      as: H,
      enter: "ease-out duration-300",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ n(
        le.Panel,
        {
          className: y(
            "w-full flex flex-col gap-4 p-[20px] transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all",
            qr[o]
          ),
          children: s
        }
      )
    }
  ) }) })
] }) }), Vr = ({ title: r, Icon: a }) => /* @__PURE__ */ n(le.Title, { className: "font-karla border-b-[1px] border-gray-100 pb-2", children: /* @__PURE__ */ E("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ n("p", { className: "text-xl font-bold text-gray-900", children: r }),
  a
] }) }), Yr = ({
  children: r,
  className: a,
  ...s
}) => /* @__PURE__ */ n("div", { className: y("mt-2", a && a), ...s, children: r }), Ur = ({
  children: r,
  className: a,
  ...s
}) => /* @__PURE__ */ n("div", { className: y("mt-4 flex gap-4 items-center", a && a), ...s, children: r }), qr = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-3xl",
  xxl: "max-w-6xl"
}, X = Object.assign(Wr, { Title: Vr, Content: Yr, Footer: Ur }), Nt = ({
  title: r,
  description: a,
  onOk: s,
  onCancel: o,
  okButtonText: f = "Continue",
  cancelButtonText: b = "Cancel",
  variant: g,
  ...c
}) => /* @__PURE__ */ E(X, { ...c, closeDialog: o, children: [
  /* @__PURE__ */ n(X.Title, { title: r, ...Jr[g] }),
  /* @__PURE__ */ n(X.Content, { children: a }),
  /* @__PURE__ */ E(X.Footer, { className: "justify-end", children: [
    /* @__PURE__ */ n($e, { ...Xr[g], size: "sm", onClick: o, children: b }),
    /* @__PURE__ */ n($e, { ...Gr[g], size: "sm", onClick: s, children: f })
  ] })
] }), Jr = {
  confirm: { showIcon: !1 },
  info: { showIcon: !1 },
  warning: {
    showIcon: !1,
    Icon: /* @__PURE__ */ n(Mr, { className: "h-5 w-5 text-main-warning" })
  },
  danger: {
    showIcon: !1,
    Icon: /* @__PURE__ */ n($r, { className: "h-5 w-5 text-main-danger" })
  }
}, Xr = {
  confirm: { variant: "primary", outlined: !0 },
  info: { className: "hidden" },
  warning: {
    className: "hidden"
  },
  danger: {
    className: "hidden"
  }
}, Gr = {
  confirm: { variant: "primary" },
  info: { variant: "info" },
  warning: {
    variant: "warning"
  },
  danger: {
    variant: "danger"
  }
}, _t = ({ label: r, name: a, description: s, ...o }) => /* @__PURE__ */ n("fieldset", { className: "space-y-3", children: /* @__PURE__ */ n("div", { className: "relative flex items-center", children: /* @__PURE__ */ E("div", { className: "grid grid-cols-[18px_1fr] items-center gap-x-2", children: [
  /* @__PURE__ */ n(
    "input",
    {
      id: a,
      "aria-describedby": a,
      name: a,
      type: "checkbox",
      className: "transition-all focus:ring-main-accent h-4 w-4 text-main-accent border-2 border-gray-600 rounded duration-75 justify-self-center",
      ...o
    }
  ),
  typeof r == "string" ? /* @__PURE__ */ n("label", { htmlFor: a, className: "text-gray-700", children: r }) : r,
  s && /* @__PURE__ */ n("p", { id: `${a}-description`, className: "text-gray-500 col-start-2", children: s })
] }) }) });
function Hr({
  title: r,
  titleId: a,
  ...s
}, o) {
  return /* @__PURE__ */ d.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: o,
    "aria-labelledby": a
  }, s), r ? /* @__PURE__ */ d.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ d.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
    clipRule: "evenodd"
  }));
}
const Kr = d.forwardRef(Hr), G = Kr;
function Zr({
  title: r,
  titleId: a,
  ...s
}, o) {
  return /* @__PURE__ */ d.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: o,
    "aria-labelledby": a
  }, s), r ? /* @__PURE__ */ d.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ d.createElement("path", {
    fillRule: "evenodd",
    d: "M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z",
    clipRule: "evenodd"
  }));
}
const Qr = d.forwardRef(Zr), et = Qr;
function rt({
  title: r,
  titleId: a,
  ...s
}, o) {
  return /* @__PURE__ */ d.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: o,
    "aria-labelledby": a
  }, s), r ? /* @__PURE__ */ d.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ d.createElement("path", {
    fillRule: "evenodd",
    d: "M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z",
    clipRule: "evenodd"
  }));
}
const tt = d.forwardRef(rt), at = tt;
function nt({
  title: r,
  titleId: a,
  ...s
}, o) {
  return /* @__PURE__ */ d.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: o,
    "aria-labelledby": a
  }, s), r ? /* @__PURE__ */ d.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ d.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
  }));
}
const it = d.forwardRef(nt), ot = it;
function st({
  title: r,
  titleId: a,
  ...s
}, o) {
  return /* @__PURE__ */ d.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: o,
    "aria-labelledby": a
  }, s), r ? /* @__PURE__ */ d.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ d.createElement("path", {
    fillRule: "evenodd",
    d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
    clipRule: "evenodd"
  }));
}
const lt = d.forwardRef(st), ct = lt, kt = ({
  label: r,
  name: a,
  innerRef: s,
  className: o,
  inputClassName: f,
  leading: b,
  trailing: g,
  error: c,
  type: w = "text",
  ...u
}) => /* @__PURE__ */ E("div", { className: y("flex flex-col", o && o), children: [
  r && /* @__PURE__ */ n("label", { className: "text-xs font-medium text-gray-800", htmlFor: a, children: r }),
  /* @__PURE__ */ E("div", { className: "relative flex w-full", children: [
    b && /* @__PURE__ */ n("span", { className: "text-sm font-medium z-10 pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center", children: b }),
    /* @__PURE__ */ n(
      "input",
      {
        name: a,
        ref: s,
        type: w,
        className: y(
          "border relative text-base w-full text-gray-900 transition-all my-1 rounded py-2.5 outline-none disabled:bg-gray-100 disabled:text-gray-700 font-normal focus:border-main-accent bg-white focus:outline-none focus:ring-0",
          b ? "pl-10" : "pl-2",
          g || c ? "pr-9" : "pr-2",
          c ? "border-main-danger" : "border-gray-400",
          f && f
        ),
        ...u
      }
    ),
    (c || g) && /* @__PURE__ */ E("span", { className: "text-sm font-medium z-10 pointer-events-none absolute inset-y-0 right-2 pl-3 flex items-center", children: [
      /* @__PURE__ */ n(ot, { className: "h-5 w-5 text-main-danger" }),
      g
    ] })
  ] }),
  c && /* @__PURE__ */ n("span", { className: y("text-xs font-normal", c ? "text-main-danger" : "text-gray-blue-5"), children: c })
] }), Ft = ({ options: r, label: a, value: s, size: o = "base", onChange: f, ...b }) => {
  const [g, c] = $(""), w = (u) => {
    f && f(u), c(u.currentTarget.id);
  };
  return /* @__PURE__ */ E("fieldset", { children: [
    a && /* @__PURE__ */ n("legend", { className: "text-xs font-medium text-gray-700 mb-1", children: a }),
    /* @__PURE__ */ n("div", { className: "space-y-1", children: r.map((u) => /* @__PURE__ */ n(
      "div",
      {
        className: y("relative", u != null && u.description ? "items-start" : "items-center"),
        children: /* @__PURE__ */ E("div", { className: y("grid grid-cols-[18px_1fr] items-center gap-x-2"), children: [
          /* @__PURE__ */ n(
            "input",
            {
              id: u.value.toString(),
              "aria-describedby": `${u.value}-description`,
              checked: (s || g) === u.value.toString(),
              type: "radio",
              onChange: w,
              className: y(
                "border-2 border-gray-600 focus:ring-main-accent transition-all text-main-accent justify-self-center",
                o === "sm" && "h-3 w-3",
                o === "base" && "h-[14px] w-[14px]",
                o === "lg" && "h-[18px] w-[18px]"
              ),
              ...b
            }
          ),
          /* @__PURE__ */ n("label", { htmlFor: u.value.toString(), className: "text-gray-700", children: u.name }),
          u.description && /* @__PURE__ */ n(
            "label",
            {
              htmlFor: u.value.toString(),
              id: `${u.value}-description`,
              className: "text-gray-500 col-start-2",
              children: u.description
            }
          )
        ] })
      },
      u.value
    )) })
  ] });
}, dt = {
  primary: "#FFF4EB",
  neutral0: "#FCFDFF",
  danger: "#FF2A2A",
  dangerLight: "#FFF7FB",
  neutral5: "#B9BCC1",
  neutral10: "#FCFDFF",
  neutral20: "#B9BCC1",
  neutral30: "#B9BCC1",
  neutral40: "#9A9DA2",
  neutral50: "#81858B",
  neutral60: "#696D74",
  neutral70: "#53575C",
  neutral80: "",
  // text color
  neutral90: "#282B2E",
  primary25: "#DAE7FB",
  primary50: "#DAE7FB",
  primary75: "#5697ff"
}, Tt = (r) => {
  const [a, s] = $(!1), { className: o, label: f, error: b, options: g, isMulti: c, defaultValue: w, variant: u = "outlined", ...R } = r;
  return /* @__PURE__ */ E("div", { className: y(o && o, "group"), children: [
    f && /* @__PURE__ */ n("p", { className: "font-karla text-sm text-gray-800", children: f }),
    /* @__PURE__ */ n(
      Er,
      {
        className: "font-karla text-sm ",
        isSearchable: R.isSearchable ?? !1,
        options: g,
        placeholder: "Select",
        components: {
          DropdownIndicator: (p) => /* @__PURE__ */ n(ut, { ...p, isMenuOpen: a }),
          ClearIndicator: (p) => /* @__PURE__ */ n(ft, { isMenuOpen: !1, ...p })
        },
        defaultValue: w,
        onMenuOpen: () => {
          s(!0);
        },
        onMenuClose: () => {
          s(!1);
        },
        theme: (p) => ({
          ...p,
          colors: {
            ...dt,
            primary25: "#F6F6F7"
          }
        }),
        styles: {
          menu: (p) => ({
            ...p,
            fontSize: "12px"
            // paddingTop: '12px'
          }),
          option: (p, { isSelected: F }) => ({
            ...p,
            color: F ? "#FF7200" : "black",
            fontWeight: F ? "bold" : "normal"
          }),
          indicatorSeparator: (p) => ({
            ...p,
            display: "none"
          }),
          dropdownIndicator: (p, { isFocused: F }) => ({
            ...p,
            color: "#4B4B4B",
            backgroundColor: a ? u === "filled" ? "#fff4eb" : "none" : F ? u === "filled" ? "#F5F5F5" : "none" : "",
            "&:hover": {
              backgroundColor: u === "filled" ? "#F5F5F5" : "none",
              color: "black"
            },
            borderRadius: "0px 4px 4px 0px",
            paddingTop: u === "filled" ? "11px" : "12px",
            paddingBottom: u === "filled" ? "11px" : "12px"
          }),
          clearIndicator: (p) => ({
            ...p,
            color: "#FF7200"
          }),
          control: (p, { selectProps: F }) => ({
            ...p,
            backgroundColor: u === "filled" ? "white" : "none",
            width: "100%",
            // paddingTop: '3px',
            // paddingBottom: '3px',
            border: u === "filled" ? "1px solid #CACACA" : "none",
            borderColor: F["aria-errormessage"] ? "red" : "#B9BCC1",
            boxShadow: a ? u === "filled" ? "0 0 0px 1px #FF7200" : "0px 1px 0.5px 0.1px #FF7200" : u === "filled" ? "" : "0px 1px 0.5px 0.1px #CACACA",
            "&:hover": {
              boxShadow: u === "filled" ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" : "0px 1px 0.5px 0.1px #cacaca"
            }
          }),
          singleValue: (p) => ({
            ...p,
            display: "flex",
            // To keep icon and label aligned
            alignItems: "center"
          }),
          multiValue: (p) => ({
            ...p,
            border: "1px solid "
          }),
          multiValueRemove: (p) => ({
            ...p,
            background: "transparent",
            "&:hover": {
              background: "transparent "
            }
          })
        },
        classNamePrefix: "react-select",
        isMulti: c,
        ...R
      }
    ),
    b && /* @__PURE__ */ n("span", { className: "text-tiny text-interactive-danger-neutral", children: b })
  ] });
}, ut = (r) => {
  const { isMenuOpen: a, ...s } = r;
  return /* @__PURE__ */ n(Be.DropdownIndicator, { ...s, children: a ? /* @__PURE__ */ n(Pr, { className: "w-5 text-branding-pumpkin" }) : /* @__PURE__ */ n(Sr, { className: "w-5" }) });
}, ft = (r) => {
  const { isMenuOpen: a, ...s } = r;
  return /* @__PURE__ */ n(Be.ClearIndicator, { ...s, children: a ? /* @__PURE__ */ n(Ae, { className: "w-4 text-branding-pumpkin" }) : /* @__PURE__ */ n(Ae, { className: "w-4" }) });
}, se = {
  primary: {
    parent: "text-white",
    child: "bg-interactive-primary-neutral group-hover:bg-interactive-primary-hovered group-active:bg-interactive-primary-pressed"
  },
  secondary: {
    parent: "text-main-body hover:text-main-text active:text-main-heading",
    child: "bg-interactive-secondary-neutral group-hover:bg-interactive-secondary-hovered group-active:bg-interactive-secondary-pressed "
  },
  success: {
    parent: "text-white",
    child: "bg-interactive-success-neutral group-hover:bg-interactive-success-hovered group-active:bg-interactive-success-pressed"
  },
  warning: {
    parent: "text-white",
    child: "bg-interactive-warning-neutral group-hover:bg-interactive-warning-hovered group-active:bg-interactive-warning-pressed"
  },
  danger: {
    parent: "text-white",
    child: "bg-interactive-danger-neutral group-hover:bg-interactive-danger-hovered group-active:bg-interactive-danger-pressed"
  },
  info: {
    parent: "text-white",
    child: "bg-interactive-info-neutral group-hover:bg-interactive-info-hovered group-active:bg-interactive-info-pressed"
  }
}, vt = {
  primary: "text-main-body hover:bg-surface-primary-hovered hover:text-interactive-primary-neutral",
  success: "text-main-body hover:bg-surface-success-hovered hover:text-interactive-success-hovered",
  danger: "text-main-danger hover:bg-surface-danger-hovered hover:text-interactive-danger-hovered"
}, mt = ({
  children: r,
  variant: a = "primary",
  size: s = "base",
  text: o = "Button",
  ...f
}) => {
  const [b, g] = $(!1), [c, w] = $(0);
  return /* @__PURE__ */ E("div", { className: "relative", children: [
    /* @__PURE__ */ n("button", { onClick: () => {
      g((R) => !R);
    }, children: /* @__PURE__ */ E(
      "div",
      {
        ...f,
        className: y(
          "flex font-bold rounded overflow-hidden text-white cursor-pointer group select-none outline-none shadow-sm-3 hover:shadow-sm-4",
          se[a].parent,
          f.className && f.className
        ),
        children: [
          /* @__PURE__ */ n(
            "div",
            {
              className: y("px-6 mr-px", s === "base" ? "py-3" : "py-2", se[a].child),
              children: o
            }
          ),
          /* @__PURE__ */ n(
            "div",
            {
              className: y(
                "px-3 py-3 flex items-center",
                s === "base" ? "py-3" : "py-2",
                se[a].child
              ),
              children: b ? /* @__PURE__ */ n(at, { className: "h-4 w-4" }) : /* @__PURE__ */ n(et, { className: "h-4 w-4" })
            }
          )
        ]
      }
    ) }),
    b && /* @__PURE__ */ n(
      "div",
      {
        ...f,
        className: y(
          "bg-white w-full absolute shadow-md-1 rounded-sm z-20 left-0 border-[1px]",
          window.innerHeight - c > 500 ? "top-[120%]" : "bottom-[120%]"
        ),
        ref: (R) => {
          R && c === 0 && w(R.getBoundingClientRect().top);
        },
        onBlur: () => g(!1),
        onBlurCapture: () => g(!1),
        children: r
      }
    )
  ] });
}, pt = ({ children: r, sectionTitle: a = "", ...s }) => /* @__PURE__ */ E("div", { ...s, className: y("w-full"), children: [
  a && /* @__PURE__ */ n("div", { className: "text-xs m-0 border-b-[1px] ", children: /* @__PURE__ */ n("p", { className: "my-1 mx-3 font-bold", children: a }) }),
  /* @__PURE__ */ n("div", { className: "py-3", children: r })
] }), gt = ({ children: r, onClick: a, text: s, variant: o = "primary", ...f }) => /* @__PURE__ */ n("button", { ...f, onClick: a, children: /* @__PURE__ */ E(
  "div",
  {
    className: y(
      "flex py-3 px-4 items-center cursor-pointer text-sm transition-all",
      vt[o]
    ),
    children: [
      /* @__PURE__ */ n("div", { className: "mr-2", children: r }),
      /* @__PURE__ */ n("p", { children: s })
    ]
  }
) }), St = Object.assign(mt, { Section: pt, Action: gt }), Ot = ({ size: r = "sm", onChangeValue: a, enabled: s }) => {
  const [o, f] = $(s ?? !1);
  return /* @__PURE__ */ E(
    wr,
    {
      checked: o,
      onChange: () => {
        a && a(!s), f((b) => !b);
      },
      className: y(
        s ? "bg-branding-pumpkin" : "bg-gray-200 ",
        "relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        r === "base" ? "h-6 w-12" : "h-5 w-10 "
      ),
      children: [
        /* @__PURE__ */ n("span", { className: "sr-only", children: "Use setting" }),
        /* @__PURE__ */ n(
          "span",
          {
            "aria-hidden": "true",
            className: y(
              s ? r === "base" ? "translate-x-6" : "translate-x-5" : "translate-x-0 border border-gray-600",
              "pointer-events-none inline-block  transform rounded-full  bg-white shadow ring-0 transition duration-200 ease-in-out",
              r === "base" ? "h-5 w-5" : "h-4 w-4"
            )
          }
        )
      ]
    }
  );
}, ht = {
  success: {
    className: "bg-surface-success-neutral divide-main-success text-main-success",
    icon: G
  },
  warning: {
    className: "bg-surface-warning-neutral divide-main-warning text-main-warning",
    icon: G
  },
  danger: {
    className: "bg-surface-danger-neutral divide-main-danger text-main-danger",
    icon: G
  },
  info: {
    className: "bg-surface-info-neutral divide-main-info text-main-info",
    icon: G
  }
}, bt = ({ variant: r = "success", message: a, t: s }) => {
  const o = ht[r];
  return /* @__PURE__ */ n(_r, { children: /* @__PURE__ */ n("div", { "aria-live": "assertive", children: /* @__PURE__ */ n("div", { className: "flex w-full flex-col items-center space-y-4 sm:items-end", children: /* @__PURE__ */ n(
    K,
    {
      show: s.visible,
      as: H,
      enter: "transform ease-out duration-300 transition",
      enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
      enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
      leave: "transition ease-in duration-100",
      leaveFrom: "opacity-100 translate-x-2",
      leaveTo: "opacity-0 translate-x-0",
      children: /* @__PURE__ */ n(
        "div",
        {
          className: y(
            "max-w-[340px] sm:max-w-[540px] md:max-w-[640px] shadow-md",
            s.visible ? "animate-enter" : "animate-leave"
          ),
          children: /* @__PURE__ */ E("div", { className: y("flex divide-x-2 px-6 py-5 gap-2 md:gap-4", o.className), children: [
            /* @__PURE__ */ E("div", { className: "flex gap-2 md:gap-4", children: [
              /* @__PURE__ */ n("span", { className: "mt-0.5", children: /* @__PURE__ */ n(o.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ n("p", { children: a }),
              /* @__PURE__ */ n("div", { className: "mt-0.5 items-start" })
            ] }),
            /* @__PURE__ */ n("div", { className: "pl-2", children: /* @__PURE__ */ n(
              "button",
              {
                className: "h-6 w-6 flex items-center justify-center text-gray-700 hover:text-gray-900",
                onClick: () => Me.dismiss(s.id),
                children: /* @__PURE__ */ n(ct, { className: "h-5 w-5" })
              }
            ) })
          ] })
        }
      )
    }
  ) }) }) });
}, jt = (r) => Me.custom((a) => /* @__PURE__ */ n(bt, { t: { ...a }, ...r })), Pt = ({ tabs: r, activeTab: a, onChange: s }) => {
  const [o, f] = $(a ?? ""), b = (c) => {
    s && s(c), f(c.value);
  }, g = "border-branding-pumpkin px-2 text-branding-pumpkin hover:cursor-pointer transition duration-75 ease-in";
  return /* @__PURE__ */ E("div", { className: "font-karla text-sm", children: [
    /* @__PURE__ */ E("div", { className: "sm:hidden", children: [
      /* @__PURE__ */ n("label", { htmlFor: "tabs", className: "sr-only", children: "Select a tab" }),
      /* @__PURE__ */ n(
        "select",
        {
          id: "tabs",
          name: "tabs",
          className: "block w-full rounded-t-md border-gray-300 focus:border-branding-pumpkin focus:ring-branding-pumpkin",
          children: r == null ? void 0 : r.map((c) => /* @__PURE__ */ n("option", { children: c.name }, c.name))
        }
      )
    ] }),
    /* @__PURE__ */ n("div", { className: "hidden sm:block", children: /* @__PURE__ */ n("nav", { className: " flex ", "aria-label": "Tabs", children: r.map((c) => (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      /* @__PURE__ */ n(
        "div",
        {
          onClick: () => b(c),
          className: y(
            c.value === o ? g : "border-transparent px-2 rounded-t-md text-main-body hover:text-main-body hover:bg-interactive-secondary-hovered hover:cursor-pointer hover:duration-100 hover:ease-in  ",
            "group inline-flex items-center py-2 border-b-2 font-medium text-sm"
          ),
          "aria-current": c.value === o ? "page" : void 0,
          children: /* @__PURE__ */ E("div", { className: "flex items-center py-0.5 px-2 ", children: [
            c.icon && /* @__PURE__ */ n(
              c.icon,
              {
                className: y(
                  c.value === o ? "text-branding-pumpkin" : "text-main-body group-hover:text-main-body",
                  "-ml-0.5 mr-2 h-5 w-4"
                ),
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ n("span", { className: "leading-none py-1", children: c.name })
          ] })
        },
        c.name
      )
    )) }) })
  ] });
}, xt = ({
  theme: r = "light",
  className: a,
  logoUrl: s,
  children: o,
  onChange: f,
  activeNav: b,
  ...g
}) => /* @__PURE__ */ E(
  "nav",
  {
    "data-testId": "sidebar-navigation",
    className: y(
      "h-screen shadow-sm w-[88px]",
      r === "light" ? "bg-white" : "bg-branding-navy",
      a
    ),
    ...g,
    children: [
      /* @__PURE__ */ n("figure", { className: "h-[66px] w-full flex items-center justify-center px-1.5", children: /* @__PURE__ */ n(
        "img",
        {
          src: s ?? r === "light" ? "https://kmc.solutions/media/ufgldhzy/kmc-logo-2018-optimized.png" : "https://kmc.solutions/media/aikesh01/kmc-solutions.png",
          alt: "KMC-logo",
          className: "object-contain h-[20px] w-auto"
        }
      ) }),
      /* @__PURE__ */ n("ul", { className: "p-1 space-y-2", children: o && Array.isArray(o) ? o.map((c, w) => Z.cloneElement(c, { key: w, activeNav: b, onChange: f, theme: r })) : Z.cloneElement(o, { activeNav: b, onChange: f, theme: r }) })
    ]
  }
), yt = ({ id: r, icon: a, children: s, activeNav: o, className: f, onChange: b, theme: g }) => /* @__PURE__ */ n(
  "li",
  {
    "data-testId": `sidebar-navigation-item-${r}`,
    className: y(
      "w-full rounded group border border-transparent transition-all active:scale-95 duration-100",
      o === r && "bg-branding-pumpkin hover:border-transparent",
      g === "light" && o !== r && "hover:bg-gray-700 hover:bg-opacity-10 hover:border-gray-50",
      g === "dark" && o !== r && "hover:bg-gray-700 hover:bg-opacity-50 hover:border-gray-600",
      f && f
    ),
    children: /* @__PURE__ */ n("button", { onClick: () => b && b(r), className: "w-full h-full px-1 py-2 inline-block", children: /* @__PURE__ */ E(
      "span",
      {
        className: y(
          "flex flex-col items-center gap-1 transition-all duration-200",
          o === r && g === "light" && "text-white",
          o !== r && g === "light" && "text-gray-700",
          o === r && g === "dark" && "text-white",
          o !== r && g === "dark" && "text-gray-500"
        ),
        children: [
          a,
          /* @__PURE__ */ n("span", { className: "text font-karla font-bold text-xs", children: s })
        ]
      }
    ) })
  }
), It = Object.assign(xt, { Item: yt });
export {
  Nt as AlertDialog,
  $e as Button,
  _t as Checkbox,
  X as Dialog,
  kt as Input,
  Ft as Radio,
  Tt as Select,
  It as Sidebar,
  St as SplitButton,
  Ot as Switch,
  Pt as Tabs,
  bt as Toast,
  kr as buttonVariantToClass,
  jt as showToast
};
