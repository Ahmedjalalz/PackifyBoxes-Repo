"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";
import { submitContact } from "@/lib/quotes.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  subject: z.string().max(150).optional(),
  message: z.string().min(1).max(2000),
});
type Values = z.infer<typeof schema>;

export function ContactForm() {
  const [done, setDone] = useState(false);
  const send = useServerFn(submitContact);
  const form = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", message: "" } });

  const onSubmit = async (values: Values) => {
    try {
      await send({ data: values });
      setDone(true);
      toast.success("Message sent");
      form.reset();
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
        <h3 className="font-display text-2xl mb-2">Thanks for reaching out</h3>
        <p className="text-sm text-ink-muted mb-5">We'll get back to you shortly.</p>
        <Button variant="outline" onClick={() => setDone(false)}>Send another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-2xl border bg-card p-6 md:p-8 shadow-soft space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-xs uppercase tracking-wide text-ink-muted">Name</Label>
          <Input {...form.register("name")} />
          {form.formState.errors.name && <p className="text-xs text-destructive">Required</p>}
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs uppercase tracking-wide text-ink-muted">Email</Label>
          <Input type="email" {...form.register("email")} />
          {form.formState.errors.email && <p className="text-xs text-destructive">Valid email required</p>}
        </div>
      </div>
      <div className="space-y-1.5">
        <Label className="text-xs uppercase tracking-wide text-ink-muted">Subject</Label>
        <Input {...form.register("subject")} placeholder="What can we help with?" />
      </div>
      <div className="space-y-1.5">
        <Label className="text-xs uppercase tracking-wide text-ink-muted">Message</Label>
        <Textarea rows={5} {...form.register("message")} />
        {form.formState.errors.message && <p className="text-xs text-destructive">Required</p>}
      </div>
      <Button type="submit" disabled={form.formState.isSubmitting} className="bg-gradient-accent border-0 w-full sm:w-auto">
        {form.formState.isSubmitting && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
        Send message
      </Button>
    </form>
  );
}
