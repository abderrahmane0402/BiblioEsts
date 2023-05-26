import { PageHeader2 } from "@/components/PageHeader2"
import { Card } from "@/ui/Card"
import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-full h-full flex flex-col'>
        <PageHeader2 />
        <Card type={"full"} className='flex flex-col mt-6'>
          {children}
        </Card>
    </div>
  )
}

export default Layout
