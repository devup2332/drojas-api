import { gql } from "graphql-request";

export const GET_USER_INFORMATION = gql`
  query GET_USER_INFORMATION($email: String) {
    users(where: { email: { _eq: $email } }) {
      email
      id
      created_at
      updated_at
      password
    }
  }
`;
