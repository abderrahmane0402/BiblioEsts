
import * as f from "@/components/Form";
import { setUser } from "@/db/Post/Utilisateur";
import Button from "@/ui/Button";
import Header from "@/ui/Header";
import Input from "@/ui/Input";
import { utilisateur } from "@prisma/client";

async function addUser(data: FormData) {
  "use server";
  const User = {
    NOM: data.get("nom_user") as string  || null,
    PRENOM: data.get("prenom_user") as string  || null,
    TELEPHONE: data.get("telep_user") ? Number(data.get("telep_user") as string) : null,
    LOGIN: data.get("login_user") as string  || null, // Assign the login value if available
    PASSWORD: data.get("password_user") as string  || null, // Assign the password value if available
  };
  
  
  
    await setUser(User);
  //console.log(await setPfe(Pfe));
  
}



const page = () => {
  return (
    <f.FormRoot
      className="w-full "
      //</>onSubmit={handleSubmit}
      action={addUser}
    >
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
          <Input
            className="h-10"
            name="nom_user"
            type="text"
            // onChange={(e) => setEmail(e.target.value)}
            maxLength={20}
            
          />
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
              <Input
                className="h-10"
                name="prenom_user"
                type="text"
                // onChange={(e) => setEmail(e.target.value)}
                maxLength={20}
                
              />
            </f.FormControl>
          </f.FormField>
          {/* telephone */}
          <f.FormField name="telep_user" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
              Telephone :
              </Header>
              <f.FormMessage match={"valueMissing"}>saisir le numero de telephone </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un numero de telephone valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="telep_user"
                type="number"
                // onChange={(e) => setEmail(e.target.value)}
                maxLength={10}
                
              />
            </f.FormControl>
          </f.FormField>
          {/* email  */}
          <f.FormField name="email_user" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
              Email :
              </Header>
              <f.FormMessage match={"valueMissing"}>saisir le email</f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un email valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="email_user"
                type="email"
                // onChange={(e) => setEmail(e.target.value)}
                maxLength={20}
                
              />
            </f.FormControl>
          </f.FormField>
          {/* password */}
          <f.FormField name="password_user" className="w-full">
             
            <div className="w-full">
                <Header size={"md"} className="p">
                Mot de passe :
                </Header>
                <f.FormMessage match={"valueMissing"}>saisir le mot de passe</f.FormMessage>
                <f.FormMessage match={"typeMismatch"}>
                  saisir un mot de passe valide
                </f.FormMessage>
            </div>
            <f.FormControl asChild>
                <Input
                  className="h-10"
                  name="password_user"
                  type="password"
                  // onChange={(e) => setEmail(e.target.value)}
                  maxLength={20}
                  
                />
            </f.FormControl>
          </f.FormField>
          <footer className="flex justify-center items-center py-12">
        <f.FormSubmit asChild>
          <Button size={"md"} className="bg-[#CA3CFF] text-white w-3/12">
            {""} Ajouter un utilisateur {""}
          </Button>
        </f.FormSubmit>
      </footer>
    </f.FormRoot>
  )
}

export default page