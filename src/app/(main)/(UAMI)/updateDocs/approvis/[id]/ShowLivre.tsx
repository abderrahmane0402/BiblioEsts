"use client";
import DataTable from "@/components/DataTable";
import MyImage from "@/components/ui/MyImage";
import { CustomColumnMenu } from "@/components/ui/x-data-grid-customization/CustomColumnMenu";
import { CustomToolbar } from "@/components/ui/x-data-grid-customization/CustomToolBar";
import {
  GridActionsCellItem,
    GridColDef,
    GridRowParams,
    GridValueGetterParams
} from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { HiInformationCircle } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
export function Table({ data }: { data: any }) {
  const router = useRouter();
  const Columns: GridColDef[] = [
    // {
    //   field: "N_INVENTAIRE",
    //   headerName: "Titre",
    //   flex: 1.5,
    //   valueGetter: (params: GridValueGetterParams) =>
    //   params.row.Exemplaire.N_INVENTAIRE ,
    //   type: "string",
    //   hideable: false,
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
      headerName: "Auteur",
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
      type: "string",
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
      field: "QTE",
      flex: 1,
      headerName: "QTE",
      type: "number",
      hideable: false,
    },
    
  ];

  useEffect(() => {
    router.refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DataTable
      columns={Columns}
      rows={data ? data : []}
      ID="ID_LIVRE"
      className="h-auto"
      customSlots={{
        columnMenu: CustomColumnMenu,
      }}
      hideFooter
    />
  );

}
