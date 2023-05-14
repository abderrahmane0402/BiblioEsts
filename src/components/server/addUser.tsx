"use server";

import { setUser } from "@/db/Post/Utilisateur";

export default async function addUser(data: FormData) {
  try {
    const User = {
      NOM: data.get("nom_user") as string,
      PRENOM: data.get("prenom_user") as string,
      TELEPHONE: data.get("telep_user")
        ? Number(data.get("telep_user") as string)
        : null,
      LOGIN: data.get("login_user") as string, // Assign the login value if available
      PASSWORD: data.get("password_user") as string, // Assign the password value if available
    };

    await setUser(User);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
