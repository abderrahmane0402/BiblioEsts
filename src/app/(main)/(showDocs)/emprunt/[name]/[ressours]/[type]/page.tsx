import { Table } from "./table";
import { Suspense } from "react";
import { Elivre, ElivreEncours } from "@/db/Get/emprunt/etudiant/Elivre";
import { Epfe, EpfeEncours } from "@/db/Get/emprunt/etudiant/Epfe";
import { Plivre, PlivreEncours } from "@/db/Get/emprunt/prof/Plivre";
import { Ppfe, PpfeEncours } from "@/db/Get/emprunt/prof/Ppfe";

async function info(params: { name: string; ressours: string; type: string }) {
  if (params.name == "prof") {
    if (params.ressours == "livre")
      return params.type == "encours" ? await PlivreEncours() : await Plivre();
    if (params.ressours == "pfe")
      return params.type == "encours" ? await PpfeEncours() : await Ppfe();
  } else {
    if (params.ressours == "livre")
      return params.type == "encours" ? await ElivreEncours() : await Elivre();
    if (params.ressours == "pfe")
      return params.type == "encours" ? await EpfeEncours() : await Epfe();
  }
}

const Page = async ({
  params,
}: {
  params: { name: string; ressours: string; type: string };
}) => {
  let data: any;
  data = await info(params);
  return (
    <div className="w-full h-full">
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Table data={data} /> */}
      </Suspense>
    </div>
  );
};

export default Page;
