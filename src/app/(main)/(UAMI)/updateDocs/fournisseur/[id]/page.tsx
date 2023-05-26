import * as f from "@/components/Form";
import Input from "@/ui/Input";
import Form from "./form";
import { getFournisseur } from "@/db/Get/Fournisseur";
import Header from "@/components/mui/MuiHeader";

export const dynamic = "force-dynamic";

const page = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);
  const four = await getFournisseur(id);
  return (
    <Form id={id}>
      {/* Nom */}
      <f.FormField name="nom" className="w-full">
        <div className="w-full">
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Nom :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le nom</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un nom valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className="h-10"
            name="nom"
            type="text"
            defaultValue={four?.NOM as string}
            required
          />
        </f.FormControl>
      </f.FormField>

      {/* Prenom */}
      <f.FormField name="prenom" className="w-full">
        <div className="w-full">
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Prenom :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le prenom</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un prenom valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className="h-10"
            name="prenom"
            type="text"
            defaultValue={four?.PRENOM as string}
            required
          />
        </f.FormControl>
      </f.FormField>

      {/* email */}
      <f.FormField name="email" className="w-full">
        <div className="w-full">
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Email :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir la email</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>saisir une email</f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            type="email"
            name="email"
            defaultValue={four?.GMAIL as string}
            className="h-10"
          />
        </f.FormControl>
      </f.FormField>

      {/* adresse */}
      <f.FormField name="adresse" className="w-full">
        <div className="w-full">
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Adresse :
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
            defaultValue={four?.ADDRESSE as string}
            className="h-10"
          />
        </f.FormControl>
      </f.FormField>

      {/* telephone */}
      <f.FormField name="telephone" className="w-full">
        <div className="w-full">
            <Header variant="h6" sx={{ fontSize: "1.4993rem" , color: "#3a3541de" , display:'flex' , alignItems:'center' }}>
            Téléphone :
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
            defaultValue={four?.TELEPHONE as unknown as string}
            className="h-10"
          />
        </f.FormControl>
      </f.FormField>
    </Form>
  );
};

export default page;
