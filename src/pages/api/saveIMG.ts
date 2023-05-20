import { NextApiHandler } from "next"
import formidable from "formidable"
import path from "path"
import fs from "fs/promises"
import { getLivre } from "@/db/Get/Livres"

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler: NextApiHandler = async (req, res) => {

  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/img"))
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/img"))
  }
  
  const options: formidable.Options = {
    uploadDir: path.join(process.cwd(), "/public/img"),
    filename: (name, ext, path, form) => {
      return Date.now().toString() + "_" + path.originalFilename
    },
  }
  const form = formidable(options)
  form.on("fileBegin", function (name, file) {
    res.json({ id: file.newFilename })
  })
  form.parse(req)
}

export default handler


// import { NextApiRequest, NextApiResponse } from 'next';
// import prisma from '../../lib/prisma';
// import formidable from 'formidable';
// import fs from 'fs/promises';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
