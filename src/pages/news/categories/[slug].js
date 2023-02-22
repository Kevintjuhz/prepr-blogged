import AuthorHeader from '@/components/author/author-header';
import ArticleCard from '@/components/article-card';
import ArticleSidebar from '@/components/article/article-sidebar';
import client from '@/lib/apollo-client';
import {getAuthor} from '@/queries/author';
import {getArticlesByCategory} from '@/queries/category';

function CategoryDetailPage({category, articles, popular_articles}) {
    return (
        <>
            <div className="grid grid-cols-9 gap-10 py-24 px-12 container mx-auto">
                {/* Main content */}
                <div className={`col-span-6 flex gap-4 flex-col post-content`}>
                    <h2 className="text-4xl mb-6">Articles with category {category.name}</h2>

                    {articles.map((article) => (
                        <ArticleCard article={article} key={article.slug} />
                    ))}
                </div>

                {/* Sidebar */}
                <ArticleSidebar className="col-span-3" popularArticles={popular_articles}/>
            </div>
        </>
    )
}

export default CategoryDetailPage;

export async function getServerSideProps({query}) {
    const {slug} = query

    const {data} = await client.query({
        query: getArticlesByCategory,
        variables: {
            where: {
                category: {
                    _slug_any: slug
                }
            },
            limit: 3,
            slug: slug
        }
    })
    return {
        props: { articles: data.Articles.items, category: data.Category, popular_articles: data.Popular_Articles.items }
    }
}
