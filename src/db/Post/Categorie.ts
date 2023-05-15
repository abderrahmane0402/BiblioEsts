import prisma from "@/utils/Prisma"
import { revalidatePath } from "next/cache"

export async function setCategorie(categorie: any) {
  try {
    await prisma.categorie.create({
      data: {
        ...categorie,
      },
    })
    revalidatePath("/categorie")
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
