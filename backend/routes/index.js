import express from 'express';
import * as userRoutes from './user/user.js';
import * as articleRoutes from './article/article.js';
const router = express.Router();


router.use('/user', userRoutes.router);
router.use('/article', articleRoutes.router);
export default router;
