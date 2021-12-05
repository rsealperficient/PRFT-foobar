import { ReactNode, useState, useEffect } from 'react';
import Head from 'next/head';
import { User } from '@supabase/gotrue-js';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Meta from '@/components/Meta';

type LayoutProps = {
    title?: string, 
    className?: string, 
    metaDescription?: string,
    children?: ReactNode,
    user?: User | any
};

const Layout = (props: LayoutProps) => {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])

    return mounted && (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.metaDescription} />
                <Meta />
            </Head>  
            <Navigation title={props.title} />
            <div className={props.className} role="main">
                {props.children}        
            </div>
            <Footer />   
        </>
    )
}

export default Layout;