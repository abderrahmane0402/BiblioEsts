import prisma from "@/utils/Prisma"

export async function getProfs() {
  try {
    const profs = await prisma.prof.findMany()
    await prisma.$disconnect
    return profs
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong with the database" + e)
  }
}

export async function getProfshort() {
  try {
    const profs = await prisma.prof.findMany({
      select: {
        NOM: true,
        PRENOM: true,
      },
    })
    await prisma.$disconnect
    return profs
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong with the database" + e)
  }
}

export async function getProf(id: number) {
  try {
    const prof = await prisma.prof.findUnique({
      where: {
        ID_PROF: id,
      },
    })
    await prisma.$disconnect
    return prof
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong with the database" + e)
  }
}
