import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HeroHook } from "@/components/landing/HeroHook";
import { PainPoints } from "@/components/landing/PainPoints";
import { Solution } from "@/components/landing/Solution";
import { BetaCTA } from "@/components/landing/BetaCTA";
import { ProducerLocations } from "@/components/landing/ProducerLocations";
import { MobileNav } from "@/components/ui/mobile-nav";
import { Rocket } from "lucide-react";
import { useSignupCount } from "@/hooks/useSignupCount";

const Index = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const { producerCount } = useSignupCount();
  const totalSlots = 1200;
  const spotsLeft = Math.max(0, totalSlots - producerCount);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Mobile Navigation */}
      <MobileNav onNavigate={handleNavigate} />

      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="hidden lg:block fixed top-0 w-full z-50 glass border-b border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white bagr-text tracking-[0.2em]" style={{ lineHeight: '1' }}>
            BAGЯ
          </h1>
          <div className="hidden lg:flex gap-4 xl:gap-6 2xl:gap-8 text-base xl:text-lg 2xl:text-xl font-bold font-montserrat absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap items-center">
            <a 
              href="#the-pain" 
              className="hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('the-pain');
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
                handleNavigate('the-solution');
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
                handleNavigate('join-beta');
              }}
            >
              Join Beta
            </a>
          </div>
          
          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => handleNavigate('join-beta')}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-black font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25"
            >
              Join Beta
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Hook - Immediate attention grabber */}
      <HeroHook />

      {/* Section Divider */}
      <div className="h-16 sm:h-24 md:h-32 bg-gradient-to-b from-background via-destructive/10 to-background" />

      {/* Pain Points - Agitate the problem */}
      <div id="the-pain" className="relative">
        <PainPoints />
      </div>

      {/* Section Divider */}
      <div className="h-16 sm:h-24 md:h-32 bg-gradient-to-b from-background via-primary/10 to-background" />

      {/* Solution - Show how BAGЯ solves it */}
      <div id="the-solution" className="relative">
        <Solution />
      </div>

      {/* Section Divider */}
      <div className="h-16 sm:h-24 md:h-32 bg-gradient-to-b from-background via-secondary/10 to-background" />

      {/* Final CTA - Last chance urgency */}
      <div id="join-beta" className="relative">
        <BetaCTA />
      </div>

      {/* Enhanced Sticky Floating CTA Bar - Mobile Optimized */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${
          showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-[length:100%_100%] p-3 sm:p-4 shadow-mobile-lg backdrop-blur-md border-t-2 sm:border-t-4 border-primary/50 transition-all duration-500">
          <div className="container mx-auto max-w-6xl flex items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <div className="relative">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-background animate-bounce-gentle flex-shrink-0" />
                <div className="absolute inset-0 bg-background/20 rounded-full blur-sm animate-pulse"></div>
              </div>
              <div className="min-w-0">
                <p className="text-background font-black text-xs sm:text-sm md:text-base truncate drop-shadow-sm">
                  {spotsLeft} SPOTS LEFT
                </p>
                <p className="text-background/80 text-[10px] sm:text-xs md:text-sm font-medium hidden sm:block drop-shadow-sm">
                  Join before it's too late
                </p>
              </div>
            </div>
            <Button
              onClick={() => {
                const signupForm = document.getElementById('signup-form');
                if (signupForm) {
                  signupForm.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                } else {
                  // Fallback to join-beta section
                  document.getElementById('join-beta')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="group relative bg-background text-primary hover:bg-background/90 font-black rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-xs sm:text-sm md:text-base h-10 sm:h-11 px-3 sm:px-6 flex-shrink-0 touch-manipulation min-w-[80px] sm:min-w-[140px] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1">
                <span className="hidden sm:inline">CLAIM YOUR SPOT</span>
                <span className="sm:hidden">CLAIM</span>
                <span className="group-hover:animate-bounce text-sm">🔥</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Producer Locations - At the very bottom */}
      <ProducerLocations />

      {/* Footer */}
      <footer className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 border-t-2 border-border bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-[0.2em] bagr-text">
              BAGЯ
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
