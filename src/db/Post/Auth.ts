import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache";

export async function Authentication(login: string, password: string) {
  try {
    const user = await prisma.utilisateur.findFirst({
      where: {
        LOGIN: login,
        PASSWORD: password,
      },
    });
    revalidatePath("utilisateur")
    await prisma.$disconnect;
    return user;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("something went wrong with auth" + e);
  }
}
