import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Zap, TrendingUp, Flame } from "lucide-react";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Don't miss out on founder access.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // TODO: Connect to actual LOI collection system
    setTimeout(() => {
      toast({
        title: "YOU'RE IN 🔥",
        description: "Check your email for founder club access.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="animate-fade-in">
          {/* Hype Badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full text-sm font-black text-background animate-glow-pulse">
            <span className="flex items-center gap-2">
              <Flame className="w-4 h-4 animate-pulse" />
              WE'RE RAISING $850K • BE A FOUNDER
              <Flame className="w-4 h-4 animate-pulse" />
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            <span className="block text-primary animate-pulse">DROP BEATS.</span>
            <span className="block text-secondary animate-pulse" style={{ animationDelay: '0.3s' }}>START BIDDING WARS.</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse" style={{ animationDelay: '0.6s' }}>GET THE BAG💰</span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 text-foreground/90 font-bold max-w-3xl mx-auto">
            The TikTok Shop for hip hop beats.<br/>
            <span className="text-primary">Live streaming</span> × <span className="text-secondary">Real-time bidding</span> × <span className="text-primary">Instant payouts</span>
          </p>

          {/* Radical Transparency Box */}
          <div className="mb-12 p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-xl max-w-2xl mx-auto">
            <div className="flex items-start gap-3 text-left">
              <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1 animate-pulse" />
              <div>
                <p className="text-sm font-bold mb-2 text-primary">REAL TALK:</p>
                <p className="text-sm text-foreground/80">
                  The platform isn't built yet. We're raising $850K to make this real. Your signup = proof to VCs that producers actually want this. 
                  <span className="font-bold text-primary"> First 1,200 = founder pricing (33% off for life).</span>
                </p>
              </div>
            </div>
          </div>

          {/* FOMO Counter */}
          <div className="mb-12 flex items-center justify-center gap-6 flex-wrap">
            <div className="px-6 py-3 bg-destructive/20 border-2 border-destructive rounded-lg animate-pulse">
              <p className="text-3xl font-black text-destructive">353</p>
              <p className="text-xs text-destructive/80 font-bold">SPOTS LEFT</p>
            </div>
            <div className="px-6 py-3 bg-primary/20 border-2 border-primary rounded-lg">
              <p className="text-3xl font-black text-primary">847</p>
              <p className="text-xs text-primary/80 font-bold">ALREADY IN</p>
            </div>
            <div className="px-6 py-3 bg-secondary/20 border-2 border-secondary rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
              <p className="text-3xl font-black text-secondary">18</p>
              <p className="text-xs text-secondary/80 font-bold">MONTHS RUNWAY</p>
            </div>
          </div>

          {/* CTA Form */}
          <div className="max-w-lg mx-auto mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 bg-muted/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground text-lg font-medium focus:border-primary"
                required
              />
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="h-14 px-10 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-black text-lg animate-glow-pulse border-2 border-primary"
              >
                {isSubmitting ? "⚡" : "I'M IN →"}
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4 font-medium">
              🔒 Join the founder's club • 33% off forever • <span className="font-black text-primary animate-pulse">Limited to 1,200</span>
            </p>
          </div>

          {/* Social Proof Ticker */}
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-primary border-2 border-background animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <p className="text-foreground/70">
              <span className="font-black text-primary">23 producers</span> joined in the last hour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
