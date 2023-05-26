import Header from "@/components/ui/Header";
import Paragraph from "@/components/ui/Paragraph";
import { getPpfeID } from "@/db/Get/emprunt/prof/Ppfe";
import { getDate } from "@/utils/date";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getPpfeID(parseInt(params.id));
  return (
    <div className="flex  w-full h-full  gap-4 ">
    
    <div className="w-full  h-fit     bg-slate-100  rounded-lg shadow-lg">
      {/* <div className="h-2/5 w-full flex flex-col flex-wrap"> */}
        <Header size={"md"} className="flex justify-center items-center">PDF </Header>
        
        <div className="flex tracking-wide border-t-2 border-[#969a9d]">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
            Cote :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
            {data?.Cote}
          </Paragraph>
        </div>
        <div className="flex tracking-wide border-t-2 border-[#969a9d]">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
            Sujet :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
            {data?.pfe.SUJET}
          </Paragraph>
        </div>
        <div className="flex tracking-wide border-t-2 border-[#969a9d]">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
            Réalisateur :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
            {data?.pfe.REALISATEUR}
          </Paragraph>
        </div>
        <div className="flex tracking-wide border-t-2 border-[#969a9d]">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
            Encadrant :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
            {data?.pfe.ENCADRANT}
          </Paragraph>
        </div>
        <div className="flex tracking-wide border-t-2 border-[#969a9d]">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
            Date de réalisation:
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
            {data?.pfe.DATE_REALISATION}
          </Paragraph>
        </div>
        <div className="flex tracking-wide border-t-2 border-[#969a9d]">
          <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
            Filière:
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
            {data?.pfe.Filiere}
          </Paragraph>
        </div>
      {/* </div> */}
      </div> 
    
      <div className="w-full  h-fit     bg-slate-100  rounded-lg shadow-lg">
        {/* <div className="h-2/5 w-full flex flex-col flex-wrap"> */}
          <Header size={"md"} className="flex justify-center items-center">Enseignant  </Header>
          <div className="flex tracking-wide border-t-2 border-[#DEE2E6] ">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2 ">
            Code :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2" >
              {data?.prof.Code}
            </Paragraph>
          </div>
          <div className="flex tracking-wide border-t-2 border-[#DEE2E6]">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
            Nom :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
              {data?.prof.NOM}
            </Paragraph>
          </div>
          <div className="flex tracking-wide border-t-2 border-[#DEE2E6]">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
            Prénom :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
              {data?.prof.PRENOM}
            </Paragraph>
          </div>
          <div className="flex tracking-wide border-t-2 border-[#DEE2E6]">
            <Paragraph type={"sub_title"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2">
              Département  :
            </Paragraph>
            <Paragraph type={"nrm"} size={"md"} className="text-[#242424] w-1/2">
              {data?.prof.DEPARTEMENT}
            </Paragraph>
          </div>
          
          
        {/* </div> */}
      </div>
      
      <div className="w-full  h-fit     bg-slate-100  rounded-lg shadow-lg">  
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
            
          {/* </div> */}
        </div>
       
  </div>
  );
};

export default Page;
