import { DollarSign, Clock, Heart } from "lucide-react";

export const PainPoints = () => {
  const pains = [
    {
      icon: DollarSign,
      emoji: "💸",
      title: "YOU'RE BROKE.",
      pain: <><span className="font-bold">You're uploading fire to YouTube for $3 CPMs or cashing a one-time $500 check from a label who'll eat off your royalties forever.</span></>,
      emotion: "Plays up. Bank account flat. You know what that means."
    },
    {
      icon: Clock,
      emoji: "⏰",
      title: "YOU'RE INVISIBLE.",
      pain: <><span className="font-bold">You're drowning in a sea of 10 million producers on IG. Your beats? Buried under the memes.</span></>,
      emotion: "Up all night cooking heat. Zero people hearing it. The artists you want? They don't know you exist."
    },
    {
      icon: Heart,
      emoji: "🎣",
      title: "YOU'RE GETTING EXPLOITED.",
      pain: <><span className="font-bold">Those Discord servers are just loop farms. Big-name producers dangle placements to milk your talent for free.</span></>,
      emotion: "You upload thinking it's your shot. Still invisible. Still broke. Just getting used."
    },
    {
      icon: Heart,
      emoji: "😤",
      title: "YOU'RE EXHAUSTED.",
      pain: <><span className="font-bold">You're grinding 24/7. Making beats. Marketing. Posting. DMing artists. Pricing. Negotiating.                         For what? Crickets.</span></>,
      emotion: "Tired of begging. Tired of the hustle going nowhere. You just wanna make music and get paid."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Angry red gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-destructive/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 animate-fade-in px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight">
            IF YOU'RE A YOUNG PRODUCER,
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-destructive mb-4 sm:mb-6 leading-tight">
            YOU'RE GETTING FUCKED.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            And you already know it. Here's why:
          </p>
        </div>

        {/* Bento Grid for Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {pains.map((item, i) => (
            <div 
              key={i} 
              className="group glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border-2 border-destructive/30 hover:border-destructive transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] animate-fade-in touch-manipulation"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Emoji */}
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                {item.emoji}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-destructive mb-3 sm:mb-4 leading-tight">
                {item.title}
              </h3>

              {/* The Pain */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed font-poppins font-light">
                {item.pain}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
