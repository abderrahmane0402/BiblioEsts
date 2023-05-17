import prisma from "@/utils/Prisma";
import { livre } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function PutLivres(livreId: number, Livre: any ) {
  try {
    await prisma.livre.update({
      where: {
        ID_LIVRE : livreId 
      },
      data: {
        ...Livre,
       
      }
    });
    revalidatePath("/livre")
    await prisma.$disconnect();
  } catch (e) {
    await prisma.$disconnect();
    throw new Error("Something went wrong: " + e);
  }
}
