import mockupArtistWin from "@/assets/mockup-artist-win.jpg";
import mockupCosign from "@/assets/mockup-cosign.jpg";
import mockupLiveAuction from "@/assets/mockup-live-auction.jpg";
import { Sparkles } from "lucide-react";

export const ProductVision = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-background px-6 py-2 rounded-full font-black mb-6 animate-pulse">
            <Sparkles className="w-5 h-5" />
            NOT BUILT YET. THIS IS THE VISION.
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
              See What Your $850K
              <br />
              Is Building 🔥
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-bold max-w-2xl mx-auto">
            These are the REAL Figma designs. Once we close the raise, this becomes reality in 6 months.
          </p>
        </div>

        {/* Mockup Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              img: mockupLiveAuction,
              title: "Live Bidding Wars 💰",
              desc: "Watch artists throw money at your beats in REAL-TIME. Highest bid wins."
            },
            {
              img: mockupArtistWin,
              title: "Instant Payouts 💸",
              desc: "$120 in 90 seconds. Exclusive rights. 389 people watched you WIN."
            },
            {
              img: mockupCosign,
              title: "Co-Sign Culture 🤝",
              desc: "Artists stamp their approval on your sound. Clout that lives forever."
            }
          ].map((mockup, i) => (
            <div 
              key={i}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30 bg-card hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50">
                <img 
                  src={mockup.img} 
                  alt={mockup.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-black text-primary mb-2 tracking-wider">{mockup.title}</h3>
                    <p className="text-sm font-medium text-foreground/90">{mockup.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reality Check */}
        <div className="bg-gradient-to-r from-destructive/20 via-destructive/10 to-destructive/20 border-2 border-destructive/50 rounded-2xl p-8 text-center">
          <p className="text-2xl font-black mb-3">
            ⚠️ REAL TALK: This Doesn't Exist Yet
          </p>
          <p className="text-lg font-medium text-muted-foreground max-w-3xl mx-auto">
            But it WILL exist if we hit our $850K goal. Your signup proves to VCs that producers want this. 
            <span className="text-primary font-black"> Be part of building the future, not just using it.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
