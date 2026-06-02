import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { B as Button } from "./router-BmYQiT5Q.mjs";
import { I as Input } from "./input-KES_z_Pd.mjs";
import { L as Label } from "./label-CtFPXVXi.mjs";
import { g as getAdminSession, a as signInAdmin } from "./admin-Cx01TpRX.mjs";
import "../_libs/seroval.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./server-ChO8Lnwp.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./auth-middleware-DSW6PhwW.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/zod.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "./client-y_bAAqdY.mjs";
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
