import prisma from "@/utils/Prisma";

export async function removeCat(id: number) {
  try {
    await prisma.categorie.delete({
      where: {
        ID_CAT: id,
      },
    });
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
