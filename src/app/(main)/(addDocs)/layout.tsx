import { FC, ReactNode } from "react"


interface addDocs {
  children: ReactNode
}


const  layout : FC<addDocs> = ({ children }) => {
  return (
    <div className="bg-white/70 w-full h-full py-2 px-2 ">
    <div>{children}</div>
    </div>
  )
}

export default layout