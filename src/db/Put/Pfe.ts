import prisma from "@/utils/Prisma";

export async function PutPfe(pfe_Id: number ,Pfe: any) {
  try {
    
    await prisma.pfe.update({
      where: {
        IDPFE : pfe_Id
      },
      data: {
        ...Pfe,
       
      }
    });

    await prisma.$disconnect();
  } catch (e) {
    await prisma.$disconnect();
    throw new Error("Something went wrong: " + e);
  }
}
