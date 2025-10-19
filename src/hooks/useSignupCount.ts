import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSignupCount = () => {
  const [signupCount, setSignupCount] = useState(0); // Total signups
  const [producerCount, setProducerCount] = useState(0); // Producer LOIs only
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    // Fetch initial counts
    const fetchCount = async () => {
      try {
        // Get total count
        const { count: total, error: totalError } = await supabase
          .from('waitlist_signups')
          .select('*', { count: 'exact', head: true });

        // Get producer count (since we're not collecting user_type, count all signups as producers)
        const { count: producers, error: producerError } = await supabase
          .from('waitlist_signups')
          .select('*', { count: 'exact', head: true });

        if (totalError) {
          console.warn('Error fetching total count:', totalError);
        } else if (total !== null && isMounted) {
          setSignupCount(total);
        }

        if (producerError) {
          console.warn('Error fetching producer count:', producerError);
        } else if (producers !== null && isMounted) {
          setProducerCount(producers);
        }
      } catch (error) {
        console.warn('Error fetching signup counts:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCount();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('newsletter-signups-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'waitlist_signups'
        },
        (payload) => {
          console.log('New signup detected:', payload);
          if (isMounted) {
            // Increment count immediately for better UX
            setSignupCount(prevCount => prevCount + 1);
            setProducerCount(prevCount => prevCount + 1); // Also increment producer count
            // Also refetch to ensure accuracy
            fetchCount();
          }
        }
      )
      .subscribe((status) => {
        console.log('Subscription status:', status);
      });

    return () => {
      isMounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return { signupCount, producerCount, loading };
};
