import { useState, useEffect } from 'react';
import { userService } from '../services/user.service';
import Link from 'next/link'
import Image from 'next/image'
function Home(props) {
    // const [articles, setArticles] = useState(null);
    // const [isLoading, setLoading] = useState(false);

    // useEffect(() => {
    //     userService.getAll().then((data) => {
    //         console.log("User service called", data)
    //         setArticles(data)
    //         setLoading(false)
    //     });
    // }, []);
    // if (isLoading) return <p>Loading...</p>
    if (!props) return <p>No Articles data</p>
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Articles</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.</p>
                </div>
                {props &&
                    <ul className="mx-auto max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                        {props.data.data.map((article) =>
                            <li className="pb-3 sm:pb-4" key={article._id}>
                                <div className="flex items-center space-x-4 mt-4" key={article._id}>
                                    <div className="flex-shrink-0">
                                        <Image width={32} height={32} className="rounded-full" src="/article.png" alt="image" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {article.full_name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {article.email}
                                        </p>
                                    </div>

                                    <Link href={`/${article._id}`}><a className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        {article.total_articles}
                                    </a>
                                    </Link>
                                </div>
                            </li>
                        )}
                    </ul>
                }
            </div>
        </section>
    )
}
export default Home;