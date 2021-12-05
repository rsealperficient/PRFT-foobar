import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/InitSupabase';
import { Auth } from '@supabase/ui';
import Card from '@/components/Card';

type FavoriteItem = {
    id: string;
    currency: string;
}

export default function Favorite() {

    const router = useRouter();
    const {cur} = router.query;
    const { user } = Auth.useUser()
    const [favorites, setFavorites] = useState<FavoriteItem[]>([])
    const [errorText, setError] = useState('');

    useEffect(() => {
        fetchFavorites();
      },[]);

    const fetchFavorites = async () => {

    let { data: faves, error } = await supabase
        .from('preference')
        .select('id,currency')
        .order('currency', { ascending: true })
        .eq('user', user?.id)

    if (error) {
        setError(error.message)
    }
    else {
        if (faves?.length) {
            setFavorites(faves);
        }
    }
    } 

    return (
        <>
            { favorites.filter(f => { return f.currency !== cur}).length > 0 && <h3 className="pt-12 mx-auto text-4xl font-bold text-white dark:text-purple-500">Favorites</h3> }
            <div className="flex gap-2 justify-center py-8">
                {favorites.filter(f => { return f.currency !== cur}).map(f => {
                    return <a key={f.id} className="" href={`/${f.currency}`}>
                        <Card title={f.currency} />
                    </a>
                })}
            </div>
        </>
    )
}