import { IUser } from "../../models/User.model";
import jwt from "jsonwebtoken";
import { environments } from "../../environments";

export const generateToken = ({ id, email }: IUser) => {
  return jwt.sign(
    {
      id,
      email,
    },
    environments.JWT.SECRET,
    {
      expiresIn: 86400,
    }
  );
};
