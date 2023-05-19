import { Table } from "./table"
import { getPfes } from "@/db/Get/Pfe"

export const dynamic = "force-dynamic"

const Page = async () => {
  let data = await getPfes()
  return (
    <div className='w-full h-full'>
      <Table data={data} />
    </div>
  )
}

export default Page
