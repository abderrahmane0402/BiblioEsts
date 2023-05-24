import * as f from "@/components/Form"
import InputSelect from "@/components/ui/Select"
import { getCategories_Select } from "@/db/Get/Categorie"
import Header from "@/ui/Header"
import Input from "@/ui/Input"
import Form from "./form"

export const dynamic = "force-dynamic"

const Page = async () => {
  const data = await getCategories_Select()

  return (
    <div className='overflow-auto w-full h-full'>
      <Form>
        <Header size={"lg"}>Information de livre</Header>
        <div className='flex flex-wrap '>
          <div className='w-full md:w-1/2 border-r-2 border-gray-700 px-4'>
            <f.FormField name='title' className='w-full'>
              <div className='w-full'>
                <Header size={"md"} className='p'>
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
                  className='h-10'
                  name='title'
                  type='text'
                  maxLength={255}
                />
              </f.FormControl>
            </f.FormField>
            <f.FormField name='autheur' className='w-full'>
              <div className='w-full'>
                <Header size={"md"}>Auteur :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir l{"'"}auteur
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir l{"'"}auteur valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className='h-10'
                  name='autheur'
                  type='text'
                  maxLength={50}
                />
              </f.FormControl>
            </f.FormField>

            <f.FormField name='editeur' className='w-full'>
              <div className='w-full'>
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
                  className='h-10'
                  name='editeur'
                  type='text'
                  maxLength={50}
                />
              </f.FormControl>
            </f.FormField>

            <f.FormField name='date_edi' className='w-full'>
              <div className='w-full'>
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
                  className='h-10'
                  name='date_edi'
                  type='number'
                  maxLength={50}
                />
              </f.FormControl>
            </f.FormField>
          </div>

          <div className='w-full md:w-1/2 pl-4'>
            <f.FormField name='prix' className='w-full'>
              <div className='w-full'>
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
                  className='h-10'
                  name='prix'
                  type='number'
                  maxLength={50}
                />
              </f.FormControl>
            </f.FormField>
            <f.FormField name='categorie' className='w-full'>
              <div className='w-full'>
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
                  name='categorie'
                  options={data}
                  autoWidth={false}
                  multiple={false}
                  native={false}
                />
              </f.FormControl>
            </f.FormField>
            <f.FormField name='code' className='w-full'>
              <div className='w-full'>
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
                  className='h-10'
                  name='code'
                  type='number'
                  maxLength={50}
                />
              </f.FormControl>
            </f.FormField>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Page
