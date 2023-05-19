import { getEtudiants } from "@/db/Get/Etudiant"
import { Suspense } from "react"
import { Table } from "./table"
import { getProfs } from "@/db/Get/Prof"

export const dynamic = "force-dynamic"

const Page = async () => {
  let data = await getProfs()
  return (
    <div className='w-full h-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <Table data={data} />
      </Suspense>
    </div>
  )
}

export default Page
