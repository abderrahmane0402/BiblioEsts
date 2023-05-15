"use client";
import * as f from "@/components/Form";
import updateLivre from "@/components/server/Livre/updatelivre";
import Button from "@/components/ui/Button";
import * as Toast from "@/components/ui/toast";
import { FC, ReactPortal, useEffect, useRef, useState } from "react";

interface FormProps extends ReactPortal{
  id : number  ,
  children :  React.ReactNode
}

  
  const Form :  FC<FormProps> =  ({id , children }) => {
      

  const form = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (open === true && isLoading === true) {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);


  return (
    <f.FormRoot
      onSubmit={() => {
        setIsLoading(true);
      }}
      ref={form}
      className="w-full"
      action={async (FormData) => {
        const data = await updateLivre(FormData  , id);
        if (data) {
          setOpen(true);
          form.current?.reset();
        }
      }}
    >
      
      {children}
      <f.FormSubmit asChild>
        <Button
          size={"md"}
          isLoading={isLoading}
          className="bg-[#CA3CFF] text-white w-3/12"
        >
          Modifier le  livre
        </Button>
      </f.FormSubmit>

      <Toast.Provider>
        <Toast.Root open={open} Ttype={"success"}>
          <div>
            <Toast.Title>succès</Toast.Title>
            <Toast.Description>Livre a été modifié avec succés</Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setOpen(false)}>
            <button className="bg-transparent border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg">
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
