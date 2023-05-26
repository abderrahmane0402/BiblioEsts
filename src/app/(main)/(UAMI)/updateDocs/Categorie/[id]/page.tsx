import * as f from "@/components/Form";

import Input from "@/ui/Input";
import Form from "./form";
import { getCategorie, getCategories_Select } from "@/db/Get/Categorie";
import InputSelect from "@/components/ui/Select";
import Header from "@/components/mui/MuiHeader";

export const dynamic = "force-dynamic";
const page = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);
  const [data, cat] = await Promise.all([
    getCategories_Select(),
    getCategorie(id),
  ]);

  return (
    <Form id={id}>
      <div className="flex flex-wrap ">
        <div className="w-full md:w-1/2 border-r-2 border-gray-700 px-4">
          {/* Libelle */}
          <f.FormField name="libelle" className="w-full">
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
                required
                defaultValue={cat?.LIBELLE as string}
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
                Catégorie mère:
              </Header>
            </div>
            <f.FormControl asChild>
              <InputSelect
                options={data}
                autoWidth={false}
                multiple={false}
                native={false}
                name="categorie"
                defaultValue={cat?.CAT_ID_CAT?.toString() || ""}
              />
            </f.FormControl>
          </f.FormField>
        </div>

        {/* sujet */}

        <div className="w-full md:w-1/2 pl-4">
          <f.FormField name="sujet" className="w-full">
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
                Sujet :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir le sujet
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un sujet valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <textarea
                cols={50}
                rows={5}
                name="sujet"
                defaultValue={cat?.SUJET as string}
                className="w-full resize-none bg-slate-200 border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg max-h-[120px]"
              />
            </f.FormControl>
          </f.FormField>
        </div>
      </div>
    </Form>
  );
};

export default page;
