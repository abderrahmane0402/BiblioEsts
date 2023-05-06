import DataTable from "@/components/DataTable"
import { LivreColumns } from "@/data/tableColumns"
import { getLivres } from "@/db/Get/Livres"
import { Suspense } from "react"

const Livre = async () => {
  let data = await getLivres()
  return (
    <div className='w-full h-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <DataTable columns={LivreColumns} rows={data} ID='ID_LIVRE' />
      </Suspense>
    </div>
  )
}

export default Livre
