"use server"

import { setfournisseur } from "@/db/Post/founisseur"

export default async function addfournisseur(formData: FormData) {
  try {
    const fournisseur = {
      ADDRESSE: formData.get("adresse") as string,
      NOM: formData.get("nom") as string,
      PRENOM: formData.get("prenom") as string,
      GMAIL: formData.get("email") as string,
      TELEPHONE: formData.get("tele") as string,
    }
    await setfournisseur(fournisseur)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
