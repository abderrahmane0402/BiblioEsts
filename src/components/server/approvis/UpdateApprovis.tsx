"use server";
import { setApprovi } from "@/db/Post/Aprovis";
import { getUserID } from "@/db/Post/Utilisateur";
import { PutApprovi } from "@/db/Put/Aprovis";
import { Prisma, approvisionement } from "@prisma/client";
import { cookies } from "next/headers";

export default async function UpdateAppro(
  formData: FormData,
    id : number 
) {
  const login = cookies().get("login")?.value;
  const user = await getUserID(login || "");

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
    };
    await PutApprovi(Approvi , id);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
