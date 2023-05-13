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
}

const InputSelect: FC<SelectProps> = ({ options, placeholder, ...props }) => {
  return (
    <Select
      {...props}
      className="h-10 w-full bg-slate-200 border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg"
    >
      {options?.map((option) => (
        <MenuItem key={option.ID_CAT} value={option.ID_CAT}>
          {option.LIBELLE}
        </MenuItem>
      ))}
    </Select>
  );
};

export default InputSelect;

// export default function BasicSelect() {

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
