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
      field: "IDPFE",
      headerName: "N°PFE",
      flex: 0.7,
      type: "number",
      hideable: false,
    },
    {
      field: "professeur",
      headerName: "professeur",
      flex: 1,
      valueGetter(params) {
        return params.row.professeur.NOM + " " + params.row.professeur.PRENOM;
      },
      type: "string",
      hideable: false,
    },
    {
      field: "DATE_D",
      headerName: "début",
      flex: 0.7,
      type: "date",
      hideable: false,
    },
    {
      field: "DATE_R",
      headerName: "retour",
      flex: 0.7,
      type: "date",
      hideable: false,
    },
    {
      field: "DATE_F",
      headerName: "fin",
      flex: 0.7,
      type: "date",
      hideable: false,
    },
    {
      field: "utilisateur",
      headerName: "utilisateur",
      flex: 1,
      valueGetter(params) {
        return params.row.utilisateur.NOM + " " + params.row.utilisateur.PRENOM;
      },
      type: "string",
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
      ID={"IDPP"}
      customSlots={{
        columnMenu: CustomColumnMenu,
        toolbar: CustomToolbar,
      }}
      autoPageSize
    />
  );
}