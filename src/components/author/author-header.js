function AuthorHeader({author}) {
    return (
        <div className="bg-gray-100 px-4 py-24">
            <div className="flex justify-center items-center">
                <div className="overflow-hidden bg-cover bg-center rounded-full h-[125px] min-w-[125px] w-[125px] self-start" style={{backgroundImage: `url("${author.image[0].url}")`}}></div>
                <div className="px-12">
                    <h1 className="text-3xl font-bold mb-3">{author.name}</h1>
                    <p className="text-gray-400 text-sm mb-6">{author.job}</p>
                    <p className="text-md">{author.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default AuthorHeader