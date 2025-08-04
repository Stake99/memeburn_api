import { gql } from "graphql-request";

export const FIND_ARTICLES = gql `
    query findArticle($documentId: ID!) {
        article(documentId: $documentId) {
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