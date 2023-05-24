import { removePlivre } from "@/db/Delete/emprunt/prof/Plive";
import { revalidatePath } from "next/cache";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await removePlivre(parseInt(params.id as string))
    revalidatePath("/emprunt/prof/livre/encours");
    revalidatePath("/emprunt/prof/livre/historique");
    return new Response("ok")
  } catch (e) {
    console.log(e)
    return new Response("error")
  }
}
