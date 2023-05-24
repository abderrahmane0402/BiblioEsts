import Header from "@/components/ui/Header";
import Paragraph from "@/components/ui/Paragraph";
import { getAppro } from "@/db/Get/Appro";
import { Table } from "./table";
import { getDate } from "@/utils/date";
import Exemplaire from "@/components/exemplaire";

export const dynamic = "force-dynamic";

type Livre = {
  ID_LIVRE: number | null;
  TITRE: string | null;
  categorie: string | null;
  AUTHEUR: string | null;
  EDITEUR: string | null;
  DATE_EDITION: Date | null;
  CODE: number | null;
  PRIX?: string | null;
  QTE: number | null;
};

const page = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);
  const apro = await getAppro(id);
  const Livre = apro?.contient.map((l) => {
    const exemplaire = l.livre.exemplaire.map((e) => {
      return {
        N_INVENTAIRE: e.N_INVENTAIRE,
      };
    });
    return {
      ID_LIVRE: l.livre.ID_LIVRE,
      TITRE: l.livre.TITRE,
      AUTHEUR: l.livre.AUTHEUR,
      EDITEUR: l.livre.EDITEUR,
      categorie: l.livre.categorie.LIBELLE,
      CODE: l.livre.CODE,
      DATE_EDITION: l.livre.DATE_EDITION,
      PRIX: l.livre.PRIX?.toString(),
      QTE: l.QTE,
      // exemplaire : Exemplaire
    };
  });
  return (
    <>
      <div className=" w-full h-full">
        <div className="w-full h-fit flex flex-col gap-4">
          {/* <div className="flex bg-sky-100 w-fit rounded-lg shadow-sky-200xl ">
          <Paragraph type={"nrm"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2 ">
            N Approvisionnement :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {apro?.ID_APRO}
          </Paragraph>
        </div> */}
          <div className="flex  w-full h-full  gap-4 ">
            <div className="w-full  h-fit bg-sky-100  rounded-lg shadow-xl">
              <Header size={"md"} className="flex justify-center items-center">
                Entreprise
              </Header>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Paragraph
                  type={"sub_title"}
                  size={"md"}
                  className="font-semibold  text-[#5B3169] w-1/2"
                >
                  Nom d{"'"}entreprise :
                </Paragraph>
                <Paragraph type={"nrm"} size={"md"}>
                  {apro?.ENTREPRISE}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Paragraph
                  type={"sub_title"}
                  size={"md"}
                  className="font-semibold  text-[#5B3169] w-1/2"
                >
                  Telephone ou fix :
                </Paragraph>
                <Paragraph type={"nrm"} size={"md"}>
                  {apro?.TELEPHONE?.toString()}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Paragraph
                  type={"sub_title"}
                  size={"md"}
                  className="font-semibold  text-[#5B3169] w-1/2"
                >
                  Adresse :
                </Paragraph>
                <Paragraph type={"nrm"} size={"md"}>
                  {apro?.ADRESSE}
                </Paragraph>
              </div>
            </div>
            <div className="w-full  h-fit bg-slate-200 rounded-lg shadow-xl">
              <Header size={"md"} className="flex justify-center items-center">
                Fournisseur
              </Header>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Paragraph
                  type={"sub_title"}
                  size={"md"}
                  className="font-semibold  text-[#5B3169] w-1/2"
                >
                  Nom :
                </Paragraph>
                <Paragraph type={"nrm"} size={"md"}>
                  {apro?.fournisseur.NOM}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Paragraph
                  type={"sub_title"}
                  size={"md"}
                  className="font-semibold  text-[#5B3169] w-1/2"
                >
                  Prenom :
                </Paragraph>
                <Paragraph type={"nrm"} size={"md"}>
                  {apro?.fournisseur.PRENOM}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Paragraph
                  type={"sub_title"}
                  size={"md"}
                  className="font-semibold  text-[#5B3169] w-1/2"
                >
                  Gmail :
                </Paragraph>
                <Paragraph type={"nrm"} size={"md"}>
                  {apro?.fournisseur.GMAIL}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Paragraph
                  type={"sub_title"}
                  size={"md"}
                  className="font-semibold  text-[#5B3169] w-1/2"
                >
                  Adresse :
                </Paragraph>
                <Paragraph type={"nrm"} size={"md"}>
                  {apro?.fournisseur.ADDRESSE}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Paragraph
                  type={"sub_title"}
                  size={"md"}
                  className="font-semibold  text-[#5B3169] w-1/2"
                >
                  Telephone :
                </Paragraph>
                <Paragraph type={"nrm"} size={"md"}>
                  {apro?.fournisseur.TELEPHONE}
                </Paragraph>
              </div>
            </div>
            <div className="w-full  h-fit bg-sky-100  rounded-lg shadow-xl">
              <Header size={"md"} className="flex justify-center items-center">
                Approvisionnement
              </Header>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]   ">
                <Paragraph
                  type={"sub_title"}
                  size={"md"}
                  className="font-semibold  text-[#5B3169] w-1/2  "
                >
                  N Approvisionnement :
                </Paragraph>
                <Paragraph
                  type={"nrm"}
                  size={"md"}
                  className="text-[#242424] w-1/2"
                >
                  {apro?.ID_APRO}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]   ">
                <Paragraph
                  type={"sub_title"}
                  size={"md"}
                  className="font-semibold  text-[#5B3169] w-1/2 "
                >
                  Devis :
                </Paragraph>
                <Paragraph
                  type={"nrm"}
                  size={"md"}
                  className="text-[#242424] w-1/2"
                >
                  {parseFloat(apro?.DEVIS as unknown as string) || ""}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]  ">
                <Paragraph
                  type={"sub_title"}
                  size={"md"}
                  className="font-semibold  text-[#5B3169] w-1/2"
                >
                  Date d{"'"}approvisionnemnt :
                </Paragraph>
                <Paragraph type={"nrm"} size={"md"}>
                  {getDate(apro?.DATE) || ""}
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-400 rounded-xl flex">
          <Table data={Livre} />
        </div>
      </div>
    </>
  );
};

export default page;
