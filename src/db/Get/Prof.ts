import prisma from "@/utils/Prisma";

export async function getProfs() {
  try {
    const profs = await prisma.prof.findMany();
    await prisma.$disconnect;
    return profs;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong with the database" + e);
  }
}

export async function getProfshort() {
  try {
    const profs = await prisma.prof.findMany({
      select: {
        Code: true,
      },
      where: {
        emprunt_livre_prof: {
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
    return profs;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong with the database" + e);
  }
}

export async function getProf(id: string) {
  try {
    const prof = await prisma.prof.findUnique({
      where: {
        Code: id,
      },
    });
    await prisma.$disconnect;
    return prof;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong with the database" + e);
  }
}
