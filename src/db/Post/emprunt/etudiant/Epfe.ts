
// POUR LES ETUDIANTS

import prisma from "@/utils/Prisma"
import {  emprunt_pfe_etudiant } from "@prisma/client"

export async function setEpfe(Epfe : emprunt_pfe_etudiant) {
  try {
    await prisma.emprunt_pfe_etudiant.create({
      data : {
        ...Epfe
      }
    
    })
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
