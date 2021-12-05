import { supabase } from '@/lib/InitSupabase'
import { Auth } from '@supabase/ui'

export default function AuthComponent() {
    const { user } = Auth.useUser();

    return(
        <div className="bg-white p-4 rounded drop-shadow-md">
            <Auth
            supabaseClient={supabase}
            providers={['github']}
            socialLayout="horizontal"
            socialButtonSize="xlarge"
            />
        </div>
    )
}