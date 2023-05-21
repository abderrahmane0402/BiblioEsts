import { getUser } from "@/db/Post/Utilisateur";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const user = await getUser(cookies().get("login")!.value);
    return new Response(JSON.stringify(user));
  } catch (error) {
    console.log(error);
    return new Response("error");
  }
}
