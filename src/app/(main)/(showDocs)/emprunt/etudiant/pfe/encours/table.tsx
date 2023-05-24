"use client";
import DataTable from "@/components/DataTable";
import { CustomColumnMenu } from "@/ui/x-data-grid-customization/CustomColumnMenu";
import { CustomToolbar } from "@/ui/x-data-grid-customization/CustomToolBar";
import {
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
} from "@mui/x-data-grid";
import * as Toast from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiCheckCircle, BiEdit } from "react-icons/bi";
import { HiInformationCircle } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

export function Table({ data }: { data: any }) {
  const router = useRouter();
  const [isDeleted, setisDeleted] = useState(false)
  const [notDeleted, setnotDeleted] = useState(false)
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<any>();
  const [open2, setOpen2] = useState(false);

  const Columns: GridColDef[] = [
    {
      field: "Cote",
      headerName: "Cote",
      flex: 0.7,
      type: "string",
      hideable: false,
    },
    {
      field: "N_inscription",
      headerName: "N inscription",
      flex: 0.7,
      type: "string",
      hideable: false,
    },
    {
      field: "DATE_D",
      headerName: "Début",
      flex: 0.7,
      type: "date",
      hideable: false,
    },
    {
      field: "DATE_F",
      headerName: "Fin",
      flex: 0.7,
      type: "date",
      hideable: false,
    },
    {
      field: "utilisateur",
      headerName: "Utilisateur",
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
          icon={<BiCheckCircle className="text-xl" />}
          label="confirmer"
          onClick={() => {
            setOpen(true);
            setId(params.id);
          }}
          title="comfirmer"
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<HiInformationCircle className="text-xl" />}
          label="plus d'information"
          onClick={() => {
            router.push(`/moreInfo/emprunt/etudiant/pfe/${params.id}`);
          }}
          title="plus d'infos"
          showInMenu
        ></GridActionsCellItem>,
        <GridActionsCellItem
          key={params.id}
          icon={<MdDelete className="text-xl" />}
          label="Supprimer"
          onClick={() => {
            fetch(`/api/emprunt/etudiant/pfe/${params.id}`, {
              method: "DELETE",
            })
              .then((res) => res.text())
              .then((data) => {
                if (data === "ok") {
                  router.refresh()
                  setisDeleted(data === "ok")
                  setTimeout(() => setisDeleted(false), 2000)
                } else {
                  setnotDeleted(true)
                  setTimeout(() => setnotDeleted(false), 2000)
                }
              })
          }}
          
          showInMenu
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<BiEdit className="text-xl" />}
          label="Modifier"
          onClick={() => {
            router.push(`/updateDocs/emprunt/etudiant/pfe/${params.id}`);
          }}
          showInMenu
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
        ID={"IDPE"}
        customSlots={{
          columnMenu: CustomColumnMenu,
          toolbar: CustomToolbar,
        }}
        autoPageSize
      />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Êtes-vous sûre de vouloir comfirmer le retour de cet document"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>refuser</Button>
          <Button
            onClick={() => {
              setOpen(false);
              fetch("/api/emprunt/etudiant/pfe", {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: id }),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data) {
                    router.push("/emprunt/etudiant/pfe/historique");
                  } else {
                    router.refresh();
                    setOpen2(true);
                    setTimeout(() => setOpen2(false), 5000);
                  }
                });
            }}
            autoFocus
          >
            Accepter
          </Button>
        </DialogActions>
      </Dialog>
      <Toast.Provider>
        <Toast.Root open={open2} Ttype={"error"}>
          <div>
            <Toast.Title>Error</Toast.Title>
            <Toast.Description>
              verifier les informations inserer
            </Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setOpen2(false)}>
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
