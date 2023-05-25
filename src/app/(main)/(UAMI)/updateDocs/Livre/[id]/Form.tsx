"use client"
import * as f from "@/components/Form"
import updateLivre from "@/components/server/Livre/updatelivre"
import Button from "@/components/ui/Button"
import Header from "@/components/ui/Header"
import * as Toast from "@/components/ui/toast"
import convertBase64 from "@/utils/upload"
import { Prisma, livre } from "@prisma/client"
import { useEffect, useRef, useState } from "react"
import Img from "../../../addDocs/livre/Img"
import Pdf from "../../../addDocs/livre/pdf"
import { useRouter } from "next/navigation"


const Form = ({ id, children }: { id: number; children: React.ReactNode }) => {
  const form = useRef<HTMLFormElement>(null)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [img, setImg] = useState<any>(null)
  const [pdf, setPdf] = useState<any>(null)
  useEffect(() => {
    if (
      (open1 === true && isLoading === true) ||
      (open2 === true && isLoading === true)
    ) {
      setIsLoading(false)
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open1, open2])
  const router=useRouter()

  return (
    <f.FormRoot
      onSubmit={() => {
        setIsLoading(true)
      }}
      ref={form}
      className='w-full'
      action={async (data) => {
        const livre = {
          ID_LIVRE: id,
          TITRE: data.get("title") as string,
          AUTHEUR: data.get("autheur") as string,
          EDITEUR: data.get("editeur") as string,
          DATE_EDITION: Number(data.get("date_edi") as string),
          PRIX: new Prisma.Decimal(parseFloat(data.get("prix")!.toString())),
          ID_CAT: Number(data.get("categorie")) as number,
          CODE: data.get("code") ? Number(data.get("code") as string) : null,
          OBSERVATIONL: data.get("observation") as string,
        }
        fetch("/api/addLivre", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: livre, img: img, pdf: pdf }),
        })
          .then((res) => res.text())
          .then((data) => {
            if (data) {
              setOpen1(true)
              setTimeout(() => setOpen1(false), 1000)
              form.current?.reset()
              router.back()
              
            } else {
              setOpen2(true)
              setTimeout(() => setOpen2(false), 1000)
            }
          })
        // const garde =  convertBase64(FormData.get("page_garde"));
        // const som =  convertBase64(FormData.get("somaire"));
        // const data = await updateLivre(FormData,id,garde,som);
        // if (data) {
        //   setOpen1(true);
        //   setTimeout(() => setOpen1(false), 1000);
        //   form.current?.reset();
        // } else {
        //   setOpen2(true);
        //   setTimeout(() => setOpen2(false), 1000);
        // }
      }}
    >
      {children}
      <div className='w-full flex gap-3 pl-4'>
        <f.FormField name='page_garde' className='w-1/2'>
          <div className='w-full'>
            <Header size={"md"}>Page de garde :</Header>
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
        <f.FormField name='somaire' className='w-full'>
          <div className='w-full'>
            <Header size={"md"}>SOMAIRE :</Header>
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
            Modifier Livre
          </Button>
        </f.FormSubmit>
      </footer>

      <Toast.Provider duration={1000}>
        <Toast.Root open={open1} Ttype={"success"}>
          <div>
            <Toast.Title>succès</Toast.Title>
            <Toast.Description>
              Livre a été modifier avec succés
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
