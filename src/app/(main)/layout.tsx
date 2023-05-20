import { MainLogo } from "@/components/MainLogo"
import { ZNav } from "@/components/Nav"
import PageHeader from "@/components/PageHeader"
import SessionValidate from "@/components/sessionValidate"
import EstLogo from "@/img/Mylogo.png"
import { FC, ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  
  return (
    <>
      {/* <SessionValidate /> */}
      <main className='flex flex-row h-full w-full overflow-hidden'>
        {/* NAVIGATION BAR */}
        <div className='h-full w-nav text-white bg-[#011936] flex flex-col justify-between gap-1'>
          <div className='h-3/4'>
            <MainLogo Logo={EstLogo} />
            {/* TODO: update the links of the nav */}
            <ZNav />
          </div>
        </div>
        {/* BODY OF THE PAGE */}
        <div className='h-full w-main flex flex-col px-3'>
          <PageHeader />
          <div className='container h-full'>{children}</div>
        </div>
      </main>
    </>
  )
}

export default Layout
