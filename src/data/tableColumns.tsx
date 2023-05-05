"use client"
import LinkImgShow from "@/components/LinkImgShow"
import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid"

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
