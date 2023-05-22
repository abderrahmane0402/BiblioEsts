import Header from "@/components/mui/MuiHeader"
import { Card } from "@/components/ui/Card"
import MyImage from "@/components/ui/MyImage"
import { getLivre } from "@/db/Get/Livres"
import Link from "next/link"
import { FaFilePdf } from "react-icons/fa"

export const dynamic = "force-dynamic"

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
        <Header>Livre</Header>
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
            <Link href={`/PDFviewer/${livre?.ID_LIVRE}`}>Afficher</Link>
            <FaFilePdf />
          </span>
        </div>
      </div>

      <div className='rounded-lg w-full h-fit bg-white shadow-lg pt-2'>
        <Header>Exemplaire</Header>
        {livre?.exemplaire.length ? (
          livre?.exemplaire.map((ex, index) => {
            return (
              <div
                key={index}
                className='py-3 pl-4 border-t-2 border-[#DEE2E6] flex text-md tracking-wide'
              >
                <span className='w-1/2 text-[#242424]'>{ex.N_INVENTAIRE}</span>
                <span className='w-1/2 text-[#242424]'>
                  
                </span>
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
    // <div className="w-full h-full gap-3 overflow-auto scroll-smooth">
    //   <div className="flex w-full h-3/5 items-center justify-center">
    //     <div className="relative w-1/5 h-full">
    //       <MyImage
    //         src={livre!.PAGE_DE_GARDE || ""}
    //         alt="page de garde"
    //         priority
    //       />
    //     </div>
    //   </div>
    //   <div className="h-1/2 w-full flex flex-col flex-wrap">
    //     <div className="flex">
    //       <Paragraph type={"nrm"} size={"md"} className="font-bold">
    //         Title :
    //       </Paragraph>
    //       <Paragraph type={"nrm"} size={"md"}>
    //         {livre?.TITRE}
    //       </Paragraph>
    //     </div>
    //     <div className="flex">
    //       <Paragraph type={"nrm"} size={"md"} className="font-bold">
    //         Autheur :
    //       </Paragraph>
    //       <Paragraph type={"nrm"} size={"md"}>
    //         {livre?.AUTHEUR}
    //       </Paragraph>
    //     </div>
    //     <div className="flex">
    //       <Paragraph type={"nrm"} size={"md"} className="font-bold">
    //         Editeur :
    //       </Paragraph>
    //       <Paragraph type={"nrm"} size={"md"}>
    //         {livre?.EDITEUR}
    //       </Paragraph>
    //     </div>
    //     <div className="flex">
    //       <Paragraph type={"nrm"} size={"md"} className="font-bold">
    //         Date Edition :
    //       </Paragraph>
    //       <Paragraph type={"nrm"} size={"md"}>
    //         {livre!.DATE_EDITION}
    //       </Paragraph>
    //     </div>
    //     <div className="flex">
    //       <Paragraph type={"nrm"} size={"md"} className="font-bold">
    //         Code :
    //       </Paragraph>
    //       <Paragraph type={"nrm"} size={"md"}>
    //         {livre?.CODE}
    //       </Paragraph>
    //     </div>
    //     <div className="flex">
    //       <Paragraph type={"nrm"} size={"md"} className="font-bold">
    //         categorie :
    //       </Paragraph>
    //       <Paragraph type={"nrm"} size={"md"}>
    //         {livre?.categorie.LIBELLE}
    //       </Paragraph>
    //     </div>
    //     <div className="flex">
    //       <Paragraph type={"nrm"} size={"md"} className="font-bold">
    //         Prix :
    //       </Paragraph>
    //       <Paragraph type={"nrm"} size={"md"}>
    //         {livre?.PRIX?.toNumber()} DH
    //       </Paragraph>
    //     </div>
    //     <div className="flex">
    //       <Paragraph type={"nrm"} size={"md"} className="font-bold">
    //         Somaire :
    //       </Paragraph>
    //       <Paragraph type={"nrm"} size={"md"}>
    //         <MLink
    //           href={`/PDFviewer/${livre?.SOMAIRE}`}
    //           font={"md"}
    //           type={"link"}
    //         >
    //           ouvrir le pdf
    //         </MLink>
    //       </Paragraph>
    //     </div>
    //     <div className="flex">
    //       <Paragraph type={"nrm"} size={"md"} className="font-bold">
    //         OBSERVATION :
    //       </Paragraph>
    //       <Paragraph type={"nrm"} size={"md"}>
    //         {livre?.OBSERVATIONL}
    //       </Paragraph>
    //     </div>
    //   </div>
    //   <div className="w-full">
    //     <Table data={livre?.exemplaire} />
    //   </div>
    // </div>
  )
}

export default page
