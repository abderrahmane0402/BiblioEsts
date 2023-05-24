import Header from "@/components/ui/Header";
import Paragraph from "@/components/ui/Paragraph";
import { getAppro } from "@/db/Get/Appro";
import { Table } from "./table";

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
    };
  });
  return (
    
    <div className=" w-full h-full">
      <div className="w-full h-fit flex flex-col gap-4">
        <div className="flex bg-sky-100 w-fit rounded-lg shadow-sky-200xl ">
          <Paragraph type={"nrm"} size={"md"} className="font-semibold ">
            N Approvisionnement :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {apro?.ID_APRO}
          </Paragraph>
        </div>
        <div className="flex  w-full h-full  gap-4 ">
          <div className="w-full  h-fit bg-sky-100  rounded-lg shadow-xl">
            <Header size={"md"} className="flex justify-center items-center">
              Entreprise
            </Header>
            <div className="flex tracking-wide border-t-2 border-[#969a9d]">
              <Paragraph
                type={"sub_title"}
                size={"md"}
                className="font-semibold"
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
                className="font-semibold"
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
                className="font-semibold"
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
                className="font-semibold"
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
                className="font-semibold"
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
                className="font-semibold"
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
                className="font-semibold"
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
                className="font-semibold"
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
              Utilisateur
            </Header>
            <div className="flex tracking-wide border-t-2 border-[#969a9d]">
              <Paragraph
                type={"sub_title"}
                size={"md"}
                className="font-semibold"
              >
                Nom :
              </Paragraph>
              <Paragraph type={"nrm"} size={"md"}>
                {apro?.utilisateur.NOM}
              </Paragraph>
            </div>
            <div className="flex tracking-wide border-t-2 border-[#969a9d]">
              <Paragraph
                type={"sub_title"}
                size={"md"}
                className="font-semibold"
              >
                Prenom :
              </Paragraph>
              <Paragraph type={"nrm"} size={"md"}>
                {apro?.utilisateur.PRENOM}
              </Paragraph>
            </div>
            <div className="flex tracking-wide border-t-2 border-[#969a9d]">
              <Paragraph
                type={"sub_title"}
                size={"md"}
                className="font-semibold"
              >
                Telephone :
              </Paragraph>
              <Paragraph type={"nrm"} size={"md"}>
                {apro?.utilisateur.TELEPHONE}
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-400 rounded-xl">
          <Table data={Livre} />
        </div>
      </div>
    </div>
  );
};

export default page;
