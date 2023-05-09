import prisma from "@/utils/Prisma";

export async function getCategories() {
  try {
    const categories = await prisma.categorie.findMany({
      include: {
        categorie: {
          select: {
            LIBELLE: true,
          },
        },
      },
    });
    await prisma.$disconnect;
    return categories;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}

export async function getCategorie(id: number) {
  try {
    const categorie = await prisma.categorie.findFirst({
      where: {
        ID_CAT: id,
      },
    });
    await prisma.$disconnect;
    return categorie;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}

export async function getCategories_Select() {
  try {
    const categories = await prisma.categorie.findMany({
      select: {
        ID_CAT: true,
        LIBELLE: true,
      },
    });
    await prisma.$disconnect();
    return categories.map(({ ID_CAT, LIBELLE }) => ({
      ID_CAT,
      LIBELLE: LIBELLE ?? "",
    }));
  } catch (e) {
    await prisma.$disconnect();
    throw Error("Something went wrong" + e);
  }
}
