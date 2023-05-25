import { MainLogo } from "@/components/MainLogo"
import { ZNav } from "@/components/Nav"
import PageHeader from "@/components/PageHeader"
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
      <main className='flex flex-row h-full w-full overflow-hidden gap-6'>
        {/* NAVIGATION BAR */}
        <div className='h-full min-w-[260px] w-nav text-[#FFF] bg-transparent flex flex-col justify-between'>
          <MainLogo />
          <ZNav />
        </div>
        {/* BODY OF THE PAGE */}
        <div className='h-full w-full flex flex-col pr-6'>
          <PageHeader />
          <div className='container h-full py-6'>{children}</div>
        </div>
      </main>
    </>
  )
}

export default Layout
