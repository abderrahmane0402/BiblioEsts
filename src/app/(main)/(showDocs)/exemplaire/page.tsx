import { Table } from "./table";
import { getExemplaires } from "@/db/Get/Livres";
import { Suspense } from "react";

const Page = async () => {
  let data = await getExemplaires();
  return (
    <div className="w-full h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Table data={data} />
      </Suspense>
    </div>
  );
};

export default Page;
