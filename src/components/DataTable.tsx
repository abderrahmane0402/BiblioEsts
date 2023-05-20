"use client";
import { styled } from "@mui/material";
import {
  DataGrid,
  DataGridProps,
  GridSlotsComponent,
  GridSlotsComponentsProps,
} from "@mui/x-data-grid";
import { UncapitalizeObjectKeys } from "@mui/x-data-grid/internals";
import { FC, forwardRef } from "react";

interface DataTableProps extends DataGridProps {
  ID?: string;
  customSlots?: UncapitalizeObjectKeys<Partial<GridSlotsComponent>>;
  customSlotsProps?: GridSlotsComponentsProps;
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
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: `1px solid #33181881`,
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid #33181881`,
  },

  "& .MuiDataGrid-columnHeader": {
    borderBottom: `1px solid black`,
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#0000009f",
  },
  "& .MuiDataGrid-cellContent": {
    fontSize: "18px",
    color: "black",
  },
}));

const DataTable: FC<DataTableProps> = forwardRef<
  HTMLDivElement,
  DataTableProps
>(({ rows, columns, ID, customSlots, customSlotsProps, ...props }, ref) => {
  return (
    <StyledDataGrid
      sx={{
        fontSize: "",
      }}
      ref={ref}
      columns={columns}
      rows={rows}
      slots={customSlots}
      slotProps={customSlotsProps}
      getRowId={(row) => row[ID || "id"]}
      {...props}
    />
  );
});

DataTable.displayName = "DataTable";

export default DataTable;
