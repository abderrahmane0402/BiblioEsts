"use server"

import { setProf } from "@/db/Post/Prof"

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
