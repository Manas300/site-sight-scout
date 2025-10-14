import { Zap, TrendingUp, Sparkles } from "lucide-react";

export const Solution = () => {
  const solutions = [
    {
      icon: Zap,
      title: "GO LIVE. AUCTION YOUR BEATS.",
      problem: "No more dead stores. No more hoping someone finds you.",
      solution: "YOU go live. Artists WATCH. They BID in real-time. Highest bidder WINS. You get paid INSTANTLY.",
      impact: "You control the price. You create FOMO. You turn your beats into EVENTS."
    },
    {
      icon: TrendingUp,
      title: "BUILD YOUR FANBASE. GET TIPPED.",
      problem: "No more invisible grind. No more shouting into the void.",
      solution: "Fans watch you cook. They tip you mid-stream. They gas you up. They share your sessions.",
      impact: "You build real fans who actually support you. Your audience = your income."
    },
    {
      icon: Sparkles,
      title: "GET PAID INSTANTLY. NO WAITING.",
      problem: "No more chasing payments. No more waiting weeks for a $20 lease.",
      solution: "Sale goes through? Money hits your account INSTANTLY. No middleman. No bullshit.",
      impact: "You get paid your worth, RIGHT NOW. Every single time."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20 animate-fade-in">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            BAGЯ CHANGES SHIT
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
