"use server"

import { setEtudiant } from "@/db/Post/Etudiant"
import { etudiant } from "@prisma/client"

export default async function addEtudiant(formData: FormData) {
  try {
    const etudiant: etudiant = {
      N_APOGEE: Number(formData.get("num_apoge") as string),
      N_inscription: formData.get("num_ins") as string,
      NOM: formData.get("nom") as string,
      PRENOM: formData.get("prenom") as string,
      FILERE: formData.get("filiere") as string,
    }
    await setEtudiant(etudiant)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
