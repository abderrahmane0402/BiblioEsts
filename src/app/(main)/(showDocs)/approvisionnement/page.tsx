import { getApprosShort } from "@/db/Get/Appro";
import { Table } from "./table";
import { getPfes } from "@/db/Get/Pfe";

const Page = async () => {
  let data = await getApprosShort();
  return (
    <div className="w-full h-full">
      <Table data={data} />
    </div>
  );
};

export default Page;
