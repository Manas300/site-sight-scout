import { Rocket, Code, DollarSign, Users } from "lucide-react";

export const BuildInPublic = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-primary">Building In Public</span>
            <br/>
            Like It Should Be
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            No BS. No fake promises. Just real talk about building the platform producers actually need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-card border-2 border-primary/30 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-2xl font-black mb-3 text-primary">The Raise: $850K</h3>
            <p className="text-foreground/80 font-medium mb-4">
              This gets us 18 months of runway to build, test, and scale BAGЯ with real producers.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Hire 5 engineers who actually understand hip hop culture</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Build iOS + Android apps (mobile-first or bust)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Launch with 100 hand-picked producers for beta</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-card border-2 border-secondary/30 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-2xl font-black mb-3 text-secondary">Why Your Signup Matters</h3>
            <p className="text-foreground/80 font-medium mb-4">
              VCs want proof. Your email = proof that producers want this platform to exist.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>We show VCs: "1,200 producers signed up before we even built it"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>You get founder pricing (33% off for life)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>First access when we launch beta (Q3 2025)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="p-8 bg-gradient-to-r from-card via-muted/20 to-card border-2 border-border rounded-2xl">
          <h3 className="text-2xl font-black mb-6 text-center">The Roadmap</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-6 h-6" />, title: "Now", desc: "Collect 1,200 LOIs" },
              { icon: <DollarSign className="w-6 h-6" />, title: "Q2 2025", desc: "Close $850K raise" },
              { icon: <Code className="w-6 h-6" />, title: "Q3 2025", desc: "Beta with 100 producers" },
              { icon: <Rocket className="w-6 h-6" />, title: "Q4 2025", desc: "Public launch" }
            ].map((phase, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-3 mx-auto text-background">
                  {phase.icon}
                </div>
                <p className="font-black text-primary mb-1">{phase.title}</p>
                <p className="text-sm text-muted-foreground font-medium">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founders & Team Section */}
        <div className="mt-16 p-8 bg-gradient-to-br from-card via-background to-card border-2 border-primary/20 rounded-2xl">
          <h3 className="text-3xl font-black mb-2 text-center">Who's Building This? 🎯</h3>
          <p className="text-center text-muted-foreground font-medium mb-8">
            Not some random tech bros. Real operators with skin in the game.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Ken - Founder */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Ken - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-black text-primary mb-1">Ken</h4>
              <p className="text-sm font-bold text-secondary mb-2">Founder</p>
              <div className="text-xs font-medium text-muted-foreground space-y-1">
                <p>Creative-Tech Operator</p>
                <p>Product Architect</p>
                <p>GTM Execution</p>
              </div>
            </div>

            {/* EbonOnTheTrack - Partner */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-secondary/30 hover:border-secondary transition-all duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" 
                  alt="EbonOnTheTrack - Partner"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-black text-secondary mb-1">EbonOnTheTrack</h4>
              <p className="text-sm font-bold text-primary mb-2">Partner</p>
              <div className="text-xs font-medium text-muted-foreground space-y-1">
                <p>Platinum Producer</p>
                <p>Major Artist Plug</p>
                <p>Creator Acquisition</p>
              </div>
            </div>

            {/* Manas - Lead Engineer */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" 
                  alt="Manas - Lead Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-black text-primary mb-1">Manas</h4>
              <p className="text-sm font-bold text-secondary mb-2">Lead Engineer</p>
              <div className="text-xs font-medium text-muted-foreground space-y-1">
                <p>Ex-Elenical (Fintech Infra)</p>
                <p>Multicloud Architect</p>
                <p>MLOps Ready</p>
              </div>
            </div>

            {/* Koushik - Lead Engineer */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-secondary/30 hover:border-secondary transition-all duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" 
                  alt="Koushik - Lead Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-black text-secondary mb-1">Koushik</h4>
              <p className="text-sm font-bold text-primary mb-2">Lead Engineer</p>
              <div className="text-xs font-medium text-muted-foreground space-y-1">
                <p>100K+ DAU Systems</p>
                <p>10TB Data Pipelines</p>
                <p>Infra-Scale Builder</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
            <p className="text-center font-bold text-foreground/90">
              💡 <span className="text-primary">Ken</span> + <span className="text-secondary">Ebon</span> bring vision & culture. <span className="text-primary">Manas</span> + <span className="text-secondary">Koushik</span> are already coding this beast. Real team, real work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
