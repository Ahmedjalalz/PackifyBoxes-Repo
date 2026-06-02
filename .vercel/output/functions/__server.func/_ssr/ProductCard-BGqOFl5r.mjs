import { N as jsxRuntimeExports, Y as reactExports } from "./server-BQ-xwmlc.mjs";
import { L as Link, I as truncateText, d as cn, h as createSlot } from "./router-WJfh7UaR.mjs";
import { B as Badge } from "./badge-Bt3S7p68.mjs";
import { S as Sparkles, A as ArrowRight } from "./sparkles-BaekIIEr.mjs";
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "AspectRatio";
var AspectRatio$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { ratio = 1 / 1, style, ...aspectRatioProps } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / ratio}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            ...aspectRatioProps,
            ref: forwardedRef,
            style: {
              ...style,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
AspectRatio$1.displayName = NAME;
var Root = AspectRatio$1;
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
