import FeaturedPostsHeader from '@/components/featured-posts-header';
import client from '@/lib/apollo-client';
import {getArticles} from '@/queries/articles';
import ArticleCard from '@/components/article-card';
import {getCookie} from "cookies-next";
function NewsPage({articles}) {
    return (
        <>
            <FeaturedPostsHeader posts={articles} />
            <div className="flex flex-col gap-4 mt-20 p-24 container mx-auto ">
                <h2 className="font-bold text-3xl mb-4">Articles</h2>
                {articles.map((article) => (
                    <>
                        <a href={`/news/articles/${article._slug}`} data-prepr-abtest={article._id}>Test</a>
                        <ArticleCard key={article._slug} article={article} />
                    </>
                ))}
            </div>
        </>
    )
}

export default NewsPage

export async function getServerSideProps({req, res}) {

    const customerCookie = getCookie('__prepr_uid', { req, res});

    const {data} = await client.query({
        query: getArticles,
        context: {
            headers: {
                "Prepr-Customer-Id": customerCookie
            }
        }
    })
    return {
        props: { articles: data.Articles.items }
    }
}
