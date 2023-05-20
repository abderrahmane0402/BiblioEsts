import * as f from "@/components/Form";
import InputSelect from "@/components/ui/Select";
import { getCategories_Select } from "@/db/Get/Categorie";
import Header from "@/ui/Header";
import Input from "@/ui/Input";
import Form from "./form";

export const dynamic = "force-dynamic";
const Page = async () => {
  const data = await getCategories_Select();

  return (
    <div className="overflow-auto w-full h-full">
      <Form>
        <Header size={"lg"}>Information de livre</Header>
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 border-r-2 border-gray-700 px-4">
            <f.FormField name="title" className="w-full">
              <div className="w-full">
                <Header size={"md"} className="p">
                  Titre :
                </Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir le titre
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir un titre valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-10"
                  name="title"
                  type="text"
                  maxLength={255}
                  required
                />
              </f.FormControl>
            </f.FormField>
            <f.FormField name="autheur" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Autheur :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir l{"'"}auteur
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir l{"'"}auteur valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-10"
                  name="autheur"
                  type="text"
                  maxLength={50}
                />
              </f.FormControl>
            </f.FormField>

            <f.FormField name="editeur" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Editeur :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir l{"'"}éditeur
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir l{"'"}éditeur valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-10"
                  name="editeur"
                  type="text"
                  maxLength={50}
                />
              </f.FormControl>
            </f.FormField>

            <f.FormField name="date_edi" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Date d{"'"}édition :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir la date d{"'"}édition
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir la date d{"'"}édition valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-10"
                  name="date_edi"
                  type="number"
                  maxLength={50}
                  required
                />
              </f.FormControl>
            </f.FormField>
            <f.FormField name="prix" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Prix :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir le prix
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir le prix valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-10"
                  name="prix"
                  type="number"
                  maxLength={50}
                  
                />
              </f.FormControl>
            </f.FormField>
            <f.FormField name="categorie" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Catégorie :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir une categorie
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir la categorie valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <InputSelect
                  options={data}
                  autoWidth={false}
                  multiple={false}
                  native={false}
                  defaultValue=""
                />
              </f.FormControl>
            </f.FormField>
          </div>

          <div className="w-full md:w-1/2 pl-4">
            <f.FormField name="code" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Code :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir le code
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir le code valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-10"
                  name="code"
                  type="number"
                  maxLength={50}
                  required
                />
              </f.FormControl>
            </f.FormField>
            <f.FormField name="page_garde" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Page de garde :</Header>
                <f.FormMessage match={"valueMissing"}>
                  Entrer l{"'"}page de garde
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  entrer l{"'"}page de garde valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-12"
                  name="page_garde"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  required
                />
              </f.FormControl>
            </f.FormField>
            <f.FormField name="somaire" className="w-full">
              <div className="w-full">
                <Header size={"md"}>SOMAIRE :</Header>
                <f.FormMessage match={"valueMissing"}>
                  Entrer un SOMAIRE
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  entrer le SOMAIRE valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-12"
                  name="somaire"
                  type="file"
                  accept=".pdf"
                  maxLength={50}
                  required
                />
              </f.FormControl>
            </f.FormField>
            {/* Observation */}
            {/* <f.FormField name="observation" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Observation :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir l{"'"}observation
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir l{"'"}observation valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <textarea
                  cols={50}
                  rows={5}
                  name="observation"
                  className="w-full resize-none bg-slate-200 border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg max-h-[120px]"
                />
              </f.FormControl>
            </f.FormField> */}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Page;
