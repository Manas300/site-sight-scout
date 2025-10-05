import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/lib/emailService";
import { useSignupCount } from "@/hooks/useSignupCount";
import { Zap, TrendingUp, Flame } from "lucide-react";
import { z } from "zod";
import { BagAnimation } from "@/components/animations/BagAnimation";
import moneyBagImage from "@/assets/money-bag.png";

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Enter a valid email" }).max(255)
});

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signupCount } = useSignupCount();
  const { toast } = useToast();


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
      const result = await subscribeToNewsletter(validation.data.email, 'hero');
      
      if (result.success) {
        toast({
          title: "YOU'RE IN 🔥",
          description: "Check your email for founder club access.",
        });
        setEmail("");
      } else {
        // Handle specific error cases
        if (result.error?.includes('already') || result.error?.includes('duplicate')) {
          toast({
            title: "Already signed up! 🎉",
            description: "You're already on the list, founder.",
          });
        } else {
          throw new Error(result.error || 'Failed to subscribe');
        }
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
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
          
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-6 font-montserrat" style={{ lineHeight: '0.9' }}>
            <span className="block text-primary animate-pulse">
              {['D','R','O','P',' ','B','E','A','T','S','.'].map((letter, i) => {
                // Custom spacing for each letter position
                const spacing = {
                  0: '0.05em',  // After D
                  1: '0.05em', // After R  
                  2: '0.05em', // After O
                  3: '0.2em',  // After P
                  4: '-0.2em',  // After space
                  5: '0.05em', // After B
                  6: '0.13em', // After E
                  7: '0.001em',  // After A
                  8: '0.11em', // After T
                  9: '0.05em', // After S
                  10: '0em'    // After period (no spacing)
                };
                
                return (
                  <span key={i} style={{ 
                    marginRight: spacing[i as keyof typeof spacing]
                  }}>{letter}</span>
                );
              })}
            </span>
            <span className="block text-secondary animate-pulse tracking-normal" style={{ animationDelay: '0.3s', marginTop: '20px' }}>
              {['S','T','A','R','T',' ','B','I','D','D','I','N','G',' '].map((letter, i) => {
                // Custom spacing for each letter position in "START BIDDING "
                const spacing = {
                  0: '0.075em',  // After S
                  1: '-0.03em',  // After T
                  2: '0.05em', // After A
                  3: '0.05em',  // After R
                  4: '0.2em',   // After T
                  5: '-0.250em',   // After space
                  6: '0.005em',  // After B
                  7: '0.005em',  // After I
                  8: '0.005em',  // After D
                  9: '0.005em',  // After D
                  10: '0.0008em', // After I
                  11: '0.0005em', // After N
                  12: '0.0005em', // After G
                  13: '0em'     // After space (no spacing)
                };
                
                return (
                  <span key={i} style={{ 
                    marginRight: spacing[i as keyof typeof spacing]
                  }}>{letter}</span>
                );
              })}
              {['W','A','R','S','.'].map((letter, i) => {
                // Custom spacing for each letter position in "WARS."
                const spacing = {
                  0: '-0.07em',  // After W
                  1: '0.05em',  // After A
                  2: '0.05em',  // After R
                  3: '0em',  // After S
                  4: '0em'      // After period (no spacing)
                };
                
                return (
                  <span key={i} style={{ 
                    marginRight: spacing[i as keyof typeof spacing]
                  }}>{letter}</span>
                );
              })}
            </span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse tracking-normal text-center" style={{ animationDelay: '0.6s', lineHeight: '0.8', marginTop: '30px' }}>
              {['G','E','T',' ','T','H','E',' ','B','A','G','.'].map((letter, i) => {
                // Custom spacing for each letter position in "GET THE BAG "
                const spacing = {
                  0: '0.001em',  // After G
                  1: '0.04em',   // After E
                  2: '0.05em',   // After T
                  3: '-0.05em',    // After space
                  4: '0.04em',   // After T
                  5: '0.002em',   // After H
                  6: '0.05em',   // After E
                  7: '-0.15em',    // After space
                  8: '0.03em',   // After B
                  9: '-0.03em',   // After A
                  10: '0.03em',  // After G
                  11: '0em'      // After space (no spacing)
                };
                
                return (
                  <span key={i} style={{ 
                    marginRight: spacing[i as keyof typeof spacing]
                  }}>{letter}</span>
                );
              })}
              <BagAnimation className="inline-block relative z-50" />
            </span>
            </h1>
            
            {/* Static Bag Image */}
            <div className="flex justify-center mb-8 -mt-48">
              <img 
                src={moneyBagImage} 
                alt="money bag" 
                className="w-35 h-35 md:w-35 md:h-40"
                style={{
                  filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.6)) drop-shadow(0 0 20px rgba(255,215,0,0.8))',
                  textShadow: '0 0 30px rgba(255,215,0,0.9)',
                  WebkitTextStroke: '2px rgba(0,0,0,0.3)'
                }}
              />
            </div>
            
            <p className="text-lg md:text-3xl mb-8 text-foreground/90 font-bold max-w-3xl mx-auto text-center">
            The TikTok Shop for hip hop beats.<br/>
              <span className="whitespace-nowrap block -ml-5"><span className="text-primary">Live streaming</span> × <span className="text-secondary">Real-time bidding</span> × <span className="text-primary">Instant payouts</span></span>
          </p>

          {/* Radical Transparency Box */}
          <div className="mb-12 p-4 md:p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-xl max-w-4xl mx-auto">
            <div className="flex items-start gap-3 text-left">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1 animate-pulse" />
              <div>
                <p className="text-sm md:text-lg font-bold mb-2 text-primary">REAL TALK:</p>
                <p className="text-sm md:text-lg text-foreground/80">
                  We've been bootstrapping this project, investing $20K+ of our own money, but need Venture Capital to truly realize BAGЯ's potential for the hip hop creator community and scale quickly. Your signup = proof to VCs that producers actually want this.
                </p>
              </div>
            </div>
          </div>

          {/* Founder Pricing Highlight */}
          <div className="mb-8 px-6 md:px-8 py-4 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary rounded-lg max-w-lg mx-auto text-center animate-pulse">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
              <p className="text-sm font-bold text-primary">LIMITED TIME OFFER</p>
              <div className="w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <p className="text-lg md:text-xl font-black text-primary">
              First 1,200 = <span className="text-secondary">Founder Pricing</span>
            </p>
            <p className="text-2xl md:text-3xl font-black text-secondary">
              33% OFF FOR LIFE
            </p>
          </div>

          {/* FOMO Counter */}
          <div className="mb-12 flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            <div className="px-6 md:px-8 py-4 bg-destructive/20 border-2 border-destructive rounded-lg animate-pulse">
              <p className="text-2xl md:text-3xl font-black text-destructive">{spotsLeft}</p>
              <p className="text-xs text-destructive/80 font-bold">SPOTS LEFT</p>
            </div>
            <div className="px-6 md:px-8 py-4 bg-primary/20 border-2 border-primary rounded-lg">
              <p className="text-2xl md:text-3xl font-black text-primary">{signupCount}</p>
              <p className="text-xs text-primary/80 font-bold">ALREADY IN</p>
            </div>
            <div className="px-6 md:px-8 py-4 bg-secondary/20 border-2 border-secondary rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
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
            {/* <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-primary border-2 border-background animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div> */}
            {/* <p className="text-foreground/70">
              <span className="font-black text-primary">23 producers</span> joined recently
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
