import Header from "@/components/ui/Header";
import Paragraph from "@/components/ui/Paragraph";
import { getEpfe } from "@/db/Get/emprunt/etudiant/Epfe";
import { getDate } from "@/utils/date";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getEpfe(parseInt(params.id));
  return (
    <div className="w-full h-full gap-3 overflow-auto scroll-smooth">
      <div className="h-2/5 w-full flex flex-col flex-wrap">
        <Header size={"md"}>Etudiant</Header>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
          N_inscription :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.N_inscription}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Nom :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.etudiant.NOM}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Prenom :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.etudiant.PRENOM}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Filiere :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.etudiant.FILERE}
          </Paragraph>
        </div>
      </div>
      <div className="h-2/5 w-full flex flex-col flex-wrap">
        <Header size={"md"}>PFE</Header>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
          N_inscription :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.pfe.Cote}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            realisateur :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.pfe.REALISATEUR}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            encadrant :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.pfe.ENCADRANT}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Editeur :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.pfe.DATE_REALISATION}
          </Paragraph>
        </div>
        <div className="flex">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            sujet :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {data?.pfe.SUJET}
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
            {data?.OBSERVATIONPE}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Page;
