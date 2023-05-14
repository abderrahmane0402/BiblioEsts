"use server";

import { setCategorie } from "@/db/Post/Categorie";

export default async function addCategorie(data: FormData) {
  try {
    const Categorie = {
      LIBELLE: data.get("libelle") as string,
      SUJET: data.get("sujet") as string,
      CAT_ID_CAT: data.get("categorie") ? Number(data.get("categorie")) : null,
    };
    await setCategorie(Categorie);
    return true;
  } catch (e) {
    console.log(e);

    return false;
  }
}
