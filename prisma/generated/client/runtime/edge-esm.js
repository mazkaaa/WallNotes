var Gl = Object.create;
var Ao = Object.defineProperty;
var Wl = Object.getOwnPropertyDescriptor;
var Hl = Object.getOwnPropertyNames;
var zl = Object.getPrototypeOf,
  Yl = Object.prototype.hasOwnProperty;
var _o = ((e) =>
  typeof require != "undefined"
    ? require
    : typeof Proxy != "undefined"
    ? new Proxy(e, {
        get: (t, r) => (typeof require != "undefined" ? require : t)[r],
      })
    : e)(function (e) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var Kt = (e, t) => () => (e && (t = e((e = 0))), t);
var ne = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  xr = (e, t) => {
    for (var r in t) Ao(e, r, { get: t[r], enumerable: !0 });
  },
  Zl = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of Hl(t))
        !Yl.call(e, o) &&
          o !== r &&
          Ao(e, o, {
            get: () => t[o],
            enumerable: !(n = Wl(t, o)) || n.enumerable,
          });
    return e;
  };
var _e = (e, t, r) => (
  (r = e != null ? Gl(zl(e)) : {}),
  Zl(
    t || !e || !e.__esModule
      ? Ao(r, "default", { value: e, enumerable: !0 })
      : r,
    e
  )
);
function J(e) {
  return () => e;
}
function Je() {
  return b;
}
var b,
  p = Kt(() => {
    "use strict";
    b = {
      abort: J(void 0),
      addListener: J(Je()),
      allowedNodeEnvironmentFlags: new Set(),
      arch: "x64",
      argv: ["/bin/node"],
      argv0: "node",
      chdir: J(void 0),
      config: {
        target_defaults: {
          cflags: [],
          default_configuration: "",
          defines: [],
          include_dirs: [],
          libraries: [],
        },
        variables: {
          clang: 0,
          host_arch: "x64",
          node_install_npm: !1,
          node_install_waf: !1,
          node_prefix: "",
          node_shared_openssl: !1,
          node_shared_v8: !1,
          node_shared_zlib: !1,
          node_use_dtrace: !1,
          node_use_etw: !1,
          node_use_openssl: !1,
          target_arch: "x64",
          v8_no_strict_aliasing: 0,
          v8_use_snapshot: !1,
          visibility: "",
        },
      },
      connected: !1,
      cpuUsage: () => ({ user: 0, system: 0 }),
      cwd: () => "/",
      debugPort: 0,
      disconnect: J(void 0),
      constrainedMemory: () => {},
      emit: J(Je()),
      emitWarning: J(void 0),
      env: {},
      eventNames: () => [],
      execArgv: [],
      execPath: "/",
      exit: J(void 0),
      features: {
        inspector: !1,
        debug: !1,
        uv: !1,
        ipv6: !1,
        tls_alpn: !1,
        tls_sni: !1,
        tls_ocsp: !1,
        tls: !1,
      },
      getMaxListeners: J(0),
      getegid: J(0),
      geteuid: J(0),
      getgid: J(0),
      getgroups: J([]),
      getuid: J(0),
      hasUncaughtExceptionCaptureCallback: J(!1),
      hrtime: J([0, 0]),
      platform: "linux",
      kill: J(!0),
      listenerCount: J(0),
      listeners: J([]),
      memoryUsage: J({
        arrayBuffers: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0,
        rss: 0,
      }),
      nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      },
      off: J(Je()),
      on: J(Je()),
      once: J(Je()),
      openStdin: J({}),
      pid: 0,
      ppid: 0,
      prependListener: J(Je()),
      prependOnceListener: J(Je()),
      rawListeners: J([]),
      release: { name: "node" },
      removeAllListeners: J(Je()),
      removeListener: J(Je()),
      resourceUsage: J({
        fsRead: 0,
        fsWrite: 0,
        involuntaryContextSwitches: 0,
        ipcReceived: 0,
        ipcSent: 0,
        majorPageFault: 0,
        maxRSS: 0,
        minorPageFault: 0,
        sharedMemorySize: 0,
        signalsCount: 0,
        swappedOut: 0,
        systemCPUTime: 0,
        unsharedDataSize: 0,
        unsharedStackSize: 0,
        userCPUTime: 0,
        voluntaryContextSwitches: 0,
      }),
      setMaxListeners: J(Je()),
      setUncaughtExceptionCaptureCallback: J(void 0),
      setegid: J(void 0),
      seteuid: J(void 0),
      setgid: J(void 0),
      setgroups: J(void 0),
      setuid: J(void 0),
      sourceMapsEnabled: !1,
      stderr: { fd: 2 },
      stdin: { fd: 0 },
      stdout: { fd: 1 },
      title: "node",
      traceDeprecation: !1,
      umask: J(0),
      uptime: J(0),
      version: "",
      versions: {
        http_parser: "",
        node: "",
        v8: "",
        ares: "",
        uv: "",
        zlib: "",
        modules: "",
        openssl: "",
      },
    };
  });
var rs,
  P,
  f = Kt(() => {
    "use strict";
    P =
      (rs = globalThis.performance) != null
        ? rs
        : (() => {
            let e = Date.now();
            return { now: () => Date.now() - e };
          })();
  });
var w,
  d = Kt(() => {
    "use strict";
    w = () => {};
    w.prototype = w;
  });
var E,
  m = Kt(() => {
    "use strict";
    E = class {
      constructor(t) {
        this.value = t;
      }
      deref() {
        return this.value;
      }
    };
  });
var Es = ne((Wt) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  var as = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    Xl = as((e) => {
      "use strict";
      (e.byteLength = u), (e.toByteArray = c), (e.fromByteArray = A);
      var t = [],
        r = [],
        n = typeof Uint8Array < "u" ? Uint8Array : Array,
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, s = o.length; i < s; ++i)
        (t[i] = o[i]), (r[o.charCodeAt(i)] = i);
      var i, s;
      (r[45] = 62), (r[95] = 63);
      function a(_) {
        var T = _.length;
        if (T % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var S = _.indexOf("=");
        S === -1 && (S = T);
        var I = S === T ? 0 : 4 - (S % 4);
        return [S, I];
      }
      function u(_) {
        var T = a(_),
          S = T[0],
          I = T[1];
        return ((S + I) * 3) / 4 - I;
      }
      function l(_, T, S) {
        return ((T + S) * 3) / 4 - S;
      }
      function c(_) {
        var T,
          S = a(_),
          I = S[0],
          F = S[1],
          O = new n(l(_, I, F)),
          k = 0,
          K = F > 0 ? I - 4 : I,
          Q;
        for (Q = 0; Q < K; Q += 4)
          (T =
            (r[_.charCodeAt(Q)] << 18) |
            (r[_.charCodeAt(Q + 1)] << 12) |
            (r[_.charCodeAt(Q + 2)] << 6) |
            r[_.charCodeAt(Q + 3)]),
            (O[k++] = (T >> 16) & 255),
            (O[k++] = (T >> 8) & 255),
            (O[k++] = T & 255);
        return (
          F === 2 &&
            ((T = (r[_.charCodeAt(Q)] << 2) | (r[_.charCodeAt(Q + 1)] >> 4)),
            (O[k++] = T & 255)),
          F === 1 &&
            ((T =
              (r[_.charCodeAt(Q)] << 10) |
              (r[_.charCodeAt(Q + 1)] << 4) |
              (r[_.charCodeAt(Q + 2)] >> 2)),
            (O[k++] = (T >> 8) & 255),
            (O[k++] = T & 255)),
          O
        );
      }
      function y(_) {
        return (
          t[(_ >> 18) & 63] + t[(_ >> 12) & 63] + t[(_ >> 6) & 63] + t[_ & 63]
        );
      }
      function h(_, T, S) {
        for (var I, F = [], O = T; O < S; O += 3)
          (I =
            ((_[O] << 16) & 16711680) +
            ((_[O + 1] << 8) & 65280) +
            (_[O + 2] & 255)),
            F.push(y(I));
        return F.join("");
      }
      function A(_) {
        for (
          var T, S = _.length, I = S % 3, F = [], O = 16383, k = 0, K = S - I;
          k < K;
          k += O
        )
          F.push(h(_, k, k + O > K ? K : k + O));
        return (
          I === 1
            ? ((T = _[S - 1]), F.push(t[T >> 2] + t[(T << 4) & 63] + "=="))
            : I === 2 &&
              ((T = (_[S - 2] << 8) + _[S - 1]),
              F.push(t[T >> 10] + t[(T >> 4) & 63] + t[(T << 2) & 63] + "=")),
          F.join("")
        );
      }
    }),
    ec = as((e) => {
      (e.read = function (t, r, n, o, i) {
        var s,
          a,
          u = i * 8 - o - 1,
          l = (1 << u) - 1,
          c = l >> 1,
          y = -7,
          h = n ? i - 1 : 0,
          A = n ? -1 : 1,
          _ = t[r + h];
        for (
          h += A, s = _ & ((1 << -y) - 1), _ >>= -y, y += u;
          y > 0;
          s = s * 256 + t[r + h], h += A, y -= 8
        );
        for (
          a = s & ((1 << -y) - 1), s >>= -y, y += o;
          y > 0;
          a = a * 256 + t[r + h], h += A, y -= 8
        );
        if (s === 0) s = 1 - c;
        else {
          if (s === l) return a ? NaN : (_ ? -1 : 1) * (1 / 0);
          (a = a + Math.pow(2, o)), (s = s - c);
        }
        return (_ ? -1 : 1) * a * Math.pow(2, s - o);
      }),
        (e.write = function (t, r, n, o, i, s) {
          var a,
            u,
            l,
            c = s * 8 - i - 1,
            y = (1 << c) - 1,
            h = y >> 1,
            A = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            _ = o ? 0 : s - 1,
            T = o ? 1 : -1,
            S = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? ((u = isNaN(r) ? 1 : 0), (a = y))
                : ((a = Math.floor(Math.log(r) / Math.LN2)),
                  r * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
                  a + h >= 1 ? (r += A / l) : (r += A * Math.pow(2, 1 - h)),
                  r * l >= 2 && (a++, (l /= 2)),
                  a + h >= y
                    ? ((u = 0), (a = y))
                    : a + h >= 1
                    ? ((u = (r * l - 1) * Math.pow(2, i)), (a = a + h))
                    : ((u = r * Math.pow(2, h - 1) * Math.pow(2, i)), (a = 0)));
            i >= 8;
            t[n + _] = u & 255, _ += T, u /= 256, i -= 8
          );
          for (
            a = (a << i) | u, c += i;
            c > 0;
            t[n + _] = a & 255, _ += T, a /= 256, c -= 8
          );
          t[n + _ - T] |= S * 128;
        });
    }),
    Co = Xl(),
    Jt = ec(),
    ns =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  Wt.Buffer = C;
  Wt.SlowBuffer = sc;
  Wt.INSPECT_MAX_BYTES = 50;
  var cn = 2147483647;
  Wt.kMaxLength = cn;
  C.TYPED_ARRAY_SUPPORT = tc();
  !C.TYPED_ARRAY_SUPPORT &&
    typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
  function tc() {
    try {
      let e = new Uint8Array(1),
        t = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(e, t),
        e.foo() === 42
      );
    } catch (e) {
      return !1;
    }
  }
  Object.defineProperty(C.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (C.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(C.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (C.isBuffer(this)) return this.byteOffset;
    },
  });
  function rt(e) {
    if (e > cn)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"'
      );
    let t = new Uint8Array(e);
    return Object.setPrototypeOf(t, C.prototype), t;
  }
  function C(e, t, r) {
    if (typeof e == "number") {
      if (typeof t == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return Ro(e);
    }
    return us(e, t, r);
  }
  C.poolSize = 8192;
  function us(e, t, r) {
    if (typeof e == "string") return nc(e, t);
    if (ArrayBuffer.isView(e)) return oc(e);
    if (e == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof e
      );
    if (
      Ge(e, ArrayBuffer) ||
      (e && Ge(e.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (Ge(e, SharedArrayBuffer) || (e && Ge(e.buffer, SharedArrayBuffer))))
    )
      return cs(e, t, r);
    if (typeof e == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    let n = e.valueOf && e.valueOf();
    if (n != null && n !== e) return C.from(n, t, r);
    let o = ic(e);
    if (o) return o;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof e[Symbol.toPrimitive] == "function"
    )
      return C.from(e[Symbol.toPrimitive]("string"), t, r);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof e
    );
  }
  C.from = function (e, t, r) {
    return us(e, t, r);
  };
  Object.setPrototypeOf(C.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(C, Uint8Array);
  function ls(e) {
    if (typeof e != "number")
      throw new TypeError('"size" argument must be of type number');
    if (e < 0)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"'
      );
  }
  function rc(e, t, r) {
    return (
      ls(e),
      e <= 0
        ? rt(e)
        : t !== void 0
        ? typeof r == "string"
          ? rt(e).fill(t, r)
          : rt(e).fill(t)
        : rt(e)
    );
  }
  C.alloc = function (e, t, r) {
    return rc(e, t, r);
  };
  function Ro(e) {
    return ls(e), rt(e < 0 ? 0 : Oo(e) | 0);
  }
  C.allocUnsafe = function (e) {
    return Ro(e);
  };
  C.allocUnsafeSlow = function (e) {
    return Ro(e);
  };
  function nc(e, t) {
    if (((typeof t != "string" || t === "") && (t = "utf8"), !C.isEncoding(t)))
      throw new TypeError("Unknown encoding: " + t);
    let r = ps(e, t) | 0,
      n = rt(r),
      o = n.write(e, t);
    return o !== r && (n = n.slice(0, o)), n;
  }
  function So(e) {
    let t = e.length < 0 ? 0 : Oo(e.length) | 0,
      r = rt(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
    return r;
  }
  function oc(e) {
    if (Ge(e, Uint8Array)) {
      let t = new Uint8Array(e);
      return cs(t.buffer, t.byteOffset, t.byteLength);
    }
    return So(e);
  }
  function cs(e, t, r) {
    if (t < 0 || e.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return (
      t === void 0 && r === void 0
        ? (n = new Uint8Array(e))
        : r === void 0
        ? (n = new Uint8Array(e, t))
        : (n = new Uint8Array(e, t, r)),
      Object.setPrototypeOf(n, C.prototype),
      n
    );
  }
  function ic(e) {
    if (C.isBuffer(e)) {
      let t = Oo(e.length) | 0,
        r = rt(t);
      return r.length === 0 || e.copy(r, 0, 0, t), r;
    }
    if (e.length !== void 0)
      return typeof e.length != "number" || ko(e.length) ? rt(0) : So(e);
    if (e.type === "Buffer" && Array.isArray(e.data)) return So(e.data);
  }
  function Oo(e) {
    if (e >= cn)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          cn.toString(16) +
          " bytes"
      );
    return e | 0;
  }
  function sc(e) {
    return +e != e && (e = 0), C.alloc(+e);
  }
  C.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== C.prototype;
  };
  C.compare = function (e, t) {
    if (
      (Ge(e, Uint8Array) && (e = C.from(e, e.offset, e.byteLength)),
      Ge(t, Uint8Array) && (t = C.from(t, t.offset, t.byteLength)),
      !C.isBuffer(e) || !C.isBuffer(t))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (e === t) return 0;
    let r = e.length,
      n = t.length;
    for (let o = 0, i = Math.min(r, n); o < i; ++o)
      if (e[o] !== t[o]) {
        (r = e[o]), (n = t[o]);
        break;
      }
    return r < n ? -1 : n < r ? 1 : 0;
  };
  C.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  C.concat = function (e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return C.alloc(0);
    let r;
    if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
    let n = C.allocUnsafe(t),
      o = 0;
    for (r = 0; r < e.length; ++r) {
      let i = e[r];
      if (Ge(i, Uint8Array))
        o + i.length > n.length
          ? (C.isBuffer(i) || (i = C.from(i)), i.copy(n, o))
          : Uint8Array.prototype.set.call(n, i, o);
      else if (C.isBuffer(i)) i.copy(n, o);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      o += i.length;
    }
    return n;
  };
  function ps(e, t) {
    if (C.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || Ge(e, ArrayBuffer)) return e.byteLength;
    if (typeof e != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof e
      );
    let r = e.length,
      n = arguments.length > 2 && arguments[2] === !0;
    if (!n && r === 0) return 0;
    let o = !1;
    for (;;)
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return Mo(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return xs(e).length;
        default:
          if (o) return n ? -1 : Mo(e).length;
          (t = ("" + t).toLowerCase()), (o = !0);
      }
  }
  C.byteLength = ps;
  function ac(e, t, r) {
    let n = !1;
    if (
      ((t === void 0 || t < 0) && (t = 0),
      t > this.length ||
        ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
        ((r >>>= 0), (t >>>= 0), r <= t))
    )
      return "";
    for (e || (e = "utf8"); ; )
      switch (e) {
        case "hex":
          return hc(this, t, r);
        case "utf8":
        case "utf-8":
          return ds(this, t, r);
        case "ascii":
          return gc(this, t, r);
        case "latin1":
        case "binary":
          return yc(this, t, r);
        case "base64":
          return dc(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return bc(this, t, r);
        default:
          if (n) throw new TypeError("Unknown encoding: " + e);
          (e = (e + "").toLowerCase()), (n = !0);
      }
  }
  C.prototype._isBuffer = !0;
  function Mt(e, t, r) {
    let n = e[t];
    (e[t] = e[r]), (e[r] = n);
  }
  C.prototype.swap16 = function () {
    let e = this.length;
    if (e % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < e; t += 2) Mt(this, t, t + 1);
    return this;
  };
  C.prototype.swap32 = function () {
    let e = this.length;
    if (e % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < e; t += 4) Mt(this, t, t + 3), Mt(this, t + 1, t + 2);
    return this;
  };
  C.prototype.swap64 = function () {
    let e = this.length;
    if (e % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < e; t += 8)
      Mt(this, t, t + 7),
        Mt(this, t + 1, t + 6),
        Mt(this, t + 2, t + 5),
        Mt(this, t + 3, t + 4);
    return this;
  };
  C.prototype.toString = function () {
    let e = this.length;
    return e === 0
      ? ""
      : arguments.length === 0
      ? ds(this, 0, e)
      : ac.apply(this, arguments);
  };
  C.prototype.toLocaleString = C.prototype.toString;
  C.prototype.equals = function (e) {
    if (!C.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : C.compare(this, e) === 0;
  };
  C.prototype.inspect = function () {
    let e = "",
      t = Wt.INSPECT_MAX_BYTES;
    return (
      (e = this.toString("hex", 0, t)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > t && (e += " ... "),
      "<Buffer " + e + ">"
    );
  };
  ns && (C.prototype[ns] = C.prototype.inspect);
  C.prototype.compare = function (e, t, r, n, o) {
    if (
      (Ge(e, Uint8Array) && (e = C.from(e, e.offset, e.byteLength)),
      !C.isBuffer(e))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof e
      );
    if (
      (t === void 0 && (t = 0),
      r === void 0 && (r = e ? e.length : 0),
      n === void 0 && (n = 0),
      o === void 0 && (o = this.length),
      t < 0 || r > e.length || n < 0 || o > this.length)
    )
      throw new RangeError("out of range index");
    if (n >= o && t >= r) return 0;
    if (n >= o) return -1;
    if (t >= r) return 1;
    if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (o >>>= 0), this === e)) return 0;
    let i = o - n,
      s = r - t,
      a = Math.min(i, s),
      u = this.slice(n, o),
      l = e.slice(t, r);
    for (let c = 0; c < a; ++c)
      if (u[c] !== l[c]) {
        (i = u[c]), (s = l[c]);
        break;
      }
    return i < s ? -1 : s < i ? 1 : 0;
  };
  function fs(e, t, r, n, o) {
    if (e.length === 0) return -1;
    if (
      (typeof r == "string"
        ? ((n = r), (r = 0))
        : r > 2147483647
        ? (r = 2147483647)
        : r < -2147483648 && (r = -2147483648),
      (r = +r),
      ko(r) && (r = o ? 0 : e.length - 1),
      r < 0 && (r = e.length + r),
      r >= e.length)
    ) {
      if (o) return -1;
      r = e.length - 1;
    } else if (r < 0)
      if (o) r = 0;
      else return -1;
    if ((typeof t == "string" && (t = C.from(t, n)), C.isBuffer(t)))
      return t.length === 0 ? -1 : os(e, t, r, n, o);
    if (typeof t == "number")
      return (
        (t = t & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? o
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : os(e, [t], r, n, o)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function os(e, t, r, n, o) {
    let i = 1,
      s = e.length,
      a = t.length;
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()),
      n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")
    ) {
      if (e.length < 2 || t.length < 2) return -1;
      (i = 2), (s /= 2), (a /= 2), (r /= 2);
    }
    function u(c, y) {
      return i === 1 ? c[y] : c.readUInt16BE(y * i);
    }
    let l;
    if (o) {
      let c = -1;
      for (l = r; l < s; l++)
        if (u(e, l) === u(t, c === -1 ? 0 : l - c)) {
          if ((c === -1 && (c = l), l - c + 1 === a)) return c * i;
        } else c !== -1 && (l -= l - c), (c = -1);
    } else
      for (r + a > s && (r = s - a), l = r; l >= 0; l--) {
        let c = !0;
        for (let y = 0; y < a; y++)
          if (u(e, l + y) !== u(t, y)) {
            c = !1;
            break;
          }
        if (c) return l;
      }
    return -1;
  }
  C.prototype.includes = function (e, t, r) {
    return this.indexOf(e, t, r) !== -1;
  };
  C.prototype.indexOf = function (e, t, r) {
    return fs(this, e, t, r, !0);
  };
  C.prototype.lastIndexOf = function (e, t, r) {
    return fs(this, e, t, r, !1);
  };
  function uc(e, t, r, n) {
    r = Number(r) || 0;
    let o = e.length - r;
    n ? ((n = Number(n)), n > o && (n = o)) : (n = o);
    let i = t.length;
    n > i / 2 && (n = i / 2);
    let s;
    for (s = 0; s < n; ++s) {
      let a = parseInt(t.substr(s * 2, 2), 16);
      if (ko(a)) return s;
      e[r + s] = a;
    }
    return s;
  }
  function lc(e, t, r, n) {
    return pn(Mo(t, e.length - r), e, r, n);
  }
  function cc(e, t, r, n) {
    return pn(Pc(t), e, r, n);
  }
  function pc(e, t, r, n) {
    return pn(xs(t), e, r, n);
  }
  function fc(e, t, r, n) {
    return pn(vc(t, e.length - r), e, r, n);
  }
  C.prototype.write = function (e, t, r, n) {
    if (t === void 0) (n = "utf8"), (r = this.length), (t = 0);
    else if (r === void 0 && typeof t == "string")
      (n = t), (r = this.length), (t = 0);
    else if (isFinite(t))
      (t = t >>> 0),
        isFinite(r)
          ? ((r = r >>> 0), n === void 0 && (n = "utf8"))
          : ((n = r), (r = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    let o = this.length - t;
    if (
      ((r === void 0 || r > o) && (r = o),
      (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    let i = !1;
    for (;;)
      switch (n) {
        case "hex":
          return uc(this, e, t, r);
        case "utf8":
        case "utf-8":
          return lc(this, e, t, r);
        case "ascii":
        case "latin1":
        case "binary":
          return cc(this, e, t, r);
        case "base64":
          return pc(this, e, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return fc(this, e, t, r);
        default:
          if (i) throw new TypeError("Unknown encoding: " + n);
          (n = ("" + n).toLowerCase()), (i = !0);
      }
  };
  C.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function dc(e, t, r) {
    return t === 0 && r === e.length
      ? Co.fromByteArray(e)
      : Co.fromByteArray(e.slice(t, r));
  }
  function ds(e, t, r) {
    r = Math.min(e.length, r);
    let n = [],
      o = t;
    for (; o < r; ) {
      let i = e[o],
        s = null,
        a = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
      if (o + a <= r) {
        let u, l, c, y;
        switch (a) {
          case 1:
            i < 128 && (s = i);
            break;
          case 2:
            (u = e[o + 1]),
              (u & 192) === 128 &&
                ((y = ((i & 31) << 6) | (u & 63)), y > 127 && (s = y));
            break;
          case 3:
            (u = e[o + 1]),
              (l = e[o + 2]),
              (u & 192) === 128 &&
                (l & 192) === 128 &&
                ((y = ((i & 15) << 12) | ((u & 63) << 6) | (l & 63)),
                y > 2047 && (y < 55296 || y > 57343) && (s = y));
            break;
          case 4:
            (u = e[o + 1]),
              (l = e[o + 2]),
              (c = e[o + 3]),
              (u & 192) === 128 &&
                (l & 192) === 128 &&
                (c & 192) === 128 &&
                ((y =
                  ((i & 15) << 18) |
                  ((u & 63) << 12) |
                  ((l & 63) << 6) |
                  (c & 63)),
                y > 65535 && y < 1114112 && (s = y));
        }
      }
      s === null
        ? ((s = 65533), (a = 1))
        : s > 65535 &&
          ((s -= 65536),
          n.push(((s >>> 10) & 1023) | 55296),
          (s = 56320 | (s & 1023))),
        n.push(s),
        (o += a);
    }
    return mc(n);
  }
  var is = 4096;
  function mc(e) {
    let t = e.length;
    if (t <= is) return String.fromCharCode.apply(String, e);
    let r = "",
      n = 0;
    for (; n < t; )
      r += String.fromCharCode.apply(String, e.slice(n, (n += is)));
    return r;
  }
  function gc(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let o = t; o < r; ++o) n += String.fromCharCode(e[o] & 127);
    return n;
  }
  function yc(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let o = t; o < r; ++o) n += String.fromCharCode(e[o]);
    return n;
  }
  function hc(e, t, r) {
    let n = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
    let o = "";
    for (let i = t; i < r; ++i) o += Tc[e[i]];
    return o;
  }
  function bc(e, t, r) {
    let n = e.slice(t, r),
      o = "";
    for (let i = 0; i < n.length - 1; i += 2)
      o += String.fromCharCode(n[i] + n[i + 1] * 256);
    return o;
  }
  C.prototype.slice = function (e, t) {
    let r = this.length;
    (e = ~~e),
      (t = t === void 0 ? r : ~~t),
      e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
      t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
      t < e && (t = e);
    let n = this.subarray(e, t);
    return Object.setPrototypeOf(n, C.prototype), n;
  };
  function le(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > r)
      throw new RangeError("Trying to access beyond buffer length");
  }
  C.prototype.readUintLE = C.prototype.readUIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || le(e, t, this.length);
    let n = this[e],
      o = 1,
      i = 0;
    for (; ++i < t && (o *= 256); ) n += this[e + i] * o;
    return n;
  };
  C.prototype.readUintBE = C.prototype.readUIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || le(e, t, this.length);
    let n = this[e + --t],
      o = 1;
    for (; t > 0 && (o *= 256); ) n += this[e + --t] * o;
    return n;
  };
  C.prototype.readUint8 = C.prototype.readUInt8 = function (e, t) {
    return (e = e >>> 0), t || le(e, 1, this.length), this[e];
  };
  C.prototype.readUint16LE = C.prototype.readUInt16LE = function (e, t) {
    return (
      (e = e >>> 0), t || le(e, 2, this.length), this[e] | (this[e + 1] << 8)
    );
  };
  C.prototype.readUint16BE = C.prototype.readUInt16BE = function (e, t) {
    return (
      (e = e >>> 0), t || le(e, 2, this.length), (this[e] << 8) | this[e + 1]
    );
  };
  C.prototype.readUint32LE = C.prototype.readUInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || le(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
        this[e + 3] * 16777216
    );
  };
  C.prototype.readUint32BE = C.prototype.readUInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || le(e, 4, this.length),
      this[e] * 16777216 +
        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    );
  };
  C.prototype.readBigUInt64LE = pt(function (e) {
    (e = e >>> 0), Gt(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && Er(e, this.length - 8);
    let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      o = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
    return BigInt(n) + (BigInt(o) << BigInt(32));
  });
  C.prototype.readBigUInt64BE = pt(function (e) {
    (e = e >>> 0), Gt(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && Er(e, this.length - 8);
    let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      o = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
    return (BigInt(n) << BigInt(32)) + BigInt(o);
  });
  C.prototype.readIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || le(e, t, this.length);
    let n = this[e],
      o = 1,
      i = 0;
    for (; ++i < t && (o *= 256); ) n += this[e + i] * o;
    return (o *= 128), n >= o && (n -= Math.pow(2, 8 * t)), n;
  };
  C.prototype.readIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || le(e, t, this.length);
    let n = t,
      o = 1,
      i = this[e + --n];
    for (; n > 0 && (o *= 256); ) i += this[e + --n] * o;
    return (o *= 128), i >= o && (i -= Math.pow(2, 8 * t)), i;
  };
  C.prototype.readInt8 = function (e, t) {
    return (
      (e = e >>> 0),
      t || le(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    );
  };
  C.prototype.readInt16LE = function (e, t) {
    (e = e >>> 0), t || le(e, 2, this.length);
    let r = this[e] | (this[e + 1] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  C.prototype.readInt16BE = function (e, t) {
    (e = e >>> 0), t || le(e, 2, this.length);
    let r = this[e + 1] | (this[e] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  C.prototype.readInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || le(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    );
  };
  C.prototype.readInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || le(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    );
  };
  C.prototype.readBigInt64LE = pt(function (e) {
    (e = e >>> 0), Gt(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && Er(e, this.length - 8);
    let n =
      this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
    );
  });
  C.prototype.readBigInt64BE = pt(function (e) {
    (e = e >>> 0), Gt(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && Er(e, this.length - 8);
    let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r)
    );
  });
  C.prototype.readFloatLE = function (e, t) {
    return (
      (e = e >>> 0), t || le(e, 4, this.length), Jt.read(this, e, !0, 23, 4)
    );
  };
  C.prototype.readFloatBE = function (e, t) {
    return (
      (e = e >>> 0), t || le(e, 4, this.length), Jt.read(this, e, !1, 23, 4)
    );
  };
  C.prototype.readDoubleLE = function (e, t) {
    return (
      (e = e >>> 0), t || le(e, 8, this.length), Jt.read(this, e, !0, 52, 8)
    );
  };
  C.prototype.readDoubleBE = function (e, t) {
    return (
      (e = e >>> 0), t || le(e, 8, this.length), Jt.read(this, e, !1, 52, 8)
    );
  };
  function Oe(e, t, r, n, o, i) {
    if (!C.isBuffer(e))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > o || t < i)
      throw new RangeError('"value" argument is out of bounds');
    if (r + n > e.length) throw new RangeError("Index out of range");
  }
  C.prototype.writeUintLE = C.prototype.writeUIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      Oe(this, e, t, r, s, 0);
    }
    let o = 1,
      i = 0;
    for (this[t] = e & 255; ++i < r && (o *= 256); )
      this[t + i] = (e / o) & 255;
    return t + r;
  };
  C.prototype.writeUintBE = C.prototype.writeUIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      Oe(this, e, t, r, s, 0);
    }
    let o = r - 1,
      i = 1;
    for (this[t + o] = e & 255; --o >= 0 && (i *= 256); )
      this[t + o] = (e / i) & 255;
    return t + r;
  };
  C.prototype.writeUint8 = C.prototype.writeUInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Oe(this, e, t, 1, 255, 0),
      (this[t] = e & 255),
      t + 1
    );
  };
  C.prototype.writeUint16LE = C.prototype.writeUInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Oe(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  C.prototype.writeUint16BE = C.prototype.writeUInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Oe(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  C.prototype.writeUint32LE = C.prototype.writeUInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Oe(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    );
  };
  C.prototype.writeUint32BE = C.prototype.writeUInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Oe(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  function ms(e, t, r, n, o) {
    ws(t, n, o, e, r, 7);
    let i = Number(t & BigInt(4294967295));
    (e[r++] = i),
      (i = i >> 8),
      (e[r++] = i),
      (i = i >> 8),
      (e[r++] = i),
      (i = i >> 8),
      (e[r++] = i);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      r
    );
  }
  function gs(e, t, r, n, o) {
    ws(t, n, o, e, r, 7);
    let i = Number(t & BigInt(4294967295));
    (e[r + 7] = i),
      (i = i >> 8),
      (e[r + 6] = i),
      (i = i >> 8),
      (e[r + 5] = i),
      (i = i >> 8),
      (e[r + 4] = i);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r + 3] = s),
      (s = s >> 8),
      (e[r + 2] = s),
      (s = s >> 8),
      (e[r + 1] = s),
      (s = s >> 8),
      (e[r] = s),
      r + 8
    );
  }
  C.prototype.writeBigUInt64LE = pt(function (e, t = 0) {
    return ms(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  C.prototype.writeBigUInt64BE = pt(function (e, t = 0) {
    return gs(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  C.prototype.writeIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      Oe(this, e, t, r, a - 1, -a);
    }
    let o = 0,
      i = 1,
      s = 0;
    for (this[t] = e & 255; ++o < r && (i *= 256); )
      e < 0 && s === 0 && this[t + o - 1] !== 0 && (s = 1),
        (this[t + o] = (((e / i) >> 0) - s) & 255);
    return t + r;
  };
  C.prototype.writeIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      Oe(this, e, t, r, a - 1, -a);
    }
    let o = r - 1,
      i = 1,
      s = 0;
    for (this[t + o] = e & 255; --o >= 0 && (i *= 256); )
      e < 0 && s === 0 && this[t + o + 1] !== 0 && (s = 1),
        (this[t + o] = (((e / i) >> 0) - s) & 255);
    return t + r;
  };
  C.prototype.writeInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Oe(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    );
  };
  C.prototype.writeInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Oe(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  C.prototype.writeInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Oe(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  C.prototype.writeInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Oe(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    );
  };
  C.prototype.writeInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || Oe(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  C.prototype.writeBigInt64LE = pt(function (e, t = 0) {
    return ms(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  });
  C.prototype.writeBigInt64BE = pt(function (e, t = 0) {
    return gs(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  });
  function ys(e, t, r, n, o, i) {
    if (r + n > e.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range");
  }
  function hs(e, t, r, n, o) {
    return (
      (t = +t),
      (r = r >>> 0),
      o || ys(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
      Jt.write(e, t, r, n, 23, 4),
      r + 4
    );
  }
  C.prototype.writeFloatLE = function (e, t, r) {
    return hs(this, e, t, !0, r);
  };
  C.prototype.writeFloatBE = function (e, t, r) {
    return hs(this, e, t, !1, r);
  };
  function bs(e, t, r, n, o) {
    return (
      (t = +t),
      (r = r >>> 0),
      o || ys(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
      Jt.write(e, t, r, n, 52, 8),
      r + 8
    );
  }
  C.prototype.writeDoubleLE = function (e, t, r) {
    return bs(this, e, t, !0, r);
  };
  C.prototype.writeDoubleBE = function (e, t, r) {
    return bs(this, e, t, !1, r);
  };
  C.prototype.copy = function (e, t, r, n) {
    if (!C.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (
      (r || (r = 0),
      !n && n !== 0 && (n = this.length),
      t >= e.length && (t = e.length),
      t || (t = 0),
      n > 0 && n < r && (n = r),
      n === r || e.length === 0 || this.length === 0)
    )
      return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      e.length - t < n - r && (n = e.length - t + r);
    let o = n - r;
    return (
      this === e && typeof Uint8Array.prototype.copyWithin == "function"
        ? this.copyWithin(t, r, n)
        : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
      o
    );
  };
  C.prototype.fill = function (e, t, r, n) {
    if (typeof e == "string") {
      if (
        (typeof t == "string"
          ? ((n = t), (t = 0), (r = this.length))
          : typeof r == "string" && ((n = r), (r = this.length)),
        n !== void 0 && typeof n != "string")
      )
        throw new TypeError("encoding must be a string");
      if (typeof n == "string" && !C.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
      if (e.length === 1) {
        let i = e.charCodeAt(0);
        ((n === "utf8" && i < 128) || n === "latin1") && (e = i);
      }
    } else
      typeof e == "number"
        ? (e = e & 255)
        : typeof e == "boolean" && (e = Number(e));
    if (t < 0 || this.length < t || this.length < r)
      throw new RangeError("Out of range index");
    if (r <= t) return this;
    (t = t >>> 0), (r = r === void 0 ? this.length : r >>> 0), e || (e = 0);
    let o;
    if (typeof e == "number") for (o = t; o < r; ++o) this[o] = e;
    else {
      let i = C.isBuffer(e) ? e : C.from(e, n),
        s = i.length;
      if (s === 0)
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"'
        );
      for (o = 0; o < r - t; ++o) this[o + t] = i[o % s];
    }
    return this;
  };
  var Qt = {};
  function Io(e, t, r) {
    Qt[e] = class extends r {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${e}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return e;
      }
      set code(n) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  Io(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (e) {
      return e
        ? `${e} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  );
  Io(
    "ERR_INVALID_ARG_TYPE",
    function (e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    },
    TypeError
  );
  Io(
    "ERR_OUT_OF_RANGE",
    function (e, t, r) {
      let n = `The value of "${e}" is out of range.`,
        o = r;
      return (
        Number.isInteger(r) && Math.abs(r) > 2 ** 32
          ? (o = ss(String(r)))
          : typeof r == "bigint" &&
            ((o = String(r)),
            (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
              (o = ss(o)),
            (o += "n")),
        (n += ` It must be ${t}. Received ${o}`),
        n
      );
    },
    RangeError
  );
  function ss(e) {
    let t = "",
      r = e.length,
      n = e[0] === "-" ? 1 : 0;
    for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
    return `${e.slice(0, r)}${t}`;
  }
  function wc(e, t, r) {
    Gt(t, "offset"),
      (e[t] === void 0 || e[t + r] === void 0) && Er(t, e.length - (r + 1));
  }
  function ws(e, t, r, n, o, i) {
    if (e > r || e < t) {
      let s = typeof t == "bigint" ? "n" : "",
        a;
      throw (
        (i > 3
          ? t === 0 || t === BigInt(0)
            ? (a = `>= 0${s} and < 2${s} ** ${(i + 1) * 8}${s}`)
            : (a = `>= -(2${s} ** ${(i + 1) * 8 - 1}${s}) and < 2 ** ${
                (i + 1) * 8 - 1
              }${s}`)
          : (a = `>= ${t}${s} and <= ${r}${s}`),
        new Qt.ERR_OUT_OF_RANGE("value", a, e))
      );
    }
    wc(n, o, i);
  }
  function Gt(e, t) {
    if (typeof e != "number") throw new Qt.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
  function Er(e, t, r) {
    throw Math.floor(e) !== e
      ? (Gt(e, r), new Qt.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
      : t < 0
      ? new Qt.ERR_BUFFER_OUT_OF_BOUNDS()
      : new Qt.ERR_OUT_OF_RANGE(
          r || "offset",
          `>= ${r ? 1 : 0} and <= ${t}`,
          e
        );
  }
  var xc = /[^+/0-9A-Za-z-_]/g;
  function Ec(e) {
    if (((e = e.split("=")[0]), (e = e.trim().replace(xc, "")), e.length < 2))
      return "";
    for (; e.length % 4 !== 0; ) e = e + "=";
    return e;
  }
  function Mo(e, t) {
    t = t || 1 / 0;
    let r,
      n = e.length,
      o = null,
      i = [];
    for (let s = 0; s < n; ++s) {
      if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
        if (!o) {
          if (r > 56319) {
            (t -= 3) > -1 && i.push(239, 191, 189);
            continue;
          } else if (s + 1 === n) {
            (t -= 3) > -1 && i.push(239, 191, 189);
            continue;
          }
          o = r;
          continue;
        }
        if (r < 56320) {
          (t -= 3) > -1 && i.push(239, 191, 189), (o = r);
          continue;
        }
        r = (((o - 55296) << 10) | (r - 56320)) + 65536;
      } else o && (t -= 3) > -1 && i.push(239, 191, 189);
      if (((o = null), r < 128)) {
        if ((t -= 1) < 0) break;
        i.push(r);
      } else if (r < 2048) {
        if ((t -= 2) < 0) break;
        i.push((r >> 6) | 192, (r & 63) | 128);
      } else if (r < 65536) {
        if ((t -= 3) < 0) break;
        i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (r & 63) | 128);
      } else if (r < 1114112) {
        if ((t -= 4) < 0) break;
        i.push(
          (r >> 18) | 240,
          ((r >> 12) & 63) | 128,
          ((r >> 6) & 63) | 128,
          (r & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return i;
  }
  function Pc(e) {
    let t = [];
    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
    return t;
  }
  function vc(e, t) {
    let r,
      n,
      o,
      i = [];
    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
      (r = e.charCodeAt(s)), (n = r >> 8), (o = r % 256), i.push(o), i.push(n);
    return i;
  }
  function xs(e) {
    return Co.toByteArray(Ec(e));
  }
  function pn(e, t, r, n) {
    let o;
    for (o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o)
      t[o + r] = e[o];
    return o;
  }
  function Ge(e, t) {
    return (
      e instanceof t ||
      (e != null &&
        e.constructor != null &&
        e.constructor.name != null &&
        e.constructor.name === t.name)
    );
  }
  function ko(e) {
    return e !== e;
  }
  var Tc = (function () {
    let e = "0123456789abcdef",
      t = new Array(256);
    for (let r = 0; r < 16; ++r) {
      let n = r * 16;
      for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
    }
    return t;
  })();
  function pt(e) {
    return typeof BigInt > "u" ? Ac : e;
  }
  function Ac() {
    throw new Error("BigInt not supported");
  }
});
var x,
  g = Kt(() => {
    "use strict";
    x = _e(Es());
  });
var Ko = ne((G) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  var oe = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    ks = oe((e, t) => {
      "use strict";
      t.exports = function () {
        if (
          typeof Symbol != "function" ||
          typeof Object.getOwnPropertySymbols != "function"
        )
          return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var r = {},
          n = Symbol("test"),
          o = Object(n);
        if (
          typeof n == "string" ||
          Object.prototype.toString.call(n) !== "[object Symbol]" ||
          Object.prototype.toString.call(o) !== "[object Symbol]"
        )
          return !1;
        var i = 42;
        r[n] = i;
        for (n in r) return !1;
        if (
          (typeof Object.keys == "function" && Object.keys(r).length !== 0) ||
          (typeof Object.getOwnPropertyNames == "function" &&
            Object.getOwnPropertyNames(r).length !== 0)
        )
          return !1;
        var s = Object.getOwnPropertySymbols(r);
        if (
          s.length !== 1 ||
          s[0] !== n ||
          !Object.prototype.propertyIsEnumerable.call(r, n)
        )
          return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var a = Object.getOwnPropertyDescriptor(r, n);
          if (a.value !== i || a.enumerable !== !0) return !1;
        }
        return !0;
      };
    }),
    hn = oe((e, t) => {
      "use strict";
      var r = ks();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    }),
    _c = oe((e, t) => {
      "use strict";
      var r = typeof Symbol < "u" && Symbol,
        n = ks();
      t.exports = function () {
        return typeof r != "function" ||
          typeof Symbol != "function" ||
          typeof r("foo") != "symbol" ||
          typeof Symbol("bar") != "symbol"
          ? !1
          : n();
      };
    }),
    Cc = oe((e, t) => {
      "use strict";
      var r = { foo: {} },
        n = Object;
      t.exports = function () {
        return (
          { __proto__: r }.foo === r.foo && !({ __proto__: null } instanceof n)
        );
      };
    }),
    Sc = oe((e, t) => {
      "use strict";
      var r = "Function.prototype.bind called on incompatible ",
        n = Object.prototype.toString,
        o = Math.max,
        i = "[object Function]",
        s = function (l, c) {
          for (var y = [], h = 0; h < l.length; h += 1) y[h] = l[h];
          for (var A = 0; A < c.length; A += 1) y[A + l.length] = c[A];
          return y;
        },
        a = function (l, c) {
          for (var y = [], h = c || 0, A = 0; h < l.length; h += 1, A += 1)
            y[A] = l[h];
          return y;
        },
        u = function (l, c) {
          for (var y = "", h = 0; h < l.length; h += 1)
            (y += l[h]), h + 1 < l.length && (y += c);
          return y;
        };
      t.exports = function (l) {
        var c = this;
        if (typeof c != "function" || n.apply(c) !== i)
          throw new TypeError(r + c);
        for (
          var y = a(arguments, 1),
            h,
            A = function () {
              if (this instanceof h) {
                var F = c.apply(this, s(y, arguments));
                return Object(F) === F ? F : this;
              }
              return c.apply(l, s(y, arguments));
            },
            _ = o(0, c.length - y.length),
            T = [],
            S = 0;
          S < _;
          S++
        )
          T[S] = "$" + S;
        if (
          ((h = w(
            "binder",
            "return function (" +
              u(T, ",") +
              "){ return binder.apply(this,arguments); }"
          )(A)),
          c.prototype)
        ) {
          var I = function () {};
          (I.prototype = c.prototype),
            (h.prototype = new I()),
            (I.prototype = null);
        }
        return h;
      };
    }),
    jo = oe((e, t) => {
      "use strict";
      var r = Sc();
      t.exports = w.prototype.bind || r;
    }),
    Mc = oe((e, t) => {
      "use strict";
      var r = jo();
      t.exports = r.call(w.call, Object.prototype.hasOwnProperty);
    }),
    Uo = oe((e, t) => {
      "use strict";
      var r,
        n = SyntaxError,
        o = w,
        i = TypeError,
        s = function (H) {
          try {
            return o('"use strict"; return (' + H + ").constructor;")();
          } catch (W) {}
        },
        a = Object.getOwnPropertyDescriptor;
      if (a)
        try {
          a({}, "");
        } catch (H) {
          a = null;
        }
      var u = function () {
          throw new i();
        },
        l = a
          ? (function () {
              try {
                return arguments.callee, u;
              } catch (H) {
                try {
                  return a(arguments, "callee").get;
                } catch (W) {
                  return u;
                }
              }
            })()
          : u,
        c = _c()(),
        y = Cc()(),
        h =
          Object.getPrototypeOf ||
          (y
            ? function (H) {
                return H.__proto__;
              }
            : null),
        A = {},
        _ = typeof Uint8Array > "u" || !h ? r : h(Uint8Array),
        T = {
          "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
          "%ArrayIteratorPrototype%": c && h ? h([][Symbol.iterator]()) : r,
          "%AsyncFromSyncIteratorPrototype%": r,
          "%AsyncFunction%": A,
          "%AsyncGenerator%": A,
          "%AsyncGeneratorFunction%": A,
          "%AsyncIteratorPrototype%": A,
          "%Atomics%": typeof Atomics > "u" ? r : Atomics,
          "%BigInt%": typeof BigInt > "u" ? r : BigInt,
          "%BigInt64Array%": typeof BigInt64Array > "u" ? r : BigInt64Array,
          "%BigUint64Array%": typeof BigUint64Array > "u" ? r : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": typeof DataView > "u" ? r : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": void 0,
          "%EvalError%": EvalError,
          "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
          "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
          "%FinalizationRegistry%":
            typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
          "%Function%": o,
          "%GeneratorFunction%": A,
          "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
          "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
          "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": c && h ? h(h([][Symbol.iterator]())) : r,
          "%JSON%": typeof JSON == "object" ? JSON : r,
          "%Map%": typeof Map > "u" ? r : Map,
          "%MapIteratorPrototype%":
            typeof Map > "u" || !c || !h ? r : h(new Map()[Symbol.iterator]()),
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": typeof Promise > "u" ? r : Promise,
          "%Proxy%": typeof Proxy > "u" ? r : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": typeof Reflect > "u" ? r : Reflect,
          "%RegExp%": RegExp,
          "%Set%": typeof Set > "u" ? r : Set,
          "%SetIteratorPrototype%":
            typeof Set > "u" || !c || !h ? r : h(new Set()[Symbol.iterator]()),
          "%SharedArrayBuffer%":
            typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": c && h ? h(""[Symbol.iterator]()) : r,
          "%Symbol%": c ? Symbol : r,
          "%SyntaxError%": n,
          "%ThrowTypeError%": l,
          "%TypedArray%": _,
          "%TypeError%": i,
          "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
          "%Uint8ClampedArray%":
            typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
          "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
          "%WeakRef%": typeof E > "u" ? r : E,
          "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
        };
      if (h)
        try {
          null.error;
        } catch (H) {
          (S = h(h(H))), (T["%Error.prototype%"] = S);
        }
      var S,
        I = function H(W) {
          var N;
          if (W === "%AsyncFunction%") N = s("async function () {}");
          else if (W === "%GeneratorFunction%") N = s("function* () {}");
          else if (W === "%AsyncGeneratorFunction%")
            N = s("async function* () {}");
          else if (W === "%AsyncGenerator%") {
            var me = H("%AsyncGeneratorFunction%");
            me && (N = me.prototype);
          } else if (W === "%AsyncIteratorPrototype%") {
            var ge = H("%AsyncGenerator%");
            ge && h && (N = h(ge.prototype));
          }
          return (T[W] = N), N;
        },
        F = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        O = jo(),
        k = Mc(),
        K = O.call(w.call, Array.prototype.concat),
        Q = O.call(w.apply, Array.prototype.splice),
        je = O.call(w.call, String.prototype.replace),
        Y = O.call(w.call, String.prototype.slice),
        ie = O.call(w.call, RegExp.prototype.exec),
        Fe =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        se = /\\(\\)?/g,
        De = function (H) {
          var W = Y(H, 0, 1),
            N = Y(H, -1);
          if (W === "%" && N !== "%")
            throw new n("invalid intrinsic syntax, expected closing `%`");
          if (N === "%" && W !== "%")
            throw new n("invalid intrinsic syntax, expected opening `%`");
          var me = [];
          return (
            je(H, Fe, function (ge, lt, ae, _t) {
              me[me.length] = ae ? je(_t, se, "$1") : lt || ge;
            }),
            me
          );
        },
        ut = function (H, W) {
          var N = H,
            me;
          if ((k(F, N) && ((me = F[N]), (N = "%" + me[0] + "%")), k(T, N))) {
            var ge = T[N];
            if ((ge === A && (ge = I(N)), typeof ge > "u" && !W))
              throw new i(
                "intrinsic " +
                  H +
                  " exists, but is not available. Please file an issue!"
              );
            return { alias: me, name: N, value: ge };
          }
          throw new n("intrinsic " + H + " does not exist!");
        };
      t.exports = function (H, W) {
        if (typeof H != "string" || H.length === 0)
          throw new i("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof W != "boolean")
          throw new i('"allowMissing" argument must be a boolean');
        if (ie(/^%?[^%]*%?$/, H) === null)
          throw new n(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
          );
        var N = De(H),
          me = N.length > 0 ? N[0] : "",
          ge = ut("%" + me + "%", W),
          lt = ge.name,
          ae = ge.value,
          _t = !1,
          ct = ge.alias;
        ct && ((me = ct[0]), Q(N, K([0, 1], ct)));
        for (var Ct = 1, tt = !0; Ct < N.length; Ct += 1) {
          var Ae = N[Ct],
            St = Y(Ae, 0, 1),
            qt = Y(Ae, -1);
          if (
            (St === '"' ||
              St === "'" ||
              St === "`" ||
              qt === '"' ||
              qt === "'" ||
              qt === "`") &&
            St !== qt
          )
            throw new n("property names with quotes must have matching quotes");
          if (
            ((Ae === "constructor" || !tt) && (_t = !0),
            (me += "." + Ae),
            (lt = "%" + me + "%"),
            k(T, lt))
          )
            ae = T[lt];
          else if (ae != null) {
            if (!(Ae in ae)) {
              if (!W)
                throw new i(
                  "base intrinsic for " +
                    H +
                    " exists, but the property is not available."
                );
              return;
            }
            if (a && Ct + 1 >= N.length) {
              var Vt = a(ae, Ae);
              (tt = !!Vt),
                tt && "get" in Vt && !("originalValue" in Vt.get)
                  ? (ae = Vt.get)
                  : (ae = ae[Ae]);
            } else (tt = k(ae, Ae)), (ae = ae[Ae]);
            tt && !_t && (T[lt] = ae);
          }
        }
        return ae;
      };
    }),
    Rc = oe((e, t) => {
      "use strict";
      var r = jo(),
        n = Uo(),
        o = n("%Function.prototype.apply%"),
        i = n("%Function.prototype.call%"),
        s = n("%Reflect.apply%", !0) || r.call(i, o),
        a = n("%Object.getOwnPropertyDescriptor%", !0),
        u = n("%Object.defineProperty%", !0),
        l = n("%Math.max%");
      if (u)
        try {
          u({}, "a", { value: 1 });
        } catch (y) {
          u = null;
        }
      t.exports = function (y) {
        var h = s(r, i, arguments);
        if (a && u) {
          var A = a(h, "length");
          A.configurable &&
            u(h, "length", {
              value: 1 + l(0, y.length - (arguments.length - 1)),
            });
        }
        return h;
      };
      var c = function () {
        return s(r, o, arguments);
      };
      u ? u(t.exports, "apply", { value: c }) : (t.exports.apply = c);
    }),
    $o = oe((e, t) => {
      "use strict";
      var r = Uo(),
        n = Rc(),
        o = n(r("String.prototype.indexOf"));
      t.exports = function (i, s) {
        var a = r(i, !!s);
        return typeof a == "function" && o(i, ".prototype.") > -1 ? n(a) : a;
      };
    }),
    Oc = oe((e, t) => {
      "use strict";
      var r = hn()(),
        n = $o(),
        o = n("Object.prototype.toString"),
        i = function (u) {
          return r && u && typeof u == "object" && Symbol.toStringTag in u
            ? !1
            : o(u) === "[object Arguments]";
        },
        s = function (u) {
          return i(u)
            ? !0
            : u !== null &&
                typeof u == "object" &&
                typeof u.length == "number" &&
                u.length >= 0 &&
                o(u) !== "[object Array]" &&
                o(u.callee) === "[object Function]";
        },
        a = (function () {
          return i(arguments);
        })();
      (i.isLegacyArguments = s), (t.exports = a ? i : s);
    }),
    Ic = oe((e, t) => {
      "use strict";
      var r = Object.prototype.toString,
        n = w.prototype.toString,
        o = /^\s*(?:function)?\*/,
        i = hn()(),
        s = Object.getPrototypeOf,
        a = function () {
          if (!i) return !1;
          try {
            return w("return function*() {}")();
          } catch (l) {}
        },
        u;
      t.exports = function (l) {
        if (typeof l != "function") return !1;
        if (o.test(n.call(l))) return !0;
        if (!i) {
          var c = r.call(l);
          return c === "[object GeneratorFunction]";
        }
        if (!s) return !1;
        if (typeof u > "u") {
          var y = a();
          u = y ? s(y) : !1;
        }
        return s(l) === u;
      };
    }),
    kc = oe((e, t) => {
      "use strict";
      var r = w.prototype.toString,
        n = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
        o,
        i;
      if (typeof n == "function" && typeof Object.defineProperty == "function")
        try {
          (o = Object.defineProperty({}, "length", {
            get: function () {
              throw i;
            },
          })),
            (i = {}),
            n(
              function () {
                throw 42;
              },
              null,
              o
            );
        } catch (k) {
          k !== i && (n = null);
        }
      else n = null;
      var s = /^\s*class\b/,
        a = function (k) {
          try {
            var K = r.call(k);
            return s.test(K);
          } catch (Q) {
            return !1;
          }
        },
        u = function (k) {
          try {
            return a(k) ? !1 : (r.call(k), !0);
          } catch (K) {
            return !1;
          }
        },
        l = Object.prototype.toString,
        c = "[object Object]",
        y = "[object Function]",
        h = "[object GeneratorFunction]",
        A = "[object HTMLAllCollection]",
        _ = "[object HTML document.all class]",
        T = "[object HTMLCollection]",
        S = typeof Symbol == "function" && !!Symbol.toStringTag,
        I = !(0 in [,]),
        F = function () {
          return !1;
        };
      typeof document == "object" &&
        ((O = document.all),
        l.call(O) === l.call(document.all) &&
          (F = function (k) {
            if ((I || !k) && (typeof k > "u" || typeof k == "object"))
              try {
                var K = l.call(k);
                return (
                  (K === A || K === _ || K === T || K === c) && k("") == null
                );
              } catch (Q) {}
            return !1;
          }));
      var O;
      t.exports = n
        ? function (k) {
            if (F(k)) return !0;
            if (!k || (typeof k != "function" && typeof k != "object"))
              return !1;
            try {
              n(k, null, o);
            } catch (K) {
              if (K !== i) return !1;
            }
            return !a(k) && u(k);
          }
        : function (k) {
            if (F(k)) return !0;
            if (!k || (typeof k != "function" && typeof k != "object"))
              return !1;
            if (S) return u(k);
            if (a(k)) return !1;
            var K = l.call(k);
            return K !== y && K !== h && !/^\[object HTML/.test(K) ? !1 : u(k);
          };
    }),
    Fs = oe((e, t) => {
      "use strict";
      var r = kc(),
        n = Object.prototype.toString,
        o = Object.prototype.hasOwnProperty,
        i = function (l, c, y) {
          for (var h = 0, A = l.length; h < A; h++)
            o.call(l, h) && (y == null ? c(l[h], h, l) : c.call(y, l[h], h, l));
        },
        s = function (l, c, y) {
          for (var h = 0, A = l.length; h < A; h++)
            y == null ? c(l.charAt(h), h, l) : c.call(y, l.charAt(h), h, l);
        },
        a = function (l, c, y) {
          for (var h in l)
            o.call(l, h) && (y == null ? c(l[h], h, l) : c.call(y, l[h], h, l));
        },
        u = function (l, c, y) {
          if (!r(c)) throw new TypeError("iterator must be a function");
          var h;
          arguments.length >= 3 && (h = y),
            n.call(l) === "[object Array]"
              ? i(l, c, h)
              : typeof l == "string"
              ? s(l, c, h)
              : a(l, c, h);
        };
      t.exports = u;
    }),
    Ds = oe((e, t) => {
      "use strict";
      var r = [
          "BigInt64Array",
          "BigUint64Array",
          "Float32Array",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Uint8Array",
          "Uint8ClampedArray",
        ],
        n = typeof globalThis > "u" ? global : globalThis;
      t.exports = function () {
        for (var o = [], i = 0; i < r.length; i++)
          typeof n[r[i]] == "function" && (o[o.length] = r[i]);
        return o;
      };
    }),
    Ns = oe((e, t) => {
      "use strict";
      var r = Uo(),
        n = r("%Object.getOwnPropertyDescriptor%", !0);
      if (n)
        try {
          n([], "length");
        } catch (o) {
          n = null;
        }
      t.exports = n;
    }),
    Ls = oe((e, t) => {
      "use strict";
      var r = Fs(),
        n = Ds(),
        o = $o(),
        i = o("Object.prototype.toString"),
        s = hn()(),
        a = Ns(),
        u = typeof globalThis > "u" ? global : globalThis,
        l = n(),
        c =
          o("Array.prototype.indexOf", !0) ||
          function (T, S) {
            for (var I = 0; I < T.length; I += 1) if (T[I] === S) return I;
            return -1;
          },
        y = o("String.prototype.slice"),
        h = {},
        A = Object.getPrototypeOf;
      s &&
        a &&
        A &&
        r(l, function (T) {
          var S = new u[T]();
          if (Symbol.toStringTag in S) {
            var I = A(S),
              F = a(I, Symbol.toStringTag);
            if (!F) {
              var O = A(I);
              F = a(O, Symbol.toStringTag);
            }
            h[T] = F.get;
          }
        });
      var _ = function (T) {
        var S = !1;
        return (
          r(h, function (I, F) {
            if (!S)
              try {
                S = I.call(T) === F;
              } catch (O) {}
          }),
          S
        );
      };
      t.exports = function (T) {
        if (!T || typeof T != "object") return !1;
        if (!s || !(Symbol.toStringTag in T)) {
          var S = y(i(T), 8, -1);
          return c(l, S) > -1;
        }
        return a ? _(T) : !1;
      };
    }),
    Fc = oe((e, t) => {
      "use strict";
      var r = Fs(),
        n = Ds(),
        o = $o(),
        i = Ns(),
        s = o("Object.prototype.toString"),
        a = hn()(),
        u = typeof globalThis > "u" ? global : globalThis,
        l = n(),
        c = o("String.prototype.slice"),
        y = {},
        h = Object.getPrototypeOf;
      a &&
        i &&
        h &&
        r(l, function (T) {
          if (typeof u[T] == "function") {
            var S = new u[T]();
            if (Symbol.toStringTag in S) {
              var I = h(S),
                F = i(I, Symbol.toStringTag);
              if (!F) {
                var O = h(I);
                F = i(O, Symbol.toStringTag);
              }
              y[T] = F.get;
            }
          }
        });
      var A = function (T) {
          var S = !1;
          return (
            r(y, function (I, F) {
              if (!S)
                try {
                  var O = I.call(T);
                  O === F && (S = O);
                } catch (k) {}
            }),
            S
          );
        },
        _ = Ls();
      t.exports = function (T) {
        return _(T)
          ? !a || !(Symbol.toStringTag in T)
            ? c(s(T), 8, -1)
            : A(T)
          : !1;
      };
    }),
    Dc = oe((e) => {
      "use strict";
      var t = Oc(),
        r = Ic(),
        n = Fc(),
        o = Ls();
      function i(R) {
        return R.call.bind(R);
      }
      var s = typeof BigInt < "u",
        a = typeof Symbol < "u",
        u = i(Object.prototype.toString),
        l = i(Number.prototype.valueOf),
        c = i(String.prototype.valueOf),
        y = i(Boolean.prototype.valueOf);
      s && (h = i(BigInt.prototype.valueOf));
      var h;
      a && (A = i(Symbol.prototype.valueOf));
      var A;
      function _(R, Jl) {
        if (typeof R != "object") return !1;
        try {
          return Jl(R), !0;
        } catch (Ry) {
          return !1;
        }
      }
      (e.isArgumentsObject = t),
        (e.isGeneratorFunction = r),
        (e.isTypedArray = o);
      function T(R) {
        return (
          (typeof Promise < "u" && R instanceof Promise) ||
          (R !== null &&
            typeof R == "object" &&
            typeof R.then == "function" &&
            typeof R.catch == "function")
        );
      }
      e.isPromise = T;
      function S(R) {
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView
          ? ArrayBuffer.isView(R)
          : o(R) || Ct(R);
      }
      e.isArrayBufferView = S;
      function I(R) {
        return n(R) === "Uint8Array";
      }
      e.isUint8Array = I;
      function F(R) {
        return n(R) === "Uint8ClampedArray";
      }
      e.isUint8ClampedArray = F;
      function O(R) {
        return n(R) === "Uint16Array";
      }
      e.isUint16Array = O;
      function k(R) {
        return n(R) === "Uint32Array";
      }
      e.isUint32Array = k;
      function K(R) {
        return n(R) === "Int8Array";
      }
      e.isInt8Array = K;
      function Q(R) {
        return n(R) === "Int16Array";
      }
      e.isInt16Array = Q;
      function je(R) {
        return n(R) === "Int32Array";
      }
      e.isInt32Array = je;
      function Y(R) {
        return n(R) === "Float32Array";
      }
      e.isFloat32Array = Y;
      function ie(R) {
        return n(R) === "Float64Array";
      }
      e.isFloat64Array = ie;
      function Fe(R) {
        return n(R) === "BigInt64Array";
      }
      e.isBigInt64Array = Fe;
      function se(R) {
        return n(R) === "BigUint64Array";
      }
      e.isBigUint64Array = se;
      function De(R) {
        return u(R) === "[object Map]";
      }
      De.working = typeof Map < "u" && De(new Map());
      function ut(R) {
        return typeof Map > "u" ? !1 : De.working ? De(R) : R instanceof Map;
      }
      e.isMap = ut;
      function H(R) {
        return u(R) === "[object Set]";
      }
      H.working = typeof Set < "u" && H(new Set());
      function W(R) {
        return typeof Set > "u" ? !1 : H.working ? H(R) : R instanceof Set;
      }
      e.isSet = W;
      function N(R) {
        return u(R) === "[object WeakMap]";
      }
      N.working = typeof WeakMap < "u" && N(new WeakMap());
      function me(R) {
        return typeof WeakMap > "u"
          ? !1
          : N.working
          ? N(R)
          : R instanceof WeakMap;
      }
      e.isWeakMap = me;
      function ge(R) {
        return u(R) === "[object WeakSet]";
      }
      ge.working = typeof WeakSet < "u" && ge(new WeakSet());
      function lt(R) {
        return ge(R);
      }
      e.isWeakSet = lt;
      function ae(R) {
        return u(R) === "[object ArrayBuffer]";
      }
      ae.working = typeof ArrayBuffer < "u" && ae(new ArrayBuffer());
      function _t(R) {
        return typeof ArrayBuffer > "u"
          ? !1
          : ae.working
          ? ae(R)
          : R instanceof ArrayBuffer;
      }
      e.isArrayBuffer = _t;
      function ct(R) {
        return u(R) === "[object DataView]";
      }
      ct.working =
        typeof ArrayBuffer < "u" &&
        typeof DataView < "u" &&
        ct(new DataView(new ArrayBuffer(1), 0, 1));
      function Ct(R) {
        return typeof DataView > "u"
          ? !1
          : ct.working
          ? ct(R)
          : R instanceof DataView;
      }
      e.isDataView = Ct;
      var tt = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
      function Ae(R) {
        return u(R) === "[object SharedArrayBuffer]";
      }
      function St(R) {
        return typeof tt > "u"
          ? !1
          : (typeof Ae.working > "u" && (Ae.working = Ae(new tt())),
            Ae.working ? Ae(R) : R instanceof tt);
      }
      e.isSharedArrayBuffer = St;
      function qt(R) {
        return u(R) === "[object AsyncFunction]";
      }
      e.isAsyncFunction = qt;
      function Vt(R) {
        return u(R) === "[object Map Iterator]";
      }
      e.isMapIterator = Vt;
      function $l(R) {
        return u(R) === "[object Set Iterator]";
      }
      e.isSetIterator = $l;
      function ql(R) {
        return u(R) === "[object Generator]";
      }
      e.isGeneratorObject = ql;
      function Vl(R) {
        return u(R) === "[object WebAssembly.Module]";
      }
      e.isWebAssemblyCompiledModule = Vl;
      function Yi(R) {
        return _(R, l);
      }
      e.isNumberObject = Yi;
      function Zi(R) {
        return _(R, c);
      }
      e.isStringObject = Zi;
      function Xi(R) {
        return _(R, y);
      }
      e.isBooleanObject = Xi;
      function es(R) {
        return s && _(R, h);
      }
      e.isBigIntObject = es;
      function ts(R) {
        return a && _(R, A);
      }
      e.isSymbolObject = ts;
      function Kl(R) {
        return Yi(R) || Zi(R) || Xi(R) || es(R) || ts(R);
      }
      e.isBoxedPrimitive = Kl;
      function Ql(R) {
        return typeof Uint8Array < "u" && (_t(R) || St(R));
      }
      (e.isAnyArrayBuffer = Ql),
        ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (
          R
        ) {
          Object.defineProperty(e, R, {
            enumerable: !1,
            value: function () {
              throw new Error(R + " is not supported in userland");
            },
          });
        });
    }),
    Nc = oe((e, t) => {
      t.exports = function (r) {
        return r instanceof x.Buffer;
      };
    }),
    Lc = oe((e, t) => {
      typeof Object.create == "function"
        ? (t.exports = function (r, n) {
            n &&
              ((r.super_ = n),
              (r.prototype = Object.create(n.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (t.exports = function (r, n) {
            if (n) {
              r.super_ = n;
              var o = function () {};
              (o.prototype = n.prototype),
                (r.prototype = new o()),
                (r.prototype.constructor = r);
            }
          });
    }),
    Bs =
      Object.getOwnPropertyDescriptors ||
      function (e) {
        for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++)
          r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
        return r;
      },
    Bc = /%[sdj%]/g;
  G.format = function (e) {
    if (!wn(e)) {
      for (var t = [], r = 0; r < arguments.length; r++)
        t.push(dt(arguments[r]));
      return t.join(" ");
    }
    for (
      var r = 1,
        n = arguments,
        o = n.length,
        i = String(e).replace(Bc, function (u) {
          if (u === "%%") return "%";
          if (r >= o) return u;
          switch (u) {
            case "%s":
              return String(n[r++]);
            case "%d":
              return Number(n[r++]);
            case "%j":
              try {
                return JSON.stringify(n[r++]);
              } catch (l) {
                return "[Circular]";
              }
            default:
              return u;
          }
        }),
        s = n[r];
      r < o;
      s = n[++r]
    )
      bn(s) || !Ht(s) ? (i += " " + s) : (i += " " + dt(s));
    return i;
  };
  G.deprecate = function (e, t) {
    if (typeof b < "u" && b.noDeprecation === !0) return e;
    if (typeof b > "u")
      return function () {
        return G.deprecate(e, t).apply(this, arguments);
      };
    var r = !1;
    function n() {
      if (!r) {
        if (b.throwDeprecation) throw new Error(t);
        b.traceDeprecation ? console.trace(t) : console.error(t), (r = !0);
      }
      return e.apply(this, arguments);
    }
    return n;
  };
  var fn = {},
    js = /^$/;
  b.env.NODE_DEBUG &&
    ((dn = b.env.NODE_DEBUG),
    (dn = dn
      .replace(/[|\\{}()[\]^$+?.]/g, "\\$&")
      .replace(/\*/g, ".*")
      .replace(/,/g, "$|^")
      .toUpperCase()),
    (js = new RegExp("^" + dn + "$", "i")));
  var dn;
  G.debuglog = function (e) {
    if (((e = e.toUpperCase()), !fn[e]))
      if (js.test(e)) {
        var t = b.pid;
        fn[e] = function () {
          var r = G.format.apply(G, arguments);
          console.error("%s %d: %s", e, t, r);
        };
      } else fn[e] = function () {};
    return fn[e];
  };
  function dt(e, t) {
    var r = { seen: [], stylize: Uc };
    return (
      arguments.length >= 3 && (r.depth = arguments[2]),
      arguments.length >= 4 && (r.colors = arguments[3]),
      qo(t) ? (r.showHidden = t) : t && G._extend(r, t),
      Ot(r.showHidden) && (r.showHidden = !1),
      Ot(r.depth) && (r.depth = 2),
      Ot(r.colors) && (r.colors = !1),
      Ot(r.customInspect) && (r.customInspect = !0),
      r.colors && (r.stylize = jc),
      gn(r, e, r.depth)
    );
  }
  G.inspect = dt;
  dt.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39],
  };
  dt.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red",
  };
  function jc(e, t) {
    var r = dt.styles[t];
    return r
      ? "\x1B[" + dt.colors[r][0] + "m" + e + "\x1B[" + dt.colors[r][1] + "m"
      : e;
  }
  function Uc(e, t) {
    return e;
  }
  function $c(e) {
    var t = {};
    return (
      e.forEach(function (r, n) {
        t[r] = !0;
      }),
      t
    );
  }
  function gn(e, t, r) {
    if (
      e.customInspect &&
      t &&
      mn(t.inspect) &&
      t.inspect !== G.inspect &&
      !(t.constructor && t.constructor.prototype === t)
    ) {
      var n = t.inspect(r, e);
      return wn(n) || (n = gn(e, n, r)), n;
    }
    var o = qc(e, t);
    if (o) return o;
    var i = Object.keys(t),
      s = $c(i);
    if (
      (e.showHidden && (i = Object.getOwnPropertyNames(t)),
      vr(t) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0))
    )
      return No(t);
    if (i.length === 0) {
      if (mn(t)) {
        var a = t.name ? ": " + t.name : "";
        return e.stylize("[Function" + a + "]", "special");
      }
      if (Pr(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
      if (yn(t)) return e.stylize(Date.prototype.toString.call(t), "date");
      if (vr(t)) return No(t);
    }
    var u = "",
      l = !1,
      c = ["{", "}"];
    if ((Us(t) && ((l = !0), (c = ["[", "]"])), mn(t))) {
      var y = t.name ? ": " + t.name : "";
      u = " [Function" + y + "]";
    }
    if (
      (Pr(t) && (u = " " + RegExp.prototype.toString.call(t)),
      yn(t) && (u = " " + Date.prototype.toUTCString.call(t)),
      vr(t) && (u = " " + No(t)),
      i.length === 0 && (!l || t.length == 0))
    )
      return c[0] + u + c[1];
    if (r < 0)
      return Pr(t)
        ? e.stylize(RegExp.prototype.toString.call(t), "regexp")
        : e.stylize("[Object]", "special");
    e.seen.push(t);
    var h;
    return (
      l
        ? (h = Vc(e, t, r, s, i))
        : (h = i.map(function (A) {
            return Bo(e, t, r, s, A, l);
          })),
      e.seen.pop(),
      Kc(h, u, c)
    );
  }
  function qc(e, t) {
    if (Ot(t)) return e.stylize("undefined", "undefined");
    if (wn(t)) {
      var r =
        "'" +
        JSON.stringify(t)
          .replace(/^"|"$/g, "")
          .replace(/'/g, "\\'")
          .replace(/\\"/g, '"') +
        "'";
      return e.stylize(r, "string");
    }
    if ($s(t)) return e.stylize("" + t, "number");
    if (qo(t)) return e.stylize("" + t, "boolean");
    if (bn(t)) return e.stylize("null", "null");
  }
  function No(e) {
    return "[" + Error.prototype.toString.call(e) + "]";
  }
  function Vc(e, t, r, n, o) {
    for (var i = [], s = 0, a = t.length; s < a; ++s)
      qs(t, String(s)) ? i.push(Bo(e, t, r, n, String(s), !0)) : i.push("");
    return (
      o.forEach(function (u) {
        u.match(/^\d+$/) || i.push(Bo(e, t, r, n, u, !0));
      }),
      i
    );
  }
  function Bo(e, t, r, n, o, i) {
    var s, a, u;
    if (
      ((u = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] }),
      u.get
        ? u.set
          ? (a = e.stylize("[Getter/Setter]", "special"))
          : (a = e.stylize("[Getter]", "special"))
        : u.set && (a = e.stylize("[Setter]", "special")),
      qs(n, o) || (s = "[" + o + "]"),
      a ||
        (e.seen.indexOf(u.value) < 0
          ? (bn(r) ? (a = gn(e, u.value, null)) : (a = gn(e, u.value, r - 1)),
            a.indexOf(`
`) > -1 &&
              (i
                ? (a = a
                    .split(
                      `
`
                    )
                    .map(function (l) {
                      return "  " + l;
                    })
                    .join(
                      `
`
                    )
                    .slice(2))
                : (a =
                    `
` +
                    a
                      .split(
                        `
`
                      )
                      .map(function (l) {
                        return "   " + l;
                      }).join(`
`))))
          : (a = e.stylize("[Circular]", "special"))),
      Ot(s))
    ) {
      if (i && o.match(/^\d+$/)) return a;
      (s = JSON.stringify("" + o)),
        s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((s = s.slice(1, -1)), (s = e.stylize(s, "name")))
          : ((s = s
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'")),
            (s = e.stylize(s, "string")));
    }
    return s + ": " + a;
  }
  function Kc(e, t, r) {
    var n = 0,
      o = e.reduce(function (i, s) {
        return (
          n++,
          s.indexOf(`
`) >= 0 && n++,
          i + s.replace(/\u001b\[\d\d?m/g, "").length + 1
        );
      }, 0);
    return o > 60
      ? r[0] +
          (t === ""
            ? ""
            : t +
              `
 `) +
          " " +
          e.join(`,
  `) +
          " " +
          r[1]
      : r[0] + t + " " + e.join(", ") + " " + r[1];
  }
  G.types = Dc();
  function Us(e) {
    return Array.isArray(e);
  }
  G.isArray = Us;
  function qo(e) {
    return typeof e == "boolean";
  }
  G.isBoolean = qo;
  function bn(e) {
    return e === null;
  }
  G.isNull = bn;
  function Qc(e) {
    return e == null;
  }
  G.isNullOrUndefined = Qc;
  function $s(e) {
    return typeof e == "number";
  }
  G.isNumber = $s;
  function wn(e) {
    return typeof e == "string";
  }
  G.isString = wn;
  function Jc(e) {
    return typeof e == "symbol";
  }
  G.isSymbol = Jc;
  function Ot(e) {
    return e === void 0;
  }
  G.isUndefined = Ot;
  function Pr(e) {
    return Ht(e) && Vo(e) === "[object RegExp]";
  }
  G.isRegExp = Pr;
  G.types.isRegExp = Pr;
  function Ht(e) {
    return typeof e == "object" && e !== null;
  }
  G.isObject = Ht;
  function yn(e) {
    return Ht(e) && Vo(e) === "[object Date]";
  }
  G.isDate = yn;
  G.types.isDate = yn;
  function vr(e) {
    return Ht(e) && (Vo(e) === "[object Error]" || e instanceof Error);
  }
  G.isError = vr;
  G.types.isNativeError = vr;
  function mn(e) {
    return typeof e == "function";
  }
  G.isFunction = mn;
  function Gc(e) {
    return (
      e === null ||
      typeof e == "boolean" ||
      typeof e == "number" ||
      typeof e == "string" ||
      typeof e == "symbol" ||
      typeof e > "u"
    );
  }
  G.isPrimitive = Gc;
  G.isBuffer = Nc();
  function Vo(e) {
    return Object.prototype.toString.call(e);
  }
  function Lo(e) {
    return e < 10 ? "0" + e.toString(10) : e.toString(10);
  }
  var Wc = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function Hc() {
    var e = new Date(),
      t = [Lo(e.getHours()), Lo(e.getMinutes()), Lo(e.getSeconds())].join(":");
    return [e.getDate(), Wc[e.getMonth()], t].join(" ");
  }
  G.log = function () {
    console.log("%s - %s", Hc(), G.format.apply(G, arguments));
  };
  G.inherits = Lc();
  G._extend = function (e, t) {
    if (!t || !Ht(t)) return e;
    for (var r = Object.keys(t), n = r.length; n--; ) e[r[n]] = t[r[n]];
    return e;
  };
  function qs(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  var Rt = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  G.promisify = function (e) {
    if (typeof e != "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (Rt && e[Rt]) {
      var t = e[Rt];
      if (typeof t != "function")
        throw new TypeError(
          'The "util.promisify.custom" argument must be of type Function'
        );
      return (
        Object.defineProperty(t, Rt, {
          value: t,
          enumerable: !1,
          writable: !1,
          configurable: !0,
        }),
        t
      );
    }
    function t() {
      for (
        var r,
          n,
          o = new Promise(function (a, u) {
            (r = a), (n = u);
          }),
          i = [],
          s = 0;
        s < arguments.length;
        s++
      )
        i.push(arguments[s]);
      i.push(function (a, u) {
        a ? n(a) : r(u);
      });
      try {
        e.apply(this, i);
      } catch (a) {
        n(a);
      }
      return o;
    }
    return (
      Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
      Rt &&
        Object.defineProperty(t, Rt, {
          value: t,
          enumerable: !1,
          writable: !1,
          configurable: !0,
        }),
      Object.defineProperties(t, Bs(e))
    );
  };
  G.promisify.custom = Rt;
  function zc(e, t) {
    if (!e) {
      var r = new Error("Promise was rejected with a falsy value");
      (r.reason = e), (e = r);
    }
    return t(e);
  }
  function Yc(e) {
    if (typeof e != "function")
      throw new TypeError('The "original" argument must be of type Function');
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) r.push(arguments[n]);
      var o = r.pop();
      if (typeof o != "function")
        throw new TypeError("The last argument must be of type Function");
      var i = this,
        s = function () {
          return o.apply(i, arguments);
        };
      e.apply(this, r).then(
        function (a) {
          b.nextTick(s.bind(null, null, a));
        },
        function (a) {
          b.nextTick(zc.bind(null, a, s));
        }
      );
    }
    return (
      Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
      Object.defineProperties(t, Bs(e)),
      t
    );
  }
  G.callbackify = Yc;
});
var Ks = ne((hb, Vs) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  var zt = 1e3,
    Yt = zt * 60,
    Zt = Yt * 60,
    It = Zt * 24,
    Zc = It * 7,
    Xc = It * 365.25;
  Vs.exports = function (e, t) {
    t = t || {};
    var r = typeof e;
    if (r === "string" && e.length > 0) return ep(e);
    if (r === "number" && isFinite(e)) return t.long ? rp(e) : tp(e);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(e)
    );
  };
  function ep(e) {
    if (((e = String(e)), !(e.length > 100))) {
      var t =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          e
        );
      if (t) {
        var r = parseFloat(t[1]),
          n = (t[2] || "ms").toLowerCase();
        switch (n) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return r * Xc;
          case "weeks":
          case "week":
          case "w":
            return r * Zc;
          case "days":
          case "day":
          case "d":
            return r * It;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return r * Zt;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return r * Yt;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return r * zt;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return r;
          default:
            return;
        }
      }
    }
  }
  function tp(e) {
    var t = Math.abs(e);
    return t >= It
      ? Math.round(e / It) + "d"
      : t >= Zt
      ? Math.round(e / Zt) + "h"
      : t >= Yt
      ? Math.round(e / Yt) + "m"
      : t >= zt
      ? Math.round(e / zt) + "s"
      : e + "ms";
  }
  function rp(e) {
    var t = Math.abs(e);
    return t >= It
      ? xn(e, t, It, "day")
      : t >= Zt
      ? xn(e, t, Zt, "hour")
      : t >= Yt
      ? xn(e, t, Yt, "minute")
      : t >= zt
      ? xn(e, t, zt, "second")
      : e + " ms";
  }
  function xn(e, t, r, n) {
    var o = t >= r * 1.5;
    return Math.round(e / r) + " " + n + (o ? "s" : "");
  }
});
var Qo = ne((vb, Qs) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  function np(e) {
    (r.debug = r),
      (r.default = r),
      (r.coerce = u),
      (r.disable = i),
      (r.enable = o),
      (r.enabled = s),
      (r.humanize = Ks()),
      (r.destroy = l),
      Object.keys(e).forEach((c) => {
        r[c] = e[c];
      }),
      (r.names = []),
      (r.skips = []),
      (r.formatters = {});
    function t(c) {
      let y = 0;
      for (let h = 0; h < c.length; h++)
        (y = (y << 5) - y + c.charCodeAt(h)), (y |= 0);
      return r.colors[Math.abs(y) % r.colors.length];
    }
    r.selectColor = t;
    function r(c) {
      let y,
        h = null,
        A,
        _;
      function T(...S) {
        if (!T.enabled) return;
        let I = T,
          F = Number(new Date()),
          O = F - (y || F);
        (I.diff = O),
          (I.prev = y),
          (I.curr = F),
          (y = F),
          (S[0] = r.coerce(S[0])),
          typeof S[0] != "string" && S.unshift("%O");
        let k = 0;
        (S[0] = S[0].replace(/%([a-zA-Z%])/g, (Q, je) => {
          if (Q === "%%") return "%";
          k++;
          let Y = r.formatters[je];
          if (typeof Y == "function") {
            let ie = S[k];
            (Q = Y.call(I, ie)), S.splice(k, 1), k--;
          }
          return Q;
        })),
          r.formatArgs.call(I, S),
          (I.log || r.log).apply(I, S);
      }
      return (
        (T.namespace = c),
        (T.useColors = r.useColors()),
        (T.color = r.selectColor(c)),
        (T.extend = n),
        (T.destroy = r.destroy),
        Object.defineProperty(T, "enabled", {
          enumerable: !0,
          configurable: !1,
          get: () =>
            h !== null
              ? h
              : (A !== r.namespaces && ((A = r.namespaces), (_ = r.enabled(c))),
                _),
          set: (S) => {
            h = S;
          },
        }),
        typeof r.init == "function" && r.init(T),
        T
      );
    }
    function n(c, y) {
      let h = r(this.namespace + (typeof y == "undefined" ? ":" : y) + c);
      return (h.log = this.log), h;
    }
    function o(c) {
      r.save(c), (r.namespaces = c), (r.names = []), (r.skips = []);
      let y,
        h = (typeof c == "string" ? c : "").split(/[\s,]+/),
        A = h.length;
      for (y = 0; y < A; y++)
        h[y] &&
          ((c = h[y].replace(/\*/g, ".*?")),
          c[0] === "-"
            ? r.skips.push(new RegExp("^" + c.slice(1) + "$"))
            : r.names.push(new RegExp("^" + c + "$")));
    }
    function i() {
      let c = [...r.names.map(a), ...r.skips.map(a).map((y) => "-" + y)].join(
        ","
      );
      return r.enable(""), c;
    }
    function s(c) {
      if (c[c.length - 1] === "*") return !0;
      let y, h;
      for (y = 0, h = r.skips.length; y < h; y++)
        if (r.skips[y].test(c)) return !1;
      for (y = 0, h = r.names.length; y < h; y++)
        if (r.names[y].test(c)) return !0;
      return !1;
    }
    function a(c) {
      return c
        .toString()
        .substring(2, c.toString().length - 2)
        .replace(/\.\*\?$/, "*");
    }
    function u(c) {
      return c instanceof Error ? c.stack || c.message : c;
    }
    function l() {
      console.warn(
        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
      );
    }
    return r.enable(r.load()), r;
  }
  Qs.exports = np;
});
var Js = ne((Ne, En) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  Ne.formatArgs = ip;
  Ne.save = sp;
  Ne.load = ap;
  Ne.useColors = op;
  Ne.storage = up();
  Ne.destroy = (() => {
    let e = !1;
    return () => {
      e ||
        ((e = !0),
        console.warn(
          "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
        ));
    };
  })();
  Ne.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33",
  ];
  function op() {
    return typeof window != "undefined" &&
      window.process &&
      (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator != "undefined" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : (typeof document != "undefined" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window != "undefined" &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        (typeof navigator != "undefined" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator != "undefined" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function ip(e) {
    if (
      ((e[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        e[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        En.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    let t = "color: " + this.color;
    e.splice(1, 0, t, "color: inherit");
    let r = 0,
      n = 0;
    e[0].replace(/%[a-zA-Z%]/g, (o) => {
      o !== "%%" && (r++, o === "%c" && (n = r));
    }),
      e.splice(n, 0, t);
  }
  Ne.log = console.debug || console.log || (() => {});
  function sp(e) {
    try {
      e ? Ne.storage.setItem("debug", e) : Ne.storage.removeItem("debug");
    } catch (t) {}
  }
  function ap() {
    let e;
    try {
      e = Ne.storage.getItem("debug");
    } catch (t) {}
    return !e && typeof b != "undefined" && "env" in b && (e = b.env.DEBUG), e;
  }
  function up() {
    try {
      return localStorage;
    } catch (e) {}
  }
  En.exports = Qo()(Ne);
  var { formatters: lp } = En.exports;
  lp.j = function (e) {
    try {
      return JSON.stringify(e);
    } catch (t) {
      return "[UnexpectedJSONParseError]: " + t.message;
    }
  };
});
var Jo = ne((Pn) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  Pn.isatty = function () {
    return !1;
  };
  function cp() {
    throw new Error("tty.ReadStream is not implemented");
  }
  Pn.ReadStream = cp;
  function pp() {
    throw new Error("tty.WriteStream is not implemented");
  }
  Pn.WriteStream = pp;
});
var Gs = ne(() => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
});
var Hs = ne((Gb, Ws) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  Ws.exports = (e, t = b.argv) => {
    let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--",
      n = t.indexOf(r + e),
      o = t.indexOf("--");
    return n !== -1 && (o === -1 || n < o);
  };
});
var Zs = ne((Xb, Ys) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  var fp = Gs(),
    zs = Jo(),
    Ue = Hs(),
    { env: ce } = b,
    mt;
  Ue("no-color") || Ue("no-colors") || Ue("color=false") || Ue("color=never")
    ? (mt = 0)
    : (Ue("color") || Ue("colors") || Ue("color=true") || Ue("color=always")) &&
      (mt = 1);
  "FORCE_COLOR" in ce &&
    (ce.FORCE_COLOR === "true"
      ? (mt = 1)
      : ce.FORCE_COLOR === "false"
      ? (mt = 0)
      : (mt =
          ce.FORCE_COLOR.length === 0
            ? 1
            : Math.min(parseInt(ce.FORCE_COLOR, 10), 3)));
  function Go(e) {
    return e === 0
      ? !1
      : { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
  }
  function Wo(e, t) {
    if (mt === 0) return 0;
    if (Ue("color=16m") || Ue("color=full") || Ue("color=truecolor")) return 3;
    if (Ue("color=256")) return 2;
    if (e && !t && mt === void 0) return 0;
    let r = mt || 0;
    if (ce.TERM === "dumb") return r;
    if (b.platform === "win32") {
      let n = fp.release().split(".");
      return Number(n[0]) >= 10 && Number(n[2]) >= 10586
        ? Number(n[2]) >= 14931
          ? 3
          : 2
        : 1;
    }
    if ("CI" in ce)
      return [
        "TRAVIS",
        "CIRCLECI",
        "APPVEYOR",
        "GITLAB_CI",
        "GITHUB_ACTIONS",
        "BUILDKITE",
      ].some((n) => n in ce) || ce.CI_NAME === "codeship"
        ? 1
        : r;
    if ("TEAMCITY_VERSION" in ce)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(ce.TEAMCITY_VERSION) ? 1 : 0;
    if (ce.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in ce) {
      let n = parseInt((ce.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (ce.TERM_PROGRAM) {
        case "iTerm.app":
          return n >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(ce.TERM)
      ? 2
      : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
          ce.TERM
        ) || "COLORTERM" in ce
      ? 1
      : r;
  }
  function dp(e) {
    let t = Wo(e, e && e.isTTY);
    return Go(t);
  }
  Ys.exports = {
    supportsColor: dp,
    stdout: Go(Wo(!0, zs.isatty(1))),
    stderr: Go(Wo(!0, zs.isatty(2))),
  };
});
var ea = ne((ye, Tn) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  var mp = Jo(),
    vn = Ko();
  ye.init = Ep;
  ye.log = bp;
  ye.formatArgs = yp;
  ye.save = wp;
  ye.load = xp;
  ye.useColors = gp;
  ye.destroy = vn.deprecate(() => {},
  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  ye.colors = [6, 2, 3, 4, 5, 1];
  try {
    let e = Zs();
    e &&
      (e.stderr || e).level >= 2 &&
      (ye.colors = [
        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63,
        68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128,
        129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168,
        169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200,
        201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
      ]);
  } catch (e) {}
  ye.inspectOpts = Object.keys(b.env)
    .filter((e) => /^debug_/i.test(e))
    .reduce((e, t) => {
      let r = t
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (o, i) => i.toUpperCase()),
        n = b.env[t];
      return (
        /^(yes|on|true|enabled)$/i.test(n)
          ? (n = !0)
          : /^(no|off|false|disabled)$/i.test(n)
          ? (n = !1)
          : n === "null"
          ? (n = null)
          : (n = Number(n)),
        (e[r] = n),
        e
      );
    }, {});
  function gp() {
    return "colors" in ye.inspectOpts
      ? !!ye.inspectOpts.colors
      : mp.isatty(b.stderr.fd);
  }
  function yp(e) {
    let { namespace: t, useColors: r } = this;
    if (r) {
      let n = this.color,
        o = "\x1B[3" + (n < 8 ? n : "8;5;" + n),
        i = `  ${o};1m${t} \x1B[0m`;
      (e[0] =
        i +
        e[0]
          .split(
            `
`
          )
          .join(
            `
` + i
          )),
        e.push(o + "m+" + Tn.exports.humanize(this.diff) + "\x1B[0m");
    } else e[0] = hp() + t + " " + e[0];
  }
  function hp() {
    return ye.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
  }
  function bp(...e) {
    return b.stderr.write(
      vn.format(...e) +
        `
`
    );
  }
  function wp(e) {
    e ? (b.env.DEBUG = e) : delete b.env.DEBUG;
  }
  function xp() {
    return b.env.DEBUG;
  }
  function Ep(e) {
    e.inspectOpts = {};
    let t = Object.keys(ye.inspectOpts);
    for (let r = 0; r < t.length; r++)
      e.inspectOpts[t[r]] = ye.inspectOpts[t[r]];
  }
  Tn.exports = Qo()(ye);
  var { formatters: Xs } = Tn.exports;
  Xs.o = function (e) {
    return (
      (this.inspectOpts.colors = this.useColors),
      vn
        .inspect(e, this.inspectOpts)
        .split(
          `
`
        )
        .map((t) => t.trim())
        .join(" ")
    );
  };
  Xs.O = function (e) {
    return (
      (this.inspectOpts.colors = this.useColors),
      vn.inspect(e, this.inspectOpts)
    );
  };
});
var ta = ne((c0, Ho) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  typeof b == "undefined" ||
  b.type === "renderer" ||
  b.browser === !0 ||
  b.__nwjs
    ? (Ho.exports = Js())
    : (Ho.exports = ea());
});
function Ap() {
  return !1;
}
var _p,
  Cp,
  Rn,
  Yo = Kt(() => {
    "use strict";
    g();
    p();
    f();
    d();
    m();
    (_p = {}), (Cp = { existsSync: Ap, promises: _p }), (Rn = Cp);
  });
var Xo = ne((bw, fa) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  function We(e) {
    if (typeof e != "string")
      throw new TypeError(
        "Path must be a string. Received " + JSON.stringify(e)
      );
  }
  function pa(e, t) {
    for (var r = "", n = 0, o = -1, i = 0, s, a = 0; a <= e.length; ++a) {
      if (a < e.length) s = e.charCodeAt(a);
      else {
        if (s === 47) break;
        s = 47;
      }
      if (s === 47) {
        if (!(o === a - 1 || i === 1))
          if (o !== a - 1 && i === 2) {
            if (
              r.length < 2 ||
              n !== 2 ||
              r.charCodeAt(r.length - 1) !== 46 ||
              r.charCodeAt(r.length - 2) !== 46
            ) {
              if (r.length > 2) {
                var u = r.lastIndexOf("/");
                if (u !== r.length - 1) {
                  u === -1
                    ? ((r = ""), (n = 0))
                    : ((r = r.slice(0, u)),
                      (n = r.length - 1 - r.lastIndexOf("/"))),
                    (o = a),
                    (i = 0);
                  continue;
                }
              } else if (r.length === 2 || r.length === 1) {
                (r = ""), (n = 0), (o = a), (i = 0);
                continue;
              }
            }
            t && (r.length > 0 ? (r += "/..") : (r = ".."), (n = 2));
          } else
            r.length > 0
              ? (r += "/" + e.slice(o + 1, a))
              : (r = e.slice(o + 1, a)),
              (n = a - o - 1);
        (o = a), (i = 0);
      } else s === 46 && i !== -1 ? ++i : (i = -1);
    }
    return r;
  }
  function Sp(e, t) {
    var r = t.dir || t.root,
      n = t.base || (t.name || "") + (t.ext || "");
    return r ? (r === t.root ? r + n : r + e + n) : n;
  }
  var rr = {
    resolve: function () {
      for (
        var e = "", t = !1, r, n = arguments.length - 1;
        n >= -1 && !t;
        n--
      ) {
        var o;
        n >= 0 ? (o = arguments[n]) : (r === void 0 && (r = b.cwd()), (o = r)),
          We(o),
          o.length !== 0 && ((e = o + "/" + e), (t = o.charCodeAt(0) === 47));
      }
      return (
        (e = pa(e, !t)),
        t ? (e.length > 0 ? "/" + e : "/") : e.length > 0 ? e : "."
      );
    },
    normalize: function (e) {
      if ((We(e), e.length === 0)) return ".";
      var t = e.charCodeAt(0) === 47,
        r = e.charCodeAt(e.length - 1) === 47;
      return (
        (e = pa(e, !t)),
        e.length === 0 && !t && (e = "."),
        e.length > 0 && r && (e += "/"),
        t ? "/" + e : e
      );
    },
    isAbsolute: function (e) {
      return We(e), e.length > 0 && e.charCodeAt(0) === 47;
    },
    join: function () {
      if (arguments.length === 0) return ".";
      for (var e, t = 0; t < arguments.length; ++t) {
        var r = arguments[t];
        We(r), r.length > 0 && (e === void 0 ? (e = r) : (e += "/" + r));
      }
      return e === void 0 ? "." : rr.normalize(e);
    },
    relative: function (e, t) {
      if (
        (We(e),
        We(t),
        e === t || ((e = rr.resolve(e)), (t = rr.resolve(t)), e === t))
      )
        return "";
      for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r);
      for (
        var n = e.length, o = n - r, i = 1;
        i < t.length && t.charCodeAt(i) === 47;
        ++i
      );
      for (
        var s = t.length, a = s - i, u = o < a ? o : a, l = -1, c = 0;
        c <= u;
        ++c
      ) {
        if (c === u) {
          if (a > u) {
            if (t.charCodeAt(i + c) === 47) return t.slice(i + c + 1);
            if (c === 0) return t.slice(i + c);
          } else
            o > u &&
              (e.charCodeAt(r + c) === 47 ? (l = c) : c === 0 && (l = 0));
          break;
        }
        var y = e.charCodeAt(r + c),
          h = t.charCodeAt(i + c);
        if (y !== h) break;
        y === 47 && (l = c);
      }
      var A = "";
      for (c = r + l + 1; c <= n; ++c)
        (c === n || e.charCodeAt(c) === 47) &&
          (A.length === 0 ? (A += "..") : (A += "/.."));
      return A.length > 0
        ? A + t.slice(i + l)
        : ((i += l), t.charCodeAt(i) === 47 && ++i, t.slice(i));
    },
    _makeLong: function (e) {
      return e;
    },
    dirname: function (e) {
      if ((We(e), e.length === 0)) return ".";
      for (
        var t = e.charCodeAt(0), r = t === 47, n = -1, o = !0, i = e.length - 1;
        i >= 1;
        --i
      )
        if (((t = e.charCodeAt(i)), t === 47)) {
          if (!o) {
            n = i;
            break;
          }
        } else o = !1;
      return n === -1 ? (r ? "/" : ".") : r && n === 1 ? "//" : e.slice(0, n);
    },
    basename: function (e, t) {
      if (t !== void 0 && typeof t != "string")
        throw new TypeError('"ext" argument must be a string');
      We(e);
      var r = 0,
        n = -1,
        o = !0,
        i;
      if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t.length === e.length && t === e) return "";
        var s = t.length - 1,
          a = -1;
        for (i = e.length - 1; i >= 0; --i) {
          var u = e.charCodeAt(i);
          if (u === 47) {
            if (!o) {
              r = i + 1;
              break;
            }
          } else
            a === -1 && ((o = !1), (a = i + 1)),
              s >= 0 &&
                (u === t.charCodeAt(s)
                  ? --s === -1 && (n = i)
                  : ((s = -1), (n = a)));
        }
        return r === n ? (n = a) : n === -1 && (n = e.length), e.slice(r, n);
      } else {
        for (i = e.length - 1; i >= 0; --i)
          if (e.charCodeAt(i) === 47) {
            if (!o) {
              r = i + 1;
              break;
            }
          } else n === -1 && ((o = !1), (n = i + 1));
        return n === -1 ? "" : e.slice(r, n);
      }
    },
    extname: function (e) {
      We(e);
      for (
        var t = -1, r = 0, n = -1, o = !0, i = 0, s = e.length - 1;
        s >= 0;
        --s
      ) {
        var a = e.charCodeAt(s);
        if (a === 47) {
          if (!o) {
            r = s + 1;
            break;
          }
          continue;
        }
        n === -1 && ((o = !1), (n = s + 1)),
          a === 46
            ? t === -1
              ? (t = s)
              : i !== 1 && (i = 1)
            : t !== -1 && (i = -1);
      }
      return t === -1 ||
        n === -1 ||
        i === 0 ||
        (i === 1 && t === n - 1 && t === r + 1)
        ? ""
        : e.slice(t, n);
    },
    format: function (e) {
      if (e === null || typeof e != "object")
        throw new TypeError(
          'The "pathObject" argument must be of type Object. Received type ' +
            typeof e
        );
      return Sp("/", e);
    },
    parse: function (e) {
      We(e);
      var t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      var r = e.charCodeAt(0),
        n = r === 47,
        o;
      n ? ((t.root = "/"), (o = 1)) : (o = 0);
      for (
        var i = -1, s = 0, a = -1, u = !0, l = e.length - 1, c = 0;
        l >= o;
        --l
      ) {
        if (((r = e.charCodeAt(l)), r === 47)) {
          if (!u) {
            s = l + 1;
            break;
          }
          continue;
        }
        a === -1 && ((u = !1), (a = l + 1)),
          r === 46
            ? i === -1
              ? (i = l)
              : c !== 1 && (c = 1)
            : i !== -1 && (c = -1);
      }
      return (
        i === -1 ||
        a === -1 ||
        c === 0 ||
        (c === 1 && i === a - 1 && i === s + 1)
          ? a !== -1 &&
            (s === 0 && n
              ? (t.base = t.name = e.slice(1, a))
              : (t.base = t.name = e.slice(s, a)))
          : (s === 0 && n
              ? ((t.name = e.slice(1, i)), (t.base = e.slice(1, a)))
              : ((t.name = e.slice(s, i)), (t.base = e.slice(s, a))),
            (t.ext = e.slice(i, a))),
        s > 0 ? (t.dir = e.slice(0, s - 1)) : n && (t.dir = "/"),
        t
      );
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null,
  };
  rr.posix = rr;
  fa.exports = rr;
});
var ma = ne(() => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
});
var ya = ne((Qw, ga) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  ga.exports = (e) => {
    let t = e.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
  };
});
var ba = ne((Yw, ha) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  var Rp = ya();
  ha.exports = (e) => {
    let t = Rp(e);
    if (t === 0) return e;
    let r = new RegExp(`^[ \\t]{${t}}`, "gm");
    return e.replace(r, "");
  };
});
var xa = ne((lx, ti) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  var Op = Object.prototype.hasOwnProperty,
    Ce = "~";
  function _r() {}
  Object.create &&
    ((_r.prototype = Object.create(null)), new _r().__proto__ || (Ce = !1));
  function Ip(e, t, r) {
    (this.fn = e), (this.context = t), (this.once = r || !1);
  }
  function wa(e, t, r, n, o) {
    if (typeof r != "function")
      throw new TypeError("The listener must be a function");
    var i = new Ip(r, n || e, o),
      s = Ce ? Ce + t : t;
    return (
      e._events[s]
        ? e._events[s].fn
          ? (e._events[s] = [e._events[s], i])
          : e._events[s].push(i)
        : ((e._events[s] = i), e._eventsCount++),
      e
    );
  }
  function On(e, t) {
    --e._eventsCount === 0 ? (e._events = new _r()) : delete e._events[t];
  }
  function Pe() {
    (this._events = new _r()), (this._eventsCount = 0);
  }
  Pe.prototype.eventNames = function () {
    var e = [],
      t,
      r;
    if (this._eventsCount === 0) return e;
    for (r in (t = this._events)) Op.call(t, r) && e.push(Ce ? r.slice(1) : r);
    return Object.getOwnPropertySymbols
      ? e.concat(Object.getOwnPropertySymbols(t))
      : e;
  };
  Pe.prototype.listeners = function (e) {
    var t = Ce ? Ce + e : e,
      r = this._events[t];
    if (!r) return [];
    if (r.fn) return [r.fn];
    for (var n = 0, o = r.length, i = new Array(o); n < o; n++) i[n] = r[n].fn;
    return i;
  };
  Pe.prototype.listenerCount = function (e) {
    var t = Ce ? Ce + e : e,
      r = this._events[t];
    return r ? (r.fn ? 1 : r.length) : 0;
  };
  Pe.prototype.emit = function (e, t, r, n, o, i) {
    var s = Ce ? Ce + e : e;
    if (!this._events[s]) return !1;
    var a = this._events[s],
      u = arguments.length,
      l,
      c;
    if (a.fn) {
      switch ((a.once && this.removeListener(e, a.fn, void 0, !0), u)) {
        case 1:
          return a.fn.call(a.context), !0;
        case 2:
          return a.fn.call(a.context, t), !0;
        case 3:
          return a.fn.call(a.context, t, r), !0;
        case 4:
          return a.fn.call(a.context, t, r, n), !0;
        case 5:
          return a.fn.call(a.context, t, r, n, o), !0;
        case 6:
          return a.fn.call(a.context, t, r, n, o, i), !0;
      }
      for (c = 1, l = new Array(u - 1); c < u; c++) l[c - 1] = arguments[c];
      a.fn.apply(a.context, l);
    } else {
      var y = a.length,
        h;
      for (c = 0; c < y; c++)
        switch ((a[c].once && this.removeListener(e, a[c].fn, void 0, !0), u)) {
          case 1:
            a[c].fn.call(a[c].context);
            break;
          case 2:
            a[c].fn.call(a[c].context, t);
            break;
          case 3:
            a[c].fn.call(a[c].context, t, r);
            break;
          case 4:
            a[c].fn.call(a[c].context, t, r, n);
            break;
          default:
            if (!l)
              for (h = 1, l = new Array(u - 1); h < u; h++)
                l[h - 1] = arguments[h];
            a[c].fn.apply(a[c].context, l);
        }
    }
    return !0;
  };
  Pe.prototype.on = function (e, t, r) {
    return wa(this, e, t, r, !1);
  };
  Pe.prototype.once = function (e, t, r) {
    return wa(this, e, t, r, !0);
  };
  Pe.prototype.removeListener = function (e, t, r, n) {
    var o = Ce ? Ce + e : e;
    if (!this._events[o]) return this;
    if (!t) return On(this, o), this;
    var i = this._events[o];
    if (i.fn)
      i.fn === t && (!n || i.once) && (!r || i.context === r) && On(this, o);
    else {
      for (var s = 0, a = [], u = i.length; s < u; s++)
        (i[s].fn !== t || (n && !i[s].once) || (r && i[s].context !== r)) &&
          a.push(i[s]);
      a.length ? (this._events[o] = a.length === 1 ? a[0] : a) : On(this, o);
    }
    return this;
  };
  Pe.prototype.removeAllListeners = function (e) {
    var t;
    return (
      e
        ? ((t = Ce ? Ce + e : e), this._events[t] && On(this, t))
        : ((this._events = new _r()), (this._eventsCount = 0)),
      this
    );
  };
  Pe.prototype.off = Pe.prototype.removeListener;
  Pe.prototype.addListener = Pe.prototype.on;
  Pe.prefixed = Ce;
  Pe.EventEmitter = Pe;
  typeof ti < "u" && (ti.exports = Pe);
});
var Pa = ne((gx, Ea) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  Ea.exports = (e, t = 1, r) => {
    if (
      ((r = { indent: " ", includeEmptyLines: !1, ...r }), typeof e != "string")
    )
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``
      );
    if (typeof t != "number")
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``
      );
    if (typeof r.indent != "string")
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``
      );
    if (t === 0) return e;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  };
});
var Aa = ne((Cx, Ta) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  Ta.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  };
});
var ni = ne((kx, _a) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  var Lp = Aa();
  _a.exports = (e) => (typeof e == "string" ? e.replace(Lp(), "") : e);
});
var Ca = ne((Yx, kn) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  kn.exports = (e = {}) => {
    let t;
    if (e.repoUrl) t = e.repoUrl;
    else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
    else
      throw new Error(
        "You need to specify either the `repoUrl` option or both the `user` and `repo` options"
      );
    let r = new URL(`${t}/issues/new`),
      n = [
        "body",
        "title",
        "labels",
        "template",
        "milestone",
        "assignee",
        "projects",
      ];
    for (let o of n) {
      let i = e[o];
      if (i !== void 0) {
        if (o === "labels" || o === "projects") {
          if (!Array.isArray(i))
            throw new TypeError(`The \`${o}\` option should be an array`);
          i = i.join(",");
        }
        r.searchParams.set(o, i);
      }
    }
    return r.toString();
  };
  kn.exports.default = kn.exports;
});
var Oa = ne(() => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
});
var qi = ne((d4, Xu) => {
  "use strict";
  g();
  p();
  f();
  d();
  m();
  Xu.exports = (function () {
    function e(t, r, n, o, i) {
      return t < r || n < r ? (t > n ? n + 1 : t + 1) : o === i ? r : r + 1;
    }
    return function (t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        (t = r), (r = n);
      }
      for (
        var o = t.length, i = r.length;
        o > 0 && t.charCodeAt(o - 1) === r.charCodeAt(i - 1);

      )
        o--, i--;
      for (var s = 0; s < o && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
      if (((o -= s), (i -= s), o === 0 || i < 3)) return i;
      var a = 0,
        u,
        l,
        c,
        y,
        h,
        A,
        _,
        T,
        S,
        I,
        F,
        O,
        k = [];
      for (u = 0; u < o; u++) k.push(u + 1), k.push(t.charCodeAt(s + u));
      for (var K = k.length - 1; a < i - 3; )
        for (
          S = r.charCodeAt(s + (l = a)),
            I = r.charCodeAt(s + (c = a + 1)),
            F = r.charCodeAt(s + (y = a + 2)),
            O = r.charCodeAt(s + (h = a + 3)),
            A = a += 4,
            u = 0;
          u < K;
          u += 2
        )
          (_ = k[u]),
            (T = k[u + 1]),
            (l = e(_, l, c, S, T)),
            (c = e(l, c, y, I, T)),
            (y = e(c, y, h, F, T)),
            (A = e(y, h, A, O, T)),
            (k[u] = A),
            (h = y),
            (y = c),
            (c = l),
            (l = _);
      for (; a < i; )
        for (S = r.charCodeAt(s + (l = a)), A = ++a, u = 0; u < K; u += 2)
          (_ = k[u]), (k[u] = A = e(_, l, A, S, k[u + 1])), (l = _);
      return A;
    };
  })();
});
g();
p();
f();
d();
m();
var Ts = {};
xr(Ts, { defineExtension: () => Ps, getExtensionContext: () => vs });
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
function Ps(e) {
  return typeof e == "function" ? e : (t) => t.$extends(e);
}
g();
p();
f();
d();
m();
function vs(e) {
  return e;
}
var _s = {};
xr(_s, { validator: () => As });
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
function As(...e) {
  return (t) => t;
}
var Os = {};
xr(Os, {
  Extensions: () => Cs,
  Public: () => Ss,
  Result: () => Ms,
  Utils: () => Rs,
});
g();
p();
f();
d();
m();
var Cs = {};
g();
p();
f();
d();
m();
var Ss = {};
g();
p();
f();
d();
m();
var Ms = {};
g();
p();
f();
d();
m();
var Rs = {};
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var ft = (e, t) => {
  let r = {};
  for (let n of e) {
    let o = n[t];
    r[o] = n;
  }
  return r;
};
function Is(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
var Do = class {
  constructor(t) {
    this.document = t;
    (this.compositeNames = new Set(this.datamodel.types.map((r) => r.name))),
      (this.typeAndModelMap = this.buildTypeModelMap()),
      (this.mappingsMap = this.buildMappingsMap()),
      (this.outputTypeMap = this.buildMergedOutputTypeMap()),
      (this.rootFieldMap = this.buildRootFieldMap()),
      (this.inputTypesByName = this.buildInputTypesMap());
  }
  get datamodel() {
    return this.document.datamodel;
  }
  get mappings() {
    return this.document.mappings;
  }
  get schema() {
    return this.document.schema;
  }
  get inputObjectTypes() {
    return this.schema.inputObjectTypes;
  }
  get outputObjectTypes() {
    return this.schema.outputObjectTypes;
  }
  isComposite(t) {
    return this.compositeNames.has(t);
  }
  getOtherOperationNames() {
    return [
      Object.values(this.mappings.otherOperations.write),
      Object.values(this.mappings.otherOperations.read),
    ].flat();
  }
  hasEnumInNamespace(t, r) {
    var n;
    return (
      ((n = this.schema.enumTypes[r]) == null
        ? void 0
        : n.find((o) => o.name === t)) !== void 0
    );
  }
  resolveInputObjectType(t) {
    return this.inputTypesByName.get(Fo(t.type, t.namespace));
  }
  resolveOutputObjectType(t) {
    var r;
    if (t.location === "outputObjectTypes")
      return this.outputObjectTypes[
        (r = t.namespace) != null ? r : "prisma"
      ].find((n) => n.name === t.type);
  }
  buildModelMap() {
    return ft(this.datamodel.models, "name");
  }
  buildTypeMap() {
    return ft(this.datamodel.types, "name");
  }
  buildTypeModelMap() {
    return { ...this.buildTypeMap(), ...this.buildModelMap() };
  }
  buildMappingsMap() {
    return ft(this.mappings.modelOperations, "model");
  }
  buildMergedOutputTypeMap() {
    return {
      model: ft(this.schema.outputObjectTypes.model, "name"),
      prisma: ft(this.schema.outputObjectTypes.prisma, "name"),
    };
  }
  buildRootFieldMap() {
    return {
      ...ft(this.outputTypeMap.prisma.Query.fields, "name"),
      ...ft(this.outputTypeMap.prisma.Mutation.fields, "name"),
    };
  }
  buildInputTypesMap() {
    let t = new Map();
    for (let r of this.inputObjectTypes.prisma) t.set(Fo(r.name, "prisma"), r);
    if (!this.inputObjectTypes.model) return t;
    for (let r of this.inputObjectTypes.model) t.set(Fo(r.name, "model"), r);
    return t;
  }
};
function Fo(e, t) {
  return t ? `${t}.${e}` : e;
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var qe;
((t) => {
  let e;
  ((O) => (
    (O.findUnique = "findUnique"),
    (O.findUniqueOrThrow = "findUniqueOrThrow"),
    (O.findFirst = "findFirst"),
    (O.findFirstOrThrow = "findFirstOrThrow"),
    (O.findMany = "findMany"),
    (O.create = "create"),
    (O.createMany = "createMany"),
    (O.update = "update"),
    (O.updateMany = "updateMany"),
    (O.upsert = "upsert"),
    (O.delete = "delete"),
    (O.deleteMany = "deleteMany"),
    (O.groupBy = "groupBy"),
    (O.count = "count"),
    (O.aggregate = "aggregate"),
    (O.findRaw = "findRaw"),
    (O.aggregateRaw = "aggregateRaw")
  ))((e = t.ModelAction || (t.ModelAction = {})));
})(qe || (qe = {}));
g();
p();
f();
d();
m();
var An = _e(ta()),
  Pp = 100,
  Tr = [],
  ra,
  na;
typeof b != "undefined" &&
  typeof ((ra = b.stderr) == null ? void 0 : ra.write) != "function" &&
  (An.default.log = (na = console.debug) != null ? na : console.log);
function vp(e) {
  let t = (0, An.default)(e),
    r = Object.assign(
      (...n) => (
        (t.log = r.log),
        n.length !== 0 && Tr.push([e, ...n]),
        Tr.length > Pp && Tr.shift(),
        t("", ...n)
      ),
      t
    );
  return r;
}
var oa = Object.assign(vp, An.default);
function ia(e = 7500) {
  let t = Tr.map((r) =>
    r.map((n) => (typeof n == "string" ? n : JSON.stringify(n))).join(" ")
  ).join(`
`);
  return t.length < e ? t : t.slice(-e);
}
function sa() {
  Tr.length = 0;
}
var Ee = oa;
g();
p();
f();
d();
m();
var zo,
  aa,
  ua,
  la,
  ca = !0;
typeof b != "undefined" &&
  (({
    FORCE_COLOR: zo,
    NODE_DISABLE_COLORS: aa,
    NO_COLOR: ua,
    TERM: la,
  } = b.env || {}),
  (ca = b.stdout && b.stdout.isTTY));
var Tp = {
  enabled:
    !aa && ua == null && la !== "dumb" && ((zo != null && zo !== "0") || ca),
};
function X(e, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, "g"),
    n = `\x1B[${e}m`,
    o = `\x1B[${t}m`;
  return function (i) {
    return !Tp.enabled || i == null
      ? i
      : n + (~("" + i).indexOf(o) ? i.replace(r, o + n) : i) + o;
  };
}
var P0 = X(0, 0),
  gt = X(1, 22),
  _n = X(2, 22),
  v0 = X(3, 23),
  Cn = X(4, 24),
  T0 = X(7, 27),
  A0 = X(8, 28),
  _0 = X(9, 29),
  C0 = X(30, 39),
  Xt = X(31, 39),
  Sn = X(32, 39),
  er = X(33, 39),
  tr = X(34, 39),
  S0 = X(35, 39),
  yt = X(36, 39),
  M0 = X(37, 39),
  Mn = X(90, 39),
  R0 = X(90, 39),
  O0 = X(40, 49),
  I0 = X(41, 49),
  k0 = X(42, 49),
  F0 = X(43, 49),
  D0 = X(44, 49),
  N0 = X(45, 49),
  L0 = X(46, 49),
  B0 = X(47, 49);
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var Zo = [
  "darwin",
  "darwin-arm64",
  "debian-openssl-1.0.x",
  "debian-openssl-1.1.x",
  "debian-openssl-3.0.x",
  "rhel-openssl-1.0.x",
  "rhel-openssl-1.1.x",
  "rhel-openssl-3.0.x",
  "linux-arm64-openssl-1.1.x",
  "linux-arm64-openssl-1.0.x",
  "linux-arm64-openssl-3.0.x",
  "linux-arm-openssl-1.1.x",
  "linux-arm-openssl-1.0.x",
  "linux-arm-openssl-3.0.x",
  "linux-musl",
  "linux-musl-openssl-3.0.x",
  "linux-musl-arm64-openssl-1.1.x",
  "linux-musl-arm64-openssl-3.0.x",
  "linux-nixos",
  "linux-static-x64",
  "linux-static-arm64",
  "windows",
  "freebsd11",
  "freebsd12",
  "freebsd13",
  "freebsd14",
  "openbsd",
  "netbsd",
  "arm",
];
g();
p();
f();
d();
m();
var da = "library";
function kt(e) {
  let t = Mp();
  return (
    t ||
    ((e == null ? void 0 : e.config.engineType) === "library"
      ? "library"
      : (e == null ? void 0 : e.config.engineType) === "binary"
      ? "binary"
      : (e == null ? void 0 : e.config.engineType) === "wasm"
      ? "wasm"
      : da)
  );
}
function Mp() {
  let e = b.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === "library"
    ? "library"
    : e === "binary"
    ? "binary"
    : e === "wasm"
    ? "wasm"
    : void 0;
}
g();
p();
f();
d();
m();
var Ar = _e(Xo());
function ei(e) {
  return Ar.default.sep === Ar.default.posix.sep
    ? e
    : e.split(Ar.default.sep).join(Ar.default.posix.sep);
}
var nr = {};
xr(nr, {
  error: () => Dp,
  info: () => Fp,
  log: () => kp,
  query: () => Np,
  should: () => va,
  tags: () => Cr,
  warn: () => ri,
});
g();
p();
f();
d();
m();
var Cr = {
    error: Xt("prisma:error"),
    warn: er("prisma:warn"),
    info: yt("prisma:info"),
    query: tr("prisma:query"),
  },
  va = { warn: () => !b.env.PRISMA_DISABLE_WARNINGS };
function kp(...e) {
  console.log(...e);
}
function ri(e, ...t) {
  va.warn() && console.warn(`${Cr.warn} ${e}`, ...t);
}
function Fp(e, ...t) {
  console.info(`${Cr.info} ${e}`, ...t);
}
function Dp(e, ...t) {
  console.error(`${Cr.error} ${e}`, ...t);
}
function Np(e, ...t) {
  console.log(`${Cr.query} ${e}`, ...t);
}
g();
p();
f();
d();
m();
function In(e, t) {
  if (!e)
    throw new Error(
      `${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`
    );
}
g();
p();
f();
d();
m();
function Ft(e, t) {
  throw new Error(t);
}
g();
p();
f();
d();
m();
function oi(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
g();
p();
f();
d();
m();
var ii = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), {});
g();
p();
f();
d();
m();
function or(e, t) {
  let r = {};
  for (let n of Object.keys(e)) r[n] = t(e[n], n);
  return r;
}
g();
p();
f();
d();
m();
function si(e, t) {
  if (e.length === 0) return;
  let r = e[0];
  for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
  return r;
}
g();
p();
f();
d();
m();
function $(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
g();
p();
f();
d();
m();
var Sa = new Set(),
  Fn = (e, t, ...r) => {
    Sa.has(e) || (Sa.add(e), ri(t, ...r));
  };
g();
p();
f();
d();
m();
var he = class extends Error {
  constructor(t, { code: r, clientVersion: n, meta: o, batchRequestIdx: i }) {
    super(t),
      (this.name = "PrismaClientKnownRequestError"),
      (this.code = r),
      (this.clientVersion = n),
      (this.meta = o),
      Object.defineProperty(this, "batchRequestIdx", {
        value: i,
        enumerable: !1,
        writable: !0,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
$(he, "PrismaClientKnownRequestError");
var ht = class extends he {
  constructor(t, r) {
    super(t, { code: "P2025", clientVersion: r }),
      (this.name = "NotFoundError");
  }
};
$(ht, "NotFoundError");
g();
p();
f();
d();
m();
var te = class e extends Error {
  constructor(t, r, n) {
    super(t),
      (this.name = "PrismaClientInitializationError"),
      (this.clientVersion = r),
      (this.errorCode = n),
      Error.captureStackTrace(e);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
$(te, "PrismaClientInitializationError");
g();
p();
f();
d();
m();
var $e = class extends Error {
  constructor(t, r) {
    super(t),
      (this.name = "PrismaClientRustPanicError"),
      (this.clientVersion = r);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
$($e, "PrismaClientRustPanicError");
g();
p();
f();
d();
m();
var be = class extends Error {
  constructor(t, { clientVersion: r, batchRequestIdx: n }) {
    super(t),
      (this.name = "PrismaClientUnknownRequestError"),
      (this.clientVersion = r),
      Object.defineProperty(this, "batchRequestIdx", {
        value: n,
        writable: !0,
        enumerable: !1,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
$(be, "PrismaClientUnknownRequestError");
g();
p();
f();
d();
m();
var Se = class extends Error {
  constructor(r, { clientVersion: n }) {
    super(r);
    this.name = "PrismaClientValidationError";
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
$(Se, "PrismaClientValidationError");
g();
p();
f();
d();
m();
var Sr = class {
  constructor(t) {
    this._engine = t;
  }
  prometheus(t) {
    return this._engine.metrics({ format: "prometheus", ...t });
  }
  json(t) {
    return this._engine.metrics({ format: "json", ...t });
  }
};
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
function Mr(e) {
  let t;
  return {
    get() {
      return t || (t = { value: e() }), t.value;
    },
  };
}
function Bp(e, t) {
  let r = Mr(() => jp(t));
  Object.defineProperty(e, "dmmf", { get: () => r.get() });
}
function jp(e) {
  return {
    datamodel: { models: ai(e.models), enums: ai(e.enums), types: ai(e.types) },
  };
}
function ai(e) {
  return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
g();
p();
f();
d();
m();
var Up = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"],
  Ra = Up;
g();
p();
f();
d();
m();
var vP = [
    "JsonNullValueInput",
    "NullableJsonNullValueInput",
    "JsonNullValueFilter",
  ],
  Dn = Symbol(),
  ui = new WeakMap(),
  nt = class {
    constructor(t) {
      t === Dn
        ? ui.set(this, `Prisma.${this._getName()}`)
        : ui.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`
          );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return ui.get(this);
    }
  },
  Rr = class extends nt {
    _getNamespace() {
      return "NullTypes";
    }
  },
  Or = class extends Rr {};
ci(Or, "DbNull");
var Ir = class extends Rr {};
ci(Ir, "JsonNull");
var kr = class extends Rr {};
ci(kr, "AnyNull");
var li = {
  classes: { DbNull: Or, JsonNull: Ir, AnyNull: kr },
  instances: { DbNull: new Or(Dn), JsonNull: new Ir(Dn), AnyNull: new kr(Dn) },
};
function ci(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
function Fr(e) {
  return {
    ok: !1,
    error: e,
    map() {
      return Fr(e);
    },
    flatMap() {
      return Fr(e);
    },
  };
}
var pi = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (; this.registeredErrors[r] !== void 0; ) r++;
      return (this.registeredErrors[r] = { error: t }), r;
    }
  },
  fi = (e) => {
    let t = new pi(),
      r = Dt(t, e.startTransaction.bind(e)),
      n = {
        errorRegistry: t,
        queryRaw: Dt(t, e.queryRaw.bind(e)),
        executeRaw: Dt(t, e.executeRaw.bind(e)),
        provider: e.provider,
        startTransaction: async (...o) => (await r(...o)).map((s) => $p(t, s)),
      };
    return (
      e.getConnectionInfo &&
        (n.getConnectionInfo = qp(t, e.getConnectionInfo.bind(e))),
      n
    );
  },
  $p = (e, t) => ({
    provider: t.provider,
    options: t.options,
    queryRaw: Dt(e, t.queryRaw.bind(t)),
    executeRaw: Dt(e, t.executeRaw.bind(t)),
    commit: Dt(e, t.commit.bind(t)),
    rollback: Dt(e, t.rollback.bind(t)),
  });
function Dt(e, t) {
  return async (...r) => {
    try {
      return await t(...r);
    } catch (n) {
      let o = e.registerNewError(n);
      return Fr({ kind: "GenericJs", id: o });
    }
  };
}
function qp(e, t) {
  return (...r) => {
    try {
      return t(...r);
    } catch (n) {
      let o = e.registerNewError(n);
      return Fr({ kind: "GenericJs", id: o });
    }
  };
}
var yL = _e(Oa()),
  Ul = _e(xa());
Yo();
var ln = _e(Xo());
g();
p();
f();
d();
m();
var Le = class e {
  constructor(t, r) {
    if (t.length - 1 !== r.length)
      throw t.length === 0
        ? new TypeError("Expected at least 1 string")
        : new TypeError(
            `Expected ${t.length} strings to have ${t.length - 1} values`
          );
    let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
    (this.values = new Array(n)),
      (this.strings = new Array(n + 1)),
      (this.strings[0] = t[0]);
    let o = 0,
      i = 0;
    for (; o < r.length; ) {
      let s = r[o++],
        a = t[o];
      if (s instanceof e) {
        this.strings[i] += s.strings[0];
        let u = 0;
        for (; u < s.values.length; )
          (this.values[i++] = s.values[u++]), (this.strings[i] = s.strings[u]);
        this.strings[i] += a;
      } else (this.values[i++] = s), (this.strings[i] = a);
    }
  }
  get text() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `$${r}${this.strings[r++]}`;
    return n;
  }
  get sql() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `?${this.strings[r++]}`;
    return n;
  }
  get statement() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `:${r}${this.strings[r++]}`;
    return n;
  }
  inspect() {
    return { text: this.text, sql: this.sql, values: this.values };
  }
};
function Vp(e, t = ",", r = "", n = "") {
  if (e.length === 0)
    throw new TypeError(
      "Expected `join([])` to be called with an array of multiple elements, but got an empty array"
    );
  return new Le([r, ...Array(e.length - 1).fill(t), n], e);
}
function Ia(e) {
  return new Le([e], []);
}
var Kp = Ia("");
function ka(e, ...t) {
  return new Le(e, t);
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
function Dr(e) {
  return {
    getKeys() {
      return Object.keys(e);
    },
    getPropertyValue(t) {
      return e[t];
    },
  };
}
g();
p();
f();
d();
m();
function Me(e, t) {
  return {
    getKeys() {
      return [e];
    },
    getPropertyValue() {
      return t();
    },
  };
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var He = class {
  constructor() {
    this._map = new Map();
  }
  get(t) {
    var r;
    return (r = this._map.get(t)) == null ? void 0 : r.value;
  }
  set(t, r) {
    this._map.set(t, { value: r });
  }
  getOrCreate(t, r) {
    let n = this._map.get(t);
    if (n) return n.value;
    let o = r();
    return this.set(t, o), o;
  }
};
function Nt(e) {
  let t = new He();
  return {
    getKeys() {
      return e.getKeys();
    },
    getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    },
    getPropertyDescriptor(r) {
      var n;
      return (n = e.getPropertyDescriptor) == null ? void 0 : n.call(e, r);
    },
  };
}
g();
p();
f();
d();
m();
var Na = _e(Ko());
g();
p();
f();
d();
m();
var Nn = { enumerable: !0, configurable: !0, writable: !0 };
function Ln(e) {
  let t = new Set(e);
  return {
    getOwnPropertyDescriptor: () => Nn,
    has: (r, n) => t.has(n),
    set: (r, n, o) => t.add(n) && Reflect.set(r, n, o),
    ownKeys: () => [...t],
  };
}
var Fa = Symbol.for("nodejs.util.inspect.custom");
function ze(e, t) {
  let r = Qp(t),
    n = new Set(),
    o = new Proxy(e, {
      get(i, s) {
        if (n.has(s)) return i[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : i[s];
      },
      has(i, s) {
        var u, l;
        if (n.has(s)) return !0;
        let a = r.get(s);
        return a
          ? (l = (u = a.has) == null ? void 0 : u.call(a, s)) != null
            ? l
            : !0
          : Reflect.has(i, s);
      },
      ownKeys(i) {
        let s = Da(Reflect.ownKeys(i), r),
          a = Da(Array.from(r.keys()), r);
        return [...new Set([...s, ...a, ...n])];
      },
      set(i, s, a) {
        var l, c;
        let u = r.get(s);
        return ((c =
          (l = u == null ? void 0 : u.getPropertyDescriptor) == null
            ? void 0
            : l.call(u, s)) == null
          ? void 0
          : c.writable) === !1
          ? !1
          : (n.add(s), Reflect.set(i, s, a));
      },
      getOwnPropertyDescriptor(i, s) {
        let a = Reflect.getOwnPropertyDescriptor(i, s);
        if (a && !a.configurable) return a;
        let u = r.get(s);
        return u
          ? u.getPropertyDescriptor
            ? { ...Nn, ...(u == null ? void 0 : u.getPropertyDescriptor(s)) }
            : Nn
          : a;
      },
      defineProperty(i, s, a) {
        return n.add(s), Reflect.defineProperty(i, s, a);
      },
    });
  return (
    (o[Fa] = function (i, s, a = Na.inspect) {
      let u = { ...this };
      return delete u[Fa], a(u, s);
    }),
    o
  );
}
function Qp(e) {
  let t = new Map();
  for (let r of e) {
    let n = r.getKeys();
    for (let o of n) t.set(o, r);
  }
  return t;
}
function Da(e, t) {
  return e.filter((r) => {
    var o, i;
    let n = t.get(r);
    return (i =
      (o = n == null ? void 0 : n.has) == null ? void 0 : o.call(n, r)) != null
      ? i
      : !0;
  });
}
g();
p();
f();
d();
m();
function Nr(e) {
  return {
    getKeys() {
      return e;
    },
    has() {
      return !1;
    },
    getPropertyValue() {},
  };
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var ir = class {
  constructor(t = 0, r) {
    this.context = r;
    this.lines = [];
    this.currentLine = "";
    this.currentIndent = 0;
    this.currentIndent = t;
  }
  write(t) {
    return typeof t == "string" ? (this.currentLine += t) : t.write(this), this;
  }
  writeJoined(t, r) {
    let n = r.length - 1;
    for (let o = 0; o < r.length; o++)
      this.write(r[o]), o !== n && this.write(t);
    return this;
  }
  writeLine(t) {
    return this.write(t).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()),
      (this.currentLine = ""),
      (this.marginSymbol = void 0);
    let t = this.afterNextNewLineCallback;
    return (this.afterNextNewLineCallback = void 0), t == null || t(), this;
  }
  withIndent(t) {
    return this.indent(), t(this), this.unindent(), this;
  }
  afterNextNewline(t) {
    return (this.afterNextNewLineCallback = t), this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(t) {
    return (this.marginSymbol = t), this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let t = this.currentLine.padStart(
      this.currentLine.length + 2 * this.currentIndent
    );
    return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
  }
};
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
function sr(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function Bn(e) {
  return e.toString() !== "Invalid Date";
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var ar = 9e15,
  Et = 1e9,
  di = "0123456789abcdef",
  Un =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  $n =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  mi = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -ar,
    maxE: ar,
    crypto: !1,
  },
  Ua,
  ot,
  q = !0,
  Vn = "[DecimalError] ",
  xt = Vn + "Invalid argument: ",
  $a = Vn + "Precision limit exceeded",
  qa = Vn + "crypto unavailable",
  Va = "[object Decimal]",
  ve = Math.floor,
  ue = Math.pow,
  Jp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  Gp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  Wp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  Ka = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Ke = 1e7,
  U = 7,
  Hp = 9007199254740991,
  zp = Un.length - 1,
  gi = $n.length - 1,
  M = { toStringTag: Va };
M.absoluteValue = M.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), B(e);
};
M.ceil = function () {
  return B(new this.constructor(this), this.e + 1, 2);
};
M.clampedTo = M.clamp = function (e, t) {
  var r,
    n = this,
    o = n.constructor;
  if (((e = new o(e)), (t = new o(t)), !e.s || !t.s)) return new o(NaN);
  if (e.gt(t)) throw Error(xt + t);
  return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new o(n);
};
M.comparedTo = M.cmp = function (e) {
  var t,
    r,
    n,
    o,
    i = this,
    s = i.d,
    a = (e = new i.constructor(e)).d,
    u = i.s,
    l = e.s;
  if (!s || !a)
    return !u || !l ? NaN : u !== l ? u : s === a ? 0 : !s ^ (u < 0) ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? u : a[0] ? -l : 0;
  if (u !== l) return u;
  if (i.e !== e.e) return (i.e > e.e) ^ (u < 0) ? 1 : -1;
  for (n = s.length, o = a.length, t = 0, r = n < o ? n : o; t < r; ++t)
    if (s[t] !== a[t]) return (s[t] > a[t]) ^ (u < 0) ? 1 : -1;
  return n === o ? 0 : (n > o) ^ (u < 0) ? 1 : -1;
};
M.cosine = M.cos = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.d
    ? r.d[0]
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + U),
        (n.rounding = 1),
        (r = Yp(n, Ha(n, r))),
        (n.precision = e),
        (n.rounding = t),
        B(ot == 2 || ot == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
M.cubeRoot = M.cbrt = function () {
  var e,
    t,
    r,
    n,
    o,
    i,
    s,
    a,
    u,
    l,
    c = this,
    y = c.constructor;
  if (!c.isFinite() || c.isZero()) return new y(c);
  for (
    q = !1,
      i = c.s * ue(c.s * c, 1 / 3),
      !i || Math.abs(i) == 1 / 0
        ? ((r = we(c.d)),
          (e = c.e),
          (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"),
          (i = ue(r, 1 / 3)),
          (e = ve((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
          i == 1 / 0
            ? (r = "5e" + e)
            : ((r = i.toExponential()),
              (r = r.slice(0, r.indexOf("e") + 1) + e)),
          (n = new y(r)),
          (n.s = c.s))
        : (n = new y(i.toString())),
      s = (e = y.precision) + 3;
    ;

  )
    if (
      ((a = n),
      (u = a.times(a).times(a)),
      (l = u.plus(c)),
      (n = Z(l.plus(c).times(a), l.plus(u), s + 2, 1)),
      we(a.d).slice(0, s) === (r = we(n.d)).slice(0, s))
    )
      if (((r = r.slice(s - 3, s + 1)), r == "9999" || (!o && r == "4999"))) {
        if (!o && (B(a, e + 1, 0), a.times(a).times(a).eq(c))) {
          n = a;
          break;
        }
        (s += 4), (o = 1);
      } else {
        (!+r || (!+r.slice(1) && r.charAt(0) == "5")) &&
          (B(n, e + 1, 1), (t = !n.times(n).times(n).eq(c)));
        break;
      }
  return (q = !0), B(n, e, y.rounding, t);
};
M.decimalPlaces = M.dp = function () {
  var e,
    t = this.d,
    r = NaN;
  if (t) {
    if (((e = t.length - 1), (r = (e - ve(this.e / U)) * U), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
M.dividedBy = M.div = function (e) {
  return Z(this, new this.constructor(e));
};
M.dividedToIntegerBy = M.divToInt = function (e) {
  var t = this,
    r = t.constructor;
  return B(Z(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
M.equals = M.eq = function (e) {
  return this.cmp(e) === 0;
};
M.floor = function () {
  return B(new this.constructor(this), this.e + 1, 3);
};
M.greaterThan = M.gt = function (e) {
  return this.cmp(e) > 0;
};
M.greaterThanOrEqualTo = M.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
M.hyperbolicCosine = M.cosh = function () {
  var e,
    t,
    r,
    n,
    o,
    i = this,
    s = i.constructor,
    a = new s(1);
  if (!i.isFinite()) return new s(i.s ? 1 / 0 : NaN);
  if (i.isZero()) return a;
  (r = s.precision),
    (n = s.rounding),
    (s.precision = r + Math.max(i.e, i.sd()) + 4),
    (s.rounding = 1),
    (o = i.d.length),
    o < 32
      ? ((e = Math.ceil(o / 3)), (t = (1 / Qn(4, e)).toString()))
      : ((e = 16), (t = "2.3283064365386962890625e-10")),
    (i = ur(s, 1, i.times(t), new s(1), !0));
  for (var u, l = e, c = new s(8); l--; )
    (u = i.times(i)), (i = a.minus(u.times(c.minus(u.times(c)))));
  return B(i, (s.precision = r), (s.rounding = n), !0);
};
M.hyperbolicSine = M.sinh = function () {
  var e,
    t,
    r,
    n,
    o = this,
    i = o.constructor;
  if (!o.isFinite() || o.isZero()) return new i(o);
  if (
    ((t = i.precision),
    (r = i.rounding),
    (i.precision = t + Math.max(o.e, o.sd()) + 4),
    (i.rounding = 1),
    (n = o.d.length),
    n < 3)
  )
    o = ur(i, 2, o, o, !0);
  else {
    (e = 1.4 * Math.sqrt(n)),
      (e = e > 16 ? 16 : e | 0),
      (o = o.times(1 / Qn(5, e))),
      (o = ur(i, 2, o, o, !0));
    for (var s, a = new i(5), u = new i(16), l = new i(20); e--; )
      (s = o.times(o)), (o = o.times(a.plus(s.times(u.times(s).plus(l)))));
  }
  return (i.precision = t), (i.rounding = r), B(o, t, r, !0);
};
M.hyperbolicTangent = M.tanh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 7),
        (n.rounding = 1),
        Z(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
    : new n(r.s);
};
M.inverseCosine = M.acos = function () {
  var e,
    t = this,
    r = t.constructor,
    n = t.abs().cmp(1),
    o = r.precision,
    i = r.rounding;
  return n !== -1
    ? n === 0
      ? t.isNeg()
        ? Ve(r, o, i)
        : new r(0)
      : new r(NaN)
    : t.isZero()
    ? Ve(r, o + 4, i).times(0.5)
    : ((r.precision = o + 6),
      (r.rounding = 1),
      (t = t.asin()),
      (e = Ve(r, o + 4, i).times(0.5)),
      (r.precision = o),
      (r.rounding = i),
      e.minus(t));
};
M.inverseHyperbolicCosine = M.acosh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
    ? ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
      (n.rounding = 1),
      (q = !1),
      (r = r.times(r).minus(1).sqrt().plus(r)),
      (q = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln())
    : new n(r);
};
M.inverseHyperbolicSine = M.asinh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
      (n.rounding = 1),
      (q = !1),
      (r = r.times(r).plus(1).sqrt().plus(r)),
      (q = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln());
};
M.inverseHyperbolicTangent = M.atanh = function () {
  var e,
    t,
    r,
    n,
    o = this,
    i = o.constructor;
  return o.isFinite()
    ? o.e >= 0
      ? new i(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN)
      : ((e = i.precision),
        (t = i.rounding),
        (n = o.sd()),
        Math.max(n, e) < 2 * -o.e - 1
          ? B(new i(o), e, t, !0)
          : ((i.precision = r = n - o.e),
            (o = Z(o.plus(1), new i(1).minus(o), r + e, 1)),
            (i.precision = e + 4),
            (i.rounding = 1),
            (o = o.ln()),
            (i.precision = e),
            (i.rounding = t),
            o.times(0.5)))
    : new i(NaN);
};
M.inverseSine = M.asin = function () {
  var e,
    t,
    r,
    n,
    o = this,
    i = o.constructor;
  return o.isZero()
    ? new i(o)
    : ((t = o.abs().cmp(1)),
      (r = i.precision),
      (n = i.rounding),
      t !== -1
        ? t === 0
          ? ((e = Ve(i, r + 4, n).times(0.5)), (e.s = o.s), e)
          : new i(NaN)
        : ((i.precision = r + 6),
          (i.rounding = 1),
          (o = o.div(new i(1).minus(o.times(o)).sqrt().plus(1)).atan()),
          (i.precision = r),
          (i.rounding = n),
          o.times(2)));
};
M.inverseTangent = M.atan = function () {
  var e,
    t,
    r,
    n,
    o,
    i,
    s,
    a,
    u,
    l = this,
    c = l.constructor,
    y = c.precision,
    h = c.rounding;
  if (l.isFinite()) {
    if (l.isZero()) return new c(l);
    if (l.abs().eq(1) && y + 4 <= gi)
      return (s = Ve(c, y + 4, h).times(0.25)), (s.s = l.s), s;
  } else {
    if (!l.s) return new c(NaN);
    if (y + 4 <= gi) return (s = Ve(c, y + 4, h).times(0.5)), (s.s = l.s), s;
  }
  for (
    c.precision = a = y + 10,
      c.rounding = 1,
      r = Math.min(28, (a / U + 2) | 0),
      e = r;
    e;
    --e
  )
    l = l.div(l.times(l).plus(1).sqrt().plus(1));
  for (
    q = !1, t = Math.ceil(a / U), n = 1, u = l.times(l), s = new c(l), o = l;
    e !== -1;

  )
    if (
      ((o = o.times(u)),
      (i = s.minus(o.div((n += 2)))),
      (o = o.times(u)),
      (s = i.plus(o.div((n += 2)))),
      s.d[t] !== void 0)
    )
      for (e = t; s.d[e] === i.d[e] && e--; );
  return (
    r && (s = s.times(2 << (r - 1))),
    (q = !0),
    B(s, (c.precision = y), (c.rounding = h), !0)
  );
};
M.isFinite = function () {
  return !!this.d;
};
M.isInteger = M.isInt = function () {
  return !!this.d && ve(this.e / U) > this.d.length - 2;
};
M.isNaN = function () {
  return !this.s;
};
M.isNegative = M.isNeg = function () {
  return this.s < 0;
};
M.isPositive = M.isPos = function () {
  return this.s > 0;
};
M.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
M.lessThan = M.lt = function (e) {
  return this.cmp(e) < 0;
};
M.lessThanOrEqualTo = M.lte = function (e) {
  return this.cmp(e) < 1;
};
M.logarithm = M.log = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    u,
    l = this,
    c = l.constructor,
    y = c.precision,
    h = c.rounding,
    A = 5;
  if (e == null) (e = new c(10)), (t = !0);
  else {
    if (((e = new c(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1)))
      return new c(NaN);
    t = e.eq(10);
  }
  if (((r = l.d), l.s < 0 || !r || !r[0] || l.eq(1)))
    return new c(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1) i = !0;
    else {
      for (o = r[0]; o % 10 === 0; ) o /= 10;
      i = o !== 1;
    }
  if (
    ((q = !1),
    (a = y + A),
    (s = wt(l, a)),
    (n = t ? qn(c, a + 10) : wt(e, a)),
    (u = Z(s, n, a, 1)),
    Lr(u.d, (o = y), h))
  )
    do
      if (
        ((a += 10),
        (s = wt(l, a)),
        (n = t ? qn(c, a + 10) : wt(e, a)),
        (u = Z(s, n, a, 1)),
        !i)
      ) {
        +we(u.d).slice(o + 1, o + 15) + 1 == 1e14 && (u = B(u, y + 1, 0));
        break;
      }
    while (Lr(u.d, (o += 10), h));
  return (q = !0), B(u, y, h);
};
M.minus = M.sub = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    u,
    l,
    c,
    y,
    h,
    A = this,
    _ = A.constructor;
  if (((e = new _(e)), !A.d || !e.d))
    return (
      !A.s || !e.s
        ? (e = new _(NaN))
        : A.d
        ? (e.s = -e.s)
        : (e = new _(e.d || A.s !== e.s ? A : NaN)),
      e
    );
  if (A.s != e.s) return (e.s = -e.s), A.plus(e);
  if (
    ((l = A.d), (h = e.d), (a = _.precision), (u = _.rounding), !l[0] || !h[0])
  ) {
    if (h[0]) e.s = -e.s;
    else if (l[0]) e = new _(A);
    else return new _(u === 3 ? -0 : 0);
    return q ? B(e, a, u) : e;
  }
  if (((r = ve(e.e / U)), (c = ve(A.e / U)), (l = l.slice()), (i = c - r), i)) {
    for (
      y = i < 0,
        y
          ? ((t = l), (i = -i), (s = h.length))
          : ((t = h), (r = c), (s = l.length)),
        n = Math.max(Math.ceil(a / U), s) + 2,
        i > n && ((i = n), (t.length = 1)),
        t.reverse(),
        n = i;
      n--;

    )
      t.push(0);
    t.reverse();
  } else {
    for (n = l.length, s = h.length, y = n < s, y && (s = n), n = 0; n < s; n++)
      if (l[n] != h[n]) {
        y = l[n] < h[n];
        break;
      }
    i = 0;
  }
  for (
    y && ((t = l), (l = h), (h = t), (e.s = -e.s)),
      s = l.length,
      n = h.length - s;
    n > 0;
    --n
  )
    l[s++] = 0;
  for (n = h.length; n > i; ) {
    if (l[--n] < h[n]) {
      for (o = n; o && l[--o] === 0; ) l[o] = Ke - 1;
      --l[o], (l[n] += Ke);
    }
    l[n] -= h[n];
  }
  for (; l[--s] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --r;
  return l[0]
    ? ((e.d = l), (e.e = Kn(l, r)), q ? B(e, a, u) : e)
    : new _(u === 3 ? -0 : 0);
};
M.modulo = M.mod = function (e) {
  var t,
    r = this,
    n = r.constructor;
  return (
    (e = new n(e)),
    !r.d || !e.s || (e.d && !e.d[0])
      ? new n(NaN)
      : !e.d || (r.d && !r.d[0])
      ? B(new n(r), n.precision, n.rounding)
      : ((q = !1),
        n.modulo == 9
          ? ((t = Z(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
          : (t = Z(r, e, 0, n.modulo, 1)),
        (t = t.times(e)),
        (q = !0),
        r.minus(t))
  );
};
M.naturalExponential = M.exp = function () {
  return yi(this);
};
M.naturalLogarithm = M.ln = function () {
  return wt(this);
};
M.negated = M.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), B(e);
};
M.plus = M.add = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    u,
    l,
    c,
    y = this,
    h = y.constructor;
  if (((e = new h(e)), !y.d || !e.d))
    return (
      !y.s || !e.s
        ? (e = new h(NaN))
        : y.d || (e = new h(e.d || y.s === e.s ? y : NaN)),
      e
    );
  if (y.s != e.s) return (e.s = -e.s), y.minus(e);
  if (
    ((l = y.d), (c = e.d), (a = h.precision), (u = h.rounding), !l[0] || !c[0])
  )
    return c[0] || (e = new h(y)), q ? B(e, a, u) : e;
  if (((i = ve(y.e / U)), (n = ve(e.e / U)), (l = l.slice()), (o = i - n), o)) {
    for (
      o < 0
        ? ((r = l), (o = -o), (s = c.length))
        : ((r = c), (n = i), (s = l.length)),
        i = Math.ceil(a / U),
        s = i > s ? i + 1 : s + 1,
        o > s && ((o = s), (r.length = 1)),
        r.reverse();
      o--;

    )
      r.push(0);
    r.reverse();
  }
  for (
    s = l.length,
      o = c.length,
      s - o < 0 && ((o = s), (r = c), (c = l), (l = r)),
      t = 0;
    o;

  )
    (t = ((l[--o] = l[o] + c[o] + t) / Ke) | 0), (l[o] %= Ke);
  for (t && (l.unshift(t), ++n), s = l.length; l[--s] == 0; ) l.pop();
  return (e.d = l), (e.e = Kn(l, n)), q ? B(e, a, u) : e;
};
M.precision = M.sd = function (e) {
  var t,
    r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(xt + e);
  return (
    r.d ? ((t = Qa(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
  );
};
M.round = function () {
  var e = this,
    t = e.constructor;
  return B(new t(e), e.e + 1, t.rounding);
};
M.sine = M.sin = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + U),
        (n.rounding = 1),
        (r = Xp(n, Ha(n, r))),
        (n.precision = e),
        (n.rounding = t),
        B(ot > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
M.squareRoot = M.sqrt = function () {
  var e,
    t,
    r,
    n,
    o,
    i,
    s = this,
    a = s.d,
    u = s.e,
    l = s.s,
    c = s.constructor;
  if (l !== 1 || !a || !a[0])
    return new c(!l || (l < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0);
  for (
    q = !1,
      l = Math.sqrt(+s),
      l == 0 || l == 1 / 0
        ? ((t = we(a)),
          (t.length + u) % 2 == 0 && (t += "0"),
          (l = Math.sqrt(t)),
          (u = ve((u + 1) / 2) - (u < 0 || u % 2)),
          l == 1 / 0
            ? (t = "5e" + u)
            : ((t = l.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + u)),
          (n = new c(t)))
        : (n = new c(l.toString())),
      r = (u = c.precision) + 3;
    ;

  )
    if (
      ((i = n),
      (n = i.plus(Z(s, i, r + 2, 1)).times(0.5)),
      we(i.d).slice(0, r) === (t = we(n.d)).slice(0, r))
    )
      if (((t = t.slice(r - 3, r + 1)), t == "9999" || (!o && t == "4999"))) {
        if (!o && (B(i, u + 1, 0), i.times(i).eq(s))) {
          n = i;
          break;
        }
        (r += 4), (o = 1);
      } else {
        (!+t || (!+t.slice(1) && t.charAt(0) == "5")) &&
          (B(n, u + 1, 1), (e = !n.times(n).eq(s)));
        break;
      }
  return (q = !0), B(n, u, c.rounding, e);
};
M.tangent = M.tan = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 10),
        (n.rounding = 1),
        (r = r.sin()),
        (r.s = 1),
        (r = Z(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
        (n.precision = e),
        (n.rounding = t),
        B(ot == 2 || ot == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
M.times = M.mul = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    u,
    l,
    c = this,
    y = c.constructor,
    h = c.d,
    A = (e = new y(e)).d;
  if (((e.s *= c.s), !h || !h[0] || !A || !A[0]))
    return new y(
      !e.s || (h && !h[0] && !A) || (A && !A[0] && !h)
        ? NaN
        : !h || !A
        ? e.s / 0
        : e.s * 0
    );
  for (
    r = ve(c.e / U) + ve(e.e / U),
      u = h.length,
      l = A.length,
      u < l && ((i = h), (h = A), (A = i), (s = u), (u = l), (l = s)),
      i = [],
      s = u + l,
      n = s;
    n--;

  )
    i.push(0);
  for (n = l; --n >= 0; ) {
    for (t = 0, o = u + n; o > n; )
      (a = i[o] + A[n] * h[o - n - 1] + t),
        (i[o--] = a % Ke | 0),
        (t = (a / Ke) | 0);
    i[o] = (i[o] + t) % Ke | 0;
  }
  for (; !i[--s]; ) i.pop();
  return (
    t ? ++r : i.shift(),
    (e.d = i),
    (e.e = Kn(i, r)),
    q ? B(e, y.precision, y.rounding) : e
  );
};
M.toBinary = function (e, t) {
  return bi(this, 2, e, t);
};
M.toDecimalPlaces = M.toDP = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (Ie(e, 0, Et),
        t === void 0 ? (t = n.rounding) : Ie(t, 0, 8),
        B(r, e + r.e + 1, t))
  );
};
M.toExponential = function (e, t) {
  var r,
    n = this,
    o = n.constructor;
  return (
    e === void 0
      ? (r = Ye(n, !0))
      : (Ie(e, 0, Et),
        t === void 0 ? (t = o.rounding) : Ie(t, 0, 8),
        (n = B(new o(n), e + 1, t)),
        (r = Ye(n, !0, e + 1))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
M.toFixed = function (e, t) {
  var r,
    n,
    o = this,
    i = o.constructor;
  return (
    e === void 0
      ? (r = Ye(o))
      : (Ie(e, 0, Et),
        t === void 0 ? (t = i.rounding) : Ie(t, 0, 8),
        (n = B(new i(o), e + o.e + 1, t)),
        (r = Ye(n, !1, e + n.e + 1))),
    o.isNeg() && !o.isZero() ? "-" + r : r
  );
};
M.toFraction = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    u,
    l,
    c,
    y,
    h,
    A = this,
    _ = A.d,
    T = A.constructor;
  if (!_) return new T(A);
  if (
    ((l = r = new T(1)),
    (n = u = new T(0)),
    (t = new T(n)),
    (i = t.e = Qa(_) - A.e - 1),
    (s = i % U),
    (t.d[0] = ue(10, s < 0 ? U + s : s)),
    e == null)
  )
    e = i > 0 ? t : l;
  else {
    if (((a = new T(e)), !a.isInt() || a.lt(l))) throw Error(xt + a);
    e = a.gt(t) ? (i > 0 ? t : l) : a;
  }
  for (
    q = !1,
      a = new T(we(_)),
      c = T.precision,
      T.precision = i = _.length * U * 2;
    (y = Z(a, t, 0, 1, 1)), (o = r.plus(y.times(n))), o.cmp(e) != 1;

  )
    (r = n),
      (n = o),
      (o = l),
      (l = u.plus(y.times(o))),
      (u = o),
      (o = t),
      (t = a.minus(y.times(o))),
      (a = o);
  return (
    (o = Z(e.minus(r), n, 0, 1, 1)),
    (u = u.plus(o.times(l))),
    (r = r.plus(o.times(n))),
    (u.s = l.s = A.s),
    (h =
      Z(l, n, i, 1).minus(A).abs().cmp(Z(u, r, i, 1).minus(A).abs()) < 1
        ? [l, n]
        : [u, r]),
    (T.precision = c),
    (q = !0),
    h
  );
};
M.toHexadecimal = M.toHex = function (e, t) {
  return bi(this, 16, e, t);
};
M.toNearest = function (e, t) {
  var r = this,
    n = r.constructor;
  if (((r = new n(r)), e == null)) {
    if (!r.d) return r;
    (e = new n(1)), (t = n.rounding);
  } else {
    if (((e = new n(e)), t === void 0 ? (t = n.rounding) : Ie(t, 0, 8), !r.d))
      return e.s ? r : e;
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return (
    e.d[0]
      ? ((q = !1), (r = Z(r, e, 0, t, 1).times(e)), (q = !0), B(r))
      : ((e.s = r.s), (r = e)),
    r
  );
};
M.toNumber = function () {
  return +this;
};
M.toOctal = function (e, t) {
  return bi(this, 8, e, t);
};
M.toPower = M.pow = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a = this,
    u = a.constructor,
    l = +(e = new u(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(ue(+a, l));
  if (((a = new u(a)), a.eq(1))) return a;
  if (((n = u.precision), (i = u.rounding), e.eq(1))) return B(a, n, i);
  if (((t = ve(e.e / U)), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= Hp))
    return (o = Ja(u, a, r, n)), e.s < 0 ? new u(1).div(o) : B(o, n, i);
  if (((s = a.s), s < 0)) {
    if (t < e.d.length - 1) return new u(NaN);
    if ((e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1))
      return (a.s = s), a;
  }
  return (
    (r = ue(+a, l)),
    (t =
      r == 0 || !isFinite(r)
        ? ve(l * (Math.log("0." + we(a.d)) / Math.LN10 + a.e + 1))
        : new u(r + "").e),
    t > u.maxE + 1 || t < u.minE - 1
      ? new u(t > 0 ? s / 0 : 0)
      : ((q = !1),
        (u.rounding = a.s = 1),
        (r = Math.min(12, (t + "").length)),
        (o = yi(e.times(wt(a, n + r)), n)),
        o.d &&
          ((o = B(o, n + 5, 1)),
          Lr(o.d, n, i) &&
            ((t = n + 10),
            (o = B(yi(e.times(wt(a, t + r)), t), t + 5, 1)),
            +we(o.d).slice(n + 1, n + 15) + 1 == 1e14 && (o = B(o, n + 1, 0)))),
        (o.s = s),
        (q = !0),
        (u.rounding = i),
        B(o, n, i))
  );
};
M.toPrecision = function (e, t) {
  var r,
    n = this,
    o = n.constructor;
  return (
    e === void 0
      ? (r = Ye(n, n.e <= o.toExpNeg || n.e >= o.toExpPos))
      : (Ie(e, 1, Et),
        t === void 0 ? (t = o.rounding) : Ie(t, 0, 8),
        (n = B(new o(n), e, t)),
        (r = Ye(n, e <= n.e || n.e <= o.toExpNeg, e))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
M.toSignificantDigits = M.toSD = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (Ie(e, 1, Et), t === void 0 ? (t = n.rounding) : Ie(t, 0, 8)),
    B(new n(r), e, t)
  );
};
M.toString = function () {
  var e = this,
    t = e.constructor,
    r = Ye(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
M.truncated = M.trunc = function () {
  return B(new this.constructor(this), this.e + 1, 1);
};
M.valueOf = M.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = Ye(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function we(e) {
  var t,
    r,
    n,
    o = e.length - 1,
    i = "",
    s = e[0];
  if (o > 0) {
    for (i += s, t = 1; t < o; t++)
      (n = e[t] + ""), (r = U - n.length), r && (i += bt(r)), (i += n);
    (s = e[t]), (n = s + ""), (r = U - n.length), r && (i += bt(r));
  } else if (s === 0) return "0";
  for (; s % 10 === 0; ) s /= 10;
  return i + s;
}
function Ie(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(xt + e);
}
function Lr(e, t, r, n) {
  var o, i, s, a;
  for (i = e[0]; i >= 10; i /= 10) --t;
  return (
    --t < 0 ? ((t += U), (o = 0)) : ((o = Math.ceil((t + 1) / U)), (t %= U)),
    (i = ue(10, U - t)),
    (a = e[o] % i | 0),
    n == null
      ? t < 3
        ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
          (s =
            (r < 4 && a == 99999) ||
            (r > 3 && a == 49999) ||
            a == 5e4 ||
            a == 0))
        : (s =
            (((r < 4 && a + 1 == i) || (r > 3 && a + 1 == i / 2)) &&
              ((e[o + 1] / i / 100) | 0) == ue(10, t - 2) - 1) ||
            ((a == i / 2 || a == 0) && ((e[o + 1] / i / 100) | 0) == 0))
      : t < 4
      ? (t == 0
          ? (a = (a / 1e3) | 0)
          : t == 1
          ? (a = (a / 100) | 0)
          : t == 2 && (a = (a / 10) | 0),
        (s = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
      : (s =
          (((n || r < 4) && a + 1 == i) || (!n && r > 3 && a + 1 == i / 2)) &&
          ((e[o + 1] / i / 1e3) | 0) == ue(10, t - 3) - 1),
    s
  );
}
function jn(e, t, r) {
  for (var n, o = [0], i, s = 0, a = e.length; s < a; ) {
    for (i = o.length; i--; ) o[i] *= t;
    for (o[0] += di.indexOf(e.charAt(s++)), n = 0; n < o.length; n++)
      o[n] > r - 1 &&
        (o[n + 1] === void 0 && (o[n + 1] = 0),
        (o[n + 1] += (o[n] / r) | 0),
        (o[n] %= r));
  }
  return o.reverse();
}
function Yp(e, t) {
  var r, n, o;
  if (t.isZero()) return t;
  (n = t.d.length),
    n < 32
      ? ((r = Math.ceil(n / 3)), (o = (1 / Qn(4, r)).toString()))
      : ((r = 16), (o = "2.3283064365386962890625e-10")),
    (e.precision += r),
    (t = ur(e, 1, t.times(o), new e(1)));
  for (var i = r; i--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return (e.precision -= r), t;
}
var Z = (function () {
  function e(n, o, i) {
    var s,
      a = 0,
      u = n.length;
    for (n = n.slice(); u--; )
      (s = n[u] * o + a), (n[u] = s % i | 0), (a = (s / i) | 0);
    return a && n.unshift(a), n;
  }
  function t(n, o, i, s) {
    var a, u;
    if (i != s) u = i > s ? 1 : -1;
    else
      for (a = u = 0; a < i; a++)
        if (n[a] != o[a]) {
          u = n[a] > o[a] ? 1 : -1;
          break;
        }
    return u;
  }
  function r(n, o, i, s) {
    for (var a = 0; i--; )
      (n[i] -= a), (a = n[i] < o[i] ? 1 : 0), (n[i] = a * s + n[i] - o[i]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, o, i, s, a, u) {
    var l,
      c,
      y,
      h,
      A,
      _,
      T,
      S,
      I,
      F,
      O,
      k,
      K,
      Q,
      je,
      Y,
      ie,
      Fe,
      se,
      De,
      ut = n.constructor,
      H = n.s == o.s ? 1 : -1,
      W = n.d,
      N = o.d;
    if (!W || !W[0] || !N || !N[0])
      return new ut(
        !n.s || !o.s || (W ? N && W[0] == N[0] : !N)
          ? NaN
          : (W && W[0] == 0) || !N
          ? H * 0
          : H / 0
      );
    for (
      u
        ? ((A = 1), (c = n.e - o.e))
        : ((u = Ke), (A = U), (c = ve(n.e / A) - ve(o.e / A))),
        se = N.length,
        ie = W.length,
        I = new ut(H),
        F = I.d = [],
        y = 0;
      N[y] == (W[y] || 0);
      y++
    );
    if (
      (N[y] > (W[y] || 0) && c--,
      i == null
        ? ((Q = i = ut.precision), (s = ut.rounding))
        : a
        ? (Q = i + (n.e - o.e) + 1)
        : (Q = i),
      Q < 0)
    )
      F.push(1), (_ = !0);
    else {
      if (((Q = (Q / A + 2) | 0), (y = 0), se == 1)) {
        for (h = 0, N = N[0], Q++; (y < ie || h) && Q--; y++)
          (je = h * u + (W[y] || 0)), (F[y] = (je / N) | 0), (h = je % N | 0);
        _ = h || y < ie;
      } else {
        for (
          h = (u / (N[0] + 1)) | 0,
            h > 1 &&
              ((N = e(N, h, u)),
              (W = e(W, h, u)),
              (se = N.length),
              (ie = W.length)),
            Y = se,
            O = W.slice(0, se),
            k = O.length;
          k < se;

        )
          O[k++] = 0;
        (De = N.slice()), De.unshift(0), (Fe = N[0]), N[1] >= u / 2 && ++Fe;
        do
          (h = 0),
            (l = t(N, O, se, k)),
            l < 0
              ? ((K = O[0]),
                se != k && (K = K * u + (O[1] || 0)),
                (h = (K / Fe) | 0),
                h > 1
                  ? (h >= u && (h = u - 1),
                    (T = e(N, h, u)),
                    (S = T.length),
                    (k = O.length),
                    (l = t(T, O, S, k)),
                    l == 1 && (h--, r(T, se < S ? De : N, S, u)))
                  : (h == 0 && (l = h = 1), (T = N.slice())),
                (S = T.length),
                S < k && T.unshift(0),
                r(O, T, k, u),
                l == -1 &&
                  ((k = O.length),
                  (l = t(N, O, se, k)),
                  l < 1 && (h++, r(O, se < k ? De : N, k, u))),
                (k = O.length))
              : l === 0 && (h++, (O = [0])),
            (F[y++] = h),
            l && O[0] ? (O[k++] = W[Y] || 0) : ((O = [W[Y]]), (k = 1));
        while ((Y++ < ie || O[0] !== void 0) && Q--);
        _ = O[0] !== void 0;
      }
      F[0] || F.shift();
    }
    if (A == 1) (I.e = c), (Ua = _);
    else {
      for (y = 1, h = F[0]; h >= 10; h /= 10) y++;
      (I.e = y + c * A - 1), B(I, a ? i + I.e + 1 : i, s, _);
    }
    return I;
  };
})();
function B(e, t, r, n) {
  var o,
    i,
    s,
    a,
    u,
    l,
    c,
    y,
    h,
    A = e.constructor;
  e: if (t != null) {
    if (((y = e.d), !y)) return e;
    for (o = 1, a = y[0]; a >= 10; a /= 10) o++;
    if (((i = t - o), i < 0))
      (i += U),
        (s = t),
        (c = y[(h = 0)]),
        (u = (c / ue(10, o - s - 1)) % 10 | 0);
    else if (((h = Math.ceil((i + 1) / U)), (a = y.length), h >= a))
      if (n) {
        for (; a++ <= h; ) y.push(0);
        (c = u = 0), (o = 1), (i %= U), (s = i - U + 1);
      } else break e;
    else {
      for (c = a = y[h], o = 1; a >= 10; a /= 10) o++;
      (i %= U),
        (s = i - U + o),
        (u = s < 0 ? 0 : (c / ue(10, o - s - 1)) % 10 | 0);
    }
    if (
      ((n =
        n ||
        t < 0 ||
        y[h + 1] !== void 0 ||
        (s < 0 ? c : c % ue(10, o - s - 1))),
      (l =
        r < 4
          ? (u || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                n ||
                (r == 6 &&
                  (i > 0 ? (s > 0 ? c / ue(10, o - s) : 0) : y[h - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !y[0])
    )
      return (
        (y.length = 0),
        l
          ? ((t -= e.e + 1),
            (y[0] = ue(10, (U - (t % U)) % U)),
            (e.e = -t || 0))
          : (y[0] = e.e = 0),
        e
      );
    if (
      (i == 0
        ? ((y.length = h), (a = 1), h--)
        : ((y.length = h + 1),
          (a = ue(10, U - i)),
          (y[h] = s > 0 ? ((c / ue(10, o - s)) % ue(10, s) | 0) * a : 0)),
      l)
    )
      for (;;)
        if (h == 0) {
          for (i = 1, s = y[0]; s >= 10; s /= 10) i++;
          for (s = y[0] += a, a = 1; s >= 10; s /= 10) a++;
          i != a && (e.e++, y[0] == Ke && (y[0] = 1));
          break;
        } else {
          if (((y[h] += a), y[h] != Ke)) break;
          (y[h--] = 0), (a = 1);
        }
    for (i = y.length; y[--i] === 0; ) y.pop();
  }
  return (
    q &&
      (e.e > A.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < A.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function Ye(e, t, r) {
  if (!e.isFinite()) return Wa(e);
  var n,
    o = e.e,
    i = we(e.d),
    s = i.length;
  return (
    t
      ? (r && (n = r - s) > 0
          ? (i = i.charAt(0) + "." + i.slice(1) + bt(n))
          : s > 1 && (i = i.charAt(0) + "." + i.slice(1)),
        (i = i + (e.e < 0 ? "e" : "e+") + e.e))
      : o < 0
      ? ((i = "0." + bt(-o - 1) + i), r && (n = r - s) > 0 && (i += bt(n)))
      : o >= s
      ? ((i += bt(o + 1 - s)),
        r && (n = r - o - 1) > 0 && (i = i + "." + bt(n)))
      : ((n = o + 1) < s && (i = i.slice(0, n) + "." + i.slice(n)),
        r && (n = r - s) > 0 && (o + 1 === s && (i += "."), (i += bt(n)))),
    i
  );
}
function Kn(e, t) {
  var r = e[0];
  for (t *= U; r >= 10; r /= 10) t++;
  return t;
}
function qn(e, t, r) {
  if (t > zp) throw ((q = !0), r && (e.precision = r), Error($a));
  return B(new e(Un), t, 1, !0);
}
function Ve(e, t, r) {
  if (t > gi) throw Error($a);
  return B(new e($n), t, r, !0);
}
function Qa(e) {
  var t = e.length - 1,
    r = t * U + 1;
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
function bt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Ja(e, t, r, n) {
  var o,
    i = new e(1),
    s = Math.ceil(n / U + 4);
  for (q = !1; ; ) {
    if (
      (r % 2 && ((i = i.times(t)), Ba(i.d, s) && (o = !0)),
      (r = ve(r / 2)),
      r === 0)
    ) {
      (r = i.d.length - 1), o && i.d[r] === 0 && ++i.d[r];
      break;
    }
    (t = t.times(t)), Ba(t.d, s);
  }
  return (q = !0), i;
}
function La(e) {
  return e.d[e.d.length - 1] & 1;
}
function Ga(e, t, r) {
  for (var n, o = new e(t[0]), i = 0; ++i < t.length; )
    if (((n = new e(t[i])), n.s)) o[r](n) && (o = n);
    else {
      o = n;
      break;
    }
  return o;
}
function yi(e, t) {
  var r,
    n,
    o,
    i,
    s,
    a,
    u,
    l = 0,
    c = 0,
    y = 0,
    h = e.constructor,
    A = h.rounding,
    _ = h.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new h(
      e.d ? (e.d[0] ? (e.s < 0 ? 0 : 1 / 0) : 1) : e.s ? (e.s < 0 ? 0 : e) : NaN
    );
  for (
    t == null ? ((q = !1), (u = _)) : (u = t), a = new h(0.03125);
    e.e > -2;

  )
    (e = e.times(a)), (y += 5);
  for (
    n = ((Math.log(ue(2, y)) / Math.LN10) * 2 + 5) | 0,
      u += n,
      r = i = s = new h(1),
      h.precision = u;
    ;

  ) {
    if (
      ((i = B(i.times(e), u, 1)),
      (r = r.times(++c)),
      (a = s.plus(Z(i, r, u, 1))),
      we(a.d).slice(0, u) === we(s.d).slice(0, u))
    ) {
      for (o = y; o--; ) s = B(s.times(s), u, 1);
      if (t == null)
        if (l < 3 && Lr(s.d, u - n, A, l))
          (h.precision = u += 10), (r = i = a = new h(1)), (c = 0), l++;
        else return B(s, (h.precision = _), A, (q = !0));
      else return (h.precision = _), s;
    }
    s = a;
  }
}
function wt(e, t) {
  var r,
    n,
    o,
    i,
    s,
    a,
    u,
    l,
    c,
    y,
    h,
    A = 1,
    _ = 10,
    T = e,
    S = T.d,
    I = T.constructor,
    F = I.rounding,
    O = I.precision;
  if (T.s < 0 || !S || !S[0] || (!T.e && S[0] == 1 && S.length == 1))
    return new I(S && !S[0] ? -1 / 0 : T.s != 1 ? NaN : S ? 0 : T);
  if (
    (t == null ? ((q = !1), (c = O)) : (c = t),
    (I.precision = c += _),
    (r = we(S)),
    (n = r.charAt(0)),
    Math.abs((i = T.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (T = T.times(e)), (r = we(T.d)), (n = r.charAt(0)), A++;
    (i = T.e),
      n > 1 ? ((T = new I("0." + r)), i++) : (T = new I(n + "." + r.slice(1)));
  } else
    return (
      (l = qn(I, c + 2, O).times(i + "")),
      (T = wt(new I(n + "." + r.slice(1)), c - _).plus(l)),
      (I.precision = O),
      t == null ? B(T, O, F, (q = !0)) : T
    );
  for (
    y = T,
      u = s = T = Z(T.minus(1), T.plus(1), c, 1),
      h = B(T.times(T), c, 1),
      o = 3;
    ;

  ) {
    if (
      ((s = B(s.times(h), c, 1)),
      (l = u.plus(Z(s, new I(o), c, 1))),
      we(l.d).slice(0, c) === we(u.d).slice(0, c))
    )
      if (
        ((u = u.times(2)),
        i !== 0 && (u = u.plus(qn(I, c + 2, O).times(i + ""))),
        (u = Z(u, new I(A), c, 1)),
        t == null)
      )
        if (Lr(u.d, c - _, F, a))
          (I.precision = c += _),
            (l = s = T = Z(y.minus(1), y.plus(1), c, 1)),
            (h = B(T.times(T), c, 1)),
            (o = a = 1);
        else return B(u, (I.precision = O), F, (q = !0));
      else return (I.precision = O), u;
    (u = l), (o += 2);
  }
}
function Wa(e) {
  return String((e.s * e.s) / 0);
}
function hi(e, t) {
  var r, n, o;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (o = t.length; t.charCodeAt(o - 1) === 48; --o);
  if (((t = t.slice(n, o)), t)) {
    if (
      ((o -= n),
      (e.e = r = r - n - 1),
      (e.d = []),
      (n = (r + 1) % U),
      r < 0 && (n += U),
      n < o)
    ) {
      for (n && e.d.push(+t.slice(0, n)), o -= U; n < o; )
        e.d.push(+t.slice(n, (n += U)));
      (t = t.slice(n)), (n = U - t.length);
    } else n -= o;
    for (; n--; ) t += "0";
    e.d.push(+t),
      q &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function Zp(e, t) {
  var r, n, o, i, s, a, u, l, c;
  if (t.indexOf("_") > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), Ka.test(t))) return hi(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (Gp.test(t)) (r = 16), (t = t.toLowerCase());
  else if (Jp.test(t)) r = 2;
  else if (Wp.test(t)) r = 8;
  else throw Error(xt + t);
  for (
    i = t.search(/p/i),
      i > 0
        ? ((u = +t.slice(i + 1)), (t = t.substring(2, i)))
        : (t = t.slice(2)),
      i = t.indexOf("."),
      s = i >= 0,
      n = e.constructor,
      s &&
        ((t = t.replace(".", "")),
        (a = t.length),
        (i = a - i),
        (o = Ja(n, new n(r), i, i * 2))),
      l = jn(t, r, Ke),
      c = l.length - 1,
      i = c;
    l[i] === 0;
    --i
  )
    l.pop();
  return i < 0
    ? new n(e.s * 0)
    : ((e.e = Kn(l, c)),
      (e.d = l),
      (q = !1),
      s && (e = Z(e, o, a * 4)),
      u && (e = e.times(Math.abs(u) < 54 ? ue(2, u) : Lt.pow(2, u))),
      (q = !0),
      e);
}
function Xp(e, t) {
  var r,
    n = t.d.length;
  if (n < 3) return t.isZero() ? t : ur(e, 2, t, t);
  (r = 1.4 * Math.sqrt(n)),
    (r = r > 16 ? 16 : r | 0),
    (t = t.times(1 / Qn(5, r))),
    (t = ur(e, 2, t, t));
  for (var o, i = new e(5), s = new e(16), a = new e(20); r--; )
    (o = t.times(t)), (t = t.times(i.plus(o.times(s.times(o).minus(a)))));
  return t;
}
function ur(e, t, r, n, o) {
  var i,
    s,
    a,
    u,
    l = 1,
    c = e.precision,
    y = Math.ceil(c / U);
  for (q = !1, u = r.times(r), a = new e(n); ; ) {
    if (
      ((s = Z(a.times(u), new e(t++ * t++), c, 1)),
      (a = o ? n.plus(s) : n.minus(s)),
      (n = Z(s.times(u), new e(t++ * t++), c, 1)),
      (s = a.plus(n)),
      s.d[y] !== void 0)
    ) {
      for (i = y; s.d[i] === a.d[i] && i--; );
      if (i == -1) break;
    }
    (i = a), (a = n), (n = s), (s = i), l++;
  }
  return (q = !0), (s.d.length = y + 1), s;
}
function Qn(e, t) {
  for (var r = e; --t; ) r *= e;
  return r;
}
function Ha(e, t) {
  var r,
    n = t.s < 0,
    o = Ve(e, e.precision, 1),
    i = o.times(0.5);
  if (((t = t.abs()), t.lte(i))) return (ot = n ? 4 : 1), t;
  if (((r = t.divToInt(o)), r.isZero())) ot = n ? 3 : 2;
  else {
    if (((t = t.minus(r.times(o))), t.lte(i)))
      return (ot = La(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
    ot = La(r) ? (n ? 1 : 4) : n ? 3 : 2;
  }
  return t.minus(o).abs();
}
function bi(e, t, r, n) {
  var o,
    i,
    s,
    a,
    u,
    l,
    c,
    y,
    h,
    A = e.constructor,
    _ = r !== void 0;
  if (
    (_
      ? (Ie(r, 1, Et), n === void 0 ? (n = A.rounding) : Ie(n, 0, 8))
      : ((r = A.precision), (n = A.rounding)),
    !e.isFinite())
  )
    c = Wa(e);
  else {
    for (
      c = Ye(e),
        s = c.indexOf("."),
        _
          ? ((o = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
          : (o = t),
        s >= 0 &&
          ((c = c.replace(".", "")),
          (h = new A(1)),
          (h.e = c.length - s),
          (h.d = jn(Ye(h), 10, o)),
          (h.e = h.d.length)),
        y = jn(c, 10, o),
        i = u = y.length;
      y[--u] == 0;

    )
      y.pop();
    if (!y[0]) c = _ ? "0p+0" : "0";
    else {
      if (
        (s < 0
          ? i--
          : ((e = new A(e)),
            (e.d = y),
            (e.e = i),
            (e = Z(e, h, r, n, 0, o)),
            (y = e.d),
            (i = e.e),
            (l = Ua)),
        (s = y[r]),
        (a = o / 2),
        (l = l || y[r + 1] !== void 0),
        (l =
          n < 4
            ? (s !== void 0 || l) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              (s === a &&
                (n === 4 ||
                  l ||
                  (n === 6 && y[r - 1] & 1) ||
                  n === (e.s < 0 ? 8 : 7)))),
        (y.length = r),
        l)
      )
        for (; ++y[--r] > o - 1; ) (y[r] = 0), r || (++i, y.unshift(1));
      for (u = y.length; !y[u - 1]; --u);
      for (s = 0, c = ""; s < u; s++) c += di.charAt(y[s]);
      if (_) {
        if (u > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --u; u % s; u++) c += "0";
            for (y = jn(c, o, t), u = y.length; !y[u - 1]; --u);
            for (s = 1, c = "1."; s < u; s++) c += di.charAt(y[s]);
          } else c = c.charAt(0) + "." + c.slice(1);
        c = c + (i < 0 ? "p" : "p+") + i;
      } else if (i < 0) {
        for (; ++i; ) c = "0" + c;
        c = "0." + c;
      } else if (++i > u) for (i -= u; i--; ) c += "0";
      else i < u && (c = c.slice(0, i) + "." + c.slice(i));
    }
    c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
  }
  return e.s < 0 ? "-" + c : c;
}
function Ba(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function ef(e) {
  return new this(e).abs();
}
function tf(e) {
  return new this(e).acos();
}
function rf(e) {
  return new this(e).acosh();
}
function nf(e, t) {
  return new this(e).plus(t);
}
function of(e) {
  return new this(e).asin();
}
function sf(e) {
  return new this(e).asinh();
}
function af(e) {
  return new this(e).atan();
}
function uf(e) {
  return new this(e).atanh();
}
function lf(e, t) {
  (e = new this(e)), (t = new this(t));
  var r,
    n = this.precision,
    o = this.rounding,
    i = n + 4;
  return (
    !e.s || !t.s
      ? (r = new this(NaN))
      : !e.d && !t.d
      ? ((r = Ve(this, i, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
      : !t.d || e.isZero()
      ? ((r = t.s < 0 ? Ve(this, n, o) : new this(0)), (r.s = e.s))
      : !e.d || t.isZero()
      ? ((r = Ve(this, i, 1).times(0.5)), (r.s = e.s))
      : t.s < 0
      ? ((this.precision = i),
        (this.rounding = 1),
        (r = this.atan(Z(e, t, i, 1))),
        (t = Ve(this, i, 1)),
        (this.precision = n),
        (this.rounding = o),
        (r = e.s < 0 ? r.minus(t) : r.plus(t)))
      : (r = this.atan(Z(e, t, i, 1))),
    r
  );
}
function cf(e) {
  return new this(e).cbrt();
}
function pf(e) {
  return B((e = new this(e)), e.e + 1, 2);
}
function ff(e, t, r) {
  return new this(e).clamp(t, r);
}
function df(e) {
  if (!e || typeof e != "object") throw Error(Vn + "Object expected");
  var t,
    r,
    n,
    o = e.defaults === !0,
    i = [
      "precision",
      1,
      Et,
      "rounding",
      0,
      8,
      "toExpNeg",
      -ar,
      0,
      "toExpPos",
      0,
      ar,
      "maxE",
      0,
      ar,
      "minE",
      -ar,
      0,
      "modulo",
      0,
      9,
    ];
  for (t = 0; t < i.length; t += 3)
    if (((r = i[t]), o && (this[r] = mi[r]), (n = e[r]) !== void 0))
      if (ve(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(xt + r + ": " + n);
  if (((r = "crypto"), o && (this[r] = mi[r]), (n = e[r]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (
          typeof crypto != "undefined" &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[r] = !0;
        else throw Error(qa);
      else this[r] = !1;
    else throw Error(xt + r + ": " + n);
  return this;
}
function mf(e) {
  return new this(e).cos();
}
function gf(e) {
  return new this(e).cosh();
}
function za(e) {
  var t, r, n;
  function o(i) {
    var s,
      a,
      u,
      l = this;
    if (!(l instanceof o)) return new o(i);
    if (((l.constructor = o), ja(i))) {
      (l.s = i.s),
        q
          ? !i.d || i.e > o.maxE
            ? ((l.e = NaN), (l.d = null))
            : i.e < o.minE
            ? ((l.e = 0), (l.d = [0]))
            : ((l.e = i.e), (l.d = i.d.slice()))
          : ((l.e = i.e), (l.d = i.d ? i.d.slice() : i.d));
      return;
    }
    if (((u = typeof i), u === "number")) {
      if (i === 0) {
        (l.s = 1 / i < 0 ? -1 : 1), (l.e = 0), (l.d = [0]);
        return;
      }
      if ((i < 0 ? ((i = -i), (l.s = -1)) : (l.s = 1), i === ~~i && i < 1e7)) {
        for (s = 0, a = i; a >= 10; a /= 10) s++;
        q
          ? s > o.maxE
            ? ((l.e = NaN), (l.d = null))
            : s < o.minE
            ? ((l.e = 0), (l.d = [0]))
            : ((l.e = s), (l.d = [i]))
          : ((l.e = s), (l.d = [i]));
        return;
      } else if (i * 0 !== 0) {
        i || (l.s = NaN), (l.e = NaN), (l.d = null);
        return;
      }
      return hi(l, i.toString());
    } else if (u !== "string") throw Error(xt + i);
    return (
      (a = i.charCodeAt(0)) === 45
        ? ((i = i.slice(1)), (l.s = -1))
        : (a === 43 && (i = i.slice(1)), (l.s = 1)),
      Ka.test(i) ? hi(l, i) : Zp(l, i)
    );
  }
  if (
    ((o.prototype = M),
    (o.ROUND_UP = 0),
    (o.ROUND_DOWN = 1),
    (o.ROUND_CEIL = 2),
    (o.ROUND_FLOOR = 3),
    (o.ROUND_HALF_UP = 4),
    (o.ROUND_HALF_DOWN = 5),
    (o.ROUND_HALF_EVEN = 6),
    (o.ROUND_HALF_CEIL = 7),
    (o.ROUND_HALF_FLOOR = 8),
    (o.EUCLID = 9),
    (o.config = o.set = df),
    (o.clone = za),
    (o.isDecimal = ja),
    (o.abs = ef),
    (o.acos = tf),
    (o.acosh = rf),
    (o.add = nf),
    (o.asin = of),
    (o.asinh = sf),
    (o.atan = af),
    (o.atanh = uf),
    (o.atan2 = lf),
    (o.cbrt = cf),
    (o.ceil = pf),
    (o.clamp = ff),
    (o.cos = mf),
    (o.cosh = gf),
    (o.div = yf),
    (o.exp = hf),
    (o.floor = bf),
    (o.hypot = wf),
    (o.ln = xf),
    (o.log = Ef),
    (o.log10 = vf),
    (o.log2 = Pf),
    (o.max = Tf),
    (o.min = Af),
    (o.mod = _f),
    (o.mul = Cf),
    (o.pow = Sf),
    (o.random = Mf),
    (o.round = Rf),
    (o.sign = Of),
    (o.sin = If),
    (o.sinh = kf),
    (o.sqrt = Ff),
    (o.sub = Df),
    (o.sum = Nf),
    (o.tan = Lf),
    (o.tanh = Bf),
    (o.trunc = jf),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      n = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ],
        t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return o.config(e), o;
}
function yf(e, t) {
  return new this(e).div(t);
}
function hf(e) {
  return new this(e).exp();
}
function bf(e) {
  return B((e = new this(e)), e.e + 1, 3);
}
function wf() {
  var e,
    t,
    r = new this(0);
  for (q = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return (q = !0), new this(1 / 0);
      r = t;
    }
  return (q = !0), r.sqrt();
}
function ja(e) {
  return e instanceof Lt || (e && e.toStringTag === Va) || !1;
}
function xf(e) {
  return new this(e).ln();
}
function Ef(e, t) {
  return new this(e).log(t);
}
function Pf(e) {
  return new this(e).log(2);
}
function vf(e) {
  return new this(e).log(10);
}
function Tf() {
  return Ga(this, arguments, "lt");
}
function Af() {
  return Ga(this, arguments, "gt");
}
function _f(e, t) {
  return new this(e).mod(t);
}
function Cf(e, t) {
  return new this(e).mul(t);
}
function Sf(e, t) {
  return new this(e).pow(t);
}
function Mf(e) {
  var t,
    r,
    n,
    o,
    i = 0,
    s = new this(1),
    a = [];
  if (
    (e === void 0 ? (e = this.precision) : Ie(e, 1, Et),
    (n = Math.ceil(e / U)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); i < n; )
        (o = t[i]),
          o >= 429e7
            ? (t[i] = crypto.getRandomValues(new Uint32Array(1))[0])
            : (a[i++] = o % 1e7);
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes((n *= 4)); i < n; )
        (o =
          t[i] + (t[i + 1] << 8) + (t[i + 2] << 16) + ((t[i + 3] & 127) << 24)),
          o >= 214e7
            ? crypto.randomBytes(4).copy(t, i)
            : (a.push(o % 1e7), (i += 4));
      i = n / 4;
    } else throw Error(qa);
  else for (; i < n; ) a[i++] = (Math.random() * 1e7) | 0;
  for (
    n = a[--i],
      e %= U,
      n && e && ((o = ue(10, U - e)), (a[i] = ((n / o) | 0) * o));
    a[i] === 0;
    i--
  )
    a.pop();
  if (i < 0) (r = 0), (a = [0]);
  else {
    for (r = -1; a[0] === 0; r -= U) a.shift();
    for (n = 1, o = a[0]; o >= 10; o /= 10) n++;
    n < U && (r -= U - n);
  }
  return (s.e = r), (s.d = a), s;
}
function Rf(e) {
  return B((e = new this(e)), e.e + 1, this.rounding);
}
function Of(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function If(e) {
  return new this(e).sin();
}
function kf(e) {
  return new this(e).sinh();
}
function Ff(e) {
  return new this(e).sqrt();
}
function Df(e, t) {
  return new this(e).sub(t);
}
function Nf() {
  var e = 0,
    t = arguments,
    r = new this(t[e]);
  for (q = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
  return (q = !0), B(r, this.precision, this.rounding);
}
function Lf(e) {
  return new this(e).tan();
}
function Bf(e) {
  return new this(e).tanh();
}
function jf(e) {
  return B((e = new this(e)), e.e + 1, 1);
}
M[Symbol.for("nodejs.util.inspect.custom")] = M.toString;
M[Symbol.toStringTag] = "Decimal";
var Lt = (M.constructor = za(mi));
Un = new Lt(Un);
$n = new Lt($n);
var it = Lt;
function lr(e) {
  return Lt.isDecimal(e)
    ? !0
    : e !== null &&
        typeof e == "object" &&
        typeof e.s == "number" &&
        typeof e.e == "number" &&
        typeof e.toFixed == "function" &&
        Array.isArray(e.d);
}
g();
p();
f();
d();
m();
var Br = class {
  constructor(t, r, n, o, i) {
    (this.modelName = t),
      (this.name = r),
      (this.typeName = n),
      (this.isList = o),
      (this.isEnum = i);
  }
  _toGraphQLInputType() {
    let t = this.isList ? "List" : "",
      r = this.isEnum ? "Enum" : "";
    return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function cr(e) {
  return e instanceof Br;
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var Jn = class {
  constructor(t) {
    this.value = t;
  }
  write(t) {
    t.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};
g();
p();
f();
d();
m();
var Gn = (e) => e,
  Wn = { bold: Gn, red: Gn, green: Gn, dim: Gn, enabled: !1 },
  Ya = { bold: gt, red: Xt, green: Sn, dim: _n, enabled: !0 },
  pr = {
    write(e) {
      e.writeLine(",");
    },
  };
g();
p();
f();
d();
m();
var Ze = class {
  constructor(t) {
    this.contents = t;
    this.isUnderlined = !1;
    this.color = (t) => t;
  }
  underline() {
    return (this.isUnderlined = !0), this;
  }
  setColor(t) {
    return (this.color = t), this;
  }
  write(t) {
    let r = t.getCurrentLineLength();
    t.write(this.color(this.contents)),
      this.isUnderlined &&
        t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(
            this.color("~".repeat(this.contents.length))
          );
        });
  }
};
g();
p();
f();
d();
m();
var Pt = class {
  constructor() {
    this.hasError = !1;
  }
  markAsError() {
    return (this.hasError = !0), this;
  }
};
var fr = class extends Pt {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  addItem(r) {
    return this.items.push(new Jn(r)), this;
  }
  getField(r) {
    return this.items[r];
  }
  getPrintWidth() {
    return this.items.length === 0
      ? 2
      : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
  }
  write(r) {
    if (this.items.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithItems(r);
  }
  writeEmpty(r) {
    let n = new Ze("[]");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithItems(r) {
    let { colors: n } = r.context;
    r
      .writeLine("[")
      .withIndent(() => r.writeJoined(pr, this.items).newLine())
      .write("]"),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
  }
};
g();
p();
f();
d();
m();
var Za = ": ",
  Hn = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = !1;
    }
    markAsError() {
      this.hasError = !0;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + Za.length;
    }
    write(t) {
      let r = new Ze(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(Za).write(this.value);
    }
  };
g();
p();
f();
d();
m();
var pe = class e extends Pt {
  constructor() {
    super(...arguments);
    this.fields = {};
    this.suggestions = [];
  }
  addField(r) {
    this.fields[r.name] = r;
  }
  addSuggestion(r) {
    this.suggestions.push(r);
  }
  getField(r) {
    return this.fields[r];
  }
  getDeepField(r) {
    let [n, ...o] = r,
      i = this.getField(n);
    if (!i) return;
    let s = i;
    for (let a of o) {
      let u;
      if (
        (s.value instanceof e
          ? (u = s.value.getField(a))
          : s.value instanceof fr && (u = s.value.getField(Number(a))),
        !u)
      )
        return;
      s = u;
    }
    return s;
  }
  getDeepFieldValue(r) {
    var n;
    return r.length === 0
      ? this
      : (n = this.getDeepField(r)) == null
      ? void 0
      : n.value;
  }
  hasField(r) {
    return !!this.getField(r);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(r) {
    delete this.fields[r];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(r) {
    var n;
    return (n = this.getField(r)) == null ? void 0 : n.value;
  }
  getDeepSubSelectionValue(r) {
    let n = this;
    for (let o of r) {
      if (!(n instanceof e)) return;
      let i = n.getSubSelectionValue(o);
      if (!i) return;
      n = i;
    }
    return n;
  }
  getDeepSelectionParent(r) {
    let n = this.getSelectionParent();
    if (!n) return;
    let o = n;
    for (let i of r) {
      let s = o.value.getFieldValue(i);
      if (!s || !(s instanceof e)) return;
      let a = s.getSelectionParent();
      if (!a) return;
      o = a;
    }
    return o;
  }
  getSelectionParent() {
    let r = this.getField("select");
    if ((r == null ? void 0 : r.value) instanceof e)
      return { kind: "select", value: r.value };
    let n = this.getField("include");
    if ((n == null ? void 0 : n.value) instanceof e)
      return { kind: "include", value: n.value };
  }
  getSubSelectionValue(r) {
    var n;
    return (n = this.getSelectionParent()) == null
      ? void 0
      : n.value.fields[r].value;
  }
  getPrintWidth() {
    let r = Object.values(this.fields);
    return r.length == 0 ? 2 : Math.max(...r.map((o) => o.getPrintWidth())) + 2;
  }
  write(r) {
    let n = Object.values(this.fields);
    if (n.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(r);
      return;
    }
    this.writeWithContents(r, n);
  }
  writeEmpty(r) {
    let n = new Ze("{}");
    this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
  }
  writeWithContents(r, n) {
    r.writeLine("{").withIndent(() => {
      r.writeJoined(pr, [...n, ...this.suggestions]).newLine();
    }),
      r.write("}"),
      this.hasError &&
        r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
  }
};
g();
p();
f();
d();
m();
var fe = class extends Pt {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new Ze(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
};
var wi = class {
  constructor(t) {
    this.errorMessages = [];
    this.arguments = t;
  }
  write(t) {
    t.write(this.arguments);
  }
  addErrorMessage(t) {
    this.errorMessages.push(t);
  }
  renderAllMessages(t) {
    return this.errorMessages.map((r) => r(t)).join(`
`);
  }
};
function zn(e) {
  return new wi(Xa(e));
}
function Xa(e) {
  let t = new pe();
  for (let [r, n] of Object.entries(e)) {
    let o = new Hn(r, eu(n));
    t.addField(o);
  }
  return t;
}
function eu(e) {
  if (typeof e == "string") return new fe(JSON.stringify(e));
  if (typeof e == "number" || typeof e == "boolean") return new fe(String(e));
  if (typeof e == "bigint") return new fe(`${e}n`);
  if (e === null) return new fe("null");
  if (e === void 0) return new fe("undefined");
  if (lr(e)) return new fe(`new Prisma.Decimal("${e.toFixed()}")`);
  if (e instanceof Uint8Array)
    return x.Buffer.isBuffer(e)
      ? new fe(`Buffer.alloc(${e.byteLength})`)
      : new fe(`new Uint8Array(${e.byteLength})`);
  if (e instanceof Date) {
    let t = Bn(e) ? e.toISOString() : "Invalid Date";
    return new fe(`new Date("${t}")`);
  }
  return e instanceof nt
    ? new fe(`Prisma.${e._getName()}`)
    : cr(e)
    ? new fe(`prisma.${Is(e.modelName)}.$fields.${e.name}`)
    : Array.isArray(e)
    ? $f(e)
    : typeof e == "object"
    ? Xa(e)
    : new fe(Object.prototype.toString.call(e));
}
function $f(e) {
  let t = new fr();
  for (let r of e) t.addItem(eu(r));
  return t;
}
function tu(e) {
  if (e === void 0) return "";
  let t = zn(e);
  return new ir(0, { colors: Wn }).write(t).toString();
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var jr = "<unknown>";
function ru(e) {
  var t = e.split(`
`);
  return t.reduce(function (r, n) {
    var o = Kf(n) || Jf(n) || Hf(n) || Xf(n) || Yf(n);
    return o && r.push(o), r;
  }, []);
}
var qf =
    /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  Vf = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function Kf(e) {
  var t = qf.exec(e);
  if (!t) return null;
  var r = t[2] && t[2].indexOf("native") === 0,
    n = t[2] && t[2].indexOf("eval") === 0,
    o = Vf.exec(t[2]);
  return (
    n && o != null && ((t[2] = o[1]), (t[3] = o[2]), (t[4] = o[3])),
    {
      file: r ? null : t[2],
      methodName: t[1] || jr,
      arguments: r ? [t[2]] : [],
      lineNumber: t[3] ? +t[3] : null,
      column: t[4] ? +t[4] : null,
    }
  );
}
var Qf =
  /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Jf(e) {
  var t = Qf.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || jr,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var Gf =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
  Wf = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function Hf(e) {
  var t = Gf.exec(e);
  if (!t) return null;
  var r = t[3] && t[3].indexOf(" > eval") > -1,
    n = Wf.exec(t[3]);
  return (
    r && n != null && ((t[3] = n[1]), (t[4] = n[2]), (t[5] = null)),
    {
      file: t[3],
      methodName: t[1] || jr,
      arguments: t[2] ? t[2].split(",") : [],
      lineNumber: t[4] ? +t[4] : null,
      column: t[5] ? +t[5] : null,
    }
  );
}
var zf = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function Yf(e) {
  var t = zf.exec(e);
  return t
    ? {
        file: t[3],
        methodName: t[1] || jr,
        arguments: [],
        lineNumber: +t[4],
        column: t[5] ? +t[5] : null,
      }
    : null;
}
var Zf =
  /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function Xf(e) {
  var t = Zf.exec(e);
  return t
    ? {
        file: t[2],
        methodName: t[1] || jr,
        arguments: [],
        lineNumber: +t[3],
        column: t[4] ? +t[4] : null,
      }
    : null;
}
var xi = class {
    getLocation() {
      return null;
    }
  },
  Ei = class {
    constructor() {
      this._error = new Error();
    }
    getLocation() {
      let t = this._error.stack;
      if (!t) return null;
      let n = ru(t).find((o) => {
        if (!o.file) return !1;
        let i = ei(o.file);
        return (
          i !== "<anonymous>" &&
          !i.includes("@prisma") &&
          !i.includes("/packages/client/src/runtime/") &&
          !i.endsWith("/runtime/binary.js") &&
          !i.endsWith("/runtime/library.js") &&
          !i.endsWith("/runtime/edge.js") &&
          !i.endsWith("/runtime/edge-esm.js") &&
          !i.startsWith("internal/") &&
          !o.methodName.includes("new ") &&
          !o.methodName.includes("getCallSite") &&
          !o.methodName.includes("Proxy.") &&
          o.methodName.split(".").length < 4
        );
      });
      return !n || !n.file
        ? null
        : {
            fileName: n.file,
            lineNumber: n.lineNumber,
            columnNumber: n.column,
          };
    }
  };
function vt(e) {
  return e === "minimal" ? new xi() : new Ei();
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var nu = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function dr(e = {}) {
  let t = td(e);
  return Object.entries(t).reduce(
    (n, [o, i]) => (
      nu[o] !== void 0 ? (n.select[o] = { select: i }) : (n[o] = i), n
    ),
    { select: {} }
  );
}
function td(e = {}) {
  return typeof e._count == "boolean"
    ? { ...e, _count: { _all: e._count } }
    : e;
}
function Yn(e = {}) {
  return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
function ou(e, t) {
  let r = Yn(e);
  return t({ action: "aggregate", unpacker: r, argsMapper: dr })(e);
}
g();
p();
f();
d();
m();
function rd(e = {}) {
  let { select: t, ...r } = e;
  return typeof t == "object"
    ? dr({ ...r, _count: t })
    : dr({ ...r, _count: { _all: !0 } });
}
function nd(e = {}) {
  return typeof e.select == "object"
    ? (t) => Yn(e)(t)._count
    : (t) => Yn(e)(t)._count._all;
}
function iu(e, t) {
  return t({ action: "count", unpacker: nd(e), argsMapper: rd })(e);
}
g();
p();
f();
d();
m();
function od(e = {}) {
  let t = dr(e);
  if (Array.isArray(t.by))
    for (let r of t.by) typeof r == "string" && (t.select[r] = !0);
  else typeof t.by == "string" && (t.select[t.by] = !0);
  return t;
}
function id(e = {}) {
  return (t) => (
    typeof (e == null ? void 0 : e._count) == "boolean" &&
      t.forEach((r) => {
        r._count = r._count._all;
      }),
    t
  );
}
function su(e, t) {
  return t({ action: "groupBy", unpacker: id(e), argsMapper: od })(e);
}
function au(e, t, r) {
  if (t === "aggregate") return (n) => ou(n, r);
  if (t === "count") return (n) => iu(n, r);
  if (t === "groupBy") return (n) => su(n, r);
}
g();
p();
f();
d();
m();
function uu(e, t) {
  let r = t.fields.filter((o) => !o.relationName),
    n = ii(r, (o) => o.name);
  return new Proxy(
    {},
    {
      get(o, i) {
        if (i in o || typeof i == "symbol") return o[i];
        let s = n[i];
        if (s) return new Br(e, i, s.type, s.isList, s.kind === "enum");
      },
      ...Ln(Object.keys(n)),
    }
  );
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var lu = (e) => (Array.isArray(e) ? e : e.split(".")),
  Pi = (e, t) => lu(t).reduce((r, n) => r && r[n], e),
  cu = (e, t, r) =>
    lu(t).reduceRight(
      (n, o, i, s) => Object.assign({}, Pi(e, s.slice(0, i)), { [o]: n }),
      r
    );
function sd(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
function ad(e, t, r) {
  return t === void 0 ? (e != null ? e : {}) : cu(t, r, e || !0);
}
function vi(e, t, r, n, o, i) {
  let a = e._runtimeDataModel.models[t].fields.reduce(
    (u, l) => ({ ...u, [l.name]: l }),
    {}
  );
  return (u) => {
    let l = vt(e._errorFormat),
      c = sd(n, o),
      y = ad(u, i, c),
      h = r({ dataPath: c, callsite: l })(y),
      A = ud(e, t);
    return new Proxy(h, {
      get(_, T) {
        if (!A.includes(T)) return _[T];
        let I = [a[T].type, r, T],
          F = [c, y];
        return vi(e, ...I, ...F);
      },
      ...Ln([...A, ...Object.getOwnPropertyNames(h)]),
    });
  };
}
function ud(e, t) {
  return e._runtimeDataModel.models[t].fields
    .filter((r) => r.kind === "object")
    .map((r) => r.name);
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var gu = _e(Pa());
g();
p();
f();
d();
m();
Yo();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var pu = {
  keyword: yt,
  entity: yt,
  value: (e) => gt(tr(e)),
  punctuation: tr,
  directive: yt,
  function: yt,
  variable: (e) => gt(tr(e)),
  string: (e) => gt(Sn(e)),
  boolean: er,
  number: yt,
  comment: Mn,
};
var ld = (e) => e,
  Zn = {},
  cd = 0,
  V = {
    manual: Zn.Prism && Zn.Prism.manual,
    disableWorkerMessageHandler:
      Zn.Prism && Zn.Prism.disableWorkerMessageHandler,
    util: {
      encode: function (e) {
        if (e instanceof Qe) {
          let t = e;
          return new Qe(t.type, V.util.encode(t.content), t.alias);
        } else
          return Array.isArray(e)
            ? e.map(V.util.encode)
            : e
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/\u00a0/g, " ");
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        return (
          e.__id || Object.defineProperty(e, "__id", { value: ++cd }), e.__id
        );
      },
      clone: function e(t, r) {
        let n,
          o,
          i = V.util.type(t);
        switch (((r = r || {}), i)) {
          case "Object":
            if (((o = V.util.objId(t)), r[o])) return r[o];
            (n = {}), (r[o] = n);
            for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
            return n;
          case "Array":
            return (
              (o = V.util.objId(t)),
              r[o]
                ? r[o]
                : ((n = []),
                  (r[o] = n),
                  t.forEach(function (s, a) {
                    n[a] = e(s, r);
                  }),
                  n)
            );
          default:
            return t;
        }
      },
    },
    languages: {
      extend: function (e, t) {
        let r = V.util.clone(V.languages[e]);
        for (let n in t) r[n] = t[n];
        return r;
      },
      insertBefore: function (e, t, r, n) {
        n = n || V.languages;
        let o = n[e],
          i = {};
        for (let a in o)
          if (o.hasOwnProperty(a)) {
            if (a == t) for (let u in r) r.hasOwnProperty(u) && (i[u] = r[u]);
            r.hasOwnProperty(a) || (i[a] = o[a]);
          }
        let s = n[e];
        return (
          (n[e] = i),
          V.languages.DFS(V.languages, function (a, u) {
            u === s && a != e && (this[a] = i);
          }),
          i
        );
      },
      DFS: function e(t, r, n, o) {
        o = o || {};
        let i = V.util.objId;
        for (let s in t)
          if (t.hasOwnProperty(s)) {
            r.call(t, s, t[s], n || s);
            let a = t[s],
              u = V.util.type(a);
            u === "Object" && !o[i(a)]
              ? ((o[i(a)] = !0), e(a, r, null, o))
              : u === "Array" && !o[i(a)] && ((o[i(a)] = !0), e(a, r, s, o));
          }
      },
    },
    plugins: {},
    highlight: function (e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return (
        V.hooks.run("before-tokenize", n),
        (n.tokens = V.tokenize(n.code, n.grammar)),
        V.hooks.run("after-tokenize", n),
        Qe.stringify(V.util.encode(n.tokens), n.language)
      );
    },
    matchGrammar: function (e, t, r, n, o, i, s) {
      for (let T in r) {
        if (!r.hasOwnProperty(T) || !r[T]) continue;
        if (T == s) return;
        let S = r[T];
        S = V.util.type(S) === "Array" ? S : [S];
        for (let I = 0; I < S.length; ++I) {
          let F = S[I],
            O = F.inside,
            k = !!F.lookbehind,
            K = !!F.greedy,
            Q = 0,
            je = F.alias;
          if (K && !F.pattern.global) {
            let Y = F.pattern.toString().match(/[imuy]*$/)[0];
            F.pattern = RegExp(F.pattern.source, Y + "g");
          }
          F = F.pattern || F;
          for (let Y = n, ie = o; Y < t.length; ie += t[Y].length, ++Y) {
            let Fe = t[Y];
            if (t.length > e.length) return;
            if (Fe instanceof Qe) continue;
            if (K && Y != t.length - 1) {
              F.lastIndex = ie;
              var y = F.exec(e);
              if (!y) break;
              var c = y.index + (k ? y[1].length : 0),
                h = y.index + y[0].length,
                a = Y,
                u = ie;
              for (
                let N = t.length;
                a < N && (u < h || (!t[a].type && !t[a - 1].greedy));
                ++a
              )
                (u += t[a].length), c >= u && (++Y, (ie = u));
              if (t[Y] instanceof Qe) continue;
              (l = a - Y), (Fe = e.slice(ie, u)), (y.index -= ie);
            } else {
              F.lastIndex = 0;
              var y = F.exec(Fe),
                l = 1;
            }
            if (!y) {
              if (i) break;
              continue;
            }
            k && (Q = y[1] ? y[1].length : 0);
            var c = y.index + Q,
              y = y[0].slice(Q),
              h = c + y.length,
              A = Fe.slice(0, c),
              _ = Fe.slice(h);
            let se = [Y, l];
            A && (++Y, (ie += A.length), se.push(A));
            let De = new Qe(T, O ? V.tokenize(y, O) : y, je, y, K);
            if (
              (se.push(De),
              _ && se.push(_),
              Array.prototype.splice.apply(t, se),
              l != 1 && V.matchGrammar(e, t, r, Y, ie, !0, T),
              i)
            )
              break;
          }
        }
      }
    },
    tokenize: function (e, t) {
      let r = [e],
        n = t.rest;
      if (n) {
        for (let o in n) t[o] = n[o];
        delete t.rest;
      }
      return V.matchGrammar(e, r, t, 0, 0, !1), r;
    },
    hooks: {
      all: {},
      add: function (e, t) {
        let r = V.hooks.all;
        (r[e] = r[e] || []), r[e].push(t);
      },
      run: function (e, t) {
        let r = V.hooks.all[e];
        if (!(!r || !r.length)) for (var n = 0, o; (o = r[n++]); ) o(t);
      },
    },
    Token: Qe,
  };
V.languages.clike = {
  comment: [
    { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
    { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/,
};
V.languages.javascript = V.languages.extend("clike", {
  "class-name": [
    V.languages.clike["class-name"],
    {
      pattern:
        /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: !0,
    },
  ],
  keyword: [
    { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
    {
      pattern:
        /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0,
    },
  ],
  number:
    /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function:
    /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator:
    /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
});
V.languages.javascript["class-name"][0].pattern =
  /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
V.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern:
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0,
  },
  "function-variable": {
    pattern:
      /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function",
  },
  parameter: [
    {
      pattern:
        /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
      lookbehind: !0,
      inside: V.languages.javascript,
    },
    {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
      inside: V.languages.javascript,
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: V.languages.javascript,
    },
    {
      pattern:
        /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: V.languages.javascript,
    },
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
V.languages.markup && V.languages.markup.tag.addInlined("script", "javascript");
V.languages.js = V.languages.javascript;
V.languages.typescript = V.languages.extend("javascript", {
  keyword:
    /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  builtin:
    /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
V.languages.ts = V.languages.typescript;
function Qe(e, t, r, n, o) {
  (this.type = e),
    (this.content = t),
    (this.alias = r),
    (this.length = (n || "").length | 0),
    (this.greedy = !!o);
}
Qe.stringify = function (e, t) {
  return typeof e == "string"
    ? e
    : Array.isArray(e)
    ? e
        .map(function (r) {
          return Qe.stringify(r, t);
        })
        .join("")
    : pd(e.type)(e.content);
};
function pd(e) {
  return pu[e] || ld;
}
function fu(e) {
  return fd(e, V.languages.javascript);
}
function fd(e, t) {
  return V.tokenize(e, t)
    .map((n) => Qe.stringify(n))
    .join("");
}
g();
p();
f();
d();
m();
var du = _e(ba());
function mu(e) {
  return (0, du.default)(e);
}
var Xn = class e {
  static read(t) {
    let r;
    try {
      r = Rn.readFileSync(t, "utf-8");
    } catch (n) {
      return null;
    }
    return e.fromContent(r);
  }
  static fromContent(t) {
    let r = t.split(/\r?\n/);
    return new e(1, r);
  }
  constructor(t, r) {
    (this.firstLineNumber = t), (this.lines = r);
  }
  get lastLineNumber() {
    return this.firstLineNumber + this.lines.length - 1;
  }
  mapLineAt(t, r) {
    if (
      t < this.firstLineNumber ||
      t > this.lines.length + this.firstLineNumber
    )
      return this;
    let n = t - this.firstLineNumber,
      o = [...this.lines];
    return (o[n] = r(o[n])), new e(this.firstLineNumber, o);
  }
  mapLines(t) {
    return new e(
      this.firstLineNumber,
      this.lines.map((r, n) => t(r, this.firstLineNumber + n))
    );
  }
  lineAt(t) {
    return this.lines[t - this.firstLineNumber];
  }
  prependSymbolAt(t, r) {
    return this.mapLines((n, o) => (o === t ? `${r} ${n}` : `  ${n}`));
  }
  slice(t, r) {
    let n = this.lines.slice(t - 1, r).join(`
`);
    return new e(
      t,
      mu(n).split(`
`)
    );
  }
  highlight() {
    let t = fu(this.toString());
    return new e(
      this.firstLineNumber,
      t.split(`
`)
    );
  }
  toString() {
    return this.lines.join(`
`);
  }
};
var dd = {
    red: Xt,
    gray: Mn,
    dim: _n,
    bold: gt,
    underline: Cn,
    highlightSource: (e) => e.highlight(),
  },
  md = {
    red: (e) => e,
    gray: (e) => e,
    dim: (e) => e,
    bold: (e) => e,
    underline: (e) => e,
    highlightSource: (e) => e,
  };
function gd(
  { callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: o },
  i
) {
  var y;
  let s = {
    functionName: `prisma.${r}()`,
    message: t,
    isPanic: n != null ? n : !1,
    callArguments: o,
  };
  if (!e || typeof window != "undefined" || b.env.NODE_ENV === "production")
    return s;
  let a = e.getLocation();
  if (!a || !a.lineNumber || !a.columnNumber) return s;
  let u = Math.max(1, a.lineNumber - 3),
    l = (y = Xn.read(a.fileName)) == null ? void 0 : y.slice(u, a.lineNumber),
    c = l == null ? void 0 : l.lineAt(a.lineNumber);
  if (l && c) {
    let h = hd(c),
      A = yd(c);
    if (!A) return s;
    (s.functionName = `${A.code})`),
      (s.location = a),
      n ||
        (l = l.mapLineAt(a.lineNumber, (T) => T.slice(0, A.openingBraceIndex))),
      (l = i.highlightSource(l));
    let _ = String(l.lastLineNumber).length;
    if (
      ((s.contextLines = l
        .mapLines((T, S) => i.gray(String(S).padStart(_)) + " " + T)
        .mapLines((T) => i.dim(T))
        .prependSymbolAt(a.lineNumber, i.bold(i.red("\u2192")))),
      o)
    ) {
      let T = h + _ + 1;
      (T += 2), (s.callArguments = (0, gu.default)(o, T).slice(T));
    }
  }
  return s;
}
function yd(e) {
  let t = Object.keys(qe.ModelAction).join("|"),
    n = new RegExp(String.raw`\.(${t})\(`).exec(e);
  if (n) {
    let o = n.index + n[0].length,
      i = e.lastIndexOf(" ", n.index) + 1;
    return { code: e.slice(i, o), openingBraceIndex: o };
  }
  return null;
}
function hd(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    if (e.charAt(r) !== " ") return t;
    t++;
  }
  return t;
}
function bd(
  {
    functionName: e,
    location: t,
    message: r,
    isPanic: n,
    contextLines: o,
    callArguments: i,
  },
  s
) {
  let a = [""],
    u = t ? " in" : ":";
  if (
    (n
      ? (a.push(
          s.red(
            `Oops, an unknown error occurred! This is ${s.bold(
              "on us"
            )}, you did nothing wrong.`
          )
        ),
        a.push(
          s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${u}`)
        ))
      : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)),
    t && a.push(s.underline(wd(t))),
    o)
  ) {
    a.push("");
    let l = [o.toString()];
    i && (l.push(i), l.push(s.dim(")"))), a.push(l.join("")), i && a.push("");
  } else a.push(""), i && a.push(i), a.push("");
  return (
    a.push(r),
    a.join(`
`)
  );
}
function wd(e) {
  let t = [e.fileName];
  return (
    e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(":")
  );
}
function mr(e) {
  let t = e.showColors ? dd : md,
    r = gd(e, t);
  return bd(r, t);
}
function yu(e, t, r, n) {
  return e === qe.ModelAction.findFirstOrThrow ||
    e === qe.ModelAction.findUniqueOrThrow
    ? xd(t, r, n)
    : n;
}
function xd(e, t, r) {
  return async (n) => {
    if ("rejectOnNotFound" in n.args) {
      let i = mr({
        originalMethod: n.clientMethod,
        callsite: n.callsite,
        message: "'rejectOnNotFound' option is not supported",
      });
      throw new Se(i, { clientVersion: t });
    }
    return await r(n).catch((i) => {
      throw i instanceof he && i.code === "P2025"
        ? new ht(`No ${e} found`, t)
        : i;
    });
  };
}
g();
p();
f();
d();
m();
function Xe(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
var Ed = [
    "findUnique",
    "findUniqueOrThrow",
    "findFirst",
    "findFirstOrThrow",
    "create",
    "update",
    "upsert",
    "delete",
  ],
  Pd = ["aggregate", "count", "groupBy"];
function Ti(e, t) {
  var o;
  let r = (o = e._extensions.getAllModelExtensions(t)) != null ? o : {},
    n = [
      vd(e, t),
      Ad(e, t),
      Dr(r),
      Me("name", () => t),
      Me("$name", () => t),
      Me("$parent", () => e._appliedParent),
    ];
  return ze({}, n);
}
function vd(e, t) {
  let r = Xe(t),
    n = Object.keys(qe.ModelAction).concat("count");
  return {
    getKeys() {
      return n;
    },
    getPropertyValue(o) {
      let i = o,
        s = (u) => e._request(u);
      s = yu(i, t, e._clientVersion, s);
      let a = (u) => (l) => {
        let c = vt(e._errorFormat);
        return e._createPrismaPromise((y) => {
          let h = {
            args: l,
            dataPath: [],
            action: i,
            model: t,
            clientMethod: `${r}.${o}`,
            jsModelName: r,
            transaction: y,
            callsite: c,
          };
          return s({ ...h, ...u });
        });
      };
      return Ed.includes(i) ? vi(e, t, a) : Td(o) ? au(e, o, a) : a({});
    },
  };
}
function Td(e) {
  return Pd.includes(e);
}
function Ad(e, t) {
  return Nt(
    Me("fields", () => {
      let r = e._runtimeDataModel.models[t];
      return uu(t, r);
    })
  );
}
g();
p();
f();
d();
m();
function hu(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
var Ai = Symbol();
function Ur(e) {
  let t = [_d(e), Me(Ai, () => e), Me("$parent", () => e._appliedParent)],
    r = e._extensions.getAllClientExtensions();
  return r && t.push(Dr(r)), ze(e, t);
}
function _d(e) {
  let t = Object.keys(e._runtimeDataModel.models),
    r = t.map(Xe),
    n = [...new Set(t.concat(r))];
  return Nt({
    getKeys() {
      return n;
    },
    getPropertyValue(o) {
      let i = hu(o);
      if (e._runtimeDataModel.models[i] !== void 0) return Ti(e, i);
      if (e._runtimeDataModel.models[o] !== void 0) return Ti(e, o);
    },
    getPropertyDescriptor(o) {
      if (!r.includes(o)) return { enumerable: !1 };
    },
  });
}
function eo(e) {
  return e[Ai] ? e[Ai] : e;
}
function bu(e) {
  if (typeof e == "function") return e(this);
  let t = eo(this),
    r = Object.create(t, {
      _extensions: { value: this._extensions.append(e) },
      _appliedParent: { value: this, configurable: !0 },
      $use: { value: void 0 },
      $on: { value: void 0 },
    });
  return Ur(r);
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
function wu({ result: e, modelName: t, select: r, extensions: n }) {
  let o = n.getAllComputedFields(t);
  if (!o) return e;
  let i = [],
    s = [];
  for (let a of Object.values(o)) {
    if (r) {
      if (!r[a.name]) continue;
      let u = a.needs.filter((l) => !r[l]);
      u.length > 0 && s.push(Nr(u));
    }
    Cd(e, a.needs) && i.push(Sd(a, ze(e, i)));
  }
  return i.length > 0 || s.length > 0 ? ze(e, [...i, ...s]) : e;
}
function Cd(e, t) {
  return t.every((r) => oi(e, r));
}
function Sd(e, t) {
  return Nt(Me(e.name, () => e.compute(t)));
}
g();
p();
f();
d();
m();
function to({
  visitor: e,
  result: t,
  args: r,
  runtimeDataModel: n,
  modelName: o,
}) {
  var s;
  if (Array.isArray(t)) {
    for (let a = 0; a < t.length; a++)
      t[a] = to({
        result: t[a],
        args: r,
        modelName: o,
        runtimeDataModel: n,
        visitor: e,
      });
    return t;
  }
  let i = (s = e(t, o, r)) != null ? s : t;
  return (
    r.include &&
      xu({
        includeOrSelect: r.include,
        result: i,
        parentModelName: o,
        runtimeDataModel: n,
        visitor: e,
      }),
    r.select &&
      xu({
        includeOrSelect: r.select,
        result: i,
        parentModelName: o,
        runtimeDataModel: n,
        visitor: e,
      }),
    i
  );
}
function xu({
  includeOrSelect: e,
  result: t,
  parentModelName: r,
  runtimeDataModel: n,
  visitor: o,
}) {
  for (let [i, s] of Object.entries(e)) {
    if (!s || t[i] == null) continue;
    let u = n.models[r].fields.find((c) => c.name === i);
    if (!u || u.kind !== "object" || !u.relationName) continue;
    let l = typeof s == "object" ? s : {};
    t[i] = to({
      visitor: o,
      result: t[i],
      args: l,
      modelName: u.type,
      runtimeDataModel: n,
    });
  }
}
function Eu({
  result: e,
  modelName: t,
  args: r,
  extensions: n,
  runtimeDataModel: o,
}) {
  return n.isEmpty() || e == null || typeof e != "object" || !o.models[t]
    ? e
    : to({
        result: e,
        args: r != null ? r : {},
        modelName: t,
        runtimeDataModel: o,
        visitor: (s, a, u) =>
          wu({ result: s, modelName: Xe(a), select: u.select, extensions: n }),
      });
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
function Pu(e) {
  if (e instanceof Le) return Md(e);
  if (Array.isArray(e)) {
    let r = [e[0]];
    for (let n = 1; n < e.length; n++) r[n] = $r(e[n]);
    return r;
  }
  let t = {};
  for (let r in e) t[r] = $r(e[r]);
  return t;
}
function Md(e) {
  return new Le(e.strings, e.values);
}
function $r(e) {
  if (typeof e != "object" || e == null || e instanceof nt || cr(e)) return e;
  if (lr(e)) return new it(e.toFixed());
  if (sr(e)) return new Date(+e);
  if (ArrayBuffer.isView(e)) return e.slice(0);
  if (Array.isArray(e)) {
    let t = e.length,
      r;
    for (r = Array(t); t--; ) r[t] = $r(e[t]);
    return r;
  }
  if (typeof e == "object") {
    let t = {};
    for (let r in e)
      r === "__proto__"
        ? Object.defineProperty(t, r, {
            value: $r(e[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (t[r] = $r(e[r]));
    return t;
  }
  Ft(e, "Unknown value");
}
function Tu(e, t, r, n = 0) {
  return e._createPrismaPromise((o) => {
    var s, a;
    let i = t.customDataProxyFetch;
    return (
      "transaction" in t &&
        o !== void 0 &&
        (((s = t.transaction) == null ? void 0 : s.kind) === "batch" &&
          t.transaction.lock.then(),
        (t.transaction = o)),
      n === r.length
        ? e._executeRequest(t)
        : r[n]({
            model: t.model,
            operation: t.model ? t.action : t.clientMethod,
            args: Pu((a = t.args) != null ? a : {}),
            __internalParams: t,
            query: (u, l = t) => {
              let c = l.customDataProxyFetch;
              return (
                (l.customDataProxyFetch = Su(i, c)),
                (l.args = u),
                Tu(e, l, r, n + 1)
              );
            },
          })
    );
  });
}
function Au(e, t) {
  let { jsModelName: r, action: n, clientMethod: o } = t,
    i = r ? n : o;
  if (e._extensions.isEmpty()) return e._executeRequest(t);
  let s = e._extensions.getAllQueryCallbacks(r != null ? r : "$none", i);
  return Tu(e, t, s);
}
function _u(e) {
  return (t) => {
    let r = { requests: t },
      n = t[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? Cu(r, n, 0, e) : e(r);
  };
}
function Cu(e, t, r, n) {
  if (r === t.length) return n(e);
  let o = e.customDataProxyFetch,
    i = e.requests[0].transaction;
  return t[r]({
    args: {
      queries: e.requests.map((s) => ({
        model: s.modelName,
        operation: s.action,
        args: s.args,
      })),
      transaction: i
        ? { isolationLevel: i.kind === "batch" ? i.isolationLevel : void 0 }
        : void 0,
    },
    __internalParams: e,
    query(s, a = e) {
      let u = a.customDataProxyFetch;
      return (a.customDataProxyFetch = Su(o, u)), Cu(a, t, r + 1, n);
    },
  });
}
var vu = (e) => e;
function Su(e = vu, t = vu) {
  return (r) => e(t(r));
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
function Ru(e, t, r) {
  let n = Xe(r);
  return !t.result || !(t.result.$allModels || t.result[n])
    ? e
    : Rd({
        ...e,
        ...Mu(t.name, e, t.result.$allModels),
        ...Mu(t.name, e, t.result[n]),
      });
}
function Rd(e) {
  let t = new He(),
    r = (n, o) =>
      t.getOrCreate(n, () =>
        o.has(n)
          ? [n]
          : (o.add(n), e[n] ? e[n].needs.flatMap((i) => r(i, o)) : [n])
      );
  return or(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function Mu(e, t, r) {
  return r
    ? or(r, ({ needs: n, compute: o }, i) => ({
        name: i,
        needs: n ? Object.keys(n).filter((s) => n[s]) : [],
        compute: Od(t, i, o),
      }))
    : {};
}
function Od(e, t, r) {
  var o;
  let n = (o = e == null ? void 0 : e[t]) == null ? void 0 : o.compute;
  return n ? (i) => r({ ...i, [t]: n(i) }) : r;
}
function Ou(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (e[n.name]) for (let o of n.needs) r[o] = !0;
  return r;
}
var ro = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new He();
      this.modelExtensionsCache = new He();
      this.queryCallbacksCache = new He();
      this.clientExtensions = Mr(() => {
        var t, r;
        return this.extension.client
          ? {
              ...((r = this.previous) == null
                ? void 0
                : r.getAllClientExtensions()),
              ...this.extension.client,
            }
          : (t = this.previous) == null
          ? void 0
          : t.getAllClientExtensions();
      });
      this.batchCallbacks = Mr(() => {
        var n, o, i;
        let t =
            (o =
              (n = this.previous) == null
                ? void 0
                : n.getAllBatchQueryCallbacks()) != null
              ? o
              : [],
          r = (i = this.extension.query) == null ? void 0 : i.$__internalBatch;
        return r ? t.concat(r) : t;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () => {
        var r;
        return Ru(
          (r = this.previous) == null ? void 0 : r.getAllComputedFields(t),
          this.extension,
          t
        );
      });
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        var n, o;
        let r = Xe(t);
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? (n = this.previous) == null
            ? void 0
            : n.getAllModelExtensions(t)
          : {
              ...((o = this.previous) == null
                ? void 0
                : o.getAllModelExtensions(t)),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        var s, a;
        let n =
            (a =
              (s = this.previous) == null
                ? void 0
                : s.getAllQueryCallbacks(t, r)) != null
              ? a
              : [],
          o = [],
          i = this.extension.query;
        return !i || !(i[t] || i.$allModels || i[r] || i.$allOperations)
          ? n
          : (i[t] !== void 0 &&
              (i[t][r] !== void 0 && o.push(i[t][r]),
              i[t].$allOperations !== void 0 && o.push(i[t].$allOperations)),
            t !== "$none" &&
              i.$allModels !== void 0 &&
              (i.$allModels[r] !== void 0 && o.push(i.$allModels[r]),
              i.$allModels.$allOperations !== void 0 &&
                o.push(i.$allModels.$allOperations)),
            i[r] !== void 0 && o.push(i[r]),
            i.$allOperations !== void 0 && o.push(i.$allOperations),
            n.concat(o));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  },
  no = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e();
    }
    static single(t) {
      return new e(new ro(t));
    }
    isEmpty() {
      return this.head === void 0;
    }
    append(t) {
      return new e(new ro(t, this.head));
    }
    getAllComputedFields(t) {
      var r;
      return (r = this.head) == null ? void 0 : r.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      var t;
      return (t = this.head) == null ? void 0 : t.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      var r;
      return (r = this.head) == null ? void 0 : r.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      var n, o;
      return (o =
        (n = this.head) == null ? void 0 : n.getAllQueryCallbacks(t, r)) != null
        ? o
        : [];
    }
    getAllBatchQueryCallbacks() {
      var t, r;
      return (r =
        (t = this.head) == null ? void 0 : t.getAllBatchQueryCallbacks()) !=
        null
        ? r
        : [];
    }
  };
g();
p();
f();
d();
m();
var Iu = Ee("prisma:client"),
  ku = { Vercel: "vercel", "Netlify CI": "netlify" };
function Fu({ postinstall: e, ciName: t, clientVersion: r }) {
  if (
    (Iu("checkPlatformCaching:postinstall", e),
    Iu("checkPlatformCaching:ciName", t),
    e === !0 && t && t in ku)
  ) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ku[t]}-build`;
    throw (console.error(n), new te(n, r));
  }
}
g();
p();
f();
d();
m();
function Du(e, t) {
  return e
    ? e.datasources
      ? e.datasources
      : e.datasourceUrl
      ? { [t[0]]: { url: e.datasourceUrl } }
      : {}
    : {};
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
function qr({ error: e, user_facing_error: t }, r) {
  return t.error_code
    ? new he(t.message, {
        code: t.error_code,
        clientVersion: r,
        meta: t.meta,
        batchRequestIdx: t.batch_request_idx,
      })
    : new be(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
g();
p();
f();
d();
m();
var gr = class {};
g();
p();
f();
d();
m();
function oo(e, t) {
  return {
    batch: e,
    transaction:
      (t == null ? void 0 : t.kind) === "batch"
        ? { isolationLevel: t.options.isolationLevel }
        : void 0,
  };
}
g();
p();
f();
d();
m();
var _i = _e(ni());
g();
p();
f();
d();
m();
function Nu(e) {
  return e
    ? e
        .replace(/".*"/g, '"X"')
        .replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`)
    : "";
}
g();
p();
f();
d();
m();
function Lu(e) {
  return e
    .split(
      `
`
    )
    .map((t) =>
      t
        .replace(
          /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/,
          ""
        )
        .replace(/\+\d+\s*ms$/, "")
    ).join(`
`);
}
g();
p();
f();
d();
m();
var Id = _e(ma()),
  Bu = _e(Ca());
function ju({
  title: e,
  user: t = "prisma",
  repo: r = "prisma",
  template: n = "bug_report.yml",
  body: o,
}) {
  return (0, Bu.default)({ user: t, repo: r, template: n, title: e, body: o });
}
function Uu({
  version: e,
  binaryTarget: t,
  title: r,
  description: n,
  engineVersion: o,
  database: i,
  query: s,
}) {
  var h, A;
  let a = ia(6e3 - ((h = s == null ? void 0 : s.length) != null ? h : 0)),
    u = Lu((0, _i.default)(a)),
    l = n
      ? `# Description
\`\`\`
${n}
\`\`\``
      : "",
    c = (0,
    _i.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(A = b.version) == null ? void 0 : A.padEnd(19)}| 
| OS              | ${t == null ? void 0 : t.padEnd(19)}|
| Prisma Client   | ${e == null ? void 0 : e.padEnd(19)}|
| Query Engine    | ${o == null ? void 0 : o.padEnd(19)}|
| Database        | ${i == null ? void 0 : i.padEnd(19)}|

${l}

## Logs
\`\`\`
${u}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Nu(s) : ""}
\`\`\`
`),
    y = ju({ title: r, body: c });
  return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${Cn(y)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var kd = "Cloudflare-Workers",
  Fd = "node";
function Ci() {
  var e, t, r;
  return typeof Netlify == "object"
    ? "netlify"
    : typeof EdgeRuntime == "string"
    ? "edge-light"
    : ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === kd
    ? "workerd"
    : globalThis.Deno
    ? "deno"
    : globalThis.__lagon__
    ? "lagon"
    : ((r = (t = globalThis.process) == null ? void 0 : t.release) == null
        ? void 0
        : r.name) === Fd
    ? "node"
    : globalThis.Bun
    ? "bun"
    : globalThis.fastly
    ? "fastly"
    : "unknown";
}
function io({
  inlineDatasources: e,
  overrideDatasources: t,
  env: r,
  clientVersion: n,
}) {
  var u, l;
  let o,
    i = Object.keys(e)[0],
    s = (u = e[i]) == null ? void 0 : u.url,
    a = (l = t[i]) == null ? void 0 : l.url;
  if (
    (i === void 0
      ? (o = void 0)
      : a
      ? (o = a)
      : s != null && s.value
      ? (o = s.value)
      : s != null && s.fromEnvVar && (o = r[s.fromEnvVar]),
    (s == null ? void 0 : s.fromEnvVar) !== void 0 && o === void 0)
  )
    throw Ci() === "workerd"
      ? new te(
          `error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`,
          n
        )
      : new te(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
  if (o === void 0)
    throw new te(
      "error: Missing URL environment variable, value, or override.",
      n
    );
  return o;
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var so = class extends Error {
  constructor(t, r) {
    super(t), (this.clientVersion = r.clientVersion), (this.cause = r.cause);
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
};
var ke = class extends so {
  constructor(t, r) {
    var n;
    super(t, r), (this.isRetryable = (n = r.isRetryable) != null ? n : !0);
  }
};
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
function z(e, t) {
  return { ...e, isRetryable: t };
}
var yr = class extends ke {
  constructor(r) {
    super("This request must be retried", z(r, !0));
    this.name = "ForcedRetryError";
    this.code = "P5001";
  }
};
$(yr, "ForcedRetryError");
g();
p();
f();
d();
m();
var Bt = class extends ke {
  constructor(r, n) {
    super(r, z(n, !1));
    this.name = "InvalidDatasourceError";
    this.code = "P6001";
  }
};
$(Bt, "InvalidDatasourceError");
g();
p();
f();
d();
m();
var jt = class extends ke {
  constructor(r, n) {
    super(r, z(n, !1));
    this.name = "NotImplementedYetError";
    this.code = "P5004";
  }
};
$(jt, "NotImplementedYetError");
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var ee = class extends ke {
  constructor(t, r) {
    super(t, r), (this.response = r.response);
    let n = this.response.headers.get("prisma-request-id");
    if (n) {
      let o = `(The request id was: ${n})`;
      this.message = this.message + " " + o;
    }
  }
};
var Ut = class extends ee {
  constructor(r) {
    super("Schema needs to be uploaded", z(r, !0));
    this.name = "SchemaMissingError";
    this.code = "P5005";
  }
};
$(Ut, "SchemaMissingError");
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var Si = "This request could not be understood by the server",
  Vr = class extends ee {
    constructor(r, n, o) {
      super(n || Si, z(r, !1));
      this.name = "BadRequestError";
      this.code = "P5000";
      o && (this.code = o);
    }
  };
$(Vr, "BadRequestError");
g();
p();
f();
d();
m();
var Kr = class extends ee {
  constructor(r, n) {
    super("Engine not started: healthcheck timeout", z(r, !0));
    this.name = "HealthcheckTimeoutError";
    this.code = "P5013";
    this.logs = n;
  }
};
$(Kr, "HealthcheckTimeoutError");
g();
p();
f();
d();
m();
var Qr = class extends ee {
  constructor(r, n, o) {
    super(n, z(r, !0));
    this.name = "EngineStartupError";
    this.code = "P5014";
    this.logs = o;
  }
};
$(Qr, "EngineStartupError");
g();
p();
f();
d();
m();
var Jr = class extends ee {
  constructor(r) {
    super("Engine version is not supported", z(r, !1));
    this.name = "EngineVersionNotSupportedError";
    this.code = "P5012";
  }
};
$(Jr, "EngineVersionNotSupportedError");
g();
p();
f();
d();
m();
var Mi = "Request timed out",
  Gr = class extends ee {
    constructor(r, n = Mi) {
      super(n, z(r, !1));
      this.name = "GatewayTimeoutError";
      this.code = "P5009";
    }
  };
$(Gr, "GatewayTimeoutError");
g();
p();
f();
d();
m();
var Dd = "Interactive transaction error",
  Wr = class extends ee {
    constructor(r, n = Dd) {
      super(n, z(r, !1));
      this.name = "InteractiveTransactionError";
      this.code = "P5015";
    }
  };
$(Wr, "InteractiveTransactionError");
g();
p();
f();
d();
m();
var Nd = "Request parameters are invalid",
  Hr = class extends ee {
    constructor(r, n = Nd) {
      super(n, z(r, !1));
      this.name = "InvalidRequestError";
      this.code = "P5011";
    }
  };
$(Hr, "InvalidRequestError");
g();
p();
f();
d();
m();
var Ri = "Requested resource does not exist",
  zr = class extends ee {
    constructor(r, n = Ri) {
      super(n, z(r, !1));
      this.name = "NotFoundError";
      this.code = "P5003";
    }
  };
$(zr, "NotFoundError");
g();
p();
f();
d();
m();
var Oi = "Unknown server error",
  hr = class extends ee {
    constructor(r, n, o) {
      super(n || Oi, z(r, !0));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = o;
    }
  };
$(hr, "ServerError");
g();
p();
f();
d();
m();
var Ii = "Unauthorized, check your connection string",
  Yr = class extends ee {
    constructor(r, n = Ii) {
      super(n, z(r, !1));
      this.name = "UnauthorizedError";
      this.code = "P5007";
    }
  };
$(Yr, "UnauthorizedError");
g();
p();
f();
d();
m();
var ki = "Usage exceeded, retry again later",
  Zr = class extends ee {
    constructor(r, n = ki) {
      super(n, z(r, !0));
      this.name = "UsageExceededError";
      this.code = "P5008";
    }
  };
$(Zr, "UsageExceededError");
async function Ld(e) {
  let t;
  try {
    t = await e.text();
  } catch (r) {
    return { type: "EmptyError" };
  }
  try {
    let r = JSON.parse(t);
    if (typeof r == "string")
      switch (r) {
        case "InternalDataProxyError":
          return { type: "DataProxyError", body: r };
        default:
          return { type: "UnknownTextError", body: r };
      }
    if (typeof r == "object" && r !== null) {
      if ("is_panic" in r && "message" in r && "error_code" in r)
        return { type: "QueryEngineError", body: r };
      if (
        "EngineNotStarted" in r ||
        "InteractiveTransactionMisrouted" in r ||
        "InvalidRequestError" in r
      ) {
        let n = Object.values(r)[0].reason;
        return typeof n == "string" &&
          !["SchemaMissing", "EngineVersionNotSupported"].includes(n)
          ? { type: "UnknownJsonError", body: r }
          : { type: "DataProxyError", body: r };
      }
    }
    return { type: "UnknownJsonError", body: r };
  } catch (r) {
    return t === ""
      ? { type: "EmptyError" }
      : { type: "UnknownTextError", body: t };
  }
}
async function Xr(e, t) {
  if (e.ok) return;
  let r = { clientVersion: t, response: e },
    n = await Ld(e);
  if (n.type === "QueryEngineError")
    throw new he(n.body.message, { code: n.body.error_code, clientVersion: t });
  if (n.type === "DataProxyError") {
    if (n.body === "InternalDataProxyError")
      throw new hr(r, "Internal Data Proxy error");
    if ("EngineNotStarted" in n.body) {
      if (n.body.EngineNotStarted.reason === "SchemaMissing") return new Ut(r);
      if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
        throw new Jr(r);
      if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: o, logs: i } =
          n.body.EngineNotStarted.reason.EngineStartupError;
        throw new Qr(r, o, i);
      }
      if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: o, error_code: i } =
          n.body.EngineNotStarted.reason.KnownEngineStartupError;
        throw new te(o, t, i);
      }
      if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
        let { logs: o } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
        throw new Kr(r, o);
      }
    }
    if ("InteractiveTransactionMisrouted" in n.body) {
      let o = {
        IDParseError: "Could not parse interactive transaction ID",
        NoQueryEngineFoundError:
          "Could not find Query Engine for the specified host and transaction ID",
        TransactionStartError: "Could not start interactive transaction",
      };
      throw new Wr(r, o[n.body.InteractiveTransactionMisrouted.reason]);
    }
    if ("InvalidRequestError" in n.body)
      throw new Hr(r, n.body.InvalidRequestError.reason);
  }
  if (e.status === 401 || e.status === 403) throw new Yr(r, br(Ii, n));
  if (e.status === 404) return new zr(r, br(Ri, n));
  if (e.status === 429) throw new Zr(r, br(ki, n));
  if (e.status === 504) throw new Gr(r, br(Mi, n));
  if (e.status >= 500) throw new hr(r, br(Oi, n));
  if (e.status >= 400) throw new Vr(r, br(Si, n));
}
function br(e, t) {
  return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
}
g();
p();
f();
d();
m();
function $u(e) {
  let t = Math.pow(2, e) * 50,
    r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
    n = t + r;
  return new Promise((o) => setTimeout(() => o(n), n));
}
g();
p();
f();
d();
m();
function qu(e) {
  var r;
  if (
    !!(
      (r = e.generator) != null &&
      r.previewFeatures.some((n) => n.toLowerCase().includes("metrics"))
    )
  )
    throw new te(
      "The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate",
      e.clientVersion
    );
}
g();
p();
f();
d();
m();
function Bd(e) {
  return e[0] * 1e3 + e[1] / 1e6;
}
function Vu(e) {
  return new Date(Bd(e));
}
g();
p();
f();
d();
m();
var Ku = {
  "@prisma/debug": "workspace:*",
  "@prisma/engines-version":
    "5.8.0-37.0a83d8541752d7582de2ebc1ece46519ce72a848",
  "@prisma/fetch-engine": "workspace:*",
  "@prisma/get-platform": "workspace:*",
};
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var en = class extends ke {
  constructor(r, n) {
    super(
      `Cannot fetch data from service:
${r}`,
      z(n, !0)
    );
    this.name = "RequestError";
    this.code = "P5010";
  }
};
$(en, "RequestError");
async function $t(e, t, r = (n) => n) {
  var o;
  let n = t.clientVersion;
  try {
    return typeof fetch == "function"
      ? await r(fetch)(e, t)
      : await r(Fi)(e, t);
  } catch (i) {
    let s = (o = i.message) != null ? o : "Unknown error";
    throw new en(s, { clientVersion: n });
  }
}
function Ud(e) {
  return { ...e.headers, "Content-Type": "application/json" };
}
function $d(e) {
  return { method: e.method, headers: Ud(e) };
}
function qd(e, t) {
  return {
    text: () => Promise.resolve(x.Buffer.concat(e).toString()),
    json: () =>
      Promise.resolve().then(() => JSON.parse(x.Buffer.concat(e).toString())),
    ok: t.statusCode >= 200 && t.statusCode <= 299,
    status: t.statusCode,
    url: t.url,
    headers: new Di(t.headers),
  };
}
async function Fi(e, t = {}) {
  let r = Vd("https"),
    n = $d(t),
    o = [],
    { origin: i } = new URL(e);
  return new Promise((s, a) => {
    var l;
    let u = r.request(e, n, (c) => {
      let {
        statusCode: y,
        headers: { location: h },
      } = c;
      y >= 301 &&
        y <= 399 &&
        h &&
        (h.startsWith("http") === !1 ? s(Fi(`${i}${h}`, t)) : s(Fi(h, t))),
        c.on("data", (A) => o.push(A)),
        c.on("end", () => s(qd(o, c))),
        c.on("error", a);
    });
    u.on("error", a), u.end((l = t.body) != null ? l : "");
  });
}
var Vd = typeof _o != "undefined" ? _o : () => {},
  Di = class {
    constructor(t = {}) {
      this.headers = new Map();
      for (let [r, n] of Object.entries(t))
        if (typeof n == "string") this.headers.set(r, n);
        else if (Array.isArray(n)) for (let o of n) this.headers.set(r, o);
    }
    append(t, r) {
      this.headers.set(t, r);
    }
    delete(t) {
      this.headers.delete(t);
    }
    get(t) {
      var r;
      return (r = this.headers.get(t)) != null ? r : null;
    }
    has(t) {
      return this.headers.has(t);
    }
    set(t, r) {
      this.headers.set(t, r);
    }
    forEach(t, r) {
      for (let [n, o] of this.headers) t.call(r, o, n, this);
    }
  };
var Kd = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
  Qu = Ee("prisma:client:dataproxyEngine");
async function Qd(e, t) {
  var s, a, u;
  let r = Ku["@prisma/engines-version"],
    n = (s = t.clientVersion) != null ? s : "unknown";
  if (b.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
    return b.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
  let [o, i] = (a = n == null ? void 0 : n.split("-")) != null ? a : [];
  if (i === void 0 && Kd.test(o)) return o;
  if (i !== void 0 || n === "0.0.0" || n === "in-memory") {
    if (e.startsWith("localhost") || e.startsWith("127.0.0.1")) return "0.0.0";
    let [l] = (u = r.split("-")) != null ? u : [],
      [c, y, h] = l.split("."),
      A = Jd(`<=${c}.${y}.${h}`),
      _ = await $t(A, { clientVersion: n });
    if (!_.ok)
      throw new Error(
        `Failed to fetch stable Prisma version, unpkg.com status ${_.status} ${
          _.statusText
        }, response body: ${(await _.text()) || "<empty body>"}`
      );
    let T = await _.text();
    Qu("length of body fetched from unpkg.com", T.length);
    let S;
    try {
      S = JSON.parse(T);
    } catch (I) {
      throw (
        (console.error("JSON.parse error: body fetched from unpkg.com: ", T), I)
      );
    }
    return S.version;
  }
  throw new jt(
    "Only `major.minor.patch` versions are supported by Accelerate.",
    { clientVersion: n }
  );
}
async function Ju(e, t) {
  let r = await Qd(e, t);
  return Qu("version", r), r;
}
function Jd(e) {
  return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var Gu = 3,
  Ni = Ee("prisma:client:dataproxyEngine"),
  Li = class {
    constructor({
      apiKey: t,
      tracingHelper: r,
      logLevel: n,
      logQueries: o,
      engineHash: i,
    }) {
      (this.apiKey = t),
        (this.tracingHelper = r),
        (this.logLevel = n),
        (this.logQueries = o),
        (this.engineHash = i);
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = {
        Authorization: `Bearer ${this.apiKey}`,
        "Prisma-Engine-Hash": this.engineHash,
      };
      this.tracingHelper.isEnabled() &&
        (n.traceparent = t != null ? t : this.tracingHelper.getTraceParent()),
        r && (n["X-transaction-id"] = r.id);
      let o = this.buildCaptureSettings();
      return o.length > 0 && (n["X-capture-telemetry"] = o.join(", ")), n;
    }
    buildCaptureSettings() {
      let t = [];
      return (
        this.tracingHelper.isEnabled() && t.push("tracing"),
        this.logLevel && t.push(this.logLevel),
        this.logQueries && t.push("query"),
        t
      );
    }
  },
  tn = class extends gr {
    constructor(t) {
      super(),
        qu(t),
        (this.config = t),
        (this.env = { ...this.config.env, ...b.env }),
        (this.inlineSchema = t.inlineSchema),
        (this.inlineDatasources = t.inlineDatasources),
        (this.inlineSchemaHash = t.inlineSchemaHash),
        (this.clientVersion = t.clientVersion),
        (this.engineHash = t.engineVersion),
        (this.logEmitter = t.logEmitter),
        (this.tracingHelper = this.config.tracingHelper);
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== void 0 && (await this.startPromise),
        (this.startPromise = (async () => {
          let [t, r] = this.extractHostAndApiKey();
          (this.host = t),
            (this.headerBuilder = new Li({
              apiKey: r,
              tracingHelper: this.tracingHelper,
              logLevel: this.config.logLevel,
              logQueries: this.config.logQueries,
              engineHash: this.engineHash,
            })),
            (this.remoteClientVersion = await Ju(t, this.config)),
            Ni("host", this.host);
        })()),
        await this.startPromise;
    }
    async stop() {}
    propagateResponseExtensions(t) {
      var r, n;
      (r = t == null ? void 0 : t.logs) != null &&
        r.length &&
        t.logs.forEach((o) => {
          switch (o.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let i =
                typeof o.attributes.query == "string" ? o.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [s] = i.split("/* traceparent");
                i = s;
              }
              this.logEmitter.emit("query", {
                query: i,
                timestamp: Vu(o.timestamp),
                duration: Number(o.attributes.duration_ms),
                params: o.attributes.params,
                target: o.attributes.target,
              });
            }
          }
        }),
        (n = t == null ? void 0 : t.traces) != null &&
          n.length &&
          this.tracingHelper.createEngineSpan({ span: !0, spans: t.traces });
    }
    onBeforeExit() {
      throw new Error(
        '"beforeExit" hook is not applicable to the remote query engine'
      );
    }
    async url(t) {
      return (
        await this.start(),
        `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`
      );
    }
    async uploadSchema() {
      let t = { name: "schemaUpload", internal: !0 };
      return this.tracingHelper.runInChildSpan(t, async () => {
        let r = await $t(await this.url("schema"), {
          method: "PUT",
          headers: this.headerBuilder.build(),
          body: this.inlineSchema,
          clientVersion: this.clientVersion,
        });
        r.ok || Ni("schema response status", r.status);
        let n = await Xr(r, this.clientVersion);
        if (n)
          throw (
            (this.logEmitter.emit("warn", {
              message: `Error while uploading schema: ${n.message}`,
              timestamp: new Date(),
              target: "",
            }),
            n)
          );
        this.logEmitter.emit("info", {
          message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
          timestamp: new Date(),
          target: "",
        });
      });
    }
    request(
      t,
      { traceparent: r, interactiveTransaction: n, customDataProxyFetch: o }
    ) {
      return this.requestInternal({
        body: t,
        traceparent: r,
        interactiveTransaction: n,
        customDataProxyFetch: o,
      });
    }
    async requestBatch(
      t,
      { traceparent: r, transaction: n, customDataProxyFetch: o }
    ) {
      let i = (n == null ? void 0 : n.kind) === "itx" ? n.options : void 0,
        s = oo(t, n),
        { batchResult: a, elapsed: u } = await this.requestInternal({
          body: s,
          customDataProxyFetch: o,
          interactiveTransaction: i,
          traceparent: r,
        });
      return a.map((l) =>
        "errors" in l && l.errors.length > 0
          ? qr(l.errors[0], this.clientVersion)
          : { data: l, elapsed: u }
      );
    }
    requestInternal({
      body: t,
      traceparent: r,
      customDataProxyFetch: n,
      interactiveTransaction: o,
    }) {
      return this.withRetry({
        actionGerund: "querying",
        callback: async ({ logHttpCall: i }) => {
          let s = o
            ? `${o.payload.endpoint}/graphql`
            : await this.url("graphql");
          i(s);
          let a = await $t(
            s,
            {
              method: "POST",
              headers: this.headerBuilder.build({
                traceparent: r,
                interactiveTransaction: o,
              }),
              body: JSON.stringify(t),
              clientVersion: this.clientVersion,
            },
            n
          );
          a.ok || Ni("graphql response status", a.status),
            await this.handleError(await Xr(a, this.clientVersion));
          let u = await a.json(),
            l = u.extensions;
          if ((l && this.propagateResponseExtensions(l), u.errors))
            throw u.errors.length === 1
              ? qr(u.errors[0], this.config.clientVersion)
              : new be(u.errors, { clientVersion: this.config.clientVersion });
          return u;
        },
      });
    }
    async transaction(t, r, n) {
      let o = {
        start: "starting",
        commit: "committing",
        rollback: "rolling back",
      };
      return this.withRetry({
        actionGerund: `${o[t]} transaction`,
        callback: async ({ logHttpCall: i }) => {
          var s, a;
          if (t === "start") {
            let u = JSON.stringify({
                max_wait:
                  (s = n == null ? void 0 : n.maxWait) != null ? s : 2e3,
                timeout: (a = n == null ? void 0 : n.timeout) != null ? a : 5e3,
                isolation_level: n == null ? void 0 : n.isolationLevel,
              }),
              l = await this.url("transaction/start");
            i(l);
            let c = await $t(l, {
              method: "POST",
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              body: u,
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Xr(c, this.clientVersion));
            let y = await c.json(),
              h = y.extensions;
            h && this.propagateResponseExtensions(h);
            let A = y.id,
              _ = y["data-proxy"].endpoint;
            return { id: A, payload: { endpoint: _ } };
          } else {
            let u = `${n.payload.endpoint}/${t}`;
            i(u);
            let l = await $t(u, {
              method: "POST",
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Xr(l, this.clientVersion));
            let y = (await l.json()).extensions;
            y && this.propagateResponseExtensions(y);
            return;
          }
        },
      });
    }
    extractHostAndApiKey() {
      let t = { clientVersion: this.clientVersion },
        r = Object.keys(this.inlineDatasources)[0],
        n = io({
          inlineDatasources: this.inlineDatasources,
          overrideDatasources: this.config.overrideDatasources,
          clientVersion: this.clientVersion,
          env: this.env,
        }),
        o;
      try {
        o = new URL(n);
      } catch (l) {
        throw new Bt(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t
        );
      }
      let { protocol: i, host: s, searchParams: a } = o;
      if (i !== "prisma:")
        throw new Bt(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t
        );
      let u = a.get("api_key");
      if (u === null || u.length < 1)
        throw new Bt(
          `Error validating datasource \`${r}\`: the URL must contain a valid API key`,
          t
        );
      return [s, u];
    }
    metrics() {
      throw new jt("Metrics are not yet supported for Accelerate", {
        clientVersion: this.clientVersion,
      });
    }
    async withRetry(t) {
      var r;
      for (let n = 0; ; n++) {
        let o = (i) => {
          this.logEmitter.emit("info", {
            message: `Calling ${i} (n=${n})`,
            timestamp: new Date(),
            target: "",
          });
        };
        try {
          return await t.callback({ logHttpCall: o });
        } catch (i) {
          if (!(i instanceof ke) || !i.isRetryable) throw i;
          if (n >= Gu) throw i instanceof yr ? i.cause : i;
          this.logEmitter.emit("warn", {
            message: `Attempt ${n + 1}/${Gu} failed for ${t.actionGerund}: ${
              (r = i.message) != null ? r : "(unknown)"
            }`,
            timestamp: new Date(),
            target: "",
          });
          let s = await $u(n);
          this.logEmitter.emit("warn", {
            message: `Retrying after ${s}ms`,
            timestamp: new Date(),
            target: "",
          });
        }
      }
    }
    async handleError(t) {
      if (t instanceof Ut)
        throw (
          (await this.uploadSchema(),
          new yr({ clientVersion: this.clientVersion, cause: t }))
        );
      if (t) throw t;
    }
  };
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
function Wu(e) {
  if ((e == null ? void 0 : e.kind) === "itx") return e.options.id;
}
g();
p();
f();
d();
m();
var Ui = {};
xr(Ui, {
  QueryEngine: () => nn,
  __wbg_String_88810dfeb4021902: () => Gm,
  __wbg_buffer_344d9b41efe96da7: () => Xm,
  __wbg_call_53fc3abd42e24ec8: () => am,
  __wbg_call_669127b9d730c650: () => dg,
  __wbg_crypto_58f13aa23ffcb166: () => rg,
  __wbg_done_bc26bf4ada718266: () => pg,
  __wbg_entries_6d727b73ee02b7ce: () => Ag,
  __wbg_getRandomValues_504510b5564925af: () => Ym,
  __wbg_getTime_ed6ee333b702f8fc: () => hm,
  __wbg_get_2aff440840bb6202: () => Wm,
  __wbg_get_4a9aa5157afeb382: () => Dm,
  __wbg_get_94990005bd6ca07c: () => Hm,
  __wbg_getwithrefkey_5e6d9547403deab8: () => Jm,
  __wbg_globalThis_17eff828815f7d84: () => hg,
  __wbg_global_46f939f6541643c5: () => bg,
  __wbg_has_cdf8b85f6e903c80: () => mm,
  __wbg_instanceof_ArrayBuffer_c7cc317e5c29cc0d: () => Tg,
  __wbg_instanceof_Promise_cfbcc42300367513: () => Km,
  __wbg_instanceof_Uint8Array_19e6f142a5e7e1e1: () => vg,
  __wbg_isArray_38525be7442aa21e: () => Mm,
  __wbg_isSafeInteger_c38b0a16d0c7cef7: () => Am,
  __wbg_iterator_7ee1a391d310f8e4: () => Om,
  __wbg_length_a5587d6cd79ab197: () => Pg,
  __wbg_length_cace2e0b3ddc0502: () => Fm,
  __wbg_msCrypto_abcb1295e768d1f2: () => ug,
  __wbg_new0_ad75dd38f92424e2: () => ym,
  __wbg_new_08236689f0afb357: () => Nm,
  __wbg_new_1b94180eeb48f2a2: () => jm,
  __wbg_new_c728d68b8b34487e: () => Um,
  __wbg_new_d8a000788389a31e: () => xg,
  __wbg_new_feb65b865d980ae2: () => om,
  __wbg_newnoargs_ccdcae30fd002262: () => wg,
  __wbg_newwithbyteoffsetandlength_2dc04d99088b15e3: () => eg,
  __wbg_newwithlength_13b5319ab422dcf6: () => lg,
  __wbg_next_15da6a3df9290720: () => mg,
  __wbg_next_1989a20442400aaa: () => cg,
  __wbg_node_523d7bd03ef69fba: () => ig,
  __wbg_now_4579335d3581594c: () => xm,
  __wbg_now_8ed1a4454e40ecd1: () => wm,
  __wbg_parse_3f0cb48976ca4123: () => gm,
  __wbg_process_5b786e71d465a513: () => ng,
  __wbg_randomFillSync_a0d98aa11c81fe89: () => tg,
  __wbg_require_2784e593a4674877: () => sg,
  __wbg_resolve_a3252b2860f0a09e: () => Og,
  __wbg_self_3fad056edded10bd: () => gg,
  __wbg_setTimeout_631fe61f31fa2fad: () => lm,
  __wbg_set_0ac78a2bc07da03c: () => Bm,
  __wbg_set_3355b9f2d3092e3b: () => $m,
  __wbg_set_841ac57cff3d672b: () => Vm,
  __wbg_set_dcfd613a3420f908: () => Eg,
  __wbg_set_wasm: () => ji,
  __wbg_static_accessor_PERFORMANCE_1a325848eb3ce65a: () => bm,
  __wbg_stringify_4039297315a25b00: () => dm,
  __wbg_subarray_6ca5cfa7fbb9abbe: () => zm,
  __wbg_then_1bbc9edafd859b06: () => Rg,
  __wbg_then_89e1c559530b85cf: () => Mg,
  __wbg_valueOf_ff4b62641803432a: () => Qm,
  __wbg_value_0570714ff7d75f35: () => fg,
  __wbg_versions_c2ab80650590b6a2: () => og,
  __wbg_window_a4f46c98a61d4089: () => yg,
  __wbindgen_bigint_from_i64: () => Cm,
  __wbindgen_bigint_from_u64: () => km,
  __wbindgen_bigint_get_as_i64: () => _m,
  __wbindgen_boolean_get: () => Pm,
  __wbindgen_cb_drop: () => Sg,
  __wbindgen_closure_wrapper5578: () => Ig,
  __wbindgen_debug_string: () => _g,
  __wbindgen_error_new: () => cm,
  __wbindgen_in: () => Im,
  __wbindgen_is_bigint: () => vm,
  __wbindgen_is_function: () => ag,
  __wbindgen_is_object: () => Rm,
  __wbindgen_is_string: () => qm,
  __wbindgen_is_undefined: () => fm,
  __wbindgen_jsval_eq: () => Sm,
  __wbindgen_jsval_loose_eq: () => Em,
  __wbindgen_memory: () => Zm,
  __wbindgen_number_get: () => Tm,
  __wbindgen_number_new: () => Lm,
  __wbindgen_object_clone_ref: () => pm,
  __wbindgen_object_drop_ref: () => im,
  __wbindgen_string_get: () => um,
  __wbindgen_string_new: () => sm,
  __wbindgen_throw: () => Cg,
  debug_panic: () => rm,
  getBuildTimeInfo: () => tm,
});
g();
p();
f();
d();
m();
var L;
function ji(e) {
  L = e;
}
var st = new Array(128).fill(void 0);
st.push(void 0, null, !0, !1);
function D(e) {
  return st[e];
}
var rn = st.length;
function Gd(e) {
  e < 132 || ((st[e] = rn), (rn = e));
}
function xe(e) {
  let t = D(e);
  return Gd(e), t;
}
var Wd =
    typeof TextDecoder == "undefined"
      ? (0, module.require)("util").TextDecoder
      : TextDecoder,
  Hu = new Wd("utf-8", { ignoreBOM: !0, fatal: !0 });
Hu.decode();
var ao = null;
function po() {
  return (
    (ao === null || ao.byteLength === 0) &&
      (ao = new Uint8Array(L.memory.buffer)),
    ao
  );
}
function on(e, t) {
  return (e = e >>> 0), Hu.decode(po().subarray(e, e + t));
}
function j(e) {
  rn === st.length && st.push(st.length + 1);
  let t = rn;
  return (rn = st[t]), (st[t] = e), t;
}
var de = 0,
  Hd =
    typeof TextEncoder == "undefined"
      ? (0, module.require)("util").TextEncoder
      : TextEncoder,
  fo = new Hd("utf-8"),
  zd =
    typeof fo.encodeInto == "function"
      ? function (e, t) {
          return fo.encodeInto(e, t);
        }
      : function (e, t) {
          let r = fo.encode(e);
          return t.set(r), { read: e.length, written: r.length };
        };
function Te(e, t, r) {
  if (r === void 0) {
    let a = fo.encode(e),
      u = t(a.length, 1) >>> 0;
    return (
      po()
        .subarray(u, u + a.length)
        .set(a),
      (de = a.length),
      u
    );
  }
  let n = e.length,
    o = t(n, 1) >>> 0,
    i = po(),
    s = 0;
  for (; s < n; s++) {
    let a = e.charCodeAt(s);
    if (a > 127) break;
    i[o + s] = a;
  }
  if (s !== n) {
    s !== 0 && (e = e.slice(s)), (o = r(o, n, (n = s + e.length * 3), 1) >>> 0);
    let a = po().subarray(o + s, o + n),
      u = zd(e, a);
    s += u.written;
  }
  return (de = s), o;
}
function Tt(e) {
  return e == null;
}
var uo = null;
function Be() {
  return (
    (uo === null || uo.byteLength === 0) &&
      (uo = new Int32Array(L.memory.buffer)),
    uo
  );
}
var lo = null;
function Yd() {
  return (
    (lo === null || lo.byteLength === 0) &&
      (lo = new Float64Array(L.memory.buffer)),
    lo
  );
}
var co = null;
function Zd() {
  return (
    (co === null || co.byteLength === 0) &&
      (co = new BigInt64Array(L.memory.buffer)),
    co
  );
}
function Bi(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null) return `${e}`;
  if (t == "string") return `"${e}"`;
  if (t == "symbol") {
    let o = e.description;
    return o == null ? "Symbol" : `Symbol(${o})`;
  }
  if (t == "function") {
    let o = e.name;
    return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
  }
  if (Array.isArray(e)) {
    let o = e.length,
      i = "[";
    o > 0 && (i += Bi(e[0]));
    for (let s = 1; s < o; s++) i += ", " + Bi(e[s]);
    return (i += "]"), i;
  }
  let r = /\[object ([^\]]+)\]/.exec(toString.call(e)),
    n;
  if (r.length > 1) n = r[1];
  else return toString.call(e);
  if (n == "Object")
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch (o) {
      return "Object";
    }
  return e instanceof Error
    ? `${e.name}: ${e.message}
${e.stack}`
    : n;
}
function Xd(e, t, r, n) {
  let o = { a: e, b: t, cnt: 1, dtor: r },
    i = (...s) => {
      o.cnt++;
      let a = o.a;
      o.a = 0;
      try {
        return n(a, o.b, ...s);
      } finally {
        --o.cnt === 0 ? L.__wbindgen_export_2.get(o.dtor)(a, o.b) : (o.a = a);
      }
    };
  return (i.original = o), i;
}
function em(e, t, r) {
  L.wasm_bindgen__convert__closures__invoke1_mut__ha9d1cfee20bed753(e, t, j(r));
}
function tm() {
  let e = L.getBuildTimeInfo();
  return xe(e);
}
function rm(e) {
  try {
    let i = L.__wbindgen_add_to_stack_pointer(-16);
    var t = Tt(e) ? 0 : Te(e, L.__wbindgen_malloc, L.__wbindgen_realloc),
      r = de;
    L.debug_panic(i, t, r);
    var n = Be()[i / 4 + 0],
      o = Be()[i / 4 + 1];
    if (o) throw xe(n);
  } finally {
    L.__wbindgen_add_to_stack_pointer(16);
  }
}
function Re(e, t) {
  try {
    return e.apply(this, t);
  } catch (r) {
    L.__wbindgen_exn_store(j(r));
  }
}
function nm(e, t, r, n) {
  L.wasm_bindgen__convert__closures__invoke2_mut__h3b98f66135a9eb56(
    e,
    t,
    j(r),
    j(n)
  );
}
var nn = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    L.__wbg_queryengine_free(t);
  }
  constructor(t, r, n) {
    try {
      let a = L.__wbindgen_add_to_stack_pointer(-16);
      L.queryengine_new(a, j(t), j(r), j(n));
      var o = Be()[a / 4 + 0],
        i = Be()[a / 4 + 1],
        s = Be()[a / 4 + 2];
      if (s) throw xe(i);
      return (this.__wbg_ptr = o >>> 0), this;
    } finally {
      L.__wbindgen_add_to_stack_pointer(16);
    }
  }
  connect(t) {
    let r = Te(t, L.__wbindgen_malloc, L.__wbindgen_realloc),
      n = de,
      o = L.queryengine_connect(this.__wbg_ptr, r, n);
    return xe(o);
  }
  disconnect(t) {
    let r = Te(t, L.__wbindgen_malloc, L.__wbindgen_realloc),
      n = de,
      o = L.queryengine_disconnect(this.__wbg_ptr, r, n);
    return xe(o);
  }
  query(t, r, n) {
    let o = Te(t, L.__wbindgen_malloc, L.__wbindgen_realloc),
      i = de,
      s = Te(r, L.__wbindgen_malloc, L.__wbindgen_realloc),
      a = de;
    var u = Tt(n) ? 0 : Te(n, L.__wbindgen_malloc, L.__wbindgen_realloc),
      l = de;
    let c = L.queryengine_query(this.__wbg_ptr, o, i, s, a, u, l);
    return xe(c);
  }
  startTransaction(t, r) {
    let n = Te(t, L.__wbindgen_malloc, L.__wbindgen_realloc),
      o = de,
      i = Te(r, L.__wbindgen_malloc, L.__wbindgen_realloc),
      s = de,
      a = L.queryengine_startTransaction(this.__wbg_ptr, n, o, i, s);
    return xe(a);
  }
  commitTransaction(t, r) {
    let n = Te(t, L.__wbindgen_malloc, L.__wbindgen_realloc),
      o = de,
      i = Te(r, L.__wbindgen_malloc, L.__wbindgen_realloc),
      s = de,
      a = L.queryengine_commitTransaction(this.__wbg_ptr, n, o, i, s);
    return xe(a);
  }
  rollbackTransaction(t, r) {
    let n = Te(t, L.__wbindgen_malloc, L.__wbindgen_realloc),
      o = de,
      i = Te(r, L.__wbindgen_malloc, L.__wbindgen_realloc),
      s = de,
      a = L.queryengine_rollbackTransaction(this.__wbg_ptr, n, o, i, s);
    return xe(a);
  }
  metrics(t) {
    let r = Te(t, L.__wbindgen_malloc, L.__wbindgen_realloc),
      n = de,
      o = L.queryengine_metrics(this.__wbg_ptr, r, n);
    return xe(o);
  }
};
function om(e, t) {
  try {
    var r = { a: e, b: t },
      n = (i, s) => {
        let a = r.a;
        r.a = 0;
        try {
          return nm(a, r.b, i, s);
        } finally {
          r.a = a;
        }
      };
    let o = new Promise(n);
    return j(o);
  } finally {
    r.a = r.b = 0;
  }
}
function im(e) {
  xe(e);
}
function sm(e, t) {
  let r = on(e, t);
  return j(r);
}
function am() {
  return Re(function (e, t, r) {
    let n = D(e).call(D(t), D(r));
    return j(n);
  }, arguments);
}
function um(e, t) {
  let r = D(t),
    n = typeof r == "string" ? r : void 0;
  var o = Tt(n) ? 0 : Te(n, L.__wbindgen_malloc, L.__wbindgen_realloc),
    i = de;
  (Be()[e / 4 + 1] = i), (Be()[e / 4 + 0] = o);
}
function lm(e, t) {
  return setTimeout(D(e), t >>> 0);
}
function cm(e, t) {
  let r = new Error(on(e, t));
  return j(r);
}
function pm(e) {
  let t = D(e);
  return j(t);
}
function fm(e) {
  return D(e) === void 0;
}
function dm() {
  return Re(function (e) {
    let t = JSON.stringify(D(e));
    return j(t);
  }, arguments);
}
function mm() {
  return Re(function (e, t) {
    return Reflect.has(D(e), D(t));
  }, arguments);
}
function gm() {
  return Re(function (e, t) {
    let r = JSON.parse(on(e, t));
    return j(r);
  }, arguments);
}
function ym() {
  return j(new Date());
}
function hm(e) {
  return D(e).getTime();
}
function bm() {
  let e = P;
  return Tt(e) ? 0 : j(e);
}
function wm(e) {
  return D(e).now();
}
function xm() {
  return Date.now();
}
function Em(e, t) {
  return D(e) == D(t);
}
function Pm(e) {
  let t = D(e);
  return typeof t == "boolean" ? (t ? 1 : 0) : 2;
}
function vm(e) {
  return typeof D(e) == "bigint";
}
function Tm(e, t) {
  let r = D(t),
    n = typeof r == "number" ? r : void 0;
  (Yd()[e / 8 + 1] = Tt(n) ? 0 : n), (Be()[e / 4 + 0] = !Tt(n));
}
function Am(e) {
  return Number.isSafeInteger(D(e));
}
function _m(e, t) {
  let r = D(t),
    n = typeof r == "bigint" ? r : void 0;
  (Zd()[e / 8 + 1] = Tt(n) ? BigInt(0) : n), (Be()[e / 4 + 0] = !Tt(n));
}
function Cm(e) {
  return j(e);
}
function Sm(e, t) {
  return D(e) === D(t);
}
function Mm(e) {
  return Array.isArray(D(e));
}
function Rm(e) {
  let t = D(e);
  return typeof t == "object" && t !== null;
}
function Om() {
  return j(Symbol.iterator);
}
function Im(e, t) {
  return D(e) in D(t);
}
function km(e) {
  let t = BigInt.asUintN(64, e);
  return j(t);
}
function Fm(e) {
  return D(e).length;
}
function Dm(e, t) {
  let r = D(e)[t >>> 0];
  return j(r);
}
function Nm() {
  let e = new Array();
  return j(e);
}
function Lm(e) {
  return j(e);
}
function Bm(e, t, r) {
  D(e)[t >>> 0] = xe(r);
}
function jm() {
  return j(new Map());
}
function Um() {
  let e = new Object();
  return j(e);
}
function $m(e, t, r) {
  let n = D(e).set(D(t), D(r));
  return j(n);
}
function qm(e) {
  return typeof D(e) == "string";
}
function Vm(e, t, r) {
  D(e)[xe(t)] = xe(r);
}
function Km(e) {
  let t;
  try {
    t = D(e) instanceof Promise;
  } catch (n) {
    t = !1;
  }
  return t;
}
function Qm(e) {
  return D(e).valueOf();
}
function Jm(e, t) {
  let r = D(e)[D(t)];
  return j(r);
}
function Gm(e, t) {
  let r = String(D(t)),
    n = Te(r, L.__wbindgen_malloc, L.__wbindgen_realloc),
    o = de;
  (Be()[e / 4 + 1] = o), (Be()[e / 4 + 0] = n);
}
function Wm() {
  return Re(function (e, t) {
    let r = Reflect.get(D(e), D(t));
    return j(r);
  }, arguments);
}
function Hm() {
  return Re(function (e, t) {
    let r = D(e)[xe(t)];
    return j(r);
  }, arguments);
}
function zm(e, t, r) {
  let n = D(e).subarray(t >>> 0, r >>> 0);
  return j(n);
}
function Ym() {
  return Re(function (e, t) {
    D(e).getRandomValues(D(t));
  }, arguments);
}
function Zm() {
  let e = L.memory;
  return j(e);
}
function Xm(e) {
  let t = D(e).buffer;
  return j(t);
}
function eg(e, t, r) {
  let n = new Uint8Array(D(e), t >>> 0, r >>> 0);
  return j(n);
}
function tg() {
  return Re(function (e, t) {
    D(e).randomFillSync(xe(t));
  }, arguments);
}
function rg(e) {
  let t = D(e).crypto;
  return j(t);
}
function ng(e) {
  let t = D(e).process;
  return j(t);
}
function og(e) {
  let t = D(e).versions;
  return j(t);
}
function ig(e) {
  let t = D(e).node;
  return j(t);
}
function sg() {
  return Re(function () {
    let e = module.require;
    return j(e);
  }, arguments);
}
function ag(e) {
  return typeof D(e) == "function";
}
function ug(e) {
  let t = D(e).msCrypto;
  return j(t);
}
function lg(e) {
  let t = new Uint8Array(e >>> 0);
  return j(t);
}
function cg() {
  return Re(function (e) {
    let t = D(e).next();
    return j(t);
  }, arguments);
}
function pg(e) {
  return D(e).done;
}
function fg(e) {
  let t = D(e).value;
  return j(t);
}
function dg() {
  return Re(function (e, t) {
    let r = D(e).call(D(t));
    return j(r);
  }, arguments);
}
function mg(e) {
  let t = D(e).next;
  return j(t);
}
function gg() {
  return Re(function () {
    let e = self.self;
    return j(e);
  }, arguments);
}
function yg() {
  return Re(function () {
    let e = window.window;
    return j(e);
  }, arguments);
}
function hg() {
  return Re(function () {
    let e = globalThis.globalThis;
    return j(e);
  }, arguments);
}
function bg() {
  return Re(function () {
    let e = global.global;
    return j(e);
  }, arguments);
}
function wg(e, t) {
  let r = new w(on(e, t));
  return j(r);
}
function xg(e) {
  let t = new Uint8Array(D(e));
  return j(t);
}
function Eg(e, t, r) {
  D(e).set(D(t), r >>> 0);
}
function Pg(e) {
  return D(e).length;
}
function vg(e) {
  let t;
  try {
    t = D(e) instanceof Uint8Array;
  } catch (n) {
    t = !1;
  }
  return t;
}
function Tg(e) {
  let t;
  try {
    t = D(e) instanceof ArrayBuffer;
  } catch (n) {
    t = !1;
  }
  return t;
}
function Ag(e) {
  let t = Object.entries(D(e));
  return j(t);
}
function _g(e, t) {
  let r = Bi(D(t)),
    n = Te(r, L.__wbindgen_malloc, L.__wbindgen_realloc),
    o = de;
  (Be()[e / 4 + 1] = o), (Be()[e / 4 + 0] = n);
}
function Cg(e, t) {
  throw new Error(on(e, t));
}
function Sg(e) {
  let t = xe(e).original;
  return t.cnt-- == 1 ? ((t.a = 0), !0) : !1;
}
function Mg(e, t) {
  let r = D(e).then(D(t));
  return j(r);
}
function Rg(e, t, r) {
  let n = D(e).then(D(t), D(r));
  return j(n);
}
function Og(e) {
  let t = Promise.resolve(D(e));
  return j(t);
}
function Ig(e, t, r) {
  let n = Xd(e, t, 275, em);
  return j(n);
}
var $i,
  zu = {
    async loadLibrary(e) {
      var o;
      let { generator: t, clientVersion: r, adapter: n } = e;
      if (
        (t == null ? void 0 : t.previewFeatures.includes("driverAdapters")) ===
        void 0
      )
        throw new te(
          'The `driverAdapters` preview feature is required with `engineType="wasm"`',
          r
        );
      if (n === void 0)
        throw new te(
          'The `adapter` option for `PrismaClient` is required with `engineType="wasm"`',
          r
        );
      if ($i === void 0) {
        let i = await ((o = e.getQueryEngineWasmModule) == null
          ? void 0
          : o.call(e));
        if (i == null)
          throw new te(
            "The loaded wasm module was unexpectedly `undefined` or `null` once loaded",
            r
          );
        ($i = new WebAssembly.Instance(i, { "./query_engine_bg.js": Ui })
          .exports),
          ji($i);
      }
      return {
        debugPanic() {
          return Promise.reject("{}");
        },
        dmmf() {
          return Promise.resolve("{}");
        },
        version() {
          return { commit: "unknown", version: "unknown" };
        },
        QueryEngine: nn,
      };
    },
  };
var kg = "P2036",
  et = Ee("prisma:client:libraryEngine");
function Fg(e) {
  return e.item_type === "query" && "query" in e;
}
function Dg(e) {
  return "level" in e ? e.level === "error" && e.message === "PANIC" : !1;
}
var I3 = [...Zo, "native"],
  Yu = 0,
  sn = class extends gr {
    constructor(t, r) {
      var s, a, u;
      super();
      let n = kt(t.generator);
      (this.libraryLoader = r != null ? r : zu),
        (this.config = t),
        (this.libraryStarted = !1),
        (this.logQueries = (s = t.logQueries) != null ? s : !1),
        (this.logLevel = (a = t.logLevel) != null ? a : "error"),
        (this.logEmitter = t.logEmitter),
        (this.datamodel = atob(t.inlineSchema)),
        t.enableDebugLogs && (this.logLevel = "debug");
      let o = Object.keys(t.overrideDatasources)[0],
        i = (u = t.overrideDatasources[o]) == null ? void 0 : u.url;
      o !== void 0 && i !== void 0 && (this.datasourceOverrides = { [o]: i }),
        (this.libraryInstantiationPromise = this.instantiateLibrary()),
        this.checkForTooManyEngines();
    }
    checkForTooManyEngines() {
      Yu === 10 &&
        console.warn(
          `${er(
            "warn(prisma-client)"
          )} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`
        );
    }
    async transaction(t, r, n) {
      var a, u, l, c, y;
      await this.start();
      let o = JSON.stringify(r),
        i;
      if (t === "start") {
        let h = JSON.stringify({
          max_wait: (a = n == null ? void 0 : n.maxWait) != null ? a : 2e3,
          timeout: (u = n == null ? void 0 : n.timeout) != null ? u : 5e3,
          isolation_level: n == null ? void 0 : n.isolationLevel,
        });
        i = await ((l = this.engine) == null
          ? void 0
          : l.startTransaction(h, o));
      } else
        t === "commit"
          ? (i = await ((c = this.engine) == null
              ? void 0
              : c.commitTransaction(n.id, o)))
          : t === "rollback" &&
            (i = await ((y = this.engine) == null
              ? void 0
              : y.rollbackTransaction(n.id, o)));
      let s = this.parseEngineResponse(i);
      if (Ng(s)) {
        let h = this.getExternalAdapterError(s);
        throw h
          ? h.error
          : new he(s.message, {
              code: s.error_code,
              clientVersion: this.config.clientVersion,
              meta: s.meta,
            });
      }
      return s;
    }
    async instantiateLibrary() {
      if ((et("internalSetup"), this.libraryInstantiationPromise))
        return this.libraryInstantiationPromise;
      (this.binaryTarget = await this.getCurrentBinaryTarget()),
        await this.loadEngine(),
        this.version();
    }
    async getCurrentBinaryTarget() {}
    parseEngineResponse(t) {
      if (!t)
        throw new be("Response from the Engine was empty", {
          clientVersion: this.config.clientVersion,
        });
      try {
        return JSON.parse(t);
      } catch (r) {
        throw new be("Unable to JSON.parse response from engine", {
          clientVersion: this.config.clientVersion,
        });
      }
    }
    async loadEngine() {
      var t, r;
      if (!this.engine) {
        this.QueryEngineConstructor ||
          ((this.library = await this.libraryLoader.loadLibrary(this.config)),
          (this.QueryEngineConstructor = this.library.QueryEngine));
        try {
          let n = new E(this),
            { adapter: o } = this.config;
          o && et("Using driver adapter: %O", o),
            (this.engine = new this.QueryEngineConstructor(
              {
                datamodel: this.datamodel,
                env: b.env,
                logQueries: (t = this.config.logQueries) != null ? t : !1,
                ignoreEnvVarErrors: !0,
                datasourceOverrides:
                  (r = this.datasourceOverrides) != null ? r : {},
                logLevel: this.logLevel,
                configDir: this.config.cwd,
                engineProtocol: "json",
              },
              (i) => {
                var s;
                (s = n.deref()) == null || s.logger(i);
              },
              o
            )),
            Yu++;
        } catch (n) {
          let o = n,
            i = this.parseInitError(o.message);
          throw typeof i == "string"
            ? o
            : new te(i.message, this.config.clientVersion, i.error_code);
        }
      }
    }
    logger(t) {
      var n;
      let r = this.parseEngineResponse(t);
      if (r) {
        if ("span" in r) {
          this.config.tracingHelper.createEngineSpan(r);
          return;
        }
        (r.level =
          (n = r == null ? void 0 : r.level.toLowerCase()) != null
            ? n
            : "unknown"),
          Fg(r)
            ? this.logEmitter.emit("query", {
                timestamp: new Date(),
                query: r.query,
                params: r.params,
                duration: Number(r.duration_ms),
                target: r.module_path,
              })
            : Dg(r)
            ? (this.loggerRustPanic = new $e(
                this.getErrorMessageWithLink(
                  `${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`
                ),
                this.config.clientVersion
              ))
            : this.logEmitter.emit(r.level, {
                timestamp: new Date(),
                message: r.message,
                target: r.module_path,
              });
      }
    }
    getErrorMessageWithLink(t) {
      var r;
      return Uu({
        binaryTarget: this.binaryTarget,
        title: t,
        version: this.config.clientVersion,
        engineVersion: (r = this.versionInfo) == null ? void 0 : r.commit,
        database: this.config.activeProvider,
        query: this.lastQuery,
      });
    }
    parseInitError(t) {
      try {
        return JSON.parse(t);
      } catch (r) {}
      return t;
    }
    parseRequestError(t) {
      try {
        return JSON.parse(t);
      } catch (r) {}
      return t;
    }
    onBeforeExit() {
      throw new Error(
        '"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.'
      );
    }
    async start() {
      if (
        (await this.libraryInstantiationPromise,
        await this.libraryStoppingPromise,
        this.libraryStartingPromise)
      )
        return (
          et(
            `library already starting, this.libraryStarted: ${this.libraryStarted}`
          ),
          this.libraryStartingPromise
        );
      if (this.libraryStarted) return;
      let t = async () => {
        var r;
        et("library starting");
        try {
          let n = { traceparent: this.config.tracingHelper.getTraceParent() };
          await ((r = this.engine) == null
            ? void 0
            : r.connect(JSON.stringify(n))),
            (this.libraryStarted = !0),
            et("library started");
        } catch (n) {
          let o = this.parseInitError(n.message);
          throw typeof o == "string"
            ? n
            : new te(o.message, this.config.clientVersion, o.error_code);
        } finally {
          this.libraryStartingPromise = void 0;
        }
      };
      return (
        (this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan(
          "connect",
          t
        )),
        this.libraryStartingPromise
      );
    }
    async stop() {
      if (
        (await this.libraryStartingPromise,
        await this.executingQueryPromise,
        this.libraryStoppingPromise)
      )
        return et("library is already stopping"), this.libraryStoppingPromise;
      if (!this.libraryStarted) return;
      let t = async () => {
        var n;
        await new Promise((o) => setTimeout(o, 5)), et("library stopping");
        let r = { traceparent: this.config.tracingHelper.getTraceParent() };
        await ((n = this.engine) == null
          ? void 0
          : n.disconnect(JSON.stringify(r))),
          (this.libraryStarted = !1),
          (this.libraryStoppingPromise = void 0),
          et("library stopped");
      };
      return (
        (this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan(
          "disconnect",
          t
        )),
        this.libraryStoppingPromise
      );
    }
    version() {
      var t, r, n;
      return (
        (this.versionInfo = (t = this.library) == null ? void 0 : t.version()),
        (n = (r = this.versionInfo) == null ? void 0 : r.version) != null
          ? n
          : "unknown"
      );
    }
    debugPanic(t) {
      var r;
      return (r = this.library) == null ? void 0 : r.debugPanic(t);
    }
    async request(t, { traceparent: r, interactiveTransaction: n }) {
      var s, a;
      et(`sending request, this.libraryStarted: ${this.libraryStarted}`);
      let o = JSON.stringify({ traceparent: r }),
        i = JSON.stringify(t);
      try {
        await this.start(),
          (this.executingQueryPromise =
            (s = this.engine) == null
              ? void 0
              : s.query(i, o, n == null ? void 0 : n.id)),
          (this.lastQuery = i);
        let u = this.parseEngineResponse(await this.executingQueryPromise);
        if (u.errors)
          throw u.errors.length === 1
            ? this.buildQueryError(u.errors[0])
            : new be(JSON.stringify(u.errors), {
                clientVersion: this.config.clientVersion,
              });
        if (this.loggerRustPanic) throw this.loggerRustPanic;
        return { data: u, elapsed: 0 };
      } catch (u) {
        if (u instanceof te) throw u;
        if (
          u.code === "GenericFailure" &&
          (a = u.message) != null &&
          a.startsWith("PANIC:")
        )
          throw new $e(
            this.getErrorMessageWithLink(u.message),
            this.config.clientVersion
          );
        let l = this.parseRequestError(u.message);
        throw typeof l == "string"
          ? u
          : new be(
              `${l.message}
${l.backtrace}`,
              { clientVersion: this.config.clientVersion }
            );
      }
    }
    async requestBatch(t, { transaction: r, traceparent: n }) {
      et("requestBatch");
      let o = oo(t, r);
      await this.start(),
        (this.lastQuery = JSON.stringify(o)),
        (this.executingQueryPromise = this.engine.query(
          this.lastQuery,
          JSON.stringify({ traceparent: n }),
          Wu(r)
        ));
      let i = await this.executingQueryPromise,
        s = this.parseEngineResponse(i);
      if (s.errors)
        throw s.errors.length === 1
          ? this.buildQueryError(s.errors[0])
          : new be(JSON.stringify(s.errors), {
              clientVersion: this.config.clientVersion,
            });
      let { batchResult: a, errors: u } = s;
      if (Array.isArray(a))
        return a.map((l) => {
          var c;
          return l.errors && l.errors.length > 0
            ? (c = this.loggerRustPanic) != null
              ? c
              : this.buildQueryError(l.errors[0])
            : { data: l, elapsed: 0 };
        });
      throw u && u.length === 1
        ? new Error(u[0].error)
        : new Error(JSON.stringify(s));
    }
    buildQueryError(t) {
      if (t.user_facing_error.is_panic)
        return new $e(
          this.getErrorMessageWithLink(t.user_facing_error.message),
          this.config.clientVersion
        );
      let r = this.getExternalAdapterError(t.user_facing_error);
      return r ? r.error : qr(t, this.config.clientVersion);
    }
    getExternalAdapterError(t) {
      var r;
      if (t.error_code === kg && this.config.adapter) {
        let n = (r = t.meta) == null ? void 0 : r.id;
        In(
          typeof n == "number",
          "Malformed external JS error received from the engine"
        );
        let o = this.config.adapter.errorRegistry.consumeError(n);
        return In(o, "External error with reported id was not registered"), o;
      }
    }
    async metrics(t) {
      await this.start();
      let r = await this.engine.metrics(JSON.stringify(t));
      return t.format === "prometheus" ? r : this.parseEngineResponse(r);
    }
  };
function Ng(e) {
  return typeof e == "object" && e !== null && e.error_code !== void 0;
}
function Zu(e, t) {
  let r;
  try {
    r = io({
      inlineDatasources: t.inlineDatasources,
      overrideDatasources: t.overrideDatasources,
      env: { ...t.env, ...b.env },
      clientVersion: t.clientVersion,
    });
  } catch (o) {}
  return (
    e.noEngine !== !0 &&
      r != null &&
      r.startsWith("prisma://") &&
      Fn(
        "recommend--no-engine",
        "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)"
      ),
    kt(t.generator) === "wasm" && t.adapter !== void 0
      ? new sn(t)
      : ((r != null && r.startsWith("prisma://")) || e.noEngine, new tn(t))
  );
}
g();
p();
f();
d();
m();
function mo({ generator: e }) {
  var t;
  return (t = e == null ? void 0 : e.previewFeatures) != null ? t : [];
}
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var ol = _e(qi());
g();
p();
f();
d();
m();
function rl(e, t) {
  let r = nl(e),
    n = Lg(r),
    o = jg(n);
  o ? go(o, t) : t.addErrorMessage(() => "Unknown error");
}
function nl(e) {
  return e.errors.flatMap((t) => (t.kind === "Union" ? nl(t) : [t]));
}
function Lg(e) {
  let t = new Map(),
    r = [];
  for (let n of e) {
    if (n.kind !== "InvalidArgumentType") {
      r.push(n);
      continue;
    }
    let o = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`,
      i = t.get(o);
    i
      ? t.set(o, {
          ...n,
          argument: {
            ...n.argument,
            typeNames: Bg(i.argument.typeNames, n.argument.typeNames),
          },
        })
      : t.set(o, n);
  }
  return r.push(...t.values()), r;
}
function Bg(e, t) {
  return [...new Set(e.concat(t))];
}
function jg(e) {
  return si(e, (t, r) => {
    let n = el(t),
      o = el(r);
    return n !== o ? n - o : tl(t) - tl(r);
  });
}
function el(e) {
  let t = 0;
  return (
    Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
    Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
    t
  );
}
function tl(e) {
  switch (e.kind) {
    case "InvalidArgumentValue":
    case "ValueTooLarge":
      return 20;
    case "InvalidArgumentType":
      return 10;
    case "RequiredArgumentMissing":
      return -10;
    default:
      return 0;
  }
}
g();
p();
f();
d();
m();
var at = class {
  constructor(t, r) {
    this.name = t;
    this.value = r;
    this.isRequired = !1;
  }
  makeRequired() {
    return (this.isRequired = !0), this;
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.addMarginSymbol(r(this.isRequired ? "+" : "?")),
      t.write(r(this.name)),
      this.isRequired || t.write(r("?")),
      t.write(r(": ")),
      typeof this.value == "string"
        ? t.write(r(this.value))
        : t.write(this.value);
  }
};
g();
p();
f();
d();
m();
var yo = class {
  constructor() {
    this.fields = [];
  }
  addField(t, r) {
    return (
      this.fields.push({
        write(n) {
          let { green: o, dim: i } = n.context.colors;
          n.write(o(i(`${t}: ${r}`))).addMarginSymbol(o(i("+")));
        },
      }),
      this
    );
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.writeLine(r("{"))
      .withIndent(() => {
        t.writeJoined(pr, this.fields).newLine();
      })
      .write(r("}"))
      .addMarginSymbol(r("+"));
  }
};
function go(e, t) {
  switch (e.kind) {
    case "IncludeAndSelect":
      Ug(e, t);
      break;
    case "IncludeOnScalar":
      $g(e, t);
      break;
    case "EmptySelection":
      qg(e, t);
      break;
    case "UnknownSelectionField":
      Vg(e, t);
      break;
    case "UnknownArgument":
      Kg(e, t);
      break;
    case "UnknownInputField":
      Qg(e, t);
      break;
    case "RequiredArgumentMissing":
      Jg(e, t);
      break;
    case "InvalidArgumentType":
      Gg(e, t);
      break;
    case "InvalidArgumentValue":
      Wg(e, t);
      break;
    case "ValueTooLarge":
      Hg(e, t);
      break;
    case "SomeFieldsMissing":
      zg(e, t);
      break;
    case "TooManyFieldsGiven":
      Yg(e, t);
      break;
    case "Union":
      rl(e, t);
      break;
    default:
      throw new Error("not implemented: " + e.kind);
  }
}
function Ug(e, t) {
  var n, o;
  let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  r &&
    r instanceof pe &&
    ((n = r.getField("include")) == null || n.markAsError(),
    (o = r.getField("select")) == null || o.markAsError()),
    t.addErrorMessage(
      (i) =>
        `Please ${i.bold("either")} use ${i.green("`include`")} or ${i.green(
          "`select`"
        )}, but ${i.red("not both")} at the same time.`
    );
}
function $g(e, t) {
  var s, a;
  let [r, n] = ho(e.selectionPath),
    o = e.outputType,
    i = (s = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : s.value;
  if (i && ((a = i.getField(n)) == null || a.markAsError(), o))
    for (let u of o.fields)
      u.isRelation && i.addSuggestion(new at(u.name, "true"));
  t.addErrorMessage((u) => {
    let l = `Invalid scalar field ${u.red(`\`${n}\``)} for ${u.bold(
      "include"
    )} statement`;
    return (
      o ? (l += ` on model ${u.bold(o.name)}. ${an(u)}`) : (l += "."),
      (l += `
Note that ${u.bold("include")} statements only accept relation fields.`),
      l
    );
  });
}
function qg(e, t) {
  var i, s;
  let r = e.outputType,
    n =
      (i = t.arguments.getDeepSelectionParent(e.selectionPath)) == null
        ? void 0
        : i.value,
    o = (s = n == null ? void 0 : n.isEmpty()) != null ? s : !1;
  n && (n.removeAllFields(), al(n, r)),
    t.addErrorMessage((a) =>
      o
        ? `The ${a.red("`select`")} statement for type ${a.bold(
            r.name
          )} must not be empty. ${an(a)}`
        : `The ${a.red("`select`")} statement for type ${a.bold(
            r.name
          )} needs ${a.bold("at least one truthy value")}.`
    );
}
function Vg(e, t) {
  var i;
  let [r, n] = ho(e.selectionPath),
    o = t.arguments.getDeepSelectionParent(r);
  o &&
    ((i = o.value.getField(n)) == null || i.markAsError(),
    al(o.value, e.outputType)),
    t.addErrorMessage((s) => {
      let a = [`Unknown field ${s.red(`\`${n}\``)}`];
      return (
        o && a.push(`for ${s.bold(o.kind)} statement`),
        a.push(`on model ${s.bold(`\`${e.outputType.name}\``)}.`),
        a.push(an(s)),
        a.join(" ")
      );
    });
}
function Kg(e, t) {
  var o;
  let r = e.argumentPath[0],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof pe &&
    ((o = n.getField(r)) == null || o.markAsError(), Zg(n, e.arguments)),
    t.addErrorMessage((i) =>
      il(
        i,
        r,
        e.arguments.map((s) => s.name)
      )
    );
}
function Qg(e, t) {
  var i;
  let [r, n] = ho(e.argumentPath),
    o = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (o instanceof pe) {
    (i = o.getDeepField(e.argumentPath)) == null || i.markAsError();
    let s = o.getDeepFieldValue(r);
    s instanceof pe && ul(s, e.inputType);
  }
  t.addErrorMessage((s) =>
    il(
      s,
      n,
      e.inputType.fields.map((a) => a.name)
    )
  );
}
function il(e, t, r) {
  let n = [`Unknown argument \`${e.red(t)}\`.`],
    o = ey(t, r);
  return (
    o && n.push(`Did you mean \`${e.green(o)}\`?`),
    r.length > 0 && n.push(an(e)),
    n.join(" ")
  );
}
function Jg(e, t) {
  let r;
  t.addErrorMessage((u) =>
    (r == null ? void 0 : r.value) instanceof fe && r.value.text === "null"
      ? `Argument \`${u.green(i)}\` must not be ${u.red("null")}.`
      : `Argument \`${u.green(i)}\` is missing.`
  );
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (!(n instanceof pe)) return;
  let [o, i] = ho(e.argumentPath),
    s = new yo(),
    a = n.getDeepFieldValue(o);
  if (a instanceof pe)
    if (
      ((r = a.getField(i)),
      r && a.removeField(i),
      e.inputTypes.length === 1 && e.inputTypes[0].kind === "object")
    ) {
      for (let u of e.inputTypes[0].fields)
        s.addField(u.name, u.typeNames.join(" | "));
      a.addSuggestion(new at(i, s).makeRequired());
    } else {
      let u = e.inputTypes.map(sl).join(" | ");
      a.addSuggestion(new at(i, u).makeRequired());
    }
}
function sl(e) {
  return e.kind === "list" ? `${sl(e.elementType)}[]` : e.name;
}
function Gg(e, t) {
  var o;
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof pe &&
    ((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()),
    t.addErrorMessage((i) => {
      let s = bo(
        "or",
        e.argument.typeNames.map((a) => i.green(a))
      );
      return `Argument \`${i.bold(
        r
      )}\`: Invalid value provided. Expected ${s}, provided ${i.red(
        e.inferredType
      )}.`;
    });
}
function Wg(e, t) {
  var o;
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  n instanceof pe &&
    ((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()),
    t.addErrorMessage((i) => {
      let s = [`Invalid value for argument \`${i.bold(r)}\``];
      if (
        (e.underlyingError && s.push(`: ${e.underlyingError}`),
        s.push("."),
        e.argument.typeNames.length > 0)
      ) {
        let a = bo(
          "or",
          e.argument.typeNames.map((u) => i.green(u))
        );
        s.push(` Expected ${a}.`);
      }
      return s.join("");
    });
}
function Hg(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
    o;
  if (n instanceof pe) {
    let i = n.getDeepField(e.argumentPath),
      s = i == null ? void 0 : i.value;
    s == null || s.markAsError(), s instanceof fe && (o = s.text);
  }
  t.addErrorMessage((i) => {
    let s = ["Unable to fit value"];
    return (
      o && s.push(i.red(o)),
      s.push(`into a 64-bit signed integer for field \`${i.bold(r)}\``),
      s.join(" ")
    );
  });
}
function zg(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
  if (n instanceof pe) {
    let o = n.getDeepFieldValue(e.argumentPath);
    o instanceof pe && ul(o, e.inputType);
  }
  t.addErrorMessage((o) => {
    let i = [
      `Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1
        ? e.constraints.requiredFields
          ? i.push(
              `${o.green("at least one of")} ${bo(
                "or",
                e.constraints.requiredFields.map((s) => `\`${o.bold(s)}\``)
              )} arguments.`
            )
          : i.push(`${o.green("at least one")} argument.`)
        : i.push(
            `${o.green(`at least ${e.constraints.minFieldCount}`)} arguments.`
          ),
      i.push(an(o)),
      i.join(" ")
    );
  });
}
function Yg(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
    o = [];
  if (n instanceof pe) {
    let i = n.getDeepFieldValue(e.argumentPath);
    i instanceof pe && (i.markAsError(), (o = Object.keys(i.getFields())));
  }
  t.addErrorMessage((i) => {
    let s = [
      `Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1
        ? s.push(`${i.green("exactly one")} argument,`)
        : e.constraints.maxFieldCount == 1
        ? s.push(`${i.green("at most one")} argument,`)
        : s.push(
            `${i.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`
          ),
      s.push(
        `but you provided ${bo(
          "and",
          o.map((a) => i.red(a))
        )}. Please choose`
      ),
      e.constraints.maxFieldCount === 1
        ? s.push("one.")
        : s.push(`${e.constraints.maxFieldCount}.`),
      s.join(" ")
    );
  });
}
function al(e, t) {
  for (let r of t.fields)
    e.hasField(r.name) || e.addSuggestion(new at(r.name, "true"));
}
function Zg(e, t) {
  for (let r of t)
    e.hasField(r.name) ||
      e.addSuggestion(new at(r.name, r.typeNames.join(" | ")));
}
function ul(e, t) {
  if (t.kind === "object")
    for (let r of t.fields)
      e.hasField(r.name) ||
        e.addSuggestion(new at(r.name, r.typeNames.join(" | ")));
}
function ho(e) {
  let t = [...e],
    r = t.pop();
  if (!r) throw new Error("unexpected empty path");
  return [t, r];
}
function an({ green: e, enabled: t }) {
  return (
    "Available options are " +
    (t ? `listed in ${e("green")}` : "marked with ?") +
    "."
  );
}
function bo(e, t) {
  if (t.length === 1) return t[0];
  let r = [...t],
    n = r.pop();
  return `${r.join(", ")} ${e} ${n}`;
}
var Xg = 3;
function ey(e, t) {
  let r = 1 / 0,
    n;
  for (let o of t) {
    let i = (0, ol.default)(e, o);
    i > Xg || (i < r && ((r = i), (n = o)));
  }
  return n;
}
function wo({
  args: e,
  errors: t,
  errorFormat: r,
  callsite: n,
  originalMethod: o,
  clientVersion: i,
}) {
  let s = zn(e);
  for (let y of t) go(y, s);
  let a = r === "pretty" ? Ya : Wn,
    u = s.renderAllMessages(a),
    l = new ir(0, { colors: a }).write(s).toString(),
    c = mr({
      message: u,
      callsite: n,
      originalMethod: o,
      showColors: r === "pretty",
      callArguments: l,
    });
  throw new Se(c, { clientVersion: i });
}
var ty = {
  findUnique: "findUnique",
  findUniqueOrThrow: "findUniqueOrThrow",
  findFirst: "findFirst",
  findFirstOrThrow: "findFirstOrThrow",
  findMany: "findMany",
  count: "aggregate",
  create: "createOne",
  createMany: "createMany",
  update: "updateOne",
  updateMany: "updateMany",
  upsert: "upsertOne",
  delete: "deleteOne",
  deleteMany: "deleteMany",
  executeRaw: "executeRaw",
  queryRaw: "queryRaw",
  aggregate: "aggregate",
  groupBy: "groupBy",
  runCommandRaw: "runCommandRaw",
  findRaw: "findRaw",
  aggregateRaw: "aggregateRaw",
};
function ll({
  modelName: e,
  action: t,
  args: r,
  runtimeDataModel: n,
  extensions: o,
  callsite: i,
  clientMethod: s,
  errorFormat: a,
  clientVersion: u,
}) {
  let l = new Vi({
    runtimeDataModel: n,
    modelName: e,
    action: t,
    rootArgs: r,
    callsite: i,
    extensions: o,
    selectionPath: [],
    argumentPath: [],
    originalMethod: s,
    errorFormat: a,
    clientVersion: u,
  });
  return { modelName: e, action: ty[t], query: Ki(r, l) };
}
function Ki({ select: e, include: t, ...r } = {}, n) {
  return { arguments: pl(r, n), selection: ry(e, t, n) };
}
function ry(e, t, r) {
  return (
    e &&
      t &&
      r.throwValidationError({
        kind: "IncludeAndSelect",
        selectionPath: r.getSelectionPath(),
      }),
    e ? iy(e, r) : ny(r, t)
  );
}
function ny(e, t) {
  let r = {};
  return (
    e.model && !e.isRawAction() && ((r.$composites = !0), (r.$scalars = !0)),
    t && oy(r, t, e),
    r
  );
}
function oy(e, t, r) {
  for (let [n, o] of Object.entries(t)) {
    let i = r.findField(n);
    i &&
      (i == null ? void 0 : i.kind) !== "object" &&
      r.throwValidationError({
        kind: "IncludeOnScalar",
        selectionPath: r.getSelectionPath().concat(n),
        outputType: r.getOutputTypeDescription(),
      }),
      o === !0
        ? (e[n] = !0)
        : typeof o == "object" && (e[n] = Ki(o, r.nestSelection(n)));
  }
}
function iy(e, t) {
  let r = {},
    n = t.getComputedFields(),
    o = Ou(e, n);
  for (let [i, s] of Object.entries(o)) {
    let a = t.findField(i);
    (n != null && n[i] && !a) ||
      (s === !0
        ? (r[i] = !0)
        : typeof s == "object" && (r[i] = Ki(s, t.nestSelection(i))));
  }
  return r;
}
function cl(e, t) {
  if (e === null) return null;
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e;
  if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
  if (sr(e)) {
    if (Bn(e)) return { $type: "DateTime", value: e.toISOString() };
    t.throwValidationError({
      kind: "InvalidArgumentValue",
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: ["Date"] },
      underlyingError: "Provided Date object is invalid",
    });
  }
  if (cr(e))
    return {
      $type: "FieldRef",
      value: { _ref: e.name, _container: e.modelName },
    };
  if (Array.isArray(e)) return sy(e, t);
  if (ArrayBuffer.isView(e))
    return { $type: "Bytes", value: x.Buffer.from(e).toString("base64") };
  if (ay(e)) return e.values;
  if (lr(e)) return { $type: "Decimal", value: e.toFixed() };
  if (e instanceof nt) {
    if (e !== li.instances[e._getName()])
      throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: e._getName() };
  }
  if (uy(e)) return e.toJSON();
  if (typeof e == "object") return pl(e, t);
  t.throwValidationError({
    kind: "InvalidArgumentValue",
    selectionPath: t.getSelectionPath(),
    argumentPath: t.getArgumentPath(),
    argument: { name: t.getArgumentName(), typeNames: [] },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(
      e
    )} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
  });
}
function pl(e, t) {
  if (e.$type) return { $type: "Json", value: JSON.stringify(e) };
  let r = {};
  for (let n in e) {
    let o = e[n];
    o !== void 0 && (r[n] = cl(o, t.nestArgument(n)));
  }
  return r;
}
function sy(e, t) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let o = t.nestArgument(String(n)),
      i = e[n];
    i === void 0 &&
      t.throwValidationError({
        kind: "InvalidArgumentValue",
        selectionPath: o.getSelectionPath(),
        argumentPath: o.getArgumentPath(),
        argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] },
        underlyingError:
          "Can not use `undefined` value within array. Use `null` or filter out `undefined` values",
      }),
      r.push(cl(i, o));
  }
  return r;
}
function ay(e) {
  return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
}
function uy(e) {
  return typeof e == "object" && e !== null && typeof e.toJSON == "function";
}
var Vi = class e {
  constructor(t) {
    this.params = t;
    this.params.modelName &&
      (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
  }
  throwValidationError(t) {
    var r;
    wo({
      errors: [t],
      originalMethod: this.params.originalMethod,
      args: (r = this.params.rootArgs) != null ? r : {},
      callsite: this.params.callsite,
      errorFormat: this.params.errorFormat,
      clientVersion: this.params.clientVersion,
    });
  }
  getSelectionPath() {
    return this.params.selectionPath;
  }
  getArgumentPath() {
    return this.params.argumentPath;
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1];
  }
  getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.model))
      return {
        name: this.params.modelName,
        fields: this.model.fields.map((t) => ({
          name: t.name,
          typeName: "boolean",
          isRelation: t.kind === "object",
        })),
      };
  }
  isRawAction() {
    return [
      "executeRaw",
      "queryRaw",
      "runCommandRaw",
      "findRaw",
      "aggregateRaw",
    ].includes(this.params.action);
  }
  getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(t) {
    var r;
    return (r = this.model) == null
      ? void 0
      : r.fields.find((n) => n.name === t);
  }
  nestSelection(t) {
    let r = this.findField(t),
      n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
    return new e({
      ...this.params,
      modelName: n,
      selectionPath: this.params.selectionPath.concat(t),
    });
  }
  nestArgument(t) {
    return new e({
      ...this.params,
      argumentPath: this.params.argumentPath.concat(t),
    });
  }
};
g();
p();
f();
d();
m();
var fl = (e) => ({ command: e });
g();
p();
f();
d();
m();
g();
p();
f();
d();
m();
var dl = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
g();
p();
f();
d();
m();
function un(e) {
  try {
    return ml(e, "fast");
  } catch (t) {
    return ml(e, "slow");
  }
}
function ml(e, t) {
  return JSON.stringify(e.map((r) => ly(r, t)));
}
function ly(e, t) {
  return typeof e == "bigint"
    ? { prisma__type: "bigint", prisma__value: e.toString() }
    : sr(e)
    ? { prisma__type: "date", prisma__value: e.toJSON() }
    : it.isDecimal(e)
    ? { prisma__type: "decimal", prisma__value: e.toJSON() }
    : x.Buffer.isBuffer(e)
    ? { prisma__type: "bytes", prisma__value: e.toString("base64") }
    : cy(e) || ArrayBuffer.isView(e)
    ? {
        prisma__type: "bytes",
        prisma__value: x.Buffer.from(e).toString("base64"),
      }
    : typeof e == "object" && t === "slow"
    ? yl(e)
    : e;
}
function cy(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == "object" && e !== null
    ? e[Symbol.toStringTag] === "ArrayBuffer" ||
      e[Symbol.toStringTag] === "SharedArrayBuffer"
    : !1;
}
function yl(e) {
  if (typeof e != "object" || e === null) return e;
  if (typeof e.toJSON == "function") return e.toJSON();
  if (Array.isArray(e)) return e.map(gl);
  let t = {};
  for (let r of Object.keys(e)) t[r] = gl(e[r]);
  return t;
}
function gl(e) {
  return typeof e == "bigint" ? e.toString() : yl(e);
}
var py = /^(\s*alter\s)/i,
  hl = Ee("prisma:client");
function Qi(e, t, r, n) {
  if (
    !(e !== "postgresql" && e !== "cockroachdb") &&
    r.length > 0 &&
    py.exec(t)
  )
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var Ji =
    ({ clientMethod: e, activeProvider: t, driverAdapterProvider: r }) =>
    (n) => {
      r !== void 0 && (t = r);
      let o = "",
        i;
      if (Array.isArray(n)) {
        let [s, ...a] = n;
        (o = s), (i = { values: un(a || []), __prismaRawParameters__: !0 });
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            (o = n.sql),
              (i = { values: un(n.values), __prismaRawParameters__: !0 });
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            (o = n.text),
              (i = { values: un(n.values), __prismaRawParameters__: !0 });
            break;
          }
          case "sqlserver": {
            (o = dl(n)),
              (i = { values: un(n.values), __prismaRawParameters__: !0 });
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return (
        i != null && i.values
          ? hl(`prisma.${e}(${o}, ${i.values})`)
          : hl(`prisma.${e}(${o})`),
        { query: o, parameters: i }
      );
    },
  bl = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new Le(t, r);
    },
  },
  wl = {
    requestArgsToMiddlewareArgs(e) {
      return [e];
    },
    middlewareArgsToRequestArgs(e) {
      return e[0];
    },
  };
g();
p();
f();
d();
m();
function Gi(e) {
  return function (r) {
    let n,
      o = (i = e) => {
        try {
          return i === void 0 || (i == null ? void 0 : i.kind) === "itx"
            ? n != null
              ? n
              : (n = xl(r(i)))
            : xl(r(i));
        } catch (s) {
          return Promise.reject(s);
        }
      };
    return {
      then(i, s) {
        return o().then(i, s);
      },
      catch(i) {
        return o().catch(i);
      },
      finally(i) {
        return o().finally(i);
      },
      requestTransaction(i) {
        let s = o(i);
        return s.requestTransaction ? s.requestTransaction(i) : s;
      },
      [Symbol.toStringTag]: "PrismaPromise",
    };
  };
}
function xl(e) {
  return typeof e.then == "function" ? e : Promise.resolve(e);
}
g();
p();
f();
d();
m();
var El = {
    isEnabled() {
      return !1;
    },
    getTraceParent() {
      return "00-10-10-00";
    },
    async createEngineSpan() {},
    getActiveContext() {},
    runInChildSpan(e, t) {
      return t();
    },
  },
  Wi = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    createEngineSpan(t) {
      return this.getGlobalTracingHelper().createEngineSpan(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      var t, r;
      return (r =
        (t = globalThis.PRISMA_INSTRUMENTATION) == null ? void 0 : t.helper) !=
        null
        ? r
        : El;
    }
  };
function Pl(e) {
  return e.includes("tracing") ? new Wi() : El;
}
g();
p();
f();
d();
m();
function vl(e, t = () => {}) {
  let r,
    n = new Promise((o) => (r = o));
  return {
    then(o) {
      return --e === 0 && r(t()), o == null ? void 0 : o(n);
    },
  };
}
g();
p();
f();
d();
m();
function Tl(e) {
  return typeof e == "string"
    ? e
    : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query"
          ? t
          : t && (r === "info" || t === "info")
          ? "info"
          : n;
      }, void 0);
}
g();
p();
f();
d();
m();
var xo = class {
  constructor() {
    this._middlewares = [];
  }
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
g();
p();
f();
d();
m();
var _l = _e(ni());
g();
p();
f();
d();
m();
function Eo(e) {
  return typeof e.batchRequestIdx == "number";
}
g();
p();
f();
d();
m();
function Po(e) {
  return e === null
    ? e
    : Array.isArray(e)
    ? e.map(Po)
    : typeof e == "object"
    ? fy(e)
      ? dy(e)
      : or(e, Po)
    : e;
}
function fy(e) {
  return e !== null && typeof e == "object" && typeof e.$type == "string";
}
function dy({ $type: e, value: t }) {
  switch (e) {
    case "BigInt":
      return BigInt(t);
    case "Bytes":
      return x.Buffer.from(t, "base64");
    case "DateTime":
      return new Date(t);
    case "Decimal":
      return new it(t);
    case "Json":
      return JSON.parse(t);
    default:
      Ft(t, "Unknown tagged value");
  }
}
g();
p();
f();
d();
m();
function Al(e) {
  if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
  let t = [];
  return (
    e.modelName && t.push(e.modelName),
    e.query.arguments && t.push(Hi(e.query.arguments)),
    t.push(Hi(e.query.selection)),
    t.join("")
  );
}
function Hi(e) {
  return `(${Object.keys(e)
    .sort()
    .map((r) => {
      let n = e[r];
      return typeof n == "object" && n !== null ? `(${r} ${Hi(n)})` : r;
    })
    .join(" ")})`;
}
g();
p();
f();
d();
m();
var my = {
  aggregate: !1,
  aggregateRaw: !1,
  createMany: !0,
  createOne: !0,
  deleteMany: !0,
  deleteOne: !0,
  executeRaw: !0,
  findFirst: !1,
  findFirstOrThrow: !1,
  findMany: !1,
  findRaw: !1,
  findUnique: !1,
  findUniqueOrThrow: !1,
  groupBy: !1,
  queryRaw: !1,
  runCommandRaw: !0,
  updateMany: !0,
  updateOne: !0,
  upsertOne: !0,
};
function zi(e) {
  return my[e];
}
g();
p();
f();
d();
m();
var vo = class {
  constructor(t) {
    this.options = t;
    this.tickActive = !1;
    this.batches = {};
  }
  request(t) {
    let r = this.options.batchBy(t);
    return r
      ? (this.batches[r] ||
          ((this.batches[r] = []),
          this.tickActive ||
            ((this.tickActive = !0),
            b.nextTick(() => {
              this.dispatchBatches(), (this.tickActive = !1);
            }))),
        new Promise((n, o) => {
          this.batches[r].push({ request: t, resolve: n, reject: o });
        }))
      : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t],
        r.length === 1
          ? this.options
              .singleLoader(r[0].request)
              .then((n) => {
                n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
              })
              .catch((n) => {
                r[0].reject(n);
              })
          : (r.sort((n, o) => this.options.batchOrder(n.request, o.request)),
            this.options
              .batchLoader(r.map((n) => n.request))
              .then((n) => {
                if (n instanceof Error)
                  for (let o = 0; o < r.length; o++) r[o].reject(n);
                else
                  for (let o = 0; o < r.length; o++) {
                    let i = n[o];
                    i instanceof Error ? r[o].reject(i) : r[o].resolve(i);
                  }
              })
              .catch((n) => {
                for (let o = 0; o < r.length; o++) r[o].reject(n);
              }));
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
var gy = Ee("prisma:client:request_handler"),
  To = class {
    constructor(t, r) {
      (this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new vo({
          batchLoader: _u(async ({ requests: n, customDataProxyFetch: o }) => {
            let { transaction: i, otelParentCtx: s } = n[0],
              a = n.map((y) => y.protocolQuery),
              u = this.client._tracingHelper.getTraceParent(s),
              l = n.some((y) => zi(y.protocolQuery.action));
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: u,
                transaction: yy(i),
                containsWrite: l,
                customDataProxyFetch: o,
              })
            ).map((y, h) => {
              if (y instanceof Error) return y;
              try {
                return this.mapQueryEngineResult(n[h], y);
              } catch (A) {
                return A;
              }
            });
          }),
          singleLoader: async (n) => {
            var s;
            let o =
                ((s = n.transaction) == null ? void 0 : s.kind) === "itx"
                  ? Cl(n.transaction)
                  : void 0,
              i = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: o,
                isWrite: zi(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              });
            return this.mapQueryEngineResult(n, i);
          },
          batchBy: (n) => {
            var o;
            return (o = n.transaction) != null && o.id
              ? `transaction-${n.transaction.id}`
              : Al(n.protocolQuery);
          },
          batchOrder(n, o) {
            var i, s;
            return ((i = n.transaction) == null ? void 0 : i.kind) ===
              "batch" &&
              ((s = o.transaction) == null ? void 0 : s.kind) === "batch"
              ? n.transaction.index - o.transaction.index
              : 0;
          },
        }));
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let {
          clientMethod: n,
          callsite: o,
          transaction: i,
          args: s,
          modelName: a,
        } = t;
        this.handleAndLogRequestError({
          error: r,
          clientMethod: n,
          callsite: o,
          transaction: i,
          args: s,
          modelName: a,
        });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let o = n == null ? void 0 : n.data,
        i = n == null ? void 0 : n.elapsed,
        s = this.unpack(o, t, r);
      return b.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: i } : s;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw (
          (this.logEmitter &&
            this.logEmitter.emit("error", {
              message: r.message,
              target: t.clientMethod,
              timestamp: new Date(),
            }),
          r)
        );
      }
    }
    handleRequestError({
      error: t,
      clientMethod: r,
      callsite: n,
      transaction: o,
      args: i,
      modelName: s,
    }) {
      if ((gy(t), hy(t, o) || t instanceof ht)) throw t;
      if (t instanceof he && by(t)) {
        let u = Sl(t.meta);
        wo({
          args: i,
          errors: [u],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
          clientVersion: this.client._clientVersion,
        });
      }
      let a = t.message;
      if (
        (n &&
          (a = mr({
            callsite: n,
            originalMethod: r,
            isPanic: t.isPanic,
            showColors: this.client._errorFormat === "pretty",
            message: a,
          })),
        (a = this.sanitizeMessage(a)),
        t.code)
      ) {
        let u = s ? { modelName: s, ...t.meta } : t.meta;
        throw new he(a, {
          code: t.code,
          clientVersion: this.client._clientVersion,
          meta: u,
          batchRequestIdx: t.batchRequestIdx,
        });
      } else {
        if (t.isPanic) throw new $e(a, this.client._clientVersion);
        if (t instanceof be)
          throw new be(a, {
            clientVersion: this.client._clientVersion,
            batchRequestIdx: t.batchRequestIdx,
          });
        if (t instanceof te) throw new te(a, this.client._clientVersion);
        if (t instanceof $e) throw new $e(a, this.client._clientVersion);
      }
      throw ((t.clientVersion = this.client._clientVersion), t);
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty"
        ? (0, _l.default)(t)
        : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t)) return t;
      let o = Object.values(t)[0],
        i = r.filter((a) => a !== "select" && a !== "include"),
        s = Po(Pi(o, i));
      return n ? n(s) : s;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
function yy(e) {
  if (e) {
    if (e.kind === "batch")
      return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
    if (e.kind === "itx") return { kind: "itx", options: Cl(e) };
    Ft(e, "Unknown transaction kind");
  }
}
function Cl(e) {
  return { id: e.id, payload: e.payload };
}
function hy(e, t) {
  return (
    Eo(e) &&
    (t == null ? void 0 : t.kind) === "batch" &&
    e.batchRequestIdx !== t.index
  );
}
function by(e) {
  return e.code === "P2009" || e.code === "P2012";
}
function Sl(e) {
  if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(Sl) };
  if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath;
    return { ...e, selectionPath: t };
  }
  return e;
}
g();
p();
f();
d();
m();
var Ml = "5.8.0";
var Rl = Ml;
g();
p();
f();
d();
m();
function Ol(e) {
  return e.map((t) => {
    let r = {};
    for (let n of Object.keys(t)) r[n] = Il(t[n]);
    return r;
  });
}
function Il({ prisma__type: e, prisma__value: t }) {
  switch (e) {
    case "bigint":
      return BigInt(t);
    case "bytes":
      return x.Buffer.from(t, "base64");
    case "decimal":
      return new it(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return new Date(`1970-01-01T${t}Z`);
    case "array":
      return t.map(Il);
    default:
      return t;
  }
}
g();
p();
f();
d();
m();
var Nl = _e(qi());
g();
p();
f();
d();
m();
var re = class extends Error {
  constructor(t) {
    super(
      t +
        `
Read more at https://pris.ly/d/client-constructor`
    ),
      (this.name = "PrismaClientConstructorValidationError");
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
$(re, "PrismaClientConstructorValidationError");
var kl = [
    "datasources",
    "datasourceUrl",
    "errorFormat",
    "adapter",
    "log",
    "__internal",
  ],
  Fl = ["pretty", "colorless", "minimal"],
  Dl = ["info", "query", "warn", "error"],
  xy = {
    datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new re(
            `Invalid value ${JSON.stringify(
              e
            )} for "datasources" provided to PrismaClient constructor`
          );
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let o = wr(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new re(
              `Unknown datasource ${r} provided to PrismaClient constructor.${o}`
            );
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new re(`Invalid value ${JSON.stringify(
              e
            )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [o, i] of Object.entries(n)) {
              if (o !== "url")
                throw new re(`Invalid value ${JSON.stringify(
                  e
                )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof i != "string")
                throw new re(`Invalid value ${JSON.stringify(
                  i
                )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    },
    adapter: (e, t) => {
      if (e === null) return;
      if (e === void 0)
        throw new re(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.'
        );
      if (!mo(t).includes("driverAdapters"))
        throw new re(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.'
        );
      if (kt() === "binary")
        throw new re(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.'
        );
    },
    datasourceUrl: (e) => {
      if (typeof e != "undefined" && typeof e != "string")
        throw new re(`Invalid value ${JSON.stringify(
          e
        )} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new re(
            `Invalid value ${JSON.stringify(
              e
            )} for "errorFormat" provided to PrismaClient constructor.`
          );
        if (!Fl.includes(e)) {
          let t = wr(e, Fl);
          throw new re(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e))
        throw new re(
          `Invalid value ${JSON.stringify(
            e
          )} for "log" provided to PrismaClient constructor.`
        );
      function t(r) {
        if (typeof r == "string" && !Dl.includes(r)) {
          let n = wr(r, Dl);
          throw new re(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`
          );
        }
      }
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (o) => {
            let i = ["stdout", "event"];
            if (!i.includes(o)) {
              let s = wr(o, i);
              throw new re(
                `Invalid value ${JSON.stringify(
                  o
                )} for "emit" in logLevel provided to PrismaClient constructor.${s}`
              );
            }
          },
        };
        if (r && typeof r == "object")
          for (let [o, i] of Object.entries(r))
            if (n[o]) n[o](i);
            else
              throw new re(
                `Invalid property ${o} for "log" provided to PrismaClient constructor`
              );
      }
    },
    __internal: (e) => {
      if (!e) return;
      let t = ["debug", "hooks", "engine", "measurePerformance"];
      if (typeof e != "object")
        throw new re(
          `Invalid value ${JSON.stringify(
            e
          )} for "__internal" to PrismaClient constructor`
        );
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = wr(r, t);
          throw new re(
            `Invalid property ${JSON.stringify(
              r
            )} for "__internal" provided to PrismaClient constructor.${n}`
          );
        }
    },
  };
function Ll(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!kl.includes(r)) {
      let o = wr(r, kl);
      throw new re(
        `Unknown property ${r} provided to PrismaClient constructor.${o}`
      );
    }
    xy[r](n, t);
  }
  if (e.datasourceUrl && e.datasources)
    throw new re(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them'
    );
}
function wr(e, t) {
  if (t.length === 0 || typeof e != "string") return "";
  let r = Ey(e, t);
  return r ? ` Did you mean "${r}"?` : "";
}
function Ey(e, t) {
  if (t.length === 0) return null;
  let r = t.map((o) => ({ value: o, distance: (0, Nl.default)(e, o) }));
  r.sort((o, i) => (o.distance < i.distance ? -1 : 1));
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
g();
p();
f();
d();
m();
function Bl(e) {
  return e.length === 0
    ? Promise.resolve([])
    : new Promise((t, r) => {
        let n = new Array(e.length),
          o = null,
          i = !1,
          s = 0,
          a = () => {
            i || (s++, s === e.length && ((i = !0), o ? r(o) : t(n)));
          },
          u = (l) => {
            i || ((i = !0), r(l));
          };
        for (let l = 0; l < e.length; l++)
          e[l].then(
            (c) => {
              (n[l] = c), a();
            },
            (c) => {
              if (!Eo(c)) {
                u(c);
                return;
              }
              c.batchRequestIdx === l ? u(c) : (o || (o = c), a());
            }
          );
      });
}
var At = Ee("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var Py = {
    requestArgsToMiddlewareArgs: (e) => e,
    middlewareArgsToRequestArgs: (e) => e,
  },
  vy = Symbol.for("prisma.client.transaction.id"),
  Ty = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
function Ay(e) {
  class t {
    constructor(n) {
      this._middlewares = new xo();
      this._createPrismaPromise = Gi();
      this.$extends = bu;
      var u, l, c, y, h, A;
      Fu(e), n && Ll(n, e);
      let o = n != null && n.adapter ? fi(n.adapter) : void 0,
        i = new Ul.EventEmitter().on("error", () => {});
      (this._extensions = no.empty()),
        (this._previewFeatures = mo(e)),
        (this._clientVersion = (u = e.clientVersion) != null ? u : Rl),
        (this._activeProvider = e.activeProvider),
        (this._tracingHelper = Pl(this._previewFeatures));
      let s = {
          rootEnvPath:
            e.relativeEnvPaths.rootEnvPath &&
            ln.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            e.relativeEnvPaths.schemaEnvPath &&
            ln.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        a = (l = e.injectableEdgeEnv) == null ? void 0 : l.call(e);
      try {
        let _ = n != null ? n : {},
          T = (c = _.__internal) != null ? c : {},
          S = T.debug === !0;
        S && Ee.enable("prisma:client");
        let I = ln.default.resolve(e.dirname, e.relativePath);
        Rn.existsSync(I) || (I = e.dirname),
          At("dirname", e.dirname),
          At("relativePath", e.relativePath),
          At("cwd", I);
        let F = T.engine || {};
        if (
          (_.errorFormat
            ? (this._errorFormat = _.errorFormat)
            : b.env.NODE_ENV === "production"
            ? (this._errorFormat = "minimal")
            : b.env.NO_COLOR
            ? (this._errorFormat = "colorless")
            : (this._errorFormat = "colorless"),
          (this._runtimeDataModel = e.runtimeDataModel),
          (this._engineConfig = {
            cwd: I,
            dirname: e.dirname,
            enableDebugLogs: S,
            allowTriggerPanic: F.allowTriggerPanic,
            datamodelPath: ln.default.join(
              e.dirname,
              (y = e.filename) != null ? y : "schema.prisma"
            ),
            prismaPath: (h = F.binaryPath) != null ? h : void 0,
            engineEndpoint: F.endpoint,
            generator: e.generator,
            showColors: this._errorFormat === "pretty",
            logLevel: _.log && Tl(_.log),
            logQueries:
              _.log &&
              !!(typeof _.log == "string"
                ? _.log === "query"
                : _.log.find((O) =>
                    typeof O == "string" ? O === "query" : O.level === "query"
                  )),
            env: (A = a == null ? void 0 : a.parsed) != null ? A : {},
            flags: [],
            getQueryEngineWasmModule: e.getQueryEngineWasmModule,
            clientVersion: e.clientVersion,
            engineVersion: e.engineVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: e.activeProvider,
            inlineSchema: e.inlineSchema,
            overrideDatasources: Du(_, e.datasourceNames),
            inlineDatasources: e.inlineDatasources,
            inlineSchemaHash: e.inlineSchemaHash,
            tracingHelper: this._tracingHelper,
            logEmitter: i,
            isBundled: e.isBundled,
            adapter: o,
          }),
          At("clientVersion", e.clientVersion),
          (this._engine = Zu(e, this._engineConfig)),
          (this._requestHandler = new To(this, i)),
          _.log)
        )
          for (let O of _.log) {
            let k =
              typeof O == "string" ? O : O.emit === "stdout" ? O.level : null;
            k &&
              this.$on(k, (K) => {
                var Q;
                nr.log(
                  `${(Q = nr.tags[k]) != null ? Q : ""}`,
                  K.message || K.query
                );
              });
          }
        this._metrics = new Sr(this._engine);
      } catch (_) {
        throw ((_.clientVersion = this._clientVersion), _);
      }
      return (this._appliedParent = Ur(this));
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    $use(n) {
      this._middlewares.use(n);
    }
    $on(n, o) {
      n === "beforeExit"
        ? this._engine.onBeforeExit(o)
        : n && this._engineConfig.logEmitter.on(n, o);
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      } finally {
        sa();
      }
    }
    $executeRawInternal(n, o, i, s) {
      var l;
      let a = this._activeProvider,
        u = (l = this._engineConfig.adapter) == null ? void 0 : l.provider;
      return this._request({
        action: "executeRaw",
        args: i,
        transaction: n,
        clientMethod: o,
        argsMapper: Ji({
          clientMethod: o,
          activeProvider: a,
          driverAdapterProvider: u,
        }),
        callsite: vt(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $executeRaw(n, ...o) {
      return this._createPrismaPromise((i) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = jl(n, o);
          return (
            Qi(
              this._activeProvider,
              s.text,
              s.values,
              Array.isArray(n)
                ? "prisma.$executeRaw`<SQL>`"
                : "prisma.$executeRaw(sql`<SQL>`)"
            ),
            this.$executeRawInternal(i, "$executeRaw", s, a)
          );
        }
        throw new Se(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
          { clientVersion: this._clientVersion }
        );
      });
    }
    $executeRawUnsafe(n, ...o) {
      return this._createPrismaPromise(
        (i) => (
          Qi(
            this._activeProvider,
            n,
            o,
            "prisma.$executeRawUnsafe(<SQL>, [...values])"
          ),
          this.$executeRawInternal(i, "$executeRawUnsafe", [n, ...o])
        )
      );
    }
    $runCommandRaw(n) {
      if (e.activeProvider !== "mongodb")
        throw new Se(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion }
        );
      return this._createPrismaPromise((o) =>
        this._request({
          args: n,
          clientMethod: "$runCommandRaw",
          dataPath: [],
          action: "runCommandRaw",
          argsMapper: fl,
          callsite: vt(this._errorFormat),
          transaction: o,
        })
      );
    }
    async $queryRawInternal(n, o, i, s) {
      var l;
      let a = this._activeProvider,
        u = (l = this._engineConfig.adapter) == null ? void 0 : l.provider;
      return this._request({
        action: "queryRaw",
        args: i,
        transaction: n,
        clientMethod: o,
        argsMapper: Ji({
          clientMethod: o,
          activeProvider: a,
          driverAdapterProvider: u,
        }),
        callsite: vt(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      }).then(Ol);
    }
    $queryRaw(n, ...o) {
      return this._createPrismaPromise((i) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(i, "$queryRaw", ...jl(n, o));
        throw new Se(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
          { clientVersion: this._clientVersion }
        );
      });
    }
    $queryRawUnsafe(n, ...o) {
      return this._createPrismaPromise((i) =>
        this.$queryRawInternal(i, "$queryRawUnsafe", [n, ...o])
      );
    }
    _transactionWithArray({ promises: n, options: o }) {
      let i = Ty.nextId(),
        s = vl(n.length),
        a = n.map((u, l) => {
          var h, A;
          if ((u == null ? void 0 : u[Symbol.toStringTag]) !== "PrismaPromise")
            throw new Error(
              "All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function."
            );
          let c = o == null ? void 0 : o.isolationLevel,
            y = { kind: "batch", id: i, index: l, isolationLevel: c, lock: s };
          return (A =
            (h = u.requestTransaction) == null ? void 0 : h.call(u, y)) != null
            ? A
            : u;
        });
      return Bl(a);
    }
    async _transactionWithCallback({ callback: n, options: o }) {
      let i = { traceparent: this._tracingHelper.getTraceParent() },
        s = await this._engine.transaction("start", i, o),
        a;
      try {
        let u = { kind: "itx", ...s };
        (a = await n(this._createItxClient(u))),
          await this._engine.transaction("commit", i, s);
      } catch (u) {
        throw (
          (await this._engine.transaction("rollback", i, s).catch(() => {}), u)
        );
      }
      return a;
    }
    _createItxClient(n) {
      return Ur(
        ze(eo(this), [
          Me("_appliedParent", () => this._appliedParent._createItxClient(n)),
          Me("_createPrismaPromise", () => Gi(n)),
          Me(vy, () => n.id),
          Nr(Ra),
        ])
      );
    }
    $transaction(n, o) {
      let i;
      typeof n == "function"
        ? (i = () => this._transactionWithCallback({ callback: n, options: o }))
        : (i = () => this._transactionWithArray({ promises: n, options: o }));
      let s = { name: "transaction", attributes: { method: "$transaction" } };
      return this._tracingHelper.runInChildSpan(s, i);
    }
    _request(n) {
      var l;
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let o = (l = n.middlewareArgsMapper) != null ? l : Py,
        i = {
          args: o.requestArgsToMiddlewareArgs(n.args),
          dataPath: n.dataPath,
          runInTransaction: !!n.transaction,
          action: n.action,
          model: n.model,
        },
        s = {
          middleware: {
            name: "middleware",
            middleware: !0,
            attributes: { method: "$use" },
            active: !1,
          },
          operation: {
            name: "operation",
            attributes: {
              method: i.action,
              model: i.model,
              name: i.model ? `${i.model}.${i.action}` : i.action,
            },
          },
        },
        a = -1,
        u = async (c) => {
          let y = this._middlewares.get(++a);
          if (y)
            return this._tracingHelper.runInChildSpan(s.middleware, (I) =>
              y(c, (F) => (I == null || I.end(), u(F)))
            );
          let { runInTransaction: h, args: A, ..._ } = c,
            T = { ...n, ..._ };
          A && (T.args = o.middlewareArgsToRequestArgs(A)),
            n.transaction !== void 0 && h === !1 && delete T.transaction;
          let S = await Au(this, T);
          return T.model
            ? Eu({
                result: S,
                modelName: T.model,
                args: T.args,
                extensions: this._extensions,
                runtimeDataModel: this._runtimeDataModel,
              })
            : S;
        };
      return this._tracingHelper.runInChildSpan(s.operation, () => u(i));
    }
    async _executeRequest({
      args: n,
      clientMethod: o,
      dataPath: i,
      callsite: s,
      action: a,
      model: u,
      argsMapper: l,
      transaction: c,
      unpacker: y,
      otelParentCtx: h,
      customDataProxyFetch: A,
    }) {
      try {
        n = l ? l(n) : n;
        let _ = { name: "serialize" },
          T = this._tracingHelper.runInChildSpan(_, () =>
            ll({
              modelName: u,
              runtimeDataModel: this._runtimeDataModel,
              action: a,
              args: n,
              clientMethod: o,
              callsite: s,
              extensions: this._extensions,
              errorFormat: this._errorFormat,
              clientVersion: this._clientVersion,
            })
          );
        return (
          Ee.enabled("prisma:client") &&
            (At("Prisma Client call:"),
            At(`prisma.${o}(${tu(n)})`),
            At("Generated request:"),
            At(
              JSON.stringify(T, null, 2) +
                `
`
            )),
          (c == null ? void 0 : c.kind) === "batch" && (await c.lock),
          this._requestHandler.request({
            protocolQuery: T,
            modelName: u,
            action: a,
            clientMethod: o,
            dataPath: i,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: c,
            unpacker: y,
            otelParentCtx: h,
            otelChildCtx: this._tracingHelper.getActiveContext(),
            customDataProxyFetch: A,
          })
        );
      } catch (_) {
        throw ((_.clientVersion = this._clientVersion), _);
      }
    }
    get $metrics() {
      if (!this._hasPreviewFlag("metrics"))
        throw new Se(
          "`metrics` preview feature must be enabled in order to access metrics API",
          { clientVersion: this._clientVersion }
        );
      return this._metrics;
    }
    _hasPreviewFlag(n) {
      var o;
      return !!(
        (o = this._engineConfig.previewFeatures) != null && o.includes(n)
      );
    }
  }
  return t;
}
function jl(e, t) {
  return _y(e) ? [new Le(e, t), bl] : [e, wl];
}
function _y(e) {
  return Array.isArray(e) && Array.isArray(e.raw);
}
g();
p();
f();
d();
m();
var Cy = new Set([
  "toJSON",
  "$$typeof",
  "asymmetricMatch",
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function Sy(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r];
      if (!Cy.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
    },
  });
}
g();
p();
f();
d();
m();
var export_warnEnvConflicts = void 0;
export {
  qe as DMMF,
  Do as DMMFClass,
  oa as Debug,
  it as Decimal,
  Ts as Extensions,
  Sr as MetricsClient,
  ht as NotFoundError,
  nt as ObjectEnumValue,
  te as PrismaClientInitializationError,
  he as PrismaClientKnownRequestError,
  $e as PrismaClientRustPanicError,
  be as PrismaClientUnknownRequestError,
  Se as PrismaClientValidationError,
  _s as Public,
  Le as Sql,
  Os as Types,
  Bp as defineDmmfProperty,
  Ci as detectRuntime,
  Kp as empty,
  Ay as getPrismaClient,
  Ra as itxClientDenyList,
  Vp as join,
  Sy as makeStrictEnum,
  vP as objectEnumNames,
  li as objectEnumValues,
  Ia as raw,
  ka as sqltag,
  export_warnEnvConflicts as warnEnvConflicts,
  Fn as warnOnce,
};
//# sourceMappingURL=edge-esm.js.map
