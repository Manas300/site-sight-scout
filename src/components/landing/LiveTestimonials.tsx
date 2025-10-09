import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MessageSquare, Clock, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  first_name: string;
  city: string;
  state: string;
  why_bagr: string;
  user_type: string;
  created_at: string;
}

// Utility function to format timestamp
const formatTimeAgo = (timestamp: string): string => {
  const now = new Date();
  const created = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - created.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'just now';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}m ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h ago`;
  } else if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}d ago`;
  } else {
    return created.toLocaleDateString();
  }
};

// Utility function to format full date and time
const formatFullDateTime = (timestamp: string): string => {
  const created = new Date(timestamp);
  return created.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

export const LiveTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    // Fetch initial testimonials
    const fetchTestimonials = async () => {
      const { data } = await supabase
        .from('waitlist_signups')
        .select('id, first_name, city, state, why_bagr, user_type, created_at')
        .not('why_bagr', 'is', null)
        .order('created_at', { ascending: false })
        .limit(20);
      
      if (data) {
        setTestimonials(data);
      }
    };

    fetchTestimonials();

    // Subscribe to realtime updates
    const channel = supabase
      .channel('testimonials')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'waitlist_signups'
        },
        (payload) => {
          const newTestimonial = payload.new as Testimonial;
          if (newTestimonial.why_bagr) {
            setTestimonials(prev => [newTestimonial, ...prev].slice(0, 20));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) {
    return (
      <section className="pt-0 pb-8 sm:pt-1 sm:pb-10 md:pt-2 md:pb-12 lg:pt-3 lg:pb-16 px-2 sm:px-3 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 border-2 border-primary rounded-full mb-4 sm:mb-6 animate-pulse">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
              <span className="font-black text-primary text-xs sm:text-sm md:text-base animate-pulse">LIVE FROM THE COMMUNITY</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-10 sm:mb-12 px-2">
              Why Hip Hop Creators Need <span className="font-montserrat" style={{ fontFeatureSettings: '"liga" 0', letterSpacing: '0.05em' }}>BAGЯ</span>
            </h2>
          </div>
          <div className="text-center text-muted-foreground">
            <p>Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-0 pb-8 sm:pt-1 sm:pb-10 md:pt-2 md:pb-12 lg:pt-3 lg:pb-16 px-2 sm:px-3 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 border-2 border-primary rounded-full mb-4 sm:mb-6 animate-pulse">
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
            <span className="font-black text-primary text-xs sm:text-sm md:text-base animate-pulse">LIVE FROM THE COMMUNITY</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-10 sm:mb-12 px-2">
            Why Hip Hop Creators Need <span className="font-montserrat" style={{ fontFeatureSettings: '"liga" 0', letterSpacing: '0.05em' }}>BAGЯ</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="relative bg-card border-2 border-primary/30 p-4 pb-10 rounded-lg shadow-2xl hover:border-primary/60 transition-all duration-300 animate-fade-in mx-auto max-w-xs">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-lg mb-3">
                      <div className="text-center mb-3">
                        <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg mb-2">
                          {testimonial.user_type === 'Producer' && '🎧'}
                          {testimonial.user_type === 'Artist' && '🎤'}
                          {testimonial.user_type === 'Fan' && '🙌'}
                        </div>
                        <h3 className="text-lg font-black text-foreground mb-1">{testimonial.first_name}</h3>
                        <p className="text-xs font-bold text-primary mb-1">{testimonial.user_type}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.city}, {testimonial.state}</p>
                      </div>
                      <p className="text-xs text-foreground/80 italic text-center leading-relaxed">
                        "{testimonial.why_bagr}"
                      </p>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>{formatTimeAgo(testimonial.created_at)}</span>
                        </div>
                        <div className="text-[10px] opacity-75">
                          {formatFullDateTime(testimonial.created_at)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card/90 hover:bg-card border border-primary/30 hover:border-primary/60 rounded-full p-3 transition-all duration-200 z-10 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card/90 hover:bg-card border border-primary/30 hover:border-primary/60 rounded-full p-3 transition-all duration-200 z-10 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
