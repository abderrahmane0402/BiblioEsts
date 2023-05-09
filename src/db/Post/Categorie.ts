import prisma from "@/utils/Prisma";
import { categorie } from "@prisma/client";

export async function setLivres(categorie: categorie) {
  try {
    const Livres = await prisma.categorie.create({
      data: {
        ...categorie
      },
    });
    await prisma.$disconnect;
    return Livres;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
