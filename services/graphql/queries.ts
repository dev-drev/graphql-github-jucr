import { gql } from "@apollo/client";
import { GraphQLObjectType } from "graphql";
import { QueryType } from "./types";

export const GET_REPOSITORIES = gql`
  query SearchInApp($query: String!, $after: String) {
    search(query: $query, type: REPOSITORY, first: 100, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        ... on Repository {
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
  query SearchInApp($query: String!) {
    search(first: 10, type: USER, query: $query) {
      nodes {
        ... on User {
          login
          url
          id
          name
          location
          email
          bio
        }
      }
    }
  }
`;

export const GET_CODES = gql`
  query SearchInApp {
    search(first: 10, type: CODE, query: "hello") {
      nodes {
        ... on Code {
          name
          url
          id
          description
          repository {
            name
            nameWithOwner
            owner {
              login
            }
          }
        }
      }
    }
  }
`;

export const sectionsList: QueryType[] = [
  { name: "Repositories", type: GET_REPOSITORIES },
  { name: "Users", type: GET_USERS },
  { name: "Codes", type: GET_CODES },
];
