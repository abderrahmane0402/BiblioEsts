import prisma from "@/utils/Prisma"

export async function getUtilisateurs() {
  try {
    const utilisateurs = await prisma.utilisateur.findMany()
    await prisma.$disconnect
    return utilisateurs
  } catch (e) {
    await prisma.$disconnect
    throw Error("something went wrong with the database" + e)
  }
}

export async function getUtilisateur(id: number) {
  try {
    const utilisateur = await prisma.utilisateur.findUnique({
      where: {
        ID_U: id,
      },
    })
    await prisma.$disconnect
    return utilisateur
  } catch (e) {
    await prisma.$disconnect
    throw Error("something went wrong with the database" + e)
  }
}
