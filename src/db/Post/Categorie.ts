import prisma from "@/utils/Prisma";

export async function setCategorie(categorie: any) {
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
