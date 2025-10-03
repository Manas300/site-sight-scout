-- Create waitlist table for LOI signups
CREATE TABLE public.waitlist_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  referral_source TEXT,
  shared_on_social BOOLEAN DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public signup)
CREATE POLICY "Anyone can sign up for waitlist"
ON public.waitlist_signups
FOR INSERT
WITH CHECK (true);

-- Create policy to allow public to count signups (for display)
CREATE POLICY "Anyone can view signup count"
ON public.waitlist_signups
FOR SELECT
USING (true);

-- Create index for faster email lookups
CREATE INDEX idx_waitlist_email ON public.waitlist_signups(email);

-- Create index for counting signups
CREATE INDEX idx_waitlist_created_at ON public.waitlist_signups(created_at DESC);