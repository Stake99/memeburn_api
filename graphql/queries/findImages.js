import { gql } from "graphql-request";

export const FIND_IMAGE = gql`
    query findImage($documentId: ID!){
        uploadFile(documentId: $documentId) {
            documentId
            url
        }
    }
`;