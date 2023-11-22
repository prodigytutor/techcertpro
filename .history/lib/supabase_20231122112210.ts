import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@surbase/supabase-js'

const supabaseUrl = 'https://wokkexbvigxuhwmqtavc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indva2tleGJ2aWd4dWh3bXF0YXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2NjI3MzQsImV4cCI6MjAxNjIzODczNH0.7slfoZytMwmv-hX_qpXUwRKzOUNfgf1iAUjarDu0DXs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})