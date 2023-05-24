import * as f from "@/components/Form"
import Header from "@/components/ui/Header"
import Input from "@/components/ui/Input"
import AutoComplete from "@/components/ui/autoComplete"
import { getCote, getCoteAll } from "@/db/Get/Pfe"
import { getProfshort, getProfshortAll } from "@/db/Get/Prof"
import { getPpfeID } from "@/db/Get/emprunt/prof/Ppfe"
import { getDate } from "@/utils/date"
import Form from "./form"

export const dynamic = "force-dynamic"
const Page = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id)
  const emp = await getPpfeID(id)
  let Apoge: any, Inv: any
  if (emp?.DATE_R)
    [Apoge, Inv] = await Promise.all([getProfshortAll(), getCoteAll()])
  else [Apoge, Inv] = await Promise.all([getProfshort(), getCote()])

  const result = Apoge.map(
    (obj: any) => obj.NOM + " " + obj.PRENOM + " " + obj.Code
  )
  const result2 = Inv.map((obj: any) => obj.Cote)

  return (
    <Form id={id}>
      <div className='flex w-full'>
        <div className='w-full md:w-1/2 border-r-2 border-gray-700 px-4'>
          {/* nmr_Inv */}
          <f.FormField name='pfe' className='w-full'>
            <div className='w-full'>
              <Header size={"md"} className='p'>
                Cote :
              </Header>
              <f.FormMessage match={"valueMissing"}>saisir Cote</f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un Cote valide
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
          {/* npm et prenom */}
          <f.FormField name='prof' className='w-full'>
            <div className='w-full'>
              <Header size={"md"} className='p'>
                Code :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir le code
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un code valid
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <AutoComplete
                options={result}
                name='prof'
                defaultValue={emp?.Code}
              />
            </f.FormControl>
          </f.FormField>
        </div>
        <div className='w-full md:w-1/2 border-r-2 border-gray-700 px-4'>
          {/* date_D */}
          <f.FormField name='date_D' className='w-full'>
            <div className='w-full'>
              <Header size={"md"} className='p'>
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
              <Header size={"md"} className='p'>
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
                defaultValue={getDate(emp?.DATE_F) || ""}
                required
              />
            </f.FormControl>
          </f.FormField>
          {emp!.DATE_R !== null ? (
            <f.FormField name='date_r' className='w-full'>
              <div className='w-full'>
                <Header size={"md"} className='p'>
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
