"use client";
import { FC } from "react";
import { SelectInputProps } from "@mui/material/Select/SelectInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
interface SelectProps extends SelectInputProps {
  options: {
    ID_CAT: number;
    LIBELLE: string;
  }[];
  placeholder?: string;
  defaultValue : string 
}

const InputSelect: FC<SelectProps> = ({ options, placeholder, defaultValue, ...props }) => {
  return (
    <Select  
      {...props}
      defaultValue={defaultValue}
      className="h-10 w-full bg-slate-200 border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg"
    >
      <MenuItem value="" className="h-10 bg-black/40"></MenuItem>
      {options?.map((option) => (
        <MenuItem  key={option.ID_CAT} value={option.ID_CAT} >
          {option.LIBELLE}
        </MenuItem>
      ))}
    </Select>
  );
};

export default InputSelect;
