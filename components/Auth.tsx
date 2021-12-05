import { supabase } from '@/lib/InitSupabase'
import { Auth } from '@supabase/ui'

export default function AuthComponent() {

    return(
        <Auth
            supabaseClient={supabase}
            providers={['github']}
            socialLayout="horizontal"
            socialButtonSize="xlarge"
        />
    )
}