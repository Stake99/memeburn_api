import express from 'express'
import { findArticle, getArticles } from '../controllers/articlesController.js';

const router = express.Router();

router.get('/posts', getArticles);
router.get('/post/:id', findArticle)

export default router;