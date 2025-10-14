import { Button } from "@/components/ui/button";
import { Check, Flame } from "lucide-react";

export const BetaCTA = () => {
  const benefits = [
    "First 1,200 producers lock in FOUNDER PRICING (33% OFF DIAMOND PLAN FOR LIFE)",
    "Shape the platform - your feedback builds the future",
    "Early access to ALL features before public launch",
    "Direct line to the founders - we're building this WITH you",
    "Get grandfathered into every new feature we drop",
    "Join the movement BEFORE it blows up"
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full mb-8">
            <Flame className="w-5 h-5 text-background animate-pulse" />
            <span className="text-sm sm:text-base font-black text-background">BETA LAUNCH - LIMITED SPOTS</span>
            <Flame className="w-5 h-5 text-background animate-pulse" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight">
            READY TO STOP BEING
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-destructive mb-6">
            BROKE, INVISIBLE & EXHAUSTED?
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground max-w-3xl mx-auto">
            Join the beta. Be part of the revolution.
          </p>
        </div>

        {/* What You Get */}
        <div className="mb-12 sm:mb-16 p-6 sm:p-8 md:p-10 bg-card border-4 border-primary rounded-2xl animate-slide-up">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-8 text-center">
            WHAT YOU GET AS A BETA TESTER:
          </h3>
          
          <div className="grid gap-4 sm:gap-6">
            {benefits.map((benefit, i) => (
              <div 
                key={i} 
                className="flex items-start gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-background" />
                </div>
                <p className="text-base sm:text-lg md:text-xl text-foreground font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Ask */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            We're only taking the first 1,200 producers who are SERIOUS about changing the game.
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4">
            If that's you?
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-primary">
            Sign up below. Right now.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center animate-glow-pulse">
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
            size="lg"
            className="h-16 sm:h-20 px-12 sm:px-16 text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background rounded-full shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
          >
            I'M READY TO WIN 🔥
          </Button>
          
          <p className="text-sm sm:text-base text-muted-foreground mt-6">
            No credit card. No bullshit. Just your info and your story.
          </p>
        </div>

        {/* Final Emotional Hook */}
        <div className="mt-16 sm:mt-20 text-center max-w-3xl mx-auto animate-fade-in">
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
            You've been grinding for years. You've been waiting for your shot.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-black text-foreground mt-4 leading-tight">
            This is it.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-black text-primary mt-2 leading-tight">
            Don't miss it.
          </p>
        </div>
      </div>
    </section>
  );
};
