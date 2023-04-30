import { CgFileDocument } from "react-icons/cg"
import { MdSpaceDashboard, MdOutlineWork } from "react-icons/md"
import {
  FaFileContract,
  FaUserGraduate,
  FaUserTie,
  FaChalkboardTeacher,
} from "react-icons/fa"
import { TbBooks, TbReportMoney } from "react-icons/tb"
import { VscRepo } from "react-icons/vsc"
import { NavItem } from "@/types"


export const navItems: NavItem[] = [
  { id: 1, href: "/dashboard", title: "Acceuil", icon: <MdSpaceDashboard /> },
  {
    id: 2,
    title: "Documents",
    href: null,
    icon: <CgFileDocument />,
    sub_nav: [
      { id: 3, href: "/livre", title: "Livres", icon: <TbBooks /> },
      { id: 4, href: "/main/PFE", title: "PFE", icon: <VscRepo /> },
    ],
  },
  {
    id: 5,
    title: "Emprunt",
    href: null,
    icon: <FaChalkboardTeacher />,
    sub_nav: [
      {
        id: 6,
        href: "/main/Etudiant",
        title: "Etudiants",
        icon: <FaUserGraduate />,
      },
      { id: 7, href: "/main/Prof", title: "Professeurs", icon: <FaUserTie /> },
    ],
  },
  { id: 8, href: "/main/empe", title: "Employes", icon: <MdOutlineWork /> },
  { id: 9, href: "/main/Four", title: "Fournisseur", icon: <TbReportMoney /> },
  {
    id: 10,
    href: "/main/approvis",
    title: "Approvis",
    icon: <FaFileContract />,
  },
]

