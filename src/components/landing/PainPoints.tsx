import { DollarSign, Clock, Heart } from "lucide-react";

export const PainPoints = () => {
  const pains = [
    {
      icon: DollarSign,
      emoji: "💸",
      title: "YOU'RE BROKE.",
      pain: <><span className="font-bold">You're uploading fire to YouTube for $3 CPMs… or cashing a one-time $500 check from a label exec who'll eat off your royalties forever.</span></>,
      emotion: "Plays up. Bank account flat. You know what that means."
    },
    {
      icon: Clock,
      emoji: "⏰",
      title: "YOU'RE INVISIBLE.",
      pain: <><span className="font-bold">You're drowning in a sea of 10 million producers on IG. Your beats? Buried in the algorithm. Zero redirects to your beat store. No views. No sales.</span></>,
      emotion: "Up all night cooking heat. Zero people hearing it. The artists you want? They don't know you exist."
    },
    {
      icon: Heart,
      emoji: "🎣",
      title: "YOU'RE GETTING EXPLOITED.",
      pain: <><span className="font-bold">Those Discord servers are just loop farms — big-name producers dangle "placements" to milk your talent for free, draining your best ideas. Wake up.</span></>,
      emotion: "You upload thinking it's your shot. Still invisible. Still broke. Just getting used."
    },
    {
      icon: Heart,
      emoji: "😤",
      title: "YOU'RE EXHAUSTED.",
      pain: <><span className="font-bold">You're grinding 24/7. Making beats. Marketing. Posting. DMing artists. Pricing. Negotiating. Chasing payments. For what? Crickets.</span></>,
      emotion: "Tired of begging. Tired of the hustle going nowhere. You just wanna make music and get paid."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Angry red gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-destructive/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
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

        {/* Bento Grid for Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pains.map((item, i) => (
            <div 
              key={i} 
              className="group glass rounded-3xl p-8 sm:p-10 border-2 border-destructive/30 hover:border-destructive transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Emoji */}
              <div className="text-6xl sm:text-7xl mb-6 group-hover:scale-110 transition-transform">
                {item.emoji}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-destructive mb-4">
                {item.title}
              </h3>

              {/* The Pain */}
              <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed mb-4">
                {item.pain}
              </p>
              
              {/* Emotion */}
              <p className="text-base sm:text-lg text-muted-foreground italic leading-relaxed border-l-4 border-primary pl-4">
                {item.emotion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
