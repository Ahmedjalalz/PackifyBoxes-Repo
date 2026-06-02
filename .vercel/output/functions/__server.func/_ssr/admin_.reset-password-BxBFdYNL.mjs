import { Y as reactExports, N as jsxRuntimeExports } from "./server-Bq_TYff1.mjs";
import { N as useNavigate, B as Button, L as Link, H as toast, g as createLucideIcon } from "./router-01d6GoFQ.mjs";
import { I as Input } from "./input-DNtDYviZ.mjs";
import { L as Label } from "./label-C_oEHrx2.mjs";
import { R as Reveal } from "./Reveal-BzfgQDD2.mjs";
import { e as exchangeAdminRecoveryCode, g as getAdminSession, u as updateAdminPassword, b as signOutAdmin } from "./admin-BdCKbilc.mjs";
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
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
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
export {
  ResetPasswordPage as component
};
