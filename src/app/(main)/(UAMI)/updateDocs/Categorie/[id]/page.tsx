import * as f from "@/components/Form";
import Header from "@/ui/Header";
import Input from "@/ui/Input";
import Form from "./form";
import { getCategorie, getCategories_Select } from "@/db/Get/Categorie";
import InputSelect from "@/components/ui/Select";


const page = async ({ params }: { params: { id: number } }) => {
  const id = params.id;
  const [data,cat] = await Promise.all([getCategories_Select(),getCategorie(id)]) ;
  
 
  return (
    <Form id={id}>
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
            required
            defaultValue={cat?.LIBELLE as string}
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
          <Input className="h-10" name="sujet" type="text"  defaultValue={cat?.SUJET as string}/>
        </f.FormControl>
      </f.FormField>
      <f.FormField name="categorie" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            categorie pere:
          </Header>
        </div>
        <f.FormControl asChild>
          <InputSelect
            options={data}
            autoWidth={false}
            multiple={false}
            native={false}
            name="categorie"

          />
        </f.FormControl>
      </f.FormField>
    </Form>
  );
};

export default page;
