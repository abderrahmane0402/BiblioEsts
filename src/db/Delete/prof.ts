import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache"
export async function removeProf(id: string) {
  try {
    await prisma.prof.delete({
      where: {
        Code: id,
      },
    });
    revalidatePath("/prof");
    await prisma.$disconnect;
  } catch (e) {
    await prisma.$disconnect;
    throw Error("somthing went wrong" + e);
  }
}
