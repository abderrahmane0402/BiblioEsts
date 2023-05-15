// POUR LES ETUDIANTS

import prisma from "@/utils/Prisma"
import { emprunt_livre_etudiant } from "@prisma/client"

export async function setElivre(Elivre : emprunt_livre_etudiant) {
  try {
    await prisma.emprunt_livre_etudiant.create({
      data : {
        ...Elivre

      }
    
    })
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}

//* HISTORIQUE DE TOUTE LES EMPRUNTS
