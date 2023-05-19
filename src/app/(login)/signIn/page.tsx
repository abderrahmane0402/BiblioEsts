"use client"
import * as f from "@/components/Form"
import { Auth } from "@/components/server/Auth"
import Header from "@/components/ui/Header"
import Input from "@/components/ui/Input"
import Paragraph from "@/components/ui/Paragraph"
import LoadingButton from "@mui/lab/LoadingButton"
import { useRouter } from "next/navigation"
import { FC, useRef, useState } from "react"

interface Sign_inProps {}

const Sign_in: FC<Sign_inProps> = ({}) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const form = useRef<HTMLFormElement>(null)
  const router = useRouter()
  return (
    <div className='flex flex-col items-center'>
      <Header>Login</Header>
      <Paragraph type={"sub_title"} size={"sm"}>
        Sign into your account
      </Paragraph>
      <f.FormRoot
        ref={form}
        className='w-4/5 flex flex-col items-center justify-center gap-2'
        action={async (FormData) => {
          const res = await Auth(FormData)
          if (res) {
            sessionStorage.setItem("login", FormData.get("login") as string)
            sessionStorage.setItem("password", FormData.get("pass") as string)
            router.push("/dashboard")
          } else {
            setError(true)
          }
          setLoading(false)
        }}
        onSubmit={() => setLoading(true)}
      >
        {error && (
          <Paragraph type={"warning"} size={"sm"}>
            incorrect login ou mot de pass
          </Paragraph>
        )}
        <f.FormField name='email'>
          <div className='flex justify-between'>
            <f.FormLabel>Email :</f.FormLabel>
            <f.FormMessage match={"valueMissing"}>
              saisir votre email
            </f.FormMessage>
            <f.FormMessage match={"typeMismatch"}>
              saisir un email valide
            </f.FormMessage>
          </div>
          <f.FormControl asChild>
            <Input name='login' type='text' maxLength={40} required />
          </f.FormControl>
        </f.FormField>
        <f.FormField name='pass'>
          <div className='flex justify-between'>
            <f.FormLabel>Password :</f.FormLabel>
            <f.FormMessage match={"tooShort"}>
              minimum 8 caractere
            </f.FormMessage>
            <f.FormMessage match={"valueMissing"}>
              enter your password
            </f.FormMessage>
          </div>
          <f.FormControl asChild>
            <Input name='pass' type='password' minLength={8} required />
          </f.FormControl>
        </f.FormField>
        <f.FormSubmit asChild className='w-full mt-3'>
          <LoadingButton
            className='w-full bg-[#1976d2]'
            loading={loading}
            disabled={loading}
            variant='contained'
            onClick={() => {
              form.current?.submit()
            }}
          >
            Sign in
          </LoadingButton>
        </f.FormSubmit>
      </f.FormRoot>
    </div>
  )
}

export default Sign_in
