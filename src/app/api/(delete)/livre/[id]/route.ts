import { removeLivre } from "@/db/Delete/livre"
import { revalidatePath } from "next/cache"

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await removeLivre(parseInt(params.id as string))
    revalidatePath("/livre")
    return new Response("ok")
  } catch (e) {
    console.log(e)
    return new Response("error")
  }
}
