"use server";

import { getLivre } from "@/db/Get/Livres";
import { PutLivres } from "@/db/Put/Livre";
import { Prisma, livre } from "@prisma/client";
import { log } from "console";

export default async function updateLivre(data: FormData ,id: number) {
  
  try {
    const livredel = await getLivre(id)
    let  imageName;
    let pdfName;
   
    if(data.get("somaire")){
      await fetch(`http://localhost:3000/api/deletePDF/${livredel?.SOMAIRE}`, {
        method: "DELETE",
        cache: "no-store",
      });
      
    const pdf = new FormData();
    pdf.append("pdf", data.get("somaire") as string );
    const pdfRes = await fetch("http://localhost:3000/api/savePDF", {
      method: "POST",
      body: pdf,
      cache: "no-store",
    });
     pdfName = await pdfRes.json();
     pdfName = pdfName.id
    }
    else 
    {
      imageName = livredel?.SOMAIRE
    }
    
    

    if(data.get("page_garde"))
    {
      await fetch(`http://localhost:3000/api/deleteIMG/${livredel?.PAGE_DE_GARDE}`, {
        method: "DELETE",
        cache: "no-store",
      });
      const img = new FormData();
      img.append("image", data.get("page_garde")as string);
      const res = await fetch("http://localhost:3000/api/saveIMG", {
        method: "POST",
        body: img,
        cache: "no-store",
      });
       imageName = await res.json();
       imageName = imageName.id
    }else {
      imageName = livredel?.PAGE_DE_GARDE
    }
    
   
   
    const livre  : livre= {
      ID_LIVRE: id,
      TITRE: data.get("title") as string,
      AUTHEUR: data.get("autheur") as string,
      EDITEUR: data.get("editeur") as string,
      DATE_EDITION: data.get("date_edi") as number,
      PRIX: new Prisma.Decimal(parseFloat(data.get("prix")!.toString())),
      ID_CAT: Number(data.get("categorie")) as number,
      CODE: data.get("code") ? Number(data.get("code") as string) : null,
      OBSERVATIONL: data.get("observation") as string,
      PAGE_DE_GARDE: `${imageName}` as string,
      SOMAIRE: `${pdfName}` as string,
    };
    
    
    await PutLivres(id,livre);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
