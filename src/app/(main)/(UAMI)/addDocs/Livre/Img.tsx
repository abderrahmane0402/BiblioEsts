"use client"
import Input from "@/components/ui/Input"
import { Dispatch } from "react"

const Img = ({ setImg }: { setImg: Dispatch<any> }) => {
  function convertBase64(file: any) {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      setImg(fileReader.result)
    }
  }

  return (
    <>
      <Input
        className='h-12 font-medium '
        name='page_garde'
        type='file'
        
        onChange={(e) => {
          convertBase64(e.target.files ? e.target.files[0] : null)
        }}
      />
    </>
  )
}

export default Img
