"use client"
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid"

export function CustomToolbar() {
  return (
    <div className='flex justify-between py-2 px-5'>
      <GridToolbarContainer>
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
      <GridToolbarExport />
    </div>
  )
}
