import { setLivres } from "@/db/Post/Livre"
import { PutLivres } from "@/db/Put/Livre"

export async function POST(req: Request) {
  try {
    const { data, img, pdf } = await req.json()
    const livre = {
      ...data,
      PAGE_DE_GARDE: img,
      SOMAIRE: pdf,
    }
    await setLivres(livre)
    return new Response(JSON.stringify("ok"))
  } catch (error) {
    console.log(error)
  }
}

export async function PUT(req: Request) {
  try {
    const { data, img, pdf } = await req.json()
    if (img) data.PAGE_DE_GARDE = img
    if (pdf) data.SOMAIRE = pdf
    await PutLivres(data.ID_LIVRE, data)
    return new Response(JSON.stringify("ok"))
  } catch (error) {
    console.log(error)
  }
}
