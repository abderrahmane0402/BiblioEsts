import prisma from "@/utils/Prisma"

export async function getLivres() {
  try {
    const Livres = await prisma.livre.findMany({
      include: {
        exemplaire: {
          select: {
            N_INVENTAIRE: true,
            OBSERVATION: true,
          },
        },
        categorie: {
          select: {
            LIBELLE: true,
          },
        },
      },
    })
    console.log(Livres)
    return Livres
  } catch (e) {
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
            OBSERVATION: true,
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
    console.log(Livre)
    return Livre
  } catch (e) {
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
    console.log(Exemplaire)
    return Exemplaire
  } catch (e) {
    throw Error("somthing went wrong" + e)
  }
}
