import { APIGatewayProxyHandler } from "aws-lambda";

export const LoginUser: APIGatewayProxyHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "User logged successfully",
      token: "3213471ch46716h4371236312",
    }),
  };
};
