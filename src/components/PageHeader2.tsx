"use client"
import { getLink, getTitle } from "@/utils/dashboard"
import Button from "@mui/material/Button"
import { TocIconN } from "./mui icons/icon"
import Link from "next/link"
import Header from "@/components/mui/MuiHeader"

export function PageHeader2() {
  const link = getLink()
  const Title = getTitle()
  return (
    <div className='w-full flex justify-between items-center'>
      <Header
        variant='h5'
        sx={{ color: "#9155FD", fontSize: "1.4993rem", fontWeight: 500 }}
      >
        Liste Des {Title}
      </Header>
      <Link href={link || ""}>
        <Button
          variant='contained'
          sx={{
            fontWeight: 700,
            backgroundColor: "#9155FD",
          }}
          size='large'
        >
          Ajouter
        </Button>
      </Link>
    </div>
  )
}
