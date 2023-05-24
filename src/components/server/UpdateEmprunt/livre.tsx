"use server";

import { getUserID } from "@/db/Post/Utilisateur";
import { PutElivre } from "@/db/Put/emprunt/etudiant/Elivre";
import { PutPlivre } from "@/db/Put/emprunt/prof/Plivre";
import { cookies } from "next/headers";

export const UpdateEmpruntLivreE = async (formData: FormData, id: number) => {
  try {
    let date_r ;
    if(formData.get("date_r"))
    {
      date_r= new Date(formData.get("date_r") as string ) ;

    }else
    {
      date_r = null
    }
    const login = cookies().get("login")?.value;
    const user = await getUserID(login || "");
    const emprunt   = {
      N_INVENTAIRE: Number(formData.get("nmr_Inv")),
      N_inscription: formData.get("num_apogee") as string,
      ID_U: user?.ID_U,
      DATE_D: new Date(formData.get("date_D") as string),
      DATE_F: new Date(formData.get("date_f") as string),
      DATE_R : date_r,

    };
    await PutElivre(emprunt, id);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export async function UpdateEmpruntLivreP(formData: FormData, id: number) {
  try {
    let date_r ;
    if(formData.get("date_r"))
    {
      date_r= new Date(formData.get("date_r") as string ) ;
    }else
    {
      date_r = null
    }
    
    const code = (formData.get("prof") as string).split(" ")[2]
   
    const login = cookies().get("login")?.value;
    const user = await getUserID(login || "");
  
    const emprunt = {
      N_INVENTAIRE: Number(formData.get("nmr_Inv")),
      Code: code,
      ID_U: user?.ID_U,
      DATE_D: new Date(formData.get("date_D") as string),
      DATE_F: new Date(formData.get("date_f") as string),
      DATE_R :date_r,
    };
    await PutPlivre(emprunt, id);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
