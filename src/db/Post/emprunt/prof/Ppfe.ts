import prisma from "@/utils/Prisma"
import {  emprunt_livre_prof, emprunt_pfe_prof } from "@prisma/client"

export async function setPprof(Pprof : emprunt_pfe_prof) {
  try {
    await prisma.emprunt_pfe_prof.create({
      data : {
        ...Pprof
      }
    
    })
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}