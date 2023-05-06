"use client";
import * as f from "@/components/Form";
import Button from "@/ui/Button";
import Header from "@/ui/Header";
import Input from "@/ui/Input";


const page = () => {
  return (
    <f.FormRoot
      className="w-full "
      //</>onSubmit={handleSubmit}
    >
        <div  className="flex flex-wrap ">
            <div className="w-full md:w-1/2 border-r-2 border-gray-700 px-4"> 
               
                {/* nmr_Inv */}

                <f.FormField name="nmr_Inv" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
                Nombre d{"'"}inventaire :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir le nombre d{"'"}inventaire
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un nombre d{"'"}inventaire valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="nmr_Inv"
                type="number"
                // onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                required
              />
            </f.FormControl>
          </f.FormField>
          {/* nom_Prof */}
          <f.FormField name="nom_Prof" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
                Nom de prof :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir le nom de prof
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un nom de prof valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="nom_Prof"
                type="text"
                // onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                required
              />
            </f.FormControl>
          </f.FormField>
          {/* nom_user */}
          <f.FormField name="nom_user" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
                Nom d{"'"}utilisateur :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir le nom d{"'"}utilisateur
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un nom d{"'"}utilisateur valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="nom_user"
                type="text"
                // onChange={(e) => setEmail(e.target.value)}
                maxLength={50}
                required
              />
            </f.FormControl>
          </f.FormField>
           {/* date_D */}
           <f.FormField name="date_D" className="w-full">
                    <div className="w-full">
                      <Header size={"md"} className="p">
                        Date début :
                      </Header>
                      <f.FormMessage match={"valueMissing"}>
                        saisir la date début
                      </f.FormMessage>
                      <f.FormMessage match={"typeMismatch"}>
                        saisir une date début valide
                      </f.FormMessage>
                    </div>
                    <f.FormControl asChild>
                      <Input
                        className="h-10"
                        name="date_D"
                        type="date"
                        // onChange={(e) => setEmail(e.target.value)}
                        maxLength={255}
                        required
                      />
                    </f.FormControl>
                </f.FormField>
            </div>
            <div className="w-full md:w-1/2 pl-4">
               
                {/* date_f */}  
                <f.FormField name="date_f" className="w-full">
                    <div className="w-full">
                      <Header size={"md"} className="p">
                        Date fin :
                      </Header>
                      <f.FormMessage match={"valueMissing"}>
                        saisir la date fin
                      </f.FormMessage>
                      <f.FormMessage match={"typeMismatch"}>
                        saisir une date fin valide
                      </f.FormMessage>
                    </div>
                    <f.FormControl asChild>
                      <Input
                        className="h-10"
                        name="date_f"
                        type="date"
                        // onChange={(e) => setEmail(e.target.value)}
                        maxLength={255}
                        required
                      />
                    </f.FormControl>
                </f.FormField>
                {/* date_R */}
                <f.FormField name="date_R" className="w-full">
                    <div className="w-full">
                      <Header size={"md"} className="p">
                        Date de retour :
                      </Header>
                      <f.FormMessage match={"valueMissing"}>
                        saisir la date de retour
                      </f.FormMessage>
                      <f.FormMessage match={"typeMismatch"}>
                        saisir une date de retour valide
                      </f.FormMessage>
                    </div>
                    <f.FormControl asChild>
                      <Input
                        className="h-10"
                        name="date_R"
                        type="date"
                        // onChange={(e) => setEmail(e.target.value)}
                        maxLength={255}
                        
                      />
                    </f.FormControl>
                </f.FormField>
                 {/* Observation */}
          <f.FormField name="observation" className="w-full">
            <div className="w-full">
              <Header size={"md"}>Observation :</Header>
              <f.FormMessage match={"valueMissing"}>
                saisir l{"'"}observation
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir l{"'"}observation valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <textarea
                cols={50}
                rows={5}
                name="observation"
                className="h-10 w-full bg-slate-200 border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg max-h-[120px]"
                
              />
            </f.FormControl>
          </f.FormField>

            </div>
        </div>
        <footer className="flex justify-center items-center py-12">
        <f.FormSubmit asChild>
          <Button size={"md"} className="bg-[#CA3CFF] text-white w-3/12">
            {""} Emprunter un livre pour un étudiant {""}
          </Button>
        </f.FormSubmit>
      </footer>
    </f.FormRoot>
  )
}

export default page