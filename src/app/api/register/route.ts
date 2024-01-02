import { db } from "@/lib/db";
import { error_response, success_response } from "@/lib/response";
import { generateRandomNumber } from "@/lib/utils";
import { CreateUserInputValidation } from "@/lib/validations";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, full_name, password } = body;

    const inputValidation = CreateUserInputValidation.safeParse(body);

    if (!inputValidation.success) {
      return error_response(
        "Input validation failed",
        400,
        inputValidation.error
      );
    }

    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return error_response("User with this email already exists", 400);
    }

    const hashedUserPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        email,
        full_name,
        is_verified: false,
        password: hashedUserPassword,
        randomize_channel: generateRandomNumber(),
      },
    });

    return success_response(
      newUser,
      "User created successfully, kindly proceed to login",
      201
    );
  } catch (err) {
    return error_response((err as any)?.message, 400);
  }
}
