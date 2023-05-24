import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache";

export async function PutPprof(Pprof: any, id: number) {
  try {
    await prisma.emprunt_pfe_prof.update({
      where: {
        IDPP: id,
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

export async function ConfirmePpfe(date: Date, id: number) {
  try {
    await prisma.emprunt_pfe_prof.update({
      where: {
        IDPP: id,
      },
      data: {
        DATE_R: date,
      },
    });
    await prisma.$disconnect;
  } catch (error) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + error);
  }
}
