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
      <div className="flex flex-wrap ">
        <div className="w-full md:w-1/2 border-r-2 border-gray-700 px-4">
          <f.FormField name="title" className="w-full">
            <div className="w-full">
              <Header size={"md"} className="p">
                Titre :
              </Header>
              <f.FormMessage match={"valueMissing"}>
                saisir le titre
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir un titre valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="title"
                type="text"
                // onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                required
              />
            </f.FormControl>
          </f.FormField>
          {/* autheur */}
          <f.FormField name="autheur" className="w-full">
            <div className="w-full">
              <Header size={"md"}>Autheur :</Header>
              <f.FormMessage match={"valueMissing"}>
                saisir l{"'"}autheur
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir l{"'"}autheur valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="autheur"
                type="text"
                // onChange={(e) => setEmail(e.target.value)}
                maxLength={50}
                required
              />
            </f.FormControl>
          </f.FormField>

          {/* Editeur */}

          <f.FormField name="editeur" className="w-full">
            <div className="w-full">
              <Header size={"md"}>Editeur :</Header>
              <f.FormMessage match={"valueMissing"}>
                saisir l{"'"}éditeur
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir l{"'"}éditeur valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="editeur"
                type="text"
                // onChange={(e) => setEmail(e.target.value)}
                maxLength={50}
                required
              />
            </f.FormControl>
          </f.FormField>

          {/* Date edition */}

          <f.FormField name="date_edi" className="w-full">
            <div className="w-full">
              <Header size={"md"}>Date d{"'"}édition :</Header>
              <f.FormMessage match={"valueMissing"}>
                saisir la date d{"'"}édition
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir la date d{"'"}édition valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="date_edi"
                type="date"
                // onChange={(e) => setEmail(e.target.value)}
                maxLength={50}
                required
              />
            </f.FormControl>
          </f.FormField>
        </div>
        <div className="w-full md:w-1/2 pl-4">
          {/* Code */}
          <f.FormField name="code" className="w-full">
            <div className="w-full">
              <Header size={"md"}>Code :</Header>
              <f.FormMessage match={"valueMissing"}>
                saisir le code
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                saisir le code valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-10"
                name="code"
                type="number"
                // onChange={(e) => setEmail(e.target.value)}
                maxLength={50}
                required
              />
            </f.FormControl>
          </f.FormField>
          {/* page de garde */}
          <f.FormField name="page_garde" className="w-full">
            <div className="w-full">
              <Header size={"md"}>Page de garde :</Header>
              <f.FormMessage match={"valueMissing"}>
                Entrer l{"'"}page de garde
              </f.FormMessage>
              <f.FormMessage match={"typeMismatch"}>
                entrer l{"'"}page de garde valide
              </f.FormMessage>
            </div>
            <f.FormControl asChild>
              <Input
                className="h-12"
                name="page_garde"
                type="file"
                // onChange={(e) => setEmail(e.target.value)}
                maxLength={50}
                required
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

          {/* khassna nzido input dyal categorie  */}
        </div>
      </div>
      <footer className="flex justify-center items-center py-12">
        <f.FormSubmit asChild>
          <Button size={"md"} className="bg-[#CA3CFF] text-white w-3/12">
            {""} Ajouter un livre {""}
          </Button>
        </f.FormSubmit>
      </footer>
    </f.FormRoot>
  );
};

export default page;
