"use client";
import DataTable from "@/components/DataTable";
import { CustomColumnMenu } from "@/ui/x-data-grid-customization/CustomColumnMenu";
import { CustomToolbar } from "@/ui/x-data-grid-customization/CustomToolBar";
import {
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
} from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { BiEdit } from "react-icons/bi";
import { HiInformationCircle } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

export function Table({ data }: { data: any }) {
  const router = useRouter();
  const Columns: GridColDef[] = [
    {
      field: "ID_APRO",
      headerName: "N approvisionnement",
      flex: 1,
      type: "string",
      hideable: false,
    },
    {
      field: "DATE",
      headerName: "date",
      flex: 1,
      type: "date",
      hideable: false,
    },
    {
      field: "ENTREPRISE",
      headerName: "entreprise",
      flex: 2,
      type: "string",
      hideable: false,
    },
    {
      field: "ADRESSE",
      headerName: "adresse",
      flex: 2,
      type: "string",
      hideable: false,
    },
    {
      field: "TELEPHONE",
      headerName: "téléphone",
      flex: 1,
      type: "number",
      hideable: false,
    },
    {
      field: "DEVIS",
      headerName: "devis",
      flex: 1,
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
            router.push(`/moreInfo/appro/${params.id}`);
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
          onClick={() => {
            router.push(`/addDocs/appro/${params.id}`);
          }}
        />,
      ],
    },
  ];

  return (
    <DataTable
      columns={Columns}
      rows={data}
      ID="ID_APRO"
      customSlots={{
        columnMenu: CustomColumnMenu,
        toolbar: CustomToolbar,
      }}
      autoPageSize
    />
  );
}
