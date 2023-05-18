"use server";
import { setPfe } from "@/db/Post/Pfe";
import { pfe } from "@prisma/client";

export default async function addPfe(data: FormData) {
  try {
    const Pfe : pfe= {
      Cote :  data.get("cote") as string,
      SUJET: data.get("sujet") as string,
      REALISATEUR: data.get("realisateur") as string,
      ENCADRANT: data.get("encadrant") as string,
      Filiere : data.get("filiere") as string,
      DATE_REALISATION: parseInt(data.get("date_realis") as string) || null,
    };
    await setPfe(Pfe);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
