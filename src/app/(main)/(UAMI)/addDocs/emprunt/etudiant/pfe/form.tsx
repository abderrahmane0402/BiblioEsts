"use client"
import * as f from "@/components/Form"
import { empruntPfeE } from "@/components/server/Emprunt/pfe"
import Button from "@/components/ui/Button"
import * as Toast from "@/components/ui/toast"
import { useEffect, useRef, useState } from "react"

const Form = ({ children }: { children: React.ReactNode }) => {
  const form = useRef<HTMLFormElement>(null)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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
        const data = await empruntPfeE(FormData, userInfo || "")
        if (data) {
          setOpen1(true)
          setTimeout(() => setOpen1(false), 1000)
          form.current?.reset()
        } else {
          setOpen2(true)
          setTimeout(() => setOpen2(false), 1000)
        }
      }}
    >
      {children}
      <footer className='flex justify-center items-center py-12'>
        <f.FormSubmit asChild>
          <Button
            size={"md"}
            isLoading={isLoading}
            className='bg-[#CA3CFF] text-white w-3/12'
          >
            ajouter Emprunt
          </Button>
        </f.FormSubmit>
      </footer>

      <Toast.Provider>
        <Toast.Root open={open1} Ttype={"success"}>
          <div>
            <Toast.Title>succès</Toast.Title>
            <Toast.Description>Emprunt ajouté avec succés</Toast.Description>
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
