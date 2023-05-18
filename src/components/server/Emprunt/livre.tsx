"use server";

import { getUserID } from "@/db/Post/Utilisateur";
import { setElivre } from "@/db/Post/emprunt/etudiant/Elivre";
import { setPlivre } from "@/db/Post/emprunt/prof/Plivre";

export const empruntLivreE = async (formData: FormData, login: string) => {
  try {
    const user = await getUserID(login);
    const emprunt = {
      N_INVENTAIRE: Number(formData.get("nmr_Inv")),
      N_inscription: formData.get("num_apogee") as string,
      ID_U: user?.ID_U,
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

export async function empruntLivreP(formData: FormData, login: string) {
  try {
    const user = await getUserID(login);
    const emprunt = {
      N_INVENTAIRE: Number(formData.get("nmr_Inv")),
      Code: formData.get("prof") as string,
      ID_U: user?.ID_U,
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
