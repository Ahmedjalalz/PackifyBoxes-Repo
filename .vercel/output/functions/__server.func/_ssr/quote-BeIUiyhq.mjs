import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { b as useForm } from "../_libs/react-hook-form.mjs";
import { u } from "../_libs/hookform__resolvers.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a as submitQuote } from "./quotes.functions-C_c3220U.mjs";
import { B as Button } from "./router-C6I0yXNU.mjs";
import { I as Input } from "./input-CGflCgqm.mjs";
import { L as Label } from "./label-DAWncCp4.mjs";
import { T as Textarea } from "./textarea-DqeMH6T3.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./select-CtpMN1e0.mjs";
import { R as Reveal } from "./Reveal-ChVbx-D6.mjs";
import "../_libs/seroval.mjs";
import { h as Clock, o as MessageSquareQuote, s as Shield, g as CircleCheck, j as LoaderCircle } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, c as coerce } from "../_libs/zod.mjs";
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
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const schema = objectType({
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
    resolver: u(schema),
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
  const onSubmit = async (values) => {
    try {
      await send({ data: values });
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
export {
  QuotePage as component
};
