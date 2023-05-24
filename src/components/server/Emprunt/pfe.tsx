"use server"
import { getUserID } from "@/db/Post/Utilisateur"
import { setEpfe } from "@/db/Post/emprunt/etudiant/Epfe"
import { setPprof } from "@/db/Post/emprunt/prof/Ppfe"
import { cookies } from "next/headers"

export const empruntPfeE = async (formData: FormData) => {
  try {
    const login = cookies().get("login")?.value
    const user = await getUserID(login || "")
    const dated = new Date(formData.get("date_D") as string)
    const datef = new Date(dated.getTime() + 15 * 24 * 60 * 60 * 1000)
    const emprunt = {
      Cote: formData.get("pfe") as string,
      N_inscription: formData.get("num_apoge") as string,
      ID_U: user?.ID_U,
      DATE_D: dated,
      DATE_F: datef,
    }
    await setEpfe(emprunt)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export const empruntPfeP = async (formData: FormData) => {
  try {
    const login = cookies().get("login")?.value
    const code = (formData.get("prof") as string).split(" ")[2]
    const dated = new Date(formData.get("date_D") as string)
    const datef = new Date(dated.getTime() + 15 * 24 * 60 * 60 * 1000)

    const user = await getUserID(login || "")
    const emprunt = {
      Cote: formData.get("pfe") as string,
      Code: code,
      ID_U: user?.ID_U,
      DATE_D: new Date(formData.get("date_D") as string),
      DATE_F: datef,
    }
    await setPprof(emprunt)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
