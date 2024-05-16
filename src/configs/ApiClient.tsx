import { ApolloClient, InMemoryCache } from "@apollo/client";

const apiClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export { apiClient };
