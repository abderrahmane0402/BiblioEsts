// POUR LES PROFESSEURS

import prisma from "@/utils/Prisma"

export async function getPpfeID(id : number)
{
  try {
  const emprunt  = await prisma.emprunt_pfe_prof.findUnique({

    where: {
      IDPP: id,
    },
    }
  )
  await prisma.$disconnect
  return emprunt
} catch (e) {
  await prisma.$disconnect
  throw Error("somthing went wrong" + e)
}
}
//* HISTORIQUE DE TOUTE LES EMPRUNTS

export async function Ppfe() {
  try {
    const emprunt = await prisma.emprunt_pfe_prof.findMany({
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

export async function PpfeEncours() {
  try {
    const emprunt = await prisma.emprunt_pfe_prof.findMany({
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
