"use client"
import Input from "@/components/ui/Input"
import { useState } from "react"

const Img = () => {
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
      <input type='hidden' value={img} name='page_garde' />
      <Input
        className='h-12'
        name='page_garde'
        type='file'
        required
        onChange={(e) => {
          convertBase64(e.target.files ? e.target.files[0] : null)
        }}
      />
    </>
  )
}

export default Img
