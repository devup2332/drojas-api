import { GraphQLClient } from "graphql-request";
import { environments } from "../environments";

export const graphqlClient = new GraphQLClient(environments.HASURA.URL, {
  headers: {
    "x-hasura-admin-secret": environments.HASURA.SECRET,
  },
});
