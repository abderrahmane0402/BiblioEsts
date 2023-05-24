import { removeExemplaire } from "@/db/Delete/exemplaire"

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await removeExemplaire(parseInt(params.id as string))
    return new Response("ok")
  } catch (e) {
    console.log(e)
    return new Response("error")
  }
}
