import { Y as reactExports, N as jsxRuntimeExports } from "./server-BQ-xwmlc.mjs";
import { N as useNavigate, B as Button, L as Link, H as toast } from "./router-WJfh7UaR.mjs";
import { I as Input } from "./input-DU1LoEPh.mjs";
import { L as Label } from "./label-CVCEKJi0.mjs";
import { g as getAdminSession, a as signInAdmin } from "./admin-BdCKbilc.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./auth-middleware-CrSDmXli.mjs";
import "./index-BlRNeFf7.mjs";
import "./types-DnP57xCP.mjs";
import "./client-CBuvpRjS.mjs";
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
export {
  AdminLogin as component
};
