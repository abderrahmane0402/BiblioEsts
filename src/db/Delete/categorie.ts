import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache"
export async function removeCat(id: number) {
  try {
    await prisma.categorie.delete({
      where: {
        ID_CAT: id,
      },
    });
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
