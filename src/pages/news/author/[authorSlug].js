import client from '@/lib/apollo-client';
import {getAuthor, getAuthorSlugs} from '@/queries/author';
import AuthorHeader from '@/components/author/author-header';
import ArticleSidebar from '@/components/article/article-sidebar';
import ArticleCard from '@/components/article-card';
import {getArticles, getArticleSlugs} from '@/queries/articles';
import Head from "next/head";
function AuthorDetailPage({author, articles }) {
    let categories = articles.map((article) => {
            return article.category[0]
    })

    categories = categories.filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.name === value.name
            ))
    )

    return (
        <>
            <Head>
                <meta property="prepr:id" content={author._id}/>
            </Head>
            <AuthorHeader author={author}/>

            <div className="grid grid-cols-9 gap-10 py-24 px-12 container mx-auto">
                {/* Main content */}
                <div className={`col-span-6 flex gap-4 flex-col post-content`}>
                    <h2 className="text-4xl mb-6">Articles By This Author</h2>

                    {articles.map((article) => (
                        <ArticleCard article={article} key={article._slug} />
                    ))}
                </div>

                {/* Sidebar */}
                <ArticleSidebar className="col-span-3" category={categories}/>
            </div>
        </>
    )
}

export default AuthorDetailPage;

export async function getStaticProps({params}) {
    const {authorSlug} = params

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
        },
    })

    const articles = await client.query({
        query: getArticles,
    })

    return {
        props: { articles: articles.data.Articles.items, author: data.Author }
    }
}

export async function getStaticPaths() {
    const {data} = await client.query({
        query: getAuthorSlugs
    })

    const paths = data.Authors.items.map((author) => {
        return {
            params: { authorSlug: author._slug }
        }
    })

    return{
        paths,
        fallback: false
    }
}