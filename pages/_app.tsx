import { Auth } from '@supabase/ui'
import { supabase } from '@/lib/InitSupabase'
import '../styles/globals.css'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return <Auth.UserContextProvider supabaseClient={supabase}>
    <Component {...pageProps} />
  </Auth.UserContextProvider>
}

export default MyApp;