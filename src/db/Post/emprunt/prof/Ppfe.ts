import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache";

export async function setPprof(Pprof: any) {
  try {
    await prisma.emprunt_pfe_prof.create({
      data: {
        ...Pprof,
      },
    });
    revalidatePath("/emprunt/prof/pfe/encours");
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
