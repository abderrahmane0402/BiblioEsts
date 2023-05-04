import { FC } from "react";
import Autocomplete, { AutocompleteProps } from '@mui/joy/Autocomplete';



interface SelectProps extends Omit<AutocompleteProps<any, any, any, any >, 'renderInput'> {
  options: {
    id: number;
    label: string;
  }[];
  getOptionLabel: (option: { id: number; label: string }) => string;
  getOptionSelected: (option: { id: number; label: string }, value: any) => boolean;
}

const Select: FC<SelectProps> = ({ options,placeholder, getOptionLabel, getOptionSelected,className, ...props }) => {
  return (
    <Autocomplete
      placeholder="choose your cat"
      options={options}
      getOptionLabel={getOptionLabel} // use the label property for the option label
      // getOptionSelected={getOptionSelected} // compare the id property for option selection
      className="h-8 w-full bg-slate-200 border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg"
      
     {...props}
    />
  );
};

export default Select;
// interface SelectProps extends Omit<AutocompleteProps<any, any, any, any>, 'renderInput'> {
//   options: {
//     id: number;
//     label: string;
//   }[];
//   getOptionLabel: (option: { id: number; label: string }) => string;
//   getOptionSelected: (option: { id: number; label: string }, value: any) => boolean;
//   renderInput: (params: TextFieldProps) => JSX.Element;
// }





// export default function Filter() {
//   return (
//     <FormControl id="filter-demo">
//       <FormLabel>Custom filter</FormLabel>
//       <Autocomplete
//         placeholder="Type something"
//         options={}
//         getOptionLabel={(option) => option.title}
//         filterOptions={filterOptions}
//         sx={{ width: 300 }}
//       />
//     </FormControl>
//   );
// }