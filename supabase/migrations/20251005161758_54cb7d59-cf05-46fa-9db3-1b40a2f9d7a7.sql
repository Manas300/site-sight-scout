-- Add user_type field to track Producer, Artist, or Fan
ALTER TABLE public.waitlist_signups
ADD COLUMN IF NOT EXISTS user_type TEXT CHECK (user_type IN ('Producer', 'Artist', 'Fan'));