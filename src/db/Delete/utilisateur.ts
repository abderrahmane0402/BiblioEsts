import prisma from "@/utils/Prisma";

export async function removeUser(id: number) {
  try {
    await prisma.utilisateur.delete({
      where: {
        ID_U: id,
      },
    });
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
