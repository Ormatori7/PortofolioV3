//le fichier qui sert de lien entre react et supabase

import { createClient } from '@supabase/supabase-js'

// On utilise import.meta.env pour lire les clés de ton fichier .env.local
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)