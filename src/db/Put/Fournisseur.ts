import prisma from "@/utils/Prisma";
import { fournisseur } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function PutFournisseur(fournisseur_Id: number ,Fournisseur: fournisseur) {
  try {
    await prisma.fournisseur.update({
      where: {
        ID_FOR : fournisseur_Id
      },
      data: {
        ...Fournisseur,
       
      }
    });
      revalidatePath("/fournisseur")
    await prisma.$disconnect();
  } catch (e) {
    await prisma.$disconnect();
    throw new Error("Something went wrong: " + e);
  }
}
