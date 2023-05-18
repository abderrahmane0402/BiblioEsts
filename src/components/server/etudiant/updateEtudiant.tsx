"use server"

import { PutEtudiant } from "@/db/Put/Etudiant"

export default async function updateEtudiant(formData: FormData, id: number) {
  try {
    const etudiant = {
      N_APOGEE: Number(formData.get("num_apoge") as string),
      N_inscription: formData.get("num_ins") as string,
      NOM: formData.get("nom") as string,
      PRENOM: formData.get("prenom") as string,
      FILERE: formData.get("filiere") as string,
    }
    await PutEtudiant(etudiant,id)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
