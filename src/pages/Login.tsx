import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Stethoscope, BarChart3, Droplets, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const roles = [
  { id: "villager", label: "Villager", icon: Users, route: "/report" },
  { id: "asha", label: "ASHA Worker", icon: Stethoscope, route: "/asha" },
  { id: "official", label: "Official", icon: BarChart3, route: "/dashboard" },
] as const;

export default function Login() {
  const [role, setRole] = useState<typeof roles[number]["id"]>("villager");
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = roles.find((x) => x.id === role)!;
    toast.success(`Welcome back, ${r.label}!`);
    navigate(r.route);
  };

  return (
    <PageShell>
      <div className="container max-w-6xl py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left visual */}
        <div className="hidden lg:block animate-fade-up">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-primary rounded-[3rem] blur-3xl opacity-30 animate-float-slow" />
            <div className="relative h-full rounded-[3rem] bg-gradient-hero p-10 flex flex-col justify-between shadow-float overflow-hidden">
              <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft mb-6">
                  <Droplets className="text-primary-foreground w-6 h-6" strokeWidth={2.5} />
                </div>
                <h2 className="font-display font-extrabold text-3xl leading-tight">Welcome back to <span className="gradient-text">JalRakshak.</span></h2>
                <p className="text-muted-foreground mt-3">Every login means safer water, faster response and healthier villages.</p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <div className="text-xs text-muted-foreground">Today's stats</div>
                <div className="font-display font-extrabold text-2xl gradient-text">71 reports • 4 alerts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="glass-card rounded-3xl p-8 md:p-10 shadow-card-soft">
            <h1 className="font-display text-3xl font-extrabold mb-2">Sign in</h1>
            <p className="text-muted-foreground text-sm mb-6">Choose your role to continue.</p>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {roles.map((r) => {
                const Icon = r.icon;
                const active = role === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRole(r.id)}
                    className={cn(
                      "rounded-2xl p-3 border-2 transition-smooth flex flex-col items-center gap-1.5",
                      active ? "border-primary bg-primary/5 shadow-soft" : "border-border bg-card/40 hover:border-primary/30"
                    )}
                  >
                    <Icon className={cn("w-5 h-5", active ? "text-primary" : "text-muted-foreground")} />
                    <span className={cn("text-xs font-semibold", active ? "text-primary" : "text-muted-foreground")}>{r.label}</span>
                  </button>
                );
              })}
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email">Email or Phone</Label>
                <Input id="email" placeholder="you@village.in" required className="rounded-xl h-11" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="pwd">Password</Label>
                <Input id="pwd" type="password" placeholder="••••••••" required className="rounded-xl h-11" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">Sign in <ArrowRight /></Button>
            </form>

            <p className="text-sm text-center text-muted-foreground mt-6">
              New here? <Link to="/register" className="text-primary font-semibold hover:underline">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
