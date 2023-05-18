import Header from "@/components/ui/Header"
import * as f from "@/components/Form"
import Input from "@/components/ui/Input"
import InputSelect from "@/components/ui/Select"
import Button from "@/components/ui/Button"
import { getFournisseurShort } from "@/db/Get/Fournisseur"
import { getNinv } from "@/db/Get/Livres"
import Form from "./form"
import Link from "next/link"

async function Page() {
  const [fournisseur, livre] = await Promise.all([
    getFournisseurShort(),
    getNinv(),
  ])
  let options = fournisseur.map((f) => {
    return {
      ID_CAT: f.ID_FOR,
      LIBELLE: f.ID_FOR + " " + f.NOM + " " + f.PRENOM,
    }
  })
  return (
    <div className='overflow-auto w-full h-full'>
      <Form>
        <Header size={"lg"}>Information de Entreprise</Header>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 border-r-2 border-gray-700 px-4'>
            {/* N d'approvisionnement */}
            <f.FormField name='appro' className='w-full'>
              <div className='w-full'>
                <Header size={"md"} className='p'>
                  N d{"'"}approvisionnement :
                </Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir le numero
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir un nombre valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className='h-10'
                  name='appro'
                  type='number'
                  maxLength={255}
                  required
                />
              </f.FormControl>
            </f.FormField>
            {/* Nom d'Entreprise */}
            <f.FormField name='entreprise' className='w-full'>
              <div className='w-full'>
                <Header size={"md"}>Nom d&apros;entreprise :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir un nom
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir l{"'"}nom valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className='h-10'
                  name='entreprise'
                  type='text'
                  required
                />
              </f.FormControl>
            </f.FormField>

            {/* Address */}

            <f.FormField name='address' className='w-full'>
              <div className='w-full'>
                <Header size={"md"}>Address :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir l&apos;address
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir address valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input className='h-10' name='address' type='text' required />
              </f.FormControl>
            </f.FormField>

            {/* Telephone ou fix */}
            <f.FormField name='tele' className='w-full'>
              <div className='w-full'>
                <Header size={"md"}>Telephone ou fix :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir le numero
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir un numero valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input className='h-10' name='tele' type='text' required />
              </f.FormControl>
            </f.FormField>
          </div>
          <div className='w-full md:w-1/2 border-gray-700 px-4'>
            {/* Date */}
            <f.FormField name='date' className='w-full'>
              <div className='w-full'>
                <div className='w-full'>
                  <Header size={"md"}>Date :</Header>
                  <f.FormMessage match={"valueMissing"}>
                    saisir la date
                  </f.FormMessage>
                  <f.FormMessage match={"typeMismatch"}>
                    saisir la date valide
                  </f.FormMessage>
                </div>
                <f.FormControl asChild>
                  <Input className='h-10' name='date' type='date' required />
                </f.FormControl>
              </div>
            </f.FormField>
            {/* Devis */}
            <f.FormField name='devis' className='w-full'>
              <div className='w-full'>
                <Header size={"md"}>Devis :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir un numero
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir un numero valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input className='h-10' name='devis' type='number' required />
              </f.FormControl>
            </f.FormField>

            {/* fournisseur */}
            <div className='flex flex-col w-full'>
              <Header size={"md"}>fournisseur :</Header>
              <div className='flex gap-2 items-center justify-center'>
                <f.FormField name='fournisseur' className='w-full'>
                  <div className='w-full'>
                    <f.FormMessage match={"valueMissing"}>
                      saisir une fournisseur
                    </f.FormMessage>
                    <f.FormMessage match={"typeMismatch"}>
                      saisir la fournisseur valide
                    </f.FormMessage>
                  </div>
                  <f.FormControl asChild>
                    <InputSelect
                      options={options}
                      autoWidth={false}
                      multiple={false}
                      native={false}
                    />
                  </f.FormControl>
                </f.FormField>
                <Link
                  href={"/addDocs/fournisseur"}
                  className='h-10 flex items-center justify-center transition-colors px-2 rounded-md text-white bg-sky-400 hover:bg-sky-600 active:bg-sky-200'
                >
                  nouveau
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Page