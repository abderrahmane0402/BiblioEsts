// POUR LES PROFESSEURS

import prisma from "@/utils/Prisma"

export async function getPlivreID(id: number) {
  try {
    const emprunt = await prisma.emprunt_livre_prof.findUnique({
      where: {
        IDLP: id,
      },
    })
    await prisma.$disconnect
    return emprunt
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

export async function getPlivre(id: number) {
  try {
    const emprunt = await prisma.emprunt_livre_prof.findFirst({
      include: {
        utilisateur: true,
        prof: true,
        exemplaire: {
          include: {
            livre: {
              include: {
                categorie: {
                  select: {
                    LIBELLE: true,
                  },
                },
              },
            },
          },
        },
      },
      where: {
        IDLP: id,
      },
    })
    await prisma.$disconnect
    return emprunt
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

//* HISTORIQUE DE TOUTE LES EMPRUNTS

export async function Plivre() {
  try {
    const emprunt = await prisma.emprunt_livre_prof.findMany({
      include: {
        utilisateur: {
          select: {
            NOM: true,
            PRENOM: true,
          },
        },
        prof: {
          select: {
            NOM: true,
            PRENOM: true,
          },
        },
      },
      where: {
        DATE_R: {
          not: null,
        },
      },
      orderBy: {
        IDLP: "desc",
      },
    })
    await prisma.$disconnect
    return emprunt
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

//* EMPRUNTS ENCOURS

export async function PlivreEncours() {
  try {
    const emprunt = await prisma.emprunt_livre_prof.findMany({
      include: {
        utilisateur: {
          select: {
            NOM: true,
            PRENOM: true,
          },
        },
        prof: {
          select: {
            NOM: true,
            PRENOM: true,
          },
        },
      },
      where: {
        DATE_R: null,
      },
      orderBy: {
        IDLP: "desc",
      },
    })
    await prisma.$disconnect
    return emprunt
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

// //* LES EMPRUNTS VALIDER

// export async function PlivreShortV() {
//   try {
//     const emprunt =
//       await prisma.$queryRaw`SELECT NOM, PRENOM , N_INVENTAIRE, DATE_R, DATE_D , DATE_F , ID_PROF , OBSERVATIONLP FROM emprunt_livre_prof NATURAL JOIN utilisateur WHERE DATE_R <= DATE_F`
//     await prisma.$disconnect
//     return emprunt
//   } catch (e) {
//     await prisma.$disconnect
//     throw Error("somthing went wrong" + e)
//   }
// }

// export async function PlivreV() {
//   try {
//     const emprunt =
//       await prisma.$queryRaw`SELECT * FROM emprunt_livre_prof NATURAL JOIN utilisateur NATURAL JOIN prof NATURAL JOIN exemplaire NATURAL JOIN livre WHERE DATE_R <= DATE_F`
//     await prisma.$disconnect
//     return emprunt
//   } catch (e) {
//     await prisma.$disconnect
//     throw Error("somthing went wrong" + e)
//   }
// }

// //* LES EMPRUNTS EN RETARD

// export async function PlivreShortR() {
//   try {
//     const emprunt =
//       await prisma.$queryRaw`SELECT NOM, PRENOM , N_INVENTAIRE, DATE_R, DATE_D , DATE_F , ID_PROF , OBSERVATIONLP FROM emprunt_livre_prof NATURAL JOIN utilisateur WHERE DATE_R > DATE_F`
//     await prisma.$disconnect
//     return emprunt
//   } catch (e) {
//     await prisma.$disconnect
//     throw Error("somthing went wrong" + e)
//   }
// }

// export async function PlivreR() {
//   try {
//     const emprunt =
//       await prisma.$queryRaw`SELECT * FROM emprunt_livre_prof NATURAL JOIN utilisateur NATURAL JOIN prof NATURAL JOIN exemplaire NATURAL JOIN livre WHERE DATE_R > DATE_F`
//     await prisma.$disconnect
//     return emprunt
//   } catch (e) {
//     await prisma.$disconnect
//     throw Error("somthing went wrong" + e)
//   }
// }
