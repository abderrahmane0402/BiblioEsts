/* eslint-disable react/jsx-key */
import { Nav } from "@/ui/nav"
// import { NestedNav } from "@/ui/nestedNav"
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
import { cookies } from "next/headers"
import Separator from "@/ui/Separator"

export const ZNav = () => {
  const root = cookies().get("login")?.value === "root"
  return (
    <nav className='h-full overflow-auto scrollbar-none text-[#3a3541de]'>
      <ul className='pt-2 pr-[18px]'>
        <Nav
          href='/dashboard'
          title='Accueil'
          icon={<MdSpaceDashboard fontSize={"1.5rem"} />}
        />
        <Separator>DOCUMENTS</Separator>
        <Nav
          href='/livre'
          title='Livre'
          icon={<TbBooks fontSize={"1.5rem"} />}
        />
        <Nav href='/pfe' title='PFE' icon={<VscRepo fontSize={"1.5rem"} />} />
        <Nav
          href='/categorie'
          title='Categorie'
          icon={<MdCategory fontSize={"1.5rem"} />}
        />
        <Nav
          href='/exemplaire'
          title='Exemplaire'
          icon={<GiBlackBook fontSize={"1.5rem"} />}
        />
        <Separator>EMPRUNT</Separator>
        <Nav
          href='/emprunt/etudiant/livre/encours'
          title='Etudiant'
          icon={<FaUserGraduate fontSize={"1.5rem"} />}
        />
        <Nav
          href='/emprunt/prof/livre/encours'
          title='Enseignant'
          icon={<FaUserTie fontSize={"1.5rem"} />}
        />
        <Separator>AUTRE</Separator>
        <Nav
          href='/fournisseur'
          title='Fournisseur'
          icon={<TbReportMoney fontSize={"1.5rem"} />}
        />
        <Nav
          href='/approvisionnement'
          title='Approvisionnement'
          icon={<FaFileContract fontSize={"1.5rem"} />}
        />
        <Nav
          href='/etudiant'
          title='Etudiant'
          icon={<FaUserGraduate fontSize={"1.5rem"} />}
        />
        <Nav
          href='/prof'
          title='Enseignant'
          icon={<FaUserTie fontSize={"1.5rem"} />}
        />
        {root ? (
          <Nav
            href='/utilisateur'
            title='Utilisateur'
            icon={<MdOutlineWork fontSize={"1.5rem"} />}
          />
        ) : null}
      </ul>
    </nav>
  )
}
