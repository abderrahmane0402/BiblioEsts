import { ConfirmeElivre } from "@/db/Put/emprunt/etudiant/Elivre";

export async function PUT(req: Request) {
  try {
    const { id } = await req.json();
    const date = new Date();
    ConfirmeElivre(date, id);
    return new Response(JSON.stringify({ etat: true }));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ etat: false }));
  }
}
