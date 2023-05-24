import { removeAppro } from "@/db/Delete/appro";
import { removeCat } from "@/db/Delete/categorie";
import { revalidatePath } from "next/cache";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await removeAppro(parseInt(params.id as string));
    revalidatePath("/categorie");
    return new Response("ok");
  } catch (e) {
    console.log(e);
    return new Response("error");
  }
}
