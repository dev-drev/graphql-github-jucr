import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});
const authLink = setContext((_, { headers }) => {
  const temporaryToken = "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";
  return {
    headers: {
      ...headers,
      authorization: temporaryToken ? `Bearer ${temporaryToken}` : "",
    },
  };
});
// setting up the client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
