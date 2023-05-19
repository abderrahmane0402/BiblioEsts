import prisma from "@/utils/Prisma"
import { revalidatePath } from "next/cache"

export async function setApprovi(
  Aprovis: any,
  livre: { ID_LIVRE: number; QTE: number }[]
) {
  try {
    await prisma.approvisionement.create({
      data: {
        contient: {
          createMany: {
            data: livre,
          },
        },
        ...Aprovis,
      },
    })
    revalidatePath("/approvisionnement")
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
