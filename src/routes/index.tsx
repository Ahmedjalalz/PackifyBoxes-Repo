import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, Truck, Leaf, Layers, Printer, Boxes,
  ShieldCheck, Phone, Quote as QuoteIcon, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { listPublicProducts, type CmsProduct } from "@/lib/product.cms";
import heroImg from "@/assets/hero-boxes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PackifyBoxes — Premium Custom Packaging Boxes" },
      { name: "description", content: "Custom packaging boxes engineered for ambitious brands. Luxury rigid, cosmetic, food, shipping, retail and eco mailers — free consultation and fast quotes." },
      { property: "og:title", content: "PackifyBoxes — Premium Custom Packaging" },
      { property: "og:description", content: "Premium custom packaging for modern brands. Free consultation and quote." },
      { property: "og:url", content: "https://packifyboxes.com/" },
      { property: "og:image", content: "/packify-icon-OG.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PackifyBoxes — Premium Custom Packaging Boxes" },
      { name: "twitter:description", content: "Custom packaging boxes engineered for ambitious brands. Luxury rigid, cosmetic, food, shipping, retail and eco mailers." },
      { name: "twitter:image", content: "/packify-icon-OG.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const trust = [
  { icon: ShieldCheck, title: "Quality guaranteed", desc: "ISO-grade materials, pre-production samples on every order." },
  { icon: Truck, title: "Fast worldwide delivery", desc: "10–14 day production, DDP shipping to 60+ countries." },
  { icon: Layers, title: "Premium materials", desc: "From rigid greyboard to FSC-certified recycled stock." },
  { icon: Sparkles, title: "Custom branding", desc: "Foil, emboss, spot UV, Pantone matching — done in-house." },
];

const services = [
  { icon: Boxes, title: "Custom Packaging", desc: "Built to your dieline, brand and product spec." },
  { icon: Sparkles, title: "Luxury Boxes", desc: "Rigid wrapped construction with magnetic closures." },
  { icon: Layers, title: "Product Packaging", desc: "Retail-ready folding cartons in any volume." },
  { icon: Leaf, title: "Eco Packaging", desc: "Recycled stock, soy inks, fully compostable options." },
  { icon: Printer, title: "Printing Solutions", desc: "Offset, digital, foil, embossing and spot UV." },
  { icon: Truck, title: "Bulk Orders", desc: "Volume pricing from 500 to 500,000 units." },
];

const testimonials = [
  { name: "Maya Chen", role: "Founder, Bloom Skincare", quote: "Our unboxing went from forgettable to a hero on TikTok. PackifyBoxes nailed the brief on the first sample." },
  { name: "Daniel Park", role: "Head of Ops, Northshift Co.", quote: "Reliable, fast, and the print quality is genuinely premium. They feel like an extension of our team." },
  { name: "Aisha Rahman", role: "Brand Lead, Olea & Co.", quote: "The consultant guided us through materials we'd never have considered. Cost down 22%, perceived value way up." },
];

