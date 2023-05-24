"use client"
import Input from "@/components/ui/Input"
import { useState } from "react"

const Pdf = () => {
  const [img, setImg] = useState<any>()
  function convertBase64(file: any) {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      setImg(fileReader.result)
    }
  }

  return (
    <>
      <textarea hidden value={img} name='somaire' />
      <Input
        className='h-12'
        name='somaire'
        type='file'
        accept='.pdf'
        required
        onChange={(e) => {
          convertBase64(e.target.files ? e.target.files[0] : null)
        }}
      />
    </>
  )
}

export default Pdf
