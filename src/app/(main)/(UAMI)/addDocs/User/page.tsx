import * as f from "@/components/Form";
import Header from "@/ui/Header";
import Input from "@/ui/Input";
import Form from "./form";

const page = () => {
  return (
    <Form>
      {/* Nom */}
      <f.FormField name="nom_user" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Nom :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le nom</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un nom valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className="h-10" name="nom_user" type="text" required />
        </f.FormControl>
      </f.FormField>
      {/* prenom */}
      <f.FormField name="prenom_user" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Prenom :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le prenom</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un prenom valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className="h-10" name="prenom_user" type="text" required />
        </f.FormControl>
      </f.FormField>
      {/* telephone */}
      <f.FormField name="telep_user" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Telephone :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le numero de telephone{" "}
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un numero de telephone valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className="h-10" name="telep_user" type="number" required />
        </f.FormControl>
      </f.FormField>
      {/* email  */}
      <f.FormField name="email_user" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Login :
          </Header>
          <f.FormMessage match={"valueMissing"}>saisir le Login</f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un Login valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input className="h-10" name="email_user" type="text" required />
        </f.FormControl>
      </f.FormField>
      {/* password */}
      <f.FormField name="password_user" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            Mot de passe :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le mot de passe
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un mot de passe valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className="h-10"
            name="password_user"
            type="password"
            required
          />
        </f.FormControl>
      </f.FormField>
      <f.FormField name="confirmation" className="w-full">
        <div className="w-full">
          <Header size={"md"} className="p">
            confirmation du mot de passe :
          </Header>
          <f.FormMessage match={"valueMissing"}>
            saisir le mot de passe
          </f.FormMessage>
          <f.FormMessage match={"typeMismatch"}>
            saisir un mot de passe valide
          </f.FormMessage>
        </div>
        <f.FormControl asChild>
          <Input
            className="h-10"
            name="confirmation"
            type="password"
            required
          />
        </f.FormControl>
      </f.FormField>
    </Form>
  );
};

export default page;
