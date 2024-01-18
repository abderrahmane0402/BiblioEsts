"use server";

import { getPfe } from "@/db/Get/Pfe";
import { PutPfe } from "@/db/Put/Pfe";
import { pfe } from "@prisma/client";

export default async function updatePfe(data: FormData ,id: string) {
  
    try {
      const pfe = await getPfe(id);
      let  fil : string 
      if(data.get("filiere"))
      {
          fil = data.get("filiere") as string
      }
      else {
        fil = pfe!.Filiere as string
      }
    
        const Pfe  = {
            Cote : data.get("cote") as string ,
            SUJET: data.get("sujet") as string,
            REALISATEUR: data.get("realisateur") as string,
            ENCADRANT: data.get("encadrant") as string,
            Filiere : fil ,
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