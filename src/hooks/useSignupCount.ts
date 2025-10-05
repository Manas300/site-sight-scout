import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSignupCount = () => {
  const [signupCount, setSignupCount] = useState(847); // Default fallback
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    // Fetch initial count
    const fetchCount = async () => {
      try {
        const { count, error } = await supabase
          .from('waitlist_signups')
          .select('*', { count: 'exact', head: true });

        if (error) {
          console.warn('Error fetching signup count:', error);
        } else if (count !== null && isMounted) {
          setSignupCount(count);
        }
      } catch (error) {
        console.warn('Error fetching signup count:', error);
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

  return { signupCount, loading };
};
