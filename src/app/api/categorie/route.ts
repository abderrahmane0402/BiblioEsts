import { getCategories_Select } from "@/db/Get/Categorie";

export async function GET(request: Request) {
  const data = await getCategories_Select();
  return new Response(JSON.stringify(data));
}
