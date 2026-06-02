import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Root } from "../_libs/radix-ui__react-aspect-ratio.mjs";
import { B as Badge } from "./badge-Bn844jvQ.mjs";
import { t as truncateText, c as cn } from "./router-BmYQiT5Q.mjs";
import { u as Sparkles, a as ArrowRight } from "../_libs/lucide-react.mjs";
const AspectRatio = Root;
function ProductCard({
  product,
  className,
  showStatus = false
}) {
  const image = product.featured_image || product.category?.image_url || "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/products/$slug",
      params: { slug: product.slug },
      className: cn(
        "group flex h-full min-h-128 flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AspectRatio, { ratio: 4 / 3, children: image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image,
            alt: product.title,
            className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
            loading: "lazy"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mx-auto h-6 w-6 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-muted", children: "PackifyBoxes" })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-between space-y-4 border-t bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: product.category?.name ?? "Packaging" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl leading-tight text-foreground text-balance", children: product.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "min-h-18 text-sm leading-6 text-ink-muted", children: truncateText(product.short_description ?? "Premium packaging designed for modern brands.", 120) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            showStatus && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: product.is_published ? "default" : "secondary", children: product.is_published ? "Published" : "Draft" }),
              product.is_featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Featured" })
            ] }),
            !showStatus && product.is_featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Featured" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto rounded-full border border-border bg-background p-2 text-primary transition-transform duration-300 group-hover:translate-x-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }) })
          ] })
        ] })
      ]
    }
  );
}
export {
  AspectRatio as A,
  ProductCard as P
};
