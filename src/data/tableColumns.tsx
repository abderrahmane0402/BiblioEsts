import LinkImgShow from "@/components/LinkImgShow"
import MLink from "@/components/ui/MLink"
import Paragraph from "@/components/ui/Paragraph"
import ShowImage from "@/ui/ShowImage"
import {
  GridColDef,
  GridActionsCellItem,
  GridRowParams,
  GridRenderCellParams,
} from "@mui/x-data-grid"
import {even} from 'react'

export const LivreColumns: GridColDef[] = [
  {
    field: "pgImg",
    headerName: "Page de garde",
    width: 100,
    hideable: false,
    renderCell:(params:GridRenderCellParams) =>(
      <LinkImgShow href={params.value}/>
    ),
  },
  {
    field: "titre",
    headerName: "Titre",
    width: 150,
    type: "string",
    hideable: false,
  },
  {
    field: "categorie",
    headerName: "Categorie",
    width: 100,
    type: "string",
    hideable: false,
  },
  {
    field: "autheur",
    headerName: "Autheur",
    width: 100,
    type: "string",
    hideable: false,
  },
  {
    field: "editeur",
    headerName: "Editeur",
    width: 100,
    type: "string",
    hideable: false,
  },
  { field: "dateE", headerName: "dateEdition", width: 100, type: "date" },
  { field: "code", headerName: "Code", width: 100, type: "number" },
  { field: "obser", headerName: "Observation", width: 150, type: "string" },
  { field: "somaire", headerName: "Somaire", width: 100, type: "string" },
  {
    field: "prix",
    headerName: "Prix",
    width: 100,
    type: "number",
    hideable: false,
  },
  
]
