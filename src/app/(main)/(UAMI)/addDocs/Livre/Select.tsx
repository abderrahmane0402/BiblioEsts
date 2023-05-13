import InputSelect from "@/components/ui/Select";


export default async function Select() {
  const data: any = (
    await fetch("/api/categorie", { next: { tags: ["categorie"] } })
  ).json();

  return (
    <InputSelect
      options={data}
      autoWidth={false}
      multiple={false}
      native={false}
    />
  );
}
