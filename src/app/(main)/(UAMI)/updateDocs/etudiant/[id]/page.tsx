import * as f from "@/components/Form"
import AutoComplete from "@/components/ui/autoComplete"
import { getEtudiant } from "@/db/Get/Etudiant"
import Header from "@/ui/Header"
import Input from "@/ui/Input"
import Form from "./form"

const Filière = ["GI", "TM", "GIM", "TIMQ"]

const page = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id) 
  const etd= await getEtudiant(id)

  return (
    <Form id={id}>
      {/* numero d'insctiption */}
      <f.FormField name='num_ins' className='w-full'>
        <div className='w-full'>
          <Header size={"md"} className='p'>
            numero d{"'"}insctiption :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le numero</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un numero valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className='h-10' name='num_ins' type='text' defaultValue={etd?.N_inscription} required />
        </f.FormControl>
      </f.FormField>
      {/* Numero Apogee */}
      <f.FormField name='num_apoge' className='w-full'>
        <div className='w-full'>
          <Header size={"md"} className='p'>
            numero apogee :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le numero apogee
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un Numero valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className='h-10' name='num_apoge' type='text' required defaultValue={etd?.N_APOGEE} />
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
          <Input className='h-10' name='nom' type='text' required  defaultValue={etd?.NOM as string}/>
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
          <Input className='h-10' name='prenom' type='text' required defaultValue={etd?.PRENOM as string} />
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
          <AutoComplete options={Filière} name='filiere'  defaultValue={etd?.FILERE}/>
        </f.FormControl>
      </f.FormField>
    </Form>
  )
}

export default page
