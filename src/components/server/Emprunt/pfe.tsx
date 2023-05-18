import { getUserID } from "@/db/Post/Utilisateur";
import { setEpfe } from "@/db/Post/emprunt/etudiant/Epfe";

export const empruntPfeE = async (formData: FormData, login: string) => {
  try {
    const user = await getUserID(login);
    const emprunt = {
      Cote: formData.get("pfe") as string,
      N_inscription: formData.get("nIns") as string,
      ID_U: user?.ID_U,
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

export const empruntPfeP = async (formData: FormData, login: string) => {
  try {
    const user = await getUserID(login);
    const emprunt = {
      Cote: formData.get("pfe") as string,
      Code: formData.get("prof") as string,
      ID_U: user?.ID_U,
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
