import Image from 'next/image';
import { Auth } from '@supabase/ui';
import Layout from '@/components/Layout';
import AuthComponent from '@/components/Auth';
import CurrencySelector from '@/components/CurrencySelector';
import Favorite from '@/components/Favorite';

export default function IndexPage() {
  const { user } = Auth.useUser()

  return (
    <Layout
      title="PRFT-Foobar Next.js Hackathon - BTC Exchange Rates"
      className="flex h-screen justify-center bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 dark:from-gray-700 dark:via-black dark:to-gray-900"
      metaDescription="by Andy Merhaut"
      user={user}
    >
      <div className="px-8 py-8 h-full">
        {!user ? (
          <AuthComponent />
        ) : (
          <div className="flex flex-col justify-center items-center">
            <Image src="/images/btc.png" width={400} height={348} />
            <h1 className="font-extrabold text-6xl text-white px-8">
              Get
              <span className="animate-pulse"> Bitcoin </span>
              exchange price
            </h1>
            <CurrencySelector selected="" />  
            <Favorite /> 
          </div>
          
        )}
      </div>
    </Layout>
  )
}