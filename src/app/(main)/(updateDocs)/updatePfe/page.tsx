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
      {/* sujet */}

      <f.FormField name="sujet" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Sujet :
          </Header>
          <f.FormMessage match={"valueMissing"}>modifier le sujet</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            modifier un sujet valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className="h-10"
            name="sujet"
            type="text"
            // onChange={(e) => setEmail(e.target.value)}
            maxLength={100}
            required
            // value={}
          />
        </f.FormControl>
      </f.FormField>
      {/* realisateur */}

      <f.FormField name="realisateur" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Réalisateur :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            modifier le nom de realisateur
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            modifier un nom de realisateur valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className="h-10"
            name="realisateur"
            type="text"
            // onChange={(e) => setEmail(e.target.value)}
            maxLength={100}
            required
            // value={}
          />
        </f.FormControl>
      </f.FormField>
      {/* encadrant */}
      <f.FormField name="encadrant" className="w-full">
      <div className="w-full">
          <Header size={"md"} className="p">
          Encadrant :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            modifier le nom d{"'"}encadrant
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            modifier un nom d{"'"}encadrant valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className="h-10"
            name="encadrant"
            type="text"
            // onChange={(e) => setEmail(e.target.value)}
            maxLength={100}
            required
            // value={}

          />
        </f.FormControl>
            

      </f.FormField>
      {/* date_realis */}
      <f.FormField name="date_realis" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Date de réalisation :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            modifier la date de réalisation
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            modifier une date de réalisation valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className="h-10"
            name="date_realis"
            type="date"
            // onChange={(e) => setEmail(e.target.value)}
            required
            // value={}
          />
        </f.FormControl>
      </f.FormField>
      <footer className="flex justify-center items-center py-12">
        <f.FormSubmit asChild>
          <Button size={"md"} className="bg-[#CA3CFF] text-white w-3/12">
            {""} Modifier le Pfe {""}
          </Button>
        </f.FormSubmit>
      </footer>
    </f.FormRoot>
  );
};

export default page;
