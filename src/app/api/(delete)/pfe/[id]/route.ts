import { removePFE } from "@/db/Delete/pfe"
import { revalidatePath } from "next/cache"

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await removePFE(params.id as string)
    
    return new Response("ok")
  } catch (e) {
    console.log(e)
    return new Response("error")
  }
}
