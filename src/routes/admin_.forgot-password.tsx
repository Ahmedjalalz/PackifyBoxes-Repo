import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowLeft, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/Reveal";
import { sendAdminPasswordReset } from "@/lib/admin";

export const Route = createFileRoute("/admin_/forgot-password")({
  head: () => ({ meta: [{ title: "Reset Admin Password — PackifyBoxes" }] }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const { error } = await sendAdminPasswordReset(email);
      if (error) {
        toast.error(error.message);
        return;
      }

      setDone(true);
      toast.success("Reset email sent. Check your inbox.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Unable to send reset email");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="min-h-[80vh] grid place-items-center py-16 bg-gradient-hero">
      <Reveal className="w-full max-w-md">
        <div className="rounded-2xl border bg-card p-8 shadow-sm">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-primary mb-2">Admin</p>
            <h1 className="font-display text-3xl">Reset password</h1>
            <p className="mt-2 text-sm text-ink-muted">
              Enter your admin email and we’ll send a recovery link.
            </p>
          </div>

          {done ? (
            <div className="rounded-xl border bg-surface/50 p-4 text-sm text-ink-muted">
              If the email exists, a reset link has been sent. Open it to set a new password.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@yourdomain.com"
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={sending}>
                {sending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mail className="mr-2 h-4 w-4" />}
                Send reset email
              </Button>
            </form>
          )}

          <div className="mt-6 flex items-center justify-between gap-3 text-sm">
            <Button asChild variant="link" className="h-auto p-0 text-ink-muted">
              <Link to="/admin/login"><ArrowLeft className="mr-2 h-4 w-4" />Back to sign in</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}