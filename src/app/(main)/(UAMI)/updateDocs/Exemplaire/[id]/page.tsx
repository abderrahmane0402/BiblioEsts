import * as f from "@/components/Form"
import { getExemplaire } from "@/db/Get/Livres"
import Header from "@/ui/Header"
import Input from "@/ui/Input"
import Form from "./Form"

export const dynamic = "force-dynamic"

const Page = async ({ params }: { params: { id: string } }) => {
  // const data = await getCategories_Select();
  const id = parseInt(params.id)
  const Expl = await getExemplaire(id)

  return (
    <Form id={id}>
      {/* nbr_INV */}
      <f.FormField name='nbr_invEX' className='w-full'>
        <div className='w-full'>
          <Header size={"md"} className='p'>
            Nombre d{"'"}inventaire :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le nombre d{"'"}inventaire
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un nombre d{"'"}inventaire valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className='h-10'
            name='nbr_invEX'
            type='number'
            maxLength={255}
            defaultValue={Expl!.N_INVENTAIRE as number}
            required
          />
        </f.FormControl>
      </f.FormField>

      <input type='hidden' name='iD_LIVRE' value={Expl?.ID_LIVRE} />

      {/* Observation_EXemplaire */}
      <f.FormField name='observationEX' className='w-full'>
        <div className='w-full'>
          <Header size={"md"}>Observation :</Header>
          <f.FormMessage match={"valueMissing"}>
            saisir l{"'"}observation
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir l{"'"}observation valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <textarea
            cols={50}
            rows={5}
            name='observationEX'
            className='w-full resize-none bg-slate-200 border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg max-h-[120px]'
            defaultValue={Expl?.OBSERVATIONE as string}
          />
        </f.FormControl>
      </f.FormField>
    </Form>
  )
}

export default Page
