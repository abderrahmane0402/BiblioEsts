import { Elivre, ElivreEncours } from "@/db/Get/emprunt/etudiant/Elivre"
import { Suspense } from "react"
import { Table } from "./table"

export const dynamic = "force-dynamic"

const Page = async () => {
  let data = await ElivreEncours()
  return (
    <div className='w-full h-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <Table data={data} />
      </Suspense>
    </div>
  )
}

export default Page
