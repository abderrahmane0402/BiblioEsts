import prisma from "@/utils/Prisma"

export async function getLivres() {
  try {
    const Livres = await prisma.livre.findMany({
      include: {
        exemplaire: {
          select: {
            N_INVENTAIRE: true,
            OBSERVATIONE: true,
          },
        },
        categorie: {
          select: {
            LIBELLE: true,
          },
        },
      },
    })
    await prisma.$disconnect
    return Livres
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

export async function getLivre(id: number) {
  try {
    const Livre = await prisma.livre.findFirst({
      include: {
        exemplaire: {
          select: {
            N_INVENTAIRE: true,
            OBSERVATIONE: true,
          },
        },
        categorie: {
          select: {
            LIBELLE: true,
          },
        },
      },
      where: {
        ID_LIVRE: id,
      },
    })
    await prisma.$disconnect
    return Livre
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

export async function getExemplaire(id: number) {
  try {
    const Exemplaire = await prisma.exemplaire.findFirst({
      where: {
        N_INVENTAIRE: id,
      },
    })
    await prisma.$disconnect
    return Exemplaire
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
export async function getExemplaires() {
  try {
    const Exemplaire = await prisma.exemplaire.findMany()
    await prisma.$disconnect
    return Exemplaire
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}