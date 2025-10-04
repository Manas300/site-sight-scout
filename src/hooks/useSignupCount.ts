import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export const useSignupCount = () => {
  const [signupCount, setSignupCount] = useState(847); // Default fallback
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch initial count
    const fetchCount = async () => {
      try {
        const { count, error } = await supabase
          .from('newsletter_signups')
          .select('*', { count: 'exact', head: true });

        if (error) {
          console.warn('Error fetching signup count:', error);
        } else if (count !== null) {
          setSignupCount(count);
        }
      } catch (error) {
        console.warn('Error fetching signup count:', error);
      } finally {
        setLoading(false);
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
          table: 'newsletter_signups'
        },
        () => {
          // Refetch count when new signup is added
          fetchCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { signupCount, loading };
};
