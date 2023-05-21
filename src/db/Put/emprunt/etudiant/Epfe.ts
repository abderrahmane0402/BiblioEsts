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
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}


export async function ConfirmeEpfe(date: Date, id: number) {
  try {
    await prisma.emprunt_pfe_etudiant.update({
      where: {
        IDPE: id,
      },
      data: {
        DATE_R: date,
      },
    });
    await prisma.$disconnect;
  } catch (error) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + error);
  }
}
