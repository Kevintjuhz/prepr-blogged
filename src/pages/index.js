import {parseCookies} from '@/lib/index';
import {getHomePage} from '@/queries/home';
import client from '@/lib/apollo-client';
import ArticleCard from '@/components/article-card';
import Link from 'next/link';
import Head from 'next/head';
import {useContext, useEffect} from 'react';
import CookiesContext from 'react-cookie/lib/CookiesContext';
import parse from 'html-react-parser';
function HomePage({data}) {
    const cookieContext = useContext(CookiesContext)

    const pageContent = data.content.map((content) => {
        if (content.__typename === "Header") {
            return (
                <>
                    <div
                        className="h-[40vh] w=[100vw] sm:max-lg:h-[40vh] lg:max-2xl:h-[40vh] bg-center bg-cover mb-8"
                        key={content.title}
                        style={{
                            background: `linear-gradient(0deg,rgba(0,0,0,0.6),transparent), url("${content.background_image[0].url}")`,
                        }}
                    >
                        <div className="px-12 py-24 text-white container mx-auto text-center">
                            <h1 className="text-3xl lg:max-2xl:text-4xl font-bold mb-6">{content.title}</h1>
                            <p className="text-sm font-light mb-6">{content.subtitle}</p>
                        </div>
                    </div>
                </>
            )
        }

        if (content.__typename === "Article") {
            return (
                <div key={content._id} className="container mx-auto p-24">
                    <ArticleCard article={content}/>
                </div>
            )
        }

        if (content.__typename === "CTAMain") {
            return (
                <div key={content._id} className="bg-blue-700 text-white">
                    <div className="container mx-auto p-24 text-center">
                        <h2 className="text-3xl font-bold">{content.header}</h2>
                        <p className="text-xl mb-8">{content.tagline}</p>
                        <Link
                            className="bg-white px-12 py-4 text-black rounded-full hover:bg-transparent hover:border-2 hover:border-white hover:text-white"
                            href={`${content.link.url}`}
                        >
                            Explore
                        </Link>
                    </div>
                </div>
            )
        }

        if (content.__typename === "HTML") {
            return parse(content.editor)
        }
    })

    return (
        <>
            <Head>
                <meta property="prepr:id" content={data._id}/>
                <meta property="prepr:customer-id" content={cookieContext.get('__prepr_uid')}/>
            </Head>
            {pageContent}
        </>
    )
}

export default HomePage

HomePage.getInitialProps = async ({req, res}) => {
    // Cookie
    let cookieData = parseCookies(req);

    // Data
    const {data} = await client.query({
        query: getHomePage,
        context: {
            headers: {
                "Prepr-Customer-ID": cookieData.__prepr_uid
            }
        }
    })

    return {
        data: data.Page,
        cookieData
    }
}

