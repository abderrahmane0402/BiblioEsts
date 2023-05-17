import prisma from "@/utils/Prisma";

import { revalidatePath } from "next/cache";

export async function setLivres(livre: any, exemplaire: any[]) {
  try {
    await prisma.livre.create({
      data: {
        ...livre,
        // AUTHEUR: livre.AUTHEUR,
        // TITRE: livre.TITRE,
        // ID_CAT: livre.ID_CAT,
        // EDITEUR: livre.EDITEUR,
        // DATE_EDITION: livre.DATE_EDITION,
        // CODE: livre.CODE,
        // OBSERVATIONL: livre.OBSERVATIONL,
        // PAGE_DE_GARDE: livre.PAGE_DE_GARDE,
        // SOMAIRE: livre.SOMAIRE,
        // PRIX: livre.PRIX,
        exemplaire: {
          createMany: {
            data: exemplaire
          },
        },
      },
    });

    revalidatePath("/livre");
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
