
import prisma from "@/utils/Prisma";

export async function removeExemplaire(id: number) {
  try {
    await prisma.exemplaire.delete({
      where: {
        N_INVENTAIRE: id,
      },
    });
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
