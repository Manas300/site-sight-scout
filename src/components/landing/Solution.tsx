import { Zap, TrendingUp, Sparkles } from "lucide-react";

export const Solution = () => {
  const solutions = [
    {
      icon: Zap,
      title: "GO LIVE. AUCTION YOUR BEATS.",
      problem: "You're making $3 CPMs on YouTube while label execs eat your royalties forever.",
      solution: "Go live. Artists bid. Highest bidder wins. Money hits your account INSTANTLY.",
      impact: "You set the price. You create the hype. Your beats become events."
    },
    {
      icon: TrendingUp,
      title: "BUILD YOUR AUDIENCE LIVE.",
      problem: "You're buried in algorithms. Nobody sees your work.",
      solution: "Stream yourself creating. Fans watch, tip, and share in real-time. You become visible.",
      impact: "No more shouting into the void. Your community grows with every stream."
    },
    {
      icon: Sparkles,
      title: "SELL PACKS & LOOPS DIRECTLY.",
      problem: "Discord servers milk your talent for free. You give away your best work.",
      solution: "Open your live store. Sell sound packs and loops directly. Set your prices. Keep 100%.",
      impact: "You own your work. You own your income. No exploitation."
    },
    {
      icon: Sparkles,
      title: "ONE PLATFORM. ZERO HASSLE.",
      problem: "You're juggling 10 platforms, chasing payments, marketing 24/7.",
      solution: "Everything lives here: auctions, stores, tips, instant payments. You just create.",
      impact: "Stop grinding yourself into the ground. Focus on making fire."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20 animate-fade-in">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-6">
            How BAGЯ Fixes<br />
            <span className="underline">Everything</span>
          </p>
        </div>

        {/* Solutions */}
        <div className="grid gap-8 sm:gap-12 md:gap-16 max-w-4xl mx-auto">
          {solutions.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="group relative animate-slide-up"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="relative p-6 sm:p-8 md:p-10 bg-gradient-to-br from-primary/10 to-secondary/10 border-4 border-primary hover:border-secondary rounded-2xl transition-all duration-300 hover:scale-[1.02]">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary rounded-xl">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-primary flex-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* The Problem (crossed out) */}
                  <div className="mb-6 p-4 bg-destructive/10 border-l-4 border-destructive rounded">
                    <p className="text-sm sm:text-base md:text-lg text-destructive line-through opacity-70">
                      OLD WAY: {item.problem}
                    </p>
                  </div>

                  {/* The Solution */}
                  <div className="mb-6 space-y-3">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-secondary uppercase tracking-wide">
                      NEW WAY:
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
                      {item.solution}
                    </p>
                  </div>

                  {/* The Impact */}
                  <div className="p-4 bg-primary/20 border-l-4 border-primary rounded">
                    <p className="text-base sm:text-lg md:text-xl text-primary font-bold leading-relaxed">
                      💡 {item.impact}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
