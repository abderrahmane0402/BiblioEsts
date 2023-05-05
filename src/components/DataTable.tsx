"use client"
import { CustomColumnMenu } from "@/ui/x-data-grid-customization/CustomColumnMenu"
import { CustomToolbar } from "@/ui/x-data-grid-customization/CustomToolBar"
import {
  DataGrid,
  DataGridProps,
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
} from "@mui/x-data-grid"
import { FC, forwardRef } from "react"
import { BiEdit } from "react-icons/bi"
import { MdDelete } from "react-icons/md"

interface DataTableProps extends DataGridProps {
  ID: string
}

const DataTable: FC<DataTableProps> = forwardRef<
  HTMLDivElement,
  DataTableProps
>(({ rows, columns, ID, ...props }, ref) => {
  const ccolumns: GridColDef[] = [
    ...columns,
    {
      field: "actions",
      width: 70,
      type: "actions",
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key={params.id}
          icon={<MdDelete className='text-xl' />}
          label='delete'
          onClick={() => console.log("delete" + params.id)}
        />,
        <GridActionsCellItem
          key={params.id}
          icon={<BiEdit className='text-xl' />}
          label='delete'
          onClick={() => console.log("delete" + params.id)}
        />,
      ],
    },
  ]
  return (
    <DataGrid
      slots={{
        columnMenu: CustomColumnMenu,
        toolbar: CustomToolbar,
      }}
      ref={ref}
      columns={ccolumns}
      rows={rows}
      getRowId={(row) => row[ID]}
      autoPageSize
      {...props}
    />
  )
})

DataTable.displayName = "DataTable"

export default DataTable
