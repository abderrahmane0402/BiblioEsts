import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache";


export async function setUser(User: any) {
  try {
    await prisma.utilisateur.create({
      data: {
        NOM: User.NOM,
        PRENOM: User.PRENOM,
        TELEPHONE: User.TELEPHONE,
        LOGIN: User.LOGIN,
        PASSWORD: User.PASSWORD,
      },
    });
    revalidatePath("utilisateur")
    await prisma.$disconnect();
  } catch (e) {
    await prisma.$disconnect();
    throw new Error("Something went wrong: " + e);
  }
}