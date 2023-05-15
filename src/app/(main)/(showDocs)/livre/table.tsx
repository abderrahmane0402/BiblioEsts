"use client";
import DataTable from "@/components/DataTable";
import * as Toast from "@/components/ui/toast";
import { CustomColumnMenu } from "@/components/ui/x-data-grid-customization/CustomColumnMenu";
import { CustomToolbar } from "@/components/ui/x-data-grid-customization/CustomToolBar";
import {
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { HiInformationCircle } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

export function Table({ data }: { data: any }) {
  const [isDeleted, setisDeleted] = useState(false);
  const [notDeleted, setnotDeleted] = useState(false);
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
          onClick={() => {
            fetch(`/api/livre/${params.id}`, {
              method: "DELETE",
            })
              .then((res) => res.text())
              .then((data) => {
                if (data === "ok") {
                  router.refresh();
                  setisDeleted(data === "ok");
                  setTimeout(() => setisDeleted(false), 2000);
                } else {
                  setnotDeleted(true);
                  setTimeout(() => setnotDeleted(false), 2000);
                }
              });
          }}
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
      <Toast.Provider>
        <Toast.Root open={isDeleted} Ttype={"success"}>
          <div>
            <Toast.Title>succès</Toast.Title>
            <Toast.Description>
              Categorie Supprimer avec succés
            </Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setisDeleted(false)}>
            <button className="bg-transparent border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg">
              fermer
            </button>
          </Toast.Close>
        </Toast.Root>
        <Toast.Root open={notDeleted} Ttype={"error"}>
          <div>
            <Toast.Title>Error</Toast.Title>
            <Toast.Description>
              categorie utiliser dans un livre ou comme categorie pere
            </Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setnotDeleted(false)}>
            <button className="border-2 border-white/50 hover:border-white rounded-md p-2 font-thin text-lg">
              fermer
            </button>
          </Toast.Close>
        </Toast.Root>
        <Toast.ToastViewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
      </Toast.Provider>
    </>
  );
}
