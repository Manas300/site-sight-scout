import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Flame, Share2, Twitter, Facebook, MessageCircle } from "lucide-react";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Enter a valid email" }).max(255)
});

export const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [signupCount, setSignupCount] = useState(847);
  const { toast } = useToast();

  useEffect(() => {
    // Fetch real signup count
    const fetchCount = async () => {
      const { count } = await supabase
        .from('waitlist_signups')
        .select('*', { count: 'exact', head: true });
      if (count !== null) {
        setSignupCount(count);
      }
    };
    fetchCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const validation = emailSchema.safeParse({ email });
    if (!validation.success) {
      toast({
        title: "Invalid email",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('waitlist_signups')
        .insert([{ email: validation.data.email }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already signed up! 🎉",
            description: "You're already on the list, founder.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "WELCOME TO THE MOVEMENT 🚀",
          description: "You're officially a BAGЯ founder.",
        });
        setSignupCount(prev => prev + 1);
        setShowShareModal(true);
      }
      setEmail("");
    } catch (error) {
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
    
    // Track that they shared
    supabase
      .from('waitlist_signups')
      .update({ shared_on_social: true })
      .eq('email', email)
      .then(() => {});
  };

  const spotsLeft = Math.max(0, 1200 - signupCount);

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 animate-pulse" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="p-8 md:p-16 bg-gradient-to-br from-card/90 to-muted/90 backdrop-blur-xl rounded-3xl border-4 border-primary/50 shadow-2xl">
          <Flame className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-6 animate-pulse" />
          
          <h2 className="text-3xl md:text-6xl font-black mb-4 leading-tight">
            <span className="text-primary">Don't Get</span> Left Behind
          </h2>
          
          <p className="text-lg md:text-2xl mb-3 font-bold">
            While everyone else sleeps on YouTube beats for pennies...
          </p>
          
          <p className="text-xl md:text-3xl mb-8 text-secondary font-black">
            The first 1,200 will OWN the platform
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 md:h-14 bg-background border-2 border-primary/30 text-foreground placeholder:text-muted-foreground text-base md:text-lg font-medium focus:border-primary"
                required
              />
              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="h-12 md:h-14 px-8 md:px-10 bg-gradient-to-r from-primary via-secondary to-primary hover:opacity-90 text-background font-black text-base md:text-lg animate-glow-pulse border-2 border-primary whitespace-nowrap"
              >
                {isSubmitting ? "⚡" : "CLAIM MY SPOT →"}
              </Button>
            </div>
          </form>
          
          <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap text-xs md:text-sm font-medium">
            <div className="px-3 md:px-4 py-2 bg-primary/20 border border-primary rounded-lg">
              <span className="text-primary font-black">✓</span> 33% off forever
            </div>
            <div className="px-3 md:px-4 py-2 bg-secondary/20 border border-secondary rounded-lg">
              <span className="text-secondary font-black">✓</span> Beta access Q3 2025
            </div>
            <div className="px-3 md:px-4 py-2 bg-destructive/20 border border-destructive rounded-lg animate-pulse">
              <span className="text-destructive font-black">{spotsLeft}</span> spots left
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 md:p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border-2 border-primary/20">
          <p className="text-sm md:text-base text-foreground font-bold mb-4">
            💡 Your signup = proof to VCs that producers NEED this. We can't build BAGЯ alone—help us will this into existence.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground font-medium">
            Share this with your producer friends. The more LOIs we collect, the faster we close the $850K and start building.
          </p>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowShareModal(false)}>
          <div className="bg-card border-4 border-primary/50 rounded-3xl p-6 md:p-8 max-w-md w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl md:text-3xl font-black mb-4 text-center">
              🔥 You're In! Now <span className="text-primary">Spread The Word</span>
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
