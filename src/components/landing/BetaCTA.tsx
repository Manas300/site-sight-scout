import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Flame } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/lib/emailService";
import { z } from "zod";

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

  const benefits = [
    "Lock in FOUNDER PRICING for life - first 1,200 only, then prices go up forever",
    "Shape the platform - your feedback builds our future, not corporate suits",
    "Early access to ALL features - be the first to dominate, while others wait",
    "Direct line to the founders - your voice matters, theirs won't",
    "Grandfathered into every new feature - pay once, win forever",
    "Join the elite founding circle - or watch from the sidelines as others blow up"
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
            We're only taking the first 1,200 producers who are SERIOUS about changing the game.
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4">
            If that's you?
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-primary">
            Sign up below. Right now.
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
              {isSubmitting ? "⚡" : "I'M READY TO WIN 🔥"}
            </Button>
          </form>
          
          <p className="text-sm sm:text-base text-muted-foreground mt-8 text-center">
            No credit card. No bullshit. Just your info and your story.
          </p>
        </div>

        {/* Final Emotional Hook */}
        <div className="mt-16 sm:mt-20 text-center max-w-3xl mx-auto animate-fade-in">
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
            You've been waiting years for your shot at discovery.
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
