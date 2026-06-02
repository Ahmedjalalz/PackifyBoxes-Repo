import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, d as useRouter, e as useRouterState, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent, L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, b as getServerFnById } from "./server-DLEnHz65.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-CXrx7-hG.mjs";
import { X, n as Menu, p as Phone, M as Mail, m as MapPin } from "../_libs/lucide-react.mjs";
import { s as stringType, o as objectType, a as arrayType, b as booleanType, l as literalType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "tslib";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const appCss = "/assets/styles-DHLCxVzq.css";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function truncateText(value, maxLength = 120) {
  const text = value?.trim() ?? "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const logo = "/assets/logo-C6enifer.png";
const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight flex h-20 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "PackifyBoxes", className: "h-12 w-auto" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: "px-3 py-2 text-sm text-ink-muted hover:text-primary transition-colors",
              activeProps: { className: "text-primary" },
              activeOptions: { exact: l.to === "/" },
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Talk to consultant" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", className: "bg-gradient-accent border-0 shadow-soft hover:shadow-glow transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", children: "Get a quote" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Menu",
              className: "md:hidden p-2 -mr-2",
              onClick: () => setOpen((v) => !v),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight py-4 flex flex-col gap-1", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              onClick: () => setOpen(false),
              className: "py-2 text-sm text-ink-muted hover:text-primary transition-colors",
              activeProps: { className: "text-primary font-medium" },
              activeOptions: { exact: l.to === "/" },
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-2 bg-gradient-accent border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", onClick: () => setOpen(false), children: "Get a quote" }) })
        ] }) })
      ]
    }
  );
}
function ClientYear() {
  const [year, setYear] = reactExports.useState("");
  reactExports.useEffect(() => {
    setYear(String((/* @__PURE__ */ new Date()).getFullYear()));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: year || "2025" });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border/60 bg-surface/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight py-16 grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "PackifyBoxes", className: "h-12 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted max-w-sm", children: "Premium custom packaging engineered for ambitious brands. From luxury rigid boxes to sustainable mailers — designed, printed and delivered worldwide." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm text-ink-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1 (555) 010-4242" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "contact@packifyboxes.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "240 Industrial Way, NY" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium mb-3", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-ink-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-primary transition-colors", children: "Products" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-primary transition-colors", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-primary transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium mb-3", children: "Get started" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-ink-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quote", className: "hover:text-primary transition-colors", children: "Request a quote" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-primary transition-colors", children: "Talk to a consultant" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-muted", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClientYear, {}),
        " PackifyBoxes. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Crafted with care for brands worldwide." })
    ] }) })
  ] });
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-20", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight py-32 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-widest text-primary mb-3", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl mb-3", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-muted mb-6", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "text-primary underline", children: "Back to home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-tight py-32 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl mb-3", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-muted mb-6", children: error.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          router2.invalidate();
          reset();
        },
        className: "rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm",
        children: "Try again"
      }
    )
  ] }) });
}
const Route$b = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PackifyBoxes — Premium Custom Packaging for Modern Brands" },
      { name: "description", content: "Custom packaging boxes engineered for ambitious brands — luxury rigid, cosmetic, food, shipping and eco mailers. Get a free consultation and quote." },
      { name: "author", content: "PackifyBoxes" },
      { property: "og:site_name", content: "PackifyBoxes" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#f9f7f3" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700&family=Urbanist:wght@500;600;700;800&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PackifyBoxes",
          description: "Premium custom packaging manufacturer for global brands.",
          url: "/",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-010-4242",
            contactType: "sales",
            email: "contact@packifyboxes.com"
          }
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$b.useRouteContext();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isAdminRoute = pathname.startsWith("/admin");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    isAdminRoute ? /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" })
  ] });
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const productSectionSchema = objectType({
  id: stringType().optional(),
  heading: stringType().min(1, "Heading is required"),
  content: stringType().min(1, "Content is required")
});
const productCardSchema = objectType({
  id: stringType().optional(),
  title: stringType().min(1, "Title is required"),
  description: stringType().min(1, "Description is required")
});
const productFeatureSchema = objectType({
  id: stringType().optional(),
  feature: stringType().min(1, "Feature is required")
});
const galleryImageSchema = objectType({
  id: stringType().optional(),
  image_url: stringType().url("Image URL is required"),
  alt_text: stringType().optional().nullable()
});
const productFormSchema = objectType({
  id: stringType().optional(),
  slug: stringType().min(1).max(120),
  title: stringType().min(2, "Title is required"),
  category_id: stringType().min(1, "Category is required"),
  short_description: stringType().min(8, "Short description is required"),
  featured_image: stringType().url().or(literalType("")).optional().nullable(),
  is_featured: booleanType().default(false),
  is_published: booleanType().default(false),
  meta_title: stringType().max(70).optional().nullable(),
  meta_description: stringType().max(165).optional().nullable(),
  content_sections: arrayType(productSectionSchema).default([]),
  box_styles: arrayType(productCardSchema).default([]),
  materials: arrayType(productCardSchema).default([]),
  features: arrayType(productFeatureSchema).default([]),
  gallery_images: arrayType(galleryImageSchema).default([])
});
const listCmsCategories = createServerFn({
  method: "GET"
}).handler(createSsrRpc("f702a9cb2fb5204041cab250808f6606860d848d4f58cd87ae78cef278102673"));
const createCmsCategory = createServerFn({
  method: "POST"
}).inputValidator((input) => objectType({
  name: stringType().min(2, "Category name is required"),
  slug: stringType().min(2, "Category slug is required"),
  description: stringType().optional().nullable()
}).parse(input)).middleware([requireSupabaseAuth]).handler(createSsrRpc("681d6d9dbf235a6b09772c56ee074143f1c415de364158110332779de5c1221b"));
const listCmsProducts = createServerFn({
  method: "GET"
}).handler(createSsrRpc("d2666bcd10312dd4be304290b407515425b19e40dd52318931c6a5e7e3b1c0b9"));
const listPublicProducts = createServerFn({
  method: "GET"
}).handler(createSsrRpc("3202aff87951064a632a7aeaaf251f1050ace87131d03006b866ee2a3e75bc22"));
createServerFn({
  method: "GET"
}).inputValidator((i) => stringType().parse(i)).handler(createSsrRpc("f11f87ee310200aae6ffce0e3163371d8184c18dd2b9cc6d97f6c98a233b81be"));
const getPublicProductBySlug = createServerFn({
  method: "GET"
}).inputValidator((i) => stringType().parse(i)).handler(createSsrRpc("ecc8fbdf6efb93100cabdf2af1cc080756f1323e7633378c286380fa22bb0283"));
createServerFn({
  method: "GET"
}).inputValidator((i) => stringType().uuid().parse(i)).handler(createSsrRpc("01085035bc267745d0d1c718401d278a9a2f19d77fe3a4c4de19136a22d93e30"));
const saveCmsProduct = createServerFn({
  method: "POST"
}).inputValidator((input) => productFormSchema.parse(input)).middleware([requireSupabaseAuth]).handler(createSsrRpc("3e67d37a22277858f850aeb98f8ae4daa9cc45b9db544f22e0ae2c38bf87c320"));
const deleteCmsProduct = createServerFn({
  method: "POST"
}).inputValidator((input) => stringType().uuid().parse(input)).middleware([requireSupabaseAuth]).handler(createSsrRpc("9bc619d8c670a1c0a19e4778c7a46fb3a960afc9f22121da5e21bf58c1944d75"));
const uploadCmsImageBase64 = createServerFn({
  method: "POST"
}).inputValidator((input) => objectType({
  fileName: stringType().min(1),
  contentType: stringType().min(1),
  base64Data: stringType().min(1)
}).parse(input)).middleware([requireSupabaseAuth]).handler(createSsrRpc("7edd74d38c9bf72238aea5c548f501d1d63109682c9622c15d531e278d39dc8f"));
const BASE_URL = "";
const entries = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/products", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/quote", priority: "0.9", changefreq: "monthly" }
];
const Route$a = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const products = await listPublicProducts({ data: void 0 });
        const productPaths = products.map((p) => ({
          path: `/products/${p.slug}`,
          priority: "0.7",
          changefreq: "monthly"
        }));
        const all = [...entries, ...productPaths];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...all.map(
            (e) => [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              `  </url>`
            ].join("\n")
          ),
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$9 = () => import("./quote-BeIUiyhq.mjs");
const Route$9 = createFileRoute("/quote")({
  head: () => ({
    meta: [{
      title: "Request a Quote — PackifyBoxes"
    }, {
      name: "description",
      content: "Get a free, tailored quote for your custom packaging project. Reply within 24 hours with samples, materials and pricing."
    }, {
      property: "og:title",
      content: "Request a Quote — PackifyBoxes"
    }, {
      property: "og:description",
      content: "Free custom packaging quote in under 24 hours."
    }, {
      property: "og:url",
      content: "/quote"
    }],
    links: [{
      rel: "canonical",
      href: "/quote"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./products-C5I6V9FC.mjs");
const Route$8 = createFileRoute("/products")({
  head: () => ({
    meta: [{
      title: "Products — Custom Packaging Boxes | PackifyBoxes"
    }, {
      name: "description",
      content: "Explore premium custom packaging products with modern materials, box styles, and dynamic content sections."
    }, {
      property: "og:title",
      content: "Custom Packaging Products — PackifyBoxes"
    }, {
      property: "og:description",
      content: "Luxury, cosmetic, food, shipping, retail and eco packaging boxes."
    }, {
      property: "og:url",
      content: "/products"
    }],
    links: [{
      rel: "canonical",
      href: "/products"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./contact-DQ5m_skb.mjs");
const Route$7 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — PackifyBoxes"
    }, {
      name: "description",
      content: "Get in touch with PackifyBoxes for custom packaging consultations, samples and quotes. Our team replies within 24 hours."
    }, {
      property: "og:title",
      content: "Contact PackifyBoxes"
    }, {
      property: "og:description",
      content: "Talk to a packaging consultant — free, no obligation."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./about-D6t23ymm.mjs");
const Route$6 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — PackifyBoxes"
    }, {
      name: "description",
      content: "PackifyBoxes is a premium custom packaging studio helping ambitious brands ship memorable products since 2015."
    }, {
      property: "og:title",
      content: "About — PackifyBoxes"
    }, {
      property: "og:description",
      content: "A premium custom packaging studio for ambitious brands."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./index-Ds6B8uKW.mjs");
const Route$5 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "PackifyBoxes — Premium Custom Packaging Boxes"
    }, {
      name: "description",
      content: "Custom packaging boxes engineered for ambitious brands. Luxury rigid, cosmetic, food, shipping, retail and eco mailers — free consultation and fast quotes."
    }, {
      property: "og:title",
      content: "PackifyBoxes — Premium Custom Packaging"
    }, {
      property: "og:description",
      content: "Premium custom packaging for modern brands. Free consultation and quote."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./admin.index-DOGd4Axn.mjs");
const Route$4 = createFileRoute("/admin/")({
  head: () => ({
    meta: [{
      title: "Admin Panel — PackifyBoxes"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitNotFoundComponentImporter = () => import("./products._slug-OkWKJA-l.mjs");
const $$splitComponentImporter$3 = () => import("./products._slug-C1Rj8koo.mjs");
const Route$3 = createFileRoute("/products/$slug")({
  loader: async ({
    params
  }) => {
    const product = await getPublicProductBySlug({
      data: params.slug
    });
    if (!product) throw notFound();
    const allProducts = await listPublicProducts({
      data: void 0
    });
    const related = product.category_id ? allProducts.filter((item) => item.slug !== product.slug && item.category_id === product.category_id).slice(0, 3) : [];
    return {
      product,
      related
    };
  },
  head: ({
    loaderData
  }) => {
    const product = loaderData?.product;
    return {
      meta: [{
        title: product ? `${product.title} — PackifyBoxes` : "Product — PackifyBoxes"
      }, {
        name: "description",
        content: product?.short_description ?? "Premium custom packaging product."
      }, {
        property: "og:title",
        content: product?.title ?? "Product"
      }, {
        property: "og:description",
        content: product?.short_description ?? "Premium custom packaging product."
      }, {
        property: "og:type",
        content: "product"
      }, {
        property: "og:url",
        content: product ? `/products/${product.slug}` : "/products"
      }, ...product?.featured_image ? [{
        property: "og:image",
        content: product.featured_image
      }] : []],
      links: product ? [{
        rel: "canonical",
        href: `/products/${product.slug}`
      }] : [],
      scripts: product ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.title,
          description: product.short_description,
          image: product.featured_image,
          category: product.category?.name,
          brand: {
            "@type": "Brand",
            name: "PackifyBoxes"
          }
        })
      }] : []
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const $$splitComponentImporter$2 = () => import("./admin_.reset-password-BlFrVHjU.mjs");
const Route$2 = createFileRoute("/admin_/reset-password")({
  head: () => ({
    meta: [{
      title: "Set New Admin Password — PackifyBoxes"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin_.login-B8UQAU4J.mjs");
const Route$1 = createFileRoute("/admin_/login")({
  head: () => ({
    meta: [{
      title: "Admin Login — PackifyBoxes"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin_.forgot-password-qpBcBiKM.mjs");
const Route = createFileRoute("/admin_/forgot-password")({
  head: () => ({
    meta: [{
      title: "Reset Admin Password — PackifyBoxes"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$a.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$b
});
const QuoteRoute = Route$9.update({
  id: "/quote",
  path: "/quote",
  getParentRoute: () => Route$b
});
const ProductsRoute = Route$8.update({
  id: "/products",
  path: "/products",
  getParentRoute: () => Route$b
});
const ContactRoute = Route$7.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$b
});
const AboutRoute = Route$6.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$b
});
const IndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const AdminIndexRoute = Route$4.update({
  id: "/admin/",
  path: "/admin/",
  getParentRoute: () => Route$b
});
const ProductsSlugRoute = Route$3.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ProductsRoute
});
const AdminResetPasswordRoute = Route$2.update({
  id: "/admin_/reset-password",
  path: "/admin/reset-password",
  getParentRoute: () => Route$b
});
const AdminLoginRoute = Route$1.update({
  id: "/admin_/login",
  path: "/admin/login",
  getParentRoute: () => Route$b
});
const AdminForgotPasswordRoute = Route.update({
  id: "/admin_/forgot-password",
  path: "/admin/forgot-password",
  getParentRoute: () => Route$b
});
const ProductsRouteChildren = {
  ProductsSlugRoute
};
const ProductsRouteWithChildren = ProductsRoute._addFileChildren(
  ProductsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ProductsRoute: ProductsRouteWithChildren,
  QuoteRoute,
  SitemapDotxmlRoute,
  AdminForgotPasswordRoute,
  AdminLoginRoute,
  AdminResetPasswordRoute,
  AdminIndexRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Route$3 as R,
  createCmsCategory as a,
  createSsrRpc as b,
  cn as c,
  deleteCmsProduct as d,
  listCmsProducts as e,
  listPublicProducts as f,
  listCmsCategories as l,
  productFormSchema as p,
  router as r,
  saveCmsProduct as s,
  truncateText as t,
  uploadCmsImageBase64 as u
};
