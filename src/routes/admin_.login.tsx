import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAdminSession, signInAdmin } from "@/lib/admin";

export const Route = createFileRoute("/admin_/login")({
  head: () => ({ meta: [{ title: "Admin Login — PackifyBoxes" }] }),
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let mounted = true;

    getAdminSession()
      .then((session) => {
        if (mounted && session) {
          navigate({ to: "/admin" });
        }
      })
      .catch(() => {
        // Ignore session lookup errors on the login page.
      });

    return () => {
      mounted = false;
    };
  }, [navigate]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await signInAdmin(email, password);

      if (error || !data.session) {
        toast.error(error?.message || "Invalid credentials");
        return;
      }

      toast.success("Welcome back, admin");
      navigate({ to: "/admin" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Invalid credentials");
    }
  };

  return (
    <section className="min-h-[80vh] grid place-items-center py-16 bg-gradient-hero">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm">
        <p className="text-xs uppercase tracking-widest text-primary mb-2">Admin</p>
        <h1 className="font-display text-3xl mb-6">Sign in</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">Sign in</Button>
          <div className="flex justify-end">
            <Button asChild variant="link" className="h-auto p-0 text-xs font-medium text-ink-muted">
              <Link to="/admin/forgot-password">Forgot password?</Link>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
