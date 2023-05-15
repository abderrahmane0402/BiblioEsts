
import prisma from "@/utils/Prisma";

export async function removePFE(id: number) {
  try {
    await prisma.pfe.delete({
      where: {
        IDPFE: id,
      },
    });
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
