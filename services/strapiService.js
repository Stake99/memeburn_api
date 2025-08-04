import { GET_ARTICLES } from '../graphql/queries/articles.js';
import client from '../graphql/client.js'
import { FIND_ARTICLES } from '../graphql/queries/findArticle.js';


async function fetchArticles() {
  const res = await client.request(GET_ARTICLES);
  return res
}

async function findArticle(documentId) {
    const variables = { documentId };
    const res = await client.request(FIND_ARTICLES, variables)
    return res
}

export default { fetchArticles, findArticle };
