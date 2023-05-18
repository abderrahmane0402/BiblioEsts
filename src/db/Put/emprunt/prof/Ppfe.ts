import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache";

export async function setPprof(Pprof: any , id : number ) {
  try {
    await prisma.emprunt_pfe_prof.update({
      where : {
        IDPP : id 
      },
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