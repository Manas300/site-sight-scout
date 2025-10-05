import { supabase } from '@/integrations/supabase/client';

const EMAIL_SERVICE_URL = 'https://bagr-email-service-production.up.railway.app/api/v1/email/newsletter';

export interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export const subscribeToNewsletter = async (
  email: string, 
  source: string = 'website',
  firstName?: string,
  city?: string,
  state?: string,
  whyBagr?: string,
  userType?: string
): Promise<EmailResponse> => {
  try {
    // First, try to save to Supabase
    const { error: dbError } = await supabase
      .from('waitlist_signups')
      .insert([{ 
        email: email,
        referral_source: source,
        first_name: firstName,
        city,
        state,
        why_bagr: whyBagr,
        user_type: userType
      }]);

    // If database error (like duplicate email), handle it
    if (dbError) {
      if (dbError.code === '23505') { // Unique constraint violation
        return {
          success: false,
          error: 'Email already subscribed',
        };
      }
      // For other DB errors, log but continue with email service
      console.warn('Database error (continuing with email service):', dbError);
    }

    // Then send email via your service
    const response = await fetch(EMAIL_SERVICE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: email,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.message || `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || 'Successfully subscribed to newsletter!',
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to subscribe to newsletter',
    };
  }
};
