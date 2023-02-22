import {Avatar} from 'flowbite-react';
import {useEffect, useState} from 'react';
import Link from 'next/link';

function ArticleHeader({article}) {
    const options = {year: "numeric", month: "long", day: "numeric"}
    const date = new Date(article._created_on)
    const [convertedDate, setConvertedDate] = useState("Loading");

    useEffect(() => {
        setConvertedDate(date.toLocaleDateString(undefined, options).toString());
    });



    return (
        <div
            className="h-[60vh] w=[100vw] sm:max-lg:h-[80vh] lg:max-2xl:h-[110vh] bg-center bg-cover flex flex-stretch items-end"
            style={{
                background: `linear-gradient(0deg,rgba(0,0,0,0.6),transparent), url("${article.featured_image[0].url}")`,
            }}
        >
            <div className="px-12 py-24 text-white container mx-auto">
                <p className="text-sm font-light mb-6">{article.category[0].name}</p>
                <h1 className="text-2xl lg:max-2xl:text-4xl font-bold mb-8">{article.title}</h1>

                <Link href={`/news/author/${article.author[0]._slug}`} className="flex items-center mb-6">
                    <Avatar alt="User settings" img={`${article.author[0].image[0].url}`} rounded={true}/>
                    <div className="pl-6">
                        <p className="text-md">{article.author[0].name}</p>
                        <p className="text-gray-300 text-xs">{convertedDate}</p>
                    </div>
                </Link>

                <hr className="w-[100%]" />
            </div>
        </div>
    )
}

export default ArticleHeader;