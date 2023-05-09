import DataTable from "@/components/DataTable"
import MyImage from "@/components/ui/MyImage"
import Paragraph from "@/components/ui/Paragraph"
import { CustomColumnMenu } from "@/components/ui/x-data-grid-customization/CustomColumnMenu"
import { ExemplaireColumns } from "@/data/tableColumns"
import { getLivre, getLivres } from "@/db/Get/Livres"
import { getDate } from "@/utils/date"

export const revalidate = 60

export async function generateStaticParams() {
  const livres = await getLivres()
  return livres.map((livres) => {
    id: livres.ID_LIVRE
  })
}

const page = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id)
  const livre = await getLivre(id)
  return (
    <div className='w-full h-full gap-3 overflow-auto scroll-smooth'>
      <div className='flex w-full h-3/5 items-center justify-center'>
        <div className='relative w-1/5 h-full'>
          <MyImage
            src={livre!.PAGE_DE_GARDE ? livre!.PAGE_DE_GARDE : ""}
            alt='page de garde'
            priority
          />
        </div>
      </div>
      <div className='h-2/5 w-full flex flex-col flex-wrap'>
        <div className='flex'>
          <Paragraph type={"nrm"} size={"md"} className='font-bold'>
            Title :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {livre?.TITRE}
          </Paragraph>
        </div>
        <div className='flex'>
          <Paragraph type={"nrm"} size={"md"} className='font-bold'>
            Autheur :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {livre?.AUTHEUR}
          </Paragraph>
        </div>
        <div className='flex'>
          <Paragraph type={"nrm"} size={"md"} className='font-bold'>
            Editeur :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {livre?.EDITEUR}
          </Paragraph>
        </div>
        <div className='flex'>
          <Paragraph type={"nrm"} size={"md"} className='font-bold'>
            Date Edition :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {getDate(livre!.DATE_EDITION!)}
          </Paragraph>
        </div>
        <div className='flex'>
          <Paragraph type={"nrm"} size={"md"} className='font-bold'>
            Code :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {livre?.CODE}
          </Paragraph>
        </div>
        <div className='flex'>
          <Paragraph type={"nrm"} size={"md"} className='font-bold'>
            categorie :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {livre?.categorie.LIBELLE}
          </Paragraph>
        </div>
        <div className='flex'>
          <Paragraph type={"nrm"} size={"md"} className='font-bold'>
            Prix :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {livre?.PRIX?.toNumber()} DH
          </Paragraph>
        </div>
        <div className='flex'>
          <Paragraph type={"nrm"} size={"md"} className='font-bold'>
            Somaire :
          </Paragraph>
          <a href={`/PDFviewer/${livre?.SOMAIRE}`} target='_blank'>
            view pdf
          </a>
        </div>
        <div className='flex'>
          <Paragraph type={"nrm"} size={"md"} className='font-bold'>
            OBSERVATION :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {livre?.OBSERVATIONL}
          </Paragraph>
        </div>
      </div>
      <div className='w-full'>
        <DataTable
          columns={ExemplaireColumns}
          rows={livre!.exemplaire}
          ID='N_INVENTAIRE'
          className='h-auto'
          customSlots={{
            columnMenu: CustomColumnMenu,
          }}
          hideFooter
        />
      </div>
    </div>
  )
}

export default page
