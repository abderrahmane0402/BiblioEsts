"use client"
import { IconButton, IconButtonProps } from "@mui/material"
import { FC, ReactNode } from "react"

interface IconbuttonProps extends IconButtonProps {
  children: ReactNode
}

const Iconbutton: FC<IconbuttonProps> = ({ children, ...props }) => {
  return <IconButton {...props}>{children}</IconButton>
}

export default Iconbutton
