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
                avatar {
                    documentId
                    url
                }
            }
            category {
                name
                slug
            }
            publishedAt
            slug
            views
            cover {
                documentId
                url
            }
        }
    }
`;