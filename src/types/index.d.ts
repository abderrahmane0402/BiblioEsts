import { ReactNode } from "react"

export declare type navItem = {
  href: string
  title: string
  icon: ReactNode
}

export interface Livre {
  id:number
  pgImg: string;
  titre: string;
  categorie: string;
  autheur: string;
  editeur: string;
  dateE: Date;
  code: number;
  obser: string | null;
  somaire: string;
  prix: number;
}
declare type exemplaire = {
  N_INVENTAIRE :number,
  OBSERVATIONE : string,
}

declare type filiere ={
ID_FIL : number, 
LIBELLE : string,

}