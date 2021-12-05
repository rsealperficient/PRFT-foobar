import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '../lib/InitSupabase';
import { Auth } from '@supabase/ui';
import { LogoutIcon, UserIcon } from '@heroicons/react/solid';

interface INavigationProps {
    title: string
  }

const Navigation: React.FC<INavigationProps> = (props) => {

    const { user } = Auth.useUser();
    const router = useRouter();
    
    return (
    <nav className="flex gap-1 bg-gradient-to-r from-blue-700 via-purple-600 to-purple-900 dark:from-black dark:via-purple-900 dark:to-black font-bold px-4 py-4 text-white">

        {
            user?.app_metadata.provider === "github" 
                && <a href="/">
                        <img src={user?.user_metadata.avatar_url} 
                            title={user?.user_metadata.full_name} 
                            className="drop-shadow-sm" 
                            width={40} 
                            height={40} 
                        />
                    </a>
        }

        {
            user?.app_metadata.provider === "email" 
                && <a href="/">
                        <UserIcon className="text-white h-8 w-8" />
                    </a>
        }

        <a href="/" title="home" className="px-2 py-1 text-lg">
            { !user 
                ? props.title 
                : user?.user_metadata.user_name || user?.email
            }
        </a>            

        { user && (<button
            className="ml-auto"
            onClick={ async () => {
                const { error } = await supabase.auth.signOut();
                if (error) return;
                router.push("/");
            }}
            >
            Logout <LogoutIcon className="inline h-5 w-5 text-white" />
            </button>
        )}
    </nav>
    )
}

export default Navigation;