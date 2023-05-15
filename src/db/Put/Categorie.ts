import prisma from "@/utils/Prisma";
import { categorie } from "@prisma/client";

export async function PutCategorie(categorie_Id: number ,Categorie: categorie) {
  try {
    await prisma.categorie.update({
      where: {
        ID_CAT: categorie_Id
      },
      data: {
        ...Categorie,
       
      }
    });

    await prisma.$disconnect();
  } catch (e) {
    await prisma.$disconnect();
    throw new Error("Something went wrong: " + e);
  }
}
