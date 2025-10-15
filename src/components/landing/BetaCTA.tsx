import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Flame } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/lib/emailService";
import { z } from "zod";
import { useSignupCount } from "@/hooks/useSignupCount";

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
    "Lock in pricing before we 10x it",
    "Your ideas become features",
    "Get everything before everyone else",
    "DM the founders directly",
    "Every future feature = FREE",
    "Front-row access while others wait"
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
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight">
            NO MORE BEING <span className="text-destructive">BROKE, IGNORED, OR EXPLOITED</span>
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground max-w-3xl mx-auto">
            Join the waitlist. Get in early.
          </p>
        </div>

        {/* What You Get */}
        <div className="mb-12 sm:mb-16 p-6 sm:p-8 md:p-10 bg-card border-4 border-primary rounded-2xl animate-slide-up">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gold-metallic mb-8 text-center">
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
            Only 1,200 spots. First come, first served.
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-primary">
            If that's you? Sign up now.
          </p>
        </div>

        {/* CTA Form */}
        <div className="max-w-4xl mx-auto mb-8 p-8 sm:p-12 md:p-16 bg-card/50 border-2 border-primary/20 rounded-3xl animate-glow-pulse">
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
              {isSubmitting ? "⚡" : "I'm in 🔥"}
            </Button>
          </form>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-8 text-center font-medium">
            No credit card. No bullshit. Just your info.
          </p>
        </div>

        {/* Live Counter Box */}
        <div className="mb-12 sm:mb-16 flex justify-center animate-fade-in">
          <div className="inline-flex items-center gap-6 px-8 py-6 bg-primary/10 border-2 border-primary rounded-2xl">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-primary">
                {slotsTaken}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium mt-1">
                Slots Taken
              </div>
            </div>
            <div className="h-12 w-px bg-primary/30"></div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-foreground">
                {totalSlots}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium mt-1">
                Total Slots
              </div>
            </div>
          </div>
        </div>

        {/* Final Emotional Hook */}
        <div className="mt-16 sm:mt-20 text-center max-w-3xl mx-auto animate-fade-in">
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
            You've been grinding in the dark for your shot at discovery.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-black text-foreground mt-4 leading-tight">
            Now is the time. Trust yourself. You're ready.
          </p>
        </div>
      </div>
    </section>
  );
};
