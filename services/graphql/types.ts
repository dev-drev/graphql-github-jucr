import { DocumentNode, GraphQLObjectType } from "graphql";
import { ReactElement } from "react";

export type QueryType = {
  name: string;
  type: DocumentNode;
};

export type Repository = {
  id: string;
  stargazerCount: number;
  nameWithOwner: string;
  updatedAt: string;
  description: string;
  name: string;
  primaryLanguage: {
    name: string;
  };
  owner: {
    id: string;
    login: string;
    email: string;
  };
  repositoryTopics: {
    nodes: {
      map: (arg0: (topic: any) => any) => ReactElement;
      topic: {
        name: string;
      };
    };
  };
};

export type User = {
  login: string;
  name: string;
  url: string;
  location: string;
  email: string;
  bio: string;
  id: string;
};

export type Topic = {
  name: string;
  stargazerCount: number;
  id: string;
  relatedTopics: {
    name: string;
    stargazerCount: number;
  }[];
};

export type Issue = {
  id: string;
  title: string;
  repository: {
    name: string;
    owner: {
      login: string;
    };
  };
  author: {
    login: string;
  };
  updatedAt: string;
  body: string;
};

export type Discussion = {
  title: string;
  repository: {
    name: string;
  };
  author: {
    login: string;
  };
  createdAt: string;
  body: string;
  comments: {
    totalCount: number;
  };
};
  
export enum UserOrganizationUnion {
  "Organization",
  "User",
}


