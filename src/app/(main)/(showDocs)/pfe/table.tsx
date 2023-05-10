"use client";
import DataTable from "@/components/DataTable";
import { CustomColumnMenu } from "@/ui/x-data-grid-customization/CustomColumnMenu";
import { CustomToolbar } from "@/ui/x-data-grid-customization/CustomToolBar";
import {
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
} from "@mui/x-data-grid";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

export function Table({ data }: { data: any }) {
  const Columns: GridColDef[] = [
    {
      field: "SUJET",
      headerName: "Sujet",
      flex: 1,
      type: "string",
      hideable: false,
    },
    {
      field: "REALISATEUR",
      flex: 2,
      headerName: "Réalisateur",
      type: "string",
      hideable: false,
    },
    {
      field: "ENCADRANT",
      flex: 1,
      headerName: "Encadrant",
      type: "string",
      hideable: false,
    },
    {
      field: "DATE_REALISATION",
      flex: 1,
      headerName: "Année de réalisation",
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
          icon={<MdDelete className="text-xl" />}
          label="delete"
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<BiEdit className="text-xl" />}
          label="editer"
        />,
      ],
    },
  ];

  return (
    <DataTable
      columns={Columns}
      rows={data}
      ID="IDPFE"
      customSlots={{
        columnMenu: CustomColumnMenu,
        toolbar: CustomToolbar,
      }}
      autoPageSize
    />
  );
}
