// POUR LES ETUDIANTS

import prisma from "@/utils/Prisma";
import { emprunt_livre_prof } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function PutPlivre(Plivre: any, id: number) {
  try {
    await prisma.emprunt_livre_prof.update({
      where: {
        IDLP: id,
      },
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

export async function ConfirmePlivre(date: Date, id: number) {
  try {
    await prisma.emprunt_livre_prof.update({
      where: {
        IDLP: id,
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
