import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Check, Zap, TrendingUp, Users, Play, DollarSign } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "You're on the list! 🎉",
        description: "Check your email for beta access details.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SEO Meta Tags would go in index.html */}
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-black tracking-tighter text-primary">BAGЯ</h1>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#why-bagr" className="hover:text-primary transition-colors">Why BAGЯ</a>
            <a href="#why-now" className="hover:text-primary transition-colors">Why Now</a>
            <a href="#who-its-for" className="hover:text-primary transition-colors">Who It's For</a>
          </div>
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-sm font-medium text-secondary">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Live Beta • First 1,200 Producers Only
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              <span className="text-primary">bid</span> live × <span className="text-primary">shop</span> live × <span className="text-primary">bank</span> live
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto">
              where hip hop producers go live, drop a beat, n get the bag💰
            </p>

            {/* Social Proof */}
            <div className="mb-12 flex items-center justify-center gap-4 flex-wrap">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-primary">847</span> producers already making bank
              </p>
            </div>

            {/* CTA Form */}
            <div className="max-w-md mx-auto mb-8">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold animate-glow-pulse"
                >
                  {isSubmitting ? "Joining..." : "Get Beta Access"}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3">
                🔒 No spam. 33% off for early access. <span className="font-bold text-primary">353 spots left</span>
              </p>
            </div>

            {/* Testimonial */}
            <div className="max-w-2xl mx-auto p-6 bg-card border border-border rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm mb-2">"Made $2k my first week. This platform is different fr fr 🔥"</p>
                  <p className="text-xs text-muted-foreground">— Producer Mike, 127k streams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why BAGЯ Section */}
      <section id="why-bagr" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black mb-4">
              Why BAGЯ → <span className="text-primary">The Future Beatconomy</span>
            </h3>
            <p className="text-xl text-muted-foreground">old beat marketplaces? static. saturated. BAGЯ = diffrnt</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Play className="w-6 h-6" />,
                title: "mobile-native",
                desc: "your beat business now fits in your pocket"
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "live bidding wars",
                desc: "artists fight, prices climb, hype you up"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "fun AF",
                desc: "like roblox with a cash app ending"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "live fans",
                desc: "emojis flood, tips drop, your stream blows up"
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section id="why-now" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black mb-4">
              Why Now → <span className="text-primary">Producers Doin Sh** A** Backwards</span>
            </h3>
            <p className="text-xl text-muted-foreground">free beats? adSense? nonsense.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { emoji: "❌", text: '"free" kills premium psychology' },
              { emoji: "📉", text: "ad revenue = pennies, volatile, dying" },
              { emoji: "✅", text: "creators mint millions selling live on TikTok & Whatnot" },
              { emoji: "🎯", text: "direct-to-fan is music's next default setting" }
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
                <span className="text-3xl">{point.emoji}</span>
                <p className="text-lg pt-1">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section id="who-its-for" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black mb-4">
              What's In It For Me → <span className="text-primary">Producers, Artists, & Fans</span>
            </h3>
            <p className="text-xl text-muted-foreground">live shopping = future of brands and retail</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "🎧 producers",
                benefits: ["blow up quicker", "bag money faster", "scale without limits"]
              },
              {
                title: "🎤 artists",
                benefits: ["tap in real-time", "no usage caps", "full creative ctrl"]
              },
              {
                title: "🙌 fans",
                benefits: ["watch live", "react & engage", "tip your favorites"]
              }
            ].map((group, i) => (
              <div key={i} className="p-8 bg-card border border-border rounded-lg">
                <h4 className="text-2xl font-bold mb-6">{group.title}</h4>
                <ul className="space-y-3">
                  {group.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="p-12 bg-gradient-hero rounded-2xl border border-secondary/30">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              ready to get the bag? 💰
            </h3>
            <p className="text-lg mb-8 text-secondary-foreground/80">
              join 847 producers who stopped leaving money on the table
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 bg-background/10 border-secondary/30 text-foreground placeholder:text-secondary-foreground/60"
                  required
                />
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                >
                  {isSubmitting ? "..." : "Claim 33% Off"}
                </Button>
              </div>
              <p className="text-xs text-secondary-foreground/70">
                First 1,200 only • <span className="font-bold text-primary">353 spots remaining</span>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-black text-primary">BAGЯ</div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 BAGЯ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
