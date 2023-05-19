'use server'
import { getEpfeID } from "@/db/Get/emprunt/etudiant/Epfe";
import { getPpfeID } from "@/db/Get/emprunt/prof/Ppfe";
import { getUserID } from "@/db/Post/Utilisateur";
import { PutEpfe } from "@/db/Put/emprunt/etudiant/Epfe";

export const UpdateEmpruntPfeE = async (formData: FormData , id : number, login : string) => {
  try {
    const user = await getUserID(login);
    const emp =await getEpfeID(id);
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
    const emprunt  = {
      Cote: (formData.get("pfe") as string) ,
      N_inscription: (formData.get("num_apogee") as string ),
      ID_U: user?.ID_U,
      DATE_D: d ,
      DATE_F: f,
    };
    await PutEpfe(emprunt, id );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const UpdateEmpruntPfeP = async (formData: FormData, id : number,login : string ) => {
  try {
    const emp = await getPpfeID(id)
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
    const emprunt  = {
      Cote: (formData.get("pfe") as string ),
      Code: formData.get("prof") as string ,
      ID_U: user?.ID_U,
      DATE_D: d ,
      DATE_F: f,
    };
    await PutEpfe(emprunt,id );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
