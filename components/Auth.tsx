import { supabase } from '@/lib/InitSupabase'
import { Auth } from '@supabase/ui'

export default function AuthComponent() {
    const { user } = Auth.useUser();

    return(
        <Auth
            supabaseClient={supabase}
            providers={['github']}
            socialLayout="horizontal"
            socialButtonSize="xlarge"
        />
    )
}