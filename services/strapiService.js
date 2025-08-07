import { GET_ARTICLES } from '../graphql/queries/articles.js';
import client from '../graphql/client.js'
import { FIND_ARTICLES } from '../graphql/queries/findArticle.js';
import { GET_IMAGES } from '../graphql/queries/image.js';
import { FIND_IMAGE } from '../graphql/queries/findImages.js';


async function fetchArticles() {
  const res = await client.request(GET_ARTICLES);
  return res
}

async function findArticle(documentId) {
    const variables = { documentId };
    const res = await client.request(FIND_ARTICLES, variables)
    return res
}

async function fetchImage() {
  const res = await client.request(GET_IMAGES);
  return res
}

async function findImage(documentId) {
  const variables = { documentId };
  const res = await client.request(FIND_IMAGE, variables)
  return res
}

export default { fetchArticles, findArticle, fetchImage, findImage };
