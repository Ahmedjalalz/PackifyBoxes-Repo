import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { getPublicProductBySlug, listPublicProducts } from "@/lib/product.cms";

export const Route = createFileRoute("/products/$slug")({
  loader: async ({ params }) => {
    const product = await getPublicProductBySlug({ data: params.slug });
    if (!product) throw notFound();

    const allProducts = await listPublicProducts({ data: undefined });
    const related = product.category_id
      ? allProducts.filter((item) => item.slug !== product.slug && item.category_id === product.category_id).slice(0, 3)
      : [];

    return { product, related };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    return {
      meta: [
        { title: product ? `${product.title} — PackifyBoxes` : "Product — PackifyBoxes" },
        { name: "description", content: product?.short_description ?? "Premium custom packaging product." },
        { property: "og:title", content: product?.title ?? "Product" },
        { property: "og:description", content: product?.short_description ?? "Premium custom packaging product." },
        { property: "og:type", content: "product" },
        { property: "og:url", content: product ? `/products/${product.slug}` : "/products" },
        ...(product?.featured_image ? [{ property: "og:image" as const, content: product.featured_image }] : []),
      ],
      links: product ? [{ rel: "canonical", href: `/products/${product.slug}` }] : [],
      scripts: product
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                name: product.title,
                description: product.short_description,
                image: product.featured_image,
                category: product.category?.name,
                brand: { "@type": "Brand", name: "PackifyBoxes" },
              }),
            },
          ]
        : [],
    };
  },
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="container-tight py-32 text-center">
      <h1 className="font-display text-4xl mb-3">Product not found</h1>
      <Link to="/products" className="text-primary underline">
        Back to products
      </Link>
    </div>
  ),
});

function ProductDetail() {
  const loaderData = Route.useLoaderData();
  const { product, related } = loaderData ?? { product: null, related: [] };
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const gallery = useMemo(() => {
    if (product.gallery_images.length > 0) return product.gallery_images;
    if (product.featured_image) return [{ id: product.id, image_url: product.featured_image, alt_text: product.title }];
    return [];
  }, [product]);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        </div>
        <div className="container-tight relative py-10">
          <Link to="/products" className="inline-flex items-center text-sm text-ink-muted transition-colors hover:text-foreground">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> All products
          </Link>
        </div>
        <div className="container-tight relative grid gap-12 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">{product.category?.name ?? "Packaging"}</p>
            <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[1.02] text-balance md:text-7xl">
              {product.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ink-muted">
              {product.short_description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-accent border-0 shadow-soft hover:shadow-glow">
                <Link to="/quote">
                  Request quote <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Talk to consultant</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Badge variant={product.is_published ? "default" : "secondary"}>{product.is_published ? "Published" : "Draft"}</Badge>
              {product.is_featured && <Badge variant="outline">Featured</Badge>}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-4xl border bg-card shadow-elegant">
              <AspectRatio ratio={4 / 3}>
                <img
                  src={product.featured_image || product.category?.image_url || ""}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {gallery.slice(0, 3).map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setLightboxImage(image.image_url)}
                  className="group relative overflow-hidden rounded-2xl border bg-card shadow-soft"
                >
                  <AspectRatio ratio={1}>
                    <img src={image.image_url} alt={image.alt_text || product.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </AspectRatio>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-tight">
          <div className="grid gap-5 lg:grid-cols-2">
            {product.content_sections.map((section) => (
              <motion.article key={section.id} whileHover={{ y: -4 }} className="rounded-3xl border bg-card p-6 shadow-soft">
                <h2 className="font-display text-3xl">{section.heading}</h2>
                <p className="mt-4 whitespace-pre-wrap leading-7 text-ink-muted">{section.content}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-border/60 bg-surface/40">
        <div className="container-tight grid gap-8 lg:grid-cols-2">
          <ListSection title="Box styles" items={product.box_styles} tone="styles" />
          <ListSection title="Materials" items={product.materials} tone="materials" />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-tight space-y-8">
          <SectionHeading
            title="Features"
            description="Key selling points for the product, presented as a single-column list for easier scanning."
          />
          <FeatureSection items={product.features} />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-tight">
          <div className="rounded-4xl bg-gradient-accent p-8 text-primary-foreground shadow-elegant md:p-12 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-primary-foreground/70">Next step</p>
              <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">Need this product in a different size or finish?</h2>
              <p className="mt-4 max-w-2xl text-primary-foreground/85">
                Send us the brief and we’ll tune the structure, material stack, print finish, and unboxing details around your brand.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 border-0">
                <Link to="/quote">Request a quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/10 text-primary-foreground hover:bg-white/20">
                <Link to="/contact">Talk to us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-tight space-y-8">
          {related.length > 0 ? (
            <>
              <SectionHeading title="Related products" description="Other published products from the same category." />
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {related.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>

      <Dialog open={Boolean(lightboxImage)} onOpenChange={(open) => !open && setLightboxImage(null)}>
        <DialogContent className="max-w-6xl overflow-hidden border-0 bg-transparent p-0 shadow-none">
          <img src={lightboxImage || ""} alt={product.title} className="max-h-[90vh] w-full rounded-4xl object-contain" />
        </DialogContent>
      </Dialog>
    </>
  );
}

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-primary">{title}</p>
      <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-ink-muted">{description}</p>
    </div>
  );
}

function ListSection({
  title,
  items,
  tone,
}: {
  title: string;
  items: Array<{ id: string; title: string; description: string }>;
  tone: "styles" | "materials";
}) {
  const shellClassName = "rounded-3xl border border-primary/15 bg-linear-to-br from-primary/5 via-card to-surface/40 p-6 shadow-soft";

  return (
    <div className={shellClassName}>
      <p className="text-xs uppercase tracking-[0.35em] text-primary/80">{title}</p>
      <h3 className="mt-3 font-display text-3xl">{title}</h3>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-primary/10 bg-background/70 p-4">
            <p className="font-medium">{item.title}</p>
            <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureSection({ items }: { items: Array<{ id: string; feature: string }> }) {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-soft">
      <h3 className="font-display text-3xl">Features</h3>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex w-full items-start gap-3 rounded-2xl border bg-surface/50 p-4">
            <div className="mt-0.5 rounded-full bg-primary/10 p-1.5 text-primary">
              <Check className="h-4 w-4" />
            </div>
            <p className="text-sm leading-6">{item.feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
