import * as f from "@/components/Form"
import Input from "@/ui/Input"
import Form from "./Form"
import { getPfe } from "@/db/Get/Pfe"
import AutoComplete from "@/components/ui/autoComplete"
import Header from "@/components/mui/MuiHeader"
const Filière = ["GI", "TM", "GIM", "TIMQ"]

export const dynamic = "force-dynamic"

const Page = async ({ params }: { params: { id: string } }) => {
  // const data = await getCategories_Select();
  const id = params.id
  const Pfe = await getPfe(id)

  return (
    <Form id={id}>
      {/* sujet */}
      <f.FormField name='cote' className='w-full'>
        <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Cote :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le cote</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un cote valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='cote'
            type='text'
            required
            defaultValue={Pfe?.Cote}
          />
        </f.FormControl>
      </f.FormField>

      <f.FormField name='sujet' className='w-full'>
        <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Sujet :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            modifier le sujet
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            modifier un sujet valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='sujet'
            type='text'
            // onChange={(e) => setEmail(e.target.value)}
            maxLength={100}
            required
            defaultValue={Pfe?.SUJET as string}

            // value={}
          />
        </f.FormControl>
      </f.FormField>
      {/* realisateur */}

      <f.FormField name='realisateur' className='w-full'>
        <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Réalisateur :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            modifier le nom de realisateur
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            modifier un nom de realisateur valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='realisateur'
            type='text'
            // onChange={(e) => setEmail(e.target.value)}
            maxLength={100}
            defaultValue={Pfe?.REALISATEUR ?? ""}

            // value={}
          />
        </f.FormControl>
      </f.FormField>
      {/* encadrant */}
      <f.FormField name='encadrant' className='w-full'>
        <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Encadrant :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            modifier le nom d{"'"}encadrant
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            modifier un nom d{"'"}encadrant valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='encadrant'
            type='text'
            // onChange={(e) => setEmail(e.target.value)}
            maxLength={100}
            required
            defaultValue={Pfe?.ENCADRANT as string}
            // value={}
          />
        </f.FormControl>
        <f.FormField name='filiere' className='w-full'>
          <div className='w-full'>
              <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
              Filière
            </Header>
            <f.FormMessage match={"valueMissing"}>
              saisir la filiere
            </f.FormMessage>
            <f.FormMessage match={"typeMismatch"}>
              saisir une filiere
            </f.FormMessage>
          </div>
          <f.FormControl asChild>
            <AutoComplete
              options={Filière}
              name='filiere'
              defaultValue={Pfe?.Filiere as string}
            />
          </f.FormControl>
        </f.FormField>
      </f.FormField>
      {/* date_realis */}
      <f.FormField name='date_realis' className='w-full'>
        <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Date de réalisation :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            modifier la date de réalisation
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            modifier une date de réalisation valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='date_realis'
            type='number'
            // onChange={(e) => setEmail(e.target.value)}
            defaultValue={Pfe?.DATE_REALISATION as number}
            // value={}&
          />
        </f.FormControl>
      </f.FormField>
    </Form>
  )
}

export default Page
