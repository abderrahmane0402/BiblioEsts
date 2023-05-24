import prisma from "@/utils/Prisma"

export async function PutApprovi(
  Aprovis: any,
  appro_Id: number
) {
  try {
    await prisma.approvisionement.update({
        where : {
          ID_APRO  : appro_Id
        },
        ...Aprovis,
      },
    )
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
