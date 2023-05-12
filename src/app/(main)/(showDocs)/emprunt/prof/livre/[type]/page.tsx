import { Plivre, PlivreEncours } from "@/db/Get/emprunt/prof/Plivre";
import { Suspense } from "react";
import { Table } from "./table";

const Page = async ({ params }: { params: { type: string } }) => {
  const data =
    params.type == "encours" ? await PlivreEncours() : await Plivre();
  return (
    <div className="w-full h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Table data={data} />
      </Suspense>
    </div>
  );
};

export default Page;