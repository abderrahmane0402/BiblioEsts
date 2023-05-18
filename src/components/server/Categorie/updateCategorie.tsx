"use server";

import { getCategorie } from "@/db/Get/Categorie";
import { setCategorie } from "@/db/Post/Categorie";
import { PutCategorie } from "@/db/Put/Categorie";
import { categorie } from "@prisma/client";

export default async function updateCategorie(data: FormData, id : number) {

  try {
    const categorie = await getCategorie(id);
    let  cat  
    if(data.get("categorie"))
    {
        cat = data.get("categorie") as string
    }
    else {
        cat =  categorie!.ID_CAT 
    }
    const Categorie = {
    ID_CAT : id,
      LIBELLE: data.get("libelle") as string,
      SUJET: data.get("sujet") as string,
      CAT_ID_CAT: cat as number,
    };
    await PutCategorie(id,Categorie);
    return true;
  } catch (e) {
    console.log(e);

    return false;
  }
}
