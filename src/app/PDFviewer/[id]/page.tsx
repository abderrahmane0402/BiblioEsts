import { getSomaire } from "@/db/Get/Livres";

const Page = async ({ params }: { params: { id: string } }) => {
  const somaire = await getSomaire(parseInt(params.id));
  return (
    <object
      type="application/pdf"
      data={somaire?.SOMAIRE || ""}
      width="100%"
      height="100%"
    >
      <p>
        It appears you don&apos;t have a PDF plugin for this browser.
        <a href={somaire?.SOMAIRE || ""}>Download</a>
      </p>
    </object>
  );
};

export default Page;
