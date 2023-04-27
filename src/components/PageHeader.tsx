"use client"
import React, { useEffect, useState } from "react"
import Clock from "@/components/Clock"
import Header from "@/ui/Header"
import { usePathname } from "next/navigation"
import { FC } from "react"
import { NavItem } from "@/data/nav_el"

interface PageHeaderProps {
  navItems: NavItem[]
}

const PageHeader: FC<PageHeaderProps> = ({ navItems }) => {
  const path = usePathname()
  const [title, setTitle] = useState<string>()
  useEffect(() => {
    setTitle(
      navItems.find((el) => {
        if (el.href) return el.href === path
        else return el.sub_nav?.find((sub) => sub.href === path)
      })?.title
    )

    return () => {
      setTitle(undefined)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path])

  return (
    <header className='container flex justify-between items-center h-24 max-h-[12%]'>
      <Header>{title}</Header>
      <Clock />
    </header>
  )
}
export default PageHeader
