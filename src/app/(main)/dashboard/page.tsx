import { Card } from "@/ui/Card"
import Header from "@/ui/Header"
import Paragraph from "@/ui/Paragraph"
import { FC } from "react"
import { BiBookAdd } from "react-icons/bi"
import { FaBookOpen } from "react-icons/fa"
import { GiBurningBook } from "react-icons/gi"
import { IoIosNotificationsOutline } from "react-icons/io"
import { TbBooksOff } from "react-icons/tb"

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className='h-full w-full flex flex-col gap-3'>
      {/* mini cartes */}
      <div className='h-1/5 w-full flex gap-6'>
        <Card type={"mini"} className="p-2">
          <div className='flex justify-between item-center h-1/2'>
            <Paragraph size={"lg"} className='font-semibold flex items-center'>
              nouveau livre
            </Paragraph>
            <div className='h-full flex justify-center items-center text-4xl'>
              <BiBookAdd />
            </div>
          </div>
          <Paragraph size={"sm"} className='h-1/2 flex items-center'>
            16 nouveau a ete ajouter
          </Paragraph>
        </Card>
        <Card type={"mini"} className="p-2">
          <div className='flex justify-between item-center h-1/2'>
            <Paragraph size={"lg"} className='font-semibold flex items-center'>
              livre perdue
            </Paragraph>
            <div className='h-full flex justify-center items-center text-4xl'>
              <TbBooksOff />
            </div>
          </div>
          <Paragraph size={"sm"} className='h-1/2 flex items-center'>
            16 livre a ete perdue
          </Paragraph>
        </Card>
        <Card type={"mini"} className="p-2">
          <div className='flex justify-between item-center h-1/2'>
            <Paragraph size={"lg"} className='font-semibold flex items-center'>
              livre endommager
            </Paragraph>
            <div className='h-full flex justify-center items-center text-4xl'>
              <GiBurningBook />
            </div>
          </div>
          <Paragraph size={"sm"} className='h-1/2 flex items-center'>
            16 livre a ete endommager
          </Paragraph>
        </Card>
        <Card type={"mini"} className="p-2">
          <div className='flex justify-between item-center h-1/2'>
            <Paragraph size={"lg"} className='font-semibold flex items-center'>
              livre existant
            </Paragraph>
            <div className='h-full flex justify-center items-center text-4xl'>
              <FaBookOpen />
            </div>
          </div>
          <Paragraph size={"sm"} className='h-1/2 flex items-center'>
            16 livre dans la biblio
          </Paragraph>
        </Card>
      </div>
      <div className='h-2/5 w-full flex gap-6'>
        <Card type={"mid"} className='p-2'>
          <div className='h-1/5 w-full flex justify-between items-center'>
            <Header size={"md"}>notification</Header>
            <IoIosNotificationsOutline className='text-2xl' />
          </div>
          <div className='h-4/5'>
            <div className='border-t-2  border-black/60'>
              <Paragraph size={"md"}>exemple de notification</Paragraph>
            </div>
            <div className='border-t-2  border-black/60'>
              <Paragraph size={"md"}>exemple de notification</Paragraph>
            </div>
            <div className='border-t-2  border-black/60'>
              <Paragraph size={"md"}>exemple de notification</Paragraph>
            </div>
          </div>
        </Card>
        <Card type={"mid"} className="p-2">
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
      <div className='h-2/5 w-full'>
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
      </div>
    </div>
  )
}

export default Page
