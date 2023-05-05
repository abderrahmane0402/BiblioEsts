'use client'
import { FC, ReactNode } from "react"
import MLink from "@/ui/MLink"
import { isActive } from "@/utils/dashboard"

interface NavProps {
  href: string
  icon: ReactNode
  title: string
}

export const Nav: FC<NavProps> = ({ href, icon, title }) => {
  const isactive = isActive(href)
  return (
    <li>
      <MLink
        href={href}
        type='nav'
        font='md'
        className={`${
          isactive
            ? "bg-[#62a0d381]"
            : "hover:bg-[#250262] active:bg-[#c6ddf05a]"
        } pl-7 justify-between`}
      >
        <div className='flex gap-5 items-center'>
          {icon}
          {title}
        </div>
      </MLink>
    </li>
  )
}

export default Nav
