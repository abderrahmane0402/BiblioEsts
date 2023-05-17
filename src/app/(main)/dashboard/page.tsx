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
import { IoIosNotificationsOutline } from "react-icons/io"

const Page = async ({}) => {
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
            <IoIosNotificationsOutline className='text-2xl' />
          </div>
          <div className='h-4/5 overflow-auto scrollbar-none'>
            {nLE ? (
              <div className='border-t-2  border-black/60'>
                <Paragraph size={"md"}>
                  {nLE.N_INVENTAIRE} - {nLE.etudiant.NOM} -{" "}
                  {nLE.etudiant.PRENOM} - {getDate(nLE.DATE_F)}
                </Paragraph>
              </div>
            ) : null}
            {nLP ? (
              <div className='border-t-2  border-black/60'>
                <Paragraph size={"md"}>
                  {nLP.N_INVENTAIRE} - {nLP.prof.NOM} - {nLP.prof.PRENOM} -{" "}
                  {getDate(nLP.DATE_F)}
                </Paragraph>
              </div>
            ) : null}
            {nPE ? (
              <div className='border-t-2  border-black/60'>
                <Paragraph size={"md"}>
                  {nPE.IDPFE} - {nPE.etudiant.NOM} - {nPE.etudiant.PRENOM} -{" "}
                  {getDate(nPE.DATE_F)}
                </Paragraph>
              </div>
            ) : null}
            {nPP ? (
              <div className='border-t-2  border-black/60'>
                <Paragraph size={"md"}></Paragraph>
              </div>
            ) : null}
          </div>
        </Card>
        <Card type={"mid"} className='p-2'>
          <div className='h-1/5 flex justify-between items-center'>
            <Header size={"md"}>statistique</Header>
          </div>
          <div className='h-1/5 flex gap-2 justify-around items-center'>
            <div className='flex flex-col items-center justify-center'>
              <span>44%</span>
              <span>emprunter</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <span>44%</span>
              <span>emprunter</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <span>44%</span>
              <span>emprunter</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <span>44%</span>
              <span>emprunter</span>
            </div>
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
