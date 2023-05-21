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
    await fs.readdir(path.join(process.cwd() + "/public/static", "/img"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public/static", "/img"));
  }
  
  const options: formidable.Options = {
    uploadDir: path.join(process.cwd(), "/public/static/img"),
    filename: (name, ext, path, form) => {
      return Date.now().toString() + "_" + path.originalFilename;
    },
  };
  const form = formidable(options);
  form.on("fileBegin", function (name, file) {
    res.json({ id: file.newFilename });
  });
  form.parse(req);
};

export default handler;
