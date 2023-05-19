import { getApprosShort } from "@/db/Get/Appro"
import { Table } from "./table"

export const dynamic = "force-dynamic"

const Page = async () => {
  let data = await getApprosShort()
  return (
    <div className='w-full h-full'>
      <Table data={data} />
    </div>
  )
}

export default Page
