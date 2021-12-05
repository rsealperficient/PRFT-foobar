import Image from 'next/image';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/InitSupabase';
import { Auth } from '@supabase/ui';
import Layout from '@/components/Layout';
import AuthComponent from '@/components/Auth';
import Forex from '@/components/Forex';
import Favorite from '@/components/Favorite';

export default function IndexPage() {
  const { user } = Auth.useUser()
  const router = useRouter()
  const {cur} = router.query;

  return (
    <Layout
      title={`PRFT-Foobar Next.js Hackathon - BTC-${cur?.toUpperCase()} Exchange`}
      className="flex h-screen justify-center bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 dark:from-gray-700 dark:via-black dark:to-gray-900"
      metaDescription="by Andy Merhaut"
      user={user}
    >
      <div className="px-8 py-8 h-full">
        {!user ? (
          <AuthComponent />
        ) : (
          <div className="flex flex-col justify-center items-center p-4">
            <Image src="/images/btc.png" width={400} height={348} />
            <Forex  />  
            <Favorite />
          </div>
        )}
      </div>
    </Layout>
  )
}