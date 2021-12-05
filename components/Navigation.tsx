import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '../lib/InitSupabase';
import { LogoutIcon, UserIcon } from '@heroicons/react/solid';

interface INavigationProps {
    title: string
  }

const Navigation: React.FC<INavigationProps> = (props) => {

    const user = supabase.auth.user();
    const router = useRouter();
    
    return (
    <nav className="flex gap-1 bg-gradient-to-r from-blue-700 via-purple-600 to-purple-900 dark:from-black dark:via-purple-900 dark:to-black font-bold px-4 py-4 text-white">

        {
            user?.app_metadata.provider === "github" 
                && <Link href="/?go=home">
                        <img src={user?.user_metadata.avatar_url} 
                            title={user?.user_metadata.full_name} 
                            className="drop-shadow-sm" 
                            alt="github avatar"
                            width={40} 
                            height={40} 
                        />
                    </Link>
        }

        {
            user?.app_metadata.provider === "email" 
                &&  <Link href="/?go=home">
                        <UserIcon className="text-white h-8 w-8" />
                    </Link>
        }

        <div className="px-2 py-1 text-lg">
            <Link href="/?go=home">
                { !user 
                    ? props.title 
                    : user?.user_metadata.user_name || user?.email
                }
            </Link>    
        </div>        

        { user && (<button
            className="ml-auto"
            onClick={ async () => {
                const { error } = await supabase.auth.signOut();
                if (error) return;
                router.push("/auth");
            }}
            >
            Logout <LogoutIcon className="inline h-5 w-5 text-white" />
            </button>
        )}
    </nav>
    )
}

export default Navigation;