import { Ppfe, PpfeEncours } from "@/db/Get/emprunt/prof/Ppfe"
import { Suspense } from "react"
import { Table } from "./table"

export const dynamic = "force-dynamic"

const Page = async ({ params }: { params: { type: string } }) => {
  const data = params.type == "encours" ? await PpfeEncours() : await Ppfe()
  return (
    <div className='w-full h-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <Table data={data} />
      </Suspense>
    </div>
  )
}

export default Page
