import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/lib/emailService";
import { useSignupCount } from "@/hooks/useSignupCount";
import { Flame, Share2, Twitter, Facebook, MessageCircle } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().trim().email({ message: "Enter a valid email" }).max(255),
  firstName: z.string().trim().max(100, { message: "First name must be less than 100 characters" }).optional(),
  city: z.string().trim().max(100).optional(),
  state: z.string().trim().max(100).optional(),
  whyBagr: z.string().trim().max(500, { message: "Message must be less than 500 characters" }).optional(),
  userType: z.string().optional(),
  instagramHandle: z.string().trim().max(50).optional()
});

export const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [whyBagr, setWhyBagr] = useState("");
  const [userType, setUserType] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const { signupCount } = useSignupCount();
  const { toast } = useToast();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = formSchema.safeParse({ 
      email, 
      firstName, 
      city, 
      state, 
      whyBagr, 
      userType,
      instagramHandle 
    });
    
    if (!validation.success) {
      toast({
        title: "Invalid input",
        description: validation.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await subscribeToNewsletter(
        validation.data.email, 
        'final_cta',
        validation.data.firstName,
        validation.data.city,
        validation.data.state,
        validation.data.whyBagr,
        validation.data.userType,
        validation.data.instagramHandle
      );
      
      if (result.success) {
        toast({
          title: "WELCOME TO THE MOVEMENT 🚀",
          description: "You're officially a BAGЯ founder.",
        });
        setShowShareModal(true);
        setEmail("");
        setFirstName("");
        setCity("");
        setState("");
        setWhyBagr("");
        setUserType("");
        setInstagramHandle("");
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

  const shareUrl = window.location.href;
  const shareText = "I just claimed founding member status for BAGЯ - the live beat marketplace changing the game for producers. 847+ already in. Join us 👇";

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(shareText);
    
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`
    };

    window.open(urls[platform], '_blank', 'width=600,height=400');
    
    // TODO: Track social sharing if needed
    // supabase
    //   .from('waitlist_signups')
    //   .update({ shared_on_social: true })
    //   .eq('email', email)
    //   .then(() => {});
  };

  const spotsLeft = Math.max(0, 1200 - signupCount);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 animate-pulse" />
      
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight tracking-wide px-2">
          <span className="text-destructive">Stop Undervaluing</span>
          <br />
          Your Music.
        </h2>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 font-bold px-2 leading-relaxed">
          {"It's only worth ad crumbs and stream change if you keep feeding the machine."}
        </p>
        
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 sm:mb-10 md:mb-12 text-secondary font-black px-2">
          Flip the system. Build with BAGЯ.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          {/* User Type Selection */}
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setUserType('producer')}
              className={`h-14 sm:h-16 px-4 rounded-xl border-2 font-bold text-sm sm:text-base transition-all touch-manipulation ${
                userType === 'producer'
                  ? 'bg-primary/20 border-primary text-primary scale-105'
                  : 'bg-background/50 border-primary/30 text-foreground hover:border-primary/50 active:scale-95'
              }`}
            >
              🎧 Producer
            </button>
            <button
              type="button"
              onClick={() => setUserType('artist')}
              className={`h-14 sm:h-16 px-4 rounded-xl border-2 font-bold text-sm sm:text-base transition-all touch-manipulation ${
                userType === 'artist'
                  ? 'bg-primary/20 border-primary text-primary scale-105'
                  : 'bg-background/50 border-primary/30 text-foreground hover:border-primary/50 active:scale-95'
              }`}
            >
              🎤 Artist
            </button>
            <button
              type="button"
              onClick={() => setUserType('fan')}
              className={`h-14 sm:h-16 px-4 rounded-xl border-2 font-bold text-sm sm:text-base transition-all touch-manipulation ${
                userType === 'fan'
                  ? 'bg-primary/20 border-primary text-primary scale-105'
                  : 'bg-background/50 border-primary/30 text-foreground hover:border-primary/50 active:scale-95'
              }`}
            >
              👏 Fan
            </button>
          </div>

          {/* Name and City Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="h-14 sm:h-16 bg-background/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground text-base sm:text-lg font-medium focus:border-primary rounded-xl"
            />
            <Input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="h-14 sm:h-16 bg-background/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground text-base sm:text-lg font-medium focus:border-primary rounded-xl"
            />
          </div>

          {/* State/Region */}
          <Input
            type="text"
            placeholder="State/Region/Province (optional)"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="h-14 sm:h-16 bg-background/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground text-base sm:text-lg font-medium focus:border-primary rounded-xl"
          />

          {/* Why BAGЯ */}
          <textarea
            placeholder="Why you need BAGЯ in your life rn (this goes on the wall!)"
            value={whyBagr}
            onChange={(e) => setWhyBagr(e.target.value)}
            className="w-full h-28 sm:h-32 bg-background/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground text-base sm:text-lg font-medium focus:border-primary rounded-xl px-4 py-3 resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          />

          {/* Email and Instagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 sm:h-16 bg-background/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground text-base sm:text-lg font-medium focus:border-primary rounded-xl"
              required
            />
            <Input
              type="text"
              placeholder="@yourighandle"
              value={instagramHandle}
              onChange={(e) => setInstagramHandle(e.target.value)}
              className="h-14 sm:h-16 bg-background/50 border-2 border-primary/30 text-foreground placeholder:text-muted-foreground text-base sm:text-lg font-medium focus:border-primary rounded-xl"
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full h-16 sm:h-18 bg-gradient-to-r from-primary via-secondary to-primary hover:opacity-90 active:scale-95 text-background font-black text-lg sm:text-xl animate-glow-pulse border-2 border-primary rounded-xl touch-manipulation"
          >
            {isSubmitting ? "⚡" : "SIGN YOUR LOI"}
          </Button>

          {/* Info Badges */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap text-xs sm:text-sm md:text-base font-medium pt-3">
            <div className="px-4 py-2.5 bg-primary/20 border border-primary rounded-lg">
              <span className="text-primary font-black">✓</span> 33% off forever
            </div>
            <div className="px-4 py-2.5 bg-secondary/20 border border-secondary rounded-lg">
              <span className="text-secondary font-black">✓</span> Beta access
            </div>
            <div className="px-4 py-2.5 bg-destructive/20 border border-destructive rounded-lg animate-pulse">
              <span className="text-destructive font-black">✓</span> 1200 spots left
            </div>
          </div>
        </form>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowShareModal(false)}>
          <div className="bg-card border-4 border-primary/50 rounded-3xl p-6 md:p-8 max-w-md w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl md:text-3xl font-black mb-4 text-center">
              <span className="text-red-500">🔥</span> You're In! Now <span className="text-primary">Spread The Word</span>
            </h3>
            <p className="text-sm md:text-base mb-6 text-center text-muted-foreground font-medium">
              Help us hit 1,200 LOIs faster = VCs give us $850K faster = We build this beast in 2025
            </p>
            
            <div className="space-y-3">
              <Button 
                onClick={() => handleShare('twitter')}
                className="w-full h-12 md:h-14 bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white font-bold flex items-center justify-center gap-3"
              >
                <Twitter className="w-5 h-5" />
                Share on Twitter
              </Button>
              <Button 
                onClick={() => handleShare('facebook')}
                className="w-full h-12 md:h-14 bg-[#4267B2] hover:bg-[#4267B2]/90 text-white font-bold flex items-center justify-center gap-3"
              >
                <Facebook className="w-5 h-5" />
                Share on Facebook
              </Button>
              <Button 
                onClick={() => handleShare('whatsapp')}
                className="w-full h-12 md:h-14 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Share on WhatsApp
              </Button>
            </div>

            <Button 
              variant="ghost"
              onClick={() => setShowShareModal(false)}
              className="w-full mt-4 font-medium"
            >
              I'll share later
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};
