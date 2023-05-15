"use server";

import { PutPfe } from "@/db/Put/Pfe";
import { pfe } from "@prisma/client";

export default async function updatePfe(data: FormData ,id: number) {

    try {
    
        const Pfe  : pfe = {
            IDPFE : id ,
            SUJET: data.get("sujet") as string,
            REALISATEUR: data.get("realisateur") as string,
            ENCADRANT: data.get("encadrant") as string,
            DATE_REALISATION: data.get("date_realis") ? Number(data.get("date_realis") as string) : null, 
        };
      
        
        await PutPfe(id,Pfe);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }

    // import { PutPfe } from "@/db/Put/Pfe";
    // import { pfe } from "@prisma/client";
    
    // export default async function updatePfe(data: FormData, id: number) {
    //   try {
    //     const Pfe: pfe = {
    //       IDPFE: id,
    //       SUJET: data.get("sujet") as string,
    //       REALISATEUR: data.get("realisateur") as string,
    //       ENCADRANT: data.get("encadrant") as string,
    //       DATE_REALISATION: new Date(data.get("date_edi") as string), // Add type assertion here
    //     };
    
    //     await PutPfe(id, Pfe);
    //     return true;
    //   } catch (error) {
    //     console.log(error);
    //     return false;
    //   }
    // }