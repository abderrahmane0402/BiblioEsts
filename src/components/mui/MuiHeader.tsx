"use client"
import Typography, { TypographyProps } from "@mui/material/Typography"
import React, { FC } from "react"

interface HeaderProps extends TypographyProps {
  children: React.ReactNode
}

const Header: FC<HeaderProps> = ({ children, ...props }) => {
  return (
    <Typography {...props}>
      {children}
    </Typography>
  )
}
export default Header
