import { removeElivre } from "@/db/Delete/emprunt/etudiant/Elivre";
import { revalidatePath } from "next/cache";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await removeElivre(parseInt(params.id as string))
    revalidatePath("/emprunt/etudiant/livre/encours");
    revalidatePath("/emprunt/etudiant/livre/historique");
    return new Response("ok")
  } catch (e) {
    console.log(e)
    return new Response("error")
  }
}
