"use server"

import { PutFournisseur } from "@/db/Put/Fournisseur"
import { fournisseur } from "@prisma/client"

export default async function updatefournisseur(formData: FormData, id : number) {
  try {
    const fournisseur   = {
      ADDRESSE: formData.get("adresse") as string,
      NOM: formData.get("nom") as string,
      PRENOM: formData.get("prenom") as string,
      GMAIL: formData.get("email") as string,
      TELEPHONE: formData.get("tele") as string,
    }
    await PutFournisseur(id,fournisseur)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
