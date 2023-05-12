import * as f from "@/components/Form"
import Button from "@/ui/Button"
import Header from "@/ui/Header"
import Input from "@/ui/Input"
import { AddExe } from "@/components/addExemplaire"
import { getCategories_Select } from "@/db/Get/Categorie"
import InputSelect from "@/components/ui/Select"

import { setLivres } from "@/db/Post/Livre"
import { Prisma, livre } from "@prisma/client"
import { exemplaire } from "@/types"
import { getDate } from "@/utils/date"

async function addLivre(data: FormData) {
  "use server"
  const img = new FormData()
  img.append("image", data.get("page_garde"))
  const res = await fetch("http://localhost:3000/api/saveIMG", {
    method: "POST",
    body: img,
    cache: "no-store",
  })
  const imageName = await res.json()
  const pdf = new FormData()
  pdf.append("pdf", data.get("somaire"))
  const pdfRes = await fetch("http://localhost:3000/api/savePDF", {
    method: "POST",
    body: pdf,
    cache: "no-store",
  })
  const pdfName = await pdfRes.json()
  const livre = {
    TITRE: data.get("title") as string,
    AUTHEUR: data.get("autheur") as string,
    EDITEUR: data.get("editeur") as string,
    DATE_EDITION: new Date(data.get("date_edi")),
    PRIX: new Prisma.Decimal(parseFloat(data.get("prix")!.toString())),
    ID_CAT: Number(data.get("categorie")),
    CODE: data.get("code") ? Number(data.get("code") as string) : null,
    OBSERVATIONL: data.get("observation") as string,
    PAGE_DE_GARDE: `${imageName.id}` as string,
    SOMAIRE: `${pdfName.id}` as string,
  }
  let ex = JSON.parse(data.get("exemplaire")!.toString())
  const exemplaire: exemplaire[] = ex.map((e: exemplaire) => {
    return {
      N_INVENTAIRE: e.N_INVENTAIRE,
      OBSERVATIONE: e.OBSERVATIONE,
    }
  })
  await setLivres(livre, exemplaire)
}
const Page = async () => {
  const data = await getCategories_Select()
  return (
    <div className='overflow-auto w-full h-full'>
      <f.FormRoot className='w-full ' action={addLivre}>
        <Header size={"lg"}>Information de livre</Header>
        <div className='flex flex-wrap '>
          <div className='w-full md:w-1/2 border-r-2 border-gray-700 px-4'>
            {/* nombre_inv */}

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
                  // onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  required
                />
              </f.FormControl>
            </f.FormField>
            {/* autheur */}
            <f.FormField name='autheur' className='w-full'>
              <div className='w-full'>
                <Header size={"md"}>Autheur :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir l{"'"}autheur
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir l{"'"}autheur valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className='h-10'
                  name='autheur'
                  type='text'
                  // onChange={(e) => setEmail(e.target.value)}
                  maxLength={50}
                />
              </f.FormControl>
            </f.FormField>

            {/* Editeur */}

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
                  // onChange={(e) => setEmail(e.target.value)}
                  maxLength={50}
                />
              </f.FormControl>
            </f.FormField>

            {/* Date edition */}

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
                  type='date'
                  maxLength={50}
                  required
                />
              </f.FormControl>
            </f.FormField>
            {/* prix */}
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
                  // onChange={(e) => setEmail(e.target.value)}
                  maxLength={50}
                  required
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
                  options={data}
                  autoWidth={false}
                  multiple={false}
                  native={false}
                />
              </f.FormControl>
            </f.FormField>
          </div>

          <div className='w-full md:w-1/2 pl-4'>
            {/* Code */}
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
                  // onChange={(e) => setEmail(e.target.value)}
                  maxLength={50}
                  required
                />
              </f.FormControl>
            </f.FormField>
            {/* page de garde */}
            <f.FormField name='page_garde' className='w-full'>
              <div className='w-full'>
                <Header size={"md"}>Page de garde :</Header>
                <f.FormMessage match={"valueMissing"}>
                  Entrer l{"'"}page de garde
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  entrer l{"'"}page de garde valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className='h-12'
                  name='page_garde'
                  type='file'
                  accept='.jpg, .jpeg, .png'
                  // onChange={(e) => setEmail(e.target.value)}
                  maxLength={50}
                  required
                />
              </f.FormControl>
            </f.FormField>
            {/* SOMAIRE */}
            <f.FormField name='somaire' className='w-full'>
              <div className='w-full'>
                <Header size={"md"}>SOMAIRE :</Header>
                <f.FormMessage match={"valueMissing"}>
                  Entrer un SOMAIRE
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  entrer le SOMAIRE valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className='h-12'
                  name='somaire'
                  type='file'
                  accept='.pdf'
                  // onChange={(e) => setEmail(e.target.value)}
                  maxLength={50}
                  required
                />
              </f.FormControl>
            </f.FormField>
            {/* Observation */}
            <f.FormField name='observation' className='w-full'>
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
                  name='observation'
                  className='w-full resize-none bg-slate-200 border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg max-h-[120px]'
                />
              </f.FormControl>
            </f.FormField>
          </div>
        </div>

        <Header className='p-6'>Ajouter un exemplaire</Header>

        <AddExe />

        <f.FormSubmit asChild>
          <Button size={"md"} className='bg-[#CA3CFF] text-white w-3/12'>
            {""} envoyer livre {""}
          </Button>
        </f.FormSubmit>
      </f.FormRoot>
    </div>
  )
}

export default Page
