
import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache"
export async function removePFE(id: string) {
  try {
    await prisma.pfe.delete({
      where: {
        Cote: id,
      },
    });
    revalidatePath("/pfe");
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
