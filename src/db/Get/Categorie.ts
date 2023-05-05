import prisma from "@/utils/Prisma"

export async function getCategories() {
  try {
    const categories = await prisma.categorie.findMany({
      include: {
        other_categorie: true,
      },
      where: {
        CAT_ID_CAT: null,
      },
    })
    await prisma.$disconnect
    return categories
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

export async function getCategorie(id: number) {
  try {
    const categorie = await prisma.categorie.findFirst({
      where: {
        ID_CAT: id,
      },
    })
    await prisma.$disconnect
    return categorie
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
