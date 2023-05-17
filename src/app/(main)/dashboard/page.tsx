import CercleChart from "@/components/cercleChart"
import {
  countElivre,
  countEpfe,
  countLivre,
  countPFE,
  notificationLE,
  notificationLP,
  notificationPE,
  notificationPP,
} from "@/db/Get/statistique"
import { Card } from "@/ui/Card"
import Header from "@/ui/Header"
import Paragraph from "@/ui/Paragraph"
import { getDate } from "@/utils/date"
import { AiOutlineProject } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { FaBookOpen } from "react-icons/fa"
import { GrStakeholder } from "react-icons/gr"
import {
  MdOutlineNotificationsActive,
  MdOutlineNotificationsNone,
} from "react-icons/md"

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
}

const Page = async ({}) => {
  //TODO:Test notification and complete the page
  const [countL, countP, countEL, countEP] = await Promise.all([
    countLivre(),
    countPFE(),
    countElivre(),
    countEpfe(),
  ])
  const [nLE, nLP, nPE, nPP] = await Promise.all([
    notificationLE(),
    notificationLP(),
    notificationPE(),
    notificationPP(),
  ])
  return (
    <div className='h-full w-full flex flex-col gap-3'>
      {/* mini cartes */}
      <div className='h-1/5 w-full flex gap-6'>
        <Card type={"mini"} className='p-2'>
          <div className='flex justify-between item-center h-1/2'>
            <Paragraph size={"lg"} className='font-semibold flex items-center'>
              nombre des livres
            </Paragraph>
            <div className='h-full flex justify-center items-center text-4xl'>
              <BiBook />
            </div>
          </div>
          <Paragraph size={"sm"} className='h-1/2 flex items-center'>
            {countL} livre
          </Paragraph>
        </Card>
        <Card type={"mini"} className='p-2'>
          <div className='flex justify-between item-center h-1/2'>
            <Paragraph size={"lg"} className='font-semibold flex items-center'>
              nombre des PFE
            </Paragraph>
            <div className='h-full flex justify-center items-center text-4xl'>
              <AiOutlineProject />
            </div>
          </div>
          <Paragraph size={"sm"} className='h-1/2 flex items-center'>
            {countP} PFE
          </Paragraph>
        </Card>
        <Card type={"mini"} className='p-2'>
          <div className='flex justify-between item-center h-1/2'>
            <Paragraph size={"lg"} className='font-semibold flex items-center'>
              livre empunter
            </Paragraph>
            <div className='h-full flex justify-center items-center text-4xl'>
              <FaBookOpen />
            </div>
          </div>
          <Paragraph size={"sm"} className='h-1/2 flex items-center'>
            {countEL} livre a ete emprunter
          </Paragraph>
        </Card>
        <Card type={"mini"} className='p-2'>
          <div className='flex justify-between item-center h-1/2'>
            <Paragraph size={"lg"} className='font-semibold flex items-center'>
              PFE emprunter
            </Paragraph>
            <div className='h-full flex justify-center items-center text-4xl'>
              <GrStakeholder />
            </div>
          </div>
          <Paragraph size={"sm"} className='h-1/2 flex items-center'>
            {countEP} PFE a ete emprunter
          </Paragraph>
        </Card>
      </div>
      <div className='h-2/5 w-full flex gap-6'>
        <Card type={"mid"} className='p-2'>
          <div className='h-1/5 w-full flex justify-between items-center'>
            <Header size={"md"}>notification</Header>
            {nLE || nLP || nPP || nPE ? (
              <MdOutlineNotificationsActive className='text-2xl' />
            ) : (
              <MdOutlineNotificationsNone className='text-2xl' />
            )}
          </div>
          <div className='h-4/5 overflow-auto scrollbar-none'>
            {nLE ? (
              <div className='border-t-2  border-black/60'>
                <Paragraph size={"md"}>
                  {nLE.N_INVENTAIRE} - {nLE.etudiant.N_inscription} -{" "}
                  {getDate(nLE.DATE_F)}
                </Paragraph>
              </div>
            ) : null}
            {nLP ? (
              <div className='border-t-2  border-black/60'>
                <Paragraph size={"md"}>
                  {nLP.N_INVENTAIRE} - {nLP.prof.Code} - {getDate(nLP.DATE_F)}
                </Paragraph>
              </div>
            ) : null}
            {nPE ? (
              <div className='border-t-2  border-black/60'>
                <Paragraph size={"md"}>
                  {nPE.Cote} - {nPE.etudiant.N_inscription} -
                  {getDate(nPE.DATE_F)}
                </Paragraph>
              </div>
            ) : null}
            {nPP ? (
              <div className='border-t-2  border-black/60'>
                <Paragraph size={"md"}>
                  {nPP.Cote} - {nPP.prof.Code} - {getDate(nPP.DATE_F)}
                </Paragraph>
              </div>
            ) : null}
          </div>
        </Card>
        <Card type={"mid"} className='p-2'>
          <div className='h-1/5 flex justify-between items-center'>
            <Header size={"md"}>statistique</Header>
          </div>
          <div className='h-4/5 flex gap-2 justify-center items-center'>
            <CercleChart data={data} />
          </div>
        </Card>
      </div>
      {/* <div className='h-2/5 w-full'>
        <Card type={"full"} className='flex flex-col p-2'>
          <div className='h-1/5 w-full flex justify-between items-center'>
            <Header size={"md"}>Les livre demander</Header>
          </div>
          <div className='border-t-2  border-black/60'>
            <Paragraph size={"md"}>photo de livre description prix</Paragraph>
          </div>
          <div className='border-t-2  border-black/60'>
            <Paragraph size={"md"}>photo de livre description prix</Paragraph>
          </div>
          <div className='border-t-2  border-black/60'>
            <Paragraph size={"md"}>photo de livre description prix</Paragraph>
          </div>
          <div className='border-t-2  border-black/60'>
            <Paragraph size={"md"}>photo de livre description prix</Paragraph>
          </div>
        </Card>
      </div> */}
    </div>
  )
}

export default Page
