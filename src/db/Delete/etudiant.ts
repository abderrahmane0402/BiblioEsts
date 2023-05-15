import prisma from "@/utils/Prisma";

export async function removeEtudiant(id: number) {
  try {
    await prisma.etudiant.delete({
      where: {
        N_APOGEE: id,
      },
    });
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}