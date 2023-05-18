"use server"

import { setEtudiant } from "@/db/Post/Etudiant"
import { setProf } from "@/db/Post/Prof"
import { etudiant, prof } from "@prisma/client"

export default async function addProf(formData: FormData) {
  try {
    const prof = {
      Code: formData.get("code") as string,
      NOM: formData.get("nom") as string,
      PRENOM: formData.get("prenom") as string,
      DEPARTEMENT: formData.get("filiere") as string,
    }
    await setProf(prof)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
