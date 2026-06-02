import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { B as Button, f as listPublicProducts } from "./router-C6I0yXNU.mjs";
import { S as Stagger, a as StaggerItem, R as Reveal } from "./Reveal-ChVbx-D6.mjs";
import { P as ProductCard } from "./ProductCard-C1o1X-Zz.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { a as ArrowRight, p as Phone, v as Star, t as ShieldCheck, x as Truck, L as Layers, u as Sparkles, B as Boxes, i as Leaf, r as Printer, Q as Quote } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./server-DLEnHz65.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
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
import "../_libs/zod.mjs";
import "../_libs/radix-ui__react-aspect-ratio.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "./badge-DFwhzUIH.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const heroImg = "/assets/hero-boxes-w2YvKlQQ.jpg";
const trust = [{
  icon: ShieldCheck,
  title: "Quality guaranteed",
  desc: "ISO-grade materials, pre-production samples on every order."
}, {
  icon: Truck,
  title: "Fast worldwide delivery",
  desc: "10–14 day production, DDP shipping to 60+ countries."
}, {
  icon: Layers,
  title: "Premium materials",
  desc: "From rigid greyboard to FSC-certified recycled stock."
}, {
  icon: Sparkles,
  title: "Custom branding",
  desc: "Foil, emboss, spot UV, Pantone matching — done in-house."
}];
const services = [{
  icon: Boxes,
  title: "Custom Packaging",
  desc: "Built to your dieline, brand and product spec."
}, {
  icon: Sparkles,
  title: "Luxury Boxes",
  desc: "Rigid wrapped construction with magnetic closures."
}, {
  icon: Layers,
  title: "Product Packaging",
  desc: "Retail-ready folding cartons in any volume."
}, {
  icon: Leaf,
  title: "Eco Packaging",
  desc: "Recycled stock, soy inks, fully compostable options."
}, {
  icon: Printer,
  title: "Printing Solutions",
  desc: "Offset, digital, foil, embossing and spot UV."
}, {
  icon: Truck,
  title: "Bulk Orders",
  desc: "Volume pricing from 500 to 500,000 units."
}];
const testimonials = [{
  name: "Maya Chen",
  role: "Founder, Bloom Skincare",
  quote: "Our unboxing went from forgettable to a hero on TikTok. PackifyBoxes nailed the brief on the first sample."
}, {
  name: "Daniel Park",
  role: "Head of Ops, Northshift Co.",
  quote: "Reliable, fast, and the print quality is genuinely premium. They feel like an extension of our team."
}, {
  name: "Aisha Rahman",
  role: "Brand Lead, Olea & Co.",
  quote: "The consultant guided us through materials we'd never have considered. Cost down 22%, perceived value way up."
}];
function HomePage() {
  const fetchProducts = useServerFn(listPublicProducts);
  const {
    data: featuredProducts = [],
    isLoading
  } = useQuery({
    queryKey: ["home", "featured-products"],
    queryFn: () => fetchProducts()
  });
  const visibleFeaturedProducts = featuredProducts.filter((product) => product.is_featured);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight pt-20 pb-24 md:pt-32 md:pb-32 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1]
        }, className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/70 backdrop-blur px-3 py-1.5 text-xs text-ink-muted mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
          "Trusted by brands worldwide"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 24
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          delay: 0.05,
          ease: [0.16, 1, 0.3, 1]
        }, className: "font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance", children: [
          "Packaging that makes ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-primary not-italic font-extrabold", children: "your brand" }),
          " impossible to forget."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 24
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          delay: 0.15
        }, className: "mt-6 text-lg text-ink-muted max-w-xl", children: "Custom boxes designed, printed and delivered for modern brands. From luxury rigid gift boxes to eco-friendly mailers — engineered in-house, shipped worldwide." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 24
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          delay: 0.25
        }, className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-accent border-0 shadow-elegant hover:shadow-glow transition-all group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/quote", children: [
            "Get a custom quote",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-2 h-4 w-4" }),
            " Talk to a consultant"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          duration: 1,
          delay: 0.5
        }, className: "mt-10 flex items-center gap-6 text-xs text-ink-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({
              length: 5
            }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-primary text-primary" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "4.9/5 from 800+ brands" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block h-3 w-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Pre-production samples available" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.96
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }, className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 bg-gradient-accent opacity-20 blur-3xl rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-3xl overflow-hidden shadow-elegant border border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Premium custom packaging boxes — luxury rigid, kraft and cosmetic", width: 1600, height: 1280, className: "w-full h-auto object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          delay: 0.8
        }, className: "absolute -bottom-5 -left-5 rounded-2xl bg-surface-elevated border border-border shadow-elegant p-4 max-w-50 hidden sm:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display", children: "10–14 days" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ink-muted mt-1", children: "Average production time" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/60 bg-surface/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-tight py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8", children: trust.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(StaggerItem, { className: "flex gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: t.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted mt-1", children: t.desc })
      ] })
    ] }, t.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-3", children: "What we do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl max-w-2xl text-balance", children: "Multiple packaging services. One studio. End-to-end." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-2xl border bg-card p-7 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-grid place-items-center h-11 w-11 rounded-xl bg-gradient-accent text-primary-foreground mb-5 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted", children: s.desc })
      ] }) }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 bg-surface/50 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-3", children: "Featured categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl max-w-2xl text-balance", children: "Featured products chosen in the admin." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", children: [
          "Browse all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
        ] }) }) })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: Array.from({
        length: 3
      }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full min-h-128 rounded-3xl border bg-card shadow-soft" }, index)) }) : visibleFeaturedProducts.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: visibleFeaturedProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }) }, product.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-card p-8 text-center shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: "No featured products yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-muted", children: "Mark a product as featured in the admin panel and it will appear here automatically." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32 bg-gradient-dark text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-3", children: "Free consultation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-balance text-background", children: "Not sure where to start? Our packaging consultants will guide you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-background/70 max-w-lg", children: "Tell us about your product and brand. Within 24 hours, a packaging consultant will recommend materials, finishes and dieline — completely free, no obligation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-primary border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Book a free call" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "bg-transparent text-background border-background/30 hover:bg-background/10 hover:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", children: "Request a quote" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [{
        num: "Free Shipping",
        label: "Across United States"
      }, {
        num: "Certain Charges",
        label: "for Shipping World Wide"
      }, {
        num: "24h",
        label: "Avg response"
      }, {
        num: "60+",
        label: "Countries delivered"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl text-background", children: s.num }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-background/60 mt-1", children: s.label })
      ] }, s.label)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-primary mb-3", children: "Loved by brand teams" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl max-w-2xl text-balance", children: "Built on trust, repeat orders and great unboxings." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stagger, { className: "mt-12 grid md:grid-cols-3 gap-5", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "h-full rounded-2xl border bg-card p-7 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-6 w-6 text-primary/60 mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-lg leading-relaxed", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 pt-5 border-t", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ink-muted mt-0.5", children: t.role })
        ] })
      ] }) }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24 md:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-accent p-10 md:p-16 text-primary-foreground shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-72 w-72 rounded-full bg-background/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-foreground/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl text-balance", children: "Ready to package something unforgettable?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-primary-foreground/90 text-lg max-w-xl", children: "Get a free consultation, samples and a tailored quote in under 24 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-background text-foreground hover:bg-background/90 border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/quote", children: [
            "Start my quote ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Talk to a consultant" }) })
        ] })
      ] })
    ] }) }) }) })
  ] });
}
export {
  HomePage as component
};
