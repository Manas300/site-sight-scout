import { Play, TrendingUp, Zap, Users, DollarSign, Target } from "lucide-react";

export const WhyBagr = () => {
  const features = [
    {
      icon: <Play className="w-7 h-7" />,
      title: "go live anywhere.",
      desc: (
        <>
          Drop heat from anywhere. Studio? nah. <br/> you + your phone + WAV files = all you need.
        </>
      ),
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "artists bid in real-time",
      desc: "watch prices climb as they compete.",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "instant payouts",
      desc: "money hits your account ASAP.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "build your fanbase",
      desc: "fans tip, comment, share streams.",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: "no limits",
      desc: "more live. more hype. more bank.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "algorithm loves you",
      desc: "go viral with our discovery engine.",
      gradient: "from-secondary/20 to-secondary/5"
    }
  ];

  return (
    <section id="why-bagr" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Why Old Platforms Are <span className="text-destructive line-through">Dead</span>
            <br/>
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              And BAGЯ Is The Future
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            BeatStars = Craigslist. Airbit = eBay from 2005. <strong>BAGЯ</strong> = TikTok Shop meets Whatnot energy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className={`group p-6 md:p-8 bg-gradient-to-br ${feature.gradient} border-2 border-border hover:border-primary rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer flex flex-col justify-between min-h-[200px]`}
            >
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 text-background group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-black text-xl mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground font-medium whitespace-nowrap">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card border-2 border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-6 bg-muted/30 border-b-2 border-border">
              <div className="font-black text-sm text-muted-foreground">Feature</div>
              <div className="font-black text-sm text-destructive text-center">Old Platforms</div>
              <div className="font-black text-sm text-primary text-center">BAGЯ</div>
            </div>
            {[
              { feature: "Live streaming", old: "❌", bagr: "✅" },
              { feature: "Live shopping", old: "❌", bagr: "✅" }, 
              { feature: "Live auctions", old: "❌", bagr: "✅" },
              { feature: "Insight-driven analytics", old: "❌", bagr: "✅" },
             
              { feature: "Mobile-first", old: "❌", bagr: "✅" },
              { feature: "Instant payouts", old: "🐌 5-7 days", bagr: "⚡ Instant" },
              { feature: "Platform fee", old: "30%+", bagr: "15%" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-4 p-6 border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                <div className="font-medium">{row.feature}</div>
                <div className="text-center">{row.old}</div>
                <div className="text-center font-bold">{row.bagr}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
