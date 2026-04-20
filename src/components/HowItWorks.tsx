import { Database, Cog, Sparkles, BellRing } from "lucide-react";

const steps = [
  { icon: Database, title: "Collect", desc: "Symptoms from villagers + Sentinel-2 / Landsat water parameters." },
  { icon: Cog, title: "Process", desc: "Cleaning, normalization and PCA across community + satellite data." },
  { icon: Sparkles, title: "Predict", desc: "Random Forest & Gradient Boosting score village risk: Low / Med / High." },
  { icon: BellRing, title: "Alert", desc: "Officials get a dashboard view; SMS goes out via Twilio / Fast2SMS." },
];

export const HowItWorks = () => (
  <section className="container py-20">
    <div className="max-w-2xl mb-12">
      <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">How it works</div>
      <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">From a single cough to a <span className="gradient-text">district-wide alert.</span></h2>
    </div>

    <div className="grid md:grid-cols-4 gap-5">
      {steps.map((s, i) => {
        const Icon = s.icon;
        return (
          <div key={s.title} className="relative">
            <div className="glass-card rounded-2xl p-6 h-full transition-smooth hover:-translate-y-1 hover:shadow-card-soft">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-mint flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={2.3} />
                </div>
                <span className="font-display font-extrabold text-3xl text-primary/15">0{i + 1}</span>
              </div>
              <h3 className="font-bold text-lg mb-1.5">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
