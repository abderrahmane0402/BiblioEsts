import { getLivres, getLivresShort } from "@/db/Get/Livres"

export async function GET() {
  try {
    const Livre = await getLivresShort()
    return new Response(JSON.stringify(Livre))
  } catch (error) {
    console.log(error)
    return false
  }
}
