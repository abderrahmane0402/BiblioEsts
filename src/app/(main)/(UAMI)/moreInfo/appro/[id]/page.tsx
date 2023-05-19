import Header from "@/components/ui/Header";
import Paragraph from "@/components/ui/Paragraph";
import { getAppro, getAppros } from "@/db/Get/Appro";
import { Table } from "./table";

export const revalidate = 60;

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

export async function generateStaticParams() {
  const apros = await getAppros();
  return apros.map((apros) => {
    id: apros.ID_APRO;
  });
}

const page = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);
  const apro = await getAppro(id);
  const Livre = apro?.contient.map((l): Livre => {
    return {
      ID_LIVRE:l.livre.ID_LIVRE,
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
    <div className="w-full h-full gap-3 overflow-auto scroll-smooth">
      <div className="flex">
        <Paragraph type={"nrm"} size={"md"} className="font-semibold">
          N_Approvisionnement :
        </Paragraph>
        <Paragraph type={"nrm"} size={"md"}>
          {apro?.ID_APRO}
        </Paragraph>
      </div>
      <Header size={"md"}>Entreprise</Header>
      <div className="max-h-2/5 h-auto w-full flex flex-col flex-wrap">
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Nom d{"'"}entreprise :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {apro?.ENTREPRISE}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            telephone ou fix :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {apro?.TELEPHONE?.toString()}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Adresse :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {apro?.ADRESSE}
          </Paragraph>
        </div>
      </div>
      <div className="max-h-2/5 h-auto w-full flex flex-col flex-wrap">
        <Header size={"md"}>Fournisseur</Header>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Nom :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {apro?.fournisseur.NOM}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Prenom :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {apro?.fournisseur.PRENOM}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Gmail :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {apro?.fournisseur.GMAIL}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Adresse :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {apro?.fournisseur.ADDRESSE}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Telephone :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {apro?.fournisseur.TELEPHONE}
          </Paragraph>
        </div>
      </div>
      <div className="max-h-2/5 h-auto w-full flex flex-col flex-wrap">
        <Header size={"md"}>Utilisateur</Header>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Nom :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {apro?.utilisateur.NOM}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Prenom :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {apro?.utilisateur.PRENOM}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Telephone :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {apro?.utilisateur.TELEPHONE}
          </Paragraph>
        </div>
      </div>
      <div className="w-full">
        <Table data={Livre} />
      </div>
    </div>
  );
};

export default page;