function HomePage() {
  const fetchProducts = useServerFn(listPublicProducts);
  const { data: featuredProducts = [], isLoading } = useQuery<CmsProduct[]>({
    queryKey: ["home", "featured-products"],
    queryFn: () => fetchProducts(),
  });

  const visibleFeaturedProducts = featuredProducts.filter((product) => product.is_featured);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-tight pt-20 pb-24 md:pt-32 md:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/70 backdrop-blur px-3 py-1.5 text-xs text-ink-muted mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Trusted by brands worldwide
            </motion.div>
            <h1
              className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance"
            >
              Packaging that makes <em className="text-primary not-italic font-extrabold">your brand</em> impossible to forget.
            </h1>
            <p
              className="mt-6 text-lg text-ink-muted max-w-xl"
            >
              Custom boxes designed, printed and delivered for modern brands. From luxury rigid
              gift boxes to eco-friendly mailers — engineered in-house, shipped worldwide.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="bg-gradient-accent border-0 shadow-elegant hover:shadow-glow transition-all group">
                <Link to="/quote">
                  Get a custom quote
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact"><Phone className="mr-2 h-4 w-4" /> Talk to a consultant</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10 flex items-center gap-6 text-xs text-ink-muted"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex">{Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}</div>
                <span>4.9/5 from 800+ brands</span>
              </div>
              <div className="hidden sm:block h-3 w-px bg-border" />
              <span className="hidden sm:inline">Pre-production samples available</span>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-accent opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border/60">
              <img
                src={heroImg}
                alt="Premium custom packaging boxes — luxury rigid, kraft and cosmetic"
                width={1600}
                height={1280}
                className="w-full h-auto object-cover"
                fetchPriority="high"
                loading="eager"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-5 -left-5 rounded-2xl bg-surface-elevated border border-border shadow-elegant p-4 max-w-50 hidden sm:block"
            >
              <p className="text-2xl font-display">10–14 days</p>
              <p className="text-xs text-ink-muted mt-1">Average production time</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border/60 bg-surface/50">
        <div className="container-tight py-14">
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trust.map((t) => (
              <StaggerItem key={t.title} className="flex gap-4">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary shrink-0">
                  <t.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{t.title}</h3>
                  <p className="text-sm text-ink-muted mt-1">{t.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container-tight">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary mb-3">What we do</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl text-balance">
              Multiple packaging services. One studio. End-to-end.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="group h-full rounded-2xl border bg-card p-7 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                  <span className="inline-grid place-items-center h-11 w-11 rounded-xl bg-gradient-accent text-primary-foreground mb-5 group-hover:scale-110 transition-transform">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                  <p className="text-sm text-ink-muted">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 md:py-32 bg-surface/50 border-y border-border/60">
        <div className="container-tight">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-primary mb-3">Featured categories</p>
              <h2 className="font-display text-4xl md:text-5xl max-w-2xl text-balance">
                Explore some of our favorite recent packaging projects.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Button asChild variant="outline">
                <Link to="/products">Browse all <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </Reveal>
          </div>

          {isLoading ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-full min-h-128 rounded-3xl border bg-card shadow-soft" />
              ))}
            </div>
          ) : visibleFeaturedProducts.length > 0 ? (
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleFeaturedProducts.map((product) => (
                <StaggerItem key={product.id}>
                  <ProductCard product={product} />
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <div className="rounded-3xl border bg-card p-8 text-center shadow-soft">
              <p className="font-display text-2xl">No featured products yet</p>
              <p className="mt-2 text-sm text-ink-muted">
                Mark a product as featured in the admin panel and it will appear here automatically.
              </p>
            </div>
          )}
        </div>
      </section>



      {/* CONSULTANT */}
      <section className="py-24 md:py-32 bg-gradient-dark text-background">
        <div className="container-tight grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Free consultation</p>
            <h2 className="font-display text-4xl md:text-5xl text-balance text-background">
              Not sure where to start? Our packaging consultants will guide you.
            </h2>
            <p className="mt-6 text-background/70 max-w-lg">
              Tell us about your product and brand. Within 24 hours, a packaging consultant will
              recommend materials, finishes and dieline — completely free, no obligation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary border-0">
                <Link to="/contact">Book a free call</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-background border-background/30 hover:bg-background/10 hover:text-background">
                <Link to="/quote">Request a quote</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "Free Shipping", label: "Across United States" },
                { num: "Certain Charges", label: "for Shipping World Wide" },
                { num: "24h", label: "Avg response" },
                { num: "60+", label: "Countries delivered" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur">
                  <p className="font-display text-4xl text-background">{s.num}</p>
                  <p className="text-sm text-background/60 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="container-tight">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Loved by brand teams</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl text-balance">
              Built on trust, repeat orders and great unboxings.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <figure className="h-full rounded-2xl border bg-card p-7 shadow-soft">
                  <QuoteIcon className="h-6 w-6 text-primary/60 mb-4" />
                  <blockquote className="text-lg leading-relaxed">"{t.quote}"</blockquote>
                  <figcaption className="mt-6 pt-5 border-t">
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-ink-muted mt-0.5">{t.role}</p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container-tight">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-accent p-10 md:p-16 text-primary-foreground shadow-elegant">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-background/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-foreground/10 blur-3xl" />
              <div className="relative max-w-2xl">
                <h2 className="font-display text-4xl md:text-6xl text-balance">
                  Ready to package something unforgettable?
                </h2>
                <p className="mt-5 text-primary-foreground/90 text-lg max-w-xl">
                  Get a free consultation, samples and a tailored quote in under 24 hours.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 border-0">
                    <Link to="/quote">Start my quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    <Link to="/contact">Talk to a consultant</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
