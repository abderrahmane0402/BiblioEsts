"use server";
import { setLivres } from "@/db/Post/Livre";
import { Prisma, livre } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function addLivre(
  data: FormData,
  ex: Map<number, string>,
  garde : any
) {


  try {
    //   const img = new FormData();
    //   img.append("image", data.get("page_garde") || "");
    //   const res = await fetch("http://localhost:3000/api/saveIMG", {
    //     method: "POST",
    //     body: img,
    //     cache: "no-store",
    //   });
    // const imageName = await res.json();
    // const pdf = new FormData();
    // pdf.append("pdf", data.get("somaire") || "");
    // const pdfRes = await fetch("http://localhost:3000/api/savePDF", {
    //   method: "POST",
    //   body: pdf,
    //   cache: "no-store",
    // });
    // const pdfName = await pdfRes.json();
    const livre   = {
      TITRE: data.get("title") as string,
      AUTHEUR: data.get("autheur") as string,
      EDITEUR: data.get("editeur") as string,
      DATE_EDITION: Number(data.get("date_edi") as string),
      PRIX: new Prisma.Decimal(parseFloat(data.get("prix")!.toString())),
      ID_CAT: Number(data.get("categorie")),
      CODE: data.get("code") ? Number(data.get("code") as string) : null,
      // OBSERVATIONL: data.get("observation") as string,
      PAGE_DE_GARDE: garde  ,
      // SOMAIRE: `${pdfName.id}` as string,
    };
    let exemplaire = Array.from(ex, ([key, value]) => ({
      N_INVENTAIRE: key,
      OBSERVATIONE: value,
    }));
    await setLivres(livre, exemplaire);
    revalidatePath("/livre");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
