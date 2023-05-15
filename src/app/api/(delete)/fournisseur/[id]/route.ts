import { removeFourni } from "@/db/Delete/fournisseur";
import { revalidatePath } from "next/cache";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await removeFourni(parseInt(params.id as string));
    revalidatePath("/fournisseur");
    return new Response("ok");
  } catch (e) {
    console.log(e);
    return new Response("error");
  }
}
