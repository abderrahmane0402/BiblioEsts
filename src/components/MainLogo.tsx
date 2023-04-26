import React from "react"
import MLink from "@/ui/MLink"
import MyImage from "./ui/MyImage"
import { StaticImageData } from "next/image"

interface HeaderProps {
  Logo: StaticImageData;
}

export function MainLogo({Logo} : HeaderProps) {
  return (
    <header className='flex justify-center items-center h-24 max-h-[30%]'>
      <MLink href='/dashboard' type={"logo"} font={"none"}>
        <div className='relative w-full h-full'>
          <MyImage src={Logo} alt='LibEST-S' />
        </div>
      </MLink>
    </header>
  )
}
