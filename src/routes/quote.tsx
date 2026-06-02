import { createFileRoute } from "@tanstack/react-router";
import { Clock, Shield, MessageSquareQuote } from "lucide-react";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — PackifyBoxes" },
      { name: "description", content: "Get a free, tailored quote for your custom packaging project. Reply within 24 hours with samples, materials and pricing." },
      { property: "og:title", content: "Request a Quote — PackifyBoxes" },
      { property: "og:description", content: "Free custom packaging quote in under 24 hours." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

const perks = [
  { icon: Clock, title: "24h response", desc: "A consultant replies within one business day." },
  { icon: MessageSquareQuote, title: "Tailored guidance", desc: "We refine materials, finishes and pricing around your brief." },
  { icon: Shield, title: "No obligation", desc: "Quotes are free, detailed and fully transparent." },
];

function QuotePage() {
  return (
    <section className="py-20 md:py-28 bg-gradient-hero min-h-screen">
      <div className="container-tight grid lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-primary mb-3">Request a quote</p>
          <h1 className="font-display text-5xl md:text-6xl text-balance leading-[1.05]">
            Tell us about your box. We'll do the rest.
          </h1>
          <p className="mt-5 text-lg text-ink-muted max-w-md">
            Share a few details and a packaging consultant will follow up with materials,
            finishes, samples and pricing — within 24 hours.
          </p>
          <ul className="mt-10 space-y-5">
            {perks.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary shrink-0">
                  <p.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-sm">{p.title}</p>
                  <p className="text-sm text-ink-muted mt-0.5">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
