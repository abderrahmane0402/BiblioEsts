"use server"
import { setLivres } from "@/db/Post/Livre"
import { Prisma } from "@prisma/client"

export default async function addLivre(data: FormData) {
  try {
    const livre = {
      TITRE: data.get("title") as string,
      AUTHEUR: data.get("autheur") as string,
      EDITEUR: data.get("editeur") as string,
      DATE_EDITION: Number(data.get("date_edi") as string),
      PRIX: new Prisma.Decimal(parseFloat(data.get("prix")!.toString())),
      ID_CAT: Number(data.get("categorie")),
      CODE: data.get("code") ? Number(data.get("code") as string) : null,
      PAGE_DE_GARDE: data.get("page_garde") as string,
      SOMAIRE: data.get("somaire") as string,
    }
    await setLivres(livre)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
