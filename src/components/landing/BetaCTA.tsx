import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Flame, Rocket, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/lib/emailService";
import { z } from "zod";
import { useSignupCount } from "@/hooks/useSignupCount";
import { CountdownTimer } from "./CountdownTimer";
import { ShareButton } from "./ShareButton";

const signupSchema = z.object({
  email: z.string().trim().email({ message: "Enter a valid email" }).max(255),
  igHandle: z.string().trim().min(1, { message: "Instagram handle required" }).max(100)
});

export const BetaCTA = () => {
  const [formData, setFormData] = useState({
    email: "",
    igHandle: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { producerCount } = useSignupCount();

  const totalSlots = 1200;
  const slotsTaken = 1000; // Fixed to show 200 remaining
  const slotsLeft = 200;

  const benefits = [
    "founder pricing before we 10x it",
    "direct line to founders, no gatekeepers, no BS",
    "feature-shaping with your feedback",
    "skipping the line while everyone else waits",
    "free feature updates for life",
    "early access to everything we drop"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = signupSchema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: "hold up! missing some info",
        description: validation.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await subscribeToNewsletter(
        validation.data.email, 
        'beta-cta',
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        validation.data.igHandle
      );
      
      if (result.success) {
        toast({
          title: "LET'S GOOO 🔥",
          description: "You're in! Check your email.",
        });
        setFormData({
          email: "",
          igHandle: ""
        });
      } else {
        if (result.error?.includes('already') || result.error?.includes('duplicate')) {
          toast({
            title: "yo you already signed up! 🎉",
            description: "you're on the list bestie",
          });
        } else {
          throw new Error(result.error || 'Failed to subscribe');
        }
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Something broke 😭",
        description: "Try again or hit us up on Twitter",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup-form" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Main CTA Card - Takes full width on mobile, left column on desktop */}
          <div className="lg:row-span-2 glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-primary/30 hover:border-primary/50 transition-all group">
            <div className="flex justify-center mb-4 sm:mb-6">
              <Rocket 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-primary drop-shadow-[0_0_30px_rgba(168,85,247,0.6)] animate-[bounce_2s_ease-in-out_infinite]" 
                strokeWidth={2.5} 
                fill="currentColor"
              />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-center leading-tight">
              LAST <span className="text-destructive">200</span> SPOTS
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 text-center leading-relaxed">
              Join 1K+ producers building<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>the future beat economy
            </p>

            {/* Simplified Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <Input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="h-12 sm:h-14 md:h-16 text-base sm:text-lg glass border-2 border-primary/30 text-foreground placeholder:text-muted-foreground font-medium focus:border-primary touch-manipulation"
                required
              />
              <Input
                type="text"
                placeholder="@yourighandle"
                value={formData.igHandle}
                onChange={(e) => setFormData(prev => ({ ...prev, igHandle: e.target.value.replace(/^@/, '') }))}
                className="h-12 sm:h-14 md:h-16 text-base sm:text-lg glass border-2 border-primary/30 text-foreground placeholder:text-muted-foreground font-medium focus:border-primary touch-manipulation"
                required
              />
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full h-12 sm:h-14 md:h-16 text-base sm:text-lg md:text-xl font-black bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background rounded-full shadow-glow-primary transition-all hover:scale-105 active:scale-95 touch-manipulation"
              >
                {isSubmitting ? "⚡ LOCKING IN..." : "CLAIM YOUR SPOT 🔥"}
              </Button>
            </form>
            
            <div className="flex items-center justify-center gap-3 mt-4 sm:mt-6">
              <p className="text-xs sm:text-sm text-muted-foreground text-center">
                no cc • no spam • instant access
              </p>
              <ShareButton variant="outline" size="sm" showLabel={false} />
            </div>
          </div>

          {/* Benefits Cards - Single column on the right */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
            <div className="flex flex-col items-center gap-1 sm:gap-2 mb-2">
              <div className="text-4xl sm:text-5xl md:text-6xl drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]">
                💎
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-center bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent animate-pulse">
                Beta Testers Get:
              </h3>
            </div>
            
            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-primary/20 hover:scale-[1.02] lg:hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all min-h-[100px] sm:min-h-[120px] lg:h-[140px] flex flex-col active:scale-95 touch-manipulation">
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">🔒</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 leading-tight">Founder Pricing for Life</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-normal leading-snug">Lock in the lowest rate ever</p>
            </div>

            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-primary/20 hover:scale-[1.02] lg:hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all min-h-[100px] sm:min-h-[120px] lg:h-[140px] flex flex-col active:scale-95 touch-manipulation">
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">🚀</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 leading-tight">Shape v1 of BAGR</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-normal leading-snug">Your feedback builds the platform</p>
            </div>

            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-secondary/20 hover:scale-[1.02] lg:hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all min-h-[100px] sm:min-h-[120px] lg:h-[140px] flex flex-col active:scale-95 touch-manipulation">
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">📞</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 leading-tight">Direct Link to Founders</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-normal leading-snug">No gatekeeping</p>
            </div>

            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-primary/20 hover:scale-[1.02] lg:hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all min-h-[100px] sm:min-h-[120px] lg:h-[140px] flex flex-col active:scale-95 touch-manipulation">
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">🎁</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 leading-tight">Free Feature Upgrades for Life</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-normal leading-snug">Never pay for new features</p>
            </div>

            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-destructive/20 hover:scale-[1.02] lg:hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all min-h-[100px] sm:min-h-[120px] lg:h-[140px] flex flex-col active:scale-95 touch-manipulation">
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">👑</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 leading-tight">Irrevocable VIP Status</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-normal leading-snug">Elite status that never expires</p>
            </div>
          </div>
        </div>

        {/* Social Proof Ticker */}
        <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-primary/20 text-center">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3">
            <span className="text-primary font-black text-sm sm:text-base md:text-lg">1,000+</span> producers already locked in from
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold">
            <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full">🇺🇸 USA</span>
            <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full">🇬🇧 UK</span>
            <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full">🇨🇦 Canada</span>
            <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full">🇫🇷 France</span>
            <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full">🇩🇪 Germany</span>
            <span className="px-2 sm:px-3 py-1 bg-primary/20 rounded-full">+ 30 more</span>
          </div>
        </div>

        {/* Urgency Footer */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-destructive mb-2 animate-pulse leading-tight">
            ⚠️ ONLY 200 SPOTS LEFT
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            miss this = back of the line
          </p>
        </div>
      </div>
    </section>
  );
};
