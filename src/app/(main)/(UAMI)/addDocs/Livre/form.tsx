"use client"
import * as f from "@/components/Form"
import Button from "@/components/ui/Button"

import * as Toast from "@/components/ui/toast"
import { Prisma } from "@prisma/client"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import Img from "./Img"
import Pdf from "./pdf"
import Header from "@/components/mui/MuiHeader"

const Form = ({ children }: { children: React.ReactNode }) => {
  const form = useRef<HTMLFormElement>(null)
  const [open2, setOpen2] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [img, setImg] = useState<any>(null)
  const [pdf, setPdf] = useState<any>(null)

  useEffect(() => {
    if ((open1 === true && isLoading === true) ||
    (open2 === true && isLoading === true)) {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open2])
  return (
    <f.FormRoot
      onSubmit={() => {
        setOpen2(false)
        setIsLoading(true)
      }}
      ref={form}
      className='w-full pt-2'
      action={(data) => {
        const livre = {
          TITRE: data.get("title") as string,
          AUTHEUR: data.get("autheur") as string,
          EDITEUR: data.get("editeur") as string,
          DATE_EDITION: Number(data.get("date_edi") as string),
          PRIX: new Prisma.Decimal(parseFloat(data.get("prix")!.toString())),
          ID_CAT: Number(data.get("categorie")),
          CODE: data.get("code") ? Number(data.get("code") as string) : null,
          // PAGE_DE_GARDE: img,
          // SOMAIRE: pdf,
        }
        fetch("/api/addLivre", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: livre, img: img, pdf: pdf }),
        })
          .then((res) => res.text())
          .then((data) => {
            if (data) {
              setOpen1(true);
              setTimeout(() => setOpen1(false), 1000);
              router.push("/livre")
            } else {
              setOpen2(true)
              setTimeout(() => setOpen2(false), 5000)
            }
          })
      }}
    >
      {children}

      <div className='w-full flex   '>
        <f.FormField name='page_garde' className='w-1/2  px-4'>
          <div className='w-full'>
          <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
                Page de garde :</Header>
            <f.FormMessage match={"valueMissing"}>
              Entrer l{"'"}page de garde
            </f.FormMessage>
            <f.FormMessage match={"typeMismatch"}>
              entrer l{"'"}page de garde valide
            </f.FormMessage>
          </div>
          <f.FormControl asChild>
            <Img setImg={setImg} />
          </f.FormControl>
        </f.FormField>
        <f.FormField name='somaire' className='w-full  pl-4'>
          <div className='w-full'>
          <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>

              Somaire :</Header>


            <f.FormMessage match={"valueMissing"}>
              Entrer un SOMAIRE
            </f.FormMessage>
            <f.FormMessage match={"typeMismatch"}>
              entrer le SOMAIRE valide
            </f.FormMessage>
          </div>
          <f.FormControl asChild>
            <Pdf setPdf={setPdf} />
          </f.FormControl>
        </f.FormField>
      </div>
      <footer className='flex justify-center items-center py-12'>
        <f.FormSubmit asChild>
          <Button
            size={"md"}
            isLoading={isLoading}
            className='bg-[#CA3CFF] text-white w-3/12'
          >
            Ajouter Livre
          </Button>
        </f.FormSubmit>
      </footer>

      <Toast.Provider duration={1000}>
        <Toast.Root open={open1} Ttype={"success"}>
          <div>
            <Toast.Title>succès</Toast.Title>
            <Toast.Description>pfe ajouté avec succés</Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setOpen1(false)}>
            <button className="bg-transparent border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg">
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
            <button className="border-2 border-white/50 hover:border-white rounded-md p-2 font-thin text-lg">
              fermer
            </button>
          </Toast.Close>
        </Toast.Root>
        <Toast.ToastViewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
      </Toast.Provider>
    </f.FormRoot>
  )
}

export default Form
