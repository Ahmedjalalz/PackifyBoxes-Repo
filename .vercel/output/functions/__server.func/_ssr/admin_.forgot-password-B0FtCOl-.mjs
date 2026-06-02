import { Y as reactExports, N as jsxRuntimeExports } from "./server-Bq_TYff1.mjs";
import { B as Button, M as Mail, L as Link, H as toast } from "./router-01d6GoFQ.mjs";
import { I as Input } from "./input-DNtDYviZ.mjs";
import { L as Label } from "./label-C_oEHrx2.mjs";
import { R as Reveal } from "./Reveal-BzfgQDD2.mjs";
import { s as sendAdminPasswordReset } from "./admin-BdCKbilc.mjs";
import { L as LoaderCircle } from "./loader-circle-UZRvZH0i.mjs";
import { A as ArrowLeft } from "./arrow-left-CbSywusz.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./auth-middleware-CH5_NDEt.mjs";
import "./index-BlRNeFf7.mjs";
import "./types-DnP57xCP.mjs";
import "./proxy-Brt3xKOe.mjs";
import "./client-CBuvpRjS.mjs";
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
export {
  ForgotPasswordPage as component
};
