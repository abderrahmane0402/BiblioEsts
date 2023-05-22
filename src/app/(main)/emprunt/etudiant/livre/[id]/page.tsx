import { Card } from "@/components/ui/Card";
import Header from "@/components/ui/Header";
import MyImage from "@/components/ui/MyImage";
import Paragraph from "@/components/ui/Paragraph";
import { getElivre } from "@/db/Get/emprunt/etudiant/Elivre";
import { getDate } from "@/utils/date";


const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getElivre(parseInt(params.id));
  return (
   
    <div className="flex  w-full h-full  gap-4 ">
      <Card type={"full"} className="rounded-lg p-4">
        <div className="relative w-full h-full rounded-md overflow-hidden">
        <MyImage src={data?.exemplaire.livre.PAGE_DE_GARDE || ""} alt="page de garde" />
        </div>
      </Card>
      <div className="w-full  h-fit bg-slate-200  rounded-lg shadow-xl">
        {/* <div className="h-2/5 w-full flex flex-col flex-wrap"> */}
          <Header size={"md"} className="flex justify-center items-center">Livre </Header>
          
          <div className="flex tracking-wide border-t-2 border-[#969a9d]">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
              Numéro d{"'"}Inventaire :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
              {data?.N_INVENTAIRE}
            </Paragraph>
          </div>
          <div className="flex tracking-wide border-t-2 border-[#969a9d]">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
              Titre :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
              {data?.exemplaire.livre.TITRE}
            </Paragraph>
          </div>
          <div className="flex tracking-wide border-t-2 border-[#969a9d]">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
              Auteur :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
              {data?.exemplaire.livre.AUTHEUR}
            </Paragraph>
          </div>
          <div className="flex tracking-wide border-t-2 border-[#969a9d]">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
              Editeur :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
              {data?.exemplaire.livre.EDITEUR}
            </Paragraph>
          </div>
          <div className="flex tracking-wide border-t-2 border-[#969a9d]">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
              Catégorie :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
              {data?.exemplaire.livre.categorie.LIBELLE}
            </Paragraph>
          </div>
        {/* </div> */}
        </div> 
      <div className="w-full h-fit flex flex-col gap-4">
        <div className=" w-full h-fit  bg-slate-100   rounded-lg shadow-xl">
          {/* <div className="h-2/5 w-full flex flex-col flex-wrap"> */}
            <Header size={"md"} className="flex justify-center items-center">Etudiant </Header>
            <div className="flex tracking-wide border-t-2 border-[#DEE2E6] ">
              <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2 ">
              Numéro d{"'"}inscription :
              </Paragraph>
              <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2" >
                {data?.N_inscription}
              </Paragraph>
            </div>
            <div className="flex tracking-wide border-t-2 border-[#DEE2E6]">
              <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
              Numéro d{"'"}apogée :
              </Paragraph>
              <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
                {data?.etudiant.N_APOGEE}
              </Paragraph>
            </div>
            <div className="flex tracking-wide border-t-2 border-[#DEE2E6]">
              <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
                Nom :
              </Paragraph>
              <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
                {data?.etudiant.NOM}
              </Paragraph>
            </div>
            <div className="flex tracking-wide border-t-2 border-[#DEE2E6]">
              <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
                Prénom :
              </Paragraph>
              <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
                {data?.etudiant.PRENOM}
              </Paragraph>
            </div>
            
            <div className="flex tracking-wide border-t-2 border-[#DEE2E6]">
              <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
                Filière :
              </Paragraph>
              <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
                {data?.etudiant.FILERE}
              </Paragraph>
            </div>
          {/* </div> */}
        </div>
        
          <div className="w-full     bg-slate-100 h-fit shadow-xl rounded-lg">  
            {/* <div className="h-2/5 w-full flex flex-col flex-wrap"> */}
              <Header size={"md"} className="flex justify-center items-center">Emprunt  </Header>
              <div className="flex tracking-wide border-t-2 border-[#DEE2E6]">
                <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
                  Date de début :
                </Paragraph>
                <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
                  {getDate(data?.DATE_D)}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#DEE2E6]">
                <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
                  Date de fin :
                </Paragraph>
                <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
                  {getDate(data?.DATE_F)}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#DEE2E6]">
                <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
                  Date de retour :
                </Paragraph>
                <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
                  {getDate(data?.DATE_R)}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#DEE2E6]">
                <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
                  Observation :
                </Paragraph>
                <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
                  {data?.OBSERVATIONLE}
                </Paragraph>
              </div>
            {/* </div> */}
          </div>
      </div>   
    </div>
   
  );
};

export default Page;
