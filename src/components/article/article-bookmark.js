import {FaBookmark} from 'react-icons/fa';
import {useState} from 'react';

function ArticleBookmark() {
    const [disabled, setDisabled] = useState(false)
    const handleClick = () => {
        prepr('event', 'Subscribe', { 'value': 2 });
        setDisabled(true)
    }

    return (
        <button
            className="flex justify-center items-center bg-gray-100 hover:bg-blue-700 disabled:hover:bg-gray-100 disabled:hover:text-black hover:text-white py-4 px-8 w-full rounded-xl"
            disabled={disabled}
            onClick={handleClick}
        >
            <FaBookmark className="mr-2"/> Bookmark
        </button>
    )
}

export default ArticleBookmark;