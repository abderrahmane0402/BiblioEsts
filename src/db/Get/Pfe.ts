import prisma from "@/utils/Prisma"

export async function getPfes() {
  try {
    const pfes = await prisma.pfe.findMany()
    await prisma.$disconnect
    return pfes
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

export async function getPfe(id: string) {
  try {
    const pfe = await prisma.pfe.findUnique({
      where: {
        Cote: id,
      },
    })
    await prisma.$disconnect
    return pfe
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

export async function getCote() {
  try {
    const Livres = await prisma.pfe.findMany({
      select: {
        Cote: true,
      },
      where: {
        emprunt_pfe_etudiant: {
          none: {
            DATE_R: null,
          },
        },
        emprunt_pfe_prof: {
          none: {
            DATE_R: null,
          },
        },
      },
    });
    await prisma.$disconnect;
    return Livres;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}