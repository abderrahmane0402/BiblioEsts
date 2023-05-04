import prisma from "@/utils/Prisma"

export async function getUtilisateurs() {
  try {
    const utilisateurs = await prisma.utilisateur.findMany()
    return utilisateurs
  } catch (e) {
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
    return utilisateur
  } catch (e) {
    throw Error("something went wrong with the database" + e)
  }
}
