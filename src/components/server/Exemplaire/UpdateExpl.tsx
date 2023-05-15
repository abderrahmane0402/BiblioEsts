"use server";

import { PutExemplaire } from "@/db/Put/Exemplaire";
import { exemplaire } from "@prisma/client";

export default async function updateExemplaire(data: FormData ,id: number) {
  
  try {
    

    const Exmpl  : exemplaire= {
        N_INVENTAIRE: Number(data.get("nbr_invEX") as string) ,
        ID_LIVRE: Number(data.get("iD_LIVRE")as string),
        OBSERVATIONE : data.get('observationEX') as string ,
    };
    
    await PutExemplaire(id,Exmpl);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
