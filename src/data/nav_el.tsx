import { ReactNode } from "react"
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

export interface SubNavItem {
  id: number
  href: string
  title: string
  icon: ReactNode
}

export interface NavItem {
  id: number
  href: string | null
  title: string
  icon: ReactNode
  isHid?: boolean
  sub_nav?: SubNavItem[]
}

export const navItems: NavItem[] = [
  { id: 1, href: "/dashboard", title: "Acceuil", icon: <MdSpaceDashboard /> },
  {
    id: 2,
    title: "Documents",
    href: null,
    icon: <CgFileDocument />,
    isHid: true,
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
    isHid: true,
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

// import { NavItem } from './nav_el'
// import MLink from './MLink'

// function renderNav(navItems: NavItem[]) {
//   return (
//     <nav>
//       <ul>
//         {navItems.map((navItem) => (
//           <li key={navItem.id}>
//             <MLink
//               href={navItem.href ?? ''}
//               type="nav"
//               font="lg"
//               className="hover:bg-[#250262] active:bg-[#c6ddf05a] pl-7 gap-5"
//             >
//               <navItem.icon />
//               {navItem.title}
//             </MLink>
//             {navItem.sub_nav && (
//               <ul>
//                 {navItem.sub_nav.map((subNavItem) => (
//                   <li key={subNavItem.id}>
//                     <MLink
//                       href={subNavItem.href}
//                       type="sub_nav"
//                       font="md"
//                       className="hover:bg-[#250262] active:bg-[#c6ddf05a] pl-7 gap-5"
//                     >
//                       <subNavItem.icon />
//                       {subNavItem.title}
//                     </MLink>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }
