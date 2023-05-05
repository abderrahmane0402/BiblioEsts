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
