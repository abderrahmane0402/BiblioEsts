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