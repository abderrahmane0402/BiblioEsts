"use client"
import { Autocomplete, TextField } from "@mui/material"
import { FC } from "react"

interface AutoCompleteProps {
  options: any[]
  name: string
  defaultValue?: any 
}

   
const AutoComplete: FC<AutoCompleteProps> = ({ options, name , defaultValue}) => {
  return (
    <Autocomplete
    
      freeSolo
      id='combo-box-demo'
      options={options}
      renderInput={(params) => <TextField name={name}  {...params} />}
      defaultValue={defaultValue}
    />
  )
}

export default AutoComplete
