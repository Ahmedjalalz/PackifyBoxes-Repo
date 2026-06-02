"use client";
import { useState, type ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";
import { submitQuote } from "@/lib/quotes.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(1, "Required").max(100),
  company: z.string().max(150).optional(),
  email: z.string().email("Valid email required"),
  phone: z.string().max(40).optional(),
  boxType: z.string().min(1, "Pick a box type"),
  dimensions: z.string().max(120).optional(),
  quantity: z.coerce.number().int().min(1, "Min 1").max(10_000_000),
  material: z.string().optional(),
  printing: z.string().optional(),
  notes: z.string().max(2000).optional(),
  attachmentFileName: z.string().optional(),
  attachmentContentType: z.string().optional(),
  attachmentBase64Data: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const BOX_TYPES = ["Cosmetic", "Food", "Shipping", "Luxury / Rigid", "Retail / Product", "Custom"];
const MATERIALS = ["Kraft", "Corrugated", "Cardboard (SBS)", "Rigid Board", "Recycled Eco", "Custom"];
const PRINTING = ["Offset", "Digital", "UV Coating", "Foil Stamping", "Embossing", "Custom"];

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [done, setDone] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const send = useServerFn(submitQuote);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", boxType: "", quantity: 500 },
  });

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);

    if (!file) {
      form.setValue("attachmentFileName", undefined);
      form.setValue("attachmentContentType", undefined);
      form.setValue("attachmentBase64Data", undefined);
      return;
    }

    const base64Data = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error("Unable to read file"));
      reader.readAsDataURL(file);
    });

    form.setValue("attachmentFileName", file.name);
    form.setValue("attachmentContentType", file.type || "application/octet-stream");
    form.setValue("attachmentBase64Data", base64Data);
  };

  const onSubmit = async (values: FormValues) => {
    try {
      await send({ data: values });
      setDone(true);
      toast.success("Quote request sent — we'll reply within 24h.");
      form.reset();
      setSelectedFile(null);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong");
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center shadow-soft">
        <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 grid place-items-center mb-4">
          <CheckCircle2 className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-display text-2xl mb-2">Request received</h3>
        <p className="text-sm text-ink-muted mb-5">
          A packaging consultant will reach out within one business day with samples and a tailored quote.
        </p>
        <Button variant="outline" onClick={() => setDone(false)}>Submit another</Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={compact ? "space-y-4" : "rounded-2xl border bg-card p-6 md:p-8 shadow-soft space-y-5"}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full name" error={form.formState.errors.name?.message}>
          <Input {...form.register("name")} placeholder="Jane Cooper" />
        </Field>
        <Field label="Company">
          <Input {...form.register("company")} placeholder="Acme Co." />
        </Field>
        <Field label="Email" error={form.formState.errors.email?.message}>
          <Input type="email" {...form.register("email")} placeholder="you@brand.com" />
        </Field>
        <Field label="Phone">
          <Input type="tel" {...form.register("phone")} placeholder="+1 555 010 4242" />
        </Field>
        <Field label="Box type" error={form.formState.errors.boxType?.message}>
          <Select
            value={form.watch("boxType")}
            onValueChange={(v) => form.setValue("boxType", v, { shouldValidate: true })}
          >
            <SelectTrigger><SelectValue placeholder="Choose…" /></SelectTrigger>
            <SelectContent>
              {BOX_TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Quantity" error={form.formState.errors.quantity?.message}>
          <Input type="number" min={1} {...form.register("quantity")} />
        </Field>
        <Field label="Dimensions (LxWxH mm)">
          <Input {...form.register("dimensions")} placeholder="200 x 150 x 80" />
        </Field>
        <Field label="Material">
          <Select value={form.watch("material") ?? ""} onValueChange={(v) => form.setValue("material", v)}>
            <SelectTrigger><SelectValue placeholder="Choose…" /></SelectTrigger>
            <SelectContent>
              {MATERIALS.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Printing" className="sm:col-span-2">
          <Select value={form.watch("printing") ?? ""} onValueChange={(v) => form.setValue("printing", v)}>
            <SelectTrigger><SelectValue placeholder="Choose…" /></SelectTrigger>
            <SelectContent>
              {PRINTING.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </Field>
      </div>
      <Field label="Reference file (optional)">
        <Input
          type="file"
          accept="image/*,.pdf"
          onChange={handleFileChange}
        />
        <p className="text-xs text-ink-muted mt-1">
          Upload a sketch, reference image or PDF if it helps explain your idea.
        </p>
        {selectedFile ? <p className="text-xs text-ink-muted mt-1">Selected: {selectedFile.name}</p> : null}
      </Field>
      <Field label="Additional notes">
        <Textarea rows={4} {...form.register("notes")} placeholder="Tell us about your brand, timeline, references…" />
      </Field>
      <Button
        type="submit"
        size="lg"
        disabled={form.formState.isSubmitting}
        className="w-full bg-gradient-accent border-0 shadow-soft hover:shadow-glow transition-all"
      >
        {form.formState.isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
        Send my quote request
      </Button>
      <p className="text-xs text-ink-muted text-center">
        We typically respond in under 24 hours. Free consultation included.
      </p>
    </form>
  );
}

function Field({
  label, children, error, className,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <div className={`space-y-1.5 ${className ?? ""}`}>
      <Label className="text-xs font-medium text-ink-muted uppercase tracking-wide">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
