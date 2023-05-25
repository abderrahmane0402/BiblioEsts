"use client"
import { getLink, getTitle } from "@/utils/dashboard"
import Button from "@mui/material/Button"
import { TocIconN } from "./mui icons/icon"
import Link from "next/link"

export function PageHeader2() {
  const link = getLink()
  return (
    <div className='w-full border-b px-2 py-2 border-black/30 flex justify-between items-center'>
      <div className='flex gap-3 justify-center items-center'>
        <span className='rounded-full p-1 bg-blue-500'>
          <TocIconN />
        </span>
        <span className='px-3 text-2xl tracking-wider font-medium round'>
          Liste
        </span>
      </div>
      <Link href={link || ''}>
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
