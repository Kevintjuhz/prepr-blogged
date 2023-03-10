import {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

function ArticleCard({article}) {
    const options = {year: "numeric", month: "long", day: "numeric"}
    const date = new Date(article._created_on)
    const [convertedDate, setConvertedDate] = useState("Loading");

    useEffect(() => {
        setConvertedDate(date.toLocaleDateString(undefined, options).toString());
    });

    return (
        <Link className="grid grid-cols-12 mb-4 gap-8 group" href={`/news/articles/${article._slug}`} data-prepr-abtest={article._id}>
            <div
                className="overflow-hidden col-span-5 bg-cover bg-center rounded-xl w-full h-full self-start"
                style={{backgroundImage: `url("${article.featured_image[0].url}")`}}
            >
            </div>
            <div className="col-span-7 border rounded-xl border-gray-200 px-10 py-10 group-hover:shadow-xl">
                <p className="text-red-700 text-sm mb-4">{article.category[0].name}</p>
                <h3 className="text-2xl font-bold mb-8">{article.title}</h3>

                <div>
                    <p className="font-bold">{article.author[0].name}</p>
                    <span className="text-xs text-gray-500">{convertedDate}</span>
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard