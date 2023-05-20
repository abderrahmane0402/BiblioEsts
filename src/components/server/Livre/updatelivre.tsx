"use server";
import { getLivre } from "@/db/Get/Livres";
import { PutLivres } from "@/db/Put/Livre";
import { Prisma, livre } from "@prisma/client";
import { log } from "console";

export default async function updateLivre(data: FormData, id: number) {
  try {
    const livredel = await getLivre(id);
    let imageName;
    let pdfName;
    const fs = require('fs');

    // const imagePath = data.get("page_garde") ;
    // const imageBuffer = fs.readFileSync(imagePath);
    //   console.log("zaza"+imageBuffer+"zaza");
        







    if (data.get("somaire")) {
      await fetch(`http://localhost:3000/api/deletePDF/${livredel?.SOMAIRE}`, {
        method: "DELETE",
        cache: "no-store",
      });

      const pdf = new FormData();
      pdf.append("pdf", data.get("somaire") as string);
      const pdfRes = await fetch("http://localhost:3000/api/savePDF", {
        method: "POST",
        body: pdf,
        cache: "no-store",
      });
      pdfName = await pdfRes.json();
      pdfName = pdfName.id;
    } else {
      imageName = livredel?.SOMAIRE;
    }

    if (data.get("page_garde")) {
      await fetch(
        `http://localhost:3000/api/deleteIMG/${livredel?.PAGE_DE_GARDE}`,
        {
          method: "DELETE",
          cache: "no-store",
        }
      );
      const img = new FormData();
      img.append("image", data.get("page_garde") as string);
      const res = await fetch("http://localhost:3000/api/saveIMG", {
        method: "POST",
        body: img,
        cache: "no-store",
      });
      imageName = await res.json();
      imageName = imageName.id;
    } else {
      imageName = livredel?.PAGE_DE_GARDE;
    }

    const livre: livre = {
      ID_LIVRE: id,
      TITRE: data.get("title") as string,
      AUTHEUR: data.get("autheur") as string,
      EDITEUR: data.get("editeur") as string,
      DATE_EDITION: Number(data.get("date_edi") as string),
      PRIX: new Prisma.Decimal(parseFloat(data.get("prix")!.toString())),
      ID_CAT: Number(data.get("categorie")) as number,
      CODE: data.get("code") ? Number(data.get("code") as string) : null,
      OBSERVATIONL: data.get("observation") as string,
      PAGE_DE_GARDE: `${imageName}` as string,
      SOMAIRE: `${pdfName}` as string,
    };

    await PutLivres(id, livre);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// import { NextApiRequest, NextApiResponse } from 'next';
// import prisma from '../../lib/prisma';
// import formidable from 'formidable';
// import fs from 'fs/promises';

// // export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const form = new formidable.IncomingForm();

//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Error uploading image' });
//     }

//     const { name, path } = files.image;

//     try {
//       // Read the image file as a buffer
//       const imageBuffer = await fs.readFile(path);

//       // Save the image in the database
//       await prisma.image.create({
//         data: {
//           name,
//           data: imageBuffer
//         }
//       });

//       res.status(200).json({ message: 'Image uploaded successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Error uploading image' });
//     }
//   });
// }
