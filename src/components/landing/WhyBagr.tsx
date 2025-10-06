import { Play, TrendingUp, Zap, Users, DollarSign, Target } from "lucide-react";

export const WhyBagr = () => {
  const features = [
    {
      icon: <Play className="w-7 h-7" />,
      title: "Drop heat from anywhere.",
      desc: (
        <>
          You, your phone + WAV files = <br/> all you need.
        </>
      ),
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Real-time bids = real respect",
      desc: "Let artists and other producers fight for your sound.",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Get paid while you sleep.",
      desc: "Your store never clocks out — even when you're catching Zzzzzs.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Turn streams into stans.",
      desc: "Fans can tip, react, and share your drops.",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: "No gatekeepers.",
      desc: "No caps — just you going up with consistent action.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Go viral, not invisible.",
      desc: (
        <>
          <span className="font-sans">BAGЯ</span>'s algo is built for creators, not memes.
        </>
      ),
      gradient: "from-secondary/20 to-secondary/5"
    }
  ];

  return (
    <section id="why-bagr" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight px-2">
            Why Old Platforms Are <span className="text-destructive line-through">Dead</span>
            <br/>
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              And BAGЯ Is The Future
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-medium px-4">
            BeatStars = Craigslist. Airbit = eBay from 2005. <strong>BAGЯ</strong> = TikTok Shop meets Whatnot energy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className={`group p-4 sm:p-6 md:p-8 bg-gradient-to-br ${feature.gradient} border-2 border-border hover:border-primary rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer flex flex-col justify-between min-h-[180px] sm:min-h-[200px]`}
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-3 sm:mb-4 text-background group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-black text-base sm:text-lg mb-1.5 sm:mb-2 text-foreground whitespace-nowrap">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground font-medium font-poppins leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-10 sm:mt-12 md:mt-16 max-w-6xl mx-auto">
          <div className="bg-card border-2 border-border rounded-2xl overflow-hidden overflow-x-auto">
            <div className="min-w-[550px]">
              <div className="grid grid-cols-3 gap-4 p-4 sm:p-6 bg-muted/30 border-b-2 border-border items-center">
                <div className="font-black text-sm sm:text-base md:text-lg text-destructive text-center">😭 Old Platforms</div>
                <div className="font-black text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground text-center">VS.</div>
                <div className="font-black text-sm sm:text-base md:text-lg text-primary text-center">🚀 BAGЯ</div>
              </div>
              {[
                { feature: "Live streaming", old: "Upload. Wait. Pray.", bagr: "Go live now, go viral faster." },
                { feature: "Live shopping", old: "Static stores, zero hype.", bagr: "Real-time drops. Creators buy as you perform." }, 
                { feature: "Live auctions", old: "DM offers like it's 2009.", bagr: "Watch bids climb by the second." },
                { feature: "Insight-driven analytics", old: "No data, just impressions.", bagr: "Behavior-first insights — see what's working NOW." },
                { feature: "Mobile-first", old: "Desktop dinosaurs only.", bagr: "Born for the phone." },
                { feature: "Instant payouts", old: "5-7 business days", bagr: "Instant bag. Cash hits before the encore." },
                { feature: "Platform fee", old: "30%+ 'tax' for nothing.", bagr: "15% flat or LESS." }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6 md:gap-8 p-4 sm:p-5 md:p-6 border-b border-border last:border-0 hover:bg-muted/20 transition-colors items-center">
                  <div className="text-center text-muted-foreground text-xs sm:text-sm md:text-base leading-tight">{row.old}</div>
                  <div className="text-center text-muted-foreground/30 font-bold text-xs sm:text-sm">VS</div>
                  <div className="text-center font-bold italic font-poppins text-xs sm:text-sm md:text-base leading-tight">{row.bagr}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emotional Closing */}
        <div className="mt-6 sm:mt-8 text-center max-w-3xl mx-auto px-4">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-destructive leading-tight">
            Why settle for dial-up when you could build with BAGЯ at fiber-optic speed?
          </p>
        </div>
      </div>
    </section>
  );
};
