import prisma from "@/utils/Prisma"

export async function setLivres(livre: any) {
  try {
    await prisma.livre.create({
      data: {
        ...livre,
      },
    })
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
