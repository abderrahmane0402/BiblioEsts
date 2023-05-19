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
import { MdCategory, MdOutlineWork, MdSpaceDashboard } from "react-icons/md"
import { TbBooks, TbReportMoney } from "react-icons/tb"
import { VscRepo } from "react-icons/vsc"
import { GiBlackBook } from "react-icons/gi"

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
          href={["/livre", "/pfe", "/categorie", "/exemplaire"]}
          title={["Livre", "PFE", "Categorie", "Exemplaire"]}
          icon={[<TbBooks />, <VscRepo />, <MdCategory />, <GiBlackBook />]}
        />
        <NestedNav
          principale={{
            title: "Emprunt",
            href: "",
            icon: <FaChalkboardTeacher />,
          }}
          href={[
            "/emprunt/etudiant/livre/encours",
            "/emprunt/prof/livre/encours",
          ]}
          title={["Etudiants", "Professeurs"]}
          icon={[<FaUserGraduate />, <FaUserTie />]}
        />
        <Nav href='/utilisateur' title='Utilisateur' icon={<MdOutlineWork />} />
        <Nav href='/fournisseur' title='Fournisseur' icon={<TbReportMoney />} />
        <Nav
          href='/approvisionnement'
          title='Approvis'
          icon={<FaFileContract />}
        />
        <Nav href='/etudiant' title='Etudiant' icon={<FaUserGraduate />} />
        <Nav href='/prof' title='Professeur' icon={<FaUserTie />} />
        <Nav href='/fournisseur' title='Fournisseur' icon={<FaUserTie />} />
      </ul>
    </nav>
  )
}
