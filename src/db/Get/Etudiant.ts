import prisma from "@/utils/Prisma"

export async function getEtudiant(id: number) {
  try {
    const etudiant = await prisma.etudiant.findUnique({
      where: {
        N_APOGEE: id,
      },
    })
    return etudiant
  } catch (e) {
    throw Error("somthing went wrong" + e)
  }
}

export async function getEtudiants() {
  try {
    const etudiants = await prisma.etudiant.findMany()
    return etudiants
  } catch (e) {
    throw Error("somthing went wrong" + e)
  }
}
