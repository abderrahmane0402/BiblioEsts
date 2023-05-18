"use server"

import { setProf } from "@/db/Post/Prof"
import { PutProf } from "@/db/Put/Prof"

export default async function updateProf(formData: FormData,id : string) {
  try {
    const prof = {
      Code: formData.get("code") as string,
      NOM: formData.get("nom") as string,
      PRENOM: formData.get("prenom") as string,
      DEPARTEMENT: formData.get("filiere") as string,
    }
    await PutProf(prof,id)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
