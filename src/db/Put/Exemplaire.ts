import prisma from "@/utils/Prisma";
import { exemplaire } from "@prisma/client";

export async function PutExemplaire(exempl_Id: number ,Exemplaires: exemplaire) {
  try {
    await prisma.exemplaire.update({
      where: {
        N_INVENTAIRE: exempl_Id
      },
      data: {
        ...Exemplaires,
       
      }
    });

    await prisma.$disconnect();
  } catch (e) {
    await prisma.$disconnect();
    throw new Error("Something went wrong: " + e);
  }
}
