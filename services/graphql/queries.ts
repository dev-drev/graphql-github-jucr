import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query SearchInApp($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          forkCount
          stargazerCount
          nameWithOwner
          updatedAt
          description
          name
          primaryLanguage {
            name
          }
          owner {
            id
            login
            ... on User {
              id
              email
            }
          }
        }
      }
    }
  }
`;

export const GET_USERS = gql`
  query SearchInApp {
    search(first: 10, type: USER, query: "hello") {
      nodes {
        ... on User {
          login
          id
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query GetRepository($id: ID!) {
    node(id: $id) {
      ... on Repository {
        name
        nameWithOwner
        description
        url
        id
      }
    }
  }
`;