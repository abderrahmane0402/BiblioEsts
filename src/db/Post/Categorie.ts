import prisma from "@/utils/Prisma";
import { categorie } from "@prisma/client";

export async function setCategories(categorie: categorie) {
  try {
    await prisma.categorie.create({
      data: {
        ...categorie
      },
    });
    await prisma.$disconnect;
    
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
