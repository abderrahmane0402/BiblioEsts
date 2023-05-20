"use client"
import * as f from "@/components/Form"
import addApprovi from "@/components/server/approvis/addApprovis"
import Button from "@/components/ui/Button"
import Header from "@/components/ui/Header"
import * as Toast from "@/components/ui/toast"
import { useEffect, useRef, useState } from "react"
import AddLivre from "./addLivre"
import Link from "next/link"

const Form = ({ children }: { children: React.ReactNode }) => {
  const form = useRef<HTMLFormElement>(null)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [livre, setLivre] = useState<Map<number, number>>(new Map())
  const [userInfo, setUserInfo] = useState<string | null>(null)
  useEffect(() => {
    setUserInfo(sessionStorage.getItem("login"))
  }, [])
  useEffect(() => {
    if (
      (open1 === true && isLoading === true) ||
      (open2 === true && isLoading === true)
    ) {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open1, open2])
  return (
    <f.FormRoot
      onSubmit={() => {
        setIsLoading(true)
      }}
      ref={form}
      className='w-full'
      action={async (FormData) => {
        const data = await addApprovi(FormData, userInfo || "", livre)
        if (data) {
          setOpen1(true)
          setTimeout(() => setOpen1(false), 1000)
          form.current?.reset()
          setLivre(new Map())
        } else {
          setOpen2(true)
          setTimeout(() => setOpen2(false), 1000)
        }
      }}
    >
      {children}
      <Header size={"md"}>livre :</Header>
      {/* <div className='flex gap-4'>
        <AddLivre livre={{ value: livre, set: setLivre }} />
        <Link
          href={"/addDocs/fournisseur"}
          className='h-10 text-xl flex items-center justify-center transition-colors px-2 rounded-md text-white bg-sky-400 hover:bg-sky-600 active:bg-sky-200'
        >
          nouveau Livre
        </Link>
      </div> */}
      <footer className='flex justify-center items-center py-12'>
        <f.FormSubmit asChild>
          <Button
            size={"md"}
            isLoading={isLoading}
            className='bg-[#CA3CFF] text-white w-3/12'
          >
            Ajouter approvis
          </Button>
        </f.FormSubmit>
      </footer>

      <Toast.Provider duration={1000}>
        <Toast.Root open={open1} Ttype={"success"}>
          <div>
            <Toast.Title>succès</Toast.Title>
            <Toast.Description>
              approvisionement a été ajouté avec succés
            </Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setOpen1(false)}>
            <button className='bg-transparent border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg'>
              fermer
            </button>
          </Toast.Close>
        </Toast.Root>
        <Toast.Root open={open2} Ttype={"error"}>
          <div>
            <Toast.Title>Error</Toast.Title>
            <Toast.Description>
              verifier les informations inserer
            </Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setOpen2(false)}>
            <button className='border-2 border-white/50 hover:border-white rounded-md p-2 font-thin text-lg'>
              fermer
            </button>
          </Toast.Close>
        </Toast.Root>
        <Toast.ToastViewport className='[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none' />
      </Toast.Provider>
    </f.FormRoot>
  )
}

export default Form
