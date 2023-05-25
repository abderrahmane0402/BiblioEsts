"use client"
import { Divider } from "@mui/material"
import { FC } from "react"

interface SeparatorProps {
  children: React.ReactNode
}

const Separator: FC<SeparatorProps> = ({ children }) => {
  return (
    <li className='mt-7 mb-2'>
      <Divider
        textAlign='left'
        sx={{
          fontSize: "0.75rem",
        }}
      >
        <span className='py-[0.625rem] tracking-wide text-[#3a35418a]'>
          {children}
        </span>
      </Divider>
    </li>
  )
}

export default Separator
