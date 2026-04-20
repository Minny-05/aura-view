import { Link } from "react-router-dom";
import { Users, Stethoscope, BarChart3, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  {
    icon: Users,
    title: "Villagers",
    desc: "Report symptoms in seconds. Help your community stay safe.",
    cta: "Report symptoms",
    to: "/report",
    accent: "bg-gradient-mint",
    iconColor: "text-success",
  },
  {
    icon: Stethoscope,
    title: "ASHA Workers",
    desc: "Verify reports and add diagnoses to drive predictions.",
    cta: "Open ASHA panel",
    to: "/asha",
    accent: "bg-gradient-coral",
    iconColor: "text-accent-foreground",
  },
  {
    icon: BarChart3,
    title: "Government Officials",
    desc: "Monitor risk levels across districts and trigger SMS alerts.",
    cta: "Open dashboard",
    to: "/dashboard",
    accent: "bg-gradient-primary text-primary-foreground",
    iconColor: "text-primary-foreground",
  },
];

export const RoleCards = () => (
  <section className="container py-20" id="roles">
    <div className="max-w-2xl mb-12">
      <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Who is it for</div>
      <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
        Three roles. <span className="gradient-text">One mission.</span>
      </h2>
      <p className="text-muted-foreground mt-4 text-lg">A connected workflow from the village well to the district headquarters.</p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {roles.map((r, i) => {
        const Icon = r.icon;
        return (
          <div
            key={r.title}
            className="group relative glass-card rounded-3xl p-7 transition-smooth hover:-translate-y-2 hover:shadow-float overflow-hidden animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full ${r.accent} opacity-30 blur-2xl group-hover:opacity-60 transition-smooth`} />
            <div className={`relative w-14 h-14 rounded-2xl ${r.accent} flex items-center justify-center mb-5 shadow-soft`}>
              <Icon className={`w-6 h-6 ${r.iconColor}`} strokeWidth={2.2} />
            </div>
            <h3 className="font-display font-bold text-2xl mb-2">{r.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{r.desc}</p>
            <Link to={r.to}>
              <Button variant="soft" className="group/btn">
                {r.cta} <ArrowUpRight className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  </section>
);
