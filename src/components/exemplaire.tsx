"use client"
import { FC, useRef, useState } from "react"
import Header from "@/components/mui/MuiHeader"
import Iconbutton from "@/components/mui/Iconbutton"
import * as Toast from "@/components/ui/toast"
import { BiBookAdd, BiExit } from "react-icons/bi"
import { CgClose } from "react-icons/cg"
import { Button, TextField } from "@mui/material"
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton"
import { useRouter } from "next/navigation"

interface ExemplaireProps {
  id?: number
}

const Exemplaire: FC<ExemplaireProps> = ({ id }) => {
  const [open, setOpen] = useState(false)
  const [exe, setExe] = useState<any>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  return (
    <>
      <div className='flex justify-between px-2 items-center'>
        <Header variant='h6' textAlign={"start"}>
          Exemplaire
        </Header>
        <Iconbutton
          aria-label='ajouter'
          size='large'
          color='primary'
          onClick={() => setOpen(!open)}
        >
          <BiBookAdd
            className={`${
              open ? "opacity-0" : "opacity-100"
            } transition-opacity`}
          />
          <CgClose
            className={`absolute ${
              !open ? "opacity-0" : "opacity-100"
            } transition-opacity`}
          />
        </Iconbutton>
      </div>
      <div
        className={`flex justify-between px-2 gap-2 items-center ${
          open ? "" : "hidden"
        }`}
      >
        <TextField
          type='number'
          name='exemplaire'
          variant='outlined'
          label='Exemplaire'
          value={exe}
          onChange={(e) => setExe(e.target.value)}
          fullWidth
        />
        <LoadingButton
          className='w-full bg-[#1976d2]'
          loading={loading}
          disabled={loading}
          variant='contained'
          onClick={() => {
            if (exe) {
              setError(false)
              setSuccess(false)
              setLoading(true)
              fetch("/api/exemplaire", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: id, exe: parseInt(exe) }),
              })
                .then((res) => res.text())
                .then((data) => {
                  if (data == "ok") {
                    setExe('')
                    setSuccess(true)
                    setTimeout(() => {
                      setSuccess(false)
                    }, 5000)
                    router.refresh()
                  } else {
                    setError(true)
                    setTimeout(() => {
                      setError(false)
                    }, 5000)
                  }
                  setLoading(false)
                })
            }
          }}
        >
          Ajouter
        </LoadingButton>
      </div>
      <Toast.Provider>
        <Toast.Root open={success} Ttype={"success"}>
          <div>
            <Toast.Title>succès</Toast.Title>
            <Toast.Description>
              Categorie Supprimer avec succés
            </Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setSuccess(false)}>
            <button className='bg-transparent border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg'>
              fermer
            </button>
          </Toast.Close>
        </Toast.Root>
        <Toast.Root open={error} Ttype={"error"}>
          <div>
            <Toast.Title>Error</Toast.Title>
            <Toast.Description>N inventaire deja utiliser</Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setError(false)}>
            <button className='border-2 border-white/50 hover:border-white rounded-md p-2 font-thin text-lg'>
              fermer
            </button>
          </Toast.Close>
        </Toast.Root>
        <Toast.ToastViewport className='[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none' />
      </Toast.Provider>
    </>
  )
}

export default Exemplaire
