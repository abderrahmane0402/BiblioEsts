"use server"

import { getLivre } from "@/db/Get/Livres"
import { PutLivres } from "@/db/Put/Livre"
import { Prisma, livre } from "@prisma/client"

export default async function updateLivre(
  data: FormData,
  id: number,
  garde: any,
  som: any
) {
  try {
    const livredel = await getLivre(id)
    let imageName
    let pdfName

    if (garde) {
      imageName = garde
    } else {
      imageName = livredel?.PAGE_DE_GARDE
    }

    if (som) {
      pdfName = som
    } else {
      pdfName = livredel?.SOMAIRE
    }

    const livre: livre = {
      ID_LIVRE: id,
      TITRE: data.get("title") as string,
      AUTHEUR: data.get("autheur") as string,
      EDITEUR: data.get("editeur") as string,
      DATE_EDITION: Number(data.get("date_edi") as string),
      PRIX: new Prisma.Decimal(parseFloat(data.get("prix")!.toString())),
      ID_CAT: Number(data.get("categorie")) as number,
      CODE: data.get("code") ? Number(data.get("code") as string) : null,
      OBSERVATIONL: data.get("observation") as string,
      PAGE_DE_GARDE: imageName,
      SOMAIRE: pdfName,
    }

    await PutLivres(id, livre)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
