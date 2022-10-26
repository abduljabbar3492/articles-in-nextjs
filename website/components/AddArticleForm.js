import { useRef } from 'react';
function AddArticleForm(props) {
  const titleInputRef = useRef();
  const contentInputRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredContent = contentInputRef.current.value;
    const data = {
      title: enteredTitle,
      content: enteredContent
    };
    props.onAddArticle(data);
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
                    <input ref={titleInputRef}
                      type="text" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="content" className="leading-7 text-sm text-gray-600">Content</label>
                    <textarea ref={contentInputRef}
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
export default AddArticleForm;