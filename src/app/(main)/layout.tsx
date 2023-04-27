import { Nav } from "@/components/Nav"
import EstLogo from "@/img/Mylogo.png"
import { FC, ReactNode } from "react"
import { MainLogo } from "@/components/MainLogo"
import { navItems } from "@/data/nav_el"

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className='flex flex-row h-full w-full'>
      {/* NAVIGATION BAR */}
      <div className='h-full w-nav text-white bg-[#011936] flex flex-col justify-between gap-1'>
        <div className='h-[80%]'>
          <MainLogo Logo={EstLogo} />
          {/* TODO: update the links of the nav */}
          <Nav navItems={navItems}/>
        </div>
      </div>
      {/* BODY OF THE PAGE */}
      <div className='h-full w-[87%] flex flex-col gap-1 px-3'></div>
      {children}
    </main>
  )
}

export default Layout
