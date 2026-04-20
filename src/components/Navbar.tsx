import { Link, useLocation } from "react-router-dom";
import { Droplets, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Officials" },
  { to: "/asha", label: "ASHA Workers" },
  { to: "/report", label: "Report Symptoms" },
];

export const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-xl border-b border-border/50" />
      <nav className="container relative flex h-18 items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition-smooth" />
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft">
              <Droplets className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-lg tracking-tight">JalRakshak</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Early Warning System</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-smooth",
                pathname === l.to
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login"><Button variant="ghost" size="sm">Login</Button></Link>
          <Link to="/register"><Button variant="hero" size="sm">Get Started</Button></Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden relative bg-background/95 backdrop-blur-xl border-b border-border/50 px-6 pb-4 space-y-1">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-accent/40">
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <Link to="/login" className="flex-1" onClick={() => setOpen(false)}><Button variant="outline" className="w-full">Login</Button></Link>
            <Link to="/register" className="flex-1" onClick={() => setOpen(false)}><Button variant="hero" className="w-full">Sign Up</Button></Link>
          </div>
        </div>
      )}
    </header>
  );
};
