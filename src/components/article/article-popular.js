import SidebarCard from '@/components/article/sidebar-card';
import Link from 'next/link';

function ArticlePopular({popular}) {
    // const options = {year: "numeric", month: "long", day: "numeric"}

    return (
        <SidebarCard className="text-center">
            <p className="font-bold text-xl mb-2">Related news</p>
            <hr className="mb-4 border-gray-400 border-1"/>

            {popular.map((article) => (
                <Link key={article._slug} className="flex" href={`/news/articles/${article._slug}`} data-prepr-abtest={article._id}>
                    <img src={article.featured_image[0].url} className="rounded-xl overflow-hidden mb-6 h-[100px] min-w-[100px] w-[100px] mr-4"/>
                    <div className="flex flex-row text-left">
                        <h4 className="text-l">{article.title}</h4>
                        <span className="text-sm">
                            {/*{new Date(article._publish_on).toLocaleDateString(undefined, options).toString()}*/}
                        </span>
                    </div>
                </Link>
            ))}
        </SidebarCard>
    )
}

export default ArticlePopular