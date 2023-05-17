// POUR LES ETUDIANTS

import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache";

export async function setElivre(Elivre: any) {
  try {
    await prisma.emprunt_livre_etudiant.create({
      data: {
        ...Elivre,
      },
    });
    revalidatePath("/emprunt/etudiant/livre/encours");
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
