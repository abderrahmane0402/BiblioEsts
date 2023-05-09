import { Table } from './table';
import { getLivres } from "@/db/Get/Livres";
import { Suspense } from "react";

const Livre = async () => {
  let data = await getLivres()
  return (
    <div className='w-full h-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <Table data={data}  />
      </Suspense>
    </div>
  )
}

export default Livre
