import prisma from "@/utils/Prisma";

export async function getEtudiant(id: number ) {
  try {
    const etudiant = await prisma.etudiant.findUnique({
      where: {
        N_APOGEE: id,
      },
    });
    await prisma.$disconnect;
    return etudiant;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}

export async function getEtudiants() {
  try {
    const etudiants = await prisma.etudiant.findMany();
    await prisma.$disconnect;
    return etudiants;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}

export async function getEtudiantsShort() {
  try {
    const etudiants = await prisma.etudiant.findMany({
      select: {
        N_inscription: true,
      },
      where: {
        emprunt_livre_etudiant: {
          none: {
            DATE_R: null,
          },
        },
        emprunt_pfe_etudiant: {
          none: {
            DATE_R: null,
          },
        },
      },
    });
    await prisma.$disconnect;
    return etudiants;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
