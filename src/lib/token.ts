import { db } from "./db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface IValidatedToken {
  userId: number;
  iat: number;
  exp: number;
}

export const generateToken = async (email: string, password: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    const passwordMatch = await bcrypt.compare(
      password,
      user?.password as string
    );

    if (!user || !passwordMatch) {
      throw new Error("Invalid Credentials");
    }

    return jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1hr",
    });
  } catch (err) {
    throw new Error((err as any)?.message);
  }
};

export const validateToken = async (
  token: string | null
): Promise<IValidatedToken | void | null> => {
  if (!token) {
    throw new Error("Invalid Token");
  }
  try {
    const decodedToken: IValidatedToken | void = jwt.verify(
      token.split(" ")[1],
      process.env.JWT_SECRET as string,
      function(err, payload) {
        //@ts-ignore
        if (err) {
          throw new Error(err?.message);
        } else {
          return payload;
        }
      }
    );

    return decodedToken;
  } catch (err) {
    throw new Error((err as any)?.message);
  }
};
