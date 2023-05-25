import { StaticImageData } from "next/image"
import Link from "next/link"
import { ImBooks } from "react-icons/im"
import Header from "./mui/MuiHeader"

interface HeaderProps {}

export function MainLogo() {
  return (
    <header className='h-16 pl-6 pr-4 flex items-center min-h-[64px]'>
      <Link href='/dashboard' className='flex'>
        <ImBooks className='w-[30px] h-6 font-bold' color='#814BE0' />
        <Header
          variant='h6'
          sx={{
            fontWeight: 600,
            letterSpacing: "0.15px",
            lineHeight: "normal",
            textTransform: "uppercase",
            marginLeft: "0.75rem",
            color: "#3a3541de",
          }}
        >
          Biblio
        </Header>
      </Link>
    </header>
  )
}
