import path from "path";
import fs from "fs/promises";

export  async function DELETE(
  req: Request,
  { params }: { params: { fileName: string } }
) {
  
  const filePath = path.join(process.cwd(), "/public/img", params.fileName);
  try {
    await fs.unlink(filePath);
    // await fs.unlink(filePath);
    console.log(`${params.fileName} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting ${params.fileName}:`, error);
  }
}
