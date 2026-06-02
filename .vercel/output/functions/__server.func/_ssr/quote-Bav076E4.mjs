import { N as jsxRuntimeExports, Y as reactExports } from "./server-BQ-xwmlc.mjs";
import { b as useForm, u, C as CircleCheck, T as Textarea } from "./textarea-Dh9gIid1.mjs";
import { u as useServerFn } from "./useServerFn-Dv5M5Rur.mjs";
import { g as createLucideIcon, B as Button, H as toast } from "./router-WJfh7UaR.mjs";
import { C as Clock, a as submitQuote } from "./quotes.functions-Dc5aQp-n.mjs";
import { I as Input } from "./input-DU1LoEPh.mjs";
import { L as Label } from "./label-CVCEKJi0.mjs";
import { S as Select, d as SelectTrigger, e as SelectValue, b as SelectContent, c as SelectItem } from "./select-DdYC0lZX.mjs";
import { L as LoaderCircle } from "./loader-circle-DU8zxIRk.mjs";
import { o as objectType, s as stringType, c as coerce } from "./types-DnP57xCP.mjs";
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
import "./Combination-DKTsQdmt.mjs";
import "./proxy-CLY1anNz.mjs";
const __iconNode$1 = [
  ["path", { d: "M14 14a2 2 0 0 0 2-2V8h-2", key: "1r06pg" }],
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M8 14a2 2 0 0 0 2-2V8H8", key: "1jzu5j" }]
];
const MessageSquareQuote = createLucideIcon("message-square-quote", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
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
