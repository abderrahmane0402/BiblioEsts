"use client";
import DataTable from "@/components/DataTable";
import { CustomColumnMenu } from "@/components/ui/x-data-grid-customization/CustomColumnMenu";
import { CustomToolbar } from "@/components/ui/x-data-grid-customization/CustomToolBar";
import {
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { BiEdit } from "react-icons/bi";
import { HiInformationCircle } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

export function Table({ data }: { data: any }) {
  const router = useRouter();
  const Columns: GridColDef[] = [
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
          icon={<HiInformationCircle className="text-xl" />}
          label="showMore"
          onClick={() => {
            router.push(`/moreInfo/livre/${params.id}`);
          }}
          title="plus d'infos"
        ></GridActionsCellItem>,
        <GridActionsCellItem
          key={params.id}
          icon={<MdDelete className="text-xl" />}
          label="delete"
          showInMenu
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<BiEdit className="text-xl" />}
          label="editer"
          showInMenu
        />,
      ],
    },
  ];

  return (
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
  );
}
