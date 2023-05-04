import prisma from "@/utils/Prisma"

export async function getProfs() {
  try {
    const profs = await prisma.prof.findMany()
    return profs
  } catch (e) {
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
    return prof
  } catch (e) {
    throw Error("somthing went wrong with the database" + e)
  }
}