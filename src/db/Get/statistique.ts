import prisma from "@/utils/Prisma"

export async function countLivre() {
  try {
    const n = await prisma.exemplaire.count()
    prisma.$disconnect
    return n
  } catch (error) {
    console.log(error)
    throw new Error("something wrong with the database" + error)
  }
}

export async function countPFE() {
  try {
    const n = await prisma.pfe.count()
    prisma.$disconnect
    return n
  } catch (error) {
    console.log(error)
    throw new Error("something wrong with the database" + error)
  }
}

export async function countElivre() {
  try {
    const n = await prisma.emprunt_livre_etudiant.count({
      where: {
        DATE_R: {
          not: null,
        },
      },
    })
    const m = await prisma.emprunt_livre_prof.count({
      where: {
        DATE_R: {
          not: null,
        },
      },
    })
    prisma.$disconnect
    return n + m
  } catch (error) {
    console.log(error)
    throw new Error("something wrong with the database" + error)
  }
}

export async function countEpfe() {
  try {
    const n = await prisma.emprunt_pfe_etudiant.count({
      where: {
        DATE_R: {
          not: null,
        },
      },
    })
    const m = await prisma.emprunt_pfe_prof.count({
      where: {
        DATE_R: {
          not: null,
        },
      },
    })
    prisma.$disconnect
    return n + m
  } catch (error) {
    console.log(error)
    throw new Error("something wrong with the database" + error)
  }
}

export async function notificationLE() {
  try {
    const n = await prisma.emprunt_livre_etudiant.findFirst({
      select: {
        DATE_F: true,
        etudiant: {
          select: { N_inscription: true, NOM: true, PRENOM: true },
        },
        N_INVENTAIRE: true,
      },
      where: {
        DATE_R: {
          not: null,
        },
        DATE_F: {
          gte: new Date() || "",
        },
      },
      orderBy: {
        DATE_F: "asc",
      },
    })
    return n
  } catch (error) {
    console.log(error)
    throw new Error("something wrong happen in the database" + error)
  }
}

export async function notificationPP() {
  try {
    const n = await prisma.emprunt_pfe_prof.findFirst({
      select: {
        DATE_F: true,
        prof: {
          select: {
            Code: true,
            NOM: true,
            PRENOM: true,
          },
        },
        Cote: true,
      },
      where: {
        DATE_R: {
          not: null,
        },
        DATE_F: {
          gte: new Date() || "",
        },
      },
      orderBy: {
        DATE_F: "asc",
      },
    })
    return n
  } catch (error) {
    console.log(error)
    throw new Error("something wrong happen in the database" + error)
  }
}

export async function notificationPE() {
  try {
    const n = await prisma.emprunt_pfe_etudiant.findFirst({
      select: {
        DATE_F: true,
        etudiant: {
          select: {
            N_inscription: true,
            NOM: true,
            PRENOM: true,
          },
        },
        Cote: true,
      },
      where: {
        DATE_R: {
          not: null,
        },
        DATE_F: {
          gte: new Date() || "",
        },
      },
      orderBy: {
        DATE_F: "asc",
      },
    })
    return n
  } catch (error) {
    console.log(error)
    throw new Error("something wrong happen in the database" + error)
  }
}

export async function notificationLP() {
  try {
    const n = await prisma.emprunt_livre_prof.findFirst({
      select: {
        DATE_F: true,
        prof: {
          select: {
            Code: true,
            NOM: true,
            PRENOM: true,
          },
        },
        N_INVENTAIRE: true,
      },
      where: {
        DATE_R: {
          not: null,
        },
        DATE_F: {
          gte: new Date() || "",
        },
      },
      orderBy: {
        DATE_F: "asc",
      },
    })
    return n
  } catch (error) {
    console.log(error)
    throw new Error("something wrong happen in the database" + error)
  }
}
