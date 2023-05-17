import prisma from "@/utils/Prisma";
import { revalidatePath } from "next/cache";

export async function setPfe( Pfe : any) {
    try {
        await prisma.pfe.create({
          data: { ...Pfe
                },
           
        });
        revalidatePath("pfe")
        await prisma.$disconnect;
      } catch (e) {
        await prisma.$disconnect;
        throw Error("somthing went wrong" + e);
      }
    }
    
    
