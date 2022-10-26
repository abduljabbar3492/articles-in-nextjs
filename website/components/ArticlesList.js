
import Image from 'next/image'
function ArticlesList({props}) {
    return (
        <div className='container mx-auto'>
            <div aria-label="group of cards" tabIndex="0" className="focus:outline-none py-8 w-full">

                <div className="lg:flex items-center justify-center w-full">
                    {props.map(article => {
                        return (<div className="h-64 focus:outline-none lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-white dark:bg-gray-800  p-6 shadow rounded" key={article._id}>
                            <div className="flex items-center border-b border-gray-200 dark:border-gray-700  pb-6">
                                <Image src="/article.png" alt="coin avatar" width={48} height={48} className="rounded-full" />
                                <div className="flex items-start justify-between w-full">
                                    <div className="pl-3 w-full">
                                        <p tabIndex="0" className="focus:outline-none text-xl font-medium leading-5 text-gray-800 dark:text-white ">{article.title}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2">
                                <p tabIndex="0" className="focus:outline-none text-sm leading-5 py-4 text-gray-600 dark:text-gray-200 ">{article.content}</p>
                                <div tabIndex="0" className="focus:outline-none flex">
                                    <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#{article.user_id.country}</div>
                                    <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#{article.user_id.city}</div>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
            </div>

        </div>
    )
}
export default ArticlesList;