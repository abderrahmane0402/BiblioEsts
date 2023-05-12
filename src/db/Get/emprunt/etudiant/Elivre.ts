// POUR LES ETUDIANTS

import prisma from "@/utils/Prisma"

export async function getElivre(id: number) {
  try {
    const emprunt = await prisma.emprunt_livre_etudiant.findFirst({
      include: {
        etudiant: true,
        exemplaire: {
          include: {
            livre: {
              select: {
                AUTHEUR: true,
                EDITEUR: true,
                TITRE: true,
                PAGE_DE_GARDE: true,
                DATE_EDITION: true,
              },
            },
          },
        },
      },
      where: {
        IDLE: id,
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

export async function Elivre() {
  try {
    const emprunt = await prisma.emprunt_livre_etudiant.findMany({
      include: {
        utilisateur: {
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
    })
    await prisma.$disconnect
    return emprunt
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

//* EMPRUNTS ENCOURS

export async function ElivreEncours() {
  try {
    const emprunt = await prisma.emprunt_livre_etudiant.findMany({
      include: {
        utilisateur: {
          select: {
            NOM: true,
            PRENOM: true,
          },
        },
      },
      where: {
        DATE_R: null,
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

// export async function ElivreShortV() {
//   try {
//     const emprunt =
//       await prisma.$queryRaw`SELECT NOM, PRENOM , N_INVENTAIRE, DATE_R, DATE_D , DATE_F , N_APOGEE , OBSERVATIONLE FROM emprunt_livre_etudiant NATURAL JOIN utilisateur WHERE DATE_R <= DATE_F `
//     await prisma.$disconnect
//     return emprunt
//   } catch (e) {
//     await prisma.$disconnect
//     throw Error("somthing went wrong" + e)
//   }
// }

// export async function ElivreV(id: number) {
//   try {
//     const emprunt =
//       await prisma.$queryRaw`SELECT * FROM emprunt_livre_etudiant NATURAL JOIN utilisateur NATURAL JOIN etudiant NATURAL JOIN exemplaire NATURAL JOIN livre WHERE DATE_R <= DATE_F AND IDLE = ${id}`
//     await prisma.$disconnect
//     return emprunt
//   } catch (e) {
//     await prisma.$disconnect
//     throw Error("somthing went wrong" + e)
//   }
// }

// //* LES EMPRUNTS EN RETARD

// export async function ElivreShortR() {
//   try {
//     const emprunt =
//       await prisma.$queryRaw`SELECT NOM, PRENOM , N_INVENTAIRE, DATE_R, DATE_D , DATE_F , N_APOGEE , OBSERVATIONLE FROM emprunt_livre_etudiant NATURAL JOIN utilisateur WHERE DATE_R > DATE_F`
//     await prisma.$disconnect
//     return emprunt
//   } catch (e) {
//     await prisma.$disconnect
//     throw Error("somthing went wrong" + e)
//   }
// }

// export async function ElivreR(id: number) {
//   try {
//     const emprunt =
//       await prisma.$queryRaw`SELECT * FROM emprunt_livre_etudiant NATURAL JOIN utilisateur NATURAL JOIN etudiant NATURAL JOIN exemplaire NATURAL JOIN livre WHERE DATE_R > DATE_F AND IDLE = ${id}`
//     await prisma.$disconnect
//     return emprunt
//   } catch (e) {
//     await prisma.$disconnect
//     throw Error("somthing went wrong" + e)
//   }
// }
