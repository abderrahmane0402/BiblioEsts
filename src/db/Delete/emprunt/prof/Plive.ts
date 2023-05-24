import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache"
export async function removePlivre(id: number ) {
  try {
    await prisma.emprunt_livre_prof.delete({
      where: {
        IDLP :id,
      },
    });
    revalidatePath("/emprunt/prof/livre/encours");
    revalidatePath("/emprunt/prof/livre/historique");

    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}