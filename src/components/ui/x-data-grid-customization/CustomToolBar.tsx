"use client";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";

export function CustomToolbar() {
  return (
    <div className="flex justify-between">
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
      <GridToolbarQuickFilter />
    </div>
  );
}
