import prisma from "@/utils/Prisma";

export async function removeLivre(id: number) {
  try {
    await prisma.livre.delete({
      where: {
        ID_LIVRE: id,
      },
    });
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
