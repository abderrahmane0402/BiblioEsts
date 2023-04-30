import { ReactNode } from "react"


export interface CardInfo {
    title:string,
    icon:ReactNode,
    details:string
}

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
