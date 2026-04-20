import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Droplet, Users, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const symptomList = ["Diarrhea", "Vomiting", "Fever", "Stomach pain", "Dehydration", "Headache", "Fatigue", "Cramps"];
const sources = ["Hand pump", "Open well", "River", "Pond", "Tap water", "Tanker"];

export default function ReportSymptoms() {
  const [picked, setPicked] = useState<string[]>([]);
  const [source, setSource] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggle = (s: string) => setPicked((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (picked.length === 0) return toast.error("Please select at least one symptom");
    if (!source) return toast.error("Please choose a water source");
    setSubmitted(true);
    toast.success("Report submitted. ASHA worker will follow up shortly.");
  };

  if (submitted) {
    return (
      <PageShell>
        <div className="container max-w-xl py-24 text-center animate-fade-up">
          <div className="w-20 h-20 mx-auto rounded-full bg-success/15 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
          <h1 className="font-display text-4xl font-extrabold mb-3">Thank you!</h1>
          <p className="text-muted-foreground mb-8">Your report ID is <span className="font-mono font-bold text-foreground">RPT-2042</span>. An ASHA worker will visit or call within 24 hours.</p>
          <Button variant="hero" size="lg" onClick={() => { setSubmitted(false); setPicked([]); setSource(""); }}>Submit another report</Button>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="container max-w-3xl py-12">
        <div className="mb-8 animate-fade-up">
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Villager portal</div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold">Report symptoms</h1>
          <p className="text-muted-foreground mt-2">Takes less than a minute. Helps your whole village.</p>
        </div>

        <form onSubmit={submit} className="glass-card rounded-3xl p-6 md:p-8 space-y-7 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Your name</Label>
              <Input placeholder="Full name" required className="rounded-xl h-11" />
            </div>
            <div className="space-y-1.5">
              <Label>Village</Label>
              <Input placeholder="e.g. Majuli" required className="rounded-xl h-11" />
            </div>
          </div>

          <div>
            <Label className="mb-2 block">Symptoms (select all that apply)</Label>
            <div className="flex flex-wrap gap-2">
              {symptomList.map((s) => {
                const on = picked.includes(s);
                return (
                  <button key={s} type="button" onClick={() => toggle(s)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium border-2 transition-smooth",
                      on ? "bg-primary text-primary-foreground border-primary shadow-soft" : "bg-card/60 border-border hover:border-primary/40"
                    )}>
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <Label className="mb-2 block flex items-center gap-1.5"><Droplet className="w-4 h-4 text-primary"/> Primary water source</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {sources.map((s) => {
                const on = source === s;
                return (
                  <button key={s} type="button" onClick={() => setSource(s)}
                    className={cn(
                      "p-3 rounded-2xl border-2 text-sm font-medium transition-smooth",
                      on ? "bg-gradient-mint border-primary text-foreground shadow-soft" : "bg-card/60 border-border hover:border-primary/40 text-muted-foreground"
                    )}>
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary"/> People in household affected</Label>
              <Input type="number" min={1} max={20} defaultValue={1} className="rounded-xl h-11" />
            </div>
            <div className="space-y-1.5">
              <Label>Symptom started</Label>
              <Input type="date" className="rounded-xl h-11" />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label>Anything else? (optional)</Label>
            <Textarea placeholder="Describe other symptoms or context..." className="rounded-xl min-h-24" />
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full">Submit report</Button>
        </form>
      </div>
    </PageShell>
  );
}
