// POUR LES PROFESSEURS

import prisma from "@/utils/Prisma"

export async function getPpfeID(id: number) {
  try {
    const emprunt = await prisma.emprunt_pfe_prof.findUnique({
      include: {
        pfe: true,
        prof: true,
      },
      where: {
        IDPP: id,
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

export async function Ppfe() {
  try {
    const emprunt = await prisma.emprunt_pfe_prof.findMany({
      include: {
        prof :  {
          select :{
              NOM : true,
              PRENOM : true,
          },
        },
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

      orderBy: {
        IDPP: "desc",
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
        prof :  {
          select :{
              NOM : true,
              PRENOM : true,
          },
        },
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
      orderBy: {
        IDPP: "desc",
      },
    })
    await prisma.$disconnect
    return emprunt
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
