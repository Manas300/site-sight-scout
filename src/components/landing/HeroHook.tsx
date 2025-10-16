import { Button } from "@/components/ui/button";
import { Flame, TrendingUp, Users } from "lucide-react";
import { useSignupCount } from "@/hooks/useSignupCount";

export const HeroHook = () => {
  const { signupCount, producerCount } = useSignupCount();
  const spotsLeft = Math.max(0, 1200 - producerCount);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto max-w-6xl text-center relative z-10 py-32">
        {/* Live indicator */}
        <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 glass rounded-full animate-fade-in">
          <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
          <span className="text-sm sm:text-base font-bold uppercase tracking-wider">
            {spotsLeft < 300 ? "🔥 ALMOST FULL" : "LIVE NOW"}
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-[0.95] animate-fade-in">
          <span className="block mb-4">THE FIRST PLATFORM</span>
          <span className="block mb-4">WHERE PRODUCERS</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-shimmer">
            ACTUALLY WIN
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in font-medium">
          Live beat sales. Real money. No middlemen.
        </p>

        {/* Social proof stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="text-4xl sm:text-5xl font-black text-primary mb-2">
              {producerCount}+
            </div>
            <div className="text-sm sm:text-base text-muted-foreground font-medium">
              Producers Signed Up
            </div>
          </div>
          <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="text-4xl sm:text-5xl font-black text-destructive mb-2">
              {spotsLeft}
            </div>
            <div className="text-sm sm:text-base text-muted-foreground font-medium">
              Beta Spots Left
            </div>
          </div>
          <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
            <div className="text-4xl sm:text-5xl font-black text-secondary mb-2">
              $0
            </div>
            <div className="text-sm sm:text-base text-muted-foreground font-medium">
              To Join Beta
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            onClick={() => {
              document.getElementById('signup-form')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
              });
            }}
            size="lg"
            className="h-16 sm:h-20 px-12 sm:px-16 text-xl sm:text-2xl font-black bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background rounded-full shadow-glow-primary hover:shadow-glow-secondary transition-all hover:scale-105"
          >
            CLAIM YOUR SPOT 🔥
          </Button>
        </div>

        {/* Urgency message */}
        {spotsLeft < 300 && (
          <p className="text-destructive font-bold text-lg sm:text-xl mt-6 animate-pulse">
            ⚠️ Only {spotsLeft} spots remaining
          </p>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
