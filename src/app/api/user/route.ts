import { getUser } from "@/db/Post/Utilisateur";

export async function POST(req: Request) {
  try {
    const id = await req.json();
    const user = await getUser(id.login);
    return new Response(JSON.stringify(user));
  } catch (error) {
    console.log(error);
    return new Response("error");
  }
}
