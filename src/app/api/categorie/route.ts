import { getCategories_Select } from "@/db/Get/Categorie";

export async function POST(request: Request) {
  const data = await getCategories_Select();
  return new Response(JSON.stringify(data));
}
