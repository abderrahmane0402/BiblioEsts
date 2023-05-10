import { Table } from "./table"
import { Suspense } from "react"
import { Elivre } from "@/db/Get/emprunt/etudiant/Elivre"

const Page = async () => {
  let data = await Elivre()
  return (
    <div className='w-full h-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <Table data={data} />
      </Suspense>
    </div>
  )
}

export default Page
