"use server";

import { setElivre } from "@/db/Post/emprunt/etudiant/Elivre";
import { setPlivre } from "@/db/Post/emprunt/prof/Plivre";
import { PutElivre } from "@/db/Put/emprunt/etudiant/Elivre";

export const UpdateEmpruntLivreE = async (formData: FormData,id : number ) => {
  try {
    const emprunt = {
      N_INVENTAIRE: Number(formData.get("nmr_Inv")),
      N_inscription: formData.get("num_apogee") as string,
      ID_U: /*Number(formData.get("id_u"))*/ 1,
      DATE_D: new Date(formData.get("date_D") as string),
      DATE_F: new Date(formData.get("date_f") as string),
    };
    await PutElivre(emprunt, id );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export async function UpdateEmpruntLivreP(formData: FormData) {
  try {
    const emprunt = {
      N_INVENTAIRE: Number(formData.get("nmr_Inv")),
      Code: formData.get("prof") as string,

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
