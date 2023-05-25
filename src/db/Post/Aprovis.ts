import prisma from "@/utils/Prisma"
import { exemplaire } from "@prisma/client"
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
    // const exemplaire: any[] = []
    // livre.map((l) => {
    //   for (let i = 0; i < l.QTE; i++) {
    //     exemplaire.push({
    //       ID_LIVRE: l.ID_LIVRE,
    //       OBSERVATIONE: null,
    //     })
    //   }
    // })
    // await prisma.exemplaire.createMany({
    //   data: exemplaire,
    // })
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
