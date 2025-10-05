-- Add new fields to capture more user information for social proof
ALTER TABLE public.waitlist_signups
ADD COLUMN IF NOT EXISTS first_name TEXT,
ADD COLUMN IF NOT EXISTS city TEXT,
ADD COLUMN IF NOT EXISTS state TEXT,
ADD COLUMN IF NOT EXISTS why_bagr TEXT;