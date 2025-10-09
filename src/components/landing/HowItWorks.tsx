import { Play, Upload, Zap, DollarSign } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
            How <span className="text-primary">BAGЯ</span> Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium px-4 max-w-3xl mx-auto">
            From beat upload to instant payout in 3 simple steps
          </p>
        </div>

        {/* Video Demo */}
        <div className="mb-16 sm:mb-20">
          <div className="relative max-w-4xl mx-auto group">
            {/* Outer glow effect - only on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Main video container */}
            <div className="relative aspect-video bg-card border-[3px] border-primary rounded-2xl overflow-hidden shadow-2xl shadow-primary/50 transition-all duration-300 hover:shadow-primary/70 hover:scale-[1.005]">
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-primary rounded-tl-lg"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-secondary rounded-tr-lg"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-secondary rounded-bl-lg"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-primary rounded-br-lg"></div>
              
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10 opacity-30 pointer-events-none rounded-2xl"></div>
              
              {/* Play button overlay (appears on hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-primary/50">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
              </div>
              
              <iframe 
                className="w-full h-full rounded-2xl relative z-10"
                src="https://www.youtube.com/embed/K8a8aLrVgk4"
                title="BAGЯ Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* 3-Step Process */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
          {/* Step 1 */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Upload className="w-8 h-8 text-black" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm">
                1
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-black mb-3 text-primary">Upload Your Beat</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Drop your fire beats, set your starting price, and watch the magic happen
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-black mb-3 text-secondary">Go Live</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Stream your beat live, interact with bidders, and create the ultimate auction experience
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-black mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get Paid</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Instant payout to your account. No waiting, no fees, just pure profit
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
