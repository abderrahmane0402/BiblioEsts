"use server";

import { PutLivres } from "@/db/Put/Livre";
import { Prisma, livre } from "@prisma/client";

export default async function updateLivre(data: FormData ,id: number) {
  
  try {
    
    const img = new FormData();
    img.append("image", data.get("page_garde")as string);
    const res = await fetch("http://localhost:3000/api/saveIMG", {
      method: "PUT",
      body: img,
      cache: "no-store",
    });
    const imageName = await res.json();
    const pdf = new FormData();
    pdf.append("pdf", data.get("somaire") as string );
    const pdfRes = await fetch("http://localhost:3000/api/savePDF", {
      method: "PUT",
      body: pdf,
      cache: "no-store",
    });
    const pdfName = await pdfRes.json();
    const livre  : livre= {
      ID_LIVRE: id,
      TITRE: data.get("title") as string,
      AUTHEUR: data.get("autheur") as string,
      EDITEUR: data.get("editeur") as string,
      DATE_EDITION: new Date(data.get("date_edi") as string ),
      PRIX: new Prisma.Decimal(parseFloat(data.get("prix")!.toString())),
      ID_CAT: Number(data.get("categorie")) ,
      CODE: data.get("code") ? Number(data.get("code") as string) : null,
      OBSERVATIONL: data.get("observation") as string,
      PAGE_DE_GARDE: `${imageName.id}` as string,
      SOMAIRE: `${pdfName.id}` as string,
    };
    console.log(livre);
    
    await PutLivres(id,livre);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
