import * as f from "@/components/Form"

import Input from "@/components/ui/Input"
import AutoComplete from "@/components/ui/autoComplete"
import { getEtudiantsShort } from "@/db/Get/Etudiant"
import { getNinv } from "@/db/Get/Livres"
import Form from "./form"
import { getDate } from "@/utils/date"
import Header from "@/components/mui/MuiHeader"

export const dynamic = "force-dynamic"
const Page = async ({ params }: { params: { id: string } }) => {
  const [Apoge, Inv] = await Promise.all([getEtudiantsShort(), getNinv()])
  const result = Apoge.map((obj) => obj.N_inscription)
  const result2 = Inv.map((obj) => obj.N_INVENTAIRE)
  return (
    <Form>
      <div className='flex w-full'>
        <div className='w-full md:w-1/2 border-r-2 border-gray-700 px-4'>
          {/* nmr_Inv */}
          <f.FormField name='nmr_Inv' className='w-full'>
            <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>

                N d{"'"}inventaire :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir le numero d{"'"}inventaire
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un nombre d{"'"}inventaire valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <AutoComplete defaultValue={params?.id?.at(0)} options={result2} name='nmr_Inv' />
            </f.FormControl>
          </f.FormField>
          {/* num_apogee */}
          <f.FormField name='num_apogee' className='w-full'>
            <div className='w-full'>
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>

                Numéro d{"'"}inscription :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir le numéro d{"'"}inscription
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un numéro d{"'"}inscription valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <AutoComplete options={result} name='num_apogee' />
            </f.FormControl>
          </f.FormField>
          {/* date_D */}
        </div>
        <div className='w-full md:w-1/2 border-r-2 border-gray-700 px-4'>
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
                defaultValue={getDate(new Date()) || ""}
                required
              />
            </f.FormControl>
          </f.FormField>
        </div>
      </div>
    </Form>
  )
}

export default Page
