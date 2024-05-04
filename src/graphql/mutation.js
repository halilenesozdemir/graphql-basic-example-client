import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation CreatePost($body: Input!) {
    createPost(body: $body) {
      id
      title
      description
      url
    }
  }
`;
