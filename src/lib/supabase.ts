import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fwedhpoelylyrbqhppkq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3ZWRocG9lbHlseXJicWhwcGtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MTMzMTQsImV4cCI6MjA3NTE4OTMxNH0.MNSW9L4yNx7xdzAdsjNzf8hOiCIGyLm4ph9178AsIIw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface NewsletterSignup {
  id: number
  email: string
  created_at: string
  source: string
  shared_on_social: boolean
}
