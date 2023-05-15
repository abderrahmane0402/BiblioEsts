
// POUR LES ETUDIANTS

import prisma from "@/utils/Prisma"
import {  emprunt_livre_prof } from "@prisma/client"

export async function setPlivre(Plivre : emprunt_livre_prof) {
  try {
    await prisma.emprunt_livre_prof.create({
      data : {
        ...Plivre
      }
    
    })
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
