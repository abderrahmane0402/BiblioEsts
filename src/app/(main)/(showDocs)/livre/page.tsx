import { Table } from "./table";
import { getLivres } from "@/db/Get/Livres";

export const dynamic = "force-dynamic";

const Page = async () => {
  let data = await getLivres();
  return (
    <div className="w-full h-full">
      <Table data={data} />
    </div>
  );
};

export default Page;
