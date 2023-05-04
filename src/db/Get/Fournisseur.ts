import prisma from "@/utils/Prisma"

export async function getFournisseurs() {
  try {
    const fournisseur = await prisma.fournisseur.findMany()
    return fournisseur
  } catch (e) {
    throw Error("somthing went wrong" + e)
  }
}

export async function getFournisseur(id: number) {
  try {
    const fournisseur = await prisma.fournisseur.findUnique({
      where: {
        ID_FOR: id,
      },
    })
    return fournisseur
  } catch (e) {
    throw Error("somthing went wrong" + e)
  }
}
