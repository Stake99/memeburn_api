import express from 'express'
import { findArticle, getArticles } from '../controllers/articlesController.js';
import { findImage, getImages } from '../controllers/imagesController.js';

const router = express.Router();

router.get('/posts', getArticles);
router.get('/post/:id', findArticle)

router.get('/images', getImages);
router.get('/image/:id', findImage)

export default router;