import prisma from "@/utils/Prisma";

import { revalidatePath } from "next/cache";

export async function setLivres(livre: any, exemplaire: any[]) {
  try {
    await prisma.livre.create({
      data: {
        ...livre,
        exemplaire: {
          createMany: {
            data: exemplaire
          },
        },
      },
    });
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
