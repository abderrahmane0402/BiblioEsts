"use client";
import * as f from "@/components/Form";
import updatePfe from "@/components/server/Pfe/UpdatePfe";
import Button from "@/components/ui/Button";
import * as Toast from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";


const Form =  ({ id, children }: { id: number ,children : React.ReactNode }) => {
  const router = useRouter()

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
        const data = await updatePfe(FormData  , id);
        if (data) {
          setOpen(true);
          router.refresh;
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
          Modifier le pfe
        </Button>
      </f.FormSubmit>

      <Toast.Provider>
        <Toast.Root open={open} Ttype={"success"}>
          <div>
            <Toast.Title>succès</Toast.Title>
            <Toast.Description>Pfe a été modifié avec succés</Toast.Description>
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
