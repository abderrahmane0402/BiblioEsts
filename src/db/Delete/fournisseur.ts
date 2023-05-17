import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache"
export async function removeFourni(id: number) {
  try {
    await prisma.fournisseur.delete({
      where: {
        ID_FOR: id,
      },
    });
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
