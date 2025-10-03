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
      </div>
    </section>
  );
};
