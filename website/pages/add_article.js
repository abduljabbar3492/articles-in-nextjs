import { useRouter } from 'next/router';
import { userService } from '../services/user.service';
import { React, useState, useEffect } from 'react'
import AddArticleForm from '../components/AddArticleForm';

// const initialValue = {
//   title: "",
//   content: "",
// };
const AddArticle = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  //   //check if user is not logged in , redired to login 
  useEffect(() => {
    if (!userService.userValue) {
      alert("Please login to add article")
      router.push('/login')
    } else {
      setUser(userService.userValue)
    }
  }, []);
  //   const onValueChange = (e) => {
  //     setArticle({ ...article, [e.target.name]: e.target.value })
  //   };
  //   const handleSubmit = async e => {
  //     e.preventDefault();
  //     try {
  //       let res = await userService.createArticle(article);
  //       if (res.status)
  //         router.push('/');
  //     } catch (error) {
  //       router.push('/add_article');
  //     }
  //   }

  async function addArticleHandler(data) {
    data.user_id = user.data._id;
    const response = await userService.addArticle(data);
    console.log("New response", response);
    if (response.status)
      router.push('/')
  }
  return <AddArticleForm onAddArticle={addArticleHandler} />
}

export default AddArticle