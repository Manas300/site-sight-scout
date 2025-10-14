
export const Solution = () => {
  const solutions = [
    {
      emoji: "⚡",
      title: "GO LIVE. AUCTION YOUR BEATS.",
      solution: <><span className="font-bold">Go live. Artists bid. Highest bidder wins. Money hits your account INSTANTLY.</span></>,
      impact: "You set the price and run the show, while your exclusive beats generate competition + cash."
    },
    {
      emoji: "📈",
      title: "BUILD YOUR AUDIENCE IN REAL TIME.",
      solution: <><span className="font-bold">Fans watch, tip, and share your cook-ups in real-time. Be seen. Heard. Valued.</span></>,
      impact: "No more shouting into the void. Your family grows with every livestream."
    },
    {
      emoji: "💰",
      title: "SELL PACKS & LOOPS DIRECTLY.",
      solution: <><span className="font-bold">Own a live store. Sell sound packs, loops, and non-exclusive beats directly.</span></>,
      impact: "Drop your latest pack, loop, or non-exclusive beat live with a one-click Buy Now button."
    },
    {
      emoji: "🎯",
      title: "ONE PLATFORM THAT DOES IT ALL.",
      solution: <><span className="font-bold">BAGR gives you a beat business you can run from your back pocket — powered by live shopping. Because when it's live, demand explodes.</span></>,
      impact: "Stop juggling five apps just to make pennies on the dollar."
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
          {solutions.map((item, i) => (
            <div 
              key={i} 
              className="group relative animate-slide-up"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Solution Card */}
              <div className="relative p-6 sm:p-8 md:p-10 bg-card border-4 border-primary/50 hover:border-primary rounded-2xl transition-all duration-300 hover:scale-[1.02]">
                {/* Emoji & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl sm:text-6xl md:text-7xl">
                    {item.emoji}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* The Solution */}
                <div className="space-y-4">
                  <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
                    {item.solution}
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground italic leading-relaxed border-l-4 border-secondary pl-4">
                    {item.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
