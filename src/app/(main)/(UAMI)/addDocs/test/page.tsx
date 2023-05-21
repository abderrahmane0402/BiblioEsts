"use client"

import { ChangeEvent } from "react";

function Page() {
  

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    
    // setBaseImage();
  };

  const convertBase64 = (file : any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div >
      <input
        type="file"
        name="str"
        onChange={(e) => {
          uploadImage(e);
        }}
      />
     
    </div>
  );
}

export default Page;


// async function convertFileToBase64(file: any): Promise<string> {
//     return new Promise<string>((resolve, reject) => {
//       const fileReader = new FileReader();
  
//       fileReader.onload = () => {
//         const base64String = fileReader.result as string;
//         resolve(base64String);
//       };
  
//       fileReader.onerror = () => {
//         reject(new Error('Failed to convert file to base64'));
//       };
  
//       fileReader.readAsDataURL(file);
//     });
//   }
//   const img = convertFileToBase64(data.get("page_garde")  );
//   console.log(img);
  