// POUR LES ETUDIANTS

import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache";

export async function PutEpfe(Epfe: any , id : number) {
  try {
    await prisma.emprunt_pfe_etudiant.update({
      where :{
          IDPE : id
      },
      data: {
        ...Epfe,
      },
    });
    revalidatePath("/emprunt/etudiant/pfe/encours");
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
