import { Droplets, Mail, Github, Heart } from "lucide-react";

export const Footer = () => (
  <footer className="relative mt-24 border-t border-border/50">
    <div className="container py-12 grid md:grid-cols-4 gap-8">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-9 h-9 rounded-2xl bg-gradient-primary flex items-center justify-center">
            <Droplets className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display font-extrabold text-lg">JalRakshak</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
          A community-first early warning system that brings together villagers, ASHA workers, satellite data and machine learning to stop waterborne outbreaks before they spread.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm">Platform</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Symptom Reporting</li>
          <li>ASHA Verification</li>
          <li>Officials Dashboard</li>
          <li>SMS Alerts</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm">Connect</h4>
        <div className="flex gap-2">
          <a className="w-9 h-9 rounded-xl bg-secondary/60 flex items-center justify-center hover:bg-secondary transition-smooth"><Mail className="w-4 h-4"/></a>
          <a className="w-9 h-9 rounded-xl bg-secondary/60 flex items-center justify-center hover:bg-secondary transition-smooth"><Github className="w-4 h-4"/></a>
        </div>
      </div>
    </div>
    <div className="border-t border-border/50 py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} JalRakshak. Built for healthier communities.</span>
        <span className="flex items-center gap-1.5">Made with <Heart className="w-3 h-3 fill-destructive text-destructive"/> for rural India</span>
      </div>
    </div>
  </footer>
);
