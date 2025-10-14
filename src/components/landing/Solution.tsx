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
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-6">
            How BAGЯ Fixes<br />
            <span className="underline">Everything</span>
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {solutions.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="group relative animate-fade-in hover-scale"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative p-6 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 rounded-xl transition-all duration-300">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-sm sm:text-base font-black text-primary uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* The Problem */}
                  <div className="mb-3 p-3 bg-destructive/5 border-l-2 border-destructive/30 rounded">
                    <p className="text-xs sm:text-sm text-destructive/70 line-through">
                      {item.problem}
                    </p>
                  </div>

                  {/* The Solution */}
                  <div className="mb-3">
                    <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>

                  {/* The Impact */}
                  <div className="p-3 bg-primary/5 border-l-2 border-primary/40 rounded">
                    <p className="text-xs sm:text-sm text-primary/90 font-semibold leading-relaxed">
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
