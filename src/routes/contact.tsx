import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PackifyBoxes" },
      { name: "description", content: "Get in touch with PackifyBoxes for custom packaging consultations, samples and quotes. Our team replies within 24 hours." },
      { property: "og:title", content: "Contact PackifyBoxes" },
      { property: "og:description", content: "Talk to a packaging consultant — free, no obligation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="py-24 md:py-32 bg-gradient-hero min-h-[80vh]">
      <div className="container-tight grid lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-primary mb-3">Contact us</p>
          <h1 className="font-display text-5xl md:text-6xl text-balance leading-[1.05]">
            Talk to a packaging consultant.
          </h1>
          <p className="mt-5 text-lg text-ink-muted max-w-md">
            Tell us about your product. We'll recommend materials, finishes and dimensions —
            free, no obligation, reply within 24 hours.
          </p>

          <dl className="mt-10 space-y-5">
            {[
              { icon: Mail, label: "Email", value: "contact@packifyboxes.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 010-4242" },
              { icon: MapPin, label: "Office", value: "240 Industrial Way, Brooklyn NY 11217" },
              { icon: Clock, label: "Hours", value: "Mon–Fri, 9am–6pm ET" },
            ].map((i) => (
              <div key={i.label} className="flex gap-4">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary shrink-0">
                  <i.icon className="h-4 w-4" />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ink-muted">{i.label}</dt>
                  <dd className="text-sm font-medium mt-0.5">{i.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
