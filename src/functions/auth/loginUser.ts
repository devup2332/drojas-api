import { APIGatewayProxyHandler } from "aws-lambda";
import { graphqlClient } from "../../graphql/client";
import { GET_USER_INFORMATION } from "../../graphql/queries/user";
import { comparePasswords } from "../../lib/utils/comparePassword";
import { generateToken } from "../../lib/utils/generateToken";
import bcrypt from "bcryptjs";

export const LoginUser: APIGatewayProxyHandler = async (event) => {
  const { password, email } = JSON.parse(event.body!);
  const { users } = await graphqlClient.request(GET_USER_INFORMATION, {
    email,
  });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash("DevanmortD1-", salt);
  console.log({ hash });
  if (users.length < 1)
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: "User not found",
        status: 0,
      }),
    };

  const match = await comparePasswords(password, users[0].password);
  if (!match)
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: "Password is incorrect",
        status: 0,
      }),
    };

  const token = generateToken(users[0]);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "User logged successfully",
      token,
      status: 1,
    }),
  };
};
