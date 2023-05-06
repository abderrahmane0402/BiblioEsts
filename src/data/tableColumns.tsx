"use client"
import LinkImgShow from "@/components/LinkImgShow"
import {
  GridActionsCellItem,
  GridColDef,
  GridRenderCellParams,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid"
import { HiInformationCircle } from "react-icons/hi"
import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import { redirect } from "next/navigation"

export const LivreColumns: GridColDef[] = [
  // {
  //   field: "PAGE_DE_GARDE",
  //   headerName: "Page de garde",
  //   flex: 1,
  //   hideable: false,
  //   renderCell: (params: GridRenderCellParams) => (
  //     <LinkImgShow href={params.value} />
  //   ),
  // },
  {
    field: "TITRE",
    headerName: "Titre",
    flex: 1.5,
    type: "string",
    hideable: false,
  },
  {
    field: "categorie",
    headerName: "Categorie",
    flex: 1,
    type: "string",
    valueGetter: (params: GridValueGetterParams) =>
      params.row.categorie.LIBELLE || "",
    hideable: false,
  },
  {
    field: "AUTHEUR",
    headerName: "Autheur",
    flex: 1.5,
    type: "string",
    hideable: false,
  },
  {
    field: "EDITEUR",
    flex: 1,
    headerName: "Editeur",
    type: "string",
    hideable: false,
  },
  {
    field: "DATE_EDITION",
    headerName: "dateEdition",
    flex: 1,
    type: "date",
  },
  { field: "CODE", headerName: "Code", flex: 1, type: "number" },
  {
    field: "PRIX",
    flex: 1,
    headerName: "Prix",
    type: "number",
    hideable: false,
  },
  {
    field: "actions",
    width: 70,
    type: "actions",
    getActions: (params: GridRowParams) => [
      <GridActionsCellItem
        key={params.id}
        icon={<HiInformationCircle className='text-xl' />}
        label='showMore'
        onClick={() => redirect('/livre/' + params.id)}
        title="plus d'infos"
      />,
      <GridActionsCellItem
        key={params.id}
        icon={<MdDelete className='text-xl' />}
        label='delete'
        onClick={() => console.log("delete" + params.id)}
        showInMenu
      />,
      <GridActionsCellItem
        key={params.id}
        icon={<BiEdit className='text-xl' />}
        label='editer'
        onClick={() => console.log("editer" + params.id)}
        showInMenu
      />,
    ],
  },
]
