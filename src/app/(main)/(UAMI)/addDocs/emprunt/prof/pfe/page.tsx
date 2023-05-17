import * as f from "@/components/Form";
import Header from "@/components/ui/Header";
import Input from "@/components/ui/Input";
import AutoComplete from "@/components/ui/autoComplete";
import { getProfshort } from "@/db/Get/Prof";
import Form from "../../form";
import { getCote } from "@/db/Get/Pfe";

const Page = async () => {
  const [Apoge, Inv] = await Promise.all([getProfshort(), getCote()]);
  const result = Apoge.map((obj) => obj.Code);
  const result2 = Inv.map((obj) => obj.Cote);
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
          {/* npm et prenom */}
          <f.FormField name="prof" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
                Code :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir le code
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un code valid
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <AutoComplete options={result} name="prof" />
            </f.FormControl>
          </f.FormField>
        </div>
        <div className="w-full md:w-1/2 border-r-2 border-gray-700 px-4">
          {/* date_D */}
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
