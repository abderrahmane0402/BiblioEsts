import { removeCat } from "@/db/Delete/categorie"
import { removeUser } from "@/db/Delete/utilisateur"
import { revalidatePath } from "next/cache"

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await removeUser(parseInt(params.id as string))
    revalidatePath("/utilisateur")
    return new Response("ok")
  } catch (e) {
    console.log(e)
    return new Response("error")
  }
}
