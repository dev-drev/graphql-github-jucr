import { gql } from "@apollo/client";
import { QueryType } from "./types";

export const GET_REPOSITORIES = gql`
  query SearchInApp($query: String!, $after: String) {
    search(query: $query, type: REPOSITORY, first: 100, after: $after) {
      nodes {
        ... on Repository {
          __typename
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
          __typename
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

export const GET_TOPIC = gql`
  query SearchInApp($query: String!) {
    topic(name: $query) {
      __typename
      name
      relatedTopics(first: 10) {
        name
        stargazerCount
      }
    }
  }
`;

export const GET_ISSUES = gql`
  query SearchInApp($query: String!) {
    search(query: $query, type: ISSUE, first: 100) {
      nodes {
        ... on Issue {
          title
          repository {
            name
          }
          author {
            login
          }
          updatedAt
          body
        }
      }
    }
  }
`;

// I created this list so to make possible to easily switch between subjects and so adding  new menu buttons

export const sectionsList: QueryType[] = [
  { name: "Repositories", type: GET_REPOSITORIES },
  { name: "Users", type: GET_USERS },
  { name: "Topics", type: GET_TOPIC },
  { name: "Issues", type: GET_ISSUES },
];
