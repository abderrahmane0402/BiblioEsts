"use client"
import Header from "@/components/mui/MuiHeader"
import { isActive } from "@/utils/dashboard"
import Link from "next/link"
import { FC, ReactNode } from "react"

interface NavProps {
  href: string
  icon: ReactNode
  title: string
}

export const Nav: FC<NavProps> = ({ href, icon, title }) => {
  const isactive = isActive(href)
  return (
    <li className='w-full mt-[0.375rem]'>
      <Link
        href={href}
        className={`${
          isactive
            ? "bg-activeNav text-white"
            : "hover:bg-[#3a35410a] text-[#3a3541de] active:bg-[#3a354158]"
        } pl-[22px] pr-[14px] py-[9px] flex gap-[10px] rounded-r-full transition-colors`}
      >
        <div className='flex gap-5 items-center'>
          {icon}
          <Header
            variant='body1'
            sx={{
              letterSpacing: "0.15px",
            }}
          >
            {title}
          </Header>
        </div>
      </Link>
    </li>
  )
}

export default Nav
