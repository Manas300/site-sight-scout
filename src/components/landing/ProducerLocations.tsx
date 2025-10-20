import { useState, useRef, useEffect } from "react";
import { Globe, MapPin, Users } from "lucide-react";
import GlobeComponent from "react-globe.gl";

// Dummy data for demonstration with city producer counts
const dummyCountries = [
  { name: "United States", count: 245, lat: 39.8283, lng: -98.5795, position: { x: 25, y: 45 }, flag: "🇺🇸", cities: [
    { name: "Los Angeles", count: 45 }, { name: "New York", count: 38 }, { name: "Atlanta", count: 32 }, 
    { name: "Miami", count: 28 }, { name: "Chicago", count: 25 }, { name: "Houston", count: 22 }
  ]},
  { name: "United Kingdom", count: 89, lat: 55.3781, lng: -3.4360, position: { x: 48, y: 30 }, flag: "🇬🇧", cities: [
    { name: "London", count: 35 }, { name: "Manchester", count: 18 }, { name: "Birmingham", count: 15 }, 
    { name: "Liverpool", count: 12 }, { name: "Bristol", count: 9 }
  ]},
  { name: "Canada", count: 67, lat: 56.1304, lng: -106.3468, position: { x: 20, y: 35 }, flag: "🇨🇦", cities: [
    { name: "Toronto", count: 22 }, { name: "Vancouver", count: 18 }, { name: "Montreal", count: 15 }, 
    { name: "Calgary", count: 8 }, { name: "Ottawa", count: 4 }
  ]},
  { name: "Germany", count: 54, lat: 51.1657, lng: 10.4515, position: { x: 50, y: 35 }, flag: "🇩🇪", cities: [
    { name: "Berlin", count: 20 }, { name: "Munich", count: 12 }, { name: "Hamburg", count: 10 }, 
    { name: "Cologne", count: 7 }, { name: "Frankfurt", count: 5 }
  ]},
  { name: "France", count: 43, lat: 46.2276, lng: 2.2137, position: { x: 48, y: 38 }, flag: "🇫🇷", cities: [
    { name: "Paris", count: 18 }, { name: "Lyon", count: 10 }, { name: "Marseille", count: 8 }, 
    { name: "Toulouse", count: 4 }, { name: "Nice", count: 3 }
  ]},
  { name: "Australia", count: 38, lat: -25.2744, lng: 133.7751, position: { x: 85, y: 70 }, flag: "🇦🇺", cities: [
    { name: "Sydney", count: 15 }, { name: "Melbourne", count: 12 }, { name: "Brisbane", count: 6 }, 
    { name: "Perth", count: 3 }, { name: "Adelaide", count: 2 }
  ]},
  { name: "Netherlands", count: 32, lat: 52.1326, lng: 5.2913, position: { x: 49, y: 33 }, flag: "🇳🇱", cities: [
    { name: "Amsterdam", count: 14 }, { name: "Rotterdam", count: 8 }, { name: "The Hague", count: 5 }, 
    { name: "Utrecht", count: 3 }, { name: "Eindhoven", count: 2 }
  ]},
  { name: "Japan", count: 28, lat: 36.2048, lng: 138.2529, position: { x: 80, y: 40 }, flag: "🇯🇵", cities: [
    { name: "Tokyo", count: 12 }, { name: "Osaka", count: 8 }, { name: "Kyoto", count: 4 }, 
    { name: "Yokohama", count: 2 }, { name: "Nagoya", count: 2 }
  ]},
  { name: "Brazil", count: 25, lat: -14.2350, lng: -51.9253, position: { x: 35, y: 65 }, flag: "🇧🇷", cities: [
    { name: "São Paulo", count: 10 }, { name: "Rio de Janeiro", count: 8 }, { name: "Brasília", count: 4 }, 
    { name: "Salvador", count: 2 }, { name: "Fortaleza", count: 1 }
  ]},
  { name: "Sweden", count: 22, lat: 60.1282, lng: 18.6435, position: { x: 52, y: 25 }, flag: "🇸🇪", cities: [
    { name: "Stockholm", count: 10 }, { name: "Gothenburg", count: 6 }, { name: "Malmö", count: 4 }, 
    { name: "Uppsala", count: 1 }, { name: "Västerås", count: 1 }
  ]},
];

