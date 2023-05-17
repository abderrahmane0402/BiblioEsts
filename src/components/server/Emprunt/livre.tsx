"use server";

import { setElivre } from "@/db/Post/emprunt/etudiant/Elivre";
import { setPlivre } from "@/db/Post/emprunt/prof/Plivre";

export const empruntLivreE = async (formData: FormData) => {
  try {
    const emprunt = {
      N_INVENTAIRE: Number(formData.get("nmr_Inv")),
      N_APOGEE: Number(formData.get("num_apogee")),
      ID_U: /*Number(formData.get("id_u"))*/ 1,
      DATE_D: new Date(formData.get("date_D") as string),
      DATE_F: new Date(formData.get("date_f") as string),
    };
    await setElivre(emprunt);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export async function empruntLivreP(formData: FormData) {
  try {
    const idProf = Number(formData.get("prof")?.toString().split(" ")[0]);
    const emprunt = {
      N_INVENTAIRE: Number(formData.get("nmr_Inv")),
      ID_PROF: idProf,
      ID_U: /*Number(formData.get("id_u"))*/ 1,
      DATE_D: new Date(formData.get("date_D") as string),
      DATE_F: new Date(formData.get("date_f") as string),
    };
    await setPlivre(emprunt);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
