import prisma from "@/utils/Prisma"
import { revalidatePath } from "next/cache"

export async function setfournisseur(fournisseur: any) {
  try {
    await prisma.fournisseur.create({
      data: {
        ...fournisseur,
      },
    })
    revalidatePath("/fournisseur")
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
