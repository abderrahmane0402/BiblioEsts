import prisma from "@/utils/Prisma"
import { revalidatePath } from "next/cache"

export async function PutEtudiant(etudiant: any , id : number) {
  try {
    await prisma.etudiant.update({
        where :{
            N_APOGEE : id 
        },
      data: {
        ...etudiant,
      },
    })
    revalidatePath("/etudiant")
    await prisma.$disconnect
  } catch (e) {
    await prisma.$disconnect
    throw Error("somthing went wrong" + e)
  }
}
