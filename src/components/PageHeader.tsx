"use client"
import Clock from "@/components/Clock"
import { NavItem } from "@/types"
import Header from "@/ui/Header"
import { PicTitle } from "@/utils/PicTitle"
import { usePathname } from "next/navigation"
import { FC, useEffect, useState } from "react"

interface PageHeaderProps {
  navItems: NavItem[]
}

const PageHeader: FC<PageHeaderProps> = ({ navItems }) => {
  const path = usePathname()
  const [title, setTitle] = useState<string>()

  useEffect(() => {
    setTitle(PicTitle(navItems, path))
    return () => {
      setTitle(undefined)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header className='container flex justify-between items-center h-24 max-h-[12%]'>
      <Header>{title}</Header>
      <Clock />
    </header>
  )
}
export default PageHeader
