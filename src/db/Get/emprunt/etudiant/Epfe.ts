// POUR LES ETUDIANTS

import prisma from "@/utils/Prisma"

export async function getEpfe(id: number) {
  try {
    const epfe = await prisma.emprunt_pfe_etudiant.findMany({
      include: {
        pfe: true,
        etudiant: true,
        utilisateur: true,
      },
      where: {
        IDPE: id,
      },
    })
    await prisma.$disconnect
    return epfe
  } catch (e) {
    await prisma.$disconnect
    throw new Error("something went wrong" + e)
  }
}

//* HISTORIQUE DE TOUTE LES EMPRUNTS

export async function Epfe() {
  try {
    const epfe = await prisma.emprunt_pfe_etudiant.findMany({
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
    return epfe
  } catch (e) {
    await prisma.$disconnect
    throw new Error("something went wrong" + e)
  }
}

//* LES EMPRUNTS ENCOURS

export async function EpfeEncours() {
  try {
    const epfe = await prisma.emprunt_pfe_etudiant.findMany({
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
    return epfe
  } catch (e) {
    await prisma.$disconnect
    throw new Error("something went wrong" + e)
  }
}
