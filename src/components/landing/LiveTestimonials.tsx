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

      </div>
    </section>
  );
};
