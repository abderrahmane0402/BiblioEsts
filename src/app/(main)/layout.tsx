import { MainLogo } from "@/components/MainLogo"
import { ZNav } from "@/components/Nav"
import PageHeader from "@/components/PageHeader"
import EstLogo from "@/img/Mylogo.png"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { FC, ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  if (cookies().get("login")?.value == "" || !cookies().get("login")?.value)
    redirect("/")
  return (
    <>
      <main className='flex flex-row h-full w-full overflow-hidden'>
        {/* NAVIGATION BAR */}
        <div className='h-full w-nav text-white bg-[#011936] flex flex-col justify-between gap-1'>
            <MainLogo Logo={EstLogo} />
            <ZNav />
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
