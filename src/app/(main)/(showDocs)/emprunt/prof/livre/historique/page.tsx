import { Plivre } from "@/db/Get/emprunt/prof/Plivre"
import { Suspense } from "react"
import { Table } from "./table"

export const dynamic = "force-dynamic"

const Page = async ({ params }: { params: { type: string } }) => {
  let data =  await Plivre()
  return (
    <div className='w-full h-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <Table data={data} />
      </Suspense>
    </div>
  )
}

export default Page
