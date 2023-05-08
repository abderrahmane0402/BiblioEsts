"use client"
import { Dispatch, FC, SetStateAction } from "react"
import MyImage from "@/ui/MyImage"
import { createPortal } from "react-dom"

interface ShowImageProps {
  href: string,
  show:Dispatch<SetStateAction<boolean>>
}

const ShowImage: FC<ShowImageProps> = ({ href , show }) => {
  return createPortal(
    <div className='absolute z-0 top-0 left-0 right-0 w-screen h-screen flex items-center justify-center bg-gloucous '
    onClick={() => show(false)}
    >
      <div className='relative z-10 h-full w-2/4'>
        <MyImage
          src={href}
          alt='Page de Garde'
          loading='lazy'
        />
      </div>
    </div>,
    document.querySelector("#modal")!
  )
}

export default ShowImage
