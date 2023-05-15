import prisma from "@/utils/Prisma";
import { utilisateur } from "@prisma/client";

export async function PutUtilisateur(utilisateur_Id: number ,Utilisateur: utilisateur) {
  try {
    await prisma.utilisateur.update({
      where: {
        ID_U : utilisateur_Id
      },
      data: {
        ...Utilisateur,
       
      }
    });

    await prisma.$disconnect();
  } catch (e) {
    await prisma.$disconnect();
    throw new Error("Something went wrong: " + e);
  }
}
