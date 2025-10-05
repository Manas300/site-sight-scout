import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MessageSquare } from "lucide-react";

interface Testimonial {
  id: string;
  first_name: string;
  city: string;
  state: string;
  why_bagr: string;
  user_type: string;
  created_at: string;
}

export const LiveTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

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

  if (testimonials.length === 0) return null;

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 border-2 border-primary rounded-full mb-3 sm:mb-4">
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
            <span className="font-black text-primary text-xs sm:text-sm md:text-base">LIVE FROM THE COMMUNITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 px-2">
            Why Producers Want <span className="font-montserrat" style={{ fontFeatureSettings: '"liga" 0', letterSpacing: '0.05em' }}>BAGЯ</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">Real people. Real reasons. Real time.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="p-4 sm:p-5 md:p-6 bg-card border-2 border-primary/20 rounded-lg hover:border-primary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 flex items-center justify-center text-background font-black text-base sm:text-lg">
                  {testimonial.user_type === 'Producer' && '🎧'}
                  {testimonial.user_type === 'Artist' && '🎤'}
                  {testimonial.user_type === 'Fan' && '🙌'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <p className="font-bold text-foreground truncate text-sm sm:text-base">{testimonial.first_name}</p>
                    <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 bg-primary/20 text-primary rounded-full font-bold whitespace-nowrap">
                      {testimonial.user_type}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">
                    {testimonial.city}, {testimonial.state}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-foreground/80 italic leading-relaxed">
                "{testimonial.why_bagr}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
