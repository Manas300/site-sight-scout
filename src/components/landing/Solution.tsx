
export const Solution = () => {
  const solutions = [
    {
      emoji: "⚡",
      title: "AUCTION YOUR BEATS.",
      solution: <><span className="font-bold">Go live. Artists bid. Highest bidder wins. Money hits your account INSTANTLY.</span></>,
      impact: "You set the price and run the show, while your exclusive beats generate competition + cash."
    },
    {
      emoji: "⚡",
      title: "GROW YOUR FANS IN REAL TIME.",
      solution: <><span className="font-bold">Fans watch, tip, and share your cook-ups in real-time. Get seen + heard + support.</span></>,
      impact: "No more comparing. Your family grows with every livestream."
    },
    {
      emoji: "⚡",
      title: "SELL PACKS & LOOPS DIRECTLY.",
      solution: <><span className="font-bold">Own a live store. Sell sound packs, loops, and non-exclusive beats directly.</span></>,
      impact: "Drop your latest pack, loop, or non-exclusive beat live with a one-click Buy Now button."
    },
    {
      emoji: "⚡",
      title: "ONE PLATFORM THAT DOES IT ALL.",
      solution: <><span className="font-bold">BAGR gives you a beat business you can run from your back pocket.</span></>,
      impact: <>Stop juggling five apps just to make pennies. Build with BAGR: where going live increases demand.</>
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-6">
            HOW BAGЯ FIXES<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">EVERYTHING</span>
          </p>
        </div>

        {/* Bento Grid Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:grid-rows-2">
          {solutions.map((item, i) => (
            <div 
              key={i} 
              className="group glass rounded-3xl p-8 sm:p-10 border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-[1.02] animate-fade-in flex flex-col"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Emoji */}
              <div className="text-6xl sm:text-7xl mb-6 group-hover:scale-110 transition-transform">
                {item.emoji}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-primary mb-4">
                {item.title}
              </h3>

              {/* The Solution */}
              <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed mb-4">
                {item.solution}
              </p>
              
              {/* Impact */}
              <p className="text-base sm:text-lg text-muted-foreground italic leading-relaxed border-l-4 border-secondary pl-4">
                {item.impact}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
