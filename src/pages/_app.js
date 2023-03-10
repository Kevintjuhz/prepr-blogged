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
        const handleRouteChange = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            prepr('event', 'View');
        }

        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])


    return (
        <main className={inter.className}>
            <Nav/>
            <CookiesProvider>
                <Component {...pageProps} />
            </CookiesProvider>
        </main>
    )
}
