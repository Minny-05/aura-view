import heroImg from "@/assets/hero-village.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Activity, Satellite } from "lucide-react";

export const Hero = () => (
  <section className="relative overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
    <div className="absolute top-40 -right-24 w-80 h-80 bg-secondary/40 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

    <div className="container relative pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-6 space-y-7 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/60 border border-secondary text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ripple absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span className="text-secondary-foreground font-medium">Live monitoring across 8 districts</span>
        </div>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
          Stop outbreaks before<br />
          they reach the <span className="gradient-text">village well.</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          JalRakshak combines community symptom reports, satellite water-quality data and machine learning to predict cholera, typhoid and dysentery risk — and alert officials in real time.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link to="/report"><Button variant="hero" size="xl">Report Symptoms <ArrowRight /></Button></Link>
          <Link to="/dashboard"><Button variant="outline" size="xl">View Live Dashboard</Button></Link>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg">
          {[
            { k: "82%", v: "earlier detection" },
            { k: "1.4k", v: "verified reports" },
            { k: "24/7", v: "satellite watch" },
          ].map((s) => (
            <div key={s.v} className="glass-card rounded-2xl p-4">
              <div className="font-display text-2xl font-extrabold gradient-text">{s.k}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-6 relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-primary rounded-[2.5rem] blur-2xl opacity-30" />
          <img
            src={heroImg}
            alt="Peaceful Indian village by a clean river — community waterborne disease monitoring"
            width={1600}
            height={1024}
            className="relative rounded-[2rem] shadow-float w-full object-cover aspect-[5/4]"
          />

          {/* Floating cards */}
          <div className="absolute -left-4 top-10 glass-card rounded-2xl p-3.5 shadow-float animate-float-slow w-56 hidden sm:block">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-success/15 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-success" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Risk Status</div>
                <div className="font-semibold text-sm">Barpeta — Safe</div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-16 glass-card rounded-2xl p-3.5 shadow-float animate-float-slow w-60 hidden sm:block" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-destructive/15 flex items-center justify-center">
                <Activity className="w-4 h-4 text-destructive" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Alert sent</div>
                <div className="font-semibold text-sm">Majuli — High risk</div>
              </div>
            </div>
          </div>

          <div className="absolute right-6 -top-4 glass-card rounded-2xl px-3 py-2 shadow-float animate-float-slow flex items-center gap-2 hidden md:flex" style={{ animationDelay: "0.8s" }}>
            <Satellite className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">Sentinel-2 sync</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
