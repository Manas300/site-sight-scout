import { Button } from "@/components/ui/button";
import { Flame, TrendingUp, Users } from "lucide-react";
import { useSignupCount } from "@/hooks/useSignupCount";

export const HeroHook = () => {
  const { signupCount, producerCount } = useSignupCount();
  const totalSlots = 1200;
  const spotsLeft = Math.max(0, totalSlots - producerCount);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      
      {/* Enhanced glow effects - Mobile optimized */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent rounded-full blur-[64px] sm:blur-[96px] md:blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-br from-secondary/30 via-secondary/20 to-transparent rounded-full blur-[64px] sm:blur-[96px] md:blur-[128px] animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      {/* Additional mobile-specific glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-radial from-destructive/20 via-transparent to-transparent rounded-full blur-[48px] animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto max-w-6xl text-center relative z-10 py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
        {/* Live indicator - increased font size */}
        <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-6 py-3 sm:py-4 glass rounded-full animate-fade-in touch-manipulation">
          <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
          <span className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider">
            {spotsLeft < 300 ? "🔥 ALMOST FULL" : "LIVE NOW"}
          </span>
        </div>

        {/* Main headline - increased mobile font sizes */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-[0.95] animate-fade-in font-poppins px-2">
          <span className="block mb-2 sm:mb-3 md:mb-4 font-semibold">The First Live Platform</span>
          <span className="block mb-2 sm:mb-3 md:mb-4 font-semibold">Where Hip Hop Producers</span>
          <span className="block font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-shimmer">
            ACTUALLY WIN
          </span>
        </h1>

        {/* Subheadline - increased mobile font size */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed animate-fade-in font-medium px-4">
          Live beat sales. Real money.<br className="sm:hidden" /> No bullshit.
        </p>

        {/* Enhanced social proof stats - Mobile optimized */}
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate-fade-in px-4">
          <div className="group relative glass rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 active:scale-95 touch-manipulation border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                {producerCount.toLocaleString()}
              </div>
              <div className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium leading-tight group-hover:text-primary/80 transition-colors duration-300">
                Producers Signed Up
              </div>
            </div>
          </div>
          <div className="group relative glass rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 active:scale-95 touch-manipulation border border-destructive/20 hover:border-destructive/40 hover:shadow-lg hover:shadow-destructive/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-destructive mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                {spotsLeft}
              </div>
              <div className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium leading-tight group-hover:text-destructive/80 transition-colors duration-300">
                Beta Spots Left
              </div>
            </div>
          </div>
          <div className="group relative glass rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 active:scale-95 touch-manipulation border border-secondary/20 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                $0
              </div>
              <div className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium leading-tight group-hover:text-secondary/80 transition-colors duration-300">
                To Join Beta
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA - Mobile optimized */}
        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-stretch sm:items-center animate-fade-in px-4">
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
            size="lg"
            className="group relative h-16 sm:h-18 md:h-20 lg:h-24 w-full sm:w-auto px-8 sm:px-10 md:px-12 lg:px-16 text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-[length:100%_100%] text-background rounded-2xl shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 active:scale-95 touch-manipulation overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="group-hover:animate-bounce">🔥</span>
              CLAIM YOUR SPOT
              <span className="group-hover:animate-bounce" style={{ animationDelay: '0.1s' }}>🔥</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>

        {/* Urgency message */}
        {spotsLeft < 50 && (
          <p className="text-destructive font-bold text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 md:mt-6 animate-pulse px-4">
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
