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
      field: "NOM",
      headerName: "Nom",
      flex: 1,
      type: "string",
      hideable: false,
    },
    {
      field: "PRENOM",
      headerName: "Prenom",
      flex: 1,
      type: "string",
      hideable: false,
    },
    {
      field: "DEPARTEMENT",
      headerName: "Departement",
      flex: 1,
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
      ID="ID_PROF"
      customSlots={{
        columnMenu: CustomColumnMenu,
        toolbar: CustomToolbar,
      }}
      autoPageSize
    />
  );
}
