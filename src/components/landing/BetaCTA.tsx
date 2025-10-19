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
  const slotsLeft = Math.max(0, totalSlots - producerCount);

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
        validation.data.igHandle
      );
      
      if (result.success) {
        toast({
          title: "LET'S GOOO 🔥",
          description: "You're in! Check your email.",
          variant: "success",
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
    <section id="signup-form" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 relative overflow-hidden">
      {/* Animated background blobs - Optimized for mobile */}
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[64px] sm:blur-[96px] md:blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-[64px] sm:blur-[96px] md:blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Bento Grid Layout - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {/* Main CTA Card - Takes full width on mobile, left column on desktop */}
          <div className="lg:row-span-2 glass rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 border-2 border-primary/30 hover:border-primary/50 transition-all group">
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
              <Rocket 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-primary drop-shadow-[0_0_30px_rgba(168,85,247,0.6)] animate-[bounce_2s_ease-in-out_infinite]" 
                strokeWidth={2.5} 
                fill="currentColor"
              />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4 md:mb-6 text-center leading-tight px-2">
              LAST <span className="text-destructive">{slotsLeft}</span> SPOTS
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 text-center leading-relaxed px-2">
              Join 1K+ producers building<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>the future beat economy
            </p>

            {/* Enhanced Form - Mobile Optimized */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="group relative">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg glass border-2 border-primary/30 text-foreground placeholder:text-muted-foreground font-medium focus:border-primary hover:border-primary/50 touch-manipulation rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20"
                  required
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              <div className="group relative">
                <Input
                  type="text"
                  placeholder="@yourighandle"
                  value={formData.igHandle}
                  onChange={(e) => setFormData(prev => ({ ...prev, igHandle: e.target.value.replace(/^@/, '') }))}
                  className="h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg glass border-2 border-primary/30 text-foreground placeholder:text-muted-foreground font-medium focus:border-primary hover:border-primary/50 touch-manipulation rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20"
                  required
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="group relative w-full h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg lg:text-xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-[length:100%_100%] text-background rounded-2xl shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 active:scale-95 touch-manipulation overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⚡</span>
                      LOCKING IN...
                    </>
                  ) : (
                    <>
                      <span className="group-hover:animate-bounce">🔥</span>
                      CLAIM YOUR SPOT
                      <span className="group-hover:animate-bounce" style={{ animationDelay: '0.1s' }}>🔥</span>
                    </>
                  )}
                </span>
                {!isSubmitting && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                )}
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
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 leading-tight">Shape v1 of <span className="bagr-text">BAGЯ</span></h3>
              <p className="text-sm sm:text-base text-muted-foreground font-normal leading-snug">Your feedback builds the platform</p>
            </div>

            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-secondary/20 hover:scale-[1.02] lg:hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all min-h-[100px] sm:min-h-[120px] lg:h-[140px] flex flex-col active:scale-95 touch-manipulation">
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">📞</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 leading-tight">Direct Link to Founders</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-normal leading-snug">No gatekeeping</p>
            </div>

            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-primary/20 hover:scale-[1.02] lg:hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all min-h-[100px] sm:min-h-[120px] lg:h-[140px] flex flex-col active:scale-95 touch-manipulation">
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">🎁</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 leading-tight">Feature Upgrades for Life</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-normal leading-snug">Never pay for new features</p>
            </div>

            <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-destructive/20 hover:scale-[1.02] lg:hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all min-h-[100px] sm:min-h-[120px] lg:h-[140px] flex flex-col active:scale-95 touch-manipulation">
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">👑</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-0.5 sm:mb-1 leading-tight">Irrevocable VIP Status</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-normal leading-snug">Elite status that never expires</p>
            </div>
          </div>
        </div>


        {/* Urgency Footer */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-destructive mb-2 animate-pulse leading-tight">
            ⚠️ ONLY {slotsLeft} SPOTS LEFT
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            miss this = back of the line
          </p>
        </div>
      </div>
    </section>
  );
};
