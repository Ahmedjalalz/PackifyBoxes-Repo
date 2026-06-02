// Captures the original Error out-of-band so server.ts can recover the stack
// when h3 has already swallowed the throw into a generic 500 Response.

let lastCapturedError: { error: unknown; at: number } | undefined;
const TTL_MS = 5_000;

function record(error: unknown) {
  lastCapturedError = { error, at: Date.now() };
}

if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => record((event as ErrorEvent).error ?? event));
  globalThis.addEventListener("unhandledrejection", (event) =>
    record((event as PromiseRejectionEvent).reason),
  );
}

if (typeof process !== "undefined" && typeof process.on === "function") {
  process.on("uncaughtException", (error) => record(error));
  process.on("unhandledRejection", (reason) => record(reason));
}

// Intercept console.error to capture errors that frameworks like h3 swallow and print
const originalConsoleError = console.error;
console.error = function (...args: unknown[]) {
  const errArg = args.find((arg) => arg instanceof Error);
  if (errArg) {
    record(errArg);
  } else if (args.length > 0) {
    const message = args.map((arg) => (typeof arg === "object" && arg !== null ? JSON.stringify(arg) : String(arg))).join(" ");
    // Avoid double-wrapping or capturing our own swallowed error messages
    if (!message.includes("h3 swallowed SSR error")) {
      record(new Error(message));
    }
  }
  originalConsoleError.apply(console, args);
};

export function consumeLastCapturedError(): unknown {
  if (!lastCapturedError) return undefined;
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    lastCapturedError = undefined;
    return undefined;
  }
  const { error } = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}

