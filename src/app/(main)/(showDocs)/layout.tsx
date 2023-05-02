"use client"
import { navItems } from "@/data/nav_el"
import Button from "@/ui/Button"
import { Card } from "@/ui/Card"
import Header from "@/ui/Header"
import { PicTitle } from "@/utils/PicTitle"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  const path = usePathname()
  const title = PicTitle(navItems, path)
  return (
    <div className='w-full h-full flex flex-col gap-2'>
      <div className='h-auto w-full'>
        <Card type={"full"} className='flex py-2 px-4 justify-between items-center'>
            <Header size={"md"}>Liste de {title?.toLowerCase()}</Header>
            <Button size={'auto'} type={'submit'}>ajouter {title?.toLowerCase()}</Button>
        </Card>   
      </div>
      <div className='h-full'>
        <Card type={"full"}>{children}</Card>
      </div>
    </div>
  )
}

export default Layout
