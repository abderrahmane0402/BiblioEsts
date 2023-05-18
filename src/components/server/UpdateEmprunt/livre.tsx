"use server";

import { getElivreID } from "@/db/Get/emprunt/etudiant/Elivre";
import { getPlivreID } from "@/db/Get/emprunt/prof/Plivre";
import { getPpfeID } from "@/db/Get/emprunt/prof/Ppfe";
import { getUserID } from "@/db/Post/Utilisateur";
import { PutElivre } from "@/db/Put/emprunt/etudiant/Elivre";
import { PutPlivre } from "@/db/Put/emprunt/prof/Plivre";

export const UpdateEmpruntLivreE = async (formData: FormData,id : number,login : string ) => {
  try {
    const emp = await getElivreID(id)
    let d,f;
    if(formData.get("date_D")){
      d = formData.get("date_D")
    }
    else {
      d=emp?.DATE_D;
    }
    if(formData.get("date_f")){
      f = formData.get("date_f")
    }
    else {
      f=emp?.DATE_F;
    }
    const user = await getUserID(login);
    const emprunt = {
      N_INVENTAIRE: Number(formData.get("nmr_Inv")),
      N_inscription: formData.get("num_apogee") as string,
      ID_U: user?.ID_U,
      DATE_D: d ,
      DATE_F: f,
    };
    await PutElivre(emprunt, id );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export async function UpdateEmpruntLivreP(formData: FormData,id : number,login : string ) {
  try {
    const  emp = await getPlivreID(id)
    const user = await getUserID(login);
    let d,f;
    if(formData.get("date_D")){
      d = formData.get("date_D")
    }
    else {
      d=emp?.DATE_D;
    }
    if(formData.get("date_f")){
      f = formData.get("date_f")
    }
    else {
      f=emp?.DATE_F;
    }
    const emprunt = {
      N_INVENTAIRE: Number(formData.get("nmr_Inv")),
      Code: formData.get("prof") as string,
      ID_U: user?.ID_U,
      DATE_D: d ,
      DATE_F: f,
    };
    await PutPlivre(emprunt,id);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
