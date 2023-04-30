import { AiFillSetting } from "react-icons/ai"
import { BsPencilSquare } from "react-icons/bs"
import MyImage from "@/ui/MyImage"
import MLink from "@/ui/MLink"
import Button from "@/ui/Button"
import userLogo from "@/img/userLogo.png"

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
      <Button size={"md"} className=' bg-gloucous'>
        log out
      </Button>
    </footer>
  )
}