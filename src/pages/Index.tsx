import { Button } from "@/components/ui/button";
import { Hero } from "@/components/landing/Hero";
import { WhyBagr } from "@/components/landing/WhyBagr";
import { ProductVision } from "@/components/landing/ProductVision";
import { BuildInPublic } from "@/components/landing/BuildInPublic";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-4xl font-black tracking-widest text-white font-montserrat">
            BAGЯ
          </h1>
          <div className="hidden md:flex gap-8 text-base font-bold font-montserrat absolute left-1/2 transform -translate-x-1/2">
            <a 
              href="#why-bagr" 
              className="hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('why-bagr')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Why BAGЯ
            </a>
            <a 
              href="#build-public" 
              className="hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('build-public')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              The Raise
            </a>
            <a 
              href="#join" 
              className="hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('join')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              Join
            </a>
          </div>
          {/* <Button 
            variant="outline" 
            size="sm" 
            className="hidden md:inline-flex border-2 border-primary text-primary hover:bg-primary hover:text-background font-bold"
          >
            Sign In
          </Button> */}
        </div>
      </nav>

      <Hero />
      
      <div id="why-bagr" className="animate-slide-up">
        <WhyBagr />
      </div>

      <div className="animate-slide-in-left">
        <ProductVision />
      </div>

      <div id="build-public" className="animate-slide-in-right">
        <BuildInPublic />
      </div>

      {/* Who It's For */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Who This Is <span className="text-primary">Actually</span> For
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              If you relate to any of these, you're in the right place
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "🎧 Producers",
                emoji: "😤",
                pain: "Tired of uploading to YouTube for $3 CPM",
                solution: ["Go live", "Watch bids climb", "Get paid instantly"]
              },
              {
                title: "🎤 Artists",
                emoji: <span className="text-red-500">🔥</span>,
                pain: "Done scrolling dead beat stores for hours",
                solution: ["Join live sessions", "Bid on heat", "Lock in exclusives"]
              },
              {
                title: "🙌 Fans",
                emoji: "👀",
                pain: "Want to support producers you fw",
                solution: ["Watch live", "Tip your favorites", "See hits get made"]
              }
            ].map((group, i) => (
              <div key={i} className="p-8 bg-card border-2 border-border rounded-2xl hover:border-primary transition-all hover:scale-105">
                <div className="text-5xl mb-4">{group.emoji}</div>
                <h3 className="text-2xl font-black mb-3">{group.title}</h3>
                <p className="text-sm text-destructive font-bold mb-4 italic">"{group.pain}"</p>
                <ul className="space-y-3">
                  {group.solution.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="join" className="animate-fade-in">
        <FinalCTA />
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 border-t-2 border-border bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BAGЯ
            </div>
            <div className="flex gap-6 text-sm font-medium text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 BAGЯ. Building in public.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
