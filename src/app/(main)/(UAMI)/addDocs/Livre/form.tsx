"use client";
import * as f from "@/components/Form";
import addLivre from "@/components/server/addLivre";
import Button from "@/components/ui/Button";
import { useEffect, useRef, useState } from "react";
import * as Toast from "@/components/ui/toast";
import { experimental_useFormStatus } from "react-dom";

const Form = ({ children }: { children: React.ReactNode }) => {
  const form = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <f.FormRoot
      ref={form}
      className="w-full"
      action={async (FormData) => {
        const data = await addLivre(FormData);
        if (data) {
          setOpen(true);
          form.current?.reset();
        }
      }}
    >
      {children}
      <f.FormSubmit asChild>
        <Button size={"md"} className="bg-[#CA3CFF] text-white w-3/12">
          envoyer livre
        </Button>
      </f.FormSubmit>

      <Toast.Provider>
        <Toast.Root open={open} Ttype={"success"}>
          <Toast.Title>succès</Toast.Title>
          <Toast.Description>Livre ajouté avec succés</Toast.Description>
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
