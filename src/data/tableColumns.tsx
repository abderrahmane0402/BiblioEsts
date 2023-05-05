"use client"
import LinkImgShow from "@/components/LinkImgShow"
import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid"

// export const LivreColumns: GridColDef[] = [
//   {
//     field: "pgImg",
//     headerName: "Page de garde",
//     width: 100,
//     hideable: false,
//     renderCell:(params:GridRenderCellParams) =>(
//       <LinkImgShow href={params.value}/>
//     ),
//   },
//   {
//     field: "titre",
//     headerName: "Titre",
//     width: 150,
//     type: "string",
//     hideable: false,
//   },
//   {
//     field: "categorie",
//     headerName: "Categorie",
//     width: 100,
//     type: "string",
//     hideable: false,
//   },
//   {
//     field: "autheur",
//     headerName: "Autheur",
//     width: 100,
//     type: "string",
//     hideable: false,
//   },
//   {
//     field: "editeur",
//     headerName: "Editeur",
//     width: 100,
//     type: "string",
//     hideable: false,
//   },
//   { field: "dateE", headerName: "dateEdition", width: 100, type: "date" },
//   { field: "code", headerName: "Code", width: 100, type: "number" },
//   { field: "obser", headerName: "Observation", width: 150, type: "string" },
//   { field: "somaire", headerName: "Somaire", width: 100, type: "string" },
//   {
//     field: "prix",
//     headerName: "Prix",
//     width: 100,
//     type: "number",
//     hideable: false,
//   },

// ]
export const LivreColumns: GridColDef[] = [
  {
    field: "PAGE_DE_GARDE",
    headerName: "Page de garde",
    flex: 1,
    hideable: false,
    renderCell: (params: GridRenderCellParams) => (
      <LinkImgShow href={params.value} />
    ),
  },
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
  { field: "SOMAIRE", headerName: "Somaire", flex: 1, type: "string" },
  {
    field: "PRIX",
    flex: 1,
    headerName: "Prix",
    type: "number",
    hideable: false,
  },
  {
    field: "OBSERVATIONL",
    flex: 1,
    headerName: "Observation",
    type: "string",
  },
]
