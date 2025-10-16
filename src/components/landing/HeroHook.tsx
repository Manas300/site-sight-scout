import { Button } from "@/components/ui/button";
import { Flame, TrendingUp, Users } from "lucide-react";
import { useSignupCount } from "@/hooks/useSignupCount";

export const HeroHook = () => {
  const { signupCount, producerCount } = useSignupCount();
  const spotsLeft = 200;
  const producersSignedUp = "1K";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-20 sm:pt-24">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto max-w-6xl text-center relative z-10 py-12 sm:py-16 md:py-24 lg:py-32">
        {/* Live indicator */}
        <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 glass rounded-full animate-fade-in touch-manipulation">
          <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
          <span className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider">
            {spotsLeft < 300 ? "🔥 ALMOST FULL" : "LIVE NOW"}
          </span>
        </div>

        {/* Main headline - optimized for mobile reading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-6 sm:mb-8 leading-[1.1] sm:leading-[0.95] animate-fade-in font-poppins px-2">
          <span className="block mb-3 sm:mb-4 font-semibold">The First Live Platform</span>
          <span className="block mb-3 sm:mb-4 font-semibold">Where Hip Hop Producers</span>
          <span className="block font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-shimmer">
            ACTUALLY WIN
          </span>
        </h1>

        {/* Subheadline - better line height for mobile */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed animate-fade-in font-medium px-4">
          Live beat sales. Real money.<br className="sm:hidden" /> No bullshit.
        </p>

        {/* Social proof stats - stacked on small mobile */}
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 animate-fade-in px-4">
          <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:scale-[1.02] sm:hover:scale-105 transition-transform active:scale-95 touch-manipulation">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-1 sm:mb-2">
              {producersSignedUp}
            </div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium leading-tight">
              Producers Signed Up
            </div>
          </div>
          <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:scale-[1.02] sm:hover:scale-105 transition-transform active:scale-95 touch-manipulation">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-destructive mb-1 sm:mb-2">
              {spotsLeft}
            </div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium leading-tight">
              Beta Spots Left
            </div>
          </div>
          <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:scale-[1.02] sm:hover:scale-105 transition-transform active:scale-95 touch-manipulation">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary mb-1 sm:mb-2">
              $0
            </div>
            <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium leading-tight">
              To Join Beta
            </div>
          </div>
        </div>

        {/* CTA - full width on mobile */}
        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-stretch sm:items-center animate-fade-in px-4">
          <Button 
            onClick={() => {
              document.getElementById('signup-form')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
              });
            }}
            size="lg"
            className="h-14 sm:h-16 md:h-20 w-full sm:w-auto px-10 sm:px-12 md:px-16 text-lg sm:text-xl md:text-2xl font-black bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background rounded-full shadow-glow-primary hover:shadow-glow-secondary transition-all hover:scale-105 active:scale-95 touch-manipulation"
          >
            CLAIM YOUR SPOT 🔥
          </Button>
        </div>

        {/* Urgency message */}
        {spotsLeft < 300 && (
          <p className="text-destructive font-bold text-base sm:text-lg md:text-xl mt-4 sm:mt-6 animate-pulse px-4">
            ⚠️ Only {spotsLeft} spots remaining
          </p>
        )}
      </div>

      {/* Scroll indicator - hide on small mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
