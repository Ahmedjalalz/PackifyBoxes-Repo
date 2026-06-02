import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Award, Recycle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PackifyBoxes" },
      { name: "description", content: "PackifyBoxes is a premium custom packaging studio helping ambitious brands ship memorable products since 2015." },
      { property: "og:title", content: "About — PackifyBoxes" },
      { property: "og:description", content: "A premium custom packaging studio for ambitious brands." },
      { property: "og:url", content: "https://packifyboxes.com/about" },
      { property: "og:image", content: "/packify-icon-OG.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About — PackifyBoxes" },
      { name: "twitter:description", content: "PackifyBoxes is a premium custom packaging studio helping ambitious brands ship memorable products since 2015." },
      { name: "twitter:image", content: "/packify-icon-OG.png" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Craft", desc: "Every box is treated like a brand asset, not a commodity." },
  { icon: Heart, title: "Partnership", desc: "We work as an extension of your team, from sketch to shipment." },
  { icon: Recycle, title: "Responsibility", desc: "Sustainable materials and processes are the default, not the upsell." },
  { icon: Sparkles, title: "Detail", desc: "Foil registration, color matching, fit and finish — obsessively." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero">
        <div className="container-tight py-24 md:py-32">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Our story</p>
            <h1 className="font-display text-5xl md:text-7xl max-w-3xl text-balance leading-[1.02]">
              We build packaging that makes products feel like the gift they are.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted">
              Packify Boxes was founded with the vision of helping businesses strengthen their brand identity through premium custom packaging solutions. We believe that packaging is more than just a container — it is a powerful representation of a brand and often the first impression a customer experiences.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-ink-muted">
              With a strong focus on innovation, quality, and functionality, we create packaging solutions that not only protect products but also enhance brand presentation and customer engagement. Our commitment to excellence ensures that every packaging design reflects professionalism, creativity, and attention to detail.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-tight grid lg:grid-cols-3 gap-12">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Why we exist</p>
            <h2 className="font-display text-3xl md:text-4xl text-balance">Mission & values</h2>
          </Reveal>
          <div className="lg:col-span-2 space-y-12">
            <Reveal>
              <h3 className="font-display text-2xl mb-2">Mission</h3>
              <p className="text-ink-muted">
                To make premium custom packaging accessible — so any brand, at any volume, can ship
                something worth opening.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="font-display text-2xl mb-2">Vision</h3>
              <p className="text-ink-muted">
                A world where every box your customer receives feels intentional, sustainable and
                unmistakably yours.
              </p>
            </Reveal>
            <Stagger className="grid sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="rounded-2xl border bg-card p-6 shadow-soft h-full">
                    <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary mb-4">
                      <v.icon className="h-5 w-5" />
                    </span>
                    <h4 className="font-display text-xl mb-1">{v.title}</h4>
                    <p className="text-sm text-ink-muted">{v.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-dark text-background">
        <div className="container-tight grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: "10+", label: "Years of team experience" },
            { num: "1,200+", label: "Premium products delivered" },
            { num: "500+", label: "Unique designs & variations" },
            { num: "60+", label: "Countries we ship to" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl text-background">{s.num}</p>
              <p className="text-sm text-background/60 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-tight text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-balance max-w-2xl mx-auto">
              Let's talk about your next launch.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-gradient-accent border-0">
                <Link to="/quote">Get a quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Talk to a consultant</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
