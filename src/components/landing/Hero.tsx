import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/lib/emailService";
import { useSignupCount } from "@/hooks/useSignupCount";
import { Zap, TrendingUp } from "lucide-react";
import { z } from "zod";


const signupSchema = z.object({
  firstName: z.string().trim().min(1, { message: "First name required" }).max(100),
  city: z.string().trim().min(1, { message: "City required" }).max(100),
  state: z.string().trim().max(100).optional().or(z.literal('')),
  whyBagr: z.string().trim().min(10, { message: "Tell us why (at least 10 characters)" }).max(500),
  email: z.string().trim().email({ message: "Enter a valid email" }).max(255),
  igHandle: z.string().trim().min(1, { message: "Instagram handle required" }).max(100)
});

export const Hero = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    city: "",
    state: "",
    whyBagr: "",
    email: "",
    igHandle: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signupCount, producerCount } = useSignupCount();
  const { toast } = useToast();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
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
        'hero',
        validation.data.firstName,
        validation.data.city,
        validation.data.state,
        validation.data.whyBagr,
        undefined,
        validation.data.igHandle
      );
      
      if (result.success) {
        toast({
          title: "LET'S GOOO 🔥",
          description: "Check the wall below - you're live!",
        });
        setFormData({
          firstName: "",
          city: "",
          state: "",
          whyBagr: "",
          email: "",
          igHandle: ""
        });
      } else {
        // Handle specific error cases
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

  const spotsLeft = Math.max(0, 1200 - producerCount);

  return (
    <section className="relative pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-20 px-3 sm:px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 font-space-grotesk text-center" style={{ letterSpacing: '0.05em', wordSpacing: '-0.05em', lineHeight: '1.2' }}>
            <span className="block text-foreground" style={{ letterSpacing: '0.05em' }}>
              STOP BEING
            </span>
            <span className="block text-destructive" style={{ marginTop: 'clamp(8px, 3vw, 20px)', letterSpacing: '0.05em' }}>
              BROKE, INVISIBLE & EXHAUSTED.
            </span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ marginTop: 'clamp(8px, 3vw, 20px)', letterSpacing: '0.05em' }}>
              START WINNING.
            </span>
          </h1>
            
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 text-muted-foreground font-medium max-w-4xl mx-auto px-2">
            The first live beat marketplace built for young producers who are tired of getting fucked by the industry.
          </p>


          {/* Founder Pricing Highlight */}
          <div id="limited-spots" className="mb-6 sm:mb-8 px-4 sm:px-6 md:px-8 py-4 sm:py-5 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary rounded-lg max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
              <p className="text-xs sm:text-sm font-bold text-primary">LIMITED SPOTS</p>
              <div className="w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary mb-1">
              First 1,200 Producer LOIs = <span className="text-secondary">Founder Pricing</span>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-secondary">
              33% OFF DIAMOND PLAN FOR LIFE 💎
            </p>
          </div>

          {/* FOMO Counter */}
          <div className="mb-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 bg-destructive/20 border-2 border-destructive rounded-lg text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-destructive">{spotsLeft}</p>
              <p className="text-xs sm:text-sm text-destructive/80 font-bold mt-1">PRODUCER SPOTS LEFT</p>
            </div>
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 bg-warning/20 border-2 border-warning rounded-lg text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-warning">{producerCount}</p>
              <p className="text-xs sm:text-sm text-warning/80 font-bold mt-1">PRODUCER LOIs</p>
            </div>
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 bg-primary/20 border-2 border-primary rounded-lg text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-primary">{signupCount}</p>
              <p className="text-xs sm:text-sm text-primary/80 font-bold mt-1">TOTAL SIGNUPS</p>
            </div>
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 bg-secondary/20 border-2 border-secondary rounded-lg text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary">18</p>
              <p className="text-xs sm:text-sm text-secondary/80 font-bold mt-1">MONTHS RUNWAY</p>
            </div>
          </div>

          {/* CTA Form */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="h-11 sm:h-12 text-sm sm:text-base bg-muted/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground font-medium focus:border-primary"
                  required
                />
                <Input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                  className="h-11 sm:h-12 text-sm sm:text-base bg-muted/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground font-medium focus:border-primary"
                  required
                />
              </div>
              
              <Input
                type="text"
                placeholder="State/Region/Province (optional)"
                value={formData.state}
                onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
                className="h-11 sm:h-12 text-sm sm:text-base bg-muted/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground font-medium focus:border-primary"
              />
              
              <textarea
                placeholder="Why you need BAGЯ in your life rn (this goes on the wall!)"
                value={formData.whyBagr}
                onChange={(e) => setFormData(prev => ({ ...prev, whyBagr: e.target.value }))}
                className="w-full h-20 sm:h-24 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-muted/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground font-medium focus:border-primary rounded-md resize-none"
                required
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="h-11 sm:h-12 text-sm sm:text-base bg-muted/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground font-medium focus:border-primary"
                  required
                />
                <Input
                  type="text"
                  placeholder="@yourighandle"
                  value={formData.igHandle}
                  onChange={(e) => setFormData(prev => ({ ...prev, igHandle: e.target.value.replace(/^@/, '') }))}
                  className="h-11 sm:h-12 text-sm sm:text-base bg-muted/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground font-medium focus:border-primary"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="w-full h-12 sm:h-14 px-8 sm:px-10 bg-gradient-to-r from-primary to-secondary hover:opacity-90 active:scale-95 text-background font-black text-base sm:text-lg md:text-xl animate-glow-pulse border-2 border-primary touch-manipulation"
              >
                {isSubmitting ? "⚡" : "LET'S GO 🔥"}
              </Button>
            </form>
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
