import * as f from "@/components/Form"
import AutoComplete from "@/components/ui/autoComplete"
import Header from "@/ui/Header"
import Input from "@/ui/Input"
import Form from "./form"

const Filière = ["GI", "TM", "GIM", "TIMQ"]

const page = () => {
  return (
    <Form>
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
          <Input className='h-10' name='code' type='text' required />
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
          <Input className='h-10' name='nom' type='text' required />
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
          <Input className='h-10' name='prenom' type='text' required />
        </f.FormControl>
      </f.FormField>

      {/* filiere */}
      <f.FormField name='filiere' className='w-full'>
        <div className='w-full'>
          <Header size={"md"} className='p'>
            Département
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir la Département
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir une Département
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <AutoComplete options={Filière} name='filiere' />
        </f.FormControl>
      </f.FormField>
    </Form>
  )
}

export default page
