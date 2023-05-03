import { Card } from "@/ui/Card"
import { FC, ReactNode } from "react"

interface Emprunt {
  children: ReactNode
}

const layout: FC<Emprunt> = ({ children }) => {
  return (
    <div className='w-full h-full'>
      <Card type={'full'} className="p-3">{children}</Card>
    </div>
  )
}

export default layout
