"use client"
import { Autocomplete, TextField } from "@mui/material"
import { FC } from "react"

interface AutoCompleteProps {
  options: any[]
  name: string
}

const AutoComplete: FC<AutoCompleteProps> = ({ options, name }) => {
  return (
    <Autocomplete
      freeSolo
      id='combo-box-demo'
      options={options}
      renderInput={(params) => <TextField name={name} {...params} />}
    />
  )
}

export default AutoComplete
