import { Card } from "@/ui/Card"
import { FC, ReactNode } from "react"

interface addDocs {
  children: ReactNode
}

const layout: FC<addDocs> = ({ children }) => {
  return (
    <div className='w-full h-full overflow-y-scroll '>
      <Card type={'full'} className="p-3">{children}</Card>
    </div>
  )
}

export default layout
