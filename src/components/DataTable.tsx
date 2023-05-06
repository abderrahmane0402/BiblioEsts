"use client"
import { CustomColumnMenu } from "@/ui/x-data-grid-customization/CustomColumnMenu"
import { CustomToolbar } from "@/ui/x-data-grid-customization/CustomToolBar"
import {
  DataGrid,
  DataGridProps
} from "@mui/x-data-grid"
import { FC, forwardRef } from "react"

interface DataTableProps extends DataGridProps {
  ID: string
}

const DataTable: FC<DataTableProps> = forwardRef<
  HTMLDivElement,
  DataTableProps
>(({ rows, columns, ID, ...props }, ref) => {
  return (
    <DataGrid
      slots={{
        columnMenu: CustomColumnMenu,
        toolbar: CustomToolbar,
      }}
      ref={ref}
      columns={columns}
      rows={rows}
      getRowId={(row) => row[ID]}
      autoPageSize
      {...props}
    />
  )
})

DataTable.displayName = "DataTable"

export default DataTable
