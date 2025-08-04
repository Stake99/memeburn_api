import { gql } from "graphql-request";

export const GET_ARTICLES = gql `
    query getArticle {
        articles {
            content
        }
    }
`;