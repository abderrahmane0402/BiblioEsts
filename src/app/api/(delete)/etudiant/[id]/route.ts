import { removeEtudiant } from "@/db/Delete/etudiant"
import { revalidatePath } from "next/cache"

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await removeEtudiant(parseInt(params.id as string))
    revalidatePath("/etudiant")
    return new Response("ok")
  } catch (e) {
    console.log(e)
    return new Response("error")
  }
}
