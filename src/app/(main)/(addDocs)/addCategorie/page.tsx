"use client";
import * as f from "@/components/Form";
import Button from "@/ui/Button";
import Header from "@/ui/Header";
import Input from "@/ui/Input";

const page = () => {
  return (
    <f.FormRoot
      className="w-full "
      //</>onSubmit={handleSubmit}
    >
      {/* Libelle */}
      <f.FormField name="libelle" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Titre :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le libellé
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un libellé valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className="h-10"
            name="libelle"
            type="text"
            // onChange={(e) => setEmail(e.target.value)}
            maxLength={50}
            required
          />
        </f.FormControl>
      </f.FormField>
      {/* sujet */}

      <f.FormField name="sujet" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Sujet :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le sujet</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un sujet valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className="h-10"
            name="sujet"
            type="text"
            // onChange={(e) => setEmail(e.target.value)}
            maxLength={255}
          />
        </f.FormControl>
      </f.FormField>
      <footer className='flex justify-center items-center py-12'>
        <f.FormSubmit asChild>
          <Button size={"md"} className='bg-[#CA3CFF] text-white w-3/12'>
            Ajouter une catégorie
          </Button>
        </f.FormSubmit>
      </footer>
    </f.FormRoot>
  );
};

export default page;
