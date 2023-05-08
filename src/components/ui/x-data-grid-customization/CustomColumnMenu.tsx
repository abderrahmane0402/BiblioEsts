'use client'
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material"
import {
  GridColumnMenu,
  GridColumnMenuProps,
  useGridApiContext,
  GridColumnMenuItemProps,
} from "@mui/x-data-grid"
import React from "react"
import { BiSearch } from "react-icons/bi"

function CustomFilterItem(props: GridColumnMenuItemProps) {
  const { onClick, colDef } = props
  const apiRef = useGridApiContext()
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      apiRef.current.showFilterPanel(colDef.field)
      onClick(event)
    },
    [apiRef, colDef.field, onClick]
  )
  return (
    <MenuItem onClick={handleClick}>
      <ListItemIcon>
        <BiSearch fontSize={'16px'} />
      </ListItemIcon>
      <ListItemText>Chercher</ListItemText>
    </MenuItem>
  )
}

export const CustomColumnMenu = (props: GridColumnMenuProps) => {
  return (
    <GridColumnMenu
      {...props}
      slots={{
        columnMenuColumnsItem: null,
        columnMenuFilterItem: CustomFilterItem,
      }}
    />
  )
}
