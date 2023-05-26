import * as f from "@/components/Form"
import Input from "@/components/ui/Input"
import AutoComplete from "@/components/ui/autoComplete"
import { getEtudiantsShort, getEtudiantsShortAll } from "@/db/Get/Etudiant"
import { getCote, getCoteAll } from "@/db/Get/Pfe"
import { getEpfeID } from "@/db/Get/emprunt/etudiant/Epfe"
import { getDate } from "@/utils/date"
import Form from "./form"
import Header from "@/components/mui/MuiHeader"

export const dynamic = "force-dynamic"
const Page = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id)
  const emp = await getEpfeID(id)
  let Apoge: any, Inv: any
  if (emp?.DATE_R)
    [Apoge, Inv] = await Promise.all([getEtudiantsShortAll(), getCoteAll()])
  else [Apoge, Inv] = await Promise.all([getEtudiantsShort(), getCote()])

  const result = Apoge.map((obj : any) => obj.N_inscription)
  const result2 = Inv.map((obj : any) => obj.Cote)
  return (
    <Form id={id}>
      <div className='flex w-full'>
        <div className='w-full md:w-1/2 border-r-2 border-gray-700 px-4'>
          {/* nmr_Inv */}
          <f.FormField name='pfe' className='w-full'>
            <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
                Cote :
              </Header>
              <f.FormMessage match={"valueMissing"}>saisir Cote</f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir Cote valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <AutoComplete
                options={result2}
                name='pfe'
                defaultValue={emp?.Cote}
              />
            </f.FormControl>
          </f.FormField>
          {/* nIns */}
          <f.FormField name='num_apoge' className='w-full'>
            <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
                Numéro d{"'"}inscription :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir un N d{"'"}inscription
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un N d{"'"}inscription valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <AutoComplete
                options={result}
                name='num_apoge'
                defaultValue={emp?.N_inscription}
              />
            </f.FormControl>
          </f.FormField>
          {/* date_D */}
        </div>
        <div className='w-full md:w-1/2 px-4'>
          <f.FormField name='date_D' className='w-full'>
            <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
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
                className='h-10'
                name='date_D'
                type='date'
                maxLength={255}
                required
                defaultValue={getDate(emp?.DATE_D) || ""}
              />
            </f.FormControl>
          </f.FormField>
          {/* date_f */}
          <f.FormField name='date_f' className='w-full'>
            <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
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
                className='h-10'
                name='date_f'
                type='date'
                maxLength={255}
                required
                defaultValue={getDate(emp?.DATE_F) || ""}
              />
            </f.FormControl>
          </f.FormField>
          {emp!.DATE_R !== null ? (
            <f.FormField name='date_r' className='w-full'>
              <div className='w-full'>
              <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
                  Date de retour :
                </Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir la date retour
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir une date retour valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className='h-10'
                  name='date_r'
                  type='date'
                  maxLength={255}
                  required
                  defaultValue={getDate(emp?.DATE_R) || ""}
                />
              </f.FormControl>
            </f.FormField>
          ) : null}
        </div>
      </div>
    </Form>
  )
}

export default Page
