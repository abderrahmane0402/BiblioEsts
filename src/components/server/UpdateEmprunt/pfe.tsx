"use server";
import { getUserID } from "@/db/Post/Utilisateur";
import { PutEpfe } from "@/db/Put/emprunt/etudiant/Epfe";
import { PutPprof } from "@/db/Put/emprunt/prof/Ppfe";
import { cookies } from "next/headers";

export const UpdateEmpruntPfeE = async (formData: FormData, id: number) => {
  try {
    const login = cookies().get("login")?.value;
    const user = await getUserID(login || "");
    let date_r ;
    if(formData.get("date_r"))
    {
      date_r= new Date(formData.get("date_r") as string ) ;
    }else
    {
      date_r = null
    }
   
    const emprunt    = {
      Cote: formData.get("pfe") as string ,
      N_inscription: formData.get("num_apoge") as string,
      ID_U: user?.ID_U,
      DATE_D: new Date(formData.get("date_D") as string),
      DATE_F: new Date(formData.get("date_f") as string),
      DATE_R :date_r,

    };
    await PutEpfe(emprunt, id);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const UpdateEmpruntPfeP = async (formData: FormData, id: number) => {
  try {
    const login = cookies().get("login")?.value;
    const user = await getUserID(login || "");
    let date_r ;
    if(formData.get("date_r"))
    {
      date_r= new Date(formData.get("date_r") as string ) ;
    }else
    {
      date_r = null
    }
   
    const emprunt = {
      Cote: formData.get("pfe") as string,
      Code: formData.get("prof") as string,
      ID_U: user?.ID_U,
      DATE_D: new Date(formData.get("date_D") as string),
      DATE_F: new Date(formData.get("date_f") as string),
      DATE_R :date_r,
    };
    await PutPprof(emprunt, id);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
