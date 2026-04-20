import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { villageRisks, diseaseDist } from "@/lib/mockData";
import { VillageRiskChart, TrendChart, DiseaseDonut, WaterScatter } from "@/components/charts/Charts";
import { AlertTriangle, TrendingUp, Activity, Send, MapPin } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const riskBadge = (r: string) =>
  r === "high" ? "bg-destructive/15 text-destructive border-destructive/30"
  : r === "med" ? "bg-warning/15 text-warning-foreground border-warning/30"
  : "bg-success/15 text-success border-success/30";

export default function OfficialDashboard() {
  const totalCases = villageRisks.reduce((a, v) => a + v.cases, 0);
  const highRisk = villageRisks.filter((v) => v.risk === "high");

  const sendAlert = (village: string) => {
    toast.success(`SMS alert sent to ${village} via Fast2SMS`, {
      description: "Boil water and seek medical help!",
    });
  };

  const stats = [
    { icon: AlertTriangle, label: "High-risk villages", value: highRisk.length, sub: "+1 from yesterday", color: "text-destructive", bg: "bg-destructive/10" },
    { icon: Activity, label: "Active cases", value: totalCases, sub: "Across 8 villages", color: "text-primary", bg: "bg-primary/10" },
    { icon: TrendingUp, label: "Verified reports", value: 214, sub: "This week", color: "text-success", bg: "bg-success/10" },
    { icon: Send, label: "Alerts sent", value: 7, sub: "Last 24 hours", color: "text-accent-foreground", bg: "bg-accent/40" },
  ];

  return (
    <PageShell>
      <div className="container py-10 space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-4 animate-fade-up">
          <div>
            <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Government Officials</div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold">District risk dashboard</h1>
            <p className="text-muted-foreground mt-2">Live data from villagers, ASHA workers and Sentinel-2 satellites.</p>
          </div>
          <div className="flex gap-2 items-center px-4 py-2 rounded-full glass-card text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ripple absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            <span className="font-medium">Updated 2 min ago</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="glass-card rounded-2xl p-5 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center mb-3", s.bg)}>
                  <Icon className={cn("w-5 h-5", s.color)} />
                </div>
                <div className="font-display font-extrabold text-3xl">{s.value}</div>
                <div className="text-sm font-semibold mt-0.5">{s.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Charts row 1 */}
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 glass-card rounded-3xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-display font-bold text-xl">Cases by village</h3>
                <p className="text-sm text-muted-foreground">Color = risk level (Low / Med / High)</p>
              </div>
              <div className="flex gap-2 text-xs">
                {[["low","Low"],["med","Med"],["high","High"]].map(([k,l]) => (
                  <span key={k} className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full bg-risk-${k}`} />{l}
                  </span>
                ))}
              </div>
            </div>
            <VillageRiskChart />
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="font-display font-bold text-xl mb-1">Disease split</h3>
            <p className="text-sm text-muted-foreground mb-2">Confirmed diagnoses</p>
            <DiseaseDonut />
            <div className="grid grid-cols-2 gap-2 mt-3">
              {diseaseDist.map((d) => (
                <div key={d.name} className="flex items-center gap-2 text-xs">
                  <span className="w-3 h-3 rounded-md" style={{ background: d.color }} />
                  <span className="font-medium">{d.name}</span>
                  <span className="text-muted-foreground ml-auto">{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts row 2 */}
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="glass-card rounded-3xl p-6">
            <h3 className="font-display font-bold text-xl mb-1">Symptom trend (7d)</h3>
            <p className="text-sm text-muted-foreground mb-2">Reports vs ASHA-verified</p>
            <TrendChart />
          </div>
          <div className="glass-card rounded-3xl p-6">
            <h3 className="font-display font-bold text-xl mb-1">Water turbidity vs cases</h3>
            <p className="text-sm text-muted-foreground mb-2">Sentinel-2 NTU readings × reported cases</p>
            <WaterScatter />
          </div>
        </div>

        {/* Risk table + alerts */}
        <div className="glass-card rounded-3xl p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-display font-bold text-xl">Village monitoring</h3>
              <p className="text-sm text-muted-foreground">Trigger SMS alerts for high-risk areas</p>
            </div>
          </div>
          <div className="overflow-x-auto -mx-2 px-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="py-3 font-semibold">Village</th>
                  <th className="py-3 font-semibold">District</th>
                  <th className="py-3 font-semibold">Population</th>
                  <th className="py-3 font-semibold">Cases</th>
                  <th className="py-3 font-semibold">Risk</th>
                  <th className="py-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {villageRisks.map((v) => (
                  <tr key={v.village} className="border-t border-border/60 hover:bg-accent/20 transition-smooth">
                    <td className="py-3 font-semibold flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-primary"/>{v.village}</td>
                    <td className="py-3 text-muted-foreground">{v.district}</td>
                    <td className="py-3">{v.population.toLocaleString()}</td>
                    <td className="py-3 font-mono font-bold">{v.cases}</td>
                    <td className="py-3">
                      <span className={cn("text-xs font-bold px-2.5 py-1 rounded-full border uppercase", riskBadge(v.risk))}>
                        {v.risk}
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <Button size="sm" variant={v.risk === "high" ? "hero" : "soft"} onClick={() => sendAlert(v.village)}>
                        <Send className="w-3 h-3"/>Alert
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
