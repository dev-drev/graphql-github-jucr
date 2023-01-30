import { gql } from "@apollo/client";
import { QueryType } from "./types";

// Queries for the search API

export const GET_REPOSITORIES = gql`
  query SearchInApp($query: String!, $after: String) {
    search(query: $query, type: REPOSITORY, first: 100, after: $after) {
      nodes {
        ... on Repository {
          id
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
          repositoryTopics(first: 25) {
            nodes {
              topic {
                name
              }
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
          __typename
          avatarUrl
          login
          url
          id
          name
          location
          email
          bio
        }
        ... on Organization {
          id
          login
          avatarUrl
          name
          location
          email
        }
      }
    }
  }
`;

export const GET_TOPIC = gql`
  query SearchInApp($query: String!) {
    topic(name: $query) {
      id
      __typename
      name
      stargazerCount
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
          id
          title
          repository {
            name
            owner {
              login
            }
          }
          author {
            login
          }
          updatedAt
          body
        }
        ... on PullRequest {
          id
          title
          repository {
            id
            name
            owner {
              login
            }
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

export const GET_DISCUSSIONS = gql`
  query SearchInApp($query: String!) {
    search(query: $query, type: DISCUSSION, first: 100) {
      nodes {
        ... on Discussion {
          id
          title
          repository {
            name
          }
          author {
            login
          }
          createdAt
          body
          comments {
            totalCount
          }
        }
      }
    }
  }
`;


// Marketplace listings seems not be searchable by title, but only via ID organizationID

export const GET_MARKETPLACELISTINGS = gql`
  query SearchInApp($query: String!) {
    marketplaceListings(first: 100, useTopicAliases: true) {
      nodes {
        companyUrl
        name
      }
    }
  }
`;

// After reading documentation, I learnt that Searching commits and code using the search API is not possible in Github Graphql. Only searching repos, discussions, issues and users are supported (for the search API).Besides of that, Github GraphQL is a great tool allowing us to nest queries and mutations in a very complete way. Marketplace Listings are also not searchable by title, but only via ID organizationID. Topic search allows us to search for a specific one using the correct topic name. We can get its related topics. It might be possible to use the REST API to search for commits and code, and the other subjects, or also developing a way to fetch all the repos content (like commits and code) and filtering it accordingly to our search.

// I have created a list of queries to be used only in the search section cards.

// I created this list so to make possible to easily switch between queries subjects and so adding new menu buttons

export const sectionsList: QueryType[] = [
  { name: "Repositories", type: GET_REPOSITORIES },
  { name: "Users", type: GET_USERS },
  { name: "Issues", type: GET_ISSUES },
  { name: "Discussions", type: GET_DISCUSSIONS },
  { name: "Topics", type: GET_TOPIC },
];
