"use client"
import {
  GridActionsCellItem,
  GridColDef, GridRowParams,
  GridValueGetterParams
} from "@mui/x-data-grid"
import { BiEdit } from "react-icons/bi"
import { HiInformationCircle } from 'react-icons/hi'
import { MdDelete } from "react-icons/md"
import Link from "next/link"


export const ExemplaireColumns: GridColDef[] = [
  {
    field: "N_INVENTAIRE",
    headerName: "n_inventaire",
    type: "number",
    hideable: false,
  },
  {
    field: "OBSERVATIONE",
    headerName: "observation",
    type: "string",
    hideable: false,
  },
  {
    field: "actions",
    width: 70,
    type: "actions",
    getActions: (params: GridRowParams) => [
      <GridActionsCellItem
        key={params.id}
        icon={<MdDelete className='text-xl' />}
        label='delete'
        onClick={() => console.log("delete" + params.id)}
      />,
      <GridActionsCellItem
        key={params.id}
        icon={<BiEdit className='text-xl' />}
        label='editer'
        onClick={() => console.log("editer" + params.id)}
      />,
    ],
  },
]
