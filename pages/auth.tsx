import router, { useRouter } from 'next/router';
import { supabase } from '@/lib/InitSupabase';
import Layout from '@/components/Layout';
import AuthComponent from '@/components/Auth';


export default function AuthPage() {
  const user = supabase.auth.user();

  return (
    <Layout
      title="PRFT-Foobar Next.js Hackathon - BTC Exchange Rates Login"
      metaDescription="by Andy Merhaut"
    >
      <div className="flex h-screen justify-center bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 dark:from-gray-700 dark:via-black dark:to-gray-900">
        <div className="px-8 py-8 h-full">
            <div className="bg-white p-4 rounded">
              <AuthComponent />
            </div>
        </div>
      </div>
    </Layout>
  )
}