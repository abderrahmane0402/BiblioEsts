import { ConfirmePlivre } from "@/db/Put/emprunt/prof/Plivre";

export async function PUT(req: Request) {
  try {
    const { id } = await req.json();
    const date = new Date();
    ConfirmePlivre(date, id);
    return new Response(JSON.stringify({ etat: true }));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ etat: false }));
  }
}
