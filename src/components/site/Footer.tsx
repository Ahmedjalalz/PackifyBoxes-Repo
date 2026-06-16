import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

function ClientYear() {
  const [year, setYear] = useState<string>("");
  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);
  return <span>{year || "2025"}</span>;
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/60">
      <div className="container-tight py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <Link to="/" className="inline-flex items-center group">
            <img src={logo} alt="PackifyBoxes" className="h-12 w-auto" />
          </Link>
          <p className="text-sm text-ink-muted max-w-sm">
            Premium custom packaging engineered for ambitious brands. From luxury rigid boxes
            to sustainable mailers — designed, printed and delivered worldwide.
          </p>
          <div className="space-y-1 text-sm text-ink-muted">
            <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /><span>+1 (555) 010-4242</span></div>
            <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /><span>contact@packifyboxes.com</span></div>
            <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /><span>3553 11TH ST, ASTORIA, NY 11106</span></div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-3">Get started</h4>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li><Link to="/quote" className="hover:text-primary transition-colors">Request a quote</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Talk to a consultant</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-tight py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-muted">
          <p>© <ClientYear /> PackifyBoxes. All rights reserved.</p>
          <p>Crafted with care for brands worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
