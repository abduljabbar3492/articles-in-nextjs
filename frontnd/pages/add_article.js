import { useRouter } from 'next/router';
import { userService } from '../services/user.service';
import { React, useState, useEffect } from 'react'

const initialValue = {
  title: "",
  content: "",
};
const AddArticle = () => {
  const router = useRouter();
  const [article, setArticle] = useState(initialValue);
  //check if user is not logged in , redired to login 
  useEffect(() => {
    if (!userService.userValue) {
        alert("Please login to add article")
        router.push('/login')
    }
}, []);
  const onValueChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value })
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      let res = await userService.createArticle(article);
      if (res.status)
        router.push('/');
    } catch (error) {
      router.push('/add_article');
    }
  }
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Add Article</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Title</label>
                    <input onChange={(e) => onValueChange(e)}
                    type="text" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="content" className="leading-7 text-sm text-gray-600">Content</label>
                    <textarea onChange={(e) => onValueChange(e)}
                     id="content" name="content" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default AddArticle