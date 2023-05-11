import Header from "@/components/ui/Header";
import Paragraph from "@/components/ui/Paragraph";
import { getPlivre } from "@/db/Get/emprunt/prof/Plivre";
import { getDate } from "@/utils/date";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getPlivre(parseInt(params.id));
  return (
    <div className="w-full h-full gap-3 overflow-auto scroll-smooth">
      <div className="h-2/5 w-full flex flex-col flex-wrap">
        <Header size={"md"}>Professeur</Header>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Nom :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.prof.NOM}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Prenom :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.prof.PRENOM}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Departement :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.prof.DEPARTEMENT}
          </Paragraph>
        </div>
      </div>
      <div className="h-2/5 w-full flex flex-col flex-wrap">
        <Header size={"md"}>Livre</Header>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            N°Inventaire :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.N_INVENTAIRE}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            title :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.exemplaire.livre.TITRE}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            autheur :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.exemplaire.livre.AUTHEUR}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Editeur :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.exemplaire.livre.EDITEUR}
          </Paragraph>
        </div>
      </div>
      <div className="h-2/5 w-full flex flex-col flex-wrap">
        <Header size={"md"}>Emprunt</Header>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            date de depart :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {getDate(data?.DATE_D)}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            date de fin :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {getDate(data?.DATE_F)}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            date de retour :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {getDate(data?.DATE_R)}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            observation :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.OBSERVATIONLP}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Page;
