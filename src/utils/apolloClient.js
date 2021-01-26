import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const pancakeClient = () => {
  const httpLink = createHttpLink({
    uri: "https://graphql.bitquery.io",
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return client;
};
