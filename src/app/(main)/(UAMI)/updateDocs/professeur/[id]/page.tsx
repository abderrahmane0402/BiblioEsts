import * as f from "@/components/Form"
import { filiere } from "@/types"
import Header from "@/ui/Header"
import Input from "@/ui/Input"
import AutoComplete from "@/components/ui/autoComplete"
import Form from "./form"
import { getProf } from "@/db/Get/Prof"

const Filière = ["GI", "TM", "GIM", "TIMQ"]

const page = async ({ params }: { params: { id: string } } ) => {
  const id = params.id 
  const prf = await getProf(id)

  return (
    <Form id={id}>
      {/* Numero Apogee */}
      <f.FormField name='code' className='w-full'>
        <div className='w-full'>
          <Header size={"md"} className='p'>
            Code :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir un Code</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un Code valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className='h-10' name='code' type='text' defaultValue={prf?.Code} required />
        </f.FormControl>
      </f.FormField>

      {/* Nom */}
      <f.FormField name='nom' className='w-full'>
        <div className='w-full'>
          <Header size={"md"} className='p'>
            Nom :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le nom</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un nom valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className='h-10' name='nom' type='text' defaultValue={prf?.NOM as string} required />
        </f.FormControl>
      </f.FormField>

      {/* Prenom */}
      <f.FormField name='prenom' className='w-full'>
        <div className='w-full'>
          <Header size={"md"} className='p'>
            Prenom :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le prenom</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un prenom valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className='h-10' name='prenom' type='text' required defaultValue={prf?.PRENOM as string} />
        </f.FormControl>
      </f.FormField>

      {/* filiere */}
      <f.FormField name='filiere' className='w-full'>
        <div className='w-full'>
          <Header size={"md"} className='p'>
            Filiere
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir la filiere
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir une filiere
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <AutoComplete options={Filière} name='filiere' defaultValue={prf?.DEPARTEMENT} />
        </f.FormControl>
      </f.FormField>
    </Form>
  )
}

export default page
