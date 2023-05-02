import { ReactNode } from "react"


export interface SubNavItem {
  id: number
  href: string
  title: string
  icon: ReactNode
}

export interface NavItem {
  id: number
  href: string | null
  title: string
  icon: ReactNode
  sub_nav?: SubNavItem[]
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
