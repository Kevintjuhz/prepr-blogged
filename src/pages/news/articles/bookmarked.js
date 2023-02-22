import {getBookmarkedArticles} from '@/queries/articles';
import {parseCookies} from '@/lib/index';
import client from '@/lib/apollo-client';
import ArticleCard from '@/components/article-card';
import ArticleSidebar from '@/components/article/article-sidebar';

function BookmarkedPage({articles}) {
    const categories = articles.map((article) => article.category[0])

    return (
        <>
            <div className="grid grid-cols-9 gap-10 py-24 px-12 container mx-auto">
                {/* Main content */}
                <div className={`col-span-6 flex gap-4 flex-col post-content`}>
                    <h2 className="text-4xl mb-6">Bookmarked articles</h2>

                    {articles.map((article) => (
                        <ArticleCard article={article} key={article.slug} />
                    ))}
                </div>

                {/* Sidebar */}
                <ArticleSidebar className="col-span-3" category={categories}/>
            </div>
        </>
    )
}
export default BookmarkedPage

export async function getServerSideProps({req}) {
    let cookieData = parseCookies(req);

    const {data} = await client.query({
        query: getBookmarkedArticles,
        context: {
            headers: {
                "Prepr-Customer-ID": cookieData.__prepr_uid
            }
        }
    })

    return {
        props: { articles: data.Articles.items }
    }
}