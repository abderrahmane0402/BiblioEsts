"use client"
import { FC, useState } from "react"
import MLink from "./ui/MLink"
import ShowImage from "./ui/ShowImage"

interface LinkImgShowProps {
  href: string
}

const LinkImgShow: FC<LinkImgShowProps> = ({ href }) => {
  const [show, setshow] = useState(false)
  return (
    <>
      <MLink
        href={href}
        type={"link"}
        onClick={(e) => {
          e.preventDefault()
          setshow(true)
        }}
      >
        afficher
      </MLink>
      {show && <ShowImage href={href} show={setshow} />}
    </>
  )
}

export default LinkImgShow
