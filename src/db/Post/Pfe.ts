import prisma from "@/utils/Prisma";
import { pfe } from "@prisma/client";

export async function setPfe( Pfe : any) {
    try {
        await prisma.pfe.create({
          data: { ...Pfe
                },
           
        });
        
        await prisma.$disconnect;
      } catch (e) {
        await prisma.$disconnect;
        throw Error("somthing went wrong" + e);
      }
    }
    
    
