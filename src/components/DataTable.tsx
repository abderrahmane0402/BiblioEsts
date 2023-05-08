"use client"
import {
  DataGrid,
  DataGridProps,
  GridSlotsComponent,
  GridSlotsComponentsProps,
} from "@mui/x-data-grid"
import { UncapitalizeObjectKeys } from "@mui/x-data-grid/internals"
import { FC, forwardRef } from "react"

interface DataTableProps extends DataGridProps {
  ID?: string
  customSlots?: UncapitalizeObjectKeys<Partial<GridSlotsComponent>>
  customSlotsProps?: GridSlotsComponentsProps
}

const DataTable: FC<DataTableProps> = forwardRef<
  HTMLDivElement,
  DataTableProps
>(({ rows, columns, ID, customSlots, customSlotsProps, ...props }, ref) => {
  return (
    <DataGrid
      ref={ref}
      columns={columns}
      rows={rows}
      slots={customSlots}
      slotProps={customSlotsProps}
      getRowId={(row) => row[ID || "id"]}
      {...props}
    />
  )
})

DataTable.displayName = "DataTable"

export default DataTable
