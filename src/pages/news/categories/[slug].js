import ArticleCard from '@/components/article-card';
import ArticleSidebar from '@/components/article/article-sidebar';
import client from '@/lib/apollo-client';
import {getCategory, getCategorySlugs} from '@/queries/category';
import {getArticlesByCategory} from "@/queries/articles"
import Head from "next/head";

function CategoryDetailPage({category, articles}) {
    return (
        <>
            <Head>
                <meta property="prepr:id" content={category._id}/>
            </Head>
            <div className="grid grid-cols-9 gap-10 py-24 px-12 container mx-auto">
                {/* Main content */}
                <div className={`col-span-6 flex gap-4 flex-col post-content`}>
                    <h2 className="text-4xl mb-6">Articles with category {category.name}</h2>

                    {articles.map((article) => (
                        <ArticleCard article={article} key={article.slug} />
                    ))}
                </div>

                {/* Sidebar */}
                <ArticleSidebar className="col-span-3" />
            </div>
        </>
    )
}

export default CategoryDetailPage;

export async function getStaticProps({params}) {
    const {slug} = params

    const {data} = await client.query({
        query: getCategory,
        variables: {
            slug: slug
        }
    })

    const Articles = await client.query({
        query: getArticlesByCategory,
        variables: {
            where: {
                category: {
                    _slug_any: slug
                }
            },
        }
    })

    return {
        props: { articles: Articles.data.Articles.items, category: data.Category}
    }
}

export async function getStaticPaths() {
    const {data} = await client.query({
        query: getCategorySlugs
    })

    const paths = data.Categories.items.map((category) => {
        return {
            params: { slug: category._slug }
        }
    })

    return{
        paths,
        fallback: false
    }
}
