import Paragraph from "@/components/ui/Paragraph";
import { getAppro } from "@/db/Get/Appro";
import { Table } from "./table";
import { getDate } from "@/utils/date";
import Exemplaire from "@/components/exemplaire";
import Header from "@/components/mui/MuiHeader";

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
      categorie: l.livre.categorie,
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
          {/* <div className="flex bg-slate-100 w-fit rounded-lg shadow-sky-200xl ">
          <Paragraph type={"nrm"} size={"md"} className="font-semibold  text-[#5B3169] w-1/2 ">
            N Approvisionnement :
          </Paragraph>
          <Paragraph type={"nrm"} size={"md"}>
            {apro?.ID_APRO}
          </Paragraph>
        </div> */}
          <div className="flex  w-full h-full  gap-4 ">
            <div className="w-full  h-fit bg-slate-100  rounded-lg shadow-lg">
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }} className="flex justify-center items-center">
                Entreprise
              </Header>
              <div className="flex tracking-wide border-t-2 border-[#98969d]">
                <Header
              variant='h6'
              sx={{
                fontSize: "1.25rem",
                color: "#3a3541de",
                display: "flex",
                alignItems: "center",
              }}
            
                  className=" text-[#5B3169] w-1/2"
                >
                  Nom d{"'"}entreprise :
                </Header>
                <Paragraph type={"nrm"} size={"md"}>
                  {apro?.ENTREPRISE}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Header
              variant='h6'
              sx={{
                fontSize: "1.25rem",
                color: "#3a3541de",
                display: "flex",
                alignItems: "center",
              }}
            
                  className=" text-[#5B3169] w-1/2"
                >
                  Telephone ou fix :
                </Header>
                <Paragraph type={"nrm"} size={"md"}>
                  {apro?.TELEPHONE?.toString()}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Header
              variant='h6'
              sx={{
                fontSize: "1.25rem",
                color: "#3a3541de",
                display: "flex",
                alignItems: "center",
              }}
            
                  className=" text-[#5B3169] w-1/2"
                >
                  Adresse :
                </Header>
                <Paragraph type={"nrm"} size={"md"}>
                  {apro?.ADRESSE}
                </Paragraph>
              </div>
            </div>
            <div className="w-full  h-fit bg-slate-100  rounded-lg shadow-lg">
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}  className="flex justify-center items-center">
                Fournisseur
              </Header>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Header
              variant='h6'
              sx={{
                fontSize: "1.25rem",
                color: "#3a3541de",
                display: "flex",
                alignItems: "center",
              }}
            
                  className=" text-[#5B3169] w-1/2"
                >
                  Nom :
                </Header>
                <Paragraph type={"nrm"} size={"md"}>
                  {apro?.fournisseur.NOM}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Header
              variant='h6'
              sx={{
                fontSize: "1.25rem",
                color: "#3a3541de",
                display: "flex",
                alignItems: "center",
              }}
            
                  className=" text-[#5B3169] w-1/2"
                >
                  Prenom :
                </Header>
                <Paragraph type={"nrm"} size={"md"}>
                  {apro?.fournisseur.PRENOM}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Header
              variant='h6'
              sx={{
                fontSize: "1.25rem",
                color: "#3a3541de",
                display: "flex",
                alignItems: "center",
              }}
            
                  className=" text-[#5B3169] w-1/2"
                >
                  Gmail :
                  </Header>
                <Paragraph type={"nrm"} size={"md"}>
                  {apro?.fournisseur.GMAIL}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Header
              variant='h6'
              sx={{
                fontSize: "1.25rem",
                color: "#3a3541de",
                display: "flex",
                alignItems: "center",
              }}
            
                  className=" text-[#5B3169] w-1/2"
                >
                  Adresse :
                  </Header>
                                  <Paragraph type={"nrm"} size={"md"}>
                  {apro?.fournisseur.ADDRESSE}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]">
                <Header
              variant='h6'
              sx={{
                fontSize: "1.25rem",
                color: "#3a3541de",
                display: "flex",
                alignItems: "center",
              }}
            
                  className=" text-[#5B3169] w-1/2"
                >
                  Telephone :
                  </Header>
                                  <Paragraph type={"nrm"} size={"md"}>
                  {apro?.fournisseur.TELEPHONE}
                </Paragraph>
              </div>
            </div>
            <div className="w-full  h-fit bg-slate-100  rounded-lg shadow-lg">
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }} className="flex justify-center items-center">
                Approvisionnement
              </Header>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]   ">
                <Header
              variant='h6'
              sx={{
                fontSize: "1.25rem",
                color: "#3a3541de",
                display: "flex",
                alignItems: "center",
              }}
            
                  className=" text-[#5B3169] w-1/2  "
                >
                  N Approvisionnement :
                  </Header>
                <Paragraph
                  type={"nrm"}
                  size={"md"}
                  className="text-[#242424] w-1/2"
                >
                  {apro?.ID_APRO}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]   ">
                <Header
              variant='h6'
              sx={{
                fontSize: "1.25rem",
                color: "#3a3541de",
                display: "flex",
                alignItems: "center",
              }}
          
                  className=" text-[#5B3169] w-1/2 "
                >
                  Devis :
                  </Header>   
                               <Paragraph
                  type={"nrm"}
                  size={"md"}
                  className="text-[#242424] w-1/2"
                >
                  {parseFloat(apro?.DEVIS as unknown as string) || ""}
                </Paragraph>
              </div>
              <div className="flex tracking-wide border-t-2 border-[#969a9d]  ">
                <Header
              variant='h6'
              sx={{
                fontSize: "1.25rem",
                color: "#3a3541de",
                display: "flex",
                alignItems: "center",
              }}
            
                  className=" text-[#5B3169] w-1/2"
                >
                  Date d{"'"}approvisionnemnt :
                  </Header>
                <Paragraph type={"nrm"} size={"md"}>
                  {getDate(apro?.DATE) || ""}
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="w-full rounded-xl flex bg-white">
          <Table data={Livre} />
        </div>
      </div>
    </>
  );
};

export default page;
