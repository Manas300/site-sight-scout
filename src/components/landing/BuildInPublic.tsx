import { Rocket, Code, DollarSign, Users, CheckSquare } from "lucide-react";
import founderKen from "@/assets/founder-ken.jpg";
import teamEbon from "@/assets/team-ebon.png";
import teamManas from "@/assets/team-manas.png";
import teamKoushik from "@/assets/team-koushik.png";

export const BuildInPublic = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-primary">Building In Public</span>
            <br />
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
                <span>Create a behavior-driven analytics suite with AI store assistant</span>
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

        {/* Roadmap Progress Tracker */}
        <div className="p-8 bg-gradient-to-br from-card via-background to-card border-2 border-primary/30 rounded-2xl">
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-black">The Race to Build BAGЯ</h3>
          </div>

          {/* Giant Progress Bar */}
          <div className="mb-12">
            <div className="relative h-4 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-secondary rounded-full w-1/4 shadow-[0_0_20px_rgba(0,255,0,0.5)] animate-pulse"></div>
            </div>
            <p className="text-center mt-4 text-lg md:text-xl">
              <span className="font-bold">Current Status:</span> <span className="font-normal">2 / 1,200 LOIs signed — help us hit goal and unlock BETA access.</span>
            </p>
          </div>

          {/* Gamified Tracker */}
          <div className="space-y-4">
            {/* Stage 1 - Active/Complete */}
            <div className="relative group flex justify-center">
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-destructive/20 to-destructive/10 rounded-2xl border-2 border-destructive shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] transition-all duration-300 w-full max-w-7xl">
                <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center shadow-[0_0_20px_rgba(255,0,0,0.6)] animate-pulse flex-shrink-0">
                  <CheckSquare className="w-6 h-6 text-background" />
                </div>
                <div className="text-xl md:text-2xl">
                  <div className="font-black">Phase I. We're Building Proof Together</div>
                  <div className="text-lg md:text-xl mt-1">1,200 LOIs + $850K = Go Time. Every signup counts.</div>
                </div>
              </div>
            </div>

            {/* Stage 2 - Locked */}
            <div className="relative group flex justify-center">
              <div className="flex items-center gap-4 p-6 bg-card/30 rounded-2xl border-2 border-border/50 hover:border-primary/50 transition-all duration-300 w-full max-w-7xl">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <CheckSquare className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="text-xl md:text-2xl text-muted-foreground">
                  <div className="font-black">Phase II. Early Access Unlocked</div>
                  <div className="text-lg md:text-xl mt-1">First 1,200 Producers get BETA + direct feature input.</div>
                </div>
              </div>
            </div>

            {/* Stage 3 - Locked */}
            <div className="relative group flex justify-center">
              <div className="flex items-center gap-4 p-6 bg-card/30 rounded-2xl border-2 border-border/50 hover:border-primary/50 transition-all duration-300 w-full max-w-7xl">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <CheckSquare className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="text-xl md:text-2xl text-muted-foreground">
                  <div className="font-black">Phase III. The Big Drop</div>
                  <div className="text-lg md:text-xl mt-1">BAGЯ goes live with real-time auctions + analytics.</div>
                </div>
              </div>
            </div>

            {/* Stage 4 - Locked */}
            <div className="relative group flex justify-center">
              <div className="flex items-center gap-4 p-6 bg-card/30 rounded-2xl border-2 border-border/50 hover:border-primary/50 transition-all duration-300 w-full max-w-7xl">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <CheckSquare className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="text-xl md:text-2xl text-muted-foreground">
                  <div className="font-black">Phase IV. Culture Goes Global</div>
                  <div className="text-lg md:text-xl mt-1">Scaling to Series A and beyond.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="mt-12 p-8 bg-gradient-to-br from-[#D4AF37]/10 via-background to-[#D4AF37]/10 rounded-2xl border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all duration-500 animate-[pulse_10s_ease-in-out_infinite]">
            <p className="text-center font-black text-lg md:text-2xl drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
              <span className="mr-2">👀</span>
              <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">
                Watch us build the future you asked for in real-time.
              </span>
            </p>
          </div>
        </div>

        {/* Founders & Team Section */}
        <div className="mt-16 p-8 bg-gradient-to-br from-card via-background to-card border-2 border-primary/20 rounded-2xl">
          <h3 className="text-3xl font-black mb-2 text-center">Who's Building <span className="font-montserrat" style={{ fontFeatureSettings: '"liga" 0' }}>BAGЯ</span>?</h3>
          <p className="text-center text-muted-foreground font-medium mb-8">
            Real producers. Real engineers. No suits.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Ken - Founder */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-transparent bg-gradient-to-br from-primary via-secondary to-primary p-1 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img 
                    src={founderKen} 
                    alt="Ken - Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h4 className="text-xl font-black text-primary mb-1">Ken</h4>
              <p className="text-sm font-bold text-secondary mb-2">Founder</p>
              <div className="text-xs font-medium text-foreground space-y-1">
                <p>Creative-Tech Operator</p>
                <p>Product Architect</p>
                <p>GTM Execution</p>
              </div>
            </div>

            {/* EbonOnTheTrack - Partner */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-secondary/30 hover:border-secondary transition-all duration-300 hover:scale-105">
                <img 
                  src={teamEbon} 
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
                  src={teamManas} 
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
                  src={teamKoushik} 
                  alt="Koushik - Lead Engineer"
                  className="w-full h-full object-cover object-[50%_80%]"
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
        </div>
      </div>
    </section>
  );
};
