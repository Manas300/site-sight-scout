import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Flame } from "lucide-react";

export const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Don't miss founder access.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "WELCOME TO THE MOVEMENT 🚀",
        description: "You're officially a BAGЯ founder. Check your email.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 animate-pulse" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="p-12 md:p-16 bg-gradient-to-br from-card/90 to-muted/90 backdrop-blur-xl rounded-3xl border-4 border-primary/50 shadow-2xl">
          <Flame className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
          
          <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            <span className="text-primary">Don't Get</span> Left Behind
          </h2>
          
          <p className="text-xl md:text-2xl mb-3 font-bold">
            While everyone else sleeps on YouTube beats for pennies...
          </p>
          
          <p className="text-2xl md:text-3xl mb-8 text-secondary font-black">
            The first 1,200 will own the platform
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 bg-background border-2 border-primary/30 text-foreground placeholder:text-muted-foreground text-lg font-medium focus:border-primary"
                required
              />
              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="h-14 px-10 bg-gradient-to-r from-primary via-secondary to-primary hover:opacity-90 text-background font-black text-lg animate-glow-pulse border-2 border-primary whitespace-nowrap"
              >
                {isSubmitting ? "⚡" : "CLAIM MY SPOT →"}
              </Button>
            </div>
          </form>
          
          <div className="flex items-center justify-center gap-4 flex-wrap text-sm font-medium">
            <div className="px-4 py-2 bg-primary/20 border border-primary rounded-lg">
              <span className="text-primary font-black">✓</span> 33% off forever
            </div>
            <div className="px-4 py-2 bg-secondary/20 border border-secondary rounded-lg">
              <span className="text-secondary font-black">✓</span> Beta access
            </div>
            <div className="px-4 py-2 bg-destructive/20 border border-destructive rounded-lg animate-pulse">
              <span className="text-destructive font-black">353</span> spots left
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-8 font-medium">
          Your signup helps us raise $850K to build this. You're not just joining a waitlist—you're helping create the future of beat selling.
        </p>
      </div>
    </section>
  );
};
