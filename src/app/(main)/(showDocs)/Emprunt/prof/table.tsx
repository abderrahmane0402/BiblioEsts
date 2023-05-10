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
      field: "LIBELLE",
      headerName: "Libellé",
      flex: 0.7,
      type: "string",
      hideable: false,
    },
    {
      field: "categorie",
      headerName: "Catégorie parent",
      flex: 0.7,
      valueGetter(params) {
          return params.row.categorie?.LIBELLE
      },
      type: "string",
      hideable: false,
    },
    {
      field: "SUJET",
      headerName: "Sujet",
      flex: 2,
      type: "string",
      hideable: false,
    },
    {
      field: "actions",
      width: 70,
      type: "actions",
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key={`delete-${params.id}`}
          icon={<MdDelete className="text-xl" />}
          label="Supprimer"
        />,
        <GridActionsCellItem
          key={`edit-${params.id}`}
          icon={<BiEdit className="text-xl" />}
          label="Editer"
        />,
      ],
    },
  ];

  return (
    <DataTable
      columns={Columns}
      rows={data}
      ID="ID_CAT"
      customSlots={{
        columnMenu: CustomColumnMenu,
        toolbar: CustomToolbar,
      }}
      autoPageSize
    />
  );
}
