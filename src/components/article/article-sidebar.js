import ArticleCategories from '@/components/article/article-categories';
import ArticlePopular from '@/components/article/article-popular';
import ArticleBookmark from '@/components/article/article-bookmark';

function ArticleSidebar({className, category, popularArticles, bookmarked}) {
    const categories = category;

    return (
        <div className={className}>
            {bookmarked && <ArticleBookmark />}
            {categories && <h1 className={`mt-8 text-2xl font-bold`}>Categories</h1>}
            {categories && <ArticleCategories categories={categories} />}
            {popularArticles && <ArticlePopular popular={popularArticles}/>}
            <br/>
        </div>
    )
}

export default ArticleSidebar