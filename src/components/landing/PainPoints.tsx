import { DollarSign, Clock, Heart } from "lucide-react";

export const PainPoints = () => {
  const pains = [
    {
      icon: DollarSign,
      emoji: "💸",
      title: "YOU'RE BROKE",
      pain: "You're uploading fire to YouTube and BeatStars for pennies. $3 CPM? $20 leases? While execs and labels eat off YOUR work.",
      emotion: "You know you're worth more. You feel it every time you see the plays go up but the bank account stays the same."
    },
    {
      icon: Clock,
      emoji: "⏰",
      title: "YOU'RE INVISIBLE",
      pain: "You're drowning in a sea of 10 million producers. Your beats? Lost in the algorithm. Dead beat stores. No views. No sales. No respect.",
      emotion: "You stay up all night cooking heat, but nobody's hearing it. The artists you wanna work with don't even know you exist."
    },
    {
      icon: Heart,
      emoji: "🎣",
      title: "YOU'RE GETTING EXPLOITED",
      pain: "The Discord servers you're on... are just 'loop farms' in which bigger producers promise placements to milk you for free. Why give away your best work and let them piggyback off your talent?",
      emotion: "You upload thinking it's your shot. But you're still invisible, still broke, just getting used."
    },
    {
      icon: Heart,
      emoji: "😤",
      title: "YOU'RE EXHAUSTED",
      pain: "You're grinding 24/7. Making beats. Marketing. Posting. DMing artists. Pricing. Negotiating. Chasing payments. For what? Crickets.",
      emotion: "You're tired of begging for your worth. Tired of the hustle not paying off. You just wanna make music and get paid what you deserve."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
            IF YOU'RE A YOUNG PRODUCER,
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-destructive mb-6">
            YOU'RE GETTING FUCKED.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            And you already know it. Here's why:
          </p>
        </div>

        <div className="grid gap-8 sm:gap-12 md:gap-16 max-w-4xl mx-auto">
          {pains.map((item, i) => (
            <div 
              key={i} 
              className="group relative animate-slide-up"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Pain Card */}
              <div className="relative p-6 sm:p-8 md:p-10 bg-card border-4 border-destructive/50 hover:border-destructive rounded-2xl transition-all duration-300 hover:scale-[1.02]">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl sm:text-6xl md:text-7xl">
                    {item.emoji}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-destructive mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* The Pain */}
                <div className="space-y-4">
                  <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
                    {item.pain}
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground italic leading-relaxed border-l-4 border-primary pl-4">
                    {item.emotion}
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
