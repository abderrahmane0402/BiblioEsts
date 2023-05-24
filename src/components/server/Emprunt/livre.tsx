"use server"

import { getUserID } from "@/db/Post/Utilisateur"
import { setElivre } from "@/db/Post/emprunt/etudiant/Elivre"
import { setPlivre } from "@/db/Post/emprunt/prof/Plivre"
import { cookies } from "next/headers"

export const empruntLivreE = async (formData: FormData) => {
  try {
    const login = cookies().get("login")?.value
    const user = await getUserID(login || "")
    const dated = new Date(formData.get("date_D") as string)
    const datef = new Date(dated.getTime() + 5 * 24 * 60 * 60 * 1000)
    const emprunt = {
      N_INVENTAIRE: Number(formData.get("nmr_Inv")),
      N_inscription: formData.get("num_apoge") as string,
      ID_U: user?.ID_U,
      DATE_D: dated,
      DATE_F: datef,
    }
    await setElivre(emprunt)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function empruntLivreP(formData: FormData) {
  try {
    const login = cookies().get("login")?.value
    const code = (formData.get("prof") as string).split(" ")[2]
    const user = await getUserID(login || "")
    const dated = new Date(formData.get("date_D") as string)
    const datef = new Date(dated.getTime() + 5 * 24 * 60 * 60 * 1000)
    const emprunt = {
      N_INVENTAIRE: Number(formData.get("nmr_Inv")),
      Code: code,
      ID_U: user?.ID_U,
      DATE_D: dated,
      DATE_F: datef,
    }
    await setPlivre(emprunt)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
