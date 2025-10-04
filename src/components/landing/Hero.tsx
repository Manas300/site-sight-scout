import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Zap, TrendingUp, Flame } from "lucide-react";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Enter a valid email" }).max(255)
});

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupCount, setSignupCount] = useState(847);
  const { toast } = useToast();

  useEffect(() => {
    // Fetch real signup count
    const fetchCount = async () => {
      const { count } = await supabase
        .from('waitlist_signups')
        .select('*', { count: 'exact', head: true });
      if (count !== null) {
        setSignupCount(count);
      }
    };
    fetchCount();

    // Subscribe to realtime updates
    const channel = supabase
      .channel('waitlist-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'waitlist_signups'
        },
        () => {
          fetchCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const validation = emailSchema.safeParse({ email });
    if (!validation.success) {
      toast({
        title: "Invalid email",
        description: validation.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('waitlist_signups')
        .insert([{ email: validation.data.email }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already signed up! 🎉",
            description: "You're already on the list, founder.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "YOU'RE IN 🔥",
          description: "Check your email for founder club access.",
        });
      }
      setEmail("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Try again or DM us on Twitter.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const spotsLeft = Math.max(0, 1200 - signupCount);

  return (
    <section className="relative pt-32 pb-12 md:pb-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="animate-fade-in">
          {/* Hype Badge */}
          <div className="inline-block mb-6 px-3 md:px-4 py-2 bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full text-xs md:text-sm font-black text-background animate-glow-pulse">
            <span className="flex items-center gap-2">
              <Flame className="w-3 h-3 md:w-4 md:h-4 animate-pulse" />
              WE'RE RAISING $850K • BE A FOUNDER
              <Flame className="w-3 h-3 md:w-4 md:h-4 animate-pulse" />
            </span>
          </div>
          
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            <span className="block text-primary animate-pulse">DROP BEATS.</span>
            <span className="block text-secondary animate-pulse tracking-normal" style={{ animationDelay: '0.3s' }}>START BIDDING <span style={{ letterSpacing: '-0.08em' }}>WAR</span>S.</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse tracking-normal" style={{ animationDelay: '0.6s' }}>GET THE BAG <span className="inline-block">💰</span></span>
          </h1>
          
          <p className="text-lg md:text-3xl mb-8 text-foreground/90 font-bold max-w-3xl mx-auto text-center">
            The TikTok Shop for hip hop beats.<br/>
            <span className="whitespace-nowrap"><span className="text-primary">Live streaming</span> × <span className="text-secondary">Real-time bidding</span> × <span className="text-primary">Instant payouts</span></span>
          </p>

          {/* Radical Transparency Box */}
          <div className="mb-12 p-4 md:p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-xl max-w-2xl mx-auto">
            <div className="flex items-start gap-3 text-left">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1 animate-pulse" />
              <div>
                <p className="text-xs md:text-sm font-bold mb-2 text-primary">REAL TALK:</p>
                <p className="text-xs md:text-sm text-foreground/80">
                  We've been bootstrapping this project, investing $20K+ of our own money, but need Venture Capital to truly realize BAGЯ's potential for the hip hop creator community and scale quickly. Your signup = proof to VCs that producers actually want this. 
                  <span className="font-bold text-primary"> First 1,200 = founder pricing (33% off for life).</span>
                </p>
              </div>
            </div>
          </div>

          {/* FOMO Counter */}
          <div className="mb-12 flex items-center justify-center gap-3 md:gap-6 flex-wrap">
            <div className="px-4 md:px-6 py-3 bg-destructive/20 border-2 border-destructive rounded-lg animate-pulse">
              <p className="text-2xl md:text-3xl font-black text-destructive">{spotsLeft}</p>
              <p className="text-xs text-destructive/80 font-bold">SPOTS LEFT</p>
            </div>
            <div className="px-4 md:px-6 py-3 bg-primary/20 border-2 border-primary rounded-lg">
              <p className="text-2xl md:text-3xl font-black text-primary">{signupCount}</p>
              <p className="text-xs text-primary/80 font-bold">ALREADY IN</p>
            </div>
            <div className="px-4 md:px-6 py-3 bg-secondary/20 border-2 border-secondary rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
              <p className="text-2xl md:text-3xl font-black text-secondary">18</p>
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
                className="flex-1 h-12 md:h-14 bg-muted/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground text-base md:text-lg font-medium focus:border-primary"
                required
              />
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="h-12 md:h-14 px-8 md:px-10 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-black text-base md:text-lg animate-glow-pulse border-2 border-primary whitespace-nowrap"
              >
                {isSubmitting ? "⚡" : "I'M IN →"}
              </Button>
            </form>
            <p className="text-xs md:text-sm text-muted-foreground mt-4 font-medium">
              🔒 Join the founder's club • 33% off forever • <span className="font-black text-primary animate-pulse">Limited to 1,200</span>
            </p>
          </div>

          {/* Social Proof Ticker */}
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-primary border-2 border-background animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <p className="text-foreground/70">
              <span className="font-black text-primary">23 producers</span> joined recently
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
