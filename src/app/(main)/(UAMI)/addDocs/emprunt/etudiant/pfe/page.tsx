import * as f from "@/components/Form";
import Header from "@/components/ui/Header";
import Input from "@/components/ui/Input";
import AutoComplete from "@/components/ui/autoComplete";
import { getEtudiantsShort } from "@/db/Get/Etudiant";
import { getNinv } from "@/db/Get/Livres";
import Form from "../../form";

const Page = async () => {
  const [Apoge, Inv] = await Promise.all([getEtudiantsShort(), getNinv()]);
  const result = Apoge.map((obj) => obj.N_APOGEE);
  const result2 = Inv.map((obj) => obj.N_INVENTAIRE);
  return (
    <Form>
      <div className="flex w-full">
        <div className="w-full md:w-1/2 border-r-2 border-gray-700 px-4">
          {/* nmr_Inv */}
          <f.FormField name="pfe" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
                N d{"'"}inventaire :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir le numero d{"'"}inventaire
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un nombre d{"'"}inventaire valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <AutoComplete options={result2} name="pfe" />
            </f.FormControl>
          </f.FormField>
          {/* num_apogee */}
          <f.FormField name="num_apogee" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
                Numéro d{"'"}apogée :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir le numéro d{"'"}apogée
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un numéro d{"'"}apogée valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <AutoComplete options={result} name="num_apogee" />
            </f.FormControl>
          </f.FormField>
          {/* date_D */}
        </div>
        <div className="w-full md:w-1/2 px-4">
          <f.FormField name="date_D" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
                Date début :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir la date début
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir une date début valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="date_D"
                type="date"
                maxLength={255}
                required
              />
            </f.FormControl>
          </f.FormField>
          {/* date_f */}
          <f.FormField name="date_f" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
                Date fin :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir la date fin
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir une date fin valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="date_f"
                type="date"
                maxLength={255}
                required
              />
            </f.FormControl>
          </f.FormField>
        </div>
      </div>
    </Form>
  );
};

export default Page;
