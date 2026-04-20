import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { reports as initialReports, Report } from "@/lib/mockData";
import { CheckCircle2, Clock, Stethoscope, MapPin, Users } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const statusConfig = {
  pending: { label: "Pending", color: "bg-warning/15 text-warning-foreground border-warning/30", icon: Clock },
  verified: { label: "Verified", color: "bg-primary/10 text-primary border-primary/30", icon: CheckCircle2 },
  diagnosed: { label: "Diagnosed", color: "bg-success/15 text-success border-success/30", icon: Stethoscope },
};

export default function AshaDashboard() {
  const [items, setItems] = useState<Report[]>(initialReports);
  const [filter, setFilter] = useState<"all" | "pending" | "verified" | "diagnosed">("all");

  const filtered = items.filter((r) => filter === "all" || r.status === filter);

  const verify = (id: string) => {
    setItems((p) => p.map((r) => r.id === id ? { ...r, status: "verified" } : r));
    toast.success("Report verified");
  };
  const diagnose = (id: string, dx: string) => {
    setItems((p) => p.map((r) => r.id === id ? { ...r, status: "diagnosed", diagnosis: dx } : r));
    toast.success(`Diagnosis added: ${dx}`);
  };

  return (
    <PageShell>
      <div className="container py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8 animate-fade-up">
          <div>
            <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">ASHA Worker Panel</div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold">Verify community reports</h1>
            <p className="text-muted-foreground mt-2">{items.filter((r) => r.status === "pending").length} pending • {items.length} total this week</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {(["all", "pending", "verified", "diagnosed"] as const).map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold border-2 transition-smooth capitalize",
                  filter === f ? "bg-primary text-primary-foreground border-primary" : "bg-card/60 border-border hover:border-primary/40"
                )}>{f}</button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((r, i) => {
            const cfg = statusConfig[r.status];
            const Icon = cfg.icon;
            return (
              <div key={r.id} className="glass-card rounded-3xl p-6 hover:shadow-card-soft transition-smooth animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-mono text-xs text-muted-foreground">{r.id}</div>
                    <div className="font-bold text-lg mt-0.5">{r.villager}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
                      <MapPin className="w-3.5 h-3.5"/>{r.village} • {r.reportedAt}
                    </div>
                  </div>
                  <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full border flex items-center gap-1", cfg.color)}>
                    <Icon className="w-3 h-3"/>{cfg.label}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {r.symptoms.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 text-secondary-foreground font-medium">{s}</span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm mb-5 pb-5 border-b border-border/60">
                  <div>
                    <div className="text-xs text-muted-foreground">Water source</div>
                    <div className="font-semibold">{r.source}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1"><Users className="w-3 h-3"/>Household</div>
                    <div className="font-semibold">{r.household} affected</div>
                  </div>
                </div>

                {r.diagnosis && (
                  <div className="mb-3 p-3 rounded-xl bg-success/10 border border-success/20">
                    <div className="text-xs text-muted-foreground">Diagnosis</div>
                    <div className="font-bold text-success">{r.diagnosis}</div>
                  </div>
                )}

                <div className="flex gap-2 flex-wrap">
                  {r.status === "pending" && <Button size="sm" variant="hero" onClick={() => verify(r.id)}>Verify</Button>}
                  {r.status === "verified" && (
                    <>
                      <Button size="sm" variant="outline" onClick={() => diagnose(r.id, "Cholera")}>+ Cholera</Button>
                      <Button size="sm" variant="outline" onClick={() => diagnose(r.id, "Typhoid")}>+ Typhoid</Button>
                      <Button size="sm" variant="outline" onClick={() => diagnose(r.id, "Dysentery")}>+ Dysentery</Button>
                    </>
                  )}
                  {r.status === "diagnosed" && <Button size="sm" variant="soft" disabled>Sent to officials</Button>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
