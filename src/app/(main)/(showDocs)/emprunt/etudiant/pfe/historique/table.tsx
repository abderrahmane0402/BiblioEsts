"use client"
import DataTable from "@/components/DataTable"
import { CustomColumnMenu } from "@/ui/x-data-grid-customization/CustomColumnMenu"
import { CustomToolbar } from "@/ui/x-data-grid-customization/CustomToolBar"
import {
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
} from "@mui/x-data-grid"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { BiEdit } from "react-icons/bi"
import { HiInformationCircle } from "react-icons/hi"
import { MdDelete } from "react-icons/md"

export function Table({ data }: { data: any }) {
  const router = useRouter()

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
      field: "DATE_R",
      headerName: "Retour",
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
        return params.row.utilisateur.NOM + " " + params.row.utilisateur.PRENOM
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
          icon={<HiInformationCircle className='text-xl' />}
          label="plus d'infos"
          onClick={() => {
            router.push(`/moreInfo/emprunt/etudiant/pfe/${params.id}`)
          }}
          title="plus d'infos"
        ></GridActionsCellItem>,
        <GridActionsCellItem
          key={params.id}
          icon={<MdDelete className='text-xl' />}
          label='Supprimer'
          onClick={() => {
            fetch(`/api/emprunt/etudiant/pfe/${params.id}`, {
              method: "DELETE",
            })
              .then((res) => res.text())
              .then((data) => {
                if (data === "ok") {
                  router.refresh()
                  
                } else {
                  router.refresh()
                }
              })
          }}
          showInMenu
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<BiEdit className='text-xl' />}
          label='Modifier'
          onClick={() => {
            router.push(`/updateDocs/emprunt/etudiant/pfe/${params.id}`);
          }}
          showInMenu
        />,
      ],
    },
  ]

  useEffect(() => {
    router.refresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
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
  )
}
