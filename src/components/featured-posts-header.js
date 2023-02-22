import {useEffect, useState} from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import {Avatar} from 'flowbite-react';
import Link from 'next/link';

function FeaturedPostsHeader({ posts, className }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [date, setDate] = useState(posts[currentIndex]._created_on)

    const options = {year: "numeric", month: "long", day: "numeric"}
    const [convertedDate, setConvertedDate] = useState("Loading");

    useEffect(() => {
        setConvertedDate(new Date(date).toLocaleDateString(undefined, options).toString());
    }, [date]);


    const handleClick = (direction) => {
        handleChange(direction)
    }
    const handleChange = (direction) => {
        const length = posts.length;
        let index;

        if (direction === "left") {
            if (currentIndex - 1 < 0) {
                index = length - 1;
            } else {
                index = currentIndex - 1
            }
        } else if (direction === "right") {
            if (currentIndex + 1 > length - 1) {
                index = 0
            } else {
                index = currentIndex + 1
            }
        }

        setCurrentIndex(index)
        setDate(posts[index]._created_on)
    }

    const controlClasses = "p-4 rounded-full border-2 border-gray-600 text-gray-600 hover:bg-white hover:border-white hover:transition-all hover:duration-200 hover:shadow"

    return (
        <div className="flex flex-col relative justify-center">
            {/* Featured image */}
            <div style={{backgroundImage: `url("${posts[currentIndex].featured_image[0].url}")`}} className="w-[85vw] bg-center bg-cover relative h-[90vh] self-center">
                <div className="absolute bg-white shadow w-[580px] right-[100px] -bottom-6 rounded rounded-xl p-12 flex flex-col items-start">
                    <span className="text-sm text-red-600 mb-6">{posts[currentIndex].category[0].name}</span>

                    <h1 className="text-4xl font-bold mb-8">{posts[currentIndex].title}</h1>

                    <div className="flex px-2 items-center">
                        <Link className="flex" href={`/news/author/${posts[currentIndex].author[0]._slug}`}>
                            <Avatar alt="User settings" img={`${posts[currentIndex].author[0].image[0].url}`} rounded={true}/>
                            <div className="pl-6">
                                <p className="text-md">{posts[currentIndex].author[0].name}</p>
                                <p className="text-gray-500 text-sm">{convertedDate}</p>
                            </div>
                        </Link>


                        <Link
                            href={`/news/articles/${posts[currentIndex]._slug}`}
                            className="bg-blue-700 hover:bg-blue-800 text-white rounded rounded-full px-10 py-4 absolute -right-12 shadow"
                        >
                            Read post
                        </Link>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex absolute -bottom-20 left-24">
                <div className={`${controlClasses} mr-2`} onClick={() => handleClick("left")}>
                    <FaArrowLeft />
                </div>
                <div className={`${controlClasses} ml-2`} onClick={() => handleClick("right")}>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    )
}

export default FeaturedPostsHeader;