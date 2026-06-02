import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowLeft, Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/Reveal";
import { exchangeAdminRecoveryCode, updateAdminPassword, signOutAdmin, getAdminSession } from "@/lib/admin";

export const Route = createFileRoute("/admin_/reset-password")({
  head: () => ({ meta: [{ title: "Set New Admin Password — PackifyBoxes" }] }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const code = useMemo(() => {
    if (typeof window === "undefined") return null;
    return new URLSearchParams(window.location.search).get("code");
  }, []);

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      try {
        if (code) {
          const { error } = await exchangeAdminRecoveryCode(code);
          if (error) {
            toast.error(error.message);
            return;
          }
        }

        const session = await getAdminSession();
        if (!mounted) return;

        if (!session) {
          toast.error("Your reset link is missing or expired. Please request a new one.");
          return;
        }

        setReady(true);
      } catch (err) {
        if (mounted) {
          toast.error(err instanceof Error ? err.message : "Unable to start password reset");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    init();

    return () => {
      mounted = false;
    };
  }, [code]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setSaving(true);

    try {
      const { error } = await updateAdminPassword(password);
      if (error) {
        toast.error(error.message);
        return;
      }

      await signOutAdmin();
      toast.success("Password updated. Please sign in again.");
      navigate({ to: "/admin/login" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Unable to update password");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="min-h-[80vh] grid place-items-center py-16 bg-gradient-hero">
      <Reveal className="w-full max-w-md">
        <div className="rounded-2xl border bg-card p-8 shadow-sm">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-primary mb-2">Admin</p>
            <h1 className="font-display text-3xl">Set new password</h1>
            <p className="mt-2 text-sm text-ink-muted">
              Create a new password for your admin account.
            </p>
          </div>

          {loading ? (
            <div className="rounded-xl border bg-surface/50 p-4 text-sm text-ink-muted">
              Checking your recovery link...
            </div>
          ) : ready ? (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New password</Label>
                <Input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm new password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={saving}>
                {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lock className="mr-2 h-4 w-4" />}
                Update password
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="rounded-xl border bg-surface/50 p-4 text-sm text-ink-muted">
                The recovery link is missing or expired. Request a new reset email from the sign-in page.
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link to="/admin/forgot-password"><ArrowLeft className="mr-2 h-4 w-4" />Request a new reset email</Link>
              </Button>
            </div>
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