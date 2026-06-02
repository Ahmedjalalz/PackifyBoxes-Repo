import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { b as useForm } from "../_libs/react-hook-form.mjs";
import { u } from "../_libs/hookform__resolvers.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { s as submitContact } from "./quotes.functions-C_c3220U.mjs";
import { B as Button } from "./router-C6I0yXNU.mjs";
import { I as Input } from "./input-CGflCgqm.mjs";
import { L as Label } from "./label-DAWncCp4.mjs";
import { T as Textarea } from "./textarea-DqeMH6T3.mjs";
import { R as Reveal } from "./Reveal-ChVbx-D6.mjs";
import "../_libs/seroval.mjs";
import { M as Mail, p as Phone, m as MapPin, h as Clock, g as CircleCheck, j as LoaderCircle } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./server-DLEnHz65.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./auth-middleware-CXrx7-hG.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "tslib";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
  const onSubmit = async (values) => {
    try {
      await send({ data: values });
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
export {
  ContactPage as component
};
