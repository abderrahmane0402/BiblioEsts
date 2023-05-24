import { getLivres } from "@/db/Get/Livres"
import { Table } from "./table"

export const dynamic = "auto"

const Page = async () => {
  let data = await getLivres()
  return (
    <div className='w-full h-full'>
      <Table data={data} />
    </div>
  )
}

export default Page
