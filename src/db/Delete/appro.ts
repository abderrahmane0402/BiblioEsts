import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache"
export async function removeAppro(id: number) {
  try {
    await prisma.approvisionement.delete({
         where: {
        ID_APRO: id,
       
      },
    });

    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
