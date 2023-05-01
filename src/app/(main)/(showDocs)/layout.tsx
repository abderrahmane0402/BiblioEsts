"use client"
import SearchBar from "@/components/SearchBar"
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
      <div className='h-1/5 w-full'>
        <Card type={"full"} className='flex py-2 justify-between items-center'>
          <div className='h-full flex flex-col justify-between'>
            <Header size={"md"}>Liste de {title?.toLowerCase()}</Header>
            <SearchBar />
          </div>
          <div className='h-full flex flex-col justify-center gap-2'>
            <Button size={'full'} type={'submit'}>ajouter {title?.toLowerCase()}</Button>
          </div>
        </Card>   
      </div>
      <div className='h-4/5'>
        <Card type={"full"}>{children}</Card>
      </div>
    </div>
  )
}

export default Layout
