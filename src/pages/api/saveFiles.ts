import { NextApiHandler } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler: NextApiHandler = async (req, res) => {
  let id;
  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/img"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/img"));
  }
  const options: formidable.Options = {
    uploadDir: path.join(process.cwd(), "/public/img"),
    filename: (name, ext, path, form) => {
      id = Date.now().toString() + "_" + path.originalFilename;
      return id;
    },
  };
  const form = formidable(options);
  //   await new Promise((resolve, reject) => {
  //     form.parse(req, (err, fields, files) => {
  //       if (err) reject(err);
  //       resolve({ fields, files });
  //     });
  //   });
  form.parse(req);
  res.json({ id: 123 });
};

export default handler;
