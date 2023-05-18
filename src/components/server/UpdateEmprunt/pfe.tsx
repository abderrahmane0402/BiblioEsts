import { setEpfe } from "@/db/Post/emprunt/etudiant/Epfe";
import { emprunt_pfe_etudiant, emprunt_pfe_prof } from "@prisma/client";

export const empruntPfeE = async (formData: FormData) => {
  try {
    const emprunt  = {
      Cote: (formData.get("pfe") as string) ,
      N_inscription: (formData.get("num_apogee") as string ),
      ID_U: /*Number(formData.get("id_u"))*/ 1,
      DATE_D: new Date(formData.get("date_D") as string),
      DATE_F: new Date(formData.get("date_f") as string),
    };
    await setEpfe(emprunt);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const empruntPfeP = async (formData: FormData) => {
  try {
    const emprunt  = {
      Cote: (formData.get("pfe") as string ),
      Code: formData.get("prof") as string ,
      ID_U: /*Number(formData.get("id_u"))*/ 1,
      DATE_D: new Date(formData.get("date_D") as string),
      DATE_F: new Date(formData.get("date_f") as string),
    };
    await setEpfe(emprunt);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
