var sf = { exports: {} }, Tn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yh;
function p0() {
  if (yh) return Tn;
  yh = 1;
  var r = Symbol.for("react.transitional.element"), g = Symbol.for("react.fragment");
  function v(f, z, D) {
    var k = null;
    if (D !== void 0 && (k = "" + D), z.key !== void 0 && (k = "" + z.key), "key" in z) {
      D = {};
      for (var C in z)
        C !== "key" && (D[C] = z[C]);
    } else D = z;
    return z = D.ref, {
      $$typeof: r,
      type: f,
      key: k,
      ref: z !== void 0 ? z : null,
      props: D
    };
  }
  return Tn.Fragment = g, Tn.jsx = v, Tn.jsxs = v, Tn;
}
var vh;
function b0() {
  return vh || (vh = 1, sf.exports = p0()), sf.exports;
}
var E = b0(), hf = { exports: {} }, xn = {}, df = { exports: {} }, mf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gh;
function S0() {
  return gh || (gh = 1, (function(r) {
    function g(T, N) {
      var X = T.length;
      T.push(N);
      e: for (; 0 < X; ) {
        var me = X - 1 >>> 1, s = T[me];
        if (0 < z(s, N))
          T[me] = N, T[X] = s, X = me;
        else break e;
      }
    }
    function v(T) {
      return T.length === 0 ? null : T[0];
    }
    function f(T) {
      if (T.length === 0) return null;
      var N = T[0], X = T.pop();
      if (X !== N) {
        T[0] = X;
        e: for (var me = 0, s = T.length, w = s >>> 1; me < w; ) {
          var H = 2 * (me + 1) - 1, R = T[H], G = H + 1, ue = T[G];
          if (0 > z(R, X))
            G < s && 0 > z(ue, R) ? (T[me] = ue, T[G] = X, me = G) : (T[me] = R, T[H] = X, me = H);
          else if (G < s && 0 > z(ue, X))
            T[me] = ue, T[G] = X, me = G;
          else break e;
        }
      }
      return N;
    }
    function z(T, N) {
      var X = T.sortIndex - N.sortIndex;
      return X !== 0 ? X : T.id - N.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var D = performance;
      r.unstable_now = function() {
        return D.now();
      };
    } else {
      var k = Date, C = k.now();
      r.unstable_now = function() {
        return k.now() - C;
      };
    }
    var _ = [], S = [], O = 1, L = null, B = 3, $ = !1, F = !1, ge = !1, te = !1, ne = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, de = typeof setImmediate < "u" ? setImmediate : null;
    function De(T) {
      for (var N = v(S); N !== null; ) {
        if (N.callback === null) f(S);
        else if (N.startTime <= T)
          f(S), N.sortIndex = N.expirationTime, g(_, N);
        else break;
        N = v(S);
      }
    }
    function K(T) {
      if (ge = !1, De(T), !F)
        if (v(_) !== null)
          F = !0, Ne || (Ne = !0, ze());
        else {
          var N = v(S);
          N !== null && _e(K, N.startTime - T);
        }
    }
    var Ne = !1, ke = -1, Ze = 5, Fe = -1;
    function zt() {
      return te ? !0 : !(r.unstable_now() - Fe < Ze);
    }
    function ft() {
      if (te = !1, Ne) {
        var T = r.unstable_now();
        Fe = T;
        var N = !0;
        try {
          e: {
            F = !1, ge && (ge = !1, ee(ke), ke = -1), $ = !0;
            var X = B;
            try {
              t: {
                for (De(T), L = v(_); L !== null && !(L.expirationTime > T && zt()); ) {
                  var me = L.callback;
                  if (typeof me == "function") {
                    L.callback = null, B = L.priorityLevel;
                    var s = me(
                      L.expirationTime <= T
                    );
                    if (T = r.unstable_now(), typeof s == "function") {
                      L.callback = s, De(T), N = !0;
                      break t;
                    }
                    L === v(_) && f(_), De(T);
                  } else f(_);
                  L = v(_);
                }
                if (L !== null) N = !0;
                else {
                  var w = v(S);
                  w !== null && _e(
                    K,
                    w.startTime - T
                  ), N = !1;
                }
              }
              break e;
            } finally {
              L = null, B = X, $ = !1;
            }
            N = void 0;
          }
        } finally {
          N ? ze() : Ne = !1;
        }
      }
    }
    var ze;
    if (typeof de == "function")
      ze = function() {
        de(ft);
      };
    else if (typeof MessageChannel < "u") {
      var _t = new MessageChannel(), Ot = _t.port2;
      _t.port1.onmessage = ft, ze = function() {
        Ot.postMessage(null);
      };
    } else
      ze = function() {
        ne(ft, 0);
      };
    function _e(T, N) {
      ke = ne(function() {
        T(r.unstable_now());
      }, N);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, r.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ze = 0 < T ? Math.floor(1e3 / T) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, r.unstable_next = function(T) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = B;
      }
      var X = B;
      B = N;
      try {
        return T();
      } finally {
        B = X;
      }
    }, r.unstable_requestPaint = function() {
      te = !0;
    }, r.unstable_runWithPriority = function(T, N) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var X = B;
      B = T;
      try {
        return N();
      } finally {
        B = X;
      }
    }, r.unstable_scheduleCallback = function(T, N, X) {
      var me = r.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? me + X : me) : X = me, T) {
        case 1:
          var s = -1;
          break;
        case 2:
          s = 250;
          break;
        case 5:
          s = 1073741823;
          break;
        case 4:
          s = 1e4;
          break;
        default:
          s = 5e3;
      }
      return s = X + s, T = {
        id: O++,
        callback: N,
        priorityLevel: T,
        startTime: X,
        expirationTime: s,
        sortIndex: -1
      }, X > me ? (T.sortIndex = X, g(S, T), v(_) === null && T === v(S) && (ge ? (ee(ke), ke = -1) : ge = !0, _e(K, X - me))) : (T.sortIndex = s, g(_, T), F || $ || (F = !0, Ne || (Ne = !0, ze()))), T;
    }, r.unstable_shouldYield = zt, r.unstable_wrapCallback = function(T) {
      var N = B;
      return function() {
        var X = B;
        B = N;
        try {
          return T.apply(this, arguments);
        } finally {
          B = X;
        }
      };
    };
  })(mf)), mf;
}
var ph;
function T0() {
  return ph || (ph = 1, df.exports = S0()), df.exports;
}
var yf = { exports: {} }, V = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bh;
function x0() {
  if (bh) return V;
  bh = 1;
  var r = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), k = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), S = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), L = Symbol.iterator;
  function B(s) {
    return s === null || typeof s != "object" ? null : (s = L && s[L] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var $ = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, F = Object.assign, ge = {};
  function te(s, w, H) {
    this.props = s, this.context = w, this.refs = ge, this.updater = H || $;
  }
  te.prototype.isReactComponent = {}, te.prototype.setState = function(s, w) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, w, "setState");
  }, te.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function ne() {
  }
  ne.prototype = te.prototype;
  function ee(s, w, H) {
    this.props = s, this.context = w, this.refs = ge, this.updater = H || $;
  }
  var de = ee.prototype = new ne();
  de.constructor = ee, F(de, te.prototype), de.isPureReactComponent = !0;
  var De = Array.isArray, K = { H: null, A: null, T: null, S: null, V: null }, Ne = Object.prototype.hasOwnProperty;
  function ke(s, w, H, R, G, ue) {
    return H = ue.ref, {
      $$typeof: r,
      type: s,
      key: w,
      ref: H !== void 0 ? H : null,
      props: ue
    };
  }
  function Ze(s, w) {
    return ke(
      s.type,
      w,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function Fe(s) {
    return typeof s == "object" && s !== null && s.$$typeof === r;
  }
  function zt(s) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(H) {
      return w[H];
    });
  }
  var ft = /\/+/g;
  function ze(s, w) {
    return typeof s == "object" && s !== null && s.key != null ? zt("" + s.key) : w.toString(36);
  }
  function _t() {
  }
  function Ot(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(_t, _t) : (s.status = "pending", s.then(
          function(w) {
            s.status === "pending" && (s.status = "fulfilled", s.value = w);
          },
          function(w) {
            s.status === "pending" && (s.status = "rejected", s.reason = w);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function _e(s, w, H, R, G) {
    var ue = typeof s;
    (ue === "undefined" || ue === "boolean") && (s = null);
    var Z = !1;
    if (s === null) Z = !0;
    else
      switch (ue) {
        case "bigint":
        case "string":
        case "number":
          Z = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case r:
            case g:
              Z = !0;
              break;
            case O:
              return Z = s._init, _e(
                Z(s._payload),
                w,
                H,
                R,
                G
              );
          }
      }
    if (Z)
      return G = G(s), Z = R === "" ? "." + ze(s, 0) : R, De(G) ? (H = "", Z != null && (H = Z.replace(ft, "$&/") + "/"), _e(G, w, H, "", function(Vt) {
        return Vt;
      })) : G != null && (Fe(G) && (G = Ze(
        G,
        H + (G.key == null || s && s.key === G.key ? "" : ("" + G.key).replace(
          ft,
          "$&/"
        ) + "/") + Z
      )), w.push(G)), 1;
    Z = 0;
    var Ie = R === "" ? "." : R + ":";
    if (De(s))
      for (var pe = 0; pe < s.length; pe++)
        R = s[pe], ue = Ie + ze(R, pe), Z += _e(
          R,
          w,
          H,
          ue,
          G
        );
    else if (pe = B(s), typeof pe == "function")
      for (s = pe.call(s), pe = 0; !(R = s.next()).done; )
        R = R.value, ue = Ie + ze(R, pe++), Z += _e(
          R,
          w,
          H,
          ue,
          G
        );
    else if (ue === "object") {
      if (typeof s.then == "function")
        return _e(
          Ot(s),
          w,
          H,
          R,
          G
        );
      throw w = String(s), Error(
        "Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Z;
  }
  function T(s, w, H) {
    if (s == null) return s;
    var R = [], G = 0;
    return _e(s, R, "", "", function(ue) {
      return w.call(H, ue, G++);
    }), R;
  }
  function N(s) {
    if (s._status === -1) {
      var w = s._result;
      w = w(), w.then(
        function(H) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = H);
        },
        function(H) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = H);
        }
      ), s._status === -1 && (s._status = 0, s._result = w);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var X = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var w = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(w)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function me() {
  }
  return V.Children = {
    map: T,
    forEach: function(s, w, H) {
      T(
        s,
        function() {
          w.apply(this, arguments);
        },
        H
      );
    },
    count: function(s) {
      var w = 0;
      return T(s, function() {
        w++;
      }), w;
    },
    toArray: function(s) {
      return T(s, function(w) {
        return w;
      }) || [];
    },
    only: function(s) {
      if (!Fe(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, V.Component = te, V.Fragment = v, V.Profiler = z, V.PureComponent = ee, V.StrictMode = f, V.Suspense = _, V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, V.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return K.H.useMemoCache(s);
    }
  }, V.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, V.cloneElement = function(s, w, H) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var R = F({}, s.props), G = s.key, ue = void 0;
    if (w != null)
      for (Z in w.ref !== void 0 && (ue = void 0), w.key !== void 0 && (G = "" + w.key), w)
        !Ne.call(w, Z) || Z === "key" || Z === "__self" || Z === "__source" || Z === "ref" && w.ref === void 0 || (R[Z] = w[Z]);
    var Z = arguments.length - 2;
    if (Z === 1) R.children = H;
    else if (1 < Z) {
      for (var Ie = Array(Z), pe = 0; pe < Z; pe++)
        Ie[pe] = arguments[pe + 2];
      R.children = Ie;
    }
    return ke(s.type, G, void 0, void 0, ue, R);
  }, V.createContext = function(s) {
    return s = {
      $$typeof: k,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: D,
      _context: s
    }, s;
  }, V.createElement = function(s, w, H) {
    var R, G = {}, ue = null;
    if (w != null)
      for (R in w.key !== void 0 && (ue = "" + w.key), w)
        Ne.call(w, R) && R !== "key" && R !== "__self" && R !== "__source" && (G[R] = w[R]);
    var Z = arguments.length - 2;
    if (Z === 1) G.children = H;
    else if (1 < Z) {
      for (var Ie = Array(Z), pe = 0; pe < Z; pe++)
        Ie[pe] = arguments[pe + 2];
      G.children = Ie;
    }
    if (s && s.defaultProps)
      for (R in Z = s.defaultProps, Z)
        G[R] === void 0 && (G[R] = Z[R]);
    return ke(s, ue, void 0, void 0, null, G);
  }, V.createRef = function() {
    return { current: null };
  }, V.forwardRef = function(s) {
    return { $$typeof: C, render: s };
  }, V.isValidElement = Fe, V.lazy = function(s) {
    return {
      $$typeof: O,
      _payload: { _status: -1, _result: s },
      _init: N
    };
  }, V.memo = function(s, w) {
    return {
      $$typeof: S,
      type: s,
      compare: w === void 0 ? null : w
    };
  }, V.startTransition = function(s) {
    var w = K.T, H = {};
    K.T = H;
    try {
      var R = s(), G = K.S;
      G !== null && G(H, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then(me, X);
    } catch (ue) {
      X(ue);
    } finally {
      K.T = w;
    }
  }, V.unstable_useCacheRefresh = function() {
    return K.H.useCacheRefresh();
  }, V.use = function(s) {
    return K.H.use(s);
  }, V.useActionState = function(s, w, H) {
    return K.H.useActionState(s, w, H);
  }, V.useCallback = function(s, w) {
    return K.H.useCallback(s, w);
  }, V.useContext = function(s) {
    return K.H.useContext(s);
  }, V.useDebugValue = function() {
  }, V.useDeferredValue = function(s, w) {
    return K.H.useDeferredValue(s, w);
  }, V.useEffect = function(s, w, H) {
    var R = K.H;
    if (typeof H == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return R.useEffect(s, w);
  }, V.useId = function() {
    return K.H.useId();
  }, V.useImperativeHandle = function(s, w, H) {
    return K.H.useImperativeHandle(s, w, H);
  }, V.useInsertionEffect = function(s, w) {
    return K.H.useInsertionEffect(s, w);
  }, V.useLayoutEffect = function(s, w) {
    return K.H.useLayoutEffect(s, w);
  }, V.useMemo = function(s, w) {
    return K.H.useMemo(s, w);
  }, V.useOptimistic = function(s, w) {
    return K.H.useOptimistic(s, w);
  }, V.useReducer = function(s, w, H) {
    return K.H.useReducer(s, w, H);
  }, V.useRef = function(s) {
    return K.H.useRef(s);
  }, V.useState = function(s) {
    return K.H.useState(s);
  }, V.useSyncExternalStore = function(s, w, H) {
    return K.H.useSyncExternalStore(
      s,
      w,
      H
    );
  }, V.useTransition = function() {
    return K.H.useTransition();
  }, V.version = "19.1.0", V;
}
var Sh;
function pf() {
  return Sh || (Sh = 1, yf.exports = x0()), yf.exports;
}
var vf = { exports: {} }, Qe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Th;
function A0() {
  if (Th) return Qe;
  Th = 1;
  var r = pf();
  function g(_) {
    var S = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var O = 2; O < arguments.length; O++)
        S += "&args[]=" + encodeURIComponent(arguments[O]);
    }
    return "Minified React error #" + _ + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function v() {
  }
  var f = {
    d: {
      f: v,
      r: function() {
        throw Error(g(522));
      },
      D: v,
      C: v,
      L: v,
      m: v,
      X: v,
      S: v,
      M: v
    },
    p: 0,
    findDOMNode: null
  }, z = Symbol.for("react.portal");
  function D(_, S, O) {
    var L = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: z,
      key: L == null ? null : "" + L,
      children: _,
      containerInfo: S,
      implementation: O
    };
  }
  var k = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function C(_, S) {
    if (_ === "font") return "";
    if (typeof S == "string")
      return S === "use-credentials" ? S : "";
  }
  return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, Qe.createPortal = function(_, S) {
    var O = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)
      throw Error(g(299));
    return D(_, S, null, O);
  }, Qe.flushSync = function(_) {
    var S = k.T, O = f.p;
    try {
      if (k.T = null, f.p = 2, _) return _();
    } finally {
      k.T = S, f.p = O, f.d.f();
    }
  }, Qe.preconnect = function(_, S) {
    typeof _ == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, f.d.C(_, S));
  }, Qe.prefetchDNS = function(_) {
    typeof _ == "string" && f.d.D(_);
  }, Qe.preinit = function(_, S) {
    if (typeof _ == "string" && S && typeof S.as == "string") {
      var O = S.as, L = C(O, S.crossOrigin), B = typeof S.integrity == "string" ? S.integrity : void 0, $ = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
      O === "style" ? f.d.S(
        _,
        typeof S.precedence == "string" ? S.precedence : void 0,
        {
          crossOrigin: L,
          integrity: B,
          fetchPriority: $
        }
      ) : O === "script" && f.d.X(_, {
        crossOrigin: L,
        integrity: B,
        fetchPriority: $,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0
      });
    }
  }, Qe.preinitModule = function(_, S) {
    if (typeof _ == "string")
      if (typeof S == "object" && S !== null) {
        if (S.as == null || S.as === "script") {
          var O = C(
            S.as,
            S.crossOrigin
          );
          f.d.M(_, {
            crossOrigin: O,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0
          });
        }
      } else S == null && f.d.M(_);
  }, Qe.preload = function(_, S) {
    if (typeof _ == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
      var O = S.as, L = C(O, S.crossOrigin);
      f.d.L(_, O, {
        crossOrigin: L,
        integrity: typeof S.integrity == "string" ? S.integrity : void 0,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0,
        type: typeof S.type == "string" ? S.type : void 0,
        fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
        referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
        imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
        imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
        media: typeof S.media == "string" ? S.media : void 0
      });
    }
  }, Qe.preloadModule = function(_, S) {
    if (typeof _ == "string")
      if (S) {
        var O = C(S.as, S.crossOrigin);
        f.d.m(_, {
          as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
          crossOrigin: O,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0
        });
      } else f.d.m(_);
  }, Qe.requestFormReset = function(_) {
    f.d.r(_);
  }, Qe.unstable_batchedUpdates = function(_, S) {
    return _(S);
  }, Qe.useFormState = function(_, S, O) {
    return k.H.useFormState(_, S, O);
  }, Qe.useFormStatus = function() {
    return k.H.useHostTransitionStatus();
  }, Qe.version = "19.1.0", Qe;
}
var xh;
function E0() {
  if (xh) return vf.exports;
  xh = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (g) {
        console.error(g);
      }
  }
  return r(), vf.exports = A0(), vf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ah;
function M0() {
  if (Ah) return xn;
  Ah = 1;
  var r = T0(), g = pf(), v = E0();
  function f(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function z(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function D(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function k(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function C(e) {
    if (D(e) !== e)
      throw Error(f(188));
  }
  function _(e) {
    var t = e.alternate;
    if (!t) {
      if (t = D(e), t === null) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var n = a.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (l = n.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === a) return C(n), e;
          if (u === l) return C(n), t;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (a.return !== l.return) a = n, l = u;
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === a) {
            i = !0, a = n, l = u;
            break;
          }
          if (c === l) {
            i = !0, l = n, a = u;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === a) {
              i = !0, a = u, l = n;
              break;
            }
            if (c === l) {
              i = !0, l = u, a = n;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (a.alternate !== l) throw Error(f(190));
    }
    if (a.tag !== 3) throw Error(f(188));
    return a.stateNode.current === a ? e : t;
  }
  function S(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = S(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var O = Object.assign, L = Symbol.for("react.element"), B = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), ge = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), ee = Symbol.for("react.consumer"), de = Symbol.for("react.context"), De = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), Ne = Symbol.for("react.suspense_list"), ke = Symbol.for("react.memo"), Ze = Symbol.for("react.lazy"), Fe = Symbol.for("react.activity"), zt = Symbol.for("react.memo_cache_sentinel"), ft = Symbol.iterator;
  function ze(e) {
    return e === null || typeof e != "object" ? null : (e = ft && e[ft] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _t = Symbol.for("react.client.reference");
  function Ot(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === _t ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case F:
        return "Fragment";
      case te:
        return "Profiler";
      case ge:
        return "StrictMode";
      case K:
        return "Suspense";
      case Ne:
        return "SuspenseList";
      case Fe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case $:
          return "Portal";
        case de:
          return (e.displayName || "Context") + ".Provider";
        case ee:
          return (e._context.displayName || "Context") + ".Consumer";
        case De:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ke:
          return t = e.displayName || null, t !== null ? t : Ot(e.type) || "Memo";
        case Ze:
          t = e._payload, e = e._init;
          try {
            return Ot(e(t));
          } catch {
          }
      }
    return null;
  }
  var _e = Array.isArray, T = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = v.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, me = [], s = -1;
  function w(e) {
    return { current: e };
  }
  function H(e) {
    0 > s || (e.current = me[s], me[s] = null, s--);
  }
  function R(e, t) {
    s++, me[s] = e.current, e.current = t;
  }
  var G = w(null), ue = w(null), Z = w(null), Ie = w(null);
  function pe(e, t) {
    switch (R(Z, t), R(ue, e), R(G, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Qs(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Qs(t), e = Zs(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    H(G), R(G, e);
  }
  function Vt() {
    H(G), H(ue), H(Z);
  }
  function $u(e) {
    e.memoizedState !== null && R(Ie, e);
    var t = G.current, a = Zs(t, e.type);
    t !== a && (R(ue, e), R(G, a));
  }
  function zn(e) {
    ue.current === e && (H(G), H(ue)), Ie.current === e && (H(Ie), vn._currentValue = X);
  }
  var Wu = Object.prototype.hasOwnProperty, Fu = r.unstable_scheduleCallback, Iu = r.unstable_cancelCallback, Wh = r.unstable_shouldYield, Fh = r.unstable_requestPaint, xt = r.unstable_now, Ih = r.unstable_getCurrentPriorityLevel, xf = r.unstable_ImmediatePriority, Af = r.unstable_UserBlockingPriority, _n = r.unstable_NormalPriority, Ph = r.unstable_LowPriority, Ef = r.unstable_IdlePriority, ed = r.log, td = r.unstable_setDisableYieldValue, Al = null, Pe = null;
  function Kt(e) {
    if (typeof ed == "function" && td(e), Pe && typeof Pe.setStrictMode == "function")
      try {
        Pe.setStrictMode(Al, e);
      } catch {
      }
  }
  var et = Math.clz32 ? Math.clz32 : nd, ad = Math.log, ld = Math.LN2;
  function nd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ad(e) / ld | 0) | 0;
  }
  var On = 256, Rn = 4194304;
  function pa(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Nn(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0, u = e.suspendedLanes, i = e.pingedLanes;
    e = e.warmLanes;
    var c = l & 134217727;
    return c !== 0 ? (l = c & ~u, l !== 0 ? n = pa(l) : (i &= c, i !== 0 ? n = pa(i) : a || (a = c & ~e, a !== 0 && (n = pa(a))))) : (c = l & ~u, c !== 0 ? n = pa(c) : i !== 0 ? n = pa(i) : a || (a = l & ~e, a !== 0 && (n = pa(a)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, a = t & -t, u >= a || u === 32 && (a & 4194048) !== 0) ? t : n;
  }
  function El(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ud(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Mf() {
    var e = On;
    return On <<= 1, (On & 4194048) === 0 && (On = 256), e;
  }
  function wf() {
    var e = Rn;
    return Rn <<= 1, (Rn & 62914560) === 0 && (Rn = 4194304), e;
  }
  function Pu(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ml(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function id(e, t, a, l, n, u) {
    var i = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var c = e.entanglements, o = e.expirationTimes, y = e.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var x = 31 - et(a), M = 1 << x;
      c[x] = 0, o[x] = -1;
      var p = y[x];
      if (p !== null)
        for (y[x] = null, x = 0; x < p.length; x++) {
          var b = p[x];
          b !== null && (b.lane &= -536870913);
        }
      a &= ~M;
    }
    l !== 0 && Df(e, l, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t));
  }
  function Df(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - et(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 4194090;
  }
  function zf(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - et(a), n = 1 << l;
      n & t | e[l] & t && (e[l] |= t), a &= ~n;
    }
  }
  function ei(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ti(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function _f() {
    var e = N.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : oh(e.type));
  }
  function cd(e, t) {
    var a = N.p;
    try {
      return N.p = e, t();
    } finally {
      N.p = a;
    }
  }
  var Jt = Math.random().toString(36).slice(2), Ye = "__reactFiber$" + Jt, Ve = "__reactProps$" + Jt, Ca = "__reactContainer$" + Jt, ai = "__reactEvents$" + Jt, fd = "__reactListeners$" + Jt, od = "__reactHandles$" + Jt, Of = "__reactResources$" + Jt, wl = "__reactMarker$" + Jt;
  function li(e) {
    delete e[Ye], delete e[Ve], delete e[ai], delete e[fd], delete e[od];
  }
  function ja(e) {
    var t = e[Ye];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ca] || a[Ye]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Js(e); e !== null; ) {
            if (a = e[Ye]) return a;
            e = Js(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ba(e) {
    if (e = e[Ye] || e[Ca]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Dl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function Ga(e) {
    var t = e[Of];
    return t || (t = e[Of] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function He(e) {
    e[wl] = !0;
  }
  var Rf = /* @__PURE__ */ new Set(), Nf = {};
  function ba(e, t) {
    qa(e, t), qa(e + "Capture", t);
  }
  function qa(e, t) {
    for (Nf[e] = t, e = 0; e < t.length; e++)
      Rf.add(t[e]);
  }
  var rd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), kf = {}, Hf = {};
  function sd(e) {
    return Wu.call(Hf, e) ? !0 : Wu.call(kf, e) ? !1 : rd.test(e) ? Hf[e] = !0 : (kf[e] = !0, !1);
  }
  function kn(e, t, a) {
    if (sd(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Hn(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function Rt(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  var ni, Uf;
  function Ya(e) {
    if (ni === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ni = t && t[1] || "", Uf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ni + e + Uf;
  }
  var ui = !1;
  function ii(e, t) {
    if (!e || ui) return "";
    ui = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var M = function() {
                throw Error();
              };
              if (Object.defineProperty(M.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(M, []);
                } catch (b) {
                  var p = b;
                }
                Reflect.construct(e, [], M);
              } else {
                try {
                  M.call();
                } catch (b) {
                  p = b;
                }
                e.call(M.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                p = b;
              }
              (M = e()) && typeof M.catch == "function" && M.catch(function() {
              });
            }
          } catch (b) {
            if (b && p && typeof b.stack == "string")
              return [b.stack, p.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = l.DetermineComponentFrameRoot(), i = u[0], c = u[1];
      if (i && c) {
        var o = i.split(`
`), y = c.split(`
`);
        for (n = l = 0; l < o.length && !o[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; n < y.length && !y[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (l === o.length || n === y.length)
          for (l = o.length - 1, n = y.length - 1; 1 <= l && 0 <= n && o[l] !== y[n]; )
            n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (o[l] !== y[n]) {
            if (l !== 1 || n !== 1)
              do
                if (l--, n--, 0 > n || o[l] !== y[n]) {
                  var x = `
` + o[l].replace(" at new ", " at ");
                  return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), x;
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      ui = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ya(a) : "";
  }
  function hd(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ya(e.type);
      case 16:
        return Ya("Lazy");
      case 13:
        return Ya("Suspense");
      case 19:
        return Ya("SuspenseList");
      case 0:
      case 15:
        return ii(e.type, !1);
      case 11:
        return ii(e.type.render, !1);
      case 1:
        return ii(e.type, !0);
      case 31:
        return Ya("Activity");
      default:
        return "";
    }
  }
  function Cf(e) {
    try {
      var t = "";
      do
        t += hd(e), e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function ot(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function jf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function dd(e) {
    var t = jf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), l = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          l = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(i) {
          l = "" + i;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Un(e) {
    e._valueTracker || (e._valueTracker = dd(e));
  }
  function Bf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = jf(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Cn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var md = /[\n"\\]/g;
  function rt(e) {
    return e.replace(
      md,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ci(e, t, a, l, n, u, i, c) {
    e.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? e.type = i : e.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ot(t)) : e.value !== "" + ot(t) && (e.value = "" + ot(t)) : i !== "submit" && i !== "reset" || e.removeAttribute("value"), t != null ? fi(e, i, ot(t)) : a != null ? fi(e, i, ot(a)) : l != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.name = "" + ot(c) : e.removeAttribute("name");
  }
  function Gf(e, t, a, l, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || t != null))
        return;
      a = a != null ? "" + ot(a) : "", t = t != null ? "" + ot(t) : a, c || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = c ? e.checked : !!l, e.defaultChecked = !!l, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.name = i);
  }
  function fi(e, t, a) {
    t === "number" && Cn(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Xa(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < a.length; n++)
        t["$" + a[n]] = !0;
      for (a = 0; a < e.length; a++)
        n = t.hasOwnProperty("$" + e[a].value), e[a].selected !== n && (e[a].selected = n), n && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + ot(a), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === a) {
          e[n].selected = !0, l && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function qf(e, t, a) {
    if (t != null && (t = "" + ot(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + ot(a) : "";
  }
  function Yf(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(f(92));
        if (_e(l)) {
          if (1 < l.length) throw Error(f(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = ot(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l);
  }
  function Qa(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var yd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Xf(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || yd.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Qf(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(f(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var n in t)
        l = t[n], t.hasOwnProperty(n) && a[n] !== l && Xf(e, n, l);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Xf(e, u, t[u]);
  }
  function oi(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vd = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), gd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function jn(e) {
    return gd.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var ri = null;
  function si(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Za = null, La = null;
  function Zf(e) {
    var t = Ba(e);
    if (t && (e = t.stateNode)) {
      var a = e[Ve] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ci(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + rt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var n = l[Ve] || null;
                if (!n) throw Error(f(90));
                ci(
                  l,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              l = a[t], l.form === e.form && Bf(l);
          }
          break e;
        case "textarea":
          qf(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Xa(e, !!a.multiple, t, !1);
      }
    }
  }
  var hi = !1;
  function Lf(e, t, a) {
    if (hi) return e(t, a);
    hi = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (hi = !1, (Za !== null || La !== null) && (xu(), Za && (t = Za, e = La, La = Za = null, Zf(t), e)))
        for (t = 0; t < e.length; t++) Zf(e[t]);
    }
  }
  function zl(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Ve] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        f(231, t, typeof a)
      );
    return a;
  }
  var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), di = !1;
  if (Nt)
    try {
      var _l = {};
      Object.defineProperty(_l, "passive", {
        get: function() {
          di = !0;
        }
      }), window.addEventListener("test", _l, _l), window.removeEventListener("test", _l, _l);
    } catch {
      di = !1;
    }
  var $t = null, mi = null, Bn = null;
  function Vf() {
    if (Bn) return Bn;
    var e, t = mi, a = t.length, l, n = "value" in $t ? $t.value : $t.textContent, u = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++) ;
    var i = a - e;
    for (l = 1; l <= i && t[a - l] === n[u - l]; l++) ;
    return Bn = n.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Gn(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function qn() {
    return !0;
  }
  function Kf() {
    return !1;
  }
  function Ke(e) {
    function t(a, l, n, u, i) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in e)
        e.hasOwnProperty(c) && (a = e[c], this[c] = a ? a(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? qn : Kf, this.isPropagationStopped = Kf, this;
    }
    return O(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = qn);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = qn);
      },
      persist: function() {
      },
      isPersistent: qn
    }), t;
  }
  var Sa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Yn = Ke(Sa), Ol = O({}, Sa, { view: 0, detail: 0 }), pd = Ke(Ol), yi, vi, Rl, Xn = O({}, Ol, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: pi,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Rl && (Rl && e.type === "mousemove" ? (yi = e.screenX - Rl.screenX, vi = e.screenY - Rl.screenY) : vi = yi = 0, Rl = e), yi);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : vi;
    }
  }), Jf = Ke(Xn), bd = O({}, Xn, { dataTransfer: 0 }), Sd = Ke(bd), Td = O({}, Ol, { relatedTarget: 0 }), gi = Ke(Td), xd = O({}, Sa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ad = Ke(xd), Ed = O({}, Sa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Md = Ke(Ed), wd = O({}, Sa, { data: 0 }), $f = Ke(wd), Dd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, zd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, _d = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Od(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = _d[e]) ? !!t[e] : !1;
  }
  function pi() {
    return Od;
  }
  var Rd = O({}, Ol, {
    key: function(e) {
      if (e.key) {
        var t = Dd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Gn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zd[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pi,
    charCode: function(e) {
      return e.type === "keypress" ? Gn(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Gn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Nd = Ke(Rd), kd = O({}, Xn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Wf = Ke(kd), Hd = O({}, Ol, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pi
  }), Ud = Ke(Hd), Cd = O({}, Sa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jd = Ke(Cd), Bd = O({}, Xn, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Gd = Ke(Bd), qd = O({}, Sa, {
    newState: 0,
    oldState: 0
  }), Yd = Ke(qd), Xd = [9, 13, 27, 32], bi = Nt && "CompositionEvent" in window, Nl = null;
  Nt && "documentMode" in document && (Nl = document.documentMode);
  var Qd = Nt && "TextEvent" in window && !Nl, Ff = Nt && (!bi || Nl && 8 < Nl && 11 >= Nl), If = " ", Pf = !1;
  function eo(e, t) {
    switch (e) {
      case "keyup":
        return Xd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function to(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Va = !1;
  function Zd(e, t) {
    switch (e) {
      case "compositionend":
        return to(t);
      case "keypress":
        return t.which !== 32 ? null : (Pf = !0, If);
      case "textInput":
        return e = t.data, e === If && Pf ? null : e;
      default:
        return null;
    }
  }
  function Ld(e, t) {
    if (Va)
      return e === "compositionend" || !bi && eo(e, t) ? (e = Vf(), Bn = mi = $t = null, Va = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ff && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Vd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function ao(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Vd[e.type] : t === "textarea";
  }
  function lo(e, t, a, l) {
    Za ? La ? La.push(l) : La = [l] : Za = l, t = zu(t, "onChange"), 0 < t.length && (a = new Yn(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: t }));
  }
  var kl = null, Hl = null;
  function Kd(e) {
    Bs(e, 0);
  }
  function Qn(e) {
    var t = Dl(e);
    if (Bf(t)) return e;
  }
  function no(e, t) {
    if (e === "change") return t;
  }
  var uo = !1;
  if (Nt) {
    var Si;
    if (Nt) {
      var Ti = "oninput" in document;
      if (!Ti) {
        var io = document.createElement("div");
        io.setAttribute("oninput", "return;"), Ti = typeof io.oninput == "function";
      }
      Si = Ti;
    } else Si = !1;
    uo = Si && (!document.documentMode || 9 < document.documentMode);
  }
  function co() {
    kl && (kl.detachEvent("onpropertychange", fo), Hl = kl = null);
  }
  function fo(e) {
    if (e.propertyName === "value" && Qn(Hl)) {
      var t = [];
      lo(
        t,
        Hl,
        e,
        si(e)
      ), Lf(Kd, t);
    }
  }
  function Jd(e, t, a) {
    e === "focusin" ? (co(), kl = t, Hl = a, kl.attachEvent("onpropertychange", fo)) : e === "focusout" && co();
  }
  function $d(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Qn(Hl);
  }
  function Wd(e, t) {
    if (e === "click") return Qn(t);
  }
  function Fd(e, t) {
    if (e === "input" || e === "change")
      return Qn(t);
  }
  function Id(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var tt = typeof Object.is == "function" ? Object.is : Id;
  function Ul(e, t) {
    if (tt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!Wu.call(t, n) || !tt(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function oo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ro(e, t) {
    var a = oo(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= t && l >= t)
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = oo(a);
    }
  }
  function so(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? so(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ho(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Cn(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Cn(e.document);
    }
    return t;
  }
  function xi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Pd = Nt && "documentMode" in document && 11 >= document.documentMode, Ka = null, Ai = null, Cl = null, Ei = !1;
  function mo(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Ei || Ka == null || Ka !== Cn(l) || (l = Ka, "selectionStart" in l && xi(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Cl && Ul(Cl, l) || (Cl = l, l = zu(Ai, "onSelect"), 0 < l.length && (t = new Yn(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: l }), t.target = Ka)));
  }
  function Ta(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Ja = {
    animationend: Ta("Animation", "AnimationEnd"),
    animationiteration: Ta("Animation", "AnimationIteration"),
    animationstart: Ta("Animation", "AnimationStart"),
    transitionrun: Ta("Transition", "TransitionRun"),
    transitionstart: Ta("Transition", "TransitionStart"),
    transitioncancel: Ta("Transition", "TransitionCancel"),
    transitionend: Ta("Transition", "TransitionEnd")
  }, Mi = {}, yo = {};
  Nt && (yo = document.createElement("div").style, "AnimationEvent" in window || (delete Ja.animationend.animation, delete Ja.animationiteration.animation, delete Ja.animationstart.animation), "TransitionEvent" in window || delete Ja.transitionend.transition);
  function xa(e) {
    if (Mi[e]) return Mi[e];
    if (!Ja[e]) return e;
    var t = Ja[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in yo)
        return Mi[e] = t[a];
    return e;
  }
  var vo = xa("animationend"), go = xa("animationiteration"), po = xa("animationstart"), em = xa("transitionrun"), tm = xa("transitionstart"), am = xa("transitioncancel"), bo = xa("transitionend"), So = /* @__PURE__ */ new Map(), wi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  wi.push("scrollEnd");
  function pt(e, t) {
    So.set(e, t), ba(t, [e]);
  }
  var To = /* @__PURE__ */ new WeakMap();
  function st(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = To.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: Cf(t)
      }, To.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Cf(t)
    };
  }
  var ht = [], $a = 0, Di = 0;
  function Zn() {
    for (var e = $a, t = Di = $a = 0; t < e; ) {
      var a = ht[t];
      ht[t++] = null;
      var l = ht[t];
      ht[t++] = null;
      var n = ht[t];
      ht[t++] = null;
      var u = ht[t];
      if (ht[t++] = null, l !== null && n !== null) {
        var i = l.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), l.pending = n;
      }
      u !== 0 && xo(a, n, u);
    }
  }
  function Ln(e, t, a, l) {
    ht[$a++] = e, ht[$a++] = t, ht[$a++] = a, ht[$a++] = l, Di |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function zi(e, t, a, l) {
    return Ln(e, t, a, l), Vn(e);
  }
  function Wa(e, t) {
    return Ln(e, null, null, t), Vn(e);
  }
  function xo(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, u = e.return; u !== null; )
      u.childLanes |= a, l = u.alternate, l !== null && (l.childLanes |= a), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - et(a), e = u.hiddenUpdates, l = e[n], l === null ? e[n] = [t] : l.push(t), t.lane = a | 536870912), u) : null;
  }
  function Vn(e) {
    if (50 < fn)
      throw fn = 0, Hc = null, Error(f(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Fa = {};
  function lm(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function at(e, t, a, l) {
    return new lm(e, t, a, l);
  }
  function _i(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function kt(e, t) {
    var a = e.alternate;
    return a === null ? (a = at(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Ao(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Kn(e, t, a, l, n, u) {
    var i = 0;
    if (l = e, typeof e == "function") _i(e) && (i = 1);
    else if (typeof e == "string")
      i = u0(
        e,
        a,
        G.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Fe:
          return e = at(31, a, t, n), e.elementType = Fe, e.lanes = u, e;
        case F:
          return Aa(a.children, n, u, t);
        case ge:
          i = 8, n |= 24;
          break;
        case te:
          return e = at(12, a, t, n | 2), e.elementType = te, e.lanes = u, e;
        case K:
          return e = at(13, a, t, n), e.elementType = K, e.lanes = u, e;
        case Ne:
          return e = at(19, a, t, n), e.elementType = Ne, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ne:
              case de:
                i = 10;
                break e;
              case ee:
                i = 9;
                break e;
              case De:
                i = 11;
                break e;
              case ke:
                i = 14;
                break e;
              case Ze:
                i = 16, l = null;
                break e;
            }
          i = 29, a = Error(
            f(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = at(i, a, t, n), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function Aa(e, t, a, l) {
    return e = at(7, e, l, t), e.lanes = a, e;
  }
  function Oi(e, t, a) {
    return e = at(6, e, null, t), e.lanes = a, e;
  }
  function Ri(e, t, a) {
    return t = at(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Ia = [], Pa = 0, Jn = null, $n = 0, dt = [], mt = 0, Ea = null, Ht = 1, Ut = "";
  function Ma(e, t) {
    Ia[Pa++] = $n, Ia[Pa++] = Jn, Jn = e, $n = t;
  }
  function Eo(e, t, a) {
    dt[mt++] = Ht, dt[mt++] = Ut, dt[mt++] = Ea, Ea = e;
    var l = Ht;
    e = Ut;
    var n = 32 - et(l) - 1;
    l &= ~(1 << n), a += 1;
    var u = 32 - et(t) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (l & (1 << i) - 1).toString(32), l >>= i, n -= i, Ht = 1 << 32 - et(t) + n | a << n | l, Ut = u + e;
    } else
      Ht = 1 << u | a << n | l, Ut = e;
  }
  function Ni(e) {
    e.return !== null && (Ma(e, 1), Eo(e, 1, 0));
  }
  function ki(e) {
    for (; e === Jn; )
      Jn = Ia[--Pa], Ia[Pa] = null, $n = Ia[--Pa], Ia[Pa] = null;
    for (; e === Ea; )
      Ea = dt[--mt], dt[mt] = null, Ut = dt[--mt], dt[mt] = null, Ht = dt[--mt], dt[mt] = null;
  }
  var Le = null, Te = null, ce = !1, wa = null, At = !1, Hi = Error(f(519));
  function Da(e) {
    var t = Error(f(418, ""));
    throw Gl(st(t, e)), Hi;
  }
  function Mo(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[Ye] = e, t[Ve] = l, a) {
      case "dialog":
        P("cancel", t), P("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        P("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < rn.length; a++)
          P(rn[a], t);
        break;
      case "source":
        P("error", t);
        break;
      case "img":
      case "image":
      case "link":
        P("error", t), P("load", t);
        break;
      case "details":
        P("toggle", t);
        break;
      case "input":
        P("invalid", t), Gf(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), Un(t);
        break;
      case "select":
        P("invalid", t);
        break;
      case "textarea":
        P("invalid", t), Yf(t, l.value, l.defaultValue, l.children), Un(t);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Xs(t.textContent, a) ? (l.popover != null && (P("beforetoggle", t), P("toggle", t)), l.onScroll != null && P("scroll", t), l.onScrollEnd != null && P("scrollend", t), l.onClick != null && (t.onclick = _u), t = !0) : t = !1, t || Da(e);
  }
  function wo(e) {
    for (Le = e.return; Le; )
      switch (Le.tag) {
        case 5:
        case 13:
          At = !1;
          return;
        case 27:
        case 3:
          At = !0;
          return;
        default:
          Le = Le.return;
      }
  }
  function jl(e) {
    if (e !== Le) return !1;
    if (!ce) return wo(e), ce = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Wc(e.type, e.memoizedProps)), a = !a), a && Te && Da(e), wo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (t === 0) {
                Te = St(e.nextSibling);
                break e;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          e = e.nextSibling;
        }
        Te = null;
      }
    } else
      t === 27 ? (t = Te, sa(e.type) ? (e = ef, ef = null, Te = e) : Te = t) : Te = Le ? St(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Bl() {
    Te = Le = null, ce = !1;
  }
  function Do() {
    var e = wa;
    return e !== null && (We === null ? We = e : We.push.apply(
      We,
      e
    ), wa = null), e;
  }
  function Gl(e) {
    wa === null ? wa = [e] : wa.push(e);
  }
  var Ui = w(null), za = null, Ct = null;
  function Wt(e, t, a) {
    R(Ui, t._currentValue), t._currentValue = a;
  }
  function jt(e) {
    e._currentValue = Ui.current, H(Ui);
  }
  function Ci(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function ji(e, t, a, l) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var o = 0; o < t.length; o++)
            if (c.context === t[o]) {
              u.lanes |= a, c = u.alternate, c !== null && (c.lanes |= a), Ci(
                u.return,
                a,
                e
              ), l || (i = null);
              break e;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(f(341));
        i.lanes |= a, u = i.alternate, u !== null && (u.lanes |= a), Ci(i, a, e), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function ql(e, t, a, l) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(f(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          tt(n.pendingProps.value, i.value) || (e !== null ? e.push(c) : e = [c]);
        }
      } else if (n === Ie.current) {
        if (i = n.alternate, i === null) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(vn) : e = [vn]);
      }
      n = n.return;
    }
    e !== null && ji(
      t,
      e,
      a,
      l
    ), t.flags |= 262144;
  }
  function Wn(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!tt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function _a(e) {
    za = e, Ct = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Xe(e) {
    return zo(za, e);
  }
  function Fn(e, t) {
    return za === null && _a(e), zo(e, t);
  }
  function zo(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Ct === null) {
      if (e === null) throw Error(f(308));
      Ct = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Ct = Ct.next = t;
    return a;
  }
  var nm = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, um = r.unstable_scheduleCallback, im = r.unstable_NormalPriority, Oe = {
    $$typeof: de,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Bi() {
    return {
      controller: new nm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Yl(e) {
    e.refCount--, e.refCount === 0 && um(im, function() {
      e.controller.abort();
    });
  }
  var Xl = null, Gi = 0, el = 0, tl = null;
  function cm(e, t) {
    if (Xl === null) {
      var a = Xl = [];
      Gi = 0, el = Yc(), tl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return Gi++, t.then(_o, _o), t;
  }
  function _o() {
    if (--Gi === 0 && Xl !== null) {
      tl !== null && (tl.status = "fulfilled");
      var e = Xl;
      Xl = null, el = 0, tl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function fm(e, t) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        a.push(n);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var n = 0; n < a.length; n++) (0, a[n])(t);
      },
      function(n) {
        for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)
          (0, a[n])(void 0);
      }
    ), l;
  }
  var Oo = T.S;
  T.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && cm(e, t), Oo !== null && Oo(e, t);
  };
  var Oa = w(null);
  function qi() {
    var e = Oa.current;
    return e !== null ? e : ve.pooledCache;
  }
  function In(e, t) {
    t === null ? R(Oa, Oa.current) : R(Oa, t.pool);
  }
  function Ro() {
    var e = qi();
    return e === null ? null : { parent: Oe._currentValue, pool: e };
  }
  var Ql = Error(f(460)), No = Error(f(474)), Pn = Error(f(542)), Yi = { then: function() {
  } };
  function ko(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function eu() {
  }
  function Ho(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(eu, eu), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Co(e), e;
      default:
        if (typeof t.status == "string") t.then(eu, eu);
        else {
          if (e = ve, e !== null && 100 < e.shellSuspendCounter)
            throw Error(f(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Co(e), e;
        }
        throw Zl = t, Ql;
    }
  }
  var Zl = null;
  function Uo() {
    if (Zl === null) throw Error(f(459));
    var e = Zl;
    return Zl = null, e;
  }
  function Co(e) {
    if (e === Ql || e === Pn)
      throw Error(f(483));
  }
  var Ft = !1;
  function Xi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Qi(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function It(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Pt(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (fe & 2) !== 0) {
      var n = l.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), l.pending = t, t = Vn(e), xo(e, null, a), t;
    }
    return Ln(e, l, t, a), Vn(e);
  }
  function Ll(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, zf(e, a);
    }
  }
  function Zi(e, t) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var n = null, u = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, a = a.next;
        } while (a !== null);
        u === null ? n = u = t : u = u.next = t;
      } else n = u = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Li = !1;
  function Vl() {
    if (Li) {
      var e = tl;
      if (e !== null) throw e;
    }
  }
  function Kl(e, t, a, l) {
    Li = !1;
    var n = e.updateQueue;
    Ft = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var o = c, y = o.next;
      o.next = null, i === null ? u = y : i.next = y, i = o;
      var x = e.alternate;
      x !== null && (x = x.updateQueue, c = x.lastBaseUpdate, c !== i && (c === null ? x.firstBaseUpdate = y : c.next = y, x.lastBaseUpdate = o));
    }
    if (u !== null) {
      var M = n.baseState;
      i = 0, x = y = o = null, c = u;
      do {
        var p = c.lane & -536870913, b = p !== c.lane;
        if (b ? (ae & p) === p : (l & p) === p) {
          p !== 0 && p === el && (Li = !0), x !== null && (x = x.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          e: {
            var Q = e, q = c;
            p = t;
            var he = a;
            switch (q.tag) {
              case 1:
                if (Q = q.payload, typeof Q == "function") {
                  M = Q.call(he, M, p);
                  break e;
                }
                M = Q;
                break e;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = q.payload, p = typeof Q == "function" ? Q.call(he, M, p) : Q, p == null) break e;
                M = O({}, M, p);
                break e;
              case 2:
                Ft = !0;
            }
          }
          p = c.callback, p !== null && (e.flags |= 64, b && (e.flags |= 8192), b = n.callbacks, b === null ? n.callbacks = [p] : b.push(p));
        } else
          b = {
            lane: p,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, x === null ? (y = x = b, o = M) : x = x.next = b, i |= p;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          b = c, c = b.next, b.next = null, n.lastBaseUpdate = b, n.shared.pending = null;
        }
      } while (!0);
      x === null && (o = M), n.baseState = o, n.firstBaseUpdate = y, n.lastBaseUpdate = x, u === null && (n.shared.lanes = 0), ca |= i, e.lanes = i, e.memoizedState = M;
    }
  }
  function jo(e, t) {
    if (typeof e != "function")
      throw Error(f(191, e));
    e.call(t);
  }
  function Bo(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        jo(a[e], t);
  }
  var al = w(null), tu = w(0);
  function Go(e, t) {
    e = Zt, R(tu, e), R(al, t), Zt = e | t.baseLanes;
  }
  function Vi() {
    R(tu, Zt), R(al, al.current);
  }
  function Ki() {
    Zt = tu.current, H(al), H(tu);
  }
  var ea = 0, J = null, re = null, Me = null, au = !1, ll = !1, Ra = !1, lu = 0, Jl = 0, nl = null, om = 0;
  function Ae() {
    throw Error(f(321));
  }
  function Ji(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!tt(e[a], t[a])) return !1;
    return !0;
  }
  function $i(e, t, a, l, n, u) {
    return ea = u, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, T.H = e === null || e.memoizedState === null ? xr : Ar, Ra = !1, u = a(l, n), Ra = !1, ll && (u = Yo(
      t,
      a,
      l,
      n
    )), qo(e), u;
  }
  function qo(e) {
    T.H = ou;
    var t = re !== null && re.next !== null;
    if (ea = 0, Me = re = J = null, au = !1, Jl = 0, nl = null, t) throw Error(f(300));
    e === null || Ue || (e = e.dependencies, e !== null && Wn(e) && (Ue = !0));
  }
  function Yo(e, t, a, l) {
    J = e;
    var n = 0;
    do {
      if (ll && (nl = null), Jl = 0, ll = !1, 25 <= n) throw Error(f(301));
      if (n += 1, Me = re = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      T.H = vm, u = t(a, l);
    } while (ll);
    return u;
  }
  function rm() {
    var e = T.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? $l(t) : t, e = e.useState()[0], (re !== null ? re.memoizedState : null) !== e && (J.flags |= 1024), t;
  }
  function Wi() {
    var e = lu !== 0;
    return lu = 0, e;
  }
  function Fi(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Ii(e) {
    if (au) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      au = !1;
    }
    ea = 0, Me = re = J = null, ll = !1, Jl = lu = 0, nl = null;
  }
  function Je() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Me === null ? J.memoizedState = Me = e : Me = Me.next = e, Me;
  }
  function we() {
    if (re === null) {
      var e = J.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = re.next;
    var t = Me === null ? J.memoizedState : Me.next;
    if (t !== null)
      Me = t, re = e;
    else {
      if (e === null)
        throw J.alternate === null ? Error(f(467)) : Error(f(310));
      re = e, e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null
      }, Me === null ? J.memoizedState = Me = e : Me = Me.next = e;
    }
    return Me;
  }
  function Pi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $l(e) {
    var t = Jl;
    return Jl += 1, nl === null && (nl = []), e = Ho(nl, e, t), t = J, (Me === null ? t.memoizedState : Me.next) === null && (t = t.alternate, T.H = t === null || t.memoizedState === null ? xr : Ar), e;
  }
  function nu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return $l(e);
      if (e.$$typeof === de) return Xe(e);
    }
    throw Error(f(438, String(e)));
  }
  function ec(e) {
    var t = null, a = J.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = J.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Pi(), J.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)
        a[l] = zt;
    return t.index++, a;
  }
  function Bt(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function uu(e) {
    var t = we();
    return tc(t, re, e);
  }
  function tc(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = a;
    var n = e.baseQueue, u = l.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      t.baseQueue = n = u, l.pending = null;
    }
    if (u = e.baseState, n === null) e.memoizedState = u;
    else {
      t = n.next;
      var c = i = null, o = null, y = t, x = !1;
      do {
        var M = y.lane & -536870913;
        if (M !== y.lane ? (ae & M) === M : (ea & M) === M) {
          var p = y.revertLane;
          if (p === 0)
            o !== null && (o = o.next = {
              lane: 0,
              revertLane: 0,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), M === el && (x = !0);
          else if ((ea & p) === p) {
            y = y.next, p === el && (x = !0);
            continue;
          } else
            M = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, o === null ? (c = o = M, i = u) : o = o.next = M, J.lanes |= p, ca |= p;
          M = y.action, Ra && a(u, M), u = y.hasEagerState ? y.eagerState : a(u, M);
        } else
          p = {
            lane: M,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, o === null ? (c = o = p, i = u) : o = o.next = p, J.lanes |= M, ca |= M;
        y = y.next;
      } while (y !== null && y !== t);
      if (o === null ? i = u : o.next = c, !tt(u, e.memoizedState) && (Ue = !0, x && (a = tl, a !== null)))
        throw a;
      e.memoizedState = u, e.baseState = i, e.baseQueue = o, l.lastRenderedState = u;
    }
    return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function ac(e) {
    var t = we(), a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, n = a.pending, u = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var i = n = n.next;
      do
        u = e(u, i.action), i = i.next;
      while (i !== n);
      tt(u, t.memoizedState) || (Ue = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), a.lastRenderedState = u;
    }
    return [u, l];
  }
  function Xo(e, t, a) {
    var l = J, n = we(), u = ce;
    if (u) {
      if (a === void 0) throw Error(f(407));
      a = a();
    } else a = t();
    var i = !tt(
      (re || n).memoizedState,
      a
    );
    i && (n.memoizedState = a, Ue = !0), n = n.queue;
    var c = Lo.bind(null, l, n, e);
    if (Wl(2048, 8, c, [e]), n.getSnapshot !== t || i || Me !== null && Me.memoizedState.tag & 1) {
      if (l.flags |= 2048, ul(
        9,
        iu(),
        Zo.bind(
          null,
          l,
          n,
          a,
          t
        ),
        null
      ), ve === null) throw Error(f(349));
      u || (ea & 124) !== 0 || Qo(l, t, a);
    }
    return a;
  }
  function Qo(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = J.updateQueue, t === null ? (t = Pi(), J.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Zo(e, t, a, l) {
    t.value = a, t.getSnapshot = l, Vo(t) && Ko(e);
  }
  function Lo(e, t, a) {
    return a(function() {
      Vo(t) && Ko(e);
    });
  }
  function Vo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !tt(e, a);
    } catch {
      return !0;
    }
  }
  function Ko(e) {
    var t = Wa(e, 2);
    t !== null && ct(t, e, 2);
  }
  function lc(e) {
    var t = Je();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Ra) {
        Kt(!0);
        try {
          a();
        } finally {
          Kt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bt,
      lastRenderedState: e
    }, t;
  }
  function Jo(e, t, a, l) {
    return e.baseState = a, tc(
      e,
      re,
      typeof l == "function" ? l : Bt
    );
  }
  function sm(e, t, a, l, n) {
    if (fu(e)) throw Error(f(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      T.T !== null ? a(!0) : u.isTransition = !1, l(u), a = t.pending, a === null ? (u.next = t.pending = u, $o(t, u)) : (u.next = a.next, t.pending = a.next = u);
    }
  }
  function $o(e, t) {
    var a = t.action, l = t.payload, n = e.state;
    if (t.isTransition) {
      var u = T.T, i = {};
      T.T = i;
      try {
        var c = a(n, l), o = T.S;
        o !== null && o(i, c), Wo(e, t, c);
      } catch (y) {
        nc(e, t, y);
      } finally {
        T.T = u;
      }
    } else
      try {
        u = a(n, l), Wo(e, t, u);
      } catch (y) {
        nc(e, t, y);
      }
  }
  function Wo(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        Fo(e, t, l);
      },
      function(l) {
        return nc(e, t, l);
      }
    ) : Fo(e, t, a);
  }
  function Fo(e, t, a) {
    t.status = "fulfilled", t.value = a, Io(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, $o(e, a)));
  }
  function nc(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, Io(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Io(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Po(e, t) {
    return t;
  }
  function er(e, t) {
    if (ce) {
      var a = ve.formState;
      if (a !== null) {
        e: {
          var l = J;
          if (ce) {
            if (Te) {
              t: {
                for (var n = Te, u = At; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = St(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Te = St(
                  n.nextSibling
                ), l = n.data === "F!";
                break e;
              }
            }
            Da(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = Je(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Po,
      lastRenderedState: t
    }, a.queue = l, a = br.bind(
      null,
      J,
      l
    ), l.dispatch = a, l = lc(!1), u = oc.bind(
      null,
      J,
      !1,
      l.queue
    ), l = Je(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = n, a = sm.bind(
      null,
      J,
      n,
      u,
      a
    ), n.dispatch = a, l.memoizedState = e, [t, a, !1];
  }
  function tr(e) {
    var t = we();
    return ar(t, re, e);
  }
  function ar(e, t, a) {
    if (t = tc(
      e,
      t,
      Po
    )[0], e = uu(Bt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = $l(t);
      } catch (i) {
        throw i === Ql ? Pn : i;
      }
    else l = t;
    t = we();
    var n = t.queue, u = n.dispatch;
    return a !== t.memoizedState && (J.flags |= 2048, ul(
      9,
      iu(),
      hm.bind(null, n, a),
      null
    )), [l, u, e];
  }
  function hm(e, t) {
    e.action = t;
  }
  function lr(e) {
    var t = we(), a = re;
    if (a !== null)
      return ar(t, a, e);
    we(), t = t.memoizedState, a = we();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, !1];
  }
  function ul(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = J.updateQueue, t === null && (t = Pi(), J.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function iu() {
    return { destroy: void 0, resource: void 0 };
  }
  function nr() {
    return we().memoizedState;
  }
  function cu(e, t, a, l) {
    var n = Je();
    l = l === void 0 ? null : l, J.flags |= e, n.memoizedState = ul(
      1 | t,
      iu(),
      a,
      l
    );
  }
  function Wl(e, t, a, l) {
    var n = we();
    l = l === void 0 ? null : l;
    var u = n.memoizedState.inst;
    re !== null && l !== null && Ji(l, re.memoizedState.deps) ? n.memoizedState = ul(t, u, a, l) : (J.flags |= e, n.memoizedState = ul(
      1 | t,
      u,
      a,
      l
    ));
  }
  function ur(e, t) {
    cu(8390656, 8, e, t);
  }
  function ir(e, t) {
    Wl(2048, 8, e, t);
  }
  function cr(e, t) {
    return Wl(4, 2, e, t);
  }
  function fr(e, t) {
    return Wl(4, 4, e, t);
  }
  function or(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function rr(e, t, a) {
    a = a != null ? a.concat([e]) : null, Wl(4, 4, or.bind(null, t, e), a);
  }
  function uc() {
  }
  function sr(e, t) {
    var a = we();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && Ji(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function hr(e, t) {
    var a = we();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && Ji(t, l[1]))
      return l[0];
    if (l = e(), Ra) {
      Kt(!0);
      try {
        e();
      } finally {
        Kt(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function ic(e, t, a) {
    return a === void 0 || (ea & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = ys(), J.lanes |= e, ca |= e, a);
  }
  function dr(e, t, a, l) {
    return tt(a, t) ? a : al.current !== null ? (e = ic(e, a, l), tt(e, t) || (Ue = !0), e) : (ea & 42) === 0 ? (Ue = !0, e.memoizedState = a) : (e = ys(), J.lanes |= e, ca |= e, t);
  }
  function mr(e, t, a, l, n) {
    var u = N.p;
    N.p = u !== 0 && 8 > u ? u : 8;
    var i = T.T, c = {};
    T.T = c, oc(e, !1, t, a);
    try {
      var o = n(), y = T.S;
      if (y !== null && y(c, o), o !== null && typeof o == "object" && typeof o.then == "function") {
        var x = fm(
          o,
          l
        );
        Fl(
          e,
          t,
          x,
          it(e)
        );
      } else
        Fl(
          e,
          t,
          l,
          it(e)
        );
    } catch (M) {
      Fl(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: M },
        it()
      );
    } finally {
      N.p = u, T.T = i;
    }
  }
  function dm() {
  }
  function cc(e, t, a, l) {
    if (e.tag !== 5) throw Error(f(476));
    var n = yr(e).queue;
    mr(
      e,
      n,
      t,
      X,
      a === null ? dm : function() {
        return vr(e), a(l);
      }
    );
  }
  function yr(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bt,
        lastRenderedState: X
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bt,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function vr(e) {
    var t = yr(e).next.queue;
    Fl(e, t, {}, it());
  }
  function fc() {
    return Xe(vn);
  }
  function gr() {
    return we().memoizedState;
  }
  function pr() {
    return we().memoizedState;
  }
  function mm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = it();
          e = It(a);
          var l = Pt(t, e, a);
          l !== null && (ct(l, t, a), Ll(l, t, a)), t = { cache: Bi() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function ym(e, t, a) {
    var l = it();
    a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, fu(e) ? Sr(t, a) : (a = zi(e, t, a, l), a !== null && (ct(a, e, l), Tr(a, t, l)));
  }
  function br(e, t, a) {
    var l = it();
    Fl(e, t, a, l);
  }
  function Fl(e, t, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (fu(e)) Sr(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var i = t.lastRenderedState, c = u(i, a);
          if (n.hasEagerState = !0, n.eagerState = c, tt(c, i))
            return Ln(e, t, n, 0), ve === null && Zn(), !1;
        } catch {
        } finally {
        }
      if (a = zi(e, t, n, l), a !== null)
        return ct(a, e, l), Tr(a, t, l), !0;
    }
    return !1;
  }
  function oc(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: Yc(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, fu(e)) {
      if (t) throw Error(f(479));
    } else
      t = zi(
        e,
        a,
        l,
        2
      ), t !== null && ct(t, e, 2);
  }
  function fu(e) {
    var t = e.alternate;
    return e === J || t !== null && t === J;
  }
  function Sr(e, t) {
    ll = au = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Tr(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, zf(e, a);
    }
  }
  var ou = {
    readContext: Xe,
    use: nu,
    useCallback: Ae,
    useContext: Ae,
    useEffect: Ae,
    useImperativeHandle: Ae,
    useLayoutEffect: Ae,
    useInsertionEffect: Ae,
    useMemo: Ae,
    useReducer: Ae,
    useRef: Ae,
    useState: Ae,
    useDebugValue: Ae,
    useDeferredValue: Ae,
    useTransition: Ae,
    useSyncExternalStore: Ae,
    useId: Ae,
    useHostTransitionStatus: Ae,
    useFormState: Ae,
    useActionState: Ae,
    useOptimistic: Ae,
    useMemoCache: Ae,
    useCacheRefresh: Ae
  }, xr = {
    readContext: Xe,
    use: nu,
    useCallback: function(e, t) {
      return Je().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Xe,
    useEffect: ur,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, cu(
        4194308,
        4,
        or.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return cu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      cu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Je();
      t = t === void 0 ? null : t;
      var l = e();
      if (Ra) {
        Kt(!0);
        try {
          e();
        } finally {
          Kt(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = Je();
      if (a !== void 0) {
        var n = a(t);
        if (Ra) {
          Kt(!0);
          try {
            a(t);
          } finally {
            Kt(!1);
          }
        }
      } else n = t;
      return l.memoizedState = l.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, l.queue = e, e = e.dispatch = ym.bind(
        null,
        J,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Je();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = lc(e);
      var t = e.queue, a = br.bind(null, J, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: uc,
    useDeferredValue: function(e, t) {
      var a = Je();
      return ic(a, e, t);
    },
    useTransition: function() {
      var e = lc(!1);
      return e = mr.bind(
        null,
        J,
        e.queue,
        !0,
        !1
      ), Je().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = J, n = Je();
      if (ce) {
        if (a === void 0)
          throw Error(f(407));
        a = a();
      } else {
        if (a = t(), ve === null)
          throw Error(f(349));
        (ae & 124) !== 0 || Qo(l, t, a);
      }
      n.memoizedState = a;
      var u = { value: a, getSnapshot: t };
      return n.queue = u, ur(Lo.bind(null, l, u, e), [
        e
      ]), l.flags |= 2048, ul(
        9,
        iu(),
        Zo.bind(
          null,
          l,
          u,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Je(), t = ve.identifierPrefix;
      if (ce) {
        var a = Ut, l = Ht;
        a = (l & ~(1 << 32 - et(l) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = lu++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = om++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: fc,
    useFormState: er,
    useActionState: er,
    useOptimistic: function(e) {
      var t = Je();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = oc.bind(
        null,
        J,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: ec,
    useCacheRefresh: function() {
      return Je().memoizedState = mm.bind(
        null,
        J
      );
    }
  }, Ar = {
    readContext: Xe,
    use: nu,
    useCallback: sr,
    useContext: Xe,
    useEffect: ir,
    useImperativeHandle: rr,
    useInsertionEffect: cr,
    useLayoutEffect: fr,
    useMemo: hr,
    useReducer: uu,
    useRef: nr,
    useState: function() {
      return uu(Bt);
    },
    useDebugValue: uc,
    useDeferredValue: function(e, t) {
      var a = we();
      return dr(
        a,
        re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = uu(Bt)[0], t = we().memoizedState;
      return [
        typeof e == "boolean" ? e : $l(e),
        t
      ];
    },
    useSyncExternalStore: Xo,
    useId: gr,
    useHostTransitionStatus: fc,
    useFormState: tr,
    useActionState: tr,
    useOptimistic: function(e, t) {
      var a = we();
      return Jo(a, re, e, t);
    },
    useMemoCache: ec,
    useCacheRefresh: pr
  }, vm = {
    readContext: Xe,
    use: nu,
    useCallback: sr,
    useContext: Xe,
    useEffect: ir,
    useImperativeHandle: rr,
    useInsertionEffect: cr,
    useLayoutEffect: fr,
    useMemo: hr,
    useReducer: ac,
    useRef: nr,
    useState: function() {
      return ac(Bt);
    },
    useDebugValue: uc,
    useDeferredValue: function(e, t) {
      var a = we();
      return re === null ? ic(a, e, t) : dr(
        a,
        re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ac(Bt)[0], t = we().memoizedState;
      return [
        typeof e == "boolean" ? e : $l(e),
        t
      ];
    },
    useSyncExternalStore: Xo,
    useId: gr,
    useHostTransitionStatus: fc,
    useFormState: lr,
    useActionState: lr,
    useOptimistic: function(e, t) {
      var a = we();
      return re !== null ? Jo(a, re, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: ec,
    useCacheRefresh: pr
  }, il = null, Il = 0;
  function ru(e) {
    var t = Il;
    return Il += 1, il === null && (il = []), Ho(il, e, t);
  }
  function Pl(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function su(e, t) {
    throw t.$$typeof === L ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(
      f(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Er(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Mr(e) {
    function t(d, h) {
      if (e) {
        var m = d.deletions;
        m === null ? (d.deletions = [h], d.flags |= 16) : m.push(h);
      }
    }
    function a(d, h) {
      if (!e) return null;
      for (; h !== null; )
        t(d, h), h = h.sibling;
      return null;
    }
    function l(d) {
      for (var h = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? h.set(d.key, d) : h.set(d.index, d), d = d.sibling;
      return h;
    }
    function n(d, h) {
      return d = kt(d, h), d.index = 0, d.sibling = null, d;
    }
    function u(d, h, m) {
      return d.index = m, e ? (m = d.alternate, m !== null ? (m = m.index, m < h ? (d.flags |= 67108866, h) : m) : (d.flags |= 67108866, h)) : (d.flags |= 1048576, h);
    }
    function i(d) {
      return e && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, h, m, A) {
      return h === null || h.tag !== 6 ? (h = Oi(m, d.mode, A), h.return = d, h) : (h = n(h, m), h.return = d, h);
    }
    function o(d, h, m, A) {
      var U = m.type;
      return U === F ? x(
        d,
        h,
        m.props.children,
        A,
        m.key
      ) : h !== null && (h.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Ze && Er(U) === h.type) ? (h = n(h, m.props), Pl(h, m), h.return = d, h) : (h = Kn(
        m.type,
        m.key,
        m.props,
        null,
        d.mode,
        A
      ), Pl(h, m), h.return = d, h);
    }
    function y(d, h, m, A) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = Ri(m, d.mode, A), h.return = d, h) : (h = n(h, m.children || []), h.return = d, h);
    }
    function x(d, h, m, A, U) {
      return h === null || h.tag !== 7 ? (h = Aa(
        m,
        d.mode,
        A,
        U
      ), h.return = d, h) : (h = n(h, m), h.return = d, h);
    }
    function M(d, h, m) {
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return h = Oi(
          "" + h,
          d.mode,
          m
        ), h.return = d, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case B:
            return m = Kn(
              h.type,
              h.key,
              h.props,
              null,
              d.mode,
              m
            ), Pl(m, h), m.return = d, m;
          case $:
            return h = Ri(
              h,
              d.mode,
              m
            ), h.return = d, h;
          case Ze:
            var A = h._init;
            return h = A(h._payload), M(d, h, m);
        }
        if (_e(h) || ze(h))
          return h = Aa(
            h,
            d.mode,
            m,
            null
          ), h.return = d, h;
        if (typeof h.then == "function")
          return M(d, ru(h), m);
        if (h.$$typeof === de)
          return M(
            d,
            Fn(d, h),
            m
          );
        su(d, h);
      }
      return null;
    }
    function p(d, h, m, A) {
      var U = h !== null ? h.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return U !== null ? null : c(d, h, "" + m, A);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case B:
            return m.key === U ? o(d, h, m, A) : null;
          case $:
            return m.key === U ? y(d, h, m, A) : null;
          case Ze:
            return U = m._init, m = U(m._payload), p(d, h, m, A);
        }
        if (_e(m) || ze(m))
          return U !== null ? null : x(d, h, m, A, null);
        if (typeof m.then == "function")
          return p(
            d,
            h,
            ru(m),
            A
          );
        if (m.$$typeof === de)
          return p(
            d,
            h,
            Fn(d, m),
            A
          );
        su(d, m);
      }
      return null;
    }
    function b(d, h, m, A, U) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return d = d.get(m) || null, c(h, d, "" + A, U);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case B:
            return d = d.get(
              A.key === null ? m : A.key
            ) || null, o(h, d, A, U);
          case $:
            return d = d.get(
              A.key === null ? m : A.key
            ) || null, y(h, d, A, U);
          case Ze:
            var W = A._init;
            return A = W(A._payload), b(
              d,
              h,
              m,
              A,
              U
            );
        }
        if (_e(A) || ze(A))
          return d = d.get(m) || null, x(h, d, A, U, null);
        if (typeof A.then == "function")
          return b(
            d,
            h,
            m,
            ru(A),
            U
          );
        if (A.$$typeof === de)
          return b(
            d,
            h,
            m,
            Fn(h, A),
            U
          );
        su(h, A);
      }
      return null;
    }
    function Q(d, h, m, A) {
      for (var U = null, W = null, j = h, Y = h = 0, je = null; j !== null && Y < m.length; Y++) {
        j.index > Y ? (je = j, j = null) : je = j.sibling;
        var ie = p(
          d,
          j,
          m[Y],
          A
        );
        if (ie === null) {
          j === null && (j = je);
          break;
        }
        e && j && ie.alternate === null && t(d, j), h = u(ie, h, Y), W === null ? U = ie : W.sibling = ie, W = ie, j = je;
      }
      if (Y === m.length)
        return a(d, j), ce && Ma(d, Y), U;
      if (j === null) {
        for (; Y < m.length; Y++)
          j = M(d, m[Y], A), j !== null && (h = u(
            j,
            h,
            Y
          ), W === null ? U = j : W.sibling = j, W = j);
        return ce && Ma(d, Y), U;
      }
      for (j = l(j); Y < m.length; Y++)
        je = b(
          j,
          d,
          Y,
          m[Y],
          A
        ), je !== null && (e && je.alternate !== null && j.delete(
          je.key === null ? Y : je.key
        ), h = u(
          je,
          h,
          Y
        ), W === null ? U = je : W.sibling = je, W = je);
      return e && j.forEach(function(va) {
        return t(d, va);
      }), ce && Ma(d, Y), U;
    }
    function q(d, h, m, A) {
      if (m == null) throw Error(f(151));
      for (var U = null, W = null, j = h, Y = h = 0, je = null, ie = m.next(); j !== null && !ie.done; Y++, ie = m.next()) {
        j.index > Y ? (je = j, j = null) : je = j.sibling;
        var va = p(d, j, ie.value, A);
        if (va === null) {
          j === null && (j = je);
          break;
        }
        e && j && va.alternate === null && t(d, j), h = u(va, h, Y), W === null ? U = va : W.sibling = va, W = va, j = je;
      }
      if (ie.done)
        return a(d, j), ce && Ma(d, Y), U;
      if (j === null) {
        for (; !ie.done; Y++, ie = m.next())
          ie = M(d, ie.value, A), ie !== null && (h = u(ie, h, Y), W === null ? U = ie : W.sibling = ie, W = ie);
        return ce && Ma(d, Y), U;
      }
      for (j = l(j); !ie.done; Y++, ie = m.next())
        ie = b(j, d, Y, ie.value, A), ie !== null && (e && ie.alternate !== null && j.delete(ie.key === null ? Y : ie.key), h = u(ie, h, Y), W === null ? U = ie : W.sibling = ie, W = ie);
      return e && j.forEach(function(g0) {
        return t(d, g0);
      }), ce && Ma(d, Y), U;
    }
    function he(d, h, m, A) {
      if (typeof m == "object" && m !== null && m.type === F && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case B:
            e: {
              for (var U = m.key; h !== null; ) {
                if (h.key === U) {
                  if (U = m.type, U === F) {
                    if (h.tag === 7) {
                      a(
                        d,
                        h.sibling
                      ), A = n(
                        h,
                        m.props.children
                      ), A.return = d, d = A;
                      break e;
                    }
                  } else if (h.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Ze && Er(U) === h.type) {
                    a(
                      d,
                      h.sibling
                    ), A = n(h, m.props), Pl(A, m), A.return = d, d = A;
                    break e;
                  }
                  a(d, h);
                  break;
                } else t(d, h);
                h = h.sibling;
              }
              m.type === F ? (A = Aa(
                m.props.children,
                d.mode,
                A,
                m.key
              ), A.return = d, d = A) : (A = Kn(
                m.type,
                m.key,
                m.props,
                null,
                d.mode,
                A
              ), Pl(A, m), A.return = d, d = A);
            }
            return i(d);
          case $:
            e: {
              for (U = m.key; h !== null; ) {
                if (h.key === U)
                  if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                    a(
                      d,
                      h.sibling
                    ), A = n(h, m.children || []), A.return = d, d = A;
                    break e;
                  } else {
                    a(d, h);
                    break;
                  }
                else t(d, h);
                h = h.sibling;
              }
              A = Ri(m, d.mode, A), A.return = d, d = A;
            }
            return i(d);
          case Ze:
            return U = m._init, m = U(m._payload), he(
              d,
              h,
              m,
              A
            );
        }
        if (_e(m))
          return Q(
            d,
            h,
            m,
            A
          );
        if (ze(m)) {
          if (U = ze(m), typeof U != "function") throw Error(f(150));
          return m = U.call(m), q(
            d,
            h,
            m,
            A
          );
        }
        if (typeof m.then == "function")
          return he(
            d,
            h,
            ru(m),
            A
          );
        if (m.$$typeof === de)
          return he(
            d,
            h,
            Fn(d, m),
            A
          );
        su(d, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, h !== null && h.tag === 6 ? (a(d, h.sibling), A = n(h, m), A.return = d, d = A) : (a(d, h), A = Oi(m, d.mode, A), A.return = d, d = A), i(d)) : a(d, h);
    }
    return function(d, h, m, A) {
      try {
        Il = 0;
        var U = he(
          d,
          h,
          m,
          A
        );
        return il = null, U;
      } catch (j) {
        if (j === Ql || j === Pn) throw j;
        var W = at(29, j, null, d.mode);
        return W.lanes = A, W.return = d, W;
      } finally {
      }
    };
  }
  var cl = Mr(!0), wr = Mr(!1), yt = w(null), Et = null;
  function ta(e) {
    var t = e.alternate;
    R(Re, Re.current & 1), R(yt, e), Et === null && (t === null || al.current !== null || t.memoizedState !== null) && (Et = e);
  }
  function Dr(e) {
    if (e.tag === 22) {
      if (R(Re, Re.current), R(yt, e), Et === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Et = e);
      }
    } else aa();
  }
  function aa() {
    R(Re, Re.current), R(yt, yt.current);
  }
  function Gt(e) {
    H(yt), Et === e && (Et = null), H(Re);
  }
  var Re = w(0);
  function hu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Pc(a)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function rc(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : O({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var sc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = it(), n = It(l);
      n.payload = t, a != null && (n.callback = a), t = Pt(e, n, l), t !== null && (ct(t, e, l), Ll(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = it(), n = It(l);
      n.tag = 1, n.payload = t, a != null && (n.callback = a), t = Pt(e, n, l), t !== null && (ct(t, e, l), Ll(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = it(), l = It(a);
      l.tag = 2, t != null && (l.callback = t), t = Pt(e, l, a), t !== null && (ct(t, e, a), Ll(t, e, a));
    }
  };
  function zr(e, t, a, l, n, u, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, i) : t.prototype && t.prototype.isPureReactComponent ? !Ul(a, l) || !Ul(n, u) : !0;
  }
  function _r(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && sc.enqueueReplaceState(t, t.state, null);
  }
  function Na(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t)
        l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = O({}, a));
      for (var n in e)
        a[n] === void 0 && (a[n] = e[n]);
    }
    return a;
  }
  var du = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function Or(e) {
    du(e);
  }
  function Rr(e) {
    console.error(e);
  }
  function Nr(e) {
    du(e);
  }
  function mu(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function kr(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function hc(e, t, a) {
    return a = It(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      mu(e, t);
    }, a;
  }
  function Hr(e) {
    return e = It(e), e.tag = 3, e;
  }
  function Ur(e, t, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = l.value;
      e.payload = function() {
        return n(u);
      }, e.callback = function() {
        kr(t, a, l);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (e.callback = function() {
      kr(t, a, l), typeof n != "function" && (fa === null ? fa = /* @__PURE__ */ new Set([this]) : fa.add(this));
      var c = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function gm(e, t, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && ql(
        t,
        a,
        n,
        !0
      ), a = yt.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Et === null ? Cc() : a.alternate === null && xe === 0 && (xe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === Yi ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Bc(e, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === Yi ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), Bc(e, l, n)), !1;
        }
        throw Error(f(435, a.tag));
      }
      return Bc(e, l, n), Cc(), !1;
    }
    if (ce)
      return t = yt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, l !== Hi && (e = Error(f(422), { cause: l }), Gl(st(e, a)))) : (l !== Hi && (t = Error(f(423), {
        cause: l
      }), Gl(
        st(t, a)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, l = st(l, a), n = hc(
        e.stateNode,
        l,
        n
      ), Zi(e, n), xe !== 4 && (xe = 2)), !1;
    var u = Error(f(520), { cause: l });
    if (u = st(u, a), cn === null ? cn = [u] : cn.push(u), xe !== 4 && (xe = 2), t === null) return !0;
    l = st(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = n & -n, a.lanes |= e, e = hc(a.stateNode, l, e), Zi(a, e), !1;
        case 1:
          if (t = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (fa === null || !fa.has(u))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = Hr(n), Ur(
              n,
              e,
              a,
              l
            ), Zi(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Cr = Error(f(461)), Ue = !1;
  function Be(e, t, a, l) {
    t.child = e === null ? wr(t, null, a, l) : cl(
      t,
      e.child,
      a,
      l
    );
  }
  function jr(e, t, a, l, n) {
    a = a.render;
    var u = t.ref;
    if ("ref" in l) {
      var i = {};
      for (var c in l)
        c !== "ref" && (i[c] = l[c]);
    } else i = l;
    return _a(t), l = $i(
      e,
      t,
      a,
      i,
      u,
      n
    ), c = Wi(), e !== null && !Ue ? (Fi(e, t, n), qt(e, t, n)) : (ce && c && Ni(t), t.flags |= 1, Be(e, t, l, n), t.child);
  }
  function Br(e, t, a, l, n) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" && !_i(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = u, Gr(
        e,
        t,
        u,
        l,
        n
      )) : (e = Kn(
        a.type,
        null,
        l,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Sc(e, n)) {
      var i = u.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ul, a(i, l) && e.ref === t.ref)
        return qt(e, t, n);
    }
    return t.flags |= 1, e = kt(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Gr(e, t, a, l, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Ul(u, l) && e.ref === t.ref)
        if (Ue = !1, t.pendingProps = l = u, Sc(e, n))
          (e.flags & 131072) !== 0 && (Ue = !0);
        else
          return t.lanes = e.lanes, qt(e, t, n);
    }
    return dc(
      e,
      t,
      a,
      l,
      n
    );
  }
  function qr(e, t, a) {
    var l = t.pendingProps, n = l.children, u = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (l = u !== null ? u.baseLanes | a : a, e !== null) {
          for (n = t.child = e.child, u = 0; n !== null; )
            u = u | n.lanes | n.childLanes, n = n.sibling;
          t.childLanes = u & ~l;
        } else t.childLanes = 0, t.child = null;
        return Yr(
          e,
          t,
          l,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && In(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Go(t, u) : Vi(), Dr(t);
      else
        return t.lanes = t.childLanes = 536870912, Yr(
          e,
          t,
          u !== null ? u.baseLanes | a : a,
          a
        );
    } else
      u !== null ? (In(t, u.cachePool), Go(t, u), aa(), t.memoizedState = null) : (e !== null && In(t, null), Vi(), aa());
    return Be(e, t, n, a), t.child;
  }
  function Yr(e, t, a, l) {
    var n = qi();
    return n = n === null ? null : { parent: Oe._currentValue, pool: n }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, e !== null && In(t, null), Vi(), Dr(t), e !== null && ql(e, t, l, !0), null;
  }
  function yu(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(f(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function dc(e, t, a, l, n) {
    return _a(t), a = $i(
      e,
      t,
      a,
      l,
      void 0,
      n
    ), l = Wi(), e !== null && !Ue ? (Fi(e, t, n), qt(e, t, n)) : (ce && l && Ni(t), t.flags |= 1, Be(e, t, a, n), t.child);
  }
  function Xr(e, t, a, l, n, u) {
    return _a(t), t.updateQueue = null, a = Yo(
      t,
      l,
      a,
      n
    ), qo(e), l = Wi(), e !== null && !Ue ? (Fi(e, t, u), qt(e, t, u)) : (ce && l && Ni(t), t.flags |= 1, Be(e, t, a, u), t.child);
  }
  function Qr(e, t, a, l, n) {
    if (_a(t), t.stateNode === null) {
      var u = Fa, i = a.contextType;
      typeof i == "object" && i !== null && (u = Xe(i)), u = new a(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = sc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, Xi(t), i = a.contextType, u.context = typeof i == "object" && i !== null ? Xe(i) : Fa, u.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (rc(
        t,
        a,
        i,
        l
      ), u.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && sc.enqueueReplaceState(u, u.state, null), Kl(t, l, u, n), Vl(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var c = t.memoizedProps, o = Na(a, c);
      u.props = o;
      var y = u.context, x = a.contextType;
      i = Fa, typeof x == "object" && x !== null && (i = Xe(x));
      var M = a.getDerivedStateFromProps;
      x = typeof M == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, x || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || y !== i) && _r(
        t,
        u,
        l,
        i
      ), Ft = !1;
      var p = t.memoizedState;
      u.state = p, Kl(t, l, u, n), Vl(), y = t.memoizedState, c || p !== y || Ft ? (typeof M == "function" && (rc(
        t,
        a,
        M,
        l
      ), y = t.memoizedState), (o = Ft || zr(
        t,
        a,
        o,
        l,
        p,
        y,
        i
      )) ? (x || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = y), u.props = l, u.state = y, u.context = i, l = o) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, Qi(e, t), i = t.memoizedProps, x = Na(a, i), u.props = x, M = t.pendingProps, p = u.context, y = a.contextType, o = Fa, typeof y == "object" && y !== null && (o = Xe(y)), c = a.getDerivedStateFromProps, (y = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== M || p !== o) && _r(
        t,
        u,
        l,
        o
      ), Ft = !1, p = t.memoizedState, u.state = p, Kl(t, l, u, n), Vl();
      var b = t.memoizedState;
      i !== M || p !== b || Ft || e !== null && e.dependencies !== null && Wn(e.dependencies) ? (typeof c == "function" && (rc(
        t,
        a,
        c,
        l
      ), b = t.memoizedState), (x = Ft || zr(
        t,
        a,
        x,
        l,
        p,
        b,
        o
      ) || e !== null && e.dependencies !== null && Wn(e.dependencies)) ? (y || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, b, o), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        b,
        o
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = b), u.props = l, u.state = b, u.context = o, l = x) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, yu(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = cl(
      t,
      e.child,
      null,
      n
    ), t.child = cl(
      t,
      null,
      a,
      n
    )) : Be(e, t, a, n), t.memoizedState = u.state, e = t.child) : e = qt(
      e,
      t,
      n
    ), e;
  }
  function Zr(e, t, a, l) {
    return Bl(), t.flags |= 256, Be(e, t, a, l), t.child;
  }
  var mc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function yc(e) {
    return { baseLanes: e, cachePool: Ro() };
  }
  function vc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= vt), e;
  }
  function Lr(e, t, a) {
    var l = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, i;
    if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (Re.current & 2) !== 0), i && (n = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ce) {
        if (n ? ta(t) : aa(), ce) {
          var c = Te, o;
          if (o = c) {
            e: {
              for (o = c, c = At; o.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break e;
                }
                if (o = St(
                  o.nextSibling
                ), o === null) {
                  c = null;
                  break e;
                }
              }
              c = o;
            }
            c !== null ? (t.memoizedState = {
              dehydrated: c,
              treeContext: Ea !== null ? { id: Ht, overflow: Ut } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, o = at(
              18,
              null,
              null,
              0
            ), o.stateNode = c, o.return = t, t.child = o, Le = t, Te = null, o = !0) : o = !1;
          }
          o || Da(t);
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return Pc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
        Gt(t);
      }
      return c = l.children, l = l.fallback, n ? (aa(), n = t.mode, c = vu(
        { mode: "hidden", children: c },
        n
      ), l = Aa(
        l,
        n,
        a,
        null
      ), c.return = t, l.return = t, c.sibling = l, t.child = c, n = t.child, n.memoizedState = yc(a), n.childLanes = vc(
        e,
        i,
        a
      ), t.memoizedState = mc, l) : (ta(t), gc(t, c));
    }
    if (o = e.memoizedState, o !== null && (c = o.dehydrated, c !== null)) {
      if (u)
        t.flags & 256 ? (ta(t), t.flags &= -257, t = pc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (aa(), t.child = e.child, t.flags |= 128, t = null) : (aa(), n = l.fallback, c = t.mode, l = vu(
          { mode: "visible", children: l.children },
          c
        ), n = Aa(
          n,
          c,
          a,
          null
        ), n.flags |= 2, l.return = t, n.return = t, l.sibling = n, t.child = l, cl(
          t,
          e.child,
          null,
          a
        ), l = t.child, l.memoizedState = yc(a), l.childLanes = vc(
          e,
          i,
          a
        ), t.memoizedState = mc, t = n);
      else if (ta(t), Pc(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, l = Error(f(419)), l.stack = "", l.digest = i, Gl({ value: l, source: null, stack: null }), t = pc(
          e,
          t,
          a
        );
      } else if (Ue || ql(e, t, a, !1), i = (a & e.childLanes) !== 0, Ue || i) {
        if (i = ve, i !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : ei(l), l = (l & (i.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== o.retryLane))
          throw o.retryLane = l, Wa(e, l), ct(i, e, l), Cr;
        c.data === "$?" || Cc(), t = pc(
          e,
          t,
          a
        );
      } else
        c.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = o.treeContext, Te = St(
          c.nextSibling
        ), Le = t, ce = !0, wa = null, At = !1, e !== null && (dt[mt++] = Ht, dt[mt++] = Ut, dt[mt++] = Ea, Ht = e.id, Ut = e.overflow, Ea = t), t = gc(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (aa(), n = l.fallback, c = t.mode, o = e.child, y = o.sibling, l = kt(o, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = o.subtreeFlags & 65011712, y !== null ? n = kt(y, n) : (n = Aa(
      n,
      c,
      a,
      null
    ), n.flags |= 2), n.return = t, l.return = t, l.sibling = n, t.child = l, l = n, n = t.child, c = e.child.memoizedState, c === null ? c = yc(a) : (o = c.cachePool, o !== null ? (y = Oe._currentValue, o = o.parent !== y ? { parent: y, pool: y } : o) : o = Ro(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: o
    }), n.memoizedState = c, n.childLanes = vc(
      e,
      i,
      a
    ), t.memoizedState = mc, l) : (ta(t), a = e.child, e = a.sibling, a = kt(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function gc(e, t) {
    return t = vu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function vu(e, t) {
    return e = at(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function pc(e, t, a) {
    return cl(t, e.child, null, a), e = gc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Vr(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Ci(e.return, t, a);
  }
  function bc(e, t, a, l, n) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: n
    } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = l, u.tail = a, u.tailMode = n);
  }
  function Kr(e, t, a) {
    var l = t.pendingProps, n = l.revealOrder, u = l.tail;
    if (Be(e, t, l.children, a), l = Re.current, (l & 2) !== 0)
      l = l & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Vr(e, a, t);
          else if (e.tag === 19)
            Vr(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      l &= 1;
    }
    switch (R(Re, l), n) {
      case "forwards":
        for (a = t.child, n = null; a !== null; )
          e = a.alternate, e !== null && hu(e) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), bc(
          t,
          !1,
          n,
          a,
          u
        );
        break;
      case "backwards":
        for (a = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && hu(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = a, a = n, n = e;
        }
        bc(
          t,
          !0,
          a,
          null,
          u
        );
        break;
      case "together":
        bc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function qt(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), ca |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (ql(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(f(153));
    if (t.child !== null) {
      for (e = t.child, a = kt(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = kt(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Sc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Wn(e)));
  }
  function pm(e, t, a) {
    switch (t.tag) {
      case 3:
        pe(t, t.stateNode.containerInfo), Wt(t, Oe, e.memoizedState.cache), Bl();
        break;
      case 27:
      case 5:
        $u(t);
        break;
      case 4:
        pe(t, t.stateNode.containerInfo);
        break;
      case 10:
        Wt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (ta(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Lr(e, t, a) : (ta(t), e = qt(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        ta(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (ql(
          e,
          t,
          a,
          !1
        ), l = (a & t.childLanes) !== 0), n) {
          if (l)
            return Kr(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), R(Re, Re.current), l) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, qr(e, t, a);
      case 24:
        Wt(t, Oe, e.memoizedState.cache);
    }
    return qt(e, t, a);
  }
  function Jr(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ue = !0;
      else {
        if (!Sc(e, a) && (t.flags & 128) === 0)
          return Ue = !1, pm(
            e,
            t,
            a
          );
        Ue = (e.flags & 131072) !== 0;
      }
    else
      Ue = !1, ce && (t.flags & 1048576) !== 0 && Eo(t, $n, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType, n = l._init;
          if (l = n(l._payload), t.type = l, typeof l == "function")
            _i(l) ? (e = Na(l, e), t.tag = 1, t = Qr(
              null,
              t,
              l,
              e,
              a
            )) : (t.tag = 0, t = dc(
              null,
              t,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              if (n = l.$$typeof, n === De) {
                t.tag = 11, t = jr(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break e;
              } else if (n === ke) {
                t.tag = 14, t = Br(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break e;
              }
            }
            throw t = Ot(l) || l, Error(f(306, t, ""));
          }
        }
        return t;
      case 0:
        return dc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return l = t.type, n = Na(
          l,
          t.pendingProps
        ), Qr(
          e,
          t,
          l,
          n,
          a
        );
      case 3:
        e: {
          if (pe(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(f(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, Qi(e, t), Kl(t, l, null, a);
          var i = t.memoizedState;
          if (l = i.cache, Wt(t, Oe, l), l !== u.cache && ji(
            t,
            [Oe],
            a,
            !0
          ), Vl(), l = i.element, u.isDehydrated)
            if (u = {
              element: l,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Zr(
                e,
                t,
                l,
                a
              );
              break e;
            } else if (l !== n) {
              n = st(
                Error(f(424)),
                t
              ), Gl(n), t = Zr(
                e,
                t,
                l,
                a
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Te = St(e.firstChild), Le = t, ce = !0, wa = null, At = !0, a = wr(
                t,
                null,
                l,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Bl(), l === n) {
              t = qt(
                e,
                t,
                a
              );
              break e;
            }
            Be(
              e,
              t,
              l,
              a
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return yu(e, t), e === null ? (a = Is(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : ce || (a = t.type, e = t.pendingProps, l = Ou(
          Z.current
        ).createElement(a), l[Ye] = t, l[Ve] = e, qe(l, a, e), He(l), t.stateNode = l) : t.memoizedState = Is(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return $u(t), e === null && ce && (l = t.stateNode = $s(
          t.type,
          t.pendingProps,
          Z.current
        ), Le = t, At = !0, n = Te, sa(t.type) ? (ef = n, Te = St(
          l.firstChild
        )) : Te = n), Be(
          e,
          t,
          t.pendingProps.children,
          a
        ), yu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ce && ((n = l = Te) && (l = Vm(
          l,
          t.type,
          t.pendingProps,
          At
        ), l !== null ? (t.stateNode = l, Le = t, Te = St(
          l.firstChild
        ), At = !1, n = !0) : n = !1), n || Da(t)), $u(t), n = t.type, u = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = u.children, Wc(n, u) ? l = null : i !== null && Wc(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = $i(
          e,
          t,
          rm,
          null,
          null,
          a
        ), vn._currentValue = n), yu(e, t), Be(e, t, l, a), t.child;
      case 6:
        return e === null && ce && ((e = a = Te) && (a = Km(
          a,
          t.pendingProps,
          At
        ), a !== null ? (t.stateNode = a, Le = t, Te = null, e = !0) : e = !1), e || Da(t)), null;
      case 13:
        return Lr(e, t, a);
      case 4:
        return pe(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = cl(
          t,
          null,
          l,
          a
        ) : Be(
          e,
          t,
          l,
          a
        ), t.child;
      case 11:
        return jr(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Be(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Be(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Be(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return l = t.pendingProps, Wt(t, t.type, l.value), Be(
          e,
          t,
          l.children,
          a
        ), t.child;
      case 9:
        return n = t.type._context, l = t.pendingProps.children, _a(t), n = Xe(n), l = l(n), t.flags |= 1, Be(e, t, l, a), t.child;
      case 14:
        return Br(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Gr(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Kr(e, t, a);
      case 31:
        return l = t.pendingProps, a = t.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (a = vu(
          l,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = kt(e.child, l), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return qr(e, t, a);
      case 24:
        return _a(t), l = Xe(Oe), e === null ? (n = qi(), n === null && (n = ve, u = Bi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= a), n = u), t.memoizedState = {
          parent: l,
          cache: n
        }, Xi(t), Wt(t, Oe, n)) : ((e.lanes & a) !== 0 && (Qi(e, t), Kl(t, null, null, a), Vl()), n = e.memoizedState, u = t.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), Wt(t, Oe, l)) : (l = u.cache, Wt(t, Oe, l), l !== n.cache && ji(
          t,
          [Oe],
          a,
          !0
        ))), Be(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  function Yt(e) {
    e.flags |= 4;
  }
  function $r(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !lh(t)) {
      if (t = yt.current, t !== null && ((ae & 4194048) === ae ? Et !== null : (ae & 62914560) !== ae && (ae & 536870912) === 0 || t !== Et))
        throw Zl = Yi, No;
      e.flags |= 8192;
    }
  }
  function gu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? wf() : 536870912, e.lanes |= t, sl |= t);
  }
  function en(e, t) {
    if (!ce)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Se(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t)
      for (var n = e.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function bm(e, t, a) {
    var l = t.pendingProps;
    switch (ki(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Se(t), null;
      case 1:
        return Se(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), jt(Oe), Vt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (jl(t) ? Yt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Do())), Se(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (Yt(t), a !== null ? (Se(t), $r(t, a)) : (Se(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Yt(t), Se(t), $r(t, a)) : (Se(t), t.flags &= -16777217) : (e.memoizedProps !== l && Yt(t), Se(t), t.flags &= -16777217), null;
      case 27:
        zn(t), a = Z.current;
        var n = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== l && Yt(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Se(t), null;
          }
          e = G.current, jl(t) ? Mo(t) : (e = $s(n, l, a), t.stateNode = e, Yt(t));
        }
        return Se(t), null;
      case 5:
        if (zn(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Yt(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Se(t), null;
          }
          if (e = G.current, jl(t))
            Mo(t);
          else {
            switch (n = Ou(
              Z.current
            ), e) {
              case 1:
                e = n.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                e = n.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    e = n.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    e = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    e = n.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof l.is == "string" ? n.createElement("select", { is: l.is }) : n.createElement("select"), l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                    break;
                  default:
                    e = typeof l.is == "string" ? n.createElement(a, { is: l.is }) : n.createElement(a);
                }
            }
            e[Ye] = t, e[Ve] = l;
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6)
                e.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
              }
              if (n === t) break e;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t)
                  break e;
                n = n.return;
              }
              n.sibling.return = n.return, n = n.sibling;
            }
            t.stateNode = e;
            e: switch (qe(e, a, l), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Yt(t);
          }
        }
        return Se(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Yt(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(f(166));
          if (e = Z.current, jl(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, n = Le, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            e[Ye] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Xs(e.nodeValue, a)), e || Da(t);
          } else
            e = Ou(e).createTextNode(
              l
            ), e[Ye] = t, t.stateNode = e;
        }
        return Se(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = jl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(f(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
              n[Ye] = t;
            } else
              Bl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Se(t), n = !1;
          } else
            n = Do(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (Gt(t), t) : (Gt(t), null);
        }
        if (Gt(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = l !== null, e = e !== null && e.memoizedState !== null, a) {
          l = t.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool);
          var u = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== n && (l.flags |= 2048);
        }
        return a !== e && a && (t.child.flags |= 8192), gu(t, t.updateQueue), Se(t), null;
      case 4:
        return Vt(), e === null && Lc(t.stateNode.containerInfo), Se(t), null;
      case 10:
        return jt(t.type), Se(t), null;
      case 19:
        if (H(Re), n = t.memoizedState, n === null) return Se(t), null;
        if (l = (t.flags & 128) !== 0, u = n.rendering, u === null)
          if (l) en(n, !1);
          else {
            if (xe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = hu(e), u !== null) {
                  for (t.flags |= 128, en(n, !1), e = u.updateQueue, t.updateQueue = e, gu(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Ao(a, e), a = a.sibling;
                  return R(
                    Re,
                    Re.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && xt() > Su && (t.flags |= 128, l = !0, en(n, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = hu(u), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, gu(t, e), en(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !ce)
                return Se(t), null;
            } else
              2 * xt() - n.renderingStartTime > Su && a !== 536870912 && (t.flags |= 128, l = !0, en(n, !1), t.lanes = 4194304);
          n.isBackwards ? (u.sibling = t.child, t.child = u) : (e = n.last, e !== null ? e.sibling = u : t.child = u, n.last = u);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = xt(), t.sibling = null, e = Re.current, R(Re, l ? e & 1 | 2 : e & 1), t) : (Se(t), null);
      case 22:
      case 23:
        return Gt(t), Ki(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Se(t), a = t.updateQueue, a !== null && gu(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && H(Oa), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), jt(Oe), Se(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function Sm(e, t) {
    switch (ki(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return jt(Oe), Vt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return zn(t), null;
      case 13:
        if (Gt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(f(340));
          Bl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return H(Re), null;
      case 4:
        return Vt(), null;
      case 10:
        return jt(t.type), null;
      case 22:
      case 23:
        return Gt(t), Ki(), e !== null && H(Oa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return jt(Oe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Wr(e, t) {
    switch (ki(t), t.tag) {
      case 3:
        jt(Oe), Vt();
        break;
      case 26:
      case 27:
      case 5:
        zn(t);
        break;
      case 4:
        Vt();
        break;
      case 13:
        Gt(t);
        break;
      case 19:
        H(Re);
        break;
      case 10:
        jt(t.type);
        break;
      case 22:
      case 23:
        Gt(t), Ki(), e !== null && H(Oa);
        break;
      case 24:
        jt(Oe);
    }
  }
  function tn(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var u = a.create, i = a.inst;
            l = u(), i.destroy = l;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (c) {
      ye(t, t.return, c);
    }
  }
  function la(e, t, a) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var i = l.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = t;
              var o = a, y = c;
              try {
                y();
              } catch (x) {
                ye(
                  n,
                  o,
                  x
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (x) {
      ye(t, t.return, x);
    }
  }
  function Fr(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Bo(t, a);
      } catch (l) {
        ye(e, e.return, l);
      }
    }
  }
  function Ir(e, t, a) {
    a.props = Na(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      ye(e, t, l);
    }
  }
  function an(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l;
      }
    } catch (n) {
      ye(e, t, n);
    }
  }
  function Mt(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (n) {
          ye(e, t, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          ye(e, t, n);
        }
      else a.current = null;
  }
  function Pr(e) {
    var t = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      ye(e, e.return, n);
    }
  }
  function Tc(e, t, a) {
    try {
      var l = e.stateNode;
      Ym(l, e.type, a, t), l[Ve] = t;
    } catch (n) {
      ye(e, e.return, n);
    }
  }
  function es(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && sa(e.type) || e.tag === 4;
  }
  function xc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || es(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && sa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ac(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = _u));
    else if (l !== 4 && (l === 27 && sa(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (Ac(e, t, a), e = e.sibling; e !== null; )
        Ac(e, t, a), e = e.sibling;
  }
  function pu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && sa(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (pu(e, t, a), e = e.sibling; e !== null; )
        pu(e, t, a), e = e.sibling;
  }
  function ts(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      qe(t, l, a), t[Ye] = e, t[Ve] = a;
    } catch (u) {
      ye(e, e.return, u);
    }
  }
  var Xt = !1, Ee = !1, Ec = !1, as = typeof WeakSet == "function" ? WeakSet : Set, Ce = null;
  function Tm(e, t) {
    if (e = e.containerInfo, Jc = Cu, e = ho(e), xi(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var n = l.anchorOffset, u = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, u.nodeType;
            } catch {
              a = null;
              break e;
            }
            var i = 0, c = -1, o = -1, y = 0, x = 0, M = e, p = null;
            t: for (; ; ) {
              for (var b; M !== a || n !== 0 && M.nodeType !== 3 || (c = i + n), M !== u || l !== 0 && M.nodeType !== 3 || (o = i + l), M.nodeType === 3 && (i += M.nodeValue.length), (b = M.firstChild) !== null; )
                p = M, M = b;
              for (; ; ) {
                if (M === e) break t;
                if (p === a && ++y === n && (c = i), p === u && ++x === l && (o = i), (b = M.nextSibling) !== null) break;
                M = p, p = M.parentNode;
              }
              M = b;
            }
            a = c === -1 || o === -1 ? null : { start: c, end: o };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for ($c = { focusedElem: e, selectionRange: a }, Cu = !1, Ce = t; Ce !== null; )
      if (t = Ce, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, Ce = e;
      else
        for (; Ce !== null; ) {
          switch (t = Ce, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, a = t, n = u.memoizedProps, u = u.memoizedState, l = a.stateNode;
                try {
                  var Q = Na(
                    a.type,
                    n,
                    a.elementType === a.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    Q,
                    u
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (q) {
                  ye(
                    a,
                    a.return,
                    q
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  Ic(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ic(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(f(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Ce = e;
            break;
          }
          Ce = t.return;
        }
  }
  function ls(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        na(e, a), l & 4 && tn(5, a);
        break;
      case 1:
        if (na(e, a), l & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (i) {
              ye(a, a.return, i);
            }
          else {
            var n = Na(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                n,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              ye(
                a,
                a.return,
                i
              );
            }
          }
        l & 64 && Fr(a), l & 512 && an(a, a.return);
        break;
      case 3:
        if (na(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Bo(e, t);
          } catch (i) {
            ye(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && l & 4 && ts(a);
      case 26:
      case 5:
        na(e, a), t === null && l & 4 && Pr(a), l & 512 && an(a, a.return);
        break;
      case 12:
        na(e, a);
        break;
      case 13:
        na(e, a), l & 4 && is(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Om.bind(
          null,
          a
        ), Jm(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Xt, !l) {
          t = t !== null && t.memoizedState !== null || Ee, n = Xt;
          var u = Ee;
          Xt = l, (Ee = t) && !u ? ua(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : na(e, a), Xt = n, Ee = u;
        }
        break;
      case 30:
        break;
      default:
        na(e, a);
    }
  }
  function ns(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ns(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && li(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var be = null, $e = !1;
  function Qt(e, t, a) {
    for (a = a.child; a !== null; )
      us(e, t, a), a = a.sibling;
  }
  function us(e, t, a) {
    if (Pe && typeof Pe.onCommitFiberUnmount == "function")
      try {
        Pe.onCommitFiberUnmount(Al, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Ee || Mt(a, t), Qt(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Ee || Mt(a, t);
        var l = be, n = $e;
        sa(a.type) && (be = a.stateNode, $e = !1), Qt(
          e,
          t,
          a
        ), hn(a.stateNode), be = l, $e = n;
        break;
      case 5:
        Ee || Mt(a, t);
      case 6:
        if (l = be, n = $e, be = null, Qt(
          e,
          t,
          a
        ), be = l, $e = n, be !== null)
          if ($e)
            try {
              (be.nodeType === 9 ? be.body : be.nodeName === "HTML" ? be.ownerDocument.body : be).removeChild(a.stateNode);
            } catch (u) {
              ye(
                a,
                t,
                u
              );
            }
          else
            try {
              be.removeChild(a.stateNode);
            } catch (u) {
              ye(
                a,
                t,
                u
              );
            }
        break;
      case 18:
        be !== null && ($e ? (e = be, Ks(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Sn(e)) : Ks(be, a.stateNode));
        break;
      case 4:
        l = be, n = $e, be = a.stateNode.containerInfo, $e = !0, Qt(
          e,
          t,
          a
        ), be = l, $e = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ee || la(2, a, t), Ee || la(4, a, t), Qt(
          e,
          t,
          a
        );
        break;
      case 1:
        Ee || (Mt(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Ir(
          a,
          t,
          l
        )), Qt(
          e,
          t,
          a
        );
        break;
      case 21:
        Qt(
          e,
          t,
          a
        );
        break;
      case 22:
        Ee = (l = Ee) || a.memoizedState !== null, Qt(
          e,
          t,
          a
        ), Ee = l;
        break;
      default:
        Qt(
          e,
          t,
          a
        );
    }
  }
  function is(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Sn(e);
      } catch (a) {
        ye(t, t.return, a);
      }
  }
  function xm(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new as()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new as()), t;
      default:
        throw Error(f(435, e.tag));
    }
  }
  function Mc(e, t) {
    var a = xm(e);
    t.forEach(function(l) {
      var n = Rm.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(n, n));
    });
  }
  function lt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l], u = e, i = t, c = i;
        e: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (sa(c.type)) {
                be = c.stateNode, $e = !1;
                break e;
              }
              break;
            case 5:
              be = c.stateNode, $e = !1;
              break e;
            case 3:
            case 4:
              be = c.stateNode.containerInfo, $e = !0;
              break e;
          }
          c = c.return;
        }
        if (be === null) throw Error(f(160));
        us(u, i, n), be = null, $e = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        cs(t, e), t = t.sibling;
  }
  var bt = null;
  function cs(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        lt(t, e), nt(e), l & 4 && (la(3, e, e.return), tn(3, e), la(5, e, e.return));
        break;
      case 1:
        lt(t, e), nt(e), l & 512 && (Ee || a === null || Mt(a, a.return)), l & 64 && Xt && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = bt;
        if (lt(t, e), nt(e), l & 512 && (Ee || a === null || Mt(a, a.return)), l & 4) {
          var u = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (l) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[wl] || u[Ye] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(l), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), qe(u, l, a), u[Ye] = e, He(u), l = u;
                      break e;
                    case "link":
                      var i = th(
                        "link",
                        "href",
                        n
                      ).get(l + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      u = n.createElement(l), qe(u, l, a), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = th(
                        "meta",
                        "content",
                        n
                      ).get(l + (a.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      u = n.createElement(l), qe(u, l, a), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, l));
                  }
                  u[Ye] = e, He(u), l = u;
                }
                e.stateNode = l;
              } else
                ah(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = eh(
                n,
                l,
                e.memoizedProps
              );
          else
            u !== l ? (u === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : u.count--, l === null ? ah(
              n,
              e.type,
              e.stateNode
            ) : eh(
              n,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && Tc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        lt(t, e), nt(e), l & 512 && (Ee || a === null || Mt(a, a.return)), a !== null && l & 4 && Tc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (lt(t, e), nt(e), l & 512 && (Ee || a === null || Mt(a, a.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            Qa(n, "");
          } catch (b) {
            ye(e, e.return, b);
          }
        }
        l & 4 && e.stateNode != null && (n = e.memoizedProps, Tc(
          e,
          n,
          a !== null ? a.memoizedProps : n
        )), l & 1024 && (Ec = !0);
        break;
      case 6:
        if (lt(t, e), nt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(f(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (b) {
            ye(e, e.return, b);
          }
        }
        break;
      case 3:
        if (ku = null, n = bt, bt = Ru(t.containerInfo), lt(t, e), bt = n, nt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Sn(t.containerInfo);
          } catch (b) {
            ye(e, e.return, b);
          }
        Ec && (Ec = !1, fs(e));
        break;
      case 4:
        l = bt, bt = Ru(
          e.stateNode.containerInfo
        ), lt(t, e), nt(e), bt = l;
        break;
      case 12:
        lt(t, e), nt(e);
        break;
      case 13:
        lt(t, e), nt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Rc = xt()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Mc(e, l)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var o = a !== null && a.memoizedState !== null, y = Xt, x = Ee;
        if (Xt = y || n, Ee = x || o, lt(t, e), Ee = x, Xt = y, nt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || o || Xt || Ee || ka(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                o = a = t;
                try {
                  if (u = o.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = o.stateNode;
                    var M = o.memoizedProps.style, p = M != null && M.hasOwnProperty("display") ? M.display : null;
                    c.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
                  }
                } catch (b) {
                  ye(o, o.return, b);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                o = t;
                try {
                  o.stateNode.nodeValue = n ? "" : o.memoizedProps;
                } catch (b) {
                  ye(o, o.return, b);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, Mc(e, a))));
        break;
      case 19:
        lt(t, e), nt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Mc(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        lt(t, e), nt(e);
    }
  }
  function nt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (es(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(f(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode, u = xc(e);
            pu(e, u, n);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (Qa(i, ""), a.flags &= -33);
            var c = xc(e);
            pu(e, c, i);
            break;
          case 3:
          case 4:
            var o = a.stateNode.containerInfo, y = xc(e);
            Ac(
              e,
              y,
              o
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (x) {
        ye(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function fs(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        fs(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function na(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        ls(e, t.alternate, t), t = t.sibling;
  }
  function ka(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          la(4, t, t.return), ka(t);
          break;
        case 1:
          Mt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Ir(
            t,
            t.return,
            a
          ), ka(t);
          break;
        case 27:
          hn(t.stateNode);
        case 26:
        case 5:
          Mt(t, t.return), ka(t);
          break;
        case 22:
          t.memoizedState === null && ka(t);
          break;
        case 30:
          ka(t);
          break;
        default:
          ka(t);
      }
      e = e.sibling;
    }
  }
  function ua(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, n = e, u = t, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ua(
            n,
            u,
            a
          ), tn(4, u);
          break;
        case 1:
          if (ua(
            n,
            u,
            a
          ), l = u, n = l.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (y) {
              ye(l, l.return, y);
            }
          if (l = u, n = l.updateQueue, n !== null) {
            var c = l.stateNode;
            try {
              var o = n.shared.hiddenCallbacks;
              if (o !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < o.length; n++)
                  jo(o[n], c);
            } catch (y) {
              ye(l, l.return, y);
            }
          }
          a && i & 64 && Fr(u), an(u, u.return);
          break;
        case 27:
          ts(u);
        case 26:
        case 5:
          ua(
            n,
            u,
            a
          ), a && l === null && i & 4 && Pr(u), an(u, u.return);
          break;
        case 12:
          ua(
            n,
            u,
            a
          );
          break;
        case 13:
          ua(
            n,
            u,
            a
          ), a && i & 4 && is(n, u);
          break;
        case 22:
          u.memoizedState === null && ua(
            n,
            u,
            a
          ), an(u, u.return);
          break;
        case 30:
          break;
        default:
          ua(
            n,
            u,
            a
          );
      }
      t = t.sibling;
    }
  }
  function wc(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Yl(a));
  }
  function Dc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Yl(e));
  }
  function wt(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        os(
          e,
          t,
          a,
          l
        ), t = t.sibling;
  }
  function os(e, t, a, l) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        wt(
          e,
          t,
          a,
          l
        ), n & 2048 && tn(9, t);
        break;
      case 1:
        wt(
          e,
          t,
          a,
          l
        );
        break;
      case 3:
        wt(
          e,
          t,
          a,
          l
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Yl(e)));
        break;
      case 12:
        if (n & 2048) {
          wt(
            e,
            t,
            a,
            l
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, i = u.id, c = u.onPostCommit;
            typeof c == "function" && c(
              i,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (o) {
            ye(t, t.return, o);
          }
        } else
          wt(
            e,
            t,
            a,
            l
          );
        break;
      case 13:
        wt(
          e,
          t,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? wt(
          e,
          t,
          a,
          l
        ) : ln(e, t) : u._visibility & 2 ? wt(
          e,
          t,
          a,
          l
        ) : (u._visibility |= 2, fl(
          e,
          t,
          a,
          l,
          (t.subtreeFlags & 10256) !== 0
        )), n & 2048 && wc(i, t);
        break;
      case 24:
        wt(
          e,
          t,
          a,
          l
        ), n & 2048 && Dc(t.alternate, t);
        break;
      default:
        wt(
          e,
          t,
          a,
          l
        );
    }
  }
  function fl(e, t, a, l, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = e, i = t, c = a, o = l, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          fl(
            u,
            i,
            c,
            o,
            n
          ), tn(8, i);
          break;
        case 23:
          break;
        case 22:
          var x = i.stateNode;
          i.memoizedState !== null ? x._visibility & 2 ? fl(
            u,
            i,
            c,
            o,
            n
          ) : ln(
            u,
            i
          ) : (x._visibility |= 2, fl(
            u,
            i,
            c,
            o,
            n
          )), n && y & 2048 && wc(
            i.alternate,
            i
          );
          break;
        case 24:
          fl(
            u,
            i,
            c,
            o,
            n
          ), n && y & 2048 && Dc(i.alternate, i);
          break;
        default:
          fl(
            u,
            i,
            c,
            o,
            n
          );
      }
      t = t.sibling;
    }
  }
  function ln(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, l = t, n = l.flags;
        switch (l.tag) {
          case 22:
            ln(a, l), n & 2048 && wc(
              l.alternate,
              l
            );
            break;
          case 24:
            ln(a, l), n & 2048 && Dc(l.alternate, l);
            break;
          default:
            ln(a, l);
        }
        t = t.sibling;
      }
  }
  var nn = 8192;
  function ol(e) {
    if (e.subtreeFlags & nn)
      for (e = e.child; e !== null; )
        rs(e), e = e.sibling;
  }
  function rs(e) {
    switch (e.tag) {
      case 26:
        ol(e), e.flags & nn && e.memoizedState !== null && c0(
          bt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ol(e);
        break;
      case 3:
      case 4:
        var t = bt;
        bt = Ru(e.stateNode.containerInfo), ol(e), bt = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = nn, nn = 16777216, ol(e), nn = t) : ol(e));
        break;
      default:
        ol(e);
    }
  }
  function ss(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function un(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          Ce = l, ds(
            l,
            e
          );
        }
      ss(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        hs(e), e = e.sibling;
  }
  function hs(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        un(e), e.flags & 2048 && la(9, e, e.return);
        break;
      case 3:
        un(e);
        break;
      case 12:
        un(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, bu(e)) : un(e);
        break;
      default:
        un(e);
    }
  }
  function bu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          Ce = l, ds(
            l,
            e
          );
        }
      ss(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          la(8, t, t.return), bu(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, bu(t));
          break;
        default:
          bu(t);
      }
      e = e.sibling;
    }
  }
  function ds(e, t) {
    for (; Ce !== null; ) {
      var a = Ce;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          la(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Yl(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, Ce = l;
      else
        e: for (a = e; Ce !== null; ) {
          l = Ce;
          var n = l.sibling, u = l.return;
          if (ns(l), l === a) {
            Ce = null;
            break e;
          }
          if (n !== null) {
            n.return = u, Ce = n;
            break e;
          }
          Ce = u;
        }
    }
  }
  var Am = {
    getCacheForType: function(e) {
      var t = Xe(Oe), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, Em = typeof WeakMap == "function" ? WeakMap : Map, fe = 0, ve = null, I = null, ae = 0, oe = 0, ut = null, ia = !1, rl = !1, zc = !1, Zt = 0, xe = 0, ca = 0, Ha = 0, _c = 0, vt = 0, sl = 0, cn = null, We = null, Oc = !1, Rc = 0, Su = 1 / 0, Tu = null, fa = null, Ge = 0, oa = null, hl = null, dl = 0, Nc = 0, kc = null, ms = null, fn = 0, Hc = null;
  function it() {
    if ((fe & 2) !== 0 && ae !== 0)
      return ae & -ae;
    if (T.T !== null) {
      var e = el;
      return e !== 0 ? e : Yc();
    }
    return _f();
  }
  function ys() {
    vt === 0 && (vt = (ae & 536870912) === 0 || ce ? Mf() : 536870912);
    var e = yt.current;
    return e !== null && (e.flags |= 32), vt;
  }
  function ct(e, t, a) {
    (e === ve && (oe === 2 || oe === 9) || e.cancelPendingCommit !== null) && (ml(e, 0), ra(
      e,
      ae,
      vt,
      !1
    )), Ml(e, a), ((fe & 2) === 0 || e !== ve) && (e === ve && ((fe & 2) === 0 && (Ha |= a), xe === 4 && ra(
      e,
      ae,
      vt,
      !1
    )), Dt(e));
  }
  function vs(e, t, a) {
    if ((fe & 6) !== 0) throw Error(f(327));
    var l = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || El(e, t), n = l ? Dm(e, t) : jc(e, t, !0), u = l;
    do {
      if (n === 0) {
        rl && !l && ra(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, u && !Mm(a)) {
          n = jc(e, t, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = e.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            e: {
              var c = e;
              n = cn;
              var o = c.current.memoizedState.isDehydrated;
              if (o && (ml(c, i).flags |= 256), i = jc(
                c,
                i,
                !1
              ), i !== 2) {
                if (zc && !o) {
                  c.errorRecoveryDisabledLanes |= u, Ha |= u, n = 4;
                  break e;
                }
                u = We, We = n, u !== null && (We === null ? We = u : We.push.apply(
                  We,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          ml(e, 0), ra(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, u = n, u) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ra(
                l,
                t,
                vt,
                !ia
              );
              break e;
            case 2:
              We = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((t & 62914560) === t && (n = Rc + 300 - xt(), 10 < n)) {
            if (ra(
              l,
              t,
              vt,
              !ia
            ), Nn(l, 0, !0) !== 0) break e;
            l.timeoutHandle = Ls(
              gs.bind(
                null,
                l,
                a,
                We,
                Tu,
                Oc,
                t,
                vt,
                Ha,
                sl,
                ia,
                u,
                2,
                -0,
                0
              ),
              n
            );
            break e;
          }
          gs(
            l,
            a,
            We,
            Tu,
            Oc,
            t,
            vt,
            Ha,
            sl,
            ia,
            u,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Dt(e);
  }
  function gs(e, t, a, l, n, u, i, c, o, y, x, M, p, b) {
    if (e.timeoutHandle = -1, M = t.subtreeFlags, (M & 8192 || (M & 16785408) === 16785408) && (yn = { stylesheets: null, count: 0, unsuspend: i0 }, rs(t), M = f0(), M !== null)) {
      e.cancelPendingCommit = M(
        Es.bind(
          null,
          e,
          t,
          u,
          a,
          l,
          n,
          i,
          c,
          o,
          x,
          1,
          p,
          b
        )
      ), ra(e, u, i, !y);
      return;
    }
    Es(
      e,
      t,
      u,
      a,
      l,
      n,
      i,
      c,
      o
    );
  }
  function Mm(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var n = a[l], u = n.getSnapshot;
          n = n.value;
          try {
            if (!tt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function ra(e, t, a, l) {
    t &= ~_c, t &= ~Ha, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - et(n), i = 1 << u;
      l[u] = -1, n &= ~i;
    }
    a !== 0 && Df(e, a, t);
  }
  function xu() {
    return (fe & 6) === 0 ? (on(0), !1) : !0;
  }
  function Uc() {
    if (I !== null) {
      if (oe === 0)
        var e = I.return;
      else
        e = I, Ct = za = null, Ii(e), il = null, Il = 0, e = I;
      for (; e !== null; )
        Wr(e.alternate, e), e = e.return;
      I = null;
    }
  }
  function ml(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Qm(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Uc(), ve = e, I = a = kt(e.current, null), ae = t, oe = 0, ut = null, ia = !1, rl = El(e, t), zc = !1, sl = vt = _c = Ha = ca = xe = 0, We = cn = null, Oc = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var n = 31 - et(l), u = 1 << n;
        t |= e[n], l &= ~u;
      }
    return Zt = t, Zn(), a;
  }
  function ps(e, t) {
    J = null, T.H = ou, t === Ql || t === Pn ? (t = Uo(), oe = 3) : t === No ? (t = Uo(), oe = 4) : oe = t === Cr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ut = t, I === null && (xe = 1, mu(
      e,
      st(t, e.current)
    ));
  }
  function bs() {
    var e = T.H;
    return T.H = ou, e === null ? ou : e;
  }
  function Ss() {
    var e = T.A;
    return T.A = Am, e;
  }
  function Cc() {
    xe = 4, ia || (ae & 4194048) !== ae && yt.current !== null || (rl = !0), (ca & 134217727) === 0 && (Ha & 134217727) === 0 || ve === null || ra(
      ve,
      ae,
      vt,
      !1
    );
  }
  function jc(e, t, a) {
    var l = fe;
    fe |= 2;
    var n = bs(), u = Ss();
    (ve !== e || ae !== t) && (Tu = null, ml(e, t)), t = !1;
    var i = xe;
    e: do
      try {
        if (oe !== 0 && I !== null) {
          var c = I, o = ut;
          switch (oe) {
            case 8:
              Uc(), i = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              yt.current === null && (t = !0);
              var y = oe;
              if (oe = 0, ut = null, yl(e, c, o, y), a && rl) {
                i = 0;
                break e;
              }
              break;
            default:
              y = oe, oe = 0, ut = null, yl(e, c, o, y);
          }
        }
        wm(), i = xe;
        break;
      } catch (x) {
        ps(e, x);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Ct = za = null, fe = l, T.H = n, T.A = u, I === null && (ve = null, ae = 0, Zn()), i;
  }
  function wm() {
    for (; I !== null; ) Ts(I);
  }
  function Dm(e, t) {
    var a = fe;
    fe |= 2;
    var l = bs(), n = Ss();
    ve !== e || ae !== t ? (Tu = null, Su = xt() + 500, ml(e, t)) : rl = El(
      e,
      t
    );
    e: do
      try {
        if (oe !== 0 && I !== null) {
          t = I;
          var u = ut;
          t: switch (oe) {
            case 1:
              oe = 0, ut = null, yl(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (ko(u)) {
                oe = 0, ut = null, xs(t);
                break;
              }
              t = function() {
                oe !== 2 && oe !== 9 || ve !== e || (oe = 7), Dt(e);
              }, u.then(t, t);
              break e;
            case 3:
              oe = 7;
              break e;
            case 4:
              oe = 5;
              break e;
            case 7:
              ko(u) ? (oe = 0, ut = null, xs(t)) : (oe = 0, ut = null, yl(e, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (I.tag) {
                case 26:
                  i = I.memoizedState;
                case 5:
                case 27:
                  var c = I;
                  if (!i || lh(i)) {
                    oe = 0, ut = null;
                    var o = c.sibling;
                    if (o !== null) I = o;
                    else {
                      var y = c.return;
                      y !== null ? (I = y, Au(y)) : I = null;
                    }
                    break t;
                  }
              }
              oe = 0, ut = null, yl(e, t, u, 5);
              break;
            case 6:
              oe = 0, ut = null, yl(e, t, u, 6);
              break;
            case 8:
              Uc(), xe = 6;
              break e;
            default:
              throw Error(f(462));
          }
        }
        zm();
        break;
      } catch (x) {
        ps(e, x);
      }
    while (!0);
    return Ct = za = null, T.H = l, T.A = n, fe = a, I !== null ? 0 : (ve = null, ae = 0, Zn(), xe);
  }
  function zm() {
    for (; I !== null && !Wh(); )
      Ts(I);
  }
  function Ts(e) {
    var t = Jr(e.alternate, e, Zt);
    e.memoizedProps = e.pendingProps, t === null ? Au(e) : I = t;
  }
  function xs(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Xr(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ae
        );
        break;
      case 11:
        t = Xr(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ae
        );
        break;
      case 5:
        Ii(t);
      default:
        Wr(a, t), t = I = Ao(t, Zt), t = Jr(a, t, Zt);
    }
    e.memoizedProps = e.pendingProps, t === null ? Au(e) : I = t;
  }
  function yl(e, t, a, l) {
    Ct = za = null, Ii(t), il = null, Il = 0;
    var n = t.return;
    try {
      if (gm(
        e,
        n,
        t,
        a,
        ae
      )) {
        xe = 1, mu(
          e,
          st(a, e.current)
        ), I = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw I = n, u;
      xe = 1, mu(
        e,
        st(a, e.current)
      ), I = null;
      return;
    }
    t.flags & 32768 ? (ce || l === 1 ? e = !0 : rl || (ae & 536870912) !== 0 ? e = !1 : (ia = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = yt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), As(t, e)) : Au(t);
  }
  function Au(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        As(
          t,
          ia
        );
        return;
      }
      e = t.return;
      var a = bm(
        t.alternate,
        t,
        Zt
      );
      if (a !== null) {
        I = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        I = t;
        return;
      }
      I = t = e;
    } while (t !== null);
    xe === 0 && (xe = 5);
  }
  function As(e, t) {
    do {
      var a = Sm(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, I = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        I = e;
        return;
      }
      I = e = a;
    } while (e !== null);
    xe = 6, I = null;
  }
  function Es(e, t, a, l, n, u, i, c, o) {
    e.cancelPendingCommit = null;
    do
      Eu();
    while (Ge !== 0);
    if ((fe & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (u = t.lanes | t.childLanes, u |= Di, id(
        e,
        a,
        u,
        i,
        c,
        o
      ), e === ve && (I = ve = null, ae = 0), hl = t, oa = e, dl = a, Nc = u, kc = n, ms = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Nm(_n, function() {
        return _s(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = T.T, T.T = null, n = N.p, N.p = 2, i = fe, fe |= 4;
        try {
          Tm(e, t, a);
        } finally {
          fe = i, N.p = n, T.T = l;
        }
      }
      Ge = 1, Ms(), ws(), Ds();
    }
  }
  function Ms() {
    if (Ge === 1) {
      Ge = 0;
      var e = oa, t = hl, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = T.T, T.T = null;
        var l = N.p;
        N.p = 2;
        var n = fe;
        fe |= 4;
        try {
          cs(t, e);
          var u = $c, i = ho(e.containerInfo), c = u.focusedElem, o = u.selectionRange;
          if (i !== c && c && c.ownerDocument && so(
            c.ownerDocument.documentElement,
            c
          )) {
            if (o !== null && xi(c)) {
              var y = o.start, x = o.end;
              if (x === void 0 && (x = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  x,
                  c.value.length
                );
              else {
                var M = c.ownerDocument || document, p = M && M.defaultView || window;
                if (p.getSelection) {
                  var b = p.getSelection(), Q = c.textContent.length, q = Math.min(o.start, Q), he = o.end === void 0 ? q : Math.min(o.end, Q);
                  !b.extend && q > he && (i = he, he = q, q = i);
                  var d = ro(
                    c,
                    q
                  ), h = ro(
                    c,
                    he
                  );
                  if (d && h && (b.rangeCount !== 1 || b.anchorNode !== d.node || b.anchorOffset !== d.offset || b.focusNode !== h.node || b.focusOffset !== h.offset)) {
                    var m = M.createRange();
                    m.setStart(d.node, d.offset), b.removeAllRanges(), q > he ? (b.addRange(m), b.extend(h.node, h.offset)) : (m.setEnd(h.node, h.offset), b.addRange(m));
                  }
                }
              }
            }
            for (M = [], b = c; b = b.parentNode; )
              b.nodeType === 1 && M.push({
                element: b,
                left: b.scrollLeft,
                top: b.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < M.length; c++) {
              var A = M[c];
              A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
            }
          }
          Cu = !!Jc, $c = Jc = null;
        } finally {
          fe = n, N.p = l, T.T = a;
        }
      }
      e.current = t, Ge = 2;
    }
  }
  function ws() {
    if (Ge === 2) {
      Ge = 0;
      var e = oa, t = hl, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = T.T, T.T = null;
        var l = N.p;
        N.p = 2;
        var n = fe;
        fe |= 4;
        try {
          ls(e, t.alternate, t);
        } finally {
          fe = n, N.p = l, T.T = a;
        }
      }
      Ge = 3;
    }
  }
  function Ds() {
    if (Ge === 4 || Ge === 3) {
      Ge = 0, Fh();
      var e = oa, t = hl, a = dl, l = ms;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ge = 5 : (Ge = 0, hl = oa = null, zs(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (fa = null), ti(a), t = t.stateNode, Pe && typeof Pe.onCommitFiberRoot == "function")
        try {
          Pe.onCommitFiberRoot(
            Al,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = T.T, n = N.p, N.p = 2, T.T = null;
        try {
          for (var u = e.onRecoverableError, i = 0; i < l.length; i++) {
            var c = l[i];
            u(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          T.T = t, N.p = n;
        }
      }
      (dl & 3) !== 0 && Eu(), Dt(e), n = e.pendingLanes, (a & 4194090) !== 0 && (n & 42) !== 0 ? e === Hc ? fn++ : (fn = 0, Hc = e) : fn = 0, on(0);
    }
  }
  function zs(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Yl(t)));
  }
  function Eu(e) {
    return Ms(), ws(), Ds(), _s();
  }
  function _s() {
    if (Ge !== 5) return !1;
    var e = oa, t = Nc;
    Nc = 0;
    var a = ti(dl), l = T.T, n = N.p;
    try {
      N.p = 32 > a ? 32 : a, T.T = null, a = kc, kc = null;
      var u = oa, i = dl;
      if (Ge = 0, hl = oa = null, dl = 0, (fe & 6) !== 0) throw Error(f(331));
      var c = fe;
      if (fe |= 4, hs(u.current), os(
        u,
        u.current,
        i,
        a
      ), fe = c, on(0, !1), Pe && typeof Pe.onPostCommitFiberRoot == "function")
        try {
          Pe.onPostCommitFiberRoot(Al, u);
        } catch {
        }
      return !0;
    } finally {
      N.p = n, T.T = l, zs(e, t);
    }
  }
  function Os(e, t, a) {
    t = st(a, t), t = hc(e.stateNode, t, 2), e = Pt(e, t, 2), e !== null && (Ml(e, 2), Dt(e));
  }
  function ye(e, t, a) {
    if (e.tag === 3)
      Os(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Os(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (fa === null || !fa.has(l))) {
            e = st(a, e), a = Hr(2), l = Pt(t, a, 2), l !== null && (Ur(
              a,
              l,
              t,
              e
            ), Ml(l, 2), Dt(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Bc(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Em();
      var n = /* @__PURE__ */ new Set();
      l.set(t, n);
    } else
      n = l.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(t, n));
    n.has(a) || (zc = !0, n.add(a), e = _m.bind(null, e, t, a), t.then(e, e));
  }
  function _m(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, ve === e && (ae & a) === a && (xe === 4 || xe === 3 && (ae & 62914560) === ae && 300 > xt() - Rc ? (fe & 2) === 0 && ml(e, 0) : _c |= a, sl === ae && (sl = 0)), Dt(e);
  }
  function Rs(e, t) {
    t === 0 && (t = wf()), e = Wa(e, t), e !== null && (Ml(e, t), Dt(e));
  }
  function Om(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Rs(e, a);
  }
  function Rm(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, n = e.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    l !== null && l.delete(t), Rs(e, a);
  }
  function Nm(e, t) {
    return Fu(e, t);
  }
  var Mu = null, vl = null, Gc = !1, wu = !1, qc = !1, Ua = 0;
  function Dt(e) {
    e !== vl && e.next === null && (vl === null ? Mu = vl = e : vl = vl.next = e), wu = !0, Gc || (Gc = !0, Hm());
  }
  function on(e, t) {
    if (!qc && wu) {
      qc = !0;
      do
        for (var a = !1, l = Mu; l !== null; ) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = l.suspendedLanes, c = l.pingedLanes;
              u = (1 << 31 - et(42 | e) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = !0, Us(l, u));
          } else
            u = ae, u = Nn(
              l,
              l === ve ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || El(l, u) || (a = !0, Us(l, u));
          l = l.next;
        }
      while (a);
      qc = !1;
    }
  }
  function km() {
    Ns();
  }
  function Ns() {
    wu = Gc = !1;
    var e = 0;
    Ua !== 0 && (Xm() && (e = Ua), Ua = 0);
    for (var t = xt(), a = null, l = Mu; l !== null; ) {
      var n = l.next, u = ks(l, t);
      u === 0 ? (l.next = null, a === null ? Mu = n : a.next = n, n === null && (vl = a)) : (a = l, (e !== 0 || (u & 3) !== 0) && (wu = !0)), l = n;
    }
    on(e);
  }
  function ks(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - et(u), c = 1 << i, o = n[i];
      o === -1 ? ((c & a) === 0 || (c & l) !== 0) && (n[i] = ud(c, t)) : o <= t && (e.expiredLanes |= c), u &= ~c;
    }
    if (t = ve, a = ae, a = Nn(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === t && (oe === 2 || oe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Iu(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || El(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Iu(l), ti(a)) {
        case 2:
        case 8:
          a = Af;
          break;
        case 32:
          a = _n;
          break;
        case 268435456:
          a = Ef;
          break;
        default:
          a = _n;
      }
      return l = Hs.bind(null, e), a = Fu(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Iu(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Hs(e, t) {
    if (Ge !== 0 && Ge !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Eu() && e.callbackNode !== a)
      return null;
    var l = ae;
    return l = Nn(
      e,
      e === ve ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (vs(e, l, t), ks(e, xt()), e.callbackNode != null && e.callbackNode === a ? Hs.bind(null, e) : null);
  }
  function Us(e, t) {
    if (Eu()) return null;
    vs(e, t, !0);
  }
  function Hm() {
    Zm(function() {
      (fe & 6) !== 0 ? Fu(
        xf,
        km
      ) : Ns();
    });
  }
  function Yc() {
    return Ua === 0 && (Ua = Mf()), Ua;
  }
  function Cs(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : jn("" + e);
  }
  function js(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function Um(e, t, a, l, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var u = Cs(
        (n[Ve] || null).action
      ), i = l.submitter;
      i && (t = (t = i[Ve] || null) ? Cs(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
      var c = new Yn(
        "action",
        "action",
        null,
        l,
        n
      );
      e.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Ua !== 0) {
                  var o = i ? js(n, i) : new FormData(n);
                  cc(
                    a,
                    {
                      pending: !0,
                      data: o,
                      method: n.method,
                      action: u
                    },
                    null,
                    o
                  );
                }
              } else
                typeof u == "function" && (c.preventDefault(), o = i ? js(n, i) : new FormData(n), cc(
                  a,
                  {
                    pending: !0,
                    data: o,
                    method: n.method,
                    action: u
                  },
                  u,
                  o
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Xc = 0; Xc < wi.length; Xc++) {
    var Qc = wi[Xc], Cm = Qc.toLowerCase(), jm = Qc[0].toUpperCase() + Qc.slice(1);
    pt(
      Cm,
      "on" + jm
    );
  }
  pt(vo, "onAnimationEnd"), pt(go, "onAnimationIteration"), pt(po, "onAnimationStart"), pt("dblclick", "onDoubleClick"), pt("focusin", "onFocus"), pt("focusout", "onBlur"), pt(em, "onTransitionRun"), pt(tm, "onTransitionStart"), pt(am, "onTransitionCancel"), pt(bo, "onTransitionEnd"), qa("onMouseEnter", ["mouseout", "mouseover"]), qa("onMouseLeave", ["mouseout", "mouseover"]), qa("onPointerEnter", ["pointerout", "pointerover"]), qa("onPointerLeave", ["pointerout", "pointerover"]), ba(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ba(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ba("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ba(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ba(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ba(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var rn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Bm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rn)
  );
  function Bs(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], n = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var i = l.length - 1; 0 <= i; i--) {
            var c = l[i], o = c.instance, y = c.currentTarget;
            if (c = c.listener, o !== u && n.isPropagationStopped())
              break e;
            u = c, n.currentTarget = y;
            try {
              u(n);
            } catch (x) {
              du(x);
            }
            n.currentTarget = null, u = o;
          }
        else
          for (i = 0; i < l.length; i++) {
            if (c = l[i], o = c.instance, y = c.currentTarget, c = c.listener, o !== u && n.isPropagationStopped())
              break e;
            u = c, n.currentTarget = y;
            try {
              u(n);
            } catch (x) {
              du(x);
            }
            n.currentTarget = null, u = o;
          }
      }
    }
  }
  function P(e, t) {
    var a = t[ai];
    a === void 0 && (a = t[ai] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Gs(t, e, 2, !1), a.add(l));
  }
  function Zc(e, t, a) {
    var l = 0;
    t && (l |= 4), Gs(
      a,
      e,
      l,
      t
    );
  }
  var Du = "_reactListening" + Math.random().toString(36).slice(2);
  function Lc(e) {
    if (!e[Du]) {
      e[Du] = !0, Rf.forEach(function(a) {
        a !== "selectionchange" && (Bm.has(a) || Zc(a, !1, e), Zc(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Du] || (t[Du] = !0, Zc("selectionchange", !1, t));
    }
  }
  function Gs(e, t, a, l) {
    switch (oh(t)) {
      case 2:
        var n = s0;
        break;
      case 8:
        n = h0;
        break;
      default:
        n = uf;
    }
    a = n.bind(
      null,
      t,
      a,
      e
    ), n = void 0, !di || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), l ? n !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, a, !0) : n !== void 0 ? e.addEventListener(t, a, {
      passive: n
    }) : e.addEventListener(t, a, !1);
  }
  function Vc(e, t, a, l, n) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var i = l.tag;
        if (i === 3 || i === 4) {
          var c = l.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4)
            for (i = l.return; i !== null; ) {
              var o = i.tag;
              if ((o === 3 || o === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = ja(c), i === null) return;
            if (o = i.tag, o === 5 || o === 6 || o === 26 || o === 27) {
              l = u = i;
              continue e;
            }
            c = c.parentNode;
          }
        }
        l = l.return;
      }
    Lf(function() {
      var y = u, x = si(a), M = [];
      e: {
        var p = So.get(e);
        if (p !== void 0) {
          var b = Yn, Q = e;
          switch (e) {
            case "keypress":
              if (Gn(a) === 0) break e;
            case "keydown":
            case "keyup":
              b = Nd;
              break;
            case "focusin":
              Q = "focus", b = gi;
              break;
            case "focusout":
              Q = "blur", b = gi;
              break;
            case "beforeblur":
            case "afterblur":
              b = gi;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = Jf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = Sd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Ud;
              break;
            case vo:
            case go:
            case po:
              b = Ad;
              break;
            case bo:
              b = jd;
              break;
            case "scroll":
            case "scrollend":
              b = pd;
              break;
            case "wheel":
              b = Gd;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = Md;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = Wf;
              break;
            case "toggle":
            case "beforetoggle":
              b = Yd;
          }
          var q = (t & 4) !== 0, he = !q && (e === "scroll" || e === "scrollend"), d = q ? p !== null ? p + "Capture" : null : p;
          q = [];
          for (var h = y, m; h !== null; ) {
            var A = h;
            if (m = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || m === null || d === null || (A = zl(h, d), A != null && q.push(
              sn(h, A, m)
            )), he) break;
            h = h.return;
          }
          0 < q.length && (p = new b(
            p,
            Q,
            null,
            a,
            x
          ), M.push({ event: p, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (p = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", p && a !== ri && (Q = a.relatedTarget || a.fromElement) && (ja(Q) || Q[Ca]))
            break e;
          if ((b || p) && (p = x.window === x ? x : (p = x.ownerDocument) ? p.defaultView || p.parentWindow : window, b ? (Q = a.relatedTarget || a.toElement, b = y, Q = Q ? ja(Q) : null, Q !== null && (he = D(Q), q = Q.tag, Q !== he || q !== 5 && q !== 27 && q !== 6) && (Q = null)) : (b = null, Q = y), b !== Q)) {
            if (q = Jf, A = "onMouseLeave", d = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (q = Wf, A = "onPointerLeave", d = "onPointerEnter", h = "pointer"), he = b == null ? p : Dl(b), m = Q == null ? p : Dl(Q), p = new q(
              A,
              h + "leave",
              b,
              a,
              x
            ), p.target = he, p.relatedTarget = m, A = null, ja(x) === y && (q = new q(
              d,
              h + "enter",
              Q,
              a,
              x
            ), q.target = m, q.relatedTarget = he, A = q), he = A, b && Q)
              t: {
                for (q = b, d = Q, h = 0, m = q; m; m = gl(m))
                  h++;
                for (m = 0, A = d; A; A = gl(A))
                  m++;
                for (; 0 < h - m; )
                  q = gl(q), h--;
                for (; 0 < m - h; )
                  d = gl(d), m--;
                for (; h--; ) {
                  if (q === d || d !== null && q === d.alternate)
                    break t;
                  q = gl(q), d = gl(d);
                }
                q = null;
              }
            else q = null;
            b !== null && qs(
              M,
              p,
              b,
              q,
              !1
            ), Q !== null && he !== null && qs(
              M,
              he,
              Q,
              q,
              !0
            );
          }
        }
        e: {
          if (p = y ? Dl(y) : window, b = p.nodeName && p.nodeName.toLowerCase(), b === "select" || b === "input" && p.type === "file")
            var U = no;
          else if (ao(p))
            if (uo)
              U = Fd;
            else {
              U = $d;
              var W = Jd;
            }
          else
            b = p.nodeName, !b || b.toLowerCase() !== "input" || p.type !== "checkbox" && p.type !== "radio" ? y && oi(y.elementType) && (U = no) : U = Wd;
          if (U && (U = U(e, y))) {
            lo(
              M,
              U,
              a,
              x
            );
            break e;
          }
          W && W(e, p, y), e === "focusout" && y && p.type === "number" && y.memoizedProps.value != null && fi(p, "number", p.value);
        }
        switch (W = y ? Dl(y) : window, e) {
          case "focusin":
            (ao(W) || W.contentEditable === "true") && (Ka = W, Ai = y, Cl = null);
            break;
          case "focusout":
            Cl = Ai = Ka = null;
            break;
          case "mousedown":
            Ei = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ei = !1, mo(M, a, x);
            break;
          case "selectionchange":
            if (Pd) break;
          case "keydown":
          case "keyup":
            mo(M, a, x);
        }
        var j;
        if (bi)
          e: {
            switch (e) {
              case "compositionstart":
                var Y = "onCompositionStart";
                break e;
              case "compositionend":
                Y = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Y = "onCompositionUpdate";
                break e;
            }
            Y = void 0;
          }
        else
          Va ? eo(e, a) && (Y = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Y = "onCompositionStart");
        Y && (Ff && a.locale !== "ko" && (Va || Y !== "onCompositionStart" ? Y === "onCompositionEnd" && Va && (j = Vf()) : ($t = x, mi = "value" in $t ? $t.value : $t.textContent, Va = !0)), W = zu(y, Y), 0 < W.length && (Y = new $f(
          Y,
          e,
          null,
          a,
          x
        ), M.push({ event: Y, listeners: W }), j ? Y.data = j : (j = to(a), j !== null && (Y.data = j)))), (j = Qd ? Zd(e, a) : Ld(e, a)) && (Y = zu(y, "onBeforeInput"), 0 < Y.length && (W = new $f(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          x
        ), M.push({
          event: W,
          listeners: Y
        }), W.data = j)), Um(
          M,
          e,
          y,
          a,
          x
        );
      }
      Bs(M, t);
    });
  }
  function sn(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function zu(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = zl(e, a), n != null && l.unshift(
        sn(e, n, u)
      ), n = zl(e, t), n != null && l.push(
        sn(e, n, u)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function gl(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function qs(e, t, a, l, n) {
    for (var u = t._reactName, i = []; a !== null && a !== l; ) {
      var c = a, o = c.alternate, y = c.stateNode;
      if (c = c.tag, o !== null && o === l) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (o = y, n ? (y = zl(a, u), y != null && i.unshift(
        sn(a, y, o)
      )) : n || (y = zl(a, u), y != null && i.push(
        sn(a, y, o)
      ))), a = a.return;
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Gm = /\r\n?/g, qm = /\u0000|\uFFFD/g;
  function Ys(e) {
    return (typeof e == "string" ? e : "" + e).replace(Gm, `
`).replace(qm, "");
  }
  function Xs(e, t) {
    return t = Ys(t), Ys(e) === t;
  }
  function _u() {
  }
  function se(e, t, a, l, n, u) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Qa(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Qa(e, "" + l);
        break;
      case "className":
        Hn(e, "class", l);
        break;
      case "tabIndex":
        Hn(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Hn(e, a, l);
        break;
      case "style":
        Qf(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          Hn(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = jn("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (a === "formAction" ? (t !== "input" && se(e, t, "name", n.name, n, null), se(
            e,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), se(
            e,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), se(
            e,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (se(e, t, "encType", n.encType, n, null), se(e, t, "method", n.method, n, null), se(e, t, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = jn("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = _u);
        break;
      case "onScroll":
        l != null && P("scroll", e);
        break;
      case "onScrollEnd":
        l != null && P("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(f(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = jn("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        P("beforetoggle", e), P("toggle", e), kn(e, "popover", l);
        break;
      case "xlinkActuate":
        Rt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Rt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Rt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Rt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Rt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Rt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Rt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Rt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Rt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        kn(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = vd.get(a) || a, kn(e, a, l));
    }
  }
  function Kc(e, t, a, l, n, u) {
    switch (a) {
      case "style":
        Qf(e, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(f(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Qa(e, l) : (typeof l == "number" || typeof l == "bigint") && Qa(e, "" + l);
        break;
      case "onScroll":
        l != null && P("scroll", e);
        break;
      case "onScrollEnd":
        l != null && P("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = _u);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Nf.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), u = e[Ve] || null, u = u != null ? u[a] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof l == "function")) {
              typeof u != "function" && u !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, n);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : kn(e, a, l);
          }
    }
  }
  function qe(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        P("error", e), P("load", e);
        var l = !1, n = !1, u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var i = a[u];
            if (i != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, t));
                default:
                  se(e, t, u, i, a, null);
              }
          }
        n && se(e, t, "srcSet", a.srcSet, a, null), l && se(e, t, "src", a.src, a, null);
        return;
      case "input":
        P("invalid", e);
        var c = u = i = n = null, o = null, y = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var x = a[l];
            if (x != null)
              switch (l) {
                case "name":
                  n = x;
                  break;
                case "type":
                  i = x;
                  break;
                case "checked":
                  o = x;
                  break;
                case "defaultChecked":
                  y = x;
                  break;
                case "value":
                  u = x;
                  break;
                case "defaultValue":
                  c = x;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (x != null)
                    throw Error(f(137, t));
                  break;
                default:
                  se(e, t, l, x, a, null);
              }
          }
        Gf(
          e,
          u,
          c,
          o,
          y,
          i,
          n,
          !1
        ), Un(e);
        return;
      case "select":
        P("invalid", e), l = i = u = null;
        for (n in a)
          if (a.hasOwnProperty(n) && (c = a[n], c != null))
            switch (n) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                l = c;
              default:
                se(e, t, n, c, a, null);
            }
        t = u, a = i, e.multiple = !!l, t != null ? Xa(e, !!l, t, !1) : a != null && Xa(e, !!l, a, !0);
        return;
      case "textarea":
        P("invalid", e), u = n = l = null;
        for (i in a)
          if (a.hasOwnProperty(i) && (c = a[i], c != null))
            switch (i) {
              case "value":
                l = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                u = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(f(91));
                break;
              default:
                se(e, t, i, c, a, null);
            }
        Yf(e, l, n, u), Un(e);
        return;
      case "option":
        for (o in a)
          if (a.hasOwnProperty(o) && (l = a[o], l != null))
            switch (o) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                se(e, t, o, l, a, null);
            }
        return;
      case "dialog":
        P("beforetoggle", e), P("toggle", e), P("cancel", e), P("close", e);
        break;
      case "iframe":
      case "object":
        P("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < rn.length; l++)
          P(rn[l], e);
        break;
      case "image":
        P("error", e), P("load", e);
        break;
      case "details":
        P("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        P("error", e), P("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in a)
          if (a.hasOwnProperty(y) && (l = a[y], l != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                se(e, t, y, l, a, null);
            }
        return;
      default:
        if (oi(t)) {
          for (x in a)
            a.hasOwnProperty(x) && (l = a[x], l !== void 0 && Kc(
              e,
              t,
              x,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (l = a[c], l != null && se(e, t, c, l, a, null));
  }
  function Ym(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, i = null, c = null, o = null, y = null, x = null;
        for (b in a) {
          var M = a[b];
          if (a.hasOwnProperty(b) && M != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = M;
              default:
                l.hasOwnProperty(b) || se(e, t, b, null, l, M);
            }
        }
        for (var p in l) {
          var b = l[p];
          if (M = a[p], l.hasOwnProperty(p) && (b != null || M != null))
            switch (p) {
              case "type":
                u = b;
                break;
              case "name":
                n = b;
                break;
              case "checked":
                y = b;
                break;
              case "defaultChecked":
                x = b;
                break;
              case "value":
                i = b;
                break;
              case "defaultValue":
                c = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(f(137, t));
                break;
              default:
                b !== M && se(
                  e,
                  t,
                  p,
                  b,
                  l,
                  M
                );
            }
        }
        ci(
          e,
          i,
          c,
          o,
          y,
          x,
          u,
          n
        );
        return;
      case "select":
        b = i = c = p = null;
        for (u in a)
          if (o = a[u], a.hasOwnProperty(u) && o != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                b = o;
              default:
                l.hasOwnProperty(u) || se(
                  e,
                  t,
                  u,
                  null,
                  l,
                  o
                );
            }
        for (n in l)
          if (u = l[n], o = a[n], l.hasOwnProperty(n) && (u != null || o != null))
            switch (n) {
              case "value":
                p = u;
                break;
              case "defaultValue":
                c = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== o && se(
                  e,
                  t,
                  n,
                  u,
                  l,
                  o
                );
            }
        t = c, a = i, l = b, p != null ? Xa(e, !!a, p, !1) : !!l != !!a && (t != null ? Xa(e, !!a, t, !0) : Xa(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        b = p = null;
        for (c in a)
          if (n = a[c], a.hasOwnProperty(c) && n != null && !l.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                se(e, t, c, null, l, n);
            }
        for (i in l)
          if (n = l[i], u = a[i], l.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                p = n;
                break;
              case "defaultValue":
                b = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && se(e, t, i, n, l, u);
            }
        qf(e, p, b);
        return;
      case "option":
        for (var Q in a)
          if (p = a[Q], a.hasOwnProperty(Q) && p != null && !l.hasOwnProperty(Q))
            switch (Q) {
              case "selected":
                e.selected = !1;
                break;
              default:
                se(
                  e,
                  t,
                  Q,
                  null,
                  l,
                  p
                );
            }
        for (o in l)
          if (p = l[o], b = a[o], l.hasOwnProperty(o) && p !== b && (p != null || b != null))
            switch (o) {
              case "selected":
                e.selected = p && typeof p != "function" && typeof p != "symbol";
                break;
              default:
                se(
                  e,
                  t,
                  o,
                  p,
                  l,
                  b
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var q in a)
          p = a[q], a.hasOwnProperty(q) && p != null && !l.hasOwnProperty(q) && se(e, t, q, null, l, p);
        for (y in l)
          if (p = l[y], b = a[y], l.hasOwnProperty(y) && p !== b && (p != null || b != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null)
                  throw Error(f(137, t));
                break;
              default:
                se(
                  e,
                  t,
                  y,
                  p,
                  l,
                  b
                );
            }
        return;
      default:
        if (oi(t)) {
          for (var he in a)
            p = a[he], a.hasOwnProperty(he) && p !== void 0 && !l.hasOwnProperty(he) && Kc(
              e,
              t,
              he,
              void 0,
              l,
              p
            );
          for (x in l)
            p = l[x], b = a[x], !l.hasOwnProperty(x) || p === b || p === void 0 && b === void 0 || Kc(
              e,
              t,
              x,
              p,
              l,
              b
            );
          return;
        }
    }
    for (var d in a)
      p = a[d], a.hasOwnProperty(d) && p != null && !l.hasOwnProperty(d) && se(e, t, d, null, l, p);
    for (M in l)
      p = l[M], b = a[M], !l.hasOwnProperty(M) || p === b || p == null && b == null || se(e, t, M, p, l, b);
  }
  var Jc = null, $c = null;
  function Ou(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Qs(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zs(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Wc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Fc = null;
  function Xm() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Fc ? !1 : (Fc = e, !0) : (Fc = null, !1);
  }
  var Ls = typeof setTimeout == "function" ? setTimeout : void 0, Qm = typeof clearTimeout == "function" ? clearTimeout : void 0, Vs = typeof Promise == "function" ? Promise : void 0, Zm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vs < "u" ? function(e) {
    return Vs.resolve(null).then(e).catch(Lm);
  } : Ls;
  function Lm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function sa(e) {
    return e === "head";
  }
  function Ks(e, t) {
    var a = t, l = 0, n = 0;
    do {
      var u = a.nextSibling;
      if (e.removeChild(a), u && u.nodeType === 8)
        if (a = u.data, a === "/$") {
          if (0 < l && 8 > l) {
            a = l;
            var i = e.ownerDocument;
            if (a & 1 && hn(i.documentElement), a & 2 && hn(i.body), a & 4)
              for (a = i.head, hn(a), i = a.firstChild; i; ) {
                var c = i.nextSibling, o = i.nodeName;
                i[wl] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i), i = c;
              }
          }
          if (n === 0) {
            e.removeChild(u), Sn(t);
            return;
          }
          n--;
        } else
          a === "$" || a === "$?" || a === "$!" ? n++ : l = a.charCodeAt(0) - 48;
      else l = 0;
      a = u;
    } while (a);
    Sn(t);
  }
  function Ic(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ic(a), li(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function Vm(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var n = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[wl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = St(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Km(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = St(e.nextSibling), e === null)) return null;
    return e;
  }
  function Pc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function Jm(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      t();
    else {
      var l = function() {
        t(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function St(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var ef = null;
  function Js(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return e;
          t--;
        } else a === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function $s(e, t, a) {
    switch (t = Ou(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(f(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(f(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(f(454));
        return e;
      default:
        throw Error(f(451));
    }
  }
  function hn(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    li(e);
  }
  var gt = /* @__PURE__ */ new Map(), Ws = /* @__PURE__ */ new Set();
  function Ru(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Lt = N.d;
  N.d = {
    f: $m,
    r: Wm,
    D: Fm,
    C: Im,
    L: Pm,
    m: e0,
    X: a0,
    S: t0,
    M: l0
  };
  function $m() {
    var e = Lt.f(), t = xu();
    return e || t;
  }
  function Wm(e) {
    var t = Ba(e);
    t !== null && t.tag === 5 && t.type === "form" ? vr(t) : Lt.r(e);
  }
  var pl = typeof document > "u" ? null : document;
  function Fs(e, t, a) {
    var l = pl;
    if (l && typeof t == "string" && t) {
      var n = rt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), Ws.has(n) || (Ws.add(n), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(n) === null && (t = l.createElement("link"), qe(t, "link", e), He(t), l.head.appendChild(t)));
    }
  }
  function Fm(e) {
    Lt.D(e), Fs("dns-prefetch", e, null);
  }
  function Im(e, t) {
    Lt.C(e, t), Fs("preconnect", e, t);
  }
  function Pm(e, t, a) {
    Lt.L(e, t, a);
    var l = pl;
    if (l && e && t) {
      var n = 'link[rel="preload"][as="' + rt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + rt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + rt(
        a.imageSizes
      ) + '"]')) : n += '[href="' + rt(e) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = bl(e);
          break;
        case "script":
          u = Sl(e);
      }
      gt.has(u) || (e = O(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), gt.set(u, e), l.querySelector(n) !== null || t === "style" && l.querySelector(dn(u)) || t === "script" && l.querySelector(mn(u)) || (t = l.createElement("link"), qe(t, "link", e), He(t), l.head.appendChild(t)));
    }
  }
  function e0(e, t) {
    Lt.m(e, t);
    var a = pl;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + rt(l) + '"][href="' + rt(e) + '"]', u = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Sl(e);
      }
      if (!gt.has(u) && (e = O({ rel: "modulepreload", href: e }, t), gt.set(u, e), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(mn(u)))
              return;
        }
        l = a.createElement("link"), qe(l, "link", e), He(l), a.head.appendChild(l);
      }
    }
  }
  function t0(e, t, a) {
    Lt.S(e, t, a);
    var l = pl;
    if (l && e) {
      var n = Ga(l).hoistableStyles, u = bl(e);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = l.querySelector(
          dn(u)
        ))
          c.loading = 5;
        else {
          e = O(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = gt.get(u)) && tf(e, a);
          var o = i = l.createElement("link");
          He(o), qe(o, "link", e), o._p = new Promise(function(y, x) {
            o.onload = y, o.onerror = x;
          }), o.addEventListener("load", function() {
            c.loading |= 1;
          }), o.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Nu(i, t, l);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, n.set(u, i);
      }
    }
  }
  function a0(e, t) {
    Lt.X(e, t);
    var a = pl;
    if (a && e) {
      var l = Ga(a).hoistableScripts, n = Sl(e), u = l.get(n);
      u || (u = a.querySelector(mn(n)), u || (e = O({ src: e, async: !0 }, t), (t = gt.get(n)) && af(e, t), u = a.createElement("script"), He(u), qe(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function l0(e, t) {
    Lt.M(e, t);
    var a = pl;
    if (a && e) {
      var l = Ga(a).hoistableScripts, n = Sl(e), u = l.get(n);
      u || (u = a.querySelector(mn(n)), u || (e = O({ src: e, async: !0, type: "module" }, t), (t = gt.get(n)) && af(e, t), u = a.createElement("script"), He(u), qe(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function Is(e, t, a, l) {
    var n = (n = Z.current) ? Ru(n) : null;
    if (!n) throw Error(f(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = bl(a.href), a = Ga(
          n
        ).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = bl(a.href);
          var u = Ga(
            n
          ).hoistableStyles, i = u.get(e);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, i), (u = n.querySelector(
            dn(e)
          )) && !u._p && (i.instance = u, i.state.loading = 5), gt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, gt.set(e, a), u || n0(
            n,
            e,
            a,
            i.state
          ))), t && l === null)
            throw Error(f(528, ""));
          return i;
        }
        if (t && l !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Sl(a), a = Ga(
          n
        ).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, e));
    }
  }
  function bl(e) {
    return 'href="' + rt(e) + '"';
  }
  function dn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ps(e) {
    return O({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function n0(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), qe(t, "link", a), He(t), e.head.appendChild(t));
  }
  function Sl(e) {
    return '[src="' + rt(e) + '"]';
  }
  function mn(e) {
    return "script[async]" + e;
  }
  function eh(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + rt(a.href) + '"]'
          );
          if (l)
            return t.instance = l, He(l), l;
          var n = O({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), He(l), qe(l, "style", n), Nu(l, a.precedence, e), t.instance = l;
        case "stylesheet":
          n = bl(a.href);
          var u = e.querySelector(
            dn(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, He(u), u;
          l = Ps(a), (n = gt.get(n)) && tf(l, n), u = (e.ownerDocument || e).createElement("link"), He(u);
          var i = u;
          return i._p = new Promise(function(c, o) {
            i.onload = c, i.onerror = o;
          }), qe(u, "link", l), t.state.loading |= 4, Nu(u, a.precedence, e), t.instance = u;
        case "script":
          return u = Sl(a.src), (n = e.querySelector(
            mn(u)
          )) ? (t.instance = n, He(n), n) : (l = a, (n = gt.get(u)) && (l = O({}, a), af(l, n)), e = e.ownerDocument || e, n = e.createElement("script"), He(n), qe(n, "link", l), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Nu(l, a.precedence, e));
    return t.instance;
  }
  function Nu(e, t, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = l.length ? l[l.length - 1] : null, u = n, i = 0; i < l.length; i++) {
      var c = l[i];
      if (c.dataset.precedence === t) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function tf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function af(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ku = null;
  function th(e, t, a) {
    if (ku === null) {
      var l = /* @__PURE__ */ new Map(), n = ku = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else
      n = ku, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) {
      var u = a[n];
      if (!(u[wl] || u[Ye] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(t) || "";
        i = e + i;
        var c = l.get(i);
        c ? c.push(u) : l.set(i, [u]);
      }
    }
    return l;
  }
  function ah(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function u0(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function lh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var yn = null;
  function i0() {
  }
  function c0(e, t, a) {
    if (yn === null) throw Error(f(475));
    var l = yn;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var n = bl(a.href), u = e.querySelector(
          dn(n)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = Hu.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = u, He(u);
          return;
        }
        u = e.ownerDocument || e, a = Ps(a), (n = gt.get(n)) && tf(a, n), u = u.createElement("link"), He(u);
        var i = u;
        i._p = new Promise(function(c, o) {
          i.onload = c, i.onerror = o;
        }), qe(u, "link", a), t.instance = u;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = Hu.bind(l), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function f0() {
    if (yn === null) throw Error(f(475));
    var e = yn;
    return e.stylesheets && e.count === 0 && lf(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && lf(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function Hu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) lf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Uu = null;
  function lf(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Uu = /* @__PURE__ */ new Map(), t.forEach(o0, e), Uu = null, Hu.call(e));
  }
  function o0(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Uu.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Uu.set(e, a);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), l = i);
        }
        l && a.set(null, l);
      }
      n = t.instance, i = n.getAttribute("data-precedence"), u = a.get(i) || l, u === l && a.set(null, n), a.set(i, n), this.count++, l = Hu.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var vn = {
    $$typeof: de,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0
  };
  function r0(e, t, a, l, n, u, i, c) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pu(0), this.hiddenUpdates = Pu(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function nh(e, t, a, l, n, u, i, c, o, y, x, M) {
    return e = new r0(
      e,
      t,
      a,
      i,
      c,
      o,
      y,
      M
    ), t = 1, u === !0 && (t |= 24), u = at(3, null, null, t), e.current = u, u.stateNode = e, t = Bi(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, Xi(u), e;
  }
  function uh(e) {
    return e ? (e = Fa, e) : Fa;
  }
  function ih(e, t, a, l, n, u) {
    n = uh(n), l.context === null ? l.context = n : l.pendingContext = n, l = It(t), l.payload = { element: a }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = Pt(e, l, t), a !== null && (ct(a, e, t), Ll(a, e, t));
  }
  function ch(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function nf(e, t) {
    ch(e, t), (e = e.alternate) && ch(e, t);
  }
  function fh(e) {
    if (e.tag === 13) {
      var t = Wa(e, 67108864);
      t !== null && ct(t, e, 67108864), nf(e, 67108864);
    }
  }
  var Cu = !0;
  function s0(e, t, a, l) {
    var n = T.T;
    T.T = null;
    var u = N.p;
    try {
      N.p = 2, uf(e, t, a, l);
    } finally {
      N.p = u, T.T = n;
    }
  }
  function h0(e, t, a, l) {
    var n = T.T;
    T.T = null;
    var u = N.p;
    try {
      N.p = 8, uf(e, t, a, l);
    } finally {
      N.p = u, T.T = n;
    }
  }
  function uf(e, t, a, l) {
    if (Cu) {
      var n = cf(l);
      if (n === null)
        Vc(
          e,
          t,
          l,
          ju,
          a
        ), rh(e, l);
      else if (m0(
        n,
        e,
        t,
        a,
        l
      ))
        l.stopPropagation();
      else if (rh(e, l), t & 4 && -1 < d0.indexOf(e)) {
        for (; n !== null; ) {
          var u = Ba(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = pa(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var o = 1 << 31 - et(i);
                      c.entanglements[1] |= o, i &= ~o;
                    }
                    Dt(u), (fe & 6) === 0 && (Su = xt() + 500, on(0));
                  }
                }
                break;
              case 13:
                c = Wa(u, 2), c !== null && ct(c, u, 2), xu(), nf(u, 2);
            }
          if (u = cf(l), u === null && Vc(
            e,
            t,
            l,
            ju,
            a
          ), u === n) break;
          n = u;
        }
        n !== null && l.stopPropagation();
      } else
        Vc(
          e,
          t,
          l,
          null,
          a
        );
    }
  }
  function cf(e) {
    return e = si(e), ff(e);
  }
  var ju = null;
  function ff(e) {
    if (ju = null, e = ja(e), e !== null) {
      var t = D(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = k(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ju = e, null;
  }
  function oh(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ih()) {
          case xf:
            return 2;
          case Af:
            return 8;
          case _n:
          case Ph:
            return 32;
          case Ef:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var of = !1, ha = null, da = null, ma = null, gn = /* @__PURE__ */ new Map(), pn = /* @__PURE__ */ new Map(), ya = [], d0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function rh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ha = null;
        break;
      case "dragenter":
      case "dragleave":
        da = null;
        break;
      case "mouseover":
      case "mouseout":
        ma = null;
        break;
      case "pointerover":
      case "pointerout":
        gn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pn.delete(t.pointerId);
    }
  }
  function bn(e, t, a, l, n, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = Ba(t), t !== null && fh(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function m0(e, t, a, l, n) {
    switch (t) {
      case "focusin":
        return ha = bn(
          ha,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "dragenter":
        return da = bn(
          da,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "mouseover":
        return ma = bn(
          ma,
          e,
          t,
          a,
          l,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return gn.set(
          u,
          bn(
            gn.get(u) || null,
            e,
            t,
            a,
            l,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, pn.set(
          u,
          bn(
            pn.get(u) || null,
            e,
            t,
            a,
            l,
            n
          )
        ), !0;
    }
    return !1;
  }
  function sh(e) {
    var t = ja(e.target);
    if (t !== null) {
      var a = D(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = k(a), t !== null) {
            e.blockedOn = t, cd(e.priority, function() {
              if (a.tag === 13) {
                var l = it();
                l = ei(l);
                var n = Wa(a, l);
                n !== null && ct(n, a, l), nf(a, l);
              }
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Bu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = cf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        ri = l, a.target.dispatchEvent(l), ri = null;
      } else
        return t = Ba(a), t !== null && fh(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function hh(e, t, a) {
    Bu(e) && a.delete(t);
  }
  function y0() {
    of = !1, ha !== null && Bu(ha) && (ha = null), da !== null && Bu(da) && (da = null), ma !== null && Bu(ma) && (ma = null), gn.forEach(hh), pn.forEach(hh);
  }
  function Gu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, of || (of = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      y0
    )));
  }
  var qu = null;
  function dh(e) {
    qu !== e && (qu = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        qu === e && (qu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], l = e[t + 1], n = e[t + 2];
          if (typeof l != "function") {
            if (ff(l || a) === null)
              continue;
            break;
          }
          var u = Ba(a);
          u !== null && (e.splice(t, 3), t -= 3, cc(
            u,
            {
              pending: !0,
              data: n,
              method: a.method,
              action: l
            },
            l,
            n
          ));
        }
      }
    ));
  }
  function Sn(e) {
    function t(o) {
      return Gu(o, e);
    }
    ha !== null && Gu(ha, e), da !== null && Gu(da, e), ma !== null && Gu(ma, e), gn.forEach(t), pn.forEach(t);
    for (var a = 0; a < ya.length; a++) {
      var l = ya[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < ya.length && (a = ya[0], a.blockedOn === null); )
      sh(a), a.blockedOn === null && ya.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l], u = a[l + 1], i = n[Ve] || null;
        if (typeof u == "function")
          i || dh(a);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[Ve] || null)
              c = i.formAction;
            else if (ff(n) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? a[l + 1] = c : (a.splice(l, 3), l -= 3), dh(a);
        }
      }
  }
  function rf(e) {
    this._internalRoot = e;
  }
  Yu.prototype.render = rf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(f(409));
    var a = t.current, l = it();
    ih(a, l, e, t, null, null);
  }, Yu.prototype.unmount = rf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ih(e.current, 2, null, e, null, null), xu(), t[Ca] = null;
    }
  };
  function Yu(e) {
    this._internalRoot = e;
  }
  Yu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = _f();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < ya.length && t !== 0 && t < ya[a].priority; a++) ;
      ya.splice(a, 0, e), a === 0 && sh(e);
    }
  };
  var mh = g.version;
  if (mh !== "19.1.0")
    throw Error(
      f(
        527,
        mh,
        "19.1.0"
      )
    );
  N.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
    return e = _(t), e = e !== null ? S(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var v0 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: T,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xu.isDisabled && Xu.supportsFiber)
      try {
        Al = Xu.inject(
          v0
        ), Pe = Xu;
      } catch {
      }
  }
  return xn.createRoot = function(e, t) {
    if (!z(e)) throw Error(f(299));
    var a = !1, l = "", n = Or, u = Rr, i = Nr, c = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = nh(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      n,
      u,
      i,
      c,
      null
    ), e[Ca] = t.current, Lc(e), new rf(t);
  }, xn.hydrateRoot = function(e, t, a) {
    if (!z(e)) throw Error(f(299));
    var l = !1, n = "", u = Or, i = Rr, c = Nr, o = null, y = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (o = a.unstable_transitionCallbacks), a.formState !== void 0 && (y = a.formState)), t = nh(
      e,
      1,
      !0,
      t,
      a ?? null,
      l,
      n,
      u,
      i,
      c,
      o,
      y
    ), t.context = uh(null), a = t.current, l = it(), l = ei(l), n = It(l), n.callback = null, Pt(a, n, l), a = l, t.current.lanes = a, Ml(t, a), Dt(t), e[Ca] = t.current, Lc(e), new Yu(t);
  }, xn.version = "19.1.0", xn;
}
var Eh;
function w0() {
  if (Eh) return hf.exports;
  Eh = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (g) {
        console.error(g);
      }
  }
  return r(), hf.exports = M0(), hf.exports;
}
var D0 = w0(), le = pf();
const z0 = (r) => "prophecy" in r && "allies" in r.prophecy, _0 = (r) => "prophecy" in r && "playerText" in r.prophecy, Gh = (r, g, v, f) => {
  const { card: z, description: D, flipped: k } = r;
  let C = [];
  return (v || k) && ((v || f.positionFront) && C.push(g.text), v && C.push(`${z}: ${D}`), z0(r) && (g.id === "ally" && ((v || f.prophecy) && C.push(r.prophecy.allies[0].playerText), v && C.push(r.prophecy.allies[0].dmText), v && C.push(`Ally: ${r.prophecy.allies[0].ally}`)), g.id === "strahd" && ((v || f.prophecy) && C.push(r.prophecy.strahd.playerText), v && C.push(r.prophecy.strahd.dmText))), _0(r) && ((v || f.prophecy) && C.push(r.prophecy.playerText), v && C.push(r.prophecy.dmText))), C;
}, Qu = (r, g) => {
  const v = [...r];
  for (let f = v.length - 1; f > 0; f--) {
    const z = Math.floor(Math.random() * (f + 1));
    [v[f], v[z]] = [v[z], v[f]];
  }
  return g > v.length ? v : v.slice(0, g);
}, Tl = {
  3: 0,
  1: 1,
  5: 2,
  7: 3,
  4: 4
}, qh = [
  {
    id: "tome",
    deck: "low",
    name: "Tome of Strahd",
    text: "This card tells of history. Knowledge of the ancient will help you better understand your enemy."
  },
  {
    id: "ravenkind",
    deck: "low",
    name: "Holy Symbol of Ravenkind",
    text: "This card tells of a powerful force for good and protection, a holy symbol of great hope."
  },
  {
    id: "sunsword",
    deck: "low",
    name: "Sunsword",
    text: "This is a card of power and strength. It tells of a weapon of vengeance: a sword of sunlight."
  },
  {
    id: "ally",
    deck: "high",
    name: "Strahd’s Enemy",
    text: "This card sheds light on one who will help you greatly in the battle against darkness."
  },
  {
    id: "strahd",
    deck: "high",
    name: "Strahd",
    text: "Your enemy is a creature of darkness, whose powers are beyond mortality. This card will lead you to him!"
  }
], O0 = {
  color: {
    baseURL: "modules/tarokka/assets/img/color/",
    extension: ".webp"
  },
  grayscale: {
    baseURL: "modules/tarokka/assets/img/grayscale/",
    extension: ".webp"
  },
  standard: {
    baseURL: "modules/tarokka/assets/img/standard/",
    extension: ".svg"
  }
}, R0 = {
  abjurer: "4C",
  anarchist: "6H",
  artifact: "1J",
  avenger: "AS",
  back: "1B",
  beast: "JD",
  beggar: "6D",
  berserker: "6S",
  bishop: "8H",
  "broken-one": "KD",
  charlatan: "7H",
  conjurer: "9C",
  darklord: "KS",
  dictator: "8S",
  diviner: "2C",
  donjon: "KC",
  druid: "5H",
  elementalist: "5C",
  enchanter: "3C",
  evoker: "6C",
  executioner: "JS",
  ghost: "KH",
  "guild-member": "5D",
  healer: "3H",
  "hooded-one": "7S",
  horseman: "2J",
  illusionist: "7C",
  innocent: "QH",
  marionette: "JH",
  mercenary: "4S",
  merchant: "4D",
  miser: "9D",
  missionary: "2H",
  mists: "QS",
  monk: "AH",
  myrmidon: "5S",
  necromancer: "8C",
  paladin: "2S",
  philanthropist: "2D",
  priest: "10H",
  raven: "QC",
  rogue: "10D",
  seer: "JC",
  shepherd: "4H",
  soldier: "3S",
  swashbuckler: "AD",
  "tax-collector": "8D",
  tempter: "QD",
  thief: "7D",
  torturer: "9S",
  trader: "3D",
  traitor: "9H",
  transmuter: "AC",
  warrior: "10S",
  wizard: "10C"
}, An = (r, g) => {
  const v = O0[g.cardStyle], f = g.cardStyle === "standard" ? R0[r.id] : r.id;
  return `${v.baseURL}${f}${r.extension || v.extension}`;
}, N0 = (r) => r.reduce(
  ({ pX: g, pY: v, rX: f, rY: z, count: D }, { percentX: k, percentY: C, rotateX: _, rotateY: S }) => ({
    pX: g + k,
    pY: v + C,
    rX: f + _,
    rY: z + S,
    count: D + 1
  }),
  { pX: 0, pY: 0, rX: 0, rY: 0, count: 0 }
);
function k0(r, g, { tilt: v, remoteTilt: f }) {
  return v ? f ? Array.from({ length: 5 }, (z, D) => g[D] ? [g[D]] : []).map((z, D) => [...r[D], ...z]).map((z) => z.filter(bf)).map(N0).map(({ pX: z, pY: D, rX: k, rY: C, count: _ }) => ({
    percentX: _ ? z / _ : -1,
    percentY: _ ? D / _ : -1,
    rotateX: _ ? k / _ : 0,
    rotateY: _ ? C / _ : 0
  })) : g : [];
}
function Mh(r, g) {
  let v = 0;
  return (...f) => {
    const z = Date.now();
    z - v >= g && (v = z, r(...f));
  };
}
const bf = (r) => {
  if (!r) return !1;
  const { percentX: g, percentY: v, rotateX: f, rotateY: z } = r;
  return g >= 0 && v >= 0 && !!f && !!z;
}, En = [
  {
    id: "back",
    name: "Card Back",
    card: "Back of card",
    deck: "back",
    suit: null,
    aria: "Back of card",
    description: "Back of card",
    back: !0,
    extension: ".png"
  },
  {
    id: "swashbuckler",
    name: "Swashbuckler",
    card: "One of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 01 Swashbuckler",
    description: "Those who like money yet give it up freely; likable rogues and rapscallions",
    back: !1,
    value: 1,
    prophecy: {
      dmText: "The treasure lies in the crypt of Endorovich (chapter4, area K84, crypt 7).",
      location: "Castle Ravenloft",
      playerText: "I see the skeleton of a deadly warrior, lying on a bed of stone flanked by gargoyles."
    }
  },
  {
    id: "philanthropist",
    name: "Philanthropist",
    card: "Two of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 02 Philanthropist",
    description: "Charity and giving on a grand scale; those who use wealth to fight evil and sickness",
    back: !1,
    value: 2,
    prophecy: {
      dmText: "The treasure is in the nursery of the Abbey of Saint Markovia (chapter8, area S23).",
      location: "Village of Kresk",
      playerText: "Look to a place where sickness and madness are bred. Where children once cried, the treasure lies still."
    }
  },
  {
    id: "trader",
    name: "Trader",
    card: "Three of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 03 Trader",
    description: "Commerce; smuggling and black markets; fair and equitable trades",
    back: !1,
    value: 3,
    prophecy: {
      dmText: "The treasure lies in the glassblower’s workshop in the Wizard of Wines (chapter 12, area W10).",
      location: "The Wizard of Wines",
      playerText: "Look to the wizard of wines! In wood and sand the treasure hides."
    }
  },
  {
    id: "merchant",
    name: "Merchant",
    card: "Four of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 04 Merchant",
    description: "A rare commodity or business opportunity; deceitful or dangerous business transactions",
    back: !1,
    value: 4,
    prophecy: {
      dmText: "The treasure lies in Castle Ravenloft’s wine cellar (chapter 4, area K63).",
      location: "Castle Ravenloft",
      playerText: "Seek a cask that once contained the finest wine, of which not a drop remains."
    }
  },
  {
    id: "guild-member",
    name: "Guild Member",
    card: "Five of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 05 Guild Member",
    description: "Like-minded individuals joined together in a common goal; pride in one's work",
    back: !1,
    value: 5,
    prophecy: {
      dmText: "The treasure lies in the crypt of Artank Swilovich (chapter 4, area K84, crypt 5).",
      location: "Castle Ravenloft",
      playerText: "I see a room full of bottles. It is the tomb of a guild member."
    }
  },
  {
    id: "beggar",
    name: "Beggar",
    card: "Six of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 06 Beggar",
    description: "Sudden change in economic status or fortune",
    back: !1,
    value: 6,
    prophecy: {
      dmText: "The treasure is hidden in Kasimir’s hovel (chapter 5, area N9a).",
      location: "Town of Vallaki",
      playerText: "A wounded elf has what you seek. He will part with the treasure to see his dark dreams fulfilled."
    }
  },
  {
    id: "thief",
    name: "Thief",
    card: "Seven of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 07 Thief",
    description: "Those who steal or burgle; a loss of property, beauty, innocence, friendship, or reputation",
    back: !1,
    value: 7,
    prophecy: {
      dmText: "The treasure is buried in the graveyard at the River Ivlis crossroads (chapter 2, area F).",
      location: "River Ivlis Crossroads",
      playerText: "What you seek lies at the crossroads of life and death, among the buried dead."
    }
  },
  {
    id: "tax-collector",
    name: "Tax Collector",
    card: "Eight of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 08 Tax Collector",
    description: "Corruption; honesty in an otherwise corrupt government or organization",
    back: !1,
    value: 8,
    prophecy: {
      dmText: 'The treasure is hidden in the Vistani treasure wagon (chapter 5, area N9i). "A missing child" refers to Arabelle (see chapter 2, area L).',
      location: "Town of Vallaki",
      playerText: "The Vistani have what you seek. A missing child holds the key to the treasure’s release."
    }
  },
  {
    id: "miser",
    name: "Miser",
    card: "Nine of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 09 Miser",
    description: "Hoarded wealth; those who are irreversibly unhappy or who think money is meaningless",
    back: !1,
    value: 9,
    prophecy: {
      dmText: "The treasure lies in Castle Ravenloft’s treasury (chapter 4, area K41).",
      location: "Castle Ravenloft",
      playerText: "Look for a fortress inside a fortress, in a place hidden behind fire."
    }
  },
  {
    id: "rogue",
    name: "Rogue",
    card: "Master of Coins",
    deck: "common",
    suit: "Coins",
    aria: "Coins 10 Rogue",
    description: "Anyone for whom money is important; those who believe money is the key to their success",
    back: !1,
    value: 10,
    prophecy: {
      dmText: "The treasure is hidden in the attic of the Blue Water Inn (chapter 5, area N2q).",
      location: "Town of Vallaki",
      playerText: "I see a nest of ravens. There you will find the prize."
    }
  },
  {
    id: "monk",
    name: "Monk",
    card: "One of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 01 Monk",
    description: "Serenity; inner strength and self-reliance; supreme confidence bereft of arrogance",
    back: !1,
    value: 1,
    prophecy: {
      dmText: "The treasure lies in the main hall of the Abbey of Saint Markovia (chapter 8, area S13).",
      location: "Village of Kresk",
      playerText: "The treasure you seek is hidden behind the sun, in the house of a saint."
    }
  },
  {
    id: "missionary",
    name: "Missionary",
    card: "Two of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 02 Missionary",
    description: "Those who spread wisdom and faith to others; warnings of the spread of fear and ignorance",
    back: !1,
    value: 2,
    prophecy: {
      dmText: "The treasure is hidden inside on the scarecrows in the garden of the Abbey of Saint Markovia (chapter 8, area S9).",
      location: "Village of Kresk",
      playerText: "I see a garden dusted with snow, watched over by a scarecrow with a sackcloth grin. Look not to the garden but to the guardian."
    }
  },
  {
    id: "healer",
    name: "Healer",
    card: "Three of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 03 Healer",
    description: "Healing; a contagious illness, disease, or curse; those who practice the healing arts",
    back: !1,
    value: 3,
    prophecy: {
      dmText: "The treasure lies beneath the gazebo in the Shrine of the White Sun (chapter 8, area S4).",
      location: "Village of Kresk",
      playerText: "Look to the west. Find a pool blessed by the light of the white sun."
    }
  },
  {
    id: "shepherd",
    name: "Shepherd",
    card: "Four of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 04 Shepherd",
    description: "Those who protect others; one who bears a burden far too great to be shouldered alone",
    back: !1,
    value: 4,
    prophecy: {
      dmText: "The treasure lies in the tomb of King Barov and Queen Ravenovia (chapter 4, area K88).",
      location: "Castle Ravenloft",
      playerText: "Find the mother - she who gave birth to evil."
    }
  },
  {
    id: "druid",
    name: "Druid",
    card: "Five of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 05 Druid",
    description: "The ambivalence and cruelty of nature and those who feel drawn to it; inner turmoil",
    back: !1,
    value: 5,
    prophecy: {
      dmText: "The treasure lies at the base of the Gulthias tree (chapter 14, area Y4). Any wereraven encountered in the wilderness can lead the characters to the location.",
      location: "Yester Hill",
      playerText: "An evil tree grows atop a hill of graves where the ancient dead sleep. The ravens can help you find it. Look for the treasure there."
    }
  },
  {
    id: "anarchist",
    name: "Anarchist",
    card: "Six of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 06 Anarchist",
    description: "A fundamental change brought on by one whose beliefs are being put to the test",
    back: !1,
    value: 6,
    prophecy: {
      dmText: "The treasure lies in Castle Ravenloft’s hall of bones (chapter 4, area K67).",
      location: "Castle Ravenloft",
      playerText: "I see walls of bones, the chandelier of bones, and table of bones - all that remains of enemies long forgotten."
    }
  },
  {
    id: "charlatan",
    name: "Charlatan",
    card: "Seven of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 07 Charlatan",
    description: "Liars; those who profess to believe one thing but actually believe another",
    back: !1,
    value: 7,
    prophecy: {
      dmText: "The treasure lies in the attic of Old Bonegrinder (chapter 6, areas O4).",
      location: "Old Bonegrinder",
      playerText: "I see a lonely mill on a precipice. The treasure lies within."
    }
  },
  {
    id: "bishop",
    name: "Bishop",
    card: "Eight of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 08 Bishop",
    description: "Strict adherence to a code or a belief; those who plot, plan, and scheme",
    back: !1,
    value: 8,
    prophecy: {
      dmText: "The treasure lies in the sealed treasury of the Amber Temple (chapter 13, area X40).",
      location: "Amber Temple",
      playerText: "What you seek lies in a pile of treasure beyond a set of amber doors."
    }
  },
  {
    id: "traitor",
    name: "Traitor",
    card: "Nine of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 09 Traitor",
    description: "Betrayal by someone close and trusted; a weakening or loss of faith",
    back: !1,
    value: 9,
    prophecy: {
      dmText: "The treasure is hidden in the master bedroom of the Wachterhaus (chapter 5, area N4o).",
      location: "Town of Vallaki",
      playerText: "Look for a wealthy woman. A staunch ally of the devil, she keeps the treasure under lock and key, with the bones of an ancient enemy."
    }
  },
  {
    id: "priest",
    name: "Priest",
    card: "Master of Glyphs",
    deck: "common",
    suit: "Glyphs",
    aria: "Glyphs 10 Priest",
    description: "Enlightenment; those who follow a deity, a system of values, or a higher purpose",
    back: !1,
    value: 10,
    prophecy: {
      dmText: "The treasure lies in Castle Ravenloft’s chapel (chapter 4, area K15).",
      location: "Castle Ravenloft",
      playerText: "You will find what you seek in the castle, amid the ruins of a place of supplication"
    }
  },
  {
    id: "transmuter",
    name: "Transmuter",
    card: "One of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 01 Transmuter",
    description: "A new discovery; the coming of unexpected things; unforeseen consequences and chaos",
    back: !1,
    value: 1,
    prophecy: {
      dmText: "The treasure lies in Castle Ravenloft’s north tower peak (chapter 4, area K60).",
      location: "Castle Ravenloft",
      playerText: "Go to a place of dizzying heights, where the stone itself is alive!"
    }
  },
  {
    id: "diviner",
    name: "Diviner",
    card: "Two of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 02 Diviner",
    description: "The pursuit of knowledge tempered by wisdom; truth and honesty; sages and prophecy",
    back: !1,
    value: 2,
    prophecy: {
      dmText: 'The treasure lies in Madam Eva’s encampment (chapter 2, area G). If she is the one performing the card reading, she says, "I think the treasure is under my very nose!"',
      location: "Tser Pool Encampment",
      playerText: "Look to the one who sees all. The treasure is hidden in her camp."
    }
  },
  {
    id: "enchanter",
    name: "Enchanter",
    card: "Three of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 03 Enchanter",
    description: "Inner turmoil that comes from confusion, fear of failure, or false information",
    back: !1,
    value: 3,
    prophecy: {
      dmText: 'The treasure lies under Marina’s monument in Berez (chapter 10, area U5). "The master of the marsh" refers to Burgomaster Lazlo Ulrich (area U2), whose ghost can point the characters toward the monument.',
      location: "Ruins of Berez",
      playerText: "I see a kneeling woman - a rose of great beauty plucked too soon. The master of the marsh knows of whom I speak."
    }
  },
  {
    id: "abjurer",
    name: "Abjurer",
    card: "Four of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 04 Abjurer",
    description: "Those guided by logic and reasoning; warns of an overlooked clue or piece of information",
    back: !1,
    value: 4,
    prophecy: {
      dmText: 'The treasure lies in the beacon of Argynvostholt (chapter 7, area Q53). "Great stone dragon" refers to the statue in area Q1.',
      location: "Argynvostholt",
      playerText: "I see a fallen house guarded by a great stone dragon. Look to the highest peak."
    }
  },
  {
    id: "elementalist",
    name: "Elementalist",
    card: "Five of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 05 Elementalist",
    description: "The triumph of nature over civilization; natural disasters and bountiful harvests",
    back: !1,
    value: 5,
    prophecy: {
      dmText: "The treasure is inside a model of Castle Ravenloft in the Amber Temple (chapter 13, area X20).",
      location: "Amber Temple",
      playerText: "The treasure is hidden in a small castle beneath a mountain, guarded by amber giants."
    }
  },
  {
    id: "evoker",
    name: "Evoker",
    card: "Six of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 06 Evoker",
    description: "Magical or supernatural power that can't be controlled; magic for destructive ends",
    back: !1,
    value: 6,
    prophecy: {
      dmText: "The treasure is hidden in the crypt of Gralmore Nimblenobs (chapter 4, area K84, crypt 37).",
      location: "Castle Ravenloft",
      playerText: "Search for the crypt of the wizard ordinaire. His staff is the key."
    }
  },
  {
    id: "illusionist",
    name: "Illusionist",
    card: "Seven of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 07 Illusionist",
    description: "Lies and deceit; grand conspiracies; secret societies; the presence of a dupe or a saboteur",
    back: !1,
    value: 7,
    prophecy: {
      dmText: "The treasure lies in Rictavio’s carnival wagon (chapter 5, area N5).",
      location: "Town of Vallaki",
      playerText: "A man is not what he seems. He comes here in a carnival wagon. Therein lies what you seek."
    }
  },
  {
    id: "necromancer",
    name: "Necromancer",
    card: "Eight of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 08 Necromancer",
    description: "Unnatural events and unhealthy obsessions; those who follow a destructive path",
    back: !1,
    value: 8,
    prophecy: {
      dmText: "The treasure lies in Castle Ravenloft’s study (chapter 4, area K37).",
      location: "Castle Ravenloft",
      playerText: "A woman hangs above a roaring fire. Find her and you will find the treasure."
    }
  },
  {
    id: "conjurer",
    name: "Conjurer",
    card: "Nine of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 09 Conjurer",
    description: "The coming of an unexpected supernatural threat; those who think of themselves as gods",
    back: !1,
    value: 9,
    prophecy: {
      dmText: "The treasure is in Baba Lysaga’s hut (chapter 10, area U3).",
      location: "Ruins of Berez",
      playerText: "I see a dead village, drowned by a river, ruled by one who has brought great evil into the world."
    }
  },
  {
    id: "wizard",
    name: "Wizard",
    card: "Master of Stars",
    deck: "common",
    suit: "Stars",
    aria: "Stars 10 Wizard",
    description: "Mystery and riddles; the unknown; those who crave magical power and great knowledge",
    back: !1,
    value: 10,
    prophecy: {
      dmText: "The treasure lies on the top floor of Van Richten’s Tower (chapter 11, area V7).",
      location: "Town of Vallaki",
      playerText: "Look for a wizard’s tower on a lake. Let the wizard’s name and servant guide you to that which you seek."
    }
  },
  {
    id: "avenger",
    name: "Avenger",
    card: "One of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 01 Avenger",
    description: "Justice and revenge for great wrongs; those on a quest to rid the world of great evil",
    back: !1,
    value: 1,
    prophecy: {
      dmText: "The treasure is in the possession of Vladimir Horngaard in Argynvostholt (chapter 7, area Q36).",
      location: "Argynvostholt",
      playerText: "The treasure lies in a dragon’s house, in hands once clean and now corrupted."
    }
  },
  {
    id: "paladin",
    name: "Paladin",
    card: "Two of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 02 Paladin",
    description: "Just and noble warriors; those who live by a code of honor and integrity",
    back: !1,
    value: 2,
    prophecy: {
      dmText: "The treasure lies in Sergei’s tomb (chapter 4, area K85).",
      location: "Castle Ravenloft",
      playerText: "I see a sleeping prince, a servant of the light and the brother of darkness. The treasure lies with him."
    }
  },
  {
    id: "soldier",
    name: "Soldier",
    card: "Three of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 03 Soldier",
    description: "War and sacrifice; the stamina to endure great hardship",
    back: !1,
    value: 3,
    prophecy: {
      dmText: "The treasure lies on the rooftop of the Tsolenka Pass guard tower (chapter 9, area T6).",
      location: "Tsolenka Pass",
      playerText: "Go to the mountains. Climb the white tower guarded by golden knights."
    }
  },
  {
    id: "mercenary",
    name: "Mercenary",
    card: "Four of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 04 Mercenary",
    description: "Inner strength and fortitude; those who fight for power or wealth",
    back: !1,
    value: 4,
    prophecy: {
      dmText: "The treasure lies in a crypt in Castle Ravenloft (chapter 4, area K84, crypt 31).",
      location: "Castle Ravenloft",
      playerText: "The thing you seek lies with the dead, under mountains of gold coins."
    }
  },
  {
    id: "myrmidon",
    name: "Myrmidon",
    card: "Five of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 05 Myrmidon",
    description: "Great heroes; a sudden reversal of fate; the triumph of the underdog over a mighty enemy",
    back: !1,
    value: 5,
    prophecy: {
      dmText: "The treasure lies in the shrine of the Mother Night in the werewolf den (chapter 15, area Z7).",
      location: "Werewolf Den",
      playerText: "Look for a den of wolves in the hills overlooking a mountain lake. The treasure belongs to Mother Night."
    }
  },
  {
    id: "berserker",
    name: "Berserker",
    card: "Six of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 06 Berserker",
    description: "The brutal and barbaric side of warfare; bloodlust; those with a bestial nature",
    back: !1,
    value: 6,
    prophecy: {
      dmText: 'The treasure lies in the crypt of General Kroval "Mad Dog" Grislek (chapter 4, area K84, crypt 38).',
      location: "Castle Ravenloft",
      playerText: "Find the Mad Dog’s crypt. The treasure lies within, beneath the blackened bones."
    }
  },
  {
    id: "hooded-one",
    name: "Hooded One",
    card: "Seven of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 07 Hooded One",
    description: "Bigotry, intolerance, and xenophobia; a mysterious presence or newcomer",
    back: !1,
    value: 7,
    prophecy: {
      dmText: "The treasure inside the head of a giant statue in the Amber Temple (chapter 13, area X5a).",
      location: "Amber Temple",
      playerText: "I see a faceless god. He awaits you at the end of a long and winding road, deep in the mountains."
    }
  },
  {
    id: "dictator",
    name: "Dictator",
    card: "Eight of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 08 Dictator",
    description: "All that is wrong with government and leadership; those who rule through fear and violence",
    back: !1,
    value: 8,
    prophecy: {
      dmText: "The treasure lies in Castle Ravenloft’s audience hall (chapter 4, area K25).",
      location: "Castle Ravenloft",
      playerText: "I see a throne fit for a king."
    }
  },
  {
    id: "torturer",
    name: "Torturer",
    card: "Nine of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 09 Torturer",
    description: "The coming of suffering or merciless cruelty; one who is irredeemably evil or sadistic",
    back: !1,
    value: 9,
    prophecy: {
      dmText: "The treasure is in the attic of the burgomaster’s mansion in Vallaki (chapter 5, area N3s).",
      location: "Town of Vallaki",
      playerText: "There is a town where all is not well. There you will find a house of corruption, and within, a dark room full of still ghosts."
    }
  },
  {
    id: "warrior",
    name: "Warrior",
    card: "Master of Swords",
    deck: "common",
    suit: "Swords",
    aria: "Swords 10 Warrior",
    description: "Strength and force personified; violence; those who use force to accomplish their goals",
    back: !1,
    value: 10,
    prophecy: {
      dmText: "The treasure lies in Strahd’s tomb (chapter 4, area K86).",
      location: "Castle Ravenloft",
      playerText: 'That which you seek lies in the womb of darkness, the devil’s "lair": the one place to which he must return.'
    }
  },
  {
    id: "artifact",
    name: "Artifact",
    card: "The Artifact",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Artifact",
    description: "The importance of some physical object that must be obtained, protected, or destroyed at all costs",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Rictavio",
          playerText: "Look for an entertaining man with a monkey. This man is more than he seems.",
          dmText: `This card refers to Rictavio (appendix D), who can be found at the Blue Water Inn, in Vallaki (chapter 5, area N2). Normally reluctant to accompany the characters, Rictavio changes his tune if the characters tell him about the card reading. He sheds his disguise and introduces himself as Dr. Rudolf van Richten.

The characters might think that Gadof Blinsky, the toymaker of Vallaki (area N7), is the figure they seek, because he has a pet monkey. If the speak to him about the possibility, Blinsky jokes that he and the monkey are "old friends," but if the characters ask him to come with them to fight Strahd, he politely declines. If the characters tell him about the tarokka reading, Blinsky admits that he acquired the monkey from a half-elf carnival ringmaster named Rictavio.`
        }
      ],
      strahd: {
        playerText: "He lurks in the darkness where the morning light once shone - a sacred place.",
        dmText: "Strahd faces the characters in the chapel (area K15)."
      }
    }
  },
  {
    id: "beast",
    name: "Beast",
    card: "The Beast",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Beast",
    description: "Great rage or passion; something bestial or malevolent hiding in plain sight or lurking just below the surface",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Zuleika Toranescu",
          playerText: "A werewolf holds a secret hatred for your enemy. Use her hatred to your advantage.",
          dmText: "This card refers to the werewolf Zuleika Toranescu (chapter 15, area Z7). She will accompany the characters if they promise to avenge her mate, Emil, by killing the leader of her pack, Kiril Stoyanovich."
        }
      ],
      strahd: {
        playerText: "The beast sits on his dark throne.",
        dmText: "Strahd faces the characters in the audience hall (area K25)."
      }
    }
  },
  {
    id: "broken-one",
    name: "Broken One",
    card: "The Broken One",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Broken One",
    description: "Defeat, failure, and despair; the loss of something or someone important, without which one feels incomplete",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Mad Mage",
          playerText: "Your greatest ally will be a wizard. His mind is broken, but his spells are strong.",
          dmText: "This card refers to the Mad Mage of Mount Baratok (chapter 2, area M)."
        },
        {
          ally: "Donavich",
          playerText: "I see a man of faith whose sanity hangs by a thread. He has lost someone close to him.",
          dmText: "This card refers to Donavich, the priest in the village of Barovia (chapter 3, area E5). He will not accompany the characters until his son Doru, is dead and buried."
        }
      ],
      strahd: {
        playerText: "He haunts the tomb of the man he envied above all.",
        dmText: "Strahd faces the characters in Sergei’s tomb (area K86)."
      }
    }
  },
  {
    id: "darklord",
    name: "Darklord",
    card: "The Darklord",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Darklord",
    description: "A single, powerful individual of an evil nature, one whose goals have enormous and far-reaching consequences",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "No one",
          playerText: 'Ah, the worst of all "truths": You must face the evil of this land alone!',
          dmText: "There is no NPC who can inspire the characters."
        }
      ],
      strahd: {
        playerText: "He lurks in the depths of darkness, in the one place to which he must return.",
        dmText: "Strahd faces the characters in his tomb (area K86)."
      }
    }
  },
  {
    id: "donjon",
    name: "Donjon",
    card: "The Donjon",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Donjon",
    description: "Isolation and imprisonment; being so conservative in thinking as to be a prisoner of one's own beliefs",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Victor Vallakovich",
          playerText: "Search for a troubled young man surrounded by wealth and madness. His home is his prison",
          dmText: "This card refers to Victor Vallakovich (chapter 5, area N3t). Realizing that the characters are the key to his salvation, he enthusiastically leaves home and accompanies them to Castle Ravenloft."
        },
        {
          ally: "Stella Wachter",
          playerText: "Find a girl driven to insanity, locked in the heart of her dead father’s house. Curing her madness is key to your success.",
          dmText: "This card refers to Stella Wachter (chapter 5, area N4n). She grants the party no benefit unless her madness is cured. With her wits restored, Stella is happy to join the party and leave her rotten family behind."
        }
      ],
      strahd: {
        playerText: "He lurks in a hall of bones, in the dark pits of his castle.",
        dmText: "Strahd faces the characters in the hall of bones (area K67)."
      }
    }
  },
  {
    id: "executioner",
    name: "Executioner",
    card: "The Executioner",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Executioner",
    description: "The imminent death of one rightly or wrongly convicted of a crime; false accusations and unjust prosecution",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Ismark Kolyanovich",
          playerText: 'Seek out the brother of the devil’s bride. They call him "the lesser," but he has a powerful soul',
          dmText: "This card refers to Ismark Kolyanovich (chapter 3, area E2). Ismark won’t accompany the characters to Castle Ravenloft until he knows that his sister, Ireena Kolyana, is safe"
        }
      ],
      strahd: {
        playerText: "I see a dark figure on a balcony, looking down upon this tortured land with a twisted smile.",
        dmText: "Strahd faces the characters at the overlook (area K6)."
      }
    }
  },
  {
    id: "ghost",
    name: "Ghost",
    card: "The Ghost",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Ghost",
    description: "The looming past; the return of an old enemy or the discovery of a secret buried long ago",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Sir Godfrey Gwilym",
          playerText: "I see a fallen paladin of the fallen order of knights. He lingers like a ghost in a dead dragon’s lair.",
          dmText: "This card refers to the revenant Sir Godfrey Gwilym (chapter 7, area Q37). Although initially unwilling to accompany the characters, he will do so if the characters convince him that the honor of the Order of the Silver Dragon can be restored with his help. Doing this requires a successful DC 15 Charisma (Persuasion) check."
        },
        {
          ally: "Sir Klutz",
          playerText: "Stir the spirit of the clumsy knight whose crypt lies deep within the castle.",
          dmText: "This card refers to Sir Klutz the phantom warrior (chapter 4, area K84, crypt 33). If Sir Klutz is Strahd’s enemy, then the phantom warrior disappears not after seven days, but only after he or Strahd is reduced to 0 hit points."
        }
      ],
      strahd: {
        playerText: "Look to the father’s tomb.",
        dmText: "Strahd faces the characters in the tomb of King Barov and Queen Ravenovia (area K88)."
      }
    }
  },
  {
    id: "horseman",
    name: "Horseman",
    card: "The Horseman",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Horseman",
    description: "Death; disaster in the form of the loss of wealth or property, a horrible defeat, or the end of a bloodline",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Nikolai Wachter",
          playerText: "I see a dead man of noble birth, guarded by his widow. Return to life the dead man’s corpse, and he will be your staunch ally.",
          dmText: `This card refers to Nikolai Wachter the elder, who is dead (chapter 5, area N4o). If the characters cast a raise dead spell or a resurrection spell on his preserved corpse, Nikokai (LN male human noble) agrees to help the characters once he feels well enough, despite his wife’s protests. Although his family has long supported Strahd, Nikolai came to realize toward the end of his life that Strahd must be destroyed to save Barovia.

If the characters don’t have the means to raise Nikolai from the dead, Rictavio (appendix D) gives them a spell scroll of raise dead if he learns of their need. If they’re staying at the Blue Water Inn, he leaves the scroll in one of their rooms.`
        },
        {
          ally: "Arrigal",
          playerText: "A man of death named Arrigal will forsake his dark lord to serve your cause. Beware! He has a rotten soul.",
          dmText: "This card refers to the Vistani assassin Arrigal (chapter 5, area N9c). If the characters mention this card reading to him he accepts his fate and accompanies them. If the characters succeed in defeating Strahd, Arrigal betrays and attacks them, believing that he is destined to become Barovia’s new lord."
        }
      ],
      strahd: {
        playerText: "He lurks in the one place to which he must return - a place of death.",
        dmText: "Strahd faces the characters in his tomb (area K86)."
      }
    }
  },
  {
    id: "innocent",
    name: "Innocent",
    card: "The Innocent",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Innocent",
    description: "A being of great importance whose life is in danger (who might be helpless or simply unaware of the peril)",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Parriwimple",
          playerText: "I see a young man with a kind heart. A mother’s boy! He is strong in body but weak of mind. Seek him out in the village of Barovia.",
          dmText: "This card refers to Parriwimple (see chapter 3, area E1). Although he’s a simpleton, he won’t travel to Castle Ravenloft without good cause. Characters can manipulate him into going by preying on his good heart. For instance, he might go there to help rescue missing Barovians, or to save the life of Ireena Kolyana, who is very beautiful. The characters must somehow deal with Bildrath, Parriwimple’s employer, who won’t let the foolish boy go to the castle for any reason."
        },
        {
          ally: "Ireena Kolyana",
          playerText: "Evil’s bride is the one you seek!",
          dmText: "This card refers to Ireena Kolyana (chapter 3, area E4). Her brother Ismark, opposes the idea of Ireena’s being taken to Castle Ravenloft, but he insists on going there once the characters tell her about the card reading. Ireena won’t accompany the characters however, until Kolyan Indirovich’s body is laid to rest in the cemetery."
        }
      ],
      strahd: {
        playerText: "He dwells with the one whose blood sealed his doom, a brother of light snuffed out too soon.",
        dmText: "Strahd faces the characters in Sergei’s tomb (area K85)."
      }
    }
  },
  {
    id: "marionette",
    name: "Marionette",
    card: "The Marionette",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Marionette",
    description: "The presence of a spy or a minion of some greater power; an encounter with a puppet or an underling",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Pidlwick II",
          playerText: "What horror is this? I see a man made by a man. Ageless and alone, it haunts the towers of the castle.",
          dmText: "This card refers to Pidlwick II (chapter 4, area K59 & appendix D)"
        },
        {
          ally: "Cloven Belview",
          playerText: "Look for a man of music, a man with two heads. He lives in a place of great hunger and sorrow.",
          dmText: "This card refers to Cloven Belview (chapter 8, area S17), the two-headed mongrelfolk. Clovin serves the Abbot out of fear and perverse sense of loyalty. His job is to deliver food to the other mongrelfolk, whom he abhors. If abbot still lives, Clovin doesn’t want to earn the master’s ire by attempting to leave, and he refuses to accompany the characters. But if the Abbot dies, Clovin doesn’t have any reason to remain in the abbey, so he’s willing to come along if he is bribed with wine. Clovin provides no benefit to the party without his Viol."
        }
      ],
      strahd: {
        playerText: "Look to great heights. Find the beating heart of the castle. He waits nearby.",
        dmText: "Strahd faces the characters in the north tower peak (area K60)."
      }
    }
  },
  {
    id: "mists",
    name: "Mists",
    card: "The Mists",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Mists",
    description: "Something unexpected or mysterious that can't be avoided; a great quest or journey that will try one's spirit",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Ezmerelda d’Avenir",
          playerText: "A vistana wanders this land alone, searching for her mentor. She does not stay in one place for long. Seek her out at Saint Markovia’s abbey, near the mists.",
          dmText: "This card refers to Ezmerelda d’Avenir (appendix D). She can be found in the Abbey of Saint Markovia (see chapter 8, area S19) as well as several other locations throughout Barovia."
        }
      ],
      strahd: {
        playerText: "The cards can’t see where the evil lurks. The mists obscure all.",
        dmText: "This card offers no clue about where the final showdown with Strahd will occur. It can happen anywhere you like in Castle Ravenloft. Alternatively, Madam Eva tells the characters to return to her after at least three days, and she will consult the cards again for them, but only to discern the location of their enemy."
      }
    }
  },
  {
    id: "raven",
    name: "Raven",
    card: "The Raven",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Raven",
    description: "A hidden source of information; a fortunate turn of events; a secret potential for good",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Davian Martikov",
          playerText: "Find the leader of the feathered ones who live among the vines. Though old, he has one more fight left in him.",
          dmText: 'This card refers to Davian Martikov (chapter 12, "The Wizard of the Wines"). The old wereraven, realizing that he has a chance to end Strahd’s tyranny, leaves his vineyard and winery in the capable hands of his sons, Adrian and Elvir. But before he travels to Castle Ravenloft to face Strahd, Davian insists on reconciling with his third son, Urwin Martikov (chapter 5, area N2).'
        }
      ],
      strahd: {
        playerText: "Look to the mother’s tomb.",
        dmText: "Strahd faces the characters in the tomb of King Barov and Queen Ravenovia (area K88)."
      }
    }
  },
  {
    id: "seer",
    name: "Seer",
    card: "The Seer",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Seer",
    description: "Inspiration and keen intellect; a future event, the outcome of which will hinge on a clever mind",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Kasimir Velikov",
          playerText: "Look for a dusk elf living among the Vistani. He has suffered a great loss and is haunted by dark dreams. Help him, and he will help you in return.",
          dmText: "This card refers to Kasimir Velikov (chapter 5, area N9a). The dusk elf accompanies the characters to Castle Ravenloft only after they lead him to the Amber Temple and find the means to resurrect his dead sister, Patrina Velikovna."
        }
      ],
      strahd: {
        playerText: "He waits for you in a place of wisdom, warmth, and despair. Great secrets are there.",
        dmText: "Strahd faces the characters in the study (area K37)."
      }
    }
  },
  {
    id: "tempter",
    name: "Tempter",
    card: "The Tempter",
    deck: "high",
    suit: "High Deck",
    aria: "High Deck Tempter",
    description: "One who has been compromised or led astray by temptation or foolishness; one who tempts others for evil ends",
    back: !1,
    prophecy: {
      allies: [
        {
          ally: "Arabelle",
          playerText: "I see a child - a Vistana. You must hurry, for her fate hangs in the balance. Find her at the lake!",
          dmText: "This card refers to Arabelle (chapter 2, area L). She gladly joins the party. But if she returns to her camp (chapter 5, area N9), her father Luvash, refuses to let her leave."
        },
        {
          ally: "Vasilka",
          playerText: "I hear a wedding bell, or perhaps a death knell. It calls the to a mountainside abbey, wherein you will find a woman who is more than the sum of her parts.",
          dmText: "This card refers to Vasilka, the flesh golem (chapter 8, area S13)."
        }
      ],
      strahd: {
        playerText: "I see a secret place - a vault of temptation hidden behind a woman of great beauty. The evil waits atop his tower of treasure.",
        dmText: 'Strahd confronts the characters in the treasury (area K41). "A woman of great beauty" refers to the portrait of Tatyana hanging in the castle’s study (area K37), which contains a secret door that leads to the treasury.'
      }
    }
  }
];
class Yh {
  constructor() {
    this.highDeck = [], this.commonDeck = [], this.backs = [], this.highDeck = En.filter((g) => g.deck === "high"), this.commonDeck = En.filter((g) => g.deck === "common"), this.backs = En.filter((g) => g.back);
  }
  getHand() {
    return [...Qu(this.commonDeck, 3), ...Qu(this.highDeck, 2)].map(
      (g) => ({ ...g, flipped: !1 })
    );
  }
  getLow() {
    return this.commonDeck.map((g) => ({ ...g, flipped: !1 }));
  }
  getHigh() {
    return this.highDeck.map((g) => ({ ...g, flipped: !1 }));
  }
  drawLow(g = []) {
    const v = g.map(({ id: f }) => f);
    return {
      ...Qu(
        this.commonDeck.filter(({ id: f }) => !v.includes(f)),
        1
      )[0],
      flipped: !1
    };
  }
  drawHigh(g = []) {
    const v = g.map(({ id: f }) => f);
    return {
      ...Qu(
        this.highDeck.filter(({ id: f }) => !v.includes(f)),
        1
      )[0],
      flipped: !1
    };
  }
  select(g) {
    const v = En.find((f) => f.id === g);
    return v ? {
      ...v,
      flipped: !1
    } : null;
  }
  getBack() {
    return this.backs[0];
  }
}
const H0 = 1e3, wh = H0 / 30, Xh = {
  cardStyle: "color",
  notes: !0,
  positionBack: !0,
  positionFront: !0,
  prophecy: !0,
  tilt: !0,
  remoteTilt: !0
}, Qh = {
  started: !1,
  cards: [],
  lastUpdated: 0,
  settings: Xh
}, U0 = {
  tilt: !0,
  remoteTilt: !0
}, C0 = ["tilt", "remoteTilt"], j0 = ["tilt", "remoteTilt"], Mn = "tarokka", Ju = "gameState", B0 = `${Mn}.${Ju}`, Ku = new Yh();
function G0() {
  game.settings.register(Mn, Ju, {
    scope: "world",
    config: !1,
    type: Object,
    default: Qh
  });
}
function xl() {
  return game.settings.get(Mn, Ju);
}
function q0(r) {
  const g = (v) => {
    ((v == null ? void 0 : v.key) ?? v) === B0 && r(xl());
  };
  return Hooks.on("updateSetting", g), () => Hooks.off("updateSetting", g);
}
function wn() {
  var r;
  if (!((r = game.user) != null && r.isGM))
    throw new Error("Only the GM can modify the Tarokka reading.");
}
async function Dn(r) {
  r.lastUpdated = Date.now(), await game.settings.set(Mn, Ju, r);
}
async function Y0() {
  wn(), await Dn({
    started: !0,
    cards: Ku.getHand(),
    lastUpdated: Date.now(),
    settings: { ...Xh }
  });
}
async function X0(r) {
  wn();
  const g = xl(), v = g.cards[r];
  if (!v) throw new Error(`Card ${r} not found`);
  v.flipped = !v.flipped, await Dn(g);
}
async function Q0(r) {
  wn();
  const g = xl(), v = g.cards[r];
  if (!v) throw new Error(`Card ${r} not found`);
  g.cards[r] = v.suit === "High Deck" ? Ku.drawHigh(g.cards) : Ku.drawLow(g.cards), await Dn(g);
}
async function Z0(r, g) {
  wn();
  const v = xl(), f = v.cards[r], z = Ku.select(g);
  if (!f) throw new Error(`Card ${r} not found`);
  if (!z) throw new Error(`Card ${g} not found`);
  v.cards[r] = z, await Dn(v);
}
async function L0(r) {
  wn();
  const g = xl();
  Object.assign(g.settings, r), await Dn(g);
}
const Sf = `module.${Mn}`;
let Zu = null, Lu = null;
function V0() {
  game.socket.on(Sf, (r) => {
    r.type === "tilt" ? Zu == null || Zu(r.userId, r.cardIndex, r.tilt) : r.type === "tilt-clear" && (Lu == null || Lu(r.userId));
  });
}
function Dh(r) {
  Zu = r;
}
function zh(r) {
  Lu = r;
}
function K0(r, g) {
  const v = { type: "tilt", userId: game.user.id, cardIndex: r, tilt: g };
  game.socket.emit(Sf, v);
}
function J0() {
  const r = { type: "tilt-clear", userId: game.user.id };
  game.socket.emit(Sf, r);
}
const Zh = le.createContext(void 0), _h = () => Array.from({ length: 5 }, () => []);
function $0({ children: r }) {
  var te;
  const [g, v] = le.useState({ ...Qh }), [f, z] = le.useState(() => ({ ...U0 })), [D, k] = le.useState(-1), [C, _] = le.useState([]), [S, O] = le.useState(_h), L = le.useRef(/* @__PURE__ */ new Map());
  le.useEffect(() => (v(xl()), q0(v)), []), le.useEffect(() => {
    const ne = () => {
      const ee = _h();
      L.current.forEach(({ cardIndex: de, tilt: De }, K) => {
        ee[de] = [...ee[de], { ...De, playerID: K }];
      }), O(ee);
    };
    return Dh((ee, de, De) => {
      L.current.set(ee, { cardIndex: de, tilt: De }), ne();
    }), zh((ee) => {
      L.current.delete(ee), ne();
    }), () => {
      Dh(null), zh(null);
    };
  }, []), le.useEffect(() => {
    if (!f.remoteTilt) return;
    const ne = C.findIndex((ee) => !!ee);
    C[ne] ? K0(ne, C[ne]) : J0();
  }, [C, f]);
  const B = (ne) => {
    const ee = D;
    k(-1), Z0(ee, ne).catch((de) => console.error("Tarokka | select error:", de));
  }, $ = !!((te = game.user) != null && te.isGM), F = { ...g.settings, ...f }, ge = {
    gameData: g,
    isGM: $,
    selectCardIndex: D,
    settings: F,
    tilts: k0(S, C, F),
    emitFlip: (ne) => {
      X0(ne).catch((ee) => console.error("Tarokka | flip error:", ee));
    },
    emitSettings: (ne) => {
      L0(ne).catch((ee) => console.error("Tarokka | settings error:", ee));
    },
    emitRedraw: (ne) => {
      Q0(ne).catch((ee) => console.error("Tarokka | redraw error:", ee));
    },
    emitSelect: B,
    emitStartReading: () => {
      Y0().catch((ne) => console.error("Tarokka | start reading error:", ne));
    },
    setLocalSettings: z,
    setSelectCardIndex: k,
    setLocalTilt: _
  };
  return /* @__PURE__ */ E.jsx(Zh.Provider, { value: ge, children: r });
}
function Tt() {
  const r = le.useContext(Zh);
  if (!r) throw new Error("useAppContext must be used within AppProvider");
  return r;
}
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W0 = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), F0 = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (g, v, f) => f ? f.toUpperCase() : v.toLowerCase()
), Oh = (r) => {
  const g = F0(r);
  return g.charAt(0).toUpperCase() + g.slice(1);
}, Lh = (...r) => r.filter((g, v, f) => !!g && g.trim() !== "" && f.indexOf(g) === v).join(" ").trim();
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var I0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P0 = le.forwardRef(
  ({
    color: r = "currentColor",
    size: g = 24,
    strokeWidth: v = 2,
    absoluteStrokeWidth: f,
    className: z = "",
    children: D,
    iconNode: k,
    ...C
  }, _) => le.createElement(
    "svg",
    {
      ref: _,
      ...I0,
      width: g,
      height: g,
      stroke: r,
      strokeWidth: f ? Number(v) * 24 / Number(g) : v,
      className: Lh("lucide", z),
      ...C
    },
    [
      ...k.map(([S, O]) => le.createElement(S, O)),
      ...Array.isArray(D) ? D : [D]
    ]
  )
);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ga = (r, g) => {
  const v = le.forwardRef(
    ({ className: f, ...z }, D) => le.createElement(P0, {
      ref: D,
      iconNode: g,
      className: Lh(
        `lucide-${W0(Oh(r))}`,
        `lucide-${r}`,
        f
      ),
      ...z
    })
  );
  return v.displayName = Oh(r), v;
};
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ey = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ty = ga("check", ey);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ay = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Tf = ga("circle-x", ay);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ly = [
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  [
    "path",
    {
      d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
      key: "pwadti"
    }
  ],
  ["path", { d: "M6 2v2", key: "colzsn" }]
], ny = ga("coffee", ly);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], iy = ga("copy", uy);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = [
  ["path", { d: "M2 7v10", key: "a2pl2d" }],
  ["path", { d: "M6 5v14", key: "1kq3d7" }],
  ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2", key: "13i7bc" }]
], fy = ga("gallery-horizontal-end", cy);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oy = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], ry = ga("refresh-cw", oy);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sy = [
  ["path", { d: "M15 12h-5", key: "r7krc0" }],
  ["path", { d: "M15 8h-5", key: "1khuty" }],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  [
    "path",
    {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
      key: "1ph1d7"
    }
  ]
], hy = ga("scroll-text", sy);
/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], my = ga("settings", dy), Rh = new Yh();
function yy({ className: r = "" }) {
  const { gameData: g, emitSelect: v, selectCardIndex: f, setSelectCardIndex: z } = Tt(), { cards: D, settings: k } = g, C = D.map(({ id: B }) => B), _ = f >= 0 ? D[f].deck : null, S = () => z(-1), O = (B) => {
    B.target === B.currentTarget && S();
  };
  if (!_) return null;
  const L = _ === "high" ? Rh.getHigh() : Rh.getLow();
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      onClick: O,
      className: `fixed inset-0 flex justify-center items-center p-4 bg-black/20 backdrop-blur-sm z-40 ${r}`,
      children: [
        /* @__PURE__ */ E.jsx(
          "button",
          {
            className: "fixed top-4 right-4 p-2 transition-all duration-250 text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer",
            onClick: S,
            children: /* @__PURE__ */ E.jsx(Tf, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ E.jsx(
          "div",
          {
            onClick: O,
            className: "flex flex-wrap justify-center items-center gap-3 h-dvh w-2/3 overflow-scroll scrollbar-hide p-4",
            children: L.filter(({ id: B }) => !C.includes(B)).map((B) => /* @__PURE__ */ E.jsx(
              "div",
              {
                className: "relative h-[21vh] w-[15vh] perspective transition-transform duration-200 hover:scale-150 z-0 hover:z-10",
                onClick: () => v(B.id),
                children: /* @__PURE__ */ E.jsx(
                  "img",
                  {
                    src: An(B, k),
                    alt: B.aria,
                    className: "rounded-lg border border-yellow-500/25 hover:drop-shadow-[0_0_3px_#ffd700/50]"
                  }
                )
              },
              B.id
            ))
          }
        )
      ]
    }
  );
}
function Vh({
  children: r,
  content: g,
  delay: v = 250,
  mobileDelay: f = 250,
  offsetX: z = 20,
  offsetY: D = 20,
  edgeBuffer: k = 10,
  className: C
}) {
  const _ = le.useRef(null), [S, O] = le.useState(!1), [L, B] = le.useState({ x: 0, y: 0 }), $ = le.useRef(null), F = le.useRef(null), ge = () => {
    $.current = setTimeout(() => O(!0), v);
  }, te = () => {
    $.current && clearTimeout($.current), O(!1);
  }, ne = (De) => {
    var _e, T;
    const { clientX: K, clientY: Ne } = De, ke = ((_e = _.current) == null ? void 0 : _e.offsetWidth) || 0, Ze = ((T = _.current) == null ? void 0 : T.offsetHeight) || 0, Fe = window.innerWidth - k, zt = window.innerHeight - k, ft = ke + z + K, ze = Ze + D + Ne, _t = ft > Fe ? ft - Fe : 0, Ot = ze > zt ? ze - zt : 0;
    B({ x: K - _t, y: Ne - Ot });
  }, ee = () => {
    F.current = setTimeout(() => O(!0), f);
  }, de = () => {
    F.current && clearTimeout(F.current), O(!1);
  };
  return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    /* @__PURE__ */ E.jsx(
      "div",
      {
        onMouseEnter: ge,
        onMouseLeave: te,
        onMouseMove: ne,
        onTouchStart: ee,
        onTouchEnd: de,
        className: C,
        children: r
      }
    ),
    /* @__PURE__ */ E.jsx(
      "div",
      {
        ref: _,
        className: `fixed max-w-[35vh] pointer-events-none z-50 text-xs bg-[#1e293b] rounded-lg border border-yellow-500 px-2 py-1 transition-opacity duration-250 ${g && S ? "opacity-100" : "opacity-0"}`,
        style: {
          top: `${L.y + D}px`,
          left: `${L.x + z}px`
        },
        children: g
      }
    )
  ] });
}
function vy({
  title: r,
  copy: g,
  Icon: v = iy,
  tooltip: f = ["Copy", "Copied"],
  className: z,
  size: D = 16
}) {
  const [k, C] = le.useState(!1), _ = async () => {
    try {
      await navigator.clipboard.writeText(g), C(!0), setTimeout(() => C(!1), 2e3);
    } catch (O) {
      console.error("Failed to copy!", O);
    }
  }, S = /* @__PURE__ */ E.jsx("span", { className: "text-yellow-300", children: Array.isArray(f) && f.length > 1 ? k ? f[1] : f[0] : f });
  return /* @__PURE__ */ E.jsx("button", { onClick: _, className: `cursor-pointer ${z}`, children: /* @__PURE__ */ E.jsx(Vh, { content: S, className: "w-full font-yellow-400", children: /* @__PURE__ */ E.jsxs("div", { className: "flex items-center gap-2 w-full text-sm font-medium", children: [
    r,
    k ? /* @__PURE__ */ E.jsx(ty, { className: "ml-auto", size: D }) : /* @__PURE__ */ E.jsx(v, { className: "ml-auto", size: D })
  ] }) }) });
}
function Kh({ children: r, clickAction: g, show: v = !0, className: f = "" }) {
  const z = (D) => {
    D.target === D.currentTarget && g(D);
  };
  return v ? /* @__PURE__ */ E.jsx(
    "div",
    {
      onClick: z,
      className: `fixed inset-0 bg-black/20 backdrop-blur-sm z-40 ${f}`,
      children: r
    }
  ) : null;
}
function gy() {
  const { gameData: r, isGM: g, settings: v } = Tt(), { cards: f } = r, z = f.length > 0 && f.every(({ flipped: S }) => S), [D, k] = le.useState(!1), C = le.useMemo(
    () => Array.from({ length: 9 }).map((S, O) => f[Tl[O]]).map(
      (S, O) => S ? Gh(S, qh[Tl[O]], g, v) : null
    ).map(
      (S, O, L) => L[Number(Object.keys(Tl).find((B) => Tl[Number(B)] === O)) || 0]
    ).filter((S) => S),
    [f, g, v]
  ), _ = z && D && (g || v.notes);
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      className: `fixed bottom-4 right-4 z-25 transition-all duration-250 ${z ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
      children: [
        /* @__PURE__ */ E.jsx(
          "button",
          {
            className: `text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] p-2 transition-all duration-250 cursor-pointer ${_ ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"}`,
            onClick: () => k((S) => !S),
            children: /* @__PURE__ */ E.jsx(hy, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ E.jsxs(
          Kh,
          {
            clickAction: () => k((S) => !S),
            className: `transition-all duration-250 ${_ ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
            children: [
              /* @__PURE__ */ E.jsxs(
                "div",
                {
                  className: `
						fixed bottom-4 right-4
						transition-all duration-250
						bg-slate-800
						border border-yellow-400 rounded-lg
						${_ ? "sm:w-[50vw] sm:h-[67vh] w-[80vw] h-[80vh]" : "w-0 h-0"}
					`,
                  children: [
                    /* @__PURE__ */ E.jsx(
                      vy,
                      {
                        copy: C.map((S) => S.join(`
`)).join(`

`),
                        className: `
							absolute top-2 right-2
							cursor-pointer p-2
							transition-all duration-250
							text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700]
						`
                      }
                    ),
                    /* @__PURE__ */ E.jsx("div", { className: "text-yellow-400 h-full overflow-scroll p-8 transition-all delay-200 duration-50 ${showNotes ? 'opacity-100' : 'opacity-0'}", children: C.map((S, O) => /* @__PURE__ */ E.jsxs("div", { children: [
                      /* @__PURE__ */ E.jsx("div", { className: "flex flex-col gap-2", children: S.map((L, B) => /* @__PURE__ */ E.jsx("p", { children: L }, B)) }),
                      O < C.length - 1 && /* @__PURE__ */ E.jsx("hr", { className: "my-3 border-yellow-400" })
                    ] }, O)) })
                  ]
                }
              ),
              /* @__PURE__ */ E.jsx(
                "button",
                {
                  className: `
						fixed bottom-4 right-4
						cursor-pointer p-2
						transition-all duration-250
						text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700]
					`,
                  onClick: () => k((S) => !S),
                  children: /* @__PURE__ */ E.jsx(Tf, { className: "w-5 h-5" })
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const Nh = ["standard", "color", "grayscale"];
function py({ className: r }) {
  const { isGM: g, settings: v, emitSettings: f } = Tt(), z = (D) => {
    f({ cardStyle: D });
  };
  return g ? /* @__PURE__ */ E.jsxs("fieldset", { className: `flex flex-col w-full ${r}`, children: [
    /* @__PURE__ */ E.jsx("div", { className: "text-xs ml-1 mb-1", children: "Card style:" }),
    /* @__PURE__ */ E.jsx("div", { className: "inline-flex overflow-hidden rounded-md w-full", children: Nh.map((D, k) => /* @__PURE__ */ E.jsxs(
      "label",
      {
        className: `
							flex justify-center
							cursor-pointer
							w-full px-3 py-2
							text-xs font-medium capitalize
							border border-yellow-500
							transition hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700]
							${v.cardStyle === D ? "bg-slate-700 text-yellow-300 font-extrabold" : "bg-slate-800 hover:bg-slate-700"}
							${k === 0 ? "rounded-l-md" : ""}
							${k === Nh.length - 1 ? "rounded-r-md" : ""}
							${k !== 0 && "border-l border-gray-600"}
						`,
        children: [
          /* @__PURE__ */ E.jsx(
            "input",
            {
              type: "radio",
              name: "cardStyle",
              value: D,
              checked: v.cardStyle === D,
              onChange: () => z(D),
              className: "sr-only"
            }
          ),
          D
        ]
      },
      D
    )) })
  ] }) : null;
}
const by = /(?!^)([A-Z])/g;
function Sy({ label: r, value: g, toggleAction: v, className: f }) {
  return /* @__PURE__ */ E.jsxs(
    "label",
    {
      className: `flex items-center justify-between gap-2 w-full cursor-pointer text-yellow-400 hover:text-yellow-300 ${f}`,
      children: [
        /* @__PURE__ */ E.jsx("span", { className: "text-sm capitalize", children: r.replace(by, " $1") }),
        /* @__PURE__ */ E.jsxs("div", { className: "relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in", children: [
          /* @__PURE__ */ E.jsx(
            "input",
            {
              id: `switch-${r}`,
              type: "checkbox",
              checked: g,
              onChange: v,
              className: "sr-only peer"
            }
          ),
          /* @__PURE__ */ E.jsx(
            "div",
            {
              className: `
						block w-8 h-4 rounded-full
						transition-colors duration-200 ease-in
						bg-slate-600 peer-checked:bg-slate-500
					`
            }
          ),
          /* @__PURE__ */ E.jsx(
            "div",
            {
              className: `
						absolute top-[2px] left-[2px]
						w-3 h-3 rounded-full
						transition-all duration-250 ease-out
						translate-x-0 scale-95 bg-yellow-500
						peer-checked:translate-x-4 peer-checked:scale-110 peer-checked:bg-yellow-400
					`
            }
          )
        ] })
      ]
    }
  );
}
function Ty() {
  const { isGM: r, settings: g, emitSettings: v, setLocalSettings: f } = Tt(), z = (D) => {
    C0.includes(D) ? f((k) => ({ ...k, [D]: !k[D] })) : r && v({ [D]: !g[D] });
  };
  return /* @__PURE__ */ E.jsx(E.Fragment, { children: Object.entries(g).filter(([D, k]) => typeof k == "boolean").filter(([D]) => r || j0.includes(D)).map(([D, k]) => /* @__PURE__ */ E.jsx(
    Sy,
    {
      label: D,
      value: k,
      toggleAction: () => z(D)
    },
    D
  )) });
}
function xy({ className: r }) {
  const { gameData: g, isGM: v, emitStartReading: f } = Tt();
  return v ? /* @__PURE__ */ E.jsx("div", { className: `flex flex-col w-full gap-1 ${r}`, children: /* @__PURE__ */ E.jsx(
    "button",
    {
      onClick: f,
      className: "w-full py-1 px-2 text-sm transition-all duration-250 bg-slate-700 hover:bg-slate-600 hover:text-yellow-300 rounded-lg shadow cursor-pointer",
      children: g.started ? "New Reading" : "Start Reading"
    }
  ) }) : null;
}
function Ay() {
  const [r, g] = le.useState(!1), { isGM: v } = Tt();
  return /* @__PURE__ */ E.jsxs("div", { className: "fixed top-4 right-4 z-25", children: [
    /* @__PURE__ */ E.jsxs(
      Kh,
      {
        clickAction: () => g((f) => !f),
        className: `transition-all duration-250 ${r ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
        children: [
          /* @__PURE__ */ E.jsxs(
            "div",
            {
              className: `
						fixed top-4 right-4
						flex flex-col items-center justify-between gap-3
						bg-slate-800 text-yellow-400
						rounded-lg border border-yellow-400
						h-full p-8 overflow-y-auto
						transition-all duration-250
						${r ? `opacity-100 ${v ? "w-[350px] max-h-[350px]" : "w-[300px] max-h-[180px]"}` : "opacity-0 w-0 max-h-0"}
					`,
              children: [
                /* @__PURE__ */ E.jsx(xy, {}),
                /* @__PURE__ */ E.jsx(Ty, {}),
                /* @__PURE__ */ E.jsx(py, {})
              ]
            }
          ),
          /* @__PURE__ */ E.jsx(
            "button",
            {
              className: "fixed top-4 right-4 p-2 transition-all duration-250 text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer",
              onClick: () => g((f) => !f),
              children: /* @__PURE__ */ E.jsx(Tf, { className: "w-5 h-5" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ E.jsx(
      "button",
      {
        className: "p-2 transition-all duration-250 text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer",
        onClick: () => g((f) => !f),
        children: /* @__PURE__ */ E.jsx(my, { className: "w-5 h-5" })
      }
    )
  ] });
}
const Ey = "https://ko-fi.com/thegmstudio", My = "https://patreon.com/gmredvelvet";
function wy({ className: r = "" }) {
  return /* @__PURE__ */ E.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", className: r, children: /* @__PURE__ */ E.jsx("path", { d: "M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6" }) });
}
function kh({ href: r, label: g, hoverClass: v, children: f }) {
  return /* @__PURE__ */ E.jsxs(
    "a",
    {
      href: r,
      target: "_blank",
      rel: "noopener noreferrer",
      title: `Support on ${g}`,
      className: `flex items-center gap-2 px-3 py-1.5
				bg-slate-800/90 text-yellow-400 border border-yellow-500/25
				rounded-full shadow-lg backdrop-blur-sm
				text-sm font-semibold whitespace-nowrap
				transition-all duration-250 cursor-pointer
				hover:text-slate-900 ${v}`,
      children: [
        /* @__PURE__ */ E.jsx("span", { className: "flex shrink-0 items-center justify-center", children: f }),
        g
      ]
    }
  );
}
function Dy() {
  return /* @__PURE__ */ E.jsxs("div", { className: "absolute bottom-4 left-4 z-30 flex flex-col gap-2", children: [
    /* @__PURE__ */ E.jsx(
      kh,
      {
        href: Ey,
        label: "Ko-fi",
        hoverClass: "hover:bg-[#ff5e5b] hover:border-[#ff5e5b]",
        children: /* @__PURE__ */ E.jsx(ny, { className: "w-4 h-4" })
      }
    ),
    /* @__PURE__ */ E.jsx(
      kh,
      {
        href: My,
        label: "Patreon",
        hoverClass: "hover:bg-[#f96854] hover:border-[#f96854]",
        children: /* @__PURE__ */ E.jsx(wy, { className: "w-4 h-4" })
      }
    )
  ] });
}
const zy = "rotateX(0deg) rotateY(0deg)";
function _y({
  children: r,
  cardIndex: g,
  className: v = ""
}) {
  const f = le.useRef(null), [z, D] = le.useState(!1), { settings: k, tilts: C, setLocalTilt: _ } = Tt();
  le.useEffect(() => {
    const $ = f.current;
    if (!$) return;
    const F = C[g];
    bf(F) ? (D(!1), $.style.transform = `rotateX(${F.rotateX}deg) rotateY(${F.rotateY}deg)`) : D(!0);
  }, [C]), le.useEffect(() => {
    const $ = f.current;
    !$ || !z || ($.style.transform = zy);
  }, [z]);
  const S = ($, F) => {
    const ge = f.current;
    if (!ge) return;
    const te = ge.getBoundingClientRect();
    $ -= te.left, F -= te.top;
    const ne = te.width / 2, ee = te.height / 2, de = (F - ee) / ee * -20, De = ($ - ne) / ne * 20, K = $ / te.width, Ne = F / te.height, ke = [];
    ke[g] = {
      percentX: K,
      percentY: Ne,
      rotateX: de,
      rotateY: De
    }, _(ke);
  }, O = Mh(($) => {
    S($.clientX, $.clientY);
  }, wh), L = Mh(($) => {
    const F = f.current, ge = $.touches[0];
    if (F && ge) {
      const te = F.getBoundingClientRect(), ne = ge.clientX, ee = ge.clientY;
      ne >= te.left && ne <= te.right && ee >= te.top && ee <= te.bottom ? S(ne, ee) : _([]);
    }
  }, wh), B = () => {
    _([]);
  };
  return /* @__PURE__ */ E.jsx(
    "div",
    {
      className: `group ${v}`,
      onMouseMove: k.tilt ? O : void 0,
      onTouchMove: k.tilt ? L : void 0,
      onTouchEnd: B,
      onMouseLeave: B,
      children: /* @__PURE__ */ E.jsx(
        "div",
        {
          ref: f,
          onAnimationEnd: () => D(!1),
          className: `h-full w-full transition-transform ${z ? "duration-500" : "duration-0"}`,
          children: r
        }
      )
    }
  );
}
function Oy({
  onRedraw: r,
  onSelect: g,
  onHover: v,
  className: f = ""
}) {
  const z = (D) => (k) => {
    k.stopPropagation(), D();
  };
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      className: `absolute top-0.5 right-0.5 flex flex-col items-center justify-center gap-0.5 bg-black/40 rounded-md p-0.5 ${f}`,
      children: [
        /* @__PURE__ */ E.jsx(
          "button",
          {
            onMouseEnter: () => v(/* @__PURE__ */ E.jsx("p", { className: "text-yellow-400", children: "Redraw" })),
            onMouseLeave: () => v(null),
            onTouchStart: () => v(/* @__PURE__ */ E.jsx("p", { className: "text-yellow-400", children: "Redraw" })),
            onTouchEnd: () => v(null),
            className: "transition-all duration-250 text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer",
            onClick: z(r),
            children: /* @__PURE__ */ E.jsx(ry, { className: "w-2 h-2" })
          }
        ),
        /* @__PURE__ */ E.jsx(
          "button",
          {
            onMouseEnter: () => v(/* @__PURE__ */ E.jsx("p", { className: "text-yellow-400", children: "Select" })),
            onMouseLeave: () => v(null),
            onTouchStart: () => v(/* @__PURE__ */ E.jsx("p", { className: "text-yellow-400", children: "Select" })),
            onTouchEnd: () => v(null),
            className: "transition-all duration-250 text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer",
            onClick: z(g),
            children: /* @__PURE__ */ E.jsx(fy, { className: "w-2 h-2" })
          }
        )
      ]
    }
  );
}
const Ry = (r, g, v) => {
  const f = r.getBoundingClientRect(), z = f.width - g * f.width, D = f.height - v * f.height;
  r.style.opacity = "1", r.style.backgroundImage = `
			radial-gradient(
				circle at
				${z}px ${D}px,
				#ffffff44,
				#0000000f
			)
		`;
};
function Hh({ cardIndex: r, className: g }) {
  const v = le.useRef(null), [f, z] = le.useState(!1), { tilts: D } = Tt();
  return le.useEffect(() => {
    const k = v.current;
    if (!k) return;
    const C = D[r];
    bf(C) ? (z(!1), Ry(k, C.percentX, C.percentY)) : z(!0);
  }, [D]), le.useEffect(() => {
    const k = v.current;
    !k || !f || (k.style.opacity = "0");
  }, [f]), /* @__PURE__ */ E.jsx(
    "div",
    {
      ref: v,
      className: `
				absolute inset-0
				rounded-lg pointer-events-none
				transition-opacity duration-500
				bg-gradient-to-tr from-transparent via-white/20 to-transparent mix-blend-screen opacity-0
				${g}
			`
    }
  );
}
const Uh = En.find((r) => r.back);
function Ny({ card: r, cardIndex: g }) {
  const [v, f] = le.useState(null), { emitFlip: z, isGM: D, settings: k, emitRedraw: C, setSelectCardIndex: _ } = Tt(), { aria: S, flipped: O } = r, L = qh[g], B = () => {
    D && z(g);
  }, $ = () => {
    const F = Gh(r, L, D, k);
    return F.length ? /* @__PURE__ */ E.jsx(E.Fragment, { children: F.map((ge, te) => /* @__PURE__ */ E.jsxs("div", { children: [
      /* @__PURE__ */ E.jsx("p", { className: "text-yellow-400", children: ge }),
      te < F.length - 1 && /* @__PURE__ */ E.jsx("hr", { className: "my-2 border-yellow-400" })
    ] }, te)) }) : null;
  };
  return /* @__PURE__ */ E.jsx(Vh, { content: v || $(), children: /* @__PURE__ */ E.jsx(
    _y,
    {
      className: `h-[21vh] w-[15vh] max-w-[30vw] relative perspective transition-transform duration-200 z-0 hover:z-10 hover:scale-150 ${D ? "cursor-pointer" : ""} `,
      cardIndex: g,
      children: /* @__PURE__ */ E.jsxs(
        "div",
        {
          className: `absolute inset-0 transition-transform duration-500 transform-style-preserve-3d ${O ? "rotate-y-180" : ""}`,
          onClick: B,
          children: [
            /* @__PURE__ */ E.jsxs("div", { className: "absolute inset-0 group backface-hidden", children: [
              D && /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
                /* @__PURE__ */ E.jsx("img", { src: An(r, k), alt: S, className: "absolute rounded-lg" }),
                /* @__PURE__ */ E.jsx(
                  "img",
                  {
                    src: An(Uh, k),
                    alt: "",
                    className: "absolute rounded-lg see-through"
                  }
                )
              ] }),
              /* @__PURE__ */ E.jsx(
                "img",
                {
                  src: An(Uh, k),
                  alt: "Card Back",
                  className: `absolute rounded-lg ${D ? "transition duration-500 group-hover:opacity-0" : ""} ${k.cardStyle === "grayscale" ? "border border-yellow-500/25 group-hover:drop-shadow-[0_0_3px_#ffd700/50]" : ""}`
                }
              ),
              D && !O && /* @__PURE__ */ E.jsx(
                Oy,
                {
                  onRedraw: () => C(g),
                  onSelect: () => _(g),
                  onHover: f
                }
              ),
              /* @__PURE__ */ E.jsx(Hh, { cardIndex: g })
            ] }),
            /* @__PURE__ */ E.jsxs("div", { className: "absolute inset-0 backface-hidden rotate-y-180", children: [
              /* @__PURE__ */ E.jsx(
                "img",
                {
                  src: An(r, k),
                  alt: S,
                  className: "rounded-lg border border-yellow-500/25 hover:drop-shadow-[0_0_3px_#ffd700/50]"
                }
              ),
              /* @__PURE__ */ E.jsx(Hh, { cardIndex: g })
            ] })
          ]
        }
      )
    }
  ) });
}
function ky() {
  const { gameData: r } = Tt(), { cards: g } = r, v = (f, z) => g[Tl[z]];
  return /* @__PURE__ */ E.jsx("div", { className: "grid grid-cols-3 grid-rows-3 gap-2 sm:gap-4 md:gap-8 w-fit mx-auto", children: Array.from({ length: 9 }).map(v).map((f, z) => /* @__PURE__ */ E.jsx("div", { className: "aspect-[2/3]}", children: f && /* @__PURE__ */ E.jsx(Ny, { card: f, cardIndex: Tl[z] }) }, z)) });
}
const Hy = "url('modules/tarokka/assets/img/table3-bg.gif')";
function Uy() {
  const { gameData: r, isGM: g, emitStartReading: v } = Tt();
  return /* @__PURE__ */ E.jsxs(
    "main",
    {
      className: "relative h-full w-full flex flex-col items-center justify-center gap-4 bg-cover bg-center",
      style: { backgroundImage: Hy },
      children: [
        /* @__PURE__ */ E.jsx(Ay, {}),
        /* @__PURE__ */ E.jsx(Dy, {}),
        r.started ? /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
          /* @__PURE__ */ E.jsx(ky, {}),
          /* @__PURE__ */ E.jsx(gy, {}),
          /* @__PURE__ */ E.jsx(yy, {})
        ] }) : /* @__PURE__ */ E.jsxs("div", { className: "flex flex-col items-center gap-6 text-center text-yellow-400 p-8", children: [
          /* @__PURE__ */ E.jsx("h1", { className: "text-4xl font-bold", children: "Tarokka" }),
          /* @__PURE__ */ E.jsxs("p", { className: "max-w-[350px]", children: [
            "A Tarokka reading for ",
            /* @__PURE__ */ E.jsx("em", { children: "Dungeons & Dragons: Curse of Strahd" }),
            "."
          ] }),
          g ? /* @__PURE__ */ E.jsx(
            "button",
            {
              onClick: v,
              className: "bg-slate-800 hover:bg-slate-700 border border-yellow-500/25 hover:drop-shadow-[0_0_3px_rgba(255,215,0,0.5)] hover:text-yellow-300 text-lg px-6 py-3 rounded-lg shadow transition-all duration-250 cursor-pointer",
              children: "Start Reading"
            }
          ) : /* @__PURE__ */ E.jsx("p", { className: "text-sm text-yellow-400/70", children: "The GM hasn't started a reading yet." })
        ] })
      ]
    }
  );
}
var Ch, jh;
const Jh = typeof foundry < "u" && ((jh = (Ch = foundry == null ? void 0 : foundry.appv1) == null ? void 0 : Ch.api) == null ? void 0 : jh.Application) || (typeof Application < "u" ? Application : void 0);
var Bh;
const Cy = typeof foundry < "u" && ((Bh = foundry == null ? void 0 : foundry.utils) == null ? void 0 : Bh.mergeObject) || (typeof mergeObject < "u" ? mergeObject : (r, g) => ({ ...r, ...g }));
if (!Jh)
  throw new Error(
    "Tarokka: could not find a Foundry Application (v1) class (checked foundry.appv1.api.Application and the global Application)."
  );
class jy extends Jh {
  constructor() {
    super(...arguments), this.root = null;
  }
  static get defaultOptions() {
    return Cy(super.defaultOptions, {
      id: "tarokka-app",
      title: game.i18n.localize("TAROKKA.windowTitle"),
      template: "modules/tarokka/dist/empty.html",
      width: 920,
      height: 720,
      resizable: !0,
      popOut: !0
    });
  }
  // The classic Application renders by fetching `template` over HTTP. If that
  // file is missing from the installed package (or the path/casing is wrong),
  // the default _renderInner rejects and the window never appears — with no
  // visible error. Fall back to an empty mount so React can still take over in
  // activateListeners; the template content is discarded there anyway.
  async _renderInner(g) {
    try {
      return await super._renderInner(g);
    } catch (v) {
      return console.warn("Tarokka | template render failed, using empty mount:", v), (globalThis.jQuery ?? globalThis.$)('<div class="tarokka-mount"></div>');
    }
  }
  activateListeners(g) {
    var z;
    if (super.activateListeners(g), this.root) return;
    const v = (z = this.element[0]) == null ? void 0 : z.querySelector(".window-content");
    if (!v) return;
    v.innerHTML = "";
    const f = document.createElement("div");
    f.id = "tarokka-root", v.appendChild(f), this.root = D0.createRoot(f), this.root.render(
      /* @__PURE__ */ E.jsx($0, { children: /* @__PURE__ */ E.jsx(Uy, {}) })
    );
  }
  async close(g) {
    var v;
    return (v = this.root) == null || v.unmount(), this.root = null, super.close(g);
  }
}
const By = "tarokka";
let gf = null;
function Vu() {
  gf || (gf = new jy()), gf.render(!0, { focus: !0 });
}
function $h() {
  const r = game.modules.get(By);
  r && (r.api = { open: Vu });
}
Hooks.once("init", () => {
  console.log("Tarokka | init"), G0(), $h();
});
Hooks.once("ready", () => {
  console.log("Tarokka | ready"), V0(), $h();
});
Hooks.on("getSceneControlButtons", (r) => {
  try {
    const g = "TAROKKA.controlName", v = "fa-solid fa-clone";
    if (Array.isArray(r)) {
      r.push({
        name: "tarokka",
        title: g,
        icon: v,
        layer: "tarokka",
        visible: !0,
        tools: [
          {
            name: "open",
            title: g,
            icon: v,
            button: !0,
            onClick: Vu
          }
        ]
      });
      return;
    }
    r.tarokka = {
      name: "tarokka",
      title: g,
      icon: v,
      order: Object.keys(r).length,
      activeTool: "open",
      tools: {
        open: {
          name: "open",
          title: g,
          icon: v,
          order: 1,
          button: !0,
          onClick: Vu,
          onChange: Vu
        }
      }
    };
  } catch (g) {
    console.error("Tarokka | failed to add scene control button:", g);
  }
});
//# sourceMappingURL=tarokka.js.map
