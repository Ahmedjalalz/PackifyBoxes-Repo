import { I as notFound, k as defineHandlerCallback, J as parseRedirect, G as mergeHeaders, A as isRedirect, M as resolveManifestAssetLink, N as resolveManifestCssLink, O as rootRouteId, q as getNormalizedURL, r as getOrigin, H as normalizeSsrResponse, c as attachRouterServerSsrUtils, g as createSerializationAdapter, f as createRawStreamRPCPlugin, w as invariant, z as isNotFound, C as isResolvedRedirect, L as replaceSsrResponse, n as executeRewriteInput, P as stripSsrResponseBody, j as defaultSerovalPlugins, F as makeSerovalPlugin, s as getScriptPreloadAttrs, u as getStylesheetHref, E as isSsrResponse } from "../_libs/tanstack__router-core.mjs";
import { i as iu, P as Pu, s as su } from "../_libs/seroval.mjs";
import { c as createMemoryHistory } from "../_libs/tanstack__history.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as createRootRouteWithContext, H as HeadContent, S as Scripts, e as useRouterState, O as Outlet, c as createFileRoute, l as lazyRouteComponent, d as useRouter, L as Link, r as renderRouterToStream, u as useNavigate, b as createRouter, R as RouterProvider } from "../_libs/tanstack__react-router.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider, u as useQuery, a as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { b as useForm, u as useFieldArray } from "../_libs/react-hook-form.mjs";
import { u } from "../_libs/hookform__resolvers.mjs";
import { T as Trigger, I as Icon, d as ScrollUpButton, S as ScrollDownButton, P as Portal, C as Content2, f as Viewport, L as Label$1, a as Item, b as ItemIndicator, c as ItemText, e as Separator, R as Root2, V as Value } from "../_libs/radix-ui__react-select.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { I as Item$1, H as Header, T as Trigger2, C as Content2$1, R as Root2$1 } from "../_libs/radix-ui__react-accordion.mjs";
import { R as Root$1, I as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { R as Root$2, T as Thumb } from "../_libs/radix-ui__react-switch.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { O as Overlay, P as Portal$1, a as Content, C as Close, T as Title, D as Description, R as Root$3 } from "../_libs/radix-ui__react-dialog.mjs";
import { R as Root$4 } from "../_libs/radix-ui__react-aspect-ratio.mjs";
import { AsyncLocalStorage } from "node:async_hooks";
import { H as H3Event, t as toResponse } from "../_libs/h3-v2.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as ChevronDown, e as ChevronUp, C as Check, X, m as Menu, P as Phone, M as Mail, l as MapPin, g as Clock, n as MessageSquareQuote, q as Shield, b as Award, H as Heart, R as Recycle, s as Sparkles, a as ArrowRight, t as Star, r as ShieldCheck, v as Truck, L as Layers, B as Boxes, h as Leaf, p as Printer, Q as Quote, k as LogOut, S as Search, u as Trash2, T as Tag, A as ArrowLeft, i as LoaderCircle, j as Lock, f as CircleCheck, F as Funnel, d as ChevronRight, U as Upload, I as ImagePlus, o as Plus } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { o as objectType, s as stringType, a as arrayType, b as booleanType, l as literalType, n as numberType, c as coerce } from "../_libs/zod.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
let lastCapturedError;
const TTL_MS = 5e3;
function record(error) {
  lastCapturedError = { error, at: Date.now() };
}
if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => record(event.error ?? event));
  globalThis.addEventListener(
    "unhandledrejection",
    (event) => record(event.reason)
  );
}
if (typeof process !== "undefined" && typeof process.on === "function") {
  process.on("uncaughtException", (error) => record(error));
  process.on("unhandledRejection", (reason) => record(reason));
}
const originalConsoleError = console.error;
console.error = function(...args) {
  const errArg = args.find((arg) => arg instanceof Error);
  if (errArg) {
    record(errArg);
  } else if (args.length > 0) {
    const message = args.map((arg) => typeof arg === "object" && arg !== null ? JSON.stringify(arg) : String(arg)).join(" ");
    if (!message.includes("h3 swallowed SSR error")) {
      record(new Error(message));
    }
  }
  originalConsoleError.apply(console, args);
};
function consumeLastCapturedError() {
  if (!lastCapturedError) return void 0;
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    lastCapturedError = void 0;
    return void 0;
  }
  const { error } = lastCapturedError;
  lastCapturedError = void 0;
  return error;
}
function renderErrorPage(error) {
  let errorTitle = "This page didn't load";
  let errorMessage = "Something went wrong on our end. You can try refreshing or head back home.";
  let errorDetails = "";
  if (error) {
    if (error instanceof Error) {
      errorTitle = `Error: ${error.message}`;
      errorMessage = error.message;
      errorDetails = error.stack || "";
    } else {
      errorMessage = String(error);
    }
  }
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 32rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; word-break: break-word; }
      p { color: #4b5563; margin: 0 0 1.5rem; word-break: break-word; }
      .details { text-align: left; background: #f3f4f6; padding: 1rem; border-radius: 0.375rem; overflow-x: auto; font-family: monospace; font-size: 0.875rem; white-space: pre-wrap; margin-bottom: 1.5rem; color: #374151; max-height: 20rem; border: 1px solid #e5e7eb; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>${errorTitle}</h1>
      <p>${errorMessage}</p>
      ${errorDetails ? `<pre class="details">${errorDetails}</pre>` : ""}
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
let serverEntryPromise;
async function getServerEntry() {
  if (!serverEntryPromise) {
    serverEntryPromise = Promise.resolve().then(() => server).then(
      (m) => m.default ?? m
    );
  }
  return serverEntryPromise;
}
function brandedErrorResponse(error) {
  return new Response(renderErrorPage(error), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" }
  });
}
function isCatastrophicSsrErrorBody(body, responseStatus) {
  let payload;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }
  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }
  const fields = payload;
  const expectedKeys = /* @__PURE__ */ new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }
  return fields.unhandled === true && fields.message === "HTTPError" && (fields.status === void 0 || fields.status === responseStatus);
}
async function normalizeCatastrophicSsrResponse(response) {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;
  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }
  const err = consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`);
  console.error(err);
  return brandedErrorResponse(err);
}
const server$1 = {
  async fetch(request, env, ctx) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse(error);
    }
  }
};
function StartServer(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider, { router: props.router });
}
var defaultStreamHandler = defineHandlerCallback(({ request, router: router2, responseHeaders }) => renderRouterToStream({
  request,
  router: router2,
  responseHeaders,
  children: /* @__PURE__ */ jsxRuntimeExports.jsx(StartServer, { router: router2 })
}));
var GLOBAL_EVENT_STORAGE_KEY = /* @__PURE__ */ Symbol.for("tanstack-start:event-storage");
var globalObj$1 = globalThis;
if (!globalObj$1[GLOBAL_EVENT_STORAGE_KEY]) globalObj$1[GLOBAL_EVENT_STORAGE_KEY] = new AsyncLocalStorage();
var eventStorage = globalObj$1[GLOBAL_EVENT_STORAGE_KEY];
function isPromiseLike(value) {
  return typeof value.then === "function";
}
function getSetCookieValues(headers) {
  const headersWithSetCookie = headers;
  if (typeof headersWithSetCookie.getSetCookie === "function") return headersWithSetCookie.getSetCookie();
  const value = headers.get("set-cookie");
  return value ? [value] : [];
}
function mergeEventResponseHeaders(response, event) {
  if (response.ok) return;
  const eventSetCookies = getSetCookieValues(event.res.headers);
  if (eventSetCookies.length === 0) return;
  const responseSetCookies = getSetCookieValues(response.headers);
  response.headers.delete("set-cookie");
  for (const cookie of responseSetCookies) response.headers.append("set-cookie", cookie);
  for (const cookie of eventSetCookies) response.headers.append("set-cookie", cookie);
}
function attachResponseHeaders(value, event) {
  if (isPromiseLike(value)) return value.then((resolved) => {
    if (resolved instanceof Response) mergeEventResponseHeaders(resolved, event);
    return resolved;
  });
  if (value instanceof Response) mergeEventResponseHeaders(value, event);
  return value;
}
function requestHandler(handler) {
  return (request, requestOpts) => {
    let h3Event;
    try {
      h3Event = new H3Event(request);
    } catch (error) {
      if (error instanceof URIError) return new Response(null, {
        status: 400,
        statusText: "Bad Request"
      });
      throw error;
    }
    return toResponse(attachResponseHeaders(eventStorage.run({ h3Event }, () => handler(request, requestOpts)), h3Event), h3Event);
  };
}
function getH3Event() {
  const event = eventStorage.getStore();
  if (!event) throw new Error(`No StartEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
  return event.h3Event;
}
function getRequest() {
  return getH3Event().req;
}
function getResponse() {
  return getH3Event().res;
}
var HEADERS = { TSS_SHELL: "X-TSS_SHELL" };
async function getStartManifest(matchedRoutes) {
  const { tsrStartManifest: tsrStartManifest2 } = await Promise.resolve().then(() => _tanstackStartManifest_v);
  const startManifest = tsrStartManifest2();
  let routes = startManifest.routes;
  routes[rootRouteId];
  const manifestRoutes = {};
  for (const k in routes) {
    const v = routes[k];
    const result = {};
    if (v.preloads && v.preloads.length > 0) result.preloads = v.preloads;
    if (v.scripts && v.scripts.length > 0) result.scripts = v.scripts;
    if (v.css?.length) result.css = v.css;
    if (result.preloads || result.scripts || result.css) manifestRoutes[k] = result;
  }
  return {
    ...startManifest.scriptFormat ? { scriptFormat: startManifest.scriptFormat } : {},
    ...startManifest.inlineCss ? { inlineCss: startManifest.inlineCss } : {},
    routes: manifestRoutes
  };
}
const manifest = {
  "01085035bc267745d0d1c718401d278a9a2f19d77fe3a4c4de19136a22d93e30": {
    functionName: "getCmsProductById_createServerFn_handler",
    importer: () => Promise.resolve().then(() => product_cms)
  },
  "2b29d856f98914b05ab37002456c56baf2426d0bce267c02156dbba97e51cefd": {
    functionName: "submitContact_createServerFn_handler",
    importer: () => Promise.resolve().then(() => quotes_functions)
  },
  "3202aff87951064a632a7aeaaf251f1050ace87131d03006b866ee2a3e75bc22": {
    functionName: "listPublicProducts_createServerFn_handler",
    importer: () => Promise.resolve().then(() => product_cms)
  },
  "3e67d37a22277858f850aeb98f8ae4daa9cc45b9db544f22e0ae2c38bf87c320": {
    functionName: "saveCmsProduct_createServerFn_handler",
    importer: () => Promise.resolve().then(() => product_cms)
  },
  "493fd10f39da2f1597657e562c8b1b87933e1ad9b06279ae8cd5862bd7f4e43d": {
    functionName: "submitQuote_createServerFn_handler",
    importer: () => Promise.resolve().then(() => quotes_functions)
  },
  "681d6d9dbf235a6b09772c56ee074143f1c415de364158110332779de5c1221b": {
    functionName: "createCmsCategory_createServerFn_handler",
    importer: () => Promise.resolve().then(() => product_cms)
  },
  "7edd74d38c9bf72238aea5c548f501d1d63109682c9622c15d531e278d39dc8f": {
    functionName: "uploadCmsImageBase64_createServerFn_handler",
    importer: () => Promise.resolve().then(() => product_cms)
  },
  "9bc619d8c670a1c0a19e4778c7a46fb3a960afc9f22121da5e21bf58c1944d75": {
    functionName: "deleteCmsProduct_createServerFn_handler",
    importer: () => Promise.resolve().then(() => product_cms)
  },
  "d2666bcd10312dd4be304290b407515425b19e40dd52318931c6a5e7e3b1c0b9": {
    functionName: "listCmsProducts_createServerFn_handler",
    importer: () => Promise.resolve().then(() => product_cms)
  },
  "ecc8fbdf6efb93100cabdf2af1cc080756f1323e7633378c286380fa22bb0283": {
    functionName: "getPublicProductBySlug_createServerFn_handler",
    importer: () => Promise.resolve().then(() => product_cms)
  },
  "f11f87ee310200aae6ffce0e3163371d8184c18dd2b9cc6d97f6c98a233b81be": {
    functionName: "getCmsProductBySlug_createServerFn_handler",
    importer: () => Promise.resolve().then(() => product_cms)
  },
  "f702a9cb2fb5204041cab250808f6606860d848d4f58cd87ae78cef278102673": {
    functionName: "listCmsCategories_createServerFn_handler",
    importer: () => Promise.resolve().then(() => product_cms)
  }
};
async function getServerFnById(id, access) {
  const serverFnInfo = manifest[id];
  if (!serverFnInfo) {
    throw new Error("Server function info not found for " + id);
  }
  const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
  if (!fnModule) {
    throw new Error("Server function module not resolved for " + id);
  }
  const action = fnModule[serverFnInfo.functionName];
  if (!action) {
    throw new Error("Server function module export not resolved for serverFn ID: " + id);
  }
  return action;
}
var TSS_FORMDATA_CONTEXT = "__TSS_CONTEXT";
var TSS_SERVER_FUNCTION = /* @__PURE__ */ Symbol.for("TSS_SERVER_FUNCTION");
var TSS_SERVER_FUNCTION_FACTORY = /* @__PURE__ */ Symbol.for("TSS_SERVER_FUNCTION_FACTORY");
var X_TSS_SERIALIZED = "x-tss-serialized";
var X_TSS_RAW_RESPONSE = "x-tss-raw";
var TSS_CONTENT_TYPE_FRAMED = "application/x-tss-framed";
var FrameType = {
  /** Seroval JSON chunk (NDJSON line) */
  JSON: 0,
  /** Raw stream data chunk */
  CHUNK: 1,
  /** Raw stream end (EOF) */
  END: 2,
  /** Raw stream error */
  ERROR: 3
};
var FRAME_HEADER_SIZE = 9;
var TSS_CONTENT_TYPE_FRAMED_VERSIONED = `${TSS_CONTENT_TYPE_FRAMED}; v=1`;
function isSafeKey(key) {
  return key !== "__proto__" && key !== "constructor" && key !== "prototype";
}
function safeObjectMerge(target, source) {
  const result = /* @__PURE__ */ Object.create(null);
  if (target) {
    for (const key of Object.keys(target)) if (isSafeKey(key)) result[key] = target[key];
  }
  if (source && typeof source === "object") {
    for (const key of Object.keys(source)) if (isSafeKey(key)) result[key] = source[key];
  }
  return result;
}
function createNullProtoObject(source) {
  if (!source) return /* @__PURE__ */ Object.create(null);
  const obj = /* @__PURE__ */ Object.create(null);
  for (const key of Object.keys(source)) if (isSafeKey(key)) obj[key] = source[key];
  return obj;
}
var GLOBAL_STORAGE_KEY = /* @__PURE__ */ Symbol.for("tanstack-start:start-storage-context");
var globalObj = globalThis;
if (!globalObj[GLOBAL_STORAGE_KEY]) globalObj[GLOBAL_STORAGE_KEY] = new AsyncLocalStorage();
var startStorage = globalObj[GLOBAL_STORAGE_KEY];
async function runWithStartContext(context, fn) {
  return startStorage.run(context, fn);
}
function getStartContext(opts) {
  const context = startStorage.getStore();
  if (!context && opts?.throwIfNotFound !== false) throw new Error(`No Start context found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
  return context;
}
var getStartOptions = () => getStartContext().startOptions;
var getStartContextServerOnly = getStartContext;
var createServerFn = (options, __opts) => {
  const resolvedOptions = __opts || options || {};
  if (typeof resolvedOptions.method === "undefined") resolvedOptions.method = "GET";
  const res = {
    options: resolvedOptions,
    middleware: (middleware) => {
      const newMiddleware = [...resolvedOptions.middleware || []];
      middleware.map((m) => {
        if (TSS_SERVER_FUNCTION_FACTORY in m) {
          if (m.options.middleware) newMiddleware.push(...m.options.middleware);
        } else newMiddleware.push(m);
      });
      const res2 = createServerFn(void 0, {
        ...resolvedOptions,
        middleware: newMiddleware
      });
      res2[TSS_SERVER_FUNCTION_FACTORY] = true;
      return res2;
    },
    inputValidator: (inputValidator) => {
      return createServerFn(void 0, {
        ...resolvedOptions,
        inputValidator
      });
    },
    handler: (...args) => {
      const [extractedFn, serverFn] = args;
      const newOptions = {
        ...resolvedOptions,
        extractedFn,
        serverFn
      };
      const resolvedMiddleware = [...newOptions.middleware || [], serverFnBaseToMiddleware(newOptions)];
      extractedFn.method = resolvedOptions.method;
      return Object.assign(async (opts) => {
        const result = await executeMiddleware$1(resolvedMiddleware, "client", {
          ...extractedFn,
          ...newOptions,
          data: opts?.data,
          headers: opts?.headers,
          signal: opts?.signal,
          fetch: opts?.fetch,
          context: createNullProtoObject()
        });
        const redirect = parseRedirect(result.error);
        if (redirect) throw redirect;
        if (result.error) throw result.error;
        return result.result;
      }, {
        ...extractedFn,
        method: resolvedOptions.method,
        __executeServer: async (opts) => {
          const startContext = getStartContextServerOnly();
          const serverContextAfterGlobalMiddlewares = startContext.contextAfterGlobalMiddlewares;
          return await executeMiddleware$1(resolvedMiddleware, "server", {
            ...extractedFn,
            ...opts,
            serverFnMeta: extractedFn.serverFnMeta,
            context: safeObjectMerge(opts.context, serverContextAfterGlobalMiddlewares),
            request: startContext.request
          }).then((d) => ({
            result: d.result,
            error: d.error,
            context: d.sendContext
          }));
        }
      });
    }
  };
  const fun = (options2) => {
    return createServerFn(void 0, {
      ...resolvedOptions,
      ...options2
    });
  };
  return Object.assign(fun, res);
};
async function executeMiddleware$1(middlewares, env, opts) {
  let flattenedMiddlewares = flattenMiddlewares([...getStartOptions()?.functionMiddleware || [], ...middlewares]);
  if (env === "server") {
    const startContext = getStartContextServerOnly({ throwIfNotFound: false });
    if (startContext?.executedRequestMiddlewares) flattenedMiddlewares = flattenedMiddlewares.filter((m) => !startContext.executedRequestMiddlewares.has(m));
  }
  const callNextMiddleware = async (ctx) => {
    const nextMiddleware = flattenedMiddlewares.shift();
    if (!nextMiddleware) return ctx;
    try {
      if ("inputValidator" in nextMiddleware.options && nextMiddleware.options.inputValidator && env === "server") ctx.data = await execValidator(nextMiddleware.options.inputValidator, ctx.data);
      let middlewareFn = void 0;
      if (env === "client") {
        if ("client" in nextMiddleware.options) middlewareFn = nextMiddleware.options.client;
      } else if ("server" in nextMiddleware.options) middlewareFn = nextMiddleware.options.server;
      if (middlewareFn) {
        const userNext = async (userCtx = {}) => {
          const result2 = await callNextMiddleware({
            ...ctx,
            ...userCtx,
            context: safeObjectMerge(ctx.context, userCtx.context),
            sendContext: safeObjectMerge(ctx.sendContext, userCtx.sendContext),
            headers: mergeHeaders(ctx.headers, userCtx.headers),
            _callSiteFetch: ctx._callSiteFetch,
            fetch: ctx._callSiteFetch ?? userCtx.fetch ?? ctx.fetch,
            result: userCtx.result !== void 0 ? userCtx.result : userCtx instanceof Response ? userCtx : ctx.result,
            error: userCtx.error ?? ctx.error
          });
          if (result2.error) throw result2.error;
          return result2;
        };
        const result = await middlewareFn({
          ...ctx,
          next: userNext
        });
        if (isRedirect(result)) return {
          ...ctx,
          error: result
        };
        if (result instanceof Response) return {
          ...ctx,
          result
        };
        if (!result) throw new Error("User middleware returned undefined. You must call next() or return a result in your middlewares.");
        return result;
      }
      return callNextMiddleware(ctx);
    } catch (error) {
      return {
        ...ctx,
        error
      };
    }
  };
  return callNextMiddleware({
    ...opts,
    headers: opts.headers || {},
    sendContext: opts.sendContext || {},
    context: opts.context || createNullProtoObject(),
    _callSiteFetch: opts.fetch
  });
}
function flattenMiddlewares(middlewares, maxDepth = 100) {
  const seen = /* @__PURE__ */ new Set();
  const flattened = [];
  const recurse = (middleware, depth) => {
    if (depth > maxDepth) throw new Error(`Middleware nesting depth exceeded maximum of ${maxDepth}. Check for circular references.`);
    middleware.forEach((m) => {
      if (m.options.middleware) recurse(m.options.middleware, depth + 1);
      if (!seen.has(m)) {
        seen.add(m);
        flattened.push(m);
      }
    });
  };
  recurse(middlewares, 0);
  return flattened;
}
async function execValidator(validator, input) {
  if (validator == null) return {};
  if ("~standard" in validator) {
    const result = await validator["~standard"].validate(input);
    if (result.issues) throw new Error(JSON.stringify(result.issues, void 0, 2));
    return result.value;
  }
  if ("parse" in validator) return validator.parse(input);
  if (typeof validator === "function") return validator(input);
  throw new Error("Invalid validator type!");
}
function serverFnBaseToMiddleware(options) {
  return {
    "~types": void 0,
    options: {
      inputValidator: options.inputValidator,
      client: async ({ next, sendContext, fetch: fetch2, ...ctx }) => {
        const payload = {
          ...ctx,
          context: sendContext,
          fetch: fetch2
        };
        return next(await options.extractedFn?.(payload));
      },
      server: async ({ next, ...ctx }) => {
        const result = await options.serverFn?.(ctx);
        return next({
          ...ctx,
          result
        });
      }
    }
  };
}
var createMiddleware = (options, __opts) => {
  const resolvedOptions = {
    type: "request",
    ...__opts || options
  };
  return {
    options: resolvedOptions,
    middleware: (middleware) => {
      return createMiddleware({}, Object.assign(resolvedOptions, { middleware }));
    },
    inputValidator: (inputValidator) => {
      return createMiddleware({}, Object.assign(resolvedOptions, { inputValidator }));
    },
    client: (client) => {
      return createMiddleware({}, Object.assign(resolvedOptions, { client }));
    },
    server: (server2) => {
      return createMiddleware({}, Object.assign(resolvedOptions, { server: server2 }));
    }
  };
};
var innerCreateCsrfMiddleware = (opts = {}) => {
  const middleware = createMiddleware().server(async (ctx) => {
    const csrfCtx = ctx;
    if (opts.filter && !await opts.filter(csrfCtx)) return ctx.next();
    if (await isCsrfRequestAllowed(opts, csrfCtx)) return ctx.next();
    return getFailureResponse(opts, csrfCtx);
  });
  return middleware;
};
var createCsrfMiddleware = innerCreateCsrfMiddleware;
async function isCsrfRequestAllowed(opts, ctx) {
  const result = await getCsrfRequestValidationResult(opts, ctx);
  return result === true || result === void 0 && opts.allowRequestsWithoutOriginCheck === true;
}
async function getCsrfRequestValidationResult(opts, ctx) {
  const fetchSite = ctx.request.headers.get("Sec-Fetch-Site");
  if (fetchSite !== null) return matchValue(opts.secFetchSite ?? "same-origin", fetchSite, ctx);
  const origin = ctx.request.headers.get("Origin");
  if (origin !== null) {
    if (opts.origin) return matchValue(opts.origin, origin, ctx);
    return origin === new URL(ctx.request.url).origin;
  }
  const referer = ctx.request.headers.get("Referer");
  if (referer === null || opts.referer === false) return;
  if (typeof opts.referer === "function") return opts.referer(referer, ctx);
  if (opts.origin) {
    const refererOrigin = getOriginFromUrl(referer);
    return refererOrigin !== void 0 && matchValue(opts.origin, refererOrigin, ctx);
  }
  return isRefererSameOrigin(referer, new URL(ctx.request.url).origin);
}
async function matchValue(matcher, value, ctx) {
  if (typeof matcher === "function") return matcher(value, ctx);
  if (Array.isArray(matcher)) return matcher.includes(value);
  return value === matcher;
}
function getOriginFromUrl(url) {
  try {
    return new URL(url).origin;
  } catch {
    return;
  }
}
function isRefererSameOrigin(referer, requestOrigin) {
  if (referer === requestOrigin) return true;
  if (!referer.startsWith(requestOrigin)) return false;
  if (referer.length === requestOrigin.length) return true;
  const code = referer.charCodeAt(requestOrigin.length);
  return code === 47 || code === 63 || code === 35;
}
async function getFailureResponse(opts, ctx) {
  if (typeof opts.failureResponse === "function") return opts.failureResponse(ctx);
  return opts.failureResponse?.clone() ?? new Response("Forbidden", {
    status: 403
  });
}
function dedupeSerializationAdapters(deduped, serializationAdapters) {
  for (let i = 0, len = serializationAdapters.length; i < len; i++) {
    const current = serializationAdapters[i];
    if (!deduped.has(current)) {
      deduped.add(current);
      if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
    }
  }
}
var createStart = (getOptions) => {
  return {
    getOptions: async () => {
      const options = await getOptions();
      if (options.serializationAdapters) {
        const deduped = /* @__PURE__ */ new Set();
        dedupeSerializationAdapters(deduped, options.serializationAdapters);
        options.serializationAdapters = Array.from(deduped);
      }
      return options;
    },
    createMiddleware
  };
};
function getDefaultSerovalPlugins() {
  return [...getStartOptions()?.serializationAdapters?.map(makeSerovalPlugin) ?? [], ...defaultSerovalPlugins];
}
var textEncoder = new TextEncoder();
var EMPTY_PAYLOAD = new Uint8Array(0);
function encodeFrame(type, streamId, payload) {
  const frame = new Uint8Array(FRAME_HEADER_SIZE + payload.length);
  frame[0] = type;
  frame[1] = streamId >>> 24 & 255;
  frame[2] = streamId >>> 16 & 255;
  frame[3] = streamId >>> 8 & 255;
  frame[4] = streamId & 255;
  frame[5] = payload.length >>> 24 & 255;
  frame[6] = payload.length >>> 16 & 255;
  frame[7] = payload.length >>> 8 & 255;
  frame[8] = payload.length & 255;
  frame.set(payload, FRAME_HEADER_SIZE);
  return frame;
}
function encodeJSONFrame(json) {
  return encodeFrame(FrameType.JSON, 0, textEncoder.encode(json));
}
function encodeChunkFrame(streamId, chunk) {
  return encodeFrame(FrameType.CHUNK, streamId, chunk);
}
function encodeEndFrame(streamId) {
  return encodeFrame(FrameType.END, streamId, EMPTY_PAYLOAD);
}
function encodeErrorFrame(streamId, error) {
  const message = error instanceof Error ? error.message : String(error ?? "Unknown error");
  return encodeFrame(FrameType.ERROR, streamId, textEncoder.encode(message));
}
function createMultiplexedStream(jsonStream, rawStreams, lateStreamSource) {
  let controller;
  let cancelled = false;
  const readers = [];
  const enqueue = (frame) => {
    if (cancelled) return false;
    try {
      controller.enqueue(frame);
      return true;
    } catch {
      return false;
    }
  };
  const errorOutput = (error) => {
    if (cancelled) return;
    cancelled = true;
    try {
      controller.error(error);
    } catch {
    }
    for (const reader of readers) reader.cancel().catch(() => {
    });
  };
  async function pumpRawStream(streamId, stream) {
    const reader = stream.getReader();
    readers.push(reader);
    try {
      while (!cancelled) {
        const { done, value } = await reader.read();
        if (done) {
          enqueue(encodeEndFrame(streamId));
          return;
        }
        if (!enqueue(encodeChunkFrame(streamId, value))) return;
      }
    } catch (error) {
      enqueue(encodeErrorFrame(streamId, error));
    } finally {
      reader.releaseLock();
    }
  }
  async function pumpJSON() {
    const reader = jsonStream.getReader();
    readers.push(reader);
    try {
      while (!cancelled) {
        const { done, value } = await reader.read();
        if (done) return;
        if (!enqueue(encodeJSONFrame(value))) return;
      }
    } catch (error) {
      errorOutput(error);
      throw error;
    } finally {
      reader.releaseLock();
    }
  }
  async function pumpLateStreams() {
    if (!lateStreamSource) return [];
    const lateStreamPumps = [];
    const reader = lateStreamSource.getReader();
    readers.push(reader);
    try {
      while (!cancelled) {
        const { done, value } = await reader.read();
        if (done) break;
        lateStreamPumps.push(pumpRawStream(value.id, value.stream));
      }
    } finally {
      reader.releaseLock();
    }
    return lateStreamPumps;
  }
  return new ReadableStream({
    async start(ctrl) {
      controller = ctrl;
      const pumps = [pumpJSON()];
      for (const [streamId, stream] of rawStreams) pumps.push(pumpRawStream(streamId, stream));
      if (lateStreamSource) pumps.push(pumpLateStreams());
      try {
        const latePumps = (await Promise.all(pumps)).find(Array.isArray);
        if (latePumps && latePumps.length > 0) await Promise.all(latePumps);
        if (!cancelled) try {
          controller.close();
        } catch {
        }
      } catch {
      }
    },
    cancel() {
      cancelled = true;
      for (const reader of readers) reader.cancel().catch(() => {
      });
      readers.length = 0;
    }
  });
}
var serovalPlugins = void 0;
var FORM_DATA_CONTENT_TYPES = ["multipart/form-data", "application/x-www-form-urlencoded"];
var MAX_PAYLOAD_SIZE = 1e6;
var handleServerAction = async ({ request, context, serverFnId }) => {
  const methodUpper = request.method.toUpperCase();
  const url = new URL(request.url);
  const action = await getServerFnById(serverFnId);
  if (action.method && methodUpper !== action.method) return new Response(`expected ${action.method} method. Got ${methodUpper}`, {
    status: 405,
    headers: { Allow: action.method }
  });
  const isServerFn = request.headers.get("x-tsr-serverFn") === "true";
  if (!serovalPlugins) serovalPlugins = getDefaultSerovalPlugins();
  const contentType = request.headers.get("Content-Type");
  function parsePayload(payload) {
    return Pu(payload, { plugins: serovalPlugins });
  }
  return await (async () => {
    try {
      let serializeResult = function(res2) {
        let nonStreamingBody = void 0;
        const alsResponse = getResponse();
        if (res2 !== void 0) {
          const rawStreams = /* @__PURE__ */ new Map();
          let initialPhase = true;
          let lateStreamWriter;
          let lateStreamReadable = void 0;
          const pendingLateStreams = [];
          const plugins = [createRawStreamRPCPlugin((id, stream) => {
            if (initialPhase) {
              rawStreams.set(id, stream);
              return;
            }
            if (lateStreamWriter) {
              lateStreamWriter.write({
                id,
                stream
              }).catch(() => {
              });
              return;
            }
            pendingLateStreams.push({
              id,
              stream
            });
          }), ...serovalPlugins || []];
          let done = false;
          const callbacks = {
            onParse: (value) => {
              nonStreamingBody = value;
            },
            onDone: () => {
              done = true;
            },
            onError: (error) => {
              throw error;
            }
          };
          iu(res2, {
            refs: /* @__PURE__ */ new Map(),
            plugins,
            onParse(value) {
              callbacks.onParse(value);
            },
            onDone() {
              callbacks.onDone();
            },
            onError: (error) => {
              callbacks.onError(error);
            }
          });
          initialPhase = false;
          if (done && rawStreams.size === 0) return new Response(nonStreamingBody ? JSON.stringify(nonStreamingBody) : void 0, {
            status: alsResponse.status,
            statusText: alsResponse.statusText,
            headers: {
              "Content-Type": "application/json",
              [X_TSS_SERIALIZED]: "true"
            }
          });
          const { readable, writable } = new TransformStream();
          lateStreamReadable = readable;
          lateStreamWriter = writable.getWriter();
          for (const registration of pendingLateStreams) lateStreamWriter.write(registration).catch(() => {
          });
          pendingLateStreams.length = 0;
          const multiplexedStream = createMultiplexedStream(new ReadableStream({
            start(controller) {
              callbacks.onParse = (value) => {
                controller.enqueue(JSON.stringify(value) + "\n");
              };
              callbacks.onDone = () => {
                try {
                  controller.close();
                } catch {
                }
                lateStreamWriter?.close().catch(() => {
                }).finally(() => {
                  lateStreamWriter = void 0;
                });
              };
              callbacks.onError = (error) => {
                controller.error(error);
                lateStreamWriter?.abort(error).catch(() => {
                }).finally(() => {
                  lateStreamWriter = void 0;
                });
              };
              if (nonStreamingBody !== void 0) callbacks.onParse(nonStreamingBody);
              if (done) callbacks.onDone();
            },
            cancel() {
              lateStreamWriter?.abort().catch(() => {
              });
              lateStreamWriter = void 0;
            }
          }), rawStreams, lateStreamReadable);
          return new Response(multiplexedStream, {
            status: alsResponse.status,
            statusText: alsResponse.statusText,
            headers: {
              "Content-Type": TSS_CONTENT_TYPE_FRAMED_VERSIONED,
              [X_TSS_SERIALIZED]: "true"
            }
          });
        }
        return new Response(void 0, {
          status: alsResponse.status,
          statusText: alsResponse.statusText
        });
      };
      let res = await (async () => {
        if (FORM_DATA_CONTENT_TYPES.some((type) => contentType && contentType.includes(type))) {
          if (methodUpper === "GET") {
            if (false) ;
            invariant();
          }
          const formData = await request.formData();
          const serializedContext = formData.get(TSS_FORMDATA_CONTEXT);
          formData.delete(TSS_FORMDATA_CONTEXT);
          const params = {
            context,
            data: formData,
            method: methodUpper
          };
          if (typeof serializedContext === "string") try {
            const deserializedContext = Pu(JSON.parse(serializedContext), { plugins: serovalPlugins });
            if (typeof deserializedContext === "object" && deserializedContext) params.context = safeObjectMerge(deserializedContext, context);
          } catch (e) {
            if (false) ;
          }
          return await action(params);
        }
        if (methodUpper === "GET") {
          const payloadParam = url.searchParams.get("payload");
          if (payloadParam && payloadParam.length > MAX_PAYLOAD_SIZE) throw new Error("Payload too large");
          const payload2 = payloadParam ? parsePayload(JSON.parse(payloadParam)) : {};
          payload2.context = safeObjectMerge(payload2.context, context);
          payload2.method = methodUpper;
          return await action(payload2);
        }
        let jsonPayload;
        if (contentType?.includes("application/json")) jsonPayload = await request.json();
        const payload = jsonPayload ? parsePayload(jsonPayload) : {};
        payload.context = safeObjectMerge(payload.context, context);
        payload.method = methodUpper;
        return await action(payload);
      })();
      const unwrapped = res.result || res.error;
      if (isNotFound(res)) res = isNotFoundResponse(res);
      if (!isServerFn) return unwrapped;
      if (unwrapped instanceof Response) {
        if (isRedirect(unwrapped)) return unwrapped;
        unwrapped.headers.set(X_TSS_RAW_RESPONSE, "true");
        return unwrapped;
      }
      return serializeResult(res);
    } catch (error) {
      if (error instanceof Response) return error;
      if (isNotFound(error)) return isNotFoundResponse(error);
      console.info();
      console.info("Server Fn Error!");
      console.info();
      console.error(error);
      console.info();
      const serializedError = JSON.stringify(await Promise.resolve(su(error, {
        refs: /* @__PURE__ */ new Map(),
        plugins: serovalPlugins
      })));
      const response = getResponse();
      return new Response(serializedError, {
        status: response.status ?? 500,
        statusText: response.statusText,
        headers: {
          "Content-Type": "application/json",
          [X_TSS_SERIALIZED]: "true"
        }
      });
    }
  })();
};
function isNotFoundResponse(error) {
  const { headers, ...rest } = error;
  return new Response(JSON.stringify(rest), {
    status: 404,
    headers: {
      "Content-Type": "application/json",
      ...headers || {}
    }
  });
}
var LINK_PARAM_TOKEN_RE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
var PRELOAD_AS_VALUES = /* @__PURE__ */ new Set([
  "fetch",
  "font",
  "image",
  "script",
  "style",
  "track"
]);
function buildLinkParam(name, value) {
  if (value === void 0) return name;
  if (LINK_PARAM_TOKEN_RE.test(value)) return `${name}=${value}`;
  return `${name}=${JSON.stringify(value)}`;
}
function serializeEarlyHint(hint) {
  const parts = [`<${hint.href}>`, buildLinkParam("rel", hint.rel)];
  if (hint.as) parts.push(buildLinkParam("as", hint.as));
  if (hint.crossOrigin !== void 0) parts.push(buildLinkParam("crossorigin", hint.crossOrigin || void 0));
  if (hint.type) parts.push(buildLinkParam("type", hint.type));
  if (hint.integrity) parts.push(buildLinkParam("integrity", hint.integrity));
  if (hint.referrerPolicy) parts.push(buildLinkParam("referrerpolicy", hint.referrerPolicy));
  if (hint.fetchPriority) parts.push(buildLinkParam("fetchpriority", hint.fetchPriority));
  return parts.join("; ");
}
function getStringAttr(attrs, name, fallbackName) {
  const value = attrs?.[name] ?? (fallbackName ? attrs?.[fallbackName] : void 0);
  return typeof value === "string" ? value : void 0;
}
function getPreloadAs(attrs) {
  const as = getStringAttr(attrs, "as");
  return as && PRELOAD_AS_VALUES.has(as) ? as : void 0;
}
function addEarlyHintFetchAttrs(hint, attrs) {
  const crossOrigin = getStringAttr(attrs, "crossOrigin", "crossorigin");
  const type = getStringAttr(attrs, "type");
  const integrity = getStringAttr(attrs, "integrity");
  const referrerPolicy = getStringAttr(attrs, "referrerPolicy", "referrerpolicy");
  const fetchPriority = getStringAttr(attrs, "fetchPriority", "fetchpriority");
  if (crossOrigin !== void 0) hint.crossOrigin = crossOrigin;
  if (type) hint.type = type;
  if (integrity) hint.integrity = integrity;
  if (referrerPolicy) hint.referrerPolicy = referrerPolicy;
  if (fetchPriority) hint.fetchPriority = fetchPriority;
}
function linkAttrsToEarlyHint(attrs) {
  const href = getStringAttr(attrs, "href");
  const rel = getStringAttr(attrs, "rel");
  if (!href || !rel) return void 0;
  const relTokens = rel.split(/\s+/);
  let hintRel;
  let hintAs;
  if (relTokens.includes("modulepreload")) {
    hintRel = "modulepreload";
    hintAs = "script";
  } else if (relTokens.includes("stylesheet")) {
    hintRel = "preload";
    hintAs = "style";
  } else if (relTokens.includes("preload")) {
    hintAs = getPreloadAs(attrs);
    if (!hintAs) return void 0;
    hintRel = "preload";
  } else if (relTokens.includes("preconnect")) {
    hintRel = "preconnect";
    hintAs = void 0;
  } else if (relTokens.includes("dns-prefetch")) {
    hintRel = "dns-prefetch";
    hintAs = void 0;
  }
  if (!hintRel) return void 0;
  const hint = {
    href,
    rel: hintRel
  };
  if (hintAs) hint.as = hintAs;
  addEarlyHintFetchAttrs(hint, attrs);
  return hint;
}
function collectStaticHintsFromManifest(manifest2, matchedRoutes) {
  const hints = [];
  for (const route of matchedRoutes) {
    const routeManifest = manifest2.routes[route.id];
    if (!routeManifest) continue;
    for (const link of routeManifest.preloads ?? []) {
      const attrs = getScriptPreloadAttrs(manifest2, link);
      const hint = {
        href: attrs.href,
        rel: attrs.rel,
        as: "script"
      };
      if (attrs.crossOrigin !== void 0) hint.crossOrigin = attrs.crossOrigin;
      hints.push(hint);
    }
    for (const link of routeManifest.css ?? []) {
      const stylesheetHref = getStylesheetHref(link);
      if (manifest2.inlineCss?.styles[stylesheetHref] !== void 0) continue;
      const resolvedLink = resolveManifestCssLink(link);
      const hint = {
        href: stylesheetHref,
        rel: "preload",
        as: "style"
      };
      if (resolvedLink.crossOrigin !== void 0) hint.crossOrigin = resolvedLink.crossOrigin;
      hints.push(hint);
    }
  }
  return hints;
}
function collectDynamicHintsFromMatches(matches) {
  const hints = [];
  for (const match of matches) {
    const links2 = match.links;
    if (!Array.isArray(links2)) continue;
    for (const link of links2) {
      const hint = linkAttrsToEarlyHint(link);
      if (hint) hints.push(hint);
    }
  }
  return hints;
}
function createEarlyHintsEvent(opts) {
  const nextHints = [];
  const nextLinks = [];
  for (const hint of opts.hints) {
    const link = serializeEarlyHint(hint);
    if (opts.sentLinks.has(link)) continue;
    opts.sentLinks.add(link);
    opts.sentHints.push(hint);
    nextHints.push(hint);
    nextLinks.push(link);
  }
  if (!nextHints.length && opts.phase !== "dynamic") return void 0;
  return {
    phase: opts.phase,
    hints: nextHints,
    links: nextLinks,
    allHints: opts.sentHints.slice(),
    allLinks: Array.from(opts.sentLinks)
  };
}
function createResponseLinkHeaderEntries(opts) {
  for (const hint of opts.hints) {
    const link = serializeEarlyHint(hint);
    if (opts.sentLinks.has(link)) continue;
    opts.sentLinks.add(link);
    opts.entries.push({
      phase: opts.phase,
      hint,
      link
    });
  }
}
function getResponseLinkHeaderEntries(opts) {
  if (!opts.filter) return opts.entries.map((entry) => entry.link);
  try {
    const links2 = [];
    for (const entry of opts.entries) if (opts.filter(entry)) links2.push(entry.link);
    return links2;
  } catch (err) {
    console.error("Error filtering response Link headers:", err);
    return [];
  }
}
function notifyEarlyHints(phase, event, onEarlyHints) {
  try {
    const result = onEarlyHints(event);
    if (result) Promise.resolve(result).catch((err) => {
      console.error(`Error sending ${phase} early hints:`, err);
    });
  } catch (err) {
    console.error(`Error sending ${phase} early hints:`, err);
  }
}
function getResponseLinkHeaderFilter(responseLinkHeader) {
  if (typeof responseLinkHeader !== "object") return;
  return responseLinkHeader.filter;
}
function appendResponseLinkHeaders(opts) {
  for (const link of getResponseLinkHeaderEntries(opts)) opts.responseHeaders.append("Link", link);
}
function collectResponseLinkHeaderEntries(opts) {
  for (let index2 = 0; index2 < opts.event.hints.length; index2++) opts.entries.push({
    phase: opts.phase,
    hint: opts.event.hints[index2],
    link: opts.event.links[index2]
  });
}
function collectEarlyHintsPhase(opts) {
  const event = opts.onEarlyHints ? createEarlyHintsEvent({
    phase: opts.phase,
    hints: opts.hints,
    sentLinks: opts.sentLinks,
    sentHints: opts.sentHints
  }) : void 0;
  if (event) notifyEarlyHints(opts.phase, event, opts.onEarlyHints);
  if (!opts.responseLinkHeaderEntries) return;
  if (event) {
    collectResponseLinkHeaderEntries({
      phase: opts.phase,
      event,
      entries: opts.responseLinkHeaderEntries
    });
    return;
  }
  createResponseLinkHeaderEntries({
    phase: opts.phase,
    hints: opts.hints,
    sentLinks: opts.sentLinks,
    entries: opts.responseLinkHeaderEntries
  });
}
function createEarlyHintsCollector(opts) {
  if (!opts?.onEarlyHints && !opts?.responseLinkHeader) return;
  const sentLinks = /* @__PURE__ */ new Set();
  const sentHints = opts.onEarlyHints ? new Array() : void 0;
  const responseLinkHeaderEntries = opts.responseLinkHeader ? new Array() : void 0;
  const responseLinkHeaderFilter = getResponseLinkHeaderFilter(opts.responseLinkHeader);
  return {
    collectStatic: ({ manifest: manifest2, matchedRoutes }) => {
      if (!matchedRoutes?.length) return;
      collectEarlyHintsPhase({
        phase: "static",
        hints: collectStaticHintsFromManifest(manifest2, matchedRoutes),
        sentLinks,
        sentHints,
        onEarlyHints: opts.onEarlyHints,
        responseLinkHeaderEntries
      });
    },
    collectDynamic: (matches) => {
      collectEarlyHintsPhase({
        phase: "dynamic",
        hints: collectDynamicHintsFromMatches(matches),
        sentLinks,
        sentHints,
        onEarlyHints: opts.onEarlyHints,
        responseLinkHeaderEntries
      });
    },
    appendResponseHeaders: (headers) => {
      if (!responseLinkHeaderEntries?.length) return;
      appendResponseLinkHeaders({
        responseHeaders: headers,
        entries: responseLinkHeaderEntries,
        filter: responseLinkHeaderFilter
      });
    }
  };
}
function normalizeTransformAssetResult(result) {
  if (typeof result === "string") return { href: result };
  return result;
}
function escapeCssString(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\a ").replace(/\r/g, "\\d ").replace(/\f/g, "\\c ");
}
async function transformInlineCssTemplate(options) {
  const { strings, urls } = options.template;
  if (strings.length !== urls.length + 1) throw new Error(`TanStack Start inlineCss template for ${options.stylesheetHref} is invalid`);
  let css = strings[0];
  for (let index2 = 0; index2 < urls.length; index2++) {
    const transformed = normalizeTransformAssetResult(await options.transformFn({
      kind: "css-url",
      url: urls[index2],
      stylesheetHref: options.stylesheetHref
    }));
    css += escapeCssString(transformed.href) + strings[index2 + 1];
  }
  return css;
}
async function transformInlineCssStyles(inlineCss, transformFn) {
  const transformedStyles = {};
  const transformedEntries = await Promise.all(Object.entries(inlineCss.styles).map(async ([stylesheetHref, css]) => {
    const template = inlineCss.templates?.[stylesheetHref];
    return [stylesheetHref, template ? await transformInlineCssTemplate({
      stylesheetHref,
      template,
      transformFn
    }) : css];
  }));
  for (const [stylesheetHref, css] of transformedEntries) transformedStyles[stylesheetHref] = css;
  return {
    styles: transformedStyles,
    ...inlineCss.templates ? { templates: inlineCss.templates } : {}
  };
}
function resolveTransformAssetsCrossOrigin(config, kind) {
  if (!config) return void 0;
  if (typeof config === "string") return config;
  return config[kind];
}
function isObjectShorthand(transform) {
  return "prefix" in transform;
}
function resolveTransformAssetsConfig(transform) {
  if (typeof transform === "string") {
    const prefix = transform;
    return {
      type: "transform",
      transformFn: ({ url }) => ({ href: `${prefix}${url}` }),
      cache: true
    };
  }
  if (typeof transform === "function") return {
    type: "transform",
    transformFn: transform,
    cache: true
  };
  if (isObjectShorthand(transform)) {
    const { prefix, crossOrigin } = transform;
    return {
      type: "transform",
      transformFn: ({ url, kind }) => {
        const href = `${prefix}${url}`;
        if (kind === "css-url") return { href };
        const co = resolveTransformAssetsCrossOrigin(crossOrigin, kind);
        return co ? {
          href,
          crossOrigin: co
        } : { href };
      },
      cache: true
    };
  }
  if ("createTransform" in transform && transform.createTransform) return {
    type: "createTransform",
    createTransform: transform.createTransform,
    cache: transform.cache !== false
  };
  return {
    type: "transform",
    transformFn: typeof transform.transform === "string" ? (({ url }) => ({ href: `${transform.transform}${url}` })) : transform.transform,
    cache: transform.cache !== false
  };
}
function assignManifestLink(link, next) {
  if (typeof link === "string") return next.crossOrigin ? next : next.href;
  const nextLink = {
    ...link,
    href: next.href
  };
  if (next.crossOrigin) nextLink.crossOrigin = next.crossOrigin;
  else delete nextLink.crossOrigin;
  return nextLink;
}
async function transformManifestAssets(source, transformFn, _opts) {
  const manifest2 = structuredClone(source);
  const inlineCssEnabled = _opts?.inlineCss !== false;
  const scriptTransforms = /* @__PURE__ */ new Map();
  const transformScript = (url) => {
    const cached = scriptTransforms.get(url);
    if (cached) return cached;
    const transformed = Promise.resolve(transformFn({
      url,
      kind: "script"
    })).then(normalizeTransformAssetResult);
    scriptTransforms.set(url, transformed);
    return transformed;
  };
  if (!inlineCssEnabled) delete manifest2.inlineCss;
  else if (manifest2.inlineCss) manifest2.inlineCss = await transformInlineCssStyles(manifest2.inlineCss, transformFn);
  for (const route of Object.values(manifest2.routes)) {
    if (route.preloads?.length) route.preloads = await Promise.all(route.preloads.map(async (link) => {
      const result = await transformScript(resolveManifestAssetLink(link).href);
      return assignManifestLink(link, {
        href: result.href,
        crossOrigin: result.crossOrigin
      });
    }));
    if (route.css?.length && !manifest2.inlineCss) route.css = await Promise.all(route.css.map(async (link) => {
      const result = normalizeTransformAssetResult(await transformFn({
        url: resolveManifestCssLink(link).href,
        kind: "stylesheet"
      }));
      return assignManifestLink(link, {
        href: result.href,
        crossOrigin: result.crossOrigin
      });
    }));
    if (route.scripts?.length) for (const script of route.scripts) {
      const src = script.attrs?.src;
      if (typeof src !== "string") continue;
      const result = await transformScript(src);
      script.attrs = {
        ...script.attrs,
        src: result.href
      };
      if (result.crossOrigin) script.attrs.crossOrigin = result.crossOrigin;
      else delete script.attrs.crossOrigin;
    }
  }
  return manifest2;
}
function buildManifest(source, opts) {
  return {
    ...source.scriptFormat ? { scriptFormat: source.scriptFormat } : {},
    ...opts?.inlineCss !== false && source.inlineCss ? { inlineCss: structuredClone(source.inlineCss) } : {},
    routes: { ...source.routes }
  };
}
function getStaticHandlerInlineCssDefault(handlerInlineCss) {
  if (typeof handlerInlineCss === "function") return;
  return handlerInlineCss ?? true;
}
async function resolveInlineCssForRequest(opts) {
  if (opts.requestInlineCss !== void 0) return opts.requestInlineCss;
  if (typeof opts.handlerInlineCss === "function") return await opts.handlerInlineCss({ request: opts.request });
  return opts.handlerInlineCss ?? true;
}
function createCachedBaseManifestLoader(loadBaseManifest) {
  let baseManifestPromise;
  return () => {
    if (!baseManifestPromise) baseManifestPromise = loadBaseManifest().catch((error) => {
      baseManifestPromise = void 0;
      throw error;
    });
    return baseManifestPromise;
  };
}
function createFinalManifestTransformResolver(transformAssets, opts) {
  const transformConfig = transformAssets !== void 0 ? resolveTransformAssetsConfig(transformAssets) : void 0;
  const cache = transformConfig ? transformConfig.cache : true;
  const warmup = !!transformAssets && typeof transformAssets === "object" && "warmup" in transformAssets && transformAssets.warmup === true;
  let cachedCreateTransformPromise;
  const clearCachedCreateTransform = () => {
    cachedCreateTransformPromise = void 0;
  };
  return {
    cache,
    warmup,
    clearCachedCreateTransform,
    getTransformFn: async (ctx) => {
      if (!transformConfig) return void 0;
      if (transformConfig.type !== "createTransform") return transformConfig.transformFn;
      if (!cache || false) return transformConfig.createTransform(ctx);
      if (!cachedCreateTransformPromise) cachedCreateTransformPromise = Promise.resolve(transformConfig.createTransform(ctx)).catch((error) => {
        clearCachedCreateTransform();
        throw error;
      });
      return cachedCreateTransformPromise;
    }
  };
}
function createFinalManifestResolver(opts) {
  const finalManifestCache = /* @__PURE__ */ new Map();
  const transformResolver = createFinalManifestTransformResolver(opts.transformAssets);
  const handlerDefaultInlineCss = getStaticHandlerInlineCssDefault(opts.inlineCss);
  const getRequestManifestOptions = async (requestOpts) => {
    const transformFn = await transformResolver.getTransformFn({
      warmup: false,
      request: requestOpts.request
    });
    const inlineCss = await resolveInlineCssForRequest({
      request: requestOpts.request,
      handlerInlineCss: opts.inlineCss,
      requestInlineCss: requestOpts.requestInlineCss
    });
    return {
      getBaseManifest: requestOpts.getBaseManifest,
      transformFn,
      cache: transformResolver.cache,
      inlineCss
    };
  };
  const resolveRequest = async (requestOpts, cache) => {
    return resolveFinalManifest({
      ...await getRequestManifestOptions(requestOpts),
      finalManifestCache: cache
    });
  };
  return {
    warmup: ({ getBaseManifest: getBaseManifest2 }) => warmupFinalManifest({
      enabled: transformResolver.warmup,
      handlerDefaultInlineCss,
      cache: transformResolver.cache,
      finalManifestCache,
      getBaseManifest: getBaseManifest2,
      getTransformFn: () => transformResolver.getTransformFn({ warmup: true }),
      onError: transformResolver.clearCachedCreateTransform
    }),
    resolveCached: (requestOpts) => resolveRequest(requestOpts, finalManifestCache),
    resolveUncached: (requestOpts) => resolveRequest(requestOpts, void 0)
  };
}
function getFinalManifestCacheKey(inlineCss) {
  return inlineCss ? "inline-css" : "linked-css";
}
function cacheFinalManifestPromise(cachedFinalManifestPromises, cacheKey, promise) {
  const cachedFinalManifestPromise = promise.catch((error) => {
    if (cachedFinalManifestPromises.get(cacheKey) === cachedFinalManifestPromise) cachedFinalManifestPromises.delete(cacheKey);
    throw error;
  });
  cachedFinalManifestPromises.set(cacheKey, cachedFinalManifestPromise);
  return cachedFinalManifestPromise;
}
function getOrCreateCachedFinalManifestPromise(cachedFinalManifestPromises, cacheKey, computeFinalManifest) {
  const cachedFinalManifestPromise = cachedFinalManifestPromises.get(cacheKey);
  if (cachedFinalManifestPromise) return cachedFinalManifestPromise;
  return cacheFinalManifestPromise(cachedFinalManifestPromises, cacheKey, Promise.resolve().then(computeFinalManifest));
}
async function buildFinalManifest(opts) {
  return opts.transformFn ? await transformManifestAssets(opts.base, opts.transformFn, { inlineCss: opts.inlineCss }) : buildManifest(opts.base, { inlineCss: opts.inlineCss });
}
async function resolveFinalManifest(opts) {
  const computeFinalManifest = async () => {
    return buildFinalManifest({
      base: await opts.getBaseManifest(),
      transformFn: opts.transformFn,
      inlineCss: opts.inlineCss
    });
  };
  if (opts.finalManifestCache && (!opts.transformFn || opts.cache)) return getOrCreateCachedFinalManifestPromise(opts.finalManifestCache, getFinalManifestCacheKey(opts.inlineCss), computeFinalManifest);
  return computeFinalManifest();
}
function warmupFinalManifest(opts) {
  if (!opts.enabled || opts.handlerDefaultInlineCss === void 0 || !opts.cache) return;
  const inlineCss = opts.handlerDefaultInlineCss;
  const warmupPromise = getOrCreateCachedFinalManifestPromise(opts.finalManifestCache, getFinalManifestCacheKey(inlineCss), async () => {
    const [base, transformFn] = await Promise.all([opts.getBaseManifest(), opts.getTransformFn()]);
    return buildFinalManifest({
      base,
      transformFn,
      inlineCss
    });
  });
  if (opts.onError) warmupPromise.catch(opts.onError);
  return warmupPromise;
}
var ServerFunctionSerializationAdapter = createSerializationAdapter({
  key: "$TSS/serverfn",
  test: (v) => {
    if (typeof v !== "function") return false;
    if (!(TSS_SERVER_FUNCTION in v)) return false;
    return !!v[TSS_SERVER_FUNCTION];
  },
  toSerializable: ({ serverFnMeta }) => ({ functionId: serverFnMeta.id }),
  fromSerializable: ({ functionId }) => {
    const fn = async (opts, signal) => {
      return (await (await getServerFnById(functionId))(opts ?? {}, signal)).result;
    };
    return fn;
  }
});
function getStartResponseHeaders(opts) {
  return mergeHeaders({ "Content-Type": "text/html; charset=utf-8" }, ...opts.router.stores.matches.get().map((match) => {
    return match.headers;
  }));
}
var entriesPromise;
var defaultCsrfMiddleware = createCsrfMiddleware({ filter: (ctx) => ctx.handlerType === "serverFn" });
var getCachedBaseManifest = createCachedBaseManifestLoader(() => getStartManifest());
var getProdBaseManifest = () => getCachedBaseManifest();
var getBaseManifest = getProdBaseManifest;
var createEarlyHintsForRequest = createEarlyHintsCollector;
async function loadEntries() {
  const [routerEntry, startEntry, pluginAdapters] = await Promise.all([
    Promise.resolve().then(() => router),
    Promise.resolve().then(() => start),
    Promise.resolve().then(() => emptyPluginAdapters)
  ]);
  return {
    routerEntry,
    startEntry,
    pluginAdapters
  };
}
function getEntries() {
  if (!entriesPromise) entriesPromise = loadEntries();
  return entriesPromise;
}
var ROUTER_BASEPATH = "/";
var SERVER_FN_BASE = "/_serverFn/";
var IS_PRERENDERING = process.env.TSS_PRERENDERING === "true";
var IS_SHELL_ENV = process.env.TSS_SHELL === "true";
var ERR_NO_RESPONSE = "Internal Server Error";
var ERR_NO_DEFER = "Internal Server Error";
function throwRouteHandlerError() {
  throw new Error(ERR_NO_RESPONSE);
}
function throwIfMayNotDefer() {
  throw new Error(ERR_NO_DEFER);
}
function isSpecialResponse(value) {
  return value instanceof Response || isRedirect(value);
}
function handleCtxResult(result) {
  if (isSsrResponse(result) || isSpecialResponse(result)) return { response: result };
  return result;
}
async function executeMiddleware(middlewares, ctx) {
  let index2 = -1;
  let streamResponse;
  const setResponse = (response) => {
    if (isSsrResponse(response)) {
      if (response.serverSsrCleanup === "stream") streamResponse = response;
      ctx.response = response.response;
      return;
    }
    ctx.response = response;
  };
  const disposeStreamResponse = async (reason) => {
    const response = streamResponse;
    if (!response) return;
    streamResponse = void 0;
    const currentResponse = ctx.response;
    if (currentResponse === response.response || currentResponse instanceof Response && response.response.body !== null && currentResponse.body === response.response.body) ctx.response = void 0;
    await response.dispose(reason);
  };
  const getFinalResponse = async () => {
    const response = ctx.response;
    if (!response) throwRouteHandlerError();
    if (!streamResponse) return response;
    if (response === streamResponse.response) return streamResponse;
    if (streamResponse.response.body !== null && response.body === streamResponse.response.body) return {
      ...streamResponse,
      response
    };
    await disposeStreamResponse("middleware response replaced");
    return response;
  };
  const next = async (nextCtx) => {
    if (nextCtx) {
      if (nextCtx.context) ctx.context = safeObjectMerge(ctx.context, nextCtx.context);
      for (const key of Object.keys(nextCtx)) if (key === "response") setResponse(nextCtx.response);
      else if (key !== "context") ctx[key] = nextCtx[key];
    }
    index2++;
    const middleware = middlewares[index2];
    if (!middleware) return ctx;
    let result;
    try {
      result = await middleware({
        ...ctx,
        next
      });
    } catch (err) {
      if (isSpecialResponse(err)) {
        setResponse(err);
        return ctx;
      }
      await disposeStreamResponse("middleware error");
      throw err;
    }
    const normalized = handleCtxResult(result);
    if (normalized) {
      if (normalized.response !== void 0) setResponse(normalized.response);
      if (normalized.context) ctx.context = safeObjectMerge(ctx.context, normalized.context);
    }
    return ctx;
  };
  await next();
  return {
    ctx,
    response: await getFinalResponse()
  };
}
function handlerToMiddleware(handler, mayDefer = false) {
  if (mayDefer) return handler;
  return async (ctx) => {
    const response = await handler({
      ...ctx,
      next: throwIfMayNotDefer
    });
    if (!response) throwRouteHandlerError();
    return response;
  };
}
function createStartHandler(cbOrOptions) {
  const handlerOptions = typeof cbOrOptions === "function" ? {} : cbOrOptions;
  const cb = typeof cbOrOptions === "function" ? cbOrOptions : cbOrOptions.handler;
  const finalManifestResolver = createFinalManifestResolver({
    ...handlerOptions
  });
  const resolveManifestForRequest = finalManifestResolver.resolveCached;
  finalManifestResolver.warmup({ getBaseManifest: () => getBaseManifest() });
  const startRequestResolver = async (request, requestOpts) => {
    let router2 = null;
    let responseOwnsCleanup = false;
    try {
      const { url, handledProtocolRelativeURL } = getNormalizedURL(request.url);
      const href = url.pathname + url.search + url.hash;
      const origin = getOrigin(request);
      if (handledProtocolRelativeURL) return Response.redirect(url, 308);
      const entries2 = await getEntries();
      const hasStartInstance = !!entries2.startEntry.startInstance;
      const startOptions = await entries2.startEntry.startInstance?.getOptions() || {};
      const { hasPluginAdapters: hasPluginAdapters2, pluginSerializationAdapters: pluginSerializationAdapters2 } = entries2.pluginAdapters;
      const serializationAdapters = [
        ...startOptions.serializationAdapters || [],
        ...hasPluginAdapters2 ? pluginSerializationAdapters2 : [],
        ServerFunctionSerializationAdapter
      ];
      const requestStartOptions = {
        ...startOptions,
        requestMiddleware: hasStartInstance ? startOptions.requestMiddleware : [defaultCsrfMiddleware],
        serializationAdapters
      };
      const flattenedRequestMiddlewares = requestStartOptions.requestMiddleware ? flattenMiddlewares(requestStartOptions.requestMiddleware) : [];
      const executedRequestMiddlewares = new Set(flattenedRequestMiddlewares);
      const getRouter2 = async () => {
        if (router2) return router2;
        router2 = await entries2.routerEntry.getRouter();
        let isShell = IS_SHELL_ENV;
        if (IS_PRERENDERING && !isShell) isShell = request.headers.get(HEADERS.TSS_SHELL) === "true";
        const history = createMemoryHistory({ initialEntries: [href] });
        router2.update({
          history,
          isShell,
          isPrerendering: IS_PRERENDERING,
          origin: router2.options.origin ?? origin,
          defaultSsr: requestStartOptions.defaultSsr,
          serializationAdapters: [...requestStartOptions.serializationAdapters, ...router2.options.serializationAdapters || []],
          basepath: ROUTER_BASEPATH
        });
        return router2;
      };
      if (SERVER_FN_BASE && url.pathname.startsWith(SERVER_FN_BASE)) {
        if (false) ;
        const serverFnId = url.pathname.slice(SERVER_FN_BASE.length).split("/")[0];
        if (!serverFnId) throw new Error("Invalid server action param for serverFnId");
        const serverFnHandler = async ({ context }) => {
          return runWithStartContext({
            getRouter: getRouter2,
            startOptions: requestStartOptions,
            contextAfterGlobalMiddlewares: context,
            request,
            executedRequestMiddlewares,
            handlerType: "serverFn"
          }, () => handleServerAction({
            request,
            context: requestOpts?.context,
            serverFnId
          }));
        };
        const { response: middlewareResponse2 } = await executeMiddleware([...flattenedRequestMiddlewares.map((d) => d.options.server), serverFnHandler], {
          request,
          pathname: url.pathname,
          handlerType: "serverFn",
          context: createNullProtoObject(requestOpts?.context)
        });
        const result = await handleRedirectResponse(middlewareResponse2, request, getRouter2);
        responseOwnsCleanup = result.serverSsrCleanup === "stream";
        return result.response;
      }
      const executeRouter = async (serverContext, matchedRoutes) => {
        const acceptParts = (request.headers.get("Accept") || "*/*").split(",");
        if (!["*/*", "text/html"].some((mimeType) => acceptParts.some((part) => part.trim().startsWith(mimeType)))) return normalizeSsrResponse(Response.json({ error: "Only HTML requests are supported here" }, { status: 500 }));
        const manifest2 = await resolveManifestForRequest({
          request,
          requestInlineCss: requestOpts?.inlineCss,
          getBaseManifest: () => getBaseManifest(matchedRoutes)
        });
        const earlyHints = createEarlyHintsForRequest({
          onEarlyHints: requestOpts?.onEarlyHints,
          responseLinkHeader: requestOpts?.responseLinkHeader
        });
        earlyHints?.collectStatic({
          manifest: manifest2,
          matchedRoutes
        });
        const routerInstance = await getRouter2();
        attachRouterServerSsrUtils({
          router: routerInstance,
          manifest: manifest2,
          getRequestAssets: () => getStartContext({ throwIfNotFound: false })?.requestAssets
        });
        routerInstance.update({ additionalContext: { serverContext } });
        await routerInstance.load();
        if (routerInstance.state.redirect) return normalizeSsrResponse(routerInstance.state.redirect);
        earlyHints?.collectDynamic(routerInstance.stores.matches.get());
        const ctx = getStartContext({ throwIfNotFound: false });
        await routerInstance.serverSsr.dehydrate({ requestAssets: ctx?.requestAssets });
        const responseHeaders = getStartResponseHeaders({ router: routerInstance });
        earlyHints?.appendResponseHeaders(responseHeaders);
        return normalizeSsrResponse(await cb({
          request,
          router: routerInstance,
          responseHeaders
        }));
      };
      const requestHandlerMiddleware = async ({ context }) => {
        return runWithStartContext({
          getRouter: getRouter2,
          startOptions: requestStartOptions,
          contextAfterGlobalMiddlewares: context,
          request,
          executedRequestMiddlewares,
          handlerType: "router"
        }, async () => {
          try {
            return await handleServerRoutes({
              getRouter: getRouter2,
              request,
              url,
              executeRouter,
              context,
              executedRequestMiddlewares
            });
          } catch (err) {
            if (err instanceof Response) return err;
            throw err;
          }
        });
      };
      const { response: middlewareResponse } = await executeMiddleware([...flattenedRequestMiddlewares.map((d) => d.options.server), requestHandlerMiddleware], {
        request,
        pathname: url.pathname,
        handlerType: "router",
        context: createNullProtoObject(requestOpts?.context)
      });
      const response = await handleRedirectResponse(middlewareResponse, request, getRouter2);
      responseOwnsCleanup = response.serverSsrCleanup === "stream";
      return response.response;
    } finally {
      if (router2?.serverSsr && !responseOwnsCleanup) router2.serverSsr.cleanup();
      router2 = null;
    }
  };
  return requestHandler(startRequestResolver);
}
async function handleRedirectResponse(response, request, getRouter2) {
  const ssrResponse = normalizeSsrResponse(response);
  if (!isRedirect(ssrResponse.response)) return ssrResponse;
  if (isResolvedRedirect(ssrResponse.response)) {
    if (request.headers.get("x-tsr-serverFn") === "true") return replaceSsrResponse(ssrResponse, Response.json({
      ...ssrResponse.response.options,
      isSerializedRedirect: true
    }, { headers: ssrResponse.response.headers }), "redirect response replaced");
    return ssrResponse;
  }
  const opts = ssrResponse.response.options;
  if (opts.to && typeof opts.to === "string" && !opts.to.startsWith("/")) throw new Error(`Server side redirects must use absolute paths via the 'href' or 'to' options. The redirect() method's "to" property accepts an internal path only. Use the "href" property to provide an external URL. Received: ${JSON.stringify(opts)}`);
  if ([
    "params",
    "search",
    "hash"
  ].some((d) => typeof opts[d] === "function")) throw new Error(`Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(opts).filter((d) => typeof opts[d] === "function").map((d) => `"${d}"`).join(", ")}`);
  const redirect = (await getRouter2()).resolveRedirect(ssrResponse.response);
  if (request.headers.get("x-tsr-serverFn") === "true") return replaceSsrResponse(ssrResponse, Response.json({
    ...ssrResponse.response.options,
    isSerializedRedirect: true
  }, { headers: ssrResponse.response.headers }), "redirect response replaced");
  return replaceSsrResponse(ssrResponse, redirect, "redirect response replaced");
}
async function handleServerRoutes({ getRouter: getRouter2, request, url, executeRouter, context, executedRequestMiddlewares }) {
  const router2 = await getRouter2();
  const pathname = executeRewriteInput(router2.rewrite, url).pathname;
  const { matchedRoutes, foundRoute, routeParams } = router2.getMatchedRoutes(pathname);
  const isExactMatch = foundRoute && routeParams["**"] === void 0;
  const routeMiddlewares = [];
  for (const route of matchedRoutes) {
    const serverMiddleware = route.options.server?.middleware;
    if (serverMiddleware) {
      const flattened = flattenMiddlewares(serverMiddleware);
      for (const m of flattened) if (!executedRequestMiddlewares.has(m)) routeMiddlewares.push(m.options.server);
    }
  }
  const server2 = foundRoute?.options.server;
  let isHeadFallback = false;
  if (server2?.handlers && isExactMatch) {
    const handlers = typeof server2.handlers === "function" ? server2.handlers({ createHandlers: (d) => d }) : server2.handlers;
    const requestMethod = request.method.toUpperCase();
    const handler = requestMethod === "HEAD" ? handlers["HEAD"] ?? handlers["GET"] ?? handlers["ANY"] : handlers[requestMethod] ?? handlers["ANY"];
    isHeadFallback = requestMethod === "HEAD" && handler !== void 0 && !handlers["HEAD"];
    if (handler) {
      const mayDefer = !!foundRoute.options.component;
      if (typeof handler === "function") routeMiddlewares.push(handlerToMiddleware(handler, mayDefer));
      else {
        if (handler.middleware?.length) {
          const handlerMiddlewares = flattenMiddlewares(handler.middleware);
          for (const m of handlerMiddlewares) routeMiddlewares.push(m.options.server);
        }
        if (handler.handler) routeMiddlewares.push(handlerToMiddleware(handler.handler, mayDefer));
      }
    }
  }
  routeMiddlewares.push(((ctx2) => executeRouter(ctx2.context, matchedRoutes)));
  const { ctx, response } = await executeMiddleware(routeMiddlewares, {
    request,
    context,
    params: routeParams,
    pathname,
    handlerType: "router"
  });
  if (isHeadFallback) {
    if (!ctx.response) throwRouteHandlerError();
    return stripSsrResponseBody(await handleRedirectResponse(response, request, getRouter2), "HEAD body stripped");
  }
  return normalizeSsrResponse(response);
}
var fetch$1 = createStartHandler(defaultStreamHandler);
function createServerEntry(entry) {
  return { async fetch(...args) {
    return await entry.fetch(...args);
  } };
}
var server_default = createServerEntry({ fetch: fetch$1 });
const server = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createServerEntry,
  default: server_default
}, Symbol.toStringTag, { value: "Module" }));
const tsrStartManifest = () => ({ routes: { __root__: { filePath: "D:/Storage/uni/prac web/packify-craft-suite-main/src/routes/__root.tsx", children: ["/", "/about", "/contact", "/products", "/quote", "/sitemap.xml", "/admin_/forgot-password", "/admin_/login", "/admin_/reset-password", "/admin/"], preloads: ["/assets/index-BGpIsIlS.js"], scripts: [{ attrs: { type: "module", async: true, src: "/assets/index-BGpIsIlS.js" } }] }, "/": { filePath: "D:/Storage/uni/prac web/packify-craft-suite-main/src/routes/index.tsx", children: void 0, preloads: ["/assets/index-C-eKpNnX.js", "/assets/useQuery-BJ9mll2W.js", "/assets/useServerFn-Dpl8wv42.js", "/assets/Reveal-D7iglP96.js", "/assets/ProductCard-Dbqf2QUk.js", "/assets/proxy-Dcjtnd_i.js", "/assets/sparkles-DQtOaWcs.js", "/assets/badge-SXsczEtf.js"] }, "/about": { filePath: "D:/Storage/uni/prac web/packify-craft-suite-main/src/routes/about.tsx", children: void 0, preloads: ["/assets/about-Dpsc4dcr.js", "/assets/Reveal-D7iglP96.js", "/assets/sparkles-DQtOaWcs.js", "/assets/proxy-Dcjtnd_i.js"] }, "/contact": { filePath: "D:/Storage/uni/prac web/packify-craft-suite-main/src/routes/contact.tsx", children: void 0, preloads: ["/assets/contact-oGEGd2yU.js", "/assets/textarea-lcdYHWRW.js", "/assets/useServerFn-Dpl8wv42.js", "/assets/quotes.functions-DWpIlCLf.js", "/assets/input-C996iPUk.js", "/assets/label-CM2SMxQ0.js", "/assets/loader-circle-Dntl_TBv.js", "/assets/Reveal-D7iglP96.js", "/assets/proxy-Dcjtnd_i.js"] }, "/products": { filePath: "D:/Storage/uni/prac web/packify-craft-suite-main/src/routes/products.tsx", children: ["/products/$slug"], preloads: ["/assets/products-JkDmfAxX.js", "/assets/useQuery-BJ9mll2W.js", "/assets/useServerFn-Dpl8wv42.js", "/assets/input-C996iPUk.js", "/assets/select-CxXMOZsd.js", "/assets/skeleton-I1Sj-jOY.js", "/assets/Reveal-D7iglP96.js", "/assets/ProductCard-Dbqf2QUk.js", "/assets/proxy-Dcjtnd_i.js", "/assets/Combination-BG9tCkDs.js", "/assets/badge-SXsczEtf.js", "/assets/sparkles-DQtOaWcs.js"] }, "/quote": { filePath: "D:/Storage/uni/prac web/packify-craft-suite-main/src/routes/quote.tsx", children: void 0, preloads: ["/assets/quote-D6AHEdQB.js", "/assets/textarea-lcdYHWRW.js", "/assets/useServerFn-Dpl8wv42.js", "/assets/quotes.functions-DWpIlCLf.js", "/assets/input-C996iPUk.js", "/assets/label-CM2SMxQ0.js", "/assets/select-CxXMOZsd.js", "/assets/loader-circle-Dntl_TBv.js", "/assets/Reveal-D7iglP96.js", "/assets/Combination-BG9tCkDs.js", "/assets/proxy-Dcjtnd_i.js"] }, "/admin_/forgot-password": { filePath: "D:/Storage/uni/prac web/packify-craft-suite-main/src/routes/admin_.forgot-password.tsx", children: void 0, preloads: ["/assets/admin_.forgot-password-B8k3y2MM.js", "/assets/input-C996iPUk.js", "/assets/label-CM2SMxQ0.js", "/assets/Reveal-D7iglP96.js", "/assets/admin-EgLW_3cZ.js", "/assets/loader-circle-Dntl_TBv.js", "/assets/arrow-left-E0XRM7-F.js", "/assets/proxy-Dcjtnd_i.js"] }, "/admin_/login": { filePath: "D:/Storage/uni/prac web/packify-craft-suite-main/src/routes/admin_.login.tsx", children: void 0, preloads: ["/assets/admin_.login-qp795U10.js", "/assets/input-C996iPUk.js", "/assets/label-CM2SMxQ0.js", "/assets/admin-EgLW_3cZ.js"] }, "/admin_/reset-password": { filePath: "D:/Storage/uni/prac web/packify-craft-suite-main/src/routes/admin_.reset-password.tsx", children: void 0, preloads: ["/assets/admin_.reset-password-DVBeciwW.js", "/assets/input-C996iPUk.js", "/assets/label-CM2SMxQ0.js", "/assets/Reveal-D7iglP96.js", "/assets/admin-EgLW_3cZ.js", "/assets/loader-circle-Dntl_TBv.js", "/assets/arrow-left-E0XRM7-F.js", "/assets/proxy-Dcjtnd_i.js"] }, "/products/$slug": { filePath: "D:/Storage/uni/prac web/packify-craft-suite-main/src/routes/products.$slug.tsx", children: void 0, preloads: ["/assets/products._slug-BLh80gB-.js", "/assets/products._slug-Bu6is5zQ.js", "/assets/dialog-lNfzNzNp.js", "/assets/arrow-left-E0XRM7-F.js"] }, "/admin/": { filePath: "D:/Storage/uni/prac web/packify-craft-suite-main/src/routes/admin.index.tsx", children: void 0, preloads: ["/assets/admin.index-BrZjf7dD.js", "/assets/useQuery-BJ9mll2W.js", "/assets/useServerFn-Dpl8wv42.js", "/assets/badge-SXsczEtf.js", "/assets/input-C996iPUk.js", "/assets/select-CxXMOZsd.js", "/assets/dialog-lNfzNzNp.js", "/assets/skeleton-I1Sj-jOY.js", "/assets/admin-EgLW_3cZ.js", "/assets/textarea-lcdYHWRW.js", "/assets/Combination-BG9tCkDs.js", "/assets/label-CM2SMxQ0.js", "/assets/loader-circle-Dntl_TBv.js", "/assets/proxy-Dcjtnd_i.js"] } } });
const _tanstackStartManifest_v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  tsrStartManifest
}, Symbol.toStringTag, { value: "Module" }));
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
function useServerFn(serverFn) {
  const router2 = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router2.stores.location.get();
        return router2.navigate(router2.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router2, serverFn]);
}
function createSupabaseAdminClient() {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    const missing = [
      ...!SUPABASE_URL ? ["SUPABASE_URL"] : [],
      ...!SUPABASE_SERVICE_ROLE_KEY ? ["SUPABASE_SERVICE_ROLE_KEY"] : []
    ];
    const message = `Missing Supabase environment variable(s): ${missing.join(", ")}. Configure Supabase environment variables in your project settings.`;
    console.error(`[Supabase] ${message}`);
    throw new Error(message);
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      storage: void 0,
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
let _supabaseAdmin;
const supabaseAdmin = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabaseAdmin) _supabaseAdmin = createSupabaseAdminClient();
    return Reflect.get(_supabaseAdmin, prop, receiver);
  }
});
const requireSupabaseAuth = createMiddleware({ type: "function" }).server(
  async ({ next }) => {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
      const missing = [
        ...!SUPABASE_URL ? ["SUPABASE_URL"] : [],
        ...!SUPABASE_PUBLISHABLE_KEY ? ["SUPABASE_PUBLISHABLE_KEY"] : []
      ];
      const message = `Missing Supabase environment variable(s): ${missing.join(", ")}. Configure Supabase environment variables in your project settings.`;
      console.error(`[Supabase] ${message}`);
      throw new Error(message);
    }
    const request = getRequest();
    if (!request?.headers) {
      throw new Error("Unauthorized: No request headers available");
    }
    const authHeader = request.headers.get("authorization");
    if (!authHeader) {
      throw new Error("Unauthorized: No authorization header provided");
    }
    if (!authHeader.startsWith("Bearer ")) {
      throw new Error("Unauthorized: Only Bearer tokens are supported");
    }
    const token = authHeader.replace("Bearer ", "");
    if (!token) {
      throw new Error("Unauthorized: No token provided");
    }
    const supabase2 = createClient(
      SUPABASE_URL,
      SUPABASE_PUBLISHABLE_KEY,
      {
        global: {
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
        auth: {
          storage: void 0,
          persistSession: false,
          autoRefreshToken: false
        }
      }
    );
    const { data, error } = await supabase2.auth.getClaims(token);
    if (error || !data?.claims) {
      throw new Error("Unauthorized: Invalid token");
    }
    if (!data.claims.sub) {
      throw new Error("Unauthorized: No user ID found in token");
    }
    return next({
      context: {
        supabase: supabase2,
        userId: data.claims.sub,
        claims: data.claims
      }
    });
  }
);
const productSectionSchema$1 = objectType({
  id: stringType().optional(),
  heading: stringType().min(1, "Heading is required"),
  content: stringType().min(1, "Content is required")
});
const productCardSchema$1 = objectType({
  id: stringType().optional(),
  title: stringType().min(1, "Title is required"),
  description: stringType().min(1, "Description is required")
});
const productFeatureSchema$1 = objectType({
  id: stringType().optional(),
  feature: stringType().min(1, "Feature is required")
});
const galleryImageSchema$1 = objectType({
  id: stringType().optional(),
  image_url: stringType().url("Image URL is required"),
  alt_text: stringType().optional().nullable()
});
const productFormSchema$1 = objectType({
  id: stringType().optional(),
  slug: stringType().min(1).max(120),
  title: stringType().min(2, "Title is required"),
  category_id: stringType().min(1, "Category is required"),
  short_description: stringType().min(8, "Short description is required"),
  featured_image: stringType().url().or(literalType("")).optional().nullable(),
  is_featured: booleanType().default(false),
  is_published: booleanType().default(false),
  meta_title: stringType().max(70).optional().nullable(),
  meta_description: stringType().max(165).optional().nullable(),
  content_sections: arrayType(productSectionSchema$1).default([]),
  box_styles: arrayType(productCardSchema$1).default([]),
  materials: arrayType(productCardSchema$1).default([]),
  features: arrayType(productFeatureSchema$1).default([]),
  gallery_images: arrayType(galleryImageSchema$1).default([])
});
function normalizeCategory(row) {
  return {
    id: String(row.id),
    slug: String(row.slug),
    name: String(row.name),
    description: typeof row.description === "string" ? row.description : null,
    image_url: typeof row.image_url === "string" ? row.image_url : null,
    sort_order: typeof row.sort_order === "number" ? row.sort_order : null,
    created_at: typeof row.created_at === "string" ? row.created_at : (/* @__PURE__ */ new Date(0)).toISOString(),
    updated_at: typeof row.updated_at === "string" ? row.updated_at : null
  };
}
function getRowOrder(row) {
  return row.display_order ?? row.sort_order ?? 0;
}
function sortByOrder(items) {
  return [...items].sort((left, right) => getRowOrder(left) - getRowOrder(right));
}
async function loadCategories() {
  const {
    data,
    error
  } = await supabaseAdmin.from("categories").select("*");
  if (error) throw new Error(error.message);
  return sortByOrder((data ?? []).map((row) => normalizeCategory(row)));
}
async function loadRelations(productId) {
  const [sections, boxStyles, materials, features, galleryImages] = await Promise.all([supabaseAdmin.from("product_content_sections").select("*").eq("product_id", productId), supabaseAdmin.from("product_box_styles").select("*").eq("product_id", productId), supabaseAdmin.from("product_materials").select("*").eq("product_id", productId), supabaseAdmin.from("product_features").select("*").eq("product_id", productId), supabaseAdmin.from("product_gallery_images").select("*").eq("product_id", productId)]);
  if (sections.error) throw new Error(sections.error.message);
  if (boxStyles.error) throw new Error(boxStyles.error.message);
  if (materials.error) throw new Error(materials.error.message);
  if (features.error) throw new Error(features.error.message);
  if (galleryImages.error) throw new Error(galleryImages.error.message);
  return {
    content_sections: sections.data ?? [],
    box_styles: boxStyles.data ?? [],
    materials: materials.data ?? [],
    features: features.data ?? [],
    gallery_images: galleryImages.data ?? []
  };
}
function normalizeProduct(row, category, relations) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    short_description: row.short_description ?? null,
    featured_image: row.featured_image ?? null,
    category_id: row.category_id ?? null,
    is_featured: Boolean(row.is_featured),
    is_published: Boolean(row.is_published),
    meta_title: row.meta_title ?? null,
    meta_description: row.meta_description ?? null,
    created_at: row.created_at,
    updated_at: row.updated_at ?? null,
    category,
    content_sections: sortByOrder(relations.content_sections).map((section) => ({
      ...section
    })),
    box_styles: sortByOrder(relations.box_styles).map((section) => ({
      ...section
    })),
    materials: sortByOrder(relations.materials).map((section) => ({
      ...section
    })),
    features: sortByOrder(relations.features).map((section) => ({
      ...section
    })),
    gallery_images: sortByOrder(relations.gallery_images).map((section) => ({
      ...section
    }))
  };
}
function normalizeProductSummary(row, category) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    short_description: row.short_description ?? null,
    featured_image: row.featured_image ?? null,
    category_id: row.category_id ?? null,
    is_featured: Boolean(row.is_featured),
    is_published: Boolean(row.is_published),
    meta_title: row.meta_title ?? null,
    meta_description: row.meta_description ?? null,
    created_at: row.created_at,
    updated_at: row.updated_at ?? null,
    category,
    content_sections: [],
    box_styles: [],
    materials: [],
    features: [],
    gallery_images: []
  };
}
const listCmsCategories_createServerFn_handler = createServerRpc({
  id: "f702a9cb2fb5204041cab250808f6606860d848d4f58cd87ae78cef278102673",
  name: "listCmsCategories",
  filename: "src/lib/product.cms.ts"
}, (opts) => listCmsCategories$1.__executeServer(opts));
const listCmsCategories$1 = createServerFn({
  method: "GET"
}).handler(listCmsCategories_createServerFn_handler, async () => loadCategories());
const createCmsCategory_createServerFn_handler = createServerRpc({
  id: "681d6d9dbf235a6b09772c56ee074143f1c415de364158110332779de5c1221b",
  name: "createCmsCategory",
  filename: "src/lib/product.cms.ts"
}, (opts) => createCmsCategory$1.__executeServer(opts));
const createCmsCategory$1 = createServerFn({
  method: "POST"
}).inputValidator((input) => objectType({
  name: stringType().min(2, "Category name is required"),
  slug: stringType().min(2, "Category slug is required"),
  description: stringType().optional().nullable()
}).parse(input)).middleware([requireSupabaseAuth]).handler(createCmsCategory_createServerFn_handler, async ({
  data
}) => {
  const {
    data: category,
    error
  } = await supabaseAdmin.from("categories").insert({
    name: data.name,
    slug: data.slug
  }).select("*").single();
  if (error) throw new Error(error.message);
  return normalizeCategory(category);
});
const listCmsProducts_createServerFn_handler = createServerRpc({
  id: "d2666bcd10312dd4be304290b407515425b19e40dd52318931c6a5e7e3b1c0b9",
  name: "listCmsProducts",
  filename: "src/lib/product.cms.ts"
}, (opts) => listCmsProducts$1.__executeServer(opts));
const listCmsProducts$1 = createServerFn({
  method: "GET"
}).handler(listCmsProducts_createServerFn_handler, async () => {
  const [productsResult, categories2] = await Promise.all([supabaseAdmin.from("products").select("*").order("created_at", {
    ascending: false
  }), loadCategories().catch(() => [])]);
  if (productsResult.error) throw new Error(productsResult.error.message);
  const byId = new Map(categories2.map((category) => [category.id, category]));
  const rows = (productsResult.data ?? []).map((row) => normalizeProductSummary(row, row.category_id ? byId.get(row.category_id) ?? null : null));
  return rows;
});
const listPublicProducts_createServerFn_handler = createServerRpc({
  id: "3202aff87951064a632a7aeaaf251f1050ace87131d03006b866ee2a3e75bc22",
  name: "listPublicProducts",
  filename: "src/lib/product.cms.ts"
}, (opts) => listPublicProducts$1.__executeServer(opts));
const listPublicProducts$1 = createServerFn({
  method: "GET"
}).handler(listPublicProducts_createServerFn_handler, async () => {
  const rows = await listCmsProducts$1({
    data: void 0
  });
  try {
    const total = rows.length;
    const published = rows.filter((p) => p.is_published).length;
    console.debug(`listPublicProducts: total=${total}, published=${published}`);
  } catch (e) {
    console.debug("listPublicProducts: debug failed", e);
  }
  return rows.filter((product) => product.is_published);
});
const getCmsProductBySlug_createServerFn_handler = createServerRpc({
  id: "f11f87ee310200aae6ffce0e3163371d8184c18dd2b9cc6d97f6c98a233b81be",
  name: "getCmsProductBySlug",
  filename: "src/lib/product.cms.ts"
}, (opts) => getCmsProductBySlug.__executeServer(opts));
const getCmsProductBySlug = createServerFn({
  method: "GET"
}).inputValidator((i) => stringType().parse(i)).handler(getCmsProductBySlug_createServerFn_handler, async ({
  data: slug
}) => {
  const {
    data: row,
    error
  } = await supabaseAdmin.from("products").select("*").eq("slug", slug).maybeSingle();
  if (error) throw new Error(error.message);
  if (!row) return null;
  const categories2 = await loadCategories().catch(() => []);
  const relations = await loadRelations(row.id);
  return normalizeProduct(row, row.category_id ? categories2.find((category) => category.id === row.category_id) ?? null : null, relations);
});
const getPublicProductBySlug_createServerFn_handler = createServerRpc({
  id: "ecc8fbdf6efb93100cabdf2af1cc080756f1323e7633378c286380fa22bb0283",
  name: "getPublicProductBySlug",
  filename: "src/lib/product.cms.ts"
}, (opts) => getPublicProductBySlug$1.__executeServer(opts));
const getPublicProductBySlug$1 = createServerFn({
  method: "GET"
}).inputValidator((i) => stringType().parse(i)).handler(getPublicProductBySlug_createServerFn_handler, async ({
  data: slug
}) => {
  const product = await getCmsProductBySlug({
    data: slug
  });
  if (product) {
    console.debug(`getPublicProductBySlug: slug=${slug}, is_published=${product.is_published}`);
    if (!product.is_published) console.debug(`getPublicProductBySlug: product exists but is not published: id=${product.id}`);
  } else {
    console.debug(`getPublicProductBySlug: slug=${slug} -> not found`);
  }
  return product?.is_published ? product : null;
});
const getCmsProductById_createServerFn_handler = createServerRpc({
  id: "01085035bc267745d0d1c718401d278a9a2f19d77fe3a4c4de19136a22d93e30",
  name: "getCmsProductById",
  filename: "src/lib/product.cms.ts"
}, (opts) => getCmsProductById.__executeServer(opts));
const getCmsProductById = createServerFn({
  method: "GET"
}).inputValidator((i) => stringType().uuid().parse(i)).handler(getCmsProductById_createServerFn_handler, async ({
  data: id
}) => {
  const {
    data: row,
    error
  } = await supabaseAdmin.from("products").select("*").eq("id", id).maybeSingle();
  if (error) throw new Error(error.message);
  if (!row) return null;
  const categories2 = await loadCategories().catch(() => []);
  const relations = await loadRelations(row.id);
  return normalizeProduct(row, row.category_id ? categories2.find((category) => category.id === row.category_id) ?? null : null, relations);
});
async function replaceChildRows(table, productId, rows, mapRow) {
  const deleteResult = await supabaseAdmin.from(table).delete().eq("product_id", productId);
  if (deleteResult.error) throw new Error(deleteResult.error.message);
  if (rows.length === 0) return;
  const payload = rows.map((row, index2) => ({
    product_id: productId,
    ...mapRow(row, index2)
  }));
  const insertResult = await supabaseAdmin.from(table).insert(payload);
  if (insertResult.error) throw new Error(insertResult.error.message);
}
function extractMissingColumn(errorMessage) {
  const match = errorMessage.match(/Could not find the '([^']+)' column/);
  return match?.[1] ?? null;
}
async function saveProductWithFallback(data) {
  const productPayload = {
    slug: data.slug,
    title: data.title,
    category_id: data.category_id,
    short_description: data.short_description,
    featured_image: data.featured_image || null,
    is_featured: data.is_featured,
    is_published: data.is_published,
    meta_title: data.meta_title || null,
    meta_description: data.meta_description || null
  };
  const attemptedMissingColumns = /* @__PURE__ */ new Set();
  while (true) {
    const saveResult = data.id ? await supabaseAdmin.from("products").update(productPayload).eq("id", data.id).select("*").single() : await supabaseAdmin.from("products").insert(productPayload).select("*").single();
    if (!saveResult.error && saveResult.data) {
      return saveResult.data;
    }
    const errorMessage = saveResult.error?.message ?? "Failed to save product";
    const missingColumn = extractMissingColumn(errorMessage);
    console.error("saveProductWithFallback error", {
      errorMessage,
      missingColumn,
      attemptedMissingColumns: Array.from(attemptedMissingColumns),
      productPayload
    });
    if (!missingColumn || attemptedMissingColumns.has(missingColumn) || !(missingColumn in productPayload)) {
      throw new Error(`${errorMessage}${missingColumn ? ` (missing column: ${missingColumn})` : ""}`);
    }
    attemptedMissingColumns.add(missingColumn);
    delete productPayload[missingColumn];
  }
}
const saveCmsProduct_createServerFn_handler = createServerRpc({
  id: "3e67d37a22277858f850aeb98f8ae4daa9cc45b9db544f22e0ae2c38bf87c320",
  name: "saveCmsProduct",
  filename: "src/lib/product.cms.ts"
}, (opts) => saveCmsProduct$1.__executeServer(opts));
const saveCmsProduct$1 = createServerFn({
  method: "POST"
}).inputValidator((input) => productFormSchema$1.parse(input)).middleware([requireSupabaseAuth]).handler(saveCmsProduct_createServerFn_handler, async ({
  data
}) => {
  let savedProduct;
  try {
    savedProduct = await saveProductWithFallback(data);
  } catch (err) {
    console.error("saveCmsProduct failed while saving product", {
      error: err,
      data
    });
    throw new Error(`Failed to save product: ${err instanceof Error ? err.message : String(err)}`);
  }
  try {
    await Promise.all([replaceChildRows("product_content_sections", savedProduct.id, data.content_sections, (row, index2) => ({
      heading: row.heading,
      content: row.content,
      display_order: index2
    })), replaceChildRows("product_box_styles", savedProduct.id, data.box_styles, (row) => ({
      title: row.title,
      description: row.description
    })), replaceChildRows("product_materials", savedProduct.id, data.materials, (row) => ({
      title: row.title,
      description: row.description
    })), replaceChildRows("product_features", savedProduct.id, data.features, (row) => ({
      feature: row.feature
    })), replaceChildRows("product_gallery_images", savedProduct.id, data.gallery_images, (row, index2) => ({
      image_url: row.image_url,
      alt_text: row.alt_text ?? null,
      display_order: index2
    }))]);
  } catch (err) {
    console.error("saveCmsProduct failed while replacing child rows", {
      error: err,
      data,
      savedProductId: savedProduct?.id
    });
    throw new Error(`Failed to save product relations: ${err instanceof Error ? err.message : String(err)}`);
  }
  const categories2 = await loadCategories().catch(() => []);
  const relations = await loadRelations(savedProduct.id);
  return normalizeProduct(savedProduct, categories2.find((category) => category.id === savedProduct.category_id) ?? null, relations);
});
const deleteCmsProduct_createServerFn_handler = createServerRpc({
  id: "9bc619d8c670a1c0a19e4778c7a46fb3a960afc9f22121da5e21bf58c1944d75",
  name: "deleteCmsProduct",
  filename: "src/lib/product.cms.ts"
}, (opts) => deleteCmsProduct$1.__executeServer(opts));
const deleteCmsProduct$1 = createServerFn({
  method: "POST"
}).inputValidator((input) => stringType().uuid().parse(input)).middleware([requireSupabaseAuth]).handler(deleteCmsProduct_createServerFn_handler, async ({
  data: id
}) => {
  const tables = ["product_gallery_images", "product_features", "product_materials", "product_box_styles", "product_content_sections"];
  for (const table of tables) {
    const result = await supabaseAdmin.from(table).delete().eq("product_id", id);
    if (result.error) throw new Error(result.error.message);
  }
  const {
    error
  } = await supabaseAdmin.from("products").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const uploadCmsImageBase64_createServerFn_handler = createServerRpc({
  id: "7edd74d38c9bf72238aea5c548f501d1d63109682c9622c15d531e278d39dc8f",
  name: "uploadCmsImageBase64",
  filename: "src/lib/product.cms.ts"
}, (opts) => uploadCmsImageBase64$1.__executeServer(opts));
const uploadCmsImageBase64$1 = createServerFn({
  method: "POST"
}).inputValidator((input) => objectType({
  fileName: stringType().min(1),
  contentType: stringType().min(1),
  base64Data: stringType().min(1)
}).parse(input)).middleware([requireSupabaseAuth]).handler(uploadCmsImageBase64_createServerFn_handler, async ({
  data
}) => {
  const base64 = data.base64Data.replace(/^data:[^;]+;base64,/, "");
  const buffer = Buffer.from(base64, "base64");
  const filePath = `${Date.now()}_${data.fileName}`;
  const {
    error
  } = await supabaseAdmin.storage.from("product-images").upload(filePath, buffer, {
    contentType: data.contentType,
    upsert: true
  });
  if (error) throw new Error(error.message);
  const {
    data: publicUrlData
  } = supabaseAdmin.storage.from("product-images").getPublicUrl(filePath);
  return {
    url: publicUrlData.publicUrl
  };
});
const product_cms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createCmsCategory_createServerFn_handler,
  deleteCmsProduct_createServerFn_handler,
  getCmsProductById_createServerFn_handler,
  getCmsProductBySlug_createServerFn_handler,
  getPublicProductBySlug_createServerFn_handler,
  listCmsCategories_createServerFn_handler,
  listCmsProducts_createServerFn_handler,
  listPublicProducts_createServerFn_handler,
  saveCmsProduct_createServerFn_handler,
  uploadCmsImageBase64_createServerFn_handler
}, Symbol.toStringTag, { value: "Module" }));
const quoteSchema$1 = objectType({
  name: stringType().trim().min(1).max(100),
  company: stringType().trim().max(150).optional().or(literalType("")),
  email: stringType().trim().email().max(255),
  phone: stringType().trim().max(40).optional().or(literalType("")),
  boxType: stringType().trim().min(1).max(100),
  dimensions: stringType().trim().max(120).optional().or(literalType("")),
  quantity: numberType().int().min(1).max(1e7),
  material: stringType().trim().max(80).optional().or(literalType("")),
  printing: stringType().trim().max(80).optional().or(literalType("")),
  notes: stringType().trim().max(2e3).optional().or(literalType("")),
  attachmentFileName: stringType().trim().max(255).optional().or(literalType("")),
  attachmentContentType: stringType().trim().max(100).optional().or(literalType("")),
  attachmentBase64Data: stringType().optional().or(literalType(""))
});
const RESEND_API_URL = "https://api.resend.com/emails";
function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL;
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable");
  }
  if (!toEmail) {
    throw new Error("Missing RESEND_TO_EMAIL environment variable");
  }
  return {
    apiKey,
    fromEmail,
    toEmail
  };
}
function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
async function sendResendEmail(params) {
  const {
    apiKey,
    fromEmail,
    toEmail
  } = getResendConfig();
  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: params.replyTo,
      subject: params.subject,
      text: params.text,
      html: params.html,
      attachments: params.attachmentBase64Data && params.attachmentName ? [{
        filename: params.attachmentName,
        content: params.attachmentBase64Data,
        contentType: params.attachmentContentType || "application/octet-stream"
      }] : []
    })
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend email failed: ${errorText}`);
  }
}
async function sendQuoteEmail(params) {
  const lines = [`New quote request from ${params.name}`, `Quote ID: ${params.quoteId}`, `Email: ${params.email}`, `Company: ${params.company || "-"}`, `Phone: ${params.phone || "-"}`, `Box type: ${params.boxType}`, `Dimensions: ${params.dimensions || "-"}`, `Quantity: ${params.quantity}`, `Material: ${params.material || "-"}`, `Printing: ${params.printing || "-"}`, `Attachment: ${params.attachmentName || "-"}`, `Attachment URL: ${params.attachmentUrl || "-"}`, "", "Notes:", params.notes || "-"];
  await sendResendEmail({
    subject: `New quote request from ${params.name}`,
    replyTo: params.email,
    text: lines.join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
        <h2 style="margin:0 0 16px">New quote request</h2>
        <p><strong>Name:</strong> ${escapeHtml(params.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(params.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(params.company || "-")}</p>
        <p><strong>Phone:</strong> ${escapeHtml(params.phone || "-")}</p>
        <p><strong>Box type:</strong> ${escapeHtml(params.boxType)}</p>
        <p><strong>Dimensions:</strong> ${escapeHtml(params.dimensions || "-")}</p>
        <p><strong>Quantity:</strong> ${params.quantity}</p>
        <p><strong>Material:</strong> ${escapeHtml(params.material || "-")}</p>
        <p><strong>Printing:</strong> ${escapeHtml(params.printing || "-")}</p>
        <p><strong>Attachment:</strong> ${escapeHtml(params.attachmentName || "-")}</p>
        ${params.attachmentUrl ? `<p><strong>Attachment URL:</strong> <a href="${escapeHtml(params.attachmentUrl)}">${escapeHtml(params.attachmentUrl)}</a></p>` : ""}
        <p><strong>Notes:</strong></p>
        <div style="white-space:pre-wrap;background:#f9fafb;border:1px solid #e5e7eb;padding:12px;border-radius:8px">${escapeHtml(params.notes || "-")}</div>
      </div>
    `,
    attachmentBase64Data: params.attachmentBase64Data,
    attachmentName: params.attachmentName,
    attachmentContentType: params.attachmentContentType
  });
}
async function sendContactEmail(params) {
  const subject = params.subject?.trim() || `New contact message from ${params.name}`;
  const lines = [`New contact message from ${params.name}`, `Email: ${params.email}`, `Subject: ${params.subject || "-"}`, "", "Message:", params.message];
  await sendResendEmail({
    subject,
    replyTo: params.email,
    text: lines.join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
        <h2 style="margin:0 0 16px">New contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(params.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(params.email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(params.subject || "-")}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space:pre-wrap;background:#f9fafb;border:1px solid #e5e7eb;padding:12px;border-radius:8px">${escapeHtml(params.message)}</div>
      </div>
    `
  });
}
const contactSchema$1 = objectType({
  name: stringType().trim().min(1).max(100),
  email: stringType().trim().email().max(255),
  subject: stringType().trim().max(150).optional().or(literalType("")),
  message: stringType().trim().min(1).max(2e3)
});
const submitQuote_createServerFn_handler = createServerRpc({
  id: "493fd10f39da2f1597657e562c8b1b87933e1ad9b06279ae8cd5862bd7f4e43d",
  name: "submitQuote",
  filename: "src/lib/quotes.functions.ts"
}, (opts) => submitQuote$1.__executeServer(opts));
const submitQuote$1 = createServerFn({
  method: "POST"
}).inputValidator((input) => quoteSchema$1.parse(input)).handler(submitQuote_createServerFn_handler, async ({
  data
}) => {
  const quoteId = crypto.randomUUID();
  const attachmentBase64 = data.attachmentBase64Data && data.attachmentFileName ? data.attachmentBase64Data.replace(/^data:.*;base64,/, "") : null;
  await sendQuoteEmail({
    quoteId,
    name: data.name,
    company: data.company || null,
    email: data.email,
    phone: data.phone || null,
    boxType: data.boxType,
    dimensions: data.dimensions || null,
    quantity: data.quantity,
    material: data.material || null,
    printing: data.printing || null,
    notes: data.notes || null,
    attachmentName: data.attachmentFileName || null,
    attachmentUrl: null,
    attachmentBase64Data: attachmentBase64,
    attachmentContentType: data.attachmentContentType || null
  });
  return {
    ok: true
  };
});
const submitContact_createServerFn_handler = createServerRpc({
  id: "2b29d856f98914b05ab37002456c56baf2426d0bce267c02156dbba97e51cefd",
  name: "submitContact",
  filename: "src/lib/quotes.functions.ts"
}, (opts) => submitContact$1.__executeServer(opts));
const submitContact$1 = createServerFn({
  method: "POST"
}).inputValidator((input) => contactSchema$1.parse(input)).handler(submitContact_createServerFn_handler, async ({
  data
}) => {
  await sendContactEmail({
    name: data.name,
    email: data.email,
    subject: data.subject || null,
    message: data.message
  });
  return {
    ok: true
  };
});
const quotes_functions = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  submitContact_createServerFn_handler,
  submitQuote_createServerFn_handler
}, Symbol.toStringTag, { value: "Module" }));
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const appCss = "/assets/styles-Ibu8PDgd.css";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function truncateText(value, maxLength = 120) {
  const text = value?.trim() ?? "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const logo = "/assets/logo-C6enifer.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight flex h-20 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "PackifyBoxes", className: "h-12 w-auto" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: "px-3 py-2 text-sm text-ink-muted hover:text-primary transition-colors",
              activeProps: { className: "text-primary" },
              activeOptions: { exact: l.to === "/" },
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Talk to consultant" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", className: "bg-gradient-accent border-0 shadow-soft hover:shadow-glow transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", children: "Get a quote" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Menu",
              className: "md:hidden p-2 -mr-2",
              onClick: () => setOpen((v) => !v),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight py-4 flex flex-col gap-1", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              onClick: () => setOpen(false),
              className: "py-2 text-sm text-ink-muted hover:text-primary transition-colors",
              activeProps: { className: "text-primary font-medium" },
              activeOptions: { exact: l.to === "/" },
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-2 bg-gradient-accent border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", onClick: () => setOpen(false), children: "Get a quote" }) })
        ] }) })
      ]
    }
  );
}
function ClientYear() {
  const [year, setYear] = reactExports.useState("");
  reactExports.useEffect(() => {
    setYear(String((/* @__PURE__ */ new Date()).getFullYear()));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: year || "2025" });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border/60 bg-surface/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight py-16 grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "PackifyBoxes", className: "h-12 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted max-w-sm", children: "Premium custom packaging engineered for ambitious brands. From luxury rigid boxes to sustainable mailers — designed, printed and delivered worldwide." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm text-ink-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1 (555) 010-4242" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "contact@packifyboxes.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "240 Industrial Way, NY" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium mb-3", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-ink-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-primary transition-colors", children: "Products" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-primary transition-colors", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-primary transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium mb-3", children: "Get started" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-ink-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", className: "hover:text-primary transition-colors", children: "Request a quote" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-primary transition-colors", children: "Talk to a consultant" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-muted", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClientYear, {}),
        " PackifyBoxes. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Crafted with care for brands worldwide." })
    ] }) })
  ] });
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-20", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight py-32 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-widest text-primary mb-3", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl mb-3", children: "Page not found - V2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-muted mb-6", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "text-primary underline", children: "Back to home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight py-32 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl mb-3", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-muted mb-6", children: error.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          router2.invalidate();
          reset();
        },
        className: "rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm",
        children: "Try again"
      }
    )
  ] }) });
}
const Route$b = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PackifyBoxes — Premium Custom Packaging for Modern Brands" },
      { name: "description", content: "Custom packaging boxes engineered for ambitious brands — luxury rigid, cosmetic, food, shipping and eco mailers. Get a free consultation and quote." },
      { name: "author", content: "PackifyBoxes" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "PackifyBoxes" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/packify-icon-OG.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PackifyBoxes — Premium Custom Packaging for Modern Brands" },
      { name: "twitter:description", content: "Custom packaging boxes engineered for ambitious brands — luxury rigid, cosmetic, food, shipping and eco mailers." },
      { name: "twitter:image", content: "/packify-icon-OG.png" },
      { name: "theme-color", content: "#f9f7f3" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700&family=Urbanist:wght@500;600;700;800&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PackifyBoxes",
          description: "Premium custom packaging manufacturer for global brands.",
          url: "https://packifyboxes.com/",
          logo: "https://packifyboxes.com/packify-icon-OG.png",
          image: "https://packifyboxes.com/packify-icon-OG.png",
          sameAs: [
            "https://twitter.com/packifyboxes",
            "https://www.instagram.com/packifyboxes",
            "https://www.linkedin.com/company/packifyboxes"
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-010-4242",
            contactType: "sales",
            email: "contact@packifyboxes.com"
          }
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$b.useRouteContext();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isAdminRoute = pathname.startsWith("/admin");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    isAdminRoute ? /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" })
  ] });
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const productSectionSchema = objectType({
  id: stringType().optional(),
  heading: stringType().min(1, "Heading is required"),
  content: stringType().min(1, "Content is required")
});
const productCardSchema = objectType({
  id: stringType().optional(),
  title: stringType().min(1, "Title is required"),
  description: stringType().min(1, "Description is required")
});
const productFeatureSchema = objectType({
  id: stringType().optional(),
  feature: stringType().min(1, "Feature is required")
});
const galleryImageSchema = objectType({
  id: stringType().optional(),
  image_url: stringType().url("Image URL is required"),
  alt_text: stringType().optional().nullable()
});
const productFormSchema = objectType({
  id: stringType().optional(),
  slug: stringType().min(1).max(120),
  title: stringType().min(2, "Title is required"),
  category_id: stringType().min(1, "Category is required"),
  short_description: stringType().min(8, "Short description is required"),
  featured_image: stringType().url().or(literalType("")).optional().nullable(),
  is_featured: booleanType().default(false),
  is_published: booleanType().default(false),
  meta_title: stringType().max(70).optional().nullable(),
  meta_description: stringType().max(165).optional().nullable(),
  content_sections: arrayType(productSectionSchema).default([]),
  box_styles: arrayType(productCardSchema).default([]),
  materials: arrayType(productCardSchema).default([]),
  features: arrayType(productFeatureSchema).default([]),
  gallery_images: arrayType(galleryImageSchema).default([])
});
const listCmsCategories = createServerFn({
  method: "GET"
}).handler(createSsrRpc("f702a9cb2fb5204041cab250808f6606860d848d4f58cd87ae78cef278102673"));
const createCmsCategory = createServerFn({
  method: "POST"
}).inputValidator((input) => objectType({
  name: stringType().min(2, "Category name is required"),
  slug: stringType().min(2, "Category slug is required"),
  description: stringType().optional().nullable()
}).parse(input)).middleware([requireSupabaseAuth]).handler(createSsrRpc("681d6d9dbf235a6b09772c56ee074143f1c415de364158110332779de5c1221b"));
const listCmsProducts = createServerFn({
  method: "GET"
}).handler(createSsrRpc("d2666bcd10312dd4be304290b407515425b19e40dd52318931c6a5e7e3b1c0b9"));
const listPublicProducts = createServerFn({
  method: "GET"
}).handler(createSsrRpc("3202aff87951064a632a7aeaaf251f1050ace87131d03006b866ee2a3e75bc22"));
createServerFn({
  method: "GET"
}).inputValidator((i) => stringType().parse(i)).handler(createSsrRpc("f11f87ee310200aae6ffce0e3163371d8184c18dd2b9cc6d97f6c98a233b81be"));
const getPublicProductBySlug = createServerFn({
  method: "GET"
}).inputValidator((i) => stringType().parse(i)).handler(createSsrRpc("ecc8fbdf6efb93100cabdf2af1cc080756f1323e7633378c286380fa22bb0283"));
createServerFn({
  method: "GET"
}).inputValidator((i) => stringType().uuid().parse(i)).handler(createSsrRpc("01085035bc267745d0d1c718401d278a9a2f19d77fe3a4c4de19136a22d93e30"));
const saveCmsProduct = createServerFn({
  method: "POST"
}).inputValidator((input) => productFormSchema.parse(input)).middleware([requireSupabaseAuth]).handler(createSsrRpc("3e67d37a22277858f850aeb98f8ae4daa9cc45b9db544f22e0ae2c38bf87c320"));
const deleteCmsProduct = createServerFn({
  method: "POST"
}).inputValidator((input) => stringType().uuid().parse(input)).middleware([requireSupabaseAuth]).handler(createSsrRpc("9bc619d8c670a1c0a19e4778c7a46fb3a960afc9f22121da5e21bf58c1944d75"));
const uploadCmsImageBase64 = createServerFn({
  method: "POST"
}).inputValidator((input) => objectType({
  fileName: stringType().min(1),
  contentType: stringType().min(1),
  base64Data: stringType().min(1)
}).parse(input)).middleware([requireSupabaseAuth]).handler(createSsrRpc("7edd74d38c9bf72238aea5c548f501d1d63109682c9622c15d531e278d39dc8f"));
const BASE_URL = "https://packifyboxes.com";
const entries = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/products", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/quote", priority: "0.9", changefreq: "monthly" }
];
const Route$a = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const products2 = await listPublicProducts({ data: void 0 });
        const productPaths = products2.map((p) => ({
          path: `/products/${p.slug}`,
          priority: "0.7",
          changefreq: "monthly"
        }));
        const all = [...entries, ...productPaths];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...all.map(
            (e) => [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              `  </url>`
            ].join("\n")
          ),
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$9 = () => Promise.resolve().then(() => quote);
const Route$9 = createFileRoute("/quote")({
  head: () => ({
    meta: [{
      title: "Request a Quote — PackifyBoxes"
    }, {
      name: "description",
      content: "Get a free, tailored quote for your custom packaging project. Reply within 24 hours with samples, materials and pricing."
    }, {
      property: "og:title",
      content: "Request a Quote — PackifyBoxes"
    }, {
      property: "og:description",
      content: "Free custom packaging quote in under 24 hours."
    }, {
      property: "og:url",
      content: "https://packifyboxes.com/quote"
    }, {
      property: "og:image",
      content: "/packify-icon-OG.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Request a Quote — PackifyBoxes"
    }, {
      name: "twitter:description",
      content: "Get a free, tailored quote for your custom packaging project. Reply within 24 hours with samples, materials and pricing."
    }, {
      name: "twitter:image",
      content: "/packify-icon-OG.png"
    }],
    links: [{
      rel: "canonical",
      href: "/quote"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => Promise.resolve().then(() => products);
const Route$8 = createFileRoute("/products")({
  head: () => ({
    meta: [{
      title: "Products — Custom Packaging Boxes | PackifyBoxes"
    }, {
      name: "description",
      content: "Explore premium custom packaging products with modern materials, box styles, and dynamic content sections."
    }, {
      property: "og:title",
      content: "Custom Packaging Products — PackifyBoxes"
    }, {
      property: "og:description",
      content: "Luxury, cosmetic, food, shipping, retail and eco packaging boxes."
    }, {
      property: "og:url",
      content: "https://packifyboxes.com/products"
    }, {
      property: "og:image",
      content: "/packify-icon-OG.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Products — Custom Packaging Boxes | PackifyBoxes"
    }, {
      name: "twitter:description",
      content: "Explore premium custom packaging products with modern materials, box styles, and dynamic content sections."
    }, {
      name: "twitter:image",
      content: "/packify-icon-OG.png"
    }],
    links: [{
      rel: "canonical",
      href: "/products"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => Promise.resolve().then(() => contact);
const Route$7 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — PackifyBoxes"
    }, {
      name: "description",
      content: "Get in touch with PackifyBoxes for custom packaging consultations, samples and quotes. Our team replies within 24 hours."
    }, {
      property: "og:title",
      content: "Contact PackifyBoxes"
    }, {
      property: "og:description",
      content: "Talk to a packaging consultant — free, no obligation."
    }, {
      property: "og:url",
      content: "https://packifyboxes.com/contact"
    }, {
      property: "og:image",
      content: "/packify-icon-OG.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Contact PackifyBoxes"
    }, {
      name: "twitter:description",
      content: "Get in touch with PackifyBoxes for custom packaging consultations, samples and quotes. Our team replies within 24 hours."
    }, {
      name: "twitter:image",
      content: "/packify-icon-OG.png"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => Promise.resolve().then(() => about);
const Route$6 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — PackifyBoxes"
    }, {
      name: "description",
      content: "PackifyBoxes is a premium custom packaging studio helping ambitious brands ship memorable products since 2015."
    }, {
      property: "og:title",
      content: "About — PackifyBoxes"
    }, {
      property: "og:description",
      content: "A premium custom packaging studio for ambitious brands."
    }, {
      property: "og:url",
      content: "https://packifyboxes.com/about"
    }, {
      property: "og:image",
      content: "/packify-icon-OG.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "About — PackifyBoxes"
    }, {
      name: "twitter:description",
      content: "PackifyBoxes is a premium custom packaging studio helping ambitious brands ship memorable products since 2015."
    }, {
      name: "twitter:image",
      content: "/packify-icon-OG.png"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => Promise.resolve().then(() => index);
const Route$5 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "PackifyBoxes — Premium Custom Packaging Boxes"
    }, {
      name: "description",
      content: "Custom packaging boxes engineered for ambitious brands. Luxury rigid, cosmetic, food, shipping, retail and eco mailers — free consultation and fast quotes."
    }, {
      property: "og:title",
      content: "PackifyBoxes — Premium Custom Packaging"
    }, {
      property: "og:description",
      content: "Premium custom packaging for modern brands. Free consultation and quote."
    }, {
      property: "og:url",
      content: "https://packifyboxes.com/"
    }, {
      property: "og:image",
      content: "/packify-icon-OG.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "PackifyBoxes — Premium Custom Packaging Boxes"
    }, {
      name: "twitter:description",
      content: "Custom packaging boxes engineered for ambitious brands. Luxury rigid, cosmetic, food, shipping, retail and eco mailers."
    }, {
      name: "twitter:image",
      content: "/packify-icon-OG.png"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => Promise.resolve().then(() => admin_index);
const Route$4 = createFileRoute("/admin/")({
  head: () => ({
    meta: [{
      title: "Admin Panel — PackifyBoxes"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitNotFoundComponentImporter = () => Promise.resolve().then(() => products_$slug$1);
const $$splitComponentImporter$3 = () => Promise.resolve().then(() => products_$slug);
const Route$3 = createFileRoute("/products/$slug")({
  loader: async ({
    params
  }) => {
    const product = await getPublicProductBySlug({
      data: params.slug
    });
    if (!product) throw notFound();
    const allProducts = await listPublicProducts({
      data: void 0
    });
    const related = product.category_id ? allProducts.filter((item) => item.slug !== product.slug && item.category_id === product.category_id).slice(0, 3) : [];
    return {
      product,
      related
    };
  },
  head: ({
    loaderData
  }) => {
    const product = loaderData?.product;
    return {
      meta: [{
        title: product ? `${product.title} — PackifyBoxes` : "Product — PackifyBoxes"
      }, {
        name: "description",
        content: product?.short_description ?? "Premium custom packaging product."
      }, {
        property: "og:title",
        content: product?.title ?? "Product"
      }, {
        property: "og:description",
        content: product?.short_description ?? "Premium custom packaging product."
      }, {
        property: "og:type",
        content: "product"
      }, {
        property: "og:url",
        content: product ? `https://packifyboxes.com/products/${product.slug}` : "https://packifyboxes.com/products"
      }, {
        property: "og:image",
        content: product?.featured_image || "/packify-icon-OG.png"
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: product?.title ?? "Product"
      }, {
        name: "twitter:description",
        content: product?.short_description ?? "Premium custom packaging product."
      }, {
        name: "twitter:image",
        content: product?.featured_image || "/packify-icon-OG.png"
      }],
      links: product ? [{
        rel: "canonical",
        href: `/products/${product.slug}`
      }] : [],
      scripts: product ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.title,
          description: product.short_description,
          image: product.featured_image,
          category: product.category?.name,
          brand: {
            "@type": "Brand",
            name: "PackifyBoxes"
          }
        })
      }] : []
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const $$splitComponentImporter$2 = () => Promise.resolve().then(() => admin__resetPassword);
const Route$2 = createFileRoute("/admin_/reset-password")({
  head: () => ({
    meta: [{
      title: "Set New Admin Password — PackifyBoxes"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => Promise.resolve().then(() => admin__login);
const Route$1 = createFileRoute("/admin_/login")({
  head: () => ({
    meta: [{
      title: "Admin Login — PackifyBoxes"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => Promise.resolve().then(() => admin__forgotPassword);
const Route = createFileRoute("/admin_/forgot-password")({
  head: () => ({
    meta: [{
      title: "Reset Admin Password — PackifyBoxes"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$a.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$b
});
const QuoteRoute = Route$9.update({
  id: "/quote",
  path: "/quote",
  getParentRoute: () => Route$b
});
const ProductsRoute = Route$8.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$b
});
const ContactRoute = Route$7.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$b
});
const AboutRoute = Route$6.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$b
});
const IndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const AdminIndexRoute = Route$4.update({
  id: "/admin/",
  path: "/admin/",
  getParentRoute: () => Route$b
});
const ProductsSlugRoute = Route$3.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ProductsRoute
});
const AdminResetPasswordRoute = Route$2.update({
  id: "/admin_/reset-password",
  path: "/admin/reset-password",
  getParentRoute: () => Route$b
});
const AdminLoginRoute = Route$1.update({
  id: "/admin_/login",
  path: "/admin/login",
  getParentRoute: () => Route$b
});
const AdminForgotPasswordRoute = Route.update({
  id: "/admin_/forgot-password",
  path: "/admin/forgot-password",
  getParentRoute: () => Route$b
});
const ProductsRouteChildren = {
  ProductsSlugRoute
};
const ProductsRouteWithChildren = ProductsRoute._addFileChildren(
  ProductsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ProductsRoute: ProductsRouteWithChildren,
  QuoteRoute,
  SitemapDotxmlRoute,
  AdminForgotPasswordRoute,
  AdminLoginRoute,
  AdminResetPasswordRoute,
  AdminIndexRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
function createSupabaseClient() {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    const missing = [
      ...!SUPABASE_URL ? ["SUPABASE_URL"] : [],
      ...!SUPABASE_PUBLISHABLE_KEY ? ["SUPABASE_PUBLISHABLE_KEY"] : []
    ];
    const message = `Missing Supabase environment variable(s): ${missing.join(", ")}. Configure Supabase environment variables in your project settings.`;
    console.error(`[Supabase] ${message}`);
    throw new Error(message);
  }
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      storage: typeof window !== "undefined" ? localStorage : void 0,
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
let _supabase;
const supabase = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  }
});
const attachSupabaseAuth = createMiddleware({ type: "function" }).client(
  async ({ next }) => {
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    return next({
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
  }
);
const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(error), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
});
const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
  functionMiddleware: [attachSupabaseAuth]
}));
const start = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  startInstance
}, Symbol.toStringTag, { value: "Module" }));
var pluginSerializationAdapters = [];
var hasPluginAdapters = false;
const emptyPluginAdapters = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasPluginAdapters,
  pluginSerializationAdapters
}, Symbol.toStringTag, { value: "Module" }));
const quoteSchema = objectType({
  name: stringType().trim().min(1).max(100),
  company: stringType().trim().max(150).optional().or(literalType("")),
  email: stringType().trim().email().max(255),
  phone: stringType().trim().max(40).optional().or(literalType("")),
  boxType: stringType().trim().min(1).max(100),
  dimensions: stringType().trim().max(120).optional().or(literalType("")),
  quantity: numberType().int().min(1).max(1e7),
  material: stringType().trim().max(80).optional().or(literalType("")),
  printing: stringType().trim().max(80).optional().or(literalType("")),
  notes: stringType().trim().max(2e3).optional().or(literalType("")),
  attachmentFileName: stringType().trim().max(255).optional().or(literalType("")),
  attachmentContentType: stringType().trim().max(100).optional().or(literalType("")),
  attachmentBase64Data: stringType().optional().or(literalType(""))
});
const contactSchema = objectType({
  name: stringType().trim().min(1).max(100),
  email: stringType().trim().email().max(255),
  subject: stringType().trim().max(150).optional().or(literalType("")),
  message: stringType().trim().min(1).max(2e3)
});
const submitQuote = createServerFn({
  method: "POST"
}).inputValidator((input) => quoteSchema.parse(input)).handler(createSsrRpc("493fd10f39da2f1597657e562c8b1b87933e1ad9b06279ae8cd5862bd7f4e43d"));
const submitContact = createServerFn({
  method: "POST"
}).inputValidator((input) => contactSchema.parse(input)).handler(createSsrRpc("2b29d856f98914b05ab37002456c56baf2426d0bce267c02156dbba97e51cefd"));
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Select = Root2;
const SelectValue = Value;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = Trigger.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Content2,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = Content2.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = Label$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
    ]
  }
));
SelectItem.displayName = Item.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = Separator.displayName;
const schema$1 = objectType({
  name: stringType().min(1, "Required").max(100),
  company: stringType().max(150).optional(),
  email: stringType().email("Valid email required"),
  phone: stringType().max(40).optional(),
  boxType: stringType().min(1, "Pick a box type"),
  dimensions: stringType().max(120).optional(),
  quantity: coerce.number().int().min(1, "Min 1").max(1e7),
  material: stringType().optional(),
  printing: stringType().optional(),
  notes: stringType().max(2e3).optional(),
  attachmentFileName: stringType().optional(),
  attachmentContentType: stringType().optional(),
  attachmentBase64Data: stringType().optional()
});
const BOX_TYPES = ["Cosmetic", "Food", "Shipping", "Luxury / Rigid", "Retail / Product", "Custom"];
const MATERIALS = ["Kraft", "Corrugated", "Cardboard (SBS)", "Rigid Board", "Recycled Eco", "Custom"];
const PRINTING = ["Offset", "Digital", "UV Coating", "Foil Stamping", "Embossing", "Custom"];
function QuoteForm({ compact = false }) {
  const [done, setDone] = reactExports.useState(false);
  const [selectedFile, setSelectedFile] = reactExports.useState(null);
  const send = useServerFn(submitQuote);
  const form = useForm({
    resolver: u(schema$1),
    defaultValues: { name: "", email: "", boxType: "", quantity: 500 }
  });
  const handleFileChange = async (event) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    if (!file) {
      form.setValue("attachmentFileName", void 0);
      form.setValue("attachmentContentType", void 0);
      form.setValue("attachmentBase64Data", void 0);
      return;
    }
    const base64Data = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error("Unable to read file"));
      reader.readAsDataURL(file);
    });
    form.setValue("attachmentFileName", file.name);
    form.setValue("attachmentContentType", file.type || "application/octet-stream");
    form.setValue("attachmentBase64Data", base64Data);
  };
  const onSubmit = async (values2) => {
    try {
      await send({ data: values2 });
      setDone(true);
      toast.success("Quote request sent — we'll reply within 24h.");
      form.reset();
      setSelectedFile(null);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong");
    }
  };
  if (done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-8 text-center shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-12 w-12 rounded-full bg-primary/10 grid place-items-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: "Request received" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted mb-5", children: "A packaging consultant will reach out within one business day with samples and a tailored quote." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setDone(false), children: "Submit another" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: form.handleSubmit(onSubmit),
      className: compact ? "space-y-4" : "rounded-2xl border bg-card p-6 md:p-8 shadow-soft space-y-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", error: form.formState.errors.name?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...form.register("name"), placeholder: "Jane Cooper" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...form.register("company"), placeholder: "Acme Co." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", error: form.formState.errors.email?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", ...form.register("email"), placeholder: "you@brand.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "tel", ...form.register("phone"), placeholder: "+1 555 010 4242" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Box type", error: form.formState.errors.boxType?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.watch("boxType"),
              onValueChange: (v) => form.setValue("boxType", v, { shouldValidate: true }),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Choose…" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BOX_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Quantity", error: form.formState.errors.quantity?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 1, ...form.register("quantity") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Dimensions (LxWxH mm)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...form.register("dimensions"), placeholder: "200 x 150 x 80" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Material", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.watch("material") ?? "", onValueChange: (v) => form.setValue("material", v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Choose…" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: MATERIALS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Printing", className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.watch("printing") ?? "", onValueChange: (v) => form.setValue("printing", v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Choose…" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PRINTING.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: "Reference file (optional)", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "file",
              accept: "image/*,.pdf",
              onChange: handleFileChange
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ink-muted mt-1", children: "Upload a sketch, reference image or PDF if it helps explain your idea." }),
          selectedFile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-ink-muted mt-1", children: [
            "Selected: ",
            selectedFile.name
          ] }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Additional notes", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, ...form.register("notes"), placeholder: "Tell us about your brand, timeline, references…" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "submit",
            size: "lg",
            disabled: form.formState.isSubmitting,
            className: "w-full bg-gradient-accent border-0 shadow-soft hover:shadow-glow transition-all",
            children: [
              form.formState.isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin mr-2" }) : null,
              "Send my quote request"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ink-muted text-center", children: "We typically respond in under 24 hours. Free consultation included." })
      ]
    }
  );
}
function Field({
  label,
  children,
  error,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `space-y-1.5 ${className ?? ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium text-ink-muted uppercase tracking-wide", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: error })
  ] });
}
const variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};
function Reveal({
  children,
  delay = 0,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-80px" },
      variants,
      transition: { delay },
      children
    }
  );
}
function Stagger({
  children,
  className,
  delayChildren = 0,
  stagger = 0.08
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true, margin: "-60px" },
      variants: {
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } }
      },
      children
    }
  );
}
function StaggerItem({
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className, variants, initial: false, children });
}
const perks = [{
  icon: Clock,
  title: "24h response",
  desc: "A consultant replies within one business day."
}, {
  icon: MessageSquareQuote,
  title: "Tailored guidance",
  desc: "We refine materials, finishes and pricing around your brief."
}, {
  icon: Shield,
  title: "No obligation",
  desc: "Quotes are free, detailed and fully transparent."
}];
function QuotePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 bg-gradient-hero min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight grid lg:grid-cols-2 gap-12 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-3", children: "Request a quote" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl text-balance leading-[1.05]", children: "Tell us about your box. We'll do the rest." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-ink-muted max-w-md", children: "Share a few details and a packaging consultant will follow up with materials, finishes, samples and pricing — within 24 hours." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 space-y-5", children: perks.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted mt-0.5", children: p.desc })
        ] })
      ] }, p.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuoteForm, {}) })
  ] }) });
}
const quote = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: QuotePage
}, Symbol.toStringTag, { value: "Module" }));
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("animate-pulse rounded-md bg-primary/10", className), ...props });
}
const AspectRatio = Root$4;
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
function ProductCard({
  product,
  className,
  showStatus = false
}) {
  const image = product.featured_image || product.category?.image_url || "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/products/$slug",
      params: { slug: product.slug },
      className: cn(
        "group flex h-full min-h-128 flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AspectRatio, { ratio: 4 / 3, children: image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image,
            alt: product.title,
            className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
            loading: "lazy"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mx-auto h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-muted", children: "PackifyBoxes" })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-between space-y-4 border-t bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: product.category?.name ?? "Packaging" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl leading-tight text-foreground text-balance", children: product.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "min-h-18 text-sm leading-6 text-ink-muted", children: truncateText(product.short_description ?? "Premium packaging designed for modern brands.", 120) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            showStatus && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: product.is_published ? "default" : "secondary", children: product.is_published ? "Published" : "Draft" }),
              product.is_featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Featured" })
            ] }),
            !showStatus && product.is_featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Featured" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto rounded-full border border-border bg-background p-2 text-primary transition-transform duration-300 group-hover:translate-x-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }) })
          ] })
        ] })
      ]
    }
  );
}
const cosmetic = "/assets/cat-cosmetic-CdYDYfiM.jpg";
const food = "/assets/cat-food-CA6WOI_t.jpg";
const shipping = "/assets/cat-shipping-DOVu32CW.jpg";
const luxury = "/assets/cat-luxury-CLAxY9-G.jpg";
const retail = "/assets/cat-retail-6yq9_vvw.jpg";
const eco = "/assets/cat-eco-CjBJmuC7.jpg";
const categories = [
  { value: "cosmetic", label: "Cosmetic Boxes", image: cosmetic, blurb: "Soft-touch finishes, embossed logos, foiled details." },
  { value: "food", label: "Food Packaging", image: food, blurb: "Food-safe kraft, grease-resistant inks, custom dielines." },
  { value: "shipping", label: "Shipping Boxes", image: shipping, blurb: "Durable corrugated mailers built for the journey." },
  { value: "luxury", label: "Luxury Boxes", image: luxury, blurb: "Rigid construction, magnetic closures, premium liners." },
  { value: "product", label: "Retail Packaging", image: retail, blurb: "Shelf-ready product boxes with premium printing." },
  { value: "custom", label: "Eco Packaging", image: eco, blurb: "Recycled fibers, soy inks, fully compostable options." }
];
const materialsInfo = [
  { name: "Kraft", desc: "Natural, sustainable, recognizable — perfect for eco brands and food." },
  { name: "Corrugated", desc: "Single or double-wall protection for shipping and ecommerce." },
  { name: "Cardboard (SBS)", desc: "Smooth, bright white substrate ideal for premium printing." },
  { name: "Rigid Board", desc: "Heavyweight wrapped board for luxury gift and product boxes." },
  { name: "Recycled Eco", desc: "Post-consumer fibers and compostable coatings." },
  { name: "Custom", desc: "Need a specific substrate? We source materials to match your brief." }
];
const printingInfo = [
  { name: "Offset", desc: "Photographic quality CMYK with Pantone matching at any volume." },
  { name: "UV Coating", desc: "Spot or full UV for a glossy, tactile highlight." },
  { name: "Foil Stamping", desc: "Gold, silver, rose and holographic foils." },
  { name: "Embossing", desc: "Raised tactile elements for true premium feel." },
  { name: "Digital", desc: "Short runs, variable data, fast turnarounds." },
  { name: "Custom", desc: "Tell us the effect you want and we’ll build the print finish around it." }
];
function ProductsRouteShell() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname
  });
  const isDetailRoute = pathname.startsWith("/products/") && pathname !== "/products/";
  if (isDetailRoute) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProductsPage, {});
}
function ProductsPage() {
  const fetchProducts = useServerFn(listPublicProducts);
  const fetchCategories = useServerFn(listCmsCategories);
  const [search, setSearch] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("all");
  const [page, setPage] = reactExports.useState(1);
  const deferredSearch = reactExports.useDeferredValue(search);
  reactExports.useEffect(() => {
    setPage(1);
  }, [category, deferredSearch]);
  const {
    data: products2 = [],
    isLoading: productsLoading
  } = useQuery({
    queryKey: ["public", "products"],
    queryFn: async () => fetchProducts()
  });
  const {
    data: categories$1 = []
  } = useQuery({
    queryKey: ["public", "categories"],
    queryFn: () => fetchCategories()
  });
  const [clientProducts, setClientProducts] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!productsLoading && products2.length === 0) {
      fetchProducts().then((res) => setClientProducts(Array.isArray(res) ? res : [])).catch(() => setClientProducts([]));
    }
  }, [productsLoading, products2.length, fetchProducts]);
  reactExports.useEffect(() => {
    let mounted = true;
    fetchProducts().then((res) => mounted && setClientProducts(Array.isArray(res) ? res : [])).catch(() => mounted && setClientProducts([]));
    return () => {
      mounted = false;
    };
  }, []);
  const renderedProducts = clientProducts ?? products2;
  const categoryOptions = categories$1.length > 0 ? categories$1 : categories.map((category2) => ({
    id: category2.value,
    slug: category2.value,
    name: category2.label,
    description: category2.blurb,
    image_url: category2.image,
    sort_order: null,
    created_at: "",
    updated_at: null
  }));
  const filteredProducts = reactExports.useMemo(() => {
    const term = deferredSearch.trim().toLowerCase();
    return renderedProducts.filter((product) => {
      const matchesTerm = !term || [product.title, product.slug, product.short_description, product.category?.name].filter(Boolean).some((value) => String(value).toLowerCase().includes(term));
      const matchesCategory = category === "all" || product.category_id === category;
      return matchesTerm && matchesCategory;
    });
  }, [category, deferredSearch, renderedProducts]);
  const pageSize = 9;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visibleProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-16 top-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight relative py-20 md:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: "Products" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 max-w-4xl font-display text-5xl leading-[1.02] text-balance md:text-7xl", children: "Premium packaging, organized perfectly for your brand." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-lg text-ink-muted", children: "Browse our packaging products by category, search by box type, and jump into product details to find the exact structure for your brand." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { title: "Published products", value: products2.filter((product) => product.is_published).length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { title: "Featured products", value: products2.filter((product) => product.is_featured).length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { title: "Categories", value: categoryOptions.length })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 rounded-3xl border bg-card p-4 shadow-soft lg:grid-cols-[1.5fr_0.8fr] xl:grid-cols-[1.5fr_0.8fr_0.8fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: search, onChange: (event) => setSearch(event.target.value), placeholder: "Search products, slugs, descriptions, categories", className: "pl-9" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: category, onValueChange: setCategory, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Filter by category" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All categories" }),
            categoryOptions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: item.id, children: item.name }, item.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "justify-start", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/quote", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4" }),
          " Request a quote"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3", children: [
        productsLoading && Array.from({
          length: 6
        }).map((_, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-128 rounded-3xl" }) }, index2)),
        !productsLoading && visibleProducts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full rounded-3xl border bg-card p-12 text-center shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "No products found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-ink-muted", children: "Try a different search or clear the category filter." })
        ] }),
        !productsLoading && visibleProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }) }, product.id))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-3xl border bg-card p-4 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Showing ",
          visibleProducts.length,
          " of ",
          filteredProducts.length,
          " products"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setPage((value) => Math.max(1, value - 1)), disabled: currentPage === 1, children: "Previous" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
            "Page ",
            currentPage,
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setPage((value) => Math.min(totalPages, value + 1)), disabled: currentPage === totalPages, children: "Next" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading$1, { title: "Materials", eyebrow: "From sustainable kraft to luxury rigid board.", description: "We stock every common substrate and source specialty materials on request. Not sure which to pick? Our consultants will recommend the best fit." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemGrid, { items: materialsInfo }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading$1, { title: "Printing & finishes", eyebrow: "Print, foil, emboss — done in-house.", description: "Five core techniques, infinite combinations. Mix and match to land on a finish that's unmistakably yours." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemGrid, { items: printingInfo })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-4 md:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-accent p-8 text-primary-foreground shadow-elegant md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-72 w-72 rounded-full bg-background/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-foreground/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center gap-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary-foreground/70", children: "Custom quote" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl text-balance md:text-5xl", children: "Didn't find exactly what you need? We'll build it for you." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-primary-foreground/85", children: "Tell us the box style, material, and finish you have in mind, and our team will put together a custom quote tailored to your project." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-background text-foreground hover:bg-background/90 border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", children: "Request a custom quote" }) })
      ] })
    ] }) }) })
  ] });
}
function StatCard({
  title,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
    y: -4
  }, transition: {
    duration: 0.25
  }, className: "rounded-3xl border bg-card p-5 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-4xl", children: value })
  ] });
}
function SectionHeading$1({
  title,
  eyebrow,
  description
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl text-balance md:text-5xl", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-3xl text-ink-muted", children: description })
  ] });
}
function ItemGrid({
  items
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-card p-6 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: item.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-6 text-ink-muted", children: item.desc })
  ] }, item.name)) });
}
const products = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: ProductsRouteShell
}, Symbol.toStringTag, { value: "Module" }));
const schema = objectType({
  name: stringType().min(1).max(100),
  email: stringType().email(),
  subject: stringType().max(150).optional(),
  message: stringType().min(1).max(2e3)
});
function ContactForm() {
  const [done, setDone] = reactExports.useState(false);
  const send = useServerFn(submitContact);
  const form = useForm({ resolver: u(schema), defaultValues: { name: "", email: "", message: "" } });
  const onSubmit = async (values2) => {
    try {
      await send({ data: values2 });
      setDone(true);
      toast.success("Message sent");
      form.reset();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong");
    }
  };
  if (done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-8 text-center shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-12 w-12 rounded-full bg-primary/10 grid place-items-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: "Thanks for reaching out" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted mb-5", children: "We'll get back to you shortly." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setDone(false), children: "Send another" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "rounded-2xl border bg-card p-6 md:p-8 shadow-soft space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs uppercase tracking-wide text-ink-muted", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...form.register("name") }),
        form.formState.errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: "Required" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs uppercase tracking-wide text-ink-muted", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", ...form.register("email") }),
        form.formState.errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: "Valid email required" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs uppercase tracking-wide text-ink-muted", children: "Subject" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...form.register("subject"), placeholder: "What can we help with?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs uppercase tracking-wide text-ink-muted", children: "Message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 5, ...form.register("message") }),
      form.formState.errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: "Required" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: form.formState.isSubmitting, className: "bg-gradient-accent border-0 w-full sm:w-auto", children: [
      form.formState.isSubmitting && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin mr-2" }),
      "Send message"
    ] })
  ] });
}
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 bg-gradient-hero min-h-[80vh]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight grid lg:grid-cols-2 gap-12 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-3", children: "Contact us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl text-balance leading-[1.05]", children: "Talk to a packaging consultant." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-ink-muted max-w-md", children: "Tell us about your product. We'll recommend materials, finishes and dimensions — free, no obligation, reply within 24 hours." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "mt-10 space-y-5", children: [{
        icon: Mail,
        label: "Email",
        value: "contact@packifyboxes.com"
      }, {
        icon: Phone,
        label: "Phone",
        value: "+1 (555) 010-4242"
      }, {
        icon: MapPin,
        label: "Office",
        value: "240 Industrial Way, Brooklyn NY 11217"
      }, {
        icon: Clock,
        label: "Hours",
        value: "Mon–Fri, 9am–6pm ET"
      }].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(i.icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs uppercase tracking-wide text-ink-muted", children: i.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-sm font-medium mt-0.5", children: i.value })
        ] })
      ] }, i.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}) })
  ] }) });
}
const contact = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: ContactPage
}, Symbol.toStringTag, { value: "Module" }));
const values = [{
  icon: Award,
  title: "Craft",
  desc: "Every box is treated like a brand asset, not a commodity."
}, {
  icon: Heart,
  title: "Partnership",
  desc: "We work as an extension of your team, from sketch to shipment."
}, {
  icon: Recycle,
  title: "Responsibility",
  desc: "Sustainable materials and processes are the default, not the upsell."
}, {
  icon: Sparkles,
  title: "Detail",
  desc: "Foil registration, color matching, fit and finish — obsessively."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-tight py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-3", children: "Our story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-7xl max-w-3xl text-balance leading-[1.02]", children: "We build packaging that makes products feel like the gift they are." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-ink-muted", children: "Packify Boxes was founded with the vision of helping businesses strengthen their brand identity through premium custom packaging solutions. We believe that packaging is more than just a container — it is a powerful representation of a brand and often the first impression a customer experiences." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-lg text-ink-muted", children: "With a strong focus on innovation, quality, and functionality, we create packaging solutions that not only protect products but also enhance brand presentation and customer engagement. Our commitment to excellence ensures that every packaging design reflects professionalism, creativity, and attention to detail." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight grid lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:sticky lg:top-24 lg:self-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-3", children: "Why we exist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-balance", children: "Mission & values" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: "Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-muted", children: "To make premium custom packaging accessible — so any brand, at any volume, can ship something worth opening." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.05, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: "Vision" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-muted", children: "A world where every box your customer receives feels intentional, sustainable and unmistakably yours." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid sm:grid-cols-2 gap-5", children: values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-6 shadow-soft h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-xl mb-1", children: v.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted", children: v.desc })
        ] }) }, v.title)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gradient-dark text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-tight grid sm:grid-cols-2 lg:grid-cols-4 gap-8", children: [{
      num: "10+",
      label: "Years of team experience"
    }, {
      num: "1,200+",
      label: "Premium products delivered"
    }, {
      num: "500+",
      label: "Unique designs & variations"
    }, {
      num: "60+",
      label: "Countries we ship to"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-5xl text-background", children: s.num }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-background/60 mt-2", children: s.label })
    ] }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-tight text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-balance max-w-2xl mx-auto", children: "Let's talk about your next launch." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-accent border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/quote", children: [
          "Get a quote ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Talk to a consultant" }) })
      ] })
    ] }) }) })
  ] });
}
const about = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: AboutPage
}, Symbol.toStringTag, { value: "Module" }));
const heroImg = "/assets/hero-boxes-w2YvKlQQ.jpg";
const trust = [{
  icon: ShieldCheck,
  title: "Quality guaranteed",
  desc: "ISO-grade materials, pre-production samples on every order."
}, {
  icon: Truck,
  title: "Fast worldwide delivery",
  desc: "10–14 day production, DDP shipping to 60+ countries."
}, {
  icon: Layers,
  title: "Premium materials",
  desc: "From rigid greyboard to FSC-certified recycled stock."
}, {
  icon: Sparkles,
  title: "Custom branding",
  desc: "Foil, emboss, spot UV, Pantone matching — done in-house."
}];
const services = [{
  icon: Boxes,
  title: "Custom Packaging",
  desc: "Built to your dieline, brand and product spec."
}, {
  icon: Sparkles,
  title: "Luxury Boxes",
  desc: "Rigid wrapped construction with magnetic closures."
}, {
  icon: Layers,
  title: "Product Packaging",
  desc: "Retail-ready folding cartons in any volume."
}, {
  icon: Leaf,
  title: "Eco Packaging",
  desc: "Recycled stock, soy inks, fully compostable options."
}, {
  icon: Printer,
  title: "Printing Solutions",
  desc: "Offset, digital, foil, embossing and spot UV."
}, {
  icon: Truck,
  title: "Bulk Orders",
  desc: "Volume pricing from 500 to 500,000 units."
}];
const testimonials = [{
  name: "Maya Chen",
  role: "Founder, Bloom Skincare",
  quote: "Our unboxing went from forgettable to a hero on TikTok. PackifyBoxes nailed the brief on the first sample."
}, {
  name: "Daniel Park",
  role: "Head of Ops, Northshift Co.",
  quote: "Reliable, fast, and the print quality is genuinely premium. They feel like an extension of our team."
}, {
  name: "Aisha Rahman",
  role: "Brand Lead, Olea & Co.",
  quote: "The consultant guided us through materials we'd never have considered. Cost down 22%, perceived value way up."
}];
function HomePage() {
  const fetchProducts = useServerFn(listPublicProducts);
  const {
    data: featuredProducts = [],
    isLoading
  } = useQuery({
    queryKey: ["home", "featured-products"],
    queryFn: () => fetchProducts()
  });
  const visibleFeaturedProducts = featuredProducts.filter((product) => product.is_featured);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight pt-20 pb-24 md:pt-32 md:pb-32 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1]
        }, className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/70 backdrop-blur px-3 py-1.5 text-xs text-ink-muted mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
          "Trusted by brands worldwide"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance", children: [
          "Packaging that makes ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-primary not-italic font-extrabold", children: "your brand" }),
          " impossible to forget."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-ink-muted max-w-xl", children: "Custom boxes designed, printed and delivered for modern brands. From luxury rigid gift boxes to eco-friendly mailers — engineered in-house, shipped worldwide." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 24
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          delay: 0.25
        }, className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-accent border-0 shadow-elegant hover:shadow-glow transition-all group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/quote", children: [
            "Get a custom quote",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-2 h-4 w-4" }),
            " Talk to a consultant"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          duration: 1,
          delay: 0.5
        }, className: "mt-10 flex items-center gap-6 text-xs text-ink-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({
              length: 5
            }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-primary text-primary" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "4.9/5 from 800+ brands" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block h-3 w-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Pre-production samples available" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 bg-gradient-accent opacity-20 blur-3xl rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-3xl overflow-hidden shadow-elegant border border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Premium custom packaging boxes — luxury rigid, kraft and cosmetic", width: 1600, height: 1280, className: "w-full h-auto object-cover", fetchPriority: "high", loading: "eager" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          delay: 0.8
        }, className: "absolute -bottom-5 -left-5 rounded-2xl bg-surface-elevated border border-border shadow-elegant p-4 max-w-50 hidden sm:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display", children: "10–14 days" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ink-muted mt-1", children: "Average production time" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/60 bg-surface/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-tight py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8", children: trust.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(StaggerItem, { className: "flex gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: t.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted mt-1", children: t.desc })
      ] })
    ] }, t.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-3", children: "What we do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl max-w-2xl text-balance", children: "Multiple packaging services. One studio. End-to-end." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-2xl border bg-card p-7 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-grid place-items-center h-11 w-11 rounded-xl bg-gradient-accent text-primary-foreground mb-5 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted", children: s.desc })
      ] }) }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 bg-surface/50 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-3", children: "Featured categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl max-w-2xl text-balance", children: "Explore some of our favorite recent packaging projects." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", children: [
          "Browse all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
        ] }) }) })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: Array.from({
        length: 3
      }).map((_, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full min-h-128 rounded-3xl border bg-card shadow-soft" }, index2)) }) : visibleFeaturedProducts.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: visibleFeaturedProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }) }, product.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-card p-8 text-center shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: "No featured products yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-muted", children: "Mark a product as featured in the admin panel and it will appear here automatically." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 bg-gradient-dark text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-3", children: "Free consultation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-balance text-background", children: "Not sure where to start? Our packaging consultants will guide you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-background/70 max-w-lg", children: "Tell us about your product and brand. Within 24 hours, a packaging consultant will recommend materials, finishes and dieline — completely free, no obligation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-primary border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Book a free call" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "bg-transparent text-background border-background/30 hover:bg-background/10 hover:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", children: "Request a quote" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [{
        num: "Free Shipping",
        label: "Across United States"
      }, {
        num: "Certain Charges",
        label: "for Shipping World Wide"
      }, {
        num: "24h",
        label: "Avg response"
      }, {
        num: "60+",
        label: "Countries delivered"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl text-background", children: s.num }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-background/60 mt-1", children: s.label })
      ] }, s.label)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-3", children: "Loved by brand teams" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl max-w-2xl text-balance", children: "Built on trust, repeat orders and great unboxings." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-12 grid md:grid-cols-3 gap-5", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "h-full rounded-2xl border bg-card p-7 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-6 w-6 text-primary/60 mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-lg leading-relaxed", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 pt-5 border-t", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ink-muted mt-0.5", children: t.role })
        ] })
      ] }) }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24 md:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-accent p-10 md:p-16 text-primary-foreground shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-72 w-72 rounded-full bg-background/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-foreground/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl text-balance", children: "Ready to package something unforgettable?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-primary-foreground/90 text-lg max-w-xl", children: "Get a free consultation, samples and a tailored quote in under 24 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-background text-foreground hover:bg-background/90 border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/quote", children: [
            "Start my quote ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Talk to a consultant" }) })
        ] })
      ] })
    ] }) }) }) })
  ] });
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: HomePage
}, Symbol.toStringTag, { value: "Module" }));
const Table = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
const TableHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }));
TableBody.displayName = "TableBody";
const TableFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props }));
TableCaption.displayName = "TableCaption";
const Dialog = Root$3;
const DialogPortal = Portal$1;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const Breadcrumb = reactExports.forwardRef(({ ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
const BreadcrumbList = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ol",
    {
      ref,
      className: cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className
      ),
      ...props
    }
  )
);
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ref, className: cn("inline-flex items-center gap-1.5", className), ...props })
);
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = reactExports.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      ref,
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("font-normal text-foreground", className),
      ...props
    }
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({ children, className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, {})
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
const ADMIN_RESET_PASSWORD_PATH = "/admin/reset-password";
async function getAdminSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session ?? null;
}
async function signInAdmin(email, password) {
  return supabase.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password
  });
}
async function sendAdminPasswordReset(email) {
  const redirectTo = `${window.location.origin}${ADMIN_RESET_PASSWORD_PATH}`;
  return supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), {
    redirectTo
  });
}
async function exchangeAdminRecoveryCode(code) {
  return supabase.auth.exchangeCodeForSession(code);
}
async function updateAdminPassword(password) {
  return supabase.auth.updateUser({ password });
}
async function signOutAdmin() {
  return supabase.auth.signOut();
}
const Accordion = Root2$1;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item$1, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2$1,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2$1.displayName;
const Progress = reactExports.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root$1,
  {
    ref,
    className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = Root$1.displayName;
const Switch = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root$2,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = Root$2.displayName;
function slugify$1(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function toDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}
function makeSection(items, fallback) {
  return items.length > 0 ? items : [fallback];
}
function formValuesFromProduct(product, categories2) {
  return {
    id: product?.id,
    slug: product?.slug ?? "",
    title: product?.title ?? "",
    category_id: product?.category_id ?? categories2[0]?.id ?? "",
    short_description: product?.short_description ?? "",
    featured_image: product?.featured_image ?? "",
    is_featured: product?.is_featured ?? false,
    is_published: product?.is_published ?? false,
    meta_title: product?.meta_title ?? "",
    meta_description: product?.meta_description ?? "",
    content_sections: makeSection(product?.content_sections ?? [], {
      id: "default-section",
      heading: "What makes this box special?",
      content: "Describe the product story, packaging benefits, or brand-specific selling points."
    }),
    box_styles: makeSection(product?.box_styles ?? [], {
      id: "default-style",
      title: "Signature style",
      description: "Describe the visual and structural style customers can choose from."
    }),
    materials: makeSection(product?.materials ?? [], {
      id: "default-material",
      title: "Premium stock",
      description: "Explain the material options or finishes that pair with this product."
    }),
    features: product?.features ?? [{ feature: "Premium unboxing experience" }],
    gallery_images: product?.gallery_images ?? []
  };
}
function SectionCard({
  title,
  description,
  children,
  action
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-card shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 border-b p-6 md:flex-row md:items-start md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-ink-muted", children: description })
      ] }),
      action
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children })
  ] });
}
function ErrorText({ children }) {
  if (!children) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children });
}
function FieldRow({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children });
}
function ReorderControls({
  onUp,
  onDown,
  onRemove,
  disableUp,
  disableDown
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", onClick: onUp, disabled: disableUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", onClick: onDown, disabled: disableDown, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", onClick: onRemove, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
  ] });
}
function ProductEditorDialog({
  open,
  onOpenChange,
  product,
  categories: categories2,
  onSaved
}) {
  const saveFn = useServerFn(saveCmsProduct);
  const uploadFn = useServerFn(uploadCmsImageBase64);
  const [uploadProgress, setUploadProgress] = reactExports.useState(0);
  const [uploading, setUploading] = reactExports.useState(false);
  const defaultValues = reactExports.useMemo(() => formValuesFromProduct(product, categories2), [product, categories2]);
  const form = useForm({
    resolver: u(productFormSchema),
    defaultValues,
    values: defaultValues,
    mode: "onBlur"
  });
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = form;
  const contentSections = useFieldArray({ control, name: "content_sections" });
  const boxStyles = useFieldArray({ control, name: "box_styles" });
  const materials = useFieldArray({ control, name: "materials" });
  const features = useFieldArray({ control, name: "features" });
  const galleryImages = useFieldArray({ control, name: "gallery_images" });
  const titleValue = watch("title");
  const slugValue = watch("slug");
  const featuredImage = watch("featured_image");
  const isPublished = watch("is_published");
  const isFeatured = watch("is_featured");
  reactExports.useEffect(() => {
    if (!product && titleValue && (!slugValue || slugValue === slugify$1(product?.title ?? ""))) {
      setValue("slug", slugify$1(titleValue), { shouldValidate: true });
    }
  }, [product, setValue, slugValue, titleValue]);
  reactExports.useEffect(() => {
    if (open) {
      form.reset(defaultValues);
      setUploadProgress(0);
      setUploading(false);
    }
  }, [defaultValues, form, open]);
  async function uploadFiles(files) {
    const uploads = Array.from(files);
    if (uploads.length === 0) return [];
    setUploading(true);
    setUploadProgress(15);
    try {
      const urls = [];
      for (let index2 = 0; index2 < uploads.length; index2 += 1) {
        const file = uploads[index2];
        const base64Data = await toDataUrl(file);
        const response = await uploadFn({
          data: {
            fileName: file.name.replace(/[^a-zA-Z0-9._-]/g, "_"),
            contentType: file.type,
            base64Data
          }
        });
        urls.push(response.url);
        setUploadProgress(15 + Math.round((index2 + 1) / uploads.length * 85));
      }
      return urls;
    } finally {
      setUploading(false);
      setUploadProgress(100);
      setTimeout(() => setUploadProgress(0), 700);
    }
  }
  function collectErrorMessages(value, prefix = "") {
    if (!value || typeof value !== "object") return [];
    return Object.entries(value).flatMap(([key, entry]) => {
      const fieldName = prefix ? `${prefix}.${key}` : key;
      if (!entry) return [];
      if (typeof entry === "string") return [entry];
      if (Array.isArray(entry)) {
        return entry.flatMap((item, index2) => collectErrorMessages(item, `${fieldName}[${index2}]`));
      }
      if (typeof entry === "object" && "message" in entry && typeof entry.message === "string") {
        return [entry.message];
      }
      return collectErrorMessages(entry, fieldName);
    });
  }
  const onSubmit = handleSubmit(
    async (values2) => {
      try {
        const {
          meta_title: _metaTitle,
          meta_description: _metaDescription,
          gallery_images: galleryImagesValues,
          ...restValues
        } = values2;
        const payload = {
          ...restValues,
          id: values2.id ?? product?.id,
          slug: values2.slug.trim(),
          title: values2.title.trim(),
          category_id: values2.category_id,
          short_description: values2.short_description.trim(),
          featured_image: values2.featured_image?.trim() || null,
          content_sections: values2.content_sections.map((section) => ({
            ...section,
            heading: section.heading.trim(),
            content: section.content.trim()
          })),
          box_styles: values2.box_styles.map((style) => ({
            ...style,
            title: style.title.trim(),
            description: style.description.trim()
          })),
          materials: values2.materials.map((material) => ({
            ...material,
            title: material.title.trim(),
            description: material.description.trim()
          })),
          features: values2.features.map((feature) => ({
            ...feature,
            feature: feature.feature.trim()
          })),
          gallery_images: galleryImagesValues.map((image) => ({
            id: image.id,
            image_url: image.image_url.trim()
          }))
        };
        const saved = await saveFn({ data: payload });
        toast.success(product ? "Product updated" : "Product created");
        onSaved();
        onOpenChange(false);
        return saved;
      } catch (error) {
        console.error("Product save failed", error);
        const errMsg = error instanceof Error ? error.message : typeof error === "object" ? JSON.stringify(error) : String(error);
        toast.error(errMsg.length > 200 ? `${errMsg.slice(0, 200)}...` : errMsg || "Failed to save product");
        throw error;
      }
    },
    (submitErrors) => {
      const messages = collectErrorMessages(submitErrors);
      toast.error(messages[0] ?? "Please fix the highlighted fields before saving.");
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-h-[92vh] max-w-5xl overflow-visible p-0 sm:rounded-4xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-[92vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "border-b px-6 py-6 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-2xl", children: product ? "Edit product" : "Create product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: isPublished ? "default" : "secondary", children: isPublished ? "Published" : "Draft" }),
        isFeatured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Featured" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Build a complete CMS record with content sections, styles, materials, features, gallery images, and SEO settings." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        SectionCard,
        {
          title: "Basic information",
          description: "Title, slug, category, and publishing state.",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "title", children: "Product title" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "title", placeholder: "Luxury Magnetic Gift Box", ...register("title") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorText, { children: errors.title?.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "slug", children: "Slug" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "slug", placeholder: "luxury-magnetic-gift-box", ...register("slug") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorText, { children: errors.slug?.message })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "category_id", children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "category_id",
                    className: "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm",
                    ...register("category_id"),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a category" }),
                      categories2.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: category.id, children: category.name }, category.id))
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorText, { children: errors.category_id?.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "short_description", children: "Short description" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "short_description", rows: 4, placeholder: "A compact summary used on cards and the hero.", ...register("short_description") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorText, { children: errors.short_description?.message })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between rounded-2xl border bg-surface/60 p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Featured product" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted", children: "Show this product in curated placements." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: isFeatured, onCheckedChange: (checked) => setValue("is_featured", checked) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between rounded-2xl border bg-surface/60 p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Published" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted", children: "Visible on the storefront once enabled." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: isPublished, onCheckedChange: (checked) => setValue("is_published", checked) })
                  ] })
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionCard,
        {
          title: "Featured image",
          description: "Drag and drop a primary hero image for product cards and the detail page.",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "grid gap-4 rounded-3xl border border-dashed p-6 transition-colors",
                "bg-linear-to-br from-surface to-background"
              ),
              onDragOver: (event) => event.preventDefault(),
              onDrop: async (event) => {
                event.preventDefault();
                const files = event.dataTransfer.files;
                if (!files?.length) return;
                const [url] = await uploadFiles(files);
                if (url) setValue("featured_image", url, { shouldValidate: true });
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      onClick: () => document.getElementById("featured-image-input")?.click(),
                      disabled: uploading,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
                        " Upload image"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", onClick: () => setValue("featured_image", ""), children: "Clear image" }),
                  uploading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin text-primary" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "featured-image-input",
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: async (event) => {
                      const file = event.target.files?.[0];
                      if (!file) return;
                      const [url] = await uploadFiles([file]);
                      if (url) setValue("featured_image", url, { shouldValidate: true });
                      event.target.value = "";
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-[220px_minmax(0,1fr)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border bg-card", children: featuredImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featuredImage, alt: "Featured preview", className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-56 place-items-center bg-muted/40 text-sm text-muted-foreground", children: "No featured image selected" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-ink-muted", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "h-4 w-4" }),
                      " Drag an image into this panel or use the upload button."
                    ] }),
                    uploadProgress > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: uploadProgress }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted", children: "Use a warm, editorial crop. This image appears in the list, hero, and social previews." })
                  ] })
                ] })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        SectionCard,
        {
          title: "Gallery images",
          description: "Multiple images with reorder controls for the product gallery.",
          action: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: async () => {
                const input = document.getElementById("gallery-upload-input");
                input?.click();
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
                " Add images"
              ]
            }
          ) }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "gallery-upload-input",
                type: "file",
                accept: "image/*",
                multiple: true,
                className: "hidden",
                onChange: async (event) => {
                  const files = event.target.files;
                  if (!files?.length) return;
                  const urls = await uploadFiles(files);
                  urls.forEach((url) => galleryImages.append({ image_url: url, alt_text: "" }));
                  event.target.value = "";
                }
              }
            ),
            galleryImages.fields.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center rounded-3xl border border-dashed py-16 text-center text-sm text-muted-foreground", children: "Drop multiple gallery images here or upload them with the button above." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3", children: galleryImages.fields.map((field, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                layout: true,
                className: "overflow-hidden rounded-3xl border bg-card shadow-soft",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-4/3 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: watch(`gallery_images.${index2}.image_url`) || "",
                      alt: "Gallery preview",
                      className: "h-full w-full object-cover"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        placeholder: "Alt text",
                        ...register(`gallery_images.${index2}.alt_text`)
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        ReorderControls,
                        {
                          onUp: () => index2 > 0 && galleryImages.move(index2, index2 - 1),
                          onDown: () => index2 < galleryImages.fields.length - 1 && galleryImages.move(index2, index2 + 1),
                          onRemove: () => galleryImages.remove(index2),
                          disableUp: index2 === 0,
                          disableDown: index2 === galleryImages.fields.length - 1
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => setValue("featured_image", watch(`gallery_images.${index2}.image_url`)), children: "Use as hero" })
                    ] })
                  ] })
                ]
              },
              field.id
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion, { type: "multiple", defaultValue: ["content", "styles", "seo"], className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "content", className: "rounded-3xl border bg-card px-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-5 text-left hover:no-underline", children: "Content sections" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            contentSections.fields.map((field, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-surface/60 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                  "Section ",
                  index2 + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ReorderControls,
                  {
                    onUp: () => index2 > 0 && contentSections.move(index2, index2 - 1),
                    onDown: () => index2 < contentSections.fields.length - 1 && contentSections.move(index2, index2 + 1),
                    onRemove: () => contentSections.remove(index2),
                    disableUp: index2 === 0,
                    disableDown: index2 === contentSections.fields.length - 1
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Heading" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register(`content_sections.${index2}.heading`) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Content" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 5, ...register(`content_sections.${index2}.content`) })
                ] })
              ] })
            ] }, field.id)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => contentSections.append({ heading: "New section", content: "Describe the section in a concise, readable way." }),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
                  " Add section"
                ]
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "styles", className: "rounded-3xl border bg-card px-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-5 text-left hover:no-underline", children: "Box styles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            boxStyles.fields.map((field, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-surface/60 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                  "Style ",
                  index2 + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ReorderControls,
                  {
                    onUp: () => index2 > 0 && boxStyles.move(index2, index2 - 1),
                    onDown: () => index2 < boxStyles.fields.length - 1 && boxStyles.move(index2, index2 + 1),
                    onRemove: () => boxStyles.remove(index2),
                    disableUp: index2 === 0,
                    disableDown: index2 === boxStyles.fields.length - 1
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register(`box_styles.${index2}.title`) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, ...register(`box_styles.${index2}.description`) })
                ] })
              ] })
            ] }, field.id)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", onClick: () => boxStyles.append({ title: "New style", description: "Explain the shape, closure, or premium detail." }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
              " Add style"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "materials", className: "rounded-3xl border bg-card px-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-5 text-left hover:no-underline", children: "Materials" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            materials.fields.map((field, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-surface/60 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", children: [
                  "Material ",
                  index2 + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ReorderControls,
                  {
                    onUp: () => index2 > 0 && materials.move(index2, index2 - 1),
                    onDown: () => index2 < materials.fields.length - 1 && materials.move(index2, index2 + 1),
                    onRemove: () => materials.remove(index2),
                    disableUp: index2 === 0,
                    disableDown: index2 === materials.fields.length - 1
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldRow, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Material title" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register(`materials.${index2}.title`) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Material description" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, ...register(`materials.${index2}.description`) })
                ] })
              ] })
            ] }, field.id)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", onClick: () => materials.append({ title: "New material", description: "Explain the stock or finish in one concise paragraph." }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
              " Add material"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "features", className: "rounded-3xl border bg-card px-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-5 text-left hover:no-underline", children: "Features" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            features.fields.map((field, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-2xl border bg-surface/60 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: index2 + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register(`features.${index2}.feature`), placeholder: "Feature label" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", onClick: () => features.remove(index2), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
            ] }, field.id)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", onClick: () => features.append({ feature: "New feature" }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
              " Add feature"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "seo", className: "rounded-3xl border bg-card px-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-5 text-left hover:no-underline", children: "SEO & meta tags" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Meta title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register("meta_title"), placeholder: "Custom packaging boxes for modern brands" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Meta description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, ...register("meta_description"), placeholder: "Concise meta description for search and social previews." })
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "sticky bottom-0 border-t bg-background/95 px-0 py-4 backdrop-blur-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => onOpenChange(false), disabled: isSubmitting || uploading, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "bg-gradient-accent border-0 shadow-soft hover:shadow-glow", disabled: isSubmitting || uploading, children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          " Saving..."
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }),
          " Save product"
        ] }) })
      ] })
    ] }) })
  ] }) }) });
}
function slugify(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function truncatePreview(value, maxLength) {
  const text = value?.trim() ?? "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}
function AdminPanel() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [ready, setReady] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [categoryFilter, setCategoryFilter] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [page, setPage] = reactExports.useState(1);
  const [editorOpen, setEditorOpen] = reactExports.useState(false);
  const [editorProductId, setEditorProductId] = reactExports.useState(null);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [categoryName, setCategoryName] = reactExports.useState("");
  const deferredSearch = reactExports.useDeferredValue(search);
  const fetchProducts = useServerFn(listCmsProducts);
  const fetchCategories = useServerFn(listCmsCategories);
  const createCategory = useServerFn(createCmsCategory);
  const deleteProduct = useServerFn(deleteCmsProduct);
  reactExports.useEffect(() => {
    let mounted = true;
    getAdminSession().then((session) => {
      if (!mounted) return;
      if (!session) {
        navigate({
          to: "/admin/login"
        });
        return;
      }
      setReady(true);
    }).catch(() => {
      if (mounted) navigate({
        to: "/admin/login"
      });
    });
    return () => {
      mounted = false;
    };
  }, [navigate]);
  const {
    data: products2 = [],
    isLoading: productsLoading
  } = useQuery({
    queryKey: ["admin", "products"],
    queryFn: () => fetchProducts(),
    enabled: ready
  });
  const {
    data: categories2 = [],
    isLoading: categoriesLoading
  } = useQuery({
    queryKey: ["admin", "categories"],
    queryFn: () => fetchCategories(),
    enabled: ready
  });
  const editorProduct = reactExports.useMemo(() => products2.find((product) => product.id === editorProductId) ?? null, [editorProductId, products2]);
  const filteredProducts = reactExports.useMemo(() => {
    const searchTerm = deferredSearch.trim().toLowerCase();
    return products2.filter((product) => {
      const matchesSearch = !searchTerm || [product.title, product.slug, product.short_description, product.category?.name, product.category?.slug].filter(Boolean).some((value) => String(value).toLowerCase().includes(searchTerm));
      const matchesCategory = categoryFilter === "all" || product.category_id === categoryFilter;
      const matchesStatus = statusFilter === "all" || statusFilter === "published" && product.is_published || statusFilter === "draft" && !product.is_published || statusFilter === "featured" && product.is_featured;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [categoryFilter, deferredSearch, products2, statusFilter]);
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  reactExports.useEffect(() => {
    setPage(1);
  }, [categoryFilter, deferredSearch, statusFilter]);
  if (!ready) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-linear-to-b from-background via-background to-surface/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-30 border-b bg-background/85 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight flex items-center justify-between gap-4 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BreadcrumbList, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "PackifyBoxes" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbSeparator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbPage, { children: "Admin" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-3xl sm:text-4xl", children: "Product CMS" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: async () => {
        await signOutAdmin();
        navigate({
          to: "/admin/login"
        });
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
        " Sign out"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container-tight space-y-8 py-8 md:py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Products", description: "Search, filter, edit, publish, and delete products.", actions: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-gradient-accent border-0 shadow-soft hover:shadow-glow", onClick: () => {
          setEditorProductId(null);
          setEditorOpen(true);
        }, children: "Add product" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 rounded-3xl border bg-card p-4 shadow-soft lg:grid-cols-[1.4fr_0.8fr_0.8fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: search, onChange: (event) => setSearch(event.target.value), placeholder: "Search products, slugs, descriptions...", className: "pl-9" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: categoryFilter, onValueChange: setCategoryFilter, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Filter by category" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All categories" }),
              categories2.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: category.id, children: category.name }, category.id))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: statusFilter, onValueChange: setStatusFilter, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Filter by status" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "published", children: "Published" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "draft", children: "Draft" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "featured", children: "Featured" })
            ] })
          ] })
        ] }),
        productsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: Array.from({
          length: 6
        }).map((_, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-105 rounded-3xl" }, index2)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:hidden", children: pageItems.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl border bg-card shadow-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-4/3 overflow-hidden bg-muted", children: product.featured_image || product.category?.image_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.featured_image || product.category?.image_url || "", alt: product.title, className: "h-full w-full object-cover" }) : null }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: product.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: product.category?.name ?? "Unassigned" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-end gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: product.is_published ? "default" : "secondary", children: product.is_published ? "Live" : "Draft" }),
                  product.is_featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Featured" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm leading-6 text-ink-muted", children: truncatePreview(product.short_description, 90) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", size: "sm", onClick: () => {
                  setEditorProductId(product.id);
                  setEditorOpen(true);
                }, children: "Edit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", onClick: () => setDeleteTarget(product.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
              ] })
            ] })
          ] }, product.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden overflow-hidden rounded-3xl border bg-card shadow-soft md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "table-fixed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-[38%]", children: "Product" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-[16%]", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-[12%]", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-[12%]", children: "Flags" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-[10%]", children: "Created" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-[8%] text-right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: pageItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 6, className: "py-14 text-center text-muted-foreground", children: "No products found." }) }) : pageItems.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "align-top overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 max-h-28 items-start gap-4 overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-20 overflow-hidden rounded-2xl border bg-muted", children: product.featured_image || product.category?.image_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.featured_image || product.category?.image_url || "", alt: product.title, className: "h-full w-full object-cover" }) : null }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-medium", children: product.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 block w-full truncate text-xs leading-5 text-muted-foreground", children: truncatePreview(product.short_description, 70) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 truncate text-[11px] uppercase tracking-[0.3em] text-primary", children: product.slug })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: product.category?.name ?? "Unassigned" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: product.is_published ? "default" : "secondary", children: product.is_published ? "Published" : "Draft" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "flex flex-wrap gap-2", children: product.is_featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Featured" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm text-muted-foreground", children: new Date(product.created_at).toLocaleDateString() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => {
                  setEditorProductId(product.id);
                  setEditorOpen(true);
                }, children: "Edit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "icon", onClick: () => setDeleteTarget(product.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
              ] }) })
            ] }, product.id)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-3xl border bg-card p-4 shadow-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              "Showing ",
              pageItems.length,
              " of ",
              filteredProducts.length,
              " products"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setPage((value) => Math.max(1, value - 1)), disabled: currentPage === 1, children: "Previous" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                "Page ",
                currentPage,
                " of ",
                totalPages
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setPage((value) => Math.min(totalPages, value + 1)), disabled: currentPage === totalPages, children: "Next" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-5 pb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Categories", description: "Create categories here and they will immediately appear in the product category dropdown." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-[380px_minmax(0,1fr)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-card p-5 shadow-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: "Create category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-muted", children: "Keep category creation close to product setup so the CMS stays tidy." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: categoryName, onChange: (event) => setCategoryName(event.target.value), placeholder: "Category name" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: slugify(categoryName), readOnly: true, placeholder: "Auto-generated slug", className: "bg-muted/50" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full bg-gradient-accent border-0 shadow-soft hover:shadow-glow", onClick: async () => {
                const name = categoryName.trim();
                const slug = slugify(name);
                if (!name || !slug) {
                  toast.error("Category name is required");
                  return;
                }
                try {
                  await createCategory({
                    data: {
                      name,
                      slug,
                      description: null
                    }
                  });
                  toast.success("Category created");
                  setCategoryName("");
                  await qc.invalidateQueries({
                    queryKey: ["admin", "categories"]
                  });
                } catch (error) {
                  toast.error(error instanceof Error ? error.message : "Failed to create category");
                }
              }, children: "Create category" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: categoriesLoading ? Array.from({
            length: 3
          }).map((_, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 rounded-3xl" }, index2)) : categories2.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-card p-5 shadow-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-2 font-display text-2xl", children: category.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-muted", children: category.description ?? "Premium packaging category." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
                products2.filter((product) => product.category_id === category.id).length,
                " products"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-4 w-4" }),
              " ",
              category.slug
            ] })
          ] }, category.id)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductEditorDialog, { open: editorOpen, onOpenChange: (open) => {
      setEditorOpen(open);
      if (!open) setEditorProductId(null);
    }, product: editorProduct, categories: categories2, onSaved: async () => {
      await qc.invalidateQueries({
        queryKey: ["admin", "products"]
      });
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: deleteTarget !== null, onOpenChange: (open) => !open && setDeleteTarget(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Delete product?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "This removes the product and all related content sections, styles, materials, features, and gallery images." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setDeleteTarget(null), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "destructive", onClick: async () => {
          if (!deleteTarget) return;
          try {
            await deleteProduct({
              data: deleteTarget
            });
            toast.success("Product deleted");
            setDeleteTarget(null);
            await qc.invalidateQueries({
              queryKey: ["admin", "products"]
            });
          } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to delete product");
          }
        }, children: "Delete product" })
      ] })
    ] }) })
  ] });
}
function SectionHeader({
  title,
  description,
  actions
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: "CMS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-ink-muted", children: description })
    ] }),
    actions
  ] });
}
const admin_index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: AdminPanel
}, Symbol.toStringTag, { value: "Module" }));
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight py-32 text-center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl mb-3", children: "Product not found" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "text-primary underline", children: "Back to products" })
] });
const products_$slug$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  notFoundComponent: SplitNotFoundComponent
}, Symbol.toStringTag, { value: "Module" }));
function ProductDetail() {
  const loaderData = Route$3.useLoaderData();
  const {
    product,
    related
  } = loaderData ?? {
    product: null,
    related: []
  };
  const [lightboxImage, setLightboxImage] = reactExports.useState(null);
  const gallery = reactExports.useMemo(() => {
    if (product.gallery_images.length > 0) return product.gallery_images;
    if (product.featured_image) return [{
      id: product.id,
      image_url: product.featured_image,
      alt_text: product.title
    }];
    return [];
  }, [product]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-tight relative py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "inline-flex items-center text-sm text-ink-muted transition-colors hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-1.5 h-4 w-4" }),
        " All products"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight relative grid gap-12 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: product.category?.name ?? "Packaging" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 max-w-3xl font-display text-5xl leading-[1.02] text-balance md:text-7xl", children: product.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-lg text-ink-muted", children: product.short_description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-accent border-0 shadow-soft hover:shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/quote", children: [
              "Request quote ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Talk to consultant" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: product.is_published ? "default" : "secondary", children: product.is_published ? "Published" : "Draft" }),
            product.is_featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Featured" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.1, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-4xl border bg-card shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AspectRatio, { ratio: 4 / 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.featured_image || product.category?.image_url || "", alt: product.title, className: "h-full w-full object-cover", fetchPriority: "high", loading: "eager" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-3 gap-3", children: gallery.slice(0, 3).map((image) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setLightboxImage(image.image_url), className: "group relative overflow-hidden rounded-2xl border bg-card shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AspectRatio, { ratio: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image.image_url, alt: image.alt_text || product.title, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }) }) }, image.id)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 lg:grid-cols-2", children: product.content_sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { whileHover: {
      y: -4
    }, className: "rounded-3xl border bg-card p-6 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: section.heading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 whitespace-pre-wrap leading-7 text-ink-muted", children: section.content })
    ] }, section.id)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 border-y border-border/60 bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight grid gap-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ListSection, { title: "Box styles", items: product.box_styles, tone: "styles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ListSection, { title: "Materials", items: product.materials, tone: "materials" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { title: "Features", description: "Key selling points for the product, presented as a single-column list for easier scanning." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureSection, { items: product.features })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-4xl bg-gradient-accent p-8 text-primary-foreground shadow-elegant md:p-12 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary-foreground/70", children: "Next step" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl text-balance md:text-5xl", children: "Need this product in a different size or finish?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-primary-foreground/85", children: "Send us the brief and we’ll tune the structure, material stack, print finish, and unboxing details around your brand." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3 lg:mt-0 lg:justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-background text-foreground hover:bg-background/90 border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", children: "Request a quote" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-white/20 bg-white/10 text-primary-foreground hover:bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Talk to us" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-tight space-y-8", children: related.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { title: "Related products", description: "Other published products from the same category." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3", children: related.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: item }, item.id)) })
    ] }) : null }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: Boolean(lightboxImage), onOpenChange: (open) => !open && setLightboxImage(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "max-w-6xl overflow-hidden border-0 bg-transparent p-0 shadow-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: lightboxImage || "", alt: product.title, className: "max-h-[90vh] w-full rounded-4xl object-contain" }) }) })
  ] });
}
function SectionHeading({
  title,
  description
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl text-balance md:text-5xl", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl text-ink-muted", children: description })
  ] });
}
function ListSection({
  title,
  items,
  tone
}) {
  const shellClassName = "rounded-3xl border border-primary/15 bg-linear-to-br from-primary/5 via-card to-surface/40 p-6 shadow-soft";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: shellClassName, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary/80", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-3xl", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-primary/10 bg-background/70 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-ink-muted", children: item.description })
    ] }, item.id)) })
  ] });
}
function FeatureSection({
  items
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-card p-6 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl", children: "Features" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-start gap-3 rounded-2xl border bg-surface/50 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 rounded-full bg-primary/10 p-1.5 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-6", children: item.feature })
    ] }, item.id)) })
  ] });
}
const products_$slug = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: ProductDetail
}, Symbol.toStringTag, { value: "Module" }));
function ResetPasswordPage() {
  const navigate = useNavigate();
  const [ready, setReady] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const [password, setPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const code = reactExports.useMemo(() => {
    if (typeof window === "undefined") return null;
    return new URLSearchParams(window.location.search).get("code");
  }, []);
  reactExports.useEffect(() => {
    let mounted = true;
    const init = async () => {
      try {
        if (code) {
          const {
            error
          } = await exchangeAdminRecoveryCode(code);
          if (error) {
            toast.error(error.message);
            return;
          }
        }
        const session = await getAdminSession();
        if (!mounted) return;
        if (!session) {
          toast.error("Your reset link is missing or expired. Please request a new one.");
          return;
        }
        setReady(true);
      } catch (err) {
        if (mounted) {
          toast.error(err instanceof Error ? err.message : "Unable to start password reset");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };
    init();
    return () => {
      mounted = false;
    };
  }, [code]);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    setSaving(true);
    try {
      const {
        error
      } = await updateAdminPassword(password);
      if (error) {
        toast.error(error.message);
        return;
      }
      await signOutAdmin();
      toast.success("Password updated. Please sign in again.");
      navigate({
        to: "/admin/login"
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Unable to update password");
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "min-h-[80vh] grid place-items-center py-16 bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "w-full max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-8 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-2", children: "Admin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Set new password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-muted", children: "Create a new password for your admin account." })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border bg-surface/50 p-4 text-sm text-ink-muted", children: "Checking your recovery link..." }) : ready ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "New password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: "password", autoComplete: "new-password", value: password, onChange: (e) => setPassword(e.target.value), required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "confirmPassword", children: "Confirm new password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "confirmPassword", type: "password", autoComplete: "new-password", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full", disabled: saving, children: [
        saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "mr-2 h-4 w-4" }),
        "Update password"
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border bg-surface/50 p-4 text-sm text-ink-muted", children: "The recovery link is missing or expired. Request a new reset email from the sign-in page." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/forgot-password", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        "Request a new reset email"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-center justify-between gap-3 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "link", className: "h-auto p-0 text-ink-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/login", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
      "Back to sign in"
    ] }) }) })
  ] }) }) });
}
const admin__resetPassword = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: ResetPasswordPage
}, Symbol.toStringTag, { value: "Module" }));
function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  reactExports.useEffect(() => {
    let mounted = true;
    getAdminSession().then((session) => {
      if (mounted && session) {
        navigate({
          to: "/admin"
        });
      }
    }).catch(() => {
    });
    return () => {
      mounted = false;
    };
  }, [navigate]);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data,
        error
      } = await signInAdmin(email, password);
      if (error || !data.session) {
        toast.error(error?.message || "Invalid credentials");
        return;
      }
      toast.success("Welcome back, admin");
      navigate({
        to: "/admin"
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Invalid credentials");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "min-h-[80vh] grid place-items-center py-16 bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-2", children: "Admin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl mb-6", children: "Sign in" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", autoComplete: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "password", type: "password", autoComplete: "current-password", value: password, onChange: (e) => setPassword(e.target.value), required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", children: "Sign in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "link", className: "h-auto p-0 text-xs font-medium text-ink-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/forgot-password", children: "Forgot password?" }) }) })
    ] })
  ] }) });
}
const admin__login = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: AdminLogin
}, Symbol.toStringTag, { value: "Module" }));
function ForgotPasswordPage() {
  const [email, setEmail] = reactExports.useState("");
  const [sending, setSending] = reactExports.useState(false);
  const [done, setDone] = reactExports.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const {
        error
      } = await sendAdminPasswordReset(email);
      if (error) {
        toast.error(error.message);
        return;
      }
      setDone(true);
      toast.success("Reset email sent. Check your inbox.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Unable to send reset email");
    } finally {
      setSending(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "min-h-[80vh] grid place-items-center py-16 bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "w-full max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-8 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-2", children: "Admin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Reset password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-muted", children: "Enter your admin email and we’ll send a recovery link." })
    ] }),
    done ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border bg-surface/50 p-4 text-sm text-ink-muted", children: "If the email exists, a reset link has been sent. Open it to set a new password." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", autoComplete: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "admin@yourdomain.com", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full", disabled: sending, children: [
        sending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mr-2 h-4 w-4" }),
        "Send reset email"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-center justify-between gap-3 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "link", className: "h-auto p-0 text-ink-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/login", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
      "Back to sign in"
    ] }) }) })
  ] }) }) });
}
const admin__forgotPassword = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: ForgotPasswordPage
}, Symbol.toStringTag, { value: "Module" }));
export {
  server$1 as default
};
