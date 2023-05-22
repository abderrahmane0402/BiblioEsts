import prisma from "@/utils/Prisma";

export async function getLivres() {
  try {
    const Livres = await prisma.livre.findMany({
      include: {
        exemplaire: {
          select: {
            N_INVENTAIRE: true,
            OBSERVATIONE: true,
          },
        },
        categorie: {
          select: {
            LIBELLE: true,
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

export async function getLivre(id: number) {
  try {
    const Livre = await prisma.livre.findFirst({
      include: {
        exemplaire: {
          select: {
            N_INVENTAIRE: true,
            OBSERVATIONE: true,
          },
        },
        categorie: {
          select: {
            LIBELLE: true,
          },
        },
      },
      where: {
        ID_LIVRE: id,
      },
    });
    await prisma.$disconnect;
    return Livre;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}

export async function getExemplaire(id: number) {
  try {
    const Exemplaire = await prisma.exemplaire.findFirst({
      where: {
        N_INVENTAIRE: id,
      },
    });
    await prisma.$disconnect;
    return Exemplaire;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
export async function getExemplaires() {
  try {
    const Exemplaire = await prisma.exemplaire.findMany();
    await prisma.$disconnect;
    return Exemplaire;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
export async function getExemplairesLivre() {
  try {
    const Exemplaire = await prisma.exemplaire.findMany({
      include: {
        livre: {
          select: {
            TITRE: true,
            AUTHEUR: true,
            DATE_EDITION: true,
            EDITEUR: true,
          },
        },
      },
    });

    await prisma.$disconnect;
    return Exemplaire;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}

export async function getNinv() {
  try {
    const Livres = await prisma.exemplaire.findMany({
      select: {
        N_INVENTAIRE: true,
      },
      where: {
        emprunt_livre_etudiant: {
          none: {
            DATE_R: null,
          },
        },
        emprunt_livre_prof: {
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

export async function getLivresShort() {
  try {
    const Livres = await prisma.livre.findMany();
    await prisma.$disconnect;
    return Livres;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}

export async function getSomaire(id: number) {
  try {
    const Livre = await prisma.livre.findFirst({
      select: {
        SOMAIRE: true,
      },
      where: {
        ID_LIVRE: id,
      },
    });
    await prisma.$disconnect;
    return Livre;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
