import * as f from "@/components/Form";
import Header from "@/components/mui/MuiHeader";
import InputSelect from "@/components/ui/Select";
import { getCategories_Select } from "@/db/Get/Categorie";
import { getLivre } from "@/db/Get/Livres";
import Input from "@/ui/Input";
import Form from "./Form";

export const dynamic = "force-dynamic";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getCategories_Select();
  const id = parseInt(params.id);
  const livre = await getLivre(id);

  return (
    <div className="overflow-auto w-full h-full">
      <Form id={id}>
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 border-r-2 border-gray-700 px-4">
            {/* nombre_inv */}
            <f.FormField name="title" className="w-full">
              <div className="w-full">
                <Header
                  variant="h6"
                  sx={{
                    fontSize: "1.4993rem",
                    color: "#3a3541de",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
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
                  defaultValue={livre?.TITRE as string}
                  // value={livre?.TITRE}
                />
              </f.FormControl>
            </f.FormField>
            {/* autheur */}
            <f.FormField name="autheur" className="w-full">
              <div className="w-full">
                <Header
                  variant="h6"
                  sx={{
                    fontSize: "1.4993rem",
                    color: "#3a3541de",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Auteur :
                </Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir l{"'"}autheur
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir l{"'"}autheur valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-10"
                  name="autheur"
                  type="text"
                  maxLength={50}
                  defaultValue={livre?.AUTHEUR as string}
                />
              </f.FormControl>
            </f.FormField>

            {/* Editeur */}

            <f.FormField name="editeur" className="w-full">
              <div className="w-full">
                <Header
                  variant="h6"
                  sx={{
                    fontSize: "1.4993rem",
                    color: "#3a3541de",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Editeur :
                </Header>
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
                  defaultValue={livre?.EDITEUR as string}
                />
              </f.FormControl>
            </f.FormField>

            {/* Date edition */}

            <f.FormField name="date_edi" className="w-full">
              <div className="w-full">
                <Header
                  variant="h6"
                  sx={{
                    fontSize: "1.4993rem",
                    color: "#3a3541de",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Date d{"'"}édition :
                </Header>
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
                  defaultValue={livre?.DATE_EDITION || ""}
                />
              </f.FormControl>
            </f.FormField>
            {/* prix */}
          </div>

          <div className="w-full md:w-1/2 pl-4">
            {/* Code */}
            <f.FormField name="prix" className="w-full">
              <div className="w-full">
                <Header
                  variant="h6"
                  sx={{
                    fontSize: "1.4993rem",
                    color: "#3a3541de",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Prix :
                </Header>
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
                  required
                  defaultValue={parseFloat(livre!.PRIX!.toString())}
                />
              </f.FormControl>
            </f.FormField>
            <f.FormField name="categorie" className="w-full">
              <div className="w-full">
                <Header
                  variant="h6"
                  sx={{
                    fontSize: "1.4993rem",
                    color: "#3a3541de",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Catégorie :
                </Header>
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
                  name="categorie"
                  defaultValue={livre?.ID_CAT?.toString() || ""}
                />
              </f.FormControl>
            </f.FormField>
            <f.FormField name="code" className="w-full">
              <div className="w-full">
                <Header
                  variant="h6"
                  sx={{
                    fontSize: "1.4993rem",
                    color: "#3a3541de",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Code :
                </Header>
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
                  defaultValue={livre?.CODE as number}
                />
              </f.FormControl>
            </f.FormField>
            {/* Observation */}
            <f.FormField name="observation" className="w-full">
              <div className="w-full">
                <Header
                  variant="h6"
                  sx={{
                    fontSize: "1.4993rem",
                    color: "#3a3541de",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Observation :
                </Header>
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
                  defaultValue={livre?.OBSERVATIONL as string}
                  className="w-full resize-none bg-slate-200 border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg max-h-[120px]"
                />
              </f.FormControl>
            </f.FormField>
          </div>
        </div>
      </Form>
    </div>
  );
};
export default Page;
