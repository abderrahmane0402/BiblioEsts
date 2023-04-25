"use client"
import Header from "@/components/ui/Header"
import Input from "@/components/ui/Input"
import Paragraph from "@/components/ui/Paragraph"
import { FC, FormEvent, useState } from "react"

interface Sign_inProps {}

const Sign_in: FC<Sign_inProps> = ({}) => {
  const [email, setEmail] = useState<string>("")
  const [pass, setPass] = useState<string>("")
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(email + pass)
  }
  return (
    <div className='flex flex-col items-center'>

      <Header>Login</Header>
      <Paragraph type={"sub_title"} size={"sm"}>
        Sign into your account
      </Paragraph>

    </div>
  )
}

export default Sign_in
