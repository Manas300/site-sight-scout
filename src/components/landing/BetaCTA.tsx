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
  const slotsTaken = producerCount || 0;
  const slotsLeft = totalSlots - slotsTaken;

  const benefits = [
    "Lock in Founder Pricing before we 10x it",
    "Your ideas can literally become features",
    "Get the sauce before your competition does",
    "DM the founders on demand (no gatekeeping)",
    "Every future feature = FREE for you",
    "VIP access while everyone else waits"
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
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto max-w-5xl">
        {/* Opening Message */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="flex justify-center mb-8">
            <Rocket className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 text-primary animate-pulse" strokeWidth={2} />
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            BETA AND BEYOND
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed max-w-4xl mx-auto border-l-4 border-primary pl-6">
            We&apos;re looking for 1,200 hungry producers making trap, drill, and other fire beats to beta test BAGR. If you love cooking up live, making money, and are constantly challenging the status-quo, <span className="font-black">sign up below for your seat at the table.</span>
          </p>
        </div>

        {/* FOMO FIRST - MASSIVE Live Counter for immediate urgency */}
        <div className="mb-12 flex justify-center animate-fade-in">
          <div className="inline-flex items-center gap-8 sm:gap-12 px-12 sm:px-16 md:px-20 py-12 sm:py-16 md:py-20 bg-destructive/10 border-4 border-destructive rounded-3xl shadow-2xl hover:shadow-destructive/30 transition-all hover:scale-105">
            <div className="text-center">
              <div className="text-7xl sm:text-8xl md:text-9xl font-black text-destructive animate-pulse mb-2">
                {slotsLeft}
              </div>
              <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-bold mt-2">
                Spots Left
              </div>
            </div>
            <div className="h-24 sm:h-32 md:h-40 w-1 bg-destructive/30"></div>
            <div className="text-center">
              <div className="text-7xl sm:text-8xl md:text-9xl font-black text-foreground mb-2">
                {totalSlots}
              </div>
              <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-bold mt-2">
                Total Slots
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Message - Right after counter */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-2xl sm:text-3xl md:text-4xl text-destructive font-black mb-4 max-w-3xl mx-auto">
            ONLY 1,200 SPOTS.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            Once they&apos;re gone, you&apos;re stuck in the queue.
          </p>
        </div>

        {/* Hook - Emotional trigger */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight">
            STOP GETTING <span className="text-destructive">EXPLOITED</span> BY THE INDUSTRY
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground max-w-3xl mx-auto font-bold">
            Trust yourself. You&apos;re ready.
          </p>
        </div>

        {/* What You Get - Value proposition */}
        <div className="mb-12 sm:mb-16 p-6 sm:p-8 md:p-10 bg-card border-4 border-primary rounded-2xl animate-slide-up">
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

        {/* CTA Form - Strike while hot */}
        <div className="max-w-4xl mx-auto mb-12 p-8 sm:p-12 md:p-16 bg-card/50 border-2 border-primary/20 rounded-3xl animate-glow-pulse">
          <div className="text-center mb-8">
            <p className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-2">
              CLAIM YOUR SPOT NOW
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Before your competition does
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="h-16 sm:h-18 text-base sm:text-lg bg-muted/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground font-medium focus:border-primary px-6"
                required
              />
              <Input
                type="text"
                placeholder="@yourighandle"
                value={formData.igHandle}
                onChange={(e) => setFormData(prev => ({ ...prev, igHandle: e.target.value.replace(/^@/, '') }))}
                className="h-16 sm:h-18 text-base sm:text-lg bg-muted/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground font-medium focus:border-primary px-6"
                required
              />
            </div>
            
            <Button 
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full h-16 sm:h-20 px-12 sm:px-16 text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background rounded-full shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
            >
              {isSubmitting ? "⚡ SECURING YOUR SPOT..." : "I'M IN 🔥"}
            </Button>
          </form>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-8 text-center font-medium">
            No credit card. No spam. Just the invite when we're ready.
          </p>
        </div>

      </div>
    </section>
  );
};
