import prisma from "@/utils/Prisma"

export async function getFournisseurs() {
  try {
    const fournisseur = await prisma.fournisseur.findMany()
    await prisma.$disconnect
    return fournisseur
  } catch (e) {
    await prisma.$disconnect
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
    await prisma.$disconnect
    return fournisseur
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

export async function getFournisseurShort() {
  try {
    const fournisseur = await prisma.fournisseur.findMany({
      select: {
        ID_FOR: true,
        NOM: true,
        PRENOM: true,
      },
    })
    await prisma.$disconnect
    return fournisseur
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
