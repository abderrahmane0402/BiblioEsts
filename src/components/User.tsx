import userLogo from "@/img/userLogo.png"
import Button from "@/ui/Button"
import MLink from "@/ui/MLink"
import MyImage from "@/ui/MyImage"
import { AiFillSetting } from "react-icons/ai"
import { BsPencilSquare } from "react-icons/bs"

export default function User({}) {
  return (
    <footer className='flex flex-col h-1/4 border-t-2 gap-2 items-center justify-center'>
      {/* user image */}
      <div className='relative w-20 h-20 border rounded-full overflow-hidden'>
          <MyImage src={userLogo} alt='UserImage' />
      </div>
      <div className='flex justify-between w-2/5'>
        <MLink href={""} className='hover:text-[#CA3CFF]'>
          <BsPencilSquare className='w-4 h-4' />
        </MLink>
        <MLink href={""} className='hover:text-[#CA3CFF]'>
          <AiFillSetting className='w-4 h-4' />
        </MLink>
      </div>
      <Button size={"sm"} btype="submit">
        log out
      </Button>
    </footer>
  )
}
