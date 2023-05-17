import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache";

export async function PutPfe(pfe_Id: string ,Pfe: any) {
  try {
    
    await prisma.pfe.update({
      where: {
        Cote : pfe_Id
      },
      data: {
        ...Pfe,
       
      }
    });
    revalidatePath("/pfe")
    await prisma.$disconnect();
  } catch (e) {
    await prisma.$disconnect();
    throw new Error("Something went wrong: " + e);
  }
}
