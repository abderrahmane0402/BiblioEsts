import { MainLogo } from "@/components/MainLogo"
import { ZNav } from "@/components/Nav"
import PageHeader from "@/components/PageHeader"
import User from "@/components/User"
import EstLogo from "@/img/Mylogo.png"
import { FC, ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}




const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className='flex flex-row h-full w-full overflow-hidden'>
      {/* NAVIGATION BAR */}
      <div className='h-full w-nav text-white bg-[#011936] flex flex-col justify-between gap-1'>
        <div className='h-3/4'>
          <MainLogo Logo={EstLogo} />
          {/* TODO: update the links of the nav */}
          <ZNav />
        </div>
        <User />
      </div>
      {/* BODY OF THE PAGE */}
      <div className='h-full w-main flex flex-col gap-1 px-3'>
        <PageHeader />
        <div className='p-2 container h-[88%]'>{children}</div>
      </div>
    </main>
  )
}

export default Layout
