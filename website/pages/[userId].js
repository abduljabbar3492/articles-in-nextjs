import { React } from 'react'
import { userService } from '../services/user.service';
import ArticlesList from '../components/ArticlesList';

const ArticleListPage = (props) => {
    return (<ArticlesList props={props.data} />)


}
export async function getStaticPaths() {
    let articles = await userService.getAll();
    return {
        fallback: false,
        paths: articles.data.map(art => ({ params: { userId: art._id.toString() } }))
    }
}
export async function getStaticProps(context) {
    const userId = context.params.userId;
    let data = await userService.fetchSingleUserArticles(userId);
    return {
        props: data
    }
}

export default ArticleListPage