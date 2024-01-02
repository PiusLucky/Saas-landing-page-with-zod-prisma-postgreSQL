import { db } from "@/lib/db";
import { error_response, success_response } from "@/lib/response";
import { validateToken } from "@/lib/token";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("Authorization");

    await validateToken(token);

    const users = await db.user.findMany({
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

    return success_response(users, "Users listing fetched successfully", 200);
  } catch (err) {
    return error_response((err as any)?.message, 400);
  }
}
