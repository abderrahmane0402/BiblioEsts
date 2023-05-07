"use client";
import { useState } from 'react';
import * as f from "@/components/Form";
import Button from "@/ui/Button";
import Header from "@/ui/Header";
import Input from "@/ui/Input";
import DataTable from '@/components/DataTable';
import { GridColDef } from '@mui/x-data-grid';
import { useImmer } from 'use-immer';

const columns: GridColDef[] = [
  { field: 'phone', headerName: 'Phone', width: 100 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
];
type Info = {
    name: string;
    email: string;
    phone: string;
  };
const SaveDataTable = () => {
    // const [persion,setupd]=useImmer({})
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [infoList, setInfoList] = useState<Info[]>([]);
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      // Add the entered information to the list
      const newInfo = { name, email, phone };
      setInfoList([...infoList, newInfo]);
  
      // Reset the input values
      setName('');
      setEmail('');
      setPhone('');
    };

    const rows = infoList.map((info, index) => ({ id: index, ...info }));

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
          <button type="submit">Add Info</button>
        </form>
        {/*  */}
        <DataTable rows={rows} columns={columns} />
        <button 
        // {/*onClick={handleSaveData} */} 
        >Save Data</button>
      </>
    );
  }

  export default SaveDataTable;



//     // /
// type Info = {
//     name: string;
//     email: string;
//     phone: string;
//   };
  
//   function SaveDataTable() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [infoList, setInfoList] = useState<Info[]>([]);
  
//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//       event.preventDefault();
  
//       // Add the entered information to the list
//       const newInfo = { name, email, phone };
//       setInfoList([...infoList, newInfo]);
  
//       // Reset the input values
//       setName('');
//       setEmail('');
//       setPhone('');
//     };
  
//     const handleSaveData = async () => {
//       try {
//         // Make a POST request to the API route to save the infoList to the database
//         await axios.post('/api/saveInfo', { infoList });
  
//         // Clear the infoList array
//         setInfoList([]);
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           {/* Add three inputs for name, email, and phone number */}
//           <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
//           <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
//           <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Phone" />
  
//           {/* Add a button to submit the form */}
//           <button type="submit">Add Info</button>
//         </form>
  
//         {/* Add the Table component */}
//         <Table data={infoList} />
  
//         {/* Add a button to save the data */}
//         <button onClick={handleSaveData}>Save Data</button>
//       </div>
//     );
//   }
  
//   type TableProps = {
//     data: Info[];
//   };
  
//   function Table({ data }: TableProps) {
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((info, index) => (
//             <tr key={index}>
//               <td>{info.name}</td>
//               <td>{info.email}</td>
//               <td>{info.phone}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
  
