import { getCategories } from "@/db/Get/Categorie";
import { Table } from "./table";
import { Suspense } from "react";

const Page = async () => {
  let data = await getCategories();
  return (
    <div className="w-full h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Table data={data} />
      </Suspense>
    </div>
  );
};

export default Page;
