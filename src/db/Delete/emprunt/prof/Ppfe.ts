import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache"
export async function removePpfe(id: number ) {
  try {
    await prisma.emprunt_pfe_prof.delete({
      where: {
        IDPP :id,
      },
    });
    revalidatePath("/emprunt/prof/pfe/encours");
    revalidatePath("/emprunt/prof/pfe/historique");

    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}