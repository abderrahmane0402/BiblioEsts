"use client"
import { IconButton } from "@mui/material"
import { useRouter } from "next/navigation"
import { FC, useRef, useState } from "react"
import { TbRefresh } from "react-icons/tb"

interface RefreshProps {}

const Refresh: FC<RefreshProps> = ({}) => {
  const router = useRouter()
  return (
    <IconButton
      color='primary'
      size='large'
      onClick={() => {
        router.refresh()
      }}
    >
      <TbRefresh />
    </IconButton>
  )
}

export default Refresh
