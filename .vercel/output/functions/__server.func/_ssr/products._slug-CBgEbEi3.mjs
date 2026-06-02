import { Y as reactExports, N as jsxRuntimeExports } from "./server-BQ-xwmlc.mjs";
import { b as Route$3, L as Link, B as Button } from "./router-WJfh7UaR.mjs";
import { B as Badge } from "./badge-Bt3S7p68.mjs";
import { D as Dialog, a as DialogContent } from "./dialog-DSgdg9Zt.mjs";
import { A as AspectRatio, P as ProductCard } from "./ProductCard-BGqOFl5r.mjs";
import { R as Reveal } from "./Reveal-0wheq2Ni.mjs";
import { A as ArrowLeft } from "./arrow-left-Dpw0Lp-3.mjs";
import { A as ArrowRight } from "./sparkles-BaekIIEr.mjs";
import { m as motion } from "./proxy-CLY1anNz.mjs";
import { C as Check } from "./Combination-DKTsQdmt.mjs";
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-4xl border bg-card shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AspectRatio, { ratio: 4 / 3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.featured_image || product.category?.image_url || "", alt: product.title, className: "h-full w-full object-cover" }) }) }),
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
export {
  ProductDetail as component
};
