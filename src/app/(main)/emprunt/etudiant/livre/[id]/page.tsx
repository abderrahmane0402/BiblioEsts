import Header from "@/components/ui/Header";
import Paragraph from "@/components/ui/Paragraph";
import { getElivre } from "@/db/Get/emprunt/etudiant/Elivre";
import { getDate } from "@/utils/date";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getElivre(parseInt(params.id));
  return (
    <div className="flex  w-full h-full  gap-4 ">
      <div className="w-full md:w-1/3 h-fit  bg-slate-100   rounded-lg shadow-xl">
        {/* <div className="h-2/5 w-full flex flex-col flex-wrap"> */}
          <Header size={"md"} className="flex justify-center items-center">Etudiant </Header>
          <div className="flex">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Numéro d{"'"}inscription :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"}>
              {data?.N_inscription}
            </Paragraph>
          </div>
          <div className="flex">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
            Numéro d{"'"}apogée :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"}>
              {data?.etudiant.N_APOGEE}
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
              Prénom :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"}>
              {data?.etudiant.PRENOM}
            </Paragraph>
          </div>
          
          <div className="flex">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
              Filière :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"}>
              {data?.etudiant.FILERE}
            </Paragraph>
          </div>
        {/* </div> */}
      </div>
      <div className="w-full md:w-1/3 h-fit bg-slate-200  rounded-lg shadow-xl">
        {/* <div className="h-2/5 w-full flex flex-col flex-wrap"> */}
          <Header size={"md"} className="flex justify-center items-center">Livre </Header>
          <div className="flex">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
              Numéro d{"'"}Inventaire :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"}>
              {data?.N_INVENTAIRE}
            </Paragraph>
          </div>
          <div className="flex">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
              Titre :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"}>
              {data?.exemplaire.livre.TITRE}
            </Paragraph>
          </div>
          <div className="flex">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
              Auteur :
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
          <div className="flex">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
              Catégorie :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"}>
              {data?.exemplaire.livre.categorie.LIBELLE}
            </Paragraph>
          </div>
        {/* </div> */}
        </div> 
        <div className="w-full md:w-1/3   bg-slate-100 h-fit shadow-xl rounded-lg">  
          {/* <div className="h-2/5 w-full flex flex-col flex-wrap"> */}
            <Header size={"md"} className="flex justify-center items-center">Emprunt  </Header>
            <div className="flex">
              <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
                Date de début :
              </Paragraph>
              <Paragraph type={"nrm"} size={"md"}>
                {getDate(data?.DATE_D)}
              </Paragraph>
            </div>
            <div className="flex">
              <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
                Date de fin :
              </Paragraph>
              <Paragraph type={"nrm"} size={"md"}>
                {getDate(data?.DATE_F)}
              </Paragraph>
            </div>
            <div className="flex">
              <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
                Date de retour :
              </Paragraph>
              <Paragraph type={"nrm"} size={"md"}>
                {getDate(data?.DATE_R)}
              </Paragraph>
            </div>
            <div className="flex">
              <Paragraph type={"sub_title"} size={"md"} className="font-semibold">
                Observation :
              </Paragraph>
              <Paragraph type={"nrm"} size={"md"}>
                {data?.OBSERVATIONLE}
              </Paragraph>
            </div>
          {/* </div> */}
        </div>
    </div>
  );
};

export default Page;
