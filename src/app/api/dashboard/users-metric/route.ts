import { db } from "@/lib/db";
import { error_response, success_response } from "@/lib/response";
import { validateToken } from "@/lib/token";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("Authorization");
  
    await validateToken(token);

    const totalUsers = await db.user.count();
    const totalVerifiedUsers = await db.user.count({
      where: {
        is_verified: true,
      },
    });

    const totalChannels = await db.user.aggregate({
      _sum: {
        randomize_channel: true,
      },
    });

    return success_response(
      {
        totalUsers,
        totalVerifiedUsers,
        totalChannels: totalChannels._sum.randomize_channel,
      },
      "Users metric fetched successfully",
      200
    );
  } catch (err) {
    return error_response((err as any)?.message, 400);
  }
}
