import client from '@/lib/apollo-client';
import {getArticle, getSimilarArticles} from '@/queries/articles';
import ArticleHeader from '@/components/article/article-header';
import ArticleSidebar from '@/components/article/article-sidebar';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import parse from "html-react-parser"
import Head from 'next/head';

function ArticleDetailPage({article, popular_articles}) {

    const postContent = article.content.map((content) => {
        if (content.__typename === "Text") {
            return parse(content.html)
        } else if (content.__typename === "Assets") {
            return (<div key={content.__typename}>{content.items.map((asset) => (
                <img src={asset.url} key={asset.name} alt={asset.name}/>
            ))}</div>)
        } else if (content.__typename === "BlockQuote") {
            return <blockquote key={content.__typename} className="flex justify-around gap-2 font-bold"><FaQuoteLeft /> <p>{content.quote}</p> <FaQuoteRight /></blockquote>;
        }
    })

    return (
        <>
            <Head>
                <meta property="prepr:id" content={article._id}/>
            </Head>
            <ArticleHeader article={article} />
            <div className="grid grid-cols-9 gap-10 py-24 px-12 container mx-auto">
                {/* Main content */}
                <div className={`col-span-6 flex gap-4 flex-col post-content`}>
                    {postContent}
                </div>

                {/* Sidebar */}
                <ArticleSidebar className="col-span-3" category={article.category}  popularArticles={popular_articles} bookmarked={true} />
            </div>
        </>
    )
}

export default ArticleDetailPage;

export async function getServerSideProps({req, res, query}) {
    const {slug} = query

    const {data} = await client.query({
        query: getArticle,
        variables: { slug },
        context: {
            headers: {
            }
        }
    })

    const similar = await client.query({
        query: getSimilarArticles,
        variables: {
            similarId: data.Article._id,
            limit: 3
        },
        context: {
            headers: {
            }
        }
    })

    return {
        props: { article: data.Article, popular_articles: similar.data.Similar_Articles.items }
    }
}
