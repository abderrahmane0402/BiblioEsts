import { GridActionsCellItem, GridActionsCellItemProps } from "@mui/x-data-grid"
import { FC, MouseEventHandler } from "react"

function CustomGridActionsCellItem(props: typeof GridActionsCellItem) {
  return (
    <GridActionsCellItem
      {...props}
    />
  )
}

export default CustomGridActionsCellItem
