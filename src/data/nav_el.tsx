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
      { id: 3, href: "/livre", title: "Livre", icon: <TbBooks /> },
      { id: 4, href: "/PFE", title: "PFE", icon: <VscRepo /> },
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
        href: "/student",
        title: "Etudiants",
        icon: <FaUserGraduate />,
      },
      { id: 7, href: "/main/Prof", title: "Professeurs", icon: <FaUserTie /> },
    ],
  },
  { id: 8, href: "/employes", title: "Employes", icon: <MdOutlineWork /> },
  { id: 9, href: "/Fournisseur", title: "Fournisseur", icon: <TbReportMoney /> },
  {
    id: 10,
    href: "/approvisionnement",
    title: "Approvis",
    icon: <FaFileContract />,
  },
]

