"use client"
import * as f from "@/components/Form"
import { AddExe } from "@/components/addExemplaire"
import addLivre from "@/components/server/Livre/addLivre"
import Button from "@/components/ui/Button"
import Header from "@/components/ui/Header"
import * as Toast from "@/components/ui/toast"
import { convertBase64 } from "@/utils/uploadIMG"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const Form = ({ children }: { children: React.ReactNode }) => {
  const [livre, setLivre] = useState<Map<number, string>>(new Map())
  const form = useRef<HTMLFormElement>(null)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  
  useEffect(() => {
    if (
      (open1 === true && isLoading === true) ||
      (open2 === true && isLoading === true)
    ) {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open1, open2]);
  return (
    <f.FormRoot 
      onSubmit={() => {
        setIsLoading(true);
      }}
      ref={form}
      className="w-full pt-2"
      action={async (FormData) => {
       
     
       const garde= await convertBase64(FormData.get("page_garde") )
        console.log(garde)
        const data = await addLivre(FormData, livre ,garde);
        if (data) {
          setOpen1(true)
          setTimeout(() => setOpen1(false), 1000)
          router.push("/livre")
          form.current?.reset()
          setLivre(new Map())
        } else {
          setOpen2(true);
          setTimeout(() => setOpen2(false), 1000);
        }
      }}
    >
      {children}

        


      <Header className="p-6">Ajouter un exemplaire</Header>

      <AddExe
        livre={{
          set: setLivre,
          value: livre,
        }}
      />

      <footer className="flex justify-center items-center py-12">
        <f.FormSubmit asChild>
          <Button
            size={"md"}
            isLoading={isLoading}
            className="bg-[#CA3CFF] text-white w-3/12"
          >
            Ajouter Livre
          </Button>
        </f.FormSubmit>
      </footer>

      <Toast.Provider duration={1000}>
        <Toast.Root open={open1} Ttype={"success"}>
          <div>
            <Toast.Title>succès</Toast.Title>
            <Toast.Description>
              Livre a été ajouté avec succés
            </Toast.Description>
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
  );
};

export default Form;
