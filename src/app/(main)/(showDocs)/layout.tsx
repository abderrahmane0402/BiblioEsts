import { PageHeader2 } from "@/components/PageHeader2"
import { Card } from "@/ui/Card"
import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-full h-full flex flex-col gap-2'>
      <div className='h-auto w-full'>
        <Card
          type={"full"}
          className='flex py-2 px-4 justify-between items-center'
        >
          <PageHeader2 />
        </Card>
      </div>
      <div className='h-full'>
        <Card type={"full"}>{children}</Card>
      </div>
    </div>
  )
}

export default Layout
