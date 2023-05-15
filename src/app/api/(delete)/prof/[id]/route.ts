import { removeProf } from "@/db/Delete/prof"
import { revalidatePath } from "next/cache"

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await removeProf(parseInt(params.id as string))
    revalidatePath("/prof")
    return new Response("ok")
  } catch (e) {
    console.log(e)
    return new Response("error")
  }
}
