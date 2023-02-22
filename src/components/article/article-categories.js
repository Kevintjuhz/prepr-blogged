import Link from 'next/link';

function ArticleCategories({categories}) {
    return (
        <div className="py-4 grid grid-cols-2 gap-4">
            {categories.map((category) => (
                <Link href={`/news/categories/${category._slug}`} key={category._slug} className="rounded-2xl bg-gray-100 hover:bg-blue-600 group p-1 flex items-center gap-4">
                    <img src={`${category.image[0].url}`} alt={`${category.image[0].name}`} className="rounded-full w-14 h-14 bg-center"/>
                    <p className="text-gray-600 group-hover:text-white font-semibold text-lg">{category.name}</p>
                </Link>
            ))}
        </div>
    )
}

export default ArticleCategories