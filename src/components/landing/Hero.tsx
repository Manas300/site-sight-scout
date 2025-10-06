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

const signupSchema = z.object({
  userType: z.enum(['Producer', 'Artist', 'Fan'], { message: "Select your role" }),
  firstName: z.string().trim().min(1, { message: "First name required" }).max(100),
  city: z.string().trim().min(1, { message: "City required" }).max(100),
  state: z.string().trim().max(100).optional().or(z.literal('')),
  whyBagr: z.string().trim().min(10, { message: "Tell us why (at least 10 characters)" }).max(500),
  email: z.string().trim().email({ message: "Enter a valid email" }).max(255),
  igHandle: z.string().trim().min(1, { message: "Instagram handle required" }).max(100)
});

export const Hero = () => {
  const [formData, setFormData] = useState({
    userType: "",
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
        validation.data.userType,
        validation.data.igHandle
      );
      
      if (result.success) {
        toast({
          title: "LET'S GOOO 🔥",
          description: "Check the wall below - you're live!",
        });
        setFormData({
          userType: "",
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
          {/* Hype Badge */}
          <div className="inline-block mb-6 sm:mb-8 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-black text-background animate-glow-pulse">
            <span className="flex items-center gap-2 sm:gap-2 md:gap-3 whitespace-nowrap">
              <Flame className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-pulse flex-shrink-0" />
              <span className="hidden sm:inline">RAISING $850K • LOCK IN FOUNDER PRICING NOW</span>
              <span className="sm:hidden">RAISING $850K • FOUNDER PRICING</span>
              <Flame className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-pulse flex-shrink-0" />
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 font-space-grotesk text-center" style={{ letterSpacing: '0.05em', wordSpacing: '-0.05em', lineHeight: '1.2' }}>
            <span className="block text-primary" style={{ letterSpacing: '0.05em' }}>
              GO LIVE.
            </span>
            <span className="block text-secondary" style={{ marginTop: 'clamp(8px, 3vw, 20px)', letterSpacing: '0.05em' }}>
              DROP A BEAT.
            </span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent" style={{ marginTop: 'clamp(8px, 3vw, 20px)', letterSpacing: '0.05em' }}>
              GET PAID. 
              <img 
                src={moneyBagImage} 
                alt="money bag" 
                className="inline-block w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 ml-1 sm:ml-2 -mt-1 sm:-mt-2 animate-pulse"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6)) drop-shadow(0 0 12px rgba(255,215,0,0.8))',
                }}
              />
            </span>
          </h1>
            
          <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-foreground/90 font-normal max-w-5xl mx-auto px-2 whitespace-nowrap overflow-x-auto">
            <span className="text-primary">Live Beat Auctions</span> × <span className="text-secondary">Live Producer Stores</span> × <span className="text-primary">Instant Payouts</span>
          </p>

          {/* Radical Transparency Box */}
          <div className="mb-8 sm:mb-10 md:mb-12 p-3 sm:p-4 md:p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-xl max-w-4xl mx-auto">
            <div className="flex items-start gap-2 sm:gap-3 text-left">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1 animate-pulse" />
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-2 text-primary font-montserrat">REAL TALK:</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 font-montserrat font-normal mb-3 leading-relaxed">
                  We've been bootstrapping <span className="font-montserrat font-bold" style={{ fontFeatureSettings: '"liga" 0' }}>BAGЯ</span> for 6 months, dropped twenty-thousand dollars ($20K) of our own money on Figma designs and early-stage coding, but now seek pre-seed investors to scale <span className="font-montserrat font-bold" style={{ fontFeatureSettings: '"liga" 0' }}>BAGЯ</span> to what it could be...the:
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 font-montserrat bg-gradient-to-r from-[#FFD700] via-[#FFF4B3] to-[#FFD700] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,215,0,0.4)] text-center">
                  Bloomberg Terminal of Hip Hop.
                </p>
                
                <div className="space-y-2 sm:space-y-3 p-3 sm:p-4 bg-primary/10 border-l-2 sm:border-l-4 border-primary rounded-r-lg">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-primary leading-relaxed font-montserrat">
                    Your sign-up = a Letter of Intent (LOI) to use <span className="font-montserrat font-bold" style={{ fontFeatureSettings: '"liga" 0' }}>BAGЯ</span> once we're funded and v1 is live.
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground/80 leading-relaxed font-montserrat">
                    We're raising $850K now to fund 18 months of building. Every LOI tells investors that hip hop producers, artists, and fans are ready for <span className="font-montserrat font-bold" style={{ fontFeatureSettings: '"liga" 0' }}>BAGЯ</span>.
                  </p>
                  <div className="space-y-1.5 sm:space-y-2 mt-3 sm:mt-4">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-destructive leading-relaxed font-montserrat">
                      First 1,200 Producer LOIs get:
                    </p>
                    <div className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg w-5 sm:w-6 flex-shrink-0">⚡</span>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-destructive leading-relaxed animate-pulse font-montserrat">
                        Beta access
                      </p>
                    </div>
                    <div className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg w-5 sm:w-6 flex-shrink-0">🔥</span>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-destructive leading-relaxed animate-pulse font-montserrat">
                        Exclusive early feature voting rights
                      </p>
                    </div>
                    <div className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg w-5 sm:w-6 flex-shrink-0">💎</span>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-destructive leading-relaxed animate-pulse font-montserrat">
                        33% off FOR LIFE on our premium-tier producer plan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Pricing Highlight */}
          <div className="mb-6 sm:mb-8 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary rounded-lg max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-ping"></div>
              <p className="text-xs sm:text-sm font-bold text-primary">LIMITED SPOTS</p>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
              First 1,200 Producer LOIs = <span className="text-secondary">Founder Pricing</span>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-secondary">
              33% OFF DIAMOND PLAN FOR LIFE 💎
            </p>
          </div>

          {/* FOMO Counter */}
          <div className="mb-12 flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            <div className="px-6 md:px-8 py-4 bg-destructive/20 border-2 border-destructive rounded-lg">
              <p className="text-2xl md:text-3xl font-black text-destructive">{spotsLeft}</p>
              <p className="text-xs text-destructive/80 font-bold">PRODUCER SPOTS LEFT</p>
            </div>
            <div className="px-6 md:px-8 py-4 bg-warning/20 border-2 border-warning rounded-lg">
              <p className="text-2xl md:text-3xl font-black text-warning">{producerCount}</p>
              <p className="text-xs text-warning/80 font-bold">PRODUCER LOIs</p>
            </div>
            <div className="px-6 md:px-8 py-4 bg-primary/20 border-2 border-primary rounded-lg">
              <p className="text-2xl md:text-3xl font-black text-primary">{signupCount}</p>
              <p className="text-xs text-primary/80 font-bold">TOTAL SIGNUPS</p>
            </div>
            <div className="px-6 md:px-8 py-4 bg-secondary/20 border-2 border-secondary rounded-lg">
              <p className="text-2xl md:text-3xl font-black text-secondary">18</p>
              <p className="text-xs text-secondary/80 font-bold">MONTHS RUNWAY</p>
            </div>
          </div>

          {/* CTA Form */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* User Type Selection */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {(['Producer', 'Artist', 'Fan'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, userType: type }))}
                    className={`h-12 sm:h-14 px-2 sm:px-4 rounded-lg font-black text-xs sm:text-sm md:text-base transition-all border-2 touch-manipulation ${
                      formData.userType === type
                        ? 'bg-gradient-to-r from-primary to-secondary text-background border-primary scale-105'
                        : 'bg-muted/50 text-foreground border-primary/30 hover:border-primary/50 active:scale-95'
                    }`}
                  >
                    <div className="text-xl sm:text-2xl mb-0.5">
                      {type === 'Producer' && '🎧'}
                      {type === 'Artist' && '🎤'}
                      {type === 'Fan' && '🙌'}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-sm">{type}</div>
                  </button>
                ))}
              </div>
              
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

          {/* LOI Goal Box */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-gradient-to-r from-warning/20 via-primary/20 to-secondary/20 border-2 sm:border-4 border-warning rounded-xl text-center animate-pulse">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-warning">
              🎯 NEXT LOI GOAL: 500
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
