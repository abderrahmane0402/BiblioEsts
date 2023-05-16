"use server";
import { setPfe } from "@/db/Post/Pfe";

export default async function addPfe(data: FormData) {
  try {
    const Pfe = {
      SUJET: data.get("sujet") as string,
      REALISATEUR: data.get("realisateur") as string,
      ENCADRANT: data.get("encadrant") as string,
      DATE_REALISATION: parseInt(data.get("date_realis") as string) || null,
    };
    await setPfe(Pfe);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
