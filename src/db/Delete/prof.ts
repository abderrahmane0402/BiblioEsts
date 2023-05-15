import prisma from "@/utils/Prisma";

export async function removeProf(id: number) {
  try {
    await prisma.prof.delete({
      where: {
        ID_PROF: id,
      },
    });
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
