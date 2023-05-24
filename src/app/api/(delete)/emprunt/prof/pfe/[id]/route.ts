import { removePpfe } from "@/db/Delete/emprunt/prof/Ppfe";
import { revalidatePath } from "next/cache";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await removePpfe(parseInt(params.id as string))
    revalidatePath("/emprunt/prof/pfe/encours");
    revalidatePath("/emprunt/prof/pfe/historique");
    return new Response("ok")
  } catch (e) {
    console.log(e)
    return new Response("error")
  }
}
