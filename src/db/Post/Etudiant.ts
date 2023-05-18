import prisma from "@/utils/Prisma"
import { revalidatePath } from "next/cache"

export async function setEtudiant(etudiant: any) {
  try {
    await prisma.etudiant.create({
      data: {
        ...etudiant,
      },
    })
    revalidatePath("/etudiant")
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
