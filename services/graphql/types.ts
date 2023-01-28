import { DocumentNode } from "graphql";
import { GET_REPOSITORIES, GET_USERS } from "./queries";

export type QueryType = {
  name: string;
  type: DocumentNode;
};

export type Repository = {
  id: string;
  forkCount: number;
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
};

export type User = {
  login: string;
  id: string;
};
