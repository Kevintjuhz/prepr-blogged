import client from '@/lib/apollo-client';
import {getAuthor} from '@/queries/author';
import AuthorHeader from '@/components/author/author-header';
import ArticleSidebar from '@/components/article/article-sidebar';
import ArticleCard from '@/components/article-card';
import {getArticles, getSimilarArticles} from '@/queries/articles';
function AuthorDetailPage({author, articles, popular_articles}) {
    const categories = articles.map((article) => article.category[0])

    return (
        <>
            <AuthorHeader author={author}/>

            <div className="grid grid-cols-9 gap-10 py-24 px-12 container mx-auto">
                {/* Main content */}
                <div className={`col-span-6 flex gap-4 flex-col post-content`}>
                    <h2 className="text-4xl mb-6">Articles By This Author</h2>

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

export default AuthorDetailPage;

export async function getServerSideProps({query}) {
    const {authorSlug} = query

    const {data} = await client.query({
        query: getAuthor,
        variables: {
            where: {
                author: {
                    _slug_any: authorSlug
                }
            },
            limit: 3,
            slug: authorSlug
        }
    })

    const articles = await client.query({
        query: getArticles,
    })

    return {
        props: { articles: articles.data.Articles.items, author: data.Author }
    }
}
