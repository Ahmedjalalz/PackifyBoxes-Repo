import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { e as useRouterState, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useServerFn } from "./useServerFn-DL2oePlL.mjs";
import { B as Button, f as listPublicProducts, l as listCmsCategories } from "./router-C6I0yXNU.mjs";
import { I as Input } from "./input-CGflCgqm.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./select-CtpMN1e0.mjs";
import { S as Skeleton } from "./skeleton-DsCNmSG7.mjs";
import { R as Reveal, S as Stagger } from "./Reveal-ChVbx-D6.mjs";
import { P as ProductCard } from "./ProductCard-C1o1X-Zz.mjs";
import "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { S as Search, F as Funnel } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/zod.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
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
import "../_libs/radix-ui__react-aspect-ratio.mjs";
import "./badge-DFwhzUIH.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const cosmetic = "/assets/cat-cosmetic-CdYDYfiM.jpg";
const food = "/assets/cat-food-CA6WOI_t.jpg";
const shipping = "/assets/cat-shipping-DOVu32CW.jpg";
const luxury = "/assets/cat-luxury-CLAxY9-G.jpg";
const retail = "/assets/cat-retail-6yq9_vvw.jpg";
const eco = "/assets/cat-eco-CjBJmuC7.jpg";
const categories = [
  { value: "cosmetic", label: "Cosmetic Boxes", image: cosmetic, blurb: "Soft-touch finishes, embossed logos, foiled details." },
  { value: "food", label: "Food Packaging", image: food, blurb: "Food-safe kraft, grease-resistant inks, custom dielines." },
  { value: "shipping", label: "Shipping Boxes", image: shipping, blurb: "Durable corrugated mailers built for the journey." },
  { value: "luxury", label: "Luxury Boxes", image: luxury, blurb: "Rigid construction, magnetic closures, premium liners." },
  { value: "product", label: "Retail Packaging", image: retail, blurb: "Shelf-ready product boxes with premium printing." },
  { value: "custom", label: "Eco Packaging", image: eco, blurb: "Recycled fibers, soy inks, fully compostable options." }
];
const materialsInfo = [
  { name: "Kraft", desc: "Natural, sustainable, recognizable — perfect for eco brands and food." },
  { name: "Corrugated", desc: "Single or double-wall protection for shipping and ecommerce." },
  { name: "Cardboard (SBS)", desc: "Smooth, bright white substrate ideal for premium printing." },
  { name: "Rigid Board", desc: "Heavyweight wrapped board for luxury gift and product boxes." },
  { name: "Recycled Eco", desc: "Post-consumer fibers and compostable coatings." },
  { name: "Custom", desc: "Need a specific substrate? We source materials to match your brief." }
];
const printingInfo = [
  { name: "Offset", desc: "Photographic quality CMYK with Pantone matching at any volume." },
  { name: "UV Coating", desc: "Spot or full UV for a glossy, tactile highlight." },
  { name: "Foil Stamping", desc: "Gold, silver, rose and holographic foils." },
  { name: "Embossing", desc: "Raised tactile elements for true premium feel." },
  { name: "Digital", desc: "Short runs, variable data, fast turnarounds." },
  { name: "Custom", desc: "Tell us the effect you want and we’ll build the print finish around it." }
];
function ProductsRouteShell() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname
  });
  const isDetailRoute = pathname.startsWith("/products/") && pathname !== "/products/";
  if (isDetailRoute) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProductsPage, {});
}
function ProductsPage() {
  const fetchProducts = useServerFn(listPublicProducts);
  const fetchCategories = useServerFn(listCmsCategories);
  const [search, setSearch] = reactExports.useState("");
  const [category, setCategory] = reactExports.useState("all");
  const [page, setPage] = reactExports.useState(1);
  const deferredSearch = reactExports.useDeferredValue(search);
  reactExports.useEffect(() => {
    setPage(1);
  }, [category, deferredSearch]);
  const {
    data: products = [],
    isLoading: productsLoading
  } = useQuery({
    queryKey: ["public", "products"],
    queryFn: async () => fetchProducts()
  });
  const {
    data: categories$1 = []
  } = useQuery({
    queryKey: ["public", "categories"],
    queryFn: () => fetchCategories()
  });
  const [clientProducts, setClientProducts] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!productsLoading && products.length === 0) {
      fetchProducts().then((res) => setClientProducts(Array.isArray(res) ? res : [])).catch(() => setClientProducts([]));
    }
  }, [productsLoading, products.length, fetchProducts]);
  reactExports.useEffect(() => {
    let mounted = true;
    fetchProducts().then((res) => mounted && setClientProducts(Array.isArray(res) ? res : [])).catch(() => mounted && setClientProducts([]));
    return () => {
      mounted = false;
    };
  }, []);
  const renderedProducts = clientProducts ?? products;
  const categoryOptions = categories$1.length > 0 ? categories$1 : categories.map((category2) => ({
    id: category2.value,
    slug: category2.value,
    name: category2.label,
    description: category2.blurb,
    image_url: category2.image,
    sort_order: null,
    created_at: "",
    updated_at: null
  }));
  const filteredProducts = reactExports.useMemo(() => {
    const term = deferredSearch.trim().toLowerCase();
    return renderedProducts.filter((product) => {
      const matchesTerm = !term || [product.title, product.slug, product.short_description, product.category?.name].filter(Boolean).some((value) => String(value).toLowerCase().includes(term));
      const matchesCategory = category === "all" || product.category_id === category;
      return matchesTerm && matchesCategory;
    });
  }, [category, deferredSearch, renderedProducts]);
  const pageSize = 9;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visibleProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-16 top-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight relative py-20 md:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: "Products" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 max-w-4xl font-display text-5xl leading-[1.02] text-balance md:text-7xl", children: "Premium packaging, organised like a modern CMS." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-lg text-ink-muted", children: "Browse published products by category, search by packaging type, and jump into product details built from the same relational content that powers the admin." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { title: "Published products", value: products.filter((product) => product.is_published).length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { title: "Featured products", value: products.filter((product) => product.is_featured).length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { title: "Categories", value: categoryOptions.length })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 rounded-3xl border bg-card p-4 shadow-soft lg:grid-cols-[1.5fr_0.8fr] xl:grid-cols-[1.5fr_0.8fr_0.8fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: search, onChange: (event) => setSearch(event.target.value), placeholder: "Search products, slugs, descriptions, categories", className: "pl-9" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: category, onValueChange: setCategory, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Filter by category" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All categories" }),
            categoryOptions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: item.id, children: item.name }, item.id))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "justify-start", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/quote", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-4 w-4" }),
          " Request a quote"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Stagger, { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3", children: [
        productsLoading && Array.from({
          length: 6
        }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-128 rounded-3xl" }) }, index)),
        !productsLoading && visibleProducts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full rounded-3xl border bg-card p-12 text-center shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "No products found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-ink-muted", children: "Try a different search or clear the category filter." })
        ] }),
        !productsLoading && visibleProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }) }, product.id))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 rounded-3xl border bg-card p-4 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Showing ",
          visibleProducts.length,
          " of ",
          filteredProducts.length,
          " products"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setPage((value) => Math.max(1, value - 1)), disabled: currentPage === 1, children: "Previous" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
            "Page ",
            currentPage,
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setPage((value) => Math.min(totalPages, value + 1)), disabled: currentPage === totalPages, children: "Next" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { title: "Materials", eyebrow: "From sustainable kraft to luxury rigid board.", description: "We stock every common substrate and source specialty materials on request. Not sure which to pick? Our consultants will recommend the best fit." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemGrid, { items: materialsInfo }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { title: "Printing & finishes", eyebrow: "Print, foil, emboss — done in-house.", description: "Five core techniques, infinite combinations. Mix and match to land on a finish that's unmistakably yours." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemGrid, { items: printingInfo })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-4 md:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-accent p-8 text-primary-foreground shadow-elegant md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-72 w-72 rounded-full bg-background/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-foreground/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center gap-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary-foreground/70", children: "Custom quote" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl text-balance md:text-5xl", children: "Didn't find exactly what you need? We'll build it for you." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-primary-foreground/85", children: "Tell us the box style, material, and finish you have in mind, and our team will put together a custom quote tailored to your project." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-background text-foreground hover:bg-background/90 border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", children: "Request a custom quote" }) })
      ] })
    ] }) }) })
  ] });
}
function StatCard({
  title,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
    y: -4
  }, transition: {
    duration: 0.25
  }, className: "rounded-3xl border bg-card p-5 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-4xl", children: value })
  ] });
}
function SectionHeading({
  title,
  eyebrow,
  description
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl text-balance md:text-5xl", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-3xl text-ink-muted", children: description })
  ] });
}
function ItemGrid({
  items
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border bg-card p-6 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: item.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-6 text-ink-muted", children: item.desc })
  ] }, item.name)) });
}
export {
  ProductsRouteShell as component
};
