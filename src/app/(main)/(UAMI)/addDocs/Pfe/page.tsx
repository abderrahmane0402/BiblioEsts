import * as f from "@/components/Form";
import { filiere } from "@/types";
import Header from "@/ui/Header";
import Input from "@/ui/Input";
import Form from "./form";

const Filière: filiere[] = [
  {
    ID_FIL: 1,
    LIBELLE: "Génie Informatique (GI) ",
  },
  {
    ID_FIL: 2,
    LIBELLE: "TECHNIQUES DE MANAGEMENT (TM) ",
  },
  {
    ID_FIL: 3,
    LIBELLE: "TECHNIQUES INSTRUMENTALES & MANAGEMENT DE LA QUALITÉ (TIMQ)",
  },
  {
    ID_FIL: 4,
    LIBELLE: "GÉNIE INDUSTRIEL & MAINTENANCE (GIM)",
  },
];

const page = () => {
  return (
    <Form>
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
