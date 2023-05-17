import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache"
export async function removeLivre(id: number) {
  try {
    await prisma.livre.delete({
      where: {
        ID_LIVRE: id,
      },
    });
    revalidatePath("/livres");
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
