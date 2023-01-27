import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query SearchInApp($query: String!, $type: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      nodes {
        ... on User {
          name
          login
          url
        }
        ... on Repository {
          nameWithOwner
          description
          url
        }
        # ... on User {
        #   name
        #   login
        #   url
        # }
      }
    }
  }
`;
