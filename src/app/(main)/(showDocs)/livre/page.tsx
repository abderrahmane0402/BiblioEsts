import DataTable from "@/components/DataTable"
import { CustomColumnMenu } from "@/components/ui/x-data-grid-customization/CustomColumnMenu"
import { CustomToolbar } from "@/components/ui/x-data-grid-customization/CustomToolBar"
import { LivreColumns } from "@/data/tableColumns"
import { getLivres } from "@/db/Get/Livres"
import { Suspense } from "react"

const Livre = async () => {
  let data = await getLivres()
  return (
    <div className='w-full h-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <DataTable
          columns={LivreColumns}
          rows={data}
          ID='ID_LIVRE'
          customSlots={{
            columnMenu: CustomColumnMenu,
            toolbar: CustomToolbar,
          }}
        />
      </Suspense>
    </div>
  )
}

export default Livre
