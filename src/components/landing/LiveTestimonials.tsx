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

  if (testimonials.length === 0) return null;

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 border-2 border-primary rounded-full mb-3 sm:mb-4 animate-pulse">
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
            <span className="font-black text-primary text-xs sm:text-sm md:text-base animate-pulse">LIVE FROM THE COMMUNITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 px-2">
            Why Producers Want <span className="font-montserrat" style={{ fontFeatureSettings: '"liga" 0', letterSpacing: '0.05em' }}>BAGЯ</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
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
                  <div className="relative bg-card border-2 border-primary/30 p-8 pb-16 rounded-lg shadow-2xl hover:border-primary/60 transition-all duration-300 animate-fade-in mx-auto max-w-md">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg mb-6">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl mb-4">
                          {testimonial.user_type === 'Producer' && '🎧'}
                          {testimonial.user_type === 'Artist' && '🎤'}
                          {testimonial.user_type === 'Fan' && '🙌'}
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-2">{testimonial.first_name}</h3>
                        <p className="text-base font-bold text-primary mb-2">{testimonial.user_type}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.city}, {testimonial.state}</p>
                      </div>
                      <p className="text-base text-foreground/80 italic text-center leading-relaxed">
                        "{testimonial.why_bagr}"
                      </p>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-center">
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
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`w-4 h-4 rounded-full transition-all duration-200 ${
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
