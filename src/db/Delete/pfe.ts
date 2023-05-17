
import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache"
export async function removePFE(id: number) {
  try {
    await prisma.pfe.delete({
      where: {
        IDPFE: id,
      },
    });
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
