import '@/styles/globals.css'
import Nav from '@/components/navbar';
import { Open_Sans } from '@next/font/google'
import {CookiesProvider} from 'react-cookie';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
const inter = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        router.events.on("routeChangeComplete", () => {
            prepr('event', 'View');
        });
        return () => {
            router.events.off("routeChangeComplete", () => {
                // prepr('event', 'View');
            });
        };
    }, [router.events]);


    return (
        <main className={inter.className}>
            <Nav/>
            <CookiesProvider>
                <Component {...pageProps} />
            </CookiesProvider>
        </main>
    )
}
