"use client"
import Clock from "@/components/Clock"
import Header from "@/ui/Header"
import { getTitle } from "@/utils/dashboard"
import { FC } from "react"

interface PageHeaderProps {}

const PageHeader: FC<PageHeaderProps> = () => {
  const title = getTitle()
  return (
    <header className='container flex justify-between items-center h-24 max-h-[12%]'>
      <Header>{title}</Header>
      <Clock />
    </header>
  )
}
export default PageHeader
