import * as f from "@/components/Form";
import Header from "@/components/ui/Header";
import Input from "@/components/ui/Input";
import InputSelect from "@/components/ui/Select";
import { getAppro } from "@/db/Get/Appro";
import { getFournisseurShort } from "@/db/Get/Fournisseur";
import { getNinv } from "@/db/Get/Livres";
import { getDate } from "@/utils/date";
import { Table } from "./ShowLivre";
import Form from "./form";

async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  const [fournisseur, livre, apro] = await Promise.all([
    getFournisseurShort(),
    getNinv(),
    getAppro(id),
  ]);
  let options = fournisseur.map((f) => {
    return {
      ID_CAT: f.ID_FOR,
      LIBELLE: f.ID_FOR + " " + f.NOM + " " + f.PRENOM,
    };
  });
  const Livre = apro?.contient.map((l) => {
    return {
      ID_LIVRE: l.livre.ID_LIVRE,
      TITRE: l.livre.TITRE,
      AUTHEUR: l.livre.AUTHEUR,
      EDITEUR: l.livre.EDITEUR,
      categorie: l.livre.categorie.LIBELLE,
      CODE: l.livre.CODE,
      DATE_EDITION: l.livre.DATE_EDITION,
      PRIX: l.livre.PRIX?.toString(),
      QTE: l.QTE,
    };
  });
  return (
    <div className="overflow-auto w-full h-full">
      <Form id={id}>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 border-r-2 border-gray-700 px-4">
            {/* N d'approvisionnement */}
            <f.FormField name="appro" className="w-full">
              <div className="w-full">
                <Header size={"md"} className="p">
                  N d{"'"}approvisionnement :
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
                  name="appro"
                  type="number"
                  maxLength={255}
                  required
                  defaultValue={apro?.ID_APRO as number}
                />
              </f.FormControl>
            </f.FormField>
            {/* Nom d'Entreprise */}
            <f.FormField name="entreprise" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Nom d{"'"}entreprise :</Header>
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
                  defaultValue={apro?.ENTREPRISE as string}
                />
              </f.FormControl>
            </f.FormField>

            {/* Address */}

            <f.FormField name="addresse" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Addresse :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir l&apos;addresse
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir addresse valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-10"
                  name="addresse"
                  type="text"
                  required
                  defaultValue={apro?.ADRESSE as string}
                />
              </f.FormControl>
            </f.FormField>

            {/* Telephone ou fix */}
            <f.FormField name="tele" className="w-full">
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
                <Input
                  className="h-10"
                  name="tele"
                  type="text"
                  required
                  defaultValue={apro?.TELEPHONE as string}
                />
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
                  <Input
                    className="h-10"
                    name="date"
                    type="date"
                    required
                    defaultValue={getDate(apro?.DATE) || ""}
                  />
                </f.FormControl>
              </div>
            </f.FormField>
            {/* Devis */}
            <f.FormField name="devis" className="w-full">
              <div className="w-full">
                <Header size={"md"}>Devis :</Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir un devis
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir un devis valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-10"
                  name="devis"
                  type="number"
                  required
                  defaultValue={parseFloat(apro!.DEVIS!.toString())}
                />
              </f.FormControl>
            </f.FormField>
          </div>
          <div className="w-full md:w-1/2 border-gray-700 px-4">
            {/* fournisseur */}

            <Header size={"md"}>Fournisseur :</Header>

            <div className="flex gap-2 items-center justify-center">
              <f.FormField name="fournisseur" className="w-full">
                <div className="w-full">
                  <f.FormMessage match={"valueMissing"}>
                    saisir une fournisseur
                  </f.FormMessage>
                  <f.FormMessage match={"typeMismatch"}>
                    saisir la fournisseur valide
                  </f.FormMessage>
                </div>
                <f.FormControl asChild>
                  <InputSelect
                    options={options}
                    autoWidth={false}
                    multiple={false}
                    native={false}
                    defaultValue={apro?.ID_FOR.toString()}
                  />
                </f.FormControl>
              </f.FormField>
            </div>
            <f.FormField name="nom" className="w-full">
              <div className="w-full">
                <Header size={"md"} className="p">
                  Nom :
                </Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir le nom
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir un nom valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-10"
                  name="nom"
                  type="text"
                  defaultValue={apro?.fournisseur?.NOM as string}
                  required
                />
              </f.FormControl>
            </f.FormField>

            {/* Prenom */}
            <f.FormField name="prenom" className="w-full">
              <div className="w-full">
                <Header size={"md"} className="p">
                  Prenom :
                </Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir le prenom
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir un prenom valide
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  className="h-10"
                  name="prenom"
                  type="text"
                  defaultValue={apro?.fournisseur?.PRENOM as string}
                  required
                />
              </f.FormControl>
            </f.FormField>

            {/* email */}
            <f.FormField name="email" className="w-full">
              <div className="w-full">
                <Header size={"md"} className="p">
                  email :
                </Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir la email
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir une email
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  type="email"
                  name="email"
                  defaultValue={apro?.fournisseur?.GMAIL as string}
                  className="h-10"
                />
              </f.FormControl>
            </f.FormField>

            {/* adresse */}
            <f.FormField name="adresse" className="w-full">
              <div className="w-full">
                <Header size={"md"} className="p">
                  adresse :
                </Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir la adresse
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir une adresse
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  type="text"
                  name="adresse"
                  defaultValue={apro?.fournisseur?.ADDRESSE as string}
                  className="h-10"
                />
              </f.FormControl>
            </f.FormField>

            {/* telephone */}
            <f.FormField name="telephone" className="w-full">
              <div className="w-full">
                <Header size={"md"} className="p">
                  telephone :
                </Header>
                <f.FormMessage match={"valueMissing"}>
                  saisir la telephone
                </f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir une telephone
                </f.FormMessage>
              </div>
              <f.FormControl asChild>
                <Input
                  type="text"
                  name="tele"
                  defaultValue={
                    apro?.fournisseur?.TELEPHONE as unknown as string
                  }
                  className="h-10"
                />
              </f.FormControl>
            </f.FormField>
          </div>
          
        </div>
        <br />
        <div className="w-full bg-slate-400 rounded-xl">
            <Table data={Livre} />
          </div>
      </Form>
    </div>
  );
}

export default Page;
