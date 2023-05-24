"use client";
import DataTable from "@/components/DataTable";
import MyImage from "@/components/ui/MyImage";
import { CustomColumnMenu } from "@/components/ui/x-data-grid-customization/CustomColumnMenu";
import { CustomToolbar } from "@/components/ui/x-data-grid-customization/CustomToolBar";
import {
    GridColDef,
    GridValueGetterParams
} from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export function Table({ data }: { data: any }) {
  const router = useRouter();
  const Columns: GridColDef[] = [
    {
      field: "PAGE_DE_GARDE",
      headerName: "",
      width: 60,
      type: "string",
      hideable: false,
      renderCell(params) {
        return (
          <div className="relative w-full h-4/5">
            <MyImage src={params.row.PAGE_DE_GARDE || ""} alt="page de garde" />
          </div>
        );
      },
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
      headerName: "Catégorie",
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
      headerName: "Date d'édition",
      flex: 1,
      type: "number",
    },
    { field: "CODE", headerName: "Code", flex: 1, type: "number" },
    {
      field: "PRIX",
      flex: 1,
      headerName: "Prix",
      type: "number",
      hideable: true,
    },
  ];
  useEffect(() => {
    router.refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <DataTable
        columns={Columns}
        rows={data}
        ID="ID_LIVRE"
        customSlots={{
          columnMenu: CustomColumnMenu,
          toolbar: CustomToolbar,
        }}
        autoPageSize
      />
    </>
  );
}