export const ProducerLocations = () => {
  const [selectedCountry, setSelectedCountry] = useState<typeof dummyCountries[0] | null>(null);
  const [showGlobe, setShowGlobe] = useState(false);
  const [globeSize, setGlobeSize] = useState({ width: 400, height: 400 });
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (globeRef.current && selectedCountry) {
      // Initialize globe controls
      globeRef.current.controls().enableZoom = false;
      globeRef.current.controls().enableRotate = true;
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
    }
  }, [selectedCountry]);

  useEffect(() => {
    // Update globe size based on container
    const updateGlobeSize = () => {
      const container = document.querySelector('.globe-container');
      if (container) {
        const rect = container.getBoundingClientRect();
        setGlobeSize({ width: rect.width, height: rect.height });
      }
    };
    
    updateGlobeSize();
    window.addEventListener('resize', updateGlobeSize);
    return () => window.removeEventListener('resize', updateGlobeSize);
  }, [showGlobe]);

  const handleCountryClick = (country: typeof dummyCountries[0]) => {
    setSelectedCountry(country);
    setShowGlobe(true);
  };

  const closeGlobe = () => {
    setShowGlobe(false);
    setSelectedCountry(null);
  };

  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="text-primary">Producers</span>{" "}
              <span className="text-secondary">Around The Globe</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto">
              Our community spans across continents. Click on any country to see where our producers are making magic happen.
            </p>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {dummyCountries.map((country, index) => (
              <div
                key={country.name}
                onClick={() => handleCountryClick(country)}
                className="group cursor-pointer p-4 bg-card border-2 border-border/50 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <span className="text-2xl">{country.flag}</span>
                  </div>
                  <h3 className="font-bold text-sm md:text-base mb-1 group-hover:text-primary transition-colors duration-300 text-foreground">
                    {country.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    <Users className="w-3 h-3" />
                    <span className="text-xs md:text-sm font-medium">{country.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Summary */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
              <Globe className="w-5 h-5 text-primary" />
              <span className="font-bold text-lg">
                Build with <span className="text-primary">{dummyCountries.reduce((sum, country) => sum + country.count, 0)}</span>{" "}
                producers across <span className="text-secondary">{dummyCountries.length}</span> countries
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Globe Modal */}
      {showGlobe && selectedCountry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-3xl mx-auto">
            {/* Close button */}
            <button
              onClick={closeGlobe}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-destructive/90 hover:bg-destructive text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              ×
            </button>

            {/* Globe Container */}
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-4 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-black mb-1">
                  <span className="text-primary">{selectedCountry.name}</span>
                </h3>
                <p className="text-muted-foreground text-sm">
                  {selectedCountry.count} producers making beats in {selectedCountry.name}
                </p>
              </div>

              {/* Globe and Info Layout */}
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Globe Section */}
                <div className="flex-1">
                  <div className="globe-container relative w-full h-72 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl overflow-hidden border border-primary/20">
                    {/* Fallback if globe doesn't load */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Globe className="w-16 h-16 mx-auto mb-4 text-primary animate-spin" />
                        <p className="text-lg font-semibold">Loading Earth...</p>
                        <p className="text-sm text-gray-400 mt-2">Interactive 3D Globe</p>
                      </div>
                    </div>
                    
                    <GlobeComponent
                      ref={globeRef}
                      width={globeSize.width}
                      height={globeSize.height}
                      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                      pointsData={[selectedCountry]}
                      pointLat="lat"
                      pointLng="lng"
                      pointColor={() => '#ff0000'}
                      pointRadius={0.5}
                      pointResolution={8}
                      enablePointerInteraction={false}
                      animateIn={true}
                    />
                    
                    {/* Cities display */}
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm backdrop-blur-sm border border-white/20">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-400" />
                        <span className="font-semibold">Top Cities:</span>
                      </div>
                      <div className="text-xs mt-1">
                        {selectedCountry.cities.slice(0, 3).map(city => `${city.count} from ${city.name}`).join(", ")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Panel */}
                <div className="flex-1 max-w-sm">
                  <div className="relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl overflow-hidden border border-primary/20">
                    {/* Space background with stars */}
                    <div className="absolute inset-0">
                      {[...Array(30)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`,
                            opacity: Math.random() * 0.8 + 0.2
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-4 h-full flex flex-col justify-center">
                      <div className="space-y-4">
                        {/* Country Stats */}
                        <div className="text-center">
                          <div className="text-4xl mb-2">{selectedCountry.flag}</div>
                          <h4 className="text-xl font-bold text-primary mb-1">{selectedCountry.name}</h4>
                          <div className="flex items-center justify-center gap-2 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span className="text-lg font-semibold">{selectedCountry.count} producers</span>
                          </div>
                        </div>

                        {/* Additional Info */}
                        <div className="space-y-4">
                          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <h5 className="font-semibold text-sm text-primary mb-2">City Breakdown</h5>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              {selectedCountry.cities.map((city, index) => (
                                <div key={city.name}>
                                  <span>{city.count} from {city.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>

                        {/* Action Button */}
                        <button
                          onClick={closeGlobe}
                          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105"
                        >
                          Explore More Countries
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-muted-foreground text-sm">
                  Click anywhere outside to close this view
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
