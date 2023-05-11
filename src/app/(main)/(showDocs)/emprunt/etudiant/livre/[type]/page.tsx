import { Elivre, ElivreEncours } from "@/db/Get/emprunt/etudiant/Elivre";
import { Suspense } from "react";
import { Table } from "./table";

const Page = async ({ params }: { params: { type: string } }) => {
  let data: any;
  data = params.type == "encours" ? await ElivreEncours() : await Elivre();
  return (
    <div className="w-full h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Table data={data} />
      </Suspense>
    </div>
  );
};

export default Page;
