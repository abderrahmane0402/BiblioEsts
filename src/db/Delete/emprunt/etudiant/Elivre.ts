import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache"
export async function removeElivre(id: number ) {
  try {
    await prisma.emprunt_livre_etudiant.delete({
      where: {
        IDLE :id,
      },
    });
    revalidatePath("/emprunt/etudiant/livre/encours");
    revalidatePath("/emprunt/etudiant/livre/historique");
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}