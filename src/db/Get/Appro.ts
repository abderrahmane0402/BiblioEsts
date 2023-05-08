import prisma from "@/utils/Prisma"

export async function getApprosShort() {
  try {
    const appros = await prisma.approvisionement.findMany({
      include: {
        utilisateur: {
          select: {
            NOM: true,
            PRENOM: true,
          },
        },
        fournisseur: {
          select: {
            NOM: true,
            PRENOM: true,
          },
        },
      },
    })
    await prisma.$disconnect
    return appros
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

export async function getAppros(id: number) {
  try {
    const appros = await prisma.approvisionement.findMany({
      include: {
        contient: {
          include: {
            livre: true,
          },
        },
        fournisseur: true,
        utilisateur: true,
      },
      where: {
        ID_APRO: id,
      },
    })
    await prisma.$disconnect
    return appros
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
