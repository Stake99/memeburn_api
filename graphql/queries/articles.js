import { gql } from "graphql-request";

export const GET_ARTICLES = gql `
    query getArticle {
        articles {
            documentId
            title
            content
            description
            featured
            author {
                name
                email
                bio
                slug
            }
            category {
                name
                slug
            }
            publishedAt
            slug
            views
            cover {
                url
            }
        }
    }
`;