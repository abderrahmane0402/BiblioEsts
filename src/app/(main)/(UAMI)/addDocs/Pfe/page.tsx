import * as f from "@/components/Form";

import Header from "@/ui/Header";
import Input from "@/ui/Input";
import Form from "./form";
import AutoComplete from "@/components/ui/autoComplete";

const Filière= [
  {
    id : 1,
    LIBELLE: "Génie Informatique (GI) ",
  },
  {
    id : 2,   
    LIBELLE: "TECHNIQUES DE MANAGEMENT (TM) ",
  },
  {
    id : 3, 
    LIBELLE: "TECHNIQUES INSTRUMENTALES & MANAGEMENT DE LA QUALITÉ (TIMQ)",
  },
  {
    id : 4,
    LIBELLE: "GÉNIE INDUSTRIEL & MAINTENANCE (GIM)",
  },
];


const page = () => {
  const result2 = Filière.map((obj) => obj.LIBELLE);
  return (
    <Form>
      {/* sujet */}
      <f.FormField name="cote" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Code :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le cote</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un cote valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className="h-10" name="cote" type="text" required />
        </f.FormControl>
      </f.FormField>

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
          <Input className="h-10" name="sujet" type="text" required />
        </f.FormControl>
      </f.FormField>
      {/* realisateur */}

      <f.FormField name="realisateur" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Réalisateur :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le nom de realisateur
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un nom de realisateur valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className="h-10" name="realisateur" type="text" required />
        </f.FormControl>
      </f.FormField>
      {/* encadrant */}
      <f.FormField name="encadrant" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Encadrant :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le nom d{"'"}encadrant
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un nom d{"'"}encadrant valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className="h-10" name="encadrant" type="text" required />
        </f.FormControl>
      </f.FormField>
      {/* filiere */}
      <f.FormField name="filiere" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">Filiere</Header>
          <f.FormMessage match={"valueMissing"}>saisir la filiere</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>saisir une filiere</f.FormMessage>
        </div>
        <f.FormControl asChild>
        <AutoComplete options={result2} name="filiere"  />
        </f.FormControl>
      </f.FormField>
      {/* date_realis */}
      <f.FormField name="date_realis" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Date de réalisation :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir la date de réalisation
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir une date de réalisation valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className="h-10" name="date_realis" type="number" required />
        </f.FormControl>
      </f.FormField>
    </Form>
  );
};

export default page;
