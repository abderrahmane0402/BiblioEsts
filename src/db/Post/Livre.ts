import prisma from "@/utils/Prisma";
import { exemplaire, livre } from "@prisma/client";

export async function setLivres(livre: livre, exemplaire: exemplaire) {
  try {
    const Livres = await prisma.livre.create({
      data: {
        exemplaire: {
          create: {
            ...exemplaire,
          },
        },
        ...livre,
      },
    });
    await prisma.$disconnect;
    return Livres;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
