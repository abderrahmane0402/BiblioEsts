"use client"
import Header from "@/components/mui/MuiHeader"
import { getLink, getTitle } from "@/utils/dashboard"
import Button from "@mui/material/Button"
import Link from "next/link"
import { Button2, Button3 } from "./Button"

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
      <div className='flex justify-center items-center gap-4'>
        <Button2 name='livre' />
        <Button2 name='pfe' />
        <Button3 name='encours' />
        <Button3 name='historique' />
      </div>
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
