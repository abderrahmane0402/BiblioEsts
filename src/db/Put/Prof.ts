import prisma from "@/utils/Prisma"
import { revalidatePath } from "next/cache"

export async function PutProf(prof: any, id : string) {
  try {
    await prisma.prof.update({
        where :{
            Code : id
        },
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
