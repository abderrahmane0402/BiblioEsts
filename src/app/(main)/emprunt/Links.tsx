"use client"
import { getLink } from "@/utils/dashboard"
import Button from "@mui/material/Button"
import Link from "next/link"
import { TocIconN } from "@/components/mui icons/icon"
import { Button2, Button3 } from "./Button"

export function PageHeader2() {
  const link = getLink()
  return (
    <div className='w-full px-2 py-2 flex justify-between items-center'>
      <div className='flex gap-3 justify-center items-center'>
        <span className='rounded-full p-1 bg-blue-500'>
          <TocIconN />
        </span>
        <span className='px-3 text-2xl tracking-wider font-medium round'>
          Liste
        </span>
      </div>
      <div className='flex justify-center items-center pt-2 gap-4'>
        <Button2 name='livre' />
        <Button2 name='pfe' />
        <Button3 name='encours' />
        <Button3 name='historique' />
      </div>
      <Link href={link || ""}>
        <Button
          variant='outlined'
          sx={{
            fontWeight: 900,
            borderRadius: "16px",
          }}
        >
          Ajouter
        </Button>
      </Link>
    </div>
  )
}
