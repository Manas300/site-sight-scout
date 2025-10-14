import { Button } from "@/components/ui/button";
import { Hero } from "@/components/landing/Hero";
import { PainPoints } from "@/components/landing/PainPoints";
import { Solution } from "@/components/landing/Solution";
import { BetaCTA } from "@/components/landing/BetaCTA";

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
                const element = document.getElementById('signup-form');
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

      <div id="signup-form">
        <Hero />
      </div>
      
      <div id="the-pain">
        <PainPoints />
      </div>

      <div id="the-solution">
        <Solution />
      </div>

      <div id="join-beta">
        <BetaCTA />
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
