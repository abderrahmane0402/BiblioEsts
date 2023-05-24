import prisma from "@/utils/Prisma"
import { exemplaire } from "@prisma/client"

export async function setLivres(livre: any) {
  try {
    await prisma.livre.create({
      data: {
        ...livre,
      },
    })
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

export async function setExemplaire(exemplaire: exemplaire) {
  try {
    await prisma.exemplaire.create({
      data: {
        ...exemplaire,
      },
    })
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
