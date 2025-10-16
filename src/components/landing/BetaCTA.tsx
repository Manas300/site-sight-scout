import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Flame, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/lib/emailService";
import { z } from "zod";
import { useSignupCount } from "@/hooks/useSignupCount";
import { CountdownTimer } from "./CountdownTimer";

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
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Main CTA Card - Takes full width on mobile, left column on desktop */}
          <div className="lg:row-span-2 glass rounded-3xl p-8 sm:p-12 border-2 border-primary/30 hover:border-primary/50 transition-all group">
            <div className="flex justify-center mb-6">
              <Rocket 
                className="w-20 h-20 sm:w-24 sm:h-24 text-primary drop-shadow-[0_0_30px_rgba(168,85,247,0.6)] animate-[bounce_2s_ease-in-out_infinite]" 
                strokeWidth={2.5} 
                fill="currentColor"
              />
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-center leading-tight">
              LAST <span className="text-destructive">200</span> SPOTS
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-center">
              Join 1,000+ producers building the future of beat sales
            </p>

            {/* Simplified Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="h-14 sm:h-16 text-base sm:text-lg glass border-2 border-primary/30 text-foreground placeholder:text-muted-foreground font-medium focus:border-primary"
                required
              />
              <Input
                type="text"
                placeholder="@yourighandle"
                value={formData.igHandle}
                onChange={(e) => setFormData(prev => ({ ...prev, igHandle: e.target.value.replace(/^@/, '') }))}
                className="h-14 sm:h-16 text-base sm:text-lg glass border-2 border-primary/30 text-foreground placeholder:text-muted-foreground font-medium focus:border-primary"
                required
              />
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full h-14 sm:h-16 text-lg sm:text-xl font-black bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background rounded-full shadow-glow-primary transition-all hover:scale-105"
              >
                {isSubmitting ? "⚡ LOCKING IN..." : "CLAIM YOUR SPOT 🔥"}
              </Button>
            </form>
            
            <p className="text-sm sm:text-base text-muted-foreground mt-4 text-center">
              no cc • no spam • instant access
            </p>
          </div>

          {/* Benefits Cards - Right column */}
          <div className="glass rounded-2xl p-6 border-2 border-primary/20 hover:scale-105 transition-all">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl sm:text-2xl font-black mb-2">Founder Pricing</h3>
            <p className="text-muted-foreground">Lock in pricing before we 10x it</p>
          </div>

          <div className="glass rounded-2xl p-6 border-2 border-secondary/20 hover:scale-105 transition-all">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl sm:text-2xl font-black mb-2">Direct Line</h3>
            <p className="text-muted-foreground">Chat with founders, no gatekeepers</p>
          </div>

          <div className="glass rounded-2xl p-6 border-2 border-primary/20 hover:scale-105 transition-all">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl sm:text-2xl font-black mb-2">Shape Features</h3>
            <p className="text-muted-foreground">Your feedback builds the platform</p>
          </div>

          <div className="glass rounded-2xl p-6 border-2 border-destructive/20 hover:scale-105 transition-all">
            <div className="text-4xl mb-3">🔥</div>
            <h3 className="text-xl sm:text-2xl font-black mb-2">Skip The Line</h3>
            <p className="text-muted-foreground">Beta access while others wait</p>
          </div>
        </div>

        {/* Social Proof Ticker */}
        <div className="glass rounded-2xl p-6 border-2 border-primary/20 text-center">
          <p className="text-sm sm:text-base text-muted-foreground mb-2">
            <span className="text-primary font-black">1,000+</span> producers already locked in from
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-bold">
            <span className="px-3 py-1 bg-primary/20 rounded-full">🇺🇸 USA</span>
            <span className="px-3 py-1 bg-primary/20 rounded-full">🇬🇧 UK</span>
            <span className="px-3 py-1 bg-primary/20 rounded-full">🇨🇦 Canada</span>
            <span className="px-3 py-1 bg-primary/20 rounded-full">🇫🇷 France</span>
            <span className="px-3 py-1 bg-primary/20 rounded-full">🇩🇪 Germany</span>
            <span className="px-3 py-1 bg-primary/20 rounded-full">+ 30 more</span>
          </div>
        </div>

        {/* Urgency Footer */}
        <div className="mt-12 text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-destructive mb-2 animate-pulse">
            ⚠️ ONLY 200 SPOTS LEFT
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground">
            miss this = back of the line
          </p>
        </div>
      </div>
    </section>
  );
};
