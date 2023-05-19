"use server"
import { setApprovi } from "@/db/Post/Aprovis"
import { getUserID } from "@/db/Post/Utilisateur"
import { Prisma, approvisionement } from "@prisma/client"

export default async function addApprovi(
  formData: FormData,
  login: string,
  livre: Map<number, number>
) {
  const user = await getUserID(login)
  const livres = Array.from(livre, ([key, value]) => ({
    ID_LIVRE: key,
    QTE: value,
  }))
  try {
    const Approvi: approvisionement = {
      ID_APRO: Number(formData.get("appro")),
      ADRESSE: formData.get("addresse") as string,
      DEVIS: new Prisma.Decimal(parseFloat(formData.get("devis") as string)),
      ENTREPRISE: formData.get("entreprise") as string,
      DATE: new Date(formData.get("date") as string),
      ID_FOR: Number(formData.get("fournisseur")),
      ID_U: user!.ID_U,
      TELEPHONE: formData.get("tele") as string,
    }
    await setApprovi(Approvi, livres)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
