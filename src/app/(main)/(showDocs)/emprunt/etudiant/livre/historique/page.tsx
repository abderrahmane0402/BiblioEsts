import { Elivre, ElivreEncours } from "@/db/Get/emprunt/etudiant/Elivre"
import { Suspense } from "react"
import { Table } from "./table"

export const dynamic = "force-dynamic"

const Page = async ({ params }: { params: { type: string } }) => {
  let data =  await Elivre()
  return (
    <div className='w-full h-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <Table data={data} />
      </Suspense>
    </div>
  )
}

export default Page
