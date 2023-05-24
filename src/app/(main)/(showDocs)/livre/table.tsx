"use client";
import DataTable from "@/components/DataTable";
import MyImage from "@/components/ui/MyImage";
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
import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { HiInformationCircle } from "react-icons/hi";
import { MdAddCircle, MdDelete } from "react-icons/md";

export function Table({ data }: { data: any }) {
  const [isDeleted, setisDeleted] = useState(false);
  const [notDeleted, setnotDeleted] = useState(false);
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
    {
      field: "actions",
      width: 150,
      type: "actions",
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key={params.id}
          icon={<HiInformationCircle className="text-xl" />}
          label="plus d'information"
          onClick={() => {
            router.push(`/moreInfo/livre/${params.id}`);
          }}
          title="plus d'infos"
        ></GridActionsCellItem>,
        <GridActionsCellItem
          key={params.id}
          icon={<MdAddCircle className="text-xl" />}
          label="Ajouter exemplaire"
          onClick={() => {
            router.push(`/moreInfo/livre/${params.id}`);
          }}
          title="Ajouter exemplaire"
        ></GridActionsCellItem>,
        <GridActionsCellItem
          key={params.id}
          icon={<MdDelete className="text-xl" />}
          label="Supprimer"
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
          label="Modifer"
          showInMenu
          onClick={() => {
            router.push(`/updateDocs/livre/${params.id}`);
          }}
        />,
      ],
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
        getRowClassName={(params) => ''}
        // ={(params) => `super-app-theme--${params.row.status}`}
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
            <Toast.Description>Livre Supprimer avec succés</Toast.Description>
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
              imposible de supprimer ce Livre
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
