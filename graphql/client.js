import { GraphQLClient } from 'graphql-request';
import dotenv from 'dotenv';

dotenv.config();

const client = new GraphQLClient(process.env.STRAPI_URL, {
    headers: {
        Authorization: `Bearer ${process.env.TOKEN}`
      }
});

export default client;