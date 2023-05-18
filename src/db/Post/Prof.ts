import prisma from "@/utils/Prisma"
import { revalidatePath } from "next/cache"

export async function setProf(prof: any) {
  try {
    await prisma.prof.create({
      data: {
        ...prof,
      },
    })
    revalidatePath("/prof")
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
