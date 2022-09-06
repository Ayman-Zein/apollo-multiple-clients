import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { MultiAPILink } from "@habx/apollo-multi-endpoint-link";
import { createHttpLink } from "apollo-link-http";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    new MultiAPILink({
      endpoints: {
        spacex: "https://api.spacex.land/graphql/",
        films: "https://swapi-graphql.netlify.app/.netlify/functions/index",
      },
      createHttpLink: () => createHttpLink(),
    }),
  ]),
});
