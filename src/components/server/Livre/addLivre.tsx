"use server";

import { setLivres } from "@/db/Post/Livre";
import { exemplaire } from "@/types";
import { Prisma } from "@prisma/client";

export default async function addLivre(data: FormData) {
  try {
    const img = new FormData();
    img.append("image", data.get("page_garde"));
    const res = await fetch("http://localhost:3000/api/saveIMG", {
      method: "POST",
      body: img,
      cache: "no-store",
    });
    const imageName = await res.json();
    const pdf = new FormData();
    pdf.append("pdf", data.get("somaire"));
    const pdfRes = await fetch("http://localhost:3000/api/savePDF", {
      method: "POST",
      body: pdf,
      cache: "no-store",
    });
    const pdfName = await pdfRes.json();
    const livre = {
      TITRE: data.get("title") as string,
      AUTHEUR: data.get("autheur") as string,
      EDITEUR: data.get("editeur") as string,
      DATE_EDITION: new Date(data.get("date_edi")),
      PRIX: new Prisma.Decimal(parseFloat(data.get("prix")!.toString())),
      ID_CAT: Number(data.get("categorie")),
      CODE: data.get("code") ? Number(data.get("code") as string) : null,
      OBSERVATIONL: data.get("observation") as string,
      PAGE_DE_GARDE: `${imageName.id}` as string,
      SOMAIRE: `${pdfName.id}` as string,
    };
    let ex = JSON.parse(data.get("exemplaire")!.toString());
    const exemplaire: exemplaire[] = ex.map((e: exemplaire) => {
      return {
        N_INVENTAIRE: e.N_INVENTAIRE,
        OBSERVATIONE: e.OBSERVATIONE,
      };
    });
    await setLivres(livre, exemplaire);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}