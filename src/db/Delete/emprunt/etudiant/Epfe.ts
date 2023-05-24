import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache"
export async function removeEpfe(id: number ) {
  try {
    await prisma.emprunt_pfe_etudiant.delete({
      where: {
        IDPE :id,
      },
    });
    revalidatePath("/emprunt/etudiant/pfe/encours");
    revalidatePath("/emprunt/etudiant/pfe/historique");
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}