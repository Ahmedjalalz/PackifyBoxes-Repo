import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import "../styles.css";
import { SiteLayout } from "@/components/site/SiteLayout";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <div className="container-tight py-32 text-center">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">404</p>
        <h1 className="font-display text-5xl mb-3">Page not found - V2</h1>
        <p className="text-ink-muted mb-6">The page you're looking for doesn't exist.</p>
        <a href="/" className="text-primary underline">Back to home</a>
      </div>
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <SiteLayout>
      <div className="container-tight py-32 text-center">
        <h1 className="font-display text-3xl mb-3">Something went wrong</h1>
        <p className="text-ink-muted mb-6">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm"
        >
          Try again
        </button>
      </div>
    </SiteLayout>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PackifyBoxes — Premium Custom Packaging for Modern Brands" },
      { name: "description", content: "Custom packaging boxes engineered for ambitious brands — luxury rigid, cosmetic, food, shipping and eco mailers. Get a free consultation and quote." },
      { name: "author", content: "PackifyBoxes" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "PackifyBoxes" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/packify-icon-OG.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PackifyBoxes — Premium Custom Packaging for Modern Brands" },
      { name: "twitter:description", content: "Custom packaging boxes engineered for ambitious brands — luxury rigid, cosmetic, food, shipping and eco mailers." },
      { name: "twitter:image", content: "/packify-icon-OG.png" },
      { name: "theme-color", content: "#f9f7f3" },
    ],
    links: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700&family=Urbanist:wght@500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PackifyBoxes",
          description: "Premium custom packaging manufacturer for global brands.",
          url: "https://packifyboxes.com/",
          logo: "https://packifyboxes.com/packify-icon-OG.png",
          image: "https://packifyboxes.com/packify-icon-OG.png",
          sameAs: [
            "https://twitter.com/packifyboxes",
            "https://www.instagram.com/packifyboxes",
            "https://www.linkedin.com/company/packifyboxes"
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-010-4242",
            contactType: "sales",
            email: "contact@packifyboxes.com",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <QueryClientProvider client={queryClient}>
      {isAdminRoute ? <Outlet /> : <SiteLayout><Outlet /></SiteLayout>}
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  );
}