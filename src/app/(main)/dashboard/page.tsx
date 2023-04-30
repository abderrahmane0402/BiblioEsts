import { Card } from "@/ui/Card"
import Paragraph from "@/ui/Paragraph"
import { FC } from "react"
import { BiBookAdd } from "react-icons/bi"
import { FaBookOpen } from "react-icons/fa"
import { GiBurningBook } from "react-icons/gi"
import { TbBooksOff } from "react-icons/tb"

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className='h-full w-full flex flex-col gap-3'>
      {/* mini cartes */}
      <div className='h-1/5 w-full flex gap-6'>
        <Card type={"mini"}>
          <div className='flex justify-between item-center h-1/2'>
            <Paragraph size={"lg"} className='font-semibold'>
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
        <Card type={"mini"}>
          <div className='flex justify-between item-center h-1/2'>
            <Paragraph size={"lg"} className='font-semibold'>
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
        <Card type={"mini"}>
          <div className='flex justify-between item-center h-1/2'>
            <Paragraph size={"lg"} className='font-semibold'>
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
        <Card type={"mini"}>
          <div className='flex justify-between item-center h-1/2'>
            <Paragraph size={"lg"} className='font-semibold'>
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
        <Card type={'mid'}></Card>
        <Card type={'mid'}></Card>
      </div>
      <div className="h-2/5 w-full">
        <Card type={'full'}></Card>
      </div>
    </div>
  )
}

export default Page
