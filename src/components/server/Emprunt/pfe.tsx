import { setEpfe } from "@/db/Post/emprunt/etudiant/Epfe";
import { emprunt_pfe_prof } from "@prisma/client";

export const empruntPfeE = async (formData: FormData) => {
  try {
    const emprunt = {
      IDPFE: Number(formData.get("pfe")),
      N_APOGEE: Number(formData.get("num_apogee")),
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
    const idProf = Number(formData.get("prof")?.toString().split(" ")[0]);
    const emprunt = {
      IDPFE: Number(formData.get("pfe")),
      ID_PROF: idProf,
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
