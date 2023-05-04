import prisma from "@/utils/Prisma"

export async function getPfes() {
  try {
    const pfes = await prisma.pfe.findMany()
    return pfes
  } catch (e) {
    throw Error("somthing went wrong" + e)
  }
}

export async function getPfe(id: number) {
  try {
    const pfe = await prisma.pfe.findUnique({
      where: {
        IDPFE: id,
      },
    })
    return pfe
  } catch (e) {
    throw Error("somthing went wrong" + e)
  }
}