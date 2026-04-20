import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Stethoscope, BarChart3, ArrowRight, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const roles = [
  { id: "villager", label: "Villager", icon: Users, route: "/report" },
  { id: "asha", label: "ASHA Worker", icon: Stethoscope, route: "/asha" },
  { id: "official", label: "Official", icon: BarChart3, route: "/dashboard" },
] as const;

export default function Register() {
  const [role, setRole] = useState<typeof roles[number]["id"]>("villager");
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = roles.find((x) => x.id === role)!;
    toast.success(`Account created! Welcome to JalRakshak.`);
    navigate(r.route);
  };

  return (
    <PageShell>
      <div className="container max-w-6xl py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <h1 className="font-display text-3xl font-extrabold mb-2">Create your account</h1>
            <p className="text-muted-foreground text-sm mb-6">Join thousands keeping water safe.</p>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {roles.map((r) => {
                const Icon = r.icon;
                const active = role === r.id;
                return (
                  <button key={r.id} type="button" onClick={() => setRole(r.id)}
                    className={cn(
                      "rounded-2xl p-3 border-2 transition-smooth flex flex-col items-center gap-1.5",
                      active ? "border-primary bg-primary/5 shadow-soft" : "border-border bg-card/40 hover:border-primary/30"
                    )}>
                    <Icon className={cn("w-5 h-5", active ? "text-primary" : "text-muted-foreground")} />
                    <span className={cn("text-xs font-semibold", active ? "text-primary" : "text-muted-foreground")}>{r.label}</span>
                  </button>
                );
              })}
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="fn">Full name</Label>
                  <Input id="fn" required className="rounded-xl h-11" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="vil">Village / District</Label>
                  <Input id="vil" required className="rounded-xl h-11" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ph">Phone</Label>
                <Input id="ph" type="tel" placeholder="+91 ..." required className="rounded-xl h-11" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="pw">Password</Label>
                <Input id="pw" type="password" required className="rounded-xl h-11" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">Create account <ArrowRight /></Button>
            </form>

            <p className="text-sm text-center text-muted-foreground mt-6">
              Already registered? <Link to="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
            </p>
          </div>
        </div>

        <div className="hidden lg:block space-y-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {[
            { t: "Free for villagers", d: "No charges, ever — your reports keep your community safe." },
            { t: "Verified by ASHA workers", d: "Trained health workers review every submission." },
            { t: "Private & secure", d: "Your health data stays in your district." },
          ].map((f, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-mint flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="font-bold">{f.t}</h3>
                <p className="text-sm text-muted-foreground">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
