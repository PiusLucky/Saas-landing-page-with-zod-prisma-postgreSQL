import { db } from "@/lib/db";
import { error_response, success_response } from "@/lib/response";
import { validateToken } from "@/lib/token";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("Authorization");

    const validatedToken = await validateToken(token);

    const user = await db.user.findUnique({
      where: {
        id: validatedToken?.userId,
      },
      select: {
        id: true,
        email: true,
        full_name: true,
        is_verified: true,
        randomize_channel: true,
        created_at: true,
        updated_at: true,
      },
    });

    return success_response(user, "User profile fetched successfully", 200);
  } catch (err) {
    return error_response((err as any)?.message, 400);
  }
}

export async function POST(req: Request) {
  try {
    const token = req.headers.get("Authorization");

    const validatedToken = await validateToken(token);

    const userAlreadyVerifed = await db.user.findUnique({
      where: {
        id: validatedToken?.userId,
        is_verified: true,
      },
    });

    if (userAlreadyVerifed) {
      return error_response("This user has already been verified", 400);
    }

    const updateUser = await db.user.update({
      where: {
        id: validatedToken?.userId,
      },
      data: {
        is_verified: true,
      },
    });

    return success_response(
      updateUser,
      "User verification status updated successfully",
      200
    );
  } catch (err) {
    return error_response((err as any)?.message, 400);
  }
}
