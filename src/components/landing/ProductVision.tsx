import marketPlace from "@/assets/market_place.jpg";
import producerWin from "@/assets/producer-win.jpg";
import mockupLiveAuction from "@/assets/mockup-live-auction.jpg";
import mockupArtistWin from "@/assets/mockup-artist-win.jpg";
import mockupCosign from "@/assets/mockup-cosign.jpg";
import tipping from "@/assets/tipping.jpg";
import { Sparkles } from "lucide-react";

export const ProductVision = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
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
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {[
            {
              img: mockupLiveAuction,
              title: "Live Auctions",
               desc: "Watch prices climb while your whole crew hypes you up in real-time.",
            },
            {
              img: marketPlace,
              title: "Live Shopping",
              desc: (
                <>
                  Close your beat and sound pack sales FAST. <br/> Creators cop in seconds.
                </>
              ),
              
            },
            {
              img: producerWin,
              title: "Producers Win",
              desc: (
                <>
                  $120 in 90 seconds.<br/>
                  Hundreds watched. Reposts followed.
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
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {[
            {
              img: mockupArtistWin,
              title: "Artists Win",
              desc: "Snag exclusive rights to beats at auction before bro and win full creative control.",
              
            },
            {
              img: mockupCosign,
              title: "Co-Sign Culture",
              desc: "Stamp your approval on a producer's sound and leave your mark on the culture."
            },
            {
              img: tipping,
              title: "Fan Tipping",
              desc: (
                <>
                  Fans drop tips as you cook. <br/> Stream your heat and get paid mid-flow.
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
