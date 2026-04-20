import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/Hero";
import { RoleCards } from "@/components/RoleCards";
import { HowItWorks } from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => (
  <PageShell>
    <Hero />
    <RoleCards />
    <HowItWorks />

    {/* CTA */}
    <section className="container py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-10 md:p-16 text-center shadow-float">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight">
            Be the early warning your village deserves.
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8">Join JalRakshak in 60 seconds. No paperwork, no fees.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/register"><Button size="xl" className="bg-card text-primary hover:bg-card/90">Create free account <ArrowRight /></Button></Link>
            <Link to="/dashboard"><Button size="xl" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">Explore dashboard</Button></Link>
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default Index;
