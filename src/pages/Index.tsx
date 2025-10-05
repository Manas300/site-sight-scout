import { Button } from "@/components/ui/button";
import { Hero } from "@/components/landing/Hero";
import { WhyBagr } from "@/components/landing/WhyBagr";
import { ProductVision } from "@/components/landing/ProductVision";
import { BuildInPublic } from "@/components/landing/BuildInPublic";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { LiveTestimonials } from "@/components/landing/LiveTestimonials";
import { Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-primary/20">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-montserrat" style={{ letterSpacing: '0.2em', fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', lineHeight: '1', fontFeatureSettings: '"liga" 0' }}>
            BAGЯ
          </h1>
          <div className="hidden lg:flex gap-6 xl:gap-8 text-base xl:text-xl font-bold font-montserrat absolute left-1/2 transform -translate-x-1/2">
            <a 
              href="#why-bagr" 
              className="hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('why-bagr')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Why BAGЯ
            </a>
            <a 
              href="#build-public" 
              className="hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('build-public')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              The Raise
            </a>
            <a 
              href="#join" 
              className="hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('join')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Join
            </a>
          </div>
          {/* Mobile Menu Dots */}
          <div className="lg:hidden flex gap-1">
            <a href="#why-bagr" className="w-2 h-2 rounded-full bg-primary" onClick={(e) => { e.preventDefault(); document.getElementById('why-bagr')?.scrollIntoView({ behavior: 'smooth' }); }}></a>
            <a href="#build-public" className="w-2 h-2 rounded-full bg-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('build-public')?.scrollIntoView({ behavior: 'smooth' }); }}></a>
            <a href="#join" className="w-2 h-2 rounded-full bg-primary" onClick={(e) => { e.preventDefault(); document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' }); }}></a>
          </div>
        </div>
      </nav>

      <Hero />
      
      {/* Live Testimonials Wall */}
      <LiveTestimonials />
      
      <div id="why-bagr" className="animate-slide-up">
        <WhyBagr />
      </div>

      <div className="animate-slide-in-left">
        <ProductVision />
      </div>

      <div id="build-public" className="animate-slide-in-right">
        <BuildInPublic />
      </div>

      {/* Who It's For */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
              Who <span className="font-montserrat" style={{ fontFeatureSettings: '"liga" 0' }}>BAGЯ</span> Is <span className="text-primary">For</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium px-4">
              If you relate to any of these, you're in the right place. If not, dueces. ✌️
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Producers",
                emoji: "😤",
                pain: "Tired of uploading to YouTube for $3 CPM",
                solution: ["Go live", "Watch bids climb", "Get paid instantly"]
              },
              {
                title: "Artists",
                emoji: "💀",
                pain: "Done scrolling dead beat stores for hours",
                solution: ["Join live sessions", "Bid on heat", "Lock in exclusives"]
              },
              {
                title: "Fans",
                emoji: "👀",
                pain: "Want to support producers you fw",
                solution: ["Watch live", "Tip your favorites", "See hits get made"]
              }
            ].map((group, i) => (
              <div key={i} className="p-6 sm:p-8 bg-card border-2 border-border rounded-2xl hover:border-primary transition-all hover:scale-105">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-center">{group.emoji}</div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 text-center">{group.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-destructive font-bold mb-4 sm:mb-5 italic">"{group.pain}"</p>
                <ul className="space-y-2 sm:space-y-3">
                  {group.solution.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-base sm:text-lg md:text-xl">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="join" className="animate-fade-in">
        <FinalCTA />
      </div>

      {/* Footer */}
      <footer className="py-8 sm:py-10 md:py-12 px-3 sm:px-4 border-t-2 border-border bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BAGЯ
            </div>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              © 2025 BAGЯ. Building in public.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
