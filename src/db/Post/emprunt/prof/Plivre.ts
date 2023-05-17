// POUR LES ETUDIANTS

import prisma from "@/utils/Prisma";
import { emprunt_livre_prof } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function setPlivre(Plivre: any) {
  try {
    await prisma.emprunt_livre_prof.create({
      data: {
        ...Plivre,
      },
    });
    revalidatePath("/emprunt/prof/livre/encours");
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
