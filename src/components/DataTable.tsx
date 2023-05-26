"use client"
import { styled } from "@mui/material"
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

const StyledDataGrid = styled(DataGrid)(() => ({
  border: 0,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  // "& .MuiDataGrid-columnsContainer": {
  //   backgroundColor: '',
  // },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontSize: "0.8rem",
    fontWeight: "600",
    color: "#3a3541de",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  "& .MuiDataGrid-cellContent": {
    fontSize: "0.9rem",
    color: "rgba(58, 53, 65, 0.68)",
  },
  "& .MuiDataGrid-columnHeadersInner": {
    backgroundColor: "#f9fafc",
  },
  "& .Row-Retard": {
    backgroundColor: "rgba(255, 7, 0, 0.55)",
  },
}))

const DataTable: FC<DataTableProps> = forwardRef<
  HTMLDivElement,
  DataTableProps
>(({ rows, columns, ID, customSlots, customSlotsProps, ...props }, ref) => {
  return (
    <StyledDataGrid
      ref={ref}
      columns={columns}
      rows={rows}
      slots={customSlots}
      slotProps={customSlotsProps}
      getRowId={(row) => row[ID || "id"]}
      {...props}
      rowHeight={70}
      sx={{}}
    />
  )
})

DataTable.displayName = "DataTable"

export default DataTable
