import { Button } from "@/components/ui/button";
import { Hero } from "@/components/landing/Hero";
import { WhyBagr } from "@/components/landing/WhyBagr";
import { ProductVision } from "@/components/landing/ProductVision";
import { BuildInPublic } from "@/components/landing/BuildInPublic";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { LiveTestimonials } from "@/components/landing/LiveTestimonials";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white font-montserrat tracking-[0.2em]" style={{ lineHeight: '1', fontFeatureSettings: '"liga" 0' }}>
            BAGЯ
          </h1>
          <div className="hidden lg:flex gap-4 xl:gap-6 2xl:gap-8 text-base xl:text-lg 2xl:text-xl font-bold font-montserrat absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap items-center">
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
            <span className="text-muted-foreground">|</span>
            <a 
              href="#the-vision" 
              className="hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('the-vision')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              The Vision
            </a>
            <span className="text-muted-foreground">|</span>
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
            <span className="text-muted-foreground">|</span>
            <a 
              href="#the-team" 
              className="hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('the-team')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              The Team
            </a>
            <span className="text-muted-foreground">|</span>
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
              Build With Us
            </a>
          </div>
          
          {/* Signup Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => {
                const element = document.getElementById('limited-spots');
                if (element) {
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-black font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25"
            >
              Get Early Access
            </Button>
          </div>
          {/* Mobile Menu Dots */}
          <div className="lg:hidden flex gap-2">
            <a href="#why-bagr" className="w-2.5 h-2.5 rounded-full bg-primary hover:scale-125 transition-transform" onClick={(e) => { e.preventDefault(); document.getElementById('why-bagr')?.scrollIntoView({ behavior: 'smooth' }); }} aria-label="Why BAGЯ"></a>
            <a href="#the-vision" className="w-2.5 h-2.5 rounded-full bg-secondary hover:scale-125 transition-transform" onClick={(e) => { e.preventDefault(); document.getElementById('the-vision')?.scrollIntoView({ behavior: 'smooth' }); }} aria-label="The Vision"></a>
            <a href="#build-public" className="w-2.5 h-2.5 rounded-full bg-primary hover:scale-125 transition-transform" onClick={(e) => { e.preventDefault(); document.getElementById('build-public')?.scrollIntoView({ behavior: 'smooth' }); }} aria-label="The Raise"></a>
            <a href="#the-team" className="w-2.5 h-2.5 rounded-full bg-secondary hover:scale-125 transition-transform" onClick={(e) => { e.preventDefault(); document.getElementById('the-team')?.scrollIntoView({ behavior: 'smooth' }); }} aria-label="The Team"></a>
            <a href="#join" className="w-2.5 h-2.5 rounded-full bg-primary hover:scale-125 transition-transform" onClick={(e) => { e.preventDefault(); document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' }); }} aria-label="Build With Us"></a>
          </div>
        </div>
      </nav>

      <Hero />
      
      {/* Live Testimonials Wall */}
      <LiveTestimonials />
      
      <div id="why-bagr" className="animate-slide-up">
        <WhyBagr />
      </div>

      <div id="the-vision" className="animate-slide-in-left">
        <ProductVision />
      </div>

      <div id="build-public" className="animate-slide-in-right">
        <BuildInPublic />
      </div>

      {/* Who It's For */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight px-2">
              Who <span className="font-montserrat" style={{ fontFeatureSettings: '"liga" 0' }}>BAGЯ</span> Is <span className="text-primary">For</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium px-4 max-w-3xl mx-auto">
              If you relate to any of these, you're in the right place. If not, dueces. ✌️
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Producers",
                emoji: "😤",
                pain: "I'm tired of uploading to YouTube for $3 CPM",
                solution: ["Go live", "Watch bids climb", "Get paid instantly"]
              },
              {
                title: "Artists",
                emoji: "💀",
                pain: "I'm over scrolling dead beat stores for hours",
                solution: ["Join live sessions", "Bid on heat", "Lock in exclusives"]
              },
              {
                title: "Fans",
                emoji: "👀",
                pain: "I wanna provide real support to producers I fw",
                solution: ["Watch live", "Tip your favorites", "See hits get made"]
              }
            ].map((group, i) => (
              <div key={i} className="p-6 sm:p-8 bg-card border-2 border-border rounded-2xl hover:border-primary transition-all hover:scale-105">
                <div className="text-5xl sm:text-6xl mb-4 text-center">{group.emoji}</div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-center">{group.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-destructive font-bold mb-5 italic text-center leading-relaxed">"{group.pain}"</p>
                <ul className="space-y-3">
                  {group.solution.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
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
      <footer className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 border-t-2 border-border bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-[0.2em]">
              BAGЯ
            </div>
            <p className="text-sm sm:text-base text-muted-foreground text-center">
              © 2025 BAGЯ. Beat. Bid. Bag.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
