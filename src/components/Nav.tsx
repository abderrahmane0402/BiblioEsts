/* eslint-disable react/jsx-key */
import { Nav } from "@/ui/nav"
import { NestedNav } from "@/ui/nestedNav"
import { CgFileDocument } from "react-icons/cg"
import {
  FaChalkboardTeacher,
  FaFileContract,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa"
import { MdOutlineWork, MdSpaceDashboard } from "react-icons/md"
import { TbBooks, TbReportMoney } from "react-icons/tb"
import { VscRepo } from "react-icons/vsc"

export const ZNav = ({}) => {
  return (
    <nav className='h-4/5 overflow-auto scrollbar-none'>
      <ul>
        <Nav href='/dashboard' title='Accueil' icon={<MdSpaceDashboard />} />
        <NestedNav
          principale={{
            title: "Documents",
            href: "",
            icon: <CgFileDocument />,
          }}
          href={["/livre", "/PFE"]}
          title={["Livre", "PFE"]}
          icon={[<TbBooks />, <VscRepo />]}
        />
        <NestedNav
          principale={{
            title: "Emprunt",
            href: "",
            icon: <FaChalkboardTeacher />,
          }}
          href={["/student", "/main/Prof"]}
          title={["Etudiants", "Professeurs"]}
          icon={[<FaUserGraduate />, <FaUserTie />]}
        />
        <Nav href='/employes' title='Employes' icon={<MdOutlineWork />} />
        <Nav href='/Fournisseur' title='Fournisseur' icon={<TbReportMoney />} />
        <Nav
          href='/approvisionnement'
          title='Approvis'
          icon={<FaFileContract />}
        />
      </ul>
    </nav>
  )
}
