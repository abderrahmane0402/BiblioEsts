import { cookies } from "next/headers"

export async function POST() {
  cookies().set("login", "")
  return new Response("ok")
}
