"use client"
import DataTable from "@/components/DataTable"
import { Card } from "@/components/ui/Card"
import { CustomColumnMenu } from "@/components/ui/x-data-grid-customization/CustomColumnMenu"
import { getDate } from "@/utils/date"
import { Modal } from "@mui/material"
import { GridActionsCellItem, GridColDef, GridRowParams } from "@mui/x-data-grid"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { BiEdit } from "react-icons/bi"
import { HiInformationCircle } from "react-icons/hi"
import { MdDelete } from "react-icons/md"
import * as Toast from "@/components/ui/toast"


export default function AddLivre(
  { data }: { data: any }
) {
  const router = useRouter()
  const [isDeleted, setisDeleted] = useState(false)
  const [notDeleted, setnotDeleted] = useState(false)
  const [open, setOpen] = useState(false)
  const [livres, setLivres] = useState([])
  

  const Columns: GridColDef[] = [
    {
      field: "TITRE",
      headerName: "Titre",
      flex: 1.5,
      type: "string",
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
      type: "string",
      // valueGetter(params) {
      //   return getDate(new Date(params.row.DATE_EDITION))
      // },
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
          icon={<HiInformationCircle className='text-xl' />}
          label='showMore'
          onClick={() => {
            router.push(`/moreInfo/livre/${params.id}`)
          }}
          title="plus d'infos"
        ></GridActionsCellItem>,
        <GridActionsCellItem
          key={params.id}
          icon={<MdDelete className='text-xl' />}
          label='delete'
          showInMenu
          onClick={() => {
            fetch(`/api/livre/${params.id}`, {
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
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<BiEdit className='text-xl' />}
          label='editer'
          showInMenu
          onClick={() => {
            router.push(`/updateDocs/Livre/${params.id}`);
          }}
        />,
      ],
    },
  ]

  return (
    <>
      <input type='hidden' name='livre' />
      <button
        onClick={(e) => {
          e.preventDefault()
          setOpen(true)
        }}
        className="className='h-10 flex text-lg items-center justify-center transition-colors px-2 rounded-md text-white bg-sky-400 hover:bg-sky-600 active:bg-sky-200'"
      >
        ajouter livre
      </button>
      <Modal 
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className='flex justify-center items-center'
      >
        <div className='h-4/5 w-4/5'>
          <Card type={"full"}>
            <DataTable
              columns={Columns}
              customSlots={{
                columnMenu: CustomColumnMenu,
              }}
              autoPageSize
              rows={livres}
              ID='ID_LIVRE'
            />
          </Card>
        </div>
        <Toast.Provider>
        <Toast.Root open={isDeleted} Ttype={"success"}>
          <div>
            <Toast.Title>succès</Toast.Title>
            <Toast.Description>
              Fournisseur Supprimer avec succés
            </Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setisDeleted(false)}>
            <button className='bg-transparent border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg'>
              fermer
            </button>
          </Toast.Close>
        </Toast.Root>
        <Toast.Root open={notDeleted} Ttype={"error"}>
          <div>
            <Toast.Title>Error</Toast.Title>
            <Toast.Description>
              imposible de supprimer cet Fournisseur
            </Toast.Description>
          </div>
          <Toast.Close asChild onClick={() => setnotDeleted(false)}>
            <button className='border-2 border-white/50 hover:border-white rounded-md p-2 font-thin text-lg'>
              fermer
            </button>
          </Toast.Close>
        </Toast.Root>
        <Toast.ToastViewport className='[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none' />
      </Toast.Provider>
      </Modal>
    </>
  )
}
// "use client"
// import * as Toast from "@/components/ui/toast"
// import DataTable from "@/components/DataTable"
// import { CustomColumnMenu } from "@/ui/x-data-grid-customization/CustomColumnMenu"
// import { CustomToolbar } from "@/ui/x-data-grid-customization/CustomToolBar"
// import {
//   GridActionsCellItem,
//   GridColDef,
//   GridRowParams,
// } from "@mui/x-data-grid"
// import { BiEdit } from "react-icons/bi"
// import { MdDelete } from "react-icons/md"
// import { useRouter } from "next/navigation"
// import { useState } from "react"

// export function Table({ data }: { data: any }) {
//   const [isDeleted, setisDeleted] = useState(false)
//   const [notDeleted, setnotDeleted] = useState(false)
//   const router = useRouter()
//   const Columns: GridColDef[] = [
//     {
//       field: "NOM",
//       headerName: "Nom",
//       flex: 1,
//       type: "string",
//       hideable: false,
//     },
//     {
//       field: "PRENOM",
//       headerName: "Prénom",
//       flex: 1,
//       type: "string",
//       hideable: false,
//     },
//     {
//       field: "GMAIL",
//       headerName: "Email",
//       flex: 1,
//       type: "string",
//       hideable: false,
//     },
//     {
//       field: "ADDRESSE",
//       headerName: "Adresse",
//       flex: 1,
//       type: "string",
//       hideable: false,
//     },
//     {
//       field: "TELEPHONE",
//       headerName: "Téléphone",
//       flex: 1,
//       type: "number",
//       hideable: false,
//     },
//     {
//       field: "actions",
//       width: 70,
//       type: "actions",
//       getActions: (params: GridRowParams) => [
//         <GridActionsCellItem
//           key={`delete-${params.id}`}
//           icon={<MdDelete className='text-xl' />}
//           label='Supprimer'
//           onClick={() => {
//             fetch(`/api/fournisseur/${params.id}`, {
//               method: "DELETE",
//             })
//               .then((res) => res.text())
//               .then((data) => {
//                 if (data === "ok") {
//                   router.refresh()
//                   setisDeleted(data === "ok")
//                   setTimeout(() => setisDeleted(false), 2000)
//                 } else {
//                   setnotDeleted(true)
//                   setTimeout(() => setnotDeleted(false), 2000)
//                 }
//               })
//           }}
//         />,
//         <GridActionsCellItem
//           key={`edit-${params.id}`}
//           icon={<BiEdit className='text-xl' />}
//           label='Editer'
//           onClick={() => {
//             router.push(`/updateDocs/fournisseur/${params.id}`);}}
//         />,
//       ],
//     },
//   ]

//   return (
//     <>
//       <DataTable
//         columns={Columns}
//         rows={data}
//         ID='ID_FOR'
//         customSlots={{
//           columnMenu: CustomColumnMenu,
//           toolbar: CustomToolbar,
//         }}
//         autoPageSize
//       />
//       <Toast.Provider>
//         <Toast.Root open={isDeleted} Ttype={"success"}>
//           <div>
//             <Toast.Title>succès</Toast.Title>
//             <Toast.Description>
//               Fournisseur Supprimer avec succés
//             </Toast.Description>
//           </div>
//           <Toast.Close asChild onClick={() => setisDeleted(false)}>
//             <button className='bg-transparent border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg'>
//               fermer
//             </button>
//           </Toast.Close>
//         </Toast.Root>
//         <Toast.Root open={notDeleted} Ttype={"error"}>
//           <div>
//             <Toast.Title>Error</Toast.Title>
//             <Toast.Description>
//               imposible de supprimer cet Fournisseur
//             </Toast.Description>
//           </div>
//           <Toast.Close asChild onClick={() => setnotDeleted(false)}>
//             <button className='border-2 border-white/50 hover:border-white rounded-md p-2 font-thin text-lg'>
//               fermer
//             </button>
//           </Toast.Close>
//         </Toast.Root>
//         <Toast.ToastViewport className='[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none' />
//       </Toast.Provider>
//     </>
//   )
// }
