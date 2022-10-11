import express from 'express';
import articleController from '../../controllers/articleController.js';
import * as  auth from '../../middlewares/auth.js'
const router = express.Router();

router.route('/create_article').post(auth.jwtVerify, articleController.createArticle); //protected route
router.route('/get_articles_count').get(articleController.getArticlesCount);
router.route('/fetch_single_user_articles').get(auth.jwtVerify, articleController.fetchSingleUserArticles);  //protected route

export { router };