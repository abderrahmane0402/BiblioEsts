import { ConfirmeEpfe } from "@/db/Put/emprunt/etudiant/Epfe";

export async function PUT(req: Request) {
  try {
    const { id } = await req.json();
    const date = new Date();
    ConfirmeEpfe(date, id);
    return new Response(JSON.stringify({ etat: true }));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ etat: false }));
  }
}
