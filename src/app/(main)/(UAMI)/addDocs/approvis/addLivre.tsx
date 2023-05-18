"use client"
import DataTable from "@/components/DataTable"
import { Card } from "@/components/ui/Card"
import { CustomColumnMenu } from "@/components/ui/x-data-grid-customization/CustomColumnMenu"
import { getDate } from "@/utils/date"
import { Modal } from "@mui/material"
import { GridColDef } from "@mui/x-data-grid"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

export default function AddLivre({
  livre,
}: {
  livre?: {
    value?: Map<number, number>
    set: Dispatch<SetStateAction<Map<number, number> | undefined>>
  }
}) {
  const [open, setOpen] = useState(false)
  const [livres, setLivres] = useState([])
  useEffect(() => {
    fetch("/api/livre")
      .then((res) => res.json())
      .then((data) => setLivres(data))
    return () => {
      setLivres([])
    }
  }, [])

  const Columns: GridColDef[] = [
    {
      field: "check",
      headerName: "",
      renderCell(params) {
        return (
          <input
            type='checkbox'
            onChange={(e) => {
              if (e.currentTarget.checked) {
                const clone = new Map(livre?.value)
                clone.set(params.row.ID_LIVRE, 1)
                livre?.set(clone)
              } else {
                const clone = new Map(livre?.value)
                clone.delete(params.row.ID_LIVRE)
                livre?.set(clone)
              }
            }}
          />
        )
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
      valueGetter(params) {
        return getDate(new Date(params.row.DATE_EDITION))
      },
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
      field: "QTE",
      renderCell(params) {
        const Disabled = !livre?.value?.has(params.row.ID_LIVRE)
        return (
          <input
            type='number'
            className='w-4/5 h-4/5 text-center'
            disabled={Disabled}
            onChange={(e) => {
              const clone = new Map(livre?.value)
              clone.set(params.row.ID_LIVRE, parseInt(e.target.value))
              livre?.set(clone)
            }}
          />
        )
      },
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
        className="className='h-10 flex items-center justify-center transition-colors px-2 rounded-md text-white bg-sky-400 hover:bg-sky-600 active:bg-sky-200'"
      >
        open
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
      </Modal>
    </>
  )
}
