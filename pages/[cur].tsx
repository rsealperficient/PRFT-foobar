import {useEffect} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/InitSupabase';

import Layout from '@/components/Layout';
import AuthComponent from '@/components/Auth';
import Forex from '@/components/Forex';
import Favorite from '@/components/Favorite';

export default function IndexPage() {

  const router = useRouter();
  const {cur} = router.query;

  useEffect(() => {
    localStorage.setItem("prft-foobar.current-url", location.pathname);
  },[]);

  return (
    <Layout
      title={`PRFT-Foobar Next.js Hackathon - BTC-${(cur as string)?.toUpperCase()} Exchange`}
      className="flex h-screen justify-center bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 dark:from-gray-700 dark:via-black dark:to-gray-900"
      metaDescription="by Andy Merhaut"
    >
      <div className="px-8 py-8 h-full">
        <div className="flex flex-col justify-center items-center p-4">
          <Image src="/images/btc.png" width={400} height={348} />
          <Forex  />  
          <Favorite />
        </div>
      </div>
    </Layout>
  )
}