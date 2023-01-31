import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});
const authLink = setContext((_, { headers }) => {
  // make sure your token (classic one with access to all GitHub Data) starts with "ghp_"
  const token = "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";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
// setting up the client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
