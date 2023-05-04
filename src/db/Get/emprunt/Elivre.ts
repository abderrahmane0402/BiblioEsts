import prisma from "@/utils/Prisma"

//* HISTORIQUE DE TOUTE LES EMPRUNTS

export async function ElivreShort() {
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
    })
    await prisma.$disconnect
    return emprunt
  } catch (e) {
    throw Error("somthing went wrong" + e)
  }
}

export async function Elivre() {
  try {
    const emprunt = await prisma.emprunt_livre_etudiant.findMany({
      include: {
        utilisateur: true,
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
    })
    await prisma.$disconnect
    return emprunt
  } catch (e) {
    throw Error("somthing went wrong" + e)
  }
}

//* LES EMPRUNTS VALIDER

export async function ElivreShortV() {
  try {
    const emprunt =
      await prisma.$queryRaw`SELECT NOM, PRENOM , N_INVENTAIRE, DATE_R, DATE_D , DATE_F , N_APOGEE , OBSERVATION FROM emprunt_livre_etudiant NATURAL JOIN utilisateur WHERE DATE_R <= DATE_F`
    await prisma.$disconnect
    return emprunt
  } catch (e) {
    throw Error("somthing went wrong" + e)
  }
}

export async function ElivreV() {
  try {
    const emprunt =
      await prisma.$queryRaw`SELECT * FROM emprunt_livre_etudiant NATURAL JOIN utilisateur NATURAL JOIN etudiant NATURAL JOIN exemplaire NATURAL JOIN livre WHERE DATE_R <= DATE_F`
    await prisma.$disconnect
    return emprunt
  } catch (e) {
    throw Error("somthing went wrong" + e)
  }
}

//* LES EMPRUNTS EN RETARD

export async function ElivreShortR() {
  try {
    const emprunt =
      await prisma.$queryRaw`SELECT NOM, PRENOM , N_INVENTAIRE, DATE_R, DATE_D , DATE_F , N_APOGEE , OBSERVATION FROM emprunt_livre_etudiant NATURAL JOIN utilisateur WHERE DATE_R > DATE_F`
    await prisma.$disconnect
    return emprunt
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

export async function ElivreR() {
  try {
    const emprunt =
      await prisma.$queryRaw`SELECT * FROM emprunt_livre_etudiant NATURAL JOIN utilisateur NATURAL JOIN etudiant NATURAL JOIN exemplaire NATURAL JOIN livre WHERE DATE_R > DATE_F`
    await prisma.$disconnect
    return emprunt
  } catch (e) {
    throw Error("somthing went wrong" + e)
  }
}
