import { removeEpfe } from "@/db/Delete/emprunt/etudiant/Epfe";
import { revalidatePath } from "next/cache";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await removeEpfe(parseInt(params.id as string))
    revalidatePath("/emprunt/etudiant/pfe/encours");
    revalidatePath("/emprunt/etudiant/pfe/historique");
    return new Response("ok")
  } catch (e) {
    console.log(e)
    return new Response("error")
  }
}
