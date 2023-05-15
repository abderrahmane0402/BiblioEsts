"use server";

import { PutUtilisateur } from "@/db/Put/Utilisateur";
import { utilisateur } from "@prisma/client";

export default async function UpdateUser(data: FormData, id: number) {
  try {
    const User: utilisateur = {
      ID_U: id,
      NOM: data.get("nom_user") as string,
      PRENOM: data.get("prenom_user") as string,
      TELEPHONE: data.get("telep_user")
        ? Number(data.get("telep_user") as string)
        : null,
      LOGIN: data.get("login_user") as string, // Assign the login value if available
      PASSWORD: data.get("password_user") as string, // Assign the password value if available
    };

    await PutUtilisateur(id, User);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
