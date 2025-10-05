import { Rocket, Code, DollarSign, Users, CheckSquare } from "lucide-react";

export const BuildInPublic = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-primary">Building In Public</span>
            <br/>
            <span className="text-secondary">Like It Should Be</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-card border-2 border-primary/30 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-2xl font-black mb-3 text-primary">The Raise: $850K</h3>
            <p className="text-foreground/80 font-medium mb-4">
              We need your Co-Signs to convince VCs to back us and:
            </p>
            <ul className="space-y-4 text-xl font-medium">
              <li className="flex items-start gap-3">
                <CheckSquare className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                <span>Build real-time auction pipelines</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                <span>Launch on iOS + Android</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                <span>Create a behavior-driven analytics suite with your own AI store assistant</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                <span>Raise 18 months of cash runway for a team of 6</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-card border-2 border-secondary/30 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-background" />
            </div>
            <h3 className="text-2xl font-black mb-3 text-secondary">Why Your Signup Matters</h3>
            <p className="text-foreground/80 font-medium mb-4">
              We've already proven commitment with $20K + 6 months of sweat equity. Your LOI is living proof to VCs that our market needs to eat.
            </p>
            <ul className="space-y-4 text-xl font-medium">
              <li className="flex items-start gap-3">
                <CheckSquare className="w-7 h-7 text-secondary flex-shrink-0 mt-1" />
                <span>Your LOI = market demand investors can't ignore</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckSquare className="w-7 h-7 text-secondary flex-shrink-0 mt-1" />
                <span>First 1,200 Producer LOIs get 33% off Diamond Plan forever + beta access</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="p-8 bg-gradient-to-r from-card via-muted/20 to-card border-2 border-border rounded-2xl">
          <h3 className="text-2xl font-black mb-6 text-center">The Roadmap</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-6 h-6" />, title: "Now (Q2 2025)", desc: "1,200 LOIs + Close $850K" },
              { icon: <Code className="w-6 h-6" />, title: "Q3 2025", desc: "Beta with data infrastructure" },
              { icon: <Rocket className="w-6 h-6" />, title: "Q4 2025", desc: "Full launch + analytics suite" },
              { icon: <DollarSign className="w-6 h-6" />, title: "2026", desc: "Series A ready" }
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
              💡 <span className="text-primary">$20K invested</span>. <span className="text-secondary">6 months deep</span>. Professional Figma designs + production code already built. <span className="text-primary">Ken</span> + <span className="text-secondary">Ebon</span> bring vision. <span className="text-primary">Manas</span> + <span className="text-secondary">Koushik</span> building Bloomberg-level infrastructure. We're not just talking—we've already proven it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
