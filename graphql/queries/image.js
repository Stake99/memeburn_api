import { gql } from "graphql-request";

export const GET_IMAGES = gql`
  query getImage {
    uploadFiles {
        documentId
        url
    }
}
`;
