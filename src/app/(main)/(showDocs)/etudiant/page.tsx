import { getEtudiants } from "@/db/Get/Etudiant";
import { Suspense } from "react";
import { Table } from "./table";

const Page = async () => {
  let data = await getEtudiants();
  return (
    <div className="w-full h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Table data={data} />
      </Suspense>
    </div>
  );
};

export default Page;
