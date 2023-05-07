"use client";
import { useState } from "react";
import * as f from "@/components/Form";
import Button from "@/ui/Button";
import Header from "@/ui/Header";
import Input from "@/ui/Input";
import { useImmer } from "use-immer";
import { LivreColumns } from "@/data/tableColumns";
import DataTable from "@/components/DataTable";

type Info = {
  origin: {
    nbr_inv: string;
    title: string;
    autheur: string;
    editeur: string;
    date_edi: string;
    code: string;
    page_garde: string;
    observation: string;
  };
  exemplaire: {
    nbr_invEX: string;
    title: string;
    autheur: string;
    editeur: string;
    date_edi: string;
    code: string;
    page_garde: string;
    observationEX: string;
  };
};

const Page = () => {
  const [livre, setLivre] = useImmer({
    origine: {
      nbr_inv: "",
      title: "",
      autheur: "",
      editeur: "",
      date_edi: "",
      code: "",
      page_garde: "",
      observation: "",
    },
    exemplaire: {
      nbr_invEX: "",
      title: "",
      autheur: "",
      editeur: "",
      date_edi: "",
      code: "",
      page_garde: "",
      observationEX: "",
    },
  });
  function handle_NbrInvEx_Change(e: React.ChangeEvent<HTMLInputElement>) {
    setLivre((draft) => {
      draft.exemplaire.nbr_invEX = e.target.value;
    });
  }
  function handle_ObservationEX_Change(
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setLivre((draft) => {
      draft.exemplaire.observationEX = e.target.value;
    });
  }

  function handle_NbrInv_Change(e: React.ChangeEvent<HTMLInputElement>) {
    setLivre((draft) => {
      draft.origine.nbr_inv = e.target.value;
    });
  }
  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLivre((draft) => {
      draft.origine.title = e.target.value;
    });
  }
  function handleAutheurChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLivre((draft) => {
      draft.origine.autheur = e.target.value;
    });
  }
  function handleEditeurChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLivre((draft) => {
      draft.origine.editeur = e.target.value;
    });
  }
  function handleDateEdiChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLivre((draft) => {
      draft.origine.date_edi = e.target.value;
    });
  }
  function handleCodeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLivre((draft) => {
      draft.origine.code = e.target.value;
    });
  }
  function handlePageGardeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLivre((draft) => {
      draft.origine.page_garde = e.target.value;
    });
  }
  function handleObservationChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setLivre((draft) => {
      draft.origine.observation = e.target.value;
    });
  }
  const [livreList, setLivreList] = useState<Info[]>([]);

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const newOrigine = {
      nbr_inv: livre.origine.nbr_inv,
      title: livre.origine.title,
      autheur: livre.origine.autheur,
      editeur: livre.origine.editeur,
      date_edi: livre.origine.date_edi,
      code: livre.origine.code,
      page_garde: livre.origine.page_garde,
      observation: livre.origine.observation,
    };
    console.log(newOrigine);
    setLivreList([
      ...livreList,
      {
        origin: { ...livre.origine, ...newOrigine },
        exemplaire: livre.exemplaire,
      },
    ]);
    setLivre((draft) => {
      draft.origine.nbr_inv = "";
      draft.origine.title = "";
      draft.origine.autheur = "";
      draft.origine.editeur = "";
      draft.origine.date_edi = "";
      draft.origine.code = "";
      draft.origine.page_garde = "";
      draft.origine.observation = "";
    });
  }
  function handleSubmitEx(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const newExemplaire = {
      nbr_invEX: livre.exemplaire.nbr_invEX,
      title: livre.origine.title,
      autheur: livre.origine.autheur,
      editeur: livre.origine.editeur,
      date_edi: livre.origine.date_edi,
      code: livre.origine.code,
      page_garde: livre.origine.page_garde,
      observationEX: livre.exemplaire.observationEX,
    };
    setLivreList([
      ...livreList,
      {
        origin: livre.origine,
        exemplaire: { ...livre.exemplaire, ...newExemplaire },
      },
    ]);
   
    
    setLivre((draft) => {
      draft.exemplaire.nbr_invEX = "";
      draft.exemplaire.title = "";
      draft.exemplaire.autheur = "";
      draft.exemplaire.editeur = "";
      draft.exemplaire.date_edi = "";
      draft.exemplaire.code = "";
      draft.exemplaire.page_garde = "";
      draft.exemplaire.observationEX = "";
    });
  }

  const rows = livreList.map((info, index) => ({ id: index, ...info }));

  return (
    <>
      <f.FormRoot
        className="w-full "
        //</>onSubmit={handleSubmit}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2 border-r-2 border-gray-700 px-4">
            {/* nombre_inv */}
            <f.FormField name="nbr_inv" className="w-full">
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
                  name="nbr_inv"
                  type="number"
                  // onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  required
                  value={livre.origine.nbr_inv}
                  onChange={handle_NbrInv_Change}
                />
              </f.FormControl>
            </f.FormField>
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
                  value={livre.origine.title}
                  onChange={handleTitleChange}
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
                  value={livre.origine.autheur}
                  onChange={handleAutheurChange}
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
                  value={livre.origine.editeur}
                  onChange={handleEditeurChange}
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
                  maxLength={50}
                  required
                  value={livre.origine.date_edi}
                  onChange={handleDateEdiChange}
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
                  value={livre.origine.code}
                  onChange={handleCodeChange}
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
                  value={livre.origine.page_garde}
                  onChange={handlePageGardeChange}
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
                  value={livre.origine.observation}
                  onChange={handleObservationChange}
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

      <Header>Ajouter un exemplaire</Header>
      <f.FormRoot
        className="w-full "
        //</>onSubmit={handleSubmit}
        onSubmit={handleSubmitEx}
      >
        {/* nombre_inv_exemplaire */}
        <f.FormField name="nbr_invEX" className="w-full">
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
              name="nbr_invEX"
              type="text"
              // onChange={(e) => setEmail(e.target.value)}
              maxLength={255}
              required
              value={livre.exemplaire.nbr_invEX}
              onChange={handle_NbrInvEx_Change}
            />
          </f.FormControl>
        </f.FormField>
        {/* Observation_EXemplaire */}
        <f.FormField name="observationEX" className="w-full">
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
              name="observationEX"
              className="h-10 w-full bg-slate-200 border-2 border-blue-700/50 hover:border-blue-700  focus:border-blue-700 focus:outline-none rounded-md p-2 font-thin text-lg max-h-[120px]"
              value={livre.exemplaire.observationEX}
              onChange={handle_ObservationEX_Change}
            />
          </f.FormControl>
        </f.FormField>
      </f.FormRoot>

      <DataTable rows={rows} columns={LivreColumns} />

      <f.FormSubmit asChild>
        <Button size={"md"} className="bg-[#CA3CFF] text-white w-3/12">
          {""} envoyer livre {""}
        </Button>
      </f.FormSubmit>
    </>
  );
};

export default Page;
