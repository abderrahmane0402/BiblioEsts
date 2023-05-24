import { setExemplaire } from "@/db/Post/Livre"

export async function POST(req: Request) {
  try {
    const { id, exe } = await req.json()
    await setExemplaire({ N_INVENTAIRE: exe, ID_LIVRE: id, OBSERVATIONE: null })
    return new Response("ok")
  } catch (error) {
    console.log(error)
    return new Response("error")
  }
}
