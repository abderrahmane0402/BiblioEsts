import Header from "@/components/ui/Header";
import * as f from "@/components/Form";
import Input from "@/components/ui/Input";
import InputSelect from "@/components/ui/Select";
import Button from "@/components/ui/Button";

function Page() {
  return (
    <div className="overflow-auto w-full h-full">
      <f.FormRoot className="w-full">
        <Header size={"lg"}>Information de Entreprise</Header>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 border-r-2 border-gray-700 px-4">
            {/* N d'approvisionnement */}
            <f.FormField name="n_apro" className="w-full">
              <div className="w-full">
                <Header size={"md"} className="p">
                  N d&apos;approvisionnement :
                </Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir le numero
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir un nombre valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-10"
                  name="n_apro"
                  type="number"
                  maxLength={255}
                  required
                />
              </f.FormControl>
            </f.FormField>
            {/* Nom d'Entreprise */}
            <f.FormField name="entreprise" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Nom d&apros;entreprise :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir un nom
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir l{"'"}nom valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-10"
                  name="entreprise"
                  type="text"
                  required
                />
              </f.FormControl>
            </f.FormField>

            {/* Address */}

            <f.FormField name="address" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Address :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir l&apos;address
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir address valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input className="h-10" name="address" type="text" required />
              </f.FormControl>
            </f.FormField>

            {/* Telephone ou fix */}
            <f.FormField name="telephone" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Telephone ou fix :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir le numero
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir un numero valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input className="h-10" name="telephone" type="text" required />
              </f.FormControl>
            </f.FormField>
            {/* Date */}
            <f.FormField name="date" className="w-full">
              <div className="w-full">
                <div className="w-full">
                  <Header size={"md"}>Date :</Header>
                  <f.FormMessage match={"valueMissing"}>
                    saisir la date
                  </f.FormMessage>
                  <f.FormMessage match={"typeMismatch"}>
                    saisir la date valide
                  </f.FormMessage>
                </div>
                <f.FormControl asChild>
                  <Input className="h-10" name="date" type="date" required />
                </f.FormControl>
              </div>
            </f.FormField>
            {/* Devis */}
            <f.FormField name="devis" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Devis :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir un numero
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir un numero valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input className="h-10" name="devis" type="number" required />
              </f.FormControl>
            </f.FormField>
          </div>
        </div>

        <f.FormSubmit asChild>
          <Button size={"md"} className="bg-[#CA3CFF] text-white w-3/12">
            {""} envoyer livre {""}
          </Button>
        </f.FormSubmit>
      </f.FormRoot>
    </div>
  );
}

export default Page;
