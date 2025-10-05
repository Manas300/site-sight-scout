import marketPlace from "@/assets/market_place.jpg";
import producerWin from "@/assets/producer-win.jpg";
import mockupLiveAuction from "@/assets/mockup-live-auction.jpg";
import mockupArtistWin from "@/assets/mockup-artist-win.jpg";
import mockupCosign from "@/assets/mockup-cosign.jpg";
import tipping from "@/assets/tipping.jpg";
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
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-background px-6 py-2 rounded-full font-black mb-6 animate-pulse">
            <Sparkles className="w-5 h-5" />
            NOT BUILT YET. THIS IS THE VISION.
          </div> */}
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
               What Your $850K <span className="whitespace-nowrap">Is Building</span>
              {/* Is Building <span className="text-red-500" style={{ fontSize: '60px' }}>🔥</span> */}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-bold max-w-2xl mx-auto">
            {/* These are the REAL Figma designs. Once we close the raise, this becomes reality in 6 months. */}
          </p>
        </div>

        {/* Top Row - Main Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              img: mockupLiveAuction,
              title: "Live Auctions 🔥",
               desc: (
                 <>
                   Real-time bids. Real hype.<br/>
                   Watch prices climb while the whole scene watches you.<br/><br/>
                   <span className="text-primary font-bold">💡 Triggers visibility + status FOMO — "everyone's watching me win."</span>
                 </>
               ),
            },
            {
              img: marketPlace,
              title: "Live Shopping  💰",
              desc: (
                <>
                  Drop beats. Close sales.<br/>
                  Fans cop in seconds — no middlemen, no waiting.<br/><br/>
                  <span className="text-primary font-bold">💡 Instant gratification, "creator-as-brand" vibe.</span>
                </>
              ),
              
            },
            {
              img: producerWin,
              title: "Producers Win 🥇",
              desc: (
                <>
                  $120 in 90 seconds.<br/>
                  Hundreds saw it happen. You don't post success — you stream it.<br/><br/>
                  <span className="text-primary font-bold">💡 Turns proof of success into social proof — "everyone saw me bag the win."</span>
                </>
              ),
              
            }
            
          ].map((mockup, i) => (
            <div 
              key={i}
              className="animate-fade-in"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <img 
                src={mockup.img} 
                alt={mockup.title}
                className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-black text-primary mb-2 tracking-wide">{mockup.title}</h3>
                <p className="text-sm font-medium text-foreground/90">{mockup.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - Additional Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              img: mockupArtistWin,
              title: "Artists Win 🏆",
              desc: (
                <>
                  Outbid 'em live.<br/>
                  Snag exclusive rights before someone else does. FOMO in real time.<br/><br/>
                  <span className="text-primary font-bold">💡 Scarcity + competition = instant urgency.</span>
                </>
              ),
              
            },
            {
              img: mockupCosign,
              title: "Co-Sign Culture 🧳",
              desc: (
                <>
                  Your co-sign = currency.<br/>
                  Stamp your approval, boost a sound, and leave your name on the culture forever.<br/><br/>
                  <span className="text-primary font-bold">💡 Turns participation into legacy — ego + community reward.</span>
                </>
              ),
            },
            {
              img: tipping,
              title: "Fan Tipping 🐝",
              desc: (
                <>
                  Fans drop tips as you cook.<br/>
                  Stream your grind, get paid mid-flow. Every emoji = income.<br/><br/>
                  <span className="text-primary font-bold">💡 Emotionally connects creator effort → instant reward.</span>
                </>
              ),
             
            }
          ].map((mockup, i) => (
            <div 
              key={i + 3}
              className="animate-fade-in"
              style={{ animationDelay: `${(i + 3) * 0.2}s` }}
            >
              <img 
                src={mockup.img} 
                alt={mockup.title}
                className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-black text-primary mb-2 tracking-wide">{mockup.title}</h3>
                <p className="text-sm font-medium text-foreground/90">{mockup.desc}</p>
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
