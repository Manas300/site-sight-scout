import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MessageSquare } from "lucide-react";

interface Testimonial {
  id: string;
  first_name: string;
  city: string;
  state: string;
  why_bagr: string;
  created_at: string;
}

export const LiveTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Fetch initial testimonials
    const fetchTestimonials = async () => {
      const { data } = await supabase
        .from('waitlist_signups')
        .select('id, first_name, city, state, why_bagr, created_at')
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
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border-2 border-primary rounded-full mb-4">
            <MessageSquare className="w-5 h-5 text-primary animate-pulse" />
            <span className="font-black text-primary">LIVE FROM THE COMMUNITY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Why Producers Want <span className="font-montserrat" style={{ fontFeatureSettings: '"liga" 0', letterSpacing: '0.05em' }}>BAGЯ</span>
          </h2>
          <p className="text-lg text-muted-foreground">Real people. Real reasons. Real time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="p-6 bg-card border-2 border-primary/20 rounded-lg hover:border-primary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 flex items-center justify-center text-background font-black">
                  {testimonial.first_name?.[0]?.toUpperCase() || '?'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground truncate">{testimonial.first_name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.city}, {testimonial.state}
                  </p>
                </div>
              </div>
              <p className="text-sm text-foreground/80 italic leading-relaxed">
                "{testimonial.why_bagr}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
