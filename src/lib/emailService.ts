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
  igHandle?: string
): Promise<EmailResponse> => {
  console.log('🚀 Starting newsletter subscription for:', email);
  console.log('🔧 Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
  console.log('🔧 Supabase Key (first 20 chars):', import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.substring(0, 20));
  
  try {
    // Step 1: Save to Supabase (REQUIRED)
    console.log('📊 Attempting to save to Supabase...');
    const { data, error: dbError } = await supabase
      .from('waitlist_signups')
      .insert([{ 
        email: email,
        instagram_handle: igHandle
      }])
      .select(); // This will return the inserted data

    // If database error, fail immediately
    if (dbError) {
      console.error('❌ Supabase Error Details:', {
        code: dbError.code,
        message: dbError.message,
        details: dbError.details,
        hint: dbError.hint,
        fullError: dbError
      });
      
      if (dbError.code === '23505') { // Unique constraint violation
        return {
          success: false,
          error: 'Email already subscribed',
        };
      }
      
      // Check for RLS (Row Level Security) errors
      if (dbError.message?.includes('RLS') || dbError.message?.includes('policy')) {
        return {
          success: false,
          error: 'Database security policy error. Please check RLS settings.',
        };
      }
      
      // For any other DB errors, fail the entire operation
      return {
        success: false,
        error: `Database error: ${dbError.message}`,
      };
    }

    console.log('✅ Supabase save successful:', data);

    // Step 2: Send email via Railway service (REQUIRED)
    console.log('📧 Attempting to send email via Railway...');
    const response = await fetch(EMAIL_SERVICE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: email,
      }),
    });

    console.log('📧 Email service response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('❌ Email service error:', errorData);
      return {
        success: false,
        error: `Email service failed: ${errorData.message || response.statusText}`,
      };
    }

    const emailData = await response.json();
    console.log('✅ Email service success:', emailData);
    
    // Both operations succeeded
    return {
      success: true,
      message: emailData.message || 'Successfully subscribed to newsletter!',
    };
    
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to subscribe to newsletter',
    };
  }
};
