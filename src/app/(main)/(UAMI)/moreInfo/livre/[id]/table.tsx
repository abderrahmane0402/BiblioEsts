"use client";
import DataTable from "@/components/DataTable";
import { CustomColumnMenu } from "@/components/ui/x-data-grid-customization/CustomColumnMenu";
import { GridColDef } from "@mui/x-data-grid";

export function Table({ data }: { data: any }) {
  const Columns: GridColDef[] = [
    {
      field: "N_INVENTAIRE",
      headerName: "n_inventaire",
      type: "number",
      hideable: false,
      
    },
    {
      field: "OBSERVATIONE",
      headerName: "observation",
      type: "string",
      hideable: false,
      width : 350   ,
    },
  ];

  return (
    <DataTable
      columns={Columns}
      rows={data ? data : []}
      ID="N_INVENTAIRE"
      className="h-auto"
      customSlots={{
        columnMenu: CustomColumnMenu,
      }}
      hideFooter
    />
  );
}
