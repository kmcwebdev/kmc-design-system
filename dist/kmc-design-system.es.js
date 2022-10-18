import we from "react";
const or = (...g) => g.filter(Boolean).join(" ");
var xe = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function sr() {
  if (_e)
    return D;
  _e = 1;
  var g = we, E = Symbol.for("react.element"), P = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, A = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(_, l, x) {
    var d, b = {}, R = null, $ = null;
    x !== void 0 && (R = "" + x), l.key !== void 0 && (R = "" + l.key), l.ref !== void 0 && ($ = l.ref);
    for (d in l)
      h.call(l, d) && !I.hasOwnProperty(d) && (b[d] = l[d]);
    if (_ && _.defaultProps)
      for (d in l = _.defaultProps, l)
        b[d] === void 0 && (b[d] = l[d]);
    return { $$typeof: E, type: _, key: R, ref: $, props: b, _owner: A.current };
  }
  return D.Fragment = P, D.jsx = S, D.jsxs = S, D;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function ur() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && function() {
    var g = we, E = Symbol.for("react.element"), P = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), _ = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), H = Symbol.iterator, Te = "@@iterator";
    function Oe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = H && e[H] || e[Te];
      return typeof r == "function" ? r : null;
    }
    var T = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ce("error", e, t);
      }
    }
    function Ce(e, r, t) {
      {
        var n = T.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Pe = !1, Se = !1, je = !1, ke = !1, De = !1, X;
    X = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === I || De || e === A || e === x || e === d || ke || e === $ || Pe || Se || je || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === b || e.$$typeof === S || e.$$typeof === _ || e.$$typeof === l || e.$$typeof === X || e.getModuleId !== void 0));
    }
    function Ae(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Z(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case P:
          return "Portal";
        case I:
          return "Profiler";
        case A:
          return "StrictMode";
        case x:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return Z(r) + ".Consumer";
          case S:
            var t = e;
            return Z(t._context) + ".Provider";
          case l:
            return Ae(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : y(e.type) || "Memo";
          case R: {
            var o = e, s = o._payload, i = o._init;
            try {
              return y(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, j = 0, Q, ee, re, te, ne, ae, ie;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function Ie() {
      {
        if (j === 0) {
          Q = console.log, ee = console.info, re = console.warn, te = console.error, ne = console.group, ae = console.groupCollapsed, ie = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: oe,
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
        j++;
      }
    }
    function $e() {
      {
        if (j--, j === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: Q
            }),
            info: w({}, e, {
              value: ee
            }),
            warn: w({}, e, {
              value: re
            }),
            error: w({}, e, {
              value: te
            }),
            group: w({}, e, {
              value: ne
            }),
            groupCollapsed: w({}, e, {
              value: ae
            }),
            groupEnd: w({}, e, {
              value: ie
            })
          });
        }
        j < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = T.ReactCurrentDispatcher, U;
    function W(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            U = n && n[1] || "";
          }
        return `
` + U + e;
      }
    }
    var B = !1, N;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      N = new We();
    }
    function se(e, r) {
      if (!e || B)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = M.current, M.current = null, Ie();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (m) {
              n = m;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (m) {
              n = m;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            n = m;
          }
          e();
        }
      } catch (m) {
        if (m && n && typeof m.stack == "string") {
          for (var a = m.stack.split(`
`), v = n.stack.split(`
`), u = a.length - 1, c = v.length - 1; u >= 1 && c >= 0 && a[u] !== v[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (a[u] !== v[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || a[u] !== v[c]) {
                    var p = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, p), p;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        B = !1, M.current = s, $e(), Error.prepareStackTrace = o;
      }
      var C = e ? e.displayName || e.name : "", Ee = C ? W(C) : "";
      return typeof e == "function" && N.set(e, Ee), Ee;
    }
    function Ne(e, r, t) {
      return se(e, !1);
    }
    function Ye(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, Ye(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case x:
          return W("Suspense");
        case d:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ne(e.render);
          case b:
            return Y(e.type, r, t);
          case R: {
            var n = e, o = n._payload, s = n._init;
            try {
              return Y(s(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, ue = {}, ce = T.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        ce.setExtraStackFrame(t);
      } else
        ce.setExtraStackFrame(null);
    }
    function Le(e, r, t, n, o) {
      {
        var s = Function.call.bind(L);
        for (var i in e)
          if (s(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (V(o), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), V(null)), a instanceof Error && !(a.message in ue) && (ue[a.message] = !0, V(o), f("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Ve = Array.isArray;
    function q(e) {
      return Ve(e);
    }
    function Me(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ue(e) {
      try {
        return le(e), !1;
      } catch {
        return !0;
      }
    }
    function le(e) {
      return "" + e;
    }
    function fe(e) {
      if (Ue(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Me(e)), le(e);
    }
    var k = T.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ve, de, J;
    J = {};
    function qe(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Je(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      if (typeof e.ref == "string" && k.current && r && k.current.stateNode !== r) {
        var t = y(k.current.type);
        J[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(k.current.type), e.ref), J[t] = !0);
      }
    }
    function ze(e, r) {
      {
        var t = function() {
          ve || (ve = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          de || (de = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var He = function(e, r, t, n, o, s, i) {
      var a = {
        $$typeof: E,
        type: e,
        key: r,
        ref: t,
        props: i,
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Xe(e, r, t, n, o) {
      {
        var s, i = {}, a = null, v = null;
        t !== void 0 && (fe(t), a = "" + t), Je(r) && (fe(r.key), a = "" + r.key), qe(r) && (v = r.ref, Ge(r, o));
        for (s in r)
          L.call(r, s) && !Be.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            i[s] === void 0 && (i[s] = u[s]);
        }
        if (a || v) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && ze(i, c), v && Ke(i, c);
        }
        return He(e, a, v, o, n, k.current, i);
      }
    }
    var G = T.ReactCurrentOwner, pe = T.ReactDebugCurrentFrame;
    function O(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function ge() {
      {
        if (G.current) {
          var e = y(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ze(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var he = {};
    function Qe(e) {
      {
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = Qe(r);
        if (he[t])
          return;
        he[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + y(e._owner.type) + "."), O(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), O(null);
      }
    }
    function ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && be(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Oe(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              K(i.value) && be(i.value, r);
        }
      }
    }
    function er(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = y(r);
          Le(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = y(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            O(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), O(null);
            break;
          }
        }
        e.ref !== null && (O(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), O(null));
      }
    }
    function me(e, r, t, n, o, s) {
      {
        var i = Fe(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = Ze(o);
          v ? a += v : a += ge();
          var u;
          e === null ? u = "null" : q(e) ? u = "array" : e !== void 0 && e.$$typeof === E ? (u = "<" + (y(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var c = Xe(e, r, t, o, s);
        if (c == null)
          return c;
        if (i) {
          var p = r.children;
          if (p !== void 0)
            if (n)
              if (q(p)) {
                for (var C = 0; C < p.length; C++)
                  ye(p[C], e);
                Object.freeze && Object.freeze(p);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(p, e);
        }
        return e === h ? rr(c) : er(c), c;
      }
    }
    function tr(e, r, t) {
      return me(e, r, t, !0);
    }
    function nr(e, r, t) {
      return me(e, r, t, !1);
    }
    var ar = nr, ir = tr;
    F.Fragment = h, F.jsx = ar, F.jsxs = ir;
  }()), F;
}
(function(g) {
  process.env.NODE_ENV === "production" ? g.exports = sr() : g.exports = ur();
})(xe);
const cr = xe.exports.jsx, vr = ({
  children: g,
  variant: E = "filled-primary",
  size: P = "base",
  ...h
}) => /* @__PURE__ */ cr("button", {
  ...h,
  className: or("rounded outline-none shadow-sm-3 hover:shadow-sm-4 focus:shadow-sm-4 active:shadow-sm-1 transition-all duration-150 font-bold whitespace-nowrap px-6 self-end", lr[E], P === "base" ? "py-3" : "py-2", h.className && h.className),
  children: g
}), lr = {
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
export {
  vr as Button
};
