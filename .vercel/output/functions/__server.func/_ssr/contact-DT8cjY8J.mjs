import { N as jsxRuntimeExports, Y as reactExports } from "./server-BQ-xwmlc.mjs";
import { b as useForm, u, C as CircleCheck, T as Textarea } from "./textarea-Dh9gIid1.mjs";
import { u as useServerFn } from "./useServerFn-Dv5M5Rur.mjs";
import { M as Mail, P as Phone, a as MapPin, B as Button, H as toast } from "./router-WJfh7UaR.mjs";
import { C as Clock, s as submitContact } from "./quotes.functions-Dc5aQp-n.mjs";
import { I as Input } from "./input-DU1LoEPh.mjs";
import { L as Label } from "./label-CVCEKJi0.mjs";
import { L as LoaderCircle } from "./loader-circle-DU8zxIRk.mjs";
import { o as objectType, s as stringType } from "./types-DnP57xCP.mjs";
import { R as Reveal } from "./Reveal-0wheq2Ni.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./auth-middleware-CrSDmXli.mjs";
import "./index-BlRNeFf7.mjs";
import "./proxy-CLY1anNz.mjs";
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
