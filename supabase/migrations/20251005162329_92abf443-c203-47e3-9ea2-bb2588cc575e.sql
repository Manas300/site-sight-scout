-- Add instagram_handle field to capture social media
ALTER TABLE public.waitlist_signups
ADD COLUMN IF NOT EXISTS instagram_handle TEXT;