import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HeroHook } from "@/components/landing/HeroHook";
import { PainPoints } from "@/components/landing/PainPoints";
import { Solution } from "@/components/landing/Solution";
import { BetaCTA } from "@/components/landing/BetaCTA";
import { Rocket, Zap, Target, Flame } from "lucide-react";

const Index = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white font-montserrat tracking-[0.2em]" style={{ lineHeight: '1', fontFeatureSettings: '"liga" 0' }}>
            BAGЯ
          </h1>
          <div className="hidden lg:flex gap-4 xl:gap-6 2xl:gap-8 text-base xl:text-lg 2xl:text-xl font-bold font-montserrat absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap items-center">
            <a 
              href="#the-pain" 
              className="hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('the-pain')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              The Pain
            </a>
            <span className="text-muted-foreground">|</span>
            <a 
              href="#the-solution" 
              className="hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('the-solution')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              The Solution
            </a>
            <span className="text-muted-foreground">|</span>
            <a 
              href="#join-beta" 
              className="hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('join-beta')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Join Beta
            </a>
          </div>
          
          {/* Signup Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => {
                document.getElementById('join-beta')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'center'
                });
              }}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-black font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25"
            >
              Join Beta
            </Button>
          </div>
          {/* Mobile Menu Dots */}
          <div className="lg:hidden flex gap-2">
            <a href="#the-pain" className="w-2.5 h-2.5 rounded-full bg-destructive hover:scale-125 transition-transform" onClick={(e) => { e.preventDefault(); document.getElementById('the-pain')?.scrollIntoView({ behavior: 'smooth' }); }} aria-label="The Pain"></a>
            <a href="#the-solution" className="w-2.5 h-2.5 rounded-full bg-primary hover:scale-125 transition-transform" onClick={(e) => { e.preventDefault(); document.getElementById('the-solution')?.scrollIntoView({ behavior: 'smooth' }); }} aria-label="The Solution"></a>
            <a href="#join-beta" className="w-2.5 h-2.5 rounded-full bg-secondary hover:scale-125 transition-transform" onClick={(e) => { e.preventDefault(); document.getElementById('join-beta')?.scrollIntoView({ behavior: 'smooth' }); }} aria-label="Join Beta"></a>
          </div>
        </div>
      </nav>

      {/* Hero Hook - Immediate attention grabber */}
      <HeroHook />

      {/* Section Divider */}
      <div className="h-32 bg-gradient-to-b from-background via-destructive/10 to-background" />

      {/* Pain Points - Agitate the problem */}
      <div id="the-pain" className="relative">
        <PainPoints />
      </div>

      {/* Section Divider */}
      <div className="h-32 bg-gradient-to-b from-background via-primary/10 to-background" />

      {/* Solution - Show how BAGR solves it */}
      <div id="the-solution" className="relative">
        <Solution />
      </div>

      {/* Section Divider */}
      <div className="h-32 bg-gradient-to-b from-background via-secondary/10 to-background" />

      {/* Final CTA - Last chance urgency */}
      <div id="join-beta" className="relative">
        <BetaCTA />
      </div>

      {/* Sticky Floating CTA Bar */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ${
          showFloatingCTA ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-gradient-to-r from-primary via-secondary to-primary p-4 shadow-2xl backdrop-blur-sm border-t-4 border-primary/50">
          <div className="container mx-auto max-w-6xl flex items-center justify-between gap-3 flex-wrap">
            <Rocket className="w-12 h-12 text-background animate-bounce" />
            
            <div className="flex items-center gap-3 flex-wrap">
              <div className="glass border border-primary/20 rounded-lg p-3 min-w-[140px]">
                <Zap className="w-6 h-6 text-primary mb-1" />
                <p className="text-background font-black text-sm">Founder Pricing</p>
                <p className="text-background/70 text-xs">Lock in before 10x</p>
              </div>
              
              <div className="glass border border-primary/20 rounded-lg p-3 min-w-[140px]">
                <Target className="w-6 h-6 text-primary mb-1" />
                <p className="text-background font-black text-sm">Direct Line</p>
                <p className="text-background/70 text-xs">Chat with founders</p>
              </div>
              
              <div className="glass border border-primary/20 rounded-lg p-3 min-w-[140px]">
                <Flame className="w-6 h-6 text-secondary mb-1" />
                <p className="text-background font-black text-sm">Skip The Line</p>
                <p className="text-background/70 text-xs">Beta access now</p>
              </div>
            </div>
            
            <Button
              onClick={() => {
                document.getElementById('join-beta')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'center'
                });
              }}
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-black rounded-full shadow-xl hover:scale-105 transition-all"
            >
              CLAIM YOUR SPOT 🔥
            </Button>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 border-t-2 border-border bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-[0.2em]">
              BAGЯ
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
