"use client"
import Input from "@/components/ui/Input"
import { Dispatch, useState } from "react"

const Pdf = ({ setPdf }: { setPdf: Dispatch<any> }) => {
  function convertBase64(file: any) {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      setPdf(fileReader.result)
    }
  }

  return (
    <>
      <Input
        className='h-12 font-medium '
        name='somaire'
        type='file'
        accept='.pdf'
        onChange={(e) => {
          convertBase64(e.target.files ? e.target.files[0] : null)
        }}
      />
    </>
  )
}

export default Pdf
