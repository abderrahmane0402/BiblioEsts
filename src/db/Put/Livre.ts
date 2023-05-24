import prisma from "@/utils/Prisma";

export async function PutLivres(livreId: number, Livre: any ) {
  try {
    await prisma.livre.update({
      where: {
        ID_LIVRE : livreId 
      },
      data: {
        ...Livre,
       
      }
    });
    await prisma.$disconnect();
  } catch (e) {
    await prisma.$disconnect();
    throw new Error("Something went wrong: " + e);
  }
}
