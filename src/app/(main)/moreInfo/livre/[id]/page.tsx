import Exemplaire from "@/components/exemplaire"
import Header from "@/components/mui/MuiHeader"
import { Card } from "@/components/ui/Card"
import MyImage from "@/components/ui/MyImage"
import { getLivre, getLivres } from "@/db/Get/Livres"
import Link from "next/link"
import { FaFilePdf } from "react-icons/fa"
import MenuExe from "./menu"

export const dynamic = "auto"

// export async function generateStaticParams() {
//   const livres = await getLivres()
//   return livres.map((livres) => {
//     id: livres.ID_LIVRE
//   })
// }

const page = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id)
  const livre = await getLivre(id)
  return (
    <>
      <Card type={"full"} className='rounded-lg p-4'>
        <div className='relative w-full h-full rounded-md overflow-hidden'>
          <MyImage
            src={livre!.PAGE_DE_GARDE || ""}
            alt='page de garde'
            priority
          />
        </div>
      </Card>
      <div className='rounded-lg w-full h-fit bg-white shadow-lg pt-2'>
        <Header variant='h4' textAlign={"center"} gutterBottom>
          Livre
        </Header>
        <div className='py-3 pl-4 border-t-2 border-[#DEE2E6] flex text-md tracking-wide'>
          <span className='w-1/2 text-[#5B3169]'>Titre</span>
          <span className='w-1/2 text-[#242424]'>{livre?.TITRE}</span>
        </div>
        <div className='py-3 pl-4 border-t-2 border-[#DEE2E6] flex text-md tracking-wide'>
          <span className='w-1/2 text-[#5B3169]'>Auteur</span>
          <span className='w-1/2 text-[#242424]'> {livre?.AUTHEUR}</span>
        </div>
        <div className='py-3 pl-4 border-t-2 border-[#DEE2E6] flex text-md tracking-wide'>
          <span className='w-1/2 text-[#5B3169]'>Editeur</span>
          <span className='w-1/2 text-[#242424]'>{livre?.EDITEUR}</span>
        </div>
        <div className='py-3 pl-4 border-t-2 border-[#DEE2E6] flex text-md tracking-wide'>
          <span className='w-1/2 text-[#5B3169]'>Categorie</span>
          <span className='w-1/2 text-[#242424]'>
            {livre?.categorie.LIBELLE}
          </span>
        </div>
        <div className='py-3 pl-4 border-t-2 border-[#DEE2E6] flex text-md tracking-wide'>
          <span className='w-1/2 text-[#5B3169]'>Date d{"'"}edition</span>
          <span className='w-1/2 text-[#242424]'>{livre!.DATE_EDITION}</span>
        </div>
        <div className='py-3 pl-4 border-t-2 border-[#DEE2E6] flex text-md tracking-wide'>
          <span className='w-1/2 text-[#5B3169]'>Code</span>
          <span className='w-1/2 text-[#242424]'>{livre?.CODE}</span>
        </div>
        <div className='py-3 pl-4 border-t-2 border-[#DEE2E6] flex text-md tracking-wide'>
          <span className='w-1/2 text-[#5B3169]'>Prix</span>
          <span className='w-1/2 text-[#242424]'>
            {livre?.PRIX?.toNumber()} DH
          </span>
        </div>
        <div className='py-3 pl-4 border-t-2 border-[#DEE2E6] flex text-md tracking-wide'>
          <span className='w-1/2 text-[#5B3169]'>Somaire</span>
          <span className='w-1/2 text-blue-700 flex gap-2  items-center'>
            <Link href={`/PDFviewer/${livre?.ID_LIVRE}`} target='_blank'>
              Afficher
            </Link>
            <FaFilePdf />
          </span>
        </div>
      </div>

      <div className='rounded-lg w-full h-fit bg-white shadow-lg '>
        <Exemplaire id={id} />
        {livre?.exemplaire.length ? (
          livre?.exemplaire.map((ex, index) => {
            return (
              <div
                key={index}
                className='py-1 box-border inline-block w-1/4  text-center border-2 border-[#DEE2E6] text-md tracking-wide mt-1'
              >
                <MenuExe>{ex.N_INVENTAIRE}</MenuExe>
              </div>
            )
          })
        ) : (
          <div className='py-3 pl-4 border-t-2 border-[#DEE2E6] flex text-md tracking-wide'>
            <span className='w-full text-center text-[#5B3169]'>
              aucun exemplaire trouver
            </span>
          </div>
        )}
      </div>
    </>
  )
}

export default page
